---
type: "medium"
title: "Gram-Schmidt Algorithm Steps"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/gram-schmidt-algorithm-steps|gram-schmidt-algorithm-steps]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/subspaces-and-orthogonality|subspaces-and-orthogonality]]"
learning-time-in-minutes: 5
---
# Gram-Schmidt Algorithm Steps

This lesson focuses on the practical execution of the Gram-Schmidt algorithm. We'll walk through the steps to transform a set of linearly independent vectors into an orthogonal basis. This is a core part of constructing orthogonal and orthonormal bases, which are fundamental in many areas of linear algebra and its applications.

## Why Use Gram-Schmidt?

The Gram-Schmidt process is a systematic way to create an orthogonal basis from any given set of linearly independent vectors. An orthogonal basis is incredibly useful because:

*   **Simplifies calculations:** Projections, solving linear systems, and representing vectors become much easier.
*   **Forms the foundation for orthonormal bases:** By normalizing the orthogonal vectors, we get an orthonormal basis, which is even more convenient (e.g., for matrix operations).

## The Algorithm: Step-by-Step

Let's say we have a set of linearly independent vectors $\{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \}$ in a vector space. We want to construct an orthogonal set of vectors $\{ \mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k \}$ that spans the same subspace.

**Step 1: The First Vector**

The first orthogonal vector is simply the first vector from our original set.

$$
\mathbf{u}_1 = \mathbf{v}_1
$$

**Step 2: The Second Vector**

To find the second orthogonal vector, $\mathbf{u}_2$, we take $\mathbf{v}_2$ and subtract its projection onto $\mathbf{u}_1$. This projection represents the "part" of $\mathbf{v}_2$ that lies in the direction of $\mathbf{u}_1$. By removing this component, we ensure $\mathbf{u}_2$ is orthogonal to $\mathbf{u}_1$.

The projection of $\mathbf{v}_2$ onto $\mathbf{u}_1$ is given by:
$$
\text{proj}_{\mathbf{u}_1} \mathbf{v}_2 = \frac{\mathbf{v}_2 \cdot \mathbf{u}_1}{\mathbf{u}_1 \cdot \mathbf{u}_1} \mathbf{u}_1
$$
where $ \cdot $ denotes the dot product.

So, the formula for $\mathbf{u}_2$ is:
$$
\mathbf{u}_2 = \mathbf{v}_2 - \text{proj}_{\mathbf{u}_1} \mathbf{v}_2 = \mathbf{v}_2 - \frac{\mathbf{v}_2 \cdot \mathbf{u}_1}{\mathbf{u}_1 \cdot \mathbf{u}_1} \mathbf{u}_1
$$

**Step 3: The Third Vector**

For the third orthogonal vector, $\mathbf{u}_3$, we take $\mathbf{v}_3$ and subtract its projections onto both $\mathbf{u}_1$ and $\mathbf{u}_2$. This removes the components of $\mathbf{v}_3$ that lie in the directions of the previously constructed orthogonal vectors.

The projections are:
$$
\text{proj}_{\mathbf{u}_1} \mathbf{v}_3 = \frac{\mathbf{v}_3 \cdot \mathbf{u}_1}{\mathbf{u}_1 \cdot \mathbf{u}_1} \mathbf{u}_1
$$
$$
\text{proj}_{\mathbf{u}_2} \mathbf{v}_3 = \frac{\mathbf{v}_3 \cdot \mathbf{u}_2}{\mathbf{u}_2 \cdot \mathbf{u}_2} \mathbf{u}_2
$$

So, the formula for $\mathbf{u}_3$ is:
$$
\mathbf{u}_3 = \mathbf{v}_3 - \text{proj}_{\mathbf{u}_1} \mathbf{v}_3 - \text{proj}_{\mathbf{u}_2} \mathbf{v}_3 = \mathbf{v}_3 - \frac{\mathbf{v}_3 \cdot \mathbf{u}_1}{\mathbf{u}_1 \cdot \mathbf{u}_1} \mathbf{u}_1 - \frac{\mathbf{v}_3 \cdot \mathbf{u}_2}{\mathbf{u}_2 \cdot \mathbf{u}_2} \mathbf{u}_2
$$

**General Step: The $j$-th Vector**

For any subsequent vector $\mathbf{v}_j$, we construct $\mathbf{u}_j$ by taking $\mathbf{v}_j$ and subtracting its projection onto each of the previously constructed orthogonal vectors $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_{j-1}$.

The general formula is:
$$
\mathbf{u}_j = \mathbf{v}_j - \sum_{i=1}^{j-1} \text{proj}_{\mathbf{u}_i} \mathbf{v}_j = \mathbf{v}_j - \sum_{i=1}^{j-1} \frac{\mathbf{v}_j \cdot \mathbf{u}_i}{\mathbf{u}_i \cdot \mathbf{u}_i} \mathbf{u}_i
$$

## Worked Example

Let's apply the Gram-Schmidt process to construct an orthogonal basis from the following set of linearly independent vectors in $\mathbb{R}^3$:
$$
\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{v}_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad \mathbf{v}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}
$$

**Step 1: Find $\mathbf{u}_1$**

$$
\mathbf{u}_1 = \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}
$$

**Step 2: Find $\mathbf{u}_2$**

First, calculate the dot products needed:
$$
\mathbf{v}_2 \cdot \mathbf{u}_1 = (1)(1) + (0)(1) + (1)(0) = 1
$$
$$
\mathbf{u}_1 \cdot \mathbf{u}_1 = (1)(1) + (1)(1) + (0)(0) = 2
$$

Now, apply the formula:
$$
\mathbf{u}_2 = \mathbf{v}_2 - \frac{\mathbf{v}_2 \cdot \mathbf{u}_1}{\mathbf{u}_1 \cdot \mathbf{u}_1} \mathbf{u}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}
$$

**Step 3: Find $\mathbf{u}_3$**

First, calculate the dot products needed:
$$
\mathbf{v}_3 \cdot \mathbf{u}_1 = (0)(1) + (1)(1) + (1)(0) = 1
$$
$$
\mathbf{u}_1 \cdot \mathbf{u}_1 = 2 \quad (\text{calculated previously})
$$
$$
\mathbf{v}_3 \cdot \mathbf{u}_2 = (0)(1/2) + (1)(-1/2) + (1)(1) = -1/2 + 1 = 1/2
$$
$$
\mathbf{u}_2 \cdot \mathbf{u}_2 = (1/2)(1/2) + (-1/2)(-1/2) + (1)(1) = 1/4 + 1/4 + 1 = 1/2 + 1 = 3/2
$$

Now, apply the formula:
$$
\mathbf{u}_3 = \mathbf{v}_3 - \frac{\mathbf{v}_3 \cdot \mathbf{u}_1}{\mathbf{u}_1 \cdot \mathbf{u}_1} \mathbf{u}_1 - \frac{\mathbf{v}_3 \cdot \mathbf{u}_2}{\mathbf{u}_2 \cdot \mathbf{u}_2} \mathbf{u}_2
$$
$$
\mathbf{u}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} - \frac{1/2}{3/2} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}
$$
$$
\mathbf{u}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix} - \frac{1}{3} \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}
$$
$$
\mathbf{u}_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix} - \begin{pmatrix} 1/6 \\ -1/6 \\ 1/3 \end{pmatrix}
$$
$$
\mathbf{u}_3 = \begin{pmatrix} 0 - 1/2 - 1/6 \\ 1 - 1/2 - (-1/6) \\ 1 - 0 - 1/3 \end{pmatrix} = \begin{pmatrix} -3/6 - 1/6 \\ 1/2 + 1/6 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -4/6 \\ 3/6 + 1/6 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -2/3 \\ 4/6 \\ 2/3 \end{pmatrix} = \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix}
$$

So, the orthogonal basis is:
$$
\mathbf{u}_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad \mathbf{u}_2 = \begin{pmatrix} 1/2 \\ -1/2 \\ 1 \end{pmatrix}, \quad \mathbf{u}_3 = \begin{pmatrix} -2/3 \\ 2/3 \\ 2/3 \end{pmatrix}
$$

You can verify orthogonality by computing the dot products:
$$
\mathbf{u}_1 \cdot \mathbf{u}_2 = (1)(1/2) + (1)(-1/2) + (0)(1) = 1/2 - 1/2 + 0 = 0
$$
$$
\mathbf{u}_1 \cdot \mathbf{u}_3 = (1)(-2/3) + (1)(2/3) + (0)(2/3) = -2/3 + 2/3 + 0 = 0
$$
$$
\mathbf{u}_2 \cdot \mathbf{u}_3 = (1/2)(-2/3) + (-1/2)(2/3) + (1)(2/3) = -1/3 - 1/3 + 2/3 = 0
$$

## Common Pitfalls

*   **Calculation Errors:** The most common issue is arithmetic mistakes, especially with fractions. Double-check your dot products and vector subtractions.
*   **Forgetting a Projection:** When calculating $\mathbf{u}_j$, ensure you subtract projections onto *all* preceding orthogonal vectors ($\mathbf{u}_1$ through $\mathbf{u}_{j-1}$).
*   **Zero Vector:** If at any step $\mathbf{u}_j$ turns out to be the zero vector, it means the original set of vectors $\{ \mathbf{v}_1, \ldots, \mathbf{v}_j \}$ was linearly dependent, not linearly independent as assumed. The Gram-Schmidt process requires linearly independent input.

By following these steps meticulously, you can successfully apply the Gram-Schmidt process to generate orthogonal bases.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/gram-schmidt-algorithm-steps|Gram-Schmidt algorithm steps]]
