---
type: "medium"
title: "Implementing the Bellman-Ford Algorithm in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/bellman-ford-algorithm-java-implementation|Bellman-Ford Algorithm Java Implementation]]"
---
# Implementing the Bellman-Ford Algorithm in Java

The Bellman-Ford algorithm is a fundamental graph algorithm used to find the shortest paths from a single source vertex to all other vertices in a weighted directed graph. A key advantage of Bellman-Ford over Dijkstra's algorithm is its ability to handle graphs with negative edge weights. It can also detect negative cycles, which would otherwise lead to infinitely short paths.

### Core Idea

Bellman-Ford works by iteratively relaxing all the edges in the graph. "Relaxing" an edge $(u, v)$ with weight $w$ means checking if the path to $v$ can be shortened by going through $u$. If the current known shortest distance to $v$ is greater than the distance to $u$ plus the weight of the edge $(u, v)$, then we update the distance to $v$.

This relaxation process is repeated $|V| - 1$ times, where $|V|$ is the number of vertices. After $|V| - 1$ iterations, if all shortest paths have been found, any further relaxation of an edge indicates the presence of a negative cycle reachable from the source.

### When to Use Bellman-Ford

*   When the graph may contain negative edge weights.
*   When you need to detect negative cycles.

Dijkstra's algorithm is generally faster ($O(E \log V)$ or $O(E + V \log V)$ with a Fibonacci heap) but fails with negative edge weights. Bellman-Ford has a higher time complexity of $O(V \cdot E)$.

### Implementation Steps

1.  **Represent the Graph:** We can represent the graph using an adjacency list or an edge list. For Bellman-Ford, an edge list is often more convenient as we iterate through all edges repeatedly.
2.  **Initialize Distances:** Create an array `dist` to store the shortest distance from the source to each vertex. Initialize all distances to infinity, except for the source vertex, which is set to 0.
3.  **Relax Edges Repeatedly:** Iterate $|V| - 1$ times. In each iteration, go through every edge $(u, v)$ with weight $w$. If `dist[u]` is not infinity and `dist[u] + w < dist[v]`, update `dist[v] = dist[u] + w`.
4.  **Detect Negative Cycles:** After $|V| - 1$ iterations, perform one more pass through all edges. If any edge $(u, v)$ with weight $w$ can still be relaxed (i.e., `dist[u] + w < dist[v]`), it means there's a negative cycle reachable from the source.

### Java Implementation

Let's define a simple `Edge` class to represent graph edges.

```java
class Edge {
    int source;
    int destination;
    int weight;

    public Edge(int source, int destination, int weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}
```

Now, the `BellmanFord` class:

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BellmanFord {

    private int V, E; // Number of vertices and edges
    private List<Edge> edges;

    public BellmanFord(int v) {
        V = v;
        E = 0;
        edges = new ArrayList<>();
    }

    // Adds an edge to the graph
    public void addEdge(int source, int destination, int weight) {
        edges.add(new Edge(source, destination, weight));
        E++;
    }

    // The main function that finds shortest paths from src
    // to all other vertices using Bellman-Ford algorithm
    public void findShortestPaths(int src) {
        // Step 1: Initialize distances from src to all other vertices as INFINITE
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;

        // Step 2: Relax all edges |V| - 1 times.
        // A simple shortest path from src to any other vertex can have at most |V| - 1 edges
        for (int i = 0; i < V - 1; ++i) {
            for (Edge edge : edges) {
                int u = edge.source;
                int v = edge.destination;
                int weight = edge.weight;

                // Check if dist[u] is not infinity before adding weight
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles.
        // If we can still relax edges, then there is a negative cycle
        for (Edge edge : edges) {
            int u = edge.source;
            int v = edge.destination;
            int weight = edge.weight;

            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                System.out.println("Graph contains negative weight cycle");
                return; // Or throw an exception
            }
        }

        // Print the shortest distances
        printDistances(dist);
    }

    // Utility function to print distances
    private void printDistances(int[] dist) {
        System.out.println("Vertex   Distance from Source");
        for (int i = 0; i < V; ++i) {
            String distance = (dist[i] == Integer.MAX_VALUE) ? "INF" : String.valueOf(dist[i]);
            System.out.println(i + "\t\t" + distance);
        }
    }

    public static void main(String[] args) {
        // Example Usage 1: Graph without negative cycles
        int V = 5;
        BellmanFord graph1 = new BellmanFord(V);
        graph1.addEdge(0, 1, -1);
        graph1.addEdge(0, 2, 4);
        graph1.addEdge(1, 2, 3);
        graph1.addEdge(1, 3, 2);
        graph1.addEdge(1, 4, 2);
        graph1.addEdge(3, 2, 5);
        graph1.addEdge(3, 1, 1);
        graph1.addEdge(4, 3, -3);

        System.out.println("--- Graph 1 (No Negative Cycle) ---");
        graph1.findShortestPaths(0);

        System.out.println("\n-------------------------------------\n");

        // Example Usage 2: Graph with a negative cycle
        int V2 = 4;
        BellmanFord graph2 = new BellmanFord(V2);
        graph2.addEdge(0, 1, 1);
        graph2.addEdge(0, 2, 4);
        graph2.addEdge(1, 2, -3);
        graph2.addEdge(2, 3, 2);
        graph2.addEdge(3, 1, -1); // This creates a negative cycle 1 -> 2 -> 3 -> 1

        System.out.println("--- Graph 2 (With Negative Cycle) ---");
        graph2.findShortestPaths(0);
    }
}
```

### How it Works

1.  **Initialization:** We set the distance to the source node to 0 and all other distances to `Integer.MAX_VALUE` (representing infinity).
2.  **Relaxation Loop:** The outer loop runs `V - 1` times. In each iteration, we examine *every* edge in the graph. For an edge `(u, v)` with weight `w`, if the current known shortest distance to `u` plus the weight of the edge `w` is less than the current known shortest distance to `v`, we update the distance to `v`. This is the core "relaxation" step.
3.  **Negative Cycle Detection:** After `V - 1` iterations, if a shortest path exists and there are no negative cycles, all shortest paths would have been found. The final loop checks if any edge can still be relaxed. If an edge `(u, v)` can be relaxed, it means that the path to `v` can be made even shorter by going through `u`, which implies there's a path from `u` back to `v` with a total negative weight. This indicates a negative cycle.

### Potential Pitfalls

*   **Integer Overflow:** When dealing with very large path weights, `dist[u] + weight` might overflow. Using `long` for distances can mitigate this.
*   **Unreachable Vertices:** If a vertex is unreachable from the source, its distance will remain `Integer.MAX_VALUE` (or "INF"). The code correctly handles this.
*   **Graph Representation:** While an edge list is used here for simplicity, an adjacency list can also be used, though the edge iteration would be slightly different.

By understanding these steps and the underlying logic, you can effectively implement the Bellman-Ford algorithm in Java to solve shortest path problems involving negative edge weights.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/bellman-ford-algorithm-java-implementation|Bellman-Ford Algorithm Java Implementation]]
