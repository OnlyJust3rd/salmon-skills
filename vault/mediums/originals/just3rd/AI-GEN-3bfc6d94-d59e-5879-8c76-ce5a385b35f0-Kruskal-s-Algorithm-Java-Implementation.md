---
type: medium
title: Kruskal's Algorithm Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[kruskal-s-algorithm-java-implementation|kruskal-s-algorithm-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Kruskal's Algorithm Java Implementation

This lesson focuses on implementing Kruskal's algorithm in Java to find the Minimum Spanning Tree (MST) of a connected, undirected graph. This is a fundamental algorithm within the broader skill of implementing graph algorithms in Java.

## Core Idea: Kruskal's Algorithm

Kruskal's algorithm is a greedy algorithm that builds an MST by iteratively adding the edge with the smallest weight that does not form a cycle with the edges already selected.

The algorithm works as follows:

1.  **Sort Edges:** Sort all the edges in the graph in non-decreasing order of their weights.
2.  **Initialize MST:** Create an empty set to store the MST edges.
3.  **Iterate and Select:** For each edge in the sorted list:
    *   If adding this edge to the MST does not create a cycle, add it to the MST.
    *   If adding this edge creates a cycle, discard it.
4.  **Termination:** The algorithm terminates when the MST contains $V-1$ edges, where $V$ is the number of vertices in the graph.

The critical challenge in Kruskal's algorithm is efficiently detecting cycles. This is typically handled using a **Disjoint Set Union (DSU)** data structure (also known as Union-Find).

### Disjoint Set Union (DSU) Data Structure

The DSU data structure allows us to:

*   **`makeSet(v)`:** Create a new set containing only vertex $v$. Initially, each vertex is in its own set.
*   **`find(v)`:** Determine which set vertex $v$ belongs to. This operation returns a representative element of the set.
*   **`union(u, v)`:** Merge the sets containing vertices $u$ and $v$.

With DSU, an edge $(u, v)$ creates a cycle if `find(u)` is the same as `find(v)`. If they are in different sets, adding the edge is safe, and we then perform `union(u, v)` to merge their sets.

## Java Implementation

We'll need a way to represent the graph and implement the DSU structure.

### 1. Graph Representation

A common way to represent a graph for Kruskal's algorithm is by a list of edges, where each edge stores its source, destination, and weight.

```java
class Edge implements Comparable<Edge> {
    int src, dest, weight;

    public Edge(int src, int dest, int weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }

    // Comparator for sorting edges by weight
    @Override
    public int compareTo(Edge other) {
        return this.weight - other.weight;
    }
}
```

### 2. Disjoint Set Union (DSU) Implementation

A simple implementation of DSU can use an array to store the parent of each element and another array (or integrated logic) for rank/size to optimize `union` operations.

```java
class DSU {
    int[] parent;
    int[] rank; // or size

    public DSU(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i; // Each element is initially its own parent
            rank[i] = 0;   // Rank is initialized to 0
        }
    }

    // Find operation with path compression
    public int find(int i) {
        if (parent[i] == i) {
            return i;
        }
        parent[i] = find(parent[i]); // Path compression
        return parent[i];
    }

    // Union operation by rank
    public void union(int i, int j) {
        int rootI = find(i);
        int rootJ = find(j);

        if (rootI != rootJ) {
            if (rank[rootI] < rank[rootJ]) {
                parent[rootI] = rootJ;
            } else if (rank[rootI] > rank[rootJ]) {
                parent[rootJ] = rootI;
            } else {
                parent[rootJ] = rootI;
                rank[rootI]++;
            }
        }
    }
}
```

### 3. Kruskal's Algorithm Main Logic

Now, we combine these components to implement Kruskal's algorithm.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class KruskalMST {

    public static void main(String[] args) {
        int numVertices = 4; // Example: 4 vertices
        List<Edge> edges = new ArrayList<>();
        // Example edges: (source, destination, weight)
        edges.add(new Edge(0, 1, 10));
        edges.add(new Edge(0, 2, 6));
        edges.add(new Edge(0, 3, 5));
        edges.add(new Edge(1, 3, 15));
        edges.add(new Edge(2, 3, 4));

        List<Edge> mst = findMST(numVertices, edges);

        System.out.println("Edges in the Minimum Spanning Tree:");
        int totalWeight = 0;
        for (Edge edge : mst) {
            System.out.println(edge.src + " - " + edge.dest + " : " + edge.weight);
            totalWeight += edge.weight;
        }
        System.out.println("Total weight of MST: " + totalWeight);
    }

    public static List<Edge> findMST(int numVertices, List<Edge> edges) {
        // 1. Sort all edges by weight
        Collections.sort(edges);

        // Initialize DSU structure
        DSU dsu = new DSU(numVertices);

        // List to store MST edges
        List<Edge> mst = new ArrayList<>();

        // Iterate through sorted edges
        for (Edge edge : edges) {
            // Check if adding this edge creates a cycle
            // If src and dest are in different sets, add the edge to MST and union them
            if (dsu.find(edge.src) != dsu.find(edge.dest)) {
                mst.add(edge);
                dsu.union(edge.src, edge.dest);

                // Optimization: If we have V-1 edges, we've found the MST
                if (mst.size() == numVertices - 1) {
                    break;
                }
            }
        }
        return mst;
    }
}
```

### How it Works (Example Walkthrough)

Let's trace the example from the `main` method:

*   **Vertices:** 4 (0, 1, 2, 3)
*   **Edges (sorted by weight):**
    1.  (2, 3, 4)
    2.  (0, 3, 5)
    3.  (0, 2, 6)
    4.  (0, 1, 10)
    5.  (1, 3, 15)

**Initialization:**
*   `DSU`: `parent = [0, 1, 2, 3]`, `rank = [0, 0, 0, 0]`
*   `MST`: `[]`

**Iteration 1:**
*   **Edge:** (2, 3, 4)
*   `dsu.find(2)` is 2. `dsu.find(3)` is 3. They are different.
*   Add (2, 3, 4) to MST. `MST = [(2, 3, 4)]`
*   `dsu.union(2, 3)`. Let's say `parent` becomes `[0, 1, 2, 2]` and `rank` becomes `[0, 0, 1, 0]` (if 3's parent becomes 2 and rank of 2 increases).

**Iteration 2:**
*   **Edge:** (0, 3, 5)
*   `dsu.find(0)` is 0. `dsu.find(3)` is 2. They are different.
*   Add (0, 3, 5) to MST. `MST = [(2, 3, 4), (0, 3, 5)]`
*   `dsu.union(0, 3)`. Since `find(0)=0` and `find(3)=2`, we `union(0, 2)`. Let's say `parent` becomes `[2, 1, 2, 2]` and `rank` is `[0, 0, 1, 0]` (if 0's parent becomes 2 and rank of 2 remains 1, or if rank increases). A more optimized `union(0, 3)` would be `union(find(0), find(3)) = union(0, 2)`. If rank of 0 is 0 and rank of 2 is 1, then `parent[0] = 2`. `parent = [2, 1, 2, 2]`, `rank = [0, 0, 1, 0]`.

**Iteration 3:**
*   **Edge:** (0, 2, 6)
*   `dsu.find(0)` is 2. `dsu.find(2)` is 2. They are the same.
*   Cycle detected! Discard this edge.

**Iteration 4:**
*   **Edge:** (0, 1, 10)
*   `dsu.find(0)` is 2. `dsu.find(1)` is 1. They are different.
*   Add (0, 1, 10) to MST. `MST = [(2, 3, 4), (0, 3, 5), (0, 1, 10)]`
*   `dsu.union(0, 1)`. This means `union(find(0), find(1)) = union(2, 1)`. Let's say `parent` becomes `[2, 2, 2, 2]` and `rank` `[0, 0, 1, 0]` (if 1's parent becomes 2 and rank of 2 increases to 2).

**Termination:**
*   `MST` now has 3 edges. `numVertices - 1` is $4 - 1 = 3$. The loop breaks.

The MST edges are (2, 3, 4), (0, 3, 5), and (0, 1, 10), with a total weight of 19.

## Time Complexity

The time complexity of Kruskal's algorithm is dominated by two steps:

1.  **Sorting edges:** $$O(E \log E)$$, where $E$ is the number of edges.
2.  **DSU operations:** With path compression and union by rank/size, each `find` and `union` operation takes nearly constant time on average, specifically $$O(\alpha(V))$$ where $\alpha$ is the inverse Ackermann function, which grows extremely slowly. For practical purposes, it's considered constant. So, $E$ DSU operations take $$O(E \alpha(V))$$.

The overall time complexity is $$O(E \log E)$$. Since $$E$$ can be at most $$O(V^2)$$, and $$ \log(V^2) = 2 \log V $$, we can also express this as $$O(E \log V)$$.

## When to Use Kruskal's Algorithm

Kruskal's algorithm is a good choice when:

*   The graph is sparse (number of edges $E$ is much smaller than $V^2$).
*   You already have the edges readily available, possibly in a sorted or easily sortable format.
*   You need to find an MST for a disconnected graph (it will find MSTs for each connected component, forming a minimum spanning forest).

## Supports

- [[kruskal-s-algorithm-java-implementation|Kruskal's Algorithm Java Implementation]]
