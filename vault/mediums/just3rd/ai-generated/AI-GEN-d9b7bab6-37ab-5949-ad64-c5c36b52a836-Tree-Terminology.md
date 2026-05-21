---
type: "medium"
title: "Understanding Tree Terminology"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/graph-and-tree-modeling/microskills/tree-terminology|tree-terminology]]"
---
# Understanding Tree Terminology

In graph theory, trees are a special type of graph with a specific structure. They are fundamental to many computer science applications, from file systems to decision-making algorithms. This lesson focuses on remembering the definitions of common tree types used in graph modeling.

## What is a Tree?

Before diving into specific types of trees, let's establish the basic definition of a tree in graph theory.

> A **tree** is an undirected graph in which any two vertices are connected by exactly one path. Equivalently, a connected graph with no cycles is a tree.

Think of a tree as a network where there are no "loops" or redundant connections. Every connection is essential to keep the network connected.

## Common Tree Types

While the general definition of a tree is important, understanding different variations helps in applying them to specific problems.

### Rooted Tree

A **rooted tree** is a tree in which one vertex has been designated as the "root." This designation imposes a hierarchy on the tree.

*   **Root:** The designated starting vertex.
*   **Parent:** For any vertex other than the root, its parent is the vertex adjacent to it on the unique path from the root to that vertex.
*   **Child:** A vertex is a child of another vertex if the second vertex is the parent of the first.
*   **Leaf (or Terminal Vertex):** A vertex with no children.
*   **Internal Vertex:** A vertex that is not a leaf.
*   **Depth of a Vertex:** The number of edges on the unique path from the root to the vertex. The root has a depth of 0.
*   **Height of a Tree:** The maximum depth of any vertex in the tree.

**Example:** Imagine a file system. The top-level directory is the root. Folders within it are children of the root, and files within folders are leaves.

### Binary Tree

A **binary tree** is a special type of rooted tree where each node has at most two children. These children are often distinguished as the "left child" and the "right child."

*   **Binary Tree Property:** Each node has 0, 1, or 2 children.
*   **Ordered Children:** The concept of left and right children imposes an order, making it different from a general rooted tree.

**Example:** Binary Search Trees (BSTs) are a common application. In a BST, for any given node, all keys in its left subtree are less than the node's key, and all keys in its right subtree are greater than the node's key.

### N-ary Tree (or m-ary Tree)

An **n-ary tree** (or m-ary tree) is a rooted tree where each node has at most *n* (or *m*) children.

*   **N-ary Tree Property:** Each node has at most *n* children.
*   **Examples:** Ternary trees (at most 3 children), quaternary trees (at most 4 children), etc.

**Example:** A decision tree can be an n-ary tree, where each node represents a decision point, and its children represent the possible outcomes of that decision.

### General Tree

The term **general tree** is often used to refer to any rooted tree that is not restricted to having a specific maximum number of children per node (unlike binary or n-ary trees). It's essentially a rooted tree where a node can have any number of children.

## Key Takeaways

To solidify your understanding, remember these definitions:

*   **Rooted Tree:** A tree with a designated root, creating a hierarchy.
*   **Binary Tree:** A rooted tree where each node has at most two children (often designated as left and right).
*   **N-ary Tree:** A rooted tree where each node has at most *n* children.
*   **General Tree:** A rooted tree without a fixed limit on the number of children per node.

Understanding these tree types is crucial for working with graph and tree modeling, as each type is suited for different kinds of data structures and algorithms.

## Supports

- [[skills/programming/data-structures/graph-and-tree-modeling/microskills/tree-terminology|Tree Terminology]]
