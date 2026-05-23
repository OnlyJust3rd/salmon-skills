---
type: "medium"
title: "Row Space of a Matrix"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/row-space-definition|row-space-definition]]"
learning-time-in-minutes: 4
---
# Row Space of a Matrix

In linear algebra, understanding the fundamental subspaces associated with a matrix is crucial. These subspaces provide deep insights into the behavior and properties of linear transformations. One of these essential subspaces is the **row space**.

## What is the Row Space?

The row space of a matrix is defined based on its rows.

> **Definition:** The row space of a matrix $$ A $$ is the **span** of its row vectors.

Let's break this down:

*   **Row Vectors:** If a matrix $$ A $$ has rows $$ r_1, r_2, \ldots, r_m $$, these rows can be thought of as vectors in a certain dimensional space. For an $$ m \times n $$ matrix, each row is a vector in $$ \mathbb{R}^n $$.
*   **Span:** The span of a set of vectors is the set of all possible linear combinations of those vectors. A linear combination is formed by multiplying each vector by a scalar and adding the results.

So, if $$ A $$ is an $$ m \times n $$ matrix, its row space, denoted as $$ \text{Row}(A) $$, is the set of all vectors that can be formed by taking linear combinations of the row vectors of $$ A $$.

$$
\text{Row}(A) = \{ c_1 r_1 + c_2 r_2 + \ldots + c_m r_m \mid c_1, c_2, \ldots, c_m \in \mathbb{R} \}
$$

where $$ r_i $$ are the row vectors of $$ A $$.

## How to Find the Row Space

While the definition tells us *what* the row space is, we often need to find a more concrete representation, such as a basis for the row space. A convenient way to find a basis for the row space is by using **row operations**.

When we perform elementary row operations on a matrix, we are essentially creating linear combinations of the rows. Importantly, these operations **do not change the row space** of the matrix.

### Key Principle:

The row space of a matrix is **unchanged** by elementary row operations.

This means that if we transform a matrix $$ A $$ into another matrix $$ U $$ using row operations (i.e., $$ A \sim U $$), then $$ \text{Row}(A) = \text{Row}(U) $$.

The most helpful form to obtain is the **row echelon form** or **reduced row echelon form (RREF)**.

### Example:

Let's find a basis for the row space of the following matrix:

$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
3 & 6 & 9
\end{pmatrix}
$$

**Step 1: Apply Row Operations to find the Row Echelon Form (or RREF).**

Let's use row operations:
*   $$ R_2 \leftarrow R_2 - 2R_1 $$
*   $$ R_3 \leftarrow R_3 - 3R_1 $$

$$
\begin{pmatrix}
1 & 2 & 3 \\
2 - 2(1) & 4 - 2(2) & 6 - 2(3) \\
3 - 3(1) & 6 - 3(2) & 9 - 3(3)
\end{pmatrix}
=
\begin{pmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$

This matrix is now in row echelon form. Let's call this matrix $$ U $$.

**Step 2: Identify the non-zero rows in the Row Echelon Form.**

The non-zero rows of $$ U $$ are the first row: $$ (1, 2, 3) $$.

**Step 3: The non-zero rows of the Row Echelon Form form a basis for the Row Space.**

Therefore, a basis for the row space of $$ A $$ is $$ \{ (1, 2, 3) \} $$.

This means that any vector in the row space of $$ A $$ can be written as a scalar multiple of $$ (1, 2, 3) $$.

**Important Note:** The original row vectors of $$ A $$ were $$ (1, 2, 3) $$, $$ (2, 4, 6) $$, and $$ (3, 6, 9) $$. Notice that the second and third rows are just multiples of the first row. This indicates linear dependence among the rows, which is why we ended up with a row space spanned by a single vector.

## Why is the Row Space Important?

The row space is one of the four fundamental subspaces associated with a matrix. Understanding it helps us:

*   **Determine the Rank:** The dimension of the row space is equal to the rank of the matrix. The rank tells us the maximum number of linearly independent rows (or columns).
*   **Understand Linear Independence:** It directly relates to the linear independence of the rows.
*   **Solve Systems of Linear Equations:** The row space is closely tied to the solution set of systems of linear equations of the form $$ Ax = b $$ and homogeneous systems $$ Ax = 0 $$.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/row-space-definition|Row space definition]]
