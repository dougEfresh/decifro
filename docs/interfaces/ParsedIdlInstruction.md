[**yasp**](../README.md)

***

[yasp](../README.md) / ParsedIdlInstruction

# Interface: ParsedIdlInstruction\<I, IxName\>

## Type Parameters

• **I** *extends* `Idl`

• **IxName** *extends* [`InstructionNames`](../type-aliases/InstructionNames.md)\<`I`\> = [`InstructionNames`](../type-aliases/InstructionNames.md)\<`I`\>

## Properties

### accounts

> **accounts**: [`IdlAccountsToFlatMeta`](../type-aliases/IdlAccountsToFlatMeta.md)\<[`IxByName`](../type-aliases/IxByName.md)\<`I`, `IxName`\>\[`"accounts"`\], `""`\>

Parsed accounts

#### Defined in

interfaces.ts:90

***

### args

> **args**: [`ParsedIdlArgs`](../type-aliases/ParsedIdlArgs.md)\<`I`, `IxName`\>

Parsed arguments

#### Defined in

interfaces.ts:88

***

### name

> **name**: `IxName`

Instruction name

#### Defined in

interfaces.ts:85

***

### programId

> **programId**: `PublicKey`

#### Defined in

interfaces.ts:86
