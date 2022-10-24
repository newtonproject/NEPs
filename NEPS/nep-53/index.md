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
    /// @dev This emits when token dynamic property added.
    event DynamicPropertyAdded(bytes32 _propertyId);
    
    /// @dev This emits when token dynamic property updated.
    event DynamicPropertyUpdated(uint256 _tokenId, bytes32 _propertyId, bytes _propertyValue);

    /// @notice Add the dynamic property
    /// @param _propertyId property ID
    function addDynamicProperty(bytes32 _propertyId) external payable;

    /// @notice Set the dynamic property
    /// @param _tokenId token ID
    /// @param _propertyId property ID
    /// @param _propertyValue property value
    function setDynamicProperty(uint256 _tokenId, bytes32 _propertyId, bytes _propertyValue) external payable;

    /// @notice Set multiple dynamic properties once
    /// @param _tokenId token ID
    /// @param _message message
    function setDynamicProperties(uint256 _tokenId, bytes _message) external payable;

    /// @notice Retrieve the vale of dynamic property
    /// @param _tokenId token ID
    /// @param _propertyId property ID
    /// @return property value
    function getDynamicProperty(uint256 _tokenId, bytes32 _propertyId) external view returns (bytes);

    /// @notice Retrieve the all properties including dynamic and static
    /// @param _tokenId token ID
    /// @return ids, properties
    function getDynamicProperties(uint256 _tokenId) external view returns (bytes32[], bytes[]);

    /// @notice Check whether support the given property
    /// @param _propertyId property ID
    /// @return support or unsupport
    function supportsProperty(bytes32 _propertyId) external view returns (bool);
}
```

`_propertyId` is calculated by `bytes32(keccak256('propertyName'))` .

**Encryption Interfaces**

```solidity
interface EVTEncryption {
​    /// @notice This emits when registered a encrypted key.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyId encrypted key ID
​    event EncryptedKeyRegistered(uint256 indexed _tokenId, bytes32 _encryptedKeyId);

    /// @notice This emits when add a permission.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyId encrypted key ID
​    /// @param _licensee licensee
​    event PermissionAdded(uint256 indexed _tokenId, bytes32 _encryptedKeyId, address indexed _licensee);

    /// @notice This emits when remove a permission.
​    /// @param _tokenId token ID
​    /// @param _encryptedKeyId encrypted key ID
​    /// @param _licensee licensee
​    event PermissionRemoved(uint256 indexed _tokenId, bytes32 _encryptedKeyId, address indexed _licensee);

    /// @notice Register encrypted key
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    function registerEncryptedKey(uint256 _tokenId, bytes32 _encryptedKeyId) external payable;

    /// @notice Add the permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    /// @param _licensee licensee
    function addPermission(uint256 _tokenId, bytes32 _encryptedKeyId, address _licensee) external payable;

    /// @notice Remove the permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    /// @param _licensee licensee
    function removePermission(uint256 _tokenId, bytes32 _encryptedKeyId, address _licensee) external;

    /// @notice Check permission rule of the encrypted key for given address
    /// @param _tokenId token ID
    /// @param _encryptedKeyId encrypted key ID
    /// @param _licensee licensee
    /// @return true or false
    function hasPermission(uint256 _tokenId, bytes32 _encryptedKeyId, address _licensee) external view returns (bool);
}
```

The **metadata extension** is for EVT smart contracts.

```solidity
interface EVTMetadata /* is EVT, NRC7Metadata */ {
    /// @notice tags for a collection of EVTs in this contract
    function from() external view returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the specified EVT tokenId.
    /// @dev Throws if `_tokenId` is not a valid EVT. URIs are defined in RFC3986. 
    ///  The URI may point to a JSON file or Base64 encode data that conforms to the
    ///  "NRC7 Metadata JSON Schema".
    /// @return The JSON formatted URI for the specified EVT tokenId
    function tokenURI(uint256 _tokenId) external view returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the storefront-level metadata for your contract.
    /// @dev This function SHOULD return the URI for this contract in JSON format, starting with
    ///  header `data:application/json;base64,`. 
    /// @return The JSON formatted URI of the current EVT contract
    function contractURI() external view returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the variable properties of specified EVT tokenId.
    /// @dev This function SHOULD return the URI for those properties in JSON format, starting with
    ///  header `data:application/json;base64,`. 
    /// @return The JSON formatted URI for the variable properties of specified EVT tokenId
    function variableURI(uint256 _tokenId) external view returns (string memory);

    /// @notice Returns the Uniform Resource Identifier (URI) for the encryption resources of specified EVT tokenId.
    /// @dev This function SHOULD return the URI for those resources in JSON format, starting with
    ///  header `data:application/json;base64,`. 
    /// @return The JSON formatted URI for the encryption resources of specified EVT tokenId
    function encryptionURI(uint256 _tokenId) external view returns (string memory); 
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