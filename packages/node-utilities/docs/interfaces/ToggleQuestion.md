# Interface: ToggleQuestion

## Hierarchy

- `BaseQuestion`<`boolean`\>

  ↳ **`ToggleQuestion`**

## Table of contents

### Properties

- [active](ToggleQuestion.md#active)
- [format](ToggleQuestion.md#format)
- [inactive](ToggleQuestion.md#inactive)
- [initial](ToggleQuestion.md#initial)
- [message](ToggleQuestion.md#message)
- [name](ToggleQuestion.md#name)
- [stdin](ToggleQuestion.md#stdin)
- [stdout](ToggleQuestion.md#stdout)
- [type](ToggleQuestion.md#type)

### Methods

- [onRender](ToggleQuestion.md#onrender)
- [onState](ToggleQuestion.md#onstate)

## Properties

### active

• **active**: `string`

___

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.format

___

### inactive

• **inactive**: `string`

___

### initial

• **initial**: `boolean` \| [`PromptsMethod`](../README.md#promptsmethod)

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

• **type**: ``"toggle"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"toggle"``\>

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
