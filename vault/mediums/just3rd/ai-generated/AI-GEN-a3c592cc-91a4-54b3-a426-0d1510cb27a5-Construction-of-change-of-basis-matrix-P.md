---
type: "medium"
title: "Constructing the Change-of-Basis Matrix $P$"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/construction-of-change-of-basis-matrix-p|Construction of change-of-basis matrix P]]"
---
# Constructing the Change-of-Basis Matrix $P$

In our journey through spectral analysis and matrix decomposition, understanding how to diagonalize a matrix is a key outcome. A crucial step in this process is constructing the **change-of-basis matrix**, often denoted as $P$. This matrix allows us to transform from one basis to another, and in the context of diagonalization, it's built directly from the **eigenvectors** of the matrix we're working with.

## Why Eigenvectors for $P$?

Remember that an eigenvector of a matrix $A$ is a non-zero vector $v$ such that when $Av = \lambda v$, where $\lambda$ is a scalar. This equation tells us that when the matrix $A$ acts on its eigenvector $v$, the result is simply a scaled version of $v$. The direction of $v$ remains unchanged, only its magnitude is altered by the factor $\lambda$.

When we want to diagonalize a matrix $A$, we are looking for a diagonal matrix $D$ and an invertible matrix $P$ such that $A = PDP^{-1}$. The diagonal entries of $D$ will be the eigenvalues of $A$, and the columns of $P$ will be the corresponding eigenvectors.

The reason eigenvectors are perfect for forming $P$ is precisely because they "align" with the transformation defined by $A$. If the columns of $P$ are eigenvectors of $A$, then $AP$ will have a very special structure related to the eigenvalues. Let's see why.

## Building $P$ from Eigenvectors

Suppose a matrix $A$ has $n$ linearly independent eigenvectors, $v_1, v_2, \ldots, v_n$, with corresponding eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_n$.

We construct the matrix $P$ by placing these eigenvectors as its columns:

$$
P = \begin{bmatrix} | & | & & | \\ v_1 & v_2 & \cdots & v_n \\ | & | & & | \end{bmatrix}
$$

This means if $v_i = \begin{bmatrix} v_{i1} \\ v_{i2} \\ \vdots \\ v_{in} \end{bmatrix}$, then $P$ looks like:

$$
P = \begin{bmatrix} v_{11} & v_{21} & \cdots & v_{n1} \\ v_{12} & v_{22} & \cdots & v_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ v_{1n} & v_{2n} & \cdots & v_{nn} \end{bmatrix}
$$

The key property here is that $P$ is invertible if and only if its columns (the eigenvectors) are linearly independent. For diagonalization to be possible, we need $n$ linearly independent eigenvectors, which is a condition often met by symmetric matrices, for example.

## The Connection to $D$

Let's consider the product $AP$:

$$
AP = A \begin{bmatrix} v_1 & v_2 & \cdots & v_n \end{bmatrix}
$$

Using the distributive property of matrix multiplication and the definition of eigenvectors:

$$
AP = \begin{bmatrix} Av_1 & Av_2 & \cdots & Av_n \end{bmatrix}
$$

$$
AP = \begin{bmatrix} \lambda_1 v_1 & \lambda_2 v_2 & \cdots & \lambda_n v_n \end{bmatrix}
$$

Now, we can factor out the eigenvalues from each column:

$$
AP = \begin{bmatrix} v_1 & v_2 & \cdots & v_n \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix}
$$

Notice that the matrix on the right is a diagonal matrix, let's call it $D$, whose diagonal entries are the eigenvalues of $A$:

$$
D = \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix}
$$

So, we have derived a fundamental relationship:

$$
AP = PD
$$

If $P$ is invertible (which it is if the eigenvectors are linearly independent), we can multiply both sides by $P^{-1}$ on the right:

$$
APP^{-1} = PDP^{-1}
$$

$$
A = PDP^{-1}
$$

This is the essence of matrix diagonalization. The matrix $P$, formed by the eigenvectors, is the change-of-basis matrix that transforms $A$ into a simpler diagonal form $D$.

## Worked Example: Constructing $P$

Let's find the change-of-basis matrix $P$ for the following matrix $A$:

$$
A = \begin{bmatrix} 4 & -2 \\ 1 & 1 \end{bmatrix}
$$

First, we need to find the eigenvalues and eigenvectors of $A$.

1.  **Find Eigenvalues:**
    The characteristic equation is $\det(A - \lambda I) = 0$.
    $$
    \det \left( \begin{bmatrix} 4-\lambda & -2 \\ 1 & 1-\lambda \end{bmatrix} \right) = 0
    $$
    $$
    (4-\lambda)(1-\lambda) - (-2)(1) = 0
    $$
    $$
    4 - 4\lambda - \lambda + \lambda^2 + 2 = 0
    $$
    $$
    \lambda^2 - 5\lambda + 6 = 0
    $$
    $$
    (\lambda - 2)(\lambda - 3) = 0
    $$
    So, the eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 3$.

2.  **Find Eigenvectors:**
    *   **For $\lambda_1 = 2$:**
        Solve $(A - 2I)v_1 = 0$.
        $$
        \begin{bmatrix} 4-2 & -2 \\ 1 & 1-2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
        $$
        $$
        \begin{bmatrix} 2 & -2 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
        $$
        Both rows give the equation $x - y = 0$, or $x = y$.
        A simple eigenvector is $v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

    *   **For $\lambda_2 = 3$:**
        Solve $(A - 3I)v_2 = 0$.
        $$
        \begin{bmatrix} 4-3 & -2 \\ 1 & 1-3 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
        $$
        $$
        \begin{bmatrix} 1 & -2 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
        $$
        Both rows give the equation $x - 2y = 0$, or $x = 2y$.
        A simple eigenvector is $v_2 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$.

3.  **Construct $P$:**
    Now, we form the matrix $P$ by placing the eigenvectors as columns. The order matters, it should correspond to the order of eigenvalues in $D$. Let's use $v_1$ for $\lambda_1=2$ and $v_2$ for $\lambda_2=3$.

    $$
    P = \begin{bmatrix} v_1 & v_2 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 1 & 1 \end{bmatrix}
    $$

This matrix $P$ is our change-of-basis matrix. If we were to perform the diagonalization, the corresponding diagonal matrix $D$ would be:

$$
D = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} = \begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}
$$

And we would verify that $A = PDP^{-1}$.

## In Summary

The construction of the change-of-basis matrix $P$ for diagonalization is straightforward:
*   Find the eigenvectors of the matrix $A$.
*   Arrange these eigenvectors as the columns of $P$.
*   Ensure that the order of eigenvectors in $P$ matches the order of their corresponding eigenvalues in the diagonal matrix $D$.

This matrix $P$ is fundamental to understanding how a linear transformation, represented by $A$, can be simplified into a scaling operation along specific directions (defined by the eigenvectors) when viewed in a different coordinate system.

## Supports

- [[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/construction-of-change-of-basis-matrix-p|Construction of change-of-basis matrix P]]
