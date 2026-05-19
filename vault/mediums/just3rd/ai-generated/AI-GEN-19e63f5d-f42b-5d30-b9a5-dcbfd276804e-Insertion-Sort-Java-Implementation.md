---
type: "medium"
title: "Insertion Sort: Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/insertion-sort-java-implementation|Insertion Sort Java Implementation]]"
---
# Insertion Sort: Java Implementation

This lesson focuses on coding the Insertion Sort algorithm in Java, a practical application within the broader skill of implementing sorting algorithms.

## Core Idea of Insertion Sort

Insertion Sort works by building a sorted array one item at a time. It iterates through an input array and for each element, it finds the correct position within the *already sorted* portion of the array and inserts it there.

Think of it like sorting a hand of playing cards. You pick up cards one by one and insert each new card into its correct position in the hand you're holding.

## How Insertion Sort Works (Step-by-Step)

Let's break down the process with an example array: `[5, 2, 4, 6, 1, 3]`

1.  **Start with the second element** (index 1). The first element (index 0) is considered the initial "sorted" portion.
    *   Array: `[5, | 2, 4, 6, 1, 3]` (The `|` separates the sorted and unsorted parts)
    *   Current element to insert: `2`
    *   Compare `2` with the element before it (`5`). Since `2 < 5`, `5` needs to shift to the right to make space for `2`.
    *   Array becomes: `[2, 5, | 4, 6, 1, 3]`

2.  **Move to the next element** (index 2), which is `4`.
    *   Array: `[2, 5, | 4, 6, 1, 3]`
    *   Current element to insert: `4`
    *   Compare `4` with the element before it (`5`). Since `4 < 5`, shift `5` to the right.
    *   Array becomes: `[2, | 5, 4, 6, 1, 3]` (Oops, error in manual trace, should be `[2, 5, 4, | 6, 1, 3]`. Correcting: After shifting `5`, we compare `4` with `2`. Since `4 > 2`, `4` stays in its current position relative to `2`. The sorted portion is `[2, 5]`. Now `4` needs to be inserted into `[2, 5]`. Compare `4` with `5`. `4 < 5`, so shift `5`. Array: `[2, 5, 4, | 6, 1, 3]`. Now compare `4` with `2`. `4 > 2`. So `4` goes between `2` and `5`.
    *   Corrected Array: `[2, 4, 5, | 6, 1, 3]`

3.  **Move to the next element** (index 3), which is `6`.
    *   Array: `[2, 4, 5, | 6, 1, 3]`
    *   Current element to insert: `6`
    *   Compare `6` with `5`. `6 > 5`, so `6` is already in its correct position relative to the sorted part.
    *   Array remains: `[2, 4, 5, 6, | 1, 3]`

4.  **Move to the next element** (index 4), which is `1`.
    *   Array: `[2, 4, 5, 6, | 1, 3]`
    *   Current element to insert: `1`
    *   Compare `1` with `6`. `1 < 6`, shift `6`. Array: `[2, 4, 5, | 6, 1, 3]`
    *   Compare `1` with `5`. `1 < 5`, shift `5`. Array: `[2, 4, | 5, 6, 1, 3]`
    *   Compare `1` with `4`. `1 < 4`, shift `4`. Array: `[2, | 4, 5, 6, 1, 3]`
    *   Compare `1` with `2`. `1 < 2`, shift `2`. Array: `[| 2, 4, 5, 6, 1, 3]`
    *   We've reached the beginning of the array. Insert `1` at the very first position.
    *   Array becomes: `[1, 2, 4, 5, 6, | 3]`

5.  **Move to the last element** (index 5), which is `3`.
    *   Array: `[1, 2, 4, 5, 6, | 3]`
    *   Current element to insert: `3`
    *   Compare `3` with `6`. `3 < 6`, shift `6`. Array: `[1, 2, 4, 5, | 6, 3]`
    *   Compare `3` with `5`. `3 < 5`, shift `5`. Array: `[1, 2, 4, | 5, 6, 3]`
    *   Compare `3` with `4`. `3 < 4`, shift `4`. Array: `[1, 2, | 4, 5, 6, 3]`
    *   Compare `3` with `2`. `3 > 2`. Stop shifting. Insert `3` after `2`.
    *   Array becomes: `[1, 2, 3, 4, 5, 6]`

The array is now sorted.

## Java Implementation

Here's how you can implement Insertion Sort in Java:

```java
public class InsertionSort {

    public static void insertionSort(int[] arr) {
        // Start from the second element, as the first element is considered sorted
        for (int i = 1; i < arr.length; i++) {
            int currentElement = arr[i]; // The element to be inserted into the sorted portion
            int j = i - 1; // Index of the last element in the sorted portion

            // Move elements of arr[0..i-1], that are greater than currentElement,
            // to one position ahead of their current position
            while (j >= 0 && arr[j] > currentElement) {
                arr[j + 1] = arr[j]; // Shift element to the right
                j--;
            }
            arr[j + 1] = currentElement; // Place currentElement at its correct position
        }
    }

    // Helper method to print the array (for testing)
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] data = {5, 2, 4, 6, 1, 3};
        System.out.println("Original array:");
        printArray(data);

        insertionSort(data);

        System.out.println("Sorted array:");
        printArray(data);
    }
}
```

### Code Breakdown:

*   **Outer Loop (`for (int i = 1; i < arr.length; i++)`)**: This loop iterates through the array starting from the second element. `i` represents the index of the element we're currently trying to place in the sorted portion.
*   **`int currentElement = arr[i];`**: We store the element that needs to be inserted.
*   **`int j = i - 1;`**: `j` is the index pointing to the last element of the sorted subarray.
*   **Inner `while` Loop (`while (j >= 0 && arr[j] > currentElement)`)**: This is the core of the insertion process.
    *   It checks if `j` is still a valid index within the sorted portion (`j >= 0`).
    *   It also checks if the element at `arr[j]` is greater than `currentElement`. If it is, `arr[j]` needs to be shifted one position to the right to make space for `currentElement`.
*   **`arr[j + 1] = arr[j];`**: This line performs the shifting. The element at `arr[j]` is moved to `arr[j+1]`.
*   **`j--;`**: We move `j` one step to the left to compare `currentElement` with the next element in the sorted portion.
*   **`arr[j + 1] = currentElement;`**: Once the `while` loop terminates (either `j` becomes negative or `arr[j]` is not greater than `currentElement`), `j+1` points to the correct position where `currentElement` should be inserted.

## When to Use Insertion Sort

Insertion Sort is generally efficient for:

*   **Small datasets**: For very small arrays, the overhead of more complex algorithms like QuickSort or MergeSort can be greater.
*   **Nearly sorted datasets**: If the input array is already mostly sorted, Insertion Sort performs very well, approaching linear time complexity.
*   **Online sorting**: It can sort elements as they are received, without needing to have the entire dataset upfront.

## Time and Space Complexity

*   **Time Complexity**:
    *   Best Case: $$O(n)$$ (when the array is already sorted)
    *   Average Case: $$O(n^2)$$
    *   Worst Case: $$O(n^2)$$ (when the array is sorted in reverse order)
*   **Space Complexity**: $$O(1)$$ (It sorts in-place, meaning it doesn't require significant extra memory).

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/insertion-sort-java-implementation|Insertion Sort Java Implementation]]
