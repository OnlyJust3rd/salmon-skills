---
type: "medium"
title: "Understanding Coordinate Vectors"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/vector-space/microskills/coordinate-vector-definition|coordinate-vector-definition]]"
learning-time-in-minutes: 4
---
# Understanding Coordinate Vectors

In the world of vector spaces, we often think of vectors as arrows pointing from the origin. But how do we describe these vectors precisely, especially when we want to represent them in relation to a specific set of directions? This is where **coordinate vectors** come in.

## What is a Coordinate Vector?

Imagine you're giving directions to a friend. You wouldn't just say "go a certain distance." You'd likely specify a direction (like "north" or "east") and then tell them how far to go in that direction. In vector spaces, a **basis** provides us with a set of fundamental directions.

A **basis** for a vector space is a set of linearly independent vectors that can be combined (through scalar multiplication and addition) to form any other vector in that space. Think of it as a minimal set of "building blocks" for all vectors.

A **coordinate vector** is simply a way to represent a specific vector as a list of coefficients (numbers) corresponding to each vector in a chosen basis. These coefficients tell you "how much" of each basis vector you need to combine to get your original vector.

> **Definition:** Given a vector space $$V$$ and a basis $$B = \{ \mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_n \}$$ for $$V$$, any vector $$\mathbf{v} \in V$$ can be uniquely written as a linear combination of the basis vectors:
>
> $$ \mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2 + \ldots + c_n \mathbf{b}_n $$
>
> The **coordinate vector** of $$\mathbf{v}$$ with respect to the basis $$B$$, denoted as $$[\mathbf{v}]_B$$, is the column vector of these coefficients:
>
> $$ [\mathbf{v}]_B = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix} $$

The order of the coefficients in the coordinate vector is crucial and corresponds directly to the order of the basis vectors in the basis set $$B$$.

## A Simple Example

Let's consider the familiar 2D plane, $$ \mathbb{R}^2 $$.

**Scenario 1: The Standard Basis**

The most common basis for $$ \mathbb{R}^2 $$ is the **standard basis**, denoted by $$ E = \{\mathbf{e}_1, \mathbf{e}_2\} $$, where:
* $$ \mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix} $$ (pointing along the positive x-axis)
* $$ \mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix} $$ (pointing along the positive y-axis)

Let's take a vector $$ \mathbf{v} = \begin{bmatrix} 3 \\ 5 \end{bmatrix} $$.

To express $$ \mathbf{v} $$ as a linear combination of $$ \mathbf{e}_1 $$ and $$ \mathbf{e}_2 $$, we can see that:
$$ \mathbf{v} = 3 \cdot \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 5 \cdot \begin{bmatrix} 0 \\ 1 \end{bmatrix} = 3\mathbf{e}_1 + 5\mathbf{e}_2 $$

The coefficients are 3 and 5. Therefore, the coordinate vector of $$ \mathbf{v} $$ with respect to the standard basis $$ E $$ is:
$$ [\mathbf{v}]_E = \begin{bmatrix} 3 \\ 5 \end{bmatrix} $$

Notice that for the standard basis, the coordinate vector looks identical to the vector itself. This is why we often work with the standard basis implicitly.

**Scenario 2: A Different Basis**

Now, let's choose a different basis for $$ \mathbb{R}^2 $$, say $$ B = \{\mathbf{b}_1, \mathbf{b}_2\} $$, where:
* $$ \mathbf{b}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix} $$
* $$ \mathbf{b}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix} $$

Let's find the coordinate vector of the *same* vector $$ \mathbf{v} = \begin{bmatrix} 3 \\ 5 \end{bmatrix} $$ with respect to this new basis $$ B $$. We need to find scalars $$ c_1 $$ and $$ c_2 $$ such that:
$$ \mathbf{v} = c_1 \mathbf{b}_1 + c_2 \mathbf{b}_2 $$
$$ \begin{bmatrix} 3 \\ 5 \end{bmatrix} = c_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix} $$

This gives us a system of linear equations:
1. $$ c_1 + c_2 = 3 $$
2. $$ c_1 - c_2 = 5 $$

We can solve this system. Adding the two equations:
$$ (c_1 + c_2) + (c_1 - c_2) = 3 + 5 $$
$$ 2c_1 = 8 $$
$$ c_1 = 4 $$

Substituting $$ c_1 = 4 $$ into the first equation:
$$ 4 + c_2 = 3 $$
$$ c_2 = 3 - 4 $$
$$ c_2 = -1 $$

So, $$ \mathbf{v} = 4\mathbf{b}_1 + (-1)\mathbf{b}_2 $$.
The coordinate vector of $$ \mathbf{v} $$ with respect to basis $$ B $$ is:
$$ [\mathbf{v}]_B = \begin{bmatrix} 4 \\ -1 \end{bmatrix} $$

As you can see, the coordinate vector depends entirely on the chosen basis. This highlights the flexibility and power of using different bases to represent vectors.

## Key Takeaways

*   A **basis** provides a fundamental set of directions for a vector space.
*   A **coordinate vector** represents a vector as a list of coefficients, indicating how much of each basis vector is needed to form the original vector.
*   The coordinate vector is always defined **with respect to a specific basis**.
*   Changing the basis changes the coordinate vector for the same original vector.

## Supports

- [[skills/mathematics/linear-algebra/vector-space/microskills/coordinate-vector-definition|Coordinate vector definition]]
