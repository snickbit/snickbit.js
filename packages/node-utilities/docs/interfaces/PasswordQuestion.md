# Interface: PasswordQuestion

## Hierarchy

- `BaseQuestion`

  ↳ **`PasswordQuestion`**

## Table of contents

### Properties

- [format](PasswordQuestion.md#format)
- [initial](PasswordQuestion.md#initial)
- [message](PasswordQuestion.md#message)
- [name](PasswordQuestion.md#name)
- [stdin](PasswordQuestion.md#stdin)
- [stdout](PasswordQuestion.md#stdout)
- [type](PasswordQuestion.md#type)

### Methods

- [onRender](PasswordQuestion.md#onrender)
- [onState](PasswordQuestion.md#onstate)

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

• **type**: ``"password"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"password"``\>

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
