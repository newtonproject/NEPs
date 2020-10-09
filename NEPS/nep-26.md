
# NEP 26: Boom: EVM and Protocol Upgrades

| Item | Description |
|:-|:-|
| NEP | 26 |
| Title | Boom: EVM and Protocol Upgrades |
| Author | newchain |
| Discussions to | https://github.com/newtonproject/NEPs/issues/26 |
| Status | Implemented |
| Type | Process |
| Category | Technical |
| Created | 2020-08-03 |


### Simple Summary

Enable the outstanding Ethereum Foundation _Constantinople_, _St. Petersburg_ and _Istanbul_ network protocol upgrades on the NewChain network in a hard-fork code-named _Boom_ to enable maximum compatibility across these networks.

### Abstract

Add support for a subset of protocol-impacting changes introduced in the Ethereum Foundation (ETH) network via the _Constantinople_, _St. Petersburg_ and _Istanbul_ hardforks. The proposed changes for NewChain's _Boom_ upgrade include:

- Bitwise shifting instructions in EVM
- Skinny CREATE2
- EXTCODEHASH opcode
- Net gas metering for SSTORE without dirty maps
- Add Blake2 compression function `F` precompile
- Reduce alt_bn128 precompile gas costs
- Add ChainID opcode
- Repricing for trie-size-dependent opcodes
- Calldata gas cost reduction
- Rebalance net-metered SSTORE gas cost with consideration of SLOAD gas cost change

This document proposes the following blocks at which to implement these changes in the NewChain networks:

- `17181218` on NewChain testnet (2020-08-08 08:06:26 UTC+8)
- `18500000` on NewChain mainnet (2020–09–20 20:59:42 UTC+8)

For more information on the opcodes and their respective EIPs and implementations, please see the _Specification_ section of this document.

### Motivation

To enhance the Ethereum Virtual Machine's (EVM) capabilities, various opcodes shall be added to the NewChain networks, all of which have been in use on the Ethereum Foundation networks.

### Specification

Technical specifications for each EIP can be found at those documents respectively:

- [EIP-145](https://eips.ethereum.org/EIPS/eip-145): Bitwise shifting instructions in EVM
- [EIP-1014](https://eips.ethereum.org/EIPS/eip-1014): Skinny CREATE2
- [EIP-1014](https://eips.ethereum.org/EIPS/eip-1052): EXTCODEHASH opcode
- [EIP-1283](https://eips.ethereum.org/EIPS/eip-1283): Net gas metering for SSTORE without dirty maps
- [EIP-152](https://eips.ethereum.org/EIPS/eip-152): Add Blake2 compression function `F` precompile
- [EIP-1108](https://eips.ethereum.org/EIPS/eip-1108): Reduce alt_bn128 precompile gas costs
- [EIP-1344](https://eips.ethereum.org/EIPS/eip-1344): Add ChainID opcode
- [EIP-1884](https://eips.ethereum.org/EIPS/eip-1884): Repricing for trie-size-dependent opcodes
- [EIP-2028](https://eips.ethereum.org/EIPS/eip-2028): Calldata gas cost reduction
- [EIP-2200](https://eips.ethereum.org/EIPS/eip-2200): Rebalance net-metered SSTORE gas cost with consideration of SLOAD gas cost change

### Implementation

Adoption of the content of this NEP requires a hard fork as it introduces changes that are not backward compatible.

The [newchain](https://github.com/newtonproject/newchain) implement this features currently and would be able to support the _Boom_ upgrade.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

