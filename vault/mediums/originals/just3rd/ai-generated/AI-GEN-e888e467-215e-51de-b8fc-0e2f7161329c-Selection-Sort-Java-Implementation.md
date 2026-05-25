---
type: medium
title: Selection Sort in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[selection-sort-java-implementation|selection-sort-java-implementation]]"
learning-time-in-minutes: 4
---
# Selection Sort in Java

Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the list and putting it at the beginning. This process is repeated until the entire list is sorted.

## Core Idea

The fundamental principle behind Selection Sort is to divide the array into two parts: a sorted sublist which is built up from left to right at the front of the array, and an unsorted sublist that occupies the remaining portion of the array.

Initially, the sorted sublist is empty. The algorithm proceeds by finding the smallest element in the unsorted sublist, swapping it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.

## How it Works (Step-by-Step)

Let's illustrate with an example array: `[64, 25, 12, 22, 11]`

**Pass 1:**
1.  Start with the entire array as the unsorted part: `[64, 25, 12, 22, 11]`.
2.  Find the minimum element in this unsorted part. The minimum is `11` at index 4.
3.  Swap the minimum element (`11`) with the first element of the unsorted part (`64` at index 0).
4.  The array becomes: `[11, 25, 12, 22, 64]`.
5.  The sorted part is now `[11]`, and the unsorted part is `[25, 12, 22, 64]`.

**Pass 2:**
1.  Consider the unsorted part: `[25, 12, 22, 64]`. The first element of this unsorted part is `25` (at index 1 of the original array).
2.  Find the minimum element in `[25, 12, 22, 64]`. The minimum is `12` at index 2.
3.  Swap the minimum element (`12`) with the first element of the unsorted part (`25`).
4.  The array becomes: `[11, 12, 25, 22, 64]`.
5.  The sorted part is now `[11, 12]`, and the unsorted part is `[25, 22, 64]`.

**Pass 3:**
1.  Consider the unsorted part: `[25, 22, 64]`. The first element is `25` (at index 2).
2.  Find the minimum element in `[25, 22, 64]`. The minimum is `22` at index 3.
3.  Swap `22` with `25`.
4.  The array becomes: `[11, 12, 22, 25, 64]`.
5.  The sorted part is now `[11, 12, 22]`, and the unsorted part is `[25, 64]`.

**Pass 4:**
1.  Consider the unsorted part: `[25, 64]`. The first element is `25` (at index 3).
2.  Find the minimum element in `[25, 64]`. The minimum is `25` at index 3.
3.  Swap `25` with `25` (no change).
4.  The array remains: `[11, 12, 22, 25, 64]`.
5.  The sorted part is now `[11, 12, 22, 25]`, and the unsorted part is `[64]`.

**Pass 5:**
1.  The unsorted part has only one element `[64]`. The array is now fully sorted.

## Java Implementation

Here's a Java code snippet demonstrating the Selection Sort algorithm:

```java
public class SelectionSort {

    public static void selectionSort(int[] arr) {
        int n = arr.length;

        // Traverse through all array elements
        for (int i = 0; i < n - 1; i++) {
            // Find the minimum element in unsorted array
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            // of the unsorted part
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    // Helper method to print the array
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] data = {64, 25, 12, 22, 11};
        System.out.println("Original array:");
        printArray(data);

        selectionSort(data);

        System.out.println("Sorted array:");
        printArray(data);
    }
}
```

## Code Breakdown

*   **`selectionSort(int[] arr)` method:**
    *   `n = arr.length`: Gets the total number of elements in the array.
    *   **Outer loop (`for (int i = 0; i < n - 1; i++)`)**: This loop iterates `n-1` times. In each iteration `i`, we ensure that the element at index `i` is correctly placed (i.e., it's the `i`-th smallest element). We only need to go up to `n-1` because when `n-1` elements are in their correct positions, the last element must also be in its correct position.
    *   **`minIndex = i`**: Initializes `minIndex` to the current position `i`. This assumes that the element at `i` is the smallest for now.
    *   **Inner loop (`for (int j = i + 1; j < n; j++)`)**: This loop scans the unsorted part of the array (from `i+1` to the end) to find the actual minimum element.
    *   **`if (arr[j] < arr[minIndex]) { minIndex = j; }`**: If a smaller element is found at index `j`, `minIndex` is updated to `j`.
    *   **Swapping**: After the inner loop completes, `minIndex` holds the index of the smallest element in the unsorted portion. The code then swaps the element at `minIndex` with the element at the current outer loop index `i`. This places the smallest element found in its correct sorted position.

*   **`printArray(int[] arr)` method:** A utility method to display the contents of the array.

*   **`main` method:** Demonstrates how to use the `selectionSort` method with a sample array.

## Time and Space Complexity

*   **Time Complexity**: $$O(n^2)$$. This is because there are two nested loops. The outer loop runs `n-1` times, and the inner loop runs approximately `n` times in the worst case for each outer loop iteration.
*   **Space Complexity**: $$O(1)$$. Selection Sort is an in-place sorting algorithm, meaning it requires a constant amount of extra memory regardless of the input size.

## When to Use Selection Sort

Selection Sort is generally not preferred for large datasets due to its quadratic time complexity. However, it can be useful in specific scenarios:

*   **Small datasets**: For very small arrays, the overhead of more complex algorithms might outweigh the benefits.
*   **Minimizing writes**: If writing to memory is a costly operation (e.g., on flash memory), Selection Sort can be advantageous because it performs a maximum of `n-1` swaps, which is fewer than some other algorithms.

## Supports

- [[selection-sort-java-implementation|Selection Sort Java Implementation]]
