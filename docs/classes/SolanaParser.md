[**yasp**](../README.md)

***

[yasp](../README.md) / SolanaParser

# Class: SolanaParser

Class for parsing arbitrary solana transactions in various formats
- by txHash
- from raw transaction data (base64 encoded or buffer)
- @solana/web3.js getTransaction().message object
- @solana/web3.js getParsedTransaction().message or Transaction.compileMessage() object
- @solana/web3.js TransactionInstruction object

## Constructors

### new SolanaParser()

> **new SolanaParser**(`programInfos`, `parsers`?): [`SolanaParser`](SolanaParser.md)

Initializes parser object
`SystemProgram`, `TokenProgram` and `AssociatedTokenProgram` are supported by default
but may be overridden by providing custom idl/custom parser

#### Parameters

##### programInfos

[`ProgramInfoType`](../interfaces/ProgramInfoType.md)[]

list of objects which contains programId and corresponding idl

##### parsers?

[`InstructionParserInfo`](../type-aliases/InstructionParserInfo.md)[]

list of pairs (programId, custom parser)

#### Returns

[`SolanaParser`](SolanaParser.md)

#### Defined in

parsers.ts:92

## Methods

### addParser()

> **addParser**(`programId`, `parser`): `void`

Adds (or updates) parser for provided programId

#### Parameters

##### programId

`PublicKey`

program id to add parser for

##### parser

[`ParserFunction`](../type-aliases/ParserFunction.md)\<`Idl`, `string`\>

parser to parse programId instructions

#### Returns

`void`

#### Defined in

parsers.ts:127

***

### addParserFromIdl()

> **addParserFromIdl**(`programId`, `idl`): `void`

Adds (or updates) parser for provided programId

#### Parameters

##### programId

program id to add parser for

`string` | `PublicKey`

##### idl

`Idl`

IDL that describes anchor program

#### Returns

`void`

#### Defined in

parsers.ts:136

***

### parseInstruction()

> **parseInstruction**\<`I`, `IxName`\>(`instruction`): [`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`I`, `IxName`\>

Parses instruction

#### Type Parameters

• **I** *extends* `Idl`

• **IxName** *extends* `string`

#### Parameters

##### instruction

`TransactionInstruction`

transaction instruction to parse

#### Returns

[`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`I`, `IxName`\>

parsed transaction instruction or UnknownInstruction

#### Defined in

parsers.ts:202

***

### parseTransactionByHash()

> **parseTransactionByHash**(`connection`, `txId`, `flatten`, `commitment`): `Promise`\<[`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]\>

Fetches tx from blockchain and parses it

#### Parameters

##### connection

`Connection`

web3 Connection

##### txId

`string`

transaction id

##### flatten

`boolean` = `false`

true if CPI calls need to be parsed too

##### commitment

`Finality` = `"confirmed"`

#### Returns

`Promise`\<[`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]\>

list of parsed instructions

#### Defined in

parsers.ts:234

***

### parseTransactionData()

> **parseTransactionData**\<`T`\>(`txMessage`, `altLoadedAddresses`): [`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]

Parses transaction data

#### Type Parameters

• **T** *extends* `VersionedMessage`

#### Parameters

##### txMessage

`T`

message to parse

##### altLoadedAddresses

`T` *extends* `VersionedMessage` ? `LoadedAddresses` : `undefined` = `undefined`

VersionedTransaction.meta.loaddedAddresses if tx is versioned

#### Returns

[`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]

list of parsed instructions

#### Defined in

parsers.ts:218

***

### parseTransactionDump()

> **parseTransactionDump**(`connection`, `txDump`): `Promise`\<[`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]\>

Parses transaction dump

#### Parameters

##### connection

`Connection`

##### txDump

base64-encoded string or raw Buffer which contains tx dump

`string` | `Buffer`

#### Returns

`Promise`\<[`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]\>

list of parsed instructions

#### Defined in

parsers.ts:256

***

### removeParser()

> **removeParser**(`programId`): `void`

Removes parser for provided program id

#### Parameters

##### programId

`PublicKey`

program id to remove parser for

#### Returns

`void`

#### Defined in

parsers.ts:184
