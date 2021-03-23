---
NEP: 45
Title: NewChain Ledger Node Incentive Program
Authors: "[Xu Jizhe](mailto:xujizhe@newtonproject.org), [Aris AC](mailto:hi@aris.ac), [Vie Yang](mailto:mailto:yangchenzhong@gmail.com)"
Discussions: "https://github.com/newtonproject/NEPs/issues/45"
Status: Implemented
Categories: Community Governance
Created: 2021-03-19
---

## Simple Summary

This NEP defines how _NewChain Ledger Node Incentive_ is used from **Newton Incentive Program** in [NEP-40](../nep-40/index.md).

## Motivation

[NEP-40](../nep-40/index.md) proposed **Newton Incentive Program** and a 20% of NEW from that program will be used to _NewChain Ledger Nodes_. A specification of implementation is required for that, which comes to this **NewChain Ledger Node Incentive Program**.

## Specification

### Prerequisites for Ledger Node

1. Having an active _Community Node_.

2. At least `10,000,000` NEW of total staking in the _Community Node_.

- For the _partnership_ node, the total staking is added by the staking of the owner and the staking of the partners.
- For the _non-partnership_ node, the total staking is staked by the owner.

3. Run a NewChain Node and apply to become the _Ledger Node_ on _NewChain Mainnet_, details described in [NEP-27](../nep-27/index.md).

### Incentive Distribution

The Incentive to Ledger Nodes is distributed each day until the Incentive Program end.

Only the owner of the _Ledger Node_ will receive the incentive since it is the owner who manages the _Ledger Node_.

#### Incentive Period

`Incentive_Period`: total days since Incentive Program implemented on _NewChain Mainnet_ until 2022/1/31 (included).

#### Total Incentive Amount

`Total_Incentive`: `175026053.57892763572` NEW, which defined in [NEP-40](../nep-40/index.md).

#### Total Daily Incentive Amount

`Total_Daily_Incentive` = `Total_Incentive / Incentive_Period`

#### Owner Staking Amount

`Owner_Staking`: The amount of NEW staked by the owner of the _Ledger Node_.

#### Total Staking Amount

`Total_Staking`: Total amount of NEW staked by the owners of All _Ledger Node_.

#### Staking Snapshot

The staking amount for each _Ledger Node_ is based on the snapshot of the first block created after UTC-0 each day.

#### Node Daily Incentive

For each qualified _Ledger Node_, the amount of NEW from **NewChain Ledger Node Incentive Program** on each day:

`Node_Daily_Incentive` = `Total_Daily_Incentive * Owner_Staking / Total_Staking`

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
