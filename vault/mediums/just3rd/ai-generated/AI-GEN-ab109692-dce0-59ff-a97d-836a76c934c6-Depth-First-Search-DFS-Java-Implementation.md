---
type: "medium"
title: "Depth-First Search (DFS) Java Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/depth-first-search-dfs-java-implementation|Depth-First Search (DFS) Java Implementation]]"
---
# Depth-First Search (DFS) Java Implementation

Depth-First Search (DFS) is a fundamental graph traversal algorithm. It explores as far as possible along each branch before backtracking. When implementing graph algorithms in Java, DFS is a common starting point due to its conceptual simplicity and wide applicability, such as finding connected components or cycle detection.

## Core Idea of DFS

Imagine you're navigating a maze. DFS is like picking a path and following it until you hit a dead end. When you hit a dead end, you backtrack to the last junction and try a different path. This process continues until you've explored all reachable parts of the maze.

In graph terms, DFS starts at a chosen node and explores as far as possible along one branch of the graph. When it reaches a node with no unvisited neighbors, it backtracks to the previous node and explores another unvisited branch.

## Implementing DFS in Java

We can implement DFS in Java using two primary approaches:

1.  **Recursive DFS:** This is the most intuitive and often the most concise way to implement DFS.
2.  **Iterative DFS (using a Stack):** This approach uses an explicit stack data structure to manage the nodes to visit, avoiding potential stack overflow issues with very deep graphs.

### Data Structures for Graphs

Before diving into the DFS implementation, let's briefly consider how we might represent a graph in Java.

*   **Adjacency List:** This is a common and efficient way to represent graphs, especially sparse ones. It uses an array or `ArrayList` where each index corresponds to a vertex, and the value at that index is a list of its adjacent vertices.

Here's a simple representation using an adjacency list:

```java
import java.util.*;

class Graph {
    private int V; // Number of vertices
    private LinkedList<Integer> adj[]; // Adjacency List

    // Constructor
    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i)
            adj[i] = new LinkedList();
    }

    // Function to add an edge into the graph
    void addEdge(int v, int w) {
        adj[v].add(w); // Add w to v's list.
    }

    // (DFS implementation will go here)
}
```

## Recursive DFS Implementation

The recursive approach mirrors the maze analogy directly.

### How it Works

1.  Mark the current node as visited.
2.  Process the current node (e.g., print it).
3.  For each unvisited neighbor of the current node, recursively call DFS on that neighbor.

### Code Example

Let's add the recursive DFS method to our `Graph` class:

```java
// Recursive helper function
void DFSUtil(int v, boolean visited[]) {
    // Mark the current node as visited and print it
    visited[v] = true;
    System.out.print(v + " ");

    // Recur for all the vertices adjacent to this vertex
    Iterator<Integer> i = adj[v].listIterator();
    while (i.hasNext()) {
        int n = i.next();
        if (!visited[n])
            DFSUtil(n, visited);
    }
}

// The main function to do DFS traversal. It uses recursive DFSUtil()
void DFS(int startNode) {
    // Mark all the vertices as not visited (initially)
    boolean visited[] = new boolean[V];

    // Call the recursive helper function to print DFS traversal
    // starting from 'startNode'
    DFSUtil(startNode, visited);
}
```

### Example Usage

```java
public class DFSExample {
    public static void main(String args[]) {
        Graph g = new Graph(4);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("Depth First Traversal (starting from vertex 2):");
        g.DFS(2); // Start DFS from vertex 2
    }
}
```

**Expected Output:**

```
Depth First Traversal (starting from vertex 2):
2 0 1 3
```

*(Note: The exact order might vary slightly depending on the order of neighbors in the adjacency list, but the principle remains the same.)*

## Iterative DFS Implementation (using a Stack)

This approach uses an explicit `Stack` to keep track of nodes to visit. It's particularly useful for very large or deep graphs where recursion might lead to a `StackOverflowError`.

### How it Works

1.  Create a `Stack` and push the starting node onto it.
2.  Create a `visited` array/set to keep track of visited nodes.
3.  While the stack is not empty:
    a.  Pop a node from the stack.
    b.  If the node has not been visited:
        i.  Mark it as visited.
        ii. Process the node (e.g., print it).
        iii. Push all its unvisited neighbors onto the stack.

### Code Example

Let's add an iterative DFS method to our `Graph` class:

```java
void DFS_Iterative(int startNode) {
    // Mark all the vertices as not visited (initially)
    boolean visited[] = new boolean[V];
    
    // Create a stack for DFS
    Stack<Integer> stack = new Stack<>();

    // Push the starting node
    stack.push(startNode);

    while (!stack.empty()) {
        // Pop a vertex from stack and print it
        startNode = stack.pop();

        // Stack may contain same vertex twice. So
        // we need to check if this vertex has already been visited
        if (!visited[startNode]) {
            System.out.print(startNode + " ");
            visited[startNode] = true;
        }

        // Get all adjacent vertices of the popped vertex s
        // Push all unvisited adjacent vertices onto the stack
        // Note: We push neighbors in reverse order to mimic
        // the recursive traversal order as much as possible
        // (though not strictly necessary for correctness).
        ListIterator<Integer> i = adj[startNode].listIterator(adj[startNode].size());
        while(i.hasPrevious()){
            int neighbor = i.previous();
            if (!visited[neighbor]) {
                stack.push(neighbor);
            }
        }
    }
}
```

### Example Usage (Iterative)

```java
public class DFS_IterativeExample {
    public static void main(String args[]) {
        Graph g = new Graph(4);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("Iterative Depth First Traversal (starting from vertex 2):");
        g.DFS_Iterative(2); // Start iterative DFS from vertex 2
    }
}
```

**Expected Output:**

```
Iterative Depth First Traversal (starting from vertex 2):
2 3 0 1
```

*(Again, the order can vary. Pushing neighbors in reverse order of iteration often makes the output closer to the recursive version, but it's not essential for the algorithm's correctness.)*

## When to Use DFS

*   **Pathfinding:** To find if a path exists between two nodes.
*   **Cycle Detection:** To detect cycles in a directed or undirected graph.
*   **Connected Components:** To find all connected components in an undirected graph.
*   **Topological Sorting:** (Though often implemented with a variation, DFS is the underlying principle).
*   **Solving Puzzles:** Like mazes or Sudoku.

## Key Considerations

*   **Disconnected Graphs:** If a graph is disconnected, calling `DFS(startNode)` will only traverse the component containing `startNode`. To traverse all components, you'd need to iterate through all vertices and call DFS if a vertex hasn't been visited yet.
*   **Graph Representation:** The efficiency of DFS can depend on the graph representation. Adjacency lists are generally preferred for sparse graphs, while adjacency matrices might be suitable for dense graphs but can consume more memory.
*   **Time Complexity:** The time complexity of DFS is typically $$ O(V + E) $$, where $$ V $$ is the number of vertices and $$ E $$ is the number of edges. This is because each vertex and each edge is visited at most once.
*   **Space Complexity:**
    *   Recursive DFS: $$ O(V) $$ in the worst case for the recursion stack depth (e.g., a linear graph).
    *   Iterative DFS: $$ O(V) $$ for the stack and the `visited` array.

By understanding and applying these implementations, you've taken a significant step in coding graph algorithms in Java.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/depth-first-search-dfs-java-implementation|Depth-First Search (DFS) Java Implementation]]
