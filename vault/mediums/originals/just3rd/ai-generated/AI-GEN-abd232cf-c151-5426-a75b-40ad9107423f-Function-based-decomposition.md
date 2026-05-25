---
type: medium
title: Function-Based Decomposition in C
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[function-based-decomposition|function-based-decomposition]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/c-programming/c-programming|c-programming]]"
learning-time-in-minutes: 2
---
# Function-Based Decomposition in C

Breaking down a large C program into smaller, manageable functions is fundamental to modular programming. This technique, known as **function-based decomposition**, makes your code easier to write, understand, debug, and reuse. Each function should ideally perform a single, distinct task.

## Why Decompose?

Imagine writing a program to calculate the area and perimeter of different shapes. Without decomposition, your `main` function would become a long, complex block of code. With function-based decomposition, you can create separate functions for:

*   Calculating the area of a rectangle.
*   Calculating the perimeter of a rectangle.
*   Calculating the area of a circle.
*   Calculating the circumference of a circle.

This makes your code much cleaner and more organized.

## Practical Example: Simple Calculator

Let's illustrate function-based decomposition with a simple calculator that adds and subtracts two numbers.

**Without Decomposition (Difficult to read and manage):**

```c
#include <stdio.h>

int main() {
    int num1, num2, choice;
    int result;

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    printf("Enter operation (1 for add, 2 for subtract): ");
    scanf("%d", &choice);

    if (choice == 1) {
        result = num1 + num2;
        printf("Sum: %d\n", result);
    } else if (choice == 2) {
        result = num1 - num2;
        printf("Difference: %d\n", result);
    } else {
        printf("Invalid choice.\n");
    }

    return 0;
}
```

**With Function-Based Decomposition (Clearer and organized):**

```c
#include <stdio.h>

// Function to add two numbers
int add(int a, int b) {
    return a + b;
}

// Function to subtract two numbers
int subtract(int a, int b) {
    return a - b;
}

int main() {
    int num1, num2, choice;
    int result;

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    printf("Enter operation (1 for add, 2 for subtract): ");
    scanf("%d", &choice);

    if (choice == 1) {
        result = add(num1, num2); // Calling the add function
        printf("Sum: %d\n", result);
    } else if (choice == 2) {
        result = subtract(num1, num2); // Calling the subtract function
        printf("Difference: %d\n", result);
    } else {
        printf("Invalid choice.\n");
    }

    return 0;
}
```

In the decomposed version, `add` and `subtract` are separate functions. They take inputs (parameters `a` and `b`) and return an output. The `main` function now focuses on user interaction and directing the flow, calling the appropriate function when needed.

## Practice Task

Modify the decomposed calculator program to include a function for multiplication. This new function should take two integers as input and return their product. Update the `main` function to allow the user to choose multiplication as an operation.

## Self-Check Questions

1.  What is the primary benefit of breaking down a C program into functions?
2.  In the decomposed calculator example, what is the responsibility of the `main` function versus the `add` or `subtract` functions?
3.  When designing a new function, what is a good rule of thumb regarding the task it should perform?

## Supports

- [[function-based-decomposition|Function-based decomposition]]
