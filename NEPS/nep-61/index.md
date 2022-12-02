---
NEP: 61
Title: "Support Of Batch Mint EVT (NRC-61)"
Authors: "Newton Core Team"
Discussions: https://github.com/newtonproject/NEPs/issues/61
Status: Draft
Categories: Technical
Types: NRC
Created: 2022-08-22
---

## Simple Summary

This proposal is an improved implementation of the NRC-53(EVT) that supports minting multiple tokens for close to the cost of one.

## Motivation

Gas savings is very important for EVT's users. So we propose a fully compliant implementation of NRC-53(EVT) with significant gas savings for minting multiple EVTs in a single transaction. This project and implementation will be updated regularly and will continue to stay up to date with best practices.

The network BASEFEE remained low despite huge demand, resulting in low gas costs for minters, while minimizing network disruption for the wider ecosystem as well.

|  Quantity  |    EVT(new)    |    EVTA(new)   |
| ---------- | -------------- | -------------- |
| 1          | 29.884         | 28.688         |
| 2          | 44.935         | 29.6585        |
| 3          | 59.7355        | 30.629         |
| 5          | 89.3365        | 32.57          |
| 10         | 163.339        | 37.4225        |
| 50         | 755.3615       | 76.2425        |
| 100        | 1495.3945      | 124.7675       |
| 200        | 2975.4745      | 221.8175       |


## Specification

**EVTA Interfaces**

```solidity
interface EVTA is /* ERC721A, EVTVariable, EVTEncryption */{}
```
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

## References

**IERC721A**

1. The goal of [ERC721A](https://github.com/chiru-labs/ERC721A) is to provide a fully compliant implementation of IERC721 with significant gas savings for minting multiple NFTs in a single transaction. This project and implementation will be updated regularly and will continue to stay up to date with best practices.

**Proposals**

1. [NEP-53](https://neps.newtonproject.org/neps/nep-53) Encrypted Variable Token Proposal.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).