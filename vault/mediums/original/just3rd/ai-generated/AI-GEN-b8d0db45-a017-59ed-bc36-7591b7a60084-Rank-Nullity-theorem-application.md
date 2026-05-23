---
type: "medium"
title: "Applying the Rank-Nullity Theorem"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/linear-transformations/microskills/rank-nullity-theorem-application|rank-nullity-theorem-application]]"
learning-time-in-minutes: 5
---
# Applying the Rank-Nullity Theorem

This lesson focuses on applying the Rank-Nullity Theorem to understand the relationships between the dimensions of a linear transformation's kernel and range.

## The Rank-Nullity Theorem

The Rank-Nullity Theorem provides a fundamental connection between the dimensions of the kernel (null space) and the range (image) of a linear transformation.

Let $T: V \to W$ be a linear transformation, where $V$ and $W$ are finite-dimensional vector spaces. The theorem states:

$$
\dim(\text{Kernel}(T)) + \dim(\text{Range}(T)) = \dim(V)
$$

In simpler terms, the dimension of the input space ($V$) is equal to the sum of the dimension of the kernel (how many input vectors are mapped to the zero vector) and the dimension of the range (the dimension of the space spanned by the output vectors).

We often use the following terminology:
*   **Nullity of T:** This is the dimension of the kernel of $T$, denoted as $\text{nullity}(T)$.
*   **Rank of T:** This is the dimension of the range of $T$, denoted as $\text{rank}(T)$.

So, the Rank-Nullity Theorem can be written as:

$$
\text{nullity}(T) + \text{rank}(T) = \dim(V)
$$

### Key Takeaways:

*   If you know the dimension of the input space and the nullity, you can immediately find the rank.
*   If you know the dimension of the input space and the rank, you can immediately find the nullity.
*   This theorem is incredibly useful for analyzing linear transformations without exhaustively computing both the kernel and the range.

## Applying the Theorem: Worked Examples

Let's see how we can use the Rank-Nullity theorem in practice.

### Example 1: Finding the Rank

Consider the linear transformation $T: \mathbb{R}^3 \to \mathbb{R}^2$ defined by its matrix representation:

$$
A = \begin{pmatrix}
1 & 2 & 3 \\
0 & 1 & 1
\end{pmatrix}
$$

We want to find the rank of $T$. We know that $\dim(\mathbb{R}^3) = 3$. If we can find the nullity of $T$, we can use the Rank-Nullity theorem to find the rank.

To find the nullity, we need to find the dimension of the kernel of $T$. The kernel consists of all vectors $x \in \mathbb{R}^3$ such that $T(x) = 0$. This means we need to solve the homogeneous system $Ax = 0$:

$$
\begin{pmatrix}
1 & 2 & 3 \\
0 & 1 & 1
\end{pmatrix}
\begin{pmatrix}
x_1 \\
x_2 \\
x_3
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0
\end{pmatrix}
$$

We can row-reduce the augmented matrix $[A|0]$ to find the solution. The matrix is already in row-echelon form:

From the second row: $x_2 + x_3 = 0 \implies x_2 = -x_3$.
From the first row: $x_1 + 2x_2 + 3x_3 = 0$. Substituting $x_2 = -x_3$:
$x_1 + 2(-x_3) + 3x_3 = 0$
$x_1 - 2x_3 + 3x_3 = 0$
$x_1 + x_3 = 0 \implies x_1 = -x_3$.

The free variable is $x_3$. Let $x_3 = t$. Then $x_1 = -t$ and $x_2 = -t$. The solution vectors are of the form:

$$
\begin{pmatrix}
-t \\
-t \\
t
\end{pmatrix}
=
t
\begin{pmatrix}
-1 \\
-1 \\
1
\end{pmatrix}
$$

The kernel of $T$ is spanned by the vector $\begin{pmatrix} -1 \\ -1 \\ 1 \end{pmatrix}$. Therefore, the dimension of the kernel (nullity) is 1.

Now, applying the Rank-Nullity Theorem:
$\text{nullity}(T) + \text{rank}(T) = \dim(\mathbb{R}^3)$
$1 + \text{rank}(T) = 3$
$\text{rank}(T) = 3 - 1 = 2$

The rank of the linear transformation $T$ is 2.

### Example 2: Finding the Nullity

Consider a linear transformation $T: \mathbb{R}^4 \to \mathbb{R}^3$ whose matrix representation $A$ has a rank of 2. We want to find the nullity of $T$.

We know that $\dim(V) = \dim(\mathbb{R}^4) = 4$.
We are given that $\text{rank}(T) = 2$.

Using the Rank-Nullity Theorem:
$\text{nullity}(T) + \text{rank}(T) = \dim(V)$
$\text{nullity}(T) + 2 = 4$
$\text{nullity}(T) = 4 - 2 = 2$

The nullity of the linear transformation $T$ is 2. This means that the kernel of $T$ is a 2-dimensional subspace of $\mathbb{R}^4$.

### Example 3: Verifying the Theorem

Let $T: \mathbb{R}^2 \to \mathbb{R}^3$ be defined by $T(x_1, x_2) = (x_1 + x_2, x_1 - x_2, 2x_1)$.
The matrix representation of $T$ is:

$$
A = \begin{pmatrix}
1 & 1 \\
1 & -1 \\
2 & 0
\end{pmatrix}
$$

Here, $\dim(V) = \dim(\mathbb{R}^2) = 2$.

**Finding the Kernel:**
Solve $Ax = 0$:
$$
\begin{pmatrix}
1 & 1 \\
1 & -1 \\
2 & 0
\end{pmatrix}
\begin{pmatrix}
x_1 \\
x_2
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0 \\
0
\end{pmatrix}
$$
Row-reducing the matrix:
$\begin{pmatrix}
1 & 1 \\
1 & -1 \\
2 & 0
\end{pmatrix} \xrightarrow{R_2 \leftarrow R_2 - R_1, R_3 \leftarrow R_3 - 2R_1} \begin{pmatrix}
1 & 1 \\
0 & -2 \\
0 & -2
\end{pmatrix} \xrightarrow{R_3 \leftarrow R_3 - R_2} \begin{pmatrix}
1 & 1 \\
0 & -2 \\
0 & 0
\end{pmatrix} \xrightarrow{R_2 \leftarrow -\frac{1}{2}R_2} \begin{pmatrix}
1 & 1 \\
0 & 1 \\
0 & 0
\end{pmatrix} \xrightarrow{R_1 \leftarrow R_1 - R_2} \begin{pmatrix}
1 & 0 \\
0 & 1 \\
0 & 0
\end{pmatrix}$

This reduced form corresponds to $x_1 = 0$ and $x_2 = 0$. The only solution is the zero vector.
Thus, $\text{Kernel}(T) = \{ (0,0) \}$.
$\text{nullity}(T) = \dim(\text{Kernel}(T)) = 0$.

**Finding the Range:**
The range is the column space of matrix $A$. We can see that the columns $\begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}$ are linearly independent (not multiples of each other).
Therefore, the dimension of the column space (range) is 2.
$\text{rank}(T) = 2$.

**Applying Rank-Nullity Theorem:**
$\text{nullity}(T) + \text{rank}(T) = 0 + 2 = 2$.
$\dim(V) = 2$.

The theorem holds: $2 = 2$.

## When to Use the Rank-Nullity Theorem

*   When you need to quickly determine the dimension of the kernel or range if you know the other and the dimension of the input space.
*   To verify your calculations of kernel and range dimensions.
*   To understand the fundamental properties of linear transformations without explicitly finding bases for the kernel and range in every case.

By applying the Rank-Nullity Theorem, you gain deeper insights into the structure and behavior of linear transformations.

## Supports

- [[skills/mathematics/linear-algebra/linear-transformations/microskills/rank-nullity-theorem-application|Rank-Nullity theorem application]]
