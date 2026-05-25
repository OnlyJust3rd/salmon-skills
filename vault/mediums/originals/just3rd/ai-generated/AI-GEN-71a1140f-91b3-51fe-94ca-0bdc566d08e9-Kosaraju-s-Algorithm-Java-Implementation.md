---
type: medium
title: "Kosaraju's Algorithm: Java Implementation"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[kosaraju-s-algorithm-java-implementation|kosaraju-s-algorithm-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 3
---
# Kosaraju's Algorithm: Java Implementation

This lesson focuses on applying Kosaraju's algorithm to find strongly connected components (SCCs) in a directed graph using Java. This builds upon your understanding of graph traversal techniques.

### What are Strongly Connected Components (SCCs)?

In a directed graph, a strongly connected component is a subgraph where for any two vertices *u* and *v* within the subgraph, there is a directed path from *u* to *v* and a directed path from *v* to *u*. In simpler terms, you can reach any node from any other node within an SCC by following the directed edges.

### Why Kosaraju's Algorithm?

Kosaraju's algorithm is an efficient way to find all SCCs in a directed graph. It leverages two Depth-First Search (DFS) traversals and the concept of the transpose graph. Its time complexity is linear, making it suitable for large graphs.

### The Algorithm's Core Idea

Kosaraju's algorithm works in three main steps:

1.  **First DFS:** Perform a DFS on the original graph and record the order in which vertices finish (i.e., when their DFS calls return). A stack is commonly used for this.
2.  **Transpose Graph:** Create the transpose (or reverse) graph. This means reversing the direction of all edges in the original graph.
3.  **Second DFS:** Perform DFS on the transpose graph. Start the DFS from the vertices in the order determined by the finishing times from the first DFS (popping from the stack). Each DFS tree in this traversal will represent a single strongly connected component.

### Java Implementation Steps

Let's break down the Java implementation. We'll need a way to represent the graph, perform DFS, and manage the transpose graph.

**1. Graph Representation**

An adjacency list is a common and efficient way to represent directed graphs in Java. We can use a `Map<Integer, List<Integer>>` where the key is the vertex and the value is a list of its adjacent vertices.

```java
import java.util.*;

class Graph {
    private int V; // Number of vertices
    private List<List<Integer>> adj; // Adjacency list
    private List<List<Integer>> reverseAdj; // Adjacency list for transpose graph

    public Graph(int v) {
        V = v;
        adj = new ArrayList<>(v);
        reverseAdj = new ArrayList<>(v);
        for (int i = 0; i < v; ++i) {
            adj.add(new LinkedList<>());
            reverseAdj.add(new LinkedList<>());
        }
    }

    // Function to add an edge into the graph
    public void addEdge(int v, int w) {
        adj.get(v).add(w);
        reverseAdj.get(w).add(v); // Add reverse edge for transpose graph
    }

    public List<Integer> getAdj(int v) {
        return adj.get(v);
    }

    public List<Integer> getReverseAdj(int v) {
        return reverseAdj.get(v);
    }

    public int getV() {
        return V;
    }
}
```

**2. First DFS (and Stack Population)**

This DFS traversal will fill a stack with vertices in order of their finishing times. The vertex that finishes last will be at the top of the stack.

```java
// Inside the Graph class or a separate utility class

private void fillOrder(int v, boolean[] visited, Stack<Integer> stack) {
    visited[v] = true;
    for (int neighbor : adj.get(v)) {
        if (!visited[neighbor]) {
            fillOrder(neighbor, visited, stack);
        }
    }
    // All adjacent vertices are visited, push current vertex to stack
    stack.push(v);
}
```

**3. Second DFS (on Transpose Graph)**

This DFS uses the transpose graph and the stack from the first DFS to identify SCCs.

```java
// Inside the Graph class or a separate utility class

private void dfsUtil(int v, boolean[] visited, List<Integer> currentSCC) {
    visited[v] = true;
    currentSCC.add(v);
    for (int neighbor : reverseAdj.get(v)) {
        if (!visited[neighbor]) {
            dfsUtil(neighbor, visited, currentSCC);
        }
    }
}
```

**4. The `findSCCs` Method (Putting it all Together)**

This method orchestrates the entire process.

```java
// Inside the Graph class

public List<List<Integer>> findSCCs() {
    Stack<Integer> stack = new Stack<>();
    boolean[] visited = new boolean[V];

    // Step 1: Fill vertices in stack according to their finishing order
    for (int i = 0; i < V; i++) {
        if (!visited[i]) {
            fillOrder(i, visited, stack);
        }
    }

    // Step 2: Reset visited array for the second DFS
    Arrays.fill(visited, false);

    List<List<Integer>> allSCCs = new ArrayList<>();

    // Step 3: Process all vertices in order defined by Stack
    while (!stack.isEmpty()) {
        int v = stack.pop();
        if (!visited[v]) {
            List<Integer> currentSCC = new ArrayList<>();
            dfsUtil(v, visited, currentSCC);
            allSCCs.add(currentSCC);
        }
    }
    return allSCCs;
}
```

**5. Example Usage**

Let's test this with a sample graph.

```java
public class KosarajuExample {
    public static void main(String[] args) {
        // Example graph from a common tutorial
        Graph g = new Graph(5);
        g.addEdge(1, 0);
        g.addEdge(0, 2);
        g.addEdge(2, 1);
        g.addEdge(0, 3);
        g.addEdge(3, 4);

        System.out.println("Strongly Connected Components:");
        List<List<Integer>> sccs = g.findSCCs();
        for (List<Integer> scc : sccs) {
            System.out.println(scc);
        }

        // Another example
        Graph g2 = new Graph(4);
        g2.addEdge(0, 1);
        g2.addEdge(1, 2);
        g2.addEdge(2, 0);
        g2.addEdge(1, 3);
        g2.addEdge(3, 3); // Self-loop

        System.out.println("\nStrongly Connected Components (Graph 2):");
        List<List<Integer>> sccs2 = g2.findSCCs();
        for (List<Integer> scc : sccs2) {
            System.out.println(scc);
        }
    }
}
```

**Expected Output for Example 1:**

```
Strongly Connected Components:
[3]
[4]
[0, 1, 2]
```

**Expected Output for Example 2:**

```
Strongly Connected Components (Graph 2):
[3]
[0, 1, 2]
```

### Common Pitfalls and Tips

*   **Graph Representation:** Ensure your adjacency list correctly stores both forward and backward edges for the transpose graph.
*   **Visited Array:** Remember to reset the `visited` array between the two DFS traversals.
*   **Stack Order:** The correctness of the algorithm hinges on processing vertices in the correct finishing order from the first DFS.
*   **Disconnected Components:** The algorithm correctly handles graphs with multiple disconnected components.
*   **Self-Loops:** The algorithm works correctly with self-loops (an edge from a vertex to itself).

By implementing Kosaraju's algorithm, you've taken a significant step in applying advanced graph algorithms in Java. This skill is crucial for solving problems related to network analysis, dependency resolution, and more.

## Supports

- [[kosaraju-s-algorithm-java-implementation|Kosaraju's Algorithm Java Implementation]]
