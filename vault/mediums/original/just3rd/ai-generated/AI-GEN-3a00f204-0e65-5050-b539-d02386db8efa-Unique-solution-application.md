---
type: "medium"
title: "Applying Cramer's Rule to Systems with a Unique Solution"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/unique-solution-application|unique-solution-application]]"
learning-time-in-minutes: 5
---
# Applying Cramer's Rule to Systems with a Unique Solution

This lesson focuses on using Cramer's Rule to solve systems of linear equations where a single, unique solution exists. This method relies on determinants and provides a systematic way to find the values of the variables.

## When to Use Cramer's Rule

Cramer's Rule is most effective for solving systems of linear equations that meet these criteria:

*   **Square System:** The number of equations must equal the number of variables. For example, two equations with two variables, or three equations with three variables.
*   **Unique Solution:** The system must have exactly one solution. This is typically indicated when the determinant of the coefficient matrix is non-zero.

## The Core Idea: Determinants

Cramer's Rule uses determinants to find the values of each variable. A determinant is a scalar value that can be calculated from a square matrix. For a $2 \times 2$ matrix:

$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

The determinant, denoted as $|A|$ or $\det(A)$, is calculated as:

$$
|A| = ad - bc
$$

For a $3 \times 3$ matrix:

$$
A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}
$$

The determinant is calculated using cofactor expansion. A common method is expansion along the first row:

$$
|A| = a \begin{vmatrix} e & f \\ h & i \end{vmatrix} - b \begin{vmatrix} d & f \\ g & i \end{vmatrix} + c \begin{vmatrix} d & e \\ g & h \end{vmatrix}
$$

This simplifies to:

$$
|A| = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

## Cramer's Rule Formula

For a system of $n$ linear equations in $n$ variables:

$$
\begin{align*} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\ &\vdots \\ a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n &= b_n \end{align*}
$$

Let $A$ be the coefficient matrix:

$$
A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} \end{pmatrix}
$$

Let $D$ be the determinant of the coefficient matrix, i.e., $D = \det(A)$.

If $D \neq 0$, then the system has a unique solution. To find the value of each variable $x_i$, we replace the $i$-th column of matrix $A$ with the column of constants $B = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}$ to form a new matrix $A_i$.

The solution for each variable is then given by:

$$
x_i = \frac{\det(A_i)}{D}
$$

## Worked Example: A 2x2 System

Let's solve the following system of equations using Cramer's Rule:

$$
\begin{align*} 2x + 3y &= 7 \\ x - y &= 1 \end{align*}
$$

**Step 1: Identify the coefficient matrix (A) and the constant vector (B).**

$$
A = \begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 7 \\ 1 \end{pmatrix}
$$

**Step 2: Calculate the determinant of the coefficient matrix (D).**

$$
D = \det(A) = (2)(-1) - (3)(1) = -2 - 3 = -5
$$

Since $D = -5 \neq 0$, there is a unique solution.

**Step 3: Calculate the determinant for $x$ ($D_x$).**
Replace the first column of $A$ (the coefficients of $x$) with the constants from $B$.

$$
A_x = \begin{pmatrix} 7 & 3 \\ 1 & -1 \end{pmatrix}
$$

$$
D_x = \det(A_x) = (7)(-1) - (3)(1) = -7 - 3 = -10
$$

**Step 4: Calculate the determinant for $y$ ($D_y$).**
Replace the second column of $A$ (the coefficients of $y$) with the constants from $B$.

$$
A_y = \begin{pmatrix} 2 & 7 \\ 1 & 1 \end{pmatrix}
$$

$$
D_y = \det(A_y) = (2)(1) - (7)(1) = 2 - 7 = -5
$$

**Step 5: Find the values of $x$ and $y$.**

$$
x = \frac{D_x}{D} = \frac{-10}{-5} = 2
$$

$$
y = \frac{D_y}{D} = \frac{-5}{-5} = 1
$$

The unique solution is $x=2$ and $y=1$.

## Worked Example: A 3x3 System

Let's solve the following system:

$$
\begin{align*} x + y + z &= 6 \\ 2x - y + z &= 3 \\ x + 2y - z &= 2 \end{align*}
$$

**Step 1: Identify the coefficient matrix (A) and the constant vector (B).**

$$
A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}
$$

**Step 2: Calculate the determinant of the coefficient matrix (D).**

$$
D = 1 \begin{vmatrix} -1 & 1 \\ 2 & -1 \end{vmatrix} - 1 \begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} + 1 \begin{vmatrix} 2 & -1 \\ 1 & 2 \end{vmatrix}
$$

$$
D = 1((-1)(-1) - (1)(2)) - 1((2)(-1) - (1)(1)) + 1((2)(2) - (-1)(1))
$$

$$
D = 1(1 - 2) - 1(-2 - 1) + 1(4 - (-1))
$$

$$
D = 1(-1) - 1(-3) + 1(5)
$$

$$
D = -1 + 3 + 5 = 7
$$

Since $D = 7 \neq 0$, there is a unique solution.

**Step 3: Calculate $D_x$.**
Replace the first column of $A$ with $B$.

$$
A_x = \begin{pmatrix} 6 & 1 & 1 \\ 3 & -1 & 1 \\ 2 & 2 & -1 \end{pmatrix}
$$

$$
D_x = 6 \begin{vmatrix} -1 & 1 \\ 2 & -1 \end{vmatrix} - 1 \begin{vmatrix} 3 & 1 \\ 2 & -1 \end{vmatrix} + 1 \begin{vmatrix} 3 & -1 \\ 2 & 2 \end{vmatrix}
$$

$$
D_x = 6(1 - 2) - 1(-3 - 2) + 1(6 - (-2))
$$

$$
D_x = 6(-1) - 1(-5) + 1(8)
$$

$$
D_x = -6 + 5 + 8 = 7
$$

**Step 4: Calculate $D_y$.**
Replace the second column of $A$ with $B$.

$$
A_y = \begin{pmatrix} 1 & 6 & 1 \\ 2 & 3 & 1 \\ 1 & 2 & -1 \end{pmatrix}
$$

$$
D_y = 1 \begin{vmatrix} 3 & 1 \\ 2 & -1 \end{vmatrix} - 6 \begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} + 1 \begin{vmatrix} 2 & 3 \\ 1 & 2 \end{vmatrix}
$$

$$
D_y = 1(-3 - 2) - 6(-2 - 1) + 1(4 - 3)
$$

$$
D_y = 1(-5) - 6(-3) + 1(1)
$$

$$
D_y = -5 + 18 + 1 = 14
$$

**Step 5: Calculate $D_z$.**
Replace the third column of $A$ with $B$.

$$
A_z = \begin{pmatrix} 1 & 1 & 6 \\ 2 & -1 & 3 \\ 1 & 2 & 2 \end{pmatrix}
$$

$$
D_z = 1 \begin{vmatrix} -1 & 3 \\ 2 & 2 \end{vmatrix} - 1 \begin{vmatrix} 2 & 3 \\ 1 & 2 \end{vmatrix} + 6 \begin{vmatrix} 2 & -1 \\ 1 & 2 \end{vmatrix}
$$

$$
D_z = 1(-2 - 6) - 1(4 - 3) + 6(4 - (-1))
$$

$$
D_z = 1(-8) - 1(1) + 6(5)
$$

$$
D_z = -8 - 1 + 30 = 21
$$

**Step 6: Find the values of $x$, $y$, and $z$.**

$$
x = \frac{D_x}{D} = \frac{7}{7} = 1
$$

$$
y = \frac{D_y}{D} = \frac{14}{7} = 2
$$

$$
z = \frac{D_z}{D} = \frac{21}{7} = 3
$$

The unique solution is $x=1$, $y=2$, and $z=3$.

## Common Mistakes to Avoid

*   **Incorrect Determinant Calculation:** Errors in calculating determinants, especially for $3 \times 3$ matrices, are common. Double-check your arithmetic.
*   **Mistaking Columns:** Ensure you are replacing the correct column of the coefficient matrix with the constant vector for each variable.
*   **Non-Square Systems:** Cramer's Rule is only applicable to systems with an equal number of equations and variables.
*   **Zero Determinant:** If $D=0$, the system does not have a unique solution. Cramer's Rule cannot be applied in this case, and the system may have no solutions or infinitely many solutions.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/unique-solution-application|Unique solution application]]
