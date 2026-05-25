---
type: "medium"
title: "Rank Determination"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/rank-determination|rank-determination]]"
learning-time-in-minutes: 4
---
# Rank Determination

The rank of a matrix is a fundamental concept when exploring the fundamental subspaces of a matrix and linear transformations. It tells us about the "dimensionality" of the output space of a linear transformation, or equivalently, the number of linearly independent rows or columns of a matrix. This is crucial for understanding the size of the row space and column space, and consequently, for determining the nullity (the dimension of the null space).

## What is Rank?

The **rank** of a matrix $$A$$, denoted as $$rank(A)$$, is defined as:

*   The dimension of the column space of $$A$$.
*   The dimension of the row space of $$A$$.
*   The maximum number of linearly independent columns of $$A$$.
*   The maximum number of linearly independent rows of $$A$$.

These definitions are equivalent. For a matrix $$A$$ of size $$m \times n$$, the rank will always satisfy $$0 \le rank(A) \le \min(m, n)$$.

## How to Compute Rank

The most practical way to determine the rank of a matrix is by using its **row echelon form** (or reduced row echelon form). The rank is then simply the number of **non-zero rows** in the echelon form.

### Steps for Rank Determination:

1.  **Transform the matrix into row echelon form (REF)** using elementary row operations (swapping rows, multiplying a row by a non-zero scalar, adding a multiple of one row to another).
2.  **Count the number of non-zero rows** in the resulting row echelon form. This count is the rank of the original matrix.

### Example:

Let's find the rank of the following matrix $$A$$:

$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

**Step 1: Transform to Row Echelon Form**

We'll use elementary row operations:

*   Replace $R_2$ with $R_2 - 2R_1$:
    $$
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
    0 & 0 & 0
    \end{pmatrix}
    $$

This matrix is now in row echelon form.

**Step 2: Count Non-Zero Rows**

There is only **one** non-zero row in the row echelon form of $$A$$.

Therefore, $$rank(A) = 1$$.

**Interpretation:** This means that the row space and column space of $$A$$ are both one-dimensional. The rows of $$A$$ are all multiples of the first row, and similarly, the columns are all multiples of the first column.

### Another Example:

Find the rank of matrix $$B$$:

$$
B = \begin{pmatrix}
1 & 0 & 2 & 1 \\
2 & 1 & 5 & 1 \\
-1 & -1 & -4 & -1
\end{pmatrix}
$$

**Step 1: Transform to Row Echelon Form**

*   Replace $R_2$ with $R_2 - 2R_1$:
    $$
    \begin{pmatrix}
    1 & 0 & 2 & 1 \\
    0 & 1 & 1 & -1 \\
    -1 & -1 & -4 & -1
    \end{pmatrix}
    $$
*   Replace $R_3$ with $R_3 + R_1$:
    $$
    \begin{pmatrix}
    1 & 0 & 2 & 1 \\
    0 & 1 & 1 & -1 \\
    0 & -1 & -2 & 0
    \end{pmatrix}
    $$
*   Replace $R_3$ with $R_3 + R_2$:
    $$
    \begin{pmatrix}
    1 & 0 & 2 & 1 \\
    0 & 1 & 1 & -1 \\
    0 & 0 & -1 & -1
    \end{pmatrix}
    $$

This matrix is in row echelon form.

**Step 2: Count Non-Zero Rows**

There are **three** non-zero rows in the row echelon form of $$B$$.

Therefore, $$rank(B) = 3$$.

## Rank and Linear Transformations

When we consider a linear transformation $$T: V \to W$$ represented by a matrix $$A$$, the rank of $$A$$ corresponds to the dimension of the **range** (or image) of $$T$$. The range is the set of all possible output vectors.

$$
rank(T) = dim(Range(T)) = rank(A)
$$

This means that the range of the transformation is spanned by a number of linearly independent vectors equal to the rank of the matrix.

## Important Properties

*   **For a square matrix $$A$$ of size $$n \times n$$, $$rank(A) = n$$ if and only if $$A$$ is invertible.** This means all columns (and rows) are linearly independent.
*   **The rank is invariant under elementary row operations.** This is why we use REF/RREF to find it.
*   **$$rank(A^T) = rank(A)$$**. The rank of the transpose is the same as the rank of the original matrix.

Understanding rank is a critical first step in analyzing the fundamental subspaces, as it directly informs us about the dimensions of the row space and column space, and through the rank-nullity theorem, the dimension of the null space.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/rank-determination|Rank determination]]
