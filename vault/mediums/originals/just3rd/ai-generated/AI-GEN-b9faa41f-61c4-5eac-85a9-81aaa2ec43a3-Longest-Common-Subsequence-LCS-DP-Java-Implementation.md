---
type: medium
title: Longest Common Subsequence (LCS) DP Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[longest-common-subsequence-lcs-dp-java-implementation|longest-common-subsequence-lcs-dp-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Longest Common Subsequence (LCS) DP Java Implementation

This lesson focuses on applying dynamic programming to find the Longest Common Subsequence (LCS) of two strings in Java. This is a practical application within the broader skill of implementing dynamic programming techniques.

## Understanding the LCS Problem

A subsequence of a string is a new string formed from the original string by deleting zero or more characters without changing the order of the remaining characters. The Longest Common Subsequence (LCS) of two strings is the longest subsequence that is common to both strings.

For example, consider the strings "AGGTAB" and "GXTXAYB".
The common subsequences include "GTAB", "GTAB", "GTAYB", etc. The longest one is "GTAB".

## Why Dynamic Programming?

A naive recursive approach to LCS would involve checking all possible subsequences, leading to exponential time complexity. Dynamic programming is ideal here because the problem exhibits two key properties:

1.  **Overlapping Subproblems:** The solution to the LCS of two strings depends on the solutions to LCS of their smaller substrings.
2.  **Optimal Substructure:** The optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems.

## The DP Approach: Tabulation

We'll use a tabulation (bottom-up) approach to solve LCS. This involves creating a 2D table (or array) to store the lengths of LCS for all possible prefixes of the two input strings.

Let `text1` and `text2` be our two input strings of lengths `m` and `n` respectively.
We will create a DP table `dp` of size `(m+1) x (n+1)`.
`dp[i][j]` will store the length of the LCS of `text1[0...i-1]` and `text2[0...j-1]`.

### Recurrence Relation

The core of the DP solution lies in defining how to fill this table:

*   **Base Case:**
    If either `i` is 0 or `j` is 0 (meaning one of the substrings is empty), the LCS length is 0.
    So, `dp[i][0] = 0` for all `i` and `dp[0][j] = 0` for all `j`.

*   **Recursive Step:**
    If the characters at the current indices match: `text1[i-1] == text2[j-1]`
    The LCS length increases by 1 from the LCS of the preceding substrings.
    `dp[i][j] = 1 + dp[i-1][j-1]`

    If the characters do not match: `text1[i-1] != text2[j-1]`
    The LCS length is the maximum of the LCS obtained by excluding the last character of `text1` OR excluding the last character of `text2`.
    `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])`

## Java Implementation

Here's the Java code to implement the LCS DP solution:

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();

        // dp[i][j] will store the length of LCS of text1[0..i-1] and text2[0..j-1]
        int[][] dp = new int[m + 1][n + 1];

        // Fill the dp table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // If characters match
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    // If characters do not match
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // The length of LCS for the entire strings is stored in dp[m][n]
        return dp[m][n];
    }
}
```

### How it Works

1.  **Initialization:** A `dp` table of size `(m+1) x (n+1)` is created. The extra row and column handle the base cases where one of the strings is empty. Java initializes integer arrays with zeros, so the base cases (`dp[i][0] = 0` and `dp[0][j] = 0`) are implicitly handled.
2.  **Iteration:** The code iterates through the `dp` table, starting from `dp[1][1]`.
3.  **Character Comparison:** For each cell `dp[i][j]`, it compares the characters `text1.charAt(i-1)` and `text2.charAt(j-1)`. Remember that `i` and `j` in the `dp` table correspond to lengths, so the actual string indices are `i-1` and `j-1`.
4.  **Update `dp[i][j]`:** Based on the character comparison, the recurrence relation is applied to calculate and store the LCS length for the current prefixes.
5.  **Result:** After filling the entire table, `dp[m][n]` holds the length of the LCS for the complete `text1` and `text2`.

## Example Walkthrough

Let `text1 = "abcde"` and `text2 = "ace"`.
`m = 5`, `n = 3`.
`dp` table will be `6x4`.

|       |   | a | c | e |
| :---- | :-: | :-: | :-: | :-: |
|       | 0 | 0 | 0 | 0 |
| **a** | 0 | **1** | 1 | 1 |
| **b** | 0 | 1 | 1 | 1 |
| **c** | 0 | 1 | **2** | 2 |
| **d** | 0 | 1 | 2 | 2 |
| **e** | 0 | 1 | 2 | **3** |

**Explanation of key cells:**

*   `dp[1][1]` (`a` vs `a`): Match. `1 + dp[0][0] = 1 + 0 = 1`.
*   `dp[3][2]` (`abc` vs `ac`): `c` matches `c`. `1 + dp[2][1]` (LCS of `ab` and `a`) = `1 + 1 = 2`.
*   `dp[5][3]` (`abcde` vs `ace`): `e` matches `e`. `1 + dp[4][2]` (LCS of `abcd` and `ac`) = `1 + 2 = 3`.

The final answer is `dp[5][3] = 3`.

## Time and Space Complexity

*   **Time Complexity:** $$O(m \times n)$$. We fill an `m x n` table, and each cell takes constant time to compute.
*   **Space Complexity:** $$O(m \times n)$$. This is due to the `dp` table used to store intermediate results.

It's possible to optimize space complexity to $$O(\min(m, n))$$ by observing that each row only depends on the previous row, but for learning purposes, the $$O(m \times n)$$ space approach is clearer.

By implementing this DP solution, you've successfully applied a dynamic programming technique to solve the Longest Common Subsequence problem in Java.

## Supports

- [[longest-common-subsequence-lcs-dp-java-implementation|Longest Common Subsequence (LCS) DP Java Implementation]]
