---
type: medium
title: Implementing Tarjan's Algorithm in Java for Strongly Connected Components
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[tarjan-s-algorithm-java-implementation|tarjan-s-algorithm-java-implementation]]"
learning-time-in-minutes: 4
---
# Implementing Tarjan's Algorithm in Java for Strongly Connected Components

This lesson focuses on applying Tarjan's algorithm to find Strongly Connected Components (SCCs) in a directed graph using Java. This is a key step in understanding graph structures and has applications in dependency analysis, cycle detection, and network analysis.

## Core Idea: Tarjan's Algorithm

Tarjan's algorithm is an efficient graph traversal algorithm that uses a single Depth-First Search (DFS) to identify all SCCs in a directed graph. It works by keeping track of two values for each node during the DFS:

*   **Discovery Time (`disc[]`):** The time (or step) at which a node is first visited during the DFS.
*   **Low-Link Value (`low[]`):** The smallest discovery time reachable from the current node (including itself) through the DFS tree edges and at most one back-edge.

When a node's discovery time equals its low-link value, it signifies that this node is the root of an SCC. All nodes on the DFS stack from this root downwards also belong to the same SCC.

## Data Structures Needed

To implement Tarjan's algorithm, we'll typically use:

1.  **Adjacency List:** To represent the graph. A `List<List<Integer>>` or `Map<Integer, List<Integer>>` is suitable.
2.  **Discovery Time Array (`disc[]`):** To store the discovery time of each node.
3.  **Low-Link Value Array (`low[]`):** To store the low-link value of each node.
4.  **Stack:** To keep track of the nodes currently in the recursion stack of DFS. A `java.util.Stack` or `java.util.Deque` can be used.
5.  **Visited Set/Array (`onStack[]`):** A boolean array or set to efficiently check if a node is currently on the recursion stack. This is crucial to distinguish between tree edges, back edges, and cross edges when updating low-link values.
6.  **Time Counter:** A global or instance variable to assign unique discovery times.
7.  **Result List:** To store the found SCCs, often as `List<List<Integer>>`.

## Step-by-Step Java Implementation

Let's break down the implementation into manageable steps.

### 1. Graph Representation

First, we need a way to represent our directed graph. An adjacency list is a common and efficient choice.

```java
import java.util.*;

class Graph {
    private int V; // Number of vertices
    private List<List<Integer>> adj; // Adjacency list

    Graph(int v) {
        V = v;
        adj = new ArrayList<>(v);
        for (int i = 0; i < v; ++i) {
            adj.add(new ArrayList<>());
        }
    }

    void addEdge(int u, int v) {
        adj.get(u).add(v);
    }

    List<List<Integer>> getAdj() {
        return adj;
    }

    int getV() {
        return V;
    }
}
```

### 2. Tarjan's Algorithm Class

Now, let's create a class to encapsulate Tarjan's algorithm.

```java
class TarjansSCC {
    private int V;
    private List<List<Integer>> adj;
    private int[] disc;
    private int[] low;
    private boolean[] onStack;
    private Stack<Integer> stack;
    private int time;
    private List<List<Integer>> sccs; // To store the found SCCs

    public TarjansSCC(Graph graph) {
        this.V = graph.getV();
        this.adj = graph.getAdj();
        this.disc = new int[V];
        this.low = new int[V];
        this.onStack = new boolean[V];
        this.stack = new Stack<>();
        this.time = 0;
        this.sccs = new ArrayList<>();
        Arrays.fill(disc, -1); // Initialize discovery times to -1 (unvisited)
    }

    // Main function to find SCCs
    public List<List<Integer>> findSCCs() {
        for (int i = 0; i < V; i++) {
            if (disc[i] == -1) { // If node is not visited
                dfs(i);
            }
        }
        return sccs;
    }

    // Recursive DFS function
    private void dfs(int u) {
        disc[u] = low[u] = time++; // Set discovery and low-link times
        stack.push(u);
        onStack[u] = true;

        // Traverse all adjacent vertices
        for (int v : adj.get(u)) {
            if (disc[v] == -1) { // If v is not visited yet
                dfs(v);
                // After returning from DFS of v, update low[u]
                // If v's subtree has a connection to an ancestor of u, then u can also reach it.
                low[u] = Math.min(low[u], low[v]);
            } else if (onStack[v]) { // If v is visited and on stack (back edge)
                // Update low[u] based on v's discovery time
                // This means there's a cycle involving u and v
                low[u] = Math.min(low[u], disc[v]);
            }
            // If v is visited but not on stack, it's a cross edge to an already processed SCC.
            // We do not update low[u] in this case.
        }

        // If u is the root of an SCC
        if (low[u] == disc[u]) {
            List<Integer> currentSCC = new ArrayList<>();
            while (true) {
                int node = stack.pop();
                onStack[node] = false;
                currentSCC.add(node);
                if (node == u) {
                    break; // We have extracted all nodes for this SCC
                }
            }
            sccs.add(currentSCC);
        }
    }
}
```

### 3. Example Usage

Let's put it all together with an example.

```java
public class Main {
    public static void main(String[] args) {
        // Example Graph 1
        Graph g1 = new Graph(5);
        g1.addEdge(1, 0);
        g1.addEdge(0, 2);
        g1.addEdge(2, 1);
        g1.addEdge(0, 3);
        g1.addEdge(3, 4);

        TarjansSCC tarjan1 = new TarjansSCC(g1);
        List<List<Integer>> sccs1 = tarjan1.findSCCs();
        System.out.println("SCCs for Graph 1:");
        for (List<Integer> scc : sccs1) {
            System.out.println(scc);
        }
        // Expected output might be something like: [4], [0, 1, 2], [3] (order may vary)

        System.out.println("--------------------");

        // Example Graph 2
        Graph g2 = new Graph(4);
        g2.addEdge(0, 1);
        g2.addEdge(1, 2);
        g2.addEdge(2, 0);
        g2.addEdge(1, 3);
        g2.addEdge(3, 4); // Note: vertex 4 doesn't exist, adjust graph creation if needed or handle.
                         // For simplicity, let's assume V=5 for this example if 4 is a valid node.
                         // If V=4, edge (3,4) would be invalid. Let's assume V=5 for g2 for demonstration.

        Graph g2_corrected = new Graph(5);
        g2_corrected.addEdge(0, 1);
        g2_corrected.addEdge(1, 2);
        g2_corrected.addEdge(2, 0);
        g2_corrected.addEdge(1, 3);
        g2_corrected.addEdge(3, 4); // Edge to a new node 4

        TarjansSCC tarjan2 = new TarjansSCC(g2_corrected);
        List<List<Integer>> sccs2 = tarjan2.findSCCs();
        System.out.println("SCCs for Graph 2 (Corrected):");
        for (List<Integer> scc : sccs2) {
            System.out.println(scc);
        }
        // Expected output might be something like: [4], [0, 1, 2], [3]
    }
}
```

## How it Works: The `dfs` Function in Detail

The heart of the algorithm is the `dfs(int u)` method.

1.  **Initialization:** When `dfs` is called for node `u`, its `disc[u]` and `low[u]` are set to the current `time`, and `time` is incremented. `u` is pushed onto the `stack`, and `onStack[u]` is set to `true`.

2.  **Exploring Neighbors:** The algorithm iterates through all neighbors `v` of `u`.
    *   **Unvisited Neighbor (`disc[v] == -1`):** If `v` has not been visited, recursively call `dfs(v)`. After the recursive call returns, it means the DFS subtree rooted at `v` has been fully explored. We then update `low[u] = Math.min(low[u], low[v])`. This step propagates the lowest reachable discovery time from `v`'s subtree up to `u`. If `v` or any node in its subtree could reach an ancestor of `u`, `u` can also reach it.
    *   **Visited Neighbor on Stack (`onStack[v]` is true):** If `v` has been visited and is currently on the `stack`, it means we've found a *back edge* to an ancestor or a node in the current DFS path. This indicates a cycle. We update `low[u] = Math.min(low[u], disc[v])`. We use `disc[v]` here because `v` is an ancestor, and its discovery time represents the earliest point in the path that `u` can connect back to.
    *   **Visited Neighbor Not on Stack:** If `v` has been visited but is *not* on the stack, it means `v` belongs to a previously identified SCC. This is a *cross edge*. We ignore such edges for updating `low[u]` because they do not form a cycle with the current DFS path and don't help in identifying the current SCC.

3.  **Identifying an SCC Root:** After exploring all neighbors of `u`, if `low[u] == disc[u]`, it signifies that `u` is the root of an SCC. No node in the DFS subtree rooted at `u` (including `u` itself) could reach a node with a discovery time earlier than `disc[u]` through tree edges and at most one back edge. All nodes currently on the stack from `u` upwards (until `u` itself) form this SCC. These nodes are popped from the stack, marked as `onStack[false]`, and added to the `currentSCC` list.

## Complexity Analysis

*   **Time Complexity:** Tarjan's algorithm performs a single DFS traversal of the graph. Each vertex and each edge is visited a constant number of times. Therefore, the time complexity is **$$O(V + E)$$**, where $$V$$ is the number of vertices and $$E$$ is the number of edges.
*   **Space Complexity:** The algorithm uses extra space for the discovery time array, low-link array, the `onStack` array, and the DFS stack. In the worst case, the DFS stack can hold all vertices. Thus, the space complexity is **$$O(V)$$**.

By implementing and testing Tarjan's algorithm, you gain practical experience in applying advanced graph algorithms to solve problems involving connectivity and cycles in directed graphs within your Java programming skills.

## Supports

- [[tarjan-s-algorithm-java-implementation|Tarjan's Algorithm Java Implementation]]
