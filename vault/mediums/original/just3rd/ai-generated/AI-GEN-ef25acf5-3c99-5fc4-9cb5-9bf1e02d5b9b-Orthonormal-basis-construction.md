---
type: "medium"
title: "Constructing Orthonormal Bases with the Gram-Schmidt Process"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthonormal-basis-construction|orthonormal-basis-construction]]"
learning-time-in-minutes: 4
---
# Constructing Orthonormal Bases with the Gram-Schmidt Process

This lesson focuses on the practical application of the Gram-Schmidt process to build an orthonormal basis. This is a fundamental technique when working with vector spaces, particularly in areas like linear algebra, numerical analysis, and signal processing.

## What is an Orthonormal Basis?

Before diving into the process, let's clarify what we're aiming for. An **orthonormal basis** is a set of vectors that are:

1.  **Orthogonal:** Every pair of distinct vectors in the set is perpendicular. This means their dot product is zero.
2.  **Normal:** Each vector in the set has a length (or norm) of 1.

An orthonormal basis is incredibly useful because it simplifies many calculations and provides a clean coordinate system for a vector space.

## The Gram-Schmidt Process: The Core Idea

The Gram-Schmidt process is an algorithm that takes a set of linearly independent vectors and systematically transforms them into an orthogonal set, and then normalizes them to create an orthonormal set.

The fundamental idea is to take each vector in the original set, subtract its "projection" onto the subspace spanned by the previously constructed orthogonal vectors, and the remaining component will be orthogonal to all of them.

## Step-by-Step Construction

Let's say we have a set of linearly independent vectors: $$ \{v_1, v_2, \dots, v_k\} $$. Our goal is to produce an orthonormal basis $$ \{u_1, u_2, \dots, u_k\} $$ for the subspace spanned by these vectors.

We'll first construct an orthogonal basis $$ \{w_1, w_2, \dots, w_k\} $$ and then normalize them.

### Step 1: The First Vector

The first orthogonal vector $$ w_1 $$ is simply the first original vector $$ v_1 $$.

$$ w_1 = v_1 $$

To make it normal, we create the first orthonormal vector $$ u_1 $$ by normalizing $$ w_1 $$:

$$ u_1 = \frac{w_1}{\|w_1\|} $$

### Step 2: The Second Vector

For the second vector, we start with $$ v_2 $$ and subtract its projection onto $$ w_1 $$. The projection of $$ v_2 $$ onto $$ w_1 $$ is given by:

$$ \text{proj}_{w_1}(v_2) = \frac{v_2 \cdot w_1}{\|w_1\|^2} w_1 $$

So, our second orthogonal vector $$ w_2 $$ is:

$$ w_2 = v_2 - \text{proj}_{w_1}(v_2) = v_2 - \frac{v_2 \cdot w_1}{\|w_1\|^2} w_1 $$

Now, we normalize $$ w_2 $$ to get $$ u_2 $$:

$$ u_2 = \frac{w_2}{\|w_2\|} $$

### Step 3: The Third Vector (and beyond)

We continue this pattern. For the third vector $$ v_3 $$, we subtract its projections onto *all* previously found orthogonal vectors ($$ w_1 $$ and $$ w_2 $$):

$$ w_3 = v_3 - \text{proj}_{w_1}(v_3) - \text{proj}_{w_2}(v_3) $$
$$ w_3 = v_3 - \frac{v_3 \cdot w_1}{\|w_1\|^2} w_1 - \frac{v_3 \cdot w_2}{\|w_2\|^2} w_2 $$

And then normalize:

$$ u_3 = \frac{w_3}{\|w_3\|} $$

### General Step for $$ w_j $$

For a general vector $$ v_j $$, the orthogonal vector $$ w_j $$ is constructed by subtracting the projections of $$ v_j $$ onto all preceding orthogonal vectors $$ w_1, w_2, \dots, w_{j-1} $$:

$$ w_j = v_j - \sum_{i=1}^{j-1} \text{proj}_{w_i}(v_j) = v_j - \sum_{i=1}^{j-1} \frac{v_j \cdot w_i}{\|w_i\|^2} w_i $$

And the corresponding orthonormal vector $$ u_j $$ is:

$$ u_j = \frac{w_j}{\|w_j\|} $$

**Important Note:** If at any step $$ w_j $$ turns out to be the zero vector, it means that $$ v_j $$ was linearly dependent on the previous vectors, which contradicts our assumption of linearly independent input vectors.

## Worked Example

Let's apply the Gram-Schmidt process to the following set of linearly independent vectors in $$ \mathbb{R}^2 $$:

$$ v_1 = \begin{pmatrix} 3 \\ 1 \end{pmatrix}, \quad v_2 = \begin{pmatrix} 2 \\ 2 \end{pmatrix} $$

### Step 1: Find $$ w_1 $$ and $$ u_1 $$

$$ w_1 = v_1 = \begin{pmatrix} 3 \\ 1 \end{pmatrix} $$

Calculate the norm of $$ w_1 $$:
$$ \|w_1\| = \sqrt{3^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10} $$

Now, normalize to get $$ u_1 $$:
$$ u_1 = \frac{w_1}{\|w_1\|} = \frac{1}{\sqrt{10}} \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 3/\sqrt{10} \\ 1/\sqrt{10} \end{pmatrix} $$

### Step 2: Find $$ w_2 $$ and $$ u_2 $$

First, we need the projection of $$ v_2 $$ onto $$ w_1 $$.
$$ v_2 \cdot w_1 = \begin{pmatrix} 2 \\ 2 \end{pmatrix} \cdot \begin{pmatrix} 3 \\ 1 \end{pmatrix} = (2)(3) + (2)(1) = 6 + 2 = 8 $$
$$ \|w_1\|^2 = (\sqrt{10})^2 = 10 $$

The projection is:
$$ \text{proj}_{w_1}(v_2) = \frac{8}{10} w_1 = \frac{4}{5} \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 12/5 \\ 4/5 \end{pmatrix} $$

Now, calculate $$ w_2 $$:
$$ w_2 = v_2 - \text{proj}_{w_1}(v_2) = \begin{pmatrix} 2 \\ 2 \end{pmatrix} - \begin{pmatrix} 12/5 \\ 4/5 \end{pmatrix} = \begin{pmatrix} 2 - 12/5 \\ 2 - 4/5 \end{pmatrix} = \begin{pmatrix} 10/5 - 12/5 \\ 10/5 - 4/5 \end{pmatrix} = \begin{pmatrix} -2/5 \\ 6/5 \end{pmatrix} $$

Calculate the norm of $$ w_2 $$:
$$ \|w_2\| = \sqrt{(-2/5)^2 + (6/5)^2} = \sqrt{4/25 + 36/25} = \sqrt{40/25} = \frac{\sqrt{40}}{5} = \frac{2\sqrt{10}}{5} $$

Normalize $$ w_2 $$ to get $$ u_2 $$:
$$ u_2 = \frac{w_2}{\|w_2\|} = \frac{1}{2\sqrt{10}/5} \begin{pmatrix} -2/5 \\ 6/5 \end{pmatrix} = \frac{5}{2\sqrt{10}} \begin{pmatrix} -2/5 \\ 6/5 \end{pmatrix} = \begin{pmatrix} \frac{5}{2\sqrt{10}} \cdot \frac{-2}{5} \\ \frac{5}{2\sqrt{10}} \cdot \frac{6}{5} \end{pmatrix} = \begin{pmatrix} -1/\sqrt{10} \\ 3/\sqrt{10} \end{pmatrix} $$

Thus, the orthonormal basis is:
$$ \{ u_1, u_2 \} = \left\{ \begin{pmatrix} 3/\sqrt{10} \\ 1/\sqrt{10} \end{pmatrix}, \begin{pmatrix} -1/\sqrt{10} \\ 3/\sqrt{10} \end{pmatrix} \right\} $$

You can verify that $$ u_1 \cdot u_2 = (3/\sqrt{10})(-1/\sqrt{10}) + (1/\sqrt{10})(3/\sqrt{10}) = -3/10 + 3/10 = 0 $$, and that $$ \|u_1\| = \|u_2\| = 1 $$.

## Common Pitfalls

*   **Calculation Errors:** Be meticulous with your arithmetic, especially when dealing with fractions and square roots.
*   **Forgetting to Normalize:** The process yields an orthogonal basis first. Don't forget the final step of dividing by the norm to make it orthonormal.
*   **Assuming Linear Independence:** The Gram-Schmidt process relies on the input vectors being linearly independent. If they are not, you will encounter a zero vector at some stage, indicating dependency.
*   **Projection Formula Errors:** Ensure you are using the correct formula for vector projection.

By carefully following these steps and paying attention to detail, you can successfully apply the Gram-Schmidt process to construct orthonormal bases.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/orthonormal-basis-construction|Orthonormal basis construction]]
