---
NEP: 40
Title: "Change On Community NEW Budget Plan"
Authors: "X-Team"
Discussions: https://github.com/newtonproject/NEPs/issues/40
Status: Draft
Categories: Community Governance
Types: Process
Created: 2021-01-22
Updated: 2021-01-28
---

## Simple Summary

To advance the NewChain development, the budget plan of the NEW release for the community (60% of 100B total supply) will be changed as described below. The release plan and curve will be the same as established.

## Motivation

Newton has a release plan of 60B NEW to help the community develop. Since the project launched, the released NEW has been allocated to only one project, the current NewPay Community Node mining (Proof-of-Stake). To better grow the value of Newton as well as activate the community, here we propose a program called Newton Incentive Program to allocate budgets from the coming year release to support more mining projects in such aspects:

1. to subsidize main-net machine nodes for realizing the opening of Newton ledgering network.
2. to have more LPs (Liquidity Providers) for build a better liquidity, especially NEW/NUSDT, in NewSwap, for attracting more trades from centralized exchange (Huobi, etc) to our own on-chain exchange.
3. to encourage community transferring their original Proof-of-Stake mining in NewPay to liquidity mining with their own community token in NewSwap, which will greatly help improving the value of Newton.

The first step and goal for the incentive program is to plan the budget of the coming year from the release plan, which is kept unchanged. If it works well in practice, there would be following programs in the next year and after, which will be decided later by the future community governance.

## Abstract

The total supply of NEW is 100B, 60% of which is subjected to the community.

It can be divided into three parts as below:

1. release will be implemented before 2021/2/1: 1545232707.3505096555 NEW
2. one year budget (2021/2/1-2022/1/31) for incentives: 875130267.8946381786 NEW
3. the rest: 57579637024.7548521659 NEW (will be decided by the future community governance)

The seconds part will be used for supporting the Newton Incentive Program.

## Newton Incentive Program

The current NewPay node stake mining will be smoothly transitioned since 2021/2, then a Newton Incentive Program will be initiated:

Program budget: the same as above, No. 2

Themes:
| *No* | *Mining Theme* | *Incentivized Behavior* | *Budget Cap* |
|-|-|-|-|
| 1 | Machine node | Ledgering | 20% (175026053.57892763572 NEW) |
| 2 | LP of mainstream assets, such as NEW/NUSDT | Providing liquidity | 30% (262539080.36839145358 NEW) |
| 3 | Community Token mining (cToken/NEW)  | Issuing tokens | 25% (218782566.973659544650 NEW) |
| 4 | Pre-existing NewPay Community Node mining | Maintaining community | no less than 25% (218782566.973659544650 NEW)* |

The concrete allocation of the above budget will be laterly announced by each different implementation projects.

*Comments: The pre-existing NewPay Community Node mining rewards will be continued. When one of the implementation projects of the Incentive Program is launched, its budget will be allocated from the total budget, and no more than the budget cap as listed above, that means the NewPay Community Node mining rewards will be reduced the same amount as allocated since then but guaranteed to be never less than 25%. 

## Implementation

Adoption of the content of this NEP requires the following phases:

**Phase 0. Preparation.**

1. Launch of NewBridge.
2. Launch of NewSwap LP mining of mainstream assets.

**Phase 1. Execution.**

Execute [NEP-29 NewPay Community Node Migration](../nep-29/index.md).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
