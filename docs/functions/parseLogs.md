[**yasp**](../README.md)

***

[yasp](../README.md) / parseLogs

# Function: parseLogs()

> **parseLogs**(`logs`): [`ProgramLogContext`](../type-aliases/ProgramLogContext.md)[]

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

## Defined in

helpers.ts:334
