# @snickbit/queue

Simple function queueing & throttling

## Installation

```bash
yarn add @snickbit/queue
```

```bash
npm add @snickbit/queue
```

## Basic Usage

```js
import queue from '@snickbit/queue'

const limiter = queue({concurrency: 25, limit: 5, interval: 1000, strict: true})

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let promises = []
for(let i = 0; i < 100; i++) {
  promises.push(limiter.add(async () => {
	await sleep(Math.random() * 100)
	console.log(`${i}`)
  }))
}
await Promise.all(promises)
```

## Documentation

### [API Docs](https://github.com/snickbit/snickbit.js/blob/main/packages/queue/README.md)

### [CHANGELOG](https://github.com/snickbit/snickbit.js/blob/main/packages/queue/CHANGELOG.md)

## Acknowledgements

- [sindresorhus/p-throttle](https://github.com/sindresorhus/p-throttle)

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/snickbit.js/blob/master/LICENSE)
