---
type: medium
title: "Understanding JavaScript Language Primitives: Variables, Operators, and Control Structures"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[language-primitives|language-primitives]]"
learning-time-in-minutes: 3
---
# Understanding JavaScript Language Primitives: Variables, Operators, and Control Structures

This lesson will help you understand the fundamental building blocks of JavaScript: variables, operators, and control structures. These concepts are essential for writing any JavaScript code and are key to controlling the flow of your programs.

## What are Language Primitives?

In programming, primitives are the most basic data types that a language provides. They are the raw ingredients you use to build more complex data structures and logic. In JavaScript, understanding primitives is the first step towards mastering its syntax and how scripts execute.

## Variables: Storing Information

Variables are like containers that hold data. You can give them names and assign values to them, and then use those names to access or change the data later.

### Declaring Variables

In JavaScript, you declare variables using `let` or `const`.

*   `let`: Use `let` for variables whose values might change.
*   `const`: Use `const` for variables whose values should *not* change after they are initially assigned (constants).

```javascript
// Using let
let playerName = "Alice";
let score = 100;

playerName = "Bob"; // This is allowed because playerName was declared with let
score = score + 50;

// Using const
const PI = 3.14159;
const MAX_USERS = 10;

// PI = 3.14; // This would cause an error because PI is a constant
```

### Naming Variables

Good variable names are descriptive and follow certain rules:
*   Can contain letters, numbers, underscores (`_`), and dollar signs (`$`).
*   Cannot start with a number.
*   Are case-sensitive (`myVariable` is different from `MyVariable`).
*   Avoid using JavaScript reserved keywords (like `if`, `for`, `function`, `let`, `const`).

### Data Types

JavaScript has several primitive data types:
*   **String**: Text, enclosed in quotes (single `'` or double `"`).
    ```javascript
    let greeting = "Hello, world!";
    let message = 'Learning is fun.';
    ```
*   **Number**: Integers and floating-point numbers.
    ```javascript
    let age = 30;
    let price = 19.99;
    ```
*   **Boolean**: Represents truth values, either `true` or `false`.
    ```javascript
    let isStudent = true;
    let hasPermission = false;
    ```
*   **Undefined**: A variable that has been declared but not yet assigned a value.
    ```javascript
    let unassignedVariable; // Its value is undefined
    ```
*   **Null**: Represents the intentional absence of any object value.
    ```javascript
    let emptyValue = null;
    ```
*   **Symbol** (less common for beginners): Unique and immutable primitive value.
*   **BigInt** (for very large integers): Can represent integers larger than the `Number` type can safely handle.

## Operators: Performing Operations

Operators are special symbols that perform operations on values (operands).

### Arithmetic Operators

Used for mathematical calculations:
*   `+` (Addition)
*   `-` (Subtraction)
*   `*` (Multiplication)
*   `/` (Division)
*   `%` (Modulo - returns the remainder of a division)
*   `++` (Increment - adds 1 to the value)
*   `--` (Decrement - subtracts 1 from the value)

```javascript
let x = 10;
let y = 5;

console.log(x + y);  // Output: 15
console.log(x * y);  // Output: 50
console.log(x % y);  // Output: 0 (10 divided by 5 has no remainder)

x++; // x becomes 11
console.log(x);      // Output: 11
```

### Assignment Operators

Used to assign values to variables:
*   `=` (Assigns)
*   `+=` (Add and assign)
*   `-=` (Subtract and assign)
*   `*=` (Multiply and assign)
*   `/=` (Divide and assign)

```javascript
let count = 5;
count += 3; // Equivalent to count = count + 3;
console.log(count); // Output: 8
```

### Comparison Operators

Used to compare two values. They return a Boolean (`true` or `false`).
*   `==` (Equal to - checks for value equality, performs type coercion)
*   `===` (Strictly equal to - checks for both value and type equality)
*   `!=` (Not equal to - checks for value inequality)
*   `!==` (Strictly not equal to - checks for value and type inequality)
*   `>` (Greater than)
*   `<` (Less than)
*   `>=` (Greater than or equal to)
*   `<=` (Less than or equal to)

```javascript
let age = 25;
let ageString = "25";

console.log(age == ageString);  // Output: true (type coercion happens)
console.log(age === ageString); // Output: false (different types)
console.log(age > 20);          // Output: true
```

### Logical Operators

Used to combine or invert Boolean values:
*   `&&` (Logical AND - returns `true` if both operands are `true`)
*   `||` (Logical OR - returns `true` if at least one operand is `true`)
*   `!` (Logical NOT - inverts the Boolean value)

```javascript
let isSunny = true;
let isWarm = false;

console.log(isSunny && isWarm); // Output: false
console.log(isSunny || isWarm); // Output: true
console.log(!isSunny);          // Output: false
```

## Control Structures: Directing the Flow

Control structures allow you to dictate the order in which your code is executed.

### Conditional Statements (`if`, `else if`, `else`)

These allow you to execute code blocks based on whether certain conditions are met.

```javascript
let temperature = 22;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}
```

### Loops (`for`, `while`, `do...while`)

Loops allow you to repeat a block of code multiple times.

#### `for` Loop

Ideal when you know how many times you want to repeat.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + (i + 1));
}
// Output:
// Iteration number: 1
// Iteration number: 2
// Iteration number: 3
// Iteration number: 4
// Iteration number: 5
```

#### `while` Loop

Executes a block of code as long as a specified condition is true.

```javascript
let counter = 0;
while (counter < 3) {
  console.log("Counter is: " + counter);
  counter++;
}
// Output:
// Counter is: 0
// Counter is: 1
// Counter is: 2
```

#### `do...while` Loop

Similar to `while`, but guarantees that the code block will execute at least once before checking the condition.

```javascript
let j = 5;
do {
  console.log("This will print at least once.");
  j++;
} while (j < 5);
// Output:
// This will print at least once.
```

By understanding variables, operators, and control structures, you have grasped the core language primitives that form the foundation of JavaScript programming. These elements enable you to store data, perform calculations, and make decisions within your scripts.

## Supports

- [[language-primitives|Language primitives]]
