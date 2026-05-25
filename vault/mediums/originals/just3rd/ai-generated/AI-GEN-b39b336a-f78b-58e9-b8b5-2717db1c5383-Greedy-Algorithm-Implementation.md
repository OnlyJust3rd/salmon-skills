---
type: "medium"
title: "Implementing Greedy Algorithms in Java"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithms/microskills/greedy-algorithm-implementation|greedy-algorithm-implementation]]"
learning-time-in-minutes: 3
---
# Implementing Greedy Algorithms in Java

This lesson focuses on applying greedy algorithm techniques to solve problems efficiently using Java. We'll explore how a greedy approach makes locally optimal choices at each step, hoping to find a globally optimal solution.

## What is a Greedy Algorithm?

A greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. It's like choosing the shortest path at each intersection without looking too far ahead. While not always guaranteed to find the absolute best solution for every problem, it's often a good heuristic for many optimization problems.

Key characteristics:
*   **Local Optimality:** Makes the best choice at the current moment.
*   **Irrevocable Choices:** Once a choice is made, it's not undone.
*   **Efficiency:** Often simpler and faster than other algorithmic approaches.

## Example: Making Change

A classic greedy problem is making change with the fewest number of coins. Imagine you need to give back $37 cents using US currency (quarters: 25, dimes: 10, nickels: 5, pennies: 1).

The greedy strategy here is to always use the largest denomination coin that is less than or equal to the remaining amount.

1.  **Amount: 37 cents**
    *   Largest coin <= 37 is a quarter (25 cents).
    *   Take one quarter.
    *   Remaining amount: 37 - 25 = 12 cents.
2.  **Amount: 12 cents**
    *   Largest coin <= 12 is a dime (10 cents).
    *   Take one dime.
    *   Remaining amount: 12 - 10 = 2 cents.
3.  **Amount: 2 cents**
    *   Largest coin <= 2 is a penny (1 cent).
    *   Take one penny.
    *   Remaining amount: 2 - 1 = 1 cent.
4.  **Amount: 1 cent**
    *   Largest coin <= 1 is a penny (1 cent).
    *   Take one penny.
    *   Remaining amount: 1 - 1 = 0 cents.

Solution: 1 quarter, 1 dime, 2 pennies. This is the optimal solution.

### Java Implementation

Here's how you might implement this in Java:

```java
import java.util.Arrays;
import java.util.Comparator;

public class GreedyChange {

    public static void makeChange(int amount, int[] denominations) {
        // Sort denominations in descending order for greedy approach
        Integer[] sortedDenominations = Arrays.stream(denominations)
                                          .boxed()
                                          .sorted(Comparator.reverseOrder())
                                          .toArray(Integer[]::new);

        System.out.println("Making change for: " + amount + " cents");

        for (int coin : sortedDenominations) {
            while (amount >= coin) {
                System.out.println("Take coin: " + coin + " cents");
                amount -= coin;
            }
        }

        if (amount > 0) {
            System.out.println("Could not make exact change. Remaining: " + amount + " cents");
        }
    }

    public static void main(String[] args) {
        int[] usDenominations = {1, 5, 10, 25}; // Pennies, Nickels, Dimes, Quarters
        makeChange(63, usDenominations);
        System.out.println("---");
        makeChange(18, usDenominations);
    }
}
```

This code sorts the available coin denominations from largest to smallest. Then, it iteratively takes as many of the largest possible coin as it can before moving to the next smaller denomination.

## Practice Task

Implement a greedy algorithm to solve the **Activity Selection Problem**. Given a set of activities, each with a start time and finish time, select the maximum number of non-overlapping activities.

*   **Input:** A list of activities, where each activity is represented by a start time and finish time (e.g., `[start1, finish1], [start2, finish2]`).
*   **Greedy Strategy:** Sort activities by their finish times. Select the first activity. Then, iteratively select the next activity whose start time is greater than or equal to the finish time of the previously selected activity.

Write a Java method `selectActivities(List<Activity> activities)` that returns a list of selected activities.

## Self-Check Questions

1.  In the making change example, if the denominations were `{1, 4, 6}` and the amount was `8`, what would the greedy algorithm produce? Is this the optimal solution?
2.  When is a greedy algorithm *not* guaranteed to produce the optimal solution?
3.  What is the primary advantage of using a greedy algorithm compared to other optimization techniques like dynamic programming?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/greedy-algorithm-implementation|Greedy Algorithm Implementation]]
