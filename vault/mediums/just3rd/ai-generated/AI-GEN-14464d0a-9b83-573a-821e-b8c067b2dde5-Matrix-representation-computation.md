---
type: "medium"
title: "Computing the Matrix Representation of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/linear-transformations/microskills/matrix-representation-computation|Matrix representation computation]]"
---
# Computing the Matrix Representation of a Linear Transformation

This lesson focuses on the practical skill of **computing the matrix representation** for a linear transformation. This is a fundamental technique when working with linear transformations between vector spaces, allowing us to translate the geometric action of the transformation into an algebraic form we can easily manipulate.

## Why Compute a Matrix Representation?

Once we have the matrix representation of a linear transformation, we can:

*   **Perform the transformation efficiently:** Matrix-vector multiplication is a straightforward computational process.
*   **Combine transformations:** Composing linear transformations becomes matrix multiplication.
*   **Analyze the transformation:** Properties like invertibility, kernel, and image can be readily determined from the matrix.
*   **Implement transformations in software:** Matrices are the standard way to represent linear transformations in computer graphics, machine learning, and scientific computing.

## The Process: Step-by-Step

Let's say we have a linear transformation $T: V \to W$, where $V$ and $W$ are vector spaces. To find the matrix representation of $T$ with respect to chosen bases for $V$ and $W$, we follow these steps:

1.  **Choose Bases:** Select an ordered basis for the domain vector space $V$, say $\mathcal{B}_V = \{ \mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n \}$, and an ordered basis for the codomain vector space $W$, say $\mathcal{B}_W = \{ \mathbf{w}_1, \mathbf{w}_2, \dots, \mathbf{w}_m \}$. The dimensions of $V$ and $W$ will be $n$ and $m$ respectively.

2.  **Apply the Transformation to Basis Vectors:** Apply the linear transformation $T$ to each basis vector of $\mathcal{B}_V$. This will result in a set of vectors in $W$:
    $$
    T(\mathbf{v}_1), T(\mathbf{v}_2), \dots, T(\mathbf{v}_n)
    $$

3.  **Express Results as Linear Combinations:** For each resulting vector $T(\mathbf{v}_j)$, express it as a linear combination of the basis vectors in $\mathcal{B}_W$. That is, for each $j = 1, \dots, n$:
    $$
    T(\mathbf{v}_j) = c_{1j}\mathbf{w}_1 + c_{2j}\mathbf{w}_2 + \dots + c_{mj}\mathbf{w}_m
    $$
    The coefficients $c_{1j}, c_{2j}, \dots, c_{mj}$ are scalars.

4.  **Construct the Matrix:** The matrix representation of $T$, denoted as $[T]_{\mathcal{B}_W}^{\mathcal{B}_V}$, is an $m \times n$ matrix where the $j$-th column is formed by the coordinate vectors of $T(\mathbf{v}_j)$ with respect to the basis $\mathcal{B}_W$.
    $$
    [T]_{\mathcal{B}_W}^{\mathcal{B}_V} = \begin{bmatrix}
    c_{11} & c_{12} & \dots & c_{1n} \\
    c_{21} & c_{22} & \dots & c_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    c_{m1} & c_{m2} & \dots & c_{mn}
    \end{bmatrix}
    $$
    Notice that the coefficients for $T(\mathbf{v}_j)$ form the $j$-th column of the matrix.

## Worked Example

Let's find the matrix representation of a linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$.

**Transformation:** $T(x, y) = (x + y, 2x, y - x)$

**Step 1: Choose Bases**
We'll use the standard bases for both spaces:
*   For $\mathbb{R}^2$: $\mathcal{B}_{\mathbb{R}^2} = \{ \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix} \} = \{ \mathbf{e}_1, \mathbf{e}_2 \}$
*   For $\mathbb{R}^3$: $\mathcal{B}_{\mathbb{R}^3} = \{ \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} \} = \{ \mathbf{f}_1, \mathbf{f}_2, \mathbf{f}_3 \}$

Here, $n=2$ and $m=3$. Our resulting matrix will be $3 \times 2$.

**Step 2: Apply the Transformation to Basis Vectors**
*   Apply $T$ to $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$:
    $T\left(\begin{pmatrix} 1 \\ 0 \end{pmatrix}\right) = \begin{pmatrix} 1 + 0 \\ 2(1) \\ 0 - 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$

*   Apply $T$ to $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$:
    $T\left(\begin{pmatrix} 0 \\ 1 \end{pmatrix}\right) = \begin{pmatrix} 0 + 1 \\ 2(0) \\ 1 - 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$

**Step 3: Express Results as Linear Combinations**
Since we are using standard bases, expressing vectors as linear combinations is straightforward. The coordinate vector of a vector with respect to the standard basis is simply the vector itself.

*   $T(\mathbf{e}_1) = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$. In terms of $\mathcal{B}_{\mathbb{R}^3}$, this is $1\mathbf{f}_1 + 2\mathbf{f}_2 - 1\mathbf{f}_3$. The coordinate vector is $\begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$.

*   $T(\mathbf{e}_2) = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$. In terms of $\mathcal{B}_{\mathbb{R}^3}$, this is $1\mathbf{f}_1 + 0\mathbf{f}_2 + 1\mathbf{f}_3$. The coordinate vector is $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.

**Step 4: Construct the Matrix**
The first column of the matrix is the coordinate vector for $T(\mathbf{e}_1)$, and the second column is the coordinate vector for $T(\mathbf{e}_2)$.

$$
[T]_{\mathcal{B}_{\mathbb{R}^3}}^{\mathcal{B}_{\mathbb{R}^2}} = \begin{bmatrix}
1 & 1 \\
2 & 0 \\
-1 & 1
\end{bmatrix}
$$

This $3 \times 2$ matrix is the matrix representation of $T$ with respect to the standard bases.

## Verification (Optional but Recommended)

To check our work, we can take an arbitrary vector in $\mathbb{R}^2$, say $\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}$, compute $T(\mathbf{x})$ directly, and then compare it to the result of multiplying our matrix by the coordinate vector of $\mathbf{x}$ (which is $\begin{pmatrix} x \\ y \end{pmatrix}$ with respect to the standard basis).

*   Direct computation: $T(x, y) = (x + y, 2x, y - x)$. The coordinate vector in $\mathbb{R}^3$ is $\begin{pmatrix} x+y \\ 2x \\ y-x \end{pmatrix}$.

*   Matrix multiplication:
    $$
    \begin{bmatrix}
    1 & 1 \\
    2 & 0 \\
    -1 & 1
    \end{bmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 1x + 1y \\ 2x + 0y \\ -1x + 1y \end{pmatrix} = \begin{pmatrix} x+y \\ 2x \\ y-x \end{pmatrix}
    $$
The results match! This confirms our computed matrix representation is correct for the chosen bases.

## Supports

- [[skills/mathematics/linear-transformations/microskills/matrix-representation-computation|Matrix representation computation]]
