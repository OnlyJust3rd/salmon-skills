---
type: "medium"
title: "AVL Tree Rotation: Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/avl-tree-rotation-java-implementation|AVL Tree Rotation Java Implementation]]"
---
# AVL Tree Rotation: Java Implementation

This lesson focuses on implementing AVL tree rotation in Java. AVL trees are self-balancing binary search trees that maintain a height balance between the left and right subtrees of any node. This balancing is achieved through rotations, ensuring that operations like insertion and deletion have a time complexity of $$ O(\log n) $$.

## Why Rotations?

When you insert or delete a node in a binary search tree, it might become unbalanced. An unbalanced tree can degenerate into a linked list, making operations take $$ O(n) $$ time. AVL trees prevent this by performing rotations whenever an imbalance is detected.

An imbalance occurs when the "balance factor" of a node (height of its left subtree minus height of its right subtree) is greater than 1 or less than -1. There are four main types of imbalances, each requiring a specific rotation:

1.  **Left-Left Case:** A new node is inserted in the left subtree of the left child of a node. Requires a **right rotation**.
2.  **Right-Right Case:** A new node is inserted in the right subtree of the right child of a node. Requires a **left rotation**.
3.  **Left-Right Case:** A new node is inserted in the right subtree of the left child of a node. Requires a **left rotation** on the left child, followed by a **right rotation** on the original node.
4.  **Right-Left Case:** A new node is inserted in the left subtree of the right child of a node. Requires a **right rotation** on the right child, followed by a **left rotation** on the original node.

## AVL Node Structure

First, let's define a basic `Node` structure for our AVL tree. Each node needs to store its `key`, references to its `left` and `right` children, and its `height`.

```java
class Node {
    int key;
    Node left, right;
    int height;

    public Node(int item) {
        key = item;
        left = right = null;
        height = 1; // New node is initially added at leaf
    }
}
```

## Helper Functions

We'll need a few helper functions:

*   `height(Node node)`: Returns the height of a given node. If the node is null, its height is 0.
*   `getBalance(Node node)`: Calculates the balance factor of a node.

```java
class AVLTree {
    Node root;

    // A utility function to get the height of the tree
    int height(Node node) {
        if (node == null) {
            return 0;
        }
        return node.height;
    }

    // A utility function to get the balance factor of node
    int getBalance(Node node) {
        if (node == null) {
            return 0;
        }
        return height(node.left) - height(node.right);
    }

    // Update height of the node
    void updateHeight(Node node) {
        node.height = 1 + Math.max(height(node.left), height(node.right));
    }

    // ... rotation methods will go here ...
}
```

## Implementing Rotations

Now, let's implement the core rotation functions.

### Right Rotation

This rotation is performed when the tree is left-heavy (Left-Left case).

```java
    /*
     *   Rotate right
     *      y                               x
     *     / \     Right Rotation          /  \
     *    x   T3   - - - - - - - >        T1   y
     *   / \                                / \
     *  T1  T2                             T2  T3
     */
    Node rightRotate(Node y) {
        Node x = y.left;
        Node T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        updateHeight(y); // y's height changes first
        updateHeight(x); // x's height changes after y

        // Return new root
        return x;
    }
```

### Left Rotation

This rotation is performed when the tree is right-heavy (Right-Right case).

```java
    /*
     *   Rotate left
     *    x                               y
     *   / \     Left Rotation           /  \
     *  T1  y    - - - - - - - >        x    T3
     *     / \                           / \
     *    T2  T3                         T1  T2
     */
    Node leftRotate(Node x) {
        Node y = x.right;
        Node T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        updateHeight(x); // x's height changes first
        updateHeight(y); // y's height changes after x

        // Return new root
        return y;
    }
```

## Handling Imbalances (Insertion Example)

Rotations are typically called within the `insert` or `delete` methods when an imbalance is detected. Here's how a simplified `insert` method might use rotations. The `insert` method recursively inserts the node and then checks and balances the tree on the way back up the recursion.

```java
    // Recursive function to insert a key in the subtree with given root
    // and returns the new root of the subtree.
    Node insert(Node node, int key) {

        // 1. Perform the normal BST insertion
        if (node == null) {
            return (new Node(key));
        }

        if (key < node.key) {
            node.left = insert(node.left, key);
        } else if (key > node.key) {
            node.right = insert(node.right, key);
        } else { // Duplicate keys are not allowed
            return node;
        }

        // 2. Update height of this ancestor node
        updateHeight(node);

        // 3. Get the balance factor of this ancestor node to check
        //    whether this node became unbalanced
        int balance = getBalance(node);

        // If this node becomes unbalanced, then there are 4 cases

        // Left Left Case
        if (balance > 1 && key < node.left.key) {
            return rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && key > node.right.key) {
            return leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && key > node.left.key) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && key < node.right.key) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // Public method to insert a key
    public void insert(int key) {
        root = insert(root, key);
    }
}
```

## Example Walkthrough

Let's trace an insertion that requires a **Left-Right case**. Suppose we insert the keys: `10, 20, 30`.

1.  **Insert 10:**
    ```
        10 (h=1)
    ```
2.  **Insert 20:**
    ```
        10 (h=2)
          \
           20 (h=1)
    ```
    Balance of 10 is `0 - 1 = -1`. Tree is balanced.

3.  **Insert 30:**
    ```
        10 (h=3)
          \
           20 (h=2)
             \
              30 (h=1)
    ```
    *   When inserting 30, 20 becomes `h=2`, 10 becomes `h=3`.
    *   Balance of 20: `0 - 1 = -1` (balanced).
    *   Balance of 10: `0 - 2 = -2` (unbalanced!).
    *   The imbalance is at node `10`. The new key `30` is greater than `10.right.key` (which is `20`). This is a **Right-Right case**.

    To fix this, we perform a **left rotation** on `10`.

    *   `leftRotate(10)`:
        *   `y` is `20`.
        *   `x` is `10`.
        *   `T2` is `20.left` which is `null`.
        *   `y.left` becomes `x` (`20.left = 10`).
        *   `x.right` becomes `T2` (`10.right = null`).
        *   Update heights: `10` becomes `h=1`, `20` becomes `h=2`.
        *   Return `y` (`20`).

    The tree becomes:
    ```
        20 (h=2)
       /  \
      10(h=1) 30(h=1)
    ```
    The tree is now balanced.

Now consider inserting `10, 30, 20`.

1.  **Insert 10:**
    ```
        10 (h=1)
    ```
2.  **Insert 30:**
    ```
        10 (h=2)
          \
           30 (h=1)
    ```
    Balance of 10 is `0 - 1 = -1` (balanced).

3.  **Insert 20:**
    ```
        10 (h=3)
          \
           30 (h=2)
          /
         20 (h=1)
    ```
    *   When inserting 20, 30 becomes `h=2`, 10 becomes `h=3`.
    *   Balance of 30: `1 - 0 = 1` (balanced).
    *   Balance of 10: `0 - 2 = -2` (unbalanced!).
    *   The imbalance is at node `10`. The new key `20` is less than `10.right.key` (`30`), but greater than `10.key` (`10`). This is a **Right-Left case**.

    To fix this, we perform a **right rotation** on `30` first, followed by a **left rotation** on `10`.

    *   **Step 1: Right rotation on `30` (`node.right`)**
        *   Call `rightRotate(node.right)`, which is `rightRotate(30)`.
        *   `y` is `30`.
        *   `x` is `30.left` which is `20`.
        *   `T2` is `20.right` which is `null`.
        *   `x.right` becomes `y` (`20.right = 30`).
        *   `y.left` becomes `T2` (`30.left = null`).
        *   Update heights: `30` becomes `h=1`, `20` becomes `h=2`.
        *   The call `rightRotate(30)` returns `20`.
        *   `node.right` (which was `30`) is updated to `20`.
        The tree now looks like:
        ```
            10 (h=3)
              \
               20 (h=2)
                 \
                  30 (h=1)
        ```
        This intermediate tree is still unbalanced at `10`, but it's now a **Right-Right case** with respect to `10`.

    *   **Step 2: Left rotation on `10` (`node`)**
        *   Now call `leftRotate(node)` which is `leftRotate(10)`.
        *   `x` is `10`.
        *   `y` is `10.right` which is `20`.
        *   `T2` is `20.left` which is `30`.
        *   `y.left` becomes `x` (`20.left = 10`).
        *   `x.right` becomes `T2` (`10.right = 30`).
        *   Update heights: `10` becomes `h=1`, `20` becomes `h=2`.
        *   The call `leftRotate(10)` returns `20`.

    The final balanced tree is:
    ```
        20 (h=2)
       /  \
      10(h=1) 30(h=1)
    ```

## Conclusion

Implementing AVL tree rotations is crucial for maintaining the efficiency of AVL trees. By understanding the four imbalance cases and correctly applying left and right rotations (and combinations for double rotations), you can ensure your AVL tree operations remain logarithmic. The key is to update heights correctly after each rotation and to re-evaluate balance factors as you move up the recursion tree during insertions and deletions.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/avl-tree-rotation-java-implementation|AVL Tree Rotation Java Implementation]]
