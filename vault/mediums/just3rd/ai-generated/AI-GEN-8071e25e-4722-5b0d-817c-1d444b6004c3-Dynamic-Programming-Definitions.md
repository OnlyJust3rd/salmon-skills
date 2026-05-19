---
type: "medium"
title: "Dynamic Programming: The Core Idea"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithms/microskills/dynamic-programming-definitions|Dynamic Programming Definitions]]"
---
# Dynamic Programming: The Core Idea

Dynamic programming is a powerful algorithmic technique used to solve complex problems by breaking them down into simpler, overlapping subproblems. The key is to solve each subproblem only once and store its result, so that when the same subproblem appears again, we can simply retrieve the stored answer instead of recomputing it.

## What is Dynamic Programming?

At its heart, dynamic programming relies on two fundamental principles:

1.  **Overlapping Subproblems**: The problem can be broken down into smaller subproblems, and these subproblems are reused multiple times.
2.  **Optimal Substructure**: The optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems.

Think of it like building with LEGOs. You have many small bricks (subproblems), and you can use the same type of brick in different parts of your creation. If you need a specific type of brick, you build it once and then have it ready to use whenever needed.

## Practical Scenario: Calculating Fibonacci Numbers

The Fibonacci sequence is a classic example used to illustrate dynamic programming. The sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ...

If we want to calculate the 5th Fibonacci number (F(5)):
F(5) = F(4) + F(3)

To calculate F(4), we need F(3) and F(2).
F(4) = F(3) + F(2)

And to calculate F(3), we need F(2) and F(1).
F(3) = F(2) + F(1)

Notice how F(3) and F(2) are calculated multiple times in a naive recursive approach.

A dynamic programming approach would store these results:

1.  Calculate F(0) = 0 (base case)
2.  Calculate F(1) = 1 (base case)
3.  Calculate F(2) = F(1) + F(0) = 1 + 0 = 1. Store F(2) = 1.
4.  Calculate F(3) = F(2) + F(1) = 1 + 1 = 2. Store F(3) = 2.
5.  Calculate F(4) = F(3) + F(2) = 2 + 1 = 3. Store F(4) = 3.
6.  Calculate F(5) = F(4) + F(3) = 3 + 2 = 5. Store F(5) = 5.

By storing the results of F(2), F(3), and F(4) as we compute them, we avoid redundant calculations.

## Practice Task

Imagine you are tasked with finding the most efficient way to multiply a chain of matrices: A, B, and C. The order in which you multiply them can significantly affect the number of operations. For example, (AB)C might require a different number of scalar multiplications than A(BC).

Think about how you might break this problem down. What would be the subproblems? How would the solution to a smaller chain of matrices help you solve a larger one?

## Self-Check Questions

1.  What are the two main characteristics that define a problem suitable for dynamic programming?
2.  In the Fibonacci example, why is a naive recursive solution inefficient compared to dynamic programming?
3.  When you solve a subproblem in dynamic programming, what do you typically do with the result?

## Supports

- [[skills/programming/algorithms/algorithms/microskills/dynamic-programming-definitions|Dynamic Programming Definitions]]
