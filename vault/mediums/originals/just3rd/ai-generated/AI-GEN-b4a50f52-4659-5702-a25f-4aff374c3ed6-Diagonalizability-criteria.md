---
type: "medium"
title: "Diagonalizability Criteria"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/diagonalizability-criteria|diagonalizability-criteria]]"
learning-time-in-minutes: 5
---
# Diagonalizability Criteria

This lesson focuses on understanding the conditions that determine if a matrix can be diagonalized. Diagonalization is a powerful technique in linear algebra, particularly useful in spectral analysis and matrix decomposition, as it simplifies many matrix operations.

## What is Diagonalization?

A matrix $A$ is said to be **diagonalizable** if it is similar to a diagonal matrix $D$. This means there exists an invertible matrix $P$ such that:

$$
A = PDP^{-1}
$$

where $D$ is a diagonal matrix. The diagonal entries of $D$ are the eigenvalues of $A$, and the columns of $P$ are the corresponding eigenvectors of $A$.

## Conditions for Diagonalizability

For an $n \times n$ matrix $A$, the following conditions are **necessary and sufficient** for $A$ to be diagonalizable:

### Condition 1: Existence of a Full Set of Eigenvectors

An $n \times n$ matrix $A$ is diagonalizable if and only if there exists a set of $n$ linearly independent eigenvectors for $A$.

This means that the **geometric multiplicity** of each eigenvalue must equal its **algebraic multiplicity**.

*   **Algebraic Multiplicity:** The number of times an eigenvalue appears as a root of the characteristic polynomial of the matrix.
*   **Geometric Multiplicity:** The dimension of the eigenspace corresponding to that eigenvalue. The eigenspace is the null space of the matrix $(A - \lambda I)$, where $\lambda$ is the eigenvalue and $I$ is the identity matrix.

**In simpler terms:** If you have an $n \times n$ matrix, you need to be able to find $n$ distinct eigenvectors that are not related to each other in a way that makes them dependent.

### Condition 2: Sum of Geometric Multiplicities Equals $n$

An $n \times n$ matrix $A$ is diagonalizable if and only if the sum of the geometric multiplicities of all its distinct eigenvalues is equal to $n$.

$$
\sum_{i=1}^{k} \text{geom_mult}(\lambda_i) = n
$$

where $\lambda_1, \lambda_2, \dots, \lambda_k$ are the distinct eigenvalues of $A$.

**Key Relationship:** For any eigenvalue $\lambda$, we always have:
$$
1 \le \text{geom_mult}(\lambda) \le \text{alg_mult}(\lambda)
$$

Therefore, if for every eigenvalue, the geometric multiplicity equals the algebraic multiplicity, then the sum of the geometric multiplicities will necessarily equal the sum of the algebraic multiplicities, which in turn equals $n$ (the dimension of the matrix).

### Condition 3: Distinct Eigenvalues (A Sufficient, but Not Necessary Condition)

If an $n \times n$ matrix $A$ has $n$ distinct eigenvalues, then $A$ is guaranteed to be diagonalizable.

**Why this is only sufficient:** A matrix can be diagonalizable even if it has repeated eigenvalues, as long as the geometric multiplicity matches the algebraic multiplicity for each eigenvalue.

### Condition 4: Symmetric Matrices

A real symmetric matrix ($A^T = A$) is always diagonalizable. Furthermore, its eigenvectors corresponding to distinct eigenvalues are orthogonal, and it is possible to form an orthonormal basis of eigenvectors.

This is a very useful shortcut: if you encounter a real symmetric matrix, you immediately know it's diagonalizable.

## How to Check for Diagonalizability

To determine if an $n \times n$ matrix $A$ is diagonalizable, you can follow these steps:

1.  **Find the eigenvalues:** Solve the characteristic equation $\det(A - \lambda I) = 0$ to find all eigenvalues $\lambda_i$.
2.  **Determine the algebraic multiplicities:** Count how many times each distinct eigenvalue appears as a root of the characteristic polynomial.
3.  **Find the geometric multiplicities:** For each distinct eigenvalue $\lambda_i$, find the dimension of the null space of $(A - \lambda_i I)$. This is done by finding the number of free variables when solving $(A - \lambda_i I)\mathbf{x} = \mathbf{0}$.
4.  **Compare multiplicities:** For $A$ to be diagonalizable, the geometric multiplicity of each eigenvalue must equal its algebraic multiplicity.
5.  **Check the sum:** Alternatively, ensure that the sum of all geometric multiplicities equals $n$.
6.  **Consider special cases:** If the matrix has $n$ distinct eigenvalues or if it's a real symmetric matrix, it is diagonalizable.

## Example

Let's check if the following matrix is diagonalizable:

$$
A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}
$$

1.  **Eigenvalues:**
    The characteristic polynomial is $\det(A - \lambda I) = \det \begin{pmatrix} 2-\lambda & 1 \\ 0 & 2-\lambda \end{pmatrix} = (2-\lambda)^2$.
    The only eigenvalue is $\lambda = 2$.

2.  **Algebraic Multiplicity:**
    The eigenvalue $\lambda = 2$ appears twice, so its algebraic multiplicity is 2.

3.  **Geometric Multiplicity:**
    We need to find the dimension of the null space of $(A - 2I)$:
    $$
    A - 2I = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix} - \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}
    $$
    We solve $(A - 2I)\mathbf{x} = \mathbf{0}$:
    $$
    \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
    $$
    This gives us the equation $x_2 = 0$. $x_1$ is a free variable.
    The null space is spanned by the vector $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
    The dimension of the null space (the geometric multiplicity) is 1.

4.  **Compare Multiplicities:**
    Algebraic Multiplicity of $\lambda = 2$ is 2.
    Geometric Multiplicity of $\lambda = 2$ is 1.

Since the geometric multiplicity (1) is not equal to the algebraic multiplicity (2), the matrix $A$ is **not diagonalizable**.

## Key Takeaways

*   An $n \times n$ matrix is diagonalizable if and only if it has $n$ linearly independent eigenvectors.
*   This is equivalent to saying that for every eigenvalue, its geometric multiplicity equals its algebraic multiplicity.
*   A matrix with $n$ distinct eigenvalues is always diagonalizable.
*   Real symmetric matrices are always diagonalizable.

## Supports

- [[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/diagonalizability-criteria|Diagonalizability criteria]]
