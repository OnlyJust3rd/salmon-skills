---
type: "medium"
title: "Executing Simple Computational Tasks in C"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-programming/microskills/basic-task-execution|basic-task-execution]]"
---
# Executing Simple Computational Tasks in C

This lesson focuses on writing C programs to perform straightforward calculations and manipulations. We'll build upon your understanding of variables and operators to create programs that solve basic computational problems.

## Core Idea: From Input to Output

At its heart, a C program designed for basic task execution takes some form of input (even if it's just initial values set in the code), performs operations on that input, and then produces an output. This output can be a calculated number, a status message, or a transformed piece of data.

## Practical Example: Calculating the Area of a Rectangle

Let's say you need to write a C program to calculate the area of a rectangle given its length and width.

### The Code

```c
#include <stdio.h>

int main() {
    // Declare variables to store length, width, and area
    float length;
    float width;
    float area;

    // Assign values to length and width (or you could ask for user input)
    length = 10.5;
    width = 5.2;

    // Calculate the area
    area = length * width;

    // Print the result
    printf("The length of the rectangle is: %.2f\n", length);
    printf("The width of the rectangle is: %.2f\n", width);
    printf("The area of the rectangle is: %.2f\n", area);

    return 0; // Indicates successful execution
}
```

### How it Works

1.  `#include <stdio.h>`: This line includes the standard input/output library, which provides functions like `printf` for displaying output.
2.  `int main()`: This is the main function where program execution begins.
3.  `float length, width, area;`: We declare three variables of type `float` (for decimal numbers) to store the dimensions and the calculated area.
4.  `length = 10.5; width = 5.2;`: We assign specific values to `length` and `width`. In more interactive programs, you'd use `scanf` to get these from the user.
5.  `area = length * width;`: This is the core computational task. We multiply the `length` by the `width` and store the result in the `area` variable.
6.  `printf(...)`: These lines display the values of length, width, and the calculated area. The `%.2f` format specifier tells `printf` to display the floating-point number with two digits after the decimal point.
7.  `return 0;`: This signifies that the program executed without errors.

## Practice Task

Write a C program that calculates the perimeter of a square. Your program should:
*   Declare a variable for the side length of the square (use `float`).
*   Assign a value to the side length.
*   Calculate the perimeter (Perimeter = 4 \* side\_length).
*   Print the side length and the calculated perimeter.

## Self-Check Questions

1.  What is the purpose of the `printf` function in the example program?
2.  If you wanted to calculate the area of a circle, what formula would you use, and what variable types might be appropriate?
3.  How would you change the program to calculate the area of a rectangle with a length of `7.8` and a width of `3.1`?

## Supports

- [[skills/programming/programming-languages/c-programming/microskills/basic-task-execution|Basic task execution]]
