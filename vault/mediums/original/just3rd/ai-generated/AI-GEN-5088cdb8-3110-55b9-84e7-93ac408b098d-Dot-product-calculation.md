---
type: "medium"
title: "Calculating the Dot Product of Vectors"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/vector/microskills/dot-product-calculation|dot-product-calculation]]"
learning-time-in-minutes: 3
---
# Calculating the Dot Product of Vectors

The dot product is a fundamental operation when working with vectors. It allows us to understand the relationship between two vectors, such as how much they point in the same direction. This skill is a building block for many other vector calculations, like finding the angle between vectors or determining if they are orthogonal.

## What is the Dot Product?

The dot product of two vectors, let's call them $\vec{a}$ and $\vec{b}$, is a scalar quantity (a single number). It's also known as the inner product.

For two vectors in 2D, $\vec{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} b_1 \\ b_2 \end{pmatrix}$, the dot product is calculated as:

$$
\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2
$$

In 3D, for $\vec{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}$, the formula extends to:

$$
\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3
$$

In general, for vectors of any dimension $n$, if $\vec{a} = \begin{pmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}$, then:

$$
\vec{a} \cdot \vec{b} = \sum_{i=1}^{n} a_i b_i
$$

This means you multiply the corresponding components of the two vectors and then sum up all those products.

## Why is the Dot Product Useful?

Beyond simply being a calculation, the dot product has significant geometric interpretations:

*   **Magnitude and Direction:** The dot product relates to the magnitudes of the vectors and the cosine of the angle between them. Specifically, $\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos(\theta)$, where $|\vec{a}|$ and $|\vec{b}|$ are the magnitudes of vectors $\vec{a}$ and $\vec{b}$ respectively, and $\theta$ is the angle between them.
*   **Orthogonality:** If the dot product of two non-zero vectors is zero ($\vec{a} \cdot \vec{b} = 0$), it means the vectors are orthogonal (perpendicular) to each other. This is because $\cos(90^\circ) = 0$.
*   **Projection:** The dot product is used to find the projection of one vector onto another, which tells you how much of one vector lies in the direction of another.

## Worked Example: Calculating the Dot Product

Let's calculate the dot product of two vectors in 3D:

$\vec{u} = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$ and $\vec{v} = \begin{pmatrix} 1 \\ 4 \\ -2 \end{pmatrix}$

Using the formula:

$$
\vec{u} \cdot \vec{v} = (u_1 \times v_1) + (u_2 \times v_2) + (u_3 \times v_3)
$$

Substitute the components:

$$
\vec{u} \cdot \vec{v} = (2 \times 1) + (-1 \times 4) + (3 \times -2)
$$

Perform the multiplications:

$$
\vec{u} \cdot \vec{v} = 2 + (-4) + (-6)
$$

Perform the addition:

$$
\vec{u} \cdot \vec{v} = 2 - 4 - 6
$$

$$
\vec{u} \cdot \vec{v} = -8
$$

The dot product of vectors $\vec{u}$ and $\vec{v}$ is $-8$.

## Common Mistakes to Avoid

*   **Confusing Dot Product with Scalar Multiplication:** Remember, the dot product results in a scalar (a number), not another vector. Scalar multiplication involves multiplying a vector by a single number to scale it.
*   **Incorrectly Pairing Components:** Ensure you multiply the first component of the first vector by the first component of the second vector, the second by the second, and so on. Don't mix them up.
*   **Sign Errors:** Be careful with negative numbers during multiplication and addition. A small sign error can lead to a completely wrong result.
*   **Dimensionality Mismatch:** You can only calculate the dot product of vectors that have the same number of dimensions.

## Practice Problems

1.  Calculate the dot product of $\vec{a} = \begin{pmatrix} 3 \\ 5 \end{pmatrix}$ and $\vec{b} = \begin{pmatrix} -2 \\ 1 \end{pmatrix}$.
2.  Find the dot product of $\vec{p} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$ and $\vec{q} = \begin{pmatrix} 0 \\ 3 \\ -1 \end{pmatrix}$.
3.  Given $\vec{x} = \begin{pmatrix} -4 \\ 2 \\ -1 \\ 5 \end{pmatrix}$ and $\vec{y} = \begin{pmatrix} 1 \\ -3 \\ -6 \\ 2 \end{pmatrix}$, compute $\vec{x} \cdot \vec{y}$.

## Supports

- [[skills/mathematics/linear-algebra/vector/microskills/dot-product-calculation|Dot product calculation]]
