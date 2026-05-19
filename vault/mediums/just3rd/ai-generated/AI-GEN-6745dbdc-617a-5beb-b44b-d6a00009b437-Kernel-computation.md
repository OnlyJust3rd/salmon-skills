---
type: "medium"
title: "Calculating the Kernel of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/subspaces-and-orthogonality/microskills/kernel-computation|Kernel computation]]"
---
# Calculating the Kernel of a Linear Transformation

The kernel, also known as the null space, is a fundamental concept when analyzing linear transformations. It helps us understand which vectors are "squashed" to the zero vector by the transformation. This lesson will guide you through calculating the kernel of a linear transformation represented by a matrix.

### What is the Kernel?

For a linear transformation $T: V \to W$, where $V$ and $W$ are vector spaces, the kernel of $T$ is the set of all vectors $\mathbf{v}$ in $V$ such that $T(\mathbf{v}) = \mathbf{0}_W$, where $\mathbf{0}_W$ is the zero vector in $W$.

If the linear transformation $T$ is represented by a matrix $A$, so $T(\mathbf{x}) = A\mathbf{x}$, then the kernel of $T$ is the set of all vectors $\mathbf{x}$ such that $A\mathbf{x} = \mathbf{0}$. This is precisely the definition of the null space of the matrix $A$.

### Why is the Kernel Important?

Understanding the kernel is crucial for several reasons:

*   **Injectivity:** A linear transformation is injective (one-to-one) if and only if its kernel contains only the zero vector.
*   **Dimension (Nullity):** The dimension of the kernel is called the nullity of the transformation. This, along with the rank (dimension of the column space), relates to the overall structure of the transformation through the Rank-Nullity Theorem:
    $$ \text{rank}(A) + \text{nullity}(A) = \text{number of columns in } A $$
*   **Solving Linear Systems:** The kernel is directly related to the solutions of homogeneous linear systems ($A\mathbf{x} = \mathbf{0}$).

### Calculating the Kernel

To find the kernel of a linear transformation represented by a matrix $A$, we need to solve the homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$. The standard method involves using Gaussian elimination (or Gauss-Jordan elimination) to transform the augmented matrix $[A | \mathbf{0}]$ into its row-echelon form or reduced row-echelon form (RREF).

#### Steps to Calculate the Kernel:

1.  **Form the augmented matrix:** Write the matrix $A$ and augment it with a zero vector. If $A$ is an $m \times n$ matrix, the augmented matrix will be $m \times (n+1)$.
    $$ [A | \mathbf{0}] $$
2.  **Perform row operations:** Use elementary row operations to transform the augmented matrix into its row-echelon form or reduced row-echelon form (RREF).
3.  **Identify pivot and free variables:** Once in RREF, identify the pivot variables (corresponding to columns with leading ones) and free variables (corresponding to columns without leading ones).
4.  **Express pivot variables in terms of free variables:** Write the system of equations corresponding to the RREF and solve for the pivot variables in terms of the free variables.
5.  **Write the general solution:** Express the solution vector $\mathbf{x}$ as a linear combination of vectors, where the coefficients are the free variables. The vectors in this linear combination form a basis for the kernel.

#### Worked Example:

Let's find the kernel of the linear transformation $T(\mathbf{x}) = A\mathbf{x}$, where the matrix $A$ is given by:

$$ A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 4 & -2 \\ -1 & -2 & 1 \end{pmatrix} $$

**Step 1: Form the augmented matrix**

$$ \left[ \begin{array}{ccc|c} 1 & 2 & -1 & 0 \\ 2 & 4 & -2 & 0 \\ -1 & -2 & 1 & 0 \end{array} \right] $$

**Step 2: Perform row operations to get RREF**

*   $R_2 \leftarrow R_2 - 2R_1$
*   $R_3 \leftarrow R_3 + R_1$

$$ \left[ \begin{array}{ccc|c} 1 & 2 & -1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array} \right] $$

The matrix is already in RREF.

**Step 3: Identify pivot and free variables**

The first column has a leading one, so $x_1$ is a pivot variable.
The second and third columns do not have leading ones, so $x_2$ and $x_3$ are free variables.

**Step 4: Express pivot variables in terms of free variables**

From the first row of the RREF, we have the equation:
$1x_1 + 2x_2 - 1x_3 = 0$

Solving for $x_1$:
$x_1 = -2x_2 + x_3$

**Step 5: Write the general solution**

The solution vector $\mathbf{x}$ can be written as:

$$ \mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} -2x_2 + x_3 \\ x_2 \\ x_3 \end{pmatrix} $$

We can separate this into a linear combination based on the free variables $x_2$ and $x_3$:

$$ \mathbf{x} = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} $$

The kernel of $T$ (or the null space of $A$) is the set of all linear combinations of these two vectors. A basis for the kernel is:

$$ \left\{ \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \right\} $$

The dimension of the kernel (nullity) is 2, which is the number of vectors in the basis.

### Common Mistakes to Avoid:

*   **Forgetting the zero vector:** Always start with the augmented matrix $[A | \mathbf{0}]$.
*   **Errors in row operations:** Double-check each step of Gaussian elimination.
*   **Confusing pivot and free variables:** Carefully identify which variables correspond to columns with leading ones and which do not.
*   **Not expressing all variables:** Ensure that *all* components of the solution vector $\mathbf{x}$ are expressed in terms of the free variables.

By mastering the calculation of the kernel, you gain a deeper insight into the behavior of linear transformations and their fundamental subspaces.

## Supports

- [[skills/mathematics/subspaces-and-orthogonality/microskills/kernel-computation|Kernel computation]]
