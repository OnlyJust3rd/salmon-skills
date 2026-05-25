---
type: "medium"
title: "Implementing Backtracking Algorithms in Java"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithms/microskills/backtracking-algorithm-implementation|backtracking-algorithm-implementation]]"
learning-time-in-minutes: 2
---
# Implementing Backtracking Algorithms in Java

Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the constraints of the problem. It's particularly useful for problems where you need to explore all possible combinations or permutations. Think of it like navigating a maze: you take a path, and if it leads to a dead end, you backtrack to the last junction and try a different path.

When implementing backtracking, the core idea is to define a recursive function that explores potential solutions. This function typically has three key components:

1.  **Base Case:** When a valid solution is found or when it's determined that no solution can be found down the current path.
2.  **Recursive Step:** Explore all possible choices for the next step.
3.  **Backtrack:** If a choice leads to a dead end or an invalid state, undo that choice and try another.

## Practical Example: N-Queens Problem

The N-Queens problem is a classic example where backtracking shines. The goal is to place N chess queens on an N×N chessboard such that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal.

Let's outline a Java implementation strategy for placing N queens.

We'll use a 2D array (or a 1D array where the index represents the row and the value represents the column of the queen in that row) to represent the chessboard.

```java
class NQueens {

    private int N;
    private int[] board; // board[row] = col

    public NQueens(int n) {
        N = n;
        board = new int[N];
    }

    public void solveNQueens() {
        if (solve(0)) {
            printSolution();
        } else {
            System.out.println("Solution does not exist");
        }
    }

    // Recursive function to place queens row by row
    private boolean solve(int row) {
        // Base case: All queens are placed successfully
        if (row == N) {
            return true;
        }

        // Try placing a queen in each column of the current row
        for (int col = 0; col < N; col++) {
            if (isSafe(row, col)) {
                // Place the queen
                board[row] = col;

                // Recur to place the rest of the queens
                if (solve(row + 1)) {
                    return true; // Found a solution
                }

                // Backtrack: If placing queen at board[row][col] doesn't lead to a solution,
                // then remove queen from board[row][col] (implicitly done by next iteration)
                // or by explicitly resetting if using a 2D array.
                // For our 1D array, the next loop iteration for 'col' overwrites it.
            }
        }
        // If queen cannot be placed in any column in this row
        return false;
    }

    // Check if placing a queen at board[row][col] is safe
    private boolean isSafe(int row, int col) {
        for (int prevRow = 0; prevRow < row; prevRow++) {
            int prevCol = board[prevRow];

            // Check same column
            if (prevCol == col) {
                return false;
            }

            // Check diagonals
            if (Math.abs(row - prevRow) == Math.abs(col - prevCol)) {
                return false;
            }
        }
        return true;
    }

    private void printSolution() {
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (board[i] == j) {
                    System.out.print("Q ");
                } else {
                    System.out.print(". ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        NQueens nQueens = new NQueens(4); // For a 4x4 board
        nQueens.solveNQueens();
    }
}
```

In this code:
- `solve(int row)` is the recursive function.
- The `for` loop iterates through possible column placements in the current `row`.
- `isSafe(int row, int col)` checks if placing a queen at `(row, col)` is valid with respect to previously placed queens.
- If `isSafe` returns true, we "place" the queen (`board[row] = col`) and recursively call `solve` for the next row.
- If the recursive call returns `false`, it means the current path is a dead end, and the loop continues to the next column, effectively "backtracking" from the previous choice.

## Practice Task

Implement a backtracking algorithm in Java to find all permutations of a given array of integers.

## Self-Check Questions

1.  What is the primary role of the `isSafe` method in the N-Queens example?
2.  In the `solve` method, when does backtracking occur?
3.  Consider a scenario where you need to find a path in a maze. How would you define the "state" for your backtracking function?

## Supports

- [[skills/computing/computer-science/algorithms/algorithms/microskills/backtracking-algorithm-implementation|Backtracking Algorithm Implementation]]
