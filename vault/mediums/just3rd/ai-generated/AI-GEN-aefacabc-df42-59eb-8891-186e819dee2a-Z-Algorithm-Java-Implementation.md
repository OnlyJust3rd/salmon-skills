---
type: "medium"
title: "Z-Algorithm: Java Implementation for Efficient String Matching"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/z-algorithm-java-implementation|z-algorithm-java-implementation]]"
---
# Z-Algorithm: Java Implementation for Efficient String Matching

This lesson focuses on implementing the Z-Algorithm in Java to efficiently find all occurrences of a pattern within a text. This is a core technique for string matching and builds upon your Java Programming skills.

## What is the Z-Algorithm?

The Z-Algorithm is a linear-time string processing algorithm that computes the Z-array for a given string. The Z-array, denoted by `Z`, for a string `S` of length `N` is an array of length `N` where `Z[i]` is the length of the longest substring of `S` that starts at index `i` and is also a prefix of `S`.

In simpler terms, for each position `i` in a string `S`, `Z[i]` tells you how many characters from the beginning of `S` match the characters starting at index `i`.

### Example:

Let's consider the string `S = "aabcaabxaaaz"`.

The Z-array for `S` would be:

`Z = [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0]`

Let's break down a few entries:

*   `Z[0]` is conventionally 0 (or the length of the string, depending on definition, but 0 is common for algorithm implementation).
*   `Z[1]`: The substring starting at index 1 is `"abcaabxaaaz"`. The prefix of `S` is `"aabcaabxaaaz"`. The longest common prefix between `"abcaabxaaaz"` and `"aabcaabxaaaz"` is `"a"`, which has length 1. So, `Z[1] = 1`.
*   `Z[5]`: The substring starting at index 5 is `"abxaaaz"`. The prefix of `S` is `"aabcaabxaaaz"`. The longest common prefix is `"aab"`, which has length 3. So, `Z[5] = 3`.
*   `Z[10]`: The substring starting at index 10 is `"az"`. The prefix of `S` is `"aabcaabxaaaz"`. The longest common prefix is `"aaaz"`, which has length 4. So, `Z[10] = 4`.

## How to Use the Z-Algorithm for Pattern Matching

The power of the Z-Algorithm for pattern matching comes from concatenating the pattern with a special character (that doesn't appear in either the pattern or the text) and then the text.

Let the pattern be `P` and the text be `T`. We construct a new string `S = P + "$" + T`, where `$` is a delimiter character.

Now, we compute the Z-array for `S`. If at any index `i` in the Z-array, `Z[i]` is equal to the length of the pattern `P`, it means that the substring of `S` starting at index `i` matches the prefix of `S`. Since the prefix of `S` is `P`, this indicates an occurrence of the pattern `P` in the text `T`. The actual starting index of the match in the original text `T` would be `i - (length of P) - 1`.

## Java Implementation of the Z-Algorithm

Here's a Java implementation of the Z-Algorithm. This implementation builds the Z-array efficiently in linear time, $$ O(N) $$, where N is the length of the string.

```java
import java.util.Arrays;

public class ZAlgorithm {

    /**
     * Computes the Z-array for a given string.
     * Z[i] is the length of the longest substring starting at index i
     * which is also a prefix of the string.
     *
     * @param s The input string.
     * @return The Z-array for the string.
     */
    public static int[] calculateZArray(String s) {
        int n = s.length();
        int[] z = new int[n];
        int l = 0, r = 0; // [l, r] defines the current Z-box (substring that matches a prefix)

        for (int i = 1; i < n; i++) {
            if (i > r) {
                // If i is outside the current Z-box, compute Z[i] naively
                l = r = i;
                while (r < n && s.charAt(r - l) == s.charAt(r)) {
                    r++;
                }
                z[i] = r - l;
                r--; // Adjust r to be the end of the Z-box
            } else {
                // i is inside the current Z-box [l, r]
                int k = i - l; // Corresponding index in the prefix
                if (z[k] < r - i + 1) {
                    // If Z[k] is within the current Z-box, Z[i] is Z[k]
                    z[i] = z[k];
                } else {
                    // If Z[k] extends beyond the current Z-box,
                    // start comparing from r + 1
                    l = i;
                    while (r < n && s.charAt(r - l) == s.charAt(r)) {
                        r++;
                    }
                    z[i] = r - l;
                    r--; // Adjust r
                }
            }
        }
        return z;
    }

    /**
     * Finds all occurrences of a pattern in a text using the Z-Algorithm.
     *
     * @param text    The text to search within.
     * @param pattern The pattern to search for.
     * @return A list of starting indices where the pattern occurs in the text.
     */
    public static java.util.List<Integer> search(String text, String pattern) {
        String combined = pattern + "$" + text; // Use '$' as a delimiter
        int[] z = calculateZArray(combined);
        java.util.List<Integer> occurrences = new java.util.ArrayList<>();
        int patternLen = pattern.length();
        int textLen = text.length();

        for (int i = 0; i < z.length; i++) {
            // If Z[i] equals the pattern length, it means we found an occurrence
            // The index in the combined string is i.
            // The index in the original text is i - patternLen - 1.
            if (z[i] == patternLen) {
                // Ensure we are not counting matches that extend beyond the text length
                if (i - patternLen - 1 >= 0 && i - patternLen - 1 <= textLen - patternLen) {
                     occurrences.add(i - patternLen - 1);
                }
            }
        }
        return occurrences;
    }

    public static void main(String[] args) {
        // Example 1: Basic pattern matching
        String text1 = "ABABDABACDABABCABAB";
        String pattern1 = "ABABCABAB";
        System.out.println("Text: " + text1);
        System.out.println("Pattern: " + pattern1);
        System.out.println("Occurrences: " + search(text1, pattern1)); // Expected: [10]
        System.out.println("---");

        // Example 2: Multiple occurrences
        String text2 = "AAAAA";
        String pattern2 = "AA";
        System.out.println("Text: " + text2);
        System.out.println("Pattern: " + pattern2);
        System.out.println("Occurrences: " + search(text2, pattern2)); // Expected: [0, 1, 2, 3]
        System.out.println("---");

        // Example 3: No occurrence
        String text3 = "ABCDEFG";
        String pattern3 = "XYZ";
        System.out.println("Text: " + text3);
        System.out.println("Pattern: " + pattern3);
        System.out.println("Occurrences: " + search(text3, pattern3)); // Expected: []
        System.out.println("---");

        // Example 4: Z-array calculation demonstration
        String demoString = "aabcaabxaaaz";
        System.out.println("String for Z-array: " + demoString);
        System.out.println("Z-array: " + Arrays.toString(calculateZArray(demoString))); // Expected: [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0]
    }
}
```

### How the `calculateZArray` Method Works:

1.  **Initialization:**
    *   `z`: An array to store the Z-values.
    *   `l`, `r`: These define the boundaries of the "Z-box". A Z-box is a substring that matches a prefix of the string and has been "processed" or "discovered". Initially, `l` and `r` are 0.

2.  **Iteration:** The loop starts from `i = 1` because `z[0]` is conventionally 0.

3.  **Case 1: `i > r` (Outside the current Z-box)**
    *   If the current index `i` is outside the current Z-box (`[l, r]`), we need to compute `z[i]` from scratch.
    *   We set `l = r = i` to start a new potential Z-box.
    *   We then extend `r` as long as the characters match the prefix of the string (`s.charAt(r - l) == s.charAt(r)`).
    *   `z[i]` is set to the length of this newly found match (`r - l`).
    *   We then decrement `r` to make it the actual end of the Z-box.

4.  **Case 2: `i <= r` (Inside the current Z-box)**
    *   If `i` falls within the current Z-box, we can leverage previously computed information.
    *   `k = i - l`: This calculates the corresponding index `k` in the prefix of the string that `i` maps to within the Z-box.
    *   **Subcase 2a: `z[k] < r - i + 1`**: If the Z-value at `k` (`z[k]`) is less than the remaining length of the current Z-box from `i` onwards (`r - i + 1`), it means the match at `k` is fully contained within the current Z-box. Therefore, `z[i]` will be exactly `z[k]`.
    *   **Subcase 2b: `z[k] >= r - i + 1`**: If the Z-value at `k` is greater than or equal to the remaining length of the Z-box, it means the match at `k` *might* extend beyond the current Z-box. We can't simply copy `z[k]`. We need to start comparing characters from `r + 1` onwards.
        *   We update `l` to `i` (since `i` is now the start of a new potential Z-box).
        *   We extend `r` as before, comparing `s.charAt(r - l)` with `s.charAt(r)`.
        *   `z[i]` is set to the length of this newly found match.
        *   `r` is decremented.

This optimized approach ensures that each character is compared at most a constant number of times, leading to the overall linear time complexity.

## Key Takeaways

*   The Z-Algorithm computes a Z-array where `Z[i]` indicates the length of the longest common prefix starting at index `i`.
*   It can be used for pattern matching by concatenating the pattern, a delimiter, and the text.
*   The Java implementation uses a Z-box (`[l, r]`) to efficiently calculate Z-values by reusing previously computed results.
*   The time complexity for calculating the Z-array is $$ O(N) $$, making it a very efficient string matching algorithm.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/z-algorithm-java-implementation|Z-Algorithm Java Implementation]]
