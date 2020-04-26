# NewORG  Standard

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

This is the suggested template for org NEPs.

## Simple Summary

牛顿生态体系中的生命力组织NewOrg模板是下一代社会治理和协作的NewDAO新范式。

## Abstract

基于NewChain的全栈式区块链技术，NewOrg中的链上组织管理，制度激励、信息同步、任务追踪、提案投票等治理功能可帮助实现：

组织通过收款进行融资，并记录股权占比；

发起支出提案，公示资金使用用途（或以投票方式进行核准）；

盈利组织，可根据贡献度，进行收益发放；

组织账目可视化。

## Motivation

实体企业的创建，有一定的门槛，需要各级审批。企业内做到公开透明，是件很复杂的事情。

此标准对于不需要实体企业，又需要创建一个公正、公开的组织形式，提供了一套治理方法。

我们希望，自由组织可以通过合约模板方便的创建，做到账目公开透明，财务流向清晰，全员可参与。

组织可以事件跟踪，任务派发，并且融入工作量证明，达到全员共建状态。

## Specification

### Meta Data

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| OrgName | Name of token, 3-5 letters | can not be changed |
| Owner | 组织创始人 | add/remove addmin |
| Admins | 组织的管理者 | add/remove member |
| Members | 组织成员 | |
| lockFee | 创建组织锁定的NEW | |
| orgStatus | 组织状态 | |
| Messages | 消息公告 | |
| Tasks | 任务 | |
| Proposal | 提案 | |
| Property | 资产 | |

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
