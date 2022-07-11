# Interface: AutoCompleteQuestion

## Hierarchy

- `BaseQuestion`<`number` \| `string`\>

- `QuestionChoices`

  ↳ **`AutoCompleteQuestion`**

## Table of contents

### Properties

- [choices](AutoCompleteQuestion.md#choices)
- [clearFirst](AutoCompleteQuestion.md#clearfirst)
- [fallback](AutoCompleteQuestion.md#fallback)
- [format](AutoCompleteQuestion.md#format)
- [initial](AutoCompleteQuestion.md#initial)
- [limit](AutoCompleteQuestion.md#limit)
- [message](AutoCompleteQuestion.md#message)
- [name](AutoCompleteQuestion.md#name)
- [stdin](AutoCompleteQuestion.md#stdin)
- [stdout](AutoCompleteQuestion.md#stdout)
- [type](AutoCompleteQuestion.md#type)

### Methods

- [onRender](AutoCompleteQuestion.md#onrender)
- [onState](AutoCompleteQuestion.md#onstate)
- [suggest](AutoCompleteQuestion.md#suggest)

## Properties

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../README.md#choiceoption)[]

#### Inherited from

QuestionChoices.choices

___

### clearFirst

• **clearFirst**: `boolean`

___

### fallback

• **fallback**: `string`

___

### format

• **format**: [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.format

___

### initial

• **initial**: `string` \| `number` \| [`PromptsMethod`](../README.md#promptsmethod)

#### Inherited from

BaseQuestion.initial

___

### limit

• **limit**: `number`

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

• **type**: ``"autocomplete"`` \| [`PromptTypeMethod`](PromptTypeMethod.md)<``"autocomplete"``\>

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

___

### suggest

▸ **suggest**(`input`, `choices`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `any` |
| `choices` | `any` |

#### Returns

`Promise`<`string`[]\>
