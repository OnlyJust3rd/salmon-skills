---
type: "medium"
title: "Finding the Shortest Path: Dijkstra's Algorithm"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/graph-and-tree-modeling/microskills/shortest-path-algorithms|shortest-path-algorithms]]"
---
# Finding the Shortest Path: Dijkstra's Algorithm

In graph modeling, we often need to find the most efficient way to get from one point to another. This is where shortest path algorithms come in handy. For this lesson, we'll focus on **Dijkstra's Algorithm**, a popular method for finding the shortest path between nodes in a graph, especially when edge weights are non-negative.

## What is Dijkstra's Algorithm?

Dijkstra's Algorithm is a greedy algorithm that finds the shortest paths from a single source node to all other nodes in a graph. It works by iteratively exploring the graph, always choosing the path that currently seems shortest.

### Key Concepts

*   **Graph:** A collection of nodes (or vertices) connected by edges.
*   **Edge Weight:** A numerical value assigned to an edge, representing the cost, distance, or time to traverse that edge.
*   **Shortest Path:** The path between two nodes with the minimum total edge weight.
*   **Visited Nodes:** Nodes for which the shortest path from the source has been definitively determined.
*   **Unvisited Nodes:** Nodes whose shortest path from the source is still being considered.
*   **Distance Array/Map:** Stores the current shortest known distance from the source node to every other node. Initially, this is infinity for all nodes except the source, which is 0.
*   **Priority Queue:** A data structure that helps efficiently select the unvisited node with the smallest current distance.

## How Dijkstra's Algorithm Works (Step-by-Step)

Let's walk through the process with a small example.

**Scenario:** Imagine you're planning a road trip and want to find the fastest route from your home city (Node A) to several other cities. The road segments are represented by edges, and the travel time between cities is the edge weight.

**Graph:**

Consider this graph:

*   Nodes: A, B, C, D
*   Edges and Weights:
    *   A -> B (Weight: 4)
    *   A -> C (Weight: 2)
    *   B -> D (Weight: 5)
    *   C -> B (Weight: 1)
    *   C -> D (Weight: 8)

**Steps:**

1.  **Initialization:**
    *   Set the distance to the source node (A) to 0.
    *   Set the distance to all other nodes (B, C, D) to infinity (a very large number).
    *   Create a set of unvisited nodes: {A, B, C, D}.
    *   Create a priority queue and add all nodes to it, ordered by their current distance.

    | Node | Distance | Predecessor |
    | :--- | :------- | :---------- |
    | A    | 0        | None        |
    | B    | ∞        | None        |
    | C    | ∞        | None        |
    | D    | ∞        | None        |

2.  **Iteration:** While there are unvisited nodes:
    *   **Select Node:** Pick the unvisited node with the smallest current distance from the priority queue. Let's call this `currentNode`.
    *   **Mark as Visited:** Remove `currentNode` from the set of unvisited nodes.
    *   **Explore Neighbors:** For each unvisited neighbor of `currentNode`:
        *   Calculate the `distanceThroughCurrent = distance[currentNode] + edge_weight(currentNode, neighbor)`.
        *   If `distanceThroughCurrent < distance[neighbor]`:
            *   Update `distance[neighbor] = distanceThroughCurrent`.
            *   Set `predecessor[neighbor] = currentNode` (this helps reconstruct the path later).
            *   Update `neighbor`'s position in the priority queue.

**Let's trace our example, starting from A:**

*   **Iteration 1:**
    *   Smallest distance is A (0). Mark A as visited.
    *   Neighbors of A: B (weight 4), C (weight 2).
    *   Update B: `0 + 4 = 4`. Distance to B is now 4. Predecessor is A.
    *   Update C: `0 + 2 = 2`. Distance to C is now 2. Predecessor is A.
    *   Unvisited: {B, C, D}. Priority Queue: (C: 2), (B: 4), (D: ∞).

    | Node | Distance | Predecessor |
    | :--- | :------- | :---------- |
    | A    | 0        | None        |
    | B    | 4        | A           |
    | C    | 2        | A           |
    | D    | ∞        | None        |

*   **Iteration 2:**
    *   Smallest distance is C (2). Mark C as visited.
    *   Neighbors of C: B (weight 1), D (weight 8).
    *   Consider B: `distance[C] + weight(C, B) = 2 + 1 = 3`. This is less than the current distance to B (4).
        *   Update B: Distance to B is now 3. Predecessor is C.
    *   Consider D: `distance[C] + weight(C, D) = 2 + 8 = 10`. This is less than the current distance to D (∞).
        *   Update D: Distance to D is now 10. Predecessor is C.
    *   Unvisited: {B, D}. Priority Queue: (B: 3), (D: 10).

    | Node | Distance | Predecessor |
    | :--- | :------- | :---------- |
    | A    | 0        | None        |
    | B    | 3        | C           |
    | C    | 2        | A           |
    | D    | 10       | C           |

*   **Iteration 3:**
    *   Smallest distance is B (3). Mark B as visited.
    *   Neighbors of B: D (weight 5).
    *   Consider D: `distance[B] + weight(B, D) = 3 + 5 = 8`. This is less than the current distance to D (10).
        *   Update D: Distance to D is now 8. Predecessor is B.
    *   Unvisited: {D}. Priority Queue: (D: 8).

    | Node | Distance | Predecessor |
    | :--- | :------- | :---------- |
    | A    | 0        | None        |
    | B    | 3        | C           |
    | C    | 2        | A           |
    | D    | 8        | B           |

*   **Iteration 4:**
    *   Smallest distance is D (8). Mark D as visited.
    *   D has no unvisited neighbors.
    *   Unvisited: {}. The algorithm terminates.

**Final Shortest Paths from A:**

*   To A: 0 (Path: A)
*   To B: 3 (Path: A -> C -> B)
*   To C: 2 (Path: A -> C)
*   To D: 8 (Path: A -> C -> B -> D)

## When to Use Dijkstra's Algorithm

*   When you need to find the shortest path from a single source to all other nodes.
*   When all edge weights in the graph are non-negative.
*   Commonly used in GPS navigation systems, network routing protocols, and game pathfinding.

## Important Considerations

*   **Negative Edge Weights:** Dijkstra's algorithm does **not** work correctly with negative edge weights. For graphs with negative edge weights (but no negative cycles), you would use the Bellman-Ford algorithm.
*   **Efficiency:** The efficiency of Dijkstra's algorithm depends heavily on the implementation of the priority queue. With a binary heap, its time complexity is typically $$O(E \log V)$$, where E is the number of edges and V is the number of vertices.

By understanding and applying Dijkstra's algorithm, you can effectively solve problems that require finding the most efficient routes within graph structures.

## Supports

- [[skills/programming/data-structures/graph-and-tree-modeling/microskills/shortest-path-algorithms|Shortest Path Algorithms]]
