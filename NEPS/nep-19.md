> This file has been moved to
> https://github.com/newtonproject/NEPs/blob/main/NEPS/nep-19/index.md
> 
> **`master` branch** is archived and no longer in use.
>
> **`main` branch** is current default branch.
>
> learn more about this change on https://github.com/newtonproject/NEPs/issues/38

## NEP 19: Physical Commodity Standard (NRC-19)

| Item | Description |
|:-|:-|
| NEP | 19 |
| Title | Physical Commodity Token Standard (NRC-19) |
| Author | [Wenyan Chen](https://github.com/wenyan8082000),[Tao Jiang](https://github.com/jiangtao-tang),[Yong Liu](mailto:liuyong5653@163.com) |
| Discussions to | https://github.com/NewORG-Standard-Group/NEPs/issues/4 |
| Status | Draft |
| Type | NRC |
| Category | Technical |
| Created | 2020-05-28 |
| Updated |  |


## Simple Summary

A standard interface for Physical Commodity token

## Abstract


This template mainly uses the block chain encryption and non tampering features to verify the ownership, capital flow, receipt confirmation and other information of the physical Commodity involved in the production and circulation process, and synthesizes the information flow, capital flow and logistics flowing in the whole process of raw material suppliers, producers, channel agents, dealers and consumers through the block chain technology There is a sound system of credit value flow. The traditional production, supply and marketing system, which focuses on logistics and capital flow, is upgraded to the supply chain credit system, which solves the credit construction problem of physical Commodity in the process of production and circulation, and realizes the traceability and tracking of goods.



From manufacturing to circulation, the essence of commodities is the process of continuous interaction and confirmation among raw material suppliers, manufacturers, channel agents, distributors and consumers of information flow, capital flow and logistics, and the core of which is the supply chain system. Efficient lubrication of the supply chain system will greatly reduce the time cost and capital cost of enterprises, and improve the production efficiency of enterprises. To achieve such an efficient and lubricated supply chain system, the key is to establish a supply chain credit system, which is the key to improve production efficiency and capital efficiency, and reduce production, logistics and storage costs. The traditional solution mainly depends on the contract signed by all parties, so the contract becomes the core element for the related parties to confirm the ownership and income. The tamperable blockchain technology makes it possible to create a new paradigm of credit system under the condition of new technology. A complete blockchain credit system includes not only the individual credit of each industrial subject (such as legal registration, compliance operation, quality certification system, bank credit, etc.), but also the business reputation established by upstream and downstream manufacturers in the supply chain in the actual business cooperation, which can be fully reflected in the blockchain and cannot be tampered with.



## Motivation

There are mainly two stages in the process of commodity from scratch to consumers' purchase.



The first stage is the production stage, mainly from raw materials to production, to channel agents or distributors. The main problem in this stage is the supply chain, and the core body is the producer. Specifically, it includes the long period of signing the manufacturer's contract (purchase of raw materials and sales to channel agents or distributors), the uncertainty of the time when raw materials are transported to the factory, the high cost of raw materials storage, and the large capital pressure.



The second stage is the circulation stage, and the core body is channel agents or distributors, who directly face individual consumers. Their main problems are that they occupy a large amount of capital, have a weak control over capital efficiency and liquidity, and have a high storage cost.



In addition, for consumers, it is difficult to have objective and real data to prove the source, quality and value of the purchased Commodity. It is necessary to collect necessary data through the whole traceability system of the Internet of things, and confirm it through the tamperability of the blockchain.



A credible commodity needs not only reliable raw material supply, but also reliable manufacturers and sellers. In this way, it can not only ensure the high credibility of commodities, but also ensure the credibility of circulation links.



Each manufacturer or business in the industrial chain is responsible for its own product quality, forming a product credit island. A complete blockchain credit system running through raw material suppliers, producers, channel agents (distributors) and consumers can fundamentally solve the problems concerned by all parties in the industrial chain. Any entity in the industrial chain can confirm its upstream and downstream manufacturers or merchants in the blockchain, realize interactive verification, and then form the blockchain credit system.

## Specification

The most important document in the transaction of physical commodity is the purchase contract between the buyer and the seller. The contract will specify the quantity, specification, model, unit price, total price, payment method and other important information of this transaction.



The establishment of physical commodity supply chain credit system mainly includes the following attributes.



1. Physical properties ofcommodity: brand, product name, specification and model, production date, warranty period, precautions, etc., especially the relevant data collected through the Internet of things are more authoritative and credible.



2. Manufacturers and merchants: brand, trademark, qualification, process standard, etc.



3. Certification certificate of the third party organization: such as quality management system, safety management system, inspection and test report.



4. Government competent / regulatory authorities: such as industrial and commercial registration documents, tax documents, customs documents, etc




According to the role of commodity production and circulation, the subject attribute is defined, and the product or commodity attribute is defined according to the subject.



1. Raw material supplier: sign raw material supply and marketing contract according to the manufacturer's demand order, and provide raw materials with quality and quantity as agreed in the contract. Its main attributes include: Industrial and commercial registration documents, qualification documents, qualification documents, inspection and testing reports, quality assurance system, production standards, management system and main processes. Its raw material properties include: Specification and model, quality inspection report, main technical indicators, precautions, etc. In terms of agricultural products, tea, flowers, fruits and vegetables, the raw material supplier also refers to the main body of breeding, and its main attributes also include the weather data related to temperature, humidity, precipitation, fertilization and irrigation during the breeding process. The data form includes video, which can be real-time or non real-time.



2. Product manufacturer: according to the production plan, sign the raw material supply and marketing contract with the raw material supplier, and pay the corresponding amount to the raw material supplier. According to the needs of channel agents or distributors, sign sales contracts with them, collect payment for commodity and provide goods. Its main attributes include: Industrial and commercial registration documents, qualification documents, qualification documents, inspection and testing reports, quality assurance system, production standards, management system and main processes. Its commodity attributes include: Specification and model, quality inspection report, main technical indicators, precautions, etc.



3. Channel agent or distributor: sign supply and marketing contract with commodity manufacturer, pay for commodity, and promote sales to consumers. Collect payment from consumers and provide them with commodity and services. Its main attributes include: Industrial and commercial registration documents, qualification documents, qualification documents, inspection and testing reports. Its commodity attributes include: Specification and model, quality inspection report, main technical indicators, precautions, etc.; its operation attributes include information of goods on and off the shelf, marketing activities, discounts, points, etc.



4. Logistics service provider: an enterprise that provides logistics services in raw materials, commodities, retail and other links. Its main attributes include: Industrial and commercial registration documents, qualification documents and qualification documents. Its service attributes include data information in the logistics process, such as cargo location information, expected delivery information, transporter information, and, if necessary, temperature, humidity and other information in the vehicle body.



5. Consumers: place orders with dealers, pay for goods and purchase commodity. In addition to personal information, it also includes return and exchange information, payment and refund information, receiving information, complaints, etc.



In the process of commodity production and circulation, the core users are producers and channel agents / distributors. With the extension of the supply chain, the ownership of raw materials and commodities will also be transferred with the execution of corresponding contracts. That is to say, a complete and reliable commodity blockchain, in addition to the main physical properties of this commodity, should include the blockchain of raw materials or products of its upstream major suppliers.

### Meta Data

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| Owner                       | Create Commodity Token                                          |                      |
| Commodity                   |Commodity Info.：TokenId、Contracts、URL、Partners token: raw material suppliers, manufacturers, channel agents, distributors。|                      |

### Interaction / Functions 

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
|Mint | Create Commodity Token | permission：Owner |
| Transfer | transfer own to Partners NEW Address | permission: Neworg |
| Get Extension String | get extension string data |  |
| Set Extension String  | set extension string data | permission: Owner |


## Rationale (optional)

The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.

## Backwards Compatibility (optional)

All NEPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The NEP must explain how the author proposes to deal with these incompatibilities. NEP submissions without a sufficient backwards compatibility treatise may be rejected outright.

## Test Cases (optional)

Take the production and sales of new energy vehicles as an example. New energy vehicle manufacturers will have several core suppliers, such as automobile chassis, motor, battery pack and battery management system, automobile glass, etc. The blockchain of new energy vehicles will include its supplier contract, the blockchain of supplier products (automobile chassis, motor, battery pack and battery management system, automobile glass, etc.). The blockchain of new energy vehicles will also be delivered to auto agents or dealers, and finally to consumers.

## Implementation (optional)

The implementations must be completed before any NEP is given status "Final", but it need not be completed before the NEP is accepted. While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Security Considerations


## References

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
