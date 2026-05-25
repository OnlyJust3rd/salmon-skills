---
type: "medium"
title: "Ensuring Correctness in Problem Solving"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/computational-problem-solving/microskills/correctness-concept|correctness-concept]]"
learning-time-in-minutes: 4
---
# Ensuring Correctness in Problem Solving

When we talk about solving problems using computers, it's not just about getting *an* answer. It's about getting the *right* answer, every time, for all valid situations. This is the core idea behind **correctness**.

## What is Correctness?

An algorithm or a method is considered **correct** if it reliably produces the intended output for every valid input. In simpler terms, it means the solution works as expected and accurately solves the problem it was designed for.

Think of it like following a recipe. If the recipe is correct, and you follow the steps precisely, you'll end up with the delicious dish described. If the recipe has errors (e.g., wrong ingredient amounts, incorrect cooking time), your dish might not turn out as planned.

### Key Aspects of Correctness:

*   **Accuracy:** Does the algorithm produce the mathematically or logically accurate result?
*   **Completeness:** Does the algorithm handle all possible valid inputs and scenarios?
*   **Robustness:** Can the algorithm handle unexpected but still valid inputs without crashing or producing nonsensical outputs? (Though sometimes we separate this into a slightly different concept of reliability).

## Practical Example: Calculating Average Temperature

Let's say you want to write a computer program to calculate the average daily temperature over a week.

**Problem:** Calculate the average temperature from a list of daily temperatures.

**Inputs:** A list of numbers, where each number represents the temperature for a day.
**Output:** A single number representing the average temperature.

**An Algorithm for Average Temperature:**

1.  Take all the daily temperatures.
2.  Add them all together to get the total temperature.
3.  Count how many days there were.
4.  Divide the total temperature by the number of days.

**Checking for Correctness:**

*   **Scenario 1: Normal Week**
    *   **Inputs:** `[20, 22, 21, 23, 20, 22, 21]` (temperatures in Celsius)
    *   **Expected Output:** `(20+22+21+23+20+22+21) / 7 = 149 / 7 = 21.28...`
    *   If our algorithm produces `21.28...`, it seems correct for this common case.

*   **Scenario 2: Only One Day**
    *   **Inputs:** `[15]`
    *   **Expected Output:** `15 / 1 = 15`
    *   Our algorithm should still work. It adds `15`, counts `1` day, and divides `15 / 1`. Correct.

*   **Scenario 3: What about Zero Days? (A Constraint)**
    *   **Inputs:** `[]` (an empty list)
    *   If we try to apply the algorithm:
        *   Total temperature = `0`
        *   Number of days = `0`
        *   Divide `0 / 0`? This is mathematically undefined and would cause a program to crash or produce an error.
    *   **Conclusion:** Our initial algorithm is **not** correct because it fails for the input of zero days. A correct algorithm would need to handle this case, perhaps by returning an error message or a specific value (like `NaN` - Not a Number) to indicate that an average cannot be calculated.

This illustrates that correctness means the algorithm handles *all valid inputs* as intended. For our temperature problem, an empty list might be considered a valid input depending on the exact requirements, and a correct solution must account for it.

## Practice Task

Imagine you are designing an algorithm to find the largest number in a list of positive whole numbers.

**Problem:** Find the largest number in a list of positive integers.

**Inputs:** A list of positive integers.
**Output:** The largest integer in the list.

Consider the following situations and think about whether your proposed algorithm would be correct:

1.  A list with several numbers, like `[5, 12, 3, 9, 15, 7]`.
2.  A list with only one number, like `[42]`.
3.  A list where all numbers are the same, like `[10, 10, 10]`.
4.  A list that is empty, `[]`.

What potential issues might arise when trying to find the largest number in each of these scenarios?

## Self-Check Questions

1.  In your own words, what does it mean for a computational solution to be "correct"?
2.  Why is it important to consider all possible valid inputs when designing a solution to ensure correctness?
3.  Give an example of an input that might cause a simple "find the largest number" algorithm to fail, and explain why.

## Supports

- [[skills/computing/computer-science/algorithms/computational-problem-solving/microskills/correctness-concept|Correctness Concept]]
