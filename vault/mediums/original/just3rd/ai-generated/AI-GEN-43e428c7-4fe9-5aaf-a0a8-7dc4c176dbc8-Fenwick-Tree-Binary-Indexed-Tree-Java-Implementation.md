---
type: medium
title: Fenwick Tree (Binary Indexed Tree) Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[fenwick-tree-binary-indexed-tree-java-implementation|fenwick-tree-binary-indexed-tree-java-implementation]]"
learning-time-in-minutes: 4
---
# Fenwick Tree (Binary Indexed Tree) Java Implementation

This lesson focuses on implementing the Fenwick Tree, also known as a Binary Indexed Tree (BIT), in Java. This data structure is crucial for efficiently handling prefix sum queries and point updates on an array.

## Core Idea: Efficient Prefix Sums and Updates

A Fenwick Tree allows you to perform two main operations very quickly:

1.  **Point Update**: Change the value of an element at a specific index in an array.
2.  **Prefix Sum Query**: Calculate the sum of elements from the beginning of the array up to a given index.

Both operations take logarithmic time complexity, specifically $$ O(\log n) $$, where $$ n $$ is the size of the array. This is significantly better than the linear time complexity ($$ O(n) $$) required for prefix sums in a naive array implementation or the linear time complexity for updates if you were to precompute all prefix sums.

The magic of the Fenwick Tree lies in how it represents prefix sums. Instead of storing the prefix sum directly for each index, it stores sums of specific ranges. The indices are cleverly designed to cover all possible prefix sums by combining a minimal number of these stored ranges.

## How it Works: The Binary Representation Trick

The key to understanding Fenwick Trees is looking at the binary representation of indices. An element at index `i` in the original array contributes to several nodes in the Fenwick Tree. Conversely, a node at index `i` in the Fenwick Tree stores the sum of elements in a specific range of the original array. This range is determined by the **least significant bit (LSB)** of `i`.

The LSB of a number `x` can be found using the bitwise operation: `x & (-x)`. For example:
*   LSB of 6 (binary `0110`) is `0010` (which is 2).
*   LSB of 8 (binary `1000`) is `1000` (which is 8).

### 1. Updating a Value

When you update a value at index `idx` (in the original array, 1-based indexing is often used for Fenwick Trees for simplicity) by adding `delta`, you need to update all Fenwick Tree nodes that are "responsible" for this index. These are the nodes whose range includes `idx`.

The indices of these responsible nodes are found by repeatedly adding the LSB of the current index to itself, until you go beyond the size of the tree.

If the current index is `i`, the next index to update is `i + (i & -i)`.

### 2. Querying a Prefix Sum

To find the prefix sum up to index `idx`, you need to sum up the values stored in specific Fenwick Tree nodes. These are the nodes that collectively cover the range from 1 to `idx`.

The indices of these nodes are found by repeatedly subtracting the LSB of the current index from itself, until the index becomes 0.

If the current index is `i`, the next index to sum from is `i - (i & -i)`.

## Java Implementation

Let's implement a Fenwick Tree in Java. We'll use 1-based indexing for the Fenwick Tree array, as it simplifies the bitwise operations. The original array can be 0-based, and we'll adjust for it.

```java
public class FenwickTree {

    private int[] bit; // Binary Indexed Tree array
    private int size;  // Size of the original array (maximum index supported)

    /**
     * Constructs a Fenwick Tree for an array of a given size.
     * The BIT will be 1-indexed, so its size is size + 1.
     * @param size The size of the original array (0-indexed).
     */
    public FenwickTree(int size) {
        this.size = size;
        // BIT array is 1-indexed, so we need size + 1 elements.
        // All values are initialized to 0 by default.
        this.bit = new int[size + 1];
    }

    /**
     * Updates the value at a given index in the original array.
     * This adds 'delta' to the element at index 'idx'.
     *
     * @param idx   The 0-indexed index in the original array to update.
     * @param delta The value to add to the element at 'idx'.
     */
    public void update(int idx, int delta) {
        // Convert to 1-based index for BIT operations
        idx++;
        
        // Traverse all ancestors of the BIT node responsible for idx
        while (idx <= size) {
            bit[idx] += delta;
            // Move to the next responsible node by adding the LSB
            idx += idx & (-idx);
        }
    }

    /**
     * Queries the prefix sum from index 0 up to (and including) 'idx'
     * in the original array.
     *
     * @param idx The 0-indexed upper bound of the prefix sum.
     * @return The sum of elements from index 0 to 'idx'.
     */
    public int query(int idx) {
        // Convert to 1-based index for BIT operations
        idx++;
        
        int sum = 0;
        // Traverse all nodes that contribute to the prefix sum up to idx
        while (idx > 0) {
            sum += bit[idx];
            // Move to the parent node by subtracting the LSB
            idx -= idx & (-idx);
        }
        return sum;
    }

    /**
     * Queries the sum of elements in a range [left, right] (inclusive)
     * in the original array.
     *
     * @param left  The 0-indexed start of the range.
     * @param right The 0-indexed end of the range.
     * @return The sum of elements from index 'left' to 'right'.
     */
    public int queryRange(int left, int right) {
        if (left > right) {
            throw new IllegalArgumentException("Left index cannot be greater than right index.");
        }
        // Sum(left, right) = Sum(0, right) - Sum(0, left-1)
        return query(right) - query(left - 1);
    }

    // --- Example Usage ---
    public static void main(String[] args) {
        int[] arr = {1, 7, 3, 0, 5, 8, 3, 2, 6, 2, 1, 1, 4, 5};
        int n = arr.length;
        
        FenwickTree ft = new FenwickTree(n);

        // Initialize Fenwick Tree with array elements
        for (int i = 0; i < n; i++) {
            ft.update(i, arr[i]);
        }

        System.out.println("Original array: " + java.util.Arrays.toString(arr));

        // Query prefix sum up to index 5 (elements arr[0]..arr[5])
        // Expected: 1 + 7 + 3 + 0 + 5 + 8 = 24
        System.out.println("Prefix sum up to index 5: " + ft.query(5)); // Output: 24

        // Query sum for range [3, 7] (elements arr[3]..arr[7])
        // Expected: 0 + 5 + 8 + 3 + 2 = 18
        System.out.println("Sum for range [3, 7]: " + ft.queryRange(3, 7)); // Output: 18

        // Update element at index 4 from 5 to 10 (delta = 5)
        int updateIndex = 4;
        int newValue = 10;
        int delta = newValue - arr[updateIndex];
        arr[updateIndex] = newValue; // Update the original array conceptually
        ft.update(updateIndex, delta);
        System.out.println("\nUpdated element at index " + updateIndex + " to " + newValue);
        System.out.println("Updated array (conceptually): " + java.util.Arrays.toString(arr));

        // Query prefix sum up to index 5 again
        // Expected: 1 + 7 + 3 + 0 + 10 + 8 = 29
        System.out.println("Prefix sum up to index 5 after update: " + ft.query(5)); // Output: 29

        // Query sum for range [3, 7] again
        // Expected: 0 + 10 + 8 + 3 + 2 = 23
        System.out.println("Sum for range [3, 7] after update: " + ft.queryRange(3, 7)); // Output: 23
    }
}
```

### Explanation of the Code

*   **`bit` array**: This is our Fenwick Tree. It's 1-indexed, meaning `bit[1]` corresponds to information derived from the original array's first elements, `bit[2]` from a range, and so on. The size is `size + 1` to accommodate this.
*   **`size`**: Stores the effective size of the original array (e.g., if the original array has 10 elements, `size` is 10, and `bit` will have 11 elements).
*   **`FenwickTree(int size)` constructor**: Initializes the `bit` array. All values are automatically set to 0.
*   **`update(int idx, int delta)`**:
    *   Takes a 0-indexed `idx` from the original array and the `delta` to add.
    *   Converts `idx` to `idx + 1` for 1-based BIT indexing.
    *   The `while` loop iterates through the BIT nodes that need to be updated. `idx += idx & (-idx)` finds the next parent node in the Fenwick Tree structure.
*   **`query(int idx)`**:
    *   Takes a 0-indexed `idx` for the prefix sum.
    *   Converts `idx` to `idx + 1`.
    *   The `while` loop iterates downwards, summing values from BIT nodes that contribute to the prefix sum. `idx -= idx & (-idx)` moves to the next contributing parent node.
*   **`queryRange(int left, int right)`**: A helper method to calculate sums for arbitrary ranges using two prefix sum queries: `query(right) - query(left - 1)`.

## When to Use Fenwick Trees

Fenwick Trees are ideal when you have a static or frequently updated array and need to perform:
*   **Many prefix sum queries and point updates.**
*   **Range sum queries and point updates.**

If you only need to perform prefix sum queries on a static array, a simple prefix sum array would suffice. If you need range updates and point queries, other structures like Segment Trees might be more suitable.

By implementing and understanding the Fenwick Tree, you gain a powerful tool for optimizing array-based operations common in competitive programming and various algorithmic problems.

## Supports

- [[fenwick-tree-binary-indexed-tree-java-implementation|Fenwick Tree (Binary Indexed Tree) Java Implementation]]
