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

**IEVTA Interfaces**

```solidity
interface IEVTA is IERC721A, IEVTVariable, IEVTEncryption {}
```
**Variable Interfaces**

```solidity
interface IEVTVariable {
    /**
     * @dev Emitted when dynamic property added.
     */
    event DynamicPropertyAdded(string propertyName);

    /**
     * @dev Emitted when dynamic property updated.
     */
    event DynamicPropertyUpdated(
        uint256 indexed tokenId,
        string propertyName,
        string propertyValue
    );

    /**
     * @dev Add the `propertyName`.
     *
     * Requirements:
     *
     * - `msg.sender` must be the contract owner.
     */
    function addDynamicProperty(string memory propertyName) external;

    /**
     * @dev Set the `propertyValue` by `tokenId` and `propertyName`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `propertyName` must exist.
     */
    function setDynamicProperty(
        uint256 tokenId,
        string memory propertyName,
        string memory propertyValue
    ) external payable;

    /**
     * @dev Set the `propertyValue` by `tokenId` and `propertyName` in quantity.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `propertyName` must exist.
     */
    function setDynamicProperties(
        uint256 tokenId,
        string[] memory propertyNames,
        string[] memory propertyValues
    ) external payable;

    /**
     * @dev Returns the `propertyValue` of the tokenId's `propertyName`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `propertyName` must exist.
     */
    function getDynamicPropertyValue(
        uint256 tokenId,
        string memory propertyName
    ) external view returns (string memory propertyValue);

    /**
     * @dev Returns the `propertyName` array and `propertyValue` array corresponding to tokenId.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `propertyName` must exist.
     */
    function getDynamicProperties(uint256 tokenId)
        external
        view
        returns (string[] memory propertyNames, string[] memory propertyValues);

    /**
     * @dev Returns all supported propertyNames.
     */
    function getAllSupportProperties() external view returns (string[] memory);

    /**
     * @dev Returns whether the `propertyName` exists.
     */
    function supportsProperty(string memory propertyName)
        external
        view
        returns (bool);

    /**
     * @dev Get tokenId's dynamic properties.
     *
     * The result is a string in a JSON formatted array.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function getDynamicPropertiesAsString(uint256 tokenId)
        external
        view
        returns (string memory);
}

```

**Encryption Interfaces**

```solidity
interface IEVTEncryption {
    /**
     * @dev Emitted when register `encryptedKeyID` encryptedKey.
     */
    event EncryptedKeyRegistered(bytes32 encryptedKeyID);

    /**
     * @dev Emitted when add `encryptedKeyID` to `tokenId` token.
     */
    event EncryptedKeyIDAdded(uint256 indexed tokenId, bytes32 encryptedKeyID);

    /**
     * @dev Emitted when add `tokenId` token permission to `licensee`.
     */
    event PermissionAdded(
        uint256 indexed tokenId,
        bytes32 encryptedKeyID,
        address indexed licensee
    );

    /**
     * @dev Emitted when remove `tokenId` token permission from `licensee`.
     */
    event PermissionRemoved(
        uint256 indexed tokenId,
        bytes32 encryptedKeyID,
        address indexed licensee
    );

    /**
     * @dev registerEncryptedKey to the contract.
     * Requirements:
     *
     * - `msg.sender` must be the owner of the contract.
     */
    function registerEncryptedKey(bytes32 encryptedKeyID) external;

    /**
     * @dev Add `tokenId` token Permission to `licensee` width `encryptedKeyID`
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `encryptedKeyID` must exist and must registered.
     */
    function addPermission(
        uint256 tokenId,
        bytes32 encryptedKeyID,
        address licensee
    ) external payable;

    /**
     * @dev Remove `tokenId` token Permission to `licensee` width `encryptedKeyID`
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `encryptedKeyID` must exist.
     */
    function removePermission(
        uint256 tokenId,
        bytes32 encryptedKeyID,
        address licensee
    ) external;

    /**
     * @dev Returns the results - bool
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `encryptedKeyID` must exist.
     */
    function hasPermission(
        uint256 tokenId,
        bytes32 encryptedKeyID,
        address licensee
    ) external view returns (bool);

    /**
     * @dev Returns the list of licensees
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     * - `encryptedKeyID` must exist.
     */
    function getPermissions(uint256 tokenId, bytes32 encryptedKeyID)
        external
        view
        returns (address[] memory);

    /**
     * @dev Get tokenId's encryptedKeys and licenses for every encryptionKey.
     *
     * The result is a string in a JSON formatted array.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
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