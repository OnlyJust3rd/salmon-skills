---
type: medium
title: Bubble Sort Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[bubble-sort-java-implementation|bubble-sort-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Bubble Sort Java Implementation

This lesson focuses on implementing the Bubble Sort algorithm in Java. Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## How Bubble Sort Works

Imagine you have a list of numbers, and you want to sort them in ascending order. Bubble Sort works by:

1.  **Comparing Adjacent Elements:** It starts by comparing the first two elements. If the first element is greater than the second, they are swapped.
2.  **"Bubbling Up" Larger Elements:** This process continues for all adjacent pairs in the list. With each pass, the largest unsorted element "bubbles up" to its correct position at the end of the unsorted portion.
3.  **Repeating Passes:** The algorithm repeats these passes until no swaps are needed in a complete pass, indicating that the list is fully sorted.

## Algorithm Steps

1.  Iterate through the array from the first element to the second-to-last element.
2.  For each element, compare it with the next element.
3.  If the current element is greater than the next element, swap them.
4.  Repeat steps 1-3 for each pass. A flag can be used to track if any swaps occurred in a pass. If no swaps occur, the array is sorted, and the algorithm can terminate early.

## Java Implementation

Here's a Java code snippet demonstrating the Bubble Sort algorithm:

```java
public class BubbleSort {

    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped; // Flag to optimize: if no swaps happen, array is sorted

        // Outer loop controls the number of passes
        for (int i = 0; i < n - 1; i++) {
            swapped = false; // Reset swap flag for each pass

            // Inner loop for comparisons and swaps
            // The last i elements are already in place
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true; // A swap occurred
                }
            }

            // If no two elements were swapped by inner loop, then break
            if (!swapped) {
                break;
            }
        }
    }

    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Example usage
    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Original array:");
        printArray(data);

        bubbleSort(data);

        System.out.println("Sorted array:");
        printArray(data);
    }
}
```

### Code Explanation:

*   **`bubbleSort(int[] arr)` Method:**
    *   `n`: Stores the length of the input array.
    *   `swapped`: A boolean flag used for optimization. If an entire pass completes without any swaps, it means the array is already sorted, and we can stop early.
    *   **Outer Loop (`for (int i = 0; i < n - 1; i++)`):** This loop controls the number of passes. In each pass, at least one element (the largest unsorted one) will be moved to its correct final position. We need at most `n-1` passes.
    *   **Inner Loop (`for (int j = 0; j < n - 1 - i; j++)`):** This loop iterates through the unsorted portion of the array, comparing adjacent elements. The `n - 1 - i` condition is crucial because after `i` passes, the last `i` elements are already sorted and in their correct place, so we don't need to compare them again.
    *   **Comparison and Swap (`if (arr[j] > arr[j + 1])`):** If the current element (`arr[j]`) is greater than the next element (`arr[j + 1]`), they are out of order for an ascending sort.
    *   **Swap Logic:** A temporary variable `temp` is used to facilitate the swap of `arr[j]` and `arr[j + 1]`.
    *   **`swapped = true;`**: If a swap occurs, the `swapped` flag is set to `true`.
    *   **Optimization Break (`if (!swapped) { break; }`):** After the inner loop completes a pass, if `swapped` is still `false`, it means no elements were swapped, and the array is sorted. The `break` statement exits the outer loop early.
*   **`printArray(int[] arr)` Method:** A simple utility to display the contents of the array.
*   **`main(String[] args)` Method:** Demonstrates how to use the `bubbleSort` method with a sample array.

## Complexity Analysis

*   **Time Complexity:**
    *   **Best Case:** $$ O(n) $$ (When the array is already sorted and the optimization flag is used, it performs only one pass.)
    *   **Average Case:** $$ O(n^2) $$
    *   **Worst Case:** $$ O(n^2) $$ (When the array is sorted in reverse order.)
*   **Space Complexity:** $$ O(1) $$ (It's an in-place sorting algorithm, meaning it requires a constant amount of extra space regardless of the input size, only for temporary variables.)

## When to Use Bubble Sort

Bubble Sort is generally **not recommended for large datasets** due to its poor time complexity. However, it can be useful for:

*   **Educational Purposes:** Its simplicity makes it an excellent starting point for understanding sorting algorithms.
*   **Very Small Datasets:** For arrays with only a few elements, the performance difference between Bubble Sort and more efficient algorithms might be negligible.
*   **Detecting Already Sorted Data:** With the optimization, it can quickly confirm if an array is already sorted.

This implementation provides a clear way to apply the Bubble Sort logic in Java.

## Supports

- [[bubble-sort-java-implementation|Bubble Sort Java Implementation]]
