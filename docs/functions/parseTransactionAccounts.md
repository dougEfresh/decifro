[**decifro**](../README.md)

***

[decifro](../README.md) / parseTransactionAccounts

# Function: parseTransactionAccounts()

> **parseTransactionAccounts**\<`T`\>(`message`, `loadedAddresses`): `AccountMeta`[]

Defined in: [helpers.ts:28](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/helpers.ts#L28)

Parse transaction message and extract account metas

## Type Parameters

• **T** *extends* `VersionedMessage`

## Parameters

### message

`T`

transaction message

### loadedAddresses

`T` *extends* `VersionedMessage` ? `LoadedAddresses` : `undefined` = `undefined`

## Returns

`AccountMeta`[]

parsed accounts metas
