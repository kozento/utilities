# @kozento/utilities

Utilities For Kozento

## Installation

You can install this package using npm, yarn, or pnpm.

#### npm

```sh
npm install @kozento/utilities
```

#### yarn

```sh
yarn add @kozento/utilities
```

#### pnpm

```sh
pnpm add @kozento/utilities
```

## Usage

This package provides two utility functions: ```ccc``` and ```csc```.

### csc (Create Styles Conditionally)

The ```csc``` function creates styles conditionally based on passed in props.

```js
import { csc } from '@kozento/utilities';

console.log(csc({ foo: "bar" }, { default: "defaultClass", foo: { bar: "baz" } })); // "defaultClass baz"
```

### ccc (Create Classes Conditionally)

The ```ccc``` function generates classes based on the values of properties.

```js
import { ccc } from '@kozento/utilities';

console.log(ccc("foo", true && "bar", false && "baz")); // "foo bar"
```