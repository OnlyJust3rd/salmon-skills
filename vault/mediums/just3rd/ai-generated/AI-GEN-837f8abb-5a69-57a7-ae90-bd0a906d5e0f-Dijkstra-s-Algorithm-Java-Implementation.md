---
type: "medium"
title: "Dijkstra's Algorithm: Finding the Shortest Path in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/dijkstra-s-algorithm-java-implementation|Dijkstra's Algorithm Java Implementation]]"
---
# Dijkstra's Algorithm: Finding the Shortest Path in Java

This lesson focuses on implementing Dijkstra's algorithm in Java to find the shortest path between nodes in a weighted graph.

## What is Dijkstra's Algorithm?

Dijkstra's algorithm is a greedy algorithm that finds the shortest paths from a single source node to all other nodes in a graph with non-negative edge weights. It works by iteratively selecting the unvisited node with the smallest known distance from the source and updating the distances of its neighbors.

## When to Use Dijkstra's Algorithm

Use Dijkstra's algorithm when you need to find:

*   The shortest route between two points on a map (like GPS navigation).
*   The least-cost path in a network.
*   The minimum number of hops in a network with uniform edge weights.

**Important Constraint:** Dijkstra's algorithm *only* works correctly for graphs with non-negative edge weights. If your graph has negative edge weights, you'll need to use an algorithm like Bellman-Ford.

## How Dijkstra's Algorithm Works (Conceptual)

1.  **Initialization:**
    *   Assign a distance of 0 to the source node.
    *   Assign an infinite distance to all other nodes.
    *   Create a set of unvisited nodes, initially containing all nodes.
    *   Create a data structure to keep track of the predecessor of each node on the shortest path.

2.  **Iteration:**
    *   While the set of unvisited nodes is not empty:
        *   Select the unvisited node `u` with the smallest current distance from the source.
        *   Mark `u` as visited.
        *   For each unvisited neighbor `v` of `u`:
            *   Calculate the distance from the source to `v` through `u`: `distance(source, u) + weight(u, v)`.
            *   If this calculated distance is smaller than the current known distance to `v`, update the distance to `v` and set `u` as the predecessor of `v`.

3.  **Termination:** The algorithm terminates when all nodes have been visited or when the smallest distance among unvisited nodes is infinity (meaning the remaining nodes are unreachable from the source).

## Implementing Dijkstra's Algorithm in Java

To implement Dijkstra's algorithm efficiently, we typically use a priority queue to store nodes to visit, ordered by their current shortest distance. This allows us to quickly extract the node with the minimum distance.

We'll represent the graph using an adjacency list where each entry stores the destination node and the weight of the edge.

### Data Structures

*   **Graph Representation:** An adjacency list. `List<List<Node>> adj` where `Node` is a custom class holding `vertex` and `weight`.
*   **Distances:** An array `int[] dist` to store the shortest distance from the source to each vertex. Initialize with infinity.
*   **Priority Queue:** `PriorityQueue<Node>` to store `(distance, vertex)` pairs, ordered by distance.
*   **Visited Set (Implicit):** The priority queue implicitly handles visited nodes by not re-adding them if a shorter path is found.

### Java Code Example

Let's define a simple `Node` class and then the `DijkstraAlgorithm` class.

```java
import java.util.*;

// Represents a node in the adjacency list and priority queue
class Node implements Comparable<Node> {
    int vertex;
    int weight;

    public Node(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }

    // For PriorityQueue comparison
    @Override
    public int compareTo(Node other) {
        return Integer.compare(this.weight, other.weight);
    }
}

// Class to manage the graph and Dijkstra's algorithm
class DijkstraAlgorithm {
    private int V; // Number of vertices
    private List<List<Node>> adj; // Adjacency List

    public DijkstraAlgorithm(int v) {
        V = v;
        adj = new ArrayList<>(v);
        for (int i = 0; i < v; ++i) {
            adj.add(new ArrayList<>());
        }
    }

    // Function to add an edge to the graph
    public void addEdge(int src, int dest, int weight) {
        adj.get(src).add(new Node(dest, weight));
        // For undirected graph, add the reverse edge as well
        // adj.get(dest).add(new Node(src, weight));
    }

    // Function to perform Dijkstra's algorithm
    public int[] dijkstra(int source) {
        // dist[i] will hold the shortest distance from source to i
        int[] dist = new int[V];

        // Initialize all distances as INFINITE
        Arrays.fill(dist, Integer.MAX_VALUE);

        // Distance of source vertex from itself is always 0
        dist[source] = 0;

        // Priority queue to store vertices that are being processed.
        // The priority queue will sort based on the weight (distance) of the Node.
        PriorityQueue<Node> pq = new PriorityQueue<>();

        // Add the source vertex to the priority queue
        pq.add(new Node(source, 0));

        while (!pq.isEmpty()) {
            // Extract the vertex with the minimum distance from the priority queue
            Node uNode = pq.poll();
            int u = uNode.vertex;
            int uWeight = uNode.weight; // This is the actual distance to vertex u

            // If the extracted distance is greater than the current known shortest distance,
            // it means we've found a shorter path already. Skip this.
            if (uWeight > dist[u]) {
                continue;
            }

            // Iterate over all adjacent vertices of the extracted vertex u
            for (Node neighborNode : adj.get(u)) {
                int v = neighborNode.vertex;
                int edgeWeight = neighborNode.weight;

                // If a shorter path to v is found through u
                if (dist[u] != Integer.MAX_VALUE && dist[u] + edgeWeight < dist[v]) {
                    // Update distance of v
                    dist[v] = dist[u] + edgeWeight;
                    // Add v to the priority queue with its new shorter distance
                    pq.add(new Node(v, dist[v]));
                }
            }
        }
        // Return the array containing shortest distances from source to all other vertices
        return dist;
    }

    public static void main(String[] args) {
        int V = 5;
        DijkstraAlgorithm graph = new DijkstraAlgorithm(V);

        graph.addEdge(0, 1, 10);
        graph.addEdge(0, 4, 3);
        graph.addEdge(1, 2, 2);
        graph.addEdge(1, 4, 4);
        graph.addEdge(2, 3, 9);
        graph.addEdge(3, 2, 7);
        graph.addEdge(4, 1, 1);
        graph.addEdge(4, 2, 8);
        graph.addEdge(4, 3, 2);

        int sourceVertex = 0;
        int[] shortestDistances = graph.dijkstra(sourceVertex);

        System.out.println("Shortest distances from source vertex " + sourceVertex + ":");
        for (int i = 0; i < V; i++) {
            System.out.println("To vertex " + i + ": " + shortestDistances[i]);
        }
    }
}
```

### How the Code Works

1.  **`Node` Class:** A simple class to hold a `vertex` and its associated `weight`. It implements `Comparable` so that the `PriorityQueue` can order nodes based on their weights.
2.  **`DijkstraAlgorithm` Class:**
    *   `V`: Stores the number of vertices.
    *   `adj`: An `ArrayList` of `ArrayLists` representing the adjacency list. `adj.get(i)` gives a list of `Node` objects connected to vertex `i`.
    *   `addEdge(src, dest, weight)`: Adds a directed edge from `src` to `dest` with the given `weight`.
    *   `dijkstra(source)`:
        *   Initializes `dist` array with `Integer.MAX_VALUE` (representing infinity) and `dist[source]` to 0.
        *   Creates a `PriorityQueue<Node>`.
        *   Adds the `source` node with weight 0 to the `pq`.
        *   The `while` loop continues as long as the `pq` is not empty.
        *   `pq.poll()` extracts the `Node` with the smallest current distance.
        *   The `if (uWeight > dist[u])` check is crucial. If we've already found a shorter path to `u`, we ignore this outdated entry from the `pq`.
        *   It then iterates through all neighbors `v` of `u`.
        *   If a shorter path to `v` is found (i.e., `dist[u] + edgeWeight < dist[v]`), `dist[v]` is updated, and a new `Node(v, dist[v])` is added to the `pq`. This might add duplicate `v` nodes to the `pq`, but the `if (uWeight > dist[u])` check handles this efficiently.
3.  **`main` Method:** Demonstrates how to create a graph, add edges, and run Dijkstra's algorithm, then prints the results.

## Complexity

*   **Time Complexity:**
    *   Using a binary heap (like Java's `PriorityQueue`): $$O((V + E) \log V)$$, where V is the number of vertices and E is the number of edges.
    *   If the graph is dense (E is close to V^2), this is roughly $$O(V^2 \log V)$$.
*   **Space Complexity:** $$O(V + E)$$ for the adjacency list and $$O(V)$$ for the distance array and priority queue.

## Potential Pitfalls and Considerations

*   **Negative Edge Weights:** As mentioned, Dijkstra's fails with negative edge weights.
*   **Graph Representation:** The choice of adjacency list is generally efficient for sparse graphs. For very dense graphs, an adjacency matrix might be considered, though the complexity benefits of a priority queue are often lost.
*   **Integer Overflow:** Be mindful of potential integer overflows if edge weights or path sums can become very large. Using `long` for distances might be necessary in such cases.

By understanding and implementing Dijkstra's algorithm, you gain a powerful tool for solving shortest path problems in various applications.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/dijkstra-s-algorithm-java-implementation|Dijkstra's Algorithm Java Implementation]]
