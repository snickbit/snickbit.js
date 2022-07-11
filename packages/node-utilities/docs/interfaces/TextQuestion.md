# Interface: TextQuestion

## Hierarchy

- `BaseQuestion`

  ↳ **`TextQuestion`**

## Table of contents

### Properties

- [format](TextQuestion.md#format)
- [initial](TextQuestion.md#initial)
- [message](TextQuestion.md#message)
- [name](TextQuestion.md#name)
- [stdin](TextQuestion.md#stdin)
- [stdout](TextQuestion.md#stdout)
- [style](TextQuestion.md#style)
- [type](TextQuestion.md#type)

### Methods

- [onRender](TextQuestion.md#onrender)
- [onState](TextQuestion.md#onstate)

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

### style

• **style**: ``"default"`` \| ``"password"`` \| ``"invisible"`` \| ``"emoji"``

___

### type

• **type**: ``"text"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"text"``\>

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
