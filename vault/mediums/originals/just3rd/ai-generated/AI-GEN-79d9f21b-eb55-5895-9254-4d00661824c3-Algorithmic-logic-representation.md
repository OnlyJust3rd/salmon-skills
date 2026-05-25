---
type: "medium"
title: "Understanding Algorithmic Logic with Pseudocode"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithm-representation/microskills/algorithmic-logic-representation|algorithmic-logic-representation]]"
learning-time-in-minutes: 2
---
# Understanding Algorithmic Logic with Pseudocode

Pseudocode is a way to describe an algorithm's steps and logic using a simplified, human-readable format. It's not a real programming language, but it helps us think through the steps of a process before writing actual code. It focuses on clarity and understanding the "what" and "how" of a computational process.

## What is Algorithmic Logic?

Algorithmic logic refers to the sequence of instructions and decision-making processes that a computer follows to solve a problem. This includes:

*   **Sequential Steps:** Actions performed one after another.
*   **Conditional Logic:** Making decisions based on certain conditions (e.g., IF this is true, THEN do that).
*   **Repetition (Loops):** Repeating a set of actions multiple times (e.g., FOR each item, DO this).

Pseudocode uses keywords to represent these common logic structures, making it easy for anyone to follow the algorithm's flow.

## Common Pseudocode Keywords

Here are some basic keywords you'll often see in pseudocode:

*   **START/END:** Marks the beginning and end of the algorithm.
*   **INPUT/OUTPUT:** Used to get data into the algorithm or display results.
*   **SET:** Assigns a value to a variable.
*   **IF...THEN...ELSE:** For conditional branching.
*   **WHILE...DO:** For repeating actions as long as a condition is true.
*   **FOR EACH...DO:** For iterating over a collection of items.
*   **CALL:** To execute another procedure or function.

## Practical Example: Checking for a Valid Password

Let's say we want to create a simple algorithm to check if a password is valid. A valid password needs to be at least 8 characters long.

```pseudocode
START

  // Get password from user
  INPUT user_password

  // Check the length of the password
  IF LENGTH(user_password) IS GREATER THAN OR EQUAL TO 8 THEN
    OUTPUT "Password is valid."
  ELSE
    OUTPUT "Password must be at least 8 characters long."
  END IF

END
```

In this example:

*   `START` and `END` define the algorithm's boundaries.
*   `INPUT user_password` gets the password.
*   `LENGTH(user_password)` is a hypothetical function that returns the password's length.
*   `IF...THEN...ELSE` handles the decision: if the length is sufficient, it prints one message; otherwise, it prints another.
*   `OUTPUT` displays the result.

## Practice Task

Write pseudocode for an algorithm that takes two numbers as input and outputs the larger of the two.

## Self-Check Questions

1.  What is the primary purpose of pseudocode?
2.  In the password example, what keyword is used to make a decision based on the password's length?
3.  If you wanted to repeat a process 10 times, what type of pseudocode structure would you likely use?

## Supports

- [[skills/computing/computer-science/algorithms/algorithm-representation/microskills/algorithmic-logic-representation|Algorithmic logic representation]]
