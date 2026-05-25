---
type: medium
title: Understanding Primitive and Object Types in TypeScript
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[primitive-and-object-types|primitive-and-object-types]]"
learning-time-in-minutes: 3
---
# Understanding Primitive and Object Types in TypeScript

TypeScript brings the power of static typing to JavaScript, helping you catch errors early and write more robust code. A fundamental part of this is understanding how to define the types of your variables and function parameters. This lesson focuses on primitive and object types, and how to annotate them.

## What are Primitive Types?

Primitive types are the basic building blocks of data in JavaScript and TypeScript. They represent single, immutable values. TypeScript provides type annotations for these common primitives:

*   **`string`**: Represents textual data.
*   **`number`**: Represents both integers and floating-point numbers.
*   **`boolean`**: Represents `true` or `false` values.
*   **`null`**: Represents the intentional absence of any object value.
*   **`undefined`**: Represents a variable that has not been assigned a value.
*   **`symbol`**: Represents a unique and immutable identifier.
*   **`bigint`**: Represents whole numbers larger than what `number` can safely handle.

### Annotating Primitive Variables

You annotate a variable by placing a colon (`:`) after the variable name, followed by the type.

```typescript
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isDone: boolean = false;
let nothing: null = null;
let notAssigned: undefined = undefined;
let uniqueId: symbol = Symbol("id");
let largeNumber: bigint = 1234567890123456789012345678901234567890n;
```

TypeScript will now enforce these types. If you try to assign a value of a different type, you'll get a compile-time error.

```typescript
// This will cause an error:
// message = 123; // Type 'number' is not assignable to type 'string'.
```

### Annotating Function Parameters and Return Types

You can also annotate function parameters and their return types. This makes it clear what kind of data a function expects and what it will produce.

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

let greeting: string = greet("Alice"); // greeting will be "Hello, Alice!"

function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(5, 10); // sum will be 15
```

If a function doesn't explicitly return a value, its return type is implicitly `void`. You can also explicitly declare it as `void`.

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

## What are Object Types?

Object types in TypeScript refer to data structures that can hold multiple properties, each with its own type. This includes plain JavaScript objects, arrays, and custom structures.

### Annotating Object Literals

When you create an object literal, you can define the shape of that object.

```typescript
let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Bob",
  age: 30,
  isAdmin: true,
};

// This will cause an error:
// user.age = "thirty"; // Type 'string' is not assignable to type 'number'.
// user.email = "bob@example.com"; // Property 'email' does not exist on type '{ name: string; age: number; isAdmin: boolean; }'.
```

### Annotating Arrays

Arrays can be annotated in a couple of ways. You can specify the type of elements the array will hold.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Alternatively, using the generic Array type:
let prices: Array<number> = [10.99, 5.50, 20.00];
```

### What is an `object` type?

The `object` type in TypeScript refers to any non-primitive value. This means it can represent arrays, functions, or any object with properties. However, it's often too broad for practical use on its own. When you use `object` as a type annotation, TypeScript won't let you assign primitive values to it.

```typescript
let myObject: object = { a: 1 };
// myObject = 5; // Type 'number' is not assignable to type 'object'.

let myArray: object = [1, 2, 3];
```

While `object` is a valid type, it's usually more beneficial to define the specific structure of your objects as shown in the object literal example.

## Key Takeaways

*   TypeScript allows you to add type annotations to variables, function parameters, and return types.
*   Primitive types (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) represent single values.
*   Object types describe the structure of data that can hold multiple properties.
*   Annotating types helps prevent errors by catching type mismatches during development.

## Supports

- [[primitive-and-object-types|Primitive and object types]]
