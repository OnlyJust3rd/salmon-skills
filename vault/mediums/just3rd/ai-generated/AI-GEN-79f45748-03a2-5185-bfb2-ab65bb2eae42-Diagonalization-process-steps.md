---
type: "medium"
title: "The Diagonalization Process: Finding P and D"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/diagonalization-process-steps|diagonalization-process-steps]]"
---
# The Diagonalization Process: Finding P and D

In the realm of spectral analysis, diagonalizing a matrix is a fundamental process that simplifies its representation. This process allows us to transform a matrix into a diagonal matrix, which is significantly easier to work with, especially when dealing with powers of matrices or solving systems of linear differential equations. This lesson focuses on understanding the steps involved in finding the matrices $P$ and $D$ that achieve this diagonalization.

## Why Diagonalize?

Recall that a square matrix $A$ is diagonalizable if it can be expressed as:

$$
A = PDP^{-1}
$$

where:
*   $D$ is a diagonal matrix.
*   $P$ is an invertible matrix.

The entries on the diagonal of $D$ are the eigenvalues of $A$, and the columns of $P$ are the corresponding eigenvectors of $A$. Diagonalizing a matrix is useful because powers of $A$ become easy to compute: $A^k = PD^kP^{-1}$, and $D^k$ is simply a diagonal matrix with the eigenvalues raised to the power of $k$.

## The Steps to Diagonalization

To diagonalize a matrix $A$, we need to perform the following steps:

### Step 1: Find the Eigenvalues of Matrix A

Eigenvalues ($\lambda$) are the scalar values that satisfy the characteristic equation:

$$
\det(A - \lambda I) = 0
$$

where $I$ is the identity matrix of the same dimension as $A$. Solving this equation will give you the eigenvalues of $A$.

### Step 2: Find the Eigenvectors for Each Eigenvalue

For each eigenvalue $\lambda_i$ found in Step 1, we need to find its corresponding eigenvectors ($v_i$). Eigenvectors are non-zero vectors that satisfy:

$$
(A - \lambda_i I)v_i = 0
$$

This is equivalent to solving a system of linear equations. The solutions for $v_i$ will form a basis for the eigenspace corresponding to $\lambda_i$. You will need to find a set of linearly independent eigenvectors.

### Step 3: Construct the Diagonal Matrix D

The diagonal matrix $D$ is constructed by placing the eigenvalues of $A$ on its main diagonal. The order of the eigenvalues on the diagonal of $D$ matters, as it dictates the order of the corresponding eigenvectors in matrix $P$.

$$
D = \begin{pmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n
\end{pmatrix}
$$

### Step 4: Construct the Matrix P

The matrix $P$ is formed by using the linearly independent eigenvectors found in Step 2 as its columns. The order of the eigenvectors in $P$ must correspond to the order of the eigenvalues in $D$. For example, if $\lambda_1$ is the first eigenvalue in $D$, then the first column of $P$ must be the eigenvector corresponding to $\lambda_1$.

$$
P = \begin{pmatrix} | & | & & | \\ v_1 & v_2 & \cdots & v_n \\ | & | & & | \end{pmatrix}
$$

### Step 5: Verify (Optional but Recommended)

To ensure your diagonalization is correct, you can verify that $A = PDP^{-1}$. A simpler check is to verify that $AP = PD$.

## Worked Example

Let's diagonalize the following matrix:

$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}
$$

### Step 1: Find Eigenvalues

Characteristic equation: $\det(A - \lambda I) = 0$

$$
\det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = 0
$$

$$
(4-\lambda)(3-\lambda) - (1)(2) = 0
$$

$$
12 - 4\lambda - 3\lambda + \lambda^2 - 2 = 0
$$

$$
\lambda^2 - 7\lambda + 10 = 0
$$

Factoring the quadratic equation:
$$
(\lambda - 5)(\lambda - 2) = 0
$$

So, the eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.

### Step 2: Find Eigenvectors

For $\lambda_1 = 5$:
$$
(A - 5I)v_1 = 0
$$

$$
\begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$$
\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

From the first row, $-x + y = 0$, which means $y = x$.
A possible eigenvector is $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda_2 = 2$:
$$
(A - 2I)v_2 = 0
$$

$$
\begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

$$
\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

From the first row, $2x + y = 0$, which means $y = -2x$.
A possible eigenvector is $v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

### Step 3: Construct D

Using the eigenvalues $\lambda_1 = 5$ and $\lambda_2 = 2$:

$$
D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}
$$

### Step 4: Construct P

Using the corresponding eigenvectors $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$:

$$
P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}
$$

### Step 5: Verify (AP = PD)

$$
AP = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} = \begin{pmatrix} 4(1)+1(1) & 4(1)+1(-2) \\ 2(1)+3(1) & 2(1)+3(-2) \end{pmatrix} = \begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix}
$$

$$
PD = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1(5)+1(0) & 1(0)+1(2) \\ 1(5)+(-2)(0) & 1(0)+(-2)(2) \end{pmatrix} = \begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix}
$$

Since $AP = PD$, our diagonalization is correct. The matrix $A$ is diagonalized by $P$ and $D$.

## Supports

- [[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/diagonalization-process-steps|Diagonalization process steps]]
