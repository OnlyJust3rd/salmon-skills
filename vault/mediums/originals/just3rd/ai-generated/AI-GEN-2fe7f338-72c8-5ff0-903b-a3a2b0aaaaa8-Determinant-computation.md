---
type: "medium"
title: "Determinant Computation for 2x2 and 3x3 Matrices"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/determinant-computation|determinant-computation]]"
learning-time-in-minutes: 3
---
# Determinant Computation for 2x2 and 3x3 Matrices

This lesson focuses on the practical calculation of determinants for small matrices, a fundamental skill in matrix algebra. We'll cover the specific methods for 2x2 and 3x3 matrices.

## Understanding the Determinant

The determinant of a square matrix is a single scalar value that can be computed from its elements. It provides important information about the matrix, such as whether it is invertible and the scaling factor of a linear transformation represented by the matrix.

## Calculating the Determinant of a 2x2 Matrix

For a 2x2 matrix, the calculation is straightforward.

Let a 2x2 matrix be represented as:
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

The determinant of matrix A, denoted as $|A|$ or $\det(A)$, is calculated using the following formula:
$$
|A| = ad - bc
$$

### Worked Example (2x2)

Let's calculate the determinant of the matrix:
$$
B = \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}
$$

Here, $a=2$, $b=3$, $c=1$, and $d=4$.

Using the formula:
$$
|B| = (2 \times 4) - (3 \times 1)
$$
$$
|B| = 8 - 3
$$
$$
|B| = 5
$$

So, the determinant of matrix B is 5.

## Calculating the Determinant of a 3x3 Matrix

Calculating the determinant of a 3x3 matrix involves a slightly more involved process, often using cofactor expansion or a method known as Sarrus's Rule. We will focus on the cofactor expansion method, which is more generalizable to larger matrices.

Consider a 3x3 matrix:
$$
C = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}
$$

To find the determinant $|C|$, we can expand along the first row. The formula is:
$$
|C| = a \begin{vmatrix} e & f \\ h & i \end{vmatrix} - b \begin{vmatrix} d & f \\ g & i \end{vmatrix} + c \begin{vmatrix} d & e \\ g & h \end{vmatrix}
$$

Notice that the 2x2 determinants within the formula are calculated using the method described earlier. The signs ($+$ and $-$) alternate.

### Worked Example (3x3)

Let's calculate the determinant of the matrix:
$$
D = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & -1 & 2 \end{pmatrix}
$$

Using the formula for expansion along the first row:
$$
|D| = 1 \begin{vmatrix} 4 & 5 \\ -1 & 2 \end{vmatrix} - 2 \begin{vmatrix} 0 & 5 \\ 1 & 2 \end{vmatrix} + 3 \begin{vmatrix} 0 & 4 \\ 1 & -1 \end{vmatrix}
$$

Now, let's calculate each 2x2 determinant:

1.  $$ \begin{vmatrix} 4 & 5 \\ -1 & 2 \end{vmatrix} = (4 \times 2) - (5 \times -1) = 8 - (-5) = 8 + 5 = 13 $$
2.  $$ \begin{vmatrix} 0 & 5 \\ 1 & 2 \end{vmatrix} = (0 \times 2) - (5 \times 1) = 0 - 5 = -5 $$
3.  $$ \begin{vmatrix} 0 & 4 \\ 1 & -1 \end{vmatrix} = (0 \times -1) - (4 \times 1) = 0 - 4 = -4 $$

Substitute these values back into the expansion formula:
$$
|D| = 1(13) - 2(-5) + 3(-4)
$$
$$
|D| = 13 + 10 - 12
$$
$$
|D| = 23 - 12
$$
$$
|D| = 11
$$

The determinant of matrix D is 11.

## Key Takeaways

*   The determinant of a 2x2 matrix $$ \begin{pmatrix} a & b \\ c & d \end{pmatrix} $$ is $$ ad - bc $$.
*   The determinant of a 3x3 matrix can be computed by expanding along any row or column, using the formula: $$ |C| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13} $$, where $$ C_{ij} $$ are the cofactors, which involve calculating 2x2 determinants with alternating signs.

Practice these calculations to build proficiency.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/determinant-computation|Determinant computation]]
