# Interface: Question

**`see`** https://github.com/terkelg/prompts

## Table of contents

### Properties

- [active](Question.md#active)
- [choices](Question.md#choices)
- [clearFirst](Question.md#clearfirst)
- [fallback](Question.md#fallback)
- [float](Question.md#float)
- [format](Question.md#format)
- [hint](Question.md#hint)
- [inactive](Question.md#inactive)
- [increment](Question.md#increment)
- [initial](Question.md#initial)
- [instructions](Question.md#instructions)
- [limit](Question.md#limit)
- [locales](Question.md#locales)
- [mask](Question.md#mask)
- [max](Question.md#max)
- [message](Question.md#message)
- [min](Question.md#min)
- [name](Question.md#name)
- [optionsPerPage](Question.md#optionsperpage)
- [round](Question.md#round)
- [separator](Question.md#separator)
- [stdin](Question.md#stdin)
- [stdout](Question.md#stdout)
- [style](Question.md#style)
- [type](Question.md#type)
- [warn](Question.md#warn)

### Methods

- [onRender](Question.md#onrender)
- [onState](Question.md#onstate)
- [suggest](Question.md#suggest)

## Properties

### active

• **active**: `string`

___

### choices

• **choices**: [`ChoiceDefinition`](ChoiceDefinition.md) \| [`ChoiceOption`](../README.md#choiceoption)[]

___

### clearFirst

• **clearFirst**: `boolean`

___

### fallback

• **fallback**: `string`

___

### float

• **float**: `boolean`

___

### format

• **format**: [`PromptsFunction`](../README.md#promptsfunction) \| [`PromptsPromise`](../README.md#promptspromise)

___

### hint

• **hint**: `string`

___

### inactive

• **inactive**: `string`

___

### increment

• **increment**: `number`

___

### initial

• **initial**: `string` \| [`PromptsFunction`](../README.md#promptsfunction) \| [`PromptsPromise`](../README.md#promptspromise)

___

### instructions

• **instructions**: `string` \| `boolean`

___

### limit

• **limit**: `number`

___

### locales

• **locales**: [`PromptsLocales`](PromptsLocales.md)

___

### mask

• **mask**: `string`

___

### max

• **max**: `number`

___

### message

• **message**: `string` \| [`PromptsFunction`](../README.md#promptsfunction)

___

### min

• **min**: `number`

___

### name

• **name**: `string` \| [`PromptsFunction`](../README.md#promptsfunction)

___

### optionsPerPage

• **optionsPerPage**: `number`

___

### round

• **round**: `number`

___

### separator

• **separator**: `string`

___

### stdin

• **stdin**: `internal`

___

### stdout

• **stdout**: `internal`

___

### style

• **style**: ``"default"`` \| ``"password"`` \| ``"invisible"`` \| ``"emoji"``

___

### type

• **type**: [`PromptType`](../README.md#prompttype) \| (`prev`: `string`, `answers`: [`Answers`](Answers.md), `previousQuestion`: [`Question`](Question.md)) => [`PromptType`](../README.md#prompttype)

___

### warn

• **warn**: `string`

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

___

### onState

▸ **onState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`PromptState`](PromptState.md) |

#### Returns

`void`

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
