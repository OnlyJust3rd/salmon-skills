---
type: "medium"
title: "Iterative Algorithms: Repeating for Results"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/iterative-algorithms|iterative-algorithms]]"
learning-time-in-minutes: 2
---
# Iterative Algorithms: Repeating for Results

Iterative algorithms are the backbone of many computational processes. They involve repeating a set of instructions or a process multiple times until a specific condition is met. Think of it as a loop: do this, then this, then check if we're done. If not, do it again! This is fundamental to algorithmic thinking, allowing us to solve complex problems by breaking them down into manageable, repeatable steps.

## What are Iterative Algorithms?

At their core, iterative algorithms use loops (like `for`, `while`, or `do-while` loops in programming) to execute a block of code repeatedly. Each pass through the loop is called an iteration. An iteration typically updates some state or performs an action, and a condition determines when the looping stops.

### Key Components:

1.  **Initialization:** Setting up the initial state before the loop begins.
2.  **Condition:** A check that determines whether to continue the loop.
3.  **Iteration Body:** The set of instructions to be repeated.
4.  **Update:** Modifying the state within the loop to move towards the stopping condition.

## Practical Example: Finding the Sum of Numbers

Imagine you need to calculate the sum of all numbers from 1 to 100. An iterative approach is perfect here.

**Scenario:** Calculate the sum \(1 + 2 + 3 + \dots + 100\).

**Iterative Process:**

1.  **Initialize:** Start with a `total_sum` set to 0. We also need a `current_number` starting at 1.
2.  **Condition:** Keep looping as long as `current_number` is less than or equal to 100.
3.  **Iteration Body:** Add the `current_number` to `total_sum`.
4.  **Update:** Increment `current_number` by 1 for the next iteration.

**Pseudocode:**

```
total_sum = 0
current_number = 1

while current_number <= 100:
  total_sum = total_sum + current_number
  current_number = current_number + 1

# After the loop, total_sum will hold the sum of numbers from 1 to 100.
```

In this example, the loop iterates 100 times. Each time, one number is added to the sum, and the `current_number` increases. When `current_number` becomes 101, the condition `current_number <= 100` becomes false, and the loop terminates.

## Practice Task

You are given a list of numbers: `[5, 2, 8, 1, 9, 4]`. Write pseudocode for an iterative algorithm that finds the largest number in this list.

## Self-Check Questions

1.  What is the primary purpose of an iterative algorithm?
2.  Identify the four key components of an iterative algorithm.
3.  Describe a situation where an iterative algorithm might be less efficient than another approach (consider recursive algorithms for a hint, though no deep dive is needed here).

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/iterative-algorithms|Iterative Algorithms]]
