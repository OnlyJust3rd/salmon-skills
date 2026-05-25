---
type: "medium"
title: "Understanding Definiteness Properties of Quadratic Forms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/definiteness-properties|definiteness-properties]]"
learning-time-in-minutes: 5
---
# Understanding Definiteness Properties of Quadratic Forms

When we analyze quadratic forms, one of the most insightful properties is their "definiteness." This tells us about the behavior of the quadratic form's output for different input vectors. Think of it like classifying how a function behaves: does it always go up, always go down, or do a mix?

## What are Definiteness Properties?

The definiteness of a quadratic form, represented by a symmetric matrix $$A$$, describes the sign of its output $$x^T A x$$ for non-zero vectors $$x$$.

*   **Positive Definite:** The quadratic form is positive definite if $$x^T A x > 0$$ for all non-zero vectors $$x$$. This means the output is always positive, regardless of the input vector (as long as it's not the zero vector).
*   **Negative Definite:** The quadratic form is negative definite if $$x^T A x < 0$$ for all non-zero vectors $$x$$. The output is always negative.
*   **Indefinite:** The quadratic form is indefinite if it takes on both positive and negative values for different non-zero vectors $$x$$. It can be positive for some inputs and negative for others.
*   **Positive Semidefinite:** The quadratic form is positive semidefinite if $$x^T A x \ge 0$$ for all non-zero vectors $$x$$. The output is always non-negative, meaning it can be zero for some non-zero inputs.
*   **Negative Semidefinite:** The quadratic form is negative semidefinite if $$x^T A x \le 0$$ for all non-zero vectors $$x$$. The output is always non-positive, meaning it can be zero for some non-zero inputs.

## Why are these Properties Important?

Understanding definiteness is crucial in various fields, especially optimization and stability analysis.

*   **Optimization:** In finding the minimum or maximum of a function, the definiteness of the Hessian matrix (which is related to quadratic forms) at a critical point tells us if that point is a local minimum (positive definite), a local maximum (negative definite), or a saddle point (indefinite).
*   **Stability:** In systems engineering, the definiteness of certain matrices can indicate whether a system will return to equilibrium after a disturbance (stable) or move away from it (unstable).

## How to Determine Definiteness

While directly testing every possible non-zero vector is impossible, there are mathematical tools to determine definiteness. The most common method involves eigenvalues or a related concept called Sylvester's Criterion.

### Using Eigenvalues

A powerful property is that the definiteness of a symmetric matrix $$A$$ is directly related to the signs of its eigenvalues.

*   **Positive Definite:** All eigenvalues of $$A$$ are strictly positive ($$\lambda_i > 0$$ for all $$i$$).
*   **Negative Definite:** All eigenvalues of $$A$$ are strictly negative ($$\lambda_i < 0$$ for all $$i$$).
*   **Positive Semidefinite:** All eigenvalues of $$A$$ are non-negative ($$\lambda_i \ge 0$$ for all $$i$$), with at least one eigenvalue being zero.
*   **Negative Semidefinite:** All eigenvalues of $$A$$ are non-positive ($$\lambda_i \le 0$$ for all $$i$$), with at least one eigenvalue being zero.
*   **Indefinite:** $$A$$ has at least one positive eigenvalue and at least one negative eigenvalue.

#### Example: Eigenvalues

Let's consider the quadratic form $$Q(x_1, x_2) = 2x_1^2 + 4x_1x_2 + 5x_2^2$$.
The associated symmetric matrix is $$A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$$.

To find the eigenvalues, we solve the characteristic equation $$\det(A - \lambda I) = 0$$:
$$
\begin{vmatrix} 2-\lambda & 2 \\ 2 & 5-\lambda \end{vmatrix} = 0
$$
$$
(2-\lambda)(5-\lambda) - 4 = 0
$$
$$
10 - 2\lambda - 5\lambda + \lambda^2 - 4 = 0
$$
$$
\lambda^2 - 7\lambda + 6 = 0
$$
Factoring, we get $$(\lambda - 1)(\lambda - 6) = 0$$.
The eigenvalues are $$\lambda_1 = 1$$ and $$\lambda_2 = 6$$.

Since both eigenvalues are positive, the quadratic form is **positive definite**.

### Using Sylvester's Criterion

Sylvester's Criterion provides a way to check definiteness using the leading principal minors of the symmetric matrix $$A$$. The leading principal minors are the determinants of the submatrices formed by the first $$k$$ rows and $$k$$ columns, for $$k = 1, 2, \dots, n$$, where $$n$$ is the size of the matrix.

*   **Positive Definite:** All leading principal minors are strictly positive.
*   **Negative Definite:** The leading principal minors alternate in sign, starting with negative: $$ \det(A_1) < 0, \det(A_2) > 0, \det(A_3) < 0, \dots $$
*   **Indefinite, Positive Semidefinite, Negative Semidefinite:** If neither of the above conditions holds, the matrix is one of these types. Further checks or eigenvalue analysis are needed to distinguish them.

#### Example: Sylvester's Criterion

Using the same matrix $$A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$$.

*   The first leading principal minor is $$\det(A_1) = \det(2) = 2$$.
*   The second leading principal minor is $$\det(A_2) = \det\begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix} = (2 \times 5) - (2 \times 2) = 10 - 4 = 6$$.

Since both leading principal minors (2 and 6) are strictly positive, the matrix is **positive definite** according to Sylvester's Criterion.

## Common Mistakes to Avoid

*   **Confusing Semidefinite with Definite:** Remember that semidefinite allows for the quadratic form to be zero for non-zero vectors, while definite requires it to be strictly positive or negative.
*   **Ignoring Symmetry:** Definiteness properties and the eigenvalue/Sylvester's Criterion methods are primarily for **symmetric** matrices. If your matrix is not symmetric, you first need to find its symmetric part (e.g., $$(A + A^T)/2$$) if you want to discuss definiteness in this context.
*   **Misinterpreting Eigenvalues:** Ensure you check *all* eigenvalues. One zero eigenvalue or a mix of positive and negative eigenvalues changes the definiteness entirely.

By understanding these definiteness properties, you gain a deeper insight into the behavior of quadratic forms and their applications in mathematics and beyond.

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/definiteness-properties|Definiteness properties]]
