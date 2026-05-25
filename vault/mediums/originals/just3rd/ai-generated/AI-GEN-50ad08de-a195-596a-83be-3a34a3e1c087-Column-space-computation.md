---
type: "medium"
title: "Computing the Column Space of a Matrix"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/column-space-computation|column-space-computation]]"
learning-time-in-minutes: 4
---
# Computing the Column Space of a Matrix

The column space of a matrix is a fundamental concept within the study of linear algebra, directly related to understanding the range of a linear transformation and the solvability of systems of linear equations. This lesson focuses on the practical skill of computing the column space of a given matrix.

## What is the Column Space?

The column space of a matrix, denoted as $C(A)$ for a matrix $A$, is the set of all possible linear combinations of its column vectors. In other words, it's the span of the column vectors of the matrix.

Consider a matrix $A$ with columns $v_1, v_2, \dots, v_n$:
$$
A = \begin{bmatrix}
v_1 & v_2 & \dots & v_n
\end{bmatrix}
$$
The column space $C(A)$ is the set of all vectors $b$ that can be expressed as $b = c_1 v_1 + c_2 v_2 + \dots + c_n v_n$, where $c_1, c_2, \dots, c_n$ are any scalars.

Geometrically, the column space represents all possible output vectors you can get when applying the linear transformation represented by matrix $A$ to any input vector. It forms a vector subspace.

## How to Compute the Column Space

The most straightforward way to compute the column space is to identify a basis for it. A basis for the column space can be found by examining the pivot columns of the original matrix $A$.

Here's the step-by-step process:

1.  **Row Reduce the Matrix:** Perform Gaussian elimination to transform the matrix $A$ into its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). Let's call the row-reduced form $R$.
2.  **Identify Pivot Columns:** In the row-reduced matrix $R$, identify the columns that contain leading ones (pivots).
3.  **Select Corresponding Original Columns:** The columns in the *original* matrix $A$ that correspond to the pivot columns in $R$ form a basis for the column space $C(A)$.

## Example

Let's compute the column space of the following matrix:
$$
A = \begin{bmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{bmatrix}
$$

**Step 1: Row Reduce the Matrix**

We'll perform row operations to get to REF/RREF.

$$
\begin{bmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{bmatrix}
\xrightarrow{R_2 \leftarrow R_2 - 2R_1, R_3 \leftarrow R_3 - 3R_1}
\begin{bmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
This matrix is now in Row Echelon Form.

**Step 2: Identify Pivot Columns**

In the row-reduced matrix $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$, the first column contains the leading one (pivot). The second and third columns do not have pivots.

**Step 3: Select Corresponding Original Columns**

The first column of the row-reduced matrix contained a pivot. Therefore, we select the **first column** of the *original* matrix $A$.

The columns of $A$ are:
$$
v_1 = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}, \quad v_2 = \begin{bmatrix} 2 \\ 4 \\ 6 \end{bmatrix}, \quad v_3 = \begin{bmatrix} 3 \\ 6 \\ 9 \end{bmatrix}
$$
The first column of the original matrix is $v_1$.

So, a basis for the column space $C(A)$ is:
$$
\left\{ \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} \right\}
$$

This means that any vector in the column space of $A$ is a scalar multiple of $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$. For instance, $v_2 = 2v_1$ and $v_3 = 3v_1$, which are indeed linear combinations of $v_1$.

## Dimension of the Column Space (Rank)

The dimension of the column space is equal to the number of basis vectors. This number is also known as the **rank** of the matrix. In our example, the dimension of $C(A)$ is 1, and the rank of $A$ is 1.

## Common Mistakes and Tips

*   **Using columns from the row-reduced matrix:** Always select the basis vectors from the *original* matrix $A$, not from its row-reduced form $R$. The row-reduced form helps you *identify* which columns form a basis, but the basis vectors themselves are the original columns.
*   **Confusing Column Space with Row Space:** The method for finding the row space is different (it's the span of the non-zero rows of the REF/RREF).
*   **Incomplete Row Reduction:** Ensure your matrix is fully row-reduced to correctly identify the pivot positions.

By mastering this skill, you gain a clearer understanding of the output possibilities of linear transformations and the structure of solutions to systems of linear equations.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/column-space-computation|Column space computation]]
