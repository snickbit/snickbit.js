# @snickbit/utilities

## Table of contents

### Arrays Type aliases

- [ArrayPredicate](undefined)

### Generators Type aliases

- [CombinationOptions](undefined)

### Modules Type aliases

- [AdvancedVariableType](undefined)
- [BasicVariableType](undefined)
- [CallableVariableType](undefined)
- [EmptyVariableType](undefined)
- [FunctionType](undefined)
- [OverloadSchema](undefined)
- [PrimitiveVariableType](undefined)
- [TryWaitFunction](undefined)
- [VariableType](undefined)

### Objects Type aliases

- [IObject](undefined)
- [ObjectPredicate](undefined)

### Templating Type aliases

- [interpolateReplacements](undefined)

### Validation Type aliases

- [VariableTypeDefinition](undefined)

### Variables

- [advanced](undefined)
- [all](undefined)
- [basic](undefined)
- [callable](undefined)
- [empty](undefined)
- [primitive](undefined)
- [reserved](undefined)

### Arrays Functions

- [arrayDuplicates](undefined)
- [arrayMerge](undefined)
- [arrayMergeDeep](undefined)
- [arrayReject](undefined)
- [arrayRemove](undefined)
- [arrayShuffle](undefined)
- [arrayToObject](undefined)
- [arrayUnique](undefined)
- [arrayUniqueInsensitive](undefined)
- [arrayWrap](undefined)
- [isSingle](undefined)

### Functions Functions

- [functionClone](undefined)
- [overloadOptions](undefined)
- [parseOptions](undefined)
- [promiseAll](undefined)
- [tryWait](undefined)

### Generators Functions

- [combinations](undefined)
- [makeRandomSegment](undefined)
- [randomString](undefined)
- [uuid](undefined)

### Numbers Functions

- [formatBytes](undefined)
- [formatCurrency](undefined)
- [formatPercentage](undefined)
- [maxDecimals](undefined)
- [numberPad](undefined)

### Objects Functions

- [objectClone](undefined)
- [objectCopy](undefined)
- [objectExcept](undefined)
- [objectFilter](undefined)
- [objectFind](undefined)
- [objectFindEntry](undefined)
- [objectFindKey](undefined)
- [objectFlatten](undefined)
- [objectGetMethod](undefined)
- [objectHasMethod](undefined)
- [objectMerge](undefined)
- [objectMergeDeep](undefined)
- [objectMethods](undefined)
- [objectOnly](undefined)
- [objectPull](undefined)

### Parsing Functions

- [JSONParse](undefined)
- [JSONPrettify](undefined)
- [JSONStringify](undefined)
- [camelCase](undefined)
- [initials](undefined)
- [kebabCase](undefined)
- [limitString](undefined)
- [limitWords](undefined)
- [padString](undefined)
- [parse](undefined)
- [plural](undefined)
- [safeVarName](undefined)
- [singular](undefined)
- [sleep](undefined)
- [slugify](undefined)
- [snakeCase](undefined)
- [spaceCase](undefined)

### Templating Functions

- [escapeRegExp](undefined)
- [escapeReplacement](undefined)
- [interpolate](undefined)

### Validation Functions

- [isArray](undefined)
- [isAsyncFunction](undefined)
- [isAwaitable](undefined)
- [isBase64](undefined)
- [isClass](undefined)
- [isDate](undefined)
- [isDefined](undefined)
- [isEmpty](undefined)
- [isFunction](undefined)
- [isNullDefined](undefined)
- [isNumber](undefined)
- [isObject](undefined)
- [isPrimitive](undefined)
- [isPromise](undefined)
- [isSet](undefined)
- [isString](undefined)
- [isType](undefined)

### Variables Functions

- [clone](undefined)
- [count](undefined)
- [isCallable](undefined)
- [isJSONString](undefined)
- [merge](undefined)
- [mergeDeep](undefined)
- [typeOf](undefined)

## Arrays Type aliases

### ArrayPredicate

Ƭ **ArrayPredicate**: Function

#### Type declaration

▸ (`value`, `index?`, `array?`): unknown

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |
| `index?` | number |
| `array?` | any[] |

##### Returns

unknown

___

## Generators Type aliases

### CombinationOptions

Ƭ **CombinationOptions**: Record<string, any[]\>

___

## Modules Type aliases

### AdvancedVariableType

Ƭ **AdvancedVariableType**: "array" \| "date" \| "object" \| "symbol"

___

### BasicVariableType

Ƭ **BasicVariableType**: "bigint" \| "boolean" \| "number" \| "string"

___

### CallableVariableType

Ƭ **CallableVariableType**: "asyncfunction" \| "function" \| "promise"

___

### EmptyVariableType

Ƭ **EmptyVariableType**: "null" \| "undefined"

___

### FunctionType

Ƭ **FunctionType**: Function

#### Type declaration

▸ (...`args`): any

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | any[] |

##### Returns

any

___

### OverloadSchema

Ƭ **OverloadSchema**: Record<string, VariableType\>

___

### PrimitiveVariableType

Ƭ **PrimitiveVariableType**: BasicVariableType \| EmptyVariableType

___

### TryWaitFunction

Ƭ **TryWaitFunction**: Function

#### Type declaration

▸ (...`args`): Promise<any\> \| any

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | any[] |

##### Returns

Promise<any\> \| any

___

### VariableType

Ƭ **VariableType**: AdvancedVariableType \| CallableVariableType \| PrimitiveVariableType

___

## Objects Type aliases

### IObject

Ƭ **IObject**: Record<string, any\>

___

### ObjectPredicate

Ƭ **ObjectPredicate**: Function

#### Type declaration

▸ (`key`, `value?`, `obj?`): unknown

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | string \| symbol |
| `value?` | any |
| `obj?` | object |

##### Returns

unknown

___

## Templating Type aliases

### interpolateReplacements

Ƭ **interpolateReplacements**: Record<string, any \| number \| string\>

___

## Validation Type aliases

### VariableTypeDefinition

Ƭ **VariableTypeDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | string |

## Variables

### advanced

• `Const` **advanced**: AdvancedVariableType[]

___

### all

• `Const` **all**: VariableType[]

___

### basic

• `Const` **basic**: BasicVariableType[]

___

### callable

• `Const` **callable**: CallableVariableType[]

___

### empty

• `Const` **empty**: EmptyVariableType[]

___

### primitive

• `Const` **primitive**: PrimitiveVariableType[]

___

### reserved

• `Const` **reserved**: string[]

## Arrays Functions

### arrayDuplicates

▸ **arrayDuplicates**(`arr`, `predicate?`): any[]

Return the duplicate values from an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `predicate?` | ArrayPredicate |

#### Returns

any[]

___

### arrayMerge

▸ **arrayMerge**(...`arrs`): any[]

Merge two or more arrays together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | any[][] |

#### Returns

any[]

___

### arrayMergeDeep

▸ **arrayMergeDeep**(...`arrs`): any[]

Merge two or more arrays together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrs` | any[][] |

#### Returns

any[]

___

### arrayReject

▸ **arrayReject**(`arr`, `callback`): any[]

Get the reverse of a filtered array

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `callback` | Function |

#### Returns

any[]

___

### arrayRemove

▸ **arrayRemove**(`arr`, `value`): any[]

Finds and returns an element from an array, removing it in the process

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `value` | any |

#### Returns

any[]

___

### arrayShuffle

▸ **arrayShuffle**(`arr`): any[]

Shuffles/randomizes an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |

#### Returns

any[]

___

### arrayToObject

▸ **arrayToObject**(`arr`, `key`, `value`): object

Convert an array to an object using the given key as the property

**`example`**
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'id', 'name')
// {1: 'John', 2: 'Jane'}

**`example`**
arrayToObject([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}], 'name')
// {John: {id: 1, name: 'John'}, Jane: {id: 2, name: 'Jane'}}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `key` | string \| number |
| `value` | string \| number |

#### Returns

object

___

### arrayUnique

▸ **arrayUnique**(`arr`, `key?`): any[]

Returns unique values from an array. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `key?` | string |

#### Returns

any[]

___

### arrayUniqueInsensitive

▸ **arrayUniqueInsensitive**(`arr`, `key?`): any[]

Returns unique values from an array, ignoring case. Optionally pass a key when the array is an object array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `key?` | string |

#### Returns

any[]

___

### arrayWrap

▸ **arrayWrap**(`values`): any[]

Wrap a variable in an array if it is not already an array

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | any |

#### Returns

any[]

___

### isSingle

▸ **isSingle**(`arr`, `value?`): boolean

Checks if the given array only contains a single value, optionally pass a value or predicate to check against

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `value?` | any |

#### Returns

boolean

___

## Functions Functions

### functionClone

▸ **functionClone**(`fn`): FunctionType

Clone a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | FunctionType |

#### Returns

FunctionType

___

### overloadOptions

▸ **overloadOptions**(`options`, `schemas`): object

Parses an array of arguments for an overloaded function into an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | any[] |
| `schemas` | OverloadSchema[] |

#### Returns

object

___

### parseOptions

▸ **parseOptions**(`given`, `defaults`, `non_object_key?`): any \| object

Parse options for a function

**`example`**
const options = parseOptions(true, {param: 'default'}, 'my_param')
// {param: 'default', my_param: true}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `given` | any | The given options |
| `defaults` | IObject | The default options |
| `non_object_key?` | string | - |

#### Returns

any \| object

___

### promiseAll

▸ **promiseAll**(`arr`, `fn`): Promise<Awaited<unknown\>[]\>

Send each item in an array to a function, await the results

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | any[] |
| `fn` | Function |

#### Returns

Promise<Awaited<unknown\>[]\>

___

### tryWait

▸ **tryWait**(`fn`, ...`args`): Promise<any\>

Catch an async function or promise and force it to resolve, returning undefined if it fails

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | TryWaitFunction |
| `...args` | any[][] |

#### Returns

Promise<any\>

___

## Generators Functions

### combinations

▸ **combinations**(`options`): any[]

Generate an array of all possible property values. Provide an object with each property as a key and an array of possible values as the value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | CombinationOptions |

#### Returns

any[]

___

### makeRandomSegment

▸ **makeRandomSegment**(): string

Generate a random string between 8 and 14 characters long

#### Returns

string

___

### randomString

▸ **randomString**(`length?`): string

Generate a random string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | number | `10` |

#### Returns

string

___

### uuid

▸ **uuid**(`prefix?`): string

Create uuid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | string | `''` |

#### Returns

string

___

## Numbers Functions

### formatBytes

▸ **formatBytes**(`bytes`, `decimals?`): string

Format a number as bytes.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bytes` | number | `undefined` |
| `decimals` | number | `2` |

#### Returns

string

___

### formatCurrency

▸ **formatCurrency**(`amount`, `symbol?`, `decimals?`): string

Format a number as currency.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | number | `undefined` |
| `symbol` | string | `'$'` |
| `decimals` | number | `2` |

#### Returns

string

___

### formatPercentage

▸ **formatPercentage**(`amount`, `decimals?`): string

Format a number as a percentage.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | number | `undefined` |
| `decimals` | number | `2` |

#### Returns

string

___

### maxDecimals

▸ **maxDecimals**(`value`, `max_places?`): number

limit the amount of decimals to the given number, default 2

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | number | `undefined` |
| `max_places` | number | `2` |

#### Returns

number

___

### numberPad

▸ **numberPad**(`n`): string \| number

Pad a number with zeros.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | number |

#### Returns

string \| number

___

## Objects Functions

### objectClone

▸ **objectClone**(...`objects`): IObject

Deep clones an object

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | IObject[] |

#### Returns

IObject

___

### objectCopy

▸ **objectCopy**(`obj`, `force?`): any[] \| IObject \| undefined

Copy object as JSON (uses JSON.parse/JSON.stringify but won't throw any errors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `force?` | boolean |

#### Returns

any[] \| IObject \| undefined

___

### objectExcept

▸ **objectExcept**(`obj`, `excluded`): IObject

Returns a new object without the excluded properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | IObject | the object to filter |
| `excluded` | string[] | the allowed properties |

#### Returns

IObject

___

### objectFilter

▸ **objectFilter**(`obj`, `predicate?`): IObject

Filter an object by a given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `predicate` | ObjectPredicate |

#### Returns

IObject

___

### objectFind

▸ **objectFind**(`obj`, `predicate`): any \| undefined

Finds an object property's value that matches the given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `predicate` | string \| ObjectPredicate |

#### Returns

any \| undefined

___

### objectFindEntry

▸ **objectFindEntry**(`obj`, `predicate`): any \| undefined

Finds an object property's entry [key, value] that matches the given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `predicate` | string \| ObjectPredicate |

#### Returns

any \| undefined

___

### objectFindKey

▸ **objectFindKey**(`obj`, `predicate`): string \| undefined

Finds an object property's name that matches the given predicate

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `predicate` | string \| ObjectPredicate |

#### Returns

string \| undefined

___

### objectFlatten

▸ **objectFlatten**(`obj`, `prefix?`): IObject

Flattens an object into a single level using dot notation for nested properties.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | IObject | `undefined` |
| `prefix` | string | `''` |

#### Returns

IObject

___

### objectGetMethod

▸ **objectGetMethod**(`obj`, `method`, `strict?`): any

Checks if an object has a method with the given name, and returns the method

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `method` | string |
| `strict?` | boolean |

#### Returns

any

___

### objectHasMethod

▸ **objectHasMethod**(`obj`, `method`, `strict?`): boolean

Checks if an object has a method with the given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `method` | string |
| `strict?` | boolean |

#### Returns

boolean

___

### objectMerge

▸ **objectMerge**(...`objects`): IObject

Merge two or more objects together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | IObject[] |

#### Returns

IObject

___

### objectMergeDeep

▸ **objectMergeDeep**(...`objects`): IObject

Merge two or more objects together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...objects` | IObject[] |

#### Returns

IObject

___

### objectMethods

▸ **objectMethods**(`obj`): string[]

Returns an array of the given object's available method names

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |

#### Returns

string[]

___

### objectOnly

▸ **objectOnly**(`obj`, `allowed`): IObject

Returns a new object with only the allowed properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `allowed` | string[] |

#### Returns

IObject

___

### objectPull

▸ **objectPull**(`obj`, `key`): any

Remove a property from an object and return the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | IObject |
| `key` | string |

#### Returns

any

___

## Parsing Functions

### JSONParse

▸ **JSONParse**(`json`, `strict?`): any[] \| object \| undefined

Parse a string into JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | string |
| `strict?` | boolean |

#### Returns

any[] \| object \| undefined

___

### JSONPrettify

▸ **JSONPrettify**(`data`, `spacer?`): string

Pretty print a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | Record<string, unknown\> | `undefined` |
| `spacer` | number | `2` |

#### Returns

string

___

### JSONStringify

▸ **JSONStringify**(`data`, `options?`): string

Parse a variable into a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | any | `undefined` |
| `options` | JSONStringifyOptions | `false` |

#### Returns

string

___

### camelCase

▸ **camelCase**(`text`): string

Convert a string to camelCase

**`see`** https://www.npmjs.com/package/just-camel-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | string |

#### Returns

string

___

### initials

▸ **initials**(`str`): string

Convert a string to initials

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | string |

#### Returns

string

___

### kebabCase

▸ **kebabCase**(`text`): string

Convert a string to kebab-case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | string | The string to convert |

#### Returns

string

___

### limitString

▸ **limitString**(`str`, `limit?`, `suffix?`): string

Limit a string to a certain length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | string | `undefined` |
| `limit` | number | `100` |
| `suffix` | string | `'...'` |

#### Returns

string

___

### limitWords

▸ **limitWords**(`str`, `limit?`, `suffix?`): string

Limit a string to a certain amount of words

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | string | `undefined` |
| `limit` | number | `100` |
| `suffix` | string | `'...'` |

#### Returns

string

___

### padString

▸ **padString**(`text`, `padding?`, `character?`): string

Pad a string on both sides with the given character and length

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | string | `undefined` |
| `padding` | number | `2` |
| `character` | string | `' '` |

#### Returns

string

___

### parse

▸ **parse**(`value`): any

Parse a string into it's primitive type if possible. If not, return the original variable.

**`example`** '123' => 123 | '123.456' => 123.456 | 'true' => true | 'false' => false | 'null' => null | 'undefined' => undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

any

___

### plural

▸ **plural**(`text`, `count?`, `inclusive?`): any

Create a pluralized string

**`see`** https://github.com/plurals/pluralize

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | string | `undefined` |
| `count` | number | `2` |
| `inclusive?` | boolean | `undefined` |

#### Returns

any

___

### safeVarName

▸ **safeVarName**(`str`, `replacer?`): string

Create a safe javascript variable name from a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | string | `undefined` |
| `replacer` | string | `''` |

#### Returns

string

___

### singular

▸ **singular**(`str`, `inclusive?`): any

Create a singularized string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | string |
| `inclusive?` | boolean |

#### Returns

any

___

### sleep

▸ **sleep**(`ms`): Promise<unknown\>

sleep for a given time

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | number |

#### Returns

Promise<unknown\>

___

### slugify

▸ **slugify**(`text`, `replace?`): string

Create slug from string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | string | `undefined` |
| `replace` | string | `'-'` |

#### Returns

string

___

### snakeCase

▸ **snakeCase**(`text`): string

Convert a string to snake_case

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | string |

#### Returns

string

___

### spaceCase

▸ **spaceCase**(`str`): string

Convert a string to space-case

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | string |

#### Returns

string

___

## Templating Functions

### escapeRegExp

▸ **escapeRegExp**(`str`): string

escape regexp

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | string |

#### Returns

string

___

### escapeReplacement

▸ **escapeReplacement**(`str`): string

escape regexp replacement string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | string |

#### Returns

string

___

### interpolate

▸ **interpolate**(`str`, `replacements`): string

interpolate string with data from object using {{key}} syntax or ${key} syntax

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | string |
| `replacements` | interpolateReplacements |

#### Returns

string

___

## Validation Functions

### isArray

▸ **isArray**(`value`): boolean

Checks if variable is an array and is not empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isAsyncFunction

▸ **isAsyncFunction**(`value`): boolean

Check if a variable is an async function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isAwaitable

▸ **isAwaitable**(`value`): boolean

Check if a variable can be used with await (a Promise or AsyncFunction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isBase64

▸ **isBase64**(`content`): boolean

Check if a variable is a Base64 string

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | string |

#### Returns

boolean

___

### isClass

▸ **isClass**(`value`): boolean

Check if a variable is a class

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isDate

▸ **isDate**(`value`): boolean

Check if a variable is a valid date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isDefined

▸ **isDefined**(`value`): boolean

Check if a value is undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isEmpty

▸ **isEmpty**(`value`): boolean

Check if a value is empty

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isFunction

▸ **isFunction**(`value`, `strict?`): boolean

Check if a variable is a function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |
| `strict?` | boolean |

#### Returns

boolean

___

### isNullDefined

▸ **isNullDefined**(`value`): boolean

Check if a value is null or undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isNumber

▸ **isNumber**(`value`): boolean

Check if a variable is a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isObject

▸ **isObject**(`value`, `strict?`): any

Check if a variable is an object and is not null or undefined

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | any | `undefined` |
| `strict` | boolean | `true` |

#### Returns

any

___

### isPrimitive

▸ **isPrimitive**(`value`, `includeNullUndefined?`): boolean

Check if a variable is a primitive type. i.e. string, boolean, number, or bigint

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |
| `includeNullUndefined?` | boolean |

#### Returns

boolean

___

### isPromise

▸ **isPromise**(`value`): boolean

Check if a variable is a promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isSet

▸ **isSet**(`value`): boolean

Check if a variable is a Set

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isString

▸ **isString**(`value`): boolean

Check if a variable is a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

boolean

___

### isType

▸ **isType**(`value`, `type`): boolean

Check if a variable is the given type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |
| `type` | string \| VariableTypeDefinition |

#### Returns

boolean

___

## Variables Functions

### clone

▸ **clone**(`value`): any

Clone a variable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

any

___

### count

▸ **count**(`value`, `strict?`): number

Count the number of keys in an object \
Count the number of entries in an array \
Count the number of values in a Set \
Get the length of a string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | any | `undefined` |
| `strict` | boolean | `true` |

#### Returns

number

___

### isCallable

▸ **isCallable**(`value`, `options?`): boolean

Check if a variable is callable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |
| `options?` | boolean \| Partial<isCallableOptions\> |

#### Returns

boolean

___

### isJSONString

▸ **isJSONString**(`value`, `returnValue?`): any

Check if a variable is a JSON string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | any | `undefined` |
| `returnValue` | boolean | `false` |

#### Returns

any

___

### merge

▸ **merge**(...`values`): any[] \| IObject

Merge two or more variables together

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | any[] \| IObject[] |

#### Returns

any[] \| IObject

___

### mergeDeep

▸ **mergeDeep**(...`values`): any[] \| IObject

Merge two or more variables together, recursing child values

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | any[] \| IObject[] |

#### Returns

any[] \| IObject

___

### typeOf

▸ **typeOf**(`value`): VariableType

Return a variable's type

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | any |

#### Returns

VariableType
