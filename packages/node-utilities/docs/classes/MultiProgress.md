# Class: MultiProgress

Multi-Progress bar. Uses cli-progress to create multiple progress bars.

**`see`** https://github.com/npkgz/cli-progress

## Hierarchy

- [`Progress`](Progress.md)

  ↳ **`MultiProgress`**

## Table of contents

### Constructors

- [constructor](MultiProgress.md#constructor)

### Properties

- [bar](MultiProgress.md#bar)
- [bars](MultiProgress.md#bars)
- [id](MultiProgress.md#id)
- [multibar](MultiProgress.md#multibar)
- [options](MultiProgress.md#options)
- [out](MultiProgress.md#out)

### Methods

- [create](MultiProgress.md#create)
- [eta](MultiProgress.md#eta)
- [fail](MultiProgress.md#fail)
- [finish](MultiProgress.md#finish)
- [message](MultiProgress.md#message)
- [remove](MultiProgress.md#remove)
- [set](MultiProgress.md#set)
- [setTotal](MultiProgress.md#settotal)
- [start](MultiProgress.md#start)
- [stop](MultiProgress.md#stop)
- [tick](MultiProgress.md#tick)
- [update](MultiProgress.md#update)

## Constructors

### constructor

• **new MultiProgress**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Overrides

[Progress](Progress.md).[constructor](Progress.md#constructor)

## Properties

### bar

• **bar**: `SingleBar`

#### Inherited from

[Progress](Progress.md).[bar](Progress.md#bar)

___

### bars

• **bars**: `MultiProgressBars`

___

### id

• **id**: `string`

___

### multibar

• **multibar**: `MultiBar`

___

### options

• **options**: [`ProgressConfig`](../interfaces/ProgressConfig.md)

#### Inherited from

[Progress](Progress.md).[options](Progress.md#options)

___

### out

• **out**: `Out`

#### Inherited from

[Progress](Progress.md).[out](Progress.md#out)

## Methods

### create

▸ **create**(`options?`): `MultiProgressChild`

Create a child progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Returns

`MultiProgressChild`

___

### eta

▸ **eta**(): `string` \| `number`

Get the ETA

#### Returns

`string` \| `number`

#### Inherited from

[Progress](Progress.md).[eta](Progress.md#eta)

___

### fail

▸ **fail**(...`messages`): [`MultiProgress`](MultiProgress.md)

Fail and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[fail](Progress.md#fail)

___

### finish

▸ **finish**(...`messages`): [`MultiProgress`](MultiProgress.md)

Succeed and stop the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[finish](Progress.md#finish)

___

### message

▸ **message**(`message`): [`MultiProgress`](MultiProgress.md)

Set the progress bar message

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[message](Progress.md#message)

___

### remove

▸ **remove**(`instance`): [`MultiProgress`](MultiProgress.md)

Remove a child progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `MultiProgressChild` |

#### Returns

[`MultiProgress`](MultiProgress.md)

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

#### Inherited from

[Progress](Progress.md).[set](Progress.md#set)

___

### setTotal

▸ **setTotal**(`total`): [`MultiProgress`](MultiProgress.md)

Set the progress bar total

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[setTotal](Progress.md#settotal)

___

### start

▸ **start**(`options?`): [`MultiProgress`](MultiProgress.md)

Start the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](../interfaces/ProgressConfig.md)\> |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[start](Progress.md#start)

___

### stop

▸ **stop**(...`messages`): [`MultiProgress`](MultiProgress.md)

Stop all child progress bars

#### Parameters

| Name | Type |
| :------ | :------ |
| `...messages` | `any`[] |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Overrides

[Progress](Progress.md).[stop](Progress.md#stop)

___

### tick

▸ **tick**(`payload`): [`MultiProgress`](MultiProgress.md)

Tick the progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

▸ **tick**(`value?`, `payload?`): [`MultiProgress`](MultiProgress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `number` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

▸ **tick**(`message`, `payload?`): [`MultiProgress`](MultiProgress.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[tick](Progress.md#tick)

___

### update

▸ **update**(`payload?`): [`MultiProgress`](MultiProgress.md)

Update the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload?` | [`ProgressPayload`](../README.md#progresspayload) |

#### Returns

[`MultiProgress`](MultiProgress.md)

#### Inherited from

[Progress](Progress.md).[update](Progress.md#update)
