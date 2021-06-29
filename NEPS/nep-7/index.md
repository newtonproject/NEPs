---
NEP: 7
Title: "Non-Fungible Token Standard (NRC-7)"
Authors: "[Yong Liu](mailto:liuyong5653@163.com)"
Discussions: https://github.com/newtonproject/NEPs/issues/7
Status: Draft
Categories: Technical
Types: NRC
Created: 2020-04-29
---

## Simple Summary

A standard interface for non-fungible tokens, also known as deeds.

## Abstract

The following standard allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.

We considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (“operators”). NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more:

- Physical property — houses, unique artwork
- Virtual collectables — unique pictures of kittens, collectable cards
- “Negative value” assets — loans, burdens and other responsibilities  

In general, all houses are distinct and no two kittens are alike. NFTs are distinguishable and you must track the ownership of each one separately.

## Motivation

A standard interface allows wallet/broker/auction applications to work with any NFT on Ethereum. We provide for simple NRC-7 smart contracts as well as contracts that track an arbitrarily large number of NFTs. Additional applications are discussed below.

This standard is inspired by the NRC-6 token standard and builds on two years of experience since NEP-6 was created. NEP-6 is insufficient for tracking NFTs because each asset is distinct (non-fungible) whereas each of a quantity of tokens is identical (fungible).

Differences between this standard and NEP-6 are examined below.

## Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.

Every NRC-7 compliant contract must implement the NRC7 and ERC165 interfaces (subject to “caveats” below):

```solidity
pragma solidity ^0.4.20;

/// @title NRC-7 Non-Fungible Token Standard
///  Note: the ERC-165 identifier for this interface is 0x80ac58cd.
interface NRC7 /* is ERC165 */ {
    /// @dev This emits when ownership of any NFT changes by any mechanism.
    ///  This event emits when NFTs are created (`from` == 0) and destroyed
    ///  (`to` == 0). Exception: during contract creation, any number of NFTs
    ///  may be created and assigned without emitting Transfer. At the time of
    ///  any transfer, the approved address for that NFT (if any) is reset to none.
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);

    /// @dev This emits when the approved address for an NFT is changed or
    ///  reaffirmed. The zero address indicates there is no approved address.
    ///  When a Transfer event emits, this also indicates that the approved
    ///  address for that NFT (if any) is reset to none.
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

    /// @dev This emits when an operator is enabled or disabled for an owner.
    ///  The operator can manage all NFTs of the owner.
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    /// @notice Count all NFTs assigned to an owner
    /// @dev NFTs assigned to the zero address are considered invalid, and this
    ///  function throws for queries about the zero address.
    /// @param _owner An address for whom to query the balance
    /// @return The number of NFTs owned by `_owner`, possibly zero
    function balanceOf(address _owner) external view returns (uint256);

    /// @notice Find the owner of an NFT
    /// @dev NFTs assigned to zero address are considered invalid, and queries
    ///  about them do throw.
    /// @param _tokenId The identifier for an NFT
    /// @return The address of the owner of the NFT
    function ownerOf(uint256 _tokenId) external view returns (address);

    /// @notice Transfers the ownership of an NFT from one address to another address
    /// @dev Throws unless `msg.sender` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `_tokenId` is not a valid NFT. When transfer is complete, this function
    ///  checks if `_to` is a smart contract (code size > 0). If so, it calls
    ///  `onERC721Received` on `_to` and throws if the return value is not
    ///  `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    /// @param data Additional data with no specified format, sent in call to `_to`
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;

    /// @notice Transfers the ownership of an NFT from one address to another address
    /// @dev This works identically to the other function with an extra data parameter,
    ///  except this function just sets data to "".
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;

    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE
    ///  THEY MAY BE PERMANENTLY LOST
    /// @dev Throws unless `msg.sender` is the current owner, an authorized
    ///  operator, or the approved address for this NFT. Throws if `_from` is
    ///  not the current owner. Throws if `_to` is the zero address. Throws if
    ///  `_tokenId` is not a valid NFT.
    /// @param _from The current owner of the NFT
    /// @param _to The new owner
    /// @param _tokenId The NFT to transfer
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;

    /// @notice Change or reaffirm the approved address for an NFT
    /// @dev The zero address indicates there is no approved address.
    ///  Throws unless `msg.sender` is the current NFT owner, or an authorized
    ///  operator of the current owner.
    /// @param _approved The new approved NFT controller
    /// @param _tokenId The NFT to approve
    function approve(address _approved, uint256 _tokenId) external payable;

    /// @notice Enable or disable approval for a third party ("operator") to manage
    ///  all of `msg.sender`'s assets
    /// @dev Emits the ApprovalForAll event. The contract MUST allow
    ///  multiple operators per owner.
    /// @param _operator Address to add to the set of authorized operators
    /// @param _approved True if the operator is approved, false to revoke approval
    function setApprovalForAll(address _operator, bool _approved) external;

    /// @notice Get the approved address for a single NFT
    /// @dev Throws if `_tokenId` is not a valid NFT.
    /// @param _tokenId The NFT to find the approved address for
    /// @return The approved address for this NFT, or the zero address if there is none
    function getApproved(uint256 _tokenId) external view returns (address);

    /// @notice Query if an address is an authorized operator for another address
    /// @param _owner The address that owns the NFTs
    /// @param _operator The address that acts on behalf of the owner
    /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}

interface ERC165 {
    /// @notice Query if a contract implements an interface
    /// @param interfaceID The interface identifier, as specified in ERC-165
    /// @dev Interface identification is specified in ERC-165. This function
    ///  uses less than 30,000 gas.
    /// @return `true` if the contract implements `interfaceID` and
    ///  `interfaceID` is not 0xffffffff, `false` otherwise
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}
```

A wallet/broker/auction application MUST implement the wallet interface if it will accept safe transfers.
```solidity
/// @dev Note: the ERC-165 identifier for this interface is 0x150b7a02.
interface NRC7TokenReceiver {
    /// @notice Handle the receipt of an NFT
    /// @dev The NRC7 smart contract calls this function on the recipient
    ///  after a `transfer`. This function MAY throw to revert and reject the
    ///  transfer. Return of other than the magic value MUST result in the
    ///  transaction being reverted.
    ///  Note: the contract address is always the message sender.
    /// @param _operator The address which called `safeTransferFrom` function
    /// @param _from The address which previously owned the token
    /// @param _tokenId The NFT identifier which is being transferred
    /// @param _data Additional data with no specified format
    /// @return `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`
    ///  unless throwing
    function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);
}
```
The metadata extension is OPTIONAL for NRC-7 smart contracts (see “caveats”, below). This allows your smart contract to be interrogated for its name and for details about the assets which your NFTs represent.
```solidity
/// @title NRC-7 Non-Fungible Token Standard, optional metadata extension
///  Note: the ERC-165 identifier for this interface is 0x5b5e139f.
interface NRC7Metadata /* is NRC7 */ {
    /// @notice A descriptive name for a collection of NFTs in this contract
    function name() external view returns (string _name);

    /// @notice An abbreviated name for NFTs in this contract
    function symbol() external view returns (string _symbol);

    /// @notice A distinct Uniform Resource Identifier (URI) for a given asset.
    /// @dev Throws if `_tokenId` is not a valid NFT. URIs are defined in RFC
    ///  3986. The URI may point to a JSON file that conforms to the "ERC721
    ///  Metadata JSON Schema".
    function tokenURI(uint256 _tokenId) external view returns (string);
}
```
This is the “NRC7 Metadata JSON Schema” referenced above.
```
{
    "title": "Asset Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this NFT represents"
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this NFT represents"
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
        }
    }
}
```
The enumeration extension is OPTIONAL for NRC-7 smart contracts (see “caveats”, below). This allows your contract to publish its full list of NFTs and make them discoverable.
```solidity
/// @title NRC-7 Non-Fungible Token Standard, optional enumeration extension
///  Note: the ERC-165 identifier for this interface is 0x780e9d63.
interface NRC7Enumerable /* is NRC7 */ {
    /// @notice Count NFTs tracked by this contract
    /// @return A count of valid NFTs tracked by this contract, where each one of
    ///  them has an assigned and queryable owner not equal to the zero address
    function totalSupply() external view returns (uint256);

    /// @notice Enumerate valid NFTs
    /// @dev Throws if `_index` >= `totalSupply()`.
    /// @param _index A counter less than `totalSupply()`
    /// @return The token identifier for the `_index`th NFT,
    ///  (sort order not specified)
    function tokenByIndex(uint256 _index) external view returns (uint256);

    /// @notice Enumerate NFTs assigned to an owner
    /// @dev Throws if `_index` >= `balanceOf(_owner)` or if
    ///  `_owner` is the zero address, representing invalid NFTs.
    /// @param _owner An address where we are interested in NFTs owned by them
    /// @param _index A counter less than `balanceOf(_owner)`
    /// @return The token identifier for the `_index`th NFT assigned to `_owner`,
    ///   (sort order not specified)
    function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256);
}
```
### Caveats
The 0.4.20 Solidity interface grammar is not expressive enough to document the NRC-7 standard. A contract which complies with NRC-7 MUST also abide by the following:
- Solidity issue #3412: The above interfaces include explicit mutability guarantees for each function. Mutability guarantees are, in order weak to strong: payable, implicit nonpayable, view, and pure. Your implementation MUST meet the mutability guarantee in this interface and you MAY meet a stronger guarantee. For example, a payable function in this interface may be implemented as nonpayble (no state mutability specified) in your contract. We expect a later Solidity release will allow your stricter contract to inherit from this interface, but a workaround for version 0.4.20 is that you can edit this interface to add stricter mutability before inheriting from your contract.
- Solidity issue #3419: A contract that implements NRC7Metadata or NRC7Enumerable SHALL also implement NRC7. NRC-7 implements the requirements of interface ERC-165.
- Solidity issue #2330: If a function is shown in this specification as external then a contract will be compliant if it uses public visibility. As a workaround for version 0.4.20, you can edit this interface to switch to public before inheriting from your contract.
- Solidity issues #3494, #3544: Use of this.*.selector is marked as a warning by Solidity, a future version of Solidity will not mark this as an error.

### Rationale
There are many proposed uses of Ethereum smart contracts that depend on tracking distinguishable assets. Examples of existing or planned NFTs are LAND in Decentraland, the eponymous punks in CryptoPunks, and in-game items using systems like DMarket or EnjinCoin. Future uses include tracking real-world assets, like real-estate (as envisioned by companies like Ubitquity or Propy). It is critical in each of these cases that these items are not “lumped together” as numbers in a ledger, but instead each asset must have its ownership individually and atomically tracked. Regardless of the nature of these assets, the ecosystem will be stronger if we have a standardized interface that allows for cross-functional asset management and sales platforms.

### “NFT” Word Choice
“NFT” was satisfactory to nearly everyone surveyed and is widely applicable to a broad universe of distinguishable digital assets. We recognize that “deed” is very descriptive for certain applications of this standard (notably, physical property).

Alternatives considered: distinguishable asset, title, token, asset, equity, ticket

### NFT Identifiers
Every NFT is identified by a unique uint256 ID inside the NRC-7 smart contract. This identifying number SHALL NOT change for the life of the contract. The pair (contract address, uint256 tokenId) will then be a globally unique and fully-qualified identifier for a specific asset on an Ethereum chain. While some NRC-7 smart contracts may find it convenient to start with ID 0 and simply increment by one for each new NFT, callers SHALL NOT assume that ID numbers have any specific pattern to them, and MUST treat the ID as a “black box”. Also note that a NFTs MAY become invalid (be destroyed). Please see the enumerations functions for a supported enumeration interface.

The choice of uint256 allows a wide variety of applications because UUIDs and sha3 hashes are directly convertible to uint256.

### Transfer Mechanism
NRC-7 standardizes a safe transfer function safeTransferFrom (overloaded with and without a bytes parameter) and an unsafe function transferFrom. Transfers may be initiated by:
- The owner of an NFT
- The approved address of an NFT
- An authorized operator of the current owner of an NFT

Additionally, an authorized operator may set the approved address for an NFT. This provides a powerful set of tools for wallet, broker and auction applications to quickly use a large number of NFTs.

The transfer and accept functions’ documentation only specify conditions when the transaction MUST throw. Your implementation MAY also throw in other situations. This allows implementations to achieve interesting results:
- Disallow transfers if the contract is paused — prior art, CryptoKitties deployed contract, line 611
- Blacklist certain address from receiving NFTs — prior art, CryptoKitties deployed contract, lines 565, 566
- Disallow unsafe transfers — transferFrom throws unless _to equals msg.sender or countOf(_to) is non-zero or was non-zero previously (because such cases are safe)
- Charge a fee to both parties of a transaction — require payment when calling approve with a non-zero _approved if it was previously the zero address, refund payment if calling approve with the zero address if it was previously a non-zero address, require payment when calling any transfer function, require transfer parameter _to to equal msg.sender, require transfer parameter _to to be the approved address for the NFT
- Read only NFT registry — always throw from unsafeTransfer, transferFrom, approve and setApprovalForAll

Failed transactions will throw, a best practice identified in ERC-223, ERC-677, ERC-827 and OpenZeppelin’s implementation of SafeERC20.sol. ERC-20 defined an allowance feature, this caused a problem when called and then later modified to a different amount, as on OpenZeppelin issue #438. In NRC-7, there is no allowance because every NFT is unique, the quantity is none or one. Therefore we receive the benefits of ERC-20’s original design without problems that have been later discovered.

Creating of NFTs (“minting”) and destruction NFTs (“burning”) is not included in the specification. Your contract may implement these by other means. Please see the event documentation for your responsibilities when creating or destroying NFTs.

We questioned if the operator parameter on onERC721Received was necessary. In all cases we could imagine, if the operator was important then that operator could transfer the token to themself and then send it – then they would be the from address. This seems contrived because we consider the operator to be a temporary owner of the token (and transferring to themself is redundant). When the operator sends the token, it is the operator acting on their own accord, NOT the operator acting on behalf of the token holder. This is why the operator and the previous token owner are both significant to the token recipient.

Alternatives considered: only allow two-step NERC-6 style transaction, require that transfer functions never throw, require all functions to return a boolean indicating the success of the operation.

### ERC-165 Interface

We chose Standard Interface Detection (ERC-165) to expose the interfaces that a NRC-7 smart contract supports.

A future EIP may create a global registry of interfaces for contracts. We strongly support such an EIP and it would allow your NRC-7 implementation to implement NRC7Enumerable, NRC7Metadata, or other interfaces by delegating to a separate contract.



## Test Cases

TBD

## Implementations

TBD

## References

1. ERC-721 Non-fungible Token Standard. https://eips.ethereum.org/EIPS/eip-721
2. ERC-165 Standard Interface Detection. https://eips.ethereum.org/EIPS/eip-165
3. NRC6 Token Standard. https://github.com/newtonproject/NEPs/edit/main/NEPS/nep-6/index.md

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
