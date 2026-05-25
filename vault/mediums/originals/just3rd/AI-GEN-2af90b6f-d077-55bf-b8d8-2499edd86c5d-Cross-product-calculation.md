---
type: "medium"
title: "Calculating the Vector (Cross) Product"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/vector/microskills/cross-product-calculation|cross-product-calculation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/vector/vector|vector]]"
learning-time-in-minutes: 4
---
# Calculating the Vector (Cross) Product

The vector or cross product is a fundamental operation for vectors in three-dimensional space. Unlike the dot product, which results in a scalar, the cross product yields another vector. This resulting vector has specific properties related to the original two vectors, making it incredibly useful in physics and engineering for calculations involving torque, magnetic forces, and angular momentum.

This lesson will focus on how to compute the cross product of two vectors.

## What is the Cross Product?

Given two vectors, $$ \mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} $$ and $$ \mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} $$, their cross product, denoted by $$ \mathbf{a} \times \mathbf{b} $$, is a new vector defined as:

$$
\mathbf{a} \times \mathbf{b} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix}
$$

### Key Properties of the Cross Product

1.  **Perpendicularity:** The resulting vector $$ \mathbf{a} \times \mathbf{b} $$ is orthogonal (perpendicular) to both $$ \mathbf{a} $$ and $$ \mathbf{b $$.
2.  **Magnitude:** The magnitude of the cross product, $$ ||\mathbf{a} \times \mathbf{b}|| $$, is equal to the area of the parallelogram formed by $$ \mathbf{a} $$ and $$ \mathbf{b $$. It can be calculated as $$ ||\mathbf{a} \times \mathbf{b}|| = ||\mathbf{a}|| ||\mathbf{b}|| \sin(\theta) $$, where $$ \theta $$ is the angle between $$ \mathbf{a} $$ and $$ \mathbf{b $$.
3.  **Direction:** The direction of $$ \mathbf{a} \times \mathbf{b} $$ is determined by the "right-hand rule." If you point the fingers of your right hand in the direction of $$ \mathbf{a} $$ and curl them towards $$ \mathbf{b} $$, your thumb points in the direction of $$ \mathbf{a} \times \mathbf{b} $$.
4.  **Anticommutativity:** The order of the vectors matters. $$ \mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a}) $$.
5.  **Parallel Vectors:** If $$ \mathbf{a} $$ and $$ \mathbf{b} $$ are parallel (or one is the zero vector), then $$ \mathbf{a} \times \mathbf{b} = \mathbf{0} $$.

## Calculating the Cross Product: A Step-by-Step Method

The formula can seem a bit daunting at first. A helpful mnemonic to remember and calculate the cross product is by using a determinant-like structure.

Let $$ \mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} $$ and $$ \mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} $$. We can set up the calculation as follows:

$$
\mathbf{a} \times \mathbf{b} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
$$

Where $$ \mathbf{i} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} $$, $$ \mathbf{j} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} $$, and $$ \mathbf{k} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} $$ are the standard basis vectors.

Now, we expand this determinant:

$$
\mathbf{a} \times \mathbf{b} = \mathbf{i} \begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix} - \mathbf{j} \begin{vmatrix} a_1 & a_3 \\ b_1 & b_3 \end{vmatrix} + \mathbf{k} \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix}
$$

The 2x2 determinants are calculated as: $$ \begin{vmatrix} p & q \\ r & s \end{vmatrix} = ps - qr $$.

Applying this:

$$
\mathbf{a} \times \mathbf{b} = \mathbf{i}(a_2b_3 - a_3b_2) - \mathbf{j}(a_1b_3 - a_3b_1) + \mathbf{k}(a_1b_2 - a_2b_1)
$$

Rearranging the terms to match the vector component form:

$$
\mathbf{a} \times \mathbf{b} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ -(a_1b_3 - a_3b_1) \\ a_1b_2 - a_2b_1 \end{pmatrix} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix}
$$

This confirms our initial formula and provides a systematic way to compute it.

## Worked Example

Let's calculate the cross product of $$ \mathbf{a} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} $$ and $$ \mathbf{b} = \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix} $$.

Using the determinant method:

$$
\mathbf{a} \times \mathbf{b} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
1 & 2 & 3 \\
4 & 5 & 6
\end{vmatrix}
$$

Expand the determinant:

$$
\mathbf{a} \times \mathbf{b} = \mathbf{i} \begin{vmatrix} 2 & 3 \\ 5 & 6 \end{vmatrix} - \mathbf{j} \begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix} + \mathbf{k} \begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix}
$$

Calculate the 2x2 determinants:

*   $$ \begin{vmatrix} 2 & 3 \\ 5 & 6 \end{vmatrix} = (2 \times 6) - (3 \times 5) = 12 - 15 = -3 $$
*   $$ \begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix} = (1 \times 6) - (3 \times 4) = 6 - 12 = -6 $$
*   $$ \begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix} = (1 \times 5) - (2 \times 4) = 5 - 8 = -3 $$

Substitute these values back:

$$
\mathbf{a} \times \mathbf{b} = \mathbf{i}(-3) - \mathbf{j}(-6) + \mathbf{k}(-3)
$$

$$
\mathbf{a} \times \mathbf{b} = -3\mathbf{i} + 6\mathbf{j} - 3\mathbf{k}
$$

In vector component form:

$$
\mathbf{a} \times \mathbf{b} = \begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix}
$$

**Verification (Optional):**
You can check if the resulting vector is perpendicular to both $$ \mathbf{a} $$ and $$ \mathbf{b} $$ by calculating the dot product. If they are perpendicular, the dot product should be zero.

*   $$ \begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = (-3)(1) + (6)(2) + (-3)(3) = -3 + 12 - 9 = 0 $$
*   $$ \begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix} \cdot \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix} = (-3)(4) + (6)(5) + (-3)(6) = -12 + 30 - 18 = 0 $$

The dot products are zero, so our calculation is correct.

## Common Mistakes to Avoid

*   **Incorrectly applying the right-hand rule:** Always remember that $$ \mathbf{a} \times \mathbf{b} $$ is not the same as $$ \mathbf{b} \times \mathbf{a} $$.
*   **Errors in determinant calculation:** Double-check your multiplications and subtractions when expanding the determinants.
*   **Forgetting the negative sign for the $$ \mathbf{j} $$ component:** The formula has a $$ -\mathbf{j} $$ term, which is crucial for the correct result.
*   **Confusing cross product with dot product:** Remember that the cross product results in a vector, while the dot product results in a scalar.

Mastering the cross product calculation is essential for working with vectors in 3D space, enabling you to solve a variety of geometric and physical problems.

## Supports

- [[skills/mathematics/linear-algebra/vector/microskills/cross-product-calculation|Cross product calculation]]
