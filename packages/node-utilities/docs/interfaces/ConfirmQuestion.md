# Interface: ConfirmQuestion

## Hierarchy

- `BaseQuestion`<`boolean`\>

- `QuestionChoices`

  ↳ **`ConfirmQuestion`**

## Table of contents

### Properties

- [choices](ConfirmQuestion.md#choices)
- [format](ConfirmQuestion.md#format)
- [initial](ConfirmQuestion.md#initial)
- [message](ConfirmQuestion.md#message)
- [name](ConfirmQuestion.md#name)
- [stdin](ConfirmQuestion.md#stdin)
- [stdout](ConfirmQuestion.md#stdout)
- [type](ConfirmQuestion.md#type)

### Methods

- [onRender](ConfirmQuestion.md#onrender)
- [onState](ConfirmQuestion.md#onstate)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../README.md#choiceoption)[]

#### Inherited from

QuestionChoices.choices

___

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.format

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

• **type**: ``"confirm"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"confirm"``\>

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
