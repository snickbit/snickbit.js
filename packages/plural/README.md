# @snickbit/plural

<!--START_SECTION:readmes-description-->

- Pluralizes strings
- Singularizes strings
- Written in TypeScript
- Zero dependencies

<!--END_SECTION:readmes-description-->

## Installation
```bash
pnpm add @snickbit/plural
```

```bash
yarn add @snickbit/plural
```

```bash
npm i @snickbit/plural
```

## Usage

```js
import {plural, singular} from '@snickbit/plural'

// or in Node.js
// const {plural, singular} = require('@snickbit/plural')

console.log(plural('test')) //=> "tests"
console.log(plural('test', 0)) //=> "tests"
console.log(plural('test', 1)) //=> "test"
console.log(plural('test', 2)) //=> "tests"

// Singularize
console.log(singular('tests')) //=> "test"
console.log(singular('test')) //=> "test"
console.log(singular('test', 0)) //=> "tests"
console.log(singular('test', 2)) //=> "tests"

```

## Documentation

### [API Docs](https://github.com/snickbit/plural/blob/main/docs/README.md)

### [CHANGELOG](https://github.com/snickbit/plural/blob/main/CHANGELOG.md)

## Acknowledgements

### Based on [pluralize](https://github.com/plurals/pluralize)

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/plural/blob/main/LICENSE)
