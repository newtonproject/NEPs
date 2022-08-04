---
NEP: 56
Title: "URI Format For Storage Mechanism"
Authors: "[Xia Wu](https://github.com/xiawu), [Qu Jianwei](https://github.com/i29), [Wei Xuefeng](https://github.com/weixuefeng), [Piao Yu](https://github.com/Jonny621)"
Discussions: https://github.com/newtonproject/NEPs/issues/56
Status: Draft
Categories: Technical
Types: NRC
Created: 2022-08-04
---

## Abstract

This standard defines the URI format for storage mechanism. This URI can then be shown either as a QR code or as a link.

## Specification

### URI Format

> 
> [protocol] :// [?region code/] [parameters] 
> 

#### Protocol

IPFS, AR, HTTP, BTFS etc.

#### Region code

These are the templete registered region code for usage

Region code | Protocol    | Application    | Server
------------|-------------|----------------|---------------------    
1           | IPFS        | MyApp          | http://www.server.com

This NEP is not a central directory for the registered region code, please visit AEPS: 
https://github.com/newtonproject/AEPs/blob/master/AEP-56.md

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).