---
type: "medium"
title: "Gaussian Elimination for Ax=0"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/gaussian-elimination-for-ax-0|gaussian-elimination-for-ax-0]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/matrix-algebra|matrix-algebra]]"
learning-time-in-minutes: 6
---
# Gaussian Elimination for Ax=0

In matrix algebra, we often encounter systems of linear equations. When these systems are homogeneous (meaning all constants on the right-hand side are zero), represented as $Ax=0$, they have at least one trivial solution ($x=0$). However, they can also have non-trivial solutions. Finding these non-trivial solutions and understanding the structure of the solution space is crucial, especially when determining the kernel of a matrix.

This lesson focuses on using **Gaussian elimination** to solve homogeneous systems of the form $Ax=0$. Gaussian elimination is a systematic method of applying elementary row operations to transform a matrix into a simpler form, from which the solutions can be readily identified.

## What is Gaussian Elimination?

Gaussian elimination is a process of applying a sequence of elementary row operations to a matrix. These operations do not change the solution set of the corresponding system of linear equations. The goal is to transform the matrix into **row echelon form** or **reduced row echelon form**. For solving $Ax=0$, reduced row echelon form is particularly useful as it directly reveals the relationships between variables.

The elementary row operations are:

1.  **Swapping two rows:** $R_i \leftrightarrow R_j$
2.  **Multiplying a row by a non-zero scalar:** $k R_i \rightarrow R_i$ (where $k \neq 0$)
3.  **Adding a multiple of one row to another row:** $R_i + k R_j \rightarrow R_i$

## Why Use Gaussian Elimination for Ax=0?

When solving $Ax=0$, Gaussian elimination helps us:

*   **Identify free variables:** Variables that can take any value.
*   **Express basic variables:** Variables that are determined by the free variables.
*   **Determine the dimension of the solution space (null space):** The number of free variables.
*   **Find a basis for the kernel (null space):** A set of linearly independent vectors that span the solution space.

## Steps to Solve Ax=0 using Gaussian Elimination

Let's outline the process for solving a homogeneous system $Ax=0$:

1.  **Form the augmented matrix:** While the right-hand side of $Ax=0$ is always zero, we typically write the augmented matrix as $[A | 0]$. However, since the zero column will never change, we can often just work with matrix $A$ directly and remember that the right-hand side is zero.
2.  **Apply Gaussian elimination:** Use elementary row operations to transform the matrix $A$ into **reduced row echelon form (RREF)**.
    *   A matrix is in RREF if:
        *   The first non-zero element (leading entry or pivot) in each non-zero row is 1.
        *   Each leading 1 is the only non-zero entry in its column.
        *   All zero rows are at the bottom of the matrix.
3.  **Identify pivot and free variables:**
    *   **Pivot variables** correspond to columns with leading 1s in the RREF.
    *   **Free variables** correspond to columns *without* leading 1s in the RREF.
4.  **Write the system of equations from the RREF:** Convert the RREF matrix back into a system of linear equations.
5.  **Express pivot variables in terms of free variables:** Isolate each pivot variable and write it as a combination of the free variables.
6.  **Write the general solution vector:** Express the solution vector $x$ in terms of the free variables.
7.  **Find a basis for the kernel:** Decompose the general solution vector into a linear combination where each free variable is isolated, and extract the vectors associated with each free variable. These vectors form a basis for the kernel of $A$.

## Worked Example

Let's solve the homogeneous system $Ax=0$ where:
$$
A = \begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 4 & -4 & 8 \\ -1 & -2 & 1 & -3 \end{pmatrix}
$$
We want to find the solution space for $Ax=0$.

**Step 1: Form the augmented matrix (or just use A)**
$$
[A | 0] = \begin{pmatrix} 1 & 2 & -1 & 3 & | & 0 \\ 2 & 4 & -4 & 8 & | & 0 \\ -1 & -2 & 1 & -3 & | & 0 \end{pmatrix}
$$

**Step 2: Apply Gaussian elimination to reach RREF**

*   $R_2 \leftarrow R_2 - 2R_1$:
    $$
    \begin{pmatrix} 1 & 2 & -1 & 3 & | & 0 \\ 0 & 0 & -2 & 2 & | & 0 \\ -1 & -2 & 1 & -3 & | & 0 \end{pmatrix}
    $$
*   $R_3 \leftarrow R_3 + R_1$:
    $$
    \begin{pmatrix} 1 & 2 & -1 & 3 & | & 0 \\ 0 & 0 & -2 & 2 & | & 0 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}
    $$
*   $R_2 \leftarrow -\frac{1}{2}R_2$:
    $$
    \begin{pmatrix} 1 & 2 & -1 & 3 & | & 0 \\ 0 & 0 & 1 & -1 & | & 0 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}
    $$
*   $R_1 \leftarrow R_1 + R_2$:
    $$
    \begin{pmatrix} 1 & 2 & 0 & 2 & | & 0 \\ 0 & 0 & 1 & -1 & | & 0 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}
    $$
The matrix is now in RREF.

**Step 3: Identify pivot and free variables**
The leading 1s are in columns 1 and 3.
*   Pivot variables: $x_1, x_3$
*   Free variables: $x_2, x_4$

**Step 4: Write the system of equations from RREF**
From the RREF matrix, we get:
1.  $x_1 + 2x_2 + 0x_3 + 2x_4 = 0 \implies x_1 + 2x_2 + 2x_4 = 0$
2.  $0x_1 + 0x_2 + x_3 - x_4 = 0 \implies x_3 - x_4 = 0$
3.  $0 = 0$ (This equation provides no new information)

**Step 5: Express pivot variables in terms of free variables**
From equation 1: $x_1 = -2x_2 - 2x_4$
From equation 2: $x_3 = x_4$

**Step 6: Write the general solution vector**
The solution vector $x$ is:
$$
x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} -2x_2 - 2x_4 \\ x_2 \\ x_4 \\ x_4 \end{pmatrix}
$$
We can rewrite this as a linear combination of the free variables:
$$
x = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + x_4 \begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix}
$$

**Step 7: Find a basis for the kernel**
The vectors multiplying the free variables form a basis for the kernel of $A$.
Let $v_1 = \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}$ and $v_2 = \begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix}$.
The basis for the kernel of $A$ is $\left\{ \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix} \right\}$.

This means that any solution to $Ax=0$ can be written as a linear combination of these two vectors, and these two vectors are linearly independent. The dimension of the kernel (null space) is 2, which is equal to the number of free variables.

## Common Mistakes

*   **Algebraic errors during row operations:** Double-check your arithmetic at each step.
*   **Incorrectly identifying pivot and free variables:** Ensure you are looking at the RREF correctly.
*   **Forgetting that the right-hand side is zero:** While it doesn't change during row operations, it's essential for the definition of the system.
*   **Not writing the basis vectors correctly:** The basis vectors are derived directly from the structure of the general solution.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/gaussian-elimination-for-ax-0|Gaussian elimination for Ax=0]]
