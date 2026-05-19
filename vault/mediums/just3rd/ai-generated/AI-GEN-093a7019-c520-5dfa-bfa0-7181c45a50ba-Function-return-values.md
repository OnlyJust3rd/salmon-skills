---
type: "medium"
title: "Using Function Return Values in C"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/software-engineering/modular-program-design/microskills/function-return-values|Function return values]]"
---
# Using Function Return Values in C

This lesson focuses on a crucial aspect of writing modular C programs: understanding and effectively using **function return values**. By mastering this, you'll be able to design functions that not only perform a task but also communicate the result of that task back to the part of your program that called them. This directly contributes to our goal of implementing functions for code reusability.

## What is a Return Value?

When you call a function, it's like asking another part of your program to do a specific job. Sometimes, after completing the job, that part needs to give you something back. This "something" is called the **return value**.

Think of a function as a mini-program within your larger program. It takes some input (arguments), performs operations, and can optionally produce an output (the return value).

## Declaring and Using Return Values

To tell the compiler that a function will send back a value, you specify a **return type** before the function name in its declaration and definition. If a function doesn't return anything, you use the `void` keyword.

The `return` keyword is used inside the function to specify the value that will be sent back.

### Example: A Simple Addition Function

Let's create a function that takes two integers and returns their sum.

```c
#include <stdio.h>

// Function declaration (prototype)
// This tells the compiler that 'add' is a function that takes two integers
// and returns an integer.
int add(int a, int b);

int main() {
    int num1 = 5;
    int num2 = 10;
    int sum_result;

    // Call the 'add' function and store its return value in 'sum_result'
    sum_result = add(num1, num2);

    printf("The sum of %d and %d is: %d\n", num1, num2, sum_result);

    return 0;
}

// Function definition
// This is where the actual code for the 'add' function resides.
int add(int a, int b) {
    int result = a + b;
    // The 'return' statement sends the value of 'result' back to where the function was called.
    return result;
}
```

**How it works:**

1.  **`int add(int a, int b);`**: This is the function prototype. `int` before `add` signifies that this function will return an integer value.
2.  **`sum_result = add(num1, num2);`**: In `main`, we call `add`. The values of `num1` (5) and `num2` (10) are passed to `a` and `b` inside the `add` function.
3.  **`int result = a + b;`**: Inside `add`, the sum (15) is calculated and stored in `result`.
4.  **`return result;`**: The `return` statement sends the value stored in `result` (15) back to the `main` function.
5.  **`sum_result = 15;`**: The returned value (15) is then assigned to the `sum_result` variable in `main`.

### Functions Without Return Values

If a function's sole purpose is to perform an action (like printing to the console) and it doesn't need to send back a computed result, you declare it with a `void` return type.

```c
#include <stdio.h>

// Function declaration for a function that returns nothing
void greet(char* name);

int main() {
    greet("Alice"); // Call the function, no value is returned to be stored
    return 0;
}

// Function definition
void greet(char* name) {
    printf("Hello, %s!\n", name);
    // No 'return' statement is needed here because the return type is void.
    // If you wanted to return from a void function early, you could use 'return;'
}
```

## Practical Applications of Return Values

Return values are fundamental for creating reusable and modular code. Here are some common scenarios:

*   **Calculations and Data Transformation:** Functions that perform mathematical operations, convert data types, or process data often return the result.
*   **Status Reporting:** Functions can return a status code (e.g., 0 for success, non-zero for error) to indicate whether they completed their task successfully.
*   **Input Validation:** A function might check user input and return a boolean value (or an integer representing true/false) indicating if the input is valid.
*   **Searching and Finding:** Functions designed to find a specific item in a data structure can return the item itself or an index, or a special value (like -1) if it's not found.

### Example: Checking for Even Numbers

This function checks if a number is even and returns a boolean-like value (1 for true, 0 for false).

```c
#include <stdio.h>

// Function prototype
int isEven(int num);

int main() {
    int number = 10;

    if (isEven(number)) {
        printf("%d is even.\n", number);
    } else {
        printf("%d is odd.\n", number);
    }

    number = 7;
    if (isEven(number)) {
        printf("%d is even.\n", number);
    } else {
        printf("%d is odd.\n", number);
    }

    return 0;
}

// Function definition
int isEven(int num) {
    if (num % 2 == 0) {
        return 1; // Represents true (even)
    } else {
        return 0; // Represents false (odd)
    }
}
```

## Key Takeaways

*   **Return Type:** Specify the data type a function will send back using keywords like `int`, `float`, `char`, etc. Use `void` if no value is returned.
*   **`return` Statement:** Use the `return` keyword within a function to send a value back to the caller.
*   **Assignment:** When a function returns a value, you can assign that value to a variable in the calling function.
*   **Modularity:** Return values are essential for building functions that are self-contained and can provide useful information back to the rest of your program, promoting cleaner and more reusable code.

## Supports

- [[skills/programming/software-engineering/modular-program-design/microskills/function-return-values|Function return values]]
