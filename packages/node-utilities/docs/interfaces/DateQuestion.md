# Interface: DateQuestion

## Hierarchy

- `BaseQuestion`<`Date`\>

- `QuestionMinMax`

  ↳ **`DateQuestion`**

## Table of contents

### Properties

- [format](DateQuestion.md#format)
- [initial](DateQuestion.md#initial)
- [locales](DateQuestion.md#locales)
- [mask](DateQuestion.md#mask)
- [max](DateQuestion.md#max)
- [message](DateQuestion.md#message)
- [min](DateQuestion.md#min)
- [name](DateQuestion.md#name)
- [stdin](DateQuestion.md#stdin)
- [stdout](DateQuestion.md#stdout)
- [type](DateQuestion.md#type)

### Methods

- [onRender](DateQuestion.md#onrender)
- [onState](DateQuestion.md#onstate)

## Properties

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.format

___

### initial

• **initial**: `Date` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

___

### locales

• **locales**: [`PromptsLocales`](PromptsLocales.md)

___

### mask

• **mask**: `string`

___

### max

• **max**: `number`

#### Inherited from

QuestionMinMax.max

___

### message

• **message**: `string` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.message

___

### min

• **min**: `number`

#### Inherited from

QuestionMinMax.min

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

• **type**: ``"date"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"date"``\>

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
