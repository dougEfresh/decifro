[**decifro**](../README.md)

***

[decifro](../README.md) / ParsedIdlArgsByInstructionName

# Type Alias: ParsedIdlArgsByInstructionName\<I, Ix\>

> **ParsedIdlArgsByInstructionName**\<`I`, `Ix`\>: `{ [ArgName in Ix["args"][number]["name"]]: DecodeType<(Ix["args"][number] & { name: ArgName })["type"], IdlTypes<I>> }`

Defined in: [interfaces.ts:47](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/interfaces.ts#L47)

Instructions args with correct types for specific instruction by instruction name

## Type Parameters

• **I** *extends* `Idl`

• **Ix** *extends* `I`\[`"instructions"`\]\[`number`\]
