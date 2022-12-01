---
NEP: 53
Title: "Encrypted Variable Token Proposal (NRC-53)"
Authors: "Newton Core Team"
Discussions: https://github.com/newtonproject/NEPs/issues/53
Status: Draft
Categories: Technical
Types: NRC
Created: 2022-07-01
---

## Simple Summary

A standard interface for encrypted variable tokens.

## Abstract

EVT(Encrypted Variable Token) is the replacement of NFT in metaverse and physical world.

The key features of EVT are variableness, encryption, traceability. 

The following standard allows for the implementation of a standard API for EVTs within smart contracts. This standard provides basic functionality to track, transfer, dynamic properties, encryption. 

We considered the use cases of EVTs including vitality assets, privacy based assets, digital identities. We also considered a diverse universe of assets, and we know you will dream up many more:

- Metaverse — buildings, avatars, flowers, animals
- Physical property — houses, artwork, movies, tickets
- “Negative value” assets — loans, burdens and other responsibilities

## Motivation

This document aims to guide the EVT's integration and interoperationality with wallet, marketplace, metaverse.

## Specification

EVT will inherit the interfaces of NRC7.

The current implementation of EVT is based on solidity programming language. In Solidity, serialization and deserialization is not built-in. So in the implementation of EVT, protobuf3 can be used for the serialization and deserialization of variable properties,

**Variable Interfaces**

```solidity
interface EVTVariable {

    /// @dev Emitted when dynamic property added.
    event DynamicPropertyAdded(string propertyName);

    /// @dev Emitted when dynamic property updated.
    event DynamicPropertyUpdated(
        uint256 indexed tokenId,
        string propertyName,
        string propertyValue
    );

    /// @dev Add the `propertyName`.
    /// @param propertyName
    function addDynamicProperty(string memory propertyName) external;

    /// @dev Set the `propertyValue` by `tokenId` and `propertyName`.
    /// @param tokenId
    /// @param propertyName name of property 
    /// @param propertyValue value of property
    function setDynamicProperty(
        uint256 tokenId,
        string memory propertyName,
        string memory propertyValue
    ) external payable;

    /// @dev Set the `propertyValue` by `tokenId` and `propertyName` in quantity.
    /// @param tokenId
    /// @param propertyNames array of property names
    /// @param propertyValue array of property values
    function setDynamicProperties(
        uint256 tokenId,
        string[] memory propertyNames,
        string[] memory propertyValues
    ) external payable;

    /// @dev Returns the `propertyValue` of the tokenId's `propertyName`.
    /// @param tokenId
    /// @param propertyName name of property 
    function getDynamicPropertyValue(
        uint256 tokenId,
        string memory propertyName
    ) external view returns (string memory propertyValue);

    /// @dev Returns the `propertyName` array and `propertyValue` array corresponding to tokenId.
    /// @param tokenId
    function getDynamicProperties(uint256 tokenId)
        external
        view
        returns (string[] memory propertyNames, string[] memory propertyValues);

    /// @dev Returns all supported propertyNames.
    function getAllSupportProperties() external view returns (string[] memory);

    /// @dev Returns whether the `propertyName` exists.
    /// @param propertyName name of property 
    function supportsProperty(string memory propertyName)
        external
        view
        returns (bool);

    /// @dev Get tokenId's dynamic properties.
    /// @param tokenId
    function getDynamicPropertiesAsString(uint256 tokenId)
        external
        view
        returns (string memory);
}

```

**Encryption Interfaces**

```solidity
interface EVTEncryption {
    /// @dev Emitted when register `encryptedKeyID` encryptedKey.
​    /// @param encryptedKeyID encrypted key ID
    event EncryptedKeyRegistered(bytes32 encryptedKeyID);

    /// @dev Emitted when add `encryptedKeyID` to `tokenId` token.
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
    event EncryptedKeyIDAdded(uint256 indexed tokenId, bytes32 encryptedKeyID);

    /// @dev Emitted when add `tokenId` token permission to `licensee`.
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
​    /// @param licensee licensee's adderss
    event PermissionAdded(
        uint256 indexed tokenId,
        bytes32 encryptedKeyID,
        address indexed licensee
    );

    /// @dev Emitted when remove `tokenId` token permission from `licensee`.
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
​    /// @param licensee licensee's adderss
    event PermissionRemoved(
        uint256 indexed tokenId,
        bytes32 encryptedKeyID,
        address indexed licensee
    );

    /// @dev registerEncryptedKey to the contract.
​    /// @param encryptedKeyID encrypted key ID
    function registerEncryptedKey(bytes32 encryptedKeyID) external;

    /// @dev Add `tokenId` token Permission to `licensee` width `encryptedKeyID`
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
​    /// @param licensee licensee's adderss
    function addPermission(
        uint256 tokenId,
        bytes32 encryptedKeyID,
        address licensee
    ) external payable;

    /// @dev Remove `tokenId` token Permission to `licensee` width `encryptedKeyID`
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
​    /// @param licensee licensee's adderss
    function removePermission(
        uint256 tokenId,
        bytes32 encryptedKeyID,
        address licensee
    ) external;

    /// @dev Returns the results - bool
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
​    /// @param licensee licensee's adderss
    function hasPermission(
        uint256 tokenId,
        bytes32 encryptedKeyID,
        address licensee
    ) external view returns (bool);

    /// @dev Returns the list of licensees
    /// @param tokenId
​    /// @param encryptedKeyID encrypted key ID
    function getPermissions(uint256 tokenId, bytes32 encryptedKeyID)
        external
        view
        returns (address[] memory);

    /// @dev Get tokenId's encryptedKeys and licenses for every encryptionKey.
    /// @notice The result is a string in a JSON formatted array.
    /// @param tokenId
    function getPermissionsAsString(uint256 tokenId)
        external
        view
        returns (string memory);
}

```

The **metadata extension** is for EVT smart contracts.

```solidity
interface EVTMetadata is /* ERC721Metadata */{
    /// @notice tags for a collection of EVTs in this contract.
    function from() external view returns (address);

    /// @notice Returns the Uniform Resource Identifier (URI) for the specified EVT tokenId.
    /// @dev Throws if `_tokenId` is not a valid EVT. URIs are defined in RFC3986.
    ///The URI may point to a JSON file or Base64 encode data that conforms to the "NRC7 Metadata JSON Schema".
    /// @return The JSON formatted URI for the specified EVT tokenId.
    function tokenURI(uint256 _tokenId)
        external
        view
        override
        returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the storefront-level metadata for your contract.
    /// @dev This function SHOULD return the URI for this contract in JSON format, starting with header `data:application/json;base64,`.
    /// @return The JSON formatted URI of the current EVT contract.
    function contractURI() external view returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the variable properties of specified EVT tokenId.
    /// @dev This function SHOULD return the URI for those properties in JSON format, starting with header `data:application/json;base64,`.
    /// @return The JSON formatted URI for the variable properties of specified EVT tokenId.
    function variableURI(uint256 _tokenId)
        external
        view
        returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the encryption resources of specified EVT tokenId.
    /// @dev This function SHOULD return the URI for those resources in JSON format, starting with header `data:application/json;base64,`.
    /// @return The JSON formatted URI for the encryption resources of specified EVT tokenId.
    function encryptionURI(uint256 _tokenId)
        external
        view
        returns (string memory);
}
```

## Implementations

Example implementations are available at

[evt-lib](https://github.com/newtonproject/evt-lib)


## References

**Standards**

1. [NEP-7](https://neps.newtonproject.org/neps/nep-7) Non-Fungible Token Standard.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).