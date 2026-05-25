---
type: "medium"
title: "Determinant-based Solving for Linear Systems"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/determinant-based-solving|determinant-based-solving]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/matrix-algebra|matrix-algebra]]"
learning-time-in-minutes: 4
---
# Determinant-based Solving for Linear Systems

This lesson focuses on using determinants to find the unique solution of systems of linear equations, a core concept within Matrix Algebra. We'll explore Cramer's Rule, a method that leverages determinants to solve these systems efficiently.

## When to Use Determinant-based Solving

Determinant-based solving, specifically Cramer's Rule, is best applied when you have a system of linear equations with the same number of equations as variables, and you know (or suspect) that there is a unique solution. This method is particularly useful for smaller systems (2x2 or 3x3) because calculating determinants for larger matrices can become computationally intensive.

## The Concept of Determinants

Before diving into Cramer's Rule, let's quickly recap what a determinant is for a square matrix. The determinant is a scalar value that can be calculated from the elements of a square matrix. It provides crucial information about the matrix, including whether the system of equations it represents has a unique solution.

For a 2x2 matrix:
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$
The determinant, denoted as $|A|$ or $\det(A)$, is calculated as:
$$
|A| = ad - bc
$$

For a 3x3 matrix:
$$
A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}
$$
The determinant can be calculated using cofactor expansion. A common method is expansion along the first row:
$$
|A| = a \begin{vmatrix} e & f \\ h & i \end{vmatrix} - b \begin{vmatrix} d & f \\ g & i \end{vmatrix} + c \begin{vmatrix} d & e \\ g & h \end{vmatrix}
$$
$$
|A| = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

A non-zero determinant indicates that the system has a unique solution. If the determinant is zero, the system either has no solution or infinitely many solutions.

## Cramer's Rule: The Step-by-Step Approach

Cramer's Rule provides a direct formula for finding the solution of a system of linear equations using determinants. Consider a system of $n$ linear equations with $n$ variables:

$$
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\vdots \\
a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n
$$

We can represent this system in matrix form as $AX = B$, where:
$$
A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} \end{pmatrix}, \quad X = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}, \quad B = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}
$$

To apply Cramer's Rule:

1.  **Calculate the determinant of the coefficient matrix, $D$**: This is the determinant of matrix $A$.
    $$ D = |A| $$
    If $D = 0$, Cramer's Rule cannot be applied to find a unique solution.

2.  **For each variable $x_i$, create a new matrix $A_i$**: Replace the $i$-th column of matrix $A$ with the column vector $B$.

3.  **Calculate the determinant of each $A_i$, denoted as $D_i$**:
    $$ D_i = |A_i| $$

4.  **Solve for each variable**: The unique solution for each variable $x_i$ is given by:
    $$ x_i = \frac{D_i}{D} $$

## Worked Example: A 2x2 System

Let's solve the following system using Cramer's Rule:

$$
2x + 3y = 7 \\
x - y = 1
$$

Here, $A = \begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix}$, $X = \begin{pmatrix} x \\ y \end{pmatrix}$, and $B = \begin{pmatrix} 7 \\ 1 \end{pmatrix}$.

1.  **Calculate $D$**:
    $$ D = \begin{vmatrix} 2 & 3 \\ 1 & -1 \end{vmatrix} = (2)(-1) - (3)(1) = -2 - 3 = -5 $$
    Since $D \neq 0$, a unique solution exists.

2.  **Create $A_x$ and calculate $D_x$**: Replace the first column (coefficients of $x$) with $B$.
    $$ A_x = \begin{pmatrix} 7 & 3 \\ 1 & -1 \end{pmatrix} $$
    $$ D_x = \begin{vmatrix} 7 & 3 \\ 1 & -1 \end{vmatrix} = (7)(-1) - (3)(1) = -7 - 3 = -10 $$

3.  **Create $A_y$ and calculate $D_y$**: Replace the second column (coefficients of $y$) with $B$.
    $$ A_y = \begin{pmatrix} 2 & 7 \\ 1 & 1 \end{pmatrix} $$
    $$ D_y = \begin{vmatrix} 2 & 7 \\ 1 & 1 \end{vmatrix} = (2)(1) - (7)(1) = 2 - 7 = -5 $$

4.  **Solve for $x$ and $y$**:
    $$ x = \frac{D_x}{D} = \frac{-10}{-5} = 2 $$
    $$ y = \frac{D_y}{D} = \frac{-5}{-5} = 1 $$

The solution is $x=2$ and $y=1$.

## Common Mistakes to Avoid

*   **Incorrectly calculating determinants**: Double-check your arithmetic when computing $ad - bc$ or using cofactor expansion. A single sign error can lead to a completely wrong solution.
*   **Confusing columns when creating $A_i$**: Ensure you are replacing the correct column corresponding to the variable you are solving for.
*   **Forgetting to check if $D=0$**: Cramer's Rule only works for systems with a unique solution. If $D=0$, the method is not applicable for finding a single solution.
*   **Mixing up $D$ and $D_i$**: Ensure you use the determinant of the original coefficient matrix ($D$) as the denominator for all variables.

By understanding and applying Cramer's Rule, you gain a powerful tool for solving systems of linear equations that have a unique solution, directly leveraging the concept of determinants.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/determinant-based-solving|Determinant-based solving]]
