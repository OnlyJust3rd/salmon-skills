---
type: "medium"
title: "Merge Sort Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/merge-sort-java-implementation|Merge Sort Java Implementation]]"
---
# Merge Sort Java Implementation

Merge Sort is a highly efficient, comparison-based sorting algorithm. It follows the **divide and conquer** paradigm. This means it breaks down a problem into smaller subproblems of the same type until they become simple enough to be solved directly. Then, it combines the solutions to these subproblems to solve the original problem.

## Core Idea

Merge Sort works by:
1.  **Divide:** If the list has more than one element, split it into two roughly equal halves.
2.  **Conquer:** Recursively sort the two sublists.
3.  **Combine:** Merge the two sorted sublists to produce a single sorted list.

The crucial part is the **merge** operation, which takes two already sorted lists and combines them into a single sorted list.

## How the Merge Operation Works

Imagine you have two sorted lists, `left` and `right`. To merge them into a new sorted list `result`:

*   You use three pointers: one for `left` (let's call it `i`), one for `right` (let's call it `j`), and one for `result` (let's call it `k`).
*   Initially, `i`, `j`, and `k` are all at the beginning (index 0) of their respective lists.
*   Compare the elements at `left[i]` and `right[j]`.
*   Copy the smaller of the two elements into `result[k]`.
*   Increment the pointer of the list from which the element was copied and increment `k`.
*   Repeat this process until one of the sublists is exhausted.
*   Once one list is empty, copy the remaining elements from the other list into `result`.

## Java Implementation

Let's break down the Java implementation into two main parts: the `mergeSort` function and the `merge` helper function.

### The `merge` Helper Function

This function is responsible for merging two sorted subarrays.

```java
class MergeSort {

    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    void merge(int arr[], int l, int m, int r) {
        // Find sizes of two subarrays to be merged
        int n1 = m - l + 1;
        int n2 = r - m;

        // Create temp arrays
        int L[] = new int[n1];
        int R[] = new int[n2];

        // Copy data to temp arrays
        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        // Merge the temp arrays

        // Initial indexes of first and second subarrays
        int i = 0, j = 0;

        // Initial index of merged subarray array
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements of L[] if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy remaining elements of R[] if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    // Main function that sorts arr[l..r] using merge()
    void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            // Find the middle point
            int m = l + (r - l) / 2; // Avoids overflow for large l and r

            // Sort first and second halves
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            // Merge the sorted halves
            merge(arr, l, m, r);
        }
    }

    // Utility function to print array
    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    // Driver method
    public static void main(String[] args) {
        int arr[] = { 12, 11, 13, 5, 6, 7 };
        System.out.println("Given Array");
        printArray(arr);

        MergeSort ob = new MergeSort();
        ob.mergeSort(arr, 0, arr.length - 1);

        System.out.println("\nSorted Array");
        printArray(arr);
    }
}
```

### Explanation

1.  **`merge(int arr[], int l, int m, int r)`**:
    *   Takes the array `arr` and the indices `l` (left boundary), `m` (middle), and `r` (right boundary) of the subarrays to be merged.
    *   It creates two temporary arrays, `L` and `R`, to hold the elements of the two subarrays `arr[l..m]` and `arr[m+1..r]`.
    *   It then iterates through `L` and `R`, comparing elements and placing the smaller one back into the original array `arr` at the correct position.
    *   Finally, it copies any remaining elements from `L` or `R` if one of them is exhausted before the other.

2.  **`mergeSort(int arr[], int l, int r)`**:
    *   This is the recursive function.
    *   The base case for the recursion is `l < r`. If `l` is not less than `r`, it means the subarray has 0 or 1 element, which is already sorted.
    *   It calculates the middle index `m`. The expression `l + (r - l) / 2` is used to prevent potential integer overflow that could occur with `(l + r) / 2` if `l` and `r` are very large.
    *   It recursively calls `mergeSort` on the left half (`arr[l..m]`) and the right half (`arr[m+1..r]`).
    *   Once both halves are sorted, it calls `merge` to combine them into a single sorted subarray.

## Complexity Analysis

*   **Time Complexity**: $$O(n \log n)$$ in all cases (best, average, and worst). This is because the array is consistently divided into halves, and the merge operation takes linear time.
*   **Space Complexity**: $$O(n)$$. This is due to the temporary arrays used in the `merge` function.

## When to Use Merge Sort

Merge Sort is a good choice when:

*   You need a stable sort (maintains the relative order of equal elements).
*   You need a guaranteed $$O(n \log n)$$ time complexity.
*   The data is too large to fit into memory (external sorting).

It might be less ideal for very small datasets where simpler algorithms like Insertion Sort might have less overhead.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/merge-sort-java-implementation|Merge Sort Java Implementation]]
