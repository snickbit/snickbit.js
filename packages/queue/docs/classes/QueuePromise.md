# Class: QueuePromise<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Promise`<`T`\>

  ↳ **`QueuePromise`**

## Table of contents

### Constructors

- [constructor](QueuePromise.md#constructor)

### Methods

- [catch](QueuePromise.md#catch)
- [catchEach](QueuePromise.md#catcheach)
- [finally](QueuePromise.md#finally)
- [finallyEach](QueuePromise.md#finallyeach)
- [then](QueuePromise.md#then)
- [thenEach](QueuePromise.md#theneach)

## Constructors

### constructor

• **new QueuePromise**<`T`\>(`executor`, `queue`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `executor` | (`resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`, `reject`: (`reason?`: `any`) => `void`) => `void` |
| `queue` | [`Queue`](Queue.md) |

#### Overrides

Promise&lt;T\&gt;.constructor

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Queue as a whole.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onrejected?` | (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> |

#### Returns

`Promise`<`T` \| `TResult`\>

#### Overrides

Promise.catch

___

### catchEach

▸ **catchEach**(`callback`): [`QueuePromise`](QueuePromise.md)<`T`\>

Attaches a callback for the rejection of each Promise or Function in the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`CatchCallback`](../README.md#catchcallback) |

#### Returns

[`QueuePromise`](QueuePromise.md)<`T`\>

___

### finally

▸ **finally**(`onfulfilled?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Queue as a whole is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | () => `void` |

#### Returns

`Promise`<`T`\>

#### Overrides

Promise.finally

___

### finallyEach

▸ **finallyEach**(`callback`): [`QueuePromise`](QueuePromise.md)<`T`\>

Attaches a callback that is invoked when each Promise or Function in the queue is settled (fulfilled or rejected). The resolved value cannot be modified from the callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FinallyCallback`](../README.md#finallycallback) |

#### Returns

[`QueuePromise`](QueuePromise.md)<`T`\>

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Queue as a whole.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onfulfilled?` | (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> |
| `onrejected?` | (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

#### Overrides

Promise.then

___

### thenEach

▸ **thenEach**(`callback`): [`QueuePromise`](QueuePromise.md)<`T`\>

Attaches a callback for the resolution of each Promise or Function in the queue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`ThenCallback`](../README.md#thencallback) |

#### Returns

[`QueuePromise`](QueuePromise.md)<`T`\>
