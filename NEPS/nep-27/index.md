---
NEP: 27
Title: "NewChain MainNet Opening"
Authors: "X-Team"
Discussions: https://github.com/newtonproject/NEPs/pull/27
Status: Draft
Categories: Community Governance
Types: Process
Created: 2020-11-03
Updated: 2020-12-07
---

### Simple Summary

After NewChain TestNet successful opening, NewChain MainNet is going to be opened by inviting the community to setup, run and maintain the ledger nodes.

### Abstract

In current stage, NewChain MainNet would still run with PoA (Proof-of-Authority) consensus mechanism for producing blocks.
Hence a certain amount of staking would be required for keeping the ledger nodes honest and not be malicious to harm the network.

Also more than a half pre-existing ledger nodes will be kept running in the beginning stage for keeping the network safe for a smooth transition to the next stage.

Once a community ledger node is activated, it would start to collect gas fees in the blocks it produces.

Also a reasonable split of the daily release of the NewPool will be allocated to reward the ledger nodes proportional to the number of blocks it successfully produced and accepted by the network.

The left part of the daily release of the NewPool will be still allocated to reward the virtual "community node" staking, including the staking by the ledger nodes.

According to the nature of the PoA consensus, all the ledger nodes, including that are run by the community, can vote to include or exclude a certain ledger node to join or leave the newtork, by means of a CLI command or relative NewPay function.

### Motivation

To improve the openness of NewChain MainNet, involve the community to run the network and benefit from it, create more solid consensus of the whole Newton ecosystem as well as enhance the decentralization of the newtork, this proposal is drafted for the whole Newton community to review and going to implement once reviewed.

### Specification

Technical specifications can be found at those documents respectively:

- [newchain-nodes](https://github.com/newtonproject/newchain-nodes): Deployment manual for setting up a NewChain node.

### Implementation

Adoption of the content of this NEP requires the following steps:

**Phase 0. Dry-run**

1. The miner should be a qualified NewChain TestNet ledger node first.
2. Any miner who want to participate MainNet mining should create a staking "community node" in NewPay and lock in AT LEAST 10,000,000 NEW.
3. The miner who want to participate MainNet mining should setup the MainNet ledger node first according to the document above.
4. The miner should prepare a self-introductory information disclosure like below, and submit:
	- node name: LEDGER-XXX (please change the XXX to your favorite words)
	- staking "community node" name and staking amount: (as staked in the "community node" in NewPay)
	- how you will contribute to promote Newton: (please fill the text in the description field in the "community node" in NewPay)
5. The joined ledger nodes then vote for new ledger nodes to be involved into the network.

**Phase 1. Sustainability**

The NewPool release allocation program as well as the NewForce program will be upgraded to split the daily released NEW from NewPool to allocate to 
1. "community nodes" ; and 
2. ledger nodes 

Other "virtual" NewForce mining that are not on-chain verifiable, such as NewMall "buy to mine", will be deprecated forever.

Economic calculation will be detailed out later soon before phase 1 is to be kicked start.

**Phase 2. Self-Governance**

In the first stage, the ledger nodes will be coordinated to vote for a new node to join, or a node to leave the network, by means of either
1. to ask the nodes to execute a CLI command to vote; or
2. to ask the nodes to click to vote via NewPay.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

