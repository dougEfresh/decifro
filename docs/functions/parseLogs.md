[**decifro**](../README.md)

***

[decifro](../README.md) / parseLogs

# Function: parseLogs()

> **parseLogs**(`logs`): [`ProgramLogContext`](../type-aliases/ProgramLogContext.md)[]

Defined in: [helpers.ts:334](https://github.com/dougEfresh/decifro/blob/052cf31bd09649eda8a05a939745830a399bb74d/src/helpers.ts#L334)

Parses transaction logs and provides additional context such as
- programId that generated the message
- call id of instruction, that generated the message
- call depth of instruction
- data messages, log messages and error messages

## Parameters

### logs

`string`[]

logs from TransactionResponse.meta.logs

## Returns

[`ProgramLogContext`](../type-aliases/ProgramLogContext.md)[]

parsed logs with call depth and additional context
