---
type: medium
title: Coin Change Problem DP Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[coin-change-problem-dp-java-implementation|coin-change-problem-dp-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Coin Change Problem DP Java Implementation

This lesson focuses on applying dynamic programming to solve the Coin Change problem in Java. We'll learn how to efficiently find the minimum number of coins needed to make a given amount.

## The Coin Change Problem

The Coin Change problem asks: given a set of coin denominations and a target amount, what is the minimum number of coins required to make that amount? If it's impossible to make the amount, we should indicate that.

**Example:**
Given coins: `[1, 2, 5]` and target amount: `11`.
The minimum number of coins is 3 (two 5s and one 1).

## Why Dynamic Programming?

A naive recursive approach to this problem would involve exploring many redundant subproblems. For instance, calculating the minimum coins for an amount of 5 might be computed multiple times when solving for 11. Dynamic programming excels here by storing the results of subproblems and reusing them, leading to a much more efficient solution.

## Dynamic Programming Approach

We'll use a bottom-up dynamic programming approach. The core idea is to build up the solution for smaller amounts to eventually solve for the target amount.

1.  **Define the State:**
    Let `dp[i]` be the minimum number of coins required to make an amount `i`.

2.  **Base Case:**
    `dp[0] = 0` (Zero coins are needed to make an amount of 0).

3.  **Recurrence Relation:**
    For each amount `i` from 1 to the target amount, we iterate through each coin denomination `c` available. If `i - c` is non-negative (meaning we can use coin `c` without going below zero amount), we consider the possibility of using coin `c`.
    The minimum coins for amount `i` would be the minimum of `dp[i - c] + 1` (representing using one coin `c` plus the minimum coins needed for the remaining amount `i - c`) across all applicable coins `c`.

    $$
    dp[i] = \min(dp[i - c] + 1) \quad \text{for all } c \in \text{coins such that } i - c \ge 0
    $$

4.  **Initialization:**
    We initialize the `dp` array. For amounts other than 0, we can initialize them to a value representing infinity (a value larger than any possible coin count), signifying that these amounts are not yet achievable. A common practice is to use `amount + 1` as this "infinity" value, since the maximum possible coins to make `amount` would be `amount` itself (if we only had a coin of denomination 1).

## Java Implementation

Let's translate this into Java code.

```java
import java.util.Arrays;

class CoinChange {

    public int coinChange(int[] coins, int amount) {
        // dp[i] will store the minimum number of coins to make amount i
        int[] dp = new int[amount + 1];

        // Initialize dp array with a value indicating infinity.
        // amount + 1 is a safe "infinity" because the max coins needed
        // would be 'amount' if all coins were 1.
        Arrays.fill(dp, amount + 1);

        // Base case: 0 coins are needed to make amount 0
        dp[0] = 0;

        // Iterate through all amounts from 1 to the target amount
        for (int i = 1; i <= amount; i++) {
            // For each amount, iterate through all available coin denominations
            for (int coin : coins) {
                // If the current coin can be used to form amount i
                if (i - coin >= 0) {
                    // Update dp[i] if using this coin results in fewer coins
                    // dp[i - coin] is the min coins for the remaining amount
                    // + 1 is for the current coin we are considering
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        // If dp[amount] is still amount + 1, it means the amount cannot be formed
        // with the given coins. Otherwise, it holds the minimum number of coins.
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        CoinChange cc = new CoinChange();

        int[] coins1 = {1, 2, 5};
        int amount1 = 11;
        System.out.println("Min coins for " + amount1 + " with " + Arrays.toString(coins1) + ": " + cc.coinChange(coins1, amount1)); // Expected: 3

        int[] coins2 = {2};
        int amount2 = 3;
        System.out.println("Min coins for " + amount2 + " with " + Arrays.toString(coins2) + ": " + cc.coinChange(coins2, amount2)); // Expected: -1

        int[] coins3 = {1};
        int amount3 = 0;
        System.out.println("Min coins for " + amount3 + " with " + Arrays.toString(coins3) + ": " + cc.coinChange(coins3, amount3)); // Expected: 0

        int[] coins4 = {186,419,83,408};
        int amount4 = 6249;
        System.out.println("Min coins for " + amount4 + " with " + Arrays.toString(coins4) + ": " + cc.coinChange(coins4, amount4)); // Expected: 20
    }
}
```

### How the Code Works:

1.  **`dp` Array Initialization:** We create an array `dp` of size `amount + 1`. Each index `i` in this array will store the minimum coins needed to make the value `i`. We fill it with `amount + 1` to signify that initially, no amounts (except 0) are reachable.
2.  **Base Case `dp[0]`:** `dp[0]` is set to `0` because no coins are required to make an amount of zero.
3.  **Outer Loop (`for i`):** This loop iterates through every possible amount from `1` up to the target `amount`. For each `i`, we want to find the minimum coins to make it.
4.  **Inner Loop (`for coin`):** For the current amount `i`, we iterate through each `coin` denomination available.
5.  **Condition `if (i - coin >= 0)`:** This check ensures that we can actually use the current `coin`. If `i - coin` is negative, it means the coin's value is greater than the current amount `i`, so we can't use it.
6.  **Update `dp[i]`:** If the coin can be used, we compare the current value of `dp[i]` with `dp[i - coin] + 1`.
    *   `dp[i - coin]` represents the minimum coins needed to make the *remaining* amount after using the current `coin`.
    *   `+ 1` accounts for the current `coin` itself.
    *   We take the `Math.min` to ensure `dp[i]` always stores the absolute minimum number of coins found so far for amount `i`.
7.  **Return Value:** After the loops complete, `dp[amount]` will hold the minimum number of coins required for the target `amount`. If `dp[amount]` is still its initial "infinity" value (`amount + 1`), it means the target `amount` cannot be achieved using the given coins, so we return `-1`. Otherwise, we return `dp[amount]`.

## Time and Space Complexity

*   **Time Complexity:** $$O(S \times N)$$, where $S$ is the target amount and $N$ is the number of coin denominations. This is because we have nested loops: the outer loop runs $S$ times, and the inner loop runs $N$ times.
*   **Space Complexity:** $$O(S)$$, for the `dp` array which stores results for amounts up to $S$.

This dynamic programming solution provides an efficient way to solve the Coin Change problem by systematically building up solutions from smaller subproblems.

## Supports

- [[coin-change-problem-dp-java-implementation|Coin Change Problem DP Java Implementation]]
