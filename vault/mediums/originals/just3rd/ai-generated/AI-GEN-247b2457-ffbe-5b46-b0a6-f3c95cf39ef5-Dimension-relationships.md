---
type: "medium"
title: "Dimension Relationships in Subspaces"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/dimension-relationships|dimension-relationships]]"
learning-time-in-minutes: 4
---
# Dimension Relationships in Subspaces

This lesson explores how the dimensions of fundamental subspaces of a matrix are interconnected. Understanding these relationships is key to grasping the structure of linear transformations.

## The Core Idea: Rank and Nullity

For any given matrix $$A$$, its fundamental subspaces (row space, column space, kernel, and range) are not independent in terms of their sizes. Their dimensions are intimately linked through two fundamental concepts:

*   **Rank:** The dimension of the column space (and also the row space) of a matrix. It tells us the maximum number of linearly independent columns (or rows).
*   **Nullity:** The dimension of the kernel (or null space) of a matrix. It tells us the number of "free variables" in the system of linear equations $$Ax = 0$$.

## The Rank-Nullity Theorem

This is the central theorem that connects the dimensions of these subspaces. For an $$m \times n$$ matrix $$A$$, the Rank-Nullity Theorem states:

$$
\text{rank}(A) + \text{nullity}(A) = n
$$

Where:
*   $$n$$ is the number of columns in the matrix $$A$$.

In simpler terms, the dimension of the column space plus the dimension of the kernel equals the total number of columns in the matrix.

### Geometric Interpretation

Imagine the matrix $$A$$ as a function that takes vectors from an $$n$$-dimensional input space to an $$m$$-dimensional output space.

*   The **column space** is the subspace of the output space that the matrix can reach. Its dimension, the **rank**, tells us how "spread out" the output is.
*   The **kernel** is the set of all input vectors that get mapped to the zero vector in the output space. Its dimension, the **nullity**, tells us how many input dimensions are "squashed" or collapsed into the zero vector.

The Rank-Nullity Theorem says that the total "input capacity" (number of columns, $$n$$) is distributed between what the matrix *can* do (span the column space) and what it *cancels out* (map to zero via the kernel).

## Key Relationships Summarized

Let $$A$$ be an $$m \times n$$ matrix:

| Subspace      | Description                                                                | Dimension        | Relationship to Rank/Nullity                                |
| :------------ | :------------------------------------------------------------------------- | :--------------- | :---------------------------------------------------------- |
| Column Space  | The span of the columns of $$A$$.                                          | $$ \text{rank}(A) $$ | Equal to the rank.                                          |
| Row Space     | The span of the rows of $$A$$.                                             | $$ \text{rank}(A) $$ | Equal to the rank (always same dimension as column space). |
| Kernel (Null Space) | The set of all vectors $$x$$ such that $$Ax = 0$$.                       | $$ \text{nullity}(A) $$ | Related by the Rank-Nullity Theorem: $$ \text{rank}(A) + \text{nullity}(A) = n $$. |
| Range (Image) | The set of all possible output vectors $$Ax$$. This is the same as the column space. | $$ \text{rank}(A) $$ | Equal to the rank.                                          |

## Example

Consider the matrix:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6
\end{pmatrix}
$$

This is a $$2 \times 3$$ matrix, so $$m=2$$ and $$n=3$$.

1.  **Find the Row Space and its Dimension (Rank):**
    The rows are $$[1, 2, 3]$$ and $$[2, 4, 6]$$. The second row is just 2 times the first row. So, the row space is spanned by $$[1, 2, 3]$$.
    The dimension of the row space is 1. Thus, $$ \text{rank}(A) = 1 $$.

2.  **Find the Column Space and its Dimension (Rank):**
    The columns are $$ \begin{pmatrix} 1 \\ 2 \end{pmatrix} $$, $$ \begin{pmatrix} 2 \\ 4 \end{pmatrix} $$, and $$ \begin{pmatrix} 3 \\ 6 \end{pmatrix} $$. Notice that the second column is 2 times the first, and the third is 3 times the first. The column space is spanned by $$ \begin{pmatrix} 1 \\ 2 \end{pmatrix} $$.
    The dimension of the column space is 1. This confirms $$ \text{rank}(A) = 1 $$.

3.  **Find the Kernel (Null Space) and its Dimension (Nullity):**
    We need to solve $$Ax = 0$$:
    $$
    \begin{pmatrix}
    1 & 2 & 3 \\
    2 & 4 & 6
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\
    x_2 \\
    x_3
    \end{pmatrix}
    =
    \begin{pmatrix}
    0 \\
    0
    \end{pmatrix}
    $$
    This reduces to the single equation $$x_1 + 2x_2 + 3x_3 = 0$$.
    We can express $$x_1$$ in terms of $$x_2$$ and $$x_3$$: $$x_1 = -2x_2 - 3x_3$$.
    The solution vectors $$x$$ can be written as:
    $$
    x = \begin{pmatrix}
    -2x_2 - 3x_3 \\
    x_2 \\
    x_3
    \end{pmatrix}
    = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}
    $$
    The kernel is spanned by the vectors $$ \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} $$ and $$ \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix} $$. These vectors are linearly independent.
    The dimension of the kernel (nullity) is 2. So, $$ \text{nullity}(A) = 2 $$.

4.  **Check the Rank-Nullity Theorem:**
    $$ \text{rank}(A) + \text{nullity}(A) = 1 + 2 = 3 $$
    The number of columns in $$A$$ is 3. The theorem holds: $$3 = 3$$.

## Common Pitfalls

*   **Confusing dimensions:** Always remember that the rank is the dimension of *both* the row space and the column space. The nullity is specifically the dimension of the kernel.
*   **Forgetting the number of columns:** The Rank-Nullity Theorem relates rank and nullity to the total number of columns ($$n$$), not the number of rows ($$m$$).
*   **Incorrectly calculating basis vectors:** Errors in finding the reduced row-echelon form or solving $$Ax=0$$ will lead to incorrect dimensions.

Understanding these dimension relationships provides a powerful framework for analyzing matrices and linear transformations. It tells you how much "information" is preserved and how much is lost or collapsed during the transformation.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/dimension-relationships|Dimension relationships]]
