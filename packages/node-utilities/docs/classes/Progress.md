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
| `options?` | `Partial`<[`ProgressOptions`](../interfaces/ProgressOptions.md)\> |

## Properties

### bar

• **bar**: `SingleBar`

___

### options

• **options**: `Partial`<[`ProgressOptions`](../interfaces/ProgressOptions.md)\> = `{}`

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
| `options?` | `Partial`<[`ProgressOptions`](../interfaces/ProgressOptions.md)\> |

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

▸ **tick**(`value?`, `payload?`): [`Progress`](Progress.md)

Tick the progress

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `1` |
| `payload?` | `object` | `undefined` |

#### Returns

[`Progress`](Progress.md)

___

### update

▸ **update**(`current`, `payload?`): [`Progress`](Progress.md)

Update the progress bar

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | `number` \| `object` |
| `payload?` | `object` |

#### Returns

[`Progress`](Progress.md)
