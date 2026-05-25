---
type: "medium"
title: "Negative Definite Characteristics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/negative-definite-characteristics|negative-definite-characteristics]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/quadratic-forms-and-definiteness|quadratic-forms-and-definiteness]]"
learning-time-in-minutes: 4
---
# Negative Definite Characteristics

This lesson focuses on identifying the unique characteristics of negative definite quadratic forms, a key aspect of understanding the definiteness of quadratic forms.

## What is a Negative Definite Quadratic Form?

A quadratic form $$Q(x)$$ is **negative definite** if it always produces a negative output for any non-zero input vector $$x$$, and zero only when $$x$$ is the zero vector.

Mathematically, for a quadratic form $$Q(x)$$:
$$Q(x) < 0 \quad \text{for all } x \neq 0$$
$$Q(0) = 0$$

Consider a quadratic form $$Q(x) = x^T A x$$, where $$A$$ is a symmetric matrix. For $$Q(x)$$ to be negative definite, the matrix $$A$$ must have specific properties.

## Key Characteristics of Negative Definite Quadratic Forms

We can analyze the negative definiteness of a quadratic form by examining its associated symmetric matrix $$A$$. Here are the primary characteristics:

### 1. Eigenvalues of the Associated Matrix

A quadratic form $$Q(x) = x^T A x$$ is negative definite if and only if **all eigenvalues of the symmetric matrix $$A$$ are strictly negative**.

Let $$A$$ be the symmetric matrix associated with the quadratic form. If all eigenvalues $$\lambda_1, \lambda_2, \dots, \lambda_n$$ of $$A$$ satisfy $$\lambda_i < 0$$ for all $$i = 1, \dots, n$$, then the quadratic form is negative definite.

**Example:**
Consider the quadratic form $$Q(x_1, x_2) = -x_1^2 - 2x_2^2$$.
The associated matrix is $$A = \begin{pmatrix} -1 & 0 \\ 0 & -2 \end{pmatrix}$$.
The eigenvalues of $$A$$ are -1 and -2, both of which are negative.
Therefore, $$Q(x_1, x_2)$$ is a negative definite quadratic form. For any $$ (x_1, x_2) \neq (0,0) $$, $$Q(x_1, x_2)$$ will be negative.

### 2. Principal Minors of the Associated Matrix

Another way to determine if a quadratic form is negative definite is by examining the signs of its **leading principal minors**.

For a symmetric matrix $$A$$, the quadratic form $$Q(x) = x^T A x$$ is negative definite if and only if the **alternating signs of the leading principal minors start with negative**.

Let $$A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} \end{pmatrix}$$.
The leading principal minors are:
- $$M_1 = \det(A_{11})$$ where $$A_{11} = (a_{11})$$
- $$M_2 = \det(A_{22})$$ where $$A_{22} = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$$
- $$M_3 = \det(A_{33})$$ where $$A_{33} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$$
- ...
- $$M_n = \det(A)$$

For negative definiteness, the following must hold:
- $$M_1 < 0$$
- $$M_2 > 0$$
- $$M_3 < 0$$
- $$M_4 > 0$$
- ...
- The sign of $$M_k$$ is $$(-1)^k$$.

**Example:**
Consider the quadratic form $$Q(x_1, x_2, x_3) = -x_1^2 - 3x_2^2 - 2x_3^2 + x_1x_2 - x_1x_3$$.
The associated symmetric matrix is $$A = \begin{pmatrix} -1 & 1/2 & -1/2 \\ 1/2 & -3 & 0 \\ -1/2 & 0 & -2 \end{pmatrix}$$.

Let's compute the leading principal minors:
- $$M_1 = \det(-1) = -1$$ (Negative, as expected)
- $$M_2 = \det \begin{pmatrix} -1 & 1/2 \\ 1/2 & -3 \end{pmatrix} = (-1)(-3) - (1/2)(1/2) = 3 - 1/4 = 11/4$$ (Positive, as expected)
- $$M_3 = \det \begin{pmatrix} -1 & 1/2 & -1/2 \\ 1/2 & -3 & 0 \\ -1/2 & 0 & -2 \end{pmatrix}$$
    $$= -1 \det \begin{pmatrix} -3 & 0 \\ 0 & -2 \end{pmatrix} - \frac{1}{2} \det \begin{pmatrix} 1/2 & 0 \\ -1/2 & -2 \end{pmatrix} + (-\frac{1}{2}) \det \begin{pmatrix} 1/2 & -3 \\ -1/2 & 0 \end{pmatrix}$$
    $$= -1 (6 - 0) - \frac{1}{2} (-1 - 0) - \frac{1}{2} (0 - 3/2)$$
    $$= -6 + 1/2 + 3/4 = -24/4 + 2/4 + 3/4 = -19/4$$ (Negative, as expected)

Since $$M_1 < 0$$, $$M_2 > 0$$, and $$M_3 < 0$$, the quadratic form is negative definite.

### 3. Behavior of the Function

A negative definite quadratic form represents a function that has a **strict local maximum at the origin**. For any movement away from the origin, the function value decreases.

Graphically, for a 2-variable quadratic form, a negative definite form would look like an inverted paraboloid with its peak at (0,0).

### Summary of Negative Definite Characteristics

| Characteristic           | Condition for Negative Definite                               |
| :----------------------- | :------------------------------------------------------------ |
| **Eigenvalues**          | All eigenvalues of $$A$$ are strictly negative.              |
| **Leading Principal Minors** | $$M_k$$ has sign $$(-1)^k$$ for $$k = 1, \dots, n$$.       |
| **Function Value**       | $$Q(x) < 0$$ for all $$x \neq 0$$, $$Q(0) = 0$$.            |
| **Geometric Interpretation** | Strict local maximum at the origin (inverted paraboloid). |

Understanding these characteristics allows you to analyze and differentiate negative definite quadratic forms from other types, which is crucial for applications in optimization, stability analysis, and multivariable calculus.

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/negative-definite-characteristics|Negative definite characteristics]]
