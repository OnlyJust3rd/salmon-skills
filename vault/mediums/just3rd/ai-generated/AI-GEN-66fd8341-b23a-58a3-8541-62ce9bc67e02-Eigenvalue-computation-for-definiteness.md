---
type: "medium"
title: "Computing Eigenvalues for Quadratic Forms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/quadratic-forms-and-definiteness/microskills/eigenvalue-computation-for-definiteness|eigenvalue-computation-for-definiteness]]"
---
# Computing Eigenvalues for Quadratic Forms

This lesson focuses on a crucial step in determining the definiteness of a quadratic form: **calculating the eigenvalues of its associated symmetric matrix**. This skill is essential for understanding the behavior of quadratic forms and their applications in areas like optimization and stability analysis.

## Why Eigenvalues?

Quadratic forms are functions of the form $$Q(x) = x^T A x$$, where $$x$$ is a vector and $$A$$ is a symmetric matrix. The definiteness of this quadratic form (positive definite, negative definite, etc.) is directly related to the eigenvalues of the matrix $$A$$. By computing these eigenvalues, we unlock the ability to classify the quadratic form.

## The Associated Symmetric Matrix

For any given quadratic form $$Q(x)$$, we can construct a unique symmetric matrix $$A$$ that represents it.

**Example:**

Consider the quadratic form $$Q(x_1, x_2) = 3x_1^2 - 4x_1x_2 + 2x_2^2$$.

To find the associated symmetric matrix $$A$$, we follow these rules:
*   The diagonal elements of $$A$$ are the coefficients of the squared terms.
*   The off-diagonal elements are half the coefficients of the cross-product terms.

So, for our example:
*   Coefficient of $$x_1^2$$ is 3, so $$A_{11} = 3$$.
*   Coefficient of $$x_2^2$$ is 2, so $$A_{22} = 2$$.
*   Coefficient of $$x_1x_2$$ is -4. We split this between $$A_{12}$$ and $$A_{21}$$, so $$A_{12} = A_{21} = -4/2 = -2$$.

The associated symmetric matrix is:
$$
A = \begin{pmatrix} 3 & -2 \\ -2 & 2 \end{pmatrix}
$$

## Computing Eigenvalues: The Characteristic Equation

The eigenvalues ($$\lambda$$) of a matrix $$A$$ are the solutions to the characteristic equation:

$$ \det(A - \lambda I) = 0 $$

where $$I$$ is the identity matrix of the same dimension as $$A$$, and $$\det()$$ denotes the determinant.

Let's compute the eigenvalues for our example matrix $$A = \begin{pmatrix} 3 & -2 \\ -2 & 2 \end{pmatrix}$$.

1.  **Form $$A - \lambda I$$:**
    $$
    A - \lambda I = \begin{pmatrix} 3 & -2 \\ -2 & 2 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3-\lambda & -2 \\ -2 & 2-\lambda \end{pmatrix}
    $$

2.  **Compute the determinant:**
    $$
    \det(A - \lambda I) = (3-\lambda)(2-\lambda) - (-2)(-2)
    $$

3.  **Set the determinant to zero (the characteristic equation):**
    $$
    (3-\lambda)(2-\lambda) - 4 = 0
    $$

4.  **Expand and solve for $$\lambda$$:**
    $$
    6 - 3\lambda - 2\lambda + \lambda^2 - 4 = 0
    $$
    $$
    \lambda^2 - 5\lambda + 2 = 0
    $$

This is a quadratic equation for $$\lambda$$. We can use the quadratic formula:
$$
\lambda = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
Here, $$a=1$$, $$b=-5$$, $$c=2$$.

$$
\lambda = \frac{5 \pm \sqrt{(-5)^2 - 4(1)(2)}}{2(1)}
$$
$$
\lambda = \frac{5 \pm \sqrt{25 - 8}}{2}
$$
$$
\lambda = \frac{5 \pm \sqrt{17}}{2}
$$

The two eigenvalues are:
$$
\lambda_1 = \frac{5 + \sqrt{17}}{2} \quad \text{and} \quad \lambda_2 = \frac{5 - \sqrt{17}}{2}
$$

**Key Takeaway:** The process involves setting up the characteristic equation by subtracting $$\lambda$$ from the diagonal elements of the symmetric matrix, computing its determinant, and solving the resulting polynomial equation for $$\lambda$$.

## Practice Problems

1.  Find the associated symmetric matrix for the quadratic form $$Q(x_1, x_2) = x_1^2 + 6x_1x_2 - 3x_2^2$$. Then, compute its eigenvalues.
2.  For the quadratic form $$Q(x_1, x_2, x_3) = 2x_1^2 + x_2^2 - 4x_2x_3 + 3x_3^2$$, find the associated symmetric matrix and calculate its eigenvalues. (Hint: For a 3x3 matrix, the characteristic equation will be a cubic polynomial.)

## Supports

- [[skills/mathematics/quadratic-forms-and-definiteness/microskills/eigenvalue-computation-for-definiteness|Eigenvalue computation for definiteness]]
