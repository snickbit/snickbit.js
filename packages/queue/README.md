# @snickbit/queue

<!--START_SECTION:readmes-description-->

Fluid queueing library for any function or promise

<!--END_SECTION:readmes-description-->

## Installation

```bash
pnpm add @snickbit/queue
```

```bash
yarn add @snickbit/queue
```

```bash
npm i @snickbit/queue
```

## Basic Usage

### Initialize

```js
import {queue} from '@snickbit/queue'
// or const {queue} = require('@snickbit/queue')

const $queue = queue({concurrency: 25, limit: 5, interval: 1000, strict: true})
```

or as a class with

```js
import {Queue} from '@snickbit/queue'

const $queue = new Queue({concurrency: 5})
```

Add some Promises or functions to the queue

```js
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

for (let i = 0; i < 100; i++) {
	$queue.push(async () => {
		await sleep(Math.random() * 100)
		console.log(`${i}`)
	})
}

$queue.run()
	.then(() => console.log('done'))
	.catch((err) => console.error('Oops', err))

// or await $queue.run()
```

### `thenEach (callback)`

Attaches a callback for the resolution of each Promise or Function in the queue.

### `catchEach (callback)`

Attaches a callback for the rejection of each Promise or Function in the queue.

### `finallyEach (callback)`

Attaches a callback that is invoked when each Promise or Function in the queue is settled (fulfilled or rejected).

### Check the API Docs for more details

## Documentation

### [API Docs](https://github.com/snickbit/snickbit.js/blob/main/packages/queue/README.md)

### [CHANGELOG](https://github.com/snickbit/snickbit.js/blob/main/packages/queue/CHANGELOG.md)

## Acknowledgements

- [kleinron/lite-fifo](https://github.com/kleinron/lite-fifo)
- [sindresorhus/p-throttle](https://github.com/sindresorhus/p-throttle)

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/snickbit.js/blob/main/LICENSE)
