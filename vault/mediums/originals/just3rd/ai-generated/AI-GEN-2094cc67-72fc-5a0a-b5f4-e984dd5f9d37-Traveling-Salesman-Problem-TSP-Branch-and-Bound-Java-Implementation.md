---
type: medium
title: Implementing Branch and Bound for TSP in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[traveling-salesman-problem-tsp-branch-and-bound-java-implementation|traveling-salesman-problem-tsp-branch-and-bound-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 5
---
# Implementing Branch and Bound for TSP in Java

This lesson focuses on practically applying the Branch and Bound technique to solve the Traveling Salesman Problem (TSP) using Java. We'll dive into the core logic and demonstrate how to code it.

## Understanding the Problem and Approach

The Traveling Salesman Problem (TSP) asks for the shortest possible route that visits a set of cities exactly once and returns to the origin city. For a small number of cities, brute force (checking every permutation) is feasible. However, as the number of cities grows, brute force becomes computationally intractable.

Branch and Bound is an optimization technique that systematically searches for the optimal solution by exploring a decision tree. It prunes branches of the tree that cannot possibly lead to a better solution than the best one found so far. This is achieved by calculating a *lower bound* for the cost of any solution reachable from a given node in the tree. If this lower bound is already greater than or equal to the cost of the best complete tour found so far, that branch is "bounded" and can be discarded.

## Core Components of a Branch and Bound TSP Solver

1.  **State Representation:** How do we represent a partial tour? This typically involves:
    *   The current city.
    *   The set of visited cities.
    *   The cost of the path taken so far.

2.  **Bounding Function:** This is crucial. It estimates the minimum possible cost to complete the tour from the current partial path. A good bounding function should be:
    *   **Admissible:** It never overestimates the true cost.
    *   **Tight:** It provides as close an estimate as possible to the true cost.

    A common bounding function for TSP uses the sum of the minimum outgoing edge from each unvisited city, plus the minimum edge connecting the current city to an unvisited city, and the minimum edge connecting an unvisited city back to the start city.

3.  **Exploration Strategy:** How do we choose which partial tour to explore next? Common strategies include:
    *   **Depth-First Search (DFS):** Explores one branch as far as possible.
    *   **Best-First Search:** Explores the node with the lowest lower bound first. This often uses a priority queue.

4.  **Pruning:** If the lower bound of a partial tour is greater than or equal to the cost of the best complete tour found so far, we prune that branch.

## Java Implementation Sketch

Let's outline the structure of a Java implementation. We'll use a `PriorityQueue` for a best-first search strategy, as it naturally prioritizes exploring the most promising partial tours.

```java
import java.util.*;

class TSPBranchAndBound {

    // Represents a node in the search tree
    static class Node implements Comparable<Node> {
        int currentCity;
        Set<Integer> visitedCities;
        double currentCost;
        double lowerBound; // Estimated minimum cost to complete the tour
        List<Integer> path; // To reconstruct the path

        Node(int currentCity, Set<Integer> visitedCities, double currentCost, List<Integer> path) {
            this.currentCity = currentCity;
            this.visitedCities = new HashSet<>(visitedCities); // Deep copy
            this.currentCost = currentCost;
            this.path = new ArrayList<>(path); // Deep copy
        }

        // For PriorityQueue: prioritize nodes with lower lowerBound
        @Override
        public int compareTo(Node other) {
            return Double.compare(this.lowerBound, other.lowerBound);
        }

        @Override
        public String toString() {
            return "Node{" +
                   "currentCity=" + currentCity +
                   ", visited=" + visitedCities.size() +
                   ", cost=" + currentCost +
                   ", lb=" + lowerBound +
                   ", path=" + path +
                   '}';
        }
    }

    // Assume adjMatrix[i][j] stores the distance from city i to city j
    // adjMatrix[i][i] is typically 0 or infinity
    static int[][] adjMatrix;
    static int numCities;
    static double minTourCost = Double.MAX_VALUE;
    static List<Integer> bestTourPath = new ArrayList<>();

    // Calculates a lower bound for the cost of completing the tour from the current node
    // This is a simplified example. More sophisticated bounds exist.
    static double calculateLowerBound(Node node) {
        double bound = node.currentCost;
        int currentCity = node.currentCity;

        // Cost from current city to the nearest unvisited city
        double minEdgeFromCurrent = Double.MAX_VALUE;
        for (int i = 0; i < numCities; i++) {
            if (!node.visitedCities.contains(i)) {
                minEdgeFromCurrent = Math.min(minEdgeFromCurrent, adjMatrix[currentCity][i]);
            }
        }
        if (minEdgeFromCurrent == Double.MAX_VALUE) minEdgeFromCurrent = 0; // If no unvisited cities left, this part is zero
        bound += minEdgeFromCurrent;


        // For each unvisited city, add the cost of its cheapest outgoing edge
        for (int i = 0; i < numCities; i++) {
            if (!node.visitedCities.contains(i)) {
                double minEdgeFromUnvisited = Double.MAX_VALUE;
                for (int j = 0; j < numCities; j++) {
                    if (i != j && !node.visitedCities.contains(j) && adjMatrix[i][j] != 0) { // Ensure it's not the city itself and not visited
                        minEdgeFromUnvisited = Math.min(minEdgeFromUnvisited, adjMatrix[i][j]);
                    }
                }
                // If an unvisited city has no outgoing edges to other unvisited cities (shouldn't happen in a connected graph for a valid partial tour)
                // Or if it's the last unvisited city, consider edge back to start
                if (minEdgeFromUnvisited == Double.MAX_VALUE) {
                     // Consider edge back to start city if it's the last unvisited city
                    if (node.visitedCities.size() == numCities -1) {
                        minEdgeFromUnvisited = adjMatrix[i][node.path.get(0)];
                    } else {
                        minEdgeFromUnvisited = 0; // Or handle error if graph isn't suitable
                    }
                }
                bound += minEdgeFromUnvisited;
            }
        }
        
        // The above calculation is a simplified bound.
        // A more robust bound might consider the sum of the two cheapest edges for each unvisited node,
        // and then divide by 2, ensuring edges connect to unvisited nodes or back to the start.
        // For this example, we'll stick to a simpler, but admissible, version.

        return bound;
    }


    public static void solveTSP(int[][] matrix) {
        adjMatrix = matrix;
        numCities = adjMatrix.length;
        minTourCost = Double.MAX_VALUE;
        bestTourPath.clear();

        PriorityQueue<Node> pq = new PriorityQueue<>();

        // Start from city 0 (arbitrary starting point)
        Set<Integer> initialVisited = new HashSet<>();
        initialVisited.add(0);
        List<Integer> initialPath = new ArrayList<>();
        initialPath.add(0);

        Node root = new Node(0, initialVisited, 0, initialPath);
        root.lowerBound = calculateLowerBound(root); // Calculate initial lower bound
        pq.add(root);

        while (!pq.isEmpty()) {
            Node currentNode = pq.poll();

            // If this node's lower bound is already worse than the best tour found, prune it.
            if (currentNode.lowerBound >= minTourCost) {
                continue;
            }

            // If all cities are visited
            if (currentNode.visitedCities.size() == numCities) {
                // Complete the tour by returning to the start city
                double totalCost = currentNode.currentCost + adjMatrix[currentNode.currentCity][currentNode.path.get(0)];
                if (totalCost < minTourCost) {
                    minTourCost = totalCost;
                    bestTourPath = new ArrayList<>(currentNode.path);
                    bestTourPath.add(currentNode.path.get(0)); // Add start city to complete loop
                }
                continue; // This branch is complete, move to the next node in PQ
            }

            // Explore neighbors
            for (int nextCity = 0; nextCity < numCities; nextCity++) {
                if (!currentNode.visitedCities.contains(nextCity) && adjMatrix[currentNode.currentCity][nextCity] != 0) {
                    Set<Integer> nextVisited = new HashSet<>(currentNode.visitedCities);
                    nextVisited.add(nextCity);
                    double nextCost = currentNode.currentCost + adjMatrix[currentNode.currentCity][nextCity];
                    List<Integer> nextPath = new ArrayList<>(currentNode.path);
                    nextPath.add(nextCity);

                    Node childNode = new Node(nextCity, nextVisited, nextCost, nextPath);
                    childNode.lowerBound = calculateLowerBound(childNode); // Calculate lower bound for the child

                    // Only add to PQ if its bound is potentially better
                    if (childNode.lowerBound < minTourCost) {
                        pq.add(childNode);
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        // Example graph (distances between cities)
        // 0 -- 10 -- 15 -- 20
        // | \     /  |     / |
        // 10  5   9   15  18
        // | /     \  |     \ |
        // 0 -- 35 -- 25 -- 30
        int[][] graph = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0}
        };

        solveTSP(graph);

        System.out.println("Minimum tour cost: " + minTourCost);
        System.out.println("Best tour path: " + bestTourPath); // e.g., [0, 1, 3, 2, 0]
    }
}
```

**Explanation of the Code:**

*   **`Node` Class:** Represents a state in our search. It stores the `currentCity`, the `visitedCities`, the `currentCost` accumulated so far, and importantly, the `lowerBound`. It implements `Comparable` to allow `PriorityQueue` to order nodes by their `lowerBound`.
*   **`adjMatrix`:** A 2D array representing the distances between cities. `adjMatrix[i][j]` is the distance from city `i` to city `j`.
*   **`calculateLowerBound(Node node)`:** This is the heart of the bounding mechanism. The provided implementation is a simplified version:
    *   It starts with the `currentCost`.
    *   It adds the shortest edge from the `currentCity` to any *unvisited* city.
    *   For every *other unvisited* city, it adds the shortest edge *leaving* that unvisited city to any *other unvisited* city (or back to the start if it's the last unvisited city). This sum provides a lower bound on the remaining cost.
    *   **Note:** A more sophisticated bounding function would provide tighter bounds and lead to more efficient pruning, but is more complex to implement.
*   **`solveTSP(int[][] matrix)`:**
    *   Initializes `minTourCost` to a very large value.
    *   Creates a `PriorityQueue` (`pq`) to store nodes to explore, ordered by their `lowerBound`.
    *   The `root` node is created, representing the start of the tour. Its lower bound is calculated.
    *   The `while (!pq.isEmpty())` loop is the core of the algorithm:
        *   It `poll`s (removes and returns) the node with the smallest `lowerBound` from the `pq`.
        *   **Pruning:** If `currentNode.lowerBound >= minTourCost`, this path cannot lead to a better solution, so we `continue` to the next iteration.
        *   **Goal Check:** If all cities are visited (`currentNode.visitedCities.size() == numCities`), we calculate the total tour cost (including the return to the start) and update `minTourCost` and `bestTourPath` if it's better.
        *   **Branching:** For each `nextCity` that hasn't been visited yet, a new `childNode` is created. Its cost and path are updated, and crucially, its `lowerBound` is calculated. If this `childNode.lowerBound` is still less than `minTourCost`, it's added to the `pq`.

## Key Considerations and Improvements

*   **Bounding Function Quality:** The effectiveness of Branch and Bound heavily relies on the quality of the bounding function. Tighter bounds lead to more pruning and faster execution. Common improvements include:
    *   **Minimum Spanning Tree (MST) based bounds:** Using MST on the subgraph of unvisited nodes.
    *   **Assignment Problem bounds:** Solving a related linear assignment problem.
*   **Data Structures:** For very large graphs, more advanced data structures might be considered, but `PriorityQueue` is standard for best-first search.
*   **Starting Node:** For symmetric TSP problems, the choice of the starting node doesn't affect the minimum tour cost, but it can influence the search process.
*   **Graph Representation:** For sparse graphs, an adjacency list might be more memory-efficient than an adjacency matrix.

This lesson provides a foundational understanding and a practical Java implementation sketch for solving TSP using Branch and Bound. By understanding the interplay between states, bounding, and pruning, you can apply this powerful technique to various optimization problems.

## Supports

- [[traveling-salesman-problem-tsp-branch-and-bound-java-implementation|Traveling Salesman Problem (TSP) Branch and Bound Java Implementation]]
