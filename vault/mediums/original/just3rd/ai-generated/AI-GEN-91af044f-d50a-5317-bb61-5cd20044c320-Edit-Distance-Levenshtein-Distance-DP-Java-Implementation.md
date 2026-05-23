---
type: medium
title: Edit Distance (Levenshtein Distance) DP Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[edit-distance-levenshtein-distance-dp-java-implementation|edit-distance-levenshtein-distance-dp-java-implementation]]"
learning-time-in-minutes: 4
---
# Edit Distance (Levenshtein Distance) DP Java Implementation

This lesson focuses on implementing the Edit Distance (Levenshtein Distance) algorithm using dynamic programming in Java. This is a practical application of dynamic programming, helping you to *apply* this technique to solve real-world problems.

## Understanding Edit Distance

Edit Distance, specifically Levenshtein Distance, measures the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into another.

For example, to transform "kitten" to "sitting":

1.  **k**itten -> **s**itten (substitution of 's' for 'k')
2.  sitt**e**n -> sitt**i**n (substitution of 'i' for 'e')
3.  sittin -> sittin**g** (insertion of 'g')

The edit distance is 3.

### Key Operations:

*   **Insertion:** Add a character.
*   **Deletion:** Remove a character.
*   **Substitution:** Replace one character with another.

## Dynamic Programming Approach

Dynamic programming is ideal for Edit Distance because the problem exhibits:

1.  **Optimal Substructure:** The optimal solution for transforming string `A` to string `B` can be built from optimal solutions of transforming substrings of `A` to substrings of `B`.
2.  **Overlapping Subproblems:** The same subproblems (e.g., edit distance between prefixes of the strings) are encountered multiple times.

We'll use a 2D array (or matrix) to store the results of these subproblems. Let `dp[i][j]` represent the edit distance between the first `i` characters of string `s1` and the first `j` characters of string `s2`.

### The Recurrence Relation

Consider `dp[i][j]`, the edit distance between `s1[0...i-1]` and `s2[0...j-1]`.

*   **Base Cases:**
    *   `dp[0][0] = 0`: The distance between two empty strings is 0.
    *   `dp[i][0] = i`: To transform an empty string to a string of length `i`, we need `i` insertions.
    *   `dp[0][j] = j`: To transform a string of length `j` to an empty string, we need `j` deletions.

*   **Recursive Step:**
    *   If `s1[i-1] == s2[j-1]` (the last characters match): No operation is needed for these characters. The edit distance is the same as the edit distance between the strings excluding these characters.
        $$ dp[i][j] = dp[i-1][j-1] $$
    *   If `s1[i-1] != s2[j-1]` (the last characters don't match): We have three choices, and we take the minimum:
        1.  **Insert:** Insert `s2[j-1]` into `s1`. The cost is 1 (for insertion) plus the edit distance of `s1[0...i-1]` and `s2[0...j-2]`.
            $$ Cost = 1 + dp[i][j-1] $$
        2.  **Delete:** Delete `s1[i-1]` from `s1`. The cost is 1 (for deletion) plus the edit distance of `s1[0...i-2]` and `s2[0...j-1]`.
            $$ Cost = 1 + dp[i-1][j] $$
        3.  **Substitute:** Substitute `s1[i-1]` with `s2[j-1]`. The cost is 1 (for substitution) plus the edit distance of `s1[0...i-2]` and `s2[0...j-2]`.
            $$ Cost = 1 + dp[i-1][j-1] $$
        Therefore, if characters don't match:
        $$ dp[i][j] = 1 + \min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) $$

## Java Implementation

Let's implement this using a 2D array in Java.

```java
public class EditDistance {

    public static int calculateEditDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();

        // dp[i][j] will store the edit distance between word1[0...i-1] and word2[0...j-1]
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        // If word2 is empty, we need to delete all characters from word1
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        // If word1 is empty, we need to insert all characters of word2
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }

        // Fill the dp table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // If characters match, no operation needed for this pair
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    // If characters don't match, consider insert, delete, or substitute
                    int insertCost = dp[i][j - 1];     // Insert into word1 to match word2's char
                    int deleteCost = dp[i - 1][j];     // Delete from word1 to match word2's char
                    int substituteCost = dp[i - 1][j - 1]; // Substitute char in word1

                    dp[i][j] = 1 + Math.min(insertCost, Math.min(deleteCost, substituteCost));
                }
            }
        }

        // The final answer is at dp[m][n]
        return dp[m][n];
    }

    public static void main(String[] args) {
        String word1 = "kitten";
        String word2 = "sitting";
        System.out.println("Edit Distance between '" + word1 + "' and '" + word2 + "': " + calculateEditDistance(word1, word2)); // Expected: 3

        String word3 = "intention";
        String word4 = "execution";
        System.out.println("Edit Distance between '" + word3 + "' and '" + word4 + "': " + calculateEditDistance(word3, word4)); // Expected: 5

        String word5 = "sunday";
        String word6 = "saturday";
        System.out.println("Edit Distance between '" + word5 + "' and '" + word6 + "': " + calculateEditDistance(word5, word6)); // Expected: 3
    }
}
```

### How the Code Works:

1.  **Initialization:**
    *   We create a `dp` table of size `(m+1) x (n+1)`. The extra row and column handle the empty string cases.
    *   The first row (`dp[0][j]`) is initialized with `j`, representing the cost of inserting `j` characters to get `word2` from an empty string.
    *   The first column (`dp[i][0]`) is initialized with `i`, representing the cost of deleting `i` characters to get an empty string from `word1`.

2.  **Iteration:**
    *   We iterate through the `dp` table starting from `dp[1][1]`.
    *   For each cell `dp[i][j]`, we compare `word1.charAt(i - 1)` and `word2.charAt(j - 1)`. Remember that string indices are 0-based, while our `dp` table indices `i` and `j` represent lengths.
    *   If the characters match, `dp[i][j]` inherits the value from the top-left diagonal cell `dp[i-1][j-1]`.
    *   If they don't match, `dp[i][j]` is calculated as 1 (for the operation) plus the minimum of the three possible previous states:
        *   `dp[i][j-1]` (insert)
        *   `dp[i-1][j]` (delete)
        *   `dp[i-1][j-1]` (substitute)

3.  **Result:**
    *   The final edit distance between the entire `word1` and `word2` is found at `dp[m][n]`.

## Time and Space Complexity

*   **Time Complexity:** $$ O(m \times n) $$, where `m` is the length of `word1` and `n` is the length of `word2`. This is because we fill an `m x n` DP table.
*   **Space Complexity:** $$ O(m \times n) $$ for the DP table. This can be optimized to $$ O(\min(m, n)) $$ space by observing that each row's computation only depends on the previous row. However, the standard 2D array approach is often more intuitive for understanding.

This implementation provides a solid foundation for understanding and applying the Edit Distance algorithm using dynamic programming in Java.

## Supports

- [[edit-distance-levenshtein-distance-dp-java-implementation|Edit Distance (Levenshtein Distance) DP Java Implementation]]
