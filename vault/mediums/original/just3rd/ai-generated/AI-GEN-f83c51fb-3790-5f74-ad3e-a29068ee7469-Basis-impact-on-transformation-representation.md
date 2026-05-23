---
type: "medium"
title: "How Basis Choice Changes Transformation Matrices"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/vector-space/microskills/basis-impact-on-transformation-representation|basis-impact-on-transformation-representation]]"
learning-time-in-minutes: 4
---
# How Basis Choice Changes Transformation Matrices

When we talk about vectors and transformations, we often implicitly assume a "standard" way of looking at things. In vector spaces, this "standard way" is usually tied to a specific *basis*. This lesson focuses on how changing that basis can change the way we represent a linear transformation using matrices.

## The Standard Basis and Its Familiar Matrices

You're likely familiar with the standard basis in 2D space, often denoted as:

*   $$ \mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$
*   $$ \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$

Any vector $$ \mathbf{v} = \begin{pmatrix} x \\ y \end{pmatrix} $$ can be written as a linear combination of these basis vectors: $$ \mathbf{v} = x\mathbf{e}_1 + y\mathbf{e}_2 $$. This is what gives us the familiar coordinate representation of a vector.

Similarly, a linear transformation, like a rotation or a shear, can be represented by a matrix. For example, a rotation by 90 degrees counter-clockwise in 2D is represented by the matrix:

$$ R_{90} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} $$

If we apply this to a vector $$ \mathbf{v} = \begin{pmatrix} x \\ y \end{pmatrix} $$, we get:

$$ R_{90} \mathbf{v} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix} $$

This matrix works perfectly *because* we are using the standard basis. The columns of the matrix tell us where the standard basis vectors are mapped.

## What Happens When We Change the Basis?

Let's imagine we decide to use a *different* basis for our 2D space. For instance, consider a new basis $$ B' = \{\mathbf{b}_1, \mathbf{b}_2\} $$, where:

*   $$ \mathbf{b}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$
*   $$ \mathbf{b}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix} $$

Now, any vector $$ \mathbf{v} $$ can be represented as a linear combination of $$ \mathbf{b}_1 $$ and $$ \mathbf{b}_2 $$. If we say $$ \mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2 $$, then $$ \begin{pmatrix} c_1 \\ c_2 \end{pmatrix} $$ are the *new coordinates* of $$ \mathbf{v} $$ in basis $$ B' $$.

### The Transformation Matrix Changes

If we want to represent the same 90-degree rotation transformation using the basis $$ B' $$, the matrix will be different! Why? Because the matrix representation depends on how the *new basis vectors* are transformed.

Let's see where our new basis vectors map under the 90-degree rotation:

1.  **Transforming $$ \mathbf{b}_1 $$:**
    $$ R_{90} \mathbf{b}_1 = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \end{pmatrix} $$
    Now, we need to express this result $$ \begin{pmatrix} -1 \\ 1 \end{pmatrix} $$ as a linear combination of our *new* basis vectors $$ \mathbf{b}_1 $$ and $$ \mathbf{b}_2 $$.
    We want to find $$ x $$ and $$ y $$ such that $$ \begin{pmatrix} -1 \\ 1 \end{pmatrix} = x \begin{pmatrix} 1 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ -1 \end{pmatrix} $$.
    Solving this system gives us $$ x = 0 $$ and $$ y = -1 $$.
    So, in the basis $$ B' $$, the vector $$ \mathbf{b}_1 $$ transforms into $$ 0\mathbf{b}_1 - 1\mathbf{b}_2 $$. The coefficients are $$ \begin{pmatrix} 0 \\ -1 \end{pmatrix} $$.

2.  **Transforming $$ \mathbf{b}_2 $$:**
    $$ R_{90} \mathbf{b}_2 = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$
    Again, we express this result in terms of $$ \mathbf{b}_1 $$ and $$ \mathbf{b}_2 $$.
    We want to find $$ x $$ and $$ y $$ such that $$ \begin{pmatrix} 1 \\ 1 \end{pmatrix} = x \begin{pmatrix} 1 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ -1 \end{pmatrix} $$.
    Solving this system gives us $$ x = 1 $$ and $$ y = 0 $$.
    So, in the basis $$ B' $$, the vector $$ \mathbf{b}_2 $$ transforms into $$ 1\mathbf{b}_1 + 0\mathbf{b}_2 $$. The coefficients are $$ \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$.

The new matrix representation of the 90-degree rotation in basis $$ B' $$ is formed by these coefficient vectors as its columns:

$$ R'_{90} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} $$

Notice that $$ R'_{90} $$ is different from $$ R_{90} $$, even though it represents the *exact same geometric transformation* (a 90-degree rotation). The difference lies solely in the coordinate system (the basis) we are using to describe it.

## Why Does This Matter?

Understanding how basis choice affects transformation matrices is crucial for:

*   **Simplifying Problems:** Sometimes, choosing a specific basis can make a transformation matrix much simpler (e.g., diagonal). This is especially important in areas like quantum mechanics or data analysis.
*   **Change of Basis Operations:** It provides the mathematical framework for converting representations from one basis to another.
*   **Geometric Intuition:** It helps us see that transformations are geometric realities, independent of the coordinate system we impose on them.

The core idea is that the matrix *always* describes how the basis vectors themselves are transformed and then uses those transformed basis vectors to express the final result in the *same* basis.

## Supports

- [[skills/mathematics/linear-algebra/vector-space/microskills/basis-impact-on-transformation-representation|Basis impact on transformation representation]]
