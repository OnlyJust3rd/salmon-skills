---
type: "medium"
title: "Rooted vs. Unrooted Trees"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/graph-and-tree-modeling/microskills/rooted-vs-unrooted-trees|rooted-vs-unrooted-trees]]"
---
# Rooted vs. Unrooted Trees

Understanding the difference between rooted and unrooted trees is a fundamental step in grasping graph and tree structures. This distinction influences how we interpret relationships and navigate through the data represented by these structures.

## What is a Tree?

Before diving into rooted vs. unrooted, let's quickly recap what a tree is in the context of graph theory:

*   A tree is an **undirected graph** that is **connected** and has **no cycles**.
*   "Connected" means there is a path between any two nodes in the tree.
*   "No cycles" means you can't start at a node, follow a sequence of edges, and return to the same node without traversing any edge more than once.

## Rooted Trees: A Special Node

A **rooted tree** is a tree where one specific node has been designated as the **root**. This designation imposes a hierarchy on the tree, creating a parent-child relationship between nodes.

### Key Concepts in Rooted Trees:

*   **Root:** The designated starting node. It has no parent.
*   **Parent:** For any node other than the root, its parent is the node directly connected to it on the unique path from that node to the root.
*   **Child:** A node is a child of another node if that other node is its parent.
*   **Leaf Node (or Terminal Node):** A node with no children.
*   **Internal Node (or Non-terminal Node):** A node that has at least one child.
*   **Depth:** The depth of a node is the number of edges on the path from the root to that node. The root has a depth of 0.
*   **Height:** The height of a node is the number of edges on the longest path from that node down to a leaf. The height of the tree is the height of the root.

### Example of a Rooted Tree:

Imagine a family tree. The oldest ancestor is the root. Their children are at the next level, their grandchildren at the level below, and so on.

```
      A (Root, Depth 0)
     / \
    B   C (Depth 1)
   /|\   \
  D E F   G (Depth 2)
        \
         H (Depth 3)
```

In this example:
*   'A' is the root.
*   'B' and 'C' are children of 'A'.
*   'A' is the parent of 'B' and 'C'.
*   'D', 'E', 'F', and 'G' are children of 'B' or 'C'.
*   'H' is a child of 'G'.
*   'D', 'E', 'F', and 'H' are leaf nodes.
*   'A', 'B', 'C', and 'G' are internal nodes.
*   The depth of 'H' is 3.
*   The height of 'H' is 0.
*   The height of 'G' is 1 (path to 'H').
*   The height of the tree is 3 (height of 'A').

## Unrooted Trees: No Special Node

An **unrooted tree** is a tree where no specific node has been designated as the root. All nodes are considered equal, and there's no inherent hierarchy or directionality implied. Every edge simply connects two nodes.

### Key Concepts in Unrooted Trees:

*   **Nodes and Edges:** The fundamental components.
*   **Connectivity:** Still a key property.
*   **No Cycles:** Also a defining property.

### Example of an Unrooted Tree:

Think of a network of cities connected by roads, where there's no single "central" city. Each road connects two cities.

```
    A -- B -- C
    |    |
    D    E
```

In this example:
*   There's no root. Any node *could* be considered a root if we were to arbitrarily designate one.
*   'A' is connected to 'B' and 'D'.
*   'B' is connected to 'A', 'C', and 'E'.
*   'C' is connected to 'B'.
*   'D' is connected to 'A'.
*   'E' is connected to 'B'.

## Key Differences Summarized

| Feature        | Rooted Tree                                   | Unrooted Tree                               |
| :------------- | :-------------------------------------------- | :------------------------------------------ |
| **Root Node**  | One node is specifically designated as the root. | No designated root. All nodes are equivalent. |
| **Hierarchy**  | Implies a parent-child hierarchy.             | No inherent hierarchy.                      |
| **Direction**  | Often implies direction (towards or away from root). | Undirected.                                 |
| **Traversal**  | Typically traversed top-down (parent to child). | Traversal can start from any node.          |
| **Applications**| File systems, organizational charts, decision trees, family trees. | Network topologies, phylogenetic trees, molecular structures. |

## When to Use Which?

*   **Rooted Trees:** You'd use a rooted tree when you need to represent a clear hierarchy or a flow of information. For instance, in a file system, the "root directory" is the designated root. In a company's organizational chart, the CEO is the root.
*   **Unrooted Trees:** You'd use an unrooted tree when the relationships are symmetrical, and there's no natural starting point or hierarchical order. Examples include representing how different species evolved from common ancestors (phylogenetic trees) or how molecules are connected.

In essence, the choice between a rooted and unrooted tree depends on whether you need to impose a specific starting point and hierarchical structure on your data. Both are powerful tools for modeling relationships, but they serve different representational needs.

## Supports

- [[skills/programming/data-structures/graph-and-tree-modeling/microskills/rooted-vs-unrooted-trees|Rooted vs. Unrooted Trees]]
