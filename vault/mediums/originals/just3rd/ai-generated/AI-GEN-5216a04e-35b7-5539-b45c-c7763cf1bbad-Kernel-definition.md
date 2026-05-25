---
type: "medium"
title: "Understanding the Kernel of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/kernel-definition|kernel-definition]]"
learning-time-in-minutes: 4
---
# Understanding the Kernel of a Linear Transformation

In linear algebra, we often deal with **linear transformations**. These are special functions that map vectors from one vector space to another, preserving the operations of vector addition and scalar multiplication. A crucial concept associated with any linear transformation is its **kernel**. Understanding the kernel helps us understand how a transformation "collapses" or "compresses" vectors.

## What is the Kernel?

The kernel of a linear transformation is a specific set of vectors that are mapped to the zero vector in the target space.

Let's say we have a linear transformation $$T$$ that maps vectors from a vector space $$V$$ to a vector space $$W$$. We can write this as $$T: V \to W$$.

The **kernel of $$T$$**, often denoted as $$\text{ker}(T)$$ or $$N(T)$$, is the set of all vectors $$v$$ in $$V$$ such that $$T(v)$$ equals the zero vector in $$W$$.

$$
\text{ker}(T) = \{ v \in V \mid T(v) = 0_W \}
$$

Here, $$0_W$$ represents the zero vector in the target space $$W$$.

### Key Idea: The "Before" of the Zero Vector

Think of the kernel as the "pre-image" of the zero vector. If you apply the transformation $$T$$ to any vector in its kernel, the output is guaranteed to be the zero vector. Conversely, any vector in $$V$$ that gets mapped to the zero vector by $$T$$ must belong to the kernel.

## Kernel of a Matrix

When a linear transformation is represented by a matrix, the concept of the kernel becomes even more concrete. If $$T(x) = Ax$$, where $$A$$ is an $$m \times n$$ matrix, $$x$$ is a vector in $$ \mathbb{R}^n$$, and $$Ax$$ is a vector in $$ \mathbb{R}^m$$, then the kernel of $$T$$ is the set of all vectors $$x$$ such that $$Ax = 0$$ (where $$0$$ is the zero vector in $$ \mathbb{R}^m$$).

$$
\text{ker}(T) = \{ x \in \mathbb{R}^n \mid Ax = 0 \}
$$

This set of vectors $$x$$ is also known as the **null space** of the matrix $$A$$. So, for a matrix transformation, the kernel and the null space are the same.

## Why is the Kernel Important?

1.  **Injectivity (One-to-One):** A linear transformation $$T$$ is injective (one-to-one) if and only if its kernel contains only the zero vector. If $$\text{ker}(T) = \{0\}$$, then distinct vectors in $$V$$ must map to distinct vectors in $$W$$. If there were two different vectors $$v_1$$ and $$v_2$$ such that $$T(v_1) = T(v_2)$$, then $$T(v_1 - v_2) = T(v_1) - T(v_2) = 0$$, which would mean $$v_1 - v_2$$ is in the kernel. If the kernel only has the zero vector, then $$v_1 - v_2 = 0$$, implying $$v_1 = v_2$$, a contradiction.

2.  **Understanding the Transformation's Behavior:** The kernel tells us which input vectors are "crushed" or "flattened" to nothing by the transformation. This provides insight into the geometry and structure of the mapping.

3.  **Rank-Nullity Theorem:** The size of the kernel (its dimension, known as the nullity) is directly related to the size of the "output space" of the transformation (its dimension, known as the rank) through the Rank-Nullity Theorem. For a linear transformation $$T: V \to W$$, where $$V$$ is finite-dimensional:
    $$
    \dim(V) = \text{rank}(T) + \text{nullity}(T)
    $$
    This theorem is fundamental in linear algebra.

## Example

Let's consider a linear transformation $$T: \mathbb{R}^3 \to \mathbb{R}^2$$ defined by the matrix $$A$$:

$$
A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}
$$

We want to find the kernel of $$T$$, which is the null space of $$A$$. This means we need to find all vectors $$x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$$ in $$ \mathbb{R}^3$$ such that $$Ax = 0$$:

$$
\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

This leads to the system of linear equations:
$$
x_1 + 2x_2 + 3x_3 = 0
$$
$$
4x_1 + 5x_2 + 6x_3 = 0
$$

We can solve this system using row reduction on the augmented matrix:

$$
\left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
4 & 5 & 6 & 0
\end{array}\right) \xrightarrow{R_2 \leftarrow R_2 - 4R_1}
\left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
0 & -3 & -6 & 0
\end{array}\right) \xrightarrow{R_2 \leftarrow -\frac{1}{3}R_2}
\left(\begin{array}{ccc|c}
1 & 2 & 3 & 0 \\
0 & 1 & 2 & 0
\end{array}\right) \xrightarrow{R_1 \leftarrow R_1 - 2R_2}
\left(\begin{array}{ccc|c}
1 & 0 & -1 & 0 \\
0 & 1 & 2 & 0
\end{array}\right)
$$

From the reduced row echelon form, we get:
$$
x_1 - x_3 = 0 \implies x_1 = x_3
$$
$$
x_2 + 2x_3 = 0 \implies x_2 = -2x_3
$$

Here, $$x_3$$ is a free variable. Let $$x_3 = t$$, where $$t$$ is any real number. Then the solution vectors are of the form:

$$
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} t \\ -2t \\ t \end{pmatrix} = t \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}
$$

Therefore, the kernel of $$T$$ is the set of all scalar multiples of the vector $$ \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$$.

$$
\text{ker}(T) = \left\{ t \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix} \mid t \in \mathbb{R} \right\}
$$

This means any vector in $$ \mathbb{R}^3$$ that is a multiple of $$ \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$$ will be mapped to the zero vector $$ \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$ by the transformation $$T$$.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/kernel-definition|Kernel definition]]
