# Interface: QueueOptions

## Table of contents

### Properties

- [concurrency](QueueOptions.md#concurrency)
- [interval](QueueOptions.md#interval)
- [limit](QueueOptions.md#limit)
- [strict](QueueOptions.md#strict)

## Properties

### concurrency

• **concurrency**: `number`

The maximum number of concurrent tasks to run.

___

### interval

• `Optional` **interval**: `number`

The timespan for limit in milliseconds.

___

### limit

• `Optional` **limit**: `number`

The maximum number of calls within an interval

___

### strict

• `Optional` **strict**: `boolean`

Use a strict, more resource intensive, throttling algorithm. The default algorithm uses a windowed approach that will work correctly in most cases, limiting the total number of calls at the specified limit per interval window. The strict algorithm throttles each call individually, ensuring the limit is not exceeded for any interval.
