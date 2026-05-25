---
type: "medium"
title: "Greedy Algorithms: Making the Best Local Choice"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/greedy-algorithm-definitions|greedy-algorithm-definitions]]"
learning-time-in-minutes: 3
---
# Greedy Algorithms: Making the Best Local Choice

This lesson introduces **Greedy Algorithms**, a fundamental technique used in computer science to solve problems by making the locally optimal choice at each stage with the hope of finding a global optimum. This approach is part of a larger set of **Algorithm Techniques** for finding efficient solutions.

## What is a Greedy Algorithm?

A greedy algorithm builds up a solution piece by piece, always choosing the option that looks best at the current moment. It doesn't look ahead to see if a locally optimal choice will lead to a globally optimal solution. Think of it like choosing the shortest path at each intersection on a map, hoping to reach your destination fastest.

Key characteristics of greedy algorithms:

*   **Local Optimality:** At each step, the algorithm makes a choice that is best at that particular moment, without considering future consequences.
*   **No Backtracking:** Once a choice is made, it's final. The algorithm doesn't go back and reconsider previous decisions.
*   **Simplicity:** They are often easier to design and implement compared to other algorithmic paradigms.
*   **Efficiency:** Many greedy algorithms are efficient, often running in polynomial time.

## Practical Scenario: Making Change

Imagine you're a cashier and need to give a customer $0.67 in change using the fewest possible coins.

Let's say you have an unlimited supply of the following US coins:

*   Quarters ($0.25$)
*   Dimes ($0.10$)
*   Nickels ($0.05$)
*   Pennies ($0.01$)

A greedy approach would be:

1.  **Start with the largest coin value less than or equal to the remaining amount.**
2.  **Take as many of that coin as possible.**
3.  **Subtract the value of the coins taken from the remaining amount.**
4.  **Repeat with the next largest coin value until the amount is zero.**

Applying this to $0.67$:

1.  **Quarters ($0.25$):** $0.67 \ge 0.25$. We can take two quarters ($0.50$).
    *   Remaining amount: $0.67 - 0.50 = 0.17$.
2.  **Dimes ($0.10$):** $0.17 \ge 0.10$. We can take one dime ($0.10$).
    *   Remaining amount: $0.17 - 0.10 = 0.07$.
3.  **Nickels ($0.05$):** $0.07 \ge 0.05$. We can take one nickel ($0.05$).
    *   Remaining amount: $0.07 - 0.05 = 0.02$.
4.  **Pennies ($0.01$):** $0.02 \ge 0.01$. We can take two pennies ($0.02$).
    *   Remaining amount: $0.02 - 0.02 = 0.00$.

The greedy solution is 2 Quarters, 1 Dime, 1 Nickel, and 2 Pennies. This approach works for standard US currency because the coin denominations are designed in a way that a greedy strategy yields the optimal solution. However, this isn't true for all sets of coin denominations.

## Practice Task

Consider a scenario where you need to schedule meetings in a single room. You have a list of meetings, each with a start time and an end time. You want to schedule as many meetings as possible without any overlaps.

How would you use a greedy approach to select the meetings?

## Self-Check Questions

1.  What is the core idea behind a greedy algorithm?
2.  In the change-making example, what was the "locally optimal" choice at each step?
3.  Does a greedy algorithm always guarantee the best possible solution? Why or why not?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/greedy-algorithm-definitions|Greedy Algorithm Definitions]]
