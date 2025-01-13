[**decifro**](../README.md)

***

[decifro](../README.md) / ParsedIdlInstruction

# Interface: ParsedIdlInstruction\<I, IxName\>

Defined in: [interfaces.ts:81](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L81)

## Type Parameters

• **I** *extends* `Idl`

• **IxName** *extends* [`InstructionNames`](../type-aliases/InstructionNames.md)\<`I`\> = [`InstructionNames`](../type-aliases/InstructionNames.md)\<`I`\>

## Properties

### accounts

> **accounts**: [`IdlAccountsToFlatMeta`](../type-aliases/IdlAccountsToFlatMeta.md)\<[`IxByName`](../type-aliases/IxByName.md)\<`I`, `IxName`\>\[`"accounts"`\], `""`\>

Defined in: [interfaces.ts:88](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L88)

Parsed accounts

***

### args

> **args**: [`ParsedIdlArgs`](../type-aliases/ParsedIdlArgs.md)\<`I`, `IxName`\>

Defined in: [interfaces.ts:86](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L86)

Parsed arguments

***

### name

> **name**: `IxName`

Defined in: [interfaces.ts:83](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L83)

Instruction name

***

### programId

> **programId**: `PublicKey`

Defined in: [interfaces.ts:84](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L84)
