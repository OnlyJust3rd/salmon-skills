---
type: "medium"
title: "Graph Traversal Algorithms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/graph-traversal-algorithms|graph-traversal-algorithms]]"
learning-time-in-minutes: 3
---
# Graph Traversal Algorithms

Graphs are powerful structures for representing relationships between entities. To work with these relationships, we need ways to systematically explore them. Graph traversal algorithms are fundamental methods for visiting every node (or vertex) in a graph. Understanding these algorithms is key to solving many problems in areas like social networks, routing, and recommendation systems.

### What is Graph Traversal?

Graph traversal involves starting at a specific node and systematically visiting all reachable nodes. The order in which nodes are visited defines the traversal algorithm. Two of the most common and foundational graph traversal algorithms are Breadth-First Search (BFS) and Depth-First Search (DFS).

### Breadth-First Search (BFS)

BFS explores a graph level by level. It starts at a source node and visits all its immediate neighbors. Then, for each of those neighbors, it visits their unvisited neighbors, and so on. BFS uses a queue data structure to keep track of nodes to visit.

**Practical Scenario:** Imagine you're building a social network application. You want to find all friends of your friends (two degrees of separation). BFS is perfect for this. Starting from your profile, BFS would first visit all your direct friends. Then, from each of those friends, it would visit their friends (who are not already you or your direct friends).

### Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking. It starts at a source node and explores as far as possible along each branch before backtracking. DFS typically uses a stack data structure (either explicitly or implicitly via recursion) to keep track of nodes to visit.

**Practical Scenario:** Consider detecting cycles in a directed graph, like dependencies in software projects. If you start at one project and follow its dependencies, and then the dependencies of those dependencies, and so on, you might eventually loop back to the original project. DFS is well-suited for this "going deep" exploration to find such cycles.

### Practice Task

Consider the following simple graph:

A -- B -- C
|    |
D -- E

1.  **Using BFS:** Starting from node 'A', list the order in which you would visit the nodes.
2.  **Using DFS:** Starting from node 'A', list one possible order in which you would visit the nodes.

### Self-Check Questions

1.  When would you prefer BFS over DFS?
2.  What data structure is commonly used with BFS?
3.  What data structure is commonly used with DFS?
4.  If you want to find the shortest path in an unweighted graph, which traversal algorithm is generally more suitable?

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/graph-traversal-algorithms|Graph Traversal Algorithms]]
