---
type: "medium"
title: "Implementing Boyer-Moore in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/boyer-moore-java-implementation|Boyer-Moore Java Implementation]]"
---
# Implementing Boyer-Moore in Java

This lesson focuses on applying the Boyer-Moore string searching algorithm by implementing it in Java. This is a practical step towards mastering string algorithms in Java.

## The Boyer-Moore Algorithm: Core Idea

The Boyer-Moore algorithm is an efficient string searching algorithm. Unlike simpler algorithms that might compare the pattern character by character from left to right, Boyer-Moore starts comparisons from the right end of the pattern. This "look-ahead" capability allows it to often skip large portions of the text, making it faster on average than other algorithms for typical inputs.

The efficiency comes from two key heuristics:

1.  **The Bad Character Rule**: If a mismatch occurs, and the mismatched character in the text ($c$) exists in the pattern, we can shift the pattern to align the *rightmost* occurrence of $c$ in the pattern with the mismatched character in the text. If $c$ is not in the pattern, we can shift the pattern past this character entirely.

2.  **The Good Suffix Rule**: If a mismatch occurs, and a suffix of the pattern *did* match the text, we can shift the pattern so that another occurrence of that matching suffix (or a prefix of the pattern that matches a suffix of that suffix) aligns with the text.

For this implementation, we'll focus on the Bad Character Rule for simplicity and significant performance gain.

## Implementing the Bad Character Rule in Java

The Bad Character Rule requires pre-processing the pattern to quickly find the rightmost occurrence of any character within it. We can use an array (or a map) to store this information. Since we're dealing with ASCII characters, an array of size 256 is suitable.

### Step 1: Preprocessing the Pattern (Building the Bad Character Table)

We create an array, let's call it `badChar`, of size 256 (for all possible ASCII characters). This array will store the index of the *last* occurrence of each character in the pattern. If a character is not present in the pattern, we can initialize its entry to -1.

Initialize `badChar` with -1.
Iterate through the pattern from left to right. For each character `pattern[i]`, set `badChar[pattern[i]] = i`.

### Step 2: Searching

1.  Initialize `s` to 0. This `s` represents the shift of the pattern with respect to the text.
2.  While `s <= (n - m)`, where `n` is the length of the text and `m` is the length of the pattern:
    *   Initialize `j = m - 1`. This is the index for the pattern, starting from the rightmost character.
    *   While `j >= 0` and `pattern[j] == text[s + j]`:
        *   Decrement `j`. This means characters are matching from right to left.
    *   If `j < 0` (all characters of the pattern matched):
        *   We found an occurrence of the pattern at index `s`.
        *   To find subsequent occurrences, we need to shift the pattern. A safe shift is `m` minus the index of the last character of the pattern that *also* matches a character in the text *after* the current match. A simpler approach for finding *all* occurrences is to shift by `badChar[text[s + m]]` if `s + m < n`, or by `1` if `s + m >= n`. For this lesson, we will shift by `m` if `s + m < n` and `text[s+m]` is not in `badChar` table, otherwise by `m - badChar[text[s+m]]`. This is a simplification; a full Boyer-Moore implementation uses both rules. For simplicity here, we will just report the match and shift by 1.
    *   Else (mismatch occurred at `pattern[j]` and `text[s + j]`):
        *   Calculate the shift: `shift = Math.max(1, j - badChar[text[s + j]])`.
        *   `badChar[text[s + j]]` gives the index of the rightmost occurrence of the mismatched text character in the pattern.
        *   `j - badChar[text[s + j]]` is the amount we can shift the pattern to align the rightmost occurrence of `text[s+j]` in the pattern with `text[s+j]`.
        *   We take `Math.max(1, ...)` to ensure we always move forward by at least one position.
        *   Update `s = s + shift`.

### Java Code Example

```java
import java.util.Arrays;

public class BoyerMoore {

    private static final int NO_OF_CHARS = 256; // For ASCII characters

    // Preprocesses the pattern to build the bad character table
    private static void buildBadCharTable(String pattern, int m, int[] badChar) {
        // Initialize all occurrences as -1
        Arrays.fill(badChar, -1);

        // Fill the actual value of last occurrence of character
        // pattern[i] is the last occurrence of character pattern[i]
        for (int i = 0; i < m; i++) {
            badChar[(int) pattern.charAt(i)] = i;
        }
    }

    // Searches for occurrences of pattern in text using Boyer-Moore algorithm
    public static void search(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();

        if (m == 0) {
            System.out.println("Pattern is empty. Matches at every position.");
            for (int i = 0; i <= n; i++) {
                System.out.print(i + " ");
            }
            System.out.println();
            return;
        }
        if (n == 0) {
            System.out.println("Text is empty. No matches possible.");
            return;
        }
        if (m > n) {
            System.out.println("Pattern is longer than text. No matches possible.");
            return;
        }

        int[] badChar = new int[NO_OF_CHARS];

        // Preprocess the pattern (calculate bad character shifts)
        buildBadCharTable(pattern, m, badChar);

        int s = 0; // s is shift of the pattern with respect to text
        while (s <= (n - m)) {
            int j = m - 1; // Start comparing from the rightmost character of the pattern

            // Keep reducing index j of pattern while characters of
            // pattern and text are matching at this shift s
            while (j >= 0 && pattern.charAt(j) == text.charAt(s + j)) {
                j--;
            }

            // If the pattern is present at current shift, then index j
            // will become -1 after the above loop
            if (j < 0) {
                System.out.println("Pattern found at index " + s);

                // Shift the pattern so that the next character in text
                // aligns with the last occurrence of it in pattern.
                // The condition s+m < n is necessary for the case when
                // pattern occurs at the end of text.
                // In this simplified version, we shift by 1 to find all occurrences.
                // A more optimized Boyer-Moore would use the badChar table here too.
                s += 1;
            } else {
                // Mismatch occurred at index j. Shift the pattern such that the
                // bad character in text aligns with the last occurrence of
                // it in pattern. The max function is used to make sure that
                // we get a positive shift. We may get a negative shift if the
                // last occurrence of bad character in pattern is on the right
                // side of the current character.
                s += Math.max(1, j - badChar[text.charAt(s + j)]);
            }
        }
    }

    public static void main(String[] args) {
        String text = "ABAAABCD";
        String pattern = "ABC";
        System.out.println("Searching for '" + pattern + "' in '" + text + "'");
        search(text, pattern);
        System.out.println("---");

        text = "THIS IS A TEST TEXT";
        pattern = "TEST";
        System.out.println("Searching for '" + pattern + "' in '" + text + "'");
        search(text, pattern);
        System.out.println("---");

        text = "AABAACAADAABAABA";
        pattern = "AABA";
        System.out.println("Searching for '" + pattern + "' in '" + text + "'");
        search(text, pattern);
        System.out.println("---");
    }
}
```

### How it Works (Example Walkthrough)

Let's trace `text = "ABAAABCD"` and `pattern = "ABC"`:

1.  **Preprocessing `pattern = "ABC"`**:
    *   `badChar` initialized to all -1.
    *   `badChar['A'] = 0`
    *   `badChar['B'] = 1`
    *   `badChar['C'] = 2`

2.  **Search**:
    *   `s = 0`. Text substring is "ABA".
        *   Compare from right: `pattern[2] ('C')` vs `text[0+2] ('A')`. Mismatch.
        *   `j = 2`. Mismatched character in text is 'A'.
        *   Shift: `Math.max(1, j - badChar[text[s + j]])` which is `Math.max(1, 2 - badChar['A'])` -> `Math.max(1, 2 - 0)` -> `2`.
        *   `s` becomes `0 + 2 = 2`.

    *   `s = 2`. Text substring is "AA B".
        *   Compare from right: `pattern[2] ('C')` vs `text[2+2] ('A')`. Mismatch.
        *   `j = 2`. Mismatched character in text is 'A'.
        *   Shift: `Math.max(1, j - badChar[text[s + j]])` which is `Math.max(1, 2 - badChar['A'])` -> `Math.max(1, 2 - 0)` -> `2`.
        *   `s` becomes `2 + 2 = 4`.

    *   `s = 4`. Text substring is "ABC".
        *   Compare from right: `pattern[2] ('C')` vs `text[4+2] ('C')`. Match. `j = 1`.
        *   Compare: `pattern[1] ('B')` vs `text[4+1] ('B')`. Match. `j = 0`.
        *   Compare: `pattern[0] ('A')` vs `text[4+0] ('A')`. Match. `j = -1`.
        *   Since `j < 0`, a match is found at index `s = 4`.
        *   Report "Pattern found at index 4".
        *   Shift: `s` becomes `4 + 1 = 5` (in our simplified version).

    *   `s = 5`. Text substring is "BCD".
        *   Compare from right: `pattern[2] ('C')` vs `text[5+2] ('D')`. Mismatch.
        *   `j = 2`. Mismatched character in text is 'D'.
        *   'D' is not in `badChar` table (value is -1).
        *   Shift: `Math.max(1, j - badChar[text[s + j]])` which is `Math.max(1, 2 - badChar['D'])` -> `Math.max(1, 2 - (-1))` -> `3`.
        *   `s` becomes `5 + 3 = 8`.

    *   `s = 8`. Now `s > (n - m)` which is `8 > (8 - 3)`, i.e., `8 > 5`. The loop terminates.

This implementation demonstrates the core concept of the Boyer-Moore algorithm's Bad Character Rule. For a full, highly optimized Boyer-Moore, you would also incorporate the Good Suffix Rule.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/boyer-moore-java-implementation|Boyer-Moore Java Implementation]]
