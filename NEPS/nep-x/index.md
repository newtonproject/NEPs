---
NEP: X
Title: "Fee market change for NewChain"
Authors: "newchain"
Discussions: https://github.com/newtonproject/NEPs/issues/x
Status: Draft
Categories: Technical
Types: Process
Created: 2022-03-03
---

### Simple Summary

This proposal proposes a transaction pricing mechanism, based on Ether [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559), for NewChain that forces to burn a minimum amount per block, while exempting the consensus layer transactions from network fee.

### Abstract

As described in [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559), we introduce a new
[EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) transaction type,
with the format `0x02 || rlp([chain_id, nonce, max_priority_fee_per_gas, max_fee_per_gas, gas_limit, destination, amount, data, access_list, signature_y_parity, signature_r, signature_s])`.

There is a base fee per gas in protocol, which can move up or down each block according to a formula which is a function of gas used in parent block and gas target (block gas limit divided by elasticity multiplier) of parent block.
The algorithm results in the base fee per gas increasing when blocks are above the gas target, and decreasing when blocks are below the gas target.
The base fee per gas is burned.
Transactions specify the maximum fee per gas they are willing to give to miners to incentivize them to include their transaction (aka: priority fee).
Transactions also specify the maximum fee per gas they are willing to pay total (aka: max fee), which covers both the priority fee and the block's network fee per gas (aka: base fee).
The transaction will always pay the base fee per gas of the block it was included in, and they will pay the priority fee per gas set in the transaction, as long as the combined amount of the two fees doesn't exceed the transaction's maximum fee per gas.

Newton makes a unique improvement on this basis by setting a minimum value of BaseFee, that each gas has a minimum burn fee, to avoid the problem of low minimum burn value of each gas due to low network transaction volume.
At the same time, the network fee for consensus layer transactions is exempted in order to be compatible with the characteristics of Newton consensus.

### Motivation

Newton historically priced transaction fees using a simple auction mechanism, where users send transactions with bids (“gasprices”) and miners choose transactions with the highest bids, and transactions that get included pay the bid that they specify. At the same time, Newton node miners functioning normally are able to receive consensus layer rewards NEWNEW so that miners receive both the user's transaction fee and the consensus layer rewards.

An important aspect of this fee system is that miners only get to keep the priority fee. The base fee is always burned (i.e. it is destroyed by the protocol).This ensures that only NEW can ever be used to pay for transactions on Newton, cementing the economic value of NEW within the Newton platform.
Additionally, this burn counterbalances Newton inflation while still giving the block reward and priority fee to miners.
Finally, ensuring the miner of a block does not receive the base fee is important because it removes miner incentive to manipulate the fee in order to extract more fees from users.

### Specification

As of `FORK_BLOCK_NUMBER`, the `BaseFee` of per block *MUST* not less than `BaseFeeMin` where:

- `BaseFeeMin` is the minimum BaseFee and the value is `250000000000000`

*Note: `//` is integer division, round down.*
```python
from typing import Union, Dict, Sequence, List, Tuple, Literal
from dataclasses import dataclass, field
from abc import ABC, abstractmethod

@dataclass
class TransactionLegacy:
	signer_nonce: int = 0
	gas_price: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	v: int = 0
	r: int = 0
	s: int = 0

@dataclass
class Transaction2930Payload:
	chain_id: int = 0
	signer_nonce: int = 0
	gas_price: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	access_list: List[Tuple[int, List[int]]] = field(default_factory=list)
	signature_y_parity: bool = False
	signature_r: int = 0
	signature_s: int = 0

@dataclass
class Transaction2930Envelope:
	type: Literal[1] = 1
	payload: Transaction2930Payload = Transaction2930Payload()

@dataclass
class Transaction1559Payload:
	chain_id: int = 0
	signer_nonce: int = 0
	max_priority_fee_per_gas: int = 0
	max_fee_per_gas: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	access_list: List[Tuple[int, List[int]]] = field(default_factory=list)
	signature_y_parity: bool = False
	signature_r: int = 0
	signature_s: int = 0

@dataclass
class Transaction1559Envelope:
	type: Literal[2] = 2
	payload: Transaction1559Payload = Transaction1559Payload()

Transaction2718 = Union[Transaction1559Envelope, Transaction2930Envelope]

Transaction = Union[TransactionLegacy, Transaction2718]

@dataclass
class NormalizedTransaction:
	signer_address: int = 0
	signer_nonce: int = 0
	max_priority_fee_per_gas: int = 0
	max_fee_per_gas: int = 0
	gas_limit: int = 0
	destination: int = 0
	amount: int = 0
	payload: bytes = bytes()
	access_list: List[Tuple[int, List[int]]] = field(default_factory=list)

@dataclass
class Block:
	parent_hash: int = 0
	uncle_hashes: Sequence[int] = field(default_factory=list)
	author: int = 0
	state_root: int = 0
	transaction_root: int = 0
	transaction_receipt_root: int = 0
	logs_bloom: int = 0
	difficulty: int = 0
	number: int = 0
	gas_limit: int = 0 # note the gas_limit is the gas_target * ELASTICITY_MULTIPLIER
	gas_used: int = 0
	timestamp: int = 0
	extra_data: bytes = bytes()
	proof_of_work: int = 0
	nonce: int = 0
	base_fee_per_gas: int = 0

@dataclass
class Account:
	address: int = 0
	nonce: int = 0
	balance: int = 0
	storage_root: int = 0
	code_hash: int = 0

INITIAL_BASE_FEE = 1000000000
INITIAL_FORK_BLOCK_NUMBER = 10 # TBD
BASE_FEE_MAX_CHANGE_DENOMINATOR = 8
ELASTICITY_MULTIPLIER = 2
BASE_FEE_MIN = 250000000000000 # Newton

class World(ABC):
	def validate_block(self, block: Block) -> None:
		parent_gas_target = self.parent(block).gas_limit // ELASTICITY_MULTIPLIER
		parent_gas_limit = self.parent(block).gas_limit

		# on the fork block, don't account for the ELASTICITY_MULTIPLIER to avoid
		# unduly halving the gas target.
		if INITIAL_FORK_BLOCK_NUMBER == block.number:
			parent_gas_target = self.parent(block).gas_limit
			parent_gas_limit = self.parent(block).gas_limit * ELASTICITY_MULTIPLIER

		parent_base_fee_per_gas = self.parent(block).base_fee_per_gas
		parent_gas_used = self.parent(block).gas_used
		transactions = self.transactions(block)

		# check if the block used too much gas
		assert block.gas_used <= block.gas_limit, 'invalid block: too much gas used'

		# check if the block changed the gas limit too much
		assert block.gas_limit < parent_gas_limit + parent_gas_limit // 1024, 'invalid block: gas limit increased too much'
		assert block.gas_limit > parent_gas_limit - parent_gas_limit // 1024, 'invalid block: gas limit decreased too much'

		# check if the gas limit is at least the minimum gas limit
		assert block.gas_limit >= 5000

		# check if the base fee is correct
		if INITIAL_FORK_BLOCK_NUMBER == block.number:
			expected_base_fee_per_gas = INITIAL_BASE_FEE
		elif parent_gas_used == parent_gas_target:
			expected_base_fee_per_gas = parent_base_fee_per_gas
		elif parent_gas_used > parent_gas_target:
			gas_used_delta = parent_gas_used - parent_gas_target
			base_fee_per_gas_delta = max(parent_base_fee_per_gas * gas_used_delta // parent_gas_target // BASE_FEE_MAX_CHANGE_DENOMINATOR, 1)
			expected_base_fee_per_gas = parent_base_fee_per_gas + base_fee_per_gas_delta
      expected_base_fee_per_gas = max(expected_base_fee_per_gas, BASE_FEE_MIN) # Newton
		else:
			gas_used_delta = parent_gas_target - parent_gas_used
			base_fee_per_gas_delta = parent_base_fee_per_gas * gas_used_delta // parent_gas_target // BASE_FEE_MAX_CHANGE_DENOMINATOR
			expected_base_fee_per_gas = parent_base_fee_per_gas - base_fee_per_gas_delta
      expected_base_fee_per_gas = max(expected_base_fee_per_gas, BASE_FEE_MIN) # Newton
		assert expected_base_fee_per_gas == block.base_fee_per_gas, 'invalid block: base fee not correct'

		# execute transactions and do gas accounting
		cumulative_transaction_gas_used = 0
		for unnormalized_transaction in transactions:
			# Note: this validates transaction signature and chain ID which must happen before we normalize below since normalized transactions don't include signature or chain ID
			signer_address = self.validate_and_recover_signer_address(unnormalized_transaction)
			transaction = self.normalize_transaction(unnormalized_transaction, signer_address)

			signer = self.account(signer_address)

			signer.balance -= transaction.amount
			assert signer.balance >= 0, 'invalid transaction: signer does not have enough ETH to cover attached value'
			# the signer must be able to afford the transaction
			assert signer.balance >= transaction.gas_limit * transaction.max_fee_per_gas

      # Newton: consensus layer transactions exemptions
      if not is_consensus_layer_transaction(transaction):
  			# ensure that the user was willing to at least pay the base fee
  			assert transaction.max_fee_per_gas >= block.base_fee_per_gas

			# Prevent impossibly large numbers
			assert transaction.max_fee_per_gas < 2**256
			# Prevent impossibly large numbers
			assert transaction.max_priority_fee_per_gas < 2**256
			# The total must be the larger of the two
			assert transaction.max_fee_per_gas >= transaction.max_priority_fee_per_gas

			# priority fee is capped because the base fee is filled first
			priority_fee_per_gas = min(transaction.max_priority_fee_per_gas, transaction.max_fee_per_gas - block.base_fee_per_gas)
			# signer pays both the priority fee and the base fee
			effective_gas_price = priority_fee_per_gas + block.base_fee_per_gas
      # Newton: consensus layer transactions exemptions
      if is_consensus_layer_transaction(transaction):
        priority_fee_per_gas = 0
        effective_gas_price = 0
			signer.balance -= transaction.gas_limit * effective_gas_price
			assert signer.balance >= 0, 'invalid transaction: signer does not have enough ETH to cover gas'
			gas_used = self.execute_transaction(transaction, effective_gas_price)
			gas_refund = transaction.gas_limit - gas_used
			cumulative_transaction_gas_used += gas_used
			# signer gets refunded for unused gas
			signer.balance += gas_refund * effective_gas_price
			# miner only receives the priority fee; note that the base fee is not given to anyone (it is burned)
			self.account(block.author).balance += gas_used * priority_fee_per_gas

		# check if the block spent too much gas transactions
		assert cumulative_transaction_gas_used == block.gas_used, 'invalid block: gas_used does not equal total gas used in all transactions'

		# TODO: verify account balances match block's account balances (via state root comparison)
		# TODO: validate the rest of the block

	def normalize_transaction(self, transaction: Transaction, signer_address: int) -> NormalizedTransaction:
		# legacy transactions
		if isinstance(transaction, TransactionLegacy):
			return NormalizedTransaction(
				signer_address = signer_address,
				signer_nonce = transaction.signer_nonce,
				gas_limit = transaction.gas_limit,
				max_priority_fee_per_gas = transaction.gas_price,
				max_fee_per_gas = transaction.gas_price,
				destination = transaction.destination,
				amount = transaction.amount,
				payload = transaction.payload,
				access_list = [],
			)
		# 2930 transactions
		elif isinstance(transaction, Transaction2930Envelope):
			return NormalizedTransaction(
				signer_address = signer_address,
				signer_nonce = transaction.payload.signer_nonce,
				gas_limit = transaction.payload.gas_limit,
				max_priority_fee_per_gas = transaction.payload.gas_price,
				max_fee_per_gas = transaction.payload.gas_price,
				destination = transaction.payload.destination,
				amount = transaction.payload.amount,
				payload = transaction.payload.payload,
				access_list = transaction.payload.access_list,
			)
		# 1559 transactions
		elif isinstance(transaction, Transaction1559Envelope):
			return NormalizedTransaction(
				signer_address = signer_address,
				signer_nonce = transaction.payload.signer_nonce,
				gas_limit = transaction.payload.gas_limit,
				max_priority_fee_per_gas = transaction.payload.max_priority_fee_per_gas,
				max_fee_per_gas = transaction.payload.max_fee_per_gas,
				destination = transaction.payload.destination,
				amount = transaction.payload.amount,
				payload = transaction.payload.payload,
				access_list = transaction.payload.access_list,
			)
		else:
			raise Exception('invalid transaction: unexpected number of items')

	# Newton: consensus layer transactions
	@abstractmethod
	def is_consensus_layer_transaction(self, transaction: Transaction) -> bool: pass

	@abstractmethod
	def parent(self, block: Block) -> Block: pass

	@abstractmethod
	def block_hash(self, block: Block) -> int: pass

	@abstractmethod
	def transactions(self, block: Block) -> Sequence[Transaction]: pass

	# effective_gas_price is the value returned by the GASPRICE (0x3a) opcode
	@abstractmethod
	def execute_transaction(self, transaction: NormalizedTransaction, effective_gas_price: int) -> int: pass

	@abstractmethod
	def validate_and_recover_signer_address(self, transaction: Transaction) -> int: pass

	@abstractmethod
	def account(self, address: int) -> Account: pass
```

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
