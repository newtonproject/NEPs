# NEP-N: NEP-NEWKYC

| Item | Description |
|:-|:-|
| NEP | to be assigned |
| Title | NEP-NEWKYC |
| Author | [Evan Liu](mailto:evanliuchina@gmail.com) |
| Discussions to | URL |
| Status | Draft |
| Type | NRC |
| Category | Technical |
| Created | 2020-05-11 |
| Updated | 2020-05-11 |

This is the suggested token template for new NEPs.

Note that an NEP number will be assigned by an editor. When opening a pull request to submit your NEP, please use an abbreviated title in the filename, `nep-draft_title_abbrev.md`, and the NEP document should be placed under `NEPS` directory.


## Simple Summary

If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the NEP.

## Abstract

A short (~200 word) description of the technical issue being addressed.

## Motivation

The motivation is critical for NEPs that want to change the Newton protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the NEP solves. NEP submissions without sufficient motivation may be rejected outright.

## Specification

The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for any of the current ....

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

The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.

## Backwards Compatibility (optional)

All NEPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The NEP must explain how the author proposes to deal with these incompatibilities. NEP submissions without a sufficient backwards compatibility treatise may be rejected outright.

## Test Cases (optional)

Test cases for an implementation are mandatory for NEPs that are affecting consensus changes. Other NEPs can choose to include links to test cases if applicable.

## Implementation (optional)

The implementations must be completed before any NEP is given status "Final", but it need not be completed before the NEP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Security Considerations (optional)

All NEPs must contain a section that discusses the security implications/considerations relevant to the proposed change. Include information that might be important for security discussions, surfaces risks and can be used throughout the life cycle of the proposal. E.g. include security-relevant design decisions, concerns, important discussions, implementation-specific guidance and pitfalls, an outline of threats and risks and how they are being addressed. NEP submissions missing the "Security Considerations" section will be rejected. An NEP cannot proceed to status "Final" without a Security Considerations discussion deemed sufficient by the reviewers.

## References (optional)

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
