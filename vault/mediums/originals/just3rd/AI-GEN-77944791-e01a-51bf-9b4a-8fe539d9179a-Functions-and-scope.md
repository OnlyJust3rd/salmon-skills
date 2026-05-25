---
type: medium
title: Understanding JavaScript Functions and Scope
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[functions-and-scope|functions-and-scope]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/javascript/javascript|javascript]]"
learning-time-in-minutes: 3
---
# Understanding JavaScript Functions and Scope

In JavaScript, functions are fundamental building blocks for organizing and reusing code. They allow you to define a block of code that can be executed multiple times. Equally important is understanding **scope**, which determines the accessibility of variables within your code. This lesson will cover how to declare and use functions, and the basics of lexical scope.

## What are Functions?

Functions are essentially named blocks of code designed to perform a specific task. They help make your code more modular, readable, and maintainable.

There are two primary ways to define functions in JavaScript:

### 1. Function Declarations

This is the most common way to define a function. It starts with the `function` keyword, followed by the function name, a set of parentheses `()` which may contain parameters, and a code block enclosed in curly braces `{}`.

**Syntax:**

```javascript
function functionName(parameter1, parameter2) {
  // code to be executed
  return value; // optional
}
```

**Example:**

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Alice"); // Calling the function
console.log(message); // Output: Hello, Alice!
```

In this example, `greet` is a function declaration. It takes one parameter, `name`, and returns a greeting string. When `greet("Alice")` is called, the string "Hello, Alice!" is returned and stored in the `message` variable.

### 2. Function Expressions

A function expression defines a function as part of a larger expression, typically assigning it to a variable. The function itself doesn't have a name (making it an anonymous function), though it can be named if needed.

**Syntax:**

```javascript
const variableName = function(parameter1, parameter2) {
  // code to be executed
  return value; // optional
};
```

**Example:**

```javascript
const multiply = function(a, b) {
  return a * b;
};

let product = multiply(5, 3); // Calling the function
console.log(product); // Output: 15
```

Here, `multiply` is a variable holding an anonymous function. This function takes two parameters, `a` and `b`, and returns their product.

**Key Difference:** Function declarations are "hoisted," meaning they can be called before they are declared in the code. Function expressions, however, are not hoisted in the same way; you must declare them before you can call them.

## Understanding Scope

Scope refers to the current context in which variables are accessible. In JavaScript, there are two main types of scope:

### 1. Global Scope

Variables declared outside of any function or block are in the global scope. They are accessible from anywhere in your JavaScript code.

**Example:**

```javascript
let globalVariable = "I am global";

function showGlobal() {
  console.log(globalVariable); // Accessible here
}

showGlobal(); // Output: I am global
console.log(globalVariable); // Also accessible here
```

While convenient, overusing global variables can lead to naming conflicts and make your code harder to manage.

### 2. Local Scope (Function Scope)

Variables declared inside a function are in the local scope of that function. They are only accessible within that specific function.

**Example:**

```javascript
function calculateArea(width, height) {
  let area = width * height; // 'area' is in local scope
  console.log("Inside function:", area);
  return area;
}

calculateArea(10, 5); // Output: Inside function: 50

// console.log(area); // This would cause an error: 'area' is not defined
```

Here, the `area` variable is local to the `calculateArea` function. Trying to access it outside the function results in an error.

### Lexical Scope (Static Scope)

JavaScript uses lexical scope. This means that the scope of a variable is determined by its position in the source code at the time the function is *written*, not when it is *executed*. Inner functions have access to variables declared in their outer (enclosing) scopes.

**Example:**

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    let innerVariable = "I am from the inner function";
    console.log(outerVariable); // innerFunction can access outerVariable
    console.log(innerVariable);
  }

  innerFunction();
  // console.log(innerVariable); // This would cause an error: 'innerVariable' is not defined
}

outerFunction();
// Output:
// I am from the outer function
// I am from the inner function
```

In this example, `innerFunction` can access `outerVariable` because `innerFunction` is defined within the scope of `outerFunction`. This chaining of scopes allows for powerful data encapsulation and organization.

Understanding functions and scope is a crucial step in mastering JavaScript, enabling you to write cleaner, more organized, and more efficient code.

## Supports

- [[functions-and-scope|Functions and scope]]
