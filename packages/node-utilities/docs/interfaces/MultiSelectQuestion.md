# Interface: MultiSelectQuestion

## Hierarchy

- `Omit`<`BaseQuestion`, ``"initial"``\>

- `QuestionMinMax`

- `QuestionHints`

- `QuestionChoices`

  ↳ **`MultiSelectQuestion`**

## Table of contents

### Properties

- [choices](MultiSelectQuestion.md#choices)
- [format](MultiSelectQuestion.md#format)
- [hint](MultiSelectQuestion.md#hint)
- [instructions](MultiSelectQuestion.md#instructions)
- [max](MultiSelectQuestion.md#max)
- [message](MultiSelectQuestion.md#message)
- [min](MultiSelectQuestion.md#min)
- [name](MultiSelectQuestion.md#name)
- [optionsPerPage](MultiSelectQuestion.md#optionsperpage)
- [stdin](MultiSelectQuestion.md#stdin)
- [stdout](MultiSelectQuestion.md#stdout)
- [type](MultiSelectQuestion.md#type)
- [warn](MultiSelectQuestion.md#warn)

### Methods

- [onRender](MultiSelectQuestion.md#onrender)
- [onState](MultiSelectQuestion.md#onstate)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../README.md#choiceoption)[]

#### Inherited from

QuestionChoices.choices

___

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

Omit.format

___

### hint

• **hint**: `string`

#### Inherited from

QuestionHints.hint

___

### instructions

• **instructions**: `string` \| `boolean`

___

### max

• **max**: `number`

#### Inherited from

QuestionMinMax.max

___

### message

• **message**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

Omit.message

___

### min

• **min**: `number`

#### Inherited from

QuestionMinMax.min

___

### name

• **name**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

Omit.name

___

### optionsPerPage

• **optionsPerPage**: `number`

___

### stdin

• **stdin**: `internal`

#### Inherited from

Omit.stdin

___

### stdout

• **stdout**: `internal`

#### Inherited from

Omit.stdout

___

### type

• **type**: ``"multiselect"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"multiselect"``\>

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

Omit.onRender

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

Omit.onState
