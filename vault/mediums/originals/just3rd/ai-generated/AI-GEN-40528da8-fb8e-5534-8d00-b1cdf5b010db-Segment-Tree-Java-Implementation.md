---
type: medium
title: Segment Tree Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[segment-tree-java-implementation|segment-tree-java-implementation]]"
learning-time-in-minutes: 4
---
# Segment Tree Java Implementation

This lesson focuses on implementing the Segment Tree data structure in Java. This is a key step in mastering various tree algorithms, including range queries and updates.

## What is a Segment Tree?

A Segment Tree is a tree data structure used for storing information about intervals, or segments. It allows for efficient querying of information about ranges (e.g., sum, minimum, maximum of elements in a given range) and efficient updating of individual elements.

Each node in a segment tree represents an interval. The root node represents the entire interval of the input array. Each non-leaf node has two children, representing the left and right halves of its interval. Leaf nodes represent individual elements of the input array.

## When to Use a Segment Tree

Segment Trees are particularly useful when you need to perform:

*   **Range Queries:** Efficiently find the sum, minimum, maximum, or any other associative operation over a sub-array.
*   **Point Updates:** Efficiently update a single element in the array and have the segment tree reflect this change.

The time complexity for both range queries and point updates is typically $$O(\log n)$$, where $$n$$ is the size of the input array.

## Segment Tree Structure and Implementation

A segment tree is typically implemented using an array. If the input array has $$n$$ elements, the segment tree array will generally need a size of approximately $$4n$$ to accommodate all nodes (though $$2 \times 2^k$$ where $$2^k \ge n$$ is a more precise bound for the number of nodes).

We'll focus on a segment tree for range sum queries.

### Core Components

1.  **`tree` Array:** Stores the segment tree nodes. Each node will store the sum of its corresponding range.
2.  **`arr` Array:** The original input array.
3.  **`build()` Method:** Constructs the segment tree from the input array.
4.  **`query()` Method:** Performs a range query on the segment tree.
5.  **`update()` Method:** Updates a value in the original array and propagates the change up the segment tree.

### Java Code Implementation

```java
public class SegmentTree {

    private int[] tree;
    private int[] arr;
    private int n;

    // Constructor
    public SegmentTree(int[] inputArr) {
        this.arr = inputArr;
        this.n = inputArr.length;
        // A safe upper bound for tree size is 4*n
        this.tree = new int[4 * n];
        build(0, 0, n - 1);
    }

    /**
     * Builds the segment tree recursively.
     * @param nodeIndex The index of the current node in the 'tree' array.
     * @param start The starting index of the segment represented by this node.
     * @param end The ending index of the segment represented by this node.
     */
    private void build(int nodeIndex, int start, int end) {
        if (start == end) {
            // Leaf node: store the array element
            tree[nodeIndex] = arr[start];
        } else {
            int mid = start + (end - start) / 2;
            int leftChildIndex = 2 * nodeIndex + 1;
            int rightChildIndex = 2 * nodeIndex + 2;

            // Recursively build left and right children
            build(leftChildIndex, start, mid);
            build(rightChildIndex, mid + 1, end);

            // Internal node: store the sum of its children
            tree[nodeIndex] = tree[leftChildIndex] + tree[rightChildIndex];
        }
    }

    /**
     * Performs a range sum query.
     * @param queryStart The start index of the query range.
     * @param queryEnd The end index of the query range.
     * @return The sum of elements in the query range.
     */
    public int query(int queryStart, int queryEnd) {
        return query(0, 0, n - 1, queryStart, queryEnd);
    }

    /**
     * Helper method for range sum query.
     * @param nodeIndex Current node index in the tree array.
     * @param segmentStart Start of the current segment.
     * @param segmentEnd End of the current segment.
     * @param queryStart Start of the query range.
     * @param queryEnd End of the query range.
     * @return Sum for the intersecting range.
     */
    private int query(int nodeIndex, int segmentStart, int segmentEnd, int queryStart, int queryEnd) {
        // Case 1: Current segment is completely outside the query range
        if (segmentEnd < queryStart || segmentStart > queryEnd) {
            return 0; // Identity element for sum
        }

        // Case 2: Current segment is completely inside the query range
        if (queryStart <= segmentStart && segmentEnd <= queryEnd) {
            return tree[nodeIndex];
        }

        // Case 3: Current segment partially overlaps with the query range
        int mid = segmentStart + (segmentEnd - segmentStart) / 2;
        int leftChildIndex = 2 * nodeIndex + 1;
        int rightChildIndex = 2 * nodeIndex + 2;

        int leftSum = query(leftChildIndex, segmentStart, mid, queryStart, queryEnd);
        int rightSum = query(rightChildIndex, mid + 1, segmentEnd, queryStart, queryEnd);

        return leftSum + rightSum;
    }

    /**
     * Updates a value at a specific index in the original array and the segment tree.
     * @param index The index of the element to update.
     * @param newValue The new value for the element.
     */
    public void update(int index, int newValue) {
        update(0, 0, n - 1, index, newValue);
    }

    /**
     * Helper method for updating a value.
     * @param nodeIndex Current node index in the tree array.
     * @param segmentStart Start of the current segment.
     * @param segmentEnd End of the current segment.
     * @param updateIndex Index to update.
     * @param newValue New value for the element.
     */
    private void update(int nodeIndex, int segmentStart, int segmentEnd, int updateIndex, int newValue) {
        // If the update index is outside the current segment, do nothing.
        if (updateIndex < segmentStart || updateIndex > segmentEnd) {
            return;
        }

        // If it's a leaf node and matches the update index
        if (segmentStart == segmentEnd) {
            arr[updateIndex] = newValue; // Update original array
            tree[nodeIndex] = newValue;  // Update tree node
            return;
        }

        // If it's an internal node, recurse down to the appropriate child
        int mid = segmentStart + (segmentEnd - segmentStart) / 2;
        int leftChildIndex = 2 * nodeIndex + 1;
        int rightChildIndex = 2 * nodeIndex + 2;

        if (updateIndex <= mid) {
            update(leftChildIndex, segmentStart, mid, updateIndex, newValue);
        } else {
            update(rightChildIndex, mid + 1, segmentEnd, updateIndex, newValue);
        }

        // After updating children, update the current node's value
        tree[nodeIndex] = tree[leftChildIndex] + tree[rightChildIndex];
    }

    // Example usage
    public static void main(String[] args) {
        int[] data = {1, 3, 5, 7, 9, 11};
        SegmentTree st = new SegmentTree(data);

        // Query sum of range [1, 3] (elements 3, 5, 7)
        System.out.println("Sum of range [1, 3]: " + st.query(1, 3)); // Expected: 15

        // Update element at index 2 from 5 to 10
        st.update(2, 10);

        // Query sum of range [1, 3] again (elements 3, 10, 7)
        System.out.println("Sum of range [1, 3] after update: " + st.query(1, 3)); // Expected: 20

        // Query sum of entire array [0, 5]
        System.out.println("Sum of range [0, 5]: " + st.query(0, 5)); // Expected: 1 + 3 + 10 + 7 + 9 + 11 = 41
    }
}
```

### How the Code Works

1.  **`SegmentTree(int[] inputArr)` (Constructor):**
    *   Initializes `arr` with the input array and `n` with its length.
    *   Creates the `tree` array with a size of $$4n$$, which is a safe upper bound.
    *   Calls `build()` to construct the tree.

2.  **`build(int nodeIndex, int start, int end)`:**
    *   **Base Case:** If `start == end`, it means we've reached a leaf node. The value of this leaf node in the `tree` array is set to the corresponding element in the `arr` array.
    *   **Recursive Step:** If it's an internal node, it calculates the `mid` point of the current segment. It then recursively calls `build()` for the left child (covering `start` to `mid`) and the right child (covering `mid + 1` to `end`).
    *   After the children are built, the value of the current `nodeIndex` in the `tree` array is set to the sum of its left and right children's values.

3.  **`query(int queryStart, int queryEnd)`:**
    *   This is the public method. It calls the private helper `query()` with the initial parameters for the root node (index 0, covering the entire array from 0 to `n-1`) and the user's query range.

4.  **`query(int nodeIndex, int segmentStart, int segmentEnd, int queryStart, int queryEnd)`:**
    *   This method determines how much of the current node's segment overlaps with the query range.
    *   **No Overlap:** If the current segment is entirely outside the query range, it returns 0 (the identity element for summation).
    *   **Full Overlap:** If the current segment is entirely within the query range, it returns the value stored at `tree[nodeIndex]`.
    *   **Partial Overlap:** If there's a partial overlap, it divides the current segment at `mid` and recursively calls `query()` on both the left and right children. The results from these recursive calls are summed up.

5.  **`update(int index, int newValue)`:**
    *   The public method that initiates the update process. It calls the private helper `update()` starting from the root.

6.  **`update(int nodeIndex, int segmentStart, int segmentEnd, int updateIndex, int newValue)`:**
    *   **Out of Bounds:** If the `updateIndex` is outside the current node's segment, it does nothing.
    *   **Leaf Node:** If it reaches a leaf node (`segmentStart == segmentEnd`) and this leaf node corresponds to the `updateIndex`, it updates both the `arr` and `tree` at that position.
    *   **Internal Node:** For internal nodes, it determines which child segment contains the `updateIndex` and recursively calls `update()` on that child.
    *   **Propagate Change:** After a recursive call returns (meaning a child or descendant has been updated), the current node's value (`tree[nodeIndex]`) is re-calculated as the sum of its children. This ensures the change is propagated up the tree.

This implementation provides a solid foundation for using Segment Trees for range queries and point updates in Java. You can adapt the aggregation logic (e.g., for minimum, maximum) by changing the operation in the `build` and `update` methods and the identity element returned in the `query` method.

## Supports

- [[segment-tree-java-implementation|Segment Tree Java Implementation]]
