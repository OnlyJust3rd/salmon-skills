---
type: "medium"
title: "Understanding the Range of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/linear-transformations/microskills/range-definition-for-transformation|range-definition-for-transformation]]"
---
# Understanding the Range of a Linear Transformation

In the study of linear transformations, understanding the *output* of the transformation is just as important as understanding how it operates. The **range** of a linear transformation tells us precisely this: it's the set of all possible outputs we can get when we apply the transformation to any vector in its domain.

### What is the Range?

Let's consider a linear transformation $T$ that maps vectors from a vector space $V$ to a vector space $W$. We can represent this as $T: V \to W$.

> The **range** of a linear transformation $T$, often denoted as $Range(T)$ or $Im(T)$ (for image of $T$), is the set of all vectors in the codomain $W$ that are the image of at least one vector in the domain $V$.
>
> Mathematically, this is written as:
> $$ Range(T) = \{ T(v) \mid v \in V \} $$

Think of it this way: the domain $V$ is where our input vectors live, and the codomain $W$ is the "target space" where the output vectors live. The range is a *subset* of the codomain, containing only those vectors that the transformation $T$ can actually produce.

### Why is the Range Important?

The range is a fundamental concept in linear algebra for several reasons:

1.  **Understanding the Transformation's "Reach":** It tells us the extent of what the transformation can transform into. If the range is small, the transformation is quite restrictive in its outputs. If the range is large, it can produce a wider variety of vectors.
2.  **Relationship with Other Concepts:** The size and structure of the range are directly related to other important properties of linear transformations, such as the null space (kernel) and the dimension of these spaces (nullity and rank).
3.  **Solving Systems of Equations:** The range plays a crucial role in determining whether a system of linear equations represented by a matrix has a solution. A vector $b$ is in the range of the linear transformation $T$ represented by matrix $A$ if and only if the equation $Ax = b$ has at least one solution $x$.

### Example: A 2D to 3D Transformation

Let's consider a linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^3$ defined by $T(x, y) = (x, y, x+y)$.

The domain is $\mathbb{R}^2$, and the codomain is $\mathbb{R}^3$. We want to find the set of all possible outputs $T(x, y)$.

Let's pick some input vectors:
*   If $(x, y) = (1, 0)$, then $T(1, 0) = (1, 0, 1+0) = (1, 0, 1)$.
*   If $(x, y) = (0, 1)$, then $T(0, 1) = (0, 1, 0+1) = (0, 1, 1)$.
*   If $(x, y) = (2, 3)$, then $T(2, 3) = (2, 3, 2+3) = (2, 3, 5)$.

The range is the set of all vectors of the form $(x, y, x+y)$ for any real numbers $x$ and $y$.
Notice that the third component of any output vector is always the sum of the first two components. This means that any vector in the range must satisfy the condition $z = x+y$, where $(x, y, z)$ is the vector in $\mathbb{R}^3$.

So, the range of $T$ is the set:
$$ Range(T) = \{ (x, y, z) \in \mathbb{R}^3 \mid z = x+y \} $$

This set describes a plane in $\mathbb{R}^3$ that passes through the origin. Any vector in this plane is an achievable output of our transformation $T$.

### Misconceptions to Avoid

*   **Confusing Codomain and Range:** The codomain is the *potential* space of outputs, while the range is the *actual* set of achievable outputs. The range is always a subset of the codomain.
*   **Thinking the Range is Always the Entire Codomain:** This is only true for surjective (or onto) linear transformations. Many transformations have a range that is a proper subspace of the codomain.

Understanding the definition of the range is the first step in analyzing the properties of a linear transformation. In subsequent lessons, we will explore how to compute the range, often using the matrix representation of the transformation, and how it relates to other key concepts like the kernel and the Rank-Nullity Theorem.

## Supports

- [[skills/mathematics/linear-transformations/microskills/range-definition-for-transformation|Range definition for transformation]]
