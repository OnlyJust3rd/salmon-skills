---
type: medium
title: Implementing Linear Search in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[linear-search-java-implementation|linear-search-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 3
---
# Implementing Linear Search in Java

This lesson focuses on the practical implementation of the Linear Search algorithm in Java. Linear search is a fundamental searching technique used to find a specific element within a list or array.

## What is Linear Search?

Linear search, also known as sequential search, is the simplest search algorithm. It works by iterating through each element of a collection one by one until the target element is found or the end of the collection is reached.

### How it Works

1.  **Start at the beginning:** The algorithm begins its search at the very first element of the array.
2.  **Compare and move:** It compares the current element with the target value.
    *   If they match, the search is successful, and the index of the element is returned.
    *   If they don't match, the algorithm moves to the next element in the array.
3.  **Repeat until found or end:** This process continues until either the target element is found or all elements in the array have been checked.
4.  **Not found:** If the target element is not found after checking all elements, the algorithm typically returns a special value (like -1) to indicate that the element is not present in the array.

## Java Implementation

Here's how you can implement linear search in Java:

```java
public class LinearSearch {

    /**
     * Performs a linear search on an integer array to find the index of a target element.
     *
     * @param arr    The integer array to search within.
     * @param target The integer element to search for.
     * @return The index of the target element if found, otherwise -1.
     */
    public static int search(int[] arr, int target) {
        // Iterate through each element of the array
        for (int i = 0; i < arr.length; i++) {
            // If the current element matches the target
            if (arr[i] == target) {
                // Return the index of the found element
                return i;
            }
        }
        // If the target element was not found after checking all elements
        return -1;
    }

    public static void main(String[] args) {
        int[] numbers = {5, 12, 3, 8, 1, 9, 4};
        int target1 = 8;
        int target2 = 10;

        int index1 = search(numbers, target1);
        if (index1 != -1) {
            System.out.println("Element " + target1 + " found at index: " + index1); // Output: Element 8 found at index: 3
        } else {
            System.out.println("Element " + target1 + " not found in the array.");
        }

        int index2 = search(numbers, target2);
        if (index2 != -1) {
            System.out.println("Element " + target2 + " found at index: " + index2);
        } else {
            System.out.println("Element " + target2 + " not found in the array."); // Output: Element 10 not found in the array.
        }
    }
}
```

### Breakdown of the Code

*   **`search(int[] arr, int target)` method:**
    *   Takes an integer array `arr` and an integer `target` as input.
    *   Uses a `for` loop to iterate from the first element (index 0) to the last element of the array.
    *   Inside the loop, `if (arr[i] == target)` checks if the current element `arr[i]` is equal to the `target`.
    *   If a match is found, `return i;` immediately exits the method and returns the current index `i`.
    *   If the loop completes without finding a match, `return -1;` is executed, signifying that the element was not found.

*   **`main` method:**
    *   Demonstrates how to use the `search` method.
    *   An example array `numbers` and two target values (`target1`, `target2`) are defined.
    *   The `search` method is called for each target, and the result is printed to the console.

## When to Use Linear Search

Linear search is best suited for:

*   **Small datasets:** When the number of elements in the collection is small, the overhead of more complex algorithms isn't necessary.
*   **Unsorted data:** Linear search works on both sorted and unsorted data. If your data is not sorted and you only need to perform a few searches, linear search is a viable option.
*   **Simplicity:** Its straightforward logic makes it easy to understand and implement.

## Time Complexity

The time complexity of linear search is **$$O(n)$$**. This means that in the worst-case scenario (when the element is at the end of the array or not present at all), the algorithm will have to examine every single element in the array.

## Key Takeaways

*   Linear search checks each element sequentially.
*   It's simple to implement and works on unsorted data.
*   Its performance degrades significantly with larger datasets due to its $$O(n)$$ time complexity.
*   The return value of -1 is a common convention to indicate an element was not found.

## Supports

- [[linear-search-java-implementation|Linear Search Java Implementation]]
