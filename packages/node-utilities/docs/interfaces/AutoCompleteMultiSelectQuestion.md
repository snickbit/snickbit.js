# Interface: AutoCompleteMultiSelectQuestion

## Hierarchy

- `Omit`<[`MultiSelectQuestion`](MultiSelectQuestion.md), ``"type"``\>

  ↳ **`AutoCompleteMultiSelectQuestion`**

## Table of contents

### Properties

- [choices](AutoCompleteMultiSelectQuestion.md#choices)
- [format](AutoCompleteMultiSelectQuestion.md#format)
- [hint](AutoCompleteMultiSelectQuestion.md#hint)
- [instructions](AutoCompleteMultiSelectQuestion.md#instructions)
- [max](AutoCompleteMultiSelectQuestion.md#max)
- [message](AutoCompleteMultiSelectQuestion.md#message)
- [min](AutoCompleteMultiSelectQuestion.md#min)
- [name](AutoCompleteMultiSelectQuestion.md#name)
- [optionsPerPage](AutoCompleteMultiSelectQuestion.md#optionsperpage)
- [stdin](AutoCompleteMultiSelectQuestion.md#stdin)
- [stdout](AutoCompleteMultiSelectQuestion.md#stdout)
- [type](AutoCompleteMultiSelectQuestion.md#type)
- [warn](AutoCompleteMultiSelectQuestion.md#warn)

### Methods

- [onRender](AutoCompleteMultiSelectQuestion.md#onrender)
- [onState](AutoCompleteMultiSelectQuestion.md#onstate)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../README.md#choiceoption)[]

#### Inherited from

Omit.choices

___

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

Omit.format

___

### hint

• **hint**: `string`

#### Inherited from

Omit.hint

___

### instructions

• **instructions**: `string` \| `boolean`

#### Inherited from

Omit.instructions

___

### max

• **max**: `number`

#### Inherited from

Omit.max

___

### message

• **message**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

Omit.message

___

### min

• **min**: `number`

#### Inherited from

Omit.min

___

### name

• **name**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

Omit.name

___

### optionsPerPage

• **optionsPerPage**: `number`

#### Inherited from

Omit.optionsPerPage

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

• **type**: ``"autocompleteMultiselect"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"autocompleteMultiselect"``\>

___

### warn

• **warn**: `string`

#### Inherited from

Omit.warn

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
