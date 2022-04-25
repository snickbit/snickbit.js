# @snickbit/cycle

Helper function and class to cycle through an array of values

## Installation

```bash
yarn add @snickbit/cycle
```

```bash
npm add @snickbit/cycle
```

## Basic Usage

```js
import {Cycle} from '@snickbit/cycle'

const cycle = new Cycle([1, 2, 3])

console.log(cycle.next()) // 1
console.log(cycle.next()) // 2
console.log(cycle.next()) // 3
console.log(cycle.next()) // 1
console.log(cycle.current()) // 1
console.log(cycle.prev()) // 3
```

## Presets

Cycle comes with few presets for common uses. More to come as needed.

### Usage

```js
const hexColorCycle = new Cycle('hex')
```

### ansi

```json
[
	"red",
	"green",
	"yellow",
	"magenta",
	"cyan",
	"redBright",
	"greenBright",
	"yellowBright",
	"blueBright",
	"magentaBright",
	"cyanBright"
]
```

### ansiBackgrounds

```json
[
	"bgBlack",
	"bgRed",
	"bgGreen",
	"bgYellow",
	"bgBlue",
	"bgMagenta",
	"bgCyan",
	"bgWhite",
	"bgBlackBright",
	"bgRedBright",
	"bgGreenBright",
	"bgYellowBright",
	"bgBlueBright",
	"bgMagentaBright",
	"bgCyanBright",
	"bgWhiteBright"
]
```

### ansiForegrounds

```json
[
	"red",
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"white",
	"gray",
	"redBright",
	"greenBright",
	"yellowBright",
	"blueBright",
	"magentaBright",
	"cyanBright",
	"whiteBright"
]
```

### ansiAll

```json
[
	"red",
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"white",
	"gray",
	"redBright",
	"greenBright",
	"yellowBright",
	"blueBright",
	"magentaBright",
	"cyanBright",
	"whiteBright",
	"bgBlack",
	"bgRed",
	"bgGreen",
	"bgYellow",
	"bgBlue",
	"bgMagenta",
	"bgCyan",
	"bgWhite",
	"bgBlackBright",
	"bgRedBright",
	"bgGreenBright",
	"bgYellowBright",
	"bgBlueBright",
	"bgMagentaBright",
	"bgCyanBright",
	"bgWhiteBright"
]
```

### hex

```json
[
	"#FFC400",
	"#F9F1A5",
	"#15B40C",
	"#61D6D6",
	"#3A96DD",
	"#3B78FF",
	"#7B1689",
	"#B4009E",
	"#E74856",
	"#C50F1F"
]
```

### rgb

```json
[
	"rgb(255,196,0)",
	"rgb(249,241,165)",
	"rgb(21,180,12)",
	"rgb(97,214,214)",
	"rgb(58,150,221)",
	"rgb(59,120,255)",
	"rgb(123,22,137)",
	"rgb(180,0,158)",
	"rgb(231,72,86)",
	"rgb(197,15,31)"
]
```

### quasar

```json
[
	"pink",
	"purple",
	"deep-purple",
	"indigo",
	"blue",
	"light-blue",
	"cyan",
	"teal",
	"green",
	"light-green",
	"orange",
	"deep-orange",
	"brown",
	"grey",
	"blue-grey"
]
```

## Documentation

### [API Docs](https://github.com/snickbit/snickbit.js/blob/main/packages/cycle/README.md)

### [CHANGELOG](https://github.com/snickbit/snickbit.js/blob/main/packages/cycle/CHANGELOG.md)

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/snickbit.js/blob/master/LICENSE)
