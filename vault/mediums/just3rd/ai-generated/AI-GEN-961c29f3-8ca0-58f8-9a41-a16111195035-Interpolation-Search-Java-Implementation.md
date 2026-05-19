---
type: "medium"
title: "Interpolation Search in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/interpolation-search-java-implementation|Interpolation Search Java Implementation]]"
---
# Interpolation Search in Java

This lesson focuses on implementing the Interpolation Search algorithm in Java. This algorithm is an improvement over Binary Search for uniformly distributed sorted data.

## Core Idea of Interpolation Search

Interpolation Search is a probing algorithm for searching a sorted array. Unlike Binary Search, which always probes the middle element, Interpolation Search estimates the position of the target element based on its value relative to the minimum and maximum values in the current search space.

The core idea is to use an interpolation formula to guess the position of the element. This formula works best when the elements in the array are uniformly distributed.

The formula for estimating the position (`pos`) is:

$$
pos = low + \frac{(high - low) \times (target - arr[low])}{(arr[high] - arr[low])}
$$

Where:
*   `low`: the starting index of the current search space.
*   `high`: the ending index of the current search space.
*   `target`: the element being searched for.
*   `arr`: the sorted array.

## When to Use Interpolation Search

Interpolation Search is most effective when:

*   The array is sorted.
*   The elements in the array are uniformly distributed. This means the difference between consecutive elements is roughly constant. For example, an array like `{10, 20, 30, 40, 50}` is uniformly distributed. An array like `{1, 2, 100, 101, 1000}` is not.

For non-uniformly distributed data, Interpolation Search can perform worse than Binary Search, potentially degrading to $$ O(n) $$ in the worst case.

## Java Implementation of Interpolation Search

Let's implement the Interpolation Search algorithm in Java.

```java
public class InterpolationSearch {

    /**
     * Performs interpolation search on a sorted array.
     *
     * @param arr    The sorted array to search within.
     * @param target The element to search for.
     * @return The index of the target element if found, otherwise -1.
     */
    public static int interpolationSearch(int[] arr, int target) {
        int low = 0;
        int high = arr.length - 1;

        // Ensure the target is within the range of the array's values
        while (low <= high && target >= arr[low] && target <= arr[high]) {

            // If low and high are the same, check if arr[low] is the target
            if (low == high) {
                if (arr[low] == target) {
                    return low;
                }
                return -1; // Target not found
            }

            // Estimate the position using the interpolation formula
            // To avoid division by zero when arr[high] == arr[low]
            // and to prevent overflow, we can rearrange the formula slightly.
            // However, the direct formula is often clear for understanding.
            // For robustness, especially with large numbers or potential arr[high] == arr[low],
            // casting to long might be necessary.
            int pos = low + (((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

            // Basic check for pos to prevent out-of-bounds access if the formula
            // produces an unexpected result (though less likely with uniform distribution)
            if (pos < low || pos > high) {
                // This indicates a potential issue with distribution or target value
                // For simplicity here, we'll break and potentially return -1.
                // A more robust implementation might switch to binary search or linear scan.
                break;
            }

            // If target is found at pos
            if (arr[pos] == target) {
                return pos;
            }

            // If target is larger, search in the right sub-array
            if (arr[pos] < target) {
                low = pos + 1;
            }
            // If target is smaller, search in the left sub-array
            else {
                high = pos - 1;
            }
        }

        // If the loop finishes without finding the element
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47};
        int target = 21;

        int index = interpolationSearch(arr, target);

        if (index != -1) {
            System.out.println("Element found at index: " + index); // Expected: Element found at index: 7
        } else {
            System.out.println("Element not found in the array.");
        }

        target = 50;
        index = interpolationSearch(arr, target);
        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found in the array."); // Expected: Element not found in the array.
        }

        // Example with non-uniform distribution (may not perform optimally)
        int[] nonUniformArr = {1, 2, 100, 101, 1000};
        target = 101;
        index = interpolationSearch(nonUniformArr, target);
        if (index != -1) {
            System.out.println("Element found at index: " + index); // Expected: Element found at index: 3
        } else {
            System.out.println("Element not found in the array.");
        }
    }
}
```

### How the Code Works

1.  **Initialization**: `low` is set to the first index (0) and `high` to the last index (`arr.length - 1`).
2.  **Loop Condition**: The `while` loop continues as long as:
    *   `low` is less than or equal to `high` (meaning there's still a search space).
    *   The `target` is within the range of values defined by `arr[low]` and `arr[high]`. This is a crucial optimization for interpolation search; if the target is outside this range, it cannot possibly be in the current segment of the array.
3.  **Special Case: `low == high`**: If `low` and `high` converge to the same index, it means we've narrowed down the search to a single element. We check if this element is the target.
4.  **Position Estimation**: The core of the algorithm is this line:
    ```java
    int pos = low + (((high - low) / (arr[high] - arr[low])) * (target - arr[low]));
    ```
    This calculates the estimated index `pos` where the `target` might be.
    *   `target - arr[low]` represents how far the target is from the start of the current range.
    *   `arr[high] - arr[low]` represents the total range of values in the current segment.
    *   The ratio `(target - arr[low]) / (arr[high] - arr[low])` gives a fractional position of the target within the value range.
    *   Multiplying this fraction by `(high - low)` (the size of the index range) and adding `low` gives an estimated index.
5.  **Boundary Check for `pos`**: A basic check `if (pos < low || pos > high)` is added. While the formula is designed to stay within bounds for well-distributed data, this is a safeguard against potential calculation issues or highly skewed distributions that might produce an out-of-bounds `pos`. In a production scenario, you might want to handle this more robustly (e.g., falling back to Binary Search).
6.  **Target Found**: If `arr[pos]` equals the `target`, the index `pos` is returned.
7.  **Adjusting Search Space**:
    *   If `arr[pos]` is less than the `target`, it means the target must be in the right half of the current search space. So, `low` is updated to `pos + 1`.
    *   If `arr[pos]` is greater than the `target`, it means the target must be in the left half. So, `high` is updated to `pos - 1`.
8.  **Not Found**: If the loop terminates without finding the element, `-1` is returned.

## Time Complexity

*   **Average Case (Uniform Distribution)**: $$ O(\log \log n) $$
*   **Worst Case (Non-uniform Distribution)**: $$ O(n) $$

The significantly better average-case complexity makes it attractive for specific use cases.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/interpolation-search-java-implementation|Interpolation Search Java Implementation]]
