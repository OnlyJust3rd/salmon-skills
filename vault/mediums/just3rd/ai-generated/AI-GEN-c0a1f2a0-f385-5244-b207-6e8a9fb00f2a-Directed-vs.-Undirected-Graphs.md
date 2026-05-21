---
type: "medium"
title: "Understanding Directed vs. Undirected Graphs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/graph-and-tree-modeling/microskills/directed-vs-undirected-graphs|directed-vs-undirected-graphs]]"
---
# Understanding Directed vs. Undirected Graphs

In the world of graph modeling, understanding the fundamental properties of the structures we use is key. One of the most basic distinctions lies in how the connections, or edges, between our nodes (or vertices) behave. This lesson focuses on a core concept within graph theory: the difference between **directed** and **undirected** graphs.

## What is a Graph?

Before diving into the specifics, let's quickly recall what a graph is. A graph is a collection of **nodes** (also called vertices) and **edges**. Edges are connections that link pairs of nodes. Think of cities connected by roads, or people connected by friendships.

## Undirected Graphs: Two-Way Streets

In an **undirected graph**, the edges represent a relationship that is symmetrical or bidirectional. This means if there's an edge between node A and node B, the connection goes both ways. It's like a two-way street.

**Key Properties of Undirected Graphs:**

*   **Symmetrical Relationships:** An edge `{u, v}` between node `u` and node `v` implies that `u` is connected to `v`, AND `v` is connected to `u`.
*   **Edge Representation:** Edges are typically represented as unordered pairs, like `{u, v}`. The order doesn't matter.
*   **Real-World Examples:**
    *   **Social Networks (Friendship):** If Alice is friends with Bob, Bob is also friends with Alice.
    *   **Road Networks (Two-way roads):** If there's a road connecting Town A and Town B, you can travel from A to B and from B to A using that road.
    *   **Physical Connections:** Two computers directly connected by a network cable.

**Visualizing Undirected Graphs:**

Imagine two dots (nodes) with a line connecting them. This single line signifies a connection that works in both directions.

```
A --- B
```

In this simple undirected graph, the edge between A and B means A is connected to B, and B is connected to A.

## Directed Graphs: One-Way Streets

In contrast, a **directed graph** (often called a digraph) has edges that have a specific direction. This means an edge from node A to node B does not automatically imply a connection from B to A. These are like one-way streets.

**Key Properties of Directed Graphs:**

*   **Asymmetrical Relationships:** An edge `(u, v)` from node `u` to node `v` means `u` points to `v`. This does *not* automatically mean `v` points to `u`.
*   **Edge Representation:** Edges are represented as ordered pairs, like `(u, v)`, where the first element is the source node and the second is the target node.
*   **Real-World Examples:**
    *   **Web Links:** A link from webpage A to webpage B doesn't mean webpage B links back to A.
    *   **Flow of Information/Data:** Data flowing from a server to a client.
    *   **Dependency Relationships:** Task A must be completed before Task B can start.
    *   **Road Networks (One-way roads):** A street where traffic only flows in one direction.

**Visualizing Directed Graphs:**

In a directed graph, edges are typically shown with arrows to indicate their direction.

```
A --> B
```

Here, the arrow from A to B means there's a directed connection from A to B. There might or might not be a connection from B to A.

## Key Differences Summarized

| Feature         | Undirected Graph                      | Directed Graph                       |
| :-------------- | :------------------------------------ | :----------------------------------- |
| **Edge Direction** | Bidirectional (two-way)               | Unidirectional (one-way)             |
| **Edge Notation** | Unordered pair (e.g., `{u, v}`)       | Ordered pair (e.g., `(u, v)`)        |
| **Relationship** | Symmetrical                           | Asymmetrical                         |
| **Example**     | Friendship, two-way roads             | Web links, one-way roads, dependencies |

## When to Use Which?

The choice between a directed and an undirected graph depends entirely on the nature of the relationships you are trying to model.

*   **Use an Undirected Graph when:** The relationship between two entities is mutual and doesn't have a inherent flow or sequence. If A is related to B in the same way B is related to A, an undirected graph is suitable.
*   **Use a Directed Graph when:** The relationship has a clear direction, a cause-and-effect, a flow, a dependency, or a one-way interaction. If A influences B, but B doesn't necessarily influence A in the same way, a directed graph is more appropriate.

Understanding this fundamental difference is crucial for building accurate and meaningful graph models, whether you're analyzing social networks, understanding web structures, or planning transportation systems.

## Supports

- [[skills/programming/data-structures/graph-and-tree-modeling/microskills/directed-vs-undirected-graphs|Directed vs. Undirected Graphs]]
