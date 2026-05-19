---
type: "medium"
title: "Injectivity: Knowing When a Transformation is One-to-One"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/linear-transformations/microskills/injectivity-determination|Injectivity determination]]"
---
# Injectivity: Knowing When a Transformation is One-to-One

This lesson focuses on a crucial aspect of analyzing linear transformations: determining if they are **injective**, meaning each output has a unique input. We'll achieve this by understanding the role of the **kernel** (also known as the null space).

## What is Injectivity?

A linear transformation $T: V \to W$ is **injective** (or one-to-one) if for any two distinct vectors $\mathbf{u}, \mathbf{v} \in V$, their images under $T$ are also distinct. Mathematically, this means:

If $\mathbf{u} \neq \mathbf{v}$, then $T(\mathbf{u}) \neq T(\mathbf{v})$.

An equivalent way to state this, and often more useful for computation, is:

If $T(\mathbf{u}) = T(\mathbf{v})$, then $\mathbf{u} = \mathbf{v}$.

Think of it like this: if a transformation squashes multiple different input vectors into the *same* output vector, it's not injective.

## The Kernel and Injectivity: A Powerful Connection

The **kernel** of a linear transformation $T$, denoted as $\text{ker}(T)$, is the set of all vectors in the domain $V$ that are mapped to the zero vector in the codomain $W$:

$$ \text{ker}(T) = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W \} $$

The kernel is always a subspace of the domain $V$.

The key insight for determining injectivity lies here:

**A linear transformation $T$ is injective if and only if its kernel contains only the zero vector.**

$$ T \text{ is injective} \iff \text{ker}(T) = \{\mathbf{0}_V\} $$

Why is this true?

*   **If $\text{ker}(T) = \{\mathbf{0}_V\}$:** Suppose $T(\mathbf{u}) = T(\mathbf{v})$. Then, by linearity, $T(\mathbf{u}) - T(\mathbf{v}) = \mathbf{0}_W$, which means $T(\mathbf{u} - \mathbf{v}) = \mathbf{0}_W$. Since the only vector that maps to the zero vector is the zero vector itself, we must have $\mathbf{u} - \mathbf{v} = \mathbf{0}_V$, implying $\mathbf{u} = \mathbf{v}$. Thus, $T$ is injective.

*   **If $T$ is injective:** Suppose $\mathbf{v} \in \text{ker}(T)$. This means $T(\mathbf{v}) = \mathbf{0}_W$. We also know that $T(\mathbf{0}_V) = \mathbf{0}_W$ for any linear transformation. Since $T$ is injective, and both $\mathbf{v}$ and $\mathbf{0}_V$ map to the same output, they must be the same input vector: $\mathbf{v} = \mathbf{0}_V$. Therefore, $\text{ker}(T) = \{\mathbf{0}_V\}$.

## Applying the Kernel to Determine Injectivity

To check if a linear transformation $T$ is injective, you need to:

1.  **Find the kernel of $T$.**
2.  **Examine the kernel.** If the only vector in the kernel is the zero vector, then $T$ is injective. If there are any non-zero vectors in the kernel, $T$ is not injective.

### Example: Using the Matrix Representation

Let's consider a linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$ represented by the matrix $A$:

$$ A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} $$

The transformation is defined as $T(\mathbf{x}) = A\mathbf{x}$. To find the kernel, we need to solve $T(\mathbf{x}) = \mathbf{0}$:

$$ A\mathbf{x} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} $$

This leads to the system of linear equations:

$x_1 + 2x_2 = 0$
$3x_1 + 4x_2 = 0$
$5x_1 + 6x_2 = 0$

We can solve this using Gaussian elimination on the augmented matrix:

$$ \begin{pmatrix} 1 & 2 & | & 0 \\ 3 & 4 & | & 0 \\ 5 & 6 & | & 0 \end{pmatrix} $$

Performing row operations:
$R_2 \leftarrow R_2 - 3R_1$
$R_3 \leftarrow R_3 - 5R_1$

$$ \begin{pmatrix} 1 & 2 & | & 0 \\ 0 & -2 & | & 0 \\ 0 & -4 & | & 0 \end{pmatrix} $$

Performing further row operations:
$R_3 \leftarrow R_3 - 2R_2$

$$ \begin{pmatrix} 1 & 2 & | & 0 \\ 0 & -2 & | & 0 \\ 0 & 0 & | & 0 \end{pmatrix} $$

From the second row, $-2x_2 = 0$, which implies $x_2 = 0$.
From the first row, $x_1 + 2x_2 = 0$. Substituting $x_2 = 0$, we get $x_1 = 0$.

The only solution is $x_1 = 0$ and $x_2 = 0$. This means the kernel is:

$$ \text{ker}(T) = \left\{ \begin{pmatrix} 0 \\ 0 \end{pmatrix} \right\} $$

Since the kernel contains only the zero vector, the linear transformation $T$ is **injective**.

### Example: A Non-Injective Transformation

Consider another transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ with matrix $B$:

$$ B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} $$

We want to find $\text{ker}(T)$ by solving $B\mathbf{x} = \mathbf{0}$:

$$ \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$

The augmented matrix and row reduction:

$$ \begin{pmatrix} 1 & 2 & | & 0 \\ 2 & 4 & | & 0 \end{pmatrix} $$

$R_2 \leftarrow R_2 - 2R_1$:

$$ \begin{pmatrix} 1 & 2 & | & 0 \\ 0 & 0 & | & 0 \end{pmatrix} $$

The second row gives $0 = 0$, which is always true. The first row gives $x_1 + 2x_2 = 0$.
We can express $x_1$ in terms of $x_2$: $x_1 = -2x_2$.

This means that any vector of the form $\begin{pmatrix} -2x_2 \\ x_2 \end{pmatrix}$ is in the kernel. We can choose a free variable, let $x_2 = t$, where $t$ is any real number.

$$ \text{ker}(T) = \left\{ t \begin{pmatrix} -2 \\ 1 \end{pmatrix} \mid t \in \mathbb{R} \right\} $$

Since the kernel contains infinitely many non-zero vectors (e.g., if $t=1$, we have $\begin{pmatrix} -2 \\ 1 \end{pmatrix}$), the linear transformation $T$ is **not injective**.

## Summary

The kernel of a linear transformation is the set of all input vectors that map to the zero vector. A fundamental property is that a linear transformation is injective (one-to-one) if and only if its kernel consists solely of the zero vector. By computing the kernel, you can directly determine if a given linear transformation is injective.

## Supports

- [[skills/mathematics/linear-transformations/microskills/injectivity-determination|Injectivity determination]]
