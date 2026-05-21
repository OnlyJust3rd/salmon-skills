---
type: "medium"
title: "Finding the Lowest Common Ancestor (LCA) in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/lowest-common-ancestor-lca-java-implementation|lowest-common-ancestor-lca-java-implementation]]"
---
# Finding the Lowest Common Ancestor (LCA) in Java

This lesson focuses on implementing algorithms to find the Lowest Common Ancestor (LCA) of two nodes in a binary tree using Java. This is a fundamental operation within tree algorithms, crucial for various applications in computer science.

## What is the Lowest Common Ancestor (LCA)?

The Lowest Common Ancestor of two nodes, `p` and `q`, in a tree is defined as the lowest (deepest) node that has both `p` and `q` as descendants. A node can be a descendant of itself.

Consider this tree:

```
      3
     / \
    5   1
   / \ / \
  6  2 0  8
    / \
   7   4
```

*   The LCA of nodes 5 and 1 is node 3.
*   The LCA of nodes 5 and 4 is node 5.
*   The LCA of nodes 6 and 7 is node 5.
*   The LCA of nodes 0 and 8 is node 1.

## Approach 1: Recursive Traversal

A common and intuitive way to find the LCA is using a recursive approach. The core idea is to traverse the tree and check if the current node is one of the target nodes (`p` or `q`), or if `p` and `q` lie in different subtrees of the current node.

### Algorithm

1.  **Base Cases:**
    *   If the current node is `null`, return `null`.
    *   If the current node is `p` or `q`, return the current node.

2.  **Recursive Steps:**
    *   Recursively search for `p` and `q` in the left subtree. Let the result be `left_lca`.
    *   Recursively search for `p` and `q` in the right subtree. Let the result be `right_lca`.

3.  **Combining Results:**
    *   If both `left_lca` and `right_lca` are non-`null`, it means `p` is in one subtree and `q` is in the other. Therefore, the current node is the LCA. Return the current node.
    *   If only `left_lca` is non-`null`, it means both `p` and `q` are in the left subtree (or one of them is the current node's left child, and the other is further down). Return `left_lca`.
    *   If only `right_lca` is non-`null`, similarly, return `right_lca`.
    *   If both `left_lca` and `right_lca` are `null`, it means neither `p` nor `q` were found in the subtrees rooted at the current node. Return `null`.

### Java Implementation

First, let's define a simple `TreeNode` class:

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
```

Now, the LCA function:

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Base case 1: If root is null, we can't find LCA.
        if (root == null) {
            return null;
        }

        // Base case 2: If the current node is one of p or q, it's a potential LCA.
        if (root == p || root == q) {
            return root;
        }

        // Recursively search in the left and right subtrees.
        TreeNode leftLCA = lowestCommonAncestor(root.left, p, q);
        TreeNode rightLCA = lowestCommonAncestor(root.right, p, q);

        // If both left and right subtrees returned a non-null node,
        // it means p and q are found in different subtrees.
        // Thus, the current root is the LCA.
        if (leftLCA != null && rightLCA != null) {
            return root;
        }

        // If only one of the subtrees returned a non-null node,
        // it means either both p and q are in that subtree, or
        // one of them is that returned node and the other is its descendant.
        // In either case, the returned node is the LCA.
        if (leftLCA != null) {
            return leftLCA;
        } else {
            return rightLCA;
        }
    }
}
```

### How it Works

The recursion explores the tree. When `root == p || root == q`, that node is returned. If `p` is in the left subtree and `q` is in the right, the calls from `root` will receive non-null values from `leftLCA` and `rightLCA`. The `root` then correctly identifies itself as the LCA. If both `p` and `q` are in the same subtree (say, left), the `rightLCA` will be `null`. The function will then return `leftLCA`, which will eventually be the LCA of `p` and `q` found deeper in that subtree.

## Approach 2: Using Parent Pointers (If Available)

If your `TreeNode` class includes a reference to its parent, finding the LCA becomes simpler.

### Algorithm

1.  **Find Paths:** Traverse from `p` to the root and store all ancestors of `p` in a set.
2.  **Check Ancestors:** Traverse from `q` to the root. For each ancestor of `q`, check if it exists in the set of ancestors of `p`. The first ancestor of `q` that is also an ancestor of `p` is the LCA.

### Java Implementation (Conceptual - requires parent pointers)

Assume `TreeNode` has a `TreeNode parent;` field.

```java
class TreeNodeWithParent {
    int val;
    TreeNodeWithParent left;
    TreeNodeWithParent right;
    TreeNodeWithParent parent; // Added parent pointer
    TreeNodeWithParent(int x) { val = x; }
}

class SolutionWithParent {
    public TreeNodeWithParent lowestCommonAncestor(TreeNodeWithParent root, TreeNodeWithParent p, TreeNodeWithParent q) {
        Set<TreeNodeWithParent> ancestorsOfP = new HashSet<>();

        // Add all ancestors of p, including p itself
        TreeNodeWithParent current = p;
        while (current != null) {
            ancestorsOfP.add(current);
            current = current.parent;
        }

        // Traverse from q upwards and check against ancestors of p
        current = q;
        while (current != null) {
            if (ancestorsOfP.contains(current)) {
                return current; // This is the LCA
            }
            current = current.parent;
        }

        return null; // Should not happen in a valid tree with p and q
    }
}
```

### Time and Space Complexity

*   **Recursive Approach:**
    *   Time Complexity: $$O(N)$$, where N is the number of nodes in the tree, as we might visit every node.
    *   Space Complexity: $$O(H)$$ in the average case for the recursion stack, where H is the height of the tree. In the worst case (a skewed tree), it's $$O(N)$$.

*   **Parent Pointer Approach:**
    *   Time Complexity: $$O(H)$$ for traversing up from `p` and `q`, where H is the height of the tree. In the worst case (skewed tree), it's $$O(N)$$.
    *   Space Complexity: $$O(H)$$ for storing ancestors of `p` in the `HashSet`. In the worst case, it's $$O(N)$$.

## Key Takeaways

*   The LCA problem is about finding the deepest common node for two target nodes.
*   The recursive approach elegantly handles the traversal and condition checking.
*   If parent pointers are available, an iterative approach using a set can be efficient.
*   Understanding the recursive breakdown is key to solving this problem effectively.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/lowest-common-ancestor-lca-java-implementation|Lowest Common Ancestor (LCA) Java Implementation]]
