---
type: "medium"
title: "Compute the Inverse of a 2x2 Matrix Using the Formula"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/2x2-matrix-inverse-formula|2x2-matrix-inverse-formula]]"
learning-time-in-minutes: 4
---
# Compute the Inverse of a 2x2 Matrix Using the Formula

This lesson focuses on a specific tool within Matrix Algebra: the formula for calculating the inverse of a 2x2 matrix. This is a fundamental step in understanding how to solve systems of linear equations and in various transformations. We will apply this formula to find the inverse.

## When to Use the 2x2 Formula

The formula for the inverse of a 2x2 matrix is incredibly efficient, but it's **only applicable to 2x2 matrices**. For larger matrices, you'll need other methods like Gaussian elimination.

You'll use this formula when you need to:

*   Solve a system of two linear equations with two variables represented in matrix form.
*   Perform transformations that involve reversing a 2D geometric operation.
*   Understand the foundational concepts of matrix invertibility.

## The Formula

Let's consider a general 2x2 matrix:

$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

The inverse of matrix $A$, denoted as $A^{-1}$, is given by the formula:

$$
A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

### Key Components of the Formula:

1.  **The Determinant ($ad - bc$):** This is a single scalar value calculated from the elements of the matrix. It's crucial because if the determinant is zero, the matrix *does not have an inverse*. This is why we call matrices with non-zero determinants "invertible" or "non-singular".
2.  **The Adjugate Matrix ($\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$):** This is formed by:
    *   Swapping the elements on the main diagonal ( 'a' and 'd' ).
    *   Negating the elements on the off-diagonal ( 'b' and 'c' ).
3.  **Scalar Multiplication:** The adjugate matrix is then multiplied by the reciprocal of the determinant ($\frac{1}{ad - bc}$).

## Worked Example

Let's find the inverse of the following matrix:

$$
B = \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}
$$

**Step 1: Identify the elements $a, b, c, d$.**

In matrix $B$:
*   $a = 3$
*   $b = 1$
*   $c = 4$
*   $d = 2$

**Step 2: Calculate the determinant ($ad - bc$).**

Determinant of $B = (3 \times 2) - (1 \times 4)$
Determinant of $B = 6 - 4$
Determinant of $B = 2$

Since the determinant (2) is not zero, matrix $B$ is invertible.

**Step 3: Construct the adjugate matrix.**

Swap 'a' and 'd', and negate 'b' and 'c':
Adjugate of $B = \begin{pmatrix} 2 & -1 \\ -4 & 3 \end{pmatrix}$

**Step 4: Multiply the adjugate matrix by $\frac{1}{\text{determinant}}$.**

$$
B^{-1} = \frac{1}{2} \begin{pmatrix} 2 & -1 \\ -4 & 3 \end{pmatrix}
$$

Now, multiply each element of the adjugate matrix by $\frac{1}{2}$:

$$
B^{-1} = \begin{pmatrix} \frac{1}{2} \times 2 & \frac{1}{2} \times (-1) \\ \frac{1}{2} \times (-4) & \frac{1}{2} \times 3 \end{pmatrix}
$$

$$
B^{-1} = \begin{pmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{pmatrix}
$$

So, the inverse of matrix $B$ is:

$$
B^{-1} = \begin{pmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{pmatrix}
$$

## Verification (Optional but Recommended)

To check if your inverse calculation is correct, multiply the original matrix by its computed inverse. The result should be the identity matrix ($I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$).

Let's verify for matrix $B$:

$B \times B^{-1} = \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix} \begin{pmatrix} 1 & -\frac{1}{2} \\ -2 & \frac{3}{2} \end{pmatrix}$

Matrix multiplication:
*   Top-left element: $(3 \times 1) + (1 \times -2) = 3 - 2 = 1$
*   Top-right element: $(3 \times -\frac{1}{2}) + (1 \times \frac{3}{2}) = -\frac{3}{2} + \frac{3}{2} = 0$
*   Bottom-left element: $(4 \times 1) + (2 \times -2) = 4 - 4 = 0$
*   Bottom-right element: $(4 \times -\frac{1}{2}) + (2 \times \frac{3}{2}) = -2 + 3 = 1$

The result is:
$$
\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$
This is the identity matrix, confirming that our calculation for $B^{-1}$ is correct.

## Common Mistakes

*   **Forgetting to check the determinant:** If $ad - bc = 0$, the matrix has no inverse, and attempting to use the formula will lead to division by zero.
*   **Incorrectly forming the adjugate matrix:** Swapping or negating the wrong elements. Always remember to swap the main diagonal ($a, d$) and negate the off-diagonal ($b, c$).
*   **Errors in scalar multiplication:** Forgetting to multiply *all* elements of the adjugate matrix by the reciprocal of the determinant.

## Practice Problem

Find the inverse of the matrix:

$$
C = \begin{pmatrix} 5 & 2 \\ 3 & 1 \end{pmatrix}
$$

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/2x2-matrix-inverse-formula|2x2 matrix inverse formula]]
