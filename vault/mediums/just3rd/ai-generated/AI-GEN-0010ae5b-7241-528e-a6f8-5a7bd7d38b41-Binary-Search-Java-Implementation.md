---
type: "medium"
title: "Binary Search Algorithm in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/binary-search-java-implementation|Binary Search Java Implementation]]"
---
# Binary Search Algorithm in Java

This lesson focuses on implementing the Binary Search algorithm in Java. Binary Search is a highly efficient searching algorithm crucial for many Java programming tasks.

## Core Idea of Binary Search

Binary Search is a search algorithm that finds the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the algorithm narrows the interval to the lower half. Otherwise, it narrows it to the upper half. This process continues until the value is found or the interval is empty.

The fundamental requirement for Binary Search to work correctly is that the input array **must be sorted**.

## Algorithm Steps

1.  **Start with the entire array** as the search interval.
2.  **Find the middle element** of the current interval.
3.  **Compare the middle element with the target value**:
    *   If the middle element is equal to the target value, the search is successful, and the index of the middle element is returned.
    *   If the target value is **less than** the middle element, discard the right half of the interval and repeat the search in the left half.
    *   If the target value is **greater than** the middle element, discard the left half of the interval and repeat the search in the right half.
4.  **Repeat steps 2 and 3** until the target value is found or the search interval becomes empty (meaning the value is not present in the array).

## Java Implementation

Let's walk through a common Java implementation of Binary Search. We'll use an iterative approach.

```java
public class BinarySearch {

    /**
     * Implements the Binary Search algorithm to find the index of a target value
     * in a sorted array.
     *
     * @param arr The sorted array to search within.
     * @param target The value to search for.
     * @return The index of the target value if found, otherwise -1.
     */
    public static int binarySearch(int[] arr, int target) {
        // Initialize the low and high pointers for the search interval
        int low = 0;
        int high = arr.length - 1;

        // Continue searching as long as the low pointer is less than or equal to the high pointer
        while (low <= high) {
            // Calculate the middle index to avoid potential integer overflow
            // mid = low + (high - low) / 2
            int mid = low + (high - low) / 2;

            // Get the value at the middle index
            int midValue = arr[mid];

            // Check if the middle value is the target
            if (midValue == target) {
                return mid; // Target found, return its index
            }
            // If the target is less than the middle value, search in the left half
            else if (target < midValue) {
                high = mid - 1; // Adjust the high pointer
            }
            // If the target is greater than the middle value, search in the right half
            else { // target > midValue
                low = mid + 1; // Adjust the low pointer
            }
        }

        // If the loop finishes without finding the target, it means the target is not in the array
        return -1; // Target not found
    }

    public static void main(String[] args) {
        int[] sortedArray = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
        int target1 = 23;
        int target2 = 45;

        int index1 = binarySearch(sortedArray, target1);
        if (index1 != -1) {
            System.out.println("Element " + target1 + " found at index: " + index1); // Expected: Element 23 found at index: 5
        } else {
            System.out.println("Element " + target1 + " not found in the array.");
        }

        int index2 = binarySearch(sortedArray, target2);
        if (index2 != -1) {
            System.out.println("Element " + target2 + " found at index: " + index2);
        } else {
            System.out.println("Element " + target2 + " not found in the array."); // Expected: Element 45 not found in the array.
        }
    }
}
```

### How the Code Works:

*   **`low` and `high` pointers**: These variables define the current search space within the array. Initially, `low` points to the first element (index 0) and `high` points to the last element (index `arr.length - 1`).
*   **`while (low <= high)` loop**: This loop continues as long as there's a valid search space. If `low` becomes greater than `high`, it means the search space has been exhausted without finding the target.
*   **`mid = low + (high - low) / 2;`**: This is a robust way to calculate the middle index. It avoids potential integer overflow that could occur with `(low + high) / 2` if `low` and `high` are very large.
*   **Comparisons**: The code compares `arr[mid]` with the `target`.
    *   If they match, the index `mid` is returned.
    *   If `target` is smaller, the search continues in the left half by setting `high = mid - 1`.
    *   If `target` is larger, the search continues in the right half by setting `low = mid + 1`.
*   **Return -1**: If the loop terminates without finding the target, `-1` is returned, indicating that the element is not present.

## Time Complexity

Binary Search has a significantly better time complexity than Linear Search, especially for large datasets.

$$ O(\log n) $$

This logarithmic time complexity means that as the size of the input array ($n$) doubles, the number of operations required to find an element only increases by a constant amount. This makes it extremely efficient for searching through large amounts of data.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/binary-search-java-implementation|Binary Search Java Implementation]]
