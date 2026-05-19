---
type: "medium"
title: "Hamiltonian Path/Cycle Backtracking in Java"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/java-programming/microskills/hamiltonian-path-cycle-backtracking-java-implementation|Hamiltonian Path/Cycle Backtracking Java Implementation]]"
---
# Hamiltonian Path/Cycle Backtracking in Java

This lesson focuses on implementing backtracking algorithms in Java to solve the Hamiltonian Path and Hamiltonian Cycle problems. These are classic graph traversal problems that can be effectively solved using recursion and backtracking.

## Understanding the Problem

A **Hamiltonian Path** in a graph is a path that visits every vertex exactly once.
A **Hamiltonian Cycle** (or Hamiltonian Circuit) is a Hamiltonian Path that starts and ends at the same vertex, forming a closed loop.

Not all graphs have a Hamiltonian Path or Cycle. The problem of determining if a graph has one is NP-complete, meaning there's no known efficient (polynomial-time) algorithm to solve it for all cases. Backtracking provides a systematic way to explore all possible paths.

## Backtracking Approach for Hamiltonian Path/Cycle

The core idea behind the backtracking solution is to build a path step-by-step. At each step, we try to extend the current path by adding an adjacent, unvisited vertex. If we reach a point where we cannot extend the path further, or if we have successfully visited all vertices (for a path) or all vertices and can return to the start (for a cycle), we either backtrack or declare success.

Here's a general outline of the backtracking algorithm:

1.  **Initialization:**
    *   Represent the graph using an adjacency matrix or adjacency list. An adjacency matrix `graph[V][V]` is often convenient for this problem, where `graph[i][j] = 1` if there's an edge between vertex `i` and vertex `j`, and `0` otherwise.
    *   Maintain a `path` array to store the current path being built.
    *   Maintain a `visited` array (or similar mechanism) to keep track of visited vertices in the current path.

2.  **Recursive Function `isHamiltonianUtil(path, pos)`:**
    *   `path`: The array storing the vertices in the current path.
    *   `pos`: The current position (index) in the `path` array we are trying to fill.

3.  **Base Case:**
    *   If `pos == V` (all vertices have been included in the path):
        *   For a Hamiltonian Path: Return `true` (a path is found).
        *   For a Hamiltonian Cycle: Check if there's an edge from the last vertex in `path` (`path[pos-1]`) back to the starting vertex (`path[0]`). If yes, return `true`; otherwise, return `false`.

4.  **Recursive Step:**
    *   Iterate through all vertices `v` from `0` to `V-1`.
    *   Check if vertex `v` is a **safe** move:
        *   Is there an edge from the previous vertex `path[pos-1]` to `v`? (`graph[path[pos-1]][v] == 1`)
        *   Has vertex `v` already been visited in the current path? (`visited[v]` is false)
    *   If `v` is a safe move:
        *   Add `v` to the path: `path[pos] = v`.
        *   Mark `v` as visited: `visited[v] = true`.
        *   Recursively call `isHamiltonianUtil(path, pos + 1)`.
        *   If the recursive call returns `true`, it means a solution is found down this path, so return `true`.
        *   **Backtrack:** If the recursive call returns `false` (meaning no solution was found by adding `v`), undo the changes:
            *   Unmark `v`: `visited[v] = false`.
            *   (Optional: reset `path[pos]` to a sentinel value, though not strictly necessary if `pos` is managed correctly).

5.  **No Solution:** If the loop finishes without finding a safe move that leads to a solution, return `false`.

## Java Implementation Example (Hamiltonian Cycle)

Let's illustrate with a Java code snippet for finding a Hamiltonian Cycle. We'll use an adjacency matrix.

```java
class HamiltonianCycle {
    private int V; // Number of vertices
    private int[] path;
    private int[][] graph;
    private boolean[] visited;

    // Constructor to initialize graph and path structures
    HamiltonianCycle(int[][] graphMatrix) {
        this.graph = graphMatrix;
        this.V = graphMatrix.length;
        this.path = new int[V];
        this.visited = new boolean[V];
    }

    // A utility function to check if vertex v can be added at index pos in the path
    private boolean isSafe(int v, int pos) {
        // Check if this vertex is an adjacent vertex of the previously added vertex
        if (graph[path[pos - 1]][v] == 0) {
            return false;
        }

        // Check if the vertex has already been included in the path
        if (visited[v]) {
            return false;
        }

        return true;
    }

    // A recursive utility function to solve Hamiltonian Cycle problem
    private boolean hamiltonianCycleUtil(int pos) {
        // Base case: If all vertices are included in the Hamiltonian Cycle
        if (pos == V) {
            // Check if there is an edge from the last vertex to the starting vertex
            if (graph[path[pos - 1]][path[0]] == 1) {
                return true; // Cycle found
            } else {
                return false; // Not a cycle
            }
        }

        // Try different vertices as the next candidate in Hamiltonian Cycle
        for (int v = 1; v < V; v++) { // Start from 1 because path[0] is already set
            if (isSafe(v, pos)) {
                path[pos] = v;
                visited[v] = true;

                // Recur to construct the rest of the path
                if (hamiltonianCycleUtil(pos + 1)) {
                    return true;
                }

                // If adding vertex v doesn't lead to a solution, then remove it (backtrack)
                visited[v] = false;
                // path[pos] will be overwritten in the next iteration, no explicit reset needed.
            }
        }

        // If no vertex can be added to the Hamiltonian Cycle constructed so far
        return false;
    }

    // This function solves the Hamiltonian Cycle problem using backtracking.
    // It mainly uses hamiltonianCycleUtil() to solve the problem.
    public boolean findHamiltonianCycle() {
        // Initialize path array and visited array
        for (int i = 0; i < V; i++) {
            path[i] = -1; // -1 indicates no vertex assigned
            visited[i] = false;
        }

        // Start with vertex 0 as the first vertex in the path
        path[0] = 0;
        visited[0] = true;

        // Call hamiltonianCycleUtil() to solve the problem from the second vertex
        if (!hamiltonianCycleUtil(1)) {
            System.out.println("Solution does not exist");
            return false;
        }

        printSolution();
        return true;
    }

    // A utility function to print the solution
    private void printSolution() {
        System.out.println("Hamiltonian Cycle found:");
        for (int i = 0; i < V; i++) {
            System.out.print(path[i] + " -> ");
        }
        System.out.println(path[0]); // Print the starting vertex again to show the cycle
    }

    // Example Usage:
    public static void main(String[] args) {
        /* Let's create the following graph
           (0)--(1)--(2)
            |   / \   |
            |  /   \  |
            | /     \ |
           (3)-------(4)
        */
        int[][] graphMatrix = {
            {0, 1, 0, 1, 0},
            {1, 0, 1, 1, 1},
            {0, 1, 0, 0, 1},
            {1, 1, 0, 0, 1},
            {0, 1, 1, 1, 0}
        };

        HamiltonianCycle hc = new HamiltonianCycle(graphMatrix);
        hc.findHamiltonianCycle();

        System.out.println("\n--- Another Example ---");
        /* Another graph
           (0)--(1)--(2)--(3)
           |              |
           (4)------------(5)
        */
        int[][] graphMatrix2 = {
            {0, 1, 0, 0, 1, 0},
            {1, 0, 1, 0, 0, 0},
            {0, 1, 0, 1, 0, 0},
            {0, 0, 1, 0, 0, 1},
            {1, 0, 0, 0, 0, 1},
            {0, 0, 0, 1, 1, 0}
        };
        HamiltonianCycle hc2 = new HamiltonianCycle(graphMatrix2);
        hc2.findHamiltonianCycle();
    }
}
```

### How the Code Works:

1.  **`HamiltonianCycle(int[][] graphMatrix)`**: The constructor takes the adjacency matrix and initializes the `V`, `path`, and `visited` arrays.
2.  **`isSafe(int v, int pos)`**: This helper function checks two conditions:
    *   If there's an edge from the vertex at `path[pos - 1]` to the candidate vertex `v`.
    *   If vertex `v` has already been visited in the current `path`.
3.  **`hamiltonianCycleUtil(int pos)`**: This is the core recursive function.
    *   **Base Case (`pos == V`)**: When `pos` reaches `V`, it means we have potentially found a path covering all vertices. We then check if an edge exists from the last vertex (`path[V-1]`) back to the starting vertex (`path[0]`) to form a cycle.
    *   **Recursive Step**: It iterates through all possible next vertices (`v` from `1` to `V-1` because vertex `0` is fixed as the start). For each safe vertex, it adds it to the path, marks it as visited, and makes a recursive call. If the recursive call returns `true`, it propagates `true` upwards.
    *   **Backtracking**: If a recursive call returns `false` (meaning the current choice of `v` didn't lead to a solution), we `unvisit` `v` and try the next vertex in the loop.
4.  **`findHamiltonianCycle()`**: This public method initializes the process. It sets the first vertex of the path to `0` and then calls `hamiltonianCycleUtil` starting from the second position (`pos = 1`). If no solution is found, it prints a message.
5.  **`printSolution()`**: A simple utility to display the found cycle.

## Hamiltonian Path vs. Cycle

The logic for finding a Hamiltonian Path is very similar. The main difference is in the base case:

*   **Hamiltonian Path Base Case**: If `pos == V`, a Hamiltonian Path is found. No need to check for an edge back to the start.
*   **Hamiltonian Cycle Base Case**: If `pos == V`, check if `graph[path[pos - 1]][path[0]] == 1`.

To implement a Hamiltonian Path finder, you would modify the `hamiltonianCycleUtil` function:
1.  Change the function name (e.g., `hamiltonianPathUtil`).
2.  In the base case (`pos == V`), simply return `true` without checking the edge back to the start.
3.  The `findHamiltonianPath` method would also need adjustment if you want to start from any vertex, not just vertex 0. For a Hamiltonian Path, you typically try starting the path from each vertex `i` from `0` to `V-1` by setting `path[0] = i` and `visited[i] = true`, then calling the recursive utility.

## Key Considerations and Potential Pitfalls

*   **Graph Representation**: While an adjacency matrix is used here for simplicity, an adjacency list might be more memory-efficient for sparse graphs (graphs with few edges).
*   **Starting Vertex**: For Hamiltonian Cycles, the choice of the starting vertex doesn't fundamentally change whether a cycle exists, but it affects the specific cycle found. For paths, starting from different vertices might be necessary to find *any* path.
*   **Performance**: Backtracking for Hamiltonian Path/Cycle has an exponential time complexity, roughly $$O(V!)$$. This is inherent to the problem. For larger graphs, this approach becomes computationally infeasible.
*   **Correctness of `isSafe`**: Ensure that `isSafe` correctly checks both adjacency and whether a vertex has already been included in the current path being built.
*   **Backtracking Logic**: The "undoing" of changes (unmarking `visited`) is crucial for exploring alternative paths.

By understanding and applying this backtracking pattern, you can effectively code solutions for Hamiltonian Path and Cycle problems in Java.

## Supports

- [[skills/programming/programming-languages/java-programming/microskills/hamiltonian-path-cycle-backtracking-java-implementation|Hamiltonian Path/Cycle Backtracking Java Implementation]]
