---
type: "medium"
title: "Dynamic Programming Implementation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/dynamic-programming-implementation|dynamic-programming-implementation]]"
learning-time-in-minutes: 3
---
# Dynamic Programming Implementation

Dynamic programming is a powerful algorithmic technique used to solve complex problems by breaking them down into simpler subproblems. The key idea is to solve each subproblem only once and store its solution, typically in a table or an array. When the same subproblem is encountered again, we can retrieve its stored solution instead of recomputing it. This approach avoids redundant calculations and significantly improves efficiency, especially for problems with overlapping subproblems and optimal substructure.

We'll focus on the practical implementation aspect using a common dynamic programming problem: the Fibonacci sequence. While not the most efficient way to calculate Fibonacci numbers (a simple iterative approach is better), it serves as an excellent introductory example for demonstrating dynamic programming.

## Fibonacci Sequence with Dynamic Programming

The Fibonacci sequence is defined as:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1

A naive recursive implementation would repeatedly calculate the same Fibonacci numbers multiple times, leading to exponential time complexity. Dynamic programming addresses this by storing computed values.

Here's a Python implementation using a bottom-up (tabulation) approach:

```python
def fibonacci_dp(n):
    if n <= 1:
        return n

    # Create a list to store Fibonacci numbers
    # dp[i] will store the i-th Fibonacci number
    dp = [0] * (n + 1)

    # Base cases
    dp[0] = 0
    dp[1] = 1

    # Fill the dp table from bottom up
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

# Example usage:
n = 10
print(f"The {n}-th Fibonacci number is: {fibonacci_dp(n)}")
```

### How it works:

1.  **Initialization**: We create a list `dp` of size `n + 1` to store results.
2.  **Base Cases**: We set `dp[0]` to 0 and `dp[1]` to 1, as these are the starting values of the Fibonacci sequence.
3.  **Iteration**: We loop from `i = 2` up to `n`. In each iteration, `dp[i]` is calculated by summing the two preceding values in the `dp` table (`dp[i-1]` and `dp[i-2]`). This ensures that when we calculate `dp[i]`, the values for `dp[i-1]` and `dp[i-2]` have already been computed and stored.
4.  **Result**: Finally, `dp[n]` holds the desired n-th Fibonacci number.

This bottom-up approach has a time complexity of \(O(n)\) because we iterate through the loop `n` times, and each operation inside the loop is constant time. The space complexity is also \(O(n)\) due to the `dp` table.

## Practice Task

Implement the dynamic programming solution for the following problem:

**Problem:** Given a list of coin denominations and a target amount, find the minimum number of coins required to make that amount. Assume you have an infinite supply of each coin denomination.

**Example:**
Coins: `[1, 2, 5]`
Amount: `11`
Output: `3` (because 11 = 5 + 5 + 1)

Consider how you would define your subproblems and how you would store their solutions to avoid recomputation.

## Self-Check Questions

1.  When is dynamic programming a suitable approach for solving a problem?
2.  What are the two key properties of problems that can be solved using dynamic programming?
3.  In the Fibonacci example, why is the `dp` table crucial for efficiency compared to a simple recursive solution?
4.  What is the difference between a top-down (memoization) and a bottom-up (tabulation) dynamic programming approach? (You don't need to implement top-down, but understand the concept.)

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/dynamic-programming-implementation|Dynamic Programming Implementation]]
