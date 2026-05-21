---
type: "medium"
title: "The Characteristic Equation: Unlocking Eigenvalues"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/characteristic-equation|characteristic-equation]]"
---
# The Characteristic Equation: Unlocking Eigenvalues

In spectral analysis, understanding the fundamental properties of matrices is key. We've seen that eigenvalues and eigenvectors reveal essential information about how a linear transformation stretches or shrinks space. To find these crucial values, we first need to solve a specific equation: the **characteristic equation**.

## What is the Characteristic Equation?

The characteristic equation is the polynomial equation derived from a matrix that, when solved, yields the eigenvalues of that matrix. It's the gateway to finding those special scaling factors.

For a given square matrix $$ A $$, the characteristic equation is formulated as:

$$ \det(A - \lambda I) = 0 $$

Let's break down the components:

*   **$$ A $$**: This is your square matrix for which you want to find eigenvalues.
*   **$$ \lambda $$ (lambda)**: This is the variable in our equation. The values of $$ \lambda $$ that satisfy this equation will be the eigenvalues of $$ A $$.
*   **$$ I $$**: This is the identity matrix of the same dimensions as $$ A $$. The identity matrix has ones on the main diagonal and zeros everywhere else (e.g., $$ \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} $$ for a 2x2 matrix).
*   **$$ A - \lambda I $$**: This involves subtracting $$ \lambda $$ from each of the diagonal elements of $$ A $$.
*   **$$ \det(...) $$**: This denotes the determinant of the resulting matrix.

### Why does this work?

Remember that an eigenvector $$ \mathbf{v} $$ of a matrix $$ A $$ satisfies the equation $$ A\mathbf{v} = \lambda\mathbf{v} $$. This means that when the transformation $$ A $$ is applied to $$ \mathbf{v} $$, the result is simply a scaled version of $$ \mathbf{v} $$, with the scaling factor being the eigenvalue $$ \lambda $$.

We can rewrite $$ A\mathbf{v} = \lambda\mathbf{v} $$ as:
$$ A\mathbf{v} - \lambda\mathbf{v} = \mathbf{0} $$
$$ A\mathbf{v} - \lambda I\mathbf{v} = \mathbf{0} $$
$$ (A - \lambda I)\mathbf{v} = \mathbf{0} $$

For this equation to have a non-trivial solution for $$ \mathbf{v} $$ (i.e., $$ \mathbf{v} \neq \mathbf{0} $$), the matrix $$ (A - \lambda I) $$ must be singular. A matrix is singular if and only if its determinant is zero. Therefore, we set the determinant to zero: $$ \det(A - \lambda I) = 0 $$.

## Setting Up the Characteristic Equation: A Worked Example

Let's find the eigenvalues of a 2x2 matrix.

**Matrix A:**
$$ A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} $$

**Step 1: Form the matrix $$ A - \lambda I $$**
We need the identity matrix of the same size as $$ A $$, which is $$ I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} $$.
$$ \lambda I = \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix} $$

Now, subtract $$ \lambda I $$ from $$ A $$:
$$ A - \lambda I = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} - \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix} = \begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix} $$

**Step 2: Calculate the determinant of $$ A - \lambda I $$**
For a 2x2 matrix $$ \begin{bmatrix} a & b \\ c & d \end{bmatrix} $$, the determinant is $$ ad - bc $$.
In our case, $$ a = 4-\lambda $$, $$ b = 1 $$, $$ c = 2 $$, and $$ d = 3-\lambda $$.

$$ \det(A - \lambda I) = (4-\lambda)(3-\lambda) - (1)(2) $$

**Step 3: Set the determinant to zero and solve for $$ \lambda $$**
This is our characteristic equation:
$$ (4-\lambda)(3-\lambda) - 2 = 0 $$

Expand the equation:
$$ 12 - 4\lambda - 3\lambda + \lambda^2 - 2 = 0 $$
$$ \lambda^2 - 7\lambda + 10 = 0 $$

Now, solve this quadratic equation for $$ \lambda $$. We can factor it:
We need two numbers that multiply to 10 and add up to -7. These numbers are -2 and -5.

$$ (\lambda - 2)(\lambda - 5) = 0 $$

This gives us two solutions for $$ \lambda $$:
$$ \lambda - 2 = 0 \implies \lambda_1 = 2 $$
$$ \lambda - 5 = 0 \implies \lambda_2 = 5 $$

These values, $$ \lambda_1 = 2 $$ and $$ \lambda_2 = 5 $$, are the **eigenvalues** of matrix $$ A $$.

## Key Takeaways

*   The characteristic equation is the determinant of $$ (A - \lambda I) $$ set equal to zero.
*   Solving the characteristic equation gives you the eigenvalues of the matrix.
*   For an $$ n \times n $$ matrix, the characteristic equation will be a polynomial of degree $$ n $$, potentially yielding up to $$ n $$ eigenvalues (which may include repeated or complex values).

This equation is fundamental to spectral analysis, providing the first step in our journey to uncover the eigenvalues and eigenvectors that define a matrix's core properties.

## Supports

- [[skills/mathematics/spectral-analysis-and-matrix-decomposition/microskills/characteristic-equation|Characteristic equation]]
