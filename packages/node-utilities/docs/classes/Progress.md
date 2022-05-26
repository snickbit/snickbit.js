# Class: Progress

Progress bar. Uses cli-progress and @snickbit/out to output progress.

**`see`** https://github.com/npkgz/cli-progress

## Hierarchy

- **`Progress`**

  ↳ [`MultiProgress`](MultiProgress.md)

## Table of contents

### Constructors

- [constructor](Progress.md#constructor)

### Properties

- [bar](Progress.md#bar)
- [options](Progress.md#options)
- [out](Progress.md#out)

### Methods

- [eta](Progress.md#eta)
- [fail](Progress.md#fail)
- [finish](Progress.md#finish)
- [message](Progress.md#message)
- [set](Progress.md#set)
- [setTotal](Progress.md#settotal)
- [start](Progress.md#start)
- [stop](Progress.md#stop)
- [tick](Progress.md#tick)
- [update](Progress.md#update)

## Constructors

### constructor

• **new Progress**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

## Properties

### bar

• **bar**: `SingleBar`

___

### options

• **options**: [`ProgressConfig`](../interfaces/ProgressConfig.md)

___

### out

• **out**: `Out`

## Methods

### eta

▸ **eta**(): `string` \| `number`

Get the ETA

#### Returns

`string` \| `number`

___

### fail

▸ **fail**(...`messages`): [`Progress`](Progress.md)

Fail and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Progress`](Progress.md)

___

### finish

▸ **finish**(...`messages`): [`Progress`](Progress.md)

Succeed and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Progress`](Progress.md)

___

### message

▸ **message**(`message`): [`Progress`](Progress.md)

Set the progress bar message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Progress`](Progress.md)

___

### set

▸ **set**(`value`, `payload?`): `void`

Set the progress bar current value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

`void`

___

### setTotal

▸ **setTotal**(`total`): [`Progress`](Progress.md)

Set the progress bar total

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |

#### Returns

[`Progress`](Progress.md)

___

### start

▸ **start**(`options?`): [`Progress`](Progress.md)

Start the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Returns

[`Progress`](Progress.md)

___

### stop

▸ **stop**(...`messages`): [`Progress`](Progress.md)

Stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`Progress`](Progress.md)

___

### tick

▸ **tick**(`payload`): [`Progress`](Progress.md)

Tick the progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

▸ **tick**(`value?`, `payload?`): [`Progress`](Progress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

▸ **tick**(`message`, `payload?`): [`Progress`](Progress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)

___

### update

▸ **update**(`payload?`): [`Progress`](Progress.md)

Update the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`Progress`](Progress.md)
