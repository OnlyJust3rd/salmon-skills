---
type: "medium"
title: "Identifying Orthogonal Vectors"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthogonal-vector-identification|orthogonal-vector-identification]]"
learning-time-in-minutes: 3
---
# Identifying Orthogonal Vectors

In linear algebra, vectors can have a special relationship called "orthogonality." This concept is a fundamental building block for understanding more complex ideas like projections and the decomposition of vector spaces. For this skill, we will focus on identifying when two vectors are orthogonal.

## What is Orthogonality?

At its core, orthogonality between two vectors means they are perpendicular to each other. Think of the x-axis and the y-axis in a 2D coordinate system; they are orthogonal. In higher dimensions, this geometric intuition still holds, but we use a mathematical definition to confirm it.

The key to determining orthogonality lies in the **dot product** (also known as the scalar product).

> **Definition:** Two vectors, $\mathbf{u}$ and $\mathbf{v}$, are orthogonal if and only if their dot product is zero.
>
> $$ \mathbf{u} \cdot \mathbf{v} = 0 $$

### Calculating the Dot Product

For two vectors, $\mathbf{u} = [u_1, u_2, ..., u_n]$ and $\mathbf{v} = [v_1, v_2, ..., v_n]$, their dot product is calculated as the sum of the products of their corresponding components:

$$ \mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + ... + u_nv_n $$

If this sum equals zero, the vectors are orthogonal.

## Identifying Orthogonal Vectors in a Set

To identify orthogonal vectors within a given set, we need to systematically check the dot product for every unique pair of vectors in that set.

### Example 1: 2D Vectors

Let's consider the following set of vectors:
*   $\mathbf{a} = [2, 3]$
*   $\mathbf{b} = [-3, 2]$
*   $\mathbf{c} = [1, -1]$

We need to check the dot product for pairs $(\mathbf{a}, \mathbf{b})$, $(\mathbf{a}, \mathbf{c})$, and $(\mathbf{b}, \mathbf{c})$.

1.  **Check $\mathbf{a}$ and $\mathbf{b}$:**
    $$ \mathbf{a} \cdot \mathbf{b} = (2)(-3) + (3)(2) = -6 + 6 = 0 $$
    Since the dot product is 0, $\mathbf{a}$ and $\mathbf{b}$ are orthogonal.

2.  **Check $\mathbf{a}$ and $\mathbf{c}$:**
    $$ \mathbf{a} \cdot \mathbf{c} = (2)(1) + (3)(-1) = 2 - 3 = -1 $$
    Since the dot product is not 0, $\mathbf{a}$ and $\mathbf{c}$ are not orthogonal.

3.  **Check $\mathbf{b}$ and $\mathbf{c}$:**
    $$ \mathbf{b} \cdot \mathbf{c} = (-3)(1) + (2)(-1) = -3 - 2 = -5 $$
    Since the dot product is not 0, $\mathbf{b}$ and $\mathbf{c}$ are not orthogonal.

**Conclusion for Example 1:** In this set, only the pair of vectors $\mathbf{a}$ and $\mathbf{b}$ are orthogonal.

### Example 2: 3D Vectors

Consider this set of vectors:
*   $\mathbf{x} = [1, 0, 2]$
*   $\mathbf{y} = [0, 5, 0]$
*   $\mathbf{z} = [-4, 0, 2]$

Let's compute the dot products for all pairs:

1.  **Check $\mathbf{x}$ and $\mathbf{y}$:**
    $$ \mathbf{x} \cdot \mathbf{y} = (1)(0) + (0)(5) + (2)(0) = 0 + 0 + 0 = 0 $$
    $\mathbf{x}$ and $\mathbf{y}$ are orthogonal.

2.  **Check $\mathbf{x}$ and $\mathbf{z}$:**
    $$ \mathbf{x} \cdot \mathbf{z} = (1)(-4) + (0)(0) + (2)(2) = -4 + 0 + 4 = 0 $$
    $\mathbf{x}$ and $\mathbf{z}$ are orthogonal.

3.  **Check $\mathbf{y}$ and $\mathbf{z}$:**
    $$ \mathbf{y} \cdot \mathbf{z} = (0)(-4) + (5)(0) + (0)(2) = 0 + 0 + 0 = 0 $$
    $\mathbf{y}$ and $\mathbf{z}$ are orthogonal.

**Conclusion for Example 2:** In this set, all pairs of vectors are orthogonal. This means the set $\{\mathbf{x}, \mathbf{y}, \mathbf{z}\}$ is an orthogonal set.

## Key Takeaways for Identification

*   Orthogonality is determined by a zero dot product.
*   To check a set of vectors, you must compute the dot product for *every unique pair* of vectors within that set.
*   If a set contains the zero vector, it will be orthogonal to every other vector in the set because the dot product with the zero vector is always zero.

By practicing these calculations, you'll become proficient at recognizing orthogonal vectors in various contexts.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthogonal-vector-identification|Orthogonal vector identification]]
