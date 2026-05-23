---
type: medium
title: Solving Sudoku with Backtracking in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[sudoku-solver-backtracking-java-implementation|sudoku-solver-backtracking-java-implementation]]"
learning-time-in-minutes: 4
---
# Solving Sudoku with Backtracking in Java

This lesson focuses on implementing a Sudoku solver using the backtracking algorithm in Java. Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time.

## Understanding the Sudoku Problem

A Sudoku puzzle is a 9x9 grid where some cells are filled with digits from 1 to 9, and others are empty. The goal is to fill the empty cells such that:
* Each row contains digits from 1 to 9 exactly once.
* Each column contains digits from 1 to 9 exactly once.
* Each of the nine 3x3 subgrids (boxes) contains digits from 1 to 9 exactly once.

## Backtracking Approach for Sudoku

The backtracking approach for Sudoku can be visualized as a recursive search. We try to place a number in an empty cell. If the number is valid (doesn't violate Sudoku rules), we move to the next empty cell and repeat the process. If we encounter a situation where no valid number can be placed in a cell, we "backtrack" – meaning we undo the last choice and try a different number.

Here's the general algorithm:

1.  **Find an empty cell**: Scan the Sudoku grid to find the next empty cell (typically represented by 0).
2.  **Try numbers**: For the found empty cell, iterate through digits from 1 to 9.
3.  **Check validity**: For each digit, check if placing it in the current cell is valid according to Sudoku rules (row, column, and 3x3 box constraints).
4.  **Recursive call**: If the digit is valid, place it in the cell and recursively call the solver function for the next empty cell.
5.  **Success**: If the recursive call returns `true` (meaning a solution was found), then we've successfully solved the puzzle.
6.  **Backtrack**: If the recursive call returns `false` (meaning no solution was found with the current digit choice), or if we've tried all digits from 1 to 9 and none worked, then reset the current cell to empty (0) and return `false` to the previous recursive call.
7.  **No empty cells**: If there are no empty cells left, it means the puzzle is solved, and we return `true`.

## Java Implementation

Let's break down the Java code. We'll need a few helper functions and the main recursive solver function.

### Helper Functions

First, we need a way to check if placing a number `num` at `(row, col)` is valid.

```java
class SudokuSolver {

    private static final int GRID_SIZE = 9;

    // Checks if a number can be placed at a given position
    private boolean isSafe(int[][] board, int row, int col, int num) {
        // Check row
        for (int d = 0; d < GRID_SIZE; d++) {
            if (board[row][d] == num) {
                return false; // Number already exists in this row
            }
        }

        // Check column
        for (int r = 0; r < GRID_SIZE; r++) {
            if (board[r][col] == num) {
                return false; // Number already exists in this column
            }
        }

        // Check 3x3 box
        int boxStartRow = row - row % 3;
        int boxStartCol = col - col % 3;

        for (int r = boxStartRow; r < boxStartRow + 3; r++) {
            for (int d = boxStartCol; d < boxStartCol + 3; d++) {
                if (board[r][d] == num) {
                    return false; // Number already exists in this 3x3 box
                }
            }
        }

        // If no conflicts, it's safe to place
        return true;
    }

    // Finds the next empty cell (represented by 0)
    private int[] findEmptyLocation(int[][] board) {
        for (int r = 0; r < GRID_SIZE; r++) {
            for (int c = 0; c < GRID_SIZE; c++) {
                if (board[r][c] == 0) {
                    return new int[]{r, c}; // Returns row and column of the empty cell
                }
            }
        }
        return null; // No empty location found
    }

    // ... (solveSudoku function will go here) ...
    // ... (printBoard function will go here) ...
}
```

### The `solveSudoku` Function

This is the core recursive backtracking function.

```java
class SudokuSolver {

    private static final int GRID_SIZE = 9;

    // ... (isSafe and findEmptyLocation methods) ...

    // Solves the Sudoku puzzle using backtracking
    public boolean solveSudoku(int[][] board) {
        int[] emptyLoc = findEmptyLocation(board);

        // Base case: If there are no empty locations, the puzzle is solved
        if (emptyLoc == null) {
            return true;
        }

        int row = emptyLoc[0];
        int col = emptyLoc[1];

        // Try numbers 1 to 9
        for (int num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
                // Place the number if it's safe
                board[row][col] = num;

                // Recursively try to solve the rest of the puzzle
                if (solveSudoku(board)) {
                    return true; // Solution found
                }

                // Backtrack: If placing 'num' didn't lead to a solution,
                // reset the cell and try the next number
                board[row][col] = 0;
            }
        }

        // If no number from 1 to 9 works for this cell, trigger backtracking
        return false;
    }

    // Helper to print the board
    public void printBoard(int[][] board) {
        for (int r = 0; r < GRID_SIZE; r++) {
            if (r % 3 == 0 && r != 0) {
                System.out.println("-----------|-----------|-----------");
            }
            for (int d = 0; d < GRID_SIZE; d++) {
                if (d % 3 == 0 && d != 0) {
                    System.out.print(" | ");
                }
                if (d == 8) {
                    System.out.println(board[r][d]);
                } else {
                    System.out.print(board[r][d] + " ");
                }
            }
        }
    }

    public static void main(String[] args) {
        SudokuSolver solver = new SudokuSolver();
        int[][] board = {
                {5, 3, 0, 0, 7, 0, 0, 0, 0},
                {6, 0, 0, 1, 9, 5, 0, 0, 0},
                {0, 9, 8, 0, 0, 0, 0, 6, 0},
                {8, 0, 0, 0, 6, 0, 0, 0, 3},
                {4, 0, 0, 8, 0, 3, 0, 0, 1},
                {7, 0, 0, 0, 2, 0, 0, 0, 6},
                {0, 6, 0, 0, 0, 0, 2, 8, 0},
                {0, 0, 0, 4, 1, 9, 0, 0, 5},
                {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };

        System.out.println("Unsolved Sudoku Board:");
        solver.printBoard(board);
        System.out.println("\nSolving...\n");

        if (solver.solveSudoku(board)) {
            System.out.println("Sudoku Solved Successfully:");
            solver.printBoard(board);
        } else {
            System.out.println("No solution exists for the given Sudoku board.");
        }
    }
}
```

### How it Works

The `solveSudoku` method first looks for an empty cell. If none are found, it means the board is full and thus solved, returning `true`. If an empty cell is found at `(row, col)`, it iterates through numbers 1 to 9. For each number, it checks if placing it is valid using `isSafe`. If `isSafe` returns `true`, the number is tentatively placed, and `solveSudoku` is called recursively for the next empty cell.

If the recursive call `solveSudoku(board)` returns `true`, it means a valid placement was found down that path, and we propagate `true` upwards. However, if `solveSudoku(board)` returns `false`, it signifies that the current tentative placement of `num` at `(row, col)` did not lead to a complete solution. In this case, we **backtrack**: reset `board[row][col]` back to `0` and continue the loop to try the next possible number for `(row, col)`. If the loop finishes without finding any number that leads to a solution, the function returns `false`, triggering backtracking in the caller.

## Key Takeaways

*   **Recursion:** The core of backtracking is breaking a problem into smaller, self-similar subproblems and solving them recursively.
*   **Constraints:** The `isSafe` function is crucial for enforcing the Sudoku rules (row, column, and box constraints).
*   **Backtracking Step:** Resetting the cell (`board[row][col] = 0;`) is the essential "undo" operation that allows exploration of alternative paths.
*   **Base Case:** The base case of the recursion is when there are no more empty cells, indicating a complete and valid solution.

## Supports

- [[sudoku-solver-backtracking-java-implementation|Sudoku Solver Backtracking Java Implementation]]
