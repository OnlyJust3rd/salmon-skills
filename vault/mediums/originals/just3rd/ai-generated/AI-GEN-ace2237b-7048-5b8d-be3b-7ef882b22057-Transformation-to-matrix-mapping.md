---
type: "medium"
title: "Mapping Linear Transformations to Matrices"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/linear-transformations/microskills/transformation-to-matrix-mapping|transformation-to-matrix-mapping]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/linear-transformations/linear-transformations|linear-transformations]]"
learning-time-in-minutes: 5
---
# Mapping Linear Transformations to Matrices

This lesson focuses on understanding how to convert a linear transformation into its corresponding matrix representation. This is a fundamental step in working with linear transformations and allows us to leverage the power of matrix algebra to analyze and compute their effects.

## What is a Matrix Representation?

A linear transformation is a function between vector spaces that preserves vector addition and scalar multiplication. When we talk about the *matrix representation* of a linear transformation, we're essentially finding a matrix that, when multiplied by a vector, produces the same result as applying the linear transformation to that vector.

### Key Idea: Using Basis Vectors

The core idea behind constructing a matrix representation relies on understanding what the linear transformation does to the basis vectors of the input vector space. If we know where each basis vector is mapped, we can determine where any arbitrary vector is mapped.

Let $T: V \to W$ be a linear transformation, where $V$ and $W$ are vector spaces.
Let $B = \{v_1, v_2, \dots, v_n\}$ be a basis for $V$, and $C = \{w_1, w_2, \dots, w_m\}$ be a basis for $W$.

The matrix representation of $T$ with respect to bases $B$ and $C$, denoted as $[T]_{C \leftarrow B}$, will be an $m \times n$ matrix. Each column of this matrix will be the coordinate vector of $T(v_j)$ with respect to the basis $C$, for $j = 1, 2, \dots, n$.

$$
[T]_{C \leftarrow B} = \begin{bmatrix}
[T(v_1)]_C & [T(v_2)]_C & \cdots & [T(v_n)]_C
\end{bmatrix}
$$

Here, $[u]_C$ denotes the coordinate vector of vector $u$ with respect to basis $C$.

## The Process: Step-by-Step

To construct the matrix representation of a linear transformation $T: V \to W$, follow these steps:

1.  **Identify the Bases:** Determine the standard or given bases for the input vector space $V$ and the output vector space $W$. For $\mathbb{R}^n$, the standard basis is usually $\{e_1, e_2, \dots, e_n\}$, where $e_i$ is a vector with a 1 in the $i$-th position and 0s elsewhere.

2.  **Apply the Transformation to Each Basis Vector of V:** For each basis vector $v_j$ in the basis of $V$, compute $T(v_j)$. This will result in a vector in the output space $W$.

3.  **Express Each Resulting Vector in the Basis of W:** For each $T(v_j)$ you computed, express it as a linear combination of the basis vectors of $W$. This gives you the coordinate vector $[T(v_j)]_C$.

4.  **Form the Matrix:** Construct the matrix where the $j$-th column is the coordinate vector $[T(v_j)]_C$.

## Worked Example

Let's find the matrix representation of the linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$ defined by:
$$ T(x, y) = (x + y, 2x - y, 3y) $$
with respect to the standard bases for $\mathbb{R}^2$ and $\mathbb{R}^3$.

**Step 1: Identify the Bases**
*   For $V = \mathbb{R}^2$, the standard basis is $B = \{e_1, e_2\} = \{(1, 0), (0, 1)\}$.
*   For $W = \mathbb{R}^3$, the standard basis is $C = \{f_1, f_2, f_3\} = \{(1, 0, 0), (0, 1, 0), (0, 0, 1)\}$.

**Step 2: Apply T to Basis Vectors of V**
*   For $e_1 = (1, 0)$:
    $T(1, 0) = (1 + 0, 2(1) - 0, 3(0)) = (1, 2, 0)$.
*   For $e_2 = (0, 1)$:
    $T(0, 1) = (0 + 1, 2(0) - 1, 3(1)) = (1, -1, 3)$.

**Step 3: Express Results in Basis of W**
Since we are using the standard basis for $\mathbb{R}^3$, the coordinate vectors are simply the vectors themselves:
*   $T(1, 0) = (1, 2, 0)$. The coordinate vector with respect to $C$ is $[T(e_1)]_C = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}$.
*   $T(0, 1) = (1, -1, 3)$. The coordinate vector with respect to $C$ is $[T(e_2)]_C = \begin{bmatrix} 1 \\ -1 \\ 3 \end{bmatrix}$.

**Step 4: Form the Matrix**
The matrix representation $[T]_{C \leftarrow B}$ will have $[T(e_1)]_C$ as its first column and $[T(e_2)]_C$ as its second column.

$$
[T]_{C \leftarrow B} = \begin{bmatrix}
1 & 1 \\
2 & -1 \\
0 & 3
\end{bmatrix}
$$

### Verification (Optional but Recommended)

To check if this matrix is correct, pick an arbitrary vector in $\mathbb{R}^2$, say $(x, y)$. First, express it in the basis of $V$:
$(x, y) = x(1, 0) + y(0, 1) = x e_1 + y e_2$.
The coordinate vector of $(x, y)$ with respect to $B$ is $[(x, y)]_B = \begin{bmatrix} x \\ y \end{bmatrix}$.

Now, multiply the matrix representation by this coordinate vector:
$$
[T]_{C \leftarrow B} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix}
1 & 1 \\
2 & -1 \\
0 & 3
\end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix}
1x + 1y \\
2x - 1y \\
0x + 3y
\end{bmatrix} = \begin{bmatrix}
x + y \\
2x - y \\
3y
\end{bmatrix}
$$
This resulting column vector represents the coordinates of $T(x, y)$ with respect to the basis $C$. Since $C$ is the standard basis for $\mathbb{R}^3$, this vector directly corresponds to $T(x, y) = (x + y, 2x - y, 3y)$, which matches the original definition of the transformation.

## Common Pitfalls

*   **Incorrect Basis Order:** Ensure you are using the correct basis vectors and that their order is consistent when forming the matrix.
*   **Confusing Input and Output Spaces:** Remember that the number of rows in the matrix is determined by the dimension of the output space, and the number of columns is determined by the dimension of the input space.
*   **Errors in Coordinate Vector Calculation:** When dealing with non-standard bases, correctly finding the coefficients of the linear combination can be tricky. Double-check these calculations.

## Supports

- [[skills/mathematics/linear-algebra/linear-transformations/microskills/transformation-to-matrix-mapping|Transformation-to-matrix mapping]]
