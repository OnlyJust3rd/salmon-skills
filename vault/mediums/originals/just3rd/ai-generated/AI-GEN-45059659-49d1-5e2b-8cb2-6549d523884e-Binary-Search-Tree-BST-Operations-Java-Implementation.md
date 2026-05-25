---
type: medium
title: Binary Search Tree (BST) Operations in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[binary-search-tree-bst-operations-java-implementation|binary-search-tree-bst-operations-java-implementation]]"
learning-time-in-minutes: 3
---
# Binary Search Tree (BST) Operations in Java

This lesson focuses on implementing fundamental operations for Binary Search Trees (BSTs) in Java. BSTs are a crucial data structure for efficient searching, insertion, and deletion. This skill is a stepping stone towards implementing more complex tree algorithms.

## Core Idea: The Binary Search Tree Property

A Binary Search Tree is a binary tree where for each node:
*   All values in its *left* subtree are *less than* the node's value.
*   All values in its *right* subtree are *greater than* the node's value.
*   Both the left and right subtrees are also Binary Search Trees.

This property makes searching and other operations very efficient, often achieving an average time complexity of $$ \(O(\log n)\) $$, where \(n\) is the number of nodes.

## Representing a BST Node in Java

We'll start by defining a `Node` class to represent each element in our BST. Each node needs to store its data (typically an integer or comparable type) and references to its left and right children.

```java
class Node {
    int data;
    Node left, right;

    public Node(int item) {
        data = item;
        left = right = null;
    }
}
```

## Implementing BST Operations

Here, we'll implement common operations. We'll assume a `BST` class that holds the root of the tree.

### 1. Insertion

To insert a new value, we start at the root. If the tree is empty, the new node becomes the root. Otherwise, we compare the new value with the current node's data:
*   If the new value is less than the current node's data, we move to the left child.
*   If the new value is greater than the current node's data, we move to the right child.
*   We repeat this until we find an empty spot (a `null` child) where the new node can be placed.

```java
class BST {
    Node root;

    BST() {
        root = null;
    }

    // Function to insert a new node
    void insert(int key) {
        root = insertRec(root, key);
    }

    // Recursive helper function for insertion
    Node insertRec(Node root, int key) {
        // If the tree is empty, return a new node
        if (root == null) {
            root = new Node(key);
            return root;
        }

        // Otherwise, traverse down the tree
        if (key < root.data) {
            root.left = insertRec(root.left, key);
        } else if (key > root.data) {
            root.right = insertRec(root.right, key);
        }
        // If key is equal, we can choose to ignore it or handle duplicates
        // For simplicity, we ignore duplicates here.

        return root;
    }

    // --- Other BST operations will be added here ---
}
```

### 2. Search

Searching for a value is very similar to insertion. We start at the root and compare the target value with the current node's data:
*   If the target matches the current node's data, we've found it.
*   If the target is less, we go left.
*   If the target is greater, we go right.
*   If we reach a `null` node, the value is not in the tree.

```java
    // Function to search for a value
    boolean search(int key) {
        return searchRec(root, key);
    }

    // Recursive helper function for search
    boolean searchRec(Node root, int key) {
        // Base cases: root is null or key is present at root
        if (root == null) {
            return false;
        }

        if (root.data == key) {
            return true;
        }

        // Key is smaller than root's data, search in left subtree
        if (key < root.data) {
            return searchRec(root.left, key);
        }

        // Key is greater than root's data, search in right subtree
        return searchRec(root.right, key);
    }
```

### 3. Deletion

Deletion is the most complex operation. It has three main cases:
*   **Node with no children (leaf node):** Simply remove the node.
*   **Node with one child:** Replace the node with its child.
*   **Node with two children:** Find the in-order successor (the smallest node in the right subtree) or in-order predecessor (the largest node in the left subtree). Copy its data to the node to be deleted, and then delete that successor/predecessor node (which will have at most one child, simplifying the deletion).

```java
    // Function to delete a node
    void delete(int key) {
        root = deleteRec(root, key);
    }

    // Recursive helper function for deletion
    Node deleteRec(Node root, int key) {
        // Base case: If the tree is empty
        if (root == null) {
            return root;
        }

        // Traverse down the tree to find the node to be deleted
        if (key < root.data) {
            root.left = deleteRec(root.left, key);
        } else if (key > root.data) {
            root.right = deleteRec(root.right, key);
        } else { // Node with the key to be deleted found
            // Case 1: Node with only one child or no child
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }

            // Case 2: Node with two children
            // Get the in-order successor (smallest in the right subtree)
            Node successor = minValueNode(root.right);

            // Copy the in-order successor's content to this node
            root.data = successor.data;

            // Delete the in-order successor
            root.right = deleteRec(root.right, successor.data);
        }
        return root;
    }

    // Helper function to find the node with minimum value in a subtree
    Node minValueNode(Node node) {
        Node current = node;
        // Loop down to find the leftmost leaf
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }

    // --- Traversal methods would go here for verification ---
}
```

## Putting It Together: A Simple Example

Let's see how you might use these operations:

```java
public class BSTExample {
    public static void main(String[] args) {
        BST tree = new BST();

        // Insert nodes
        tree.insert(50);
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(70);
        tree.insert(60);
        tree.insert(80);

        System.out.println("Search for 40: " + tree.search(40)); // Output: Search for 40: true
        System.out.println("Search for 90: " + tree.search(90)); // Output: Search for 90: false

        System.out.println("Deleting 20");
        tree.delete(20);
        System.out.println("Search for 20 after deletion: " + tree.search(20)); // Output: Search for 20 after deletion: false

        System.out.println("Deleting 30 (node with two children)");
        tree.delete(30); // 30 will be replaced by 40, and 40 will be deleted from its original spot
        System.out.println("Search for 30 after deletion: " + tree.search(30)); // Output: Search for 30 after deletion: false
    }
}
```

## Next Steps

To fully verify your implementation, you would typically add **traversal methods** (Inorder, Preorder, Postorder) to print the tree's contents and ensure they are ordered correctly. Understanding these BST operations is fundamental for tackling more advanced tree algorithms.

## Supports

- [[binary-search-tree-bst-operations-java-implementation|Binary Search Tree (BST) Operations Java Implementation]]
