---
type: medium
title: "TypeScript Compile Targets: From Code to JavaScript"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[compile-targets|compile-targets]]"
learning-time-in-minutes: 4
---
# TypeScript Compile Targets: From Code to JavaScript

When you write TypeScript, you're not directly running that code in a web browser or a Node.js environment. Browsers and Node.js understand JavaScript. So, how does your TypeScript code become something they can execute? This is where the **TypeScript compiler** and its **compile targets** come in.

Think of the compile target as a setting that tells the TypeScript compiler which version of JavaScript you want your TypeScript code to be converted into. This is crucial because different JavaScript versions have different features and are supported by different environments.

## The Role of the TypeScript Compiler (tsc)

The TypeScript compiler, `tsc`, is the tool that performs this transformation. You write your `.ts` files, and `tsc` reads them, checks for type errors (thanks to TypeScript's static typing!), and then outputs plain `.js` files.

Your main control over the output JavaScript version is through the `tsconfig.json` file, specifically the `target` compiler option.

## Understanding Compile Targets

The `target` option specifies the ECMAScript version to compile down to. ECMAScript is the standard that JavaScript is based on. Newer ECMAScript versions introduce new features, and older ones don't have them.

Here are some common compile targets and what they mean:

*   **`ES3`**: The oldest target, for maximum compatibility with very old JavaScript engines. Rarely used today.
*   **`ES5`**: A widely supported target. Most browsers and Node.js versions support ES5. It's a safe default if you need broad compatibility.
*   **`ES6` / `ES2015`**: Introduced many modern features like arrow functions, classes, `let`/`const`, and template literals.
*   **`ES2016`**, **`ES2017`**, **`ES2018`**, **`ES2019`**, **`ES2020`**, **`ES2021`**, **`ES2022`**, **`ESNEXT`**: These targets correspond to progressively newer ECMAScript versions, offering more modern syntax and features. `ESNEXT` aims to compile to the latest ECMAScript features that the compiler knows about, which might be ahead of official standardization.

### Why Does the Target Matter?

1.  **Compatibility**: If you're targeting older browsers or Node.js versions, you need to compile to an older JavaScript version (like `ES5`) to ensure your code runs. Newer features might not be understood by older environments.
2.  **Features**: By targeting a newer ECMAScript version (like `ES2020`), you can use modern JavaScript features directly in your TypeScript code, making it more concise and readable. The compiler will then translate these features into equivalent ES5 code if your target is `ES5`.
3.  **Code Size and Performance**: Compiling to a more modern target *can sometimes* result in slightly smaller or more performant JavaScript output because it doesn't need to include polyfills or fallbacks for older features. However, the primary driver for choosing a target is usually compatibility.

## Configuring Your Compile Target

The `tsconfig.json` file is where you configure your TypeScript project. To set the compile target, you add or modify the `target` property within the `compilerOptions` object.

Here's a simplified example of a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2016", // Compiles down to ECMAScript 2016
    "module": "CommonJS", // Specifies the module system (e.g., CommonJS for Node.js)
    "outDir": "./dist",   // Output directory for compiled JavaScript files
    "strict": true,       // Enables all strict type-checking options
    "esModuleInterop": true // Enables easier importing of CommonJS modules
  },
  "include": [
    "src/**/*.ts"
  ]
}
```

In this example, `target: "ES2016"` tells `tsc` to output JavaScript that adheres to the ES2016 standard. If you wrote TypeScript code using features only available in ES2020, and your target was ES2016, the compiler would automatically convert those features into their ES2016 (or even ES5) equivalents.

### What if I don't set a target?

If you don't explicitly set a `target`, the default is `ES3`. This is generally not what you want for modern development. It's always recommended to explicitly set your `target` in `tsconfig.json`.

## How it Works Under the Hood (Simplified)

Let's say you have this TypeScript code in `src/index.ts`:

```typescript
// Using ES6 arrow function syntax
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));
```

And your `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "outDir": "./dist"
  }
}
```

When you run `tsc`, it will compile `src/index.ts` and produce a file in `./dist` (e.g., `dist/index.js`) that might look something like this:

```javascript
// Compiled to ES5
var greet = function (name) {
    return "Hello, " + name + "!";
};
console.log(greet("World"));
```

Notice how the ES6 arrow function `=>` was transformed into a traditional `function` expression, and template literals `` `Hello, ${name}!` `` were converted into string concatenation using `+`. This ensures that the output JavaScript can run in environments that only support ES5.

If your `target` was `ES2016` or higher, the output might retain the arrow function and template literal syntax, as those are valid in those versions.

## Key Takeaway

The **compile target** is a fundamental setting in your TypeScript project that dictates the ECMAScript version of the JavaScript output. By understanding and configuring your `target` correctly in `tsconfig.json`, you ensure your TypeScript code is compatible with your intended execution environments while allowing you to leverage modern language features during development.

## Supports

- [[compile-targets|Compile targets]]
