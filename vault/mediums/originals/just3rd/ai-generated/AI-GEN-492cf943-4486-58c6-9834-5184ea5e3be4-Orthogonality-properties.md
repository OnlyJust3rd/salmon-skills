---
type: "medium"
title: "Orthogonality Properties"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthogonality-properties|orthogonality-properties]]"
learning-time-in-minutes: 4
---
# Orthogonality Properties

This lesson focuses on understanding the fundamental characteristics of orthogonal vectors and sets of vectors. This knowledge is a building block for grasping subspaces and orthogonality more broadly.

## What Does Orthogonal Mean?

In geometry, when we say two lines are orthogonal, we mean they are perpendicular – they meet at a 90-degree angle. In linear algebra, the concept of orthogonality extends this idea to vectors.

**Definition:** Two vectors are orthogonal if their dot product is zero.

The dot product (also known as the scalar product) of two vectors \( \mathbf{u} = [u_1, u_2, \dots, u_n] \) and \( \mathbf{v} = [v_1, v_2, \dots, v_n] \) is calculated as:

$$
\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \dots + u_nv_n
$$

So, if \( \mathbf{u} \cdot \mathbf{v} = 0 \), then \( \mathbf{u} \) and \( \mathbf{v} \) are orthogonal.

### Example 1: Two Orthogonal Vectors

Let's consider two vectors in 2D space:
\( \mathbf{u} = [2, 1] \)
\( \mathbf{v} = [-1, 2] \)

Their dot product is:
\( \mathbf{u} \cdot \mathbf{v} = (2)(-1) + (1)(2) = -2 + 2 = 0 \)

Since the dot product is 0, vectors \( \mathbf{u} \) and \( \mathbf{v} \) are orthogonal. Visually, they form a 90-degree angle.

### Example 2: Two Non-Orthogonal Vectors

Let's consider another pair of vectors:
\( \mathbf{a} = [1, 3] \)
\( \mathbf{b} = [2, -1] \)

Their dot product is:
\( \mathbf{a} \cdot \mathbf{b} = (1)(2) + (3)(-1) = 2 - 3 = -1 \)

Since the dot product is -1 (not 0), vectors \( \mathbf{a} \) and \( \mathbf{b} \) are not orthogonal.

## Orthogonality for Sets of Vectors

The concept of orthogonality can also apply to a set of vectors.

**Definition:** A set of vectors is orthogonal if every pair of distinct vectors within the set is orthogonal.

### Example 3: An Orthogonal Set

Consider the set of vectors:
\( \{ \mathbf{v}_1 = [1, 0, 0], \mathbf{v}_2 = [0, 1, 0], \mathbf{v}_3 = [0, 0, 1] \} \)

Let's check pairs:
*   \( \mathbf{v}_1 \cdot \mathbf{v}_2 = (1)(0) + (0)(1) + (0)(0) = 0 \)
*   \( \mathbf{v}_1 \cdot \mathbf{v}_3 = (1)(0) + (0)(0) + (0)(1) = 0 \)
*   \( \mathbf{v}_2 \cdot \mathbf{v}_3 = (0)(0) + (1)(0) + (0)(1) = 0 \)

Since all distinct pairs are orthogonal, this set of vectors is orthogonal. These are the standard basis vectors in 3D space, which are famously orthogonal.

### Example 4: A Non-Orthogonal Set

Consider the set of vectors:
\( \{ \mathbf{u}_1 = [1, 1], \mathbf{u}_2 = [2, 0] \} \)

Let's check the pair:
*   \( \mathbf{u}_1 \cdot \mathbf{u}_2 = (1)(2) + (1)(0) = 2 \)

Since the dot product is not 0, the set is not orthogonal.

## Key Properties of Orthogonal Sets

Understanding orthogonality unlocks several important properties:

1.  **Linear Independence:** An orthogonal set of **non-zero** vectors is always linearly independent. This is a very powerful property. If you have a set of vectors where each one is orthogonal to all the others, and none of them are the zero vector, you can be sure they form a linearly independent set. This means no vector in the set can be written as a combination of the others.

    *   **Why is this important?** Linearly independent sets form the basis for vector spaces, which are fundamental to many areas of mathematics and computer science.

2.  **The Zero Vector:** The zero vector \( \mathbf{0} \) is orthogonal to every vector, including itself.
    If \( \mathbf{v} \) is any vector, then \( \mathbf{0} \cdot \mathbf{v} = 0 \).
    However, if a set contains the zero vector, it **cannot** be orthogonal unless it's just the set \( \{ \mathbf{0} \} \) itself, because a set of vectors is usually defined as orthogonal if all *distinct* pairs are orthogonal, and the zero vector's presence can lead to issues with linear independence properties for larger sets.

3.  **Unique Representation:** For an orthogonal basis, representing any vector in the span of that basis is simpler. If \( \{ \mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k \} \) is an orthogonal basis for a subspace \( W \), and \( \mathbf{x} \) is any vector in \( W \), then \( \mathbf{x} \) can be written as a linear combination:
    $$
    \mathbf{x} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k
    $$
    The coefficients \( c_i \) can be found easily using the dot product:
    $$
    c_i = \frac{\mathbf{x} \cdot \mathbf{v}_i}{\mathbf{v}_i \cdot \mathbf{v}_i}
    $$
    This makes calculations much more straightforward than solving a system of linear equations.

## Summary

*   Two vectors are orthogonal if their dot product is zero.
*   A set of vectors is orthogonal if every distinct pair of vectors in the set is orthogonal.
*   Orthogonal sets of non-zero vectors are linearly independent.
*   The zero vector is orthogonal to all vectors.

Understanding these fundamental properties is the first step towards appreciating the power and applications of orthogonality in linear algebra.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthogonality-properties|Orthogonality properties]]
