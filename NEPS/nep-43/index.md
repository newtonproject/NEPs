---
NEP: 43
Title: Change On Community Node NEW Unlocking Period
Authors: "[Xu Jizhe](mailto:xujizhe@newtonproject.org), [Aris AC](mailto:hi@aris.ac)"
Discussions: "https://github.com/newtonproject/NEPs/issues/43"
Status: Draft
Categories: Community Governance
Created: 2021-03-15
---

## Simple Summary

This proposal changes the Community Node NEW unlocking period from `14` days to `7` days for _owners_ and _partners_ to unlock their staked NEW. Making the unlocking period the same as _voters_ to unlock their staked NEW.

## Abstract

In NewPay App, unlock NEW for Community Node _owners/partners_ from their staked NEW will be changed from `14` days to `7` days to help them to get their NEW back faster. This requires changes to be made in NewPay App and related protocols and services.

## Motivation 

NewChain MainNet Nodes are open to the public to join after [NEP-27](../NEP-27/index.md) was proposed. And Newton Incentive Program was proposed in [NEP-40](../NEP-40/index.md), which creates more possibilities for the community to participates in the Newton eco-system and benefits from that.

Before [NEP-27](../NEP-27/index.md) and [NEP-40](../NEP-40/index.md), the majority community to get benefits from Newton Incentives was done by participating in Community Node Program in NewPay App. However, the Community Nodes management has to be done in NewPay App which runs on rules before [NEP-27](../NEP-27/index.md) and [NEP-40](../NEP-40/index.md) was proposed. Currently for Community Node _owners/partners_ to unlock staked NEW to participate in other Newton Incentive Programs require `14` days, this reduces the flow of NEW in the whole Newton eco-system, also it creates inequality between the Community Node _owners/partners_ and Community Node Voters to unlock their NEW.

This NEP is to reduce the complexities in Community Node management in NewPay App, make equality to all Community Node participants to unlock their NEW. As a result to encourage Community Node participants to use their NEW to participate in more Newton Incentive Programs.

## Specification 

The unlocking period for Community Node will be set for `7` days for:

- Community Node _owners_ to unlock staked NEW by reducing the locked amount, quitting Community Node.
- Community Node _partners_ to unlock staked NEW by reducing the locked amount.
- Community Node _voters_ to unlock staked NEW by reducing the locked amount.

This may be changed in the future by another NEP superseding this NEP.

## Implementation 

This proposal is planned to be implemented on:

- NewChain Testnet: 2021-03-17
- NewChain Mainnet: 2021-03-19

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
