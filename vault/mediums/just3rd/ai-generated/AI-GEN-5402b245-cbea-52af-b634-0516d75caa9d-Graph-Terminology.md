---
type: "medium"
title: "Understanding Graph Terminology"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/graph-and-tree-modeling/microskills/graph-terminology|Graph Terminology]]"
---
# Understanding Graph Terminology

This lesson focuses on recalling the fundamental terms used when working with graphs, a core concept in Graph and Tree Modeling. We will define vertices, edges, paths, and cycles.

## What is a Graph?

At its heart, a graph is a way to represent relationships between objects. Imagine a network of cities connected by roads, or people connected by friendships. Graphs are made up of two main components:

*   **Vertices (or Nodes):** These represent the individual objects or entities in our network.
*   **Edges (or Links):** These represent the connections or relationships between vertices.

### Vertices

A vertex is a single point or node in a graph.

**Example:** In a social network graph, each person is a vertex. In a map of cities and roads, each city is a vertex.

### Edges

An edge is a line connecting two vertices, signifying a relationship or connection between them. Edges can be:

*   **Undirected:** The connection goes both ways. If person A is friends with person B, then person B is also friends with person A. The edge between them doesn't have a specific direction.
*   **Directed:** The connection has a specific direction. If person A follows person B on social media, this is a directed edge from A to B. B does not necessarily follow A.

**Example:**
*   An undirected edge between City A and City B means you can travel from A to B and from B to A.
*   A directed edge from User X to User Y on a platform means User X sent a message to User Y.

### Paths

A path is a sequence of connected edges that leads from one vertex to another. It's like a route you can take through the graph.

*   **Simple Path:** A path where no vertex is repeated.
*   **Path Length:** The number of edges in a path.

**Example:**
Consider a graph with vertices A, B, C, and D, and edges (A, B), (B, C), and (C, D).
*   A path from A to D could be A -> B -> C -> D. The length of this path is 3.
*   A simple path from A to C would be A -> B -> C.

### Cycles

A cycle is a path that starts and ends at the same vertex, and no edge is repeated.

*   **Simple Cycle:** A cycle where all vertices are distinct except for the start and end vertex.

**Example:**
In our previous graph, if we add an edge (D, A), then A -> B -> C -> D -> A forms a cycle.

## Key Definitions Summary

To solidify your understanding, let's list the core definitions:

> **Vertex (or Node):** A fundamental unit or entity in a graph.
>
> **Edge (or Link):** A connection between two vertices, representing a relationship.
>
> **Undirected Edge:** A connection without a specific direction.
>
> **Directed Edge:** A connection with a specific direction from one vertex to another.
>
> **Path:** A sequence of edges connecting two vertices.
>
> **Simple Path:** A path where no vertex is repeated.
>
> **Cycle:** A path that begins and ends at the same vertex, with no repeated edges.
>
> **Simple Cycle:** A cycle where all vertices are distinct, except the start/end vertex.

Practicing with different graph examples will help you quickly identify and recall these terms.

## Supports

- [[skills/programming/data-structures/graph-and-tree-modeling/microskills/graph-terminology|Graph Terminology]]
