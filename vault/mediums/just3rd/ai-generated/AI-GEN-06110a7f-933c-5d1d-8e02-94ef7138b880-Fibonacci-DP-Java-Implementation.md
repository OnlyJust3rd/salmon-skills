---
type: "medium"
title: "Fibonacci DP Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/fibonacci-dp-java-implementation|fibonacci-dp-java-implementation]]"
---
# Fibonacci DP Java Implementation

This lesson focuses on applying dynamic programming (DP) to efficiently calculate Fibonacci numbers in Java. We'll explore how DP overcomes the inefficiencies of a naive recursive approach.

## The Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

Mathematically, it's defined as:
*   $F(0) = 0$
*   $F(1) = 1$
*   $F(n) = F(n-1) + F(n-2)$ for $n > 1$

## Naive Recursive Approach and Its Problem

A direct translation of the mathematical definition into a recursive function is straightforward:

```java
public class Fibonacci {
    public static int fibonacciRecursive(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + fibonacciRecursive(n));
    }
}
```

While this code works, it's highly inefficient. Consider calculating `fibonacciRecursive(5)`:

*   `fib(5)` calls `fib(4)` and `fib(3)`
*   `fib(4)` calls `fib(3)` and `fib(2)`
*   `fib(3)` calls `fib(2)` and `fib(1)`
*   ...and so on.

Notice how `fib(3)` is calculated multiple times, `fib(2)` even more, and so on. This leads to an exponential time complexity, approximately $$ O(2^n) $$, which becomes prohibitively slow for larger values of `n`.

## Dynamic Programming: The Solution

Dynamic programming solves this problem by storing the results of subproblems and reusing them when needed, avoiding redundant calculations. This is often achieved using two main approaches:

1.  **Memoization (Top-Down):** Start with the recursive structure but store results in a lookup table (like an array or map) before returning. If a result is already computed, return it directly.
2.  **Tabulation (Bottom-Up):** Build the solution iteratively from the base cases up to the desired result.

### 1. Memoization (Top-Down DP)

We'll use an array to store computed Fibonacci values. Initialize it with a sentinel value (e.g., -1) to indicate that a value hasn't been computed yet.

```java
import java.util.Arrays;

public class FibonacciMemoization {
    private static int[] memo;

    public static int fibonacciMemoized(int n) {
        if (n <= 1) {
            return n;
        }
        // If the value is already computed, return it
        if (memo[n] != -1) {
            return memo[n];
        }
        // Otherwise, compute and store it
        memo[n] = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
        return memo[n];
    }

    public static void main(String[] args) {
        int n = 10;
        memo = new int[n + 1];
        // Initialize memo array with -1
        Arrays.fill(memo, -1);

        System.out.println("Fibonacci(" + n + ") = " + fibonacciMemoized(n)); // Output: Fibonacci(10) = 55

        // Test with a larger number
        n = 30;
        memo = new int[n + 1];
        Arrays.fill(memo, -1);
        System.out.println("Fibonacci(" + n + ") = " + fibonacciMemoized(n)); // Much faster than naive recursion
    }
}
```

**How it works:**

*   We create a `memo` array of size `n+1`.
*   `Arrays.fill(memo, -1)` initializes all entries to `-1`.
*   When `fibonacciMemoized(n)` is called, it first checks if `memo[n]` is not `-1`. If it's not, it means we've already calculated this value, so we return it directly.
*   If `memo[n]` is `-1`, we perform the recursive calls, sum their results, store this sum in `memo[n]`, and then return it.

This approach has a time complexity of $$ O(n) $$ because each Fibonacci number from 0 to `n` is computed only once. The space complexity is also $$ O(n) $$ due to the `memo` array and the recursion stack.

### 2. Tabulation (Bottom-Up DP)

This method builds the solution from the smallest subproblems upwards.

```java
public class FibonacciTabulation {
    public static int fibonacciTabulated(int n) {
        if (n <= 1) {
            return n;
        }

        int[] dp = new int[n + 1];
        dp[0] = 0; // Base case F(0)
        dp[1] = 1; // Base case F(1)

        // Build the table from bottom up
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + fibonacciTabulated(n)); // Output: Fibonacci(10) = 55

        n = 30;
        System.out.println("Fibonacci(" + n + ") = " + fibonacciTabulated(n));
    }
}
```

**How it works:**

*   We create a `dp` array of size `n+1`.
*   We initialize `dp[0]` to `0` and `dp[1]` to `1`, corresponding to the base cases of the Fibonacci sequence.
*   We then iterate from `i = 2` up to `n`. In each iteration, `dp[i]` is calculated as the sum of the two preceding values in the `dp` array: `dp[i-1]` and `dp[i-2]`.
*   Finally, `dp[n]` holds the desired Fibonacci number.

This also achieves a time complexity of $$ O(n) $$. The space complexity is $$ O(n) $$ for the `dp` array.

### Space Optimization for Tabulation

We can further optimize the space complexity for the tabulation approach because to calculate `dp[i]`, we only need the values of `dp[i-1]` and `dp[i-2]`. We don't need the entire array.

```java
public class FibonacciSpaceOptimized {
    public static int fibonacciSpaceOptimized(int n) {
        if (n <= 1) {
            return n;
        }

        int prev2 = 0; // Corresponds to F(i-2)
        int prev1 = 1; // Corresponds to F(i-1)
        int current = 0; // Corresponds to F(i)

        for (int i = 2; i <= n; i++) {
            current = prev1 + prev2; // F(i) = F(i-1) + F(i-2)
            // Shift values for the next iteration
            prev2 = prev1;
            prev1 = current;
        }

        return current; // Or prev1, as they will be the same after the loop
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci(" + n + ") = " + fibonacciSpaceOptimized(n)); // Output: Fibonacci(10) = 55

        n = 30;
        System.out.println("Fibonacci(" + n + ") = " + fibonacciSpaceOptimized(n));
    }
}
```

**How it works:**

*   We maintain three variables: `prev2` (for $F(i-2)$), `prev1` (for $F(i-1)$), and `current` (for $F(i)$).
*   We initialize `prev2 = 0` and `prev1 = 1`.
*   In the loop, `current` is calculated. Then, `prev2` is updated to the old `prev1`, and `prev1` is updated to `current`. This effectively slides the window of the last two computed values.

This optimized version has a time complexity of $$ O(n) $$ and a space complexity of $$ O(1) $$, making it the most efficient for calculating Fibonacci numbers.

## Conclusion

By applying dynamic programming techniques, we transformed an inefficient exponential-time recursive solution into a linear-time solution for the Fibonacci sequence. Both memoization and tabulation are valid DP approaches, with tabulation offering a space-optimized alternative. This fundamental DP concept is a stepping stone to solving more complex problems.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/fibonacci-dp-java-implementation|Fibonacci DP Java Implementation]]
