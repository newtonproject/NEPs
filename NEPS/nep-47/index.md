---
NEP: 47
Title: Parameter Updates on Community Node and vote
Authors: "[Xu Jizhe](mailto:xujizhe@newtonproject.org), [Zhou Xiqiao](https://github.com/zhouxiqiao), [Vie Yang](mailto:yangchenzhong@gmail.com)"
Discussions: https://github.com/newtonproject/NEPs/issues/47
Status: Implemented
Categories: Community Governance
Created: 2021-04-02
---

## Simple Summary

This proposal contains parameter changes on community node mining, including NEW staking period, mining reward calculation, and minumam lock amount.

## Abstract

Changes on NewPay:
- Change NEW staking period on community node and vote.
- Change minumam lock amount on community node and vote to 10000 NEW.
- Change community node NF factor to 1, same as community vote NF factor.

## Motivation

NewChain MainNet ledger nodes are open to public since NEP-27 has been implemented. According to NEP-40, Newton community has more posibilities to participate in Newon ecosystem and get rewards. NEP-45 provides an incentive plan for ledger nodes to make sure the Newton network is more open and stable.

NEP-27, NEP-40, and NEP-45 has been implemented. This proposal is made in order to make Newton network more open and more equitable, to motivate Newton community to participate in the ledger nodes bookkeeping, liquidity mining, which are mentioned in NEP-40, and to increase the liquidity of NEW.

The proposal is designed to reduce the complexity of the management of community nodes in the Newpay App, and enable all community members to join in the Newton Incentive Plan freely. Therefore, community participants are encouraged to use their NEW to participate in all Newton Incentive Programs, including but not limited to Newpay Community Node Mining, ledger Node Mining, and liquidity mining.

## Specification

### Changes on staking rules of community node and community vote

Community node vote could add or reduce staking at any time, specifically the following below:
- Allow community node owners (including partner node owners) create or quit a node at any time, add or reduce staking at any time.
- Allow community node members (including partner node members) join or quit a node at any time, add or reduce staking at any time.
- Allow community node voters vote or quit a node at any time, add or reduce staking at any time.

The following rules remain same:

- Added/reduced staking NEW is effective after 24 hours, which means the changed part of NEW will not be counted in NewForce reward.

### Changes on NEW unlock periods of community node and community vote

- Community node owners (including partner node owners) unlock period changes from `7` days to `0` day, which means unlocked NEW will be returned immediately.
- Community node members unlock period changes from `7` days to `0` day, which means unlocked NEW will be returned immediately.
- Community node voters unlock period changes from `7` days to `0` day, which means unlocked NEW will be returned immediately.
- Allow partner node owners could quit and unlock NEW at any time. The partner node will be removed when all partners quitted.

### Minimum staking amount

- Changes minimum staking amount of community node from `1000000` NEW to `10000` NEW
- Changes minimum staking amount of partner node owner from `1000000` NEW to `10000` NEW
- Changes minimum staking amount of partner node member from `1000000` NEW to `10000` NEW
- The minimum staking amount of community vote remains same as `10000` NEW


## Changes on community node mining NewForce factor

- Change community node NewForce factor from `2` to `1`
- Community vote NewForce Factor remains same as `1`
- Change community node additional NewForce factor from vote from `1` to `0`


Explanation:

1. All staking NEW will be calculated equally. Each 10000 NEW staking everyday will get 1 NewForce.
2. The original intensions of these changes above is aligning all amounts and periods on community mining to keep it equal, simple and clear.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).