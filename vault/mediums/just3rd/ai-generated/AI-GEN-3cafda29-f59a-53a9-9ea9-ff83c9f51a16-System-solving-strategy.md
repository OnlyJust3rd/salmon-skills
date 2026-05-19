---
type: "medium"
title: "System Solving Strategy: Gaussian Elimination"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/matrix-algebra/microskills/system-solving-strategy|System solving strategy]]"
---
# System Solving Strategy: Gaussian Elimination

Gaussian elimination is a systematic procedure for solving systems of linear equations. It transforms a system into an equivalent system that is much easier to solve. The core idea is to use elementary row operations to transform the augmented matrix of the system into row-echelon form.

## What is an Augmented Matrix?

A system of linear equations can be represented by an augmented matrix. For a system like:
$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases}
$$
The augmented matrix is:
$$
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & | & b_m
\end{bmatrix}
$$
The left side of the vertical bar contains the coefficients of the variables, and the right side contains the constants.

## Elementary Row Operations

We can perform three types of elementary row operations on an augmented matrix without changing the solution set of the system:

1.  **Swapping two rows:** $R_i \leftrightarrow R_j$
2.  **Multiplying a row by a non-zero scalar:** $kR_i \rightarrow R_i$ (where $k \neq 0$)
3.  **Adding a multiple of one row to another row:** $R_i + kR_j \rightarrow R_i$

## Goal: Row-Echelon Form

The goal of Gaussian elimination is to transform the augmented matrix into **row-echelon form**. A matrix is in row-echelon form if:

1.  All rows consisting entirely of zeros are at the bottom of the matrix.
2.  For each non-zero row, the first non-zero entry (called the **leading entry** or **pivot**) is 1.
3.  The leading entry of each non-zero row is in a column to the right of the leading entry of the row above it.

Once the matrix is in row-echelon form, we can use **back-substitution** to find the solution.

## Step-by-Step Application: A Worked Example

Let's solve the following system using Gaussian elimination:
$$
\begin{cases}
x + 2y - z = 1 \\
2x - y + z = 5 \\
3x + y + 2z = 0
\end{cases}
$$

### Step 1: Write the Augmented Matrix

$$
\begin{bmatrix}
1 & 2 & -1 & | & 1 \\
2 & -1 & 1 & | & 5 \\
3 & 1 & 2 & | & 0
\end{bmatrix}
$$

### Step 2: Use Row Operations to Achieve Row-Echelon Form

Our goal is to get zeros below the leading entry in the first column.

*   To get a zero in the $(2,1)$ position, subtract 2 times $R_1$ from $R_2$: $R_2 - 2R_1 \rightarrow R_2$.
    $$
    \begin{bmatrix}
    1 & 2 & -1 & | & 1 \\
    2 - 2(1) & -1 - 2(2) & 1 - 2(-1) & | & 5 - 2(1) \\
    3 & 1 & 2 & | & 0
    \end{bmatrix}
    =
    \begin{bmatrix}
    1 & 2 & -1 & | & 1 \\
    0 & -5 & 3 & | & 3 \\
    3 & 1 & 2 & | & 0
    \end{bmatrix}
    $$

*   To get a zero in the $(3,1)$ position, subtract 3 times $R_1$ from $R_3$: $R_3 - 3R_1 \rightarrow R_3$.
    $$
    \begin{bmatrix}
    1 & 2 & -1 & | & 1 \\
    0 & -5 & 3 & | & 3 \\
    3 - 3(1) & 1 - 3(2) & 2 - 3(-1) & | & 0 - 3(1)
    \end{bmatrix}
    =
    \begin{bmatrix}
    1 & 2 & -1 & | & 1 \\
    0 & -5 & 3 & | & 3 \\
    0 & -5 & 5 & | & -3
    \end{bmatrix}
    $$

Now, let's focus on the second column. We want a zero below the leading entry of the second row (which is -5).

*   To get a zero in the $(3,2)$ position, subtract $R_2$ from $R_3$: $R_3 - R_2 \rightarrow R_3$.
    $$
    \begin{bmatrix}
    1 & 2 & -1 & | & 1 \\
    0 & -5 & 3 & | & 3 \\
    0 - 0 & -5 - (-5) & 5 - 3 & | & -3 - 3
    \end{bmatrix}
    =
    \begin{bmatrix}
    1 & 2 & -1 & | & 1 \\
    0 & -5 & 3 & | & 3 \\
    0 & 0 & 2 & | & -6
    \end{bmatrix}
    $$

This matrix is now in row-echelon form.

### Step 3: Back-Substitution

Convert the augmented matrix back into a system of linear equations:
$$
\begin{cases}
x + 2y - z = 1 \\
-5y + 3z = 3 \\
2z = -6
\end{cases}
$$

*   **From the third equation:** $2z = -6 \implies z = -3$.

*   **Substitute $z = -3$ into the second equation:**
    $-5y + 3(-3) = 3$
    $-5y - 9 = 3$
    $-5y = 12$
    $y = -\frac{12}{5}$

*   **Substitute $y = -\frac{12}{5}$ and $z = -3$ into the first equation:**
    $x + 2\left(-\frac{12}{5}\right) - (-3) = 1$
    $x - \frac{24}{5} + 3 = 1$
    $x - \frac{24}{5} = -2$
    $x = -2 + \frac{24}{5}$
    $x = -\frac{10}{5} + \frac{24}{5}$
    $x = \frac{14}{5}$

So, the unique solution is $x = \frac{14}{5}$, $y = -\frac{12}{5}$, and $z = -3$.

## Interpreting Solutions

Gaussian elimination can reveal different types of solutions:

*   **Unique Solution:** If the row-echelon form has a leading 1 in each column corresponding to a variable, and no contradictions, there's a unique solution.
*   **Infinite Solutions:** If, after reaching row-echelon form, you have fewer leading 1s than variables, and no contradictions, you have infinite solutions. Some variables will be "free variables" that can take any value, and the other variables will depend on them.
*   **No Solution:** If at any point you obtain a row of the form $[0 \ 0 \ \dots \ 0 \ | \ c]$ where $c \neq 0$, the system is inconsistent and has no solution. This represents a contradiction ($0 = c$).

By systematically applying elementary row operations, Gaussian elimination provides a powerful and reliable method to solve any system of linear equations.

## Supports

- [[skills/mathematics/matrix-algebra/microskills/system-solving-strategy|System solving strategy]]
