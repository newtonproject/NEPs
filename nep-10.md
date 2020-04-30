# NEP 10: Invoice Token Standard
| Item | Description |
|:-|:-|
| NEP | to be assigned |
| Title | Invoice Token Standard |
| Author | [Yong Liu](mailto:liuyong5653@163.com), [Evan Liu](mailto:evanliuchina@gmail.com) |
| Discussions to | https://github.com/newtonproject/NEPs/issues/10 |
| Status | Draft |
| Type | Token Template |
| Category | Technical |
| Created | 2020-04-29 |
| Updated |  |

## Simple Summary

A standard interface for invoice token.

## Abstract

The following standard allows for the implementation of a standard API for invoice token within smart contracts. This standard provides basic functionality to issue、reimburse and invalidate invoice token.

## Motivation

A standard interface allows tax/invoice/financial applications to work with invoice token on NewChain. We provide for simple invoiceToken smart contracts as well as contracts that track an arbitrarily large number of invoice tokens.  
The invoice token will curb malpractice and document forgery in taxation and simplify procedures.

## Specification

### Meta Data

| Item | Description | Behaviors/Properties |
|:-|:-|:-|
| Owner | can take full control of contract | deploy contract, add/remove addmin, set fee |
| Admin | manage enterprise | authorize/revoke enterprise |
| Enterprise | manage token(Invoice)  | issue/reimburse/invalidate token |
| Fee | issue token(invoice) fee | uint ISSAC |
| FeeAddress | fee withdrawal to this address | |
| Invoice | contains operatorAddress, sellerTaxNumber, buyerTaxNumber, operatorName, invoiceInfo, status, financial | status: positive、negative(reversal)、blank cancellation、cancellation, financial: received、recorded |

### Interaction / Functions

| Function | Description | Behaviors/Properties |
|:-|:-|:-|
|**owner**|
| addAdmin | add admin to this contract | permission: owner |
| removeAdmin | remove admin from this contract | permission: owner |
| setFee | set issue fee，uint ISSAC | permission: owner |
| setFeeAddress | set issue fee withdrawal address | permission: owner |
| withdraw | withdrawal to feeAddress | permission: owner |
|**admin**|
| authorize | authorized _enterpriseAddress to join contract | permission: admin |
| revoke | revoke _enterpriseAddress from this contract | permission: admin |
|**enterprise**|
| issue | issue new token(Invoice) by msg.sender | permission: enterprise |
| issueFrom | issue new token(Invoice) by the approved address of the seller | permission: enterprise |
| reimburse | change Invoice financial status from received to recorded | permission: enterprise |
| invalidate | change Invoice status from positive to _newStatus | permission: enterprise |
| setApprovalForAll | enable or disable approval for a third party ("operator") to manage all of `msg.sender`'s invoice token | permission: enterprise |
|**Query**|
| totalSupply | return issue invoices fee total |  |
| balanceOfSeller | return sell invoices count | |
| balanceOfBuyer | return buy invoices count | |
| tokenById | return Invoice info | |
| getFee | return issue invoice fee | |
| getFeeSum | return contract revenue | |
| getFeeBalance | return contract balance | |
| isApprovedForAll | check is authorizationed | |
| isExist | check token is existed | |

## Test Cases

The reference implementation contains all the [tests](https://gitlab.newtonproject.org/newton-invoice/newton-invoice-contract/tree/master/test).

## Implementation
```solidity
pragma solidity ^0.5.0;

interface INRC10{
    ///////////////////////////////////////////////////
    //       function for owner                      //
    ///////////////////////////////////////////////////
    
    event AdminAdded(address _admin);
    function addAdmin (address _admin) external public onlyOwner;

    event AdminRemoved(address _admin);
    function removeAdmin (address _admin) external public onlyOwner;

    event SetFeeSeted(uint _fee);
    //set issue fee，uint ISSAC
    function setFee(uint _fee) external public onlyOwner;
    
    event FeeAddressSeted(address _feeAddress);
    //set issue fee withdrawal address
    function setFeeAddress(address payable _feeAddress) external public onlyOwner;

    event FeeAndFeeAddressSeted(uint _fee, address _feeAddress);
    function setFeeAndFeeAddress(uint _fee, address payable _feeAddress) external public onlyOwner;

    event WithdrawalSuccess(address indexed _to, uint _amount);
    //uint ISSAC
    function withdraw(uint _withraw_amount) external public onlyOwner;

    ///////////////////////////////////////////////////
    //       function for admin                      //
    ///////////////////////////////////////////////////

    event AuthorizeSuccess(address _admin, address _enterpriseAddress, string _taxNumber);
    //authorized enterprise to join contract
    function authorize (address _enterpriseAddress, string memory _taxNumber) external public;

    event RevokeSuccess(address _admin, address _enterpriseAddress);
    //revoke enterprise
    function revoke (address _enterpriseAddress) external public;

    ///////////////////////////////////////////////////
    //       function for enterprise                 //
    ///////////////////////////////////////////////////

    event Issued(address _send, string _from, string _to, bytes32 _tokenId);
    //issue Invoice
    function issue(string memory _to, bytes32 _tokenId, string memory _operatorName, string memory _invoiceInfo) external payable public;

    function issueFrom(string memory _from, string memory _to, bytes32 _tokenId, string memory _operatorName, string memory _invoiceInfo) external payable public;

    event ReimburseSuccess(address _enterprise, bytes32 _tokenId);
    function reimburse(bytes32 _tokenId) external public;

    event InvalidateSuccess(address _enterprise, bytes32 _tokenId, uint8 _newStatus);
    function invalidate(bytes32 _tokenId, uint8 _newStatus) external public;

    event ApprovalForAllSeted(address _from, address _operator, bool _approved);

    function setApprovalForAll(address _operator, bool _approved) external public;

    ///////////////////////////////////////////////////
    //       function for all                        //
    ///////////////////////////////////////////////////
    //return issue invoices total
    function totalSupply() external public view returns (uint);

    //return sell invoices count
    function balanceOfSeller(string memory _taxNumber) external public view returns (uint);

    // return buy invoices count
    function balanceOfBuyer(string memory _taxNumber) external public view returns (uint);

    //return issue invoice fee, uint ISSAC
    function getFee()  external public view returns (uint);

    //return contract revenue，uint ISSAC
    function getFeeSum()  external public view returns (uint);

    //return contract balance，uint ISSAC
    function getFeeBalance()  external public view returns (uint);

    //return is authorizationed
    function isApprovedForAll(address _owner, address _operator)  external public view returns (bool);

    //return invoce info
    function tokenById(bytes32 _tokenId) external public view returns;

    function isExist(bytes32 _tokenId)  external public view returns (bool);
}

```

The [reference implementation](https://gitlab.newtonproject.org/newton-invoice/newton-invoice-contract)

## References
1. ERC-721 Token Standard. https://eips.ethereum.org/EIPS/eip-721

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
