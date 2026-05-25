---
type: "medium"
title: "Understanding the Null Space of a Matrix"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/null-space-definition|null-space-definition]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/subspaces-and-orthogonality|subspaces-and-orthogonality]]"
learning-time-in-minutes: 4
---
# Understanding the Null Space of a Matrix

In linear algebra, understanding the fundamental subspaces associated with a matrix is crucial. These subspaces provide deep insights into the behavior of linear transformations and the solutions to systems of linear equations. One of these key subspaces is the **null space**.

## What is the Null Space?

The null space of a matrix, also known as the kernel, is a fundamental concept that helps us understand which vectors are "annihilated" by the matrix when it acts as a linear transformation.

### Formal Definition

Let $A$ be an $m \times n$ matrix. The **null space** of $A$, denoted as $N(A)$ or $ker(A)$, is the set of all vectors $x$ in $\mathbb{R}^n$ such that $Ax = 0$, where $0$ is the zero vector in $\mathbb{R}^m$.

$$ N(A) = \{ x \in \mathbb{R}^n \mid Ax = 0 \} $$

In simpler terms, the null space consists of all input vectors $x$ that, when multiplied by the matrix $A$, result in the zero vector. These are the vectors that the linear transformation represented by $A$ maps to the origin.

## Why is the Null Space Important?

The null space has several critical applications:

*   **Solving Homogeneous Systems of Linear Equations:** A homogeneous system of linear equations is of the form $Ax = 0$. The set of all solutions to this system is precisely the null space of $A$. If the null space contains only the zero vector, then the homogeneous system has a unique solution (the trivial solution). If the null space contains non-zero vectors, then there are infinitely many solutions.
*   **Understanding Injectivity (One-to-One) of Linear Transformations:** A linear transformation $T(x) = Ax$ is injective if and only if its null space contains only the zero vector. This means that distinct input vectors are mapped to distinct output vectors.
*   **Dimension of the Column Space:** The dimension of the null space (called the nullity) is directly related to the dimension of the column space through the Rank-Nullity Theorem.

## Example

Let's consider a matrix $A$:

$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6
\end{pmatrix}
$$

To find the null space of $A$, we need to solve the equation $Ax = 0$:

$$
\begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6
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

This translates to the following system of equations:
1.  $x_1 + 2x_2 + 3x_3 = 0$
2.  $2x_1 + 4x_2 + 6x_3 = 0$

Notice that the second equation is just twice the first equation. This means the two equations are dependent, and we only need to consider one of them. Let's use the first one:

$x_1 + 2x_2 + 3x_3 = 0$

We can express $x_1$ in terms of $x_2$ and $x_3$:

$x_1 = -2x_2 - 3x_3$

The variables $x_2$ and $x_3$ can be any real numbers. We can choose them as free variables. Let $x_2 = s$ and $x_3 = t$, where $s, t \in \mathbb{R}$. Then, the solution vector $x$ can be written as:

$$
x = \begin{pmatrix}
x_1 \\
x_2 \\
x_3
\end{pmatrix}
=
\begin{pmatrix}
-2s - 3t \\
s \\
t
\end{pmatrix}
$$

We can decompose this vector into a linear combination of vectors multiplied by the free variables:

$$
x = s \begin{pmatrix}
-2 \\
1 \\
0
\end{pmatrix}
+
t \begin{pmatrix}
-3 \\
0 \\
1
\end{pmatrix}
$$

Therefore, the null space of $A$ is the set of all linear combinations of the vectors $v_1 = \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}$ and $v_2 = \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}$.

$$ N(A) = \{ s \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix} \mid s, t \in \mathbb{R} \} $$

This means that any vector in the null space of $A$ can be formed by choosing any values for $s$ and $t$ and plugging them into this combination. These two vectors form a basis for the null space.

## Key Takeaway

The null space of a matrix $A$ is the set of all vectors $x$ such that $Ax = 0$. It is a subspace of $\mathbb{R}^n$, where $n$ is the number of columns in $A$. Understanding how to find and interpret the null space is fundamental for solving linear systems and analyzing linear transformations.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/null-space-definition|Null space definition]]
