# NEP-N: NewKYC Standard (NRC-N)

| Item | Description |
|:-|:-|
| NEP | to be assigned |
| Title | NewKYC Standard (NRC-N) |
| Author | [Evan Liu](mailto:evanliuchina@gmail.com), [Xia Wu](https://github.com/xiawu), [Ben Koo](koo0905@gmail.com), [Zhou Xiqiao](https://github.com/zhouxiqiao), [Yong Liu](mailto:liuyong5653@163.com), [Wei Xuefeng](https://github.com/weixuefeng) |
| Discussions to | URL |
| Status | Draft |
| Type | NRC |
| Category | Technical |
| Created | 2020-05-11 |
| Updated | 2020-05-11 |

## Simple Summary

NewKYC template standard is designed for the decentralized KYC (Know-Your-Customer) services running on-chain, supporting further KYC requirements of user address, NewOrg, etc.

## Abstract

On-chain KYC services that can be provided by communities in a decentralized way.

## Motivation

We can have either an individual or an organization on chain, however, especially for an organization, in many scenarios, it is good to have an 3rd party trusted verification service for users to easily identify it. The way to do it is left to be a difficult question. This standard is a try.

## Specification

Here we describe a possible solution:



### Meta Data (example)

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| **Creation Input** |
| Creator | write creator to the contract | deploy/can not be changed |
| Owner | Owner can take full control of contract | multi-owner? / can be changed? |
| TokenName | Name of token, 3-5 letters | can not be changed |
| **After Creation** |
| Admins | Owner can take full control of contract | multi-owner? / can be changed? read: public |
| Members | | |


### Interaction / Functions (example)

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
| AddOwner | add owner to... | permission: owner |
| TransferOwner | transfer own to other NEW Address | permission: owner |
| CreateNewToken | Create new token from this contract |  |
| AddMemberBySubscribe | | permission: contract |
| RemoveMember | | permission: owner/admin |
| RemoveExpiredMember | | permission: contract |


## Rationale (optional)

TBD

## Backwards Compatibility (optional)

TBD

## Test Cases (optional)

TBD

## Implementation (optional)

TBD

## Security Considerations (optional)

TBD

## References (optional)

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
