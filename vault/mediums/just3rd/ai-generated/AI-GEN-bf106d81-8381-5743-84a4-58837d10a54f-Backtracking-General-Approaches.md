---
type: "medium"
title: "Backtracking: Exploring All Paths"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithms/microskills/backtracking-general-approaches|Backtracking General Approaches]]"
---
# Backtracking: Exploring All Paths

Backtracking is a general algorithmic technique for solving problems that involve making a sequence of choices. It's like navigating a maze: you try one path, and if it leads to a dead end, you "backtrack" and try another. The core idea is to build a solution incrementally, one step at a time, and abandon a path as soon as it's determined that it cannot lead to a valid solution.

## How Backtracking Works

Backtracking algorithms explore a set of possible solutions. They can be visualized as a tree where each node represents a partial solution, and edges represent choices.

The general approach involves:

1.  **Making a Choice:** Select an option to extend the current partial solution.
2.  **Exploring:** Recursively call the function to explore further with this choice.
3.  **Checking for Validity:** If the current partial solution is invalid or cannot lead to a full solution, "backtrack."
4.  **Backtracking:** Undo the last choice and try a different one.
5.  **Solution Found:** If a complete and valid solution is found, record it.

## Practical Example: The N-Queens Problem

Consider the classic N-Queens problem: placing N chess queens on an N×N chessboard such that no two queens threaten each other.

Let's think about backtracking for placing queens on a 4x4 board:

*   **Start:** We try to place the first queen in row 0. Let's put it in column 0.
*   **Next Row:** Now we move to row 1. We try to place a queen.
    *   Can we place it in column 0? No, it attacks the queen in row 0.
    *   Can we place it in column 1? No, it attacks diagonally.
    *   Can we place it in column 2? Yes.
*   **Next Row:** Move to row 2.
    *   Can we place a queen in column 0? No, attacked.
    *   Column 1? No, attacked.
    *   Column 2? No, attacked.
    *   Column 3? No, attacked.
*   **Dead End:** We've reached a dead end in row 2. We need to backtrack.
*   **Backtrack to Row 1:** We remove the queen from row 1, column 2. We try the next column for row 1.
    *   Column 3? Yes.
*   **Next Row (Row 2):**
    *   Column 0? No.
    *   Column 1? Yes.
*   **Next Row (Row 3):**
    *   Column 0? No.
    *   Column 1? No.
    *   Column 2? Yes.
*   **Solution Found!** We have successfully placed 4 queens without conflict.

This process of trying a placement, checking conflicts, and moving to the next row, and then backtracking when a conflict is found or no valid placement exists, is the essence of backtracking.

## Practice Task

Imagine you need to find a path through a simple grid where some cells are blocked. You start at the top-left and want to reach the bottom-right.

Describe, in pseudocode or plain English, how you would use backtracking to find *any* valid path from the start to the end. What would constitute a "choice," a "valid partial solution," and the "backtracking" step?

## Self-Check Questions

1.  What is the primary purpose of the "backtracking" step in this technique?
2.  When might backtracking be inefficient for a problem?
3.  How is backtracking different from brute-force search?

## Supports

- [[skills/programming/algorithms/algorithms/microskills/backtracking-general-approaches|Backtracking General Approaches]]
