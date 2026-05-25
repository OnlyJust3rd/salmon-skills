---
type: medium
title: Topological Sort in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[topological-sort-java-implementation|topological-sort-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 4
---
# Topological Sort in Java

This lesson focuses on implementing the Topological Sort algorithm in Java. Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex `u` to vertex `v`, vertex `u` comes before vertex `v` in the ordering. This is crucial in various applications like task scheduling, dependency resolution, and course sequencing.

## Concept: What is Topological Sort?

Imagine you have a list of tasks, and some tasks depend on others. For example, to bake a cake, you must first mix the ingredients before you can bake it. Topological sort helps us find a valid order to perform these tasks.

A directed graph is a graph where edges have a direction. A directed acyclic graph (DAG) is a directed graph that contains no directed cycles. Topological sort is only possible on DAGs. If a graph has a cycle, it's impossible to create a linear ordering where all dependencies are met.

### Key Idea: Kahn's Algorithm vs. DFS-based Approach

There are two primary algorithms for topological sorting:

1.  **Kahn's Algorithm (using in-degrees):** This algorithm relies on calculating the in-degree of each vertex (the number of incoming edges).
2.  **Depth-First Search (DFS) based Algorithm:** This algorithm uses recursion and a stack to track visited nodes and their finishing times.

For this lesson, we will focus on the **DFS-based approach** as it's often more intuitive to implement when you're already familiar with DFS.

## Applying DFS for Topological Sort in Java

The DFS-based approach works by performing a DFS traversal. When a node has been fully explored (i.e., all its descendants have been visited), it is added to the front of a list. This ensures that a node appears before all nodes that depend on it.

### Core Idea: Recursion and a Stack

The steps involved are:

1.  **Initialization:**
    *   Represent the graph using an adjacency list.
    *   Maintain a `visited` set or array to keep track of visited nodes.
    *   Maintain a `recursionStack` set or array to detect cycles during DFS.
    *   Use a `Stack` to store the topologically sorted vertices.

2.  **DFS Traversal:**
    *   For each unvisited vertex, call a recursive `dfsUtil` function.
    *   Inside `dfsUtil(vertex)`:
        *   Mark the current `vertex` as visited and add it to the `recursionStack`.
        *   For each neighbor of `vertex`:
            *   If the neighbor is already in `recursionStack`, a cycle is detected. Topological sort is not possible.
            *   If the neighbor is not visited, recursively call `dfsUtil` on it.
        *   After visiting all neighbors (or if there are no neighbors), remove the current `vertex` from `recursionStack`.
        *   Push the current `vertex` onto the `Stack`.

3.  **Result:**
    *   Once the DFS traversal is complete for all vertices, pop elements from the `Stack` to get the topological order.

### Java Implementation Example

Let's illustrate with a Java code snippet.

```java
import java.util.*;

class Graph {
    private int V; // Number of vertices
    private LinkedList<Integer>[] adj; // Adjacency list

    // Constructor
    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i) {
            adj[i] = new LinkedList<>();
        }
    }

    // Function to add an edge into the graph
    void addEdge(int v, int w) {
        adj[v].add(w);
    }

    // A recursive function used by topologicalSort
    void topologicalSortUtil(int v, boolean visited[], Stack<Integer> stack, boolean recursionStack[]) {
        // Mark the current node as visited and part of recursion stack
        visited[v] = true;
        recursionStack[v] = true;

        // Recur for all the vertices adjacent to this vertex
        for (Integer neighbor : adj[v]) {
            if (!visited[neighbor]) {
                topologicalSortUtil(neighbor, visited, stack, recursionStack);
            } else if (recursionStack[neighbor]) {
                // Cycle detected! Topological sort is not possible.
                // In a real-world scenario, you might throw an exception here.
                System.err.println("Cycle detected. Topological sort is not possible.");
                // For demonstration, we'll just stop further processing on this path.
                return;
            }
        }

        // Remove the vertex from recursion stack
        recursionStack[v] = false;

        // Push current vertex to stack which stores result
        stack.push(v);
    }

    // The function to do Topological Sort. It uses recursive topologicalSortUtil()
    void topologicalSort() {
        Stack<Integer> stack = new Stack<>();

        // Mark all the vertices as not visited and not part of recursion stack
        boolean visited[] = new boolean[V];
        boolean recursionStack[] = new boolean[V];
        for (int i = 0; i < V; i++) {
            visited[i] = false;
            recursionStack[i] = false;
        }

        // Call the recursive helper function to store Topological Sort
        // starting from all vertices one by one
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                topologicalSortUtil(i, visited, stack, recursionStack);
                // If a cycle was detected and printed, we might want to stop.
                // For simplicity, we continue here, but a robust implementation
                // would handle this more formally.
            }
        }

        // Print contents of stack
        System.out.println("Topological Sort Order:");
        while (!stack.empty()) {
            System.out.print(stack.pop() + " ");
        }
        System.out.println();
    }

    public static void main(String args[]) {
        // Create a graph given in the above diagram
        Graph g = new Graph(6);
        g.addEdge(5, 2);
        g.addEdge(5, 0);
        g.addEdge(4, 0);
        g.addEdge(4, 1);
        g.addEdge(2, 3);
        g.addEdge(3, 1);

        System.out.println("Following is a Topological Sort of the given graph");
        g.topologicalSort();

        // Example with a cycle
        System.out.println("\n--- Testing with a cycle ---");
        Graph gWithCycle = new Graph(3);
        gWithCycle.addEdge(0, 1);
        gWithCycle.addEdge(1, 2);
        gWithCycle.addEdge(2, 0); // Creating a cycle
        gWithCycle.topologicalSort();
    }
}
```

### How it Works

1.  **`Graph` Class:**
    *   `V`: Stores the number of vertices.
    *   `adj`: An array of `LinkedList` where `adj[i]` stores a list of vertices adjacent to vertex `i`. This is our adjacency list representation.
    *   `addEdge(v, w)`: Adds a directed edge from vertex `v` to vertex `w`.

2.  **`topologicalSortUtil(v, visited, stack, recursionStack)`:**
    *   This is the recursive helper function.
    *   `visited[]`: Marks if a node has been visited during the overall DFS.
    *   `recursionStack[]`: Marks if a node is currently in the recursion path for the current DFS call. This is crucial for cycle detection.
    *   The function first marks the current vertex `v` as visited and adds it to the `recursionStack`.
    *   It then iterates through all neighbors of `v`.
        *   If a neighbor hasn't been visited, it recursively calls `topologicalSortUtil` on it.
        *   **Crucially:** If a neighbor is already in `recursionStack`, it means we've found a back edge, indicating a cycle. The code prints an error.
    *   After processing all neighbors, `v` is removed from `recursionStack` (it's no longer part of the *current* path).
    *   Finally, `v` is pushed onto the `stack`. This is the key: a node is only pushed *after* all its dependent nodes have been processed and pushed.

3.  **`topologicalSort()`:**
    *   Initializes the `visited` and `recursionStack` arrays.
    *   Iterates through all vertices. If a vertex hasn't been visited, it calls `topologicalSortUtil` on it. This ensures that all connected components of the graph are processed.
    *   After the loop, the `stack` contains the vertices in reverse topological order. Popping them gives the correct order.

4.  **`main()` method:**
    *   Creates a sample graph.
    *   Calls `topologicalSort()` to display the ordering.
    *   Includes a second example to demonstrate cycle detection.

### Common Mistakes to Avoid

*   **Not handling cycles:** Forgetting to check for cycles will lead to infinite recursion or incorrect output if the graph is not a DAG.
*   **Incorrectly managing `visited` and `recursionStack`:** Both are vital. `visited` ensures each node is processed once overall. `recursionStack` detects cycles within the *current* DFS path.
*   **Not initializing all vertices:** Ensure your DFS traversal starts from every unvisited vertex to cover disconnected components.
*   **Printing the stack directly:** The stack stores the reverse order. You must pop elements to get the correct topological sort.

By understanding and applying this DFS-based approach, you can effectively implement topological sorting in Java for various dependency-related problems.

## Supports

- [[topological-sort-java-implementation|Topological Sort Java Implementation]]
