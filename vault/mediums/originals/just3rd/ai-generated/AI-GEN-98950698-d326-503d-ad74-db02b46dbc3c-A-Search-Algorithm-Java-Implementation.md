---
type: medium
title: "A* Search Algorithm: Java Implementation"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[a-search-algorithm-java-implementation|a-search-algorithm-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# A* Search Algorithm: Java Implementation

This lesson focuses on implementing the A* search algorithm in Java. A* is a widely used pathfinding algorithm that efficiently finds the shortest path between a start node and a goal node in a graph, considering both the cost to reach a node and an estimated cost to reach the goal from that node.

## Core Idea of A*

A* combines the benefits of Dijkstra's algorithm (finding the shortest path) and a greedy best-first search (prioritizing nodes that seem closest to the goal). It achieves this by using a heuristic function.

The core of A* is the evaluation function, $f(n)$, for each node $n$:

$$ f(n) = g(n) + h(n) $$

Where:
*   $g(n)$: The actual cost to reach node $n$ from the start node.
*   $h(n)$: A heuristic estimate of the cost to reach the goal node from node $n$. This is a crucial part of A* and must be "admissible" (never overestimates the actual cost) and ideally "consistent" for optimal performance.

A* explores nodes in increasing order of their $f(n)$ value.

## Data Structures for Implementation

To implement A* in Java, we'll need a few key data structures:

1.  **Graph Representation**: An adjacency list is a common and efficient way to represent the graph. Each node will store its neighbors and the cost to reach them.
2.  **Priority Queue**: To efficiently retrieve the node with the lowest $f(n)$ value, a `PriorityQueue` is ideal. This queue will store nodes to be explored.
3.  **Sets/Maps**:
    *   `openSet`: A set of nodes that have been discovered but not yet fully evaluated. In practice, this is often handled by the `PriorityQueue`.
    *   `closedSet`: A set of nodes that have already been evaluated.
    *   `cameFrom`: A map to reconstruct the path once the goal is found. It stores, for each node, the node that preceded it on the shortest path found so far.
    *   `gScore`: A map to store the $g(n)$ value for each node.
    *   `fScore`: A map to store the $f(n)$ value for each node.

## Java Implementation Steps

Here's a breakdown of the steps to implement A* in Java:

1.  **Node Class**: Create a `Node` class to represent nodes in the graph. It should store the node's identifier, its $g$, $h$, and $f$ scores, and a reference to its parent node (for path reconstruction). The `Node` class should implement `Comparable` to work with the `PriorityQueue`.

    ```java
    import java.util.*;

    class Node implements Comparable<Node> {
        String name; // Or an integer ID, etc.
        double gScore; // Cost from start to this node
        double hScore; // Heuristic cost from this node to goal
        double fScore; // gScore + hScore
        Node parent;

        public Node(String name) {
            this.name = name;
            this.gScore = Double.POSITIVE_INFINITY;
            this.hScore = 0;
            this.fScore = Double.POSITIVE_INFINITY;
            this.parent = null;
        }

        public String getName() {
            return name;
        }

        public double getfScore() {
            return fScore;
        }

        @Override
        public int compareTo(Node other) {
            return Double.compare(this.fScore, other.fScore);
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Node node = (Node) o;
            return Objects.equals(name, node.name);
        }

        @Override
        public int hashCode() {
            return Objects.hash(name);
        }
    }
    ```

2.  **Graph Representation (Adjacency List)**: A `Map<Node, Map<Node, Double>>` can represent an adjacency list, where the outer map keys are nodes, and the inner map stores their neighbors with the edge cost.

3.  **Heuristic Function**: Implement a heuristic function. For example, in a grid-based scenario, Manhattan distance or Euclidean distance are common admissible heuristics. For a general graph, a heuristic might not be readily available, or it might be trivial (e.g., always return 0, making it Dijkstra's).

    ```java
    // Example heuristic for a grid (assuming Node has x, y coordinates)
    // public double calculateHeuristic(Node current, Node goal) {
    //     return Math.abs(current.x - goal.x) + Math.abs(current.y - goal.y); // Manhattan distance
    // }
    ```

4.  **A* Algorithm Logic**:

    *   Initialize the `openSet` (a `PriorityQueue`) and `closedSet` (a `HashSet`).
    *   Initialize `gScore` and `fScore` maps.
    *   Set the `gScore` of the start node to 0 and its `fScore` to its heuristic value. Add it to the `openSet`.
    *   **Loop**: While the `openSet` is not empty:
        *   Get the node with the lowest `fScore` from the `openSet` (let's call it `current`).
        *   If `current` is the goal node, reconstruct and return the path.
        *   Move `current` from `openSet` to `closedSet`.
        *   For each neighbor of `current`:
            *   If the neighbor is in `closedSet`, skip it.
            *   Calculate `tentativeGScore = current.gScore + cost_between(current, neighbor)`.
            *   If `tentativeGScore` is less than the neighbor's current `gScore` (or if the neighbor is not in the `openSet`):
                *   Update the neighbor's `cameFrom` to `current`.
                *   Update the neighbor's `gScore` to `tentativeGScore`.
                *   Update the neighbor's `fScore = neighbor.gScore + h(neighbor)`.
                *   If the neighbor is not in the `openSet`, add it. Otherwise, update its position in the `PriorityQueue` (this might require removing and re-adding, or using a specialized `PriorityQueue` implementation).

5.  **Path Reconstruction**: Once the goal node is reached, backtrack from the goal to the start node using the `cameFrom` map to build the path.

## Pseudocode

```pseudocode
function AStar(startNode, goalNode, graph, heuristic):
  openSet = PriorityQueue()
  closedSet = Set()

  gScore = Map() // Stores g(n) for each node
  fScore = Map() // Stores f(n) for each node
  cameFrom = Map() // Stores parent node for path reconstruction

  // Initialize start node
  gScore[startNode] = 0
  fScore[startNode] = heuristic(startNode, goalNode)
  openSet.add(startNode)

  while openSet is not empty:
    current = openSet.poll() // Node with lowest fScore

    if current == goalNode:
      return reconstructPath(cameFrom, current)

    closedSet.add(current)

    for each neighbor of current in graph:
      if neighbor in closedSet:
        continue

      tentativeGScore = gScore[current] + cost(current, neighbor)

      if tentativeGScore < gScore.getOrDefault(neighbor, infinity):
        // This is a better path to neighbor
        cameFrom[neighbor] = current
        gScore[neighbor] = tentativeGScore
        fScore[neighbor] = tentativeGScore + heuristic(neighbor, goalNode)

        if neighbor not in openSet:
          openSet.add(neighbor)
        else:
          // Update neighbor's priority in the openSet
          // (implementation detail: might involve remove and add again)
          pass

  return null // Path not found

function reconstructPath(cameFrom, current):
  path = []
  while current is not null:
    path.add(current)
    current = cameFrom[current]
  reverse(path)
  return path
```

## Considerations

*   **Heuristic Choice**: A good heuristic is crucial for A*'s performance. An inadmissible heuristic can lead to suboptimal paths. A heuristic of 0 makes A* behave like Dijkstra's algorithm.
*   **Graph Representation**: The choice of graph representation (adjacency matrix vs. adjacency list) can impact performance, especially for sparse graphs.
*   **Priority Queue Implementation**: Efficiently updating node priorities in the `PriorityQueue` is important for performance. Some Java `PriorityQueue` implementations may require removing and re-adding elements.

By understanding these concepts and following the implementation steps, you can effectively code the A* search algorithm in Java.

## Supports

- [[a-search-algorithm-java-implementation|A* Search Algorithm Java Implementation]]
