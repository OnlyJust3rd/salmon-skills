---
type: medium
title: Implementing Knapsack with Branch and Bound in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[knapsack-branch-and-bound-java-implementation|knapsack-branch-and-bound-java-implementation]]"
learning-time-in-minutes: 3
---
# Implementing Knapsack with Branch and Bound in Java

This lesson focuses on applying the Branch and Bound technique to solve the 0/1 Knapsack problem by writing Java code. We'll explore how to structure the solution to efficiently explore possible item combinations and prune branches that cannot lead to an optimal solution.

## Understanding the 0/1 Knapsack Problem

The 0/1 Knapsack problem involves a set of items, each with a weight and a value. The goal is to select items to include in a knapsack with a limited weight capacity, such that the total value of the selected items is maximized without exceeding the capacity. For each item, you can either take it entirely (1) or leave it entirely (0).

## Branch and Bound for Knapsack

Branch and Bound is an algorithmic technique used for optimization problems. It works by systematically exploring a tree of possible solutions.

*   **Branching:** At each node in the search tree, we make a decision about an item – either include it or exclude it. This creates branches.
*   **Bounding:** For each node, we calculate an upper bound on the maximum possible value that can be achieved from that node onwards. If this upper bound is less than the best solution found so far, we can "prune" this branch, meaning we don't explore it further. This is crucial for efficiency.

For the 0/1 Knapsack problem, a common bounding function is to calculate the value if we were allowed to take fractional parts of items (Fractional Knapsack), which provides a valid upper bound.

## Java Implementation Strategy

We'll use a priority queue to manage the nodes to explore. Nodes with higher potential values (calculated using the upper bound) will be prioritized. A node in our search will typically store:

1.  The current level (which item we are considering).
2.  The current profit accumulated.
3.  The current weight of items selected.
4.  An upper bound on the maximum profit achievable from this node.

### Data Structures

We'll need classes to represent items and the nodes in our search tree.

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

class Item {
    int weight;
    int value;
    double fraction; // For bounding calculation

    public Item(int weight, int value) {
        this.weight = weight;
        this.value = value;
    }
}

class Node {
    int level;      // Level in the decision tree (index of item being considered)
    int profit;     // Profit accumulated so far
    int weight;     // Weight accumulated so far
    double bound;   // Upper bound of maximum profit from this node

    public Node(int level, int profit, int weight, double bound) {
        this.level = level;
        this.profit = profit;
        this.weight = weight;
        this.bound = bound;
    }
}
```

### The `bound` Function

This function calculates the upper bound for a given node. It uses a greedy approach to fill the remaining capacity, allowing fractional items, which gives us a loose but valid upper bound.

```java
class KnapsackBranchAndBound {

    // Function to calculate the upper bound for a node
    private double bound(Node u, int W, Item[] items, int n) {
        if (u.weight >= W) {
            return 0; // Cannot add more if already overweight
        }

        double profit_bound = u.profit;
        int j = u.level + 1;
        int total_weight = u.weight;

        // Greedily add items until capacity is reached
        while (j < n && total_weight + items[j].weight <= W) {
            total_weight += items[j].weight;
            profit_bound += items[j].value;
            j++;
        }

        // If there's still capacity, add a fraction of the next item
        if (j < n) {
            profit_bound += (W - total_weight) * items[j].fraction;
        }

        return profit_bound;
    }

    // Main function to solve Knapsack using Branch and Bound
    public int solveKnapsack(int W, Item[] items) {
        int n = items.length;

        // Sort items by value-to-weight ratio in descending order
        Arrays.sort(items, (a, b) -> Double.compare((double)b.value / b.weight, (double)a.value / a.weight));

        // Pre-calculate fractions for bounding
        for (int i = 0; i < n; i++) {
            items[i].fraction = (double)items[i].value / items[i].weight;
        }

        // Priority queue to store live nodes of search tree.
        // Nodes with higher bound values are prioritized.
        PriorityQueue<Node> pq = new PriorityQueue<>(Comparator.comparingDouble((node) -> -node.bound));

        // Root node: level -1 (no items considered yet), profit 0, weight 0
        Node u = new Node(-1, 0, 0, 0.0);
        u.bound = bound(u, W, items, n); // Calculate bound for root
        pq.add(u);

        int maxProfit = 0;

        while (!pq.isEmpty()) {
            // Dequeue the node with the highest bound
            Node v = pq.poll();

            // If bound is less than maxProfit, prune this node
            if (v.bound > maxProfit) {
                // Consider the next item
                int nextLevel = v.level + 1;

                // If all items considered, we are at a leaf node
                if (nextLevel == n) {
                    continue;
                }

                // --- Branch 1: Include the next item ---
                Node includeNode = new Node(nextLevel, v.profit + items[nextLevel].value, v.weight + items[nextLevel].weight, 0.0);

                // If including the item does not exceed capacity
                if (includeNode.weight <= W) {
                    maxProfit = Math.max(maxProfit, includeNode.profit);
                    includeNode.bound = bound(includeNode, W, items, n);
                    if (includeNode.bound > maxProfit) {
                        pq.add(includeNode);
                    }
                }

                // --- Branch 2: Exclude the next item ---
                Node excludeNode = new Node(nextLevel, v.profit, v.weight, 0.0);
                excludeNode.bound = bound(excludeNode, W, items, n);
                if (excludeNode.bound > maxProfit) {
                    pq.add(excludeNode);
                }
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int W = 50; // Knapsack capacity
        Item[] items = {
            new Item(10, 60),
            new Item(20, 100),
            new Item(30, 120)
        };

        KnapsackBranchAndBound ks = new KnapsackBranchAndBound();
        int maxProfit = ks.solveKnapsack(W, items);
        System.out.println("Maximum profit for Knapsack problem: " + maxProfit); // Expected: 220 (items with weight 20 and 30)

        // Another example
        W = 10;
        Item[] items2 = {
            new Item(2, 10),
            new Item(3, 5),
            new Item(5, 15),
            new Item(7, 7),
            new Item(1, 6)
        };
        maxProfit = ks.solveKnapsack(W, items2);
        System.out.println("Maximum profit for Knapsack problem: " + maxProfit); // Expected: 31 (items with weights 2, 3, 5)
    }
}
```

## How it Works

1.  **Sorting:** Items are sorted by their value-to-weight ratio. This greedy approach helps in calculating a tighter upper bound early on and in prioritizing more valuable items.
2.  **Priority Queue:** The `PriorityQueue` ensures that we always explore the node that has the highest potential to lead to the optimal solution.
3.  **Branching:** For each node `v`, we create two child nodes: one where the `nextLevel` item is *included* and one where it's *excluded*.
4.  **Bounding & Pruning:** Before adding a child node to the queue, its upper bound is calculated. If this bound is not better than the `maxProfit` found so far, the node (and its entire subtree) is pruned. This significantly reduces the search space.
5.  **Updating `maxProfit`:** Whenever we create a node by *including* an item, and its weight doesn't exceed the capacity, we update `maxProfit` if the current profit is higher. This is how we keep track of the best feasible solution found.

This implementation demonstrates the core logic of applying Branch and Bound to the 0/1 Knapsack problem, prioritizing efficiency through intelligent pruning.

## Supports

- [[knapsack-branch-and-bound-java-implementation|Knapsack Branch and Bound Java Implementation]]
