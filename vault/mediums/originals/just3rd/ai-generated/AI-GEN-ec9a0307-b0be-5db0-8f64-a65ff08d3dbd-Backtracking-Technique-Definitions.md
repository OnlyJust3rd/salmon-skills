---
type: "medium"
title: "Understanding Backtracking Techniques"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithms/microskills/backtracking-technique-definitions|backtracking-technique-definitions]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithms/algorithms|algorithms]]"
learning-time-in-minutes: 4
---
# Understanding Backtracking Techniques

Backtracking is a general algorithmic technique used for solving computational problems, especially those that involve searching for a solution within a large space of possibilities. Think of it as exploring a maze: you go down one path, and if it leads to a dead end, you "backtrack" to the last decision point and try a different path.

## What is Backtracking?

At its core, backtracking works by building a solution incrementally. At each step, it tries to extend the current partial solution. If the partial solution can be extended to a complete solution, it continues. If the partial solution cannot be extended or leads to a dead end (meaning it cannot possibly lead to a valid complete solution), the algorithm "backtracks" by undoing the last step and trying a different option.

Key characteristics of problems suited for backtracking include:

*   **Finding all solutions:** Backtracking can be used to find all valid solutions to a problem, not just one.
*   **Exploring a state space:** The problem can be represented as a tree or graph where nodes represent states and edges represent transitions.
*   **Pruning:** The ability to determine early on if a partial solution cannot lead to a valid final solution is crucial for efficiency.

## A Practical Scenario: N-Queens Problem

A classic example to illustrate backtracking is the N-Queens problem. The goal is to place N chess queens on an N×N chessboard such that no two queens threaten each other (i.e., no two queens share the same row, column, or diagonal).

Imagine you're trying to solve this for N=4.

1.  **Start:** Place the first queen in the first row, say at column 0.
2.  **Second Queen:** Move to the second row. Try placing the queen in column 0. This is invalid because it's in the same column as the first queen. Try column 1. This is also invalid (diagonal threat). Try column 2. This is valid!
3.  **Third Queen:** Move to the third row. Try column 0. Invalid (diagonal threat). Try column 1. Invalid (column threat with queen in row 2, col 1 if you placed it there - oops, we assumed placing queen in row 2 col 2). Let's restart with better tracking.

Let's represent the board. An empty board:

```
. . . .
. . . .
. . . .
. . . .
```

Place queen in row 0, col 0:

```
Q . . .
. . . .
. . . .
. . . .
```

Now for row 1. Can't place in col 0 (column threat). Can't place in col 1 (diagonal threat). Can place in col 2.

```
Q . . .
. . Q .
. . . .
. . . .
```

Now for row 2. Can't place in col 0 (diagonal threat). Can't place in col 1 (diagonal threat). Can't place in col 2 (column threat). Can't place in col 3 (diagonal threat).

**Dead end!** We need to backtrack. The last choice was placing the queen in row 1, column 2. Let's undo that.

Go back to row 1. We tried col 0, 1, 2. Let's try col 3.

```
Q . . .
. . . Q
. . . .
. . . .
```

Now for row 2. Can't place in col 0 (diagonal). Can't place in col 1. Can place in col 2.

```
Q . . .
. . . Q
. . Q .
. . . .
```

Now for row 3. Can't place in col 0. Can't place in col 1. Can't place in col 2 (column). Can't place in col 3 (diagonal).

**Dead end again!** Backtrack from row 3. Backtrack from row 2, col 2.

This process continues, exploring possibilities and undoing choices when they don't lead to a solution, until a complete, valid placement is found or all possibilities are exhausted.

## Practice Task

Imagine you have a simple problem: Find all combinations of two positive numbers that sum up to 5.

Using a backtracking-like approach:

1.  Start with the first number, say 1.
2.  Try to find a second number that, when added to 1, equals 5. The second number is 4. This is a valid combination (1, 4).
3.  Now, consider the first number as 2.
4.  Try to find a second number that, when added to 2, equals 5. The second number is 3. This is a valid combination (2, 3).
5.  Continue this for the first number being 3 (second number is 2), and 4 (second number is 1).
6.  What happens if the first number is 5? The second number would need to be 0, but we are looking for *positive* numbers. This path is pruned.

What other combinations can you find?

## Self-Check Questions

1.  What is the core idea behind backtracking?
2.  When exploring options, what does "backtracking" mean?
3.  Can you name one advantage of using backtracking?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/backtracking-technique-definitions|Backtracking Technique Definitions]]
