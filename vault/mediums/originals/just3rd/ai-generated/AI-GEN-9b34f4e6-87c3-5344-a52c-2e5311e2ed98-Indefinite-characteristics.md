---
type: "medium"
title: "Indefinite Quadratic Forms: Spotting the Ambiguity"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/indefinite-characteristics|indefinite-characteristics]]"
learning-time-in-minutes: 4
---
# Indefinite Quadratic Forms: Spotting the Ambiguity

When we analyze quadratic forms, we often classify them as positive definite, negative definite, or indefinite. While positive definite forms always yield positive values (except at zero), and negative definite forms always yield negative values (except at zero), indefinite quadratic forms are the wild cards. They don't stick to one sign.

## What Makes a Quadratic Form Indefinite?

A quadratic form is **indefinite** if it can produce both positive and negative values for different non-zero input vectors. This ambiguity is its defining characteristic.

Consider a general quadratic form in two variables:
$$ Q(x, y) = ax^2 + 2bxy + cy^2 $$

This can be represented in matrix form as:
$$ Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} $$
where $$ \mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix} $$ and $$ A = \begin{pmatrix} a & b \\ b & c \end{pmatrix} $$

### Key Characteristics of Indefinite Quadratic Forms

1.  **Mixed Eigenvalues:** The most robust way to identify an indefinite quadratic form is through its eigenvalues. A quadratic form is indefinite if and only if its associated matrix $A$ has at least one positive eigenvalue and at least one negative eigenvalue.

2.  **Sylvester's Criterion (Extended):** While Sylvester's criterion directly identifies positive or negative definite forms by looking at leading principal minors, its implication for indefinite forms is crucial. If neither the positive definite nor the negative definite conditions of Sylvester's criterion are met, the form is likely indefinite (assuming it's not semidefinite).
    *   For a symmetric matrix $A$, if the sequence of leading principal minors alternates in sign (starting with positive: $det(A_1) > 0, det(A_2) < 0, det(A_3) > 0, \dots$), the form is indefinite.
    *   Alternatively, if the sequence starts with negative and alternates ($det(A_1) < 0, det(A_2) > 0, det(A_3) < 0, \dots$), it's also indefinite.

3.  **Behavior of the Function:** Graphically, the surface $z = Q(x, y)$ corresponding to an indefinite quadratic form is a saddle. It curves upwards in some directions and downwards in others from its minimum at the origin.

4.  **Existence of Positive and Negative Values:** By definition, for any indefinite quadratic form $Q(\mathbf{x})$, there exist vectors $$ \mathbf{v}_1 $$ and $$ \mathbf{v}_2 $$ such that $$ Q(\mathbf{v}_1) > 0 $$ and $$ Q(\mathbf{v}_2) < 0 $$ (where $$ \mathbf{v}_1, \mathbf{v}_2 \neq \mathbf{0} $$).

## Identifying Indefinite Forms: A Practical Approach

Let's analyze a quadratic form and determine if it's indefinite.

**Example:**
Consider the quadratic form $$ Q(x, y) = x^2 - y^2 $$.

The associated matrix is $$ A = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} $$.

**Method 1: Eigenvalues**
The eigenvalues of a diagonal matrix are its diagonal entries. So, the eigenvalues of $A$ are $1$ and $-1$. Since we have one positive eigenvalue ($1$) and one negative eigenvalue ($-1$), the quadratic form is **indefinite**.

**Method 2: Function Behavior**
*   If we choose $$ \mathbf{x} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $$, then $$ Q(1, 0) = 1^2 - 0^2 = 1 $$. This is positive.
*   If we choose $$ \mathbf{x} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $$, then $$ Q(0, 1) = 0^2 - 1^2 = -1 $$. This is negative.

Since the form can produce both positive and negative values, it is **indefinite**.

**Method 3: Sylvester's Criterion Check**
The leading principal minors are:
*   $$ det(A_1) = det(1) = 1 $$
*   $$ det(A_2) = det\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = (1)(-1) - (0)(0) = -1 $$

The sequence of determinants is $1, -1$. This sequence starts with positive and then alternates to negative. This pattern is characteristic of an indefinite quadratic form.

**Another Example:**
Consider $$ Q(x, y) = x^2 + 2xy + y^2 $$.
The matrix is $$ A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} $$.

**Eigenvalues:**
The characteristic equation is $$ det(A - \lambda I) = det\begin{pmatrix} 1-\lambda & 1 \\ 1 & 1-\lambda \end{pmatrix} = (1-\lambda)^2 - 1 = 0 $$
$$ (1-\lambda)^2 = 1 $$
$$ 1-\lambda = \pm 1 $$
If $$ 1-\lambda = 1 $$, then $$ \lambda = 0 $$.
If $$ 1-\lambda = -1 $$, then $$ \lambda = 2 $$.
The eigenvalues are $0$ and $2$. Since we have a zero eigenvalue and a positive eigenvalue, this form is **semidefinite** (specifically, positive semidefinite), not indefinite. An indefinite form *must* have both strictly positive and strictly negative eigenvalues.

**What's the takeaway?**
An indefinite quadratic form is one that is neither "all positive" nor "all negative." It's characterized by its ability to swing between positive and negative outputs depending on the input vector, a property directly reflected in the mix of positive and negative eigenvalues of its associated matrix. This understanding is crucial for analyzing systems where stability or behavior can vary significantly.

## Supports

- [[skills/mathematics/linear-algebra/quadratic-forms-and-definiteness/microskills/indefinite-characteristics|Indefinite characteristics]]
