---
type: "medium"
title: "0/1 Knapsack DP Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/0-1-knapsack-dp-java-implementation|0-1-knapsack-dp-java-implementation]]"
---
# 0/1 Knapsack DP Java Implementation

This lesson focuses on applying dynamic programming to solve the 0/1 Knapsack problem in Java. You'll learn how to code this classic DP problem to maximize the value of items you can carry in a knapsack with a limited weight capacity.

## Problem Definition

The 0/1 Knapsack problem is defined as follows: Given a set of items, each with a weight and a value, determine the subset of items to include in a knapsack so that the total weight is less than or equal to a given limit and the total value is as large as possible. The "0/1" signifies that for each item, you can either take it entirely (1) or leave it entirely (0); you cannot take a fraction of an item.

## Dynamic Programming Approach

Dynamic programming is suitable here because the problem exhibits:

1.  **Optimal Substructure**: The optimal solution to the overall problem can be constructed from optimal solutions to its subproblems.
2.  **Overlapping Subproblems**: The same subproblems are encountered multiple times when solving the larger problem recursively.

We can build a solution iteratively by considering each item and each possible knapsack capacity.

### The DP State

Let `dp[i][w]` represent the maximum value that can be obtained by considering the first `i` items with a knapsack capacity of `w`.

### The Recurrence Relation

For each item `i` (with weight `wt[i]` and value `val[i]`) and for each capacity `w`:

*   **If `wt[i] > w` (the current item's weight exceeds the current capacity):**
    We cannot include this item. So, the maximum value is the same as the maximum value obtainable without this item:
    `dp[i][w] = dp[i-1][w]`

*   **If `wt[i] <= w` (the current item can potentially be included):**
    We have two choices:
    1.  **Do not include item `i`**: The value is `dp[i-1][w]`.
    2.  **Include item `i`**: The value is `val[i]` plus the maximum value obtainable from the remaining capacity `w - wt[i]` using the previous `i-1` items: `val[i] + dp[i-1][w - wt[i]]`.

    We choose the option that yields the maximum value:
    `dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w - wt[i]])`

### Base Cases

*   `dp[0][w] = 0` for all `w`: If there are no items, the maximum value is 0.
*   `dp[i][0] = 0` for all `i`: If the knapsack capacity is 0, the maximum value is 0.

## Java Implementation

We will use a 2D array to store the `dp` states. The dimensions will be `(n+1) x (W+1)`, where `n` is the number of items and `W` is the knapsack capacity.

```java
public class Knapsack01 {

    public static int solveKnapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        // dp[i][w] will store the maximum value with first i items and capacity w
        int[][] dp = new int[n + 1][capacity + 1];

        // Build table dp[][] in bottom up manner
        for (int i = 0; i <= n; i++) {
            for (int w = 0; w <= capacity; w++) {
                if (i == 0 || w == 0) {
                    // Base case: No items or no capacity means 0 value
                    dp[i][w] = 0;
                } else if (weights[i - 1] <= w) {
                    // If the current item's weight is less than or equal to current capacity 'w'
                    // We have two choices:
                    // 1. Include the item: values[i-1] + dp[i-1][w - weights[i-1]]
                    // 2. Exclude the item: dp[i-1][w]
                    // Take the maximum of these two choices
                    dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
                } else {
                    // If the current item's weight is greater than current capacity 'w'
                    // We cannot include this item. So, the value is same as excluding it.
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }

        // The final answer is in dp[n][capacity]
        return dp[n][capacity];
    }

    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int capacity = 50;
        int maxValue = solveKnapsack(weights, values, capacity);

        System.out.println("Maximum value that can be put in knapsack: " + maxValue); // Expected output: 220
    }
}
```

### How the Code Works

1.  **Initialization**: A 2D array `dp` of size `(n+1) x (capacity+1)` is created and initialized to zeros. The extra row and column handle the base cases where either no items are considered (`i=0`) or the capacity is zero (`w=0`).
2.  **Iteration**: The code iterates through each item (`i` from 1 to `n`) and each possible capacity (`w` from 1 to `capacity`).
3.  **Decision Logic**:
    *   If the weight of the current item (`weights[i-1]`) is greater than the current capacity `w`, we cannot include it. The value `dp[i][w]` is simply copied from the previous row `dp[i-1][w]`.
    *   If the weight of the current item is less than or equal to `w`, we have a choice:
        *   **Exclude**: The value is `dp[i-1][w]`.
        *   **Include**: The value is the current item's value (`values[i-1]`) plus the maximum value we could get from the remaining capacity (`w - weights[i-1]`) using previous items (`dp[i-1][w - weights[i-1]]`).
        We take the `Math.max()` of these two options.
4.  **Result**: After filling the entire `dp` table, `dp[n][capacity]` holds the maximum value that can be obtained using all `n` items within the given `capacity`.

## Space Optimization (Optional but good to know)

The 0/1 Knapsack problem can be optimized to use only 1D space because the computation of the current row only depends on the previous row.

```java
public class Knapsack01Optimized {

    public static int solveKnapsackOptimized(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        // dp[w] will store the maximum value for capacity w
        int[] dp = new int[capacity + 1];

        // Iterate through each item
        for (int i = 0; i < n; i++) {
            // Iterate through capacities in reverse order
            // This is crucial to avoid using the current item more than once for the same capacity
            for (int w = capacity; w >= weights[i]; w--) {
                dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
            }
        }
        return dp[capacity];
    }

    public static void main(String[] args) {
        int[] values = {60, 100, 120};
        int[] weights = {10, 20, 30};
        int capacity = 50;
        int maxValue = solveKnapsackOptimized(weights, values, capacity);

        System.out.println("Maximum value that can be put in knapsack (Optimized): " + maxValue); // Expected output: 220
    }
}
```

### Explanation of Space Optimization

*   We use a single 1D array `dp` of size `capacity + 1`. `dp[w]` stores the maximum value for a knapsack of capacity `w`.
*   We iterate through each item. For each item, we iterate through the capacities from `capacity` *down to* the item's weight.
*   Iterating in reverse ensures that when we calculate `dp[w]`, we are using the values from the *previous iteration* (i.e., without considering the current item yet for that specific capacity `w`). If we iterated forward, `dp[w - weights[i]]` might have already been updated using the current item, leading to an incorrect result (treating it like an unbounded knapsack).

## Time and Space Complexity

*   **2D DP:**
    *   Time Complexity: $$O(n \times W)$$, where `n` is the number of items and `W` is the capacity.
    *   Space Complexity: $$O(n \times W)$$ for the DP table.
*   **1D DP (Space Optimized):**
    *   Time Complexity: $$O(n \times W)$$
    *   Space Complexity: $$O(W)$$ for the 1D DP array.

The space-optimized version is generally preferred if memory is a concern, as `W` can be significantly smaller than `n * W`.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/0-1-knapsack-dp-java-implementation|0/1 Knapsack DP Java Implementation]]
