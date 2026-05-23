---
type: "medium"
title: "Computing the Row Space of a Matrix"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/row-space-computation|row-space-computation]]"
learning-time-in-minutes: 4
---
# Computing the Row Space of a Matrix

This lesson focuses on a fundamental aspect of understanding matrices: the row space. Knowing how to compute the row space is a key step in fully grasping the fundamental subspaces of a matrix and their dimensions, as outlined in the skill outcome "Compute Fundamental Subspaces and Dimensions."

## What is the Row Space?

The row space of a matrix is the vector space spanned by its row vectors. In simpler terms, it's the set of all possible linear combinations of the rows of the matrix. These linear combinations form a subspace of the vector space in which the row vectors reside.

For a matrix $A$ with dimensions $m \times n$, its row vectors are in $\mathbb{R}^n$. Therefore, the row space of $A$, denoted as $Row(A)$, is a subspace of $\mathbb{R}^n$.

## How to Compute the Row Space

The most straightforward way to find the row space is by using Gaussian elimination to transform the matrix into its row echelon form (REF) or reduced row echelon form (RREF). The non-zero rows of the resulting echelon form matrix form a basis for the row space of the original matrix.

**Why does this work?**
Row operations (swapping rows, multiplying a row by a non-zero scalar, adding a multiple of one row to another) do not change the span of the row vectors. This means that the row space of the original matrix is the same as the row space of its row echelon form. The non-zero rows in REF/RREF are linearly independent and span the same space, thus forming a basis.

## Step-by-Step Calculation

1.  **Start with your matrix.** Let's call it $A$.
2.  **Perform Gaussian elimination** to transform $A$ into its row echelon form (REF) or reduced row echelon form (RREF).
3.  **Identify the non-zero rows** in the resulting echelon form matrix.
4.  **The set of these non-zero rows forms a basis** for the row space of the original matrix $A$.

## Worked Example

Let's compute the row space of the following matrix:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

**Step 1: Start with the matrix**
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

**Step 2: Perform Gaussian elimination**
We want to get zeros below the leading 1 in the first column.

*   Replace $R_2$ with $R_2 - 2R_1$:
    $$
    \begin{pmatrix}
    1 & 2 & 3 \\
    2 - 2(1) & 4 - 2(2) & 6 - 2(3) \\
    3 & 6 & 9
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 2 & 3 \\
    0 & 0 & 0 \\
    3 & 6 & 9
    \end{pmatrix}
    $$

*   Replace $R_3$ with $R_3 - 3R_1$:
    $$
    \begin{pmatrix}
    1 & 2 & 3 \\
    0 & 0 & 0 \\
    3 - 3(1) & 6 - 3(2) & 9 - 3(3)
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 2 & 3 \\
    0 & 0 & 0 \\
    0 & 0 & 0
    \end{pmatrix}
    $$

The matrix is now in row echelon form. (It's also in RREF in this simple case).

**Step 3: Identify the non-zero rows**
The non-zero row is the first row: $(1, 2, 3)$.

**Step 4: The basis for the row space**
The row space of $A$, $Row(A)$, is spanned by the vector $(1, 2, 3)$.

So, a basis for the row space of $A$ is $\{ (1, 2, 3) \}$.

This means that any linear combination of the original rows of $A$ will be a scalar multiple of $(1, 2, 3)$. For instance, the second row $(2, 4, 6)$ is $2 \times (1, 2, 3)$, and the third row $(3, 6, 9)$ is $3 \times (1, 2, 3)$.

## Dimension of the Row Space (Rank)

The dimension of the row space is equal to the number of non-zero rows in the row echelon form of the matrix. This dimension is also known as the **rank** of the matrix.

In our example, there is only one non-zero row in the REF. Therefore, the dimension of the row space of $A$ is 1, and the rank of $A$ is 1.

## Common Pitfalls

*   **Forgetting to use the original rows:** While row operations preserve the row space, the basis for the row space is typically presented using the non-zero rows of the *echelon form*, not by trying to find linearly independent combinations of the original rows directly without row reduction.
*   **Confusing row space with column space:** The process for finding the column space is different (it involves finding the pivot columns of the original matrix after row reduction).

Understanding the row space is a crucial stepping stone to computing other fundamental subspaces and fully characterizing a linear transformation or matrix.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/row-space-computation|Row space computation]]
