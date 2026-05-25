---
type: "medium"
title: "Analyzing Quadratic Forms: Classifying by Definiteness"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/classification-based-on-properties|classification-based-on-properties]]"
learning-time-in-minutes: 5
---
# Analyzing Quadratic Forms: Classifying by Definiteness

In our journey with quadratic forms, we've learned to express them and understand their general behavior. Now, we'll dive deeper by classifying them based on their "definiteness." This classification helps us understand the nature of the quadratic form's output for different input vectors, which is crucial in many areas like optimization, stability analysis, and geometry.

This lesson focuses on **classifying quadratic forms based on their properties**, specifically distinguishing between positive definite, negative definite, and indefinite forms.

## Understanding Definiteness

The definiteness of a quadratic form tells us about the sign of its output when we input a non-zero vector. Let $Q(\mathbf{x})$ be a quadratic form in $n$ variables, where $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}$ is a non-zero vector.

We can represent $Q(\mathbf{x})$ in matrix form as $$ Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} $$ where $A$ is a symmetric $n \times n$ matrix. The definiteness of the quadratic form is determined by the properties of this matrix $A$.

Here's the classification:

*   **Positive Definite:** $Q(\mathbf{x}) > 0$ for all non-zero vectors $\mathbf{x}$. This means the quadratic form always yields a positive value when a non-zero vector is plugged in.
*   **Negative Definite:** $Q(\mathbf{x}) < 0$ for all non-zero vectors $\mathbf{x}$. This means the quadratic form always yields a negative value when a non-zero vector is plugged in.
*   **Indefinite:** $Q(\mathbf{x})$ takes on both positive and negative values for different non-zero vectors $\mathbf{x}$.

There are also "semidefinite" categories (positive semidefinite and negative semidefinite) where the form can be zero for some non-zero vectors, but for this lesson, we are focusing on the strict definite and indefinite cases.

## Properties for Classification

Analyzing the properties of the symmetric matrix $A$ associated with the quadratic form is the key to classification.

### 1. Eigenvalues

The eigenvalues of the symmetric matrix $A$ provide a direct way to determine definiteness.

*   **Positive Definite:** All eigenvalues of $A$ are strictly positive ($\lambda_i > 0$ for all $i$).
*   **Negative Definite:** All eigenvalues of $A$ are strictly negative ($\lambda_i < 0$ for all $i$).
*   **Indefinite:** $A$ has at least one positive eigenvalue and at least one negative eigenvalue.

**Example:**
Consider the quadratic form $Q(x_1, x_2) = 2x_1^2 - 4x_1x_2 + 5x_2^2$.
The associated symmetric matrix is $$ A = \begin{bmatrix} 2 & -2 \\ -2 & 5 \end{bmatrix} $$
To find the eigenvalues, we solve the characteristic equation $\det(A - \lambda I) = 0$:
$$ \det \begin{bmatrix} 2-\lambda & -2 \\ -2 & 5-\lambda \end{bmatrix} = (2-\lambda)(5-\lambda) - (-2)(-2) = 10 - 7\lambda + \lambda^2 - 4 = \lambda^2 - 7\lambda + 6 = 0 $$
Factoring, we get $(\lambda-1)(\lambda-6) = 0$.
The eigenvalues are $\lambda_1 = 1$ and $\lambda_2 = 6$.
Since both eigenvalues are positive, the quadratic form $Q(x_1, x_2)$ is **positive definite**.

### 2. Leading Principal Minors (Sylvester's Criterion)

Sylvester's Criterion is a powerful tool for determining definiteness without explicitly calculating eigenvalues, especially for smaller matrices. It involves examining the determinants of the "leading principal submatrices."

For a symmetric matrix $A = [a_{ij}]$, the $k$-th leading principal minor, denoted $D_k$, is the determinant of the top-left $k \times k$ submatrix.

*   **Positive Definite:** All leading principal minors are strictly positive ($D_k > 0$ for all $k=1, \dots, n$).
*   **Negative Definite:** The leading principal minors alternate in sign, starting with negative: $D_1 < 0$, $D_2 > 0$, $D_3 < 0$, and so on. That is, $D_k = (-1)^k |D_k|$.
*   **Indefinite:** If neither of the above conditions holds, the matrix is indefinite (or semidefinite).

**Example:**
Let's use the same matrix $A = \begin{bmatrix} 2 & -2 \\ -2 & 5 \end{bmatrix}$.
*   $D_1 = \det[2] = 2$.
*   $D_2 = \det \begin{bmatrix} 2 & -2 \\ -2 & 5 \end{bmatrix} = (2)(5) - (-2)(-2) = 10 - 4 = 6$.

Since $D_1 = 2 > 0$ and $D_2 = 6 > 0$, all leading principal minors are positive. Therefore, the quadratic form is **positive definite**.

Let's try another example for negative definite:
Consider $Q(x_1, x_2) = -x_1^2 + 2x_1x_2 - 3x_2^2$.
The associated symmetric matrix is $$ A = \begin{bmatrix} -1 & 1 \\ 1 & -3 \end{bmatrix} $$
*   $D_1 = \det[-1] = -1$.
*   $D_2 = \det \begin{bmatrix} -1 & 1 \\ 1 & -3 \end{bmatrix} = (-1)(-3) - (1)(1) = 3 - 1 = 2$.

Here, $D_1 < 0$ and $D_2 > 0$. This matches the pattern $D_k = (-1)^k |D_k|$ (i.e., $D_1 < 0$, $D_2 > 0$). Thus, the quadratic form is **negative definite**.

### 3. Direct Evaluation (For 2x2 Cases or Simple Forms)

For very simple quadratic forms, especially in two variables, you might be able to classify them by inspection or by rewriting them in a canonical form.

**Example:**
Consider $Q(x_1, x_2) = x_1^2 + x_2^2$.
For any non-zero vector $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$, we have $x_1^2 \ge 0$ and $x_2^2 \ge 0$. If $\mathbf{x}$ is non-zero, at least one of $x_1$ or $x_2$ must be non-zero, making its square strictly positive. Thus, $Q(x_1, x_2) = x_1^2 + x_2^2 > 0$ for all non-zero $\mathbf{x}$. This form is **positive definite**.

Consider $Q(x_1, x_2) = -x_1^2 - x_2^2$.
Similarly, for any non-zero vector $\mathbf{x}$, $Q(x_1, x_2) = -x_1^2 - x_2^2 < 0$. This form is **negative definite**.

Consider $Q(x_1, x_2) = x_1^2 - x_2^2$.
If $\mathbf{x} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $Q(1,0) = 1^2 - 0^2 = 1 > 0$.
If $\mathbf{x} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $Q(0,1) = 0^2 - 1^2 = -1 < 0$.
Since it takes on both positive and negative values, this form is **indefinite**.

## Summary Table

| Definiteness    | Eigenvalue Property                               | Leading Principal Minors (Sylvester's Criterion) |
| :-------------- | :------------------------------------------------ | :----------------------------------------------- |
| **Positive Definite** | All eigenvalues are positive.                      | All $D_k > 0$.                                   |
| **Negative Definite** | All eigenvalues are negative.                      | $D_1 < 0, D_2 > 0, D_3 < 0, \dots$ ($D_k = (-1)^k |D_k|$). |
| **Indefinite**      | At least one positive and at least one negative eigenvalue. | Neither of the above conditions for definite.    |

## Practice Analysis

To solidify your understanding, try analyzing the following quadratic forms. For each, identify its associated symmetric matrix and then determine its definiteness using either eigenvalues or leading principal minors.

1.  $Q(x_1, x_2) = 3x_1^2 + 6x_1x_2 + 4x_2^2$
2.  $Q(x_1, x_2, x_3) = x_1^2 - 2x_2^2 + 3x_3^2$
3.  $Q(x_1, x_2) = -x_1^2 - 2x_1x_2 - 5x_2^2$

By mastering these classification techniques, you gain a deeper insight into the behavior of quadratic forms, which is a fundamental skill in many advanced mathematical and scientific applications.

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/classification-based-on-properties|Classification based on properties]]
