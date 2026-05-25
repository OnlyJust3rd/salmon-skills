---
type: "medium"
title: "Projecting onto a Subspace"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/projection-onto-subspace-concept|projection-onto-subspace-concept]]"
learning-time-in-minutes: 4
---
# Projecting onto a Subspace

When we talk about projecting a vector, we often think about projecting it onto another vector. But what happens when we want to project a vector onto a larger structure, like a plane or a line in 3D space? This is where the concept of projecting onto a *subspace* comes in.

## What is a Subspace?

Before we project, let's quickly recall what a subspace is. In simple terms, a subspace is a "flat" structure within a larger vector space that contains the zero vector and is closed under addition and scalar multiplication. Think of lines through the origin and planes through the origin as common examples of subspaces in $\mathbb{R}^2$ and $\mathbb{R}^3$.

## The Core Idea: Finding the "Closest" Point

Imagine you have a vector, let's call it **v**, and a subspace, let's call it $W$. Projecting **v** onto $W$ means finding the vector within $W$ that is *closest* to **v**. Geometrically, this "closest" vector is the one that minimizes the distance between **v** and any vector in $W$.

This closest vector is called the **orthogonal projection** of **v** onto $W$, and we often denote it as $\text{proj}_W \mathbf{v}$.

## Why is it "Orthogonal"?

The reason it's called an *orthogonal* projection is due to a key property: the vector connecting the original vector **v** to its projection $\text{proj}_W \mathbf{v}$ is orthogonal (perpendicular) to *every* vector in the subspace $W$.

Let's visualize this in 3D. If $W$ is a plane through the origin, and **v** is a vector pointing away from that plane:

*   The projection $\text{proj}_W \mathbf{v}$ will be a vector that lies *on* the plane $W$.
*   The vector difference, $\mathbf{v} - \text{proj}_W \mathbf{v}$, will be a vector that is perpendicular to the plane $W$.

This difference vector is sometimes called the "error vector" or the "residual vector."

$$
\mathbf{v} - \text{proj}_W \mathbf{v} \perp W
$$

This means that $\mathbf{v} - \text{proj}_W \mathbf{v}$ is orthogonal to *any* vector $\mathbf{w}$ that belongs to the subspace $W$.

$$
(\mathbf{v} - \text{proj}_W \mathbf{v}) \cdot \mathbf{w} = 0 \quad \text{for all } \mathbf{w} \in W
$$

## The "Best Approximation"

This geometric interpretation leads to a crucial understanding: the orthogonal projection of a vector onto a subspace is the **best linear approximation** of that vector within the subspace. If you're trying to represent a vector **v** using only vectors from a subspace $W$ (perhaps due to limitations or wanting a simpler representation), the projection $\text{proj}_W \mathbf{v}$ is the best choice because it's the closest you can get to **v** using elements of $W$.

## How is it Found (The Concept)?

While we won't dive deep into the calculation here, the *concept* of finding the projection involves:

1.  **Understanding the Subspace's Basis:** A subspace is often defined by a set of basis vectors. These are a minimal set of linearly independent vectors that can "span" the entire subspace. For example, a plane in $\mathbb{R}^3$ can be spanned by two non-parallel vectors.
2.  **Decomposition:** The idea is to decompose the vector **v** into two components: one component that lies *within* the subspace $W$ (this is the projection), and another component that is *orthogonal* to $W$.

Mathematically, this decomposition looks like:

$$
\mathbf{v} = \text{proj}_W \mathbf{v} + (\mathbf{v} - \text{proj}_W \mathbf{v})
$$

where $\text{proj}_W \mathbf{v} \in W$ and $(\mathbf{v} - \text{proj}_W \mathbf{v})$ is orthogonal to $W$.

## Key Takeaways

*   Projecting a vector onto a subspace means finding the vector within that subspace that is geometrically closest to the original vector.
*   This closest vector is the orthogonal projection.
*   A defining characteristic is that the "error" vector (original vector minus its projection) is orthogonal to the entire subspace.
*   The projection represents the "best approximation" of the original vector using only elements from the subspace.

Understanding this conceptual foundation is vital for grasping more complex applications like least-squares approximations and solving systems of linear equations.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/projection-onto-subspace-concept|Projection onto subspace concept]]
