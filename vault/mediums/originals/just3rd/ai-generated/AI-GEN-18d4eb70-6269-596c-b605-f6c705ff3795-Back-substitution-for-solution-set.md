---
type: "medium"
title: "Back-Substitution for Finding the Kernel Basis"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/back-substitution-for-solution-set|back-substitution-for-solution-set]]"
learning-time-in-minutes: 5
---
# Back-Substitution for Finding the Kernel Basis

This lesson focuses on the crucial step of using back-substitution to find the solution set for homogeneous systems of linear equations, which is essential for determining the basis of a matrix's kernel.

## Understanding the Goal: The Kernel

The kernel of a matrix \(A\), denoted as \(\text{ker}(A)\) or \(N(A)\), is the set of all vectors \(x\) such that \(Ax = 0\). This set is a vector subspace, and we often want to find a basis for it. Finding the kernel involves solving the homogeneous system \(Ax = 0\).

When we solve \(Ax = 0\) by transforming the augmented matrix \([A|0]\) into its Row Echelon Form (REF) or Reduced Row Echelon Form (RREF), we obtain a simplified system of equations. Back-substitution is the method we use on this simplified system to express the variables in terms of free variables, thus describing the entire solution set.

## The Power of Back-Substitution

Back-substitution is a systematic way to solve for the variables in a system of linear equations when the system is in an upper triangular form (or can be easily rearranged into one). This is precisely the situation we encounter after performing Gaussian elimination on the augmented matrix \([A|0]\).

### Why it's Important for Kernel Basis

1.  **Expressing Dependent Variables:** It allows us to express the "pivot" or "leading" variables (those corresponding to pivot columns in the RREF) in terms of the "free" variables (those corresponding to non-pivot columns).
2.  **Generating Basis Vectors:** By setting each free variable to 1 (and others to 0) sequentially, we can generate a set of linearly independent vectors that span the kernel, forming a basis.

## The Back-Substitution Process: Step-by-Step

Let's assume you have already transformed your augmented matrix \([A|0]\) into Row Echelon Form (REF) or Reduced Row Echelon Form (RREF). The RREF is generally preferred as it simplifies the process.

**Steps:**

1.  **Identify Pivot and Free Variables:** In the RREF of \([A|0]\), identify the columns with leading 1s (pivot variables) and the columns without leading 1s (free variables).
2.  **Rewrite the System:** Write out the system of equations represented by the RREF. Each equation will correspond to a row with a pivot.
3.  **Isolate Pivot Variables:** For each equation, rearrange it to solve for its corresponding pivot variable in terms of the free variables.
4.  **Express the Solution Vector:** Write the general solution vector \(x\) by placing the expressions for the pivot variables into their respective positions, with free variables appearing as coefficients.
5.  **Decompose the Solution Vector:** Separate the general solution vector into a linear combination where each term is associated with a single free variable. The coefficients of these free variables will be scalars, and the remaining parts will be vectors.
6.  **Identify Basis Vectors:** The vectors that multiply the free variables in this decomposition form a basis for the kernel of \(A\).

## Worked Example

Let's find the basis for the kernel of the matrix \(A\):

$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
-1 & -2 & -3
\end{pmatrix}
$$

We want to solve \(Ax = 0\), which is:

$$
\begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
-1 & -2 & -3
\end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$

First, we form the augmented matrix and row-reduce it to RREF:

$$
[A|0] = \begin{pmatrix}
1 & 2 & 3 & | & 0 \\
2 & 4 & 6 & | & 0 \\
-1 & -2 & -3 & | & 0
\end{pmatrix}
$$

Perform row operations:
*   \(R_2 \leftarrow R_2 - 2R_1\)
*   \(R_3 \leftarrow R_3 + R_1\)

$$
\begin{pmatrix}
1 & 2 & 3 & | & 0 \\
0 & 0 & 0 & | & 0 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$

This matrix is already in RREF.

Now, let's apply back-substitution:

1.  **Identify Pivot and Free Variables:**
    *   The first column has a leading 1, so \(x_1\) is a pivot variable.
    *   The second and third columns do not have leading 1s, so \(x_2\) and \(x_3\) are free variables.

2.  **Rewrite the System:** The RREF gives us the equation:
    \(x_1 + 2x_2 + 3x_3 = 0\)

3.  **Isolate Pivot Variables:** We solve for \(x_1\):
    \(x_1 = -2x_2 - 3x_3\)

4.  **Express the Solution Vector:** The vector \(x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}\) can be written as:
    $$
    x = \begin{pmatrix}
    -2x_2 - 3x_3 \\
    x_2 \\
    x_3
    \end{pmatrix}
    $$

5.  **Decompose the Solution Vector:** We can separate this vector based on the free variables \(x_2\) and \(x_3\):
    $$
    x = \begin{pmatrix} -2x_2 \\ x_2 \\ 0 \end{pmatrix} + \begin{pmatrix} -3x_3 \\ 0 \\ x_3 \end{pmatrix}
    $$
    $$
    x = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}
    $$

6.  **Identify Basis Vectors:** The vectors multiplying the free variables \(x_2\) and \(x_3\) are:
    $$
    v_1 = \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} \quad \text{and} \quad v_2 = \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}
    $$

Therefore, the basis for the kernel of \(A\) is \(\{ \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix} \}\). Any vector in the kernel can be formed by a linear combination of these two basis vectors.

## Common Pitfalls to Avoid

*   **Mistakes in Row Reduction:** If your RREF is incorrect, your back-substitution will be based on faulty premises. Double-check your row operations.
*   **Confusing Pivot and Free Variables:** Incorrectly identifying which variables are free will lead to an incomplete or incorrect solution set. Remember, free variables correspond to columns *without* a leading 1.
*   **Forgetting the "0"s:** When decomposing the vector, ensure that variables that are not present in a particular expression get a coefficient of 0 in the corresponding vector component. For instance, \(x_2\) has no \(x_3\) term, so its component in \(v_2\) is 0.

By mastering back-substitution, you gain a powerful tool for understanding the structure of solutions to linear systems, specifically for finding the kernel of matrices.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/back-substitution-for-solution-set|Back-substitution for solution set]]
