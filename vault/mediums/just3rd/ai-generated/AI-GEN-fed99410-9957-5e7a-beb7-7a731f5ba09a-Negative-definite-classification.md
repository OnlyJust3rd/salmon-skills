---
type: "medium"
title: "Classifying Quadratic Forms: Negative Definite"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/quadratic-forms-and-definiteness/microskills/negative-definite-classification|negative-definite-classification]]"
---
# Classifying Quadratic Forms: Negative Definite

This lesson focuses on a specific aspect of determining the definiteness of a quadratic form using the eigenvalue test: identifying when a quadratic form is **negative definite**.

## What is a Negative Definite Quadratic Form?

A quadratic form is considered **negative definite** if it always evaluates to a negative value for any input vector, except for the zero vector, for which it equals zero.

Mathematically, for a quadratic form $Q(\mathbf{x})$, it is negative definite if:
*   $Q(\mathbf{x}) < 0$ for all $\mathbf{x} \neq \mathbf{0}$
*   $Q(\mathbf{0}) = 0$

## The Eigenvalue Test for Negative Definiteness

The eigenvalue test is a powerful tool for determining the definiteness of a quadratic form. For a quadratic form associated with a symmetric matrix $A$, the definiteness is directly related to the signs of the eigenvalues of $A$.

**The Rule for Negative Definite:**

A quadratic form $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$, where $A$ is a symmetric matrix, is **negative definite if and only if all eigenvalues of $A$ are strictly negative.**

$$ \lambda_i < 0 \quad \text{for all eigenvalues } \lambda_i $$

## Steps to Apply the Eigenvalue Test for Negative Definiteness

1.  **Form the Symmetric Matrix:** Given a quadratic form, construct its corresponding symmetric matrix $A$.
2.  **Calculate Eigenvalues:** Find all the eigenvalues of the matrix $A$.
3.  **Check the Signs:** Examine the signs of all the calculated eigenvalues.
4.  **Classify:** If all eigenvalues are strictly negative, the quadratic form is negative definite. If even one eigenvalue is zero or positive, it is not negative definite.

## Worked Example

Let's consider the quadratic form:
$Q(x, y) = -x^2 - 2y^2$

**Step 1: Form the Symmetric Matrix**

We can write $Q(x, y)$ in matrix form:
$$
Q(x, y) = \begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} a & b \\ b & c \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = ax^2 + 2bxy + cy^2
$$
Comparing this to $Q(x, y) = -x^2 - 2y^2$, we have:
*   $a = -1$
*   $2b = 0 \implies b = 0$
*   $c = -2$

The symmetric matrix $A$ is:
$$
A = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}
$$

**Step 2: Calculate Eigenvalues**

To find the eigenvalues, we solve the characteristic equation $\det(A - \lambda I) = 0$, where $I$ is the identity matrix and $\lambda$ represents the eigenvalues.

$$
A - \lambda I = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} - \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -1-\lambda & 0 \\ 0 & -2-\lambda \end{bmatrix}
$$

The determinant is:
$$
\det(A - \lambda I) = (-1-\lambda)(-2-\lambda) - (0)(0) = (-1-\lambda)(-2-\lambda)
$$

Setting the determinant to zero:
$$
(-1-\lambda)(-2-\lambda) = 0
$$
This gives us the eigenvalues:
*   $-1-\lambda = 0 \implies \lambda_1 = -1$
*   $-2-\lambda = 0 \implies \lambda_2 = -2$

**Step 3: Check the Signs**

The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -2$. Both eigenvalues are strictly negative.

**Step 4: Classify**

Since all eigenvalues of the matrix $A$ are negative, the quadratic form $Q(x, y) = -x^2 - 2y^2$ is **negative definite**. This aligns with our initial observation that for any non-zero $(x, y)$, $-x^2 - 2y^2$ will always be negative.

## Potential Pitfalls

*   **Incorrectly forming the matrix:** Ensure the matrix $A$ is symmetric and correctly represents the quadratic form. The coefficient of $xy$ in the quadratic form should be split equally between the off-diagonal elements of the matrix.
*   **Calculation errors:** Double-check your calculations for eigenvalues, as even a small error can lead to an incorrect classification.
*   **Forgetting "strictly negative":** If any eigenvalue is zero, the quadratic form is negative *semi-definite*, not negative definite. If any eigenvalue is positive, it's not negative definite.

## Conclusion

By applying the eigenvalue test, you can definitively classify a quadratic form as negative definite. This involves constructing the associated symmetric matrix and verifying that all its eigenvalues are strictly negative. This skill is crucial for understanding the behavior of quadratic forms in various applications, such as optimization and stability analysis.

## Supports

- [[skills/mathematics/quadratic-forms-and-definiteness/microskills/negative-definite-classification|Negative definite classification]]
