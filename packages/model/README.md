# @snickbit/model

Simple object modeling library based on [object-path](https://github.com/mariocasciaro/object-path)

## Installation

```bash
yarn add @snickbit/model
```

```bash
npm add @snickbit/model
```

## Basic Usage

```js
import {Model} from '@snickbit/model';
// const { Model } = require('@snickbit/model');

// Use lowercase import for use as a function instead.
// import { model } from '@snickbit/model';

const data = {
	name: 'John Doe',
	age: 30,
	address: {
		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345',
	},
}

const person = new Model(data);
// or as a function
// const person = model(data)

console.log(person.get('name')); // John Doe
console.log(person.get('address.street')); // 123 Main St
console.log(person.get('address.city')); // Anytown
console.log(person.get()); // { name: 'John Doe', age: 30, address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' } }

person.set('name', 'Jane Doe');
console.log(person.get('name')); // Jane Doe

console.log(person.pull('age')); // 30
console.log(person.has('age')); // false
```

## Documentation

### [API Docs](https://github.com/snickbit/snickbit.js/blob/main/packages/model/docs/README.md)

### [CHANGELOG](https://github.com/snickbit/snickbit.js/blob/main/packages/model/CHANGELOG.md)

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/snickbit.js/blob/master/LICENSE)
