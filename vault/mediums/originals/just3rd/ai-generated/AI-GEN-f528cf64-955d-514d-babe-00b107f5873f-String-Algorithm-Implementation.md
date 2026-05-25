---
type: "medium"
title: "Implementing the Naive String Searching Algorithm in Java"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithms/microskills/string-algorithm-implementation|string-algorithm-implementation]]"
learning-time-in-minutes: 2
---
# Implementing the Naive String Searching Algorithm in Java

This lesson focuses on applying your understanding of algorithms to implement a fundamental string searching technique: the Naive String Search. You'll write functional Java code to find occurrences of a pattern within a larger text.

## The Naive Approach Explained

The Naive String Search algorithm is straightforward. It works by sliding the pattern over the text one character at a time and checking for a match at each position. If a mismatch occurs, it shifts the pattern one position to the right and continues the comparison.

**Core Idea:** Brute-force comparison at every possible starting point.

Let's say we have:
*   **Text:** "ABABDABACDABABCABAB"
*   **Pattern:** "ABABCABAB"

The algorithm will check if the pattern matches starting at index 0 of the text. If not, it moves to index 1, then index 2, and so on, until a match is found or the end of the text is reached.

## Practical Java Implementation

Here's a Java method implementing the Naive String Search.

```java
public class StringSearch {

    /**
     * Implements the Naive String Search algorithm.
     *
     * @param text The text to search within.
     * @param pattern The pattern to search for.
     * @return A list of starting indices where the pattern is found in the text.
     */
    public static java.util.List<Integer> naiveSearch(String text, String pattern) {
        java.util.List<Integer> occurrences = new java.util.ArrayList<>();
        int n = text.length();
        int m = pattern.length();

        // Iterate through all possible starting positions of the pattern in the text
        for (int i = 0; i <= n - m; i++) {
            int j;
            // For the current starting position 'i', check if characters match
            for (j = 0; j < m; j++) {
                if (text.charAt(i + j) != pattern.charAt(j)) {
                    // Mismatch found, break from inner loop and move to next 'i'
                    break;
                }
            }
            // If the inner loop completed without a break, it means all characters matched
            if (j == m) {
                occurrences.add(i); // Pattern found at index 'i'
            }
        }
        return occurrences;
    }

    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        java.util.List<Integer> results = naiveSearch(text, pattern);

        if (results.isEmpty()) {
            System.out.println("Pattern not found in the text.");
        } else {
            System.out.println("Pattern found at indices: " + results);
            // Expected output: Pattern found at indices: [10]
        }

        String text2 = "AAAAA";
        String pattern2 = "AAA";
        java.util.List<Integer> results2 = naiveSearch(text2, pattern2);
        System.out.println("Pattern '" + pattern2 + "' found in '" + text2 + "' at indices: " + results2);
        // Expected output: Pattern 'AAA' found in 'AAAAA' at indices: [0, 1, 2]
    }
}
```

**How it works:**
1.  The outer loop (`for (int i = 0; i <= n - m; i++)`) iterates through each possible starting index `i` in the `text`.
2.  The inner loop (`for (int j = 0; j < m; j++)`) compares characters of the `pattern` with the corresponding characters in the `text` starting from index `i`.
3.  If a mismatch is detected (`text.charAt(i + j) != pattern.charAt(j)`), the inner loop breaks, and the outer loop proceeds to the next `i`.
4.  If the inner loop completes entirely (`j == m`), it means the entire `pattern` matched the `text` at index `i`, so `i` is added to the `occurrences` list.

## Practice Task

Implement a Java method called `searchPattern` that takes a `String text` and a `String pattern` as input. This method should return the number of times the `pattern` appears in the `text` using the Naive String Search algorithm.

For example:
*   `text = "abababa"`, `pattern = "aba"` should return `3`.
*   `text = "testing"` , `pattern = "test"` should return `1`.
*   `text = "hello world"`, `pattern = "lolo"` should return `0`.

## Self-Check Questions

1.  What is the main advantage of the Naive String Search algorithm in terms of its implementation complexity?
2.  In the provided Java code, what does the condition `i <= n - m` ensure for the outer loop?
3.  If the `text` is "AAAA" and the `pattern` is "AA", what indices will be added to the `occurrences` list?
4.  When would the Naive String Search algorithm perform poorly (i.e., take a long time)? (Hint: Consider the lengths of the text and pattern, and their characters).

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/string-algorithm-implementation|String Algorithm Implementation]]
