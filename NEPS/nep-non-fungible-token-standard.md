# NEP-X:Non-Fungible Token Standard

| Item | Description |
|:-|:-|
| NEP | to be assigned |
| Title | Non-Fungible Token Standard |
| Author | [Yong Liu](mailto:liuyong5653@163.com) |
| Discussions to | https://github.com/newtonproject/NEPs/issues/7 |
| Status | Draft |
| Type | Standard |
| Category | Technical |
| Created | 2020-04-29 |
| Updated |  |

## Simple Summary

A standard interface for non-fungible tokens, also known as deeds.

## Abstract

The following standard allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.

We considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (“operators”). NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more.

## Motivation

A standard interface allows wallet/broker/auction applications to work with any NFT on Ethereum. We provide for simple smart contracts as well as contracts that track an arbitrarily large number of NFTs. Additional applications are discussed below.

This standard is inspired by the ERC-721 token standard.

## Specification

### Meta Data

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| name | A descriptive name for a collection of NFTs in this contract | can not be changed |
| symbol | An abbreviated name for NFTs in this contract | can not be changed |
| tokenURI | A distinct Uniform Resource Identifier (URI) for a given asset  |  |
| owner | contract deployer, mint NFTs |  |

### Interaction / Functions / Event

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
| mint |  mint a new token | permission: owner |
| transferOwnership |  Transfers ownership of the contract to a new account (`newOwner`) | permission: owner |
| transferFrom | Transfer ownership of an NFTs | permission: current owner, an authorized operator, or the approved address for this NFT |
| safeTransferFrom | Transfers the ownership of an NFT from one address to another address | permission: current owner, an authorized operator, or the approved address for this NFT |
| approve | Change or reaffirm the approved address for an NFT | permission: NFT owner |
| setApprovalForAll | Enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s assets| |
|**Query**|
| balanceOf | Count all NFTs assigned to an owner |  |
| ownerOf | Find the owner of an NFT | |
| getApproved | Get the approved address for a single NFT | |
| isApprovedForAll | Query if an address is an authorized operator for another address | |
|**Event**|
| OwnershipTransferred | ownership of the contract to a new account |  |
| Transfer | This emits when ownership of any NFT changes by any mechanism |  |
| Approval | This emits when the approved address for an NFT is changed or reaffirmed |  |
| ApprovalForAll | This emits when an operator is enabled or disabled for an owner |  |

## Test Cases

TBD

## Implementation
```solidity

interface INRC-X {
    /**
     * @dev Emitted when `tokenId` token is transfered from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
     */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.
     */
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    /**
     * @dev Emitted when ownership of the contract to a new account (`newOwner`).
     */
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Returns the number of tokens in ``owner``'s account.
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    /**
     * @dev Returns the owner of the `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function ownerOf(uint256 tokenId) external view returns (address owner);

    /**
     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients
     * are aware of the ERC721 protocol to prevent tokens from being forever locked.
     *
     * Requirements:
     *
     * - `from`, `to` cannot be zero.
     * - `tokenId` token must exist and be owned by `from`.
     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.
     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
     *
     * Emits a {Transfer} event.
     */
    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    /**
     * @dev Transfers `tokenId` token from `from` to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.
     *
     * Requirements:
     *
     * - `from`, `to` cannot be zero.
     * - `tokenId` token must be owned by `from`.
     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to, uint256 tokenId) external;

    /**
     * @dev Gives permission to `to` to transfer `tokenId` token to another account.
     * The approval is cleared when the token is transferred.
     *
     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.
     *
     * Requirements:
     *
     * - The caller must own the token or be an approved operator.
     * - `tokenId` must exist.
     *
     * Emits an {Approval} event.
     */
    function approve(address to, uint256 tokenId) external;

    /**
     * @dev Returns the account approved for `tokenId` token.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function getApproved(uint256 tokenId) external view returns (address operator);

    /**
     * @dev Approve or remove `operator` as an operator for the caller.
     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.
     *
     * Requirements:
     *
     * - The `operator` cannot be the caller.
     *
     * Emits an {ApprovalForAll} event.
     */
    function setApprovalForAll(address operator, bool _approved) external;

    /**
     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.
     *
     * See {setApprovalForAll}
     */
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    /**
      * @dev Safely transfers `tokenId` token from `from` to `to`.
      *
      * Requirements:
      *
      * - `from`, `to` cannot be zero.
      * - `tokenId` token must exist and be owned by `from`.
      * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
      * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
      *
      * Emits a {Transfer} event.
      */
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
    
    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) external;
}

```

## References
1. ERC-721 Token Standard. https://eips.ethereum.org/EIPS/eip-721

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
