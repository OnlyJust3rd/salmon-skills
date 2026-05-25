---
type: medium
title: Jump Search in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[jump-search-java-implementation|jump-search-java-implementation]]"
learning-time-in-minutes: 3
---
# Jump Search in Java

Jump Search is an efficient searching algorithm used for **sorted arrays**. It's an improvement over Linear Search, especially for large datasets, by reducing the number of comparisons. The core idea is to "jump" ahead by a fixed step size instead of checking each element one by one.

## How Jump Search Works

1.  **Determine the Block Size:** The optimal block size (or jump step) is typically the square root of the array's length, i.e., `sqrt(n)`, where `n` is the number of elements in the array. This block size balances the number of jumps and the linear search within a block.

2.  **Jumping:** Starting from the first element, we jump forward by the block size until we find an element that is greater than or equal to the target element we are searching for.

3.  **Linear Search within the Block:** Once we find such an element, it means the target element, if present, must lie within the previous block. We then perform a Linear Search within this smaller block (from the previous jump point to the current jump point) to find the target element.

## When to Use Jump Search

*   When the array is **sorted**.
*   When the array is large, and you want to avoid the $O(n)$ complexity of Linear Search but don't necessarily need the $O(\log n)$ of Binary Search (Jump Search is often faster in practice than Binary Search for very large arrays due to fewer comparisons, though theoretically it's still $O(\sqrt{n})$).

## Java Implementation of Jump Search

Here's a Java implementation of the Jump Search algorithm.

```java
import java.lang.Math;

public class JumpSearch {

    public static int jumpSearch(int[] arr, int x) {
        int n = arr.length;

        // Finding block size to be jumped
        // Optimal block size is sqrt(n)
        int step = (int)Math.floor(Math.sqrt(n));

        // Finding the block where element is present (if it is present)
        // arr[prev] < x <= arr[step]
        int prev = 0;
        while (arr[Math.min(step, n) - 1] < x) {
            prev = step;
            step += (int)Math.floor(Math.sqrt(n));
            if (prev >= n) {
                return -1; // Element not found
            }
        }

        // Doing a linear search for x in block beginning with prev.
        while (arr[prev] < x) {
            prev++;

            // If we reached next block or end of array, element is not present.
            if (prev == Math.min(step, n)) {
                return -1; // Element not found
            }
        }

        // If element is found
        if (arr[prev] == x) {
            return prev; // Return the index
        }

        return -1; // Element not found
    }

    // Driver code
    public static void main(String[] args) {
        int arr[] = new int[]{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610};
        int x = 55;

        // Find the index of 'x' in arr
        int index = jumpSearch(arr, x);

        // If element is found
        if (index != -1) {
            System.out.println("Element " + x + " is present at index " + index);
        } else {
            System.out.println("Element " + x + " is not present in the array.");
        }

        x = 100;
        index = jumpSearch(arr, x);
        if (index != -1) {
            System.out.println("Element " + x + " is present at index " + index);
        } else {
            System.out.println("Element " + x + " is not present in the array.");
        }
    }
}
```

### Code Explanation:

1.  **`jumpSearch(int[] arr, int x)` Function:**
    *   `n = arr.length`: Gets the size of the input array.
    *   `step = (int)Math.floor(Math.sqrt(n))`: Calculates the jump step size. `Math.floor` ensures we get an integer value.
    *   **First `while` loop:** This loop performs the "jumping".
        *   `arr[Math.min(step, n) - 1] < x`: Checks if the element at the end of the current block (or the last element if `step` exceeds `n`) is less than the target `x`. `Math.min(step, n)` handles cases where `step` might go beyond the array bounds.
        *   `prev = step`: Updates `prev` to mark the start of the previous block.
        *   `step += (int)Math.floor(Math.sqrt(n))`: Increments `step` for the next jump.
        *   `if (prev >= n)`: If `prev` goes beyond the array length, it means the target `x` is not in the array.
    *   **Second `while` loop:** This loop performs the Linear Search within the identified block.
        *   `arr[prev] < x`: Continues searching as long as the current element is less than `x`.
        *   `prev++`: Moves to the next element in the block.
        *   `if (prev == Math.min(step, n))`: If `prev` reaches the end of the block (or array), the element is not found.
    *   **Final Check:**
        *   `if (arr[prev] == x)`: If the element at index `prev` is equal to `x`, it means we found it.
        *   `return prev`: Returns the index where the element was found.
        *   `return -1`: If the element is not found after all checks, return -1.

2.  **`main` Method:**
    *   Provides a sample sorted array `arr` and a target value `x`.
    *   Calls `jumpSearch` to find the index of `x`.
    *   Prints the result accordingly.

## Time Complexity

The time complexity of Jump Search is $$ O(\sqrt{n}) $$. This is because, in the worst case, we might perform `sqrt(n)` jumps and then up to `sqrt(n)` linear comparisons within a block.

## Space Complexity

The space complexity is $$ O(1) $$ as it only uses a few extra variables, regardless of the input array size.

## Supports

- [[jump-search-java-implementation|Jump Search Java Implementation]]
