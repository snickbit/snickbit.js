# Class: Queue

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [options](Queue.md#options)
- [defaultOptions](Queue.md#defaultoptions)

### Accessors

- [active](Queue.md#active)
- [length](Queue.md#length)
- [pending](Queue.md#pending)

### Methods

- [abort](Queue.md#abort)
- [abortOnError](Queue.md#abortonerror)
- [add](Queue.md#add)
- [catchEach](Queue.md#catcheach)
- [clear](Queue.md#clear)
- [concurrency](Queue.md#concurrency)
- [finallyEach](Queue.md#finallyeach)
- [push](Queue.md#push)
- [run](Queue.md#run)
- [strategy](Queue.md#strategy)
- [thenEach](Queue.md#theneach)
- [throttle](Queue.md#throttle)
- [wait](Queue.md#wait)
- [config](Queue.md#config)

## Constructors

### constructor

• **new Queue**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`QueueConfiguration`](../interfaces/QueueConfiguration.md)\> |

## Properties

### options

• `Readonly` **options**: [`QueueConfiguration`](../interfaces/QueueConfiguration.md)

___

### defaultOptions

▪ `Static` `Readonly` **defaultOptions**: [`QueueConfiguration`](../interfaces/QueueConfiguration.md)

## Accessors

### active

• `get` **active**(): `number`

#### Returns

`number`

___

### length

• `get` **length**(): `number`

#### Returns

`number`

___

### pending

• `get` **pending**(): `number`

#### Returns

`number`

## Methods

### abort

▸ **abort**(`reason?`): `void`

Abort the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

`void`

___

### abortOnError

▸ **abortOnError**(`abortOnError`): [`Queue`](Queue.md)

Enable (or disable) the queue's abortOnError option.

#### Parameters

| Name | Type |
| :------ | :------ |
| `abortOnError` | `boolean` |

#### Returns

[`Queue`](Queue.md)

___

### add

▸ **add**(`task`): [`Queue`](Queue.md)

Add a task to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTask`](../README.md#queuetask) |

#### Returns

[`Queue`](Queue.md)

▸ **add**(`task`): [`Queue`](Queue.md)

Add a promise to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTaskPromise`](../README.md#queuetaskpromise) |

#### Returns

[`Queue`](Queue.md)

▸ **add**(`task`, `args`): [`Queue`](Queue.md)

Add a Function to the queue, along with its arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTaskFunction`](../README.md#queuetaskfunction) |
| `args` | `any`[] |

#### Returns

[`Queue`](Queue.md)

▸ **add**(`task`, `thisArg`, `args`): [`Queue`](Queue.md)

Add a Function to the queue, with its "this" context and arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | [`QueueTaskFunction`](../README.md#queuetaskfunction) |
| `thisArg` | `any` |
| `args` | `any`[] |

#### Returns

[`Queue`](Queue.md)

___

### catchEach

▸ **catchEach**(`callback`): [`Queue`](Queue.md)

Callback called for each task that throws an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`CatchCallback`](../README.md#catchcallback) |

#### Returns

[`Queue`](Queue.md)

___

### clear

▸ **clear**(): `void`

Clear the queue.

#### Returns

`void`

___

### concurrency

▸ **concurrency**(`concurrency`): [`Queue`](Queue.md)

Set the queue's concurrency.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `concurrency` | `number` | The maximum number of tasks to run at the same time. |

#### Returns

[`Queue`](Queue.md)

___

### finallyEach

▸ **finallyEach**(`callback`): [`Queue`](Queue.md)

Callback called for each task that when it is finished.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FinallyCallback`](../README.md#finallycallback) |

#### Returns

[`Queue`](Queue.md)

___

### push

▸ **push**(...`tasks`): [`Queue`](Queue.md)

Push a task or set of tasks to the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tasks` | [`QueueTask`](../README.md#queuetask)[] |

#### Returns

[`Queue`](Queue.md)

___

### run

▸ **run**(): [`QueuePromise`](QueuePromise.md)<`any`\>

Run your queue.

#### Returns

[`QueuePromise`](QueuePromise.md)<`any`\>

___

### strategy

▸ **strategy**(`strategy`): [`Queue`](Queue.md)

Set the queueing strategy. Dynamic uses slightly more resources but tends to be faster, chunked uses slightly less resources but tends to be slower. Dynamic is the default.

**`see`** https://github.com/kleinron/lite-fifo lite-fifo for benchmarks

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | ``"chunked"`` \| ``"dynamic"`` |

#### Returns

[`Queue`](Queue.md)

___

### thenEach

▸ **thenEach**(`callback`): [`Queue`](Queue.md)

Callback called for each task that successfully completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`ThenCallback`](../README.md#thencallback) |

#### Returns

[`Queue`](Queue.md)

___

### throttle

▸ **throttle**(`limit`, `interval`, `strict?`): [`Queue`](Queue.md)

Set the queue's throttling

**`example`**
// 1 task per second
myQueue.throttle(1, 1000)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | The maximum number of tasks to run per interval |
| `interval` | `number` | The interval in milliseconds |
| `strict?` | `boolean` | - |

#### Returns

[`Queue`](Queue.md)

___

### wait

▸ **wait**(): `Promise`<`any`\>

Wait for the next task to complete.

#### Returns

`Promise`<`any`\>

___

### config

▸ `Static` **config**(`options`): `void`

Set the default options for the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<[`QueueConfiguration`](../interfaces/QueueConfiguration.md)\> |

#### Returns

`void`

▸ `Static` **config**(`option`, `value`): `void`

Set a default option for the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | keyof [`QueueConfiguration`](../interfaces/QueueConfiguration.md) |
| `value` | [`QueueOptionsValue`](../README.md#queueoptionsvalue) |

#### Returns

`void`
