---
type: medium
title: C Operator Application
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[c-operator-application|c-operator-application]]"
learning-time-in-minutes: 2
---
# C Operator Application

In C programming, operators are special symbols that perform operations on one or more operands (values or variables). Understanding how to use operators correctly is fundamental to building program logic and performing calculations.

## Understanding Operators

C provides a rich set of operators for various purposes:

*   **Arithmetic Operators:** Perform mathematical calculations (e.g., `+`, `-`, `*`, `/`, `%`).
*   **Relational Operators:** Compare two values and return a boolean result (`1` for true, `0` for false) (e.g., `==`, `!=`, `<`, `>`, `<=`, `>=`).
*   **Logical Operators:** Combine or negate boolean expressions (e.g., `&&` (AND), `||` (OR), `!` (NOT)).
*   **Assignment Operators:** Assign values to variables (e.g., `=`, `+=`, `-=`, `*=`, `/=`).
*   **Increment and Decrement Operators:** Increase or decrease a variable's value by one (e.g., `++`, `--`).

## Practical Application: Calculating and Comparing Scores

Imagine you are developing a simple student grading system. You need to calculate a student's total score from different assignments and then compare it against a passing threshold.

Let's use some operators:

```c
#include <stdio.h>

int main() {
    int assignment1 = 85;
    int assignment2 = 92;
    int examScore = 78;
    int passingThreshold = 80;
    int totalScore;

    // Arithmetic operator to calculate total score
    totalScore = assignment1 + assignment2 + examScore;

    printf("Total Score: %d\n", totalScore);

    // Relational operator to check if the student passed
    if (totalScore >= passingThreshold) {
        printf("Status: Passed!\n");
    } else {
        printf("Status: Needs Improvement.\n");
    }

    // Assignment and Increment operator example
    int bonusPoints = 5;
    totalScore += bonusPoints; // Equivalent to totalScore = totalScore + bonusPoints;
    printf("Total Score with Bonus: %d\n", totalScore);

    return 0;
}
```

In this example:
*   `+` is used to sum the assignment and exam scores.
*   `>=` is used to compare the `totalScore` with the `passingThreshold`.
*   `=` is used for initial assignments.
*   `+=` is used to add `bonusPoints` to the `totalScore`.

## Practice Task

Write a C program that:
1.  Declares two integer variables, `num1` and `num2`, and assigns them values.
2.  Uses the arithmetic operator `/` to calculate the division of `num1` by `num2`. Store the result in a variable called `quotient`.
3.  Uses the relational operator `!=` to check if `num1` is not equal to `num2`.
4.  Uses the logical operator `&&` to check if the `quotient` is greater than 5 AND `num1` is less than 100.
5.  Prints the results of these operations.

## Self-Check Questions

1.  What is the primary difference between the `=` and `==` operators in C?
2.  If `a = 10` and `b = 3`, what will be the output of `a % b`?
3.  Explain the outcome of the expression `(5 > 3) || (10 < 2)`.
4.  What does the `++` operator do to a variable?

## Supports

- [[c-operator-application|C operator application]]
