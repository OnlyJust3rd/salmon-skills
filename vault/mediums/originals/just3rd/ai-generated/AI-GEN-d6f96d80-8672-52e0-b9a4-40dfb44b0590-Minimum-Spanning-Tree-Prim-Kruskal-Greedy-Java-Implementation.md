---
type: medium
title: "Implementing Minimum Spanning Trees (MST) in Java: Prim's and Kruskal's Algorithms"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[minimum-spanning-tree-prim-kruskal-greedy-java-implementation|minimum-spanning-tree-prim-kruskal-greedy-java-implementation]]"
learning-time-in-minutes: 5
---
# Implementing Minimum Spanning Trees (MST) in Java: Prim's and Kruskal's Algorithms

In Java programming, a crucial aspect of graph algorithms involves finding a Minimum Spanning Tree (MST). An MST of a connected, undirected graph is a subgraph that connects all the vertices together, without any cycles, and with the minimum possible total edge weight. This lesson focuses on applying greedy approaches to implement two classic MST algorithms: Prim's and Kruskal's.

## Understanding Minimum Spanning Trees

**Definition:** A spanning tree is a tree that connects all vertices in a graph. A Minimum Spanning Tree is a spanning tree with the smallest sum of edge weights.

**Why are MSTs important?**
*   **Network Design:** Designing efficient cable networks, telecommunications, or pipeline systems where cost is minimized.
*   **Clustering:** Grouping similar data points.
*   **Image Processing:** Image segmentation.

Both Prim's and Kruskal's algorithms are greedy algorithms that achieve the MST by making locally optimal choices at each step.

## Prim's Algorithm: A Step-by-Step Approach

Prim's algorithm builds the MST by starting from an arbitrary vertex and growing the tree one edge at a time. At each step, it adds the cheapest edge that connects a vertex in the current MST to a vertex outside the MST.

**Core Idea:** Maintain a set of vertices already included in the MST. Iteratively add the minimum weight edge connecting a vertex in the MST set to a vertex not yet in the MST set.

**Data Structures:**
*   **Adjacency List:** To represent the graph. Each entry stores a list of adjacent vertices and the edge weights.
*   **Priority Queue (Min-Heap):** To efficiently find the minimum weight edge connecting to the MST.
*   **Boolean Array:** To keep track of vertices already included in the MST.
*   **Array (e.g., `key`):** To store the minimum weight to connect a vertex to the MST.

**Algorithm Steps:**

1.  **Initialization:**
    *   Choose an arbitrary starting vertex.
    *   Initialize `key` values for all vertices to infinity, except for the starting vertex, which is 0.
    *   Initialize a `mstSet` (e.g., a boolean array) to `false` for all vertices.
    *   Initialize a priority queue and add all vertices with their respective `key` values.

2.  **Iteration:** While the priority queue is not empty:
    *   Extract the vertex `u` with the minimum `key` value from the priority queue.
    *   Add `u` to the `mstSet`.
    *   For each neighbor `v` of `u`:
        *   If `v` is not in `mstSet` and the weight of edge `(u, v)` is less than `key[v]`:
            *   Update `key[v]` to the weight of edge `(u, v)`.
            *   Update the priority queue for `v` (or add `v` if not present).

**Java Implementation Sketch (Prim's Algorithm):**

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

class PrimMST {
    private int V; // Number of vertices
    private List<List<Edge>> adj; // Adjacency List

    public PrimMST(int v) {
        V = v;
        adj = new ArrayList<>(V);
        for (int i = 0; i < V; ++i) {
            adj.add(new ArrayList<>());
        }
    }

    public void addEdge(int u, int v, int weight) {
        adj.get(u).add(new Edge(v, weight));
        adj.get(v).add(new Edge(u, weight)); // Undirected graph
    }

    public void findMST() {
        // Stores the minimum weight to connect vertex i to MST
        int[] key = new int[V];
        // To store constructed MST
        int[] parent = new int[V];
        // To represent set of vertices included in MST
        boolean[] mstSet = new boolean[V];

        // Initialize all keys as INFINITE
        Arrays.fill(key, Integer.MAX_VALUE);
        // Initialize all mstSet as false
        Arrays.fill(mstSet, false);

        // Always include first 0th vertex in MST.
        key[0] = 0;
        parent[0] = -1; // First node is always root of MST

        // Use a PriorityQueue to store vertices that are not yet included in MST.
        // The priority is based on the key value.
        PriorityQueue<Node> pq = new PriorityQueue<>(V, Comparator.comparingInt(node -> node.key));
        pq.add(new Node(0, 0)); // Add starting vertex

        for (int count = 0; count < V; count++) {
            // Pick the minimum key vertex from the set of vertices not yet included in MST
            Node minNode = pq.poll();
            int u = minNode.vertex;

            // If vertex u is already in MST, skip it. This handles duplicate entries in PQ.
            if (mstSet[u]) continue;

            mstSet[u] = true;

            // Update key value and parent index of the adjacent vertices of the picked vertex.
            // Consider only those vertices not yet included in MST
            for (Edge edge : adj.get(u)) {
                int v = edge.to;
                int weight = edge.weight;
                if (!mstSet[v] && weight < key[v]) {
                    key[v] = weight;
                    parent[v] = u;
                    pq.add(new Node(v, key[v]));
                }
            }
        }

        // Print the constructed MST
        printMST(parent);
    }

    // Helper class for Priority Queue
    class Node {
        int vertex;
        int key;

        public Node(int vertex, int key) {
            this.vertex = vertex;
            this.key = key;
        }
    }

    private void printMST(int[] parent) {
        System.out.println("Edges in the constructed MST:");
        int totalWeight = 0;
        for (int i = 1; i < V; i++) {
            System.out.println(parent[i] + " - " + i + " (Weight: " + getKey(parent[i], i) + ")");
            totalWeight += getKey(parent[i], i);
        }
        System.out.println("Total MST Weight: " + totalWeight);
    }

    // Helper to get weight between parent and child
    private int getKey(int u, int v) {
        for(Edge edge : adj.get(u)) {
            if (edge.to == v) return edge.weight;
        }
        return 0; // Should not happen in a valid MST construction
    }

    public static void main(String[] args) {
        int V = 5;
        PrimMST graph = new PrimMST(V);

        graph.addEdge(0, 1, 2);
        graph.addEdge(0, 3, 6);
        graph.addEdge(1, 2, 3);
        graph.addEdge(1, 3, 8);
        graph.addEdge(1, 4, 5);
        graph.addEdge(2, 4, 7);
        graph.addEdge(3, 4, 9);

        graph.findMST();
    }
}
```

**Complexity:**
*   Time Complexity: $$ O(E \log V) $$ or $$ O(E + V \log V) $$ using a Fibonacci heap, where $$ E $$ is the number of edges and $$ V $$ is the number of vertices. Using a binary heap (like `PriorityQueue` in Java), it's typically $$ O(E \log V) $$.

## Kruskal's Algorithm: A Different Greedy Strategy

Kruskal's algorithm also finds an MST, but it does so by considering all edges in increasing order of weight and adding them to the MST if they don't form a cycle.

**Core Idea:** Sort all edges by weight. Iterate through sorted edges and add an edge to the MST if it connects two previously disconnected components.

**Data Structures:**
*   **List of Edges:** To store all edges and sort them.
*   **Disjoint Set Union (DSU) / Union-Find Data Structure:** To efficiently detect cycles. It keeps track of which vertices belong to the same connected component.

**Algorithm Steps:**

1.  **Initialization:**
    *   Create a list of all edges in the graph.
    *   Sort this list in non-decreasing order of edge weights.
    *   Initialize a DSU structure where each vertex is in its own set.
    *   Initialize an empty list to store the MST edges.

2.  **Iteration:** For each edge `(u, v)` with weight `w` in the sorted list:
    *   Check if `u` and `v` belong to different sets using the DSU's `find` operation.
    *   If they are in different sets:
        *   Add the edge `(u, v)` to the MST list.
        *   Merge the sets containing `u` and `v` using the DSU's `union` operation.
    *   Stop when the MST list contains $$ V-1 $$ edges.

**Java Implementation Sketch (Kruskal's Algorithm):**

```java
import java.util.*;

class KruskalEdge {
    int src, dest, weight;

    public KruskalEdge(int src, int dest, int weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

class DSU {
    int[] parent;
    int[] rank; // Used for union by rank optimization

    public DSU(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i; // Each node is its own parent initially
            rank[i] = 0;
        }
    }

    // Find representative of set containing i (with path compression)
    public int find(int i) {
        if (parent[i] != i) {
            parent[i] = find(parent[i]); // Path compression
        }
        return parent[i];
    }

    // Union of two sets of x and y (union by rank)
    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
}

class KruskalMST {
    private int V; // Number of vertices
    private List<KruskalEdge> edges;

    public KruskalMST(int v) {
        V = v;
        edges = new ArrayList<>();
    }

    public void addEdge(int u, int v, int weight) {
        edges.add(new KruskalEdge(u, v, weight));
    }

    public void findMST() {
        // Step 1: Sort all edges in non-decreasing order of their weight
        Collections.sort(edges, Comparator.comparingInt(e -> e.weight));

        DSU dsu = new DSU(V);
        List<KruskalEdge> mst = new ArrayList<>();
        int edgeCount = 0;
        int i = 0; // Index for sorted edges

        // Step 2: Iterate through sorted edges
        while (edgeCount < V - 1 && i < edges.size()) {
            KruskalEdge nextEdge = edges.get(i++);

            int rootSrc = dsu.find(nextEdge.src);
            int rootDest = dsu.find(nextEdge.dest);

            // If including this edge does not cause a cycle
            if (rootSrc != rootDest) {
                mst.add(nextEdge);
                dsu.union(nextEdge.src, nextEdge.dest);
                edgeCount++;
            }
        }

        // Print the constructed MST
        printMST(mst);
    }

    private void printMST(List<KruskalEdge> mst) {
        System.out.println("Edges in the constructed MST:");
        int totalWeight = 0;
        for (KruskalEdge edge : mst) {
            System.out.println(edge.src + " - " + edge.dest + " (Weight: " + edge.weight + ")");
            totalWeight += edge.weight;
        }
        System.out.println("Total MST Weight: " + totalWeight);
    }

    public static void main(String[] args) {
        int V = 4;
        KruskalMST graph = new KruskalMST(V);

        graph.addEdge(0, 1, 10);
        graph.addEdge(0, 2, 6);
        graph.addEdge(0, 3, 5);
        graph.addEdge(1, 3, 15);
        graph.addEdge(2, 3, 4);

        graph.findMST();
    }
}
```

**Complexity:**
*   Time Complexity: $$ O(E \log E) $$ due to sorting the edges. The DSU operations with path compression and union by rank are nearly constant on average ($$ O(\alpha(V)) $$), where $$ \alpha $$ is the inverse Ackermann function. Since $$ E $$ can be up to $$ V^2 $$, this is often written as $$ O(E \log V) $$.

## Choosing Between Prim's and Kruskal's

| Feature         | Prim's Algorithm                                | Kruskal's Algorithm                                |
| :-------------- | :---------------------------------------------- | :------------------------------------------------- |
| **Approach**    | Grows MST from a single vertex                  | Builds MST by adding cheapest edges across components |
| **Best For**    | Dense graphs (where $$ E \approx V^2 $$)        | Sparse graphs (where $$ E \approx V $$)            |
| **Data Struct** | Adjacency List, Priority Queue                  | Edge List, Disjoint Set Union (DSU)                |
| **Time Compl.** | $$ O(E \log V) $$ (with binary heap)            | $$ O(E \log E) \approx O(E \log V) $$              |
| **Implementation** | Can be slightly more complex with PQ updates | Simpler logic if DSU is readily available          |

Both algorithms are greedy and guarantee an MST for connected, undirected graphs with non-negative edge weights. Understanding their underlying mechanics and data structures allows you to implement them effectively in Java.

## Supports

- [[minimum-spanning-tree-prim-kruskal-greedy-java-implementation|Minimum Spanning Tree (Prim/Kruskal) Greedy Java Implementation]]
