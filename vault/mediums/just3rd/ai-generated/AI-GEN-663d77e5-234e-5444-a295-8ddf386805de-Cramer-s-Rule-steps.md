---
type: "medium"
title: "Cramer's Rule Steps: Solving Systems with Determinants"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/matrix-algebra/microskills/cramer-s-rule-steps|cramer-s-rule-steps]]"
---
# Cramer's Rule Steps: Solving Systems with Determinants

This lesson focuses on the procedural steps of Cramer's Rule, a method for solving systems of linear equations using determinants. We'll assume you have a basic understanding of what determinants are and how to calculate them.

## When to Use Cramer's Rule

Cramer's Rule is applicable to systems of linear equations where:

*   The number of equations is equal to the number of variables.
*   The determinant of the coefficient matrix is non-zero. This condition ensures a unique solution exists.

## The Steps of Cramer's Rule

Let's consider a general system of two linear equations with two variables:

$$
\begin{aligned}
ax + by &= e \\
cx + dy &= f
\end{aligned}
$$

Or in matrix form, $$ AX = B $$, where:

$$
A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}, \quad X = \begin{bmatrix} x \\ y \end{bmatrix}, \quad B = \begin{bmatrix} e \\ f \end{bmatrix}
$$

To solve for the variables $$ x $$ and $$ y $$ using Cramer's Rule, follow these steps:

### Step 1: Calculate the Determinant of the Coefficient Matrix ($D$)

This is the determinant of the matrix formed by the coefficients of the variables.

$$
D = \det(A) = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc
$$

### Step 2: Calculate the Determinant for Each Variable ($D_x, D_y$, etc.)

For each variable, create a new matrix by replacing the column of coefficients for that variable with the constants from the right-hand side of the equations. Then, calculate the determinant of this new matrix.

*   **For $$ x $$, replace the first column (coefficients of $$ x $$) with the constants $$ e $$ and $$ f $$:**

    $$
    D_x = \begin{vmatrix} e & b \\ f & d \end{vmatrix} = ed - bf
    $$

*   **For $$ y $$, replace the second column (coefficients of $$ y $$) with the constants $$ e $$ and $$ f $$:**

    $$
    D_y = \begin{vmatrix} a & e \\ c & f \end{vmatrix} = af - ec
    $$

### Step 3: Calculate the Values of the Variables

The solution for each variable is found by dividing the determinant calculated in Step 2 by the determinant calculated in Step 1.

*   **For $$ x $$:**

    $$
    x = \frac{D_x}{D}
    $$

*   **For $$ y $$:**

    $$
    y = \frac{D_y}{D}
    $$

### What if $$ D = 0 $$?

If $$ D = 0 $$, Cramer's Rule cannot be applied directly. This indicates that the system either has no solution (inconsistent) or infinitely many solutions (dependent). You would need to use other methods like Gaussian elimination to determine the nature of the solution.

## Worked Example (2x2 System)

Let's solve the following system of equations using Cramer's Rule:

$$
\begin{aligned}
2x + 3y &= 7 \\
x - y &= 1
\end{aligned}
$$

**Step 1: Calculate $$ D $$**

The coefficient matrix is $$ A = \begin{bmatrix} 2 & 3 \\ 1 & -1 \end{bmatrix} $$.

$$
D = \det(A) = (2)(-1) - (3)(1) = -2 - 3 = -5
$$

Since $$ D \neq 0 $$, a unique solution exists.

**Step 2: Calculate $$ D_x $$ and $$ D_y $$**

*   **For $$ D_x $$:** Replace the first column with the constants $$ \begin{bmatrix} 7 \\ 1 \end{bmatrix} $$.

    $$
    D_x = \begin{vmatrix} 7 & 3 \\ 1 & -1 \end{vmatrix} = (7)(-1) - (3)(1) = -7 - 3 = -10
    $$

*   **For $$ D_y $$:** Replace the second column with the constants $$ \begin{bmatrix} 7 \\ 1 \end{bmatrix} $$.

    $$
    D_y = \begin{vmatrix} 2 & 7 \\ 1 & 1 \end{vmatrix} = (2)(1) - (7)(1) = 2 - 7 = -5
    $$

**Step 3: Calculate $$ x $$ and $$ y $$**

*   $$ x = \frac{D_x}{D} = \frac{-10}{-5} = 2 $$
*   $$ y = \frac{D_y}{D} = \frac{-5}{-5} = 1 $$

The solution to the system is $$ x = 2 $$ and $$ y = 1 $$.

## Cramer's Rule for 3x3 Systems

The same principles apply to systems of three linear equations with three variables.

Consider the system:

$$
\begin{aligned}
ax + by + cz &= p \\
dx + ey + fz &= q \\
gx + hy + iz &= r
\end{aligned}
$$

In matrix form $$ AX = B $$, where:

$$
A = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}, \quad X = \begin{bmatrix} x \\ y \\ z \end{bmatrix}, \quad B = \begin{bmatrix} p \\ q \\ r \end{bmatrix}
$$

The steps are:

1.  **Calculate $$ D = \det(A) $$**.
2.  **Calculate $$ D_x $$**: Replace the first column of $$ A $$ with $$ B $$.
3.  **Calculate $$ D_y $$**: Replace the second column of $$ A $$ with $$ B $$.
4.  **Calculate $$ D_z $$**: Replace the third column of $$ A $$ with $$ B $$.
5.  **Calculate the solutions**: $$ x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D} $$.

Remember, calculating 3x3 determinants involves more terms, but the procedural steps remain consistent.

By practicing these steps, you will become proficient in applying Cramer's Rule to solve systems of linear equations with a unique solution.

## Supports

- [[skills/mathematics/matrix-algebra/microskills/cramer-s-rule-steps|Cramer's Rule steps]]
