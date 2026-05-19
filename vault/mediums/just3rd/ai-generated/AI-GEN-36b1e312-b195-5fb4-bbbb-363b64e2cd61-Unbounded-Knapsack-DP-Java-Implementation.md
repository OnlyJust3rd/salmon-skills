---
type: "medium"
title: "Unbounded Knapsack DP in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/unbounded-knapsack-dp-java-implementation|Unbounded Knapsack DP Java Implementation]]"
---
# Unbounded Knapsack DP in Java

The Unbounded Knapsack problem is a classic dynamic programming challenge. Unlike the 0/1 Knapsack where each item can be taken at most once, in the Unbounded Knapsack, you can take an **unlimited number of copies** of each item. The goal is to maximize the total value of items that can fit into a knapsack with a given capacity.

This lesson will guide you through implementing the Unbounded Knapsack problem using dynamic programming in Java.

## Core Idea

The dynamic programming approach involves building up a solution from smaller subproblems. We'll use an array, let's call it `dp`, where `dp[i]` represents the maximum value we can achieve with a knapsack of capacity `i`.

We iterate through all possible knapsack capacities from 0 up to the maximum capacity. For each capacity `j`, we consider each item. If an item's weight is less than or equal to the current capacity `j`, we have a choice:

1.  **Don't include the current item:** The maximum value remains whatever we found for capacity `j` without considering this item.
2.  **Include the current item:** If we include the current item, the remaining capacity is `j - item_weight`. The total value would be `item_value + dp[j - item_weight]`. Since we can take unlimited copies, `dp[j - item_weight]` already represents the best we can do with that remaining capacity, and we can add another copy of the current item.

We choose the option that yields the maximum value.

## Algorithm Steps

1.  **Initialization:** Create a DP array `dp` of size `capacity + 1` and initialize all its elements to 0. `dp[i]` will store the maximum value for a knapsack of capacity `i`.
2.  **Iteration:**
    *   Iterate through each possible knapsack capacity `j` from 1 to `capacity`.
    *   For each capacity `j`, iterate through all available items.
    *   If the current item's weight (`wt[i]`) is less than or equal to the current capacity `j`:
        *   Calculate the potential new value: `values[i] + dp[j - wt[i]]`.
        *   Update `dp[j]` to be the maximum of its current value and the potential new value: `dp[j] = Math.max(dp[j], values[i] + dp[j - wt[i]])`.
3.  **Result:** The maximum value achievable for the given capacity is stored in `dp[capacity]`.

## Java Implementation

Let's look at a Java code example.

```java
import java.util.Arrays;

public class UnboundedKnapsack {

    /**
     * Solves the Unbounded Knapsack problem using dynamic programming.
     *
     * @param capacity The maximum capacity of the knapsack.
     * @param values   An array of values for each item.
     * @param weights  An array of weights for each item.
     * @return The maximum value that can be obtained.
     */
    public static int solveUnboundedKnapsack(int capacity, int[] values, int[] weights) {
        // dp[i] will store the maximum value for a knapsack of capacity i
        int[] dp = new int[capacity + 1];

        // Initialize dp array with 0s
        Arrays.fill(dp, 0);

        // Iterate through all possible capacities
        for (int j = 1; j <= capacity; j++) {
            // Iterate through all items
            for (int i = 0; i < values.length; i++) {
                // If the current item's weight is less than or equal to the current capacity
                if (weights[i] <= j) {
                    // Update dp[j] with the maximum of its current value
                    // or the value obtained by including the current item
                    // values[i] + dp[j - weights[i]] represents:
                    // value of the current item + max value achievable for the remaining capacity
                    dp[j] = Math.max(dp[j], values[i] + dp[j - weights[i]]);
                }
            }
        }

        // The result is the maximum value for the full capacity
        return dp[capacity];
    }

    public static void main(String[] args) {
        int capacity = 10;
        int[] values = {10, 40, 50, 70};
        int[] weights = {1, 3, 4, 5};

        int maxValue = solveUnboundedKnapsack(capacity, values, weights);
        System.out.println("Maximum value for capacity " + capacity + ": " + maxValue); // Expected: 110 (two items of value 40 and weight 3, one item of value 10 and weight 1) or (one item of value 70 and weight 5, one item of value 40 and weight 3)

        capacity = 8;
        values = new int[]{1, 4, 5, 7};
        weights = new int[]{1, 3, 4, 5};
        maxValue = solveUnboundedKnapsack(capacity, values, weights);
        System.out.println("Maximum value for capacity " + capacity + ": " + maxValue); // Expected: 11 (one item of value 4, weight 3 and one item of value 7, weight 5)
    }
}
```

### How it Works

Let's trace an example: `capacity = 10`, `values = {10, 40, 50, 70}`, `weights = {1, 3, 4, 5}`.

`dp` array of size 11, initialized to `[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`

**j = 1:**
*   Item 0 (v=10, w=1): `weights[0] <= 1`. `dp[1] = max(dp[1], values[0] + dp[1 - weights[0]]) = max(0, 10 + dp[0]) = max(0, 10 + 0) = 10`.
`dp` becomes `[0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]`

**j = 2:**
*   Item 0 (v=10, w=1): `weights[0] <= 2`. `dp[2] = max(dp[2], values[0] + dp[2 - weights[0]]) = max(0, 10 + dp[1]) = max(0, 10 + 10) = 20`.
`dp` becomes `[0, 10, 20, 0, 0, 0, 0, 0, 0, 0, 0]`

**j = 3:**
*   Item 0 (v=10, w=1): `weights[0] <= 3`. `dp[3] = max(dp[3], values[0] + dp[3 - weights[0]]) = max(0, 10 + dp[2]) = max(0, 10 + 20) = 30`.
*   Item 1 (v=40, w=3): `weights[1] <= 3`. `dp[3] = max(dp[3], values[1] + dp[3 - weights[1]]) = max(30, 40 + dp[0]) = max(30, 40 + 0) = 40`.
`dp` becomes `[0, 10, 20, 40, 0, 0, 0, 0, 0, 0, 0]`

This process continues. Notice how `dp[j - weights[i]]` allows us to consider using the same item multiple times. For example, when calculating `dp[2]`, we used `dp[1]` and added item 0 again, effectively saying we can take two items of value 10 and weight 1.

## Key Differences from 0/1 Knapsack

The most crucial difference in implementation lies in the order of loops and how the DP state is updated.

*   **0/1 Knapsack:** Typically iterates through items first, then capacities. The DP update often involves `dp[j] = Math.max(dp[j], values[i] + dp[j - weights[i]])` where `dp[j - weights[i]]` refers to the state *before* considering the current item `i` for capacity `j`. This is usually achieved by iterating capacities in reverse order or using a 2D DP array.
*   **Unbounded Knapsack:** Iterates through capacities first, then items. The DP update `dp[j] = Math.max(dp[j], values[i] + dp[j - weights[i]])` uses `dp[j - weights[i]]` which has already been computed and *can* include item `i`. This naturally allows for multiple uses of the same item.

## Conclusion

You've learned how to implement the Unbounded Knapsack problem using dynamic programming in Java. By building up solutions for increasing knapsack capacities and considering the option of including multiple copies of each item, you can efficiently find the maximum possible value. This technique is a fundamental building block for more complex DP problems.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/unbounded-knapsack-dp-java-implementation|Unbounded Knapsack DP Java Implementation]]
