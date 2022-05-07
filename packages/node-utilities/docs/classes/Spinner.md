# Class: Spinner

Spinner. Uses nanospinner to show spinners in the terminal.

**`see`** https://github.com/usmanyunusov/nanospinner

## Table of contents

### Constructors

- [constructor](Spinner.md#constructor)

### Properties

- [out](Spinner.md#out)
- [preload\_message](Spinner.md#preload_message)
- [spinner](Spinner.md#spinner)

### Methods

- [error](Spinner.md#error)
- [fail](Spinner.md#fail)
- [finish](Spinner.md#finish)
- [start](Spinner.md#start)
- [stop](Spinner.md#stop)
- [text](Spinner.md#text)
- [update](Spinner.md#update)

## Constructors

### constructor

• **new Spinner**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

## Properties

### out

• **out**: `Out`

___

### preload\_message

• **preload\_message**: `string` = `''`

___

### spinner

• **spinner**: `any`

## Methods

### error

▸ **error**(`options?`): [`Spinner`](Spinner.md)

Error and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### fail

▸ **fail**(`options?`): [`Spinner`](Spinner.md)

Fail and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### finish

▸ **finish**(`options?`): [`Spinner`](Spinner.md)

Succeed and stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### start

▸ **start**(`options?`): [`Spinner`](Spinner.md)

Start the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### stop

▸ **stop**(`options?`): [`Spinner`](Spinner.md)

Stop the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)

___

### text

▸ **text**(`message`): [`Spinner`](Spinner.md)

Set the spinner text

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`Spinner`](Spinner.md)

___

### update

▸ **update**(`options`): [`Spinner`](Spinner.md)

Update the spinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| `Partial`<[`SpinnerConfig`](../interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](Spinner.md)
