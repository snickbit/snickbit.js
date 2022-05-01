# @snickbit/queue

## Table of contents

### Interfaces

- [QueueOptions](interfaces/QueueOptions.md)

### Type aliases

- [AnyFunction](README.md#anyfunction)

### Functions

- [default](README.md#default)

## Type aliases

### AnyFunction

Ƭ **AnyFunction**: (...`args`: `any`[]) => `any` \| `Promise`<`any`\>

#### Type declaration

▸ (...`args`): `any` \| `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any` \| `Promise`<`any`\>

## Functions

### default

▸ **default**(`options?`): (`fn`: [`AnyFunction`](README.md#anyfunction), ...`args`: `any`[]) => `Promise`<`any`\>

Simple function queueing & throttling

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`QueueOptions`](interfaces/QueueOptions.md) |

#### Returns

`fn`

▸ (`fn`, ...`args`): `Promise`<`any`\>

Add a task to the queue

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`AnyFunction`](README.md#anyfunction) | The function to call |
| `...args` | `any`[] | The arguments to pass to the function |

##### Returns

`Promise`<`any`\>
