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

this standard is an improved implementation of the NRC-53(EVT) standard that supports minting multiple tokens for close to the cost of one.

## Motivation

The goal of standard is to provide a fully compliant implementation of NRC-53(EVT) with significant gas savings for minting multiple EVTs in a single transaction. This project and implementation will be updated regularly and will continue to stay up to date with best practices.

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

```solidity
interface IEVTA {
    struct TokenOwnership {
        // The address of the owner.
        address addr;
        // Stores the start time of ownership with minimal overhead for tokenomics.
        uint64 startTimestamp;
        // Whether the token has been burned.
        bool burned;
        // Arbitrary data similar to `startTimestamp` that can be set via {_extraData}.
        uint24 extraData;
    }

    /**
    * @dev Returns the total number of tokens in existence.
    * Burned tokens will reduce the count.
    * To get the total number of tokens minted, please see{_totalMinted}.
    */
    function totalSupply() external view returns (uint256);

    /**
    * @dev Returns true if this contract implements the interface defined by
    * `interfaceId`. See the corresponding
    * [EIP section](https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified)
    * to learn more about how these ids are created.
    *
    * This function call must use less than 30000 gas.
    */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);

    /**
    * @dev Emitted when `tokenId` token is transferred from `from` to `to`.
    */
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    /**
    * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.
    */
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    /**
    * @dev Emitted when `owner` enables or disables
    * (`approved`) `operator` to manage all of its assets.
    */
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    /**
    * @dev Returns the number of tokens in `owner`'s account.
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
    * @dev Safely transfers `tokenId` token from `from` to `to`,
    * checking first that contract recipients are aware of the ERC721 protocol
    * to prevent tokens from being forever locked.
    *
    * Requirements:
    *
    * - `from` cannot be the zero address.
    * - `to` cannot be the zero address.
    * - `tokenId` token must exist and be owned by `from`.
    * - If the caller is not `from`, it must be have been allowed to move
    * this token by either {approve} or {setApprovalForAll}.
    * - If `to` refers to a smart contract, it must implement
    * {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
    *
    * Emits a {Transfer} event.
    */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;

    /**
    * @dev Equivalent to `safeTransferFrom(from, to, tokenId, '')`.
    */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    /**
    * @dev Transfers `tokenId` from `from` to `to`.
    *
    * WARNING: Usage of this method is discouraged, use {safeTransferFrom}
    * whenever possible.
    *
    * Requirements:
    *
    * - `from` cannot be the zero address.
    * - `to` cannot be the zero address.
    * - `tokenId` token must be owned by `from`.
    * - If the caller is not `from`, it must be approved to move this token
    * by either {approve} or {setApprovalForAll}.
    *
    * Emits a {Transfer} event.
    */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    /**
    * @dev Gives permission to `to` to transfer `tokenId` token to another account.
    * The approval is cleared when the token is transferred.
    *
    * Only a single account can be approved at a time, so approving the
    * zero address clears previous approvals.
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
    * @dev Approve or remove `operator` as an operator for the caller.
    * Operators can call {transferFrom} or {safeTransferFrom}
    * for any token owned by the caller.
    *
    * Requirements:
    *
    * - The `operator` cannot be the caller.
    *
    * Emits an {ApprovalForAll} event.
    */
    function setApprovalForAll(address operator, bool _approved) external;

    /**
    * @dev Returns the account approved for `tokenId` token.
    *
    * Requirements:
    *
    * - `tokenId` must exist.
    */
    function getApproved(uint256 tokenId) external view returns (address operator);

    /**
    * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.
    *
    * See {setApprovalForAll}.
    */
    function isApprovedForAll(address owner, address operator) external view returns (bool);

    /**
    * @dev Emitted when tokens in `fromTokenId` to `toTokenId`
    * (inclusive) is transferred from `from` to `to`, as defined in the
    * [ERC2309](https://eips.ethereum.org/EIPS/eip-2309) standard.
    *
    * See {_mintERC2309} for more details.
    */
    event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed from, address indexed to);
}
```

## References

**Standards**

1. [NEP-53](https://neps.newtonproject.org/neps/nep-53) Encrypted Variable Token Proposal Standard.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).