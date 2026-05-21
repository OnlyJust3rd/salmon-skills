---
type: "medium"
title: "Recursive Algorithms: Solving Problems by Looking Within"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithmic-thinking/microskills/recursive-algorithms|recursive-algorithms]]"
---
# Recursive Algorithms: Solving Problems by Looking Within

Recursion is a powerful technique in algorithmic thinking where a problem is solved by breaking it down into smaller, identical subproblems. Essentially, a recursive algorithm calls itself to solve these smaller instances.

## What is Recursion?

Imagine you have a set of Russian nesting dolls. To open them all, you open the largest doll, and inside you find a smaller doll. You then perform the same action: open that smaller doll. You repeat this until you find the smallest doll that cannot be opened further. This is the core idea of recursion.

A recursive algorithm has two main parts:

1.  **Base Case:** This is the stopping condition. It's the simplest version of the problem that can be solved directly without further recursion. Without a base case, the recursion would continue infinitely.
2.  **Recursive Step:** This is where the algorithm calls itself with a modified input, typically a smaller version of the original problem.

## A Practical Example: Calculating Factorial

The factorial of a non-negative integer \(n\), denoted by \(n!\), is the product of all positive integers less than or equal to \(n\).
For example, \(5! = 5 \times 4 \times 3 \times 2 \times 1 = 120\).

Let's see how we can solve this recursively:

*   **Base Case:** The factorial of 0 is 1 (\(0! = 1\)). Also, the factorial of 1 is 1 (\(1! = 1\)). We can use either as a base case.
*   **Recursive Step:** For any integer \(n > 1\), \(n!\) can be defined as \(n \times (n-1)!\). Notice how \(n!\) is defined in terms of a smaller version of itself, \((n-1)!\).

Here's how a recursive function for factorial might look in pseudocode:

```pseudocode
function factorial(n):
  if n is 0 or n is 1:  // Base Case
    return 1
  else:               // Recursive Step
    return n * factorial(n - 1)
```

Let's trace `factorial(4)`:

1.  `factorial(4)` calls `factorial(3)` and waits for its result.
2.  `factorial(3)` calls `factorial(2)` and waits.
3.  `factorial(2)` calls `factorial(1)` and waits.
4.  `factorial(1)` hits the base case and returns `1`.
5.  `factorial(2)` receives `1`, calculates `2 * 1`, and returns `2`.
6.  `factorial(3)` receives `2`, calculates `3 * 2`, and returns `6`.
7.  `factorial(4)` receives `6`, calculates `4 * 6`, and returns `24`.

## Practice Task

Imagine you have a list of numbers, and you want to find the sum of all numbers in the list. Write a pseudocode for a recursive function `sum_list(numbers)` that achieves this. Remember to define your base case and recursive step.

## Self-Check Questions

1.  What are the two essential components of a recursive algorithm?
2.  Why is the base case crucial in a recursive function?
3.  Can you explain how the `factorial` function works for `factorial(3)` without looking at the trace above?

## Supports

- [[skills/programming/algorithms/algorithmic-thinking/microskills/recursive-algorithms|Recursive Algorithms]]
