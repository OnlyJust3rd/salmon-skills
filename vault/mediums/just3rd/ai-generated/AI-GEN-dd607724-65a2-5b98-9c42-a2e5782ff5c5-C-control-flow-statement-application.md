---
type: "medium"
title: "Applying C Control Flow Statements"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-programming/microskills/c-control-flow-statement-application|c-control-flow-statement-application]]"
---
# Applying C Control Flow Statements

Control flow statements are the building blocks of any program's logic. They allow you to dictate the order in which statements are executed, enabling your C programs to make decisions and repeat actions. This lesson focuses on implementing these fundamental constructs: conditional statements and loops.

## Why Control Flow Matters

Imagine writing a program that needs to check if a user is old enough to access content. You wouldn't simply execute a single line of code; you'd need to check a condition (user's age) and then decide what to do based on that check. Similarly, if you need to process every item in a list, you'll want to repeat an action. That's where control flow statements come in.

## Conditional Statements: Making Decisions

Conditional statements execute code blocks only if a specified condition is true. The most common are `if`, `else if`, and `else`.

**Example Scenario:** A program to categorize a student's score.

```c
#include <stdio.h>

int main() {
    int score = 75;

    if (score >= 90) {
        printf("Grade: A\n");
    } else if (score >= 80) {
        printf("Grade: B\n");
    } else if (score >= 70) {
        printf("Grade: C\n");
    } else {
        printf("Grade: D\n");
    }

    return 0;
}
```

**How it works:**
The program checks the `score` variable sequentially. If `score` is 90 or greater, it prints "Grade: A" and stops checking. If not, it moves to the next `else if`. If none of the `if` or `else if` conditions are met, the `else` block is executed.

## Loops: Repeating Actions

Loops allow you to execute a block of code multiple times. Common loop types in C are `for`, `while`, and `do-while`.

**Example Scenario:** Calculating the sum of numbers from 1 to 5.

```c
#include <stdio.h>

int main() {
    int sum = 0;
    int i;

    // Using a for loop
    for (i = 1; i <= 5; i++) {
        sum = sum + i;
        printf("Adding %d, current sum is %d\n", i, sum);
    }

    printf("Final sum: %d\n", sum);

    return 0;
}
```

**How it works:**
The `for` loop initializes `i` to 1. It then checks if `i` is less than or equal to 5. If true, it executes the code inside the loop (adds `i` to `sum` and prints) and then increments `i`. This process repeats until `i` becomes 6, at which point the loop terminates.

## Practice Task

Write a C program that:
1. Declares an integer variable named `number`.
2. Assigns it a value.
3. Uses an `if-else if-else` structure to print whether the `number` is positive, negative, or zero.
4. Uses a `while` loop to print the even numbers from 1 up to the value of `number`.

## Self-Check Questions

1. When would you use an `if-else if-else` statement instead of just an `if` statement?
2. What is the primary difference between a `while` loop and a `do-while` loop?
3. How does a `for` loop typically manage its counter variable?

## Supports

- [[skills/programming/programming-languages/c-programming/microskills/c-control-flow-statement-application|C control flow statement application]]
