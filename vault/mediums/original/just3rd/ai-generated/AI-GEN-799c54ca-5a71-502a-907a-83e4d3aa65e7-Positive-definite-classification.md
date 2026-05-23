---
type: "medium"
title: "Positive Definite Classification Using Eigenvalues"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/positive-definite-classification|positive-definite-classification]]"
learning-time-in-minutes: 4
---
# Positive Definite Classification Using Eigenvalues

This lesson focuses on classifying a quadratic form as "positive definite" by applying the eigenvalue test. This means we'll be looking at the sign of the eigenvalues of the matrix associated with the quadratic form.

## What is a Quadratic Form?

A quadratic form is a polynomial where each term is of degree two. For a vector $ \mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix} $, a general quadratic form in two variables is:

$$ Q(x, y) = ax^2 + 2bxy + cy^2 $$

We can represent this quadratic form using a symmetric matrix $ A $:

$$ Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} $$

where $ A = \begin{bmatrix} a & b \\ b & c \end{bmatrix} $.

## The Eigenvalue Test for Definiteness

The definiteness of a quadratic form tells us about its behavior – specifically, whether it always produces positive values, negative values, or can produce both. The eigenvalue test is a powerful way to determine this.

*   **Positive Definite:** A quadratic form $ Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} $ is positive definite if $ Q(\mathbf{x}) > 0 $ for all non-zero vectors $ \mathbf{x} $.
*   **Negative Definite:** A quadratic form is negative definite if $ Q(\mathbf{x}) < 0 $ for all non-zero vectors $ \mathbf{x} $.
*   **Indefinite:** A quadratic form is indefinite if it takes on both positive and negative values.
*   **Positive Semidefinite:** $ Q(\mathbf{x}) \ge 0 $ for all $ \mathbf{x} $.
*   **Negative Semidefinite:** $ Q(\mathbf{x}) \le 0 $ for all $ \mathbf{x} $.

The eigenvalue test connects these properties to the eigenvalues of the symmetric matrix $ A $.

### The Rule for Positive Definite

A quadratic form $ \mathbf{x}^T A \mathbf{x} $ is **positive definite** if and only if **all of its eigenvalues are strictly positive**.

$$ \lambda_i > 0 \quad \text{for all eigenvalues } \lambda_i $$

## Steps to Classify as Positive Definite

1.  **Form the Symmetric Matrix:** Given a quadratic form, construct its associated symmetric matrix $ A $. Ensure the off-diagonal elements are half of the $xy$ coefficient.
2.  **Calculate Eigenvalues:** Find the eigenvalues of the matrix $ A $. This involves solving the characteristic equation $ \det(A - \lambda I) = 0 $, where $ I $ is the identity matrix and $ \lambda $ represents the eigenvalues.
3.  **Check Eigenvalue Signs:** Examine the signs of all calculated eigenvalues.
4.  **Conclude:** If all eigenvalues are positive, the quadratic form is positive definite.

## Worked Example: Classifying a Quadratic Form

Let's consider the quadratic form:

$$ Q(x, y) = 3x^2 + 2xy + y^2 $$

**Step 1: Form the Symmetric Matrix**

The matrix $ A $ is:

$$ A = \begin{bmatrix} 3 & 1 \\ 1 & 1 \end{bmatrix} $$

Here, $a=3$, $b=1$ (since the $xy$ coefficient is $2b=2$), and $c=1$.

**Step 2: Calculate Eigenvalues**

We need to solve $ \det(A - \lambda I) = 0 $:

$$ A - \lambda I = \begin{bmatrix} 3-\lambda & 1 \\ 1 & 1-\lambda \end{bmatrix} $$

$$ \det(A - \lambda I) = (3-\lambda)(1-\lambda) - (1)(1) $$
$$ = 3 - 3\lambda - \lambda + \lambda^2 - 1 $$
$$ = \lambda^2 - 4\lambda + 2 $$

Now, set this to zero and solve for $ \lambda $:

$$ \lambda^2 - 4\lambda + 2 = 0 $$

Using the quadratic formula $ \lambda = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $:

$$ \lambda = \frac{4 \pm \sqrt{(-4)^2 - 4(1)(2)}}{2(1)} $$
$$ \lambda = \frac{4 \pm \sqrt{16 - 8}}{2} $$
$$ \lambda = \frac{4 \pm \sqrt{8}}{2} $$
$$ \lambda = \frac{4 \pm 2\sqrt{2}}{2} $$
$$ \lambda = 2 \pm \sqrt{2} $$

So, the eigenvalues are:
$ \lambda_1 = 2 + \sqrt{2} $
$ \lambda_2 = 2 - \sqrt{2} $

**Step 3: Check Eigenvalue Signs**

*   $ \lambda_1 = 2 + \sqrt{2} $: Since $ \sqrt{2} \approx 1.414 $, $ \lambda_1 \approx 2 + 1.414 = 3.414 $. This is positive.
*   $ \lambda_2 = 2 - \sqrt{2} $: Since $ \sqrt{2} \approx 1.414 $, $ \lambda_2 \approx 2 - 1.414 = 0.586 $. This is also positive.

**Step 4: Conclude**

Both eigenvalues $ \lambda_1 $ and $ \lambda_2 $ are positive. Therefore, the quadratic form $ Q(x, y) = 3x^2 + 2xy + y^2 $ is **positive definite**.

This means that for any values of $ x $ and $ y $ (not both zero), $ 3x^2 + 2xy + y^2 $ will always be a positive number.

## Common Pitfalls

*   **Non-symmetric Matrix:** The eigenvalue test for definiteness strictly applies to symmetric matrices. If you are given a quadratic form that results in a non-symmetric matrix, you should first find its symmetric counterpart (by averaging $A$ and $A^T$).
*   **Zero Eigenvalues:** If any eigenvalue is zero, the form is not positive definite, but positive semidefinite.
*   **Negative Eigenvalues:** If any eigenvalue is negative, the form is not positive definite. It could be negative definite (all negative eigenvalues) or indefinite (a mix of positive and negative eigenvalues).

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/positive-definite-classification|Positive definite classification]]
