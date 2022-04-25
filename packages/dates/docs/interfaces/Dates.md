# Interface: Dates

## Hierarchy

- `Dayjs`

  ↳ **`Dates`**

## Callable

### Dates

▸ **Dates**(`input?`): [`Dates`](Dates.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`DateInput`](../README.md#dateinput) |

#### Returns

[`Dates`](Dates.md)

## Table of contents

### Methods

- [add](Dates.md#add)
- [clone](Dates.md#clone)
- [date](Dates.md#date)
- [datestamp](Dates.md#datestamp)
- [day](Dates.md#day)
- [daysInMonth](Dates.md#daysinmonth)
- [diff](Dates.md#diff)
- [duration](Dates.md#duration)
- [endOf](Dates.md#endof)
- [format](Dates.md#format)
- [from](Dates.md#from)
- [fromLimited](Dates.md#fromlimited)
- [fromNow](Dates.md#fromnow)
- [fromNowLimited](Dates.md#fromnowlimited)
- [get](Dates.md#get)
- [hour](Dates.md#hour)
- [isAfter](Dates.md#isafter)
- [isBefore](Dates.md#isbefore)
- [isSame](Dates.md#issame)
- [isToday](Dates.md#istoday)
- [isTomorrow](Dates.md#istomorrow)
- [isValid](Dates.md#isvalid)
- [isYesterday](Dates.md#isyesterday)
- [locale](Dates.md#locale)
- [millisecond](Dates.md#millisecond)
- [minute](Dates.md#minute)
- [month](Dates.md#month)
- [relativeToday](Dates.md#relativetoday)
- [safeTimestamp](Dates.md#safetimestamp)
- [second](Dates.md#second)
- [set](Dates.md#set)
- [shortdate](Dates.md#shortdate)
- [shortdatetime](Dates.md#shortdatetime)
- [shorttime](Dates.md#shorttime)
- [startOf](Dates.md#startof)
- [subtract](Dates.md#subtract)
- [time](Dates.md#time)
- [timestamp](Dates.md#timestamp)
- [to](Dates.md#to)
- [toDate](Dates.md#todate)
- [toISOString](Dates.md#toisostring)
- [toJSON](Dates.md#tojson)
- [toLimited](Dates.md#tolimited)
- [toNow](Dates.md#tonow)
- [toNowLimited](Dates.md#tonowlimited)
- [toString](Dates.md#tostring)
- [unix](Dates.md#unix)
- [utcOffset](Dates.md#utcoffset)
- [valueOf](Dates.md#valueof)
- [year](Dates.md#year)

## Methods

### add

▸ **add**(`value`, `unit?`): `Dayjs`

Returns a cloned Day.js object with a specified amount of time added.
```
dayjs().add(7, 'day')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/add

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit?` | `ManipulateType` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.add

▸ **add**(`duration`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `Duration` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.add

___

### clone

▸ **clone**(): `Dayjs`

All Day.js objects are immutable. Still, `dayjs#clone` can create a clone of the current object if you need one.
```
dayjs().clone()// => Dayjs
dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
```
Docs: https://day.js.org/docs/en/parse/dayjs-clone

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.clone

___

### date

▸ **date**(): `number`

Get the date of the month.
```
dayjs().date()// => 1-31
```
Docs: https://day.js.org/docs/en/get-set/date

Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the next months.
```
dayjs().date(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/date

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.date

▸ **date**(`value`): `Dayjs`

Set the date of the month.

Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the next months.
```
dayjs().date(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/date

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.date

___

### datestamp

▸ **datestamp**(): `string`

#### Returns

`string`

___

### day

▸ **day**(): `number`

Get the day of the week.

Returns numbers from 0 (Sunday) to 6 (Saturday).
```
dayjs().day()// 0-6
```
Docs: https://day.js.org/docs/en/get-set/day

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.day

▸ **day**(`value`): `Dayjs`

Set the day of the week.

Accepts numbers from 0 (Sunday) to 6 (Saturday). If the range is exceeded, it will bubble up to next weeks.
```
dayjs().day(0)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/day

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.day

___

### daysInMonth

▸ **daysInMonth**(): `number`

Get the number of days in the current month.
```
dayjs('2019-01-25').daysInMonth() // 31
```
Docs: https://day.js.org/docs/en/display/days-in-month

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.daysInMonth

___

### diff

▸ **diff**(`date?`, `unit?`, `float?`): `number`

This indicates the difference between two date-time in the specified unit.

To get the difference in milliseconds, use `dayjs#diff`
```
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
date1.diff() // milliseconds to current time
```

To get the difference in another unit of measurement, pass that measurement as the second argument.
```
const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month') // 7
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/display/difference

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `string` \| `number` \| `Date` \| `Dayjs` |
| `unit?` | ``"millisecond"`` \| ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"month"`` \| ``"year"`` \| ``"date"`` \| ``"milliseconds"`` \| ``"seconds"`` \| ``"minutes"`` \| ``"hours"`` \| ``"days"`` \| ``"months"`` \| ``"years"`` \| ``"dates"`` \| ``"d"`` \| ``"D"`` \| ``"M"`` \| ``"y"`` \| ``"h"`` \| ``"m"`` \| ``"s"`` \| ``"ms"`` \| ``"week"`` \| ``"weeks"`` \| ``"w"`` \| ``"quarter"`` \| ``"quarters"`` \| ``"Q"`` |
| `float?` | `boolean` |

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.diff

___

### duration

▸ **duration**(`input`, `unit?`): `DatesDuration`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DateInput`](../README.md#dateinput) |
| `unit?` | `string` |

#### Returns

`DatesDuration`

___

### endOf

▸ **endOf**(`unit`): `Dayjs`

Returns a cloned Day.js object and set it to the end of a unit of time.
```
dayjs().endOf('month')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/end-of

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `OpUnitType` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.endOf

___

### format

▸ **format**(`template?`): `string`

Get the formatted date according to the string of tokens passed in.

To escape characters, wrap them in square brackets (e.g. [MM]).
```
dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```
Docs: https://day.js.org/docs/en/display/format

#### Parameters

| Name | Type |
| :------ | :------ |
| `template?` | `string` |

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.format

___

### from

▸ **from**(`compared`, `withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compared` | `string` \| `number` \| `Date` \| `Dayjs` |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.from

___

### fromLimited

▸ **fromLimited**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DateInput`](../README.md#dateinput) |
| `options` | `Partial`<`LimitedRelativeOptions`\> |

#### Returns

`string`

___

### fromNow

▸ **fromNow**(`withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.fromNow

___

### fromNowLimited

▸ **fromNowLimited**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`LimitedRelativeOptions`\> |

#### Returns

`string`

___

### get

▸ **get**(`unit`): `number`

String getter, returns the corresponding information getting from Day.js object.

In general:
```
dayjs().get(unit) === dayjs()[unit]()
```
Units are case insensitive, and support plural and short forms.
```
dayjs().get('year')
dayjs().get('month') // start 0
dayjs().get('date')
```
Docs: https://day.js.org/docs/en/get-set/get

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `UnitType` |

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.get

___

### hour

▸ **hour**(): `number`

Get the hour.
```
dayjs().hour()// => 0-23
```
Docs: https://day.js.org/docs/en/get-set/hour

Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the next day.
```
dayjs().hour(12)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/hour

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.hour

▸ **hour**(`value`): `Dayjs`

Set the hour.

Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the next day.
```
dayjs().hour(12)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/hour

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.hour

___

### isAfter

▸ **isAfter**(`date`, `unit?`): `boolean`

This indicates whether the Day.js object is after the other supplied date-time.
```
dayjs().isAfter(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isAfter('2011-01-01', 'year')// => boolean
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/query/is-after

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` \| `Dayjs` |
| `unit?` | `OpUnitType` |

#### Returns

`boolean`

#### Inherited from

dayjs.Dayjs.isAfter

___

### isBefore

▸ **isBefore**(`date`, `unit?`): `boolean`

This indicates whether the Day.js object is before the other supplied date-time.
```
dayjs().isBefore(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isBefore('2011-01-01', 'year')// => boolean
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/query/is-before

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` \| `Dayjs` |
| `unit?` | `OpUnitType` |

#### Returns

`boolean`

#### Inherited from

dayjs.Dayjs.isBefore

___

### isSame

▸ **isSame**(`date`, `unit?`): `boolean`

This indicates whether the Day.js object is the same as the other supplied date-time.
```
dayjs().isSame(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isSame('2011-01-01', 'year')// => boolean
```
Docs: https://day.js.org/docs/en/query/is-same

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` \| `number` \| `Date` \| `Dayjs` |
| `unit?` | `OpUnitType` |

#### Returns

`boolean`

#### Inherited from

dayjs.Dayjs.isSame

___

### isToday

▸ **isToday**(): `boolean`

#### Returns

`boolean`

#### Overrides

dayjs.Dayjs.isToday

___

### isTomorrow

▸ **isTomorrow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

dayjs.Dayjs.isTomorrow

___

### isValid

▸ **isValid**(): `boolean`

This returns a `boolean` indicating whether the Day.js object contains a valid date or not.
```
dayjs().isValid()// => boolean
```
Docs: https://day.js.org/docs/en/parse/is-valid

#### Returns

`boolean`

#### Inherited from

dayjs.Dayjs.isValid

___

### isYesterday

▸ **isYesterday**(): `boolean`

#### Returns

`boolean`

#### Inherited from

dayjs.Dayjs.isYesterday

___

### locale

▸ **locale**(): `string`

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.locale

▸ **locale**(`preset`, `object?`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `preset` | `string` \| `ILocale` |
| `object?` | `Partial`<`ILocale`\> |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.locale

___

### millisecond

▸ **millisecond**(): `number`

Get the milliseconds.
```
dayjs().millisecond()// => 0-999
```
Docs: https://day.js.org/docs/en/get-set/millisecond

Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the next seconds.
```
dayjs().millisecond(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/millisecond

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.millisecond

▸ **millisecond**(`value`): `Dayjs`

Set the milliseconds.

Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the next seconds.
```
dayjs().millisecond(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/millisecond

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.millisecond

___

### minute

▸ **minute**(): `number`

Get the minutes.
```
dayjs().minute()// => 0-59
```
Docs: https://day.js.org/docs/en/get-set/minute

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next hour.
```
dayjs().minute(59)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/minute

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.minute

▸ **minute**(`value`): `Dayjs`

Set the minutes.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next hour.
```
dayjs().minute(59)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/minute

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.minute

___

### month

▸ **month**(): `number`

Get the month.

Months are zero indexed, so January is month 0.
```
dayjs().month()// => 0-11
```
Docs: https://day.js.org/docs/en/get-set/month

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.month

▸ **month**(`value`): `Dayjs`

Set the month.

Months are zero indexed, so January is month 0.

Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the next year.
```
dayjs().month(0)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/month

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.month

___

### relativeToday

▸ **relativeToday**(`fallbackFormat`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fallbackFormat` | `string` |

#### Returns

`string`

___

### safeTimestamp

▸ **safeTimestamp**(): `string`

#### Returns

`string`

___

### second

▸ **second**(): `number`

Get the seconds.
```
dayjs().second()// => 0-59
```
Docs: https://day.js.org/docs/en/get-set/second

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next minutes.
```
dayjs().second(1)// Dayjs
```

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.second

▸ **second**(`value`): `Dayjs`

Set the seconds.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next minutes.
```
dayjs().second(1)// Dayjs
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.second

___

### set

▸ **set**(`unit`, `value`): `Dayjs`

Generic setter, accepting unit as first argument, and value as second, returns a new instance with the applied changes.

In general:
```
dayjs().set(unit, value) === dayjs()[unit](value)
```
Units are case insensitive, and support plural and short forms.
```
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```
Docs: https://day.js.org/docs/en/get-set/set

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `UnitType` |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.set

___

### shortdate

▸ **shortdate**(): `string`

#### Returns

`string`

___

### shortdatetime

▸ **shortdatetime**(): `string`

#### Returns

`string`

___

### shorttime

▸ **shorttime**(): `string`

#### Returns

`string`

___

### startOf

▸ **startOf**(`unit`): `Dayjs`

Returns a cloned Day.js object and set it to the start of a unit of time.
```
dayjs().startOf('year')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/start-of

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | `OpUnitType` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.startOf

___

### subtract

▸ **subtract**(`value`, `unit?`): `Dayjs`

Returns a cloned Day.js object with a specified amount of time subtracted.
```
dayjs().subtract(7, 'year')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/subtract

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `unit?` | `ManipulateType` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.subtract

▸ **subtract**(`duration`): `Dayjs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `Duration` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.subtract

___

### time

▸ **time**(): `string`

#### Returns

`string`

___

### timestamp

▸ **timestamp**(): `string`

#### Returns

`string`

___

### to

▸ **to**(`compared`, `withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compared` | `string` \| `number` \| `Date` \| `Dayjs` |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.to

___

### toDate

▸ **toDate**(): `Date`

To get a copy of the native `Date` object parsed from the Day.js object use `dayjs#toDate`.
```
dayjs('2019-01-25').toDate()// => Date
```

#### Returns

`Date`

#### Inherited from

dayjs.Dayjs.toDate

___

### toISOString

▸ **toISOString**(): `string`

To format as an ISO 8601 string.
```
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```
Docs: https://day.js.org/docs/en/display/as-iso-string

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.toISOString

___

### toJSON

▸ **toJSON**(): `string`

To serialize as an ISO 8601 string.
```
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```
Docs: https://day.js.org/docs/en/display/as-json

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.toJSON

___

### toLimited

▸ **toLimited**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`DateInput`](../README.md#dateinput) |
| `options` | `Partial`<`LimitedRelativeOptions`\> |

#### Returns

`string`

___

### toNow

▸ **toNow**(`withoutSuffix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `withoutSuffix?` | `boolean` |

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.toNow

___

### toNowLimited

▸ **toNowLimited**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`LimitedRelativeOptions`\> |

#### Returns

`string`

___

### toString

▸ **toString**(): `string`

Returns a string representation of the date.
```
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```
Docs: https://day.js.org/docs/en/display/as-string

#### Returns

`string`

#### Inherited from

dayjs.Dayjs.toString

___

### unix

▸ **unix**(): `number`

This returns the Unix timestamp (the number of **seconds** since the Unix Epoch) of the Day.js object.
```
dayjs('2019-01-25').unix() // 1548381600
```
This value is floored to the nearest second, and does not include a milliseconds component.

Docs: https://day.js.org/docs/en/display/unix-timestamp

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.unix

___

### utcOffset

▸ **utcOffset**(): `number`

Get the UTC offset in minutes.
```
dayjs().utcOffset()
```
Docs: https://day.js.org/docs/en/manipulate/utc-offset

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.utcOffset

___

### valueOf

▸ **valueOf**(): `number`

This returns the number of **milliseconds** since the Unix Epoch of the Day.js object.
```
dayjs('2019-01-25').valueOf() // 1548381600000
+dayjs(1548381600000) // 1548381600000
```
To get a Unix timestamp (the number of seconds since the epoch) from a Day.js object, you should use Unix Timestamp `dayjs#unix()`.

Docs: https://day.js.org/docs/en/display/unix-timestamp-milliseconds

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.valueOf

___

### year

▸ **year**(): `number`

Get the year.
```
dayjs().year()// => 2020
```
Docs: https://day.js.org/docs/en/get-set/year

#### Returns

`number`

#### Inherited from

dayjs.Dayjs.year

▸ **year**(`value`): `Dayjs`

Set the year.
```
dayjs().year(2000)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/year

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`Dayjs`

#### Inherited from

dayjs.Dayjs.year
