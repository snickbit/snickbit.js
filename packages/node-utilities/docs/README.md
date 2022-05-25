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

- [MultiProgressChildConfig](interfaces/MultiProgressChildConfig.md)
- [ProgressPayload](interfaces/ProgressPayload.md)

### Progress Interfaces

- [ProgressConfig](interfaces/ProgressConfig.md)

### Prompts Interfaces

- [Answers](interfaces/Answers.md)
- [ChoiceDefinition](interfaces/ChoiceDefinition.md)
- [ChoiceRecords](interfaces/ChoiceRecords.md)
- [PromptState](interfaces/PromptState.md)
- [PromptsLocales](interfaces/PromptsLocales.md)
- [Question](interfaces/Question.md)
- [QuestionRecords](interfaces/QuestionRecords.md)

### Spinner Interfaces

- [SpinnerConfig](interfaces/SpinnerConfig.md)

### Imports Type aliases

- [ImportRecords](README.md#importrecords)
- [RecordOfImportRecords](README.md#recordofimportrecords)

### Modules Type aliases

- [AnyFunction](README.md#anyfunction)
- [IObject](README.md#iobject)
- [MultiProgressChildOptions](README.md#multiprogresschildoptions)
- [ParsedImportRecords](README.md#parsedimportrecords)
- [ProgressOptions](README.md#progressoptions)
- [PromptType](README.md#prompttype)
- [PromptsFunction](README.md#promptsfunction)
- [PromptsPromise](README.md#promptspromise)

### Prompts Type aliases

- [ChoiceOption](README.md#choiceoption)

### Spinner Type aliases

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

### Modules Functions

- [prompt](README.md#prompt)

### Progress Functions

- [multiprogress](README.md#multiprogress)
- [progress](README.md#progress)

### Prompts Functions

- [ask](README.md#ask)
- [confirm](README.md#confirm)

### Spinner Functions

- [spinner](README.md#spinner)

## Imports Type aliases

### ImportRecords

Ƭ **ImportRecords**: `Record`<`string`, [`ImportDefinition`](interfaces/ImportDefinition.md) \| [`AnyFunction`](README.md#anyfunction)\>

___

### RecordOfImportRecords

Ƭ **RecordOfImportRecords**: `Record`<`string`, [`ImportRecords`](README.md#importrecords)\>

___

## Modules Type aliases

### AnyFunction

Ƭ **AnyFunction**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

___

### IObject

Ƭ **IObject**: `Object`

#### Index signature

▪ [key: `string`]: `any`

___

### MultiProgressChildOptions

Ƭ **MultiProgressChildOptions**: `Partial`<[`MultiProgressChildConfig`](interfaces/MultiProgressChildConfig.md)\>

___

### ParsedImportRecords

Ƭ **ParsedImportRecords**: `Record`<`string`, [`ParsedImport`](interfaces/ParsedImport.md)\>

___

### ProgressOptions

Ƭ **ProgressOptions**: `Partial`<[`ProgressConfig`](interfaces/ProgressConfig.md)\>

___

### PromptType

Ƭ **PromptType**: ``"text"`` \| ``"password"`` \| ``"invisible"`` \| ``"number"`` \| ``"confirm"`` \| ``"list"`` \| ``"toggle"`` \| ``"select"`` \| ``"multiselect"`` \| ``"autocompleteMultiselect"`` \| ``"autocomplete"`` \| ``"date"``

___

### PromptsFunction

Ƭ **PromptsFunction**: (`prev`: `string`, `answers`: [`Answers`](interfaces/Answers.md), `previousQuestion`: [`Question`](interfaces/Question.md)) => `string`

#### Type declaration

▸ (`prev`, `answers`, `previousQuestion`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `prev` | `string` |
| `answers` | [`Answers`](interfaces/Answers.md) |
| `previousQuestion` | [`Question`](interfaces/Question.md) |

##### Returns

`string`

___

### PromptsPromise

Ƭ **PromptsPromise**: (`prev`: `string`, `answers`: [`Answers`](interfaces/Answers.md), `previousQuestion`: [`Question`](interfaces/Question.md)) => `Promise`<`string`\>

#### Type declaration

▸ (`prev`, `answers`, `previousQuestion`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `prev` | `string` |
| `answers` | [`Answers`](interfaces/Answers.md) |
| `previousQuestion` | [`Question`](interfaces/Question.md) |

##### Returns

`Promise`<`string`\>

___

## Prompts Type aliases

### ChoiceOption

Ƭ **ChoiceOption**: `string` \| [`ChoiceDefinition`](interfaces/ChoiceDefinition.md)

___

## Spinner Type aliases

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
| `defaultValues` | `Object` |

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

▸ **isImportDefinition**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

___

### parseImports

▸ **parseImports**(`imports`, `parent?`): [`ParsedImportRecords`](README.md#parsedimportrecords)

Parse imports from `import * as name from 'path'` statements into a more manageable format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `imports` | [`ImportRecords`](README.md#importrecords) \| [`RecordOfImportRecords`](README.md#recordofimportrecords) |
| `parent?` | `string` |

#### Returns

[`ParsedImportRecords`](README.md#parsedimportrecords)

___

## Modules Functions

### prompt

▸ **prompt**(`questions`): `Promise`<[`Answers`](interfaces/Answers.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `questions` | [`QuestionRecords`](interfaces/QuestionRecords.md) \| [`Question`](interfaces/Question.md)[] |

#### Returns

`Promise`<[`Answers`](interfaces/Answers.md)\>

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

▸ **ask**(`question`, `defaultAnswer?`): `Promise`<`string` \| `any`\>

Prompt the user for input using Prompts.

**`see`** https://github.com/terkelg/prompts

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `defaultAnswer?` | `string` |

#### Returns

`Promise`<`string` \| `any`\>

▸ **ask**(`question`, `options?`): `Promise`<`string` \| `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `options?` | `Partial`<[`Question`](interfaces/Question.md)\> |

#### Returns

`Promise`<`string` \| `any`\>

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
| `options?` | `Partial`<[`Question`](interfaces/Question.md)\> |

#### Returns

`Promise`<`boolean`\>

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
