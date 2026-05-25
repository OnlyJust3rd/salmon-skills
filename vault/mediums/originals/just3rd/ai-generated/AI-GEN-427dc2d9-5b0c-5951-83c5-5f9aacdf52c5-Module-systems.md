---
type: "medium"
title: "Module Systems in Node.js: `require` vs. `import`"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/backend-development/node-js/microskills/module-systems|module-systems]]"
learning-time-in-minutes: 4
---
# Module Systems in Node.js: `require` vs. `import`

When building server-side applications with Node.js, organizing your code effectively is crucial. One of the primary ways to do this is by using modules. Node.js has evolved its module systems over time, leading to two main styles: CommonJS (`require`) and ECMAScript Modules (ESM) (`import`). Understanding the differences and how to use them is key to writing maintainable and scalable Node.js code.

## What are Modules?

At their core, modules are simply files containing JavaScript code that can be reused across different parts of your application. They help in:

*   **Encapsulation:** Keeping code related to a specific feature or functionality together.
*   **Reusability:** Writing code once and using it in multiple places.
*   **Maintainability:** Making it easier to understand, update, and debug code by breaking it down into smaller, manageable pieces.

## CommonJS Modules (`require` and `module.exports`)

The original and still widely used module system in Node.js is CommonJS. This system uses `require()` to import modules and `module.exports` or `exports` to export values from a module.

**How it works:**

When you `require()` a module, Node.js:

1.  Finds the module file (handling core modules, file paths, and `node_modules`).
2.  Compiles it into a function.
3.  Executes that function.
4.  Returns the `module.exports` object from that function.

**Exporting from a Module (CommonJS):**

Let's say you have a file named `mathUtils.js`:

```javascript
// mathUtils.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const PI = 3.14159;

// Exporting functions and a constant
module.exports = {
  add: add,
  subtract: subtract,
  PI: PI
};
```

**Importing into another File (CommonJS):**

Now, in another file (e.g., `app.js`), you can `require()` these utilities:

```javascript
// app.js

// Importing the math utilities
const math = require('./mathUtils'); // './' indicates a local file

console.log(`5 + 3 = ${math.add(5, 3)}`);
console.log(`10 - 4 = ${math.subtract(10, 4)}`);
console.log(`The value of PI is approximately ${math.PI}`);
```

**Key characteristics of CommonJS:**

*   **Synchronous:** `require()` is synchronous. This means that when Node.js encounters a `require()` call, it stops execution of the current script until the required module is loaded and evaluated. This is generally fine for server-side applications where modules are typically loaded at startup.
*   **Object-based exports:** You export an object containing the values you want to make available.

## ECMAScript Modules (ESM) (`import` and `export`)

ECMAScript Modules (ESM) are the standardized module system for JavaScript, introduced in ECMAScript 2015 (ES6). Node.js has adopted ESM support, offering a more modern and flexible way to manage modules.

**How it works:**

ESM uses static analysis to determine dependencies at compile time. This means Node.js can understand all `import` and `export` statements before executing any code.

**Exporting from a Module (ESM):**

Using the same `mathUtils.js` example, but for ESM:

```javascript
// mathUtils.mjs (use .mjs extension for ESM files, or configure package.json)

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// Alternatively, you can export at the end:
// export { add, subtract, PI };
```

**Importing into another File (ESM):**

In `app.mjs`:

```javascript
// app.mjs

// Importing specific named exports
import { add, subtract, PI } from './mathUtils.mjs';

console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`10 - 4 = ${subtract(10, 4)}`);
console.log(`The value of PI is approximately ${PI}`);

// Importing all exports as a namespace object
// import * as math from './mathUtils.mjs';
// console.log(`Using namespace: ${math.add(1, 2)}`);
```

**Key characteristics of ESM:**

*   **Asynchronous (conceptually):** While the loading process can be asynchronous, the syntax itself is designed to be static.
*   **Static analysis:** Dependencies are known before execution.
*   **Named exports and default exports:** You can export specific named items or a single "default" export from a module.
*   **`import` syntax:** Cleaner syntax for importing specific or all exports.

## How to Use ESM in Node.js

To use ESM in Node.js, you generally have two options:

1.  **Use the `.mjs` file extension:** Create your module files with the `.mjs` extension (e.g., `myModule.mjs`).
2.  **Set `"type": "module"` in `package.json`:** In your project's `package.json` file, add `"type": "module"`. This tells Node.js to treat all `.js` files in that project as ESM by default. You can then opt-out of ESM for individual files by using the `.cjs` extension.

## Contrasting `require` and `import`

| Feature           | CommonJS (`require`)                        | ECMAScript Modules (ESM) (`import`)                 |
| :---------------- | :------------------------------------------ | :-------------------------------------------------- |
| **Syntax**        | `const module = require('module-name');`   | `import { export1 } from 'module-name';`           |
|                   | `module.exports = ...;`                     | `export const myVar = ...;`                        |
| **Loading**       | Synchronous                                 | Asynchronous (during execution), but dependencies are statically determined |
| **Analysis**      | Dynamic                                     | Static                                              |
| **Default Export**| No built-in concept (export as a property)  | Supported (`export default ...`, `import defaultExport ...`) |
| **Module Scope**  | Each file is a module, `exports` are object properties | Each file is a module, `export` makes items available |
| **Node.js Support** | Native, original module system              | Supported, requires `.mjs` or `package.json` config |

## When to Use Which?

*   **CommonJS (`require`):** If you are working on an older Node.js project, or a project that relies heavily on packages that haven't fully adopted ESM, `require` is your go-to. Its synchronous nature is often simpler for beginners and initial setup.
*   **ESM (`import`):** For new Node.js projects, it's generally recommended to adopt ESM. It aligns with the JavaScript standard, offers better tooling support for static analysis, and can lead to more efficient code loading in the future.

**Important Note:** You cannot directly mix `require` and `import` statements within the same file. If your project is configured for ESM (`"type": "module"`), you must use `import` to load other ESM modules and potentially use dynamic `import()` to load CommonJS modules if needed. If your project uses CommonJS, you use `require` for all module imports.

By understanding these two module systems, you gain a fundamental skill for organizing your Node.js server-side code, making it more manageable and scalable.

## Supports

- [[skills/computing/software-engineering/backend-development/node-js/microskills/module-systems|Module systems]]
