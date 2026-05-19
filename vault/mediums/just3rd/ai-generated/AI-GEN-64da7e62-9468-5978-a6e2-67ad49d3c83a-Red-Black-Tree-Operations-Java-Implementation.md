---
type: "medium"
title: "Red-Black Tree Operations in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/red-black-tree-operations-java-implementation|Red-Black Tree Operations Java Implementation]]"
---
# Red-Black Tree Operations in Java

Red-Black Trees are self-balancing binary search trees. They guarantee that operations like insertion, deletion, and search have a worst-case time complexity of $$O(\log n)$$. This is achieved by enforcing specific properties that keep the tree relatively balanced.

This lesson focuses on implementing the core operations for Red-Black Trees in Java.

## Red-Black Tree Properties

Before diving into implementation, let's recap the fundamental properties of a Red-Black Tree:

1.  **Node Color:** Every node is either red or black.
2.  **Root Color:** The root of the tree is always black.
3.  **Leaf Color:** All leaves (NIL nodes, typically represented as null or a special sentinel node) are black.
4.  **Red Node Children:** If a node is red, then both its children must be black.
5.  **Black Height:** Every simple path from a given node to any of its descendant leaves contains the same number of black nodes.

Violating these properties during insertion or deletion triggers rebalancing operations (color changes and rotations) to restore them.

## Core Operations: Structure and Implementation

We'll implement the `insert` and `delete` operations for a Red-Black Tree. These operations are complex due to the rebalancing logic.

### Node Representation

First, let's define a `Node` class to represent tree nodes.

```java
class Node {
    int key;
    Node left, right, parent;
    boolean isRed; // true for red, false for black

    public Node(int key) {
        this.key = key;
        this.isRed = true; // New nodes are typically red
        this.left = this.right = this.parent = null;
    }
}
```

### Insertion

Insertion involves a standard Binary Search Tree (BST) insertion followed by rebalancing. New nodes are always inserted as red.

**Steps for Insertion:**

1.  **BST Insertion:** Insert the new node as a red leaf, similar to a regular BST.
2.  **Fix Violations:** If the newly inserted node violates Red-Black Tree properties (specifically property 4 or 2), call a `fixInsert` method to restore them.

```java
class RedBlackTree {
    private Node root;
    private static final boolean RED = true;
    private static final boolean BLACK = false;

    // Constructor
    public RedBlackTree() {
        root = null;
    }

    // Helper method to set node color
    private void setColor(Node node, boolean color) {
        if (node != null) {
            node.isRed = color;
        }
    }

    // Helper method to check if a node is red
    private boolean isRed(Node node) {
        return node != null && node.isRed == RED;
    }

    // Left Rotation
    private void leftRotate(Node x) {
        Node y = x.right;
        x.right = y.left;
        if (y.left != null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent == null) {
            root = y;
        } else if (x == x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    // Right Rotation
    private void rightRotate(Node y) {
        Node x = y.left;
        y.left = x.right;
        if (x.right != null) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (y.parent == null) {
            root = x;
        } else if (y == y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }

    // Insert a key into the Red-Black Tree
    public void insert(int key) {
        Node newNode = new Node(key);
        // Standard BST insert
        Node y = null;
        Node x = this.root;

        while (x != null) {
            y = x;
            if (newNode.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = y;
        if (y == null) {
            root = newNode;
        } else if (newNode.key < y.key) {
            y.left = newNode;
        } else {
            y.right = newNode;
        }

        // Fix Red-Black Tree properties
        fixInsert(newNode);
    }

    // Fixes violations after insertion
    private void fixInsert(Node k) {
        Node uncle;
        while (k != root && isRed(k.parent)) {
            if (k.parent == k.parent.parent.left) { // Parent is a left child
                uncle = k.parent.parent.right;

                if (isRed(uncle)) { // Case 1: Uncle is red
                    setColor(k.parent, BLACK);
                    setColor(uncle, BLACK);
                    setColor(k.parent.parent, RED);
                    k = k.parent.parent;
                } else { // Uncle is black
                    if (k == k.parent.right) { // Case 2: k is a right child
                        k = k.parent;
                        leftRotate(k);
                    }
                    // Case 3: k is a left child
                    setColor(k.parent, BLACK);
                    setColor(k.parent.parent, RED);
                    rightRotate(k.parent.parent);
                }
            } else { // Parent is a right child (symmetric to the above)
                uncle = k.parent.parent.left;

                if (isRed(uncle)) { // Case 1: Uncle is red
                    setColor(k.parent, BLACK);
                    setColor(uncle, BLACK);
                    setColor(k.parent.parent, RED);
                    k = k.parent.parent;
                } else { // Uncle is black
                    if (k == k.parent.left) { // Case 2: k is a left child
                        k = k.parent;
                        rightRotate(k);
                    }
                    // Case 3: k is a right child
                    setColor(k.parent, BLACK);
                    setColor(k.parent.parent, RED);
                    leftRotate(k.parent.parent);
                }
            }
        }
        setColor(root, BLACK); // Ensure root is always black
    }

    // ... (Deletion and other methods would go here)
}
```

**Explanation of `fixInsert` Cases:**

*   **Case 1 (Uncle is Red):** If both the parent and uncle are red, we recolor them black and color their parent red. This pushes the "red-red" violation up the tree.
*   **Case 2 (Uncle is Black, k is "outside"):** If the uncle is black and the new node `k` is an "outside" child (e.g., parent is left child, `k` is right child), we perform a rotation on the parent to make `k` an "inside" child. Then, we fall through to Case 3.
*   **Case 3 (Uncle is Black, k is "inside"):** If the uncle is black and the new node `k` is an "inside" child (e.g., parent is left child, `k` is left child), we recolor the parent black, recolor the grandparent red, and then perform a rotation on the grandparent. This resolves the violation.

### Deletion

Deletion is significantly more complex. It involves:

1.  **BST Deletion:** Delete the node as in a standard BST. The complexity arises when the deleted node is black, as this can violate property 5 (black height).
2.  **Fix Violations:** If a black node was deleted, or if a red node with a black child was deleted, rebalancing is required. This involves a `fixDelete` method that handles various scenarios using recoloring and rotations.

Implementing deletion is a substantial undertaking. It typically involves identifying the node to be physically removed (which might be the successor of the node to be deleted), performing the removal, and then calling a `fixDelete` method if necessary. The `fixDelete` method has several cases to consider, often involving a "double black" concept to track the missing black node.

### Key Takeaways

*   Red-Black Trees maintain balance through the strict application of color properties.
*   Insertion involves a standard BST insert followed by `fixInsert` to resolve violations using recoloring and rotations.
*   Deletion is more intricate and requires a `fixDelete` method to handle the potential disruption of black height.
*   Understanding the rotation and recoloring logic is crucial for successful implementation.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/red-black-tree-operations-java-implementation|Red-Black Tree Operations Java Implementation]]
