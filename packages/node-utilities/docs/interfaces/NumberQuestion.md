# Interface: NumberQuestion

## Hierarchy

- `BaseQuestion`<`number`\>

  ↳ **`NumberQuestion`**

## Table of contents

### Properties

- [float](NumberQuestion.md#float)
- [format](NumberQuestion.md#format)
- [increment](NumberQuestion.md#increment)
- [initial](NumberQuestion.md#initial)
- [message](NumberQuestion.md#message)
- [name](NumberQuestion.md#name)
- [round](NumberQuestion.md#round)
- [stdin](NumberQuestion.md#stdin)
- [stdout](NumberQuestion.md#stdout)
- [type](NumberQuestion.md#type)

### Methods

- [onRender](NumberQuestion.md#onrender)
- [onState](NumberQuestion.md#onstate)

## Properties

### float

• **float**: `boolean`

___

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.format

___

### increment

• **increment**: `number`

___

### initial

• **initial**: `number` \| [`PromptsMethod`](../README.md#promptsmethod)

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

### round

• **round**: `number`

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

• **type**: ``"number"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"number"``\>

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
