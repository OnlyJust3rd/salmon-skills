---
type: medium
title: Heap Sort in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[heap-sort-java-implementation|heap-sort-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Heap Sort in Java

Heap Sort is an efficient sorting algorithm that leverages the heap data structure. It's a comparison-based sort, meaning it works by comparing elements. Its average and worst-case time complexity is $$O(n \log n)$$, making it a good choice for larger datasets.

## Core Idea

Heap Sort works in two main phases:

1.  **Build a Max Heap:** The first step is to arrange the input array into a "max heap." In a max heap, the parent node is always greater than or equal to its children. This means the largest element will always be at the root of the heap (the first element in the array).
2.  **Extract Elements:** Once the max heap is built, we repeatedly extract the maximum element (the root) and place it at the end of the sorted portion of the array. After extracting the root, the heap property needs to be restored, and the process continues until the heap is empty.

## How it Works (Heapify Process)

The core operation in Heap Sort is "heapify." This function ensures that a subtree rooted at a given index `i` satisfies the max heap property.

### `heapify(int arr[], int n, int i)`

*   `arr[]`: The array being sorted.
*   `n`: The size of the heap (or the portion of the array currently considered a heap).
*   `i`: The index of the root of the subtree to heapify.

The `heapify` function does the following:

1.  It assumes the current node `i` is the largest.
2.  It calculates the indices of the left child (`2*i + 1`) and the right child (`2*i + 2`).
3.  It compares the current node with its left and right children. If a child is larger, it becomes the new `largest`.
4.  If the `largest` is not the current node `i`, it swaps `arr[i]` with `arr[largest]`.
5.  Crucially, after the swap, the subtree rooted at the new `largest` index might violate the heap property. So, `heapify` is recursively called on that subtree.

### Building the Max Heap

To build the initial max heap, we start from the last non-leaf node and call `heapify` on it, working our way up to the root. The last non-leaf node in an array of size `n` is at index `(n/2) - 1`.

### Sorting Phase

After the max heap is built:

1.  Swap the root element (the largest element) with the last element of the heap.
2.  Reduce the size of the heap by one (effectively excluding the largest element, which is now in its sorted position).
3.  Call `heapify` on the root (index 0) to restore the max heap property for the remaining elements.
4.  Repeat steps 1-3 until the heap size is 1.

## Java Implementation

Here's a Java implementation of Heap Sort:

```java
public class HeapSort {

    public void sort(int arr[]) {
        int n = arr.length;

        // 1. Build a max heap
        // Start from the last non-leaf node and heapify downwards.
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // 2. Extract elements from heap one by one
        for (int i = n - 1; i > 0; i--) {
            // Move current root (maximum element) to end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // Call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }

    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap.
    void heapify(int arr[], int n, int i) {
        int largest = i; // Initialize largest as root
        int l = 2 * i + 1; // left child
        int r = 2 * i + 2; // right child

        // If left child is larger than root
        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        // If largest is not root
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }

    /* A utility function to print array of size n */
    static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Driver program
    public static void main(String args[]) {
        int arr[] = {12, 11, 13, 5, 6, 7};
        System.out.println("Given array is:");
        printArray(arr);

        HeapSort hs = new HeapSort();
        hs.sort(arr);

        System.out.println("Sorted array is:");
        printArray(arr);
    }
}
```

## Step-by-Step Example

Let's trace Heap Sort on the array: `{4, 10, 3, 5, 1}`

### Phase 1: Build Max Heap

Initial array: `{4, 10, 3, 5, 1}` (n=5)
Last non-leaf node is at index `(5/2) - 1 = 2 - 1 = 1`.

1.  **`heapify(arr, 5, 1)` (node 10):**
    *   Children of 10 are 5 (index 3) and 1 (index 4).
    *   10 is greater than 5 and 1. No swap. Heap property maintained.
    *   Array: `{4, 10, 3, 5, 1}`

2.  **`heapify(arr, 5, 0)` (node 4):**
    *   Left child is 10 (index 1). Right child is 3 (index 2).
    *   10 is greater than 4. `largest` becomes 1.
    *   Swap `arr[0]` (4) and `arr[1]` (10).
    *   Array: `{10, 4, 3, 5, 1}`
    *   Recursively call `heapify(arr, 5, 1)` on the new subtree at index 1.
        *   Children of 4 (now at index 1) are 5 (index 3) and 1 (index 4).
        *   5 is greater than 4. `largest` becomes 3.
        *   Swap `arr[1]` (4) and `arr[3]` (5).
        *   Array: `{10, 5, 3, 4, 1}`
        *   Recursively call `heapify(arr, 5, 3)`. Node 4 is a leaf. No swap.
    *   Max Heap built: `{10, 5, 3, 4, 1}`

### Phase 2: Extract Elements

1.  **i = 4:**
    *   Swap `arr[0]` (10) with `arr[4]` (1).
    *   Array: `{1, 5, 3, 4, 10}`. `10` is now in its sorted place.
    *   Reduce heap size to 4. Call `heapify(arr, 4, 0)` (node 1).
        *   Children of 1 are 5 (index 1) and 3 (index 2).
        *   5 is largest. Swap `arr[0]` (1) and `arr[1]` (5).
        *   Array: `{5, 1, 3, 4, 10}`
        *   Recursively call `heapify(arr, 4, 1)` (node 1). Children are 4 (index 3).
        *   4 is largest. Swap `arr[1]` (1) and `arr[3]` (4).
        *   Array: `{5, 4, 3, 1, 10}`
        *   Heap: `{5, 4, 3, 1}`

2.  **i = 3:**
    *   Swap `arr[0]` (5) with `arr[3]` (1).
    *   Array: `{1, 4, 3, 5, 10}`. `5` is now in place.
    *   Reduce heap size to 3. Call `heapify(arr, 3, 0)` (node 1).
        *   Children of 1 are 4 (index 1) and 3 (index 2).
        *   4 is largest. Swap `arr[0]` (1) and `arr[1]` (4).
        *   Array: `{4, 1, 3, 5, 10}`
        *   Recursively call `heapify(arr, 3, 1)` (node 1). Node 1 is a leaf in this heap size.
        *   Heap: `{4, 1, 3}`

3.  **i = 2:**
    *   Swap `arr[0]` (4) with `arr[2]` (3).
    *   Array: `{3, 1, 4, 5, 10}`. `4` is now in place.
    *   Reduce heap size to 2. Call `heapify(arr, 2, 0)` (node 3).
        *   Left child is 1 (index 1). No right child.
        *   3 is larger than 1. No swap.
        *   Heap: `{3, 1}`

4.  **i = 1:**
    *   Swap `arr[0]` (3) with `arr[1]` (1).
    *   Array: `{1, 3, 4, 5, 10}`. `3` is now in place.
    *   Reduce heap size to 1. Call `heapify(arr, 1, 0)` (node 1).
        *   Heap size is 1. Heap property is satisfied.
    *   Heap: `{1}`

The array is now sorted: `{1, 3, 4, 5, 10}`.

## When to Use Heap Sort

*   When you need a guaranteed $$O(n \log n)$$ time complexity, even in the worst case.
*   When you need an in-place sorting algorithm (it requires minimal extra space).
*   It's particularly useful in scenarios where you need to efficiently find and extract the k-largest or k-smallest elements from a collection.

## Supports

- [[heap-sort-java-implementation|Heap Sort Java Implementation]]
