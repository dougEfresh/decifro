[**yasp**](../README.md)

***

[yasp](../README.md) / compiledInstructionToInstruction

# Function: compiledInstructionToInstruction()

> **compiledInstructionToInstruction**\<`Ix`\>(`compiledInstruction`, `parsedAccounts`): `TransactionInstruction`

Converts compiled instruction into common TransactionInstruction

## Type Parameters

• **Ix** *extends* `CompiledInstruction` \| `MessageCompiledInstruction`

## Parameters

### compiledInstruction

`Ix`

### parsedAccounts

`AccountMeta`[]

account meta, result of [parseTransactionAccounts](parseTransactionAccounts.md)

## Returns

`TransactionInstruction`

TransactionInstruction

## Defined in

helpers.ts:62
