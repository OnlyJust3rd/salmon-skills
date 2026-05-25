---
type: "medium"
title: "Dynamic Programming Approaches"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/dynamic-programming-approaches|dynamic-programming-approaches]]"
learning-time-in-minutes: 3
---
# Dynamic Programming Approaches

Dynamic programming (DP) is a powerful algorithmic technique used to solve complex problems by breaking them down into simpler subproblems. Instead of recomputing the same solutions repeatedly, DP stores the results of subproblems and reuses them when needed. This leads to significant efficiency gains, especially for problems with overlapping subproblems and optimal substructure.

There are two primary methodologies for implementing dynamic programming:

## Recursive DP (Top-Down with Memoization)

This approach uses recursion to break down the problem into subproblems. To avoid redundant computations, it stores the results of each subproblem in a memoization table (often an array or hash map). Before computing a subproblem, it checks if the result is already in the table. If it is, the stored result is returned. Otherwise, the subproblem is computed, its result is stored, and then returned.

**Analogy:** Imagine you're trying to calculate the Fibonacci sequence. Instead of recalculating `fib(3)` every time you need it, you store its value after the first calculation and look it up directly for subsequent needs.

**Pseudocode Example (Fibonacci):**

```
function fib(n, memo = {}):
  if n in memo:
    return memo[n]
  if n <= 1:
    return n
  result = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = result
  return result
```

## Iterative DP (Bottom-Up)

This approach starts by solving the smallest subproblems and then builds up to the larger ones. It typically uses loops to iterate through the subproblems, filling up a DP table in a systematic order. This method often avoids the overhead of recursion.

**Analogy:** For the Fibonacci sequence, you would start by calculating `fib(0)` and `fib(1)`, then use those to calculate `fib(2)`, then `fib(3)`, and so on, until you reach `fib(n)`.

**Pseudocode Example (Fibonacci):**

```
function fib_iterative(n):
  if n <= 1:
    return n
  dp = array of size (n + 1)
  dp[0] = 0
  dp[1] = 1
  for i from 2 to n:
    dp[i] = dp[i-1] + dp[i-2]
  return dp[n]
```

### Practical Scenario: Coin Change Problem

You have a set of coin denominations and a target amount. You want to find the minimum number of coins required to make up that amount.

*   **Overlapping Subproblems:** To find the minimum coins for amount `X`, you need to know the minimum coins for `X - coin_denomination`. These smaller amounts might be needed multiple times.
*   **Optimal Substructure:** The optimal solution for amount `X` can be constructed from the optimal solutions of smaller amounts.

Both recursive and iterative DP can solve this efficiently. The iterative approach is often preferred for its clarity and avoidance of stack overflow issues with very large inputs.

---

### Practice Task

Consider the "Climbing Stairs" problem: you are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Implement this using both recursive DP (with memoization) and iterative DP.

---

### Self-Check Questions

1.  What is the core idea behind dynamic programming that differentiates it from simple recursion?
2.  When might you prefer a recursive DP approach over an iterative one?
3.  What are the two main characteristics of a problem that make it suitable for dynamic programming?
4.  How does memoization help in the recursive DP approach?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/dynamic-programming-approaches|Dynamic Programming Approaches]]
