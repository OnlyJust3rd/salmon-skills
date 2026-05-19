---
type: "medium"
title: "Positive Definite Quadratic Forms: Key Characteristics"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/quadratic-forms-and-definiteness/microskills/positive-definite-characteristics|Positive definite characteristics]]"
---
# Positive Definite Quadratic Forms: Key Characteristics

When we analyze quadratic forms, understanding their definiteness is crucial. This lesson focuses on the specific characteristics that define a **positive definite** quadratic form. We'll explore what this means and how to identify these forms.

## What is a Positive Definite Quadratic Form?

A quadratic form is a polynomial where each term is of degree two. For a quadratic form in two variables, say $x$ and $y$, it generally looks like:

$$ Q(x, y) = ax^2 + bxy + cy^2 $$

where $a$, $b$, and $c$ are coefficients. In matrix notation, a quadratic form can be represented as:

$$ Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x} $$

where $\mathbf{x}$ is a column vector of variables (e.g., $\begin{pmatrix} x \\ y \end{pmatrix}$) and $A$ is a symmetric matrix. For $Q(x, y)$, the matrix $A$ would be:

$$ A = \begin{pmatrix} a & b/2 \\ b/2 & c \end{pmatrix} $$

A quadratic form $Q(\mathbf{x})$ is **positive definite** if it satisfies two core properties:

1.  **It is always non-negative:** For any non-zero vector $\mathbf{x}$, $Q(\mathbf{x}) > 0$.
2.  **It is zero only at the origin:** $Q(\mathbf{x}) = 0$ if and only if $\mathbf{x} = \mathbf{0}$.

Essentially, a positive definite quadratic form will always produce a strictly positive value unless all its input variables are zero.

## Identifying Positive Definite Characteristics

There are several ways to analyze and identify if a quadratic form is positive definite. We will focus on characteristics related to its associated matrix.

### 1. Eigenvalues of the Associated Matrix

A fundamental characteristic of a positive definite quadratic form is related to the eigenvalues of its symmetric matrix $A$.

**Key Property:** A quadratic form $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ is positive definite if and only if all eigenvalues of the symmetric matrix $A$ are strictly positive.

*   **Why this matters:** Eigenvalues reveal critical information about how the matrix transforms vectors. Positive eigenvalues indicate that the transformation stretches vectors in their corresponding eigenvector directions, aligning with the idea of producing positive outputs.

*   **How to apply:** To check for positive definiteness using eigenvalues, you would:
    1.  Construct the symmetric matrix $A$ associated with the quadratic form.
    2.  Calculate the eigenvalues of $A$.
    3.  If all eigenvalues are greater than zero, the quadratic form is positive definite.

**Example:**
Consider the quadratic form $Q(x, y) = 2x^2 - 2xy + y^2$.
The associated symmetric matrix is $A = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$.

To find the eigenvalues, we solve the characteristic equation $\det(A - \lambda I) = 0$:
$$ \det \begin{pmatrix} 2-\lambda & -1 \\ -1 & 1-\lambda \end{pmatrix} = 0 $$
$$ (2-\lambda)(1-\lambda) - (-1)(-1) = 0 $$
$$ 2 - 2\lambda - \lambda + \lambda^2 - 1 = 0 $$
$$ \lambda^2 - 3\lambda + 1 = 0 $$

Using the quadratic formula, the eigenvalues are:
$$ \lambda = \frac{-(-3) \pm \sqrt{(-3)^2 - 4(1)(1)}}{2(1)} = \frac{3 \pm \sqrt{9 - 4}}{2} = \frac{3 \pm \sqrt{5}}{2} $$

Both eigenvalues, $\frac{3 + \sqrt{5}}{2}$ and $\frac{3 - \sqrt{5}}{2}$, are positive. Therefore, the quadratic form $2x^2 - 2xy + y^2$ is positive definite.

### 2. Principal Minors (Sylvester's Criterion)

Another powerful tool for analyzing positive definiteness, especially for computational purposes, is Sylvester's Criterion. It uses the determinants of the leading principal submatrices.

**Key Property:** A quadratic form $Q(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ is positive definite if and only if all the leading principal minors of the symmetric matrix $A$ are strictly positive.

The leading principal minors are the determinants of the top-left submatrices of $A$. For an $n \times n$ matrix $A$:

*   The first leading principal minor is $\det(A_1)$, where $A_1$ is the $1 \times 1$ submatrix (just the top-left element).
*   The second leading principal minor is $\det(A_2)$, where $A_2$ is the $2 \times 2$ top-left submatrix.
*   ...
*   The $k$-th leading principal minor is $\det(A_k)$, where $A_k$ is the $k \times k$ top-left submatrix.
*   The $n$-th leading principal minor is $\det(A_n) = \det(A)$.

**How to apply:**
1.  Construct the symmetric matrix $A$.
2.  Calculate the determinants of its leading principal submatrices, starting from the top-left $1 \times 1$ submatrix up to the entire matrix $A$.
3.  If all these determinants are greater than zero, the quadratic form is positive definite.

**Example:**
Let's use the same quadratic form $Q(x, y) = 2x^2 - 2xy + y^2$, with matrix $A = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$.

*   **1st leading principal minor:** Determinant of the top-left $1 \times 1$ submatrix:
    $$ \det(A_1) = \det \begin{pmatrix} 2 \end{pmatrix} = 2 $$
    This is positive.

*   **2nd leading principal minor:** Determinant of the entire $2 \times 2$ matrix $A$:
    $$ \det(A_2) = \det \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} = (2)(1) - (-1)(-1) = 2 - 1 = 1 $$
    This is also positive.

Since all leading principal minors (2 and 1) are positive, the quadratic form $2x^2 - 2xy + y^2$ is positive definite.

### 3. Completing the Square

For quadratic forms in a few variables, we can often identify positive definiteness by completing the square. This method directly demonstrates the property that the form is always non-negative and zero only at the origin.

**Key Idea:** Rewriting the quadratic form as a sum of squares of linear terms.

**How to apply:**
1.  Algebraically manipulate the quadratic form to express it as a sum or difference of squared linear expressions.
2.  If the form can be written as a sum of squares, and each square term has a strictly positive coefficient, then the quadratic form is positive definite.

**Example:**
Consider the quadratic form $Q(x, y) = x^2 + 4xy + 5y^2$.

Let's try to complete the square:
$$ Q(x, y) = (x^2 + 4xy) + 5y^2 $$
To complete the square for the terms involving $x$, we need a $(2xy)^2$ term inside the square, which means we need a $(2y)^2 = 4y^2$ to pair with $4xy$.

$$ Q(x, y) = (x^2 + 4xy + 4y^2) - 4y^2 + 5y^2 $$
$$ Q(x, y) = (x + 2y)^2 + y^2 $$

Here, we have expressed $Q(x, y)$ as the sum of two squared terms: $(x+2y)^2$ and $y^2$. Both squared terms have an implicit coefficient of 1 (which is positive).

*   The term $(x+2y)^2$ is always $\ge 0$. It is zero if $x+2y=0$.
*   The term $y^2$ is always $\ge 0$. It is zero if $y=0$.

For $Q(x, y)$ to be zero, both $(x+2y)^2$ and $y^2$ must be zero simultaneously.
If $y^2 = 0$, then $y = 0$.
Substituting $y=0$ into $x+2y=0$ gives $x+2(0)=0$, so $x=0$.
Thus, $Q(x, y) = 0$ only when $x=0$ and $y=0$.
For any other values of $x$ and $y$, at least one of the squared terms will be positive, making $Q(x,y)$ strictly positive.

Therefore, $Q(x, y) = x^2 + 4xy + 5y^2$ is a positive definite quadratic form.

## Summary of Positive Definite Characteristics

| Characteristic        | Description                                                                       | How to Check                                          |
| :-------------------- | :-------------------------------------------------------------------------------- | :---------------------------------------------------- |
| **Value Property**    | $Q(\mathbf{x}) > 0$ for all $\mathbf{x} \neq \mathbf{0}$, and $Q(\mathbf{0}) = 0$. | Direct evaluation (often impractical).                |
| **Eigenvalues**       | All eigenvalues of the associated symmetric matrix $A$ are strictly positive.     | Compute eigenvalues of $A$.                           |
| **Principal Minors**  | All leading principal minors of the associated symmetric matrix $A$ are positive. | Compute determinants of leading principal submatrices. |
| **Completing Square** | Can be expressed as a sum of squares of linear terms with positive coefficients. | Algebraic manipulation.                               |

Understanding these characteristics allows you to analyze and classify quadratic forms, which is a foundational skill in various mathematical and scientific fields.

## Supports

- [[skills/mathematics/quadratic-forms-and-definiteness/microskills/positive-definite-characteristics|Positive definite characteristics]]
