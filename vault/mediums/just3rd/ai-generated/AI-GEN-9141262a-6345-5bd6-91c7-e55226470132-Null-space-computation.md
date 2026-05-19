---
type: "medium"
title: "Calculating the Null Space of a Matrix"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/subspaces-and-orthogonality/microskills/null-space-computation|Null space computation]]"
---
# Calculating the Null Space of a Matrix

This lesson focuses on a crucial skill for understanding the fundamental subspaces of a matrix: **computing its null space**. The null space, also known as the kernel, is a fundamental subspace that tells us a lot about the linear transformations represented by matrices.

## What is the Null Space?

The **null space** of a matrix \(A\), denoted as \(N(A)\) or \(ker(A)\), is the set of all vectors \(\mathbf{x}\) such that \(A\mathbf{x} = \mathbf{0}\), where \(\mathbf{0}\) is the zero vector.

In simpler terms, the null space contains all the input vectors that get "squashed" or mapped to the zero vector by the linear transformation represented by matrix \(A\).

$$
N(A) = \{\mathbf{x} \mid A\mathbf{x} = \mathbf{0}\}
$$

The null space is always a subspace of the domain of the linear transformation. Its dimension is called the **nullity** of the matrix, which is directly related to the rank of the matrix through the Rank-Nullity Theorem: \(rank(A) + nullity(A) = n\), where \(n\) is the number of columns in \(A\).

## How to Compute the Null Space

The standard method for finding the null space involves solving the homogeneous system of linear equations \(A\mathbf{x} = \mathbf{0}\). We achieve this by performing Gaussian elimination (or Gauss-Jordan elimination) to bring the augmented matrix \([A \mid \mathbf{0}]\) into reduced row echelon form (RREF).

Here are the steps:

1.  **Form the Augmented Matrix:** Create an augmented matrix \([A \mid \mathbf{0}]\) by appending a column of zeros to the original matrix \(A\).
2.  **Reduce to RREF:** Use elementary row operations to transform the left side of the augmented matrix into its reduced row echelon form. The column of zeros will remain zeros throughout this process.
3.  **Identify Pivot and Free Variables:** In the RREF, identify the columns with leading 1s (pivot columns) and the columns without leading 1s (free variable columns).
4.  **Express Basic Variables in Terms of Free Variables:** Write down the system of equations corresponding to the RREF. Express the variables corresponding to pivot columns (basic variables) in terms of the variables corresponding to free columns (free variables).
5.  **Write the General Solution:** Express the solution vector \(\mathbf{x}\) as a linear combination of vectors, where the coefficients are the free variables. These vectors form a basis for the null space.

## Worked Example

Let's compute the null space of the following matrix \(A\):

$$
A = \begin{pmatrix}
1 & 2 & 3 & 0 \\
2 & 4 & 6 & 1 \\
3 & 6 & 9 & 2
\end{pmatrix}
$$

**Step 1: Form the Augmented Matrix**

$$
[A \mid \mathbf{0}] = \begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
2 & 4 & 6 & 1 & | & 0 \\
3 & 6 & 9 & 2 & | & 0
\end{pmatrix}
$$

**Step 2: Reduce to RREF**

*   \(R_2 \leftarrow R_2 - 2R_1\)
*   \(R_3 \leftarrow R_3 - 3R_1\)

$$
\begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
0 & 0 & 0 & 1 & | & 0 \\
0 & 0 & 0 & 2 & | & 0
\end{pmatrix}
$$

*   \(R_3 \leftarrow R_3 - 2R_2\)

$$
\begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
0 & 0 & 0 & 1 & | & 0 \\
0 & 0 & 0 & 0 & | & 0
\end{pmatrix}
$$

*   \(R_2 \leftrightarrow R_2\) (already in good form for this step)
*   Swap \(R_2\) and \(R_1\) to get leading 1s in the correct columns for RREF. This is a common confusion point; in RREF, we want leading 1s as far left as possible. Let's restart the RREF process with that goal in mind more strictly.

Let's re-evaluate the RREF process carefully aiming for standard RREF form.

Starting matrix:
$$
\begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
2 & 4 & 6 & 1 & | & 0 \\
3 & 6 & 9 & 2 & | & 0
\end{pmatrix}
$$

*   \(R_2 \leftarrow R_2 - 2R_1\)
*   \(R_3 \leftarrow R_3 - 3R_1\)

$$
\begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
0 & 0 & 0 & 1 & | & 0 \\
0 & 0 & 0 & 2 & | & 0
\end{pmatrix}
$$

*   \(R_3 \leftarrow R_3 - 2R_2\)

$$
\begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
0 & 0 & 0 & 1 & | & 0 \\
0 & 0 & 0 & 0 & | & 0
\end{pmatrix}
$$
This matrix is now in row echelon form. To get to *reduced* row echelon form (RREF), we need leading 1s to be the *only* non-zero entry in their respective columns.

We need to ensure the leading 1 in the second row (which is in the 4th column) is the only non-zero entry in that column.
In our current matrix, the first row has a 0 in the 4th column, so this condition is met for the second row.

Our RREF is:
$$
\begin{pmatrix}
1 & 2 & 3 & 0 & | & 0 \\
0 & 0 & 0 & 1 & | & 0 \\
0 & 0 & 0 & 0 & | & 0
\end{pmatrix}
$$

**Step 3: Identify Pivot and Free Variables**

The pivot columns are the columns with leading 1s. These are column 1 (corresponding to \(x_1\)) and column 4 (corresponding to \(x_4\)).
The free variable columns are the ones without leading 1s. These are column 2 (corresponding to \(x_2\)) and column 3 (corresponding to \(x_3\)).
So, \(x_1\) and \(x_4\) are basic variables, and \(x_2\) and \(x_3\) are free variables.

**Step 4: Express Basic Variables in Terms of Free Variables**

From the RREF, we get the following equations:

*   \(1x_1 + 2x_2 + 3x_3 + 0x_4 = 0 \implies x_1 = -2x_2 - 3x_3\)
*   \(0x_1 + 0x_2 + 0x_3 + 1x_4 = 0 \implies x_4 = 0\)

**Step 5: Write the General Solution**

Let the free variables \(x_2\) and \(x_3\) be arbitrary parameters, say \(s\) and \(t\), respectively.
So, \(x_2 = s\) and \(x_3 = t\).

Substituting these into our expressions for \(x_1\) and \(x_4\):
*   \(x_1 = -2s - 3t\)
*   \(x_2 = s\)
*   \(x_3 = t\)
*   \(x_4 = 0\)

We can write the solution vector \(\mathbf{x}\) as:

$$
\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} -2s - 3t \\ s \\ t \\ 0 \end{pmatrix}
$$

Now, we decompose this vector into a linear combination of vectors based on the parameters \(s\) and \(t\):

$$
\mathbf{x} = \begin{pmatrix} -2s \\ s \\ 0 \\ 0 \end{pmatrix} + \begin{pmatrix} -3t \\ 0 \\ t \\ 0 \end{pmatrix} = s \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + t \begin{pmatrix} -3 \\ 0 \\ 1 \\ 0 \end{pmatrix}
$$

The vectors \(\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}\) and \(\begin{pmatrix} -3 \\ 0 \\ 1 \\ 0 \end{pmatrix}\) form a basis for the null space of \(A\).

Therefore, the null space of \(A\) is:

$$
N(A) = \text{span}\left\{\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} -3 \\ 0 \\ 1 \\ 0 \end{pmatrix}\right\}
$$

The dimension of the null space (nullity) is 2, which is the number of free variables.

## Supports

- [[skills/mathematics/subspaces-and-orthogonality/microskills/null-space-computation|Null space computation]]
