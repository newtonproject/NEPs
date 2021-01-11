---
NEP: 29
Title: "NewPay Community Node Migration"
Authors: "X-Team"
Discussions: https://github.com/newtonproject/NEPs/pull/29
Status: Draft
Categories: Community Governance
Types: Process
Created: 2020-11-04
Updated: 2020-12-09
---

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

- [Current "community nodes"](https://legacy-explorer.newtonproject.org/nodes): A comprehensive list of the current "community nodes" as well as the stats.
- [NewSwap](https://newswap.org): The official site of NewSwap.
- [NewAsset Generator](https://www.newtonproject.org/newasset-generator/): The token issuance tool.


### Implementation

Adoption of the content of this NEP requires the following phases:

**Phase 0. Preparation.**

In phase 0, several criteria for a "community node" would be lowered as follows:
- the minimum amount of NEW to be staked for creating a "community node" will be lowered to 1,000,000 NEW.
- the minimum required votes for a "community node" to be elected will be lowered to 0.

The effective date would be officially announced beforehand.

**Phase 1. Migration.**

Phase 1 would include the following steps:

Step 1. Freeze.

1. At a specific date and time announced in advance for at least 20 days, the "community node" feature will be frozen. No more "community node" would be allowed to create, and no "community node" would be allowed to unlock and quit, until the step 2 airdrop is finished.
2. During the frozen period, all "community nodes" will receive daily mined NEW as usual, until step 2 airdrop.


Step 2. Migrate.

1. The owner/creator of each "community nodes" (referred as "the node owner") would be required to calculate the NEW staking amount and issue a token (called "cToken") for this node with exactly the same amount of the total supply. [NewAsset Generator](https://www.newtonproject.org/newasset-generator/) could be used for this task.

```
cToken definition:

Symbol: 2-4 letters abbreviated from the node name, for example, ABC.
Name: the node name.
Amount: exactly the same amount with the staking amount of NEW in this node as frozen in step 1.
Precision: 18
Mintability: DISABLED.
```

2. The node owner will then submit an application to NewSwap for joining the Node Mining Area of NewSwap. The node owner would be required to transfer 100% of the issued cToken to NewSwap airdrop address, for being distributed to original node stakeholders through on-chain airdrop, according to the staked NEW in a pro rata basis.
3. All the cToken will be airdropped to each specific person who staked NEW in this "community node" via either founding/co-founding the node or voting for the node.
4. The "community node" will be unfrozen, for everyone to unlock the staked NEW immediately. The original NEW mining will be stopped at the same time.
5. The node owner will create a liquidity pool for the cToken paired with NEW and put the cToken and NEW (in a reasonable ratio in your rationale and as you wish) into the liquidity pool and get the LP tokens of cToken-NEW.
6. Each who joins the liquidity pool can then put the cToken-NEW LP tokens into the Node Mining Area of NewSwap for being ready to mine NEW. Later on, the person can read the mining contract to check out the amount of LP tokens he/she owns, and withdraw them as he/she wants.

The roadmap and deadline for this step will be announced before the migration begins.

Step 3. Yield Farming.

1. Once all the "community nodes" are settled and all cToken-NEW LP tokens are correctly locked up into the mining contract as the announce deadline in step 2, the liquidity mining will be activated.
2. Farmers, i.e. LP token owners, will receive NEW for yield farming. All farmers will share a certain amount of NEW yielded with each block. The amount of NEW received will be decided by the following formula:

```
 locked LP token amount * LP token price against NEW 
------------------------------------------------------ * the amount of NEW yielded with a certain block
   ∑(LP token amount * LP token price against NEW)
```

Please note that the LP token price against NEW will be updated once a day for the performance consideration on the smart contract execution.

3. The mined NEW are generated from NewPool daily release. For more information on the NewPool release, please refer to [NEP-27 NewChain MainNet Opening](https://github.com/newtonproject/NEPs/blob/master/NEPS/nep-27/index.md).


Step 4. Join and Leave.

Join:
1. Prepare a certain amount of NEW, for example, 1,000,000 NEW.
2. Issue a token that will be used as cToken, with the same amount of the NEW in point 1, and the mintability disabled. [NewAsset Generator](https://www.newtonproject.org/newasset-generator/) could be used for this task.
3. Create the liquidity pool with cToken:NEW (in a reasonable ratio in your rationale and as you wish) and get all the LP tokens.
4. Submit an application for joining the Node Mining Area.
5. Once it is correctly configured, the applicant can then put his/her LP tokens into the mining contract to start yield farming.

Leave:
1. Just simply remove the LP tokens from the mining contract.


Step 5. End.

After 1 year yield farming, the Node Mining Area will be closed.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

