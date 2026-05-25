---
type: "medium"
title: "Classifying Quadratic Forms as Indefinite"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/indefinite-classification|indefinite-classification]]"
learning-time-in-minutes: 4
---
# Classifying Quadratic Forms as Indefinite

We've learned how to use eigenvalues to test the definiteness of a quadratic form. Now, let's focus on a specific scenario: **indefinite classification**. This occurs when a quadratic form can take on both positive and negative values, depending on the input vector.

## What is an Indefinite Quadratic Form?

A quadratic form is called **indefinite** if it can produce both positive and negative outputs for different non-zero input vectors. This means it doesn't consistently stay positive or consistently stay negative.

The key to identifying an indefinite quadratic form lies in its eigenvalues.

### The Eigenvalue Test for Indefiniteness

The eigenvalue test is a powerful tool. Recall that for a symmetric matrix $A$ associated with a quadratic form $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$, the definiteness is determined by the signs of its eigenvalues:

*   **Positive Definite:** All eigenvalues are strictly positive.
*   **Negative Definite:** All eigenvalues are strictly negative.
*   **Positive Semidefinite:** All eigenvalues are non-negative (greater than or equal to zero).
*   **Negative Semidefinite:** All eigenvalues are non-positive (less than or equal to zero).
*   **Indefinite:** The eigenvalues have mixed signs (at least one positive and at least one negative).

Therefore, to classify a quadratic form as indefinite using the eigenvalue test, we need to find that its associated symmetric matrix has at least one positive eigenvalue AND at least one negative eigenvalue.

## Applying the Test: A Worked Example

Let's consider the quadratic form:
$$Q(x, y) = x^2 - y^2$$

**Step 1: Identify the Associated Symmetric Matrix**

We can rewrite $Q(x, y)$ in matrix form. The matrix $A$ will be symmetric. For $Q(x, y) = ax^2 + by^2 + 2cxy$, the matrix is:
$$
A = \begin{pmatrix}
a & c \\
c & b
\end{pmatrix}
$$
In our case, $a=1$, $b=-1$, and there is no $xy$ term, so $c=0$.
$$
A = \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

**Step 2: Calculate the Eigenvalues**

To find the eigenvalues ($\lambda$), we solve the characteristic equation: $\det(A - \lambda I) = 0$, where $I$ is the identity matrix.

$$
A - \lambda I = \begin{pmatrix}
1 - \lambda & 0 \\
0 & -1 - \lambda
\end{pmatrix}
$$

Now, calculate the determinant:
$$
\det(A - \lambda I) = (1 - \lambda)(-1 - \lambda) - (0)(0) = (1 - \lambda)(-1 - \lambda)
$$

Set the determinant to zero:
$$
(1 - \lambda)(-1 - \lambda) = 0
$$

This equation gives us two solutions:
$$
1 - \lambda = 0 \implies \lambda_1 = 1
$$
$$
-1 - \lambda = 0 \implies \lambda_2 = -1
$$

**Step 3: Classify Based on Eigenvalue Signs**

We have found the eigenvalues to be $\lambda_1 = 1$ and $\lambda_2 = -1$.

*   One eigenvalue is positive ($1 > 0$).
*   One eigenvalue is negative ($-1 < 0$).

Since the eigenvalues have mixed signs, the quadratic form $Q(x, y) = x^2 - y^2$ is classified as **indefinite**.

## Why is this Classification Important?

Understanding if a quadratic form is indefinite tells us that its behavior is not uniform. For instance, in optimization problems, an indefinite quadratic form at a critical point indicates that it's neither a local minimum nor a local maximum. Instead, it signifies a saddle point, where the function increases in some directions and decreases in others. This is crucial for analyzing the stability of systems or the nature of extrema in multi-variable calculus.

## Common Pitfalls

*   **Confusing with Semidefinite:** Don't mistake a quadratic form with at least one positive and at least one zero eigenvalue for indefinite. An indefinite form *must* have at least one strictly positive and at least one strictly negative eigenvalue.
*   **Incorrectly Forming the Matrix:** Ensure the matrix $A$ is symmetric. If the quadratic form is given without explicit matrix form, correctly extract the coefficients. For $ax^2 + by^2 + cz^2 + 2dxy + 2exz + 2fyz$, the matrix is:
    $$
    A = \begin{pmatrix}
    a & d & e \\
    d & b & f \\
    e & f & c
    \end{pmatrix}
    $$
*   **Calculation Errors:** Eigenvalue calculations can be prone to arithmetic errors. Double-check your determinant and root-finding steps.

By systematically applying the eigenvalue test and carefully examining the signs of the resulting eigenvalues, you can confidently classify quadratic forms as indefinite.

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/indefinite-classification|Indefinite classification]]
