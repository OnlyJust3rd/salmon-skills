---
type: "medium"
title: "Deriving a Basis for the Kernel of a Matrix"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/kernel-basis-derivation|kernel-basis-derivation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/matrix-algebra|matrix-algebra]]"
learning-time-in-minutes: 5
---
# Deriving a Basis for the Kernel of a Matrix

This lesson focuses on how to derive a basis for the kernel of a matrix, which is a crucial step in understanding the structure of linear transformations. We'll build upon our knowledge of solving homogeneous systems of linear equations.

## Understanding the Kernel

Recall that for a matrix $A$, the kernel (or null space) of $A$, denoted as $\text{ker}(A)$ or $N(A)$, is the set of all vectors $x$ such that $Ax = 0$. Mathematically,
$$ \text{ker}(A) = \{x \in \mathbb{R}^n \mid Ax = 0\} $$
The kernel is a vector subspace. A **basis** for a vector subspace is a set of linearly independent vectors that span the subspace. Our goal here is to find such a set of vectors for the kernel of a given matrix $A$.

## The Connection to Homogeneous Systems

To find the kernel, we need to solve the homogeneous system of linear equations $Ax = 0$. The solution set of this system forms the kernel. By finding a basis for this solution set, we are effectively defining the kernel in its simplest, most fundamental form.

## Steps for Kernel Basis Derivation

The process of deriving a basis for the kernel involves solving the homogeneous system $Ax=0$ and then interpreting the solution.

1.  **Form the Augmented Matrix:** Create an augmented matrix $[A | 0]$ from the equation $Ax = 0$. The zero vector on the right side is important; it signifies a homogeneous system.

2.  **Row Reduce to Row Echelon Form (REF) or Reduced Row Echelon Form (RREF):** Apply Gaussian elimination to transform the augmented matrix into REF or, preferably, RREF. RREF simplifies the interpretation of the solution.

3.  **Identify Pivot and Free Variables:** In the RREF of the augmented matrix, identify the columns that correspond to pivot variables (leading 1s) and those that correspond to free variables (columns without leading 1s).

4.  **Express Pivot Variables in Terms of Free Variables:** Write out the system of equations represented by the RREF. For each equation, express the pivot variable solely in terms of the free variables.

5.  **Decompose the Solution Vector:** Represent the general solution vector $x$ as a linear combination of vectors, where each vector corresponds to a free variable. The coefficients of these linear combinations will be the free variables themselves.

6.  **Extract the Basis Vectors:** The vectors that multiply the free variables in the decomposition are the basis vectors for the kernel of $A$. These vectors will be linearly independent and span the kernel.

## Worked Example

Let's find a basis for the kernel of the matrix:
$$ A = \begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 4 & -2 & 6 \\ -1 & -2 & 1 & -3 \end{pmatrix} $$

### Step 1: Form the Augmented Matrix

$$ \left[ \begin{array}{cccc|c} 1 & 2 & -1 & 3 & 0 \\ 2 & 4 & -2 & 6 & 0 \\ -1 & -2 & 1 & -3 & 0 \end{array} \right] $$

### Step 2: Row Reduce to RREF

Let's perform row operations:
*   $R_2 \leftarrow R_2 - 2R_1$
*   $R_3 \leftarrow R_3 + R_1$

$$ \left[ \begin{array}{cccc|c} 1 & 2 & -1 & 3 & 0 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{array} \right] $$
The matrix is now in RREF.

### Step 3: Identify Pivot and Free Variables

The variables correspond to the columns of $A$: $x_1, x_2, x_3, x_4$.
The first column has a leading 1, so $x_1$ is a pivot variable.
The columns for $x_2, x_3, x_4$ do not have leading 1s, so they are free variables.

### Step 4: Express Pivot Variables in Terms of Free Variables

The RREF gives us the equation:
$1x_1 + 2x_2 - 1x_3 + 3x_4 = 0$

Solving for the pivot variable $x_1$:
$x_1 = -2x_2 + x_3 - 3x_4$

The other variables ($x_2, x_3, x_4$) can take any real value.

### Step 5: Decompose the Solution Vector

The general solution vector $x$ can be written as:
$$ x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} -2x_2 + x_3 - 3x_4 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} $$
Now, we can decompose this vector based on the free variables:
$$ x = \begin{pmatrix} -2x_2 \\ x_2 \\ 0 \\ 0 \end{pmatrix} + \begin{pmatrix} x_3 \\ 0 \\ x_3 \\ 0 \end{pmatrix} + \begin{pmatrix} -3x_4 \\ 0 \\ 0 \\ x_4 \end{pmatrix} $$
Factor out the free variables:
$$ x = x_2 \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + x_3 \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \end{pmatrix} + x_4 \begin{pmatrix} -3 \\ 0 \\ 0 \\ 1 \end{pmatrix} $$

### Step 6: Extract the Basis Vectors

The vectors multiplying the free variables $x_2, x_3, x_4$ form a basis for the kernel of $A$.
Let:
$$ v_1 = \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \quad v_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \\ 0 \end{pmatrix}, \quad v_3 = \begin{pmatrix} -3 \\ 0 \\ 0 \\ 1 \end{pmatrix} $$

Therefore, a basis for $\text{ker}(A)$ is $\{v_1, v_2, v_3\}$.

## Key Takeaways

*   The kernel of a matrix $A$ is the set of all solutions to $Ax=0$.
*   Deriving a basis for the kernel involves solving the homogeneous system and expressing the solution in terms of free variables.
*   The vectors that multiply the free variables in the general solution form a basis for the kernel.
*   The number of vectors in the basis for the kernel (the dimension of the kernel, also called the nullity of $A$) is equal to the number of free variables.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/kernel-basis-derivation|Kernel basis derivation]]
