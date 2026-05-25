---
type: "medium"
title: "Implementing Graph Traversal: Breadth-First Search in Java"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/graph-algorithm-implementation|graph-algorithm-implementation]]"
learning-time-in-minutes: 2
---
# Implementing Graph Traversal: Breadth-First Search in Java

This lesson focuses on implementing graph traversal algorithms in Java, a core technique within broader algorithm implementation. We'll specifically tackle Breadth-First Search (BFS), a fundamental graph algorithm.

## What is Breadth-First Search (BFS)?

BFS is a graph traversal algorithm that explores a graph level by level. It starts at a chosen source node and visits all the node's immediate neighbors. Then, for each of those neighbors, it visits their unvisited neighbors, and so on. This systematic exploration ensures that nodes closer to the source are visited before nodes farther away.

BFS is useful for finding the shortest path in an unweighted graph, checking if a graph is connected, or finding all nodes reachable from a starting node.

## Practical Scenario: Social Network Connections

Imagine a simplified social network where users are nodes and friendships are edges. You want to find all users who are exactly two "friendships" away from a specific user. BFS is perfect for this. Starting from the target user, you'd find all their direct friends (level 1), and then find all the friends of those direct friends (level 2).

## Java Implementation of BFS

We'll represent our graph using an adjacency list, where each key in a `Map` is a node, and its value is a `List` of its neighbors.

```java
import java.util.*;

class Graph {
    private Map<Integer, List<Integer>> adjacencyList;

    public Graph() {
        adjacencyList = new HashMap<>();
    }

    public void addEdge(int source, int destination) {
        adjacencyList.computeIfAbsent(source, k -> new ArrayList<>()).add(destination);
        adjacencyList.computeIfAbsent(destination, k -> new ArrayList<>()).add(source); // For undirected graph
    }

    public void bfs(int startNode) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();

        visited.add(startNode);
        queue.add(startNode);

        System.out.println("BFS Traversal starting from node " + startNode + ":");

        while (!queue.isEmpty()) {
            int currentNode = queue.poll();
            System.out.print(currentNode + " ");

            List<Integer> neighbors = adjacencyList.get(currentNode);
            if (neighbors != null) {
                for (int neighbor : neighbors) {
                    if (!visited.contains(neighbor)) {
                        visited.add(neighbor);
                        queue.add(neighbor);
                    }
                }
            }
        }
        System.out.println();
    }
}

public class GraphTraversal {
    public static void main(String[] args) {
        Graph graph = new Graph();
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(1, 4);
        graph.addEdge(2, 5);
        graph.addEdge(3, 6);

        graph.bfs(0); // Start BFS from node 0
    }
}
```

**How it works:**

1.  **`Graph` Class:** Stores the graph using an adjacency list. `addEdge` adds connections between nodes.
2.  **`bfs(int startNode)` Method:**
    *   `visited`: A `Set` to keep track of nodes already visited.
    *   `queue`: A `Queue` (implemented by `LinkedList`) to store nodes to be visited.
    *   Initialization: Mark the `startNode` as visited and add it to the queue.
    *   Loop: While the queue is not empty, dequeue a node, process it (print it), and then enqueue all its unvisited neighbors, marking them as visited.

## Practice Task

Modify the `main` method in the `GraphTraversal` class to include a new node and some additional edges. Then, call the `bfs()` method with a different starting node and observe the output.

## Self-Check Questions

1.  What is the primary difference between BFS and Depth-First Search (DFS) in how they explore a graph?
2.  In the provided Java code, why is a `Queue` used for BFS?
3.  How would you adapt the `bfs` method to find the shortest path (in terms of number of edges) from a `startNode` to a specific `targetNode`?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/graph-algorithm-implementation|Graph Algorithm Implementation]]
