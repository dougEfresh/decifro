[**decifro**](../README.md)

***

[decifro](../README.md) / flattenTransactionResponse

# Function: flattenTransactionResponse()

> **flattenTransactionResponse**(`transaction`): `TransactionInstruction`[]

Defined in: [helpers.ts:119](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/helpers.ts#L119)

Converts transaction response with CPI into artifical transaction that contains all instructions from tx and CPI

## Parameters

### transaction

`VersionedTransactionResponse`

transactionResponse to convert from

## Returns

`TransactionInstruction`[]

Transaction object
