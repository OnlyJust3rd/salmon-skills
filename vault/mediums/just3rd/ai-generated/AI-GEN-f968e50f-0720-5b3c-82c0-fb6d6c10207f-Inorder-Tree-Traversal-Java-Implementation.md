---
type: "medium"
title: "Inorder Tree Traversal in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/inorder-tree-traversal-java-implementation|inorder-tree-traversal-java-implementation]]"
---
# Inorder Tree Traversal in Java

This lesson focuses on implementing the Inorder traversal algorithm for trees in Java. This is a fundamental technique when working with tree data structures and is a stepping stone to understanding more complex tree operations.

## What is Inorder Traversal?

Inorder traversal is a way to visit each node in a binary tree exactly once. For a given node, the order of visiting is:

1.  Visit the **left** subtree.
2.  Visit the **node itself**.
3.  Visit the **right** subtree.

This specific order is crucial for binary search trees (BSTs) because it visits the nodes in ascending order of their values.

## Core Idea: Recursion

Recursion is the most natural and elegant way to implement Inorder traversal. The logic directly mirrors the definition: to traverse a tree inorder, you first recursively traverse its left child inorder, then process the current node, and finally recursively traverse its right child inorder.

## Java Implementation

We'll assume a basic `TreeNode` class exists. If not, here’s a simple one:

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}
```

Now, let's implement the Inorder traversal function:

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    /**
     * Performs an inorder traversal of a binary tree.
     *
     * @param root The root of the binary tree.
     * @return A list of node values in inorder sequence.
     */
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorderHelper(root, result);
        return result;
    }

    /**
     * Recursive helper function for inorder traversal.
     *
     * @param node   The current node being visited.
     * @param result The list to store the traversal result.
     */
    private void inorderHelper(TreeNode node, List<Integer> result) {
        // Base case: if the node is null, we've reached the end of a branch
        if (node == null) {
            return;
        }

        // 1. Traverse the left subtree
        inorderHelper(node.left, result);

        // 2. Visit the current node (add its value to the result list)
        result.add(node.val);

        // 3. Traverse the right subtree
        inorderHelper(node.right, result);
    }
}
```

### How it Works:

*   **`inorderTraversal(TreeNode root)`**: This is the public method that initiates the traversal. It creates an empty `ArrayList` to store the node values and then calls the recursive helper function `inorderHelper`.
*   **`inorderHelper(TreeNode node, List<Integer> result)`**:
    *   **Base Case**: If `node` is `null`, it means we've gone past a leaf node. We simply return, stopping the recursion for this branch.
    *   **Recursive Calls**: The core of the algorithm lies in the three steps:
        1.  `inorderHelper(node.left, result)`: Recursively calls itself on the left child. This continues until it reaches the leftmost node in the current subtree.
        2.  `result.add(node.val)`: Once the left subtree is fully traversed (or if there was no left child), the value of the current `node` is added to the `result` list.
        3.  `inorderHelper(node.right, result)`: Recursively calls itself on the right child.

### Example Walkthrough:

Consider this binary tree:

```
      1
     / \
    2   3
   / \
  4   5
```

Let's trace `inorderTraversal` for this tree:

1.  `inorderTraversal(root)` (node is 1). Calls `inorderHelper(1, [])`.
2.  `inorderHelper(1, [])`:
    *   Calls `inorderHelper(2, [])`.
3.  `inorderHelper(2, [])`:
    *   Calls `inorderHelper(4, [])`.
4.  `inorderHelper(4, [])`:
    *   Calls `inorderHelper(null, [])`. Returns.
    *   Adds `4` to result: `[4]`.
    *   Calls `inorderHelper(null, [])`. Returns.
    *   Returns from `inorderHelper(4, [])`.
5.  Back in `inorderHelper(2, [4])`:
    *   Adds `2` to result: `[4, 2]`.
    *   Calls `inorderHelper(5, [4, 2])`.
6.  `inorderHelper(5, [4, 2])`:
    *   Calls `inorderHelper(null, [4, 2])`. Returns.
    *   Adds `5` to result: `[4, 2, 5]`.
    *   Calls `inorderHelper(null, [4, 2, 5])`. Returns.
    *   Returns from `inorderHelper(5, [4, 2, 5])`.
7.  Back in `inorderHelper(2, [4, 2, 5])`: Returns.
8.  Back in `inorderHelper(1, [4, 2, 5])`:
    *   Adds `1` to result: `[4, 2, 5, 1]`.
    *   Calls `inorderHelper(3, [4, 2, 5, 1])`.
9.  `inorderHelper(3, [4, 2, 5, 1])`:
    *   Calls `inorderHelper(null, [4, 2, 5, 1])`. Returns.
    *   Adds `3` to result: `[4, 2, 5, 1, 3]`.
    *   Calls `inorderHelper(null, [4, 2, 5, 1, 3])`. Returns.
    *   Returns from `inorderHelper(3, [4, 2, 5, 1, 3])`.
10. Back in `inorderHelper(1, [4, 2, 5, 1, 3])`: Returns.
11. `inorderTraversal` returns `[4, 2, 5, 1, 3]`.

Wait, this example tree is *not* a Binary Search Tree, so the output isn't sorted. If it *were* a BST:

```
      2
     / \
    1   3
```

Inorder traversal would yield `[1, 2, 3]`.

## Iterative Inorder Traversal (Optional)

While recursion is often preferred for its clarity, an iterative approach using a stack can also be implemented. This is useful to avoid potential stack overflow issues with very deep trees or in environments with limited stack depth.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

class SolutionIterative {
    /**
     * Performs an inorder traversal of a binary tree iteratively.
     *
     * @param root The root of the binary tree.
     * @return A list of node values in inorder sequence.
     */
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode currentNode = root;

        while (currentNode != null || !stack.isEmpty()) {
            // Traverse to the leftmost node, pushing nodes onto the stack
            while (currentNode != null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }

            // Pop the node, add its value to the result
            currentNode = stack.pop();
            result.add(currentNode.val);

            // Move to the right subtree
            currentNode = currentNode.right;
        }

        return result;
    }
}
```

### How the Iterative Version Works:

1.  We use a `Stack` to keep track of nodes that we need to visit later.
2.  We start with `currentNode` pointing to the `root`.
3.  The outer `while` loop continues as long as there's a `currentNode` to process or the `stack` is not empty.
4.  The inner `while` loop (`while (currentNode != null)`) pushes `currentNode` onto the `stack` and then moves `currentNode` to its left child. This effectively finds the leftmost node of the current subtree.
5.  Once `currentNode` becomes `null` (meaning we've reached the end of a left branch), we pop a node from the `stack`. This popped node is the next one to be visited in inorder sequence.
6.  We add the `val` of the popped node to our `result`.
7.  Finally, we set `currentNode` to the right child of the popped node to start processing the right subtree.

## Key Takeaways

*   Inorder traversal visits nodes in the order: Left, Node, Right.
*   It's naturally implemented using recursion.
*   For Binary Search Trees, Inorder traversal yields node values in sorted order.
*   An iterative approach using a stack is an alternative for managing traversal without relying on the call stack.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/inorder-tree-traversal-java-implementation|Inorder Tree Traversal Java Implementation]]
