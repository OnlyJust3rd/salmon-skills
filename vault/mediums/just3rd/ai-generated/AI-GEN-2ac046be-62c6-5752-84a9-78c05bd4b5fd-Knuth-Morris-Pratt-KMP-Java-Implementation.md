---
type: "medium"
title: "Knuth-Morris-Pratt (KMP) Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/knuth-morris-pratt-kmp-java-implementation|knuth-morris-pratt-kmp-java-implementation]]"
---
# Knuth-Morris-Pratt (KMP) Java Implementation

The Knuth-Morris-Pratt (KMP) algorithm is an efficient string-searching algorithm. It aims to find occurrences of a "pattern" string within a "text" string. Unlike naive string searching, KMP preprocesses the pattern to avoid redundant comparisons, making it significantly faster in many cases. This lesson focuses on implementing the KMP algorithm in Java.

## Core Idea: Avoiding Redundant Comparisons

The inefficiency in naive string searching arises when a mismatch occurs. The algorithm might shift the pattern by only one character and restart the comparison from the beginning of the pattern. KMP optimizes this by using precomputed information about the pattern itself.

When a mismatch happens at a certain position in the pattern, KMP uses a precomputed "longest proper prefix suffix" (LPS) array to determine how much to shift the pattern. A "proper prefix" is any prefix of a string excluding the string itself. A "proper suffix" is any suffix of a string excluding the string itself. The LPS array stores, for each index `i` in the pattern, the length of the longest proper prefix of `pattern[0...i]` that is also a suffix of `pattern[0...i]`.

## The LPS Array (Prefix Function)

The LPS array is the heart of KMP's optimization. Let's understand how to compute it.

### Computing the LPS Array

The LPS array for a pattern `P` of length `m` is an array `lps` of size `m`. `lps[i]` stores the length of the longest proper prefix of `P[0...i]` which is also a suffix of `P[0...i]`.

Here's a Java implementation to compute the LPS array:

```java
public class KMP {

    // Computes the LPS array for a given pattern
    private int[] computeLPSArray(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int length = 0; // Length of the previous longest prefix suffix
        int i = 1;

        lps[0] = 0; // LPS of the first character is always 0

        // The loop calculates lps[i] for i = 1 to m-1
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(length)) {
                length++;
                lps[i] = length;
                i++;
            } else {
                // This is tricky. Consider the example.
                // AAACAAAA and i = 7. The idea is similar
                // to search step.
                if (length != 0) {
                    length = lps[length - 1];
                    // Also, note that we do not increment i here
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

    // ... (KMP search method will be here)
}
```

**How `computeLPSArray` works:**

*   **Initialization:** `lps[0]` is always 0 because a single character has no proper prefix or suffix. `length` tracks the current length of the longest prefix-suffix found so far. `i` iterates through the pattern.
*   **Match:** If `pattern.charAt(i)` matches `pattern.charAt(length)`, it means we've extended the current longest prefix-suffix. So, we increment `length`, set `lps[i]` to the new `length`, and move to the next character in the pattern (`i++`).
*   **Mismatch:** If there's a mismatch (`pattern.charAt(i) != pattern.charAt(length)`):
    *   If `length` is not 0, it means we had a non-empty prefix-suffix. We need to find a shorter prefix-suffix that might match. We use the LPS array itself for this: `length = lps[length - 1]`. This effectively "backtracks" to the LPS value of the previous character in the prefix. We don't increment `i` here, as we want to re-evaluate `pattern.charAt(i)` against the new `length`.
    *   If `length` is 0, it means there's no prefix-suffix match possible at this point. So, `lps[i]` is 0, and we move to the next character (`i++`).

## Implementing the KMP Search

Once the LPS array is computed, we can use it to efficiently search for the pattern in the text.

```java
public class KMP {

    // ... (computeLPSArray method as above)

    // Searches for occurrences of pattern in text using KMP algorithm
    public void KMPSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();

        // Preprocess the pattern (calculate LPS array)
        int[] lps = computeLPSArray(pattern);

        int i = 0; // index for text
        int j = 0; // index for pattern

        while (i < n) {
            if (pattern.charAt(j) == text.charAt(i)) {
                j++;
                i++;
            }

            if (j == m) {
                System.out.println("Found pattern at index " + (i - j));
                // Shift pattern to find next match
                // This is crucial for finding all occurrences
                j = lps[j - 1];
            }
            // Mismatch after j matches
            else if (i < n && pattern.charAt(j) != text.charAt(i)) {
                // Do not match lps[0..lps[j-1]] characters,
                // they will match anyway
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
    }

    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        KMP kmp = new KMP();
        kmp.KMPSearch(text, pattern);
    }
}
```

**How `KMPSearch` works:**

*   **Initialization:** `i` is the index for the `text`, and `j` is the index for the `pattern`.
*   **Match:** If `pattern.charAt(j)` matches `text.charAt(i)`, we advance both pointers (`i++`, `j++`).
*   **Pattern Found:** If `j` reaches the end of the pattern (`j == m`), it means we've found an occurrence. We print the starting index (`i - j`). To continue searching for subsequent occurrences, we don't reset `j` to 0. Instead, we use `j = lps[j - 1]`. This shifts the pattern based on the LPS value of the last matched character, aligning a potential prefix of the pattern with a suffix of the matched part of the text.
*   **Mismatch:** If a mismatch occurs (`pattern.charAt(j) != text.charAt(i)`) and `i` is still within the `text` bounds:
    *   If `j` is not 0, it means we had some characters matched. We use the LPS array to shift the pattern: `j = lps[j - 1]`. This aligns the pattern such that the longest proper prefix of `pattern[0...j-1]` that is also a suffix of `pattern[0...j-1]` now aligns with the text. We don't advance `i` here.
    *   If `j` is 0, it means the very first character of the pattern didn't match. We simply advance the text pointer (`i++`).

## Example Walkthrough

Let's trace with `text = "ABABDABACDABABCABAB"` and `pattern = "ABABCABAB"`.

1.  **Compute LPS for "ABABCABAB":**
    *   `lps[0] = 0`
    *   `A B A B C A B A B`
    *   `0 0 1 2 0 1 2 3 4`
    So, `lps = {0, 0, 1, 2, 0, 1, 2, 3, 4}`.

2.  **Search:**
    *   `text:    A B A B D A B A C D A B A B C A B A B`
    *   `pattern: A B A B C A B A B`
    *   Match `ABAB` (j=4, i=4). Mismatch at `text[4] = 'D'` and `pattern[4] = 'C'`.
    *   `j` is 4, so `j = lps[j-1] = lps[3] = 2`.
    *   Shift pattern:
        `text:    A B A B D A B A C D A B A B C A B A B`
        `pattern:   A B A B C A B A B` (pattern shifted by `4 - 2 = 2` positions)
    *   Continue matching. `text[2..5]` matches `pattern[0..3]` (i=6, j=4). Mismatch at `text[6] = 'B'` and `pattern[4] = 'C'`.
    *   `j` is 4, so `j = lps[j-1] = lps[3] = 2`.
    *   Shift pattern:
        `text:    A B A B D A B A C D A B A B C A B A B`
        `pattern:     A B A B C A B A B`
    *   This continues until the pattern is found at index 10.
    *   When `j == m` (9), `i` will be `10 + 9 = 19`. `Found pattern at index 10`.
    *   `j` is reset to `lps[j-1] = lps[8] = 4`.
    *   Continue search from `i = 19` and `j = 4`.
    *   ...and so on.

## Time Complexity

*   **LPS array computation:** $$ O(m) $$ where `m` is the length of the pattern.
*   **KMP search:** $$ O(n) $$ where `n` is the length of the text.

The total time complexity is $$ O(n + m) $$, which is a significant improvement over the naive string search's worst-case $$ O(n \times m) $$.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/knuth-morris-pratt-kmp-java-implementation|Knuth-Morris-Pratt (KMP) Java Implementation]]
