---
type: "medium"
title: "Algorithm Design Strategy Recall"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithms/microskills/algorithm-design-strategy-recall|algorithm-design-strategy-recall]]"
learning-time-in-minutes: 4
---
# Algorithm Design Strategy Recall

Understanding how algorithms are built is a fundamental step in mastering them. This lesson focuses on remembering common **algorithm design strategies**. These are like blueprints or high-level plans that guide the creation of specific algorithms.

## What are Algorithm Design Strategies?

Algorithm design strategies are general approaches or paradigms used to construct algorithms. They provide a framework for solving a class of problems. Think of them as different toolkits you can choose from when you need to build a solution.

## Common Design Strategies

Here are some fundamental strategies you should be familiar with:

*   **Divide and Conquer:** Break a problem down into smaller, independent subproblems of the same type. Solve these subproblems recursively, and then combine their solutions to solve the original problem.
*   **Greedy Approach:** Make the locally optimal choice at each stage with the hope of finding a global optimum. This strategy doesn't look ahead or reconsider previous choices.
*   **Dynamic Programming:** Break a problem down into overlapping subproblems. Solve each subproblem only once and store its solution. Use these stored solutions to solve larger subproblems.
*   **Brute Force:** Try every possible solution until the correct one is found. This is often simple to implement but can be very inefficient for large problems.
*   **Backtracking:** Systematically search for a solution by trying to build a solution incrementally, one piece at a time. If at any point a partial solution cannot be completed into a valid solution, abandon it (backtrack) and try a different path.

## Practical Scenario

Imagine you have a large collection of books (the problem). You need to find a specific book by its title.

*   **Divide and Conquer:** You could split the library into sections (e.g., fiction, non-fiction), then split those sections further, and so on. Once you find the section the book is in, you might use another strategy (like a greedy approach of looking for books with titles starting with 'A' first) within that section.
*   **Greedy Approach:** You might decide to always look on the shelves that start with the letter closest to the first letter of the book title you're searching for. This might work well if your books are alphabetized.
*   **Dynamic Programming:** Less directly applicable to simple book finding, but if you were trying to optimize shelving space while categorizing books, you might use this to remember the best placement for smaller groups of books to build up an optimal overall arrangement.
*   **Brute Force:** You could start at the first book on the first shelf and check every single book, one by one, until you find the one you're looking for.
*   **Backtracking:** If you're trying to arrange books according to a complex set of rules (e.g., alphabetical by author, then by publication date, but with special exceptions), you might place a book, check if the arrangement is valid so far. If it's not, you move that book and try placing another one.

## Practice Task

For each of the following problems, identify which of the listed algorithm design strategies is most likely to be used, or what strategy would be a reasonable starting point.

1.  Finding the shortest path between two cities on a map.
2.  Finding a specific word in a dictionary.
3.  Solving a Sudoku puzzle.
4.  Making change with the fewest possible coins.
5.  Sorting a list of numbers.

## Self-Check Questions

1.  Which strategy involves breaking a problem into smaller, identical subproblems?
2.  What strategy makes the best choice at each step without considering future consequences?
3.  When might you use **Brute Force** as an algorithm design strategy?
4.  What is the core idea behind **Dynamic Programming**?
5.  If you encounter a dead end while trying to build a solution, what strategy typically involves returning to a previous decision point?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/algorithm-design-strategy-recall|Algorithm Design Strategy Recall]]
