---
type: "medium"
title: "Representing Systems of Equations as Augmented Matrices"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/matrix-algebra/microskills/augmented-matrix-representation|Augmented matrix representation]]"
---
# Representing Systems of Equations as Augmented Matrices

This lesson will guide you through translating a system of linear equations into an augmented matrix. This is a fundamental skill in matrix algebra that simplifies the manipulation and solving of these systems.

## What is an Augmented Matrix?

An augmented matrix is a compact way to represent a system of linear equations. It combines the coefficients of the variables and the constant terms into a single matrix. This representation is incredibly useful for applying matrix operations to solve the system.

Consider a general system of linear equations with $n$ variables and $m$ equations:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases}
$$

In this system:
*   $x_1, x_2, \dots, x_n$ are the variables.
*   $a_{ij}$ represents the coefficient of the $j$-th variable in the $i$-th equation.
*   $b_i$ is the constant term on the right-hand side of the $i$-th equation.

To form the augmented matrix for this system, we create a matrix where:
*   Each row corresponds to an equation.
*   The columns (before the separator) contain the coefficients of the variables in the order they appear ($x_1, x_2, \dots, x_n$).
*   A vertical line (or simply a distinct column) separates the coefficient matrix from the constant terms.
*   The final column contains the constant terms ($b_1, b_2, \dots, b_m$).

The augmented matrix for the general system above looks like this:

$$
\left[
\begin{array}{cccc|c}
a_{11} & a_{12} & \dots & a_{1n} & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & b_2 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & b_m
\end{array}
\right]
$$

## Steps to Form an Augmented Matrix

1.  **Align Variables:** Ensure that all equations in the system are written so that the variables are aligned in the same order (e.g., all $x$'s first, then all $y$'s, then all $z$'s).
2.  **Handle Missing Variables:** If a variable is missing from an equation, its coefficient is 0.
3.  **Identify Coefficients:** Extract the coefficient of each variable for each equation.
4.  **Identify Constants:** Extract the constant term on the right-hand side of each equation.
5.  **Construct the Matrix:** Create a matrix with rows representing equations and columns representing variable coefficients. Add an extra column for the constants, separated by a vertical line.

## Worked Example

Let's translate the following system of linear equations into an augmented matrix:

$$
\begin{cases}
2x + 3y - z = 7 \\
x - y + 2z = -3 \\
4x + 5y + 3z = 1
\end{cases}
$$

**Step 1: Align Variables**
The variables ($x, y, z$) are already aligned in the same order in all equations.

**Step 2: Handle Missing Variables**
There are no missing variables in this system.

**Step 3: Identify Coefficients**
*   Equation 1: Coefficients are $2$ (for $x$), $3$ (for $y$), and $-1$ (for $z$).
*   Equation 2: Coefficients are $1$ (for $x$), $-1$ (for $y$), and $2$ (for $z$).
*   Equation 3: Coefficients are $4$ (for $x$), $5$ (for $y$), and $3$ (for $z$).

**Step 4: Identify Constants**
*   Equation 1: Constant is $7$.
*   Equation 2: Constant is $-3$.
*   Equation 3: Constant is $1$.

**Step 5: Construct the Matrix**
We create a 3x3 matrix for the coefficients and add a fourth column for the constants, separated by a vertical line.

$$
\left[
\begin{array}{ccc|c}
2 & 3 & -1 & 7 \\
1 & -1 & 2 & -3 \\
4 & 5 & 3 & 1
\end{array}
\right]
$$

This is the augmented matrix representation of the given system of linear equations.

## Another Example (with a missing variable)

Consider this system:

$$
\begin{cases}
x + 2y = 5 \\
3y - z = 1 \\
2x + 4z = 10
\end{cases}
$$

**Step 1: Align Variables**
We need to make sure all variables ($x, y, z$) are in a consistent order for each equation. Let's arrange them as $x, y, z$.

**Step 2: Handle Missing Variables**
*   Equation 1: $x + 2y + 0z = 5$
*   Equation 2: $0x + 3y - z = 1$
*   Equation 3: $2x + 0y + 4z = 10$

**Step 3: Identify Coefficients**
*   Equation 1: Coefficients are $1, 2, 0$.
*   Equation 2: Coefficients are $0, 3, -1$.
*   Equation 3: Coefficients are $2, 0, 4$.

**Step 4: Identify Constants**
*   Equation 1: Constant is $5$.
*   Equation 2: Constant is $1$.
*   Equation 3: Constant is $10$.

**Step 5: Construct the Matrix**

$$
\left[
\begin{array}{ccc|c}
1 & 2 & 0 & 5 \\
0 & 3 & -1 & 1 \\
2 & 0 & 4 & 10
\end{array}
\right]
$$

## Key Takeaway

The augmented matrix representation is a crucial step in solving systems of linear equations using matrix methods like Gaussian elimination or Gauss-Jordan elimination. It allows us to visually organize and manipulate the equations efficiently.

## Supports

- [[skills/mathematics/matrix-algebra/microskills/augmented-matrix-representation|Augmented matrix representation]]
