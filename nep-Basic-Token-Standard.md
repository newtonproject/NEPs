# NEP Template for Token Contract <!--- Replace with NEP-N: Title, once a NEP number is assigned, the editor will update the NEP number in this document -->

| Item | Description |
|:-|:-|
| NEP | to be assigned |
| Title | nep-Basic-Token-Standard |
| Author | [Yong Liu](mailto:liuyong5653@163.com), [Qu Jianwei](https://github.com/i29), [LiuChao](https://github.com/LiuChaooo) |
| Discussions to | https://github.com/newtonproject/NEPs/issues/6 |
| Status | WIP |
| Type | Standard Track |
| Category | Technical |
| Created | 2020-04-29 |
| Updated |  |

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
| **Creation Input** |
| name | Name of token | can not be changed |
| symbol | Symbol of token | can not be changed |
| decimals | decimals of Token | can not be changed |
| initialAccount | Owner of contract | can not be changed |
| initialBalance | Initial amount of token | can not be changed |


### Interaction / Functions (example)

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
|**Owner**|
| constructor | Create token contract | permission: owner |
| mint | Create token from this contract | permission: owner |
| burn | Destroy token from this contract | permission: owner |
| approveInternal | Sets the allowance | permission: owner |
|**Shareholders**|
| transferInternal | transfer token via this contract | permission: all |
|**Query**|
| totalSupply | Returns the amount of tokens in existence |  |
| balanceOf(account) | Returns the amount of tokens owned by `account` |  |
| transfer(recipient, amount) | Moves `amount` tokens from the caller's account to `recipient` |  |
| allowance(owner, spender) | Returns the remaining number of tokens that `spender` is allowed to spend from `owner` |  |
| approve(spender, amount) | Sets `amount` as the allowance of `spender` over the caller's tokens |  |
| transferFrom(sender, recipient, amount) | Moves `amount` tokens from `sender` to `recipient` |  |
|**Events**|
| Transfer(from, to, value) | Emitted when `value` tokens are moved from one account (`from`) to another (`to`). |  |
| Approval(owner, spender, value) | Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve} |  |


## Rationale (optional)

TBD

## Test Cases (optional)

TBD

## Implementation (optional)

TBD

## References

* ERC-20 https://eips.ethereum.org/EIPS/eip-20

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
