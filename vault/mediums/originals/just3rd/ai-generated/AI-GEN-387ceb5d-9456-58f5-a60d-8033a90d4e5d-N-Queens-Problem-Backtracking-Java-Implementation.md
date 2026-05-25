---
type: medium
title: N-Queens Problem Backtracking Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[n-queens-problem-backtracking-java-implementation|n-queens-problem-backtracking-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 5
---
# N-Queens Problem Backtracking Java Implementation

This lesson focuses on applying backtracking techniques in Java to solve the classic N-Queens problem. The N-Queens problem challenges us to place N chess queens on an N×N chessboard such that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal.

## Understanding the N-Queens Problem

The core of the N-Queens problem lies in the constraints:
*   **No two queens in the same row:** This is implicitly handled by how we will place queens, one per row.
*   **No two queens in the same column:** Each queen must be in a unique column.
*   **No two queens on the same diagonal:** This is the trickiest constraint. There are two types of diagonals:
    *   Top-left to bottom-right diagonals: The difference between a queen's row and column index (`row - col`) is constant for all cells on this diagonal.
    *   Top-right to bottom-left diagonals: The sum of a queen's row and column index (`row + col`) is constant for all cells on this diagonal.

## Backtracking Approach

Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time.

For the N-Queens problem, we can think of placing queens row by row. For each row, we try to place a queen in a valid column. If we find a valid column, we move to the next row. If we cannot find a valid column in the current row, we "backtrack" to the previous row and try a different column for the queen in that row.

### Key Steps in the Backtracking Algorithm:

1.  **Base Case:** If all N queens have been successfully placed (i.e., we've filled all rows), we've found a valid solution.
2.  **Recursive Step:** For the current row:
    *   Iterate through each column.
    *   For each column, check if placing a queen there is "safe" (i.e., it doesn't conflict with any previously placed queens).
    *   If it's safe, place the queen in that column and recursively call the function for the next row.
    *   If the recursive call returns `true` (meaning a solution was found from that point onwards), then we've found our solution.
    *   If the recursive call returns `false` (meaning no solution could be found with the queen in the current position), then "unplace" the queen (backtrack) and try the next column.
3.  **Failure:** If we've tried all columns in the current row and none of them lead to a solution, return `false`.

## Java Implementation

We'll use a 2D array (or a 1D array where the index represents the row and the value represents the column) to represent the chessboard and the placement of queens.

### Data Structures

*   `board[][]`: A 2D integer array where `board[row][col] = 1` if a queen is placed, and `0` otherwise.
*   Alternatively, a 1D array `queens[N]` where `queens[row] = col` means a queen is placed at `(row, col)`. This is often more efficient.

### Helper Function: `isSafe(board, row, col, N)`

This function checks if placing a queen at `(row, col)` is valid given the queens already placed in previous rows.

```java
boolean isSafe(int board[][], int row, int col, int N) {
    // Check this row on the left side (not needed if placing row by row)
    // for (int i = 0; i < col; i++) {
    //     if (board[row][i] == 1) {
    //         return false;
    //     }
    // }

    // Check upper diagonal on left side
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    // Check lower diagonal on left side
    for (int i = row, j = col; i < N && j >= 0; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    // Check this column upwards
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 1) {
            return false;
        }
    }

    return true;
}
```
*Note: When implementing row-by-row, we only need to check columns and diagonals against queens in *previous* rows. The checks for the current row to the left and current column downwards are implicitly handled by the recursive structure.*

A more optimized `isSafe` using a 1D `queens` array:
```java
boolean isSafe(int queens[], int row, int col) {
    for (int prevRow = 0; prevRow < row; prevRow++) {
        int prevCol = queens[prevRow];
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
```

### Recursive Solver Function: `solveNQueensUtil(board, row, N)`

This is the core backtracking function.

```java
boolean solveNQueensUtil(int board[][], int row, int N) {
    // Base case: If all queens are placed, return true
    if (row >= N) {
        return true;
    }

    // Consider this row and try placing this queen in all columns one by one
    for (int col = 0; col < N; col++) {
        // Check if the queen can be placed on board[row][col]
        if (isSafe(board, row, col, N)) {
            // Place this queen in board[row][col]
            board[row][col] = 1;

            // Recur to place the rest of the queens
            if (solveNQueensUtil(board, row + 1, N)) {
                return true; // Solution found
            }

            // If placing queen in board[row][col] doesn't lead to a solution,
            // then remove queen from board[row][col] (BACKTRACK)
            board[row][col] = 0;
        }
    }

    // If the queen cannot be placed in any column in this row, return false
    return false;
}
```

### Main Function to Solve N-Queens

This function initializes the board and calls the recursive utility.

```java
void solveNQueens(int N) {
    int board[][] = new int[N][N]; // Initialize board with 0s

    if (!solveNQueensUtil(board, 0, N)) {
        System.out.println("Solution does not exist");
        return;
    }

    // Print the solution
    printSolution(board, N);
}

void printSolution(int board[][], int N) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            System.out.print(" " + board[i][j] + " ");
        }
        System.out.println();
    }
}
```

## Example Walkthrough (N=4)

Let's trace for N=4, placing queens row by row.

1.  **Row 0:**
    *   Try placing Queen at (0,0). `isSafe` returns true. Place Queen. Recurse for row 1.
2.  **Row 1:**
    *   Try (1,0). `isSafe` (checks against (0,0)) returns false (same column).
    *   Try (1,1). `isSafe` returns false (diagonal with (0,0)).
    *   Try (1,2). `isSafe` returns true. Place Queen. Recurse for row 2.
3.  **Row 2:**
    *   Try (2,0). `isSafe` (checks against (0,0), (1,2)) returns false (diagonal with (0,0)).
    *   Try (2,1). `isSafe` returns false (column with (0,0)).
    *   Try (2,2). `isSafe` returns false (column with (1,2)).
    *   Try (2,3). `isSafe` returns true. Place Queen. Recurse for row 3.
4.  **Row 3:**
    *   Try (3,0). `isSafe` returns false (column with (0,0)).
    *   Try (3,1). `isSafe` returns true. Place Queen. Recurse for row 4.
5.  **Row 4:**
    *   `row >= N` (4 >= 4). Base case reached! Return `true` all the way up.

A solution is found. The board would look something like:
```
0 1 0 0
0 0 0 1
1 0 0 0
0 0 1 0
```
(Where 1 represents a queen, and 0 an empty square). This corresponds to placing queens at (0,1), (1,3), (2,0), (3,2) if using a 0-indexed column for each row.

## Considerations and Enhancements

*   **Finding All Solutions:** To find all possible solutions, instead of returning `true` immediately when a solution is found, store the current board configuration and then *continue* the search by backtracking from the current position to explore other possibilities.
*   **Efficiency:** The presented solution has a time complexity that is roughly exponential, often denoted as $$O(N!)$$. For larger N, specialized algorithms or optimizations might be necessary. Using the 1D `queens` array for `isSafe` is generally more efficient than a 2D array.
*   **Space Complexity:** The space complexity is dominated by the recursion depth, which is $$O(N)$$, plus the space for the board itself, $$O(N^2)$$.

By implementing this backtracking approach in Java, you gain practical experience in applying a powerful algorithmic paradigm to a well-known combinatorial problem.

## Supports

- [[n-queens-problem-backtracking-java-implementation|N-Queens Problem Backtracking Java Implementation]]
