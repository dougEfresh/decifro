[**decifro**](../README.md)

***

[decifro](../README.md) / ParserFunction

# Type Alias: ParserFunction()\<I, IxName\>

> **ParserFunction**\<`I`, `IxName`\>: (`arg`) => [`ParsedInstruction`](ParsedInstruction.md)\<`I`, `IxName`\>

Defined in: [interfaces.ts:32](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L32)

Function that takes transaction ix and returns parsed variant

## Type Parameters

• **I** *extends* `Idl`

• **IxName** *extends* [`InstructionNames`](InstructionNames.md)\<`I`\>

## Parameters

### arg

`TransactionInstruction`

## Returns

[`ParsedInstruction`](ParsedInstruction.md)\<`I`, `IxName`\>
