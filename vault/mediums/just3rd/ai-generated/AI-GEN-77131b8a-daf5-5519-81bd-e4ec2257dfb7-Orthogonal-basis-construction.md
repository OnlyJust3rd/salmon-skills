---
type: "medium"
title: "Constructing an Orthogonal Basis: The Gram-Schmidt Process"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/subspaces-and-orthogonality/microskills/orthogonal-basis-construction|Orthogonal basis construction]]"
---
# Constructing an Orthogonal Basis: The Gram-Schmidt Process

This lesson focuses on the practical application of the Gram-Schmidt process to build an orthogonal basis. An orthogonal basis is a set of vectors where every pair of distinct vectors is perpendicular (their dot product is zero). This is a fundamental building block for many concepts in linear algebra, including projections and least squares.

## What is an Orthogonal Basis?

An orthogonal basis for a vector space is a set of non-zero vectors $\{v_1, v_2, \dots, v_k\}$ such that for any $i \neq j$, the dot product of $v_i$ and $v_j$ is zero:

$$
v_i \cdot v_j = 0 \quad \text{for all } i \neq j
$$

If, in addition to being orthogonal, each vector has a magnitude (or norm) of 1, the basis is called *orthonormal*.

## Why Build an Orthogonal Basis?

Orthogonal bases simplify many calculations. For instance:
*   **Projections:** Projecting a vector onto a subspace spanned by an orthogonal basis is straightforward.
*   **Coordinate Representation:** Representing vectors in terms of an orthogonal basis is simpler.
*   **Solving Systems of Equations:** Orthogonal bases can be used in techniques like the QR decomposition.

## The Gram-Schmidt Process: Step-by-Step

The Gram-Schmidt process provides a systematic way to convert a given set of linearly independent vectors into an orthogonal set that spans the same subspace.

Let's say you have a set of linearly independent vectors $\{u_1, u_2, \dots, u_k\}$. We want to construct an orthogonal basis $\{v_1, v_2, \dots, v_k\}$.

**Step 1: The First Vector**

The first orthogonal vector $v_1$ is simply the first original vector $u_1$:

$$
v_1 = u_1
$$

**Step 2: The Second Vector**

To find the second orthogonal vector $v_2$, we take the second original vector $u_2$ and subtract its projection onto the first orthogonal vector $v_1$. The projection of $u_2$ onto $v_1$ is given by:

$$
\text{proj}_{v_1} u_2 = \frac{u_2 \cdot v_1}{v_1 \cdot v_1} v_1
$$

So, the second orthogonal vector is:

$$
v_2 = u_2 - \text{proj}_{v_1} u_2 = u_2 - \frac{u_2 \cdot v_1}{v_1 \cdot v_1} v_1
$$

**Step 3: The Third Vector**

For the third orthogonal vector $v_3$, we take $u_3$ and subtract its projections onto both $v_1$ and $v_2$:

$$
v_3 = u_3 - \text{proj}_{v_1} u_3 - \text{proj}_{v_2} u_3
$$

where:
$$
\text{proj}_{v_1} u_3 = \frac{u_3 \cdot v_1}{v_1 \cdot v_1} v_1
$$
$$
\text{proj}_{v_2} u_3 = \frac{u_3 \cdot v_2}{v_2 \cdot v_2} v_2
$$

Thus:
$$
v_3 = u_3 - \frac{u_3 \cdot v_1}{v_1 \cdot v_1} v_1 - \frac{u_3 \cdot v_2}{v_2 \cdot v_2} v_2
$$

**General Step:**

For any subsequent vector $v_k$, we take $u_k$ and subtract its projections onto all previously constructed orthogonal vectors $\{v_1, v_2, \dots, v_{k-1}\}$:

$$
v_k = u_k - \sum_{i=1}^{k-1} \text{proj}_{v_i} u_k = u_k - \sum_{i=1}^{k-1} \frac{u_k \cdot v_i}{v_i \cdot v_i} v_i
$$

The resulting set $\{v_1, v_2, \dots, v_k\}$ is an orthogonal basis for the subspace spanned by $\{u_1, u_2, \dots, u_k\}$.

**Important Note:** At each step, if you obtain a zero vector (e.g., $v_2 = 0$), it means the original vector $u_k$ was linearly dependent on the previous vectors $\{u_1, \dots, u_{k-1}\}$. The Gram-Schmidt process is designed for linearly independent sets.

## Worked Example

Let's apply the Gram-Schmidt process to the set of vectors in $\mathbb{R}^3$:
$u_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$, $u_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$, $u_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.

These vectors are linearly independent.

**Step 1: Find $v_1$**

$v_1 = u_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

**Step 2: Find $v_2$**

First, calculate the necessary dot products:
$u_2 \cdot v_1 = (1)(1) + (0)(1) + (1)(0) = 1$
$v_1 \cdot v_1 = (1)(1) + (1)(1) + (0)(0) = 2$

Now, calculate the projection of $u_2$ onto $v_1$:
$\text{proj}_{v_1} u_2 = \frac{1}{2} v_1 = \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix}$

Finally, compute $v_2$:
$v_2 = u_2 - \text{proj}_{v_1} u_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}$

**Step 3: Find $v_3$**

We need to calculate more dot products:
$u_3 \cdot v_1 = (0)(1) + (1)(1) + (1)(0) = 1$
$u_3 \cdot v_2 = (0)(1/2) + (1)(-1/2) + (1)(1) = -1/2 + 1 = 1/2$
$v_2 \cdot v_2 = (1/2)(1/2) + (-1/2)(-1/2) + (1)(1) = 1/4 + 1/4 + 1 = 1/2 + 1 = 3/2$

Calculate the projections:
$\text{proj}_{v_1} u_3 = \frac{u_3 \cdot v_1}{v_1 \cdot v_1} v_1 = \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix}$
$\text{proj}_{v_2} u_3 = \frac{u_3 \cdot v_2}{v_2 \cdot v_2} v_2 = \frac{1/2}{3/2} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} = \begin{pmatrix} 1/6 \\ -1/6 \\ 1/3 \end{pmatrix}$

Now, compute $v_3$:
$v_3 = u_3 - \text{proj}_{v_1} u_3 - \text{proj}_{v_2} u_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix} - \begin{pmatrix} 1/6 \\ -1/6 \\ 1/3 \end{pmatrix}$
$v_3 = \begin{pmatrix} 0 - 1/2 - 1/6 \\ 1 - 1/2 - (-1/6) \\ 1 - 0 - 1/3 \end{pmatrix} = \begin{pmatrix} -3/6 - 1/6 \\ 1/2 + 1/6 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -4/6 \\ 3/6 + 1/6 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -2/3 \\ 4/6 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix}$

So, an orthogonal basis is:
$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$, $v_2 = \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}$, $v_3 = \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix}$.

You can verify that $v_1 \cdot v_2 = 0$, $v_1 \cdot v_3 = 0$, and $v_2 \cdot v_3 = 0$.

## Converting to an Orthonormal Basis

To obtain an orthonormal basis, simply normalize each of the orthogonal vectors you found. Normalizing a vector means dividing it by its magnitude (norm). The norm of a vector $v$ is denoted as $||v||$ and is calculated as $||v|| = \sqrt{v \cdot v}$.

For our example:
$||v_1|| = \sqrt{2}$
$||v_2|| = \sqrt{3/2} = \frac{\sqrt{6}}{2}$
$||v_3|| = \sqrt{(-2/3)^2 + (2/3)^2 + (2/3)^2} = \sqrt{4/9 + 4/9 + 4/9} = \sqrt{12/9} = \sqrt{4/3} = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$

The orthonormal basis vectors are:
$e_1 = \frac{v_1}{||v_1||} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/\sqrt{2} \\ 1/\sqrt{2} \\ 0 \end{pmatrix}$
$e_2 = \frac{v_2}{||v_2||} = \frac{1}{\sqrt{3/2}} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} = \sqrt{\frac{2}{3}} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix} = \begin{pmatrix} \sqrt{2}/(2\sqrt{3}) \\ -\sqrt{2}/(2\sqrt{3}) \\ \sqrt{2}/\sqrt{3} \end{pmatrix} = \begin{pmatrix} \sqrt{6}/6 \\ -\sqrt{6}/6 \\ \sqrt{6}/3 \end{pmatrix}$
$e_3 = \frac{v_3}{||v_3||} = \frac{1}{2/\sqrt{3}} \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix} = \frac{\sqrt{3}}{2} \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -\sqrt{3}/3 \\ \sqrt{3}/3 \\ \sqrt{3}/3 \end{pmatrix}$

This process allows you to transform any set of linearly independent vectors into an orthogonal or orthonormal basis for the subspace they generate.

## Supports

- [[skills/mathematics/subspaces-and-orthogonality/microskills/orthogonal-basis-construction|Orthogonal basis construction]]
