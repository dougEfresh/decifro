[**yasp**](../README.md)

***

[yasp](../README.md) / IdlAccountsToFlatMeta

# Type Alias: IdlAccountsToFlatMeta\<T, Prefix\>

> **IdlAccountsToFlatMeta**\<`T`, `Prefix`\>: `T` *extends* [infer First, `...(infer Rest)`] ? `First` *extends* [`IdlInstructionAccounts`](IdlInstructionAccounts.md) ? [...IdlAccountsToFlatMeta\<First\["accounts"\], \`$\{Prefix\}$\{First\["name"\]\}.\`\>, `...IdlAccountsToFlatMeta<Rest extends IdlInstructionAccountItem2[] ? Rest : [], Prefix>`] : `First` *extends* [`IdlInstructionAccount`](IdlInstructionAccount.md) ? [`object`, `...IdlAccountsToFlatMeta<Rest extends IdlInstructionAccountItem2[] ? Rest : [], Prefix>`] : `never` : []

## Type Parameters

• **T** *extends* [`IdlInstructionAccountItem2`](IdlInstructionAccountItem2.md)[]

• **Prefix** *extends* `string` = `""`

## Defined in

interfaces.ts:108
