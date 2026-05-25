---
type: "medium"
title: "Data Structure Definitions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/data-structures/data-structure-principles/microskills/data-structure-definitions|data-structure-definitions]]"
learning-time-in-minutes: 4
---
# Data Structure Definitions

Understanding data structures is fundamental to building efficient software. Data structures are ways of organizing and storing data in a computer so that it can be accessed and manipulated efficiently. This lesson focuses on recalling the basic definitions of common data structures.

## What are Data Structures?

Think of data structures as containers for data. The way you organize the data in these containers affects how quickly you can perform operations like adding new data, finding specific data, or removing data. Different problems require different data structures to be solved effectively.

## Fundamental Data Structures: Definitions

Here's a look at some key data structures and their definitions:

*   **Array**: A collection of elements of the same data type, stored in contiguous memory locations. Elements are accessed using an index.
    *   *Example*: A list of student scores, where each score is an integer. `[85, 92, 78, 95]`
*   **Linked List**: A linear data structure where elements are not stored in contiguous memory locations. Each element (node) contains data and a pointer to the next node in the sequence.
    *   *Example*: A music playlist where each song points to the next song.
*   **Stack**: A linear data structure that follows the Last-In, First-Out (LIFO) principle. Elements are added and removed from the same end, called the "top".
    *   *Analogy*: A stack of plates. You add a new plate to the top, and you take a plate from the top.
*   **Queue**: A linear data structure that follows the First-In, First-Out (FIFO) principle. Elements are added at one end (rear) and removed from the other end (front).
    *   *Analogy*: A line of people waiting for a bus. The first person in line is the first one to get on the bus.
*   **Tree**: A non-linear data structure that consists of nodes connected by edges. It has a root node, and each node can have zero or more child nodes.
    *   *Example*: A file system directory structure.
*   **Binary Tree**: A special type of tree where each node has at most two children, referred to as the left child and the right child.
*   **Binary Search Tree (BST)**: A binary tree where the value of each node is greater than or equal to the values of its children. This property allows for efficient searching.
*   **Graph**: A non-linear data structure consisting of a set of vertices (nodes) and a set of edges connecting pairs of vertices.
    *   *Example*: A social network, where people are vertices and friendships are edges.
*   **Hash Table**: A data structure that uses a hash function to map keys to values. It provides very fast average-time insertion, deletion, and search operations.
*   **Adjacency Matrix**: A way to represent a graph where a 2D array is used. If there is an edge between vertex `i` and vertex `j`, then `matrix[i][j]` is 1 (or the weight of the edge); otherwise, it's 0.
*   **Adjacency List**: Another way to represent a graph. For each vertex, a list of all adjacent vertices is stored.

## Practical Scenario

Imagine you are building a simple social media application.

*   You might use an **array** to store the initial list of users.
*   A **linked list** could represent the "friends" list for each user, allowing easy addition or removal of friends.
*   A **stack** might be useful for implementing an "undo" feature for posts.
*   A **queue** would be perfect for managing friend requests, ensuring they are processed in the order they were received.
*   A **graph** is ideal for representing the entire social network, showing who is friends with whom.

## Practice Task

Write down the definition of a **Queue** and a **Stack** from memory. Then, describe a real-world scenario where a **Queue** would be the most appropriate data structure to use.

## Self-Check Questions

1.  What is the primary characteristic of a data structure that follows the LIFO principle?
2.  In a **Linked List**, what does each element (node) typically contain?
3.  Which data structure uses contiguous memory locations and is accessed by an index?
4.  Name a non-linear data structure used to represent relationships between entities.
5.  What is the key property that distinguishes a **Binary Search Tree (BST)** from a general **Binary Tree**?

## Supports

- [[skills/computing/computer-science/data-structures/data-structure-principles/microskills/data-structure-definitions|Data Structure Definitions]]
