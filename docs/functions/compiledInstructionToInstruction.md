[**decifro**](../README.md)

***

[decifro](../README.md) / compiledInstructionToInstruction

# Function: compiledInstructionToInstruction()

> **compiledInstructionToInstruction**\<`Ix`\>(`compiledInstruction`, `parsedAccounts`): `TransactionInstruction`

Defined in: [helpers.ts:62](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/helpers.ts#L62)

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
