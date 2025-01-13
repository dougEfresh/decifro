[**decifro**](../README.md)

***

[decifro](../README.md) / SolanaParser

# Class: SolanaParser

Defined in: [parsers.ts:82](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L82)

Class for parsing arbitrary solana transactions in various formats
- by txHash
- from raw transaction data (base64 encoded or buffer)
- @solana/web3.js getTransaction().message object
- @solana/web3.js getParsedTransaction().message or Transaction.compileMessage() object
- @solana/web3.js TransactionInstruction object

## Constructors

### new SolanaParser()

> **new SolanaParser**(`programInfos`, `parsers`?): [`SolanaParser`](SolanaParser.md)

Defined in: [parsers.ts:92](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L92)

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

## Methods

### addParser()

> **addParser**(`programId`, `parser`): `void`

Defined in: [parsers.ts:128](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L128)

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

***

### addParserFromIdl()

> **addParserFromIdl**(`programId`, `idl`): `void`

Defined in: [parsers.ts:137](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L137)

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

***

### parseInstruction()

> **parseInstruction**\<`I`, `IxName`\>(`instruction`): [`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`I`, `IxName`\>

Defined in: [parsers.ts:203](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L203)

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

***

### parseLookupTable()

> **parseLookupTable**(`connection`, `tx`): `Promise`\<\{ `lookup`: `LoadedAddresses`; `tx`: `VersionedTransaction`; \}\>

Defined in: [parsers.ts:278](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L278)

Parses lookup table address from a serialized transactions

#### Parameters

##### connection

`Connection`

the Rpc Connection to use

##### tx

base64-encoded string or raw Buffer which contains tx dump

`string` | `Buffer`

#### Returns

`Promise`\<\{ `lookup`: `LoadedAddresses`; `tx`: `VersionedTransaction`; \}\>

LoadedAddresses the Lookup table addresses

***

### parseTransactionByHash()

> **parseTransactionByHash**(`connection`, `txId`, `flatten`, `commitment`): `Promise`\<[`ParserResults`](../interfaces/ParserResults.md) \| [`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]\>

Defined in: [parsers.ts:245](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L245)

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

`Promise`\<[`ParserResults`](../interfaces/ParserResults.md) \| [`ParsedInstruction`](../type-aliases/ParsedInstruction.md)\<`Idl`, `string`\>[]\>

list of parsed instructions

***

### parseTransactionData()

> **parseTransactionData**\<`T`\>(`txMessage`, `altLoadedAddresses`): [`ParserResults`](../interfaces/ParserResults.md)

Defined in: [parsers.ts:219](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L219)

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

[`ParserResults`](../interfaces/ParserResults.md)

list of parsed instructions

***

### parseTransactionDump()

> **parseTransactionDump**(`connection`, `txDump`): `Promise`\<[`ParserResults`](../interfaces/ParserResults.md)\>

Defined in: [parsers.ts:267](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L267)

Parses transaction dump

#### Parameters

##### connection

`Connection`

##### txDump

base64-encoded string or raw Buffer which contains tx dump

`string` | `Buffer`

#### Returns

`Promise`\<[`ParserResults`](../interfaces/ParserResults.md)\>

list of parsed instructions

***

### parseTx()

> **parseTx**(`tx`, `lookup`): [`ParserResults`](../interfaces/ParserResults.md)

Defined in: [parsers.ts:310](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L310)

Parses a base64 transaction

#### Parameters

##### tx

`string`

base64-encoded transaction

##### lookup

`LoadedAddresses`

LoadedAddresses used for v0 messages

#### Returns

[`ParserResults`](../interfaces/ParserResults.md)

list of parsed instructions

***

### removeParser()

> **removeParser**(`programId`): `void`

Defined in: [parsers.ts:185](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/parsers.ts#L185)

Removes parser for provided program id

#### Parameters

##### programId

`PublicKey`

program id to remove parser for

#### Returns

`void`
