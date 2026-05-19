---
type: "medium"
title: "Longest Increasing Subsequence (LIS) DP Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/longest-increasing-subsequence-lis-dp-java-implementation|Longest Increasing Subsequence (LIS) DP Java Implementation]]"
---
# Longest Increasing Subsequence (LIS) DP Java Implementation

In this lesson, we'll learn how to find the Length of the Longest Increasing Subsequence (LIS) of a given sequence of numbers using dynamic programming in Java. This is a fundamental problem that demonstrates the power of DP in solving optimization problems.

## Understanding the Problem

An **increasing subsequence** is a sequence of elements from the original sequence that are in increasing order, but not necessarily contiguous. The **longest increasing subsequence** is the one with the greatest length.

For example, given the sequence `[10, 9, 2, 5, 3, 7, 101, 18]`, some increasing subsequences are `[2, 3, 7, 101]` and `[2, 5, 7, 18]`. The LIS here is `[2, 3, 7, 101]` (or `[2, 5, 7, 101]`, or `[2, 3, 7, 18]`, etc.), with a length of 4.

## Dynamic Programming Approach

The core idea behind the DP solution is to build up the solution for the LIS ending at each position in the array.

Let `dp[i]` be the length of the longest increasing subsequence ending at index `i` (including the element at `arr[i]`).

To calculate `dp[i]`, we look at all elements `arr[j]` before `arr[i]` (where `j < i`). If `arr[j] < arr[i]`, it means `arr[i]` can extend an increasing subsequence ending at `arr[j]`. We want to find the longest such subsequence, so we take the maximum `dp[j]` among all valid `j` and add 1 (for `arr[i]` itself).

The recurrence relation is:
$$
dp[i] = 1 + \max(dp[j]) \quad \text{for all } j < i \text{ such that } arr[j] < arr[i]
$$

If no such `j` exists (i.e., `arr[i]` is smaller than all preceding elements), then `dp[i]` is simply 1 (the subsequence consists only of `arr[i]`).

The final answer will be the maximum value in the entire `dp` array, as the LIS doesn't necessarily have to end at the last element of the input array.

## Java Implementation

Here's a Java implementation of the LIS problem using dynamic programming:

```java
import java.util.Arrays;

public class LongestIncreasingSubsequence {

    /**
     * Computes the length of the Longest Increasing Subsequence (LIS)
     * of a given array using dynamic programming.
     *
     * @param nums The input array of integers.
     * @return The length of the LIS.
     */
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        // dp[i] will store the length of the LIS ending at index i.
        int[] dp = new int[nums.length];

        // Initialize all LIS lengths to 1, as each element itself is an LIS of length 1.
        Arrays.fill(dp, 1);

        int maxLength = 1; // The overall maximum length found so far.

        // Iterate through the array starting from the second element.
        for (int i = 1; i < nums.length; i++) {
            // For each element nums[i], check all preceding elements nums[j].
            for (int j = 0; j < i; j++) {
                // If nums[j] is smaller than nums[i], it means nums[i] can potentially
                // extend the increasing subsequence ending at nums[j].
                if (nums[j] < nums[i]) {
                    // Update dp[i] if we find a longer LIS by appending nums[i] to
                    // the LIS ending at nums[j].
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            // Update the overall maximum length found so far.
            maxLength = Math.max(maxLength, dp[i]);
        }

        return maxLength;
    }

    public static void main(String[] args) {
        LongestIncreasingSubsequence lisFinder = new LongestIncreasingSubsequence();

        int[] arr1 = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Array: " + Arrays.toString(arr1));
        System.out.println("LIS Length: " + lisFinder.lengthOfLIS(arr1)); // Expected: 4

        int[] arr2 = {0, 1, 0, 3, 2, 3};
        System.out.println("\nArray: " + Arrays.toString(arr2));
        System.out.println("LIS Length: " + lisFinder.lengthOfLIS(arr2)); // Expected: 4

        int[] arr3 = {7, 7, 7, 7, 7, 7, 7};
        System.out.println("\nArray: " + Arrays.toString(arr3));
        System.out.println("LIS Length: " + lisFinder.lengthOfLIS(arr3)); // Expected: 1
    }
}
```

### How it Works

1.  **Initialization**: We create a `dp` array of the same size as the input `nums` array. Each `dp[i]` is initialized to 1, because any single element can be considered an increasing subsequence of length 1. `maxLength` is also initialized to 1.
2.  **Outer Loop (`i`)**: This loop iterates through each element of the `nums` array from the second element onwards (`i` from 1 to `n-1`). For each `nums[i]`, we want to find the maximum length of an increasing subsequence that *ends* with `nums[i]`.
3.  **Inner Loop (`j`)**: For the current element `nums[i]`, this loop checks all preceding elements `nums[j]` (where `j` ranges from 0 to `i-1`).
4.  **Condition `nums[j] < nums[i]`**: If `nums[j]` is strictly less than `nums[i]`, it means `nums[i]` can be appended to an increasing subsequence that ends at `nums[j]`.
5.  **Updating `dp[i]`**: We take the maximum of the current `dp[i]` and `dp[j] + 1`. `dp[j] + 1` represents the length of the increasing subsequence formed by taking the LIS ending at `j` and appending `nums[i]`.
6.  **Updating `maxLength`**: After considering all possible `j` for a given `i`, `dp[i]` will hold the length of the LIS ending at `i`. We then update `maxLength` to be the maximum of `maxLength` and `dp[i]`.
7.  **Return `maxLength`**: Finally, `maxLength` holds the length of the overall longest increasing subsequence in the array.

## Time and Space Complexity

*   **Time Complexity**: $$O(n^2)$$, where 'n' is the length of the input array. This is due to the nested loops.
*   **Space Complexity**: $$O(n)$$, for storing the `dp` array.

This DP approach provides a clear and systematic way to solve the LIS problem. While there are more optimized solutions (like using binary search with an $O(n \log n)$ time complexity), understanding this $O(n^2)$ DP solution is crucial for building a strong foundation in dynamic programming.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/longest-increasing-subsequence-lis-dp-java-implementation|Longest Increasing Subsequence (LIS) DP Java Implementation]]
