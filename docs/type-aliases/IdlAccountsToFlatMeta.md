[**decifro**](../README.md)

***

[decifro](../README.md) / IdlAccountsToFlatMeta

# Type Alias: IdlAccountsToFlatMeta\<T, Prefix\>

> **IdlAccountsToFlatMeta**\<`T`, `Prefix`\>: `T` *extends* \[infer First, `...(infer Rest)`\] ? `First` *extends* [`IdlInstructionAccounts`](IdlInstructionAccounts.md) ? \[`` ...IdlAccountsToFlatMeta<First["accounts"], `${Prefix}${First["name"]}.`> ``, `...IdlAccountsToFlatMeta<Rest extends IdlInstructionAccountItem2[] ? Rest : [], Prefix>`\] : `First` *extends* [`IdlInstructionAccount`](IdlInstructionAccount.md) ? \[\{ `isSigner`: `First`\[`"signer"`\] *extends* `boolean` ? `First`\[`"signer"`\] : `false`; `isWritable`: `First`\[`"writable"`\] *extends* `boolean` ? `First`\[`"writable"`\] : `false`; `name`: `` `${Prefix}${First["name"]}` ``; `pubkey`: `PublicKey`; \}, `...IdlAccountsToFlatMeta<Rest extends IdlInstructionAccountItem2[] ? Rest : [], Prefix>`\] : `never` : \[\]

Defined in: [interfaces.ts:106](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L106)

## Type Parameters

• **T** *extends* [`IdlInstructionAccountItem2`](IdlInstructionAccountItem2.md)[]

• **Prefix** *extends* `string` = `""`
