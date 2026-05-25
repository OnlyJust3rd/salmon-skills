---
type: "medium"
title: "Symmetric Matrix Representation of Quadratic Forms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/symmetric-matrix-representation|symmetric-matrix-representation]]"
learning-time-in-minutes: 5
---
# Symmetric Matrix Representation of Quadratic Forms

A quadratic form is a fundamental concept in linear algebra with applications in various fields, including optimization, statistics, and geometry. At its core, a quadratic form is a polynomial where each term is of degree two. We're going to explore how these forms can be elegantly represented using matrices, specifically symmetric matrices. This understanding is key to analyzing the properties of quadratic forms.

## What is a Quadratic Form?

Let's start with a clear definition.

A **quadratic form** in $n$ variables $x_1, x_2, \dots, x_n$ is a homogeneous polynomial of degree two in these variables. It can be written as:

$$
Q(x_1, x_2, \dots, x_n) = \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j
$$

where $a_{ij}$ are constants.

For example, in two variables $x_1$ and $x_2$, a quadratic form looks like:
$$
Q(x_1, x_2) = ax_1^2 + bx_1x_2 + cx_2^2
$$

And in three variables $x_1, x_2, x_3$:
$$
Q(x_1, x_2, x_3) = ax_1^2 + bx_2^2 + cx_3^2 + dx_1x_2 + ex_1x_3 + fx_2x_3
$$

## Matrix Representation: The Core Idea

The power of linear algebra comes from representing algebraic expressions using matrices. A quadratic form can be neatly expressed using matrix multiplication. For a quadratic form in $n$ variables, we can use a vector $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$.

The quadratic form $Q(\mathbf{x})$ can be written as:

$$
Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}
$$

where $\mathbf{x}^T$ is the transpose of $\mathbf{x}$, and $A$ is an $n \times n$ matrix.

Let's expand this for a 2x2 case to see how it relates to our polynomial:
$$
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}, \quad \mathbf{x}^T = \begin{bmatrix} x_1 & x_2 \end{bmatrix}
$$

Let $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$. Then:
$$
\mathbf{x}^T A \mathbf{x} = \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}
$$
$$
= \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} ax_1 + bx_2 \\ cx_1 + dx_2 \end{bmatrix}
$$
$$
= x_1(ax_1 + bx_2) + x_2(cx_1 + dx_2)
$$
$$
= ax_1^2 + bx_1x_2 + cx_1x_2 + dx_2^2
$$
$$
= ax_1^2 + (b+c)x_1x_2 + dx_2^2
$$

Comparing this to our general quadratic form $ax_1^2 + bx_1x_2 + cx_2^2$, we can see that the coefficients of the quadratic form are related to the elements of matrix $A$. Specifically, the diagonal elements of $A$ ($a_{11}, a_{22}, \dots$) correspond to the coefficients of the squared terms ($x_i^2$), and the off-diagonal elements relate to the cross-product terms ($x_ix_j$ for $i \neq j$).

## The Crucial Role of Symmetric Matrices

While we *can* represent a quadratic form with any matrix $A$, there's a significant advantage to using a **symmetric matrix**. A symmetric matrix is a square matrix that is equal to its transpose ($A = A^T$). This means $a_{ij} = a_{ji}$ for all $i$ and $j$.

Let's see why this is important. Consider our previous example:
$$
ax_1^2 + (b+c)x_1x_2 + dx_2^2
$$
If we want to represent this using $\mathbf{x}^T A \mathbf{x}$, we need to choose the matrix $A$ such that its elements sum up correctly. For instance, we could have $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, as we saw. However, we could also use $A' = \begin{bmatrix} a & b+c \\ 0 & d \end{bmatrix}$ or $A'' = \begin{bmatrix} a & 0 \\ b+c & d \end{bmatrix}$.

The key insight is that for *any* quadratic form, we can find a *unique* symmetric matrix $A$ that represents it. We do this by distributing the coefficients of the cross-product terms equally between the symmetric positions.

If our quadratic form is $\sum_{i=1}^{n} \sum_{j=1}^{n} c_{ij} x_i x_j$, we construct the symmetric matrix $A$ as follows:
*   For $i = j$ (diagonal elements): $a_{ii} = c_{ii}$.
*   For $i \neq j$ (off-diagonal elements): $a_{ij} = a_{ji} = \frac{c_{ij} + c_{ji}}{2}$.

Notice that in the general definition of a quadratic form $\sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j$, the coefficient $a_{ij}$ in this summation isn't necessarily symmetric. However, when we shift to the matrix representation $\mathbf{x}^T A \mathbf{x}$, we *insist* on $A$ being symmetric. If the original polynomial definition has a single coefficient for $x_ix_j$, say $k_{ij}x_ix_j$ (where $i \neq j$), this term will contribute to both $a_{ij}$ and $a_{ji}$ in the symmetric matrix, with each getting $k_{ij}/2$.

### Example: Symmetric Matrix Representation

Let's consider the quadratic form:
$$
Q(x_1, x_2, x_3) = 2x_1^2 + 5x_2^2 - x_3^2 + 6x_1x_2 - 4x_1x_3 + 8x_2x_3
$$

We want to represent this as $\mathbf{x}^T A \mathbf{x}$, where $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$ and $A$ is a symmetric $3 \times 3$ matrix.

1.  **Diagonal elements ($a_{ii}$):** These correspond to the squared terms.
    *   $a_{11}$ corresponds to $2x_1^2$, so $a_{11} = 2$.
    *   $a_{22}$ corresponds to $5x_2^2$, so $a_{22} = 5$.
    *   $a_{33}$ corresponds to $-x_3^2$, so $a_{33} = -1$.

2.  **Off-diagonal elements ($a_{ij}$ for $i \neq j$):** These come from the cross-product terms. We need to ensure $a_{ij} = a_{ji}$.
    *   For $x_1x_2$: We have a $6x_1x_2$ term. So, $a_{12} + a_{21} = 6$. Since $A$ is symmetric, $a_{12} = a_{21}$. Therefore, $2a_{12} = 6 \implies a_{12} = 3$. So, $a_{12} = 3$ and $a_{21} = 3$.
    *   For $x_1x_3$: We have a $-4x_1x_3$ term. So, $a_{13} + a_{31} = -4$. Since $A$ is symmetric, $a_{13} = a_{31}$. Therefore, $2a_{13} = -4 \implies a_{13} = -2$. So, $a_{13} = -2$ and $a_{31} = -2$.
    *   For $x_2x_3$: We have an $8x_2x_3$ term. So, $a_{23} + a_{32} = 8$. Since $A$ is symmetric, $a_{23} = a_{32}$. Therefore, $2a_{23} = 8 \implies a_{23} = 4$. So, $a_{23} = 4$ and $a_{32} = 4$.

Putting it all together, the symmetric matrix $A$ is:
$$
A = \begin{bmatrix}
2 & 3 & -2 \\
3 & 5 & 4 \\
-2 & 4 & -1
\end{bmatrix}
$$

You can verify this by calculating $\mathbf{x}^T A \mathbf{x}$ with this matrix $A$, and you should get back the original quadratic form.

## Why is this Important?

Representing a quadratic form with a symmetric matrix is not just an elegant rewriting. Symmetric matrices have a rich set of properties (like having real eigenvalues and orthogonal eigenvectors) that directly translate into properties of the quadratic form. This matrix representation is the gateway to analyzing the definiteness of quadratic forms, which is crucial for tasks like determining if a function has a local minimum or maximum at a critical point.

By understanding how to associate a quadratic form with its unique symmetric matrix, you lay the groundwork for deeper analysis and application of these powerful mathematical tools.

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/symmetric-matrix-representation|Symmetric matrix representation]]
