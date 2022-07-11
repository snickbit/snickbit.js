# Interface: InvisibleQuestion

## Hierarchy

- `BaseQuestion`

  ↳ **`InvisibleQuestion`**

## Table of contents

### Properties

- [format](InvisibleQuestion.md#format)
- [initial](InvisibleQuestion.md#initial)
- [message](InvisibleQuestion.md#message)
- [name](InvisibleQuestion.md#name)
- [stdin](InvisibleQuestion.md#stdin)
- [stdout](InvisibleQuestion.md#stdout)
- [type](InvisibleQuestion.md#type)

### Methods

- [onRender](InvisibleQuestion.md#onrender)
- [onState](InvisibleQuestion.md#onstate)

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

• **type**: ``"invisible"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"invisible"``\>

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
