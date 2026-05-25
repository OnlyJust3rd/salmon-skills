---
type: medium
title: "Prim's Algorithm: Java Implementation for Minimum Spanning Tree"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[prim-s-algorithm-java-implementation|prim-s-algorithm-java-implementation]]"
learning-time-in-minutes: 4
---
# Prim's Algorithm: Java Implementation for Minimum Spanning Tree

This lesson focuses on implementing Prim's algorithm in Java to find the Minimum Spanning Tree (MST) of a connected, undirected graph. Understanding this algorithm is a crucial step in applying various graph algorithms within Java.

### What is a Minimum Spanning Tree?

A **Minimum Spanning Tree (MST)** is a subset of the edges of a connected, undirected graph that connects all the vertices together, without any cycles, and with the minimum possible total edge weight. If a graph is connected, it is guaranteed to have at least one spanning tree. An MST is the spanning tree with the smallest sum of edge weights.

### Prim's Algorithm: The Core Idea

Prim's algorithm is a **greedy algorithm**. It starts with an arbitrary vertex and grows the MST one edge at a time. At each step, it adds the cheapest edge that connects a vertex already in the MST to a vertex not yet in the MST.

### When to Use Prim's Algorithm

Prim's algorithm is well-suited for dense graphs (graphs with many edges) when implemented with an adjacency matrix and a simple array to track minimum edge weights. However, for sparse graphs, it can be more efficient when implemented using an adjacency list and a priority queue.

### Implementing Prim's Algorithm in Java

We'll focus on an implementation using an adjacency list and a priority queue, which generally offers better performance for most graph types.

**Data Structures Needed:**

1.  **Adjacency List:** To represent the graph. Each entry will store a list of neighboring vertices and the weight of the edge connecting them.
2.  **Priority Queue:** To efficiently select the minimum weight edge connecting a vertex in the MST to a vertex outside it. We'll store edges (or nodes with their edge weights) in the priority queue.
3.  **Visited Set/Array:** To keep track of vertices already included in the MST.
4.  **Key Array:** To store the minimum weight edge connecting each vertex to the MST. Initialized to infinity for all vertices except the starting one.
5.  **Parent Array:** To store the MST structure, indicating which edge connects a vertex to the MST.

**Steps:**

1.  **Initialization:**
    *   Create an adjacency list representation of the graph.
    *   Initialize `key` array with infinity for all vertices, except for the starting vertex (e.g., vertex 0), which is set to 0.
    *   Initialize `parent` array to -1 for all vertices.
    *   Initialize a `visited` array/set to `false` for all vertices.
    *   Create a priority queue and add the starting vertex with its key value (0).

2.  **Main Loop:**
    *   While the priority queue is not empty:
        *   Extract the vertex `u` with the minimum key value from the priority queue.
        *   If `u` is already visited, continue to the next iteration.
        *   Mark `u` as visited.
        *   For each neighbor `v` of `u`:
            *   If `v` is not visited and the weight of the edge `(u, v)` is less than the current `key[v]`:
                *   Update `key[v]` with the weight of edge `(u, v)`.
                *   Set `parent[v] = u`.
                *   Add `v` (with its new key value) to the priority queue.

3.  **Result:** The `parent` array now represents the MST. The total weight of the MST can be calculated by summing the `key` values of all vertices (excluding the starting vertex).

#### Java Code Example

Let's illustrate with a Java code snippet. We'll define a simple `Graph` class and then the `primsMST` method.

```java
import java.util.*;

class Edge {
    int to;
    int weight;

    public Edge(int to, int weight) {
        this.to = to;
        this.weight = weight;
    }
}

class Node {
    int vertex;
    int key;

    public Node(int vertex, int key) {
        this.vertex = vertex;
        this.key = key;
    }
}

public class PrimMST {

    // Function to find the Minimum Spanning Tree using Prim's algorithm
    public void primsMST(int V, List<List<Edge>> adj) {
        // Array to store constructed MST
        int[] parent = new int[V];
        // Key values used to pick minimum weight edge in cut
        int[] key = new int[V];
        // To represent set of vertices included in MST
        Boolean[] mstSet = new Boolean[V];

        // Initialize all keys as INFINITE and mstSet[] as false
        Arrays.fill(key, Integer.MAX_VALUE);
        Arrays.fill(mstSet, false);

        // Priority queue to store vertices that are being considered
        // Stores pairs of (key_value, vertex)
        PriorityQueue<Node> pq = new PriorityQueue<>(V, Comparator.comparingInt(node -> node.key));

        // Always include first vertex in MST. Make key 0 so that this vertex is picked as first vertex.
        key[0] = 0;
        parent[0] = -1; // First node is always the root of MST
        pq.add(new Node(0, key[0]));

        // The MST will have V vertices
        while (!pq.isEmpty()) {
            // Pick the minimum key vertex from the Priority Queue
            Node currentNode = pq.poll();
            int u = currentNode.vertex;

            // If the vertex is already included in MST, skip it
            if (mstSet[u]) {
                continue;
            }

            // Add the picked vertex to the MST Set
            mstSet[u] = true;

            // Update key value and parent index of the adjacent vertices of the picked vertex.
            // Consider only those vertices not yet included in MST
            for (Edge edge : adj.get(u)) {
                int v = edge.to;
                int weight = edge.weight;

                // If v is not in MST and weight of (u,v) is smaller than current key of v
                if (!mstSet[v] && weight < key[v]) {
                    parent[v] = u;
                    key[v] = weight;
                    pq.add(new Node(v, key[v]));
                }
            }
        }

        // Print the constructed MST
        printMST(parent, V, adj);
    }

    // A utility function to print the constructed MST stored in parent[]
    private void printMST(int[] parent, int V, List<List<Edge>> adj) {
        System.out.println("Edge \tWeight");
        int totalWeight = 0;
        for (int i = 1; i < V; ++i) {
            // Find the edge connecting vertex i to its parent
            int u = parent[i];
            int weight = 0;
            for(Edge edge : adj.get(u)) {
                if(edge.to == i) {
                    weight = edge.weight;
                    break;
                }
            }
            System.out.println(u + " - " + i + " \t" + weight);
            totalWeight += weight;
        }
        System.out.println("Total MST Weight: " + totalWeight);
    }

    // Helper to add edge to an undirected graph
    public static void addEdge(List<List<Edge>> adj, int u, int v, int weight) {
        adj.get(u).add(new Edge(v, weight));
        adj.get(v).add(new Edge(u, weight)); // For undirected graph
    }

    // Example Usage
    public static void main(String[] args) {
        int V = 5; // Number of vertices
        List<List<Edge>> adj = new ArrayList<>(V);
        for (int i = 0; i < V; ++i) {
            adj.add(new ArrayList<>());
        }

        // Add edges to the graph
        addEdge(adj, 0, 1, 2);
        addEdge(adj, 0, 3, 6);
        addEdge(adj, 1, 2, 3);
        addEdge(adj, 1, 3, 8);
        addEdge(adj, 1, 4, 5);
        addEdge(adj, 2, 4, 7);
        addEdge(adj, 3, 4, 9);

        PrimMST prim = new PrimMST();
        prim.primsMST(V, adj);
    }
}
```

**Explanation of the Code:**

*   **`Edge` Class:** Represents an edge with a destination vertex (`to`) and its `weight`.
*   **`Node` Class:** Used in the priority queue to store a `vertex` and its associated `key` (minimum weight to connect it to the MST).
*   **`primsMST(int V, List<List<Edge>> adj)`:**
    *   Initializes `parent`, `key`, and `mstSet` arrays.
    *   A `PriorityQueue` (`pq`) is used, ordered by the `key` value of `Node` objects.
    *   The loop continues as long as there are vertices in the `pq`.
    *   In each iteration, the vertex with the smallest `key` is extracted.
    *   If the vertex is not yet in the MST (`mstSet[u]` is false), it's added.
    *   Then, its neighbors are checked. If a neighbor `v` is not in the MST and the edge `(u, v)` offers a shorter path to connect `v` to the MST (i.e., `weight < key[v]`), `key[v]` and `parent[v]` are updated, and `v` is added to the `pq`.
*   **`printMST(...)`:** A helper function to display the resulting MST edges and their total weight.
*   **`addEdge(...)`:** A utility to add edges to the adjacency list for an undirected graph.
*   **`main(...)`:** Sets up a sample graph and calls `primsMST`.

This implementation demonstrates how to apply Prim's algorithm effectively in Java to solve the Minimum Spanning Tree problem.

## Supports

- [[prim-s-algorithm-java-implementation|Prim's Algorithm Java Implementation]]
