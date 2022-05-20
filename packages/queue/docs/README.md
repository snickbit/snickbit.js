# @snickbit/queue

## Table of contents

### Classes

- [AbortQueueError](classes/AbortQueueError.md)
- [Queue](classes/Queue.md)
- [QueueError](classes/QueueError.md)
- [QueueException](classes/QueueException.md)
- [QueuePromise](classes/QueuePromise.md)

### Interfaces

- [QueueConfiguration](interfaces/QueueConfiguration.md)
- [QueueErrorJSON](interfaces/QueueErrorJSON.md)

### Type aliases

- [CatchCallback](README.md#catchcallback)
- [DynamicError](README.md#dynamicerror)
- [ErrorMessage](README.md#errormessage)
- [FinallyCallback](README.md#finallycallback)
- [QueueConfigurationValue](README.md#queueconfigurationvalue)
- [QueueOption](README.md#queueoption)
- [QueueOptions](README.md#queueoptions)
- [QueueOptionsValue](README.md#queueoptionsvalue)
- [QueueTask](README.md#queuetask)
- [QueueTaskFunction](README.md#queuetaskfunction)
- [QueueTaskPromise](README.md#queuetaskpromise)
- [ThenCallback](README.md#thencallback)

### Functions

- [queue](README.md#queue)

## Type aliases

### CatchCallback

Ƭ **CatchCallback**: (`error`: [`QueueException`](classes/QueueException.md)) => `any` \| `Promise`<`any`\>

#### Type declaration

▸ (`error`): `any` \| `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`QueueException`](classes/QueueException.md) |

##### Returns

`any` \| `Promise`<`any`\>

___

### DynamicError

Ƭ **DynamicError**: `Error` & { `[key: string]`: `any`;  }

___

### ErrorMessage

Ƭ **ErrorMessage**: `string` \| [`DynamicError`](README.md#dynamicerror) \| { `[key: string]`: `any`;  } \| `any`[]

___

### FinallyCallback

Ƭ **FinallyCallback**: () => `any` \| `Promise`<`any`\>

#### Type declaration

▸ (): `any` \| `Promise`<`any`\>

##### Returns

`any` \| `Promise`<`any`\>

___

### QueueConfigurationValue

Ƭ **QueueConfigurationValue**: [`QueueConfiguration`](interfaces/QueueConfiguration.md)[keyof [`QueueConfiguration`](interfaces/QueueConfiguration.md)]

___

### QueueOption

Ƭ **QueueOption**: keyof [`QueueConfiguration`](interfaces/QueueConfiguration.md)

___

### QueueOptions

Ƭ **QueueOptions**: `Partial`<[`QueueConfiguration`](interfaces/QueueConfiguration.md)\>

___

### QueueOptionsValue

Ƭ **QueueOptionsValue**: [`QueueOptions`](README.md#queueoptions)[keyof [`QueueOptions`](README.md#queueoptions)]

___

### QueueTask

Ƭ **QueueTask**: [`QueueTaskPromise`](README.md#queuetaskpromise) \| [`QueueTaskFunction`](README.md#queuetaskfunction)

___

### QueueTaskFunction

Ƭ **QueueTaskFunction**: (...`args`: `any`[]) => [`QueueTaskPromise`](README.md#queuetaskpromise) \| `any`

#### Type declaration

▸ (...`args`): [`QueueTaskPromise`](README.md#queuetaskpromise) \| `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

[`QueueTaskPromise`](README.md#queuetaskpromise) \| `any`

___

### QueueTaskPromise

Ƭ **QueueTaskPromise**: `Promise`<`any`\>

___

### ThenCallback

Ƭ **ThenCallback**: (`result`: `any`) => `any` \| `Promise`<`any`\>

#### Type declaration

▸ (`result`): `any` \| `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

##### Returns

`any` \| `Promise`<`any`\>

## Functions

### queue

▸ **queue**(`options?`): [`Queue`](classes/Queue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`QueueConfiguration`](interfaces/QueueConfiguration.md)\> |

#### Returns

[`Queue`](classes/Queue.md)
