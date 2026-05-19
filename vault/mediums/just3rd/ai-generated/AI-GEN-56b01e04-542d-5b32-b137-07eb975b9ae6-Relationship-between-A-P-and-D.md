---
type: "medium"
title: "The Diagonalization Equation: A = PDP⁻¹"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/relationship-between-a-p-and-d|Relationship between A, P, and D]]"
---
# The Diagonalization Equation: A = PDP⁻¹

In spectral analysis, a fundamental concept is that of **diagonalization**. This process allows us to simplify a matrix by transforming it into a diagonal matrix, which is much easier to work with. The key to this transformation lies in the relationship between the original matrix, its eigenvalues, and its eigenvectors. This lesson focuses on understanding the equation that captures this relationship: $$ A = PDP⁻¹ $$, or its equivalent form, $$ D = P⁻¹AP $$.

## Understanding the Components

Before diving into the equation, let's quickly recap the roles of the players involved:

*   **Matrix A**: This is the original square matrix we are trying to diagonalize.
*   **Eigenvalues (λ)**: These are special scalar values associated with a linear transformation (represented by matrix A) that describe how vectors are scaled. They are the diagonal entries of the diagonal matrix D.
*   **Eigenvectors (v)**: These are non-zero vectors that, when multiplied by matrix A, are simply scaled by the corresponding eigenvalue. They are the columns of the matrix P.
*   **Matrix P**: This is a matrix whose columns are the eigenvectors of A. For diagonalization to be possible, matrix P must be invertible, meaning its columns must be linearly independent.
*   **Diagonal Matrix D**: This is a square matrix with the eigenvalues of A on its main diagonal and zeros everywhere else.

## The Core Relationship: A = PDP⁻¹

The equation $$ A = PDP⁻¹ $$ is the cornerstone of diagonalization. It tells us that the original matrix $$ A $$ can be expressed as a product of three matrices:

1.  **$$ P $$**: The matrix whose columns are the eigenvectors of $$ A $$.
2.  **$$ D $$**: The diagonal matrix containing the eigenvalues of $$ A $$ on its diagonal, corresponding to the order of the eigenvectors in $$ P $$.
3.  **$$ P⁻¹ $$**: The inverse of the eigenvector matrix $$ P $$.

### What does this equation *mean*?

Think of it this way:

*   **$$ P $$ transforms basis**: The matrix $$ P $$ essentially acts as a change-of-basis matrix. It transforms vectors from the standard basis into the basis formed by the eigenvectors of $$ A $$.
*   **$$ D $$ scales in the new basis**: In the basis of eigenvectors, the linear transformation represented by $$ A $$ becomes a simple scaling operation. This is what the diagonal matrix $$ D $$ captures – each diagonal entry is an eigenvalue, representing the scaling factor along the direction of the corresponding eigenvector.
*   **$$ P⁻¹ $$ transforms back**: The inverse matrix $$ P⁻¹ $$ then transforms vectors back from the eigenvector basis to the original standard basis.

So, the equation $$ A = PDP⁻¹ $$ means that applying the transformation $$ A $$ to a vector is equivalent to:
1.  Changing the vector's representation to the eigenvector basis (multiplying by $$ P $$).
2.  Scaling the vector by the eigenvalues (multiplying by $$ D $$).
3.  Changing the vector's representation back to the standard basis (multiplying by $$ P⁻¹ $$).

This is why diagonalization is so powerful: it reveals the fundamental scaling behavior of the transformation $$ A $$ along specific directions (the eigenvectors).

## The Inverse Relationship: D = P⁻¹AP

The equation $$ D = P⁻¹AP $$ is algebraically equivalent to $$ A = PDP⁻¹ $$. If you multiply both sides of $$ A = PDP⁻¹ $$ by $$ P⁻¹ $$ on the left, you get:

$$ P⁻¹A = P⁻¹(PDP⁻¹) $$
$$ P⁻¹A = (P⁻¹P)D(P⁻¹) $$
$$ P⁻¹A = ID(P⁻¹) $$ (where $$ I $$ is the identity matrix)
$$ P⁻¹A = DP⁻¹ $$

Now, multiply both sides by $$ P $$ on the right:

$$ P⁻¹AP = D(P⁻¹P) $$
$$ P⁻¹AP = DI $$
$$ P⁻¹AP = D $$

This form, $$ D = P⁻¹AP $$, is often seen as a **similarity transformation**. It shows that the diagonal matrix $$ D $$ (containing the eigenvalues) is similar to the original matrix $$ A $$. Similar matrices represent the same linear transformation but with respect to different bases. In this case, $$ D $$ represents the transformation in the basis of eigenvectors, while $$ A $$ represents it in the standard basis.

## Summary

The relationship $$ A = PDP⁻¹ $$ (or $$ D = P⁻¹AP $$) is a fundamental result in linear algebra and spectral analysis. It elegantly connects a matrix $$ A $$ with its eigenvalues and eigenvectors.

*   **$$ P $$**: Matrix of eigenvectors.
*   **$$ D $$**: Diagonal matrix of eigenvalues.
*   **$$ P⁻¹ $$**: Inverse of the eigenvector matrix.

This equation tells us that a matrix $$ A $$ can be "decomposed" into these components, revealing its underlying scaling behavior along the directions of its eigenvectors. This decomposition simplifies many matrix operations, such as calculating powers of a matrix or solving systems of differential equations.

## Supports

- [[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/relationship-between-a-p-and-d|Relationship between A, P, and D]]
