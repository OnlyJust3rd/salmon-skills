---
type: "medium"
title: "Permutation Generation Backtracking in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/permutation-generation-backtracking-java-implementation|Permutation Generation Backtracking Java Implementation]]"
---
# Permutation Generation Backtracking in Java

This lesson focuses on implementing permutation generation using backtracking in Java. Generating permutations is a common problem in computer science, and understanding how to solve it with backtracking provides a solid foundation for more complex algorithmic challenges.

## Core Idea: Backtracking for Permutations

Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time.

For permutation generation, we want to find all possible orderings of a given set of elements. The backtracking approach involves:

1.  **Choosing an element:** Select an element from the available pool to be placed at the current position in the permutation.
2.  **Exploring:** Recursively generate permutations for the remaining elements.
3.  **Unchoosing (Backtracking):** After exploring all possibilities with the chosen element, "unchoose" it so it can be used in other positions for different permutations.

## Step-by-Step Implementation

Let's break down the Java implementation. We'll use a helper function for the recursive logic.

### The Recursive Function

The core of our backtracking solution will be a recursive function, let's call it `generatePermutationsHelper`. It will take several parameters:

*   `nums`: The original array of numbers we want to permute.
*   `currentPermutation`: A list representing the permutation being built.
*   `used`: A boolean array to keep track of which numbers have already been used in the `currentPermutation`.
*   `result`: A list of lists to store all the generated permutations.

### Pseudocode

```
function generatePermutationsHelper(nums, currentPermutation, used, result):
  // Base Case: If the current permutation is complete (same length as nums)
  if currentPermutation.size() == nums.length:
    add a copy of currentPermutation to result
    return

  // Recursive Step: Iterate through all numbers
  for i from 0 to nums.length - 1:
    // If the number at index i has not been used yet
    if not used[i]:
      // Choose: Add the number to the current permutation
      add nums[i] to currentPermutation
      mark used[i] as true

      // Explore: Recursively call the helper for the next position
      generatePermutationsHelper(nums, currentPermutation, used, result)

      // Unchoose (Backtrack): Remove the number from current permutation
      // and mark it as unused for future possibilities
      remove the last element from currentPermutation
      mark used[i] as false
```

### Java Code Example

```java
import java.util.ArrayList;
import java.util.List;

public class Permutations {

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        boolean[] used = new boolean[nums.length];
        generatePermutationsHelper(nums, new ArrayList<>(), used, result);
        return result;
    }

    private void generatePermutationsHelper(int[] nums, List<Integer> currentPermutation, boolean[] used, List<List<Integer>> result) {
        // Base Case: If the current permutation is complete
        if (currentPermutation.size() == nums.length) {
            result.add(new ArrayList<>(currentPermutation)); // Add a copy!
            return;
        }

        // Recursive Step: Try adding each unused number
        for (int i = 0; i < nums.length; i++) {
            if (!used[i]) {
                // Choose
                currentPermutation.add(nums[i]);
                used[i] = true;

                // Explore
                generatePermutationsHelper(nums, currentPermutation, used, result);

                // Unchoose (Backtrack)
                used[i] = false;
                currentPermutation.remove(currentPermutation.size() - 1);
            }
        }
    }

    public static void main(String[] args) {
        Permutations p = new Permutations();
        int[] nums = {1, 2, 3};
        List<List<Integer>> permutations = p.permute(nums);

        System.out.println("Permutations of " + java.util.Arrays.toString(nums) + ":");
        for (List<Integer> perm : permutations) {
            System.out.println(perm);
        }
    }
}
```

## How it Works: A Walkthrough

Let's trace the execution for `nums = {1, 2, 3}`:

1.  `permute({1, 2, 3})` is called. `result` is empty, `used` is `[false, false, false]`.
2.  `generatePermutationsHelper({1, 2, 3}, [], [F, F, F], result)`
    *   `i = 0`: `nums[0]` is `1`. `used[0]` is false.
        *   Choose: `currentPermutation = [1]`, `used = [T, F, F]`
        *   Explore: `generatePermutationsHelper({1, 2, 3}, [1], [T, F, F], result)`
            *   `i = 0`: `used[0]` is true. Skip.
            *   `i = 1`: `nums[1]` is `2`. `used[1]` is false.
                *   Choose: `currentPermutation = [1, 2]`, `used = [T, T, F]`
                *   Explore: `generatePermutationsHelper({1, 2, 3}, [1, 2], [T, T, F], result)`
                    *   `i = 0`: `used[0]` true. Skip.
                    *   `i = 1`: `used[1]` true. Skip.
                    *   `i = 2`: `nums[2]` is `3`. `used[2]` is false.
                        *   Choose: `currentPermutation = [1, 2, 3]`, `used = [T, T, T]`
                        *   Explore: `generatePermutationsHelper({1, 2, 3}, [1, 2, 3], [T, T, T], result)`
                            *   Base Case: `currentPermutation.size() == nums.length` (3 == 3).
                            *   Add `[1, 2, 3]` to `result`. Return.
                        *   Unchoose: `used[2] = false`, `currentPermutation.removeLast()` -> `[1, 2]`
                    *   Loop ends. Return.
                *   Unchoose: `used[1] = false`, `currentPermutation.removeLast()` -> `[1]`
            *   `i = 2`: `nums[2]` is `3`. `used[2]` is false.
                *   Choose: `currentPermutation = [1, 3]`, `used = [T, F, T]`
                *   Explore: `generatePermutationsHelper({1, 2, 3}, [1, 3], [T, F, T], result)`
                    *   `i = 0`: `used[0]` true. Skip.
                    *   `i = 1`: `nums[1]` is `2`. `used[1]` is false.
                        *   Choose: `currentPermutation = [1, 3, 2]`, `used = [T, T, T]`
                        *   Explore: `generatePermutationsHelper({1, 2, 3}, [1, 3, 2], [T, T, T], result)`
                            *   Base Case: `currentPermutation.size() == nums.length`.
                            *   Add `[1, 3, 2]` to `result`. Return.
                        *   Unchoose: `used[1] = false`, `currentPermutation.removeLast()` -> `[1, 3]`
                    *   `i = 2`: `used[2]` true. Skip.
                    *   Loop ends. Return.
                *   Unchoose: `used[2] = false`, `currentPermutation.removeLast()` -> `[1]`
            *   Loop ends. Return.
        *   Unchoose: `used[0] = false`, `currentPermutation.removeLast()` -> `[]`
    *   `i = 1`: `nums[1]` is `2`. `used[1]` is false.
        *   Choose: `currentPermutation = [2]`, `used = [F, T, F]`
        *   Explore: `generatePermutationsHelper({1, 2, 3}, [2], [F, T, F], result)`
            *   ... (This process continues, generating `[2, 1, 3]` and `[2, 3, 1]`)
    *   `i = 2`: `nums[2]` is `3`. `used[2]` is false.
        *   Choose: `currentPermutation = [3]`, `used = [F, F, T]`
        *   Explore: `generatePermutationsHelper({1, 2, 3}, [3], [F, F, T], result)`
            *   ... (This process continues, generating `[3, 1, 2]` and `[3, 2, 1]`)

The `result` will eventually contain `[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`.

## Key Considerations

*   **Copying the Permutation:** In the base case, `result.add(new ArrayList<>(currentPermutation));` is crucial. If you directly add `currentPermutation`, you're adding a reference to the list that will be modified during backtracking, leading to incorrect results.
*   **Time Complexity:** The time complexity for generating permutations is $$O(n \times n!)$$. This is because there are $$n!$$ permutations, and for each permutation, we do $$O(n)$$ work (copying the list).
*   **Space Complexity:** The space complexity is also $$O(n \times n!)$$ for storing the results, and $$O(n)$$ for the recursion depth and the `currentPermutation` list.

This implementation provides a clear and efficient way to generate all permutations of a given set of elements using the powerful backtracking technique in Java.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/permutation-generation-backtracking-java-implementation|Permutation Generation Backtracking Java Implementation]]
