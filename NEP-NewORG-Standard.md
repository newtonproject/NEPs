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
| owner | 组织创始人 | add/remove addmin |
| admins | 组织的管理者 | add/remove shareholders |
| shareholders | 组织通证持有者(股东) | address => # of tokens |
| shareholder_types | 组织通证持有者(股东)类型 | address => type (0 - 失效/移除; 1 - 投票人; 2 - 合伙人) |
| stakingCapital | 组织实缴质押资本(NEW) | |
| orgStatus | 组织状态 | 允许冻结(freeze/unfreeze) |

### Interaction / Functions

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
|**Owner**|
| create | 创建组织 | permission: owner |
| initData | 初始化组织信息 | permission: owner |
| enableOrg | 激活组织 | permission: owner |
| addAdmin | 添加管理员 | permission: owner |
| removeAdmin | 移除管理员 | permission: owner |
| closeOrg | 关闭组织 | permission: owner |
| changeOwner | 更改创始人 | permission: owner |
|**Admin**|
| modifyJoinFee | 修改订阅费 | permission: owner/admin |
| removeMember | 剔除成员 | permission: owner/admin |
|**Member**|
| joinOrg | 加入组织 |  |
| renewal | 续费 | permission: member |
| exitOrg | 退出组织 | permission: member |
|**Message**|
| submitMessage | 提交消息 | permission: owner/admin |
| editMessage | 编辑消息 | permission: owner/admin |
| deleteMessage | 删除消息 | permission: owner/admin |
|**Tasks**|
| submitTask | 发布任务 | permission: owner/admin |
| taskReward | 任务奖励 | permission: owner/admin |
| editTask | 编辑任务 | permission: owner/admin |
| pickTask | 领取任务 |  |
| finishTask | 完成任务 |  |
| checkTask | 审核任务 | permission: owner/admin |
| closeTask | 关闭任务 | permission: owner/admin |
|**Proposal**|
| submitProposal | 发布提案 | permission: owner/admin |
| vote | 投票 |  |
| closeProposal | 关闭提案 | permission: owner/admin |
|**Property**|
| income | 入账 |  |
| expend | 出帐 |  |
| donate | 捐赠 |  |
|**Query**|
| getOwner | 查询合约创始人 |  |
| isAdmin | 查询是否为管理员 |  |
| isMember | 查询是否为组织成员 | |
| getLockFee | 查询锁定金额 | |
| getOrgStatus | 查询组织状态 | |
| getMessage | 查询消息详情 | |
| getTask | 查询任务 | |
| getPropose | 查询提案 | |
| getVote | 查询投票 | |
| getResult | 查询提案结果 | |
| getProperty | 查询资产 | |


## Test Cases
TBD

## Implementation
TBD

## References

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
