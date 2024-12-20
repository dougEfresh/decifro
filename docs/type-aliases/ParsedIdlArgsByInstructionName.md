[**yasp**](../README.md)

***

[yasp](../README.md) / ParsedIdlArgsByInstructionName

# Type Alias: ParsedIdlArgsByInstructionName\<I, Ix\>

> **ParsedIdlArgsByInstructionName**\<`I`, `Ix`\>: `{ [ArgName in Ix["args"][number]["name"]]: DecodeType<(Ix["args"][number] & { name: ArgName })["type"], IdlTypes<I>> }`

Instructions args with correct types for specific instruction by instruction name

## Type Parameters

• **I** *extends* `Idl`

• **Ix** *extends* `I`\[`"instructions"`\]\[`number`\]

## Defined in

interfaces.ts:49
