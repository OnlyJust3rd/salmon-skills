---
type: "medium"
title: "Implementing the Floyd-Warshall Algorithm in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/floyd-warshall-algorithm-java-implementation|Floyd-Warshall Algorithm Java Implementation]]"
---
# Implementing the Floyd-Warshall Algorithm in Java

The Floyd-Warshall algorithm is a powerful tool for finding the shortest paths between *all pairs* of vertices in a weighted graph. This differs from algorithms like Dijkstra's, which typically find shortest paths from a single source. When you need to know the shortest distance between any two points in a network, Floyd-Warshall is a strong candidate.

## Core Idea: Dynamic Programming

At its heart, Floyd-Warshall is a dynamic programming algorithm. It builds up the solution incrementally by considering intermediate vertices. The key idea is to iteratively improve estimates of the shortest path between any two vertices `i` and `j` by allowing a new vertex `k` as an intermediate point.

Let `dist[i][j]` be the shortest distance found so far between vertex `i` and vertex `j`.
Initially, `dist[i][j]` is the direct edge weight between `i` and `j` if an edge exists, infinity if no direct edge exists, and 0 if `i` equals `j`.

The algorithm then iterates through all possible intermediate vertices `k`. For each `k`, it checks if going from `i` to `j` via `k` (`dist[i][k] + dist[k][j]`) is shorter than the current known shortest path between `i` and `j` (`dist[i][j]`). If it is, `dist[i][j]` is updated.

The recurrence relation is:
$$
\text{dist}[i][j] = \min(\text{dist}[i][j], \text{dist}[i][k] + \text{dist}[k][j])
$$

This process is repeated for all possible values of `k`, `i`, and `j`.

## Java Implementation

We'll represent the graph using an adjacency matrix, where `graph[i][j]` stores the weight of the edge from vertex `i` to vertex `j`. We'll use a large value (like `Integer.MAX_VALUE`) to represent infinity for non-existent edges.

```java
import java.util.Arrays;

public class FloydWarshall {

    private static final int INF = Integer.MAX_VALUE; // Represents infinity

    /**
     * Computes the shortest paths between all pairs of vertices using the Floyd-Warshall algorithm.
     *
     * @param graph The adjacency matrix representing the graph. graph[i][j] is the weight of the edge from i to j.
     *              Use INF for no direct edge. graph[i][i] should be 0.
     * @return A 2D array representing the shortest distances between all pairs of vertices.
     */
    public int[][] findShortestPaths(int[][] graph) {
        int V = graph.length; // Number of vertices
        int[][] dist = new int[V][V];

        // Initialize the distance matrix with the given graph weights
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                dist[i][j] = graph[i][j];
            }
        }

        // The core of the Floyd-Warshall algorithm
        // Pick all vertices as intermediate vertices one by one
        for (int k = 0; k < V; k++) {
            // Pick all vertices as source one by one
            for (int i = 0; i < V; i++) {
                // Pick all vertices as destination for the above picked source
                for (int j = 0; j < V; j++) {
                    // If vertex k is on the shortest path from i to j, then update the value of dist[i][j]

                    // Check for overflow before addition: dist[i][k] != INF and dist[k][j] != INF
                    if (dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // Detect negative cycles (optional but good practice)
        // If dist[i][i] becomes negative for any i, then there is a negative cycle
        // reachable from i.
        for (int i = 0; i < V; i++) {
            if (dist[i][i] < 0) {
                System.err.println("Graph contains a negative cycle!");
                // Depending on requirements, you might throw an exception or return a special value.
                // For this example, we'll continue but acknowledge the issue.
            }
        }

        return dist;
    }

    // Helper method to print the distance matrix
    public static void printSolution(int[][] dist) {
        int V = dist.length;
        System.out.println("The following matrix shows the shortest distances between every pair of vertices:");
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][j] == INF) {
                    System.out.print("INF\t");
                } else {
                    System.out.print(dist[i][j] + "\t");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        /*
           Let us create the following graph
           (0) --4--> (1)
            |         /|\
            5          |
            |          3
           \|/         |
           (2) <--2--- (3)
        */
        int graph[][] = {
            {0, 3, INF, 7},
            {8, 0, 2, INF},
            {5, INF, 0, 1},
            {2, INF, INF, 0}
        };

        FloydWarshall fw = new FloydWarshall();
        int[][] shortestDistances = fw.findShortestPaths(graph);

        printSolution(shortestDistances);
    }
}
```

### How the Code Works:

1.  **Initialization**:
    *   `INF` is set to `Integer.MAX_VALUE` to represent unreachable paths.
    *   A `dist` matrix is created, initialized with the direct edge weights from the input `graph`. `dist[i][i]` is 0, and `dist[i][j]` is `INF` if no direct edge exists.

2.  **Triple Nested Loops**:
    *   The outermost loop (`k`) iterates through each vertex, considering it as a potential intermediate vertex.
    *   The two inner loops (`i` and `j`) iterate through all possible source (`i`) and destination (`j`) pairs.

3.  **Distance Update**:
    *   Inside the innermost loop, the condition `dist[i][k] != INF && dist[k][j] != INF` is crucial. It ensures that we only consider paths where both the `i` to `k` and `k` to `j` segments are reachable.
    *   If `dist[i][k] + dist[k][j]` is less than the current `dist[i][j]`, it means we've found a shorter path from `i` to `j` that goes through `k`, so `dist[i][j]` is updated.

4.  **Negative Cycle Detection**:
    *   After the main loops, the code checks if `dist[i][i]` is negative for any vertex `i`. If it is, it indicates that there's a negative cycle reachable from `i`, which can lead to infinitely short paths.

5.  **`main` Method**:
    *   Demonstrates how to create a sample graph using an adjacency matrix.
    *   Instantiates the `FloydWarshall` class.
    *   Calls `findShortestPaths` to compute the distances.
    *   Uses `printSolution` to display the resulting shortest path matrix.

## Time and Space Complexity

*   **Time Complexity**: The algorithm has three nested loops, each running `V` times (where `V` is the number of vertices). Therefore, the time complexity is **$$O(V^3)$$**.
*   **Space Complexity**: The algorithm uses an additional matrix of size `V x V` to store the shortest distances. Thus, the space complexity is **$$O(V^2)$$**.

## When to Use Floyd-Warshall

*   When you need the shortest path between *all pairs* of vertices.
*   When the graph is relatively small, as $$O(V^3)$$ can be prohibitive for very large graphs.
*   When the graph can contain negative edge weights (but no negative cycles for meaningful shortest paths).
*   It's often used as a subroutine in other algorithms or for certain network analysis tasks.

The Floyd-Warshall algorithm provides a systematic way to solve the all-pairs shortest path problem, making it a valuable technique in your graph algorithm toolkit.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/floyd-warshall-algorithm-java-implementation|Floyd-Warshall Algorithm Java Implementation]]
