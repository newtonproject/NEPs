---
NEP: 6
Title: "Basic Token Standard (NRC-6)"
Authors: "[Yong Liu](mailto:liuyong5653@163.com), [Qu Jianwei](https://github.com/i29), [LiuChao](https://github.com/LiuChaooo)"
Discussions: https://github.com/newtonproject/NEPs/issues/6
Status: Draft
Categories: Technical
Types: NRC
Created: 2020-04-29
---

## Simple Summary

A standard interface for tokens.

## Abstract

The following standard allows for the implementation of a standard API for tokens within smart contracts. This standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.

## Motivation

A standard interface allows any tokens on NewChain to be re-used by other applications: from wallets to decentralized exchanges.

## Specification

### Meta Data

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| name | Name of token |  |
| symbol | Symbol of token |  |
| decimals | decimals of Token |  |
| totalSupply | Total supply of Token |  |


### Interaction / Functions

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
| transfer(recipient, amount) | Moves `amount` tokens from the caller's account to `recipient` |  |
| approve(spender, amount) | Sets `amount` as the allowance of `spender` over the caller's tokens |  |
| transferFrom(sender, recipient, amount) | Moves `amount` tokens from `sender` to `recipient` |  |
|**Query**|
| balanceOf(account) | Returns the amount of tokens owned by `account` |  |
| allowance(owner, spender) | Returns the remaining number of tokens that `spender` is allowed to spend from `owner` |  |
|**Events**|
| Transfer(from, to, value) | Emitted when `value` tokens are moved from one account (`from`) to another (`to`). |  |
| Approval(owner, spender, value) | Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve} |  |


## Rationale (optional)

TBD

## Test Cases (optional)

TBD

## Implementation (optional)

```solidity
interface INRC6 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
```

## References

* ERC-20 https://eips.ethereum.org/EIPS/eip-20

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
