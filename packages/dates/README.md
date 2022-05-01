# @snickbit/dates

<!--START_SECTION:readmes-description-->

Extended Date and Time functionality for Dayjs

<!--END_SECTION:readmes-description-->

## Installation

```bash
yarn add @snickbit/dates
```

```bash
npm add @snickbit/dates
```

## Usage

```js
import {dates} from '@snickbit/dates'

console.log(dates('2022-01-15').shortdate()) // '01/15/2022'
console.log(dates('2022-01-15').shorttime()) // '12:00 am'
// more quick presets in the docs

const duration = dates.duration(2500)
console.log(duration.humanize()) // 'a few seconds' - normal Dayjs duration output
console.log(duration.toWords()) // '2s and 500ms' - extended output
console.log(duration.toWords(true)) // '2 seconds' - consult the docs for more options
```

## Documentation

### [API Docs](https://github.com/snickbit/snickbit.js/blob/main/packages/dates/docs/README.md)

### [CHANGELOG](https://github.com/snickbit/snickbit.js/blob/main/packages/dates/CHANGELOG.md)

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/snickbit.js/blob/main/LICENSE)
