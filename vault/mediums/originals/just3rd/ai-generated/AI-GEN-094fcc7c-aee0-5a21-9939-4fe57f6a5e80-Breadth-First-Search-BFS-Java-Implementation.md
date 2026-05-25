---
type: medium
title: Breadth-First Search (BFS) Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[breadth-first-search-bfs-java-implementation|breadth-first-search-bfs-java-implementation]]"
learning-time-in-minutes: 3
---
# Breadth-First Search (BFS) Java Implementation

Breadth-First Search (BFS) is a fundamental graph traversal algorithm. It explores a graph layer by layer, visiting all the neighbors of a starting node before moving to the neighbors of those neighbors. This makes it ideal for finding the shortest path in an unweighted graph and for problems that require exploring outward from a source.

## Core Idea

BFS uses a queue data structure to manage the order in which nodes are visited. It starts at a chosen source node, marks it as visited, and enqueues it. Then, it repeatedly dequeues a node, visits all its unvisited neighbors, marks them as visited, and enqueues them. This process continues until the queue is empty.

## When to Use BFS

*   **Finding the shortest path in an unweighted graph:** Since BFS explores level by level, the first time it reaches a target node, it guarantees it has found the shortest path in terms of the number of edges.
*   **Network broadcasting:** Simulating how a message would spread through a network.
*   **Finding connected components:** Identifying groups of nodes that are reachable from each other.
*   **Web crawlers:** Discovering pages linked from a starting page.

## Java Implementation

We'll implement BFS using an adjacency list representation for the graph. This is a common and efficient way to represent sparse graphs.

### Graph Representation (Adjacency List)

```java
import java.util.*;

class Graph {
    private int V; // Number of vertices
    private LinkedList<Integer> adj[]; // Adjacency List

    // Constructor
    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i) {
            adj[i] = new LinkedList();
        }
    }

    // Function to add an edge into the graph
    void addEdge(int v, int w) {
        adj[v].add(w); // Add w to v's list.
        // For an undirected graph, add the reverse edge as well:
        // adj[w].add(v);
    }

    // BFS function to print BFS traversal from a given source s
    void BFS(int s) {
        // Mark all the vertices as not visited(by default set as false)
        boolean visited[] = new boolean[V];

        // Create a queue for BFS
        LinkedList<Integer> queue = new LinkedList<Integer>();

        // Mark the current node as visited and enqueue it
        visited[s] = true;
        queue.add(s);

        while (queue.size() != 0) {
            // Dequeue a vertex from queue and print it
            s = queue.poll();
            System.out.print(s + " ");

            // Get all adjacent vertices of the dequeued vertex s
            // If an adjacent has not been visited, then mark it
            // visited and enqueue it
            Iterator<Integer> i = adj[s].listIterator();
            while (i.hasNext()) {
                int n = i.next();
                if (!visited[n]) {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
    }
}
```

### How it Works

1.  **`Graph` Class:**
    *   `V`: Stores the number of vertices in the graph.
    *   `adj`: An array of `LinkedLists`. `adj[i]` stores a list of all vertices adjacent to vertex `i`.
    *   `addEdge(int v, int w)`: Adds a directed edge from vertex `v` to vertex `w`. For an undirected graph, you'd add `adj[w].add(v);` as well.

2.  **`BFS(int s)` Method:**
    *   `visited[]`: A boolean array to keep track of visited vertices. Initially, all are `false`.
    *   `queue`: A `LinkedList` used as a queue. It stores vertices to be visited.
    *   **Initialization:** The source vertex `s` is marked as `visited` and added to the `queue`.
    *   **Traversal Loop:** The `while (queue.size() != 0)` loop continues as long as there are nodes in the queue.
        *   **Dequeue and Visit:** A vertex `s` is removed from the front of the `queue` (`queue.poll()`) and its value is printed.
        *   **Explore Neighbors:** We iterate through all the neighbors (`n`) of the dequeued vertex `s` using `adj[s]`.
        *   **Enqueue Unvisited Neighbors:** If a neighbor `n` has not been `visited`, it's marked as `visited` and added to the `queue` for future processing.

### Example Usage

Let's put it all together and run a BFS traversal.

```java
import java.util.*;

class Graph {
    private int V;
    private LinkedList<Integer> adj[];

    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i) {
            adj[i] = new LinkedList();
        }
    }

    void addEdge(int v, int w) {
        adj[v].add(w);
    }

    void BFS(int s) {
        boolean visited[] = new boolean[V];
        LinkedList<Integer> queue = new LinkedList<Integer>();

        visited[s] = true;
        queue.add(s);

        while (queue.size() != 0) {
            s = queue.poll();
            System.out.print(s + " ");

            Iterator<Integer> i = adj[s].listIterator();
            while (i.hasNext()) {
                int n = i.next();
                if (!visited[n]) {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
        System.out.println(); // For cleaner output
    }

    // Main method to test the BFS
    public static void main(String args[]) {
        // Create a graph given in the above diagram
        Graph g = new Graph(4);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("Following is Breadth First Traversal " +
                           "(starting from vertex 2)");

        g.BFS(2); // Start BFS from vertex 2
    }
}
```

**Expected Output:**

```
Following is Breadth First Traversal (starting from vertex 2)
2 0 3 1
```

Notice how it starts at `2`, then visits its direct neighbors `0` and `3`. After `0` is processed, its neighbor `1` is added and visited in the next level.

## Complexity

*   **Time Complexity:** $$ O(V + E) $$, where $$ V $$ is the number of vertices and $$ E $$ is the number of edges. Each vertex is enqueued and dequeued at most once, and each edge is examined at most once.
*   **Space Complexity:** $$ O(V) $$ for the `visited` array and the `queue` in the worst case (a dense graph where the queue might hold all vertices).

## Supports

- [[breadth-first-search-bfs-java-implementation|Breadth-First Search (BFS) Java Implementation]]
