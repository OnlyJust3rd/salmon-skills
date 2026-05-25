---
type: "medium"
title: "Understanding the Range of a Linear Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/range-definition|range-definition]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/subspaces-and-orthogonality/subspaces-and-orthogonality|subspaces-and-orthogonality]]"
learning-time-in-minutes: 3
---
# Understanding the Range of a Linear Transformation

In linear algebra, understanding the fundamental subspaces of a matrix or linear transformation is crucial. One of these key subspaces is the **range**. This lesson focuses on recalling and understanding the definition of the range.

## What is the Range?

Imagine you have a linear transformation, often represented by a matrix. This transformation takes vectors from one space and maps them to vectors in another space. The **range** of this transformation is the set of all possible output vectors that can be produced.

### Formal Definition

For a linear transformation $T: V \to W$ (where $V$ is the input vector space and $W$ is the output vector space), the range of $T$, denoted as $Range(T)$ or $R(T)$, is defined as:

$$
Range(T) = \{w \in W \mid w = T(v) \text{ for some } v \in V\}
$$

In simpler terms, the range is the collection of all vectors in the output space $W$ that are *reachable* by applying the transformation $T$ to *any* vector $v$ from the input space $V$.

### Range of a Matrix

If your linear transformation is represented by a matrix $A$ of size $m \times n$, which maps vectors from $\mathbb{R}^n$ to $\mathbb{R}^m$, then the range of the transformation $T(x) = Ax$ is the same as the **column space** of the matrix $A$.

The column space of a matrix $A$ is the span of its column vectors.

$$
Col(A) = \text{span}\{\text{column}_1, \text{column}_2, \dots, \text{column}_n\}
$$

This means that any vector in the range of the linear transformation $Ax$ can be expressed as a linear combination of the columns of $A$.

## Key Ideas to Remember

*   **Output Space:** The range is a subset of the *output* vector space.
*   **Reachability:** It's about what vectors the transformation can *produce*.
*   **Span of Columns:** For a matrix $A$, the range is equivalent to its column space.
*   **Linear Combinations:** Any vector in the range can be formed by adding up the columns of the matrix, scaled by some coefficients.

## Example

Let's consider a matrix $A$:

$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
$$

This matrix represents a linear transformation from $\mathbb{R}^2$ to $\mathbb{R}^2$. The columns of $A$ are $\begin{pmatrix} 1 \\ 3 \end{pmatrix}$ and $\begin{pmatrix} 2 \\ 4 \end{pmatrix}$.

The range of the linear transformation $T(x) = Ax$ is the span of these column vectors. This means any vector $\begin{pmatrix} y_1 \\ y_2 \end{pmatrix}$ in the range can be written as:

$$
\begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 3 \end{pmatrix} + c_2 \begin{pmatrix} 2 \\ 4 \end{pmatrix}
$$

for some scalars $c_1$ and $c_2$.

In this specific case, since the columns are linearly independent, they form a basis for $\mathbb{R}^2$. Therefore, *every* vector in $\mathbb{R}^2$ can be expressed as a linear combination of these columns. So, the range of this particular transformation is the entire output space $\mathbb{R}^2$.

## Common Misconceptions to Avoid

*   **Confusing Range with Domain:** The domain is the set of all possible input vectors, while the range is the set of all possible output vectors.
*   **Thinking the Range is Always the Entire Output Space:** This is only true for transformations that are surjective (onto). For many transformations, the range is a proper subspace of the output space.
*   **Confusing Range with Row Space:** The row space is related to the input space and is defined by the span of the rows of the matrix. The range is related to the output space and is defined by the span of the columns.

By recalling and understanding the definition of the range, you build a solid foundation for exploring other fundamental subspaces and their relationships.

## Supports

- [[skills/mathematics/linear-algebra/subspaces-and-orthogonality/microskills/range-definition|Range definition]]
