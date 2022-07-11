# Interface: ListQuestion

## Hierarchy

- `BaseQuestion`

  ↳ **`ListQuestion`**

## Table of contents

### Properties

- [format](ListQuestion.md#format)
- [initial](ListQuestion.md#initial)
- [message](ListQuestion.md#message)
- [name](ListQuestion.md#name)
- [separator](ListQuestion.md#separator)
- [stdin](ListQuestion.md#stdin)
- [stdout](ListQuestion.md#stdout)
- [type](ListQuestion.md#type)

### Methods

- [onRender](ListQuestion.md#onrender)
- [onState](ListQuestion.md#onstate)

## Properties

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.format

___

### initial

• **initial**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

___

### message

• **message**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.message

___

### name

• **name**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.name

___

### separator

• **separator**: `string`

___

### stdin

• **stdin**: `internal`

#### Inherited from

BaseQuestion.stdin

___

### stdout

• **stdout**: `internal`

#### Inherited from

BaseQuestion.stdout

___

### type

• **type**: ``"list"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"list"``\>

## Methods

### onRender

▸ **onRender**(`this`, `kluer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `prompts` |
| `kluer` | `any` |

#### Returns

`void`

#### Inherited from

BaseQuestion.onRender

___

### onState

▸ **onState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`PromptState`](PromptState.md) |

#### Returns

`void`

#### Inherited from

BaseQuestion.onState
