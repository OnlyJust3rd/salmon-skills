---
type: "medium"
title: "The Column Space of a Matrix"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/column-space-definition|column-space-definition]]"
learning-time-in-minutes: 4
---
# The Column Space of a Matrix

Welcome to this learning module! We're focusing on understanding the fundamental subspaces associated with matrices. This lesson will specifically help you **recall the definition of the column space of a matrix**.

## What is the Column Space?

The column space of a matrix is a fundamental concept in linear algebra. It tells us about the "reach" or the set of all possible outputs when you multiply that matrix by a vector.

### Definition

Let $A$ be an $m \times n$ matrix. The **column space** of $A$, denoted as $Col(A)$ or $C(A)$, is the set of all possible linear combinations of the column vectors of $A$.

In simpler terms, if you take each column of matrix $A$ and consider all the ways you can add scalar multiples of these columns together, the set of all results you can obtain is the column space.

Mathematically, if the columns of $A$ are $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n$, then the column space is:

$$
Col(A) = \{ c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_n\mathbf{v}_n \mid c_1, c_2, \dots, c_n \in \mathbb{R} \}
$$

This is equivalent to the set of all vectors $\mathbf{b}$ for which the equation $A\mathbf{x} = \mathbf{b}$ has a solution. The vector $\mathbf{x}$ contains the coefficients $c_1, c_2, \dots, c_n$.

### Key Idea: Span

The column space is essentially the **span** of the column vectors of the matrix. The span of a set of vectors is the set of all possible linear combinations of those vectors.

## How to Find the Column Space

While the definition tells us what the column space *is*, it doesn't immediately give us a concise way to describe it. Often, we want to find a basis for the column space.

A basis for the column space of a matrix $A$ consists of the **pivot columns** of $A$ (when $A$ is reduced to row echelon form). The pivot columns are the columns in the *original* matrix $A$ that correspond to the pivot columns in its row echelon form.

### Example

Let's consider the matrix:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

**Step 1: Find the row echelon form of A.**
We can perform row operations to get the matrix into row echelon form.
$$
\begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
\xrightarrow{R_2 \leftarrow R_2 - 2R_1, R_3 \leftarrow R_3 - 3R_1}
\begin{pmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$
This is the row echelon form.

**Step 2: Identify the pivot columns in the row echelon form.**
The first column has a leading entry (a pivot). The second and third columns do not have leading entries in their respective rows. So, the pivot column is the first column.

**Step 3: Identify the corresponding columns in the *original* matrix A.**
The first column of the original matrix $A$ is $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$.

Therefore, a basis for the column space of $A$ is:
$$
Col(A) = \text{span}\left\{ \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \right\}
$$

This means that any vector in the column space of $A$ must be a scalar multiple of $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$. For instance, $\begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}$ is in $Col(A)$ because it's $2 \times \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$.

## Why is the Column Space Important?

Understanding the column space is crucial for:

*   **Solving Systems of Linear Equations:** A system $A\mathbf{x} = \mathbf{b}$ has a solution if and only if $\mathbf{b}$ is in the column space of $A$.
*   **Understanding Linear Transformations:** The column space represents the range of the linear transformation defined by the matrix.
*   **Basis and Dimension:** The column space is a vector subspace, and its basis gives us the dimension of the column space (which is the rank of the matrix).

## Summary

The column space of a matrix $A$ is the set of all possible linear combinations of its column vectors. It is the span of these column vectors and represents all possible outputs of the linear transformation $A\mathbf{x}$. The pivot columns of the original matrix $A$ form a basis for its column space.

Remember, the column space tells you which vectors $\mathbf{b}$ can be formed by multiplying $A$ by some vector $\mathbf{x}$.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/column-space-definition|Column space definition]]
