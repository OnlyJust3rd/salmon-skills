---
type: "medium"
title: "Strategy Selection: Picking the Right Algorithm Approach"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/computational-problem-solving/microskills/strategy-selection|strategy-selection]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/computational-problem-solving/computational-problem-solving|computational-problem-solving]]"
learning-time-in-minutes: 4
---
# Strategy Selection: Picking the Right Algorithm Approach

To effectively solve computational problems, we need to design algorithms. A crucial part of this is selecting the **right strategy** for our algorithm. This means understanding different approaches to problem-solving and knowing when to apply each one to achieve an efficient and correct solution.

### Why Strategy Selection Matters

Imagine you need to find a specific book in a library. You could randomly pick books off shelves (inefficient!), or you could use the library's catalog system (efficient!). Similarly, in computing, choosing the correct algorithmic strategy can drastically impact performance, resource usage, and even whether a solution is feasible for large datasets.

### Common Algorithmic Strategies

Here are a few fundamental strategies you'll encounter:

*   **Brute Force:** Trying every possible solution until you find the correct one. This is often simple to implement but can be very slow.
*   **Divide and Conquer:** Breaking a problem into smaller, similar subproblems, solving them independently, and then combining their solutions.
*   **Greedy Approach:** Making the locally optimal choice at each step with the hope that this will lead to a globally optimal solution.
*   **Dynamic Programming:** Solving subproblems and storing their solutions to avoid recomputing them, typically for problems with overlapping subproblems.

### Practical Example: Finding the Shortest Path in a Maze

Let's say you have a maze represented as a grid. You start at point A and want to find the shortest path to point B.

*   **Brute Force:** You could try every single possible path from A, marking visited cells to avoid loops. This would involve exploring many dead ends and would be extremely slow for a large maze.
*   **Greedy Approach:** At each intersection, you might decide to move towards the exit. However, this could lead you down a long, winding path if an immediate "forward" step is not actually part of the shortest overall route.
*   **Divide and Conquer:** This isn't as directly applicable to simple maze pathfinding in its purest form, though variations exist.
*   **Breadth-First Search (BFS) - A common strategy for shortest paths:** This is a systematic way to explore the maze level by level. You explore all cells one step away from the start, then all cells two steps away, and so on. The first time you reach the destination, you've found the shortest path. This fits well with the "find the shortest path" outcome.

**When to choose BFS for the maze:** BFS is a very effective strategy when you need to find the shortest path in an unweighted graph (like our maze, where each step has the same "cost").

### Practice Task

Consider the following problem:

You are given a list of numbers, and you need to find if a specific target number exists within that list.

Which of the following strategies would you primarily consider, and why?

1.  **Brute Force:** Check every number in the list one by one against the target.
2.  **Divide and Conquer:** Split the list in half, search each half, and combine results.
3.  **Greedy Approach:** Not directly applicable here.
4.  **Binary Search (a form of Divide and Conquer):** This strategy requires the list to be sorted first.

Discuss the trade-offs between Brute Force and Binary Search for this task, assuming the list is very large.

### Self-Check Questions

1.  What is the main advantage of using a "divide and conquer" strategy over "brute force" for many problems?
2.  If you need to find the absolute minimum value in a list, and the list is not sorted, what would be a straightforward strategy?
3.  Why is it important to consider the size of the input (e.g., a large list vs. a small list) when selecting an algorithmic strategy?

## Supports

- [[skills/computing/computer-science/algorithms/computational-problem-solving/microskills/strategy-selection|Strategy Selection]]
