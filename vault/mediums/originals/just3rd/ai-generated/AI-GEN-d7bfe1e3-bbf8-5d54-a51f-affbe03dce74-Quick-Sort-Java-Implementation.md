---
type: medium
title: Quick Sort Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[quick-sort-java-implementation|quick-sort-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Quick Sort Java Implementation

This lesson focuses on implementing the Quick Sort algorithm in Java. Quick Sort is an efficient, comparison-based sorting algorithm known for its average-case performance. Understanding its implementation is a key step in mastering various sorting techniques in Java.

## Core Idea of Quick Sort

Quick Sort follows a divide-and-conquer strategy. The basic steps are:

1.  **Divide:** Pick an element from the array. This is called the "pivot."
2.  **Conquer:** Partition the array such that all elements smaller than the pivot are moved to its left, and all elements greater than the pivot are moved to its right. The pivot is now in its final sorted position.
3.  **Combine:** Recursively apply the Quick Sort algorithm to the sub-array of elements to the left of the pivot and the sub-array of elements to the right of the pivot.

The base case for the recursion is when a sub-array has zero or one element, in which case it is already sorted.

## Implementing Quick Sort in Java

We'll break down the implementation into two main parts:
1.  The `partition` method, which rearranges the array around the pivot.
2.  The `quickSort` method, which orchestrates the recursive calls.

### 1. The `partition` Method

The `partition` method takes an array, a low index, and a high index as input. It selects a pivot (often the last element for simplicity), and then rearranges the elements.

```java
class QuickSort {

    // This method takes last element as pivot, places
    // the pivot element at its correct position in sorted
    // array, and places all smaller (smaller than pivot)
    // to left of pivot and all greater elements to right
    // of pivot
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1); // Index of smaller element

        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                i++;

                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // Swap arr[i+1] and arr[high] (or pivot)
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
    /* The main function that implements QuickSort
      arr[] --> Array to be sorted,
      low  --> Starting index,
      high  --> Ending index */
    void quickSort(int arr[], int low, int high) {
        if (low < high) {
            /* pi is partitioning index, arr[pi] is now
               at right place */
            int pi = partition(arr, low, high);

            // Separately sort elements before partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    /* A utility function to print array of size n */
    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver method to test above
    public static void main(String args[]) {
        int arr[] = {10, 7, 8, 9, 1, 5};
        int n = arr.length;

        QuickSort qs = new QuickSort();
        qs.quickSort(arr, 0, n - 1);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}
```

### How `partition` Works (with pivot as the last element)

*   **Pivot Selection:** We choose the last element of the sub-array (`arr[high]`) as our pivot.
*   **Pointer `i`:** We maintain an index `i` that tracks the boundary between elements smaller than or equal to the pivot and elements greater than the pivot. It starts at `low - 1`.
*   **Iteration:** We iterate through the sub-array from `low` up to (but not including) `high` (`j` loop).
    *   If `arr[j]` is less than or equal to the `pivot`, we increment `i` and swap `arr[i]` with `arr[j]`. This moves the smaller element to the left side of our partition.
*   **Final Pivot Placement:** After the loop finishes, all elements from `low` to `i` are less than or equal to the pivot. The element at `i + 1` is the first element that is greater than the pivot (or the pivot itself if all elements were smaller). We then swap `arr[i + 1]` with the pivot (`arr[high]`) to place the pivot in its correct sorted position.
*   **Return Partition Index:** The method returns `i + 1`, which is the index of the pivot after partitioning.

### 2. The `quickSort` Method

This is the recursive heart of the algorithm.

*   **Base Case:** `if (low < high)`: This condition checks if there's at least one element in the sub-array. If `low` is not less than `high`, the sub-array has 0 or 1 element and is already sorted, so the recursion stops.
*   **Partitioning:** `int pi = partition(arr, low, high);`: We call the `partition` method to place the pivot correctly and get its index (`pi`).
*   **Recursive Calls:**
    *   `quickSort(arr, low, pi - 1);`: Recursively sort the left sub-array (elements before the pivot).
    *   `quickSort(arr, pi + 1, high);`: Recursively sort the right sub-array (elements after the pivot).

## Time and Space Complexity

*   **Time Complexity:**
    *   **Best Case:** $$ O(n \log n) $$ (when the pivot always divides the array into roughly equal halves).
    *   **Average Case:** $$ O(n \log n) $$
    *   **Worst Case:** $$ O(n^2) $$ (occurs when the pivot selection consistently leads to highly unbalanced partitions, e.g., if the array is already sorted and the pivot is always the first or last element).
*   **Space Complexity:** $$ O(\log n) $$ on average due to the recursion stack depth. In the worst case, it can be $$ O(n) $$.

## Key Considerations and Potential Pitfalls

*   **Pivot Selection:** The choice of pivot significantly impacts performance. A naive choice (like always the last element) can lead to worst-case behavior on sorted or reverse-sorted arrays. More advanced strategies (like picking a random element or median-of-three) can mitigate this.
*   **In-place Sorting:** Quick Sort is an in-place sorting algorithm, meaning it requires minimal extra memory (primarily for the recursion stack).
*   **Not Stable:** Quick Sort is generally not a stable sort. This means that if two elements have the same value, their relative order might change after sorting.

## Supports

- [[quick-sort-java-implementation|Quick Sort Java Implementation]]
