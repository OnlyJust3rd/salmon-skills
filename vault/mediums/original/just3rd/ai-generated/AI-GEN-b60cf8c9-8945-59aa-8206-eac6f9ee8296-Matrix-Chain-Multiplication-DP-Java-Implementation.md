---
type: medium
title: Matrix Chain Multiplication DP in Java
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[matrix-chain-multiplication-dp-java-implementation|matrix-chain-multiplication-dp-java-implementation]]"
learning-time-in-minutes: 4
---
# Matrix Chain Multiplication DP in Java

This lesson focuses on implementing the Matrix Chain Multiplication problem using dynamic programming in Java. Understanding this problem and its DP solution helps in applying dynamic programming techniques to optimization problems.

## Problem Definition

Given a sequence of matrices, we want to find the most efficient way to multiply these matrices. The problem is not to actually perform the multiplications, but merely to decide the order of the multiplications.

For example, if we have matrices A (10x30), B (30x5), and C (5x60), we can multiply them in two ways:
1. (AB)C:
   - A x B takes $10 \times 30 \times 5 = 1500$ scalar multiplications. The resulting matrix is 10x5.
   - (AB) x C takes $10 \times 5 \times 60 = 3000$ scalar multiplications.
   - Total: $1500 + 3000 = 4500$ scalar multiplications.

2. A(BC):
   - B x C takes $30 \times 5 \times 60 = 9000$ scalar multiplications. The resulting matrix is 30x60.
   - A x (BC) takes $10 \times 30 \times 60 = 18000$ scalar multiplications.
   - Total: $9000 + 18000 = 27000$ scalar multiplications.

Clearly, the first order is more efficient. The goal of Matrix Chain Multiplication is to find the minimum number of scalar multiplications needed to compute the product of a chain of matrices.

## Dynamic Programming Approach

The key to solving this problem with dynamic programming is to break it down into smaller, overlapping subproblems.

Let the dimensions of the matrices be given by an array `p`, where matrix `i` (denoted $A_i$) has dimensions `p[i-1] x p[i]`. If we have `n` matrices, the `p` array will have `n+1` elements.

We want to find the minimum number of scalar multiplications needed to compute the product $A_i A_{i+1} \dots A_j$. Let's denote this minimum cost by `m[i][j]`.

### Recurrence Relation

The base case is when `i == j`. In this case, we have only one matrix, and no multiplication is needed, so `m[i][i] = 0`.

For `i < j`, we need to find a split point `k` ($i \le k < j$) such that we multiply $(A_i \dots A_k)$ and $(A_{k+1} \dots A_j)$ and then multiply the results. The cost for a specific split point `k` is:

`cost(k) = m[i][k] + m[k+1][j] + p[i-1] * p[k] * p[j]`

Here:
*   `m[i][k]` is the minimum cost to multiply matrices $A_i$ through $A_k$.
*   `m[k+1][j]` is the minimum cost to multiply matrices $A_{k+1}$ through $A_j$.
*   `p[i-1] * p[k] * p[j]` is the cost of multiplying the resulting matrix from $(A_i \dots A_k)$ (which has dimensions $p[i-1] \times p[k]$) with the resulting matrix from $(A_{k+1} \dots A_j)$ (which has dimensions $p[k] \times p[j]$).

The minimum cost `m[i][j]` is the minimum of `cost(k)` over all possible split points `k`:

$$ m[i][j] = \min_{i \le k < j} \{ m[i][k] + m[k+1][j] + p[i-1] \cdot p[k] \cdot p[j] \} $$

We need to compute this for increasing lengths of matrix chains.

## Java Implementation

Let's implement this using a 2D array to store the `m[i][j]` values. We also often use another 2D array, say `s[i][j]`, to store the split point `k` that achieved the minimum cost for `m[i][j]`. This `s` array is useful for reconstructing the optimal parenthesization.

Here's a Java code snippet:

```java
public class MatrixChainMultiplication {

    public static void matrixChainOrder(int[] p) {
        // p[] stores dimensions of matrices. p[i-1] x p[i] is dimensions of matrix Ai.
        // Number of matrices is n. So p will have n+1 elements.
        int n = p.length - 1;

        // m[i][j] will store the minimum number of scalar multiplications
        // needed to compute the matrix A[i]A[i+1]...A[j].
        int[][] m = new int[n + 1][n + 1];

        // s[i][j] will store the split point k that achieved the minimum cost for m[i][j].
        int[][] s = new int[n + 1][n + 1];

        // Cost is 0 when multiplying one matrix
        for (int i = 1; i <= n; i++) {
            m[i][i] = 0;
        }

        // L is chain length. L varies from 2 to n.
        for (int L = 2; L <= n; L++) {
            // i is the starting matrix index.
            // For a chain of length L, i can go from 1 to n - L + 1.
            for (int i = 1; i <= n - L + 1; i++) {
                // j is the ending matrix index for the current chain.
                int j = i + L - 1;
                m[i][j] = Integer.MAX_VALUE; // Initialize with a very large value

                // k is the split point: i <= k < j
                for (int k = i; k < j; k++) {
                    // q = cost/scalar multiplications
                    int q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                    if (q < m[i][j]) {
                        m[i][j] = q;
                        s[i][j] = k; // Store the split point
                    }
                }
            }
        }

        System.out.println("Minimum number of scalar multiplications is: " + m[1][n]);
        System.out.println("Optimal Parenthesization:");
        printOptimalParens(s, 1, n);
        System.out.println();
    }

    // Helper function to print the optimal parenthesization
    public static void printOptimalParens(int[][] s, int i, int j) {
        if (i == j) {
            System.out.print("A" + i);
        } else {
            System.out.print("(");
            printOptimalParens(s, i, s[i][j]);
            printOptimalParens(s, s[i][j] + 1, j);
            System.out.print(")");
        }
    }

    public static void main(String[] args) {
        // Example: Dimensions of matrices
        // A1: 10x30, A2: 30x5, A3: 5x60
        // p = {10, 30, 5, 60}
        int[] p = {10, 30, 5, 60};
        matrixChainOrder(p);

        // Another example:
        // A1: 40x20, A2: 20x30, A3: 30x10, A4: 10x30
        // p = {40, 20, 30, 10, 30}
        int[] p2 = {40, 20, 30, 10, 30};
        matrixChainOrder(p2);
    }
}
```

### How it Works

1.  **Initialization**:
    *   `m[i][i]` is set to `0` because multiplying a single matrix requires no operations.
    *   `m[i][j]` for `i < j` is initialized to a very large value (`Integer.MAX_VALUE`) to ensure the first calculated cost becomes the minimum.

2.  **Outer Loops (Chain Length `L`)**:
    *   The outer loop iterates through the `L` (length of the subchain of matrices). It starts from `L=2` (multiplying two matrices) up to `n` (multiplying all matrices).

3.  **Inner Loops (Start Index `i`)**:
    *   For a fixed chain length `L`, the next loop iterates through all possible starting indices `i` for that chain.
    *   The ending index `j` is calculated as `i + L - 1`.

4.  **Innermost Loop (Split Point `k`)**:
    *   For each subproblem `m[i][j]`, this loop tries every possible split point `k` from `i` to `j-1`.
    *   It calculates the cost `q` for that split using the recurrence relation and updates `m[i][j]` if a lower cost is found. The corresponding split point `k` is stored in `s[i][j]`.

5.  **Result**:
    *   After the loops complete, `m[1][n]` holds the minimum number of scalar multiplications for the entire chain.
    *   The `printOptimalParens` function uses the `s` array to reconstruct and print the order of multiplications.

## Complexity

*   **Time Complexity**: The three nested loops give us a time complexity of $O(n^3)$, where `n` is the number of matrices.
*   **Space Complexity**: We use two 2D arrays of size $(n+1) \times (n+1)$, so the space complexity is $O(n^2)$.

## When to Use

This dynamic programming approach is highly effective for optimizing the order of matrix multiplications when dealing with a sequence of matrices. It's a classic example of how DP can solve optimization problems by breaking them down and storing intermediate results.

## Supports

- [[matrix-chain-multiplication-dp-java-implementation|Matrix Chain Multiplication DP Java Implementation]]
