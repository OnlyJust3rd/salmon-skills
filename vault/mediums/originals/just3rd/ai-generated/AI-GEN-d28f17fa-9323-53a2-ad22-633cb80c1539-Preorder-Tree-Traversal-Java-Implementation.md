---
type: medium
title: Preorder Tree Traversal in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[preorder-tree-traversal-java-implementation|preorder-tree-traversal-java-implementation]]"
learning-time-in-minutes: 3
---
# Preorder Tree Traversal in Java

This lesson focuses on implementing the Preorder traversal algorithm in Java, a fundamental technique for visiting nodes in a tree data structure. Understanding traversals is crucial for various tree algorithms.

## What is Preorder Traversal?

Preorder traversal is a method of visiting nodes in a tree where you process the current node *before* its children. The order of operations is:

1.  **Visit** the current node (e.g., print its value, process it).
2.  Traverse the **left** subtree recursively.
3.  Traverse the **right** subtree recursively.

This "Visit-Left-Right" pattern is the defining characteristic of Preorder traversal.

### When to Use Preorder Traversal?

Preorder traversal is particularly useful for:

*   **Copying a tree:** You can create an exact replica of a tree by visiting nodes in preorder and reconstructing them.
*   **Creating a prefix expression from an expression tree:** The root node represents the operator, and the children represent the operands or sub-expressions.
*   **Representing the structure of a tree:** The preorder sequence can sometimes be used to uniquely reconstruct a binary tree if combined with another traversal (like inorder).

## Implementing Preorder Traversal in Java

We'll implement Preorder traversal for a binary tree. A common way to represent a tree node in Java is using a class.

### Node Structure

First, let's define a simple `TreeNode` class:

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

This class holds the data (`val`) and references to its left and right children.

### Recursive Implementation

The most intuitive way to implement Preorder traversal is recursively, directly following the "Visit-Left-Right" definition.

```java
public class PreorderTraversal {

    // Helper function for recursive preorder traversal
    private void preorderHelper(TreeNode node) {
        // Base case: If the node is null, we've reached the end of a branch.
        if (node == null) {
            return;
        }

        // 1. Visit the current node
        System.out.print(node.val + " "); // Example: printing the value

        // 2. Traverse the left subtree
        preorderHelper(node.left);

        // 3. Traverse the right subtree
        preorderHelper(node.right);
    }

    // Public method to start the preorder traversal
    public void preorder(TreeNode root) {
        preorderHelper(root);
        System.out.println(); // Newline after traversal
    }

    // Example Usage
    public static void main(String[] args) {
        // Constructing a sample binary tree:
        //       1
        //      / \
        //     2   3
        //    / \
        //   4   5

        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        PreorderTraversal pt = new PreorderTraversal();
        System.out.println("Preorder Traversal:");
        pt.preorder(root); // Expected output: 1 2 4 5 3
    }
}
```

**How it works:**

*   The `preorderHelper` function is the core of the recursion.
*   When `preorderHelper` is called with a `node`, it first checks if `node` is `null`. If it is, the function simply returns, stopping that recursive branch.
*   If `node` is not `null`, it processes `node.val`. In our example, we print it.
*   Then, it calls itself with `node.left`, initiating the traversal of the entire left subtree.
*   After the left subtree is fully traversed (all its recursive calls have returned), it calls itself with `node.right`, initiating the traversal of the entire right subtree.

### Iterative Implementation using a Stack

Preorder traversal can also be implemented iteratively using a stack. This approach avoids the overhead of recursive function calls and can be more efficient in some scenarios, especially for very deep trees where stack overflow might be a concern with recursion.

```java
import java.util.Stack;

public class PreorderTraversalIterative {

    public void preorder(TreeNode root) {
        if (root == null) {
            return;
        }

        Stack<TreeNode> stack = new Stack<>();
        stack.push(root); // Start with the root node

        while (!stack.isEmpty()) {
            TreeNode currentNode = stack.pop(); // 1. Visit the current node

            System.out.print(currentNode.val + " "); // Process the node

            // 2. Push the right child FIRST, so it's processed AFTER the left child
            if (currentNode.right != null) {
                stack.push(currentNode.right);
            }

            // 3. Push the left child LAST, so it's processed NEXT
            if (currentNode.left != null) {
                stack.push(currentNode.left);
            }
        }
        System.out.println(); // Newline after traversal
    }

    // Example Usage (same TreeNode class as above)
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);

        PreorderTraversalIterative pt = new PreorderTraversalIterative();
        System.out.println("Iterative Preorder Traversal:");
        pt.preorder(root); // Expected output: 1 2 4 5 3
    }
}
```

**How it works:**

*   We initialize a `Stack` and push the `root` node onto it.
*   The loop continues as long as the stack is not empty.
*   In each iteration:
    *   We `pop` a `currentNode` from the stack. This is our "visit" step.
    *   Crucially, we push the `right` child onto the stack *before* the `left` child. This is because a stack is a Last-In, First-Out (LIFO) data structure. By pushing the right child first, it will be at the bottom of the two children, and the left child, pushed last, will be at the top, ensuring the left subtree is processed before the right subtree.

## Common Mistakes to Avoid

*   **Incorrect Order of Operations:** Forgetting the "Visit" step or performing it after traversing children will result in an incorrect traversal.
*   **Not Handling Null Nodes:** Failing to check for `null` children in the recursive approach or `null` nodes in the iterative approach will lead to `NullPointerException`s.
*   **Incorrect Stack Push Order (Iterative):** Pushing the left child before the right child in the iterative method will reverse the order of traversal.

## Conclusion

Preorder traversal is a fundamental tree algorithm. Implementing it recursively in Java is straightforward by following the "Visit-Left-Right" pattern. The iterative approach using a stack offers an alternative that can be beneficial in certain scenarios. Mastering this traversal is a key step towards implementing more complex tree-based algorithms.

## Supports

- [[preorder-tree-traversal-java-implementation|Preorder Tree Traversal Java Implementation]]
