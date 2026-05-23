---
type: "medium"
title: "Function Parameter Passing in C"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/modular-program-design/microskills/function-parameter-passing|function-parameter-passing]]"
learning-time-in-minutes: 3
---
# Function Parameter Passing in C

In C programming, functions are building blocks that help us organize code and avoid repetition. To make functions flexible and useful, we often need to pass information into them. This is done through **function parameters**. Understanding how to pass arguments to functions is crucial for effective modular program design.

## What are Function Parameters and Arguments?

When you declare a function, you can specify what kind of information it expects to receive. These are called **parameters**. When you call a function, you provide actual values or variables that correspond to these parameters. These are called **arguments**.

Think of it like a recipe:
*   **Parameter:** The ingredients listed in the recipe (e.g., "2 cups of flour", "1 egg").
*   **Argument:** The actual flour and eggs you use from your pantry when you follow the recipe.

### Function Declaration (with Parameters)

```c
// Function declaration with two integer parameters: num1 and num2
int add(int num1, int num2);
```

Here, `num1` and `num2` are parameters. They are placeholders for values that will be provided when the `add` function is called.

### Function Definition (with Parameters)

```c
// Function definition
int add(int num1, int num2) {
    int sum = num1 + num2;
    return sum;
}
```

This is where the function's logic is implemented. `num1` and `num2` will hold the values passed in during the function call.

### Function Call (with Arguments)

```c
int main() {
    int a = 5;
    int b = 10;
    int result;

    // Calling the add function with arguments 'a' and 'b'
    result = add(a, b);

    // You can also pass literal values as arguments
    result = add(20, 30);

    return 0;
}
```

In the `main` function, when we call `add(a, b)`, the value of `a` (which is 5) is passed to `num1`, and the value of `b` (which is 10) is passed to `num2`.

## How Parameter Passing Works in C: Pass-by-Value

C uses a mechanism called **pass-by-value** for most data types. This means that when you pass a variable as an argument to a function, a *copy* of that variable's value is created and passed to the function's parameter.

### Implications of Pass-by-Value

*   **Inside the function:** The function works with its own copy of the data.
*   **Changes are local:** Any modifications made to the parameters *inside* the function do **not** affect the original variables in the calling code.

Let's see an example:

```c
#include <stdio.h>

// Function that attempts to modify its parameter
void tryToModify(int value) {
    printf("Inside tryToModify (before change): value = %d\n", value);
    value = value * 2; // Modifying the local copy of 'value'
    printf("Inside tryToModify (after change): value = %d\n", value);
}

int main() {
    int myNumber = 10;

    printf("Before calling tryToModify: myNumber = %d\n", myNumber);

    // Calling tryToModify with myNumber as an argument
    tryToModify(myNumber);

    printf("After calling tryToModify: myNumber = %d\n", myNumber); // myNumber remains unchanged

    return 0;
}
```

**Output:**

```
Before calling tryToModify: myNumber = 10
Inside tryToModify (before change): value = 10
Inside tryToModify (after change): value = 20
After calling tryToModify: myNumber = 10
```

As you can see, even though `value` was doubled inside `tryToModify`, the original `myNumber` in `main` remained 10. This is because `tryToModify` received a copy of `myNumber`'s value.

## When to Use Parameter Passing

You use parameter passing whenever a function needs specific data to perform its task.

*   **Calculations:** Functions that perform mathematical operations (like our `add` example) need the numbers to operate on.
*   **Data Manipulation:** Functions that process or modify data need that data passed to them.
*   **Conditional Logic:** Functions that make decisions based on input values require those values.
*   **Reusability:** By accepting parameters, functions become general-purpose tools that can be used with different data without rewriting the function's logic.

## Common Mistakes to Avoid

*   **Confusing Parameters and Arguments:** Remember, parameters are in the function declaration/definition, and arguments are in the function call.
*   **Assuming Changes Affect Original Variables:** Due to pass-by-value, changes to parameters inside a function don't change the original variables. If you need to modify an original variable, you'll need to use pointers (a more advanced concept).
*   **Mismatched Data Types:** Ensure the type of argument you pass matches the type of parameter the function expects. A compiler warning or error will usually alert you to this.

By mastering function parameter passing, you take a significant step towards writing cleaner, more organized, and reusable C code.

## Supports

- [[skills/computing/software-engineering/software-practices/modular-program-design/microskills/function-parameter-passing|Function parameter passing]]
