# @snickbit/node-utilities

## 4.3.7

### Patch Changes

- [ca07e6b](https://github.com/snickbit/snickbit.js/commit/ca07e6b) **style**:  heavy code restyling
- [5665547](https://github.com/snickbit/snickbit.js/commit/5665547) **chore**:  bump dependencies
- [195670f](https://github.com/snickbit/snickbit.js/commit/195670f) **docs**:  update

## 4.3.5

### Patch Changes

- [48718e0](https://github.com/snickbit/snickbit.js/commit/48718e0) **docs**:  update
- [ae72619](https://github.com/snickbit/snickbit.js/commit/ae72619) **build**:  remove nx
- [1bc9f98](https://github.com/snickbit/snickbit.js/commit/1bc9f98) **fix**:  merge defaultCliProgressConfig when sending to cli-progress
- [c57a457](https://github.com/snickbit/snickbit.js/commit/c57a457) **fix**:  make CLIProgressOptions partial
- [ff43f0d](https://github.com/snickbit/snickbit.js/commit/ff43f0d) **style**:  sort package.json
- [769e3b9](https://github.com/snickbit/snickbit.js/commit/769e3b9) **style**:  relint

## 4.3.4

### Patch Changes

- [4ca542a](https://github.com/snickbit/snickbit.js/commit/4ca542a) **build**:  switch to pnpm for running

## 4.3.3

### Patch Changes

- [7e02502](https://github.com/snickbit/snickbit.js/commit/7e02502) **chore**(dep):  update dependencies
- [da8a0b3](https://github.com/snickbit/snickbit.js/commit/da8a0b3) **style**:  reformat
- [3d9b594](https://github.com/snickbit/snickbit.js/commit/3d9b594) **fix**:  make spinner options optional
- [f207683](https://github.com/snickbit/snickbit.js/commit/f207683) **fix**(progress):  make tick value optional

## 4.3.2

### Patch Changes

- [2590641](https://github.com/snickbit/snickbit.js/commit/2590641) **fix**:  export MultiProgressChild
- [d4a042e](https://github.com/snickbit/snickbit.js/commit/d4a042e) **chore**:  update dependencies

## 4.3.1

### Patch Changes

- [30b4883](https://github.com/snickbit/snickbit.js/commit/30b4883) **docs**:  update
- [9d308cd](https://github.com/snickbit/snickbit.js/commit/9d308cd) **feat**:  add helper method for setting message
- [1fc998a](https://github.com/snickbit/snickbit.js/commit/1fc998a) **feat**:  add set method to set current value of progress bar

## 4.3.0

### Minor Changes

- [f50e3a9](https://github.com/snickbit/snickbit.js/commit/f50e3a9) **docs**:  update
- [29c0d61](https://github.com/snickbit/snickbit.js/commit/29c0d61) **fix**:  add MultiProgressChildConfig type definition and re-declare the options
- [8ab4a9e](https://github.com/snickbit/snickbit.js/commit/8ab4a9e) **fix**:  simplify ProgressOptions type definition
- [ccca54c](https://github.com/snickbit/snickbit.js/commit/ccca54c) **feat**:  autostart progress by default, add option to disable
- [cf54186](https://github.com/snickbit/snickbit.js/commit/cf54186) **fix**:  cleanup code and adjust type definitions
- [c0d828f](https://github.com/snickbit/snickbit.js/commit/c0d828f) **feat**:  expand tick method with overloads
- [c6f76f8](https://github.com/snickbit/snickbit.js/commit/c6f76f8) **build**:  add dev watcher scripts with source maps

## 4.2.33

### Patch Changes

- [0c63eaf](https://github.com/snickbit/snickbit.js/commit/0c63eaf) **build**:  migrate to nx
- [9447fbc](https://github.com/snickbit/snickbit.js/commit/9447fbc) **feat**(node-utilities):  add descriptions to parsed imports
- [c808d21](https://github.com/snickbit/snickbit.js/commit/c808d21) **feat**(node-utilities):  adjust type definition for parseImports
- [6c92d3f](https://github.com/snickbit/snickbit.js/commit/6c92d3f) **fix**(node-utilities):  parseImports return type
- [9e06203](https://github.com/snickbit/snickbit.js/commit/9e06203) **feat**(node-utilities):  export isImport and isImportDefinition helpers
- [447e7b0](https://github.com/snickbit/snickbit.js/commit/447e7b0) **docs**:  update chore: update dependencies chore: adjust configurations

## 4.2.32

### Patch Changes

- [e670dbc](https://github.com/snickbit/snickbit.js/commit/e670dbc) **feat**:  add bufferStream and makeBuffer helper functions, previously from @snickbit/utilities
- [a1b37df](https://github.com/snickbit/snickbit.js/commit/a1b37df) **chore**:  update dependencies
- [b61521a](https://github.com/snickbit/snickbit.js/commit/b61521a) **chore**:  update build config
- [67a87da](https://github.com/snickbit/snickbit.js/commit/67a87da) **docs**:  update

## 4.2.31

### Patch Changes

- [8a65a3c](https://github.com/snickbit/snickbit.js/commit/8a65a3c) **chore**:  update dependencies

## 4.2.30

### Patch Changes

- [c7fb5bc](https://github.com/snickbit/snickbit.js/commit/c7fb5bc) **docs**:  update
- [ef3ba51](https://github.com/snickbit/snickbit.js/commit/ef3ba51) **chore**:  update build config
- [164874d](https://github.com/snickbit/snickbit.js/commit/164874d) **chore**:  update build config

## 4.2.29

### Patch Changes

- [d37a724](https://github.com/snickbit/snickbit.js/commit/d37a724) **fix**(node-utilities):  remove debugging log
- [3925c24](https://github.com/snickbit/snickbit.js/commit/3925c24) **feat**(node-utilities):  add CTRL+C support to prompts
- [18226ec](https://github.com/snickbit/snickbit.js/commit/18226ec) **fix**(node-utilities):  correct prompts types
- [9d53930](https://github.com/snickbit/snickbit.js/commit/9d53930) **fix**(node-utilities):  missing progress message

## 4.2.28

### Patch Changes

- 7af5524: chore: update config

## 4.2.16

### Patch Changes

- 4dd2074: First public release
