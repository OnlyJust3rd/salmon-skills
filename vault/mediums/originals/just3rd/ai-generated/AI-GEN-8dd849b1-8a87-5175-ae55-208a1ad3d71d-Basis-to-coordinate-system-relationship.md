---
type: "medium"
title: "Basis: The Foundation of Your Coordinate System"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/vector-space/microskills/basis-to-coordinate-system-relationship|basis-to-coordinate-system-relationship]]"
learning-time-in-minutes: 4
---
# Basis: The Foundation of Your Coordinate System

In the world of vector spaces, every point can be described by its coordinates. But where do these coordinates come from? They aren't magic numbers; they are born from a **basis**. This lesson explores how a basis fundamentally defines the coordinate system we use for a vector space.

## What is a Basis?

Think of a basis as a set of fundamental "building blocks" for a vector space. These blocks are special because:

1.  **They are linearly independent:** This means none of the basis vectors can be created by combining the others. They are all unique and essential.
2.  **They span the entire vector space:** This means *any* vector in the space can be written as a unique combination (a linear combination) of these basis vectors.

> **Definition:** A **basis** for a vector space $V$ is a set of vectors $\{v_1, v_2, \dots, v_n\}$ in $V$ such that:
> 1.  The set is **linearly independent**.
> 2.  The set **spans** $V$ (i.e., $\text{span}\{v_1, v_2, \dots, v_n\} = V$).

### Analogy: Directions on a Map

Imagine you're giving directions. You can't just say "go 5 units." You need a reference: "go 5 units North" or "go 3 units East." The directions "North" and "East" form a basis for a 2D map. Any location can be precisely described by how far you go in the "North" direction and how far you go in the "East" direction. These two directions are linearly independent (North is not East, and vice-versa) and can get you anywhere on the map.

## How a Basis Creates a Coordinate System

Once you have a basis, it's like setting up a unique grid or framework for your vector space. Every vector in that space can then be uniquely represented by its "address" or **coordinate vector** relative to this basis.

Let's say you have a basis $B = \{b_1, b_2, \dots, b_n\}$ for a vector space $V$. If you have any vector $v$ in $V$, because the basis spans $V$, you can write $v$ as a linear combination of the basis vectors:

$$
v = c_1 b_1 + c_2 b_2 + \dots + c_n b_n
$$

The coefficients $c_1, c_2, \dots, c_n$ are the **coordinates** of the vector $v$ with respect to the basis $B$. We often write these coordinates as a **coordinate vector**:

$$
[v]_B = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}
$$

The subscript $B$ indicates that these coordinates are specific to the basis $B$. If you choose a different basis, you will likely get a different coordinate vector for the *same* original vector $v$.

### Example: A Different Basis in $\mathbb{R}^2$

We know the standard basis for $\mathbb{R}^2$ is $E = \{\mathbf{e}_1, \mathbf{e}_2\}$, where $\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$.

Consider a vector $v = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$.
With respect to the standard basis $E$, the coordinates are:
$$
v = 3 \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 4 \begin{bmatrix} 0 \\ 1 \end{bmatrix}
$$
So, the coordinate vector is $[v]_E = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$. This is intuitive because the standard basis vectors align with the axes.

Now, let's define a *different* basis for $\mathbb{R}^2$: $B = \{b_1, b_2\}$, where $b_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and $b_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

Let's find the coordinates of the *same* vector $v = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$ with respect to this new basis $B$. We need to find scalars $c_1$ and $c_2$ such that:

$$
v = c_1 b_1 + c_2 b_2
$$

$$
\begin{bmatrix} 3 \\ 4 \end{bmatrix} = c_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix}
$$

This gives us a system of linear equations:
1.  $c_1 + c_2 = 3$
2.  $c_1 - c_2 = 4$

Solving this system:
Adding the two equations: $(c_1 + c_2) + (c_1 - c_2) = 3 + 4 \implies 2c_1 = 7 \implies c_1 = 3.5$.
Substituting $c_1$ into the first equation: $3.5 + c_2 = 3 \implies c_2 = -0.5$.

So, the coordinate vector of $v$ with respect to basis $B$ is $[v]_B = \begin{bmatrix} 3.5 \\ -0.5 \end{bmatrix}$.

Notice how the *same* vector $v$ has different coordinate representations depending on the chosen basis: $[v]_E = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$ but $[v]_B = \begin{bmatrix} 3.5 \\ -0.5 \end{bmatrix}$. The basis provides the framework, and the coordinate vector tells you how to "build" the vector using that framework.

## Key Takeaway

A basis isn't just a set of vectors; it's the **blueprint for a coordinate system**. By selecting a basis, you establish a unique way to represent every vector in the space as a combination of those basis vectors. The coefficients of this combination are the coordinates, and together they form the coordinate vector relative to that specific basis. This relationship is fundamental to understanding how we quantify and manipulate vectors in linear algebra.

## Supports

- [[skills/mathematics/linear-algebra/vector-space/microskills/basis-to-coordinate-system-relationship|Basis-to-coordinate system relationship]]
