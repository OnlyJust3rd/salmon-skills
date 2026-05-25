---
type: "medium"
title: "Algorithmic Paradigm Identification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/algorithmic-paradigm-identification|algorithmic-paradigm-identification]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/algorithmic-thinking|algorithmic-thinking]]"
learning-time-in-minutes: 3
---
# Algorithmic Paradigm Identification

Understanding common algorithmic paradigms is like learning a toolbox for solving problems with computers. Each paradigm offers a different strategy for breaking down a problem and finding a solution. This lesson focuses on recognizing these fundamental approaches to algorithm design.

### What are Algorithmic Paradigms?

An algorithmic paradigm is a general method or approach to designing algorithms. They provide a framework for thinking about how to solve a class of problems efficiently. By recognizing these patterns, you can more easily select or invent algorithms for new challenges.

Here are some common algorithmic paradigms:

*   **Brute Force:** Trying all possible solutions until the correct one is found. Simple but often inefficient.
*   **Divide and Conquer:** Breaking a problem into smaller subproblems of the same type, solving them recursively, and combining their solutions.
*   **Greedy:** Making the locally optimal choice at each stage with the hope of finding a global optimum.
*   **Dynamic Programming:** Solving complex problems by breaking them down into simpler subproblems, solving each subproblem only once, and storing their solutions.
*   **Backtracking:** Building a solution incrementally, one piece at a time, and abandoning a path as soon as it is determined that it cannot lead to a valid solution.

### Practical Scenario: Finding the Shortest Path

Imagine you need to find the shortest route between two cities on a map.

*   **Brute Force:** You could list every single possible path between the two cities and calculate the distance for each one, then pick the shortest. This would be incredibly time-consuming and impractical for large maps.
*   **Divide and Conquer:** This isn't directly applicable to finding a single shortest path in its purest form, but variations of it are used in more complex graph algorithms.
*   **Greedy:** A simple greedy approach might be: at each intersection, always take the road that seems to lead most directly towards your destination. However, this might lead you down a road that quickly becomes a dead end or has heavy traffic, making it not the globally shortest path.
*   **Dynamic Programming:** Could be used by calculating the shortest paths to intermediate points and building up to the final destination.
*   **Backtracking:** If you get stuck in a dead end on a path, you'd "backtrack" to the last intersection and try a different route.

A well-known algorithm for finding the shortest path, like Dijkstra's algorithm, uses a combination of greedy choices and structured exploration, but it's a more sophisticated application than simple greedy.

### Practice Task

Consider the following problem: You have a list of numbers, and you need to find the largest number. Which algorithmic paradigm is most directly represented by the following approach?

"Go through the list, keeping track of the biggest number seen *so far*. If you encounter a new number that is larger, update your 'biggest so far' record. After checking all numbers, the final 'biggest so far' is your answer."

### Self-Check Questions

1.  If you were trying to find all possible combinations to unlock a safe with a 3-digit code, and you tried every single combination from 000 to 999, which paradigm would you be using?
2.  When solving a complex sorting problem by splitting it into two smaller sorting problems, sorting those, and then merging the results, which paradigm is being applied?
3.  What is the primary characteristic of a greedy approach?

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/algorithmic-paradigm-identification|Algorithmic Paradigm Identification]]
