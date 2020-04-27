# NewORG  Standard (NRC-X)

| Item | Description |
|:-|:-|
| NEP | to be assigned |
| Title | New paradigm of organization |
| Author |  [Evan Liu](mailto:evanliuchina@gmail.com), [Xia Wu](https://github.com/xiawu), [Lee Willson](https://github.com/leewillson), [Zhou Xiqiao](https://github.com/zhouxiqiao), [Yong Liu](mailto:liuyong5653@163.com), [Qu Jianwei](https://github.com/i29) |
| Discussions to | https://github.com/newtonproject/newtonapp-specs/issues/4 |
| Status | Draft |
| Type | NewOrg Template |
| Category | technical |
| Created | 2020-04-23 |
| Updated | |

This is the suggested template for NewOrg NRC-X.

## Simple Summary

牛顿生态体系中的生命力组织NewOrg模板是下一代社会治理和协作的NewDAO新范式。

## Abstract

本标准定义了基于NewChain及其智能合约技术实现NewOrg的方法和标准：
1. 基于NewChain及其智能合约技术
2. 用基于区块链技术的治理新范式取代传统股份有限公司治理范式
3. 定义一套组织治理的元规则，并将该套元规则在NewChain链层和合约层进行划分，实现了(1)元规则的业务无关性，(2)组织股份通证治理的灵活性，(3)NewChain对所有组织的抓手
4. 该模型可兼容目前NewPay中既有的锁仓节点和NewForce挖矿模型，可以比较容易迁移过来

## Motivation

用基于NewChain区块链及其智能合约技术的治理新范式取代传统股份有限公司治理范式。见下图：

![neworg_layers](neworg_layers.png)

## Specification

### Meta Data

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| name | 组织名称 | can not be changed |
| symbol | 组织通证(股份)代号 | 3-4个大写字母，如BTC、NMCT等, can not be changed |
| totalSupply | 组织通证(股份)总量 | 允许增资扩股 |
| decimals | 小数位数 | 组织通证(股份)可分粒度 |
| owner | 组织创始人 | 各种治理操作(比如扩股缩股等),规则可由合约自定义实现 |
| shareholders | 组织通证持有者(股东) | address => # of tokens |
| shareholderTypes | 组织通证持有者(股东)类型 | address => type (0 - 失效/移除; 1 - 投票人; 2 - 合伙人) |
| stakingCapital | 组织实缴质押资本(NEW) | |
| orgStatus | 组织状态 | 允许冻结(freeze/unfreeze) |

### Interaction / Functions

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
|**Owner**|
| constructor() | 创建组织通证 | permission: owner |
| addAdmin | 添加管理员 | permission: owner |
| removeAdmin | 移除管理员 | permission: owner |
| freezeOrg | 冻结组织 | permission: owner |
| unfreezeOrg | 解冻组织 | permission: owner |
| changeOwner | 更改创始人 | permission: owner |
| mint | 增发组织通证 | permission: owner |
| burn | 销毁组织通证 | permission: owner |
|**Partners/Voters**|
| mint | 增资，增发组织通证 | permission: all |
| burn | 撤资，销毁组织通证 | permission: all |
|**Query**|
| balanceOf(address) | 查询持有量 | 持有组织通证(股份)即为组织一员 |
| transfer(from, to) | 转移组织通证所有权 | |
| approve(spender, value) | 授权他人操作我持有的组织通证 | |
| allowance(owner, spender) | 查看授权情况 | |
| transferFrom(from, to, value) | 转移授权人持有的组织通证 | |
| totalSupply | 查询组织通证总量(总股数) | |
| name | 查询组织名称 |  |
| symbol | 查询组织通证(股份)代号 |  |
| totalSupply | 查询组织通证(股份)总量 |  |
| decimals | 查询小数位数 | 组织通证(股份)可分粒度 |
| owner | 查询组织创始人 |  |
| isShareholder(address) | 查询是否组织通证持有者(组织成员/股东) | |
| shareholderTypeOf(address) | 查询组织成员/股东类型 | (0 - 失效/移除; 1 - 投票人; 2 - 合伙人) |
| stakingCapital | 组织实缴质押资本(NEW) | |
| orgStatus | 组织状态 | 允许冻结(freeze/unfreeze) |

## Test Cases
TBD

## Implementation
TBD

## References

* ERC-20 https://eips.ethereum.org/EIPS/eip-20 

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
