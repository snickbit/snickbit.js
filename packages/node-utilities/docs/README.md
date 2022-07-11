# @snickbit/node-utilities

## Table of contents

### Progress Classes

- [MultiProgress](classes/MultiProgress.md)
- [Progress](classes/Progress.md)

### Spinner Classes

- [Spinner](classes/Spinner.md)

### Files Interfaces

- [FindUpOptions](interfaces/FindUpOptions.md)

### Imports Interfaces

- [ImportDefinition](interfaces/ImportDefinition.md)
- [ParsedImport](interfaces/ParsedImport.md)

### Modules Interfaces

- [AutoCompleteQuestion](interfaces/AutoCompleteQuestion.md)
- [MultiProgressChildConfig](interfaces/MultiProgressChildConfig.md)
- [UnparsedImport](interfaces/UnparsedImport.md)

### Progress Interfaces

- [ProgressConfig](interfaces/ProgressConfig.md)

### Prompts Interfaces

- [AutoCompleteMultiSelectQuestion](interfaces/AutoCompleteMultiSelectQuestion.md)
- [ChoiceDefinition](interfaces/ChoiceDefinition.md)
- [ConfirmQuestion](interfaces/ConfirmQuestion.md)
- [DateQuestion](interfaces/DateQuestion.md)
- [InvisibleQuestion](interfaces/InvisibleQuestion.md)
- [ListQuestion](interfaces/ListQuestion.md)
- [MultiSelectQuestion](interfaces/MultiSelectQuestion.md)
- [NumberQuestion](interfaces/NumberQuestion.md)
- [PasswordQuestion](interfaces/PasswordQuestion.md)
- [PromptState](interfaces/PromptState.md)
- [PromptTypeMethod](interfaces/PromptTypeMethod.md)
- [PromptsLocales](interfaces/PromptsLocales.md)
- [SelectQuestion](interfaces/SelectQuestion.md)
- [TextQuestion](interfaces/TextQuestion.md)
- [ToggleQuestion](interfaces/ToggleQuestion.md)

### Spinner Interfaces

- [SpinnerConfig](interfaces/SpinnerConfig.md)

### Imports Type Aliases

- [ImportRecords](README.md#importrecords)
- [RecordOfImportRecords](README.md#recordofimportrecords)

### Modules Type Aliases

- [ImportMethod](README.md#importmethod)
- [MultiProgressChildOptions](README.md#multiprogresschildoptions)
- [ParsedImportRecords](README.md#parsedimportrecords)
- [ProgressOptions](README.md#progressoptions)
- [ProgressPayload](README.md#progresspayload)
- [RawImports](README.md#rawimports)

### Progress Type Aliases

- [MultiProgressBars](README.md#multiprogressbars)

### Prompts Type Aliases

- [AnswerTypes](README.md#answertypes)
- [Answers](README.md#answers)
- [ChoiceOption](README.md#choiceoption)
- [ChoiceRecords](README.md#choicerecords)
- [PromptType](README.md#prompttype)
- [PromptsMethod](README.md#promptsmethod)
- [Question](README.md#question)
- [QuestionRecords](README.md#questionrecords)

### Spinner Type Aliases

- [SpinnerOptions](README.md#spinneroptions)

### Environment Variables

- [app\_data\_dir](README.md#app_data_dir)
- [bashrc\_path](README.md#bashrc_path)
- [home\_dir](README.md#home_dir)
- [is\_wsl](README.md#is_wsl)
- [platform](README.md#platform)
- [temp\_dir](README.md#temp_dir)
- [user\_config\_dir](README.md#user_config_dir)
- [user\_data\_dir](README.md#user_data_dir)
- [verbose](README.md#verbose)

### Before Exit Functions

- [beforeExit](README.md#beforeexit)

### Buffer Functions

- [bufferStream](README.md#bufferstream)
- [makeBuffer](README.md#makebuffer)

### Environment Functions

- [interpolateEnv](README.md#interpolateenv)
- [isBundledElectronApp](README.md#isbundledelectronapp)
- [isElectronApp](README.md#iselectronapp)

### Files Functions

- [fileExists](README.md#fileexists)
- [findUp](README.md#findup)
- [getFile](README.md#getfile)
- [getFileJson](README.md#getfilejson)
- [isDirectory](README.md#isdirectory)
- [mkdir](README.md#mkdir)
- [saveFile](README.md#savefile)
- [saveFileJson](README.md#savefilejson)
- [unlink](README.md#unlink)

### Imports Functions

- [isImport](README.md#isimport)
- [isImportDefinition](README.md#isimportdefinition)
- [parseImports](README.md#parseimports)

### Progress Functions

- [multiprogress](README.md#multiprogress)
- [progress](README.md#progress)

### Prompts Functions

- [ask](README.md#ask)
- [confirm](README.md#confirm)
- [prompt](README.md#prompt)

### Spinner Functions

- [spinner](README.md#spinner)

## Imports Type Aliases

### ImportRecords

Ƭ **ImportRecords**<`I`\>: `Record`<`string`, `I` \| [`ImportDefinition`](interfaces/ImportDefinition.md)<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

### RecordOfImportRecords

Ƭ **RecordOfImportRecords**<`I`\>: `Record`<`string`, [`ImportRecords`](README.md#importrecords)<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

## Modules Type Aliases

### ImportMethod

Ƭ **ImportMethod**<`Args`, `Results`\>: (...`args`: `Args`[]) => `Promise`<`Results`\> \| `Results`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | `any` |
| `Results` | `any` |

#### Type declaration

▸ (...`args`): `Promise`<`Results`\> \| `Results`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args`[] |

##### Returns

`Promise`<`Results`\> \| `Results`

___

### MultiProgressChildOptions

Ƭ **MultiProgressChildOptions**: `Partial`<[`MultiProgressChildConfig`](interfaces/MultiProgressChildConfig.md)\>

___

### ParsedImportRecords

Ƭ **ParsedImportRecords**<`I`\>: `Record`<`string`, [`ParsedImport`](interfaces/ParsedImport.md)<`I`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

### ProgressOptions

Ƭ **ProgressOptions**: `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\>

___

### ProgressPayload

Ƭ **ProgressPayload**: `Record`<`string`, `any`\>

___

### RawImports

Ƭ **RawImports**<`I`\>: [`ImportRecords`](README.md#importrecords)<`I`\> \| [`RecordOfImportRecords`](README.md#recordofimportrecords)<`I`\> \| `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod) = [`ImportMethod`](README.md#importmethod) |

___

## Progress Type Aliases

### MultiProgressBars

Ƭ **MultiProgressBars**: `Record`<`string`, `MultiProgressChild`\>

___

## Prompts Type Aliases

### AnswerTypes

Ƭ **AnswerTypes**: `Date` \| `boolean` \| `number` \| `string`

___

### Answers

Ƭ **Answers**: `Record`<`string`, `string`\>

___

### ChoiceOption

Ƭ **ChoiceOption**: [`ChoiceDefinition`](interfaces/ChoiceDefinition.md) \| `string`

___

### ChoiceRecords

Ƭ **ChoiceRecords**: `Record`<`string`, [`ChoiceOption`](README.md#choiceoption)\>

___

### PromptType

Ƭ **PromptType**: ``"autocomplete"`` \| ``"autocompleteMultiselect"`` \| ``"confirm"`` \| ``"date"`` \| ``"invisible"`` \| ``"list"`` \| ``"multiselect"`` \| ``"number"`` \| ``"password"`` \| ``"select"`` \| ``"text"`` \| ``"toggle"``

___

### PromptsMethod

Ƭ **PromptsMethod**: (`prev`: `string`, `answers`: [`Answers`](README.md#answers), `previousQuestion`: [`Question`](README.md#question)) => `Promise`<`string`\> \| `string`

#### Type declaration

▸ (`prev`, `answers`, `previousQuestion`): `Promise`<`string`\> \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `prev` | `string` |
| `answers` | [`Answers`](README.md#answers) |
| `previousQuestion` | [`Question`](README.md#question) |

##### Returns

`Promise`<`string`\> \| `string`

___

### Question

Ƭ **Question**: [`AutoCompleteMultiSelectQuestion`](interfaces/AutoCompleteMultiSelectQuestion.md) \| [`AutoCompleteQuestion`](interfaces/AutoCompleteQuestion.md) \| [`ConfirmQuestion`](interfaces/ConfirmQuestion.md) \| [`DateQuestion`](interfaces/DateQuestion.md) \| [`InvisibleQuestion`](interfaces/InvisibleQuestion.md) \| [`ListQuestion`](interfaces/ListQuestion.md) \| [`MultiSelectQuestion`](interfaces/MultiSelectQuestion.md) \| [`NumberQuestion`](interfaces/NumberQuestion.md) \| [`PasswordQuestion`](interfaces/PasswordQuestion.md) \| [`SelectQuestion`](interfaces/SelectQuestion.md) \| [`TextQuestion`](interfaces/TextQuestion.md) \| [`ToggleQuestion`](interfaces/ToggleQuestion.md)

___

### QuestionRecords

Ƭ **QuestionRecords**: `Record`<`string`, [`Question`](README.md#question)\>

___

## Spinner Type Aliases

### SpinnerOptions

Ƭ **SpinnerOptions**: `Partial`<[`SpinnerConfig`](interfaces/SpinnerConfig.md)\>

## Environment Variables

### app\_data\_dir

• `Const` **app\_data\_dir**: `string`

___

### bashrc\_path

• `Const` **bashrc\_path**: `string`

___

### home\_dir

• `Const` **home\_dir**: `string`

___

### is\_wsl

• `Const` **is\_wsl**: `boolean` = `isWsl`

___

### platform

• `Const` **platform**: `string`

___

### temp\_dir

• `Const` **temp\_dir**: `string`

___

### user\_config\_dir

• `Const` **user\_config\_dir**: `string`

___

### user\_data\_dir

• `Const` **user\_data\_dir**: `string` = `app_data_dir`

___

### verbose

• `Const` **verbose**: `number`

## Before Exit Functions

### beforeExit

▸ **beforeExit**(`callback`): `void`

Add a function to be called before the process exits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

___

## Buffer Functions

### bufferStream

▸ **bufferStream**(`readable`): `Promise`<`Buffer`\>

Make a buffer from a file stream

#### Parameters

| Name | Type |
| :------ | :------ |
| `readable` | `Readable` |

#### Returns

`Promise`<`Buffer`\>

___

### makeBuffer

▸ **makeBuffer**(`content`): `Buffer`

Make a buffer from a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`Buffer`

___

## Environment Functions

### interpolateEnv

▸ **interpolateEnv**(`str`, `defaultValues?`): `string`

interpolate string with env variables, optionally pass an object of default values

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `defaultValues` | `Record`<`string`, `string`\> |

#### Returns

`string`

___

### isBundledElectronApp

▸ **isBundledElectronApp**(): `boolean`

Check if the current process is a bundled Electron app.

#### Returns

`boolean`

___

### isElectronApp

▸ **isElectronApp**(): `boolean`

Check if the current process is a Electron app

#### Returns

`boolean`

___

## Files Functions

### fileExists

▸ **fileExists**(`filepath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`boolean`

___

### findUp

▸ **findUp**(`name`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `PathLike` |
| `options?` | `string` \| `boolean` \| `Partial`<[`FindUpOptions`](interfaces/FindUpOptions.md)\> |

#### Returns

`any`

___

### getFile

▸ **getFile**(`filepath`, `fallback?`): `any`

Get file content

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

___

### getFileJson

▸ **getFileJson**(`filepath`, `fallback?`): `any`

Get JSON from file

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |
| `fallback?` | `any` |

#### Returns

`any`

___

### isDirectory

▸ **isDirectory**(`filepath`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`boolean`

___

### mkdir

▸ **mkdir**(`dir_path`, `options?`): `void`

Make a directory

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dir_path` | `PathLike` | `undefined` |
| `options` | `Object` | `undefined` |
| `options.recursive` | `boolean` | `true` |

#### Returns

`void`

___

### saveFile

▸ **saveFile**(`filepath`, `content`, `options?`): `void`

Save file to disk

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `string` \| `ArrayBufferView` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

___

### saveFileJson

▸ **saveFileJson**(`filepath`, `content`, `options?`): `void`

Save file to disk as JSON

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filepath` | `PathOrFileDescriptor` | `undefined` |
| `content` | `any` | `undefined` |
| `options` | `WriteFileOptions` | `'utf8'` |

#### Returns

`void`

___

### unlink

▸ **unlink**(`filepath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `PathLike` |

#### Returns

`void`

___

## Imports Functions

### isImport

▸ **isImport**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### isImportDefinition

▸ **isImportDefinition**(`data`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`any`

___

### parseImports

▸ **parseImports**<`I`\>(`imports`, `parent?`): [`ParsedImportRecords`](README.md#parsedimportrecords)<`I`\>

Parse imports from `import * as name from 'path'` statements into a more manageable format.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ImportMethod`](README.md#importmethod)<`any`, `any`\> = [`ImportMethod`](README.md#importmethod)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `imports` | `any` |
| `parent?` | `string` |

#### Returns

[`ParsedImportRecords`](README.md#parsedimportrecords)<`I`\>

___

## Progress Functions

### multiprogress

▸ **multiprogress**(`options?`): [`MultiProgress`](classes/MultiProgress.md)

Multi-Progress bar. Uses cli-progress to create multiple progress bars.

**`see`** https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\> |

#### Returns

[`MultiProgress`](classes/MultiProgress.md)

___

### progress

▸ **progress**(`options?`): [`Progress`](classes/Progress.md)

Progress bar. Uses cli-progress to create multiple progress bars.

**`see`** https://github.com/npkgz/cli-progress

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\> |

#### Returns

[`Progress`](classes/Progress.md)

___

## Prompts Functions

### ask

▸ **ask**(`question`, `defaultAnswer?`): `Promise`<`any` \| `string`\>

Prompt the user for input using Prompts.

**`see`** https://github.com/terkelg/prompts

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `defaultAnswer?` | `string` \| `boolean` |

#### Returns

`Promise`<`any` \| `string`\>

▸ **ask**(`question`, `options?`): `Promise`<`any` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options?` | `Partial`<[`Question`](README.md#question)\> |

#### Returns

`Promise`<`any` \| `string`\>

___

### confirm

▸ **confirm**(`question`, `defaultAnswer?`): `Promise`<`boolean`\>

Prompt the user for confirmation using Prompts.

**`see`** https://github.com/terkelg/prompts

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `defaultAnswer?` | `boolean` |

#### Returns

`Promise`<`boolean`\>

▸ **confirm**(`question`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options?` | `Partial`<[`Question`](README.md#question)\> |

#### Returns

`Promise`<`boolean`\>

___

### prompt

▸ **prompt**(`questions`): `Promise`<[`Answers`](README.md#answers)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `questions` | [`QuestionRecords`](README.md#questionrecords) \| [`Question`](README.md#question)[] |

#### Returns

`Promise`<[`Answers`](README.md#answers)\>

___

## Spinner Functions

### spinner

▸ **spinner**(`options?`): [`Spinner`](classes/Spinner.md)

Spinner. Uses nanospinner to show spinners in the terminal.

**`see`** https://github.com/usmanyunusov/nanospinner

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| `Partial`<[`SpinnerConfig`](interfaces/SpinnerConfig.md)\> |

#### Returns

[`Spinner`](classes/Spinner.md)
