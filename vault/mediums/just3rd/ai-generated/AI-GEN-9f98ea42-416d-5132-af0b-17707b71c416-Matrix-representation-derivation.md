---
type: "medium"
title: "Deriving the Matrix Representation of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/linear-transformations/microskills/matrix-representation-derivation|matrix-representation-derivation]]"
---
# Deriving the Matrix Representation of a Linear Transformation

This lesson focuses on the practical skill of deriving the matrix representation for a linear transformation. Understanding this process allows us to translate linear transformations from the abstract realm of vector spaces into concrete matrix operations.

## The Core Idea

A linear transformation $T: V \to W$ maps vectors from one vector space $V$ to another vector space $W$. If $V$ and $W$ are finite-dimensional vector spaces, we can represent this transformation as a matrix multiplication. The key to deriving this matrix is understanding how the transformation acts on the **basis vectors** of the input space.

Let $B_V = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ be a basis for the input vector space $V$, and $B_W = \{\mathbf{w}_1, \mathbf{w}_2, \dots, \mathbf{w}_m\}$ be a basis for the output vector space $W$.

The process involves:
1. Applying the linear transformation $T$ to each basis vector of $V$.
2. Expressing each resulting vector in $W$ as a linear combination of the basis vectors of $W$.
3. Using the coefficients of these linear combinations to construct the columns of the matrix representation.

## Step-by-Step Derivation

Let's break down the process into actionable steps.

**Step 1: Identify the Bases**
Determine the standard bases (or any specified bases) for the input vector space $V$ and the output vector space $W$. For $\mathbb{R}^n$, the standard basis is typically $\{\mathbf{e}_1, \mathbf{e}_2, \dots, \mathbf{e}_n\}$, where $\mathbf{e}_i$ is a vector with a 1 in the $i$-th position and 0s elsewhere.

**Step 2: Apply the Transformation to Basis Vectors**
For each basis vector $\mathbf{v}_j$ in the basis of $V$, compute $T(\mathbf{v}_j)$. This will result in a vector in $W$.

**Step 3: Express Transformed Basis Vectors in the Output Basis**
For each vector $T(\mathbf{v}_j)$ obtained in Step 2, write it as a linear combination of the basis vectors of $W$. That is, find scalars $c_{1j}, c_{2j}, \dots, c_{mj}$ such that:
$$ T(\mathbf{v}_j) = c_{1j}\mathbf{w}_1 + c_{2j}\mathbf{w}_2 + \dots + c_{mj}\mathbf{w}_m $$

**Step 4: Construct the Matrix Columns**
The matrix representation of $T$, let's call it $A$, will have dimensions $m \times n$ (the dimension of $W$ by the dimension of $V$). The $j$-th column of matrix $A$ is formed by the coefficients $c_{1j}, c_{2j}, \dots, c_{mj}$ from Step 3.

$$ A = \begin{pmatrix}
c_{11} & c_{12} & \dots & c_{1n} \\
c_{21} & c_{22} & \dots & c_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
c_{m1} & c_{m2} & \dots & c_{mn}
\end{pmatrix} $$

## Worked Example

Let's derive the matrix representation for a linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$ defined by:
$$ T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + y \\ 2x \\ y - x \end{pmatrix} $$

**Step 1: Identify the Bases**
*   Input space $V = \mathbb{R}^2$. Standard basis $B_V = \{\mathbf{e}_1, \mathbf{e}_2\} = \left\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}\right\}$.
*   Output space $W = \mathbb{R}^3$. Standard basis $B_W = \{\mathbf{f}_1, \mathbf{f}_2, \mathbf{f}_3\} = \left\{\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}\right\}$.

**Step 2: Apply the Transformation to Basis Vectors**
*   Apply $T$ to $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$:
    $$ T\left(\begin{pmatrix} 1 \\ 0 \end{pmatrix}\right) = \begin{pmatrix} 1 + 0 \\ 2(1) \\ 0 - 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix} $$
*   Apply $T$ to $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$:
    $$ T\left(\begin{pmatrix} 0 \\ 1 \end{pmatrix}\right) = \begin{pmatrix} 0 + 1 \\ 2(0) \\ 1 - 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} $$

**Step 3: Express Transformed Basis Vectors in the Output Basis**
Since we are using the standard basis for $\mathbb{R}^3$, expressing the resulting vectors is straightforward. The coefficients are simply the components of the vectors themselves.

*   For $T(\mathbf{e}_1) = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$:
    $$ T(\mathbf{e}_1) = 1 \cdot \mathbf{f}_1 + 2 \cdot \mathbf{f}_2 + (-1) \cdot \mathbf{f}_3 $$
    The coefficients are (1, 2, -1).

*   For $T(\mathbf{e}_2) = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$:
    $$ T(\mathbf{e}_2) = 1 \cdot \mathbf{f}_1 + 0 \cdot \mathbf{f}_2 + 1 \cdot \mathbf{f}_3 $$
    The coefficients are (1, 0, 1).

**Step 4: Construct the Matrix Columns**
The first column of our matrix $A$ will be the coefficients from $T(\mathbf{e}_1)$, and the second column will be the coefficients from $T(\mathbf{e}_2)$.

$$ A = \begin{pmatrix}
1 & 1 \\
2 & 0 \\
-1 & 1
\end{pmatrix} $$

This $3 \times 2$ matrix $A$ is the matrix representation of $T$ with respect to the standard bases of $\mathbb{R}^2$ and $\mathbb{R}^3$.

## Verification (Optional but Recommended)

To verify, take an arbitrary vector in $\mathbb{R}^2$, say $\begin{pmatrix} x \\ y \end{pmatrix}$, and see if multiplying it by $A$ yields the same result as applying $T$.

$$ A \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix}
1 & 1 \\
2 & 0 \\
-1 & 1
\end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix}
1x + 1y \\
2x + 0y \\
-1x + 1y
\end{pmatrix} = \begin{pmatrix}
x + y \\
2x \\
y - x
\end{pmatrix} $$
This matches the definition of $T\begin{pmatrix} x \\ y \end{pmatrix}$, confirming our matrix representation is correct.

## Potential Pitfalls

*   **Incorrect Basis:** Always ensure you are using the correct bases for both the input and output spaces. If non-standard bases are specified, Step 3 becomes more involved as you'll need to solve a system of linear equations to find the coefficients.
*   **Calculation Errors:** Simple arithmetic mistakes when applying the transformation or solving for coefficients can lead to an incorrect matrix. Double-checking your calculations is crucial.
*   **Dimension Mismatch:** The resulting matrix should have dimensions (dimension of output space) $\times$ (dimension of input space). If not, review your steps.

## Supports

- [[skills/mathematics/linear-transformations/microskills/matrix-representation-derivation|Matrix representation derivation]]
