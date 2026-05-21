---
type: "medium"
title: "Identifying Common Data Structures"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/data-structure-principles/microskills/common-data-structure-identification|common-data-structure-identification]]"
---
# Identifying Common Data Structures

Welcome! In this lesson, we'll focus on recognizing various common data structures. Understanding what these structures are is a fundamental step in mastering data structure principles.

## What are Data Structures?

Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Think of them as containers for data, each with its own rules about how items are added, removed, and accessed.

## Common Data Structures to Identify

Here's a list of common data structures you should be able to identify. We'll briefly describe each:

*   **Arrays:** A collection of elements of the same type, stored in contiguous memory locations. You access elements using an index.
*   **Linked Lists:** A sequence of nodes, where each node contains data and a pointer to the next node. They are dynamic and can grow or shrink.
*   **Stacks:** A Last-In, First-Out (LIFO) structure. Imagine a stack of plates – you add and remove plates from the top.
*   **Queues:** A First-In, First-Out (FIFO) structure. Like a queue at a store, the first person in line is the first served.
*   **Trees:** Hierarchical structures where each node can have zero or more child nodes.
    *   **Binary Trees:** A tree where each node has at most two children (left and right).
    *   **Binary Search Trees (BSTs):** A binary tree where the left child's value is less than the parent's, and the right child's value is greater.
    *   **AVL Trees:** Self-balancing BSTs that maintain a balanced structure to ensure efficient operations.
*   **Graphs:** A collection of nodes (vertices) connected by edges. They can represent complex relationships.
    *   **Adjacency Matrix:** A way to represent a graph using a 2D array where `matrix[i][j]` indicates if there's an edge between vertex `i` and vertex `j`.
    *   **Adjacency List:** A way to represent a graph where each vertex has a list of its adjacent vertices.
*   **Hash Tables:** Data structures that store key-value pairs. They use a hash function to compute an index into an array, allowing for fast lookups.

## Practical Scenario

Imagine you are building a simple to-do list application.

*   When you add a new task, it's placed at the end, and when you complete a task, you typically want to remove the one you finished most recently. This sounds like a **Stack**.
*   However, if you want to see tasks in the order they were added, and mark them as done from the front of the list, this behaves more like a **Queue**.
*   If you have a complex network of friends and want to see who is connected to whom, and find paths between them, a **Graph** would be suitable.
*   Storing a list of user scores where each user has a unique ID and you want to quickly retrieve a score by ID suggests a **Hash Table**.

## Practice Task

Look at the following descriptions and identify the most appropriate data structure.

1.  A system to manage printer jobs, where the first job sent to the printer is the first one printed.
2.  A phone book where you want to quickly look up a phone number given a person's name.
3.  A data structure to store the undo history in a text editor, where the most recent action is the first one to be undone.
4.  Representing a social network where users are nodes and friendships are edges.
5.  Storing a collection of student records, accessed by their student ID, where all records are stored consecutively.

## Self-Check Questions

1.  What is the key characteristic of a Stack?
2.  If you need to store a collection of items and access them by a numerical index, what data structure is commonly used?
3.  What type of data structure is used to represent relationships between entities?
4.  In a Queue, which element is removed first?
5.  What is the difference between an Adjacency Matrix and an Adjacency List in graph representation?

## Supports

- [[skills/programming/data-structures/data-structure-principles/microskills/common-data-structure-identification|Common Data Structure Identification]]
