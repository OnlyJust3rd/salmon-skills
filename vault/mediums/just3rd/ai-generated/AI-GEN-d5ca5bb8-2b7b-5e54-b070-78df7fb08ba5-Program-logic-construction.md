---
type: "medium"
title: "Program Logic Construction in C"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-programming/microskills/program-logic-construction|program-logic-construction]]"
---
# Program Logic Construction in C

Understanding how to combine basic C programming elements is key to building functional programs. This lesson focuses on how variables, data types, operators, and control flow work together to create program logic.

## What is Program Logic?

Program logic refers to the sequence of operations and decisions a program makes to achieve a specific task. It's the "brain" of your code, directing how data is processed and what actions are taken based on different conditions.

## Combining Elements for Logic

Let's see how these C elements come together.

**Scenario:** Imagine you're writing a simple program to determine if a student passes an exam based on their score.

*   **Variables and Data Types:** You'll need a variable to store the student's score (e.g., an `int` for whole numbers) and perhaps another to store the passing grade (also an `int`).
*   **Operators:** You'll use comparison operators (like `>=`) to compare the student's score with the passing grade.
*   **Control Flow:** This is where you decide what happens next. An `if-else` statement is perfect for this. If the score is greater than or equal to the passing grade, the program "passes" the student; otherwise, it "fails" them.

**Practical Example:**

```c
#include <stdio.h>

int main() {
    int student_score = 75;
    int passing_grade = 60;

    if (student_score >= passing_grade) {
        printf("Student passed!\n");
    } else {
        printf("Student failed.\n");
    }

    return 0;
}
```

In this example:
*   `student_score` and `passing_grade` are variables holding integer data.
*   `>=` is a comparison operator.
*   The `if-else` statement controls the program's flow, deciding which `printf` statement to execute based on the comparison.

## Practice Task

Write a C program that:
1.  Declares an integer variable `temperature`.
2.  Assigns a value to `temperature` (e.g., 25 degrees Celsius).
3.  Uses an `if-else` statement to check if `temperature` is greater than 30.
4.  If `temperature` is greater than 30, print "It's a hot day!".
5.  Otherwise, print "It's a pleasant day.".

## Self-Check Questions

1.  What is the role of operators in constructing program logic?
2.  When would you use an `if-else` statement to control program flow?
3.  How do variables and data types contribute to the logic of a program?

## Supports

- [[skills/programming/programming-languages/c-programming/microskills/program-logic-construction|Program logic construction]]
