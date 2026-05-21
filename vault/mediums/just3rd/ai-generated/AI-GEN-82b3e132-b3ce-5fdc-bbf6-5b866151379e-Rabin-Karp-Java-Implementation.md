---
type: "medium"
title: "Implementing the Rabin-Karp Algorithm in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/rabin-karp-java-implementation|rabin-karp-java-implementation]]"
---
# Implementing the Rabin-Karp Algorithm in Java

This lesson focuses on applying the Rabin-Karp string searching algorithm by implementing it in Java. This builds upon your Java Programming skills and contributes to the outcome of implementing various string algorithms.

## What is Rabin-Karp?

Rabin-Karp is a string searching algorithm that uses hashing to find any one of a set of pattern strings in a text. Instead of comparing the pattern character by character at every possible position in the text, it computes a hash value for the pattern and for substrings of the text of the same length. If the hash values match, it then performs a character-by-character comparison to confirm a true match (to handle hash collisions).

The core idea is to efficiently compute the hash of a sliding window of characters in the text.

## Key Concepts

*   **Hashing:** The algorithm uses a rolling hash function. A common choice is a polynomial rolling hash. For a string $S$ of length $m$ and a prime modulus $q$, a hash value can be calculated as:
    $$ H(S) = (S[0] \cdot d^{m-1} + S[1] \cdot d^{m-2} + \dots + S[m-1] \cdot d^0) \pmod q $$
    Here, $d$ is the size of the alphabet (e.g., 256 for ASCII characters).

*   **Rolling Hash:** The "rolling" aspect is crucial for efficiency. When we slide the window one position to the right, we don't recompute the hash from scratch. Instead, we can update the previous hash value in $O(1)$ time.
    If the hash of the substring $T[i \dots i+m-1]$ is $h_{old}$, the hash of $T[i+1 \dots i+m]$ ($h_{new}$) can be calculated as:
    $$ h_{new} = (d \cdot (h_{old} - T[i] \cdot d^{m-1}) + T[i+m]) \pmod q $$
    We need to be careful with negative results from the subtraction, so it's common to add $q$ before taking the modulo.

*   **Prime Modulus ($q$):** A large prime number is chosen as the modulus to minimize the chance of hash collisions.

*   **Alphabet Size ($d$):** This is typically the number of possible characters in your input. For standard ASCII, 256 is common.

*   **Spurious Hits (Collisions):** It's possible for two different strings to have the same hash value. Therefore, when hash values match, a direct character-by-character comparison is necessary to verify the match.

## Java Implementation Steps

1.  **Choose Parameters:** Select a prime modulus `q` and alphabet size `d`.
2.  **Precompute $d^{m-1} \pmod q$:** This term (often denoted as `h_power` or `dm_minus_1`) is needed for the rolling hash update.
3.  **Compute Initial Hashes:** Calculate the hash for the pattern (`p_hash`) and the hash for the first `m` characters of the text (`t_hash`).
4.  **Iterate and Compare:**
    *   If `p_hash` equals `t_hash`, perform a character-by-character comparison of the pattern and the current text window. If they match, we found an occurrence.
    *   If not the last window, compute the hash for the next window using the rolling hash formula.
5.  **Handle Edge Cases:** Ensure correct modulo arithmetic, especially with subtractions.

## Code Example

Let's implement the Rabin-Karp algorithm in Java.

```java
public class RabinKarp {

    // Define a prime number for the modulo operation
    // A large prime reduces the chance of spurious hits
    private final static int Q = 101; // A prime number
    // The size of the alphabet (e.g., for ASCII characters)
    private final static int D = 256; // Alphabet size

    /**
     * Searches for occurrences of a pattern in a given text using the Rabin-Karp algorithm.
     *
     * @param text    The text to search within.
     * @param pattern The pattern to search for.
     * @return A list of starting indices where the pattern is found in the text.
     */
    public static java.util.List<Integer> search(String text, String pattern) {
        java.util.List<Integer> occurrences = new java.util.ArrayList<>();
        int M = pattern.length();
        int N = text.length();

        if (M == 0 || N == 0 || M > N) {
            return occurrences; // No pattern or text, or pattern is longer than text
        }

        int p_hash = 0; // hash value for pattern
        int t_hash = 0; // hash value for text window
        int h_power = 1; // The value of D^(M-1) % Q

        // Calculate h_power = D^(M-1) % Q
        for (int i = 0; i < M - 1; i++) {
            h_power = (h_power * D) % Q;
        }

        // Calculate the hash value of the pattern and the first window of text
        for (int i = 0; i < M; i++) {
            p_hash = (D * p_hash + pattern.charAt(i)) % Q;
            t_hash = (D * t_hash + text.charAt(i)) % Q;
        }

        // Slide the pattern over text one by one
        for (int i = 0; i <= N - M; i++) {
            // Check if hash values match. If they do, then check characters one by one
            if (p_hash == t_hash) {
                // Check for characters one by one
                boolean match = true;
                for (int j = 0; j < M; j++) {
                    if (text.charAt(i + j) != pattern.charAt(j)) {
                        match = false;
                        break;
                    }
                }
                // If pattern and text[i...i+M-1] are the same, we found an occurrence
                if (match) {
                    occurrences.add(i);
                }
            }

            // Calculate hash value for the next window of text:
            // Remove leading character, add trailing character
            if (i < N - M) {
                // Calculate new hash value using rolling hash formula
                // t_hash = (D * (t_hash - text.charAt(i) * h_power) + text.charAt(i + M)) % Q;
                // The above formula can result in negative numbers.
                // We can adjust it to:
                t_hash = (D * (t_hash - text.charAt(i) * h_power) + text.charAt(i + M)) % Q;

                // Ensure that the hash value is non-negative
                if (t_hash < 0) {
                    t_hash = (t_hash + Q);
                }
            }
        }
        return occurrences;
    }

    public static void main(String[] args) {
        String text = "GEEKS FOR GEEKS";
        String pattern = "GEEK";
        java.util.List<Integer> results = search(text, pattern);

        System.out.println("Pattern found at indices: " + results); // Expected: [0, 10]

        text = "ABABABA";
        pattern = "ABA";
        results = search(text, pattern);
        System.out.println("Pattern found at indices: " + results); // Expected: [0, 2, 4]

        text = "TESTING THIS ALGORITHM";
        pattern = "ALGO";
        results = search(text, pattern);
        System.out.println("Pattern found at indices: " + results); // Expected: [13]

        text = "AAAAA";
        pattern = "AA";
        results = search(text, pattern);
        System.out.println("Pattern found at indices: " + results); // Expected: [0, 1, 2, 3]

        text = "ABRACADABRA";
        pattern = "CAD";
        results = search(text, pattern);
        System.out.println("Pattern found at indices: " + results); // Expected: [5]
    }
}
```

### How the Code Works:

1.  **`Q` and `D`:** Constants for the prime modulus and alphabet size.
2.  **`search(String text, String pattern)`:** The main method.
    *   Initializes an `ArrayList` to store results.
    *   Handles trivial cases (empty strings, pattern longer than text).
    *   **`h_power` Calculation:** Computes $D^{M-1} \pmod Q$. This is crucial for removing the contribution of the leftmost character in the rolling hash.
    *   **Initial Hash Calculation:** Computes the hash for the `pattern` and the first window of the `text`.
    *   **Sliding Window Loop:** Iterates from `i = 0` to `N - M`.
        *   **Hash Match Check:** If `p_hash == t_hash`, it proceeds to a direct character comparison.
        *   **Character-by-Character Verification:** If hashes match, it loops through the pattern and the current text window to ensure an actual match.
        *   **Add Occurrence:** If a true match is found, the starting index `i` is added to `occurrences`.
        *   **Rolling Hash Update:** If `i` is not at the end of the text, it calculates the hash for the next window. The formula `(D * (t_hash - text.charAt(i) * h_power) + text.charAt(i + M)) % Q` effectively removes the first character's contribution and adds the new character's contribution.
        *   **Negative Hash Handling:** The `if (t_hash < 0) { t_hash = (t_hash + Q); }` line ensures that the hash remains positive, which is important for consistent modulo arithmetic.
3.  **`main` Method:** Demonstrates the usage of the `search` method with various examples.

## When to Use Rabin-Karp

*   When you need to search for multiple patterns in a text (though other algorithms might be more specialized for this).
*   When the average-case performance is more important than worst-case guarantees, as its average time complexity is $O(N+M)$, but its worst-case is $O(NM)$ (though rare with good hash functions and prime selection).
*   As a building block for more complex string matching problems.

## Considerations and Improvements

*   **Choice of `Q` and `D`:** A larger prime `Q` and an appropriate `D` reduce the probability of spurious hits. For very large alphabets or texts, a double hashing approach might be considered.
*   **Worst-Case Scenario:** If many hash collisions occur, the algorithm degrades to $O(NM)$. This is less likely with a good prime modulus.
*   **Data Types:** For very long strings, intermediate hash calculations might exceed standard integer limits, requiring the use of `long` in Java.

By implementing this Java code, you've successfully applied the Rabin-Karp algorithm for string searching.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/rabin-karp-java-implementation|Rabin-Karp Java Implementation]]
