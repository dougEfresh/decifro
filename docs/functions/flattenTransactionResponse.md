[**yasp**](../README.md)

***

[yasp](../README.md) / flattenTransactionResponse

# Function: flattenTransactionResponse()

> **flattenTransactionResponse**(`transaction`): `TransactionInstruction`[]

Converts transaction response with CPI into artifical transaction that contains all instructions from tx and CPI

## Parameters

### transaction

`VersionedTransactionResponse`

transactionResponse to convert from

## Returns

`TransactionInstruction`[]

Transaction object

## Defined in

helpers.ts:119
