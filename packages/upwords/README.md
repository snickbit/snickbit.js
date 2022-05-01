# @snickbit/upwords

<!--START_SECTION:readmes-description-->

Helper function to convert a string to title case, attempting to preserve acronyms and special case words like "of" and "iPhone".

<!--END_SECTION:readmes-description-->

## Installation

```bash
yarn add @snickbit/upwords
```

```bash
npm add @snickbit/upwords
```

## Basic Usage

```js
import upwords from '@snickbit/upwords'

upwords('hello') // 'Hello'
upwords('hello world') // 'Hello World'
upwords('iphone') // 'iPhone'
upwords('usd') // 'USD'
upwords('d&d') // 'D&D'
upwords('created_at') // 'Created at'
upwords('created__at') // 'Created at'
upwords('i-like-to--play--d&d-in-3d') // 'I Like to Play D&D in 3D'
```

## License

Copyright (c) 2022 - **Nicholas Lowe** aka **Snickbit**

[MIT License](https://github.com/snickbit/snickbit.js/blob/main/LICENSE)
