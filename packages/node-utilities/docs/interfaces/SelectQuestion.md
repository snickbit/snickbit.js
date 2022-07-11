# Interface: SelectQuestion

## Hierarchy

- `BaseQuestion`<`number` \| `string`\>

- `QuestionHints`

- `QuestionChoices`

  ↳ **`SelectQuestion`**

## Table of contents

### Properties

- [choices](SelectQuestion.md#choices)
- [format](SelectQuestion.md#format)
- [hint](SelectQuestion.md#hint)
- [initial](SelectQuestion.md#initial)
- [message](SelectQuestion.md#message)
- [name](SelectQuestion.md#name)
- [stdin](SelectQuestion.md#stdin)
- [stdout](SelectQuestion.md#stdout)
- [type](SelectQuestion.md#type)
- [warn](SelectQuestion.md#warn)

### Methods

- [onRender](SelectQuestion.md#onrender)
- [onState](SelectQuestion.md#onstate)

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

### hint

• **hint**: `string`

#### Inherited from

QuestionHints.hint

___

### initial

• **initial**: `string` \| `number` \| [`PromptsMethod`](../README.md#promptsmethod)

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

• **type**: ``"select"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"select"``\>

___

### warn

• **warn**: `string`

#### Inherited from

QuestionHints.warn

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
