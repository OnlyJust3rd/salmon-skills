---
type: "medium"
title: "Greedy Algorithm Use Cases"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithms/microskills/greedy-algorithm-use-cases|Greedy Algorithm Use Cases]]"
---
# Greedy Algorithm Use Cases

This lesson explores when and why to use greedy algorithms, a common technique for solving optimization problems. Greedy algorithms make the locally optimal choice at each step with the hope that this will lead to a globally optimal solution. While not always optimal, they are often efficient and effective for certain types of problems.

## What are Greedy Algorithms?

Greedy algorithms work by making the best possible choice at the current moment, without considering future consequences. They aim to build up a solution piece by piece, always choosing the option that appears best at that stage.

## When to Use Greedy Algorithms?

Greedy algorithms are particularly well-suited for problems that exhibit two key properties:

1.  **Optimal Substructure:** The optimal solution to the overall problem contains optimal solutions to its subproblems.
2.  **Greedy Choice Property:** A globally optimal solution can be arrived at by making a sequence of locally optimal (greedy) choices. If you can make the best choice now and be sure it doesn't prevent you from reaching the overall best solution, a greedy approach is likely applicable.

## Practical Example: The Activity Selection Problem

Imagine you have a list of activities, each with a start time and finish time. You want to select the maximum number of non-overlapping activities that can be performed by a single person.

**Problem:** Given activities with start and finish times, select the maximum number of mutually compatible activities.

**Greedy Approach:**

1.  Sort the activities by their finish times in ascending order.
2.  Select the first activity (the one that finishes earliest).
3.  Iterate through the remaining sorted activities. If an activity's start time is greater than or equal to the finish time of the previously selected activity, select this new activity.

**Scenario:**

Let's say we have the following activities (start\_time, finish\_time):

*   Activity A: (1, 4)
*   Activity B: (3, 5)
*   Activity C: (0, 6)
*   Activity D: (5, 7)
*   Activity E: (3, 8)
*   Activity F: (5, 9)
*   Activity G: (6, 10)
*   Activity H: (8, 11)
*   Activity I: (8, 12)
*   Activity J: (2, 13)
*   Activity K: (12, 14)

**Applying the Greedy Strategy:**

1.  **Sort by finish time:**
    *   A: (1, 4)
    *   B: (3, 5)
    *   C: (0, 6)
    *   D: (5, 7)
    *   E: (3, 8)
    *   F: (5, 9)
    *   G: (6, 10)
    *   H: (8, 11)
    *   I: (8, 12)
    *   J: (2, 13)
    *   K: (12, 14)

2.  **Select first:** Activity A (1, 4) is selected. Current finish time = 4.

3.  **Iterate:**
    *   Activity B (3, 5): Starts at 3, which is before 4. Skip.
    *   Activity C (0, 6): Starts at 0, which is before 4. Skip.
    *   Activity D (5, 7): Starts at 5, which is >= 4. Select D. Current finish time = 7.
    *   Activity E (3, 8): Starts at 3, which is before 7. Skip.
    *   Activity F (5, 9): Starts at 5, which is before 7. Skip.
    *   Activity G (6, 10): Starts at 6, which is before 7. Skip.
    *   Activity H (8, 11): Starts at 8, which is >= 7. Select H. Current finish time = 11.
    *   Activity I (8, 12): Starts at 8, which is before 11. Skip.
    *   Activity J (2, 13): Starts at 2, which is before 11. Skip.
    *   Activity K (12, 14): Starts at 12, which is >= 11. Select K. Current finish time = 14.

**Selected Activities:** A, D, H, K. This is the maximum number of non-overlapping activities.

## Other Common Greedy Use Cases:

*   **Fractional Knapsack Problem:** Maximizing value by taking fractions of items.
*   **Minimum Spanning Tree (Prim's and Kruskal's Algorithms):** Finding the cheapest way to connect all nodes in a graph.
*   **Dijkstra's Algorithm:** Finding the shortest path in a graph with non-negative edge weights.
*   **Huffman Coding:** Creating optimal prefix codes for data compression.

## Practice Task:

Consider the problem of making change for a given amount using the fewest number of coins, given a set of coin denominations. If you have coin denominations {1, 5, 10, 25} (cents) and need to make change for 67 cents, how would you use a greedy approach to find the minimum number of coins?

## Self-Check Questions:

1.  What are the two key properties that make a problem suitable for a greedy algorithm?
2.  In the Activity Selection Problem, why do we sort activities by *finish* time instead of *start* time?
3.  Can you think of a scenario where a greedy approach for making change might *not* give the optimal solution (i.e., the fewest coins)? (Hint: Consider different coin denominations.)

## Supports

- [[skills/programming/algorithms/algorithms/microskills/greedy-algorithm-use-cases|Greedy Algorithm Use Cases]]
