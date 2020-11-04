# NEP XX: NewPay Community Node Migration

| Item | Description |
|:-|:-|
| NEP | XX |
| Title | NewPay Community Node Migration |
| Author | Newton Foundation |
| Discussions to | https://github.com/newtonproject/NEPs/pull/XX |
| Status | Draft |
| Type | Process |
| Category | Community Governance |
| Created | 2020-11-04 |


### Simple Summary

As part of the NewChain MainNet opening strategy and upgrading plan, the current "community nodes" in NewPay for virtual mining would be migrated and resolved for paving the way of NewChain to embrace a more bright future.

This proposal will illustrate a possible solution for migrating them to be integrated into the NewSwap mining framework to also benefit the development of NewSwap.

### Abstract

The current "community nodes" in NewPay are doing "virtual mining" nowadays for daily released NEW from NewPool. The allocation of NEW are propotional to NewForce gained by each node.

With the NewChain opening strategy, ledger nodes run by the community will be involved and rewarded according to blocks they produced respectively.

NewPay "community nodes" should be migrated and resolved with regard to a smooth transition plan.

### Motivation

To facilitate the NewPay "community nodes" to be migrated and resolved within the planned transition period, this proposal is drafted for the whole Newton community to review and going to implement once reviewed.

### References

References can be found at those documents respectively:

- [Current "community nodes"](https://explorer.newtonproject.org/nodes): A comprehensive list of the current "community nodes" as well as the stats.
- [NewSwap](https://newswap.org): The official site of NewSwap.

### Implementation

Adoption of the content of this NEP requires the following steps:

**Step 1. Freeze.**

1. At a specific date and time announced in advance for at least 20 days, the "community node" feature will be frozen. No more "community node" would be allowed to create, and no "community node" would be allowed to unlock and quit, until the step 2 migration is finished.
2. During the above period, all frozen "community nodes" will receive daily mined NEW as usual.


**Step 2. Migrate.**

1. The migrator (assigned by Newton Foundation) will go through each "community nodes", calculate the NEW staking amount and issue a token (called "cToken") for this node with exactly the same amount of the total supply. 

```
cToken definition:
Symbol: abbreviated from the node name, OR customized if the node owner contacts Newton Foundation within 5 days.
Name: the node name, OR customized if the node owner contacts Newton Foundation within 5 days.
Amount: exactly the same amount with the staking amount of NEW in this node.
Precision: 18
Mintability: DISABLED.
```

2. The migrator will create a liquidity pool for the cToken paired with NEW and put the cToken and NEW (1:1) into the liquidity pool and get the LP tokens of cToken-NEW.
3. The migrator will then put the LP tokens into the NEW Mining Area of NewSwap in the name of each specific person who staked NEW in this "community node" via either founding/co-founding the node or voting for the node. Later on, the person can read the mining contract to check out the amount of LP tokens he/she owns, and withdraw them as he/she wants.


**Step 3. Yield Farming.**

1. Once all the "community nodes" are settled and all cToken-NEW LP tokens are correctly locked up into the mining contract, the liquidity mining will be activated.
2. Farmers, i.e. LP token owners, will receive xNEW tokens for yield farming. All farmers will share a certain amount of xNEW yielded with each block. The amount of xNEW received will be decided by the following formula:

```
 locked LP token amount * LP token price against NEW 
------------------------------------------------------ * the amount of xNEW yielded with a certain block
   ∑(LP token amount * LP token price against NEW)
```

Please note that the LP token price against NEW will be updated once a day for the performance consideration on the smart contract execution.

3. xNEW is 1:1 redeemable for the native coin NEW, generated from NewPool daily release. For the percentage from NewPool release, please refer to [NEP-27 NewChain MainNet Opening](https://github.com/newtonproject/NEPs/blob/master/NEPS/nep-27.md).


**Step 4. Join and Leave.**

Join:
1. Prepare a certain amount of NEW, for example, 20,000,000 NEW.
2. Issue a token that will be used as cToken, with the same amount of the NEW in point 1, and the mintability disabled. [NewAsset Generator](https://www.newtonproject.org/newasset-generator/) could be used for this task.
3. Create the liquidity pool with cToken:NEW = 1:1 and get all the LP tokens.
4. Contact Newton Foundation and submit an application for joining the NEW Mining Area. Newton Foundation will configure the LP token address to enable it.
5. Once it is correctly configured, the applicant can then put his/her LP tokens into the mining contract to start yield farming.

Leave:
1. Just simply remove the LP tokens from the mining contract.


**Step 5. End.**

After 1 year yield farming, the NEW Mining Area will be closed.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

