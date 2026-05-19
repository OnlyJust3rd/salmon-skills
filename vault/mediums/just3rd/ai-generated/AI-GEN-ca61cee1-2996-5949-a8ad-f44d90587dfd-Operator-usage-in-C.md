---
type: "medium"
title: "Operator Usage in C"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-programming/microskills/operator-usage-in-c|Operator usage in C]]"
---
# Operator Usage in C

In C programming, operators are special symbols that perform operations on variables and values. To implement basic C programs effectively, understanding and applying these operators is crucial. This lesson focuses on arithmetic, logical, and relational operators.

## Arithmetic Operators

These operators perform mathematical calculations.

| Operator | Description          | Example     |
| :------- | :------------------- | :---------- |
| `+`      | Addition             | `a + b`     |
| `-`      | Subtraction          | `a - b`     |
| `*`      | Multiplication       | `a * b`     |
| `/`      | Division             | `a / b`     |
| `%`      | Modulo (remainder)   | `a % b`     |

## Relational Operators

These operators compare two values and return a boolean result (1 for true, 0 for false).

| Operator | Description         | Example   |
| :------- | :------------------ | :-------- |
| `==`     | Equal to            | `a == b`  |
| `!=`     | Not equal to        | `a != b`  |
| `>`      | Greater than        | `a > b`   |
| `<`      | Less than           | `a < b`   |
| `>=`     | Greater than or equal to | `a >= b` |
| `<=`     | Less than or equal to | `a <= b` |

## Logical Operators

These operators combine or modify boolean expressions.

| Operator | Description           | Example       |
| :------- | :-------------------- | :------------ |
| `&&`     | Logical AND           | `a && b`      |
| `||`     | Logical OR            | `a || b`      |
| `!`      | Logical NOT           | `!a`          |

### Practical Scenario

Imagine you're writing a program to check if a student passes a course. A student passes if their average score is 60 or above AND they have completed all assignments.

```c
#include <stdio.h>

int main() {
    int average_score = 75;
    int assignments_completed = 1; // 1 for true, 0 for false

    // Check if the student passes
    if ((average_score >= 60) && (assignments_completed == 1)) {
        printf("Congratulations! You passed.\n");
    } else {
        printf("You did not meet the passing criteria.\n");
    }

    return 0;
}
```

In this example, `(average_score >= 60)` checks if the score is sufficient, and `(assignments_completed == 1)` checks if assignments are done. The `&&` operator ensures both conditions must be true for the student to pass.

### Practice Task

Write a C program that:
1. Declares two integer variables, `num1` and `num2`, and assigns them values.
2. Calculates their sum and prints the result.
3. Checks if `num1` is greater than `num2` and prints "num1 is greater" if true, otherwise prints "num1 is not greater".
4. Checks if `num1` is even using the modulo operator. If it is, print "num1 is even".

### Self-Check Questions

1. What is the result of `10 % 3` in C?
2. If `x` is 5 and `y` is 10, what is the value of `(x < y) || (x == y)`?
3. How would you check if a number `age` is between 18 and 65 (inclusive)?

## Supports

- [[skills/programming/programming-languages/c-programming/microskills/operator-usage-in-c|Operator usage in C]]
