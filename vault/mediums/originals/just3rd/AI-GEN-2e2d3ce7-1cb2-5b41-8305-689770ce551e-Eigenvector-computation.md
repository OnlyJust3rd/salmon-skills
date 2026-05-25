---
type: "medium"
title: "Eigenvector Computation: Finding the Direction of Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/eigenvector-computation|eigenvector-computation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/spectral-analysis-and-matrix-decomposition|spectral-analysis-and-matrix-decomposition]]"
learning-time-in-minutes: 4
---
# Eigenvector Computation: Finding the Direction of Transformation

This lesson focuses on a crucial step in spectral analysis: **eigenvector computation**. Once you've identified the eigenvalues of a matrix, the next logical step is to find the corresponding eigenvectors. These vectors represent the directions that remain unchanged (scaled) by the linear transformation represented by the matrix.

## The Core Idea: Solving (A - λI)x = 0

Recall that an eigenvector **x** of a matrix **A** is a non-zero vector that, when multiplied by **A**, results in a scalar multiple (the eigenvalue, denoted by $$ \lambda $$) of itself:

$$ Ax = \lambda x $$

To find the eigenvectors, we rearrange this equation:

$$ Ax - \lambda x = 0 $$
$$ Ax - \lambda Ix = 0 \quad \text{(where I is the identity matrix)} $$
$$ (A - \lambda I)x = 0 $$

This is a homogeneous system of linear equations. We are looking for non-zero solutions for **x**. A homogeneous system has non-trivial solutions if and only if the matrix multiplying **x**, which is $$ (A - \lambda I) $$, is singular (i.e., its determinant is zero). This condition is precisely how we find the eigenvalues in the first place.

## Step-by-Step Eigenvector Computation

For each eigenvalue $$ \lambda $$ you've calculated, follow these steps to find its corresponding eigenvector:

1.  **Form the matrix $$ (A - \lambda I) $$.**
    *   Subtract $$ \lambda $$ from each diagonal element of matrix **A**.

2.  **Set up the augmented matrix for the system $$ (A - \lambda I)x = 0 $$.**
    *   Augment the $$ (A - \lambda I) $$ matrix with a column of zeros.

3.  **Reduce the augmented matrix to Row Echelon Form (REF) or Reduced Row Echelon Form (RREF) using Gaussian elimination.**
    *   Your goal is to simplify the system of equations.

4.  **Write the system of linear equations corresponding to the REF/RREF.**
    *   Identify free variables.

5.  **Express the basic variables in terms of the free variables.**
    *   This will give you the general form of the eigenvector.

6.  **Choose a non-zero value for the free variable to find a specific eigenvector.**
    *   Often, setting the free variable to 1 is the simplest approach.

## Worked Example

Let's find the eigenvectors for the matrix:

$$ A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} $$

First, we need the eigenvalues. We find the characteristic polynomial $$ \det(A - \lambda I) = 0 $$.
$$ \det \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix} = (4-\lambda)(3-\lambda) - (1)(2) = 12 - 4\lambda - 3\lambda + \lambda^2 - 2 = \lambda^2 - 7\lambda + 10 $$
Factoring, we get $$ (\lambda - 5)(\lambda - 2) = 0 $$.
So, the eigenvalues are $$ \lambda_1 = 5 $$ and $$ \lambda_2 = 2 $$.

### Eigenvector for $$ \lambda_1 = 5 $$

1.  **Form $$ (A - 5I) $$.**
    $$ A - 5I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - 5\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} $$

2.  **Set up the augmented matrix:**
    $$ \left[ \begin{array}{cc|c} -1 & 1 & 0 \\ 2 & -2 & 0 \end{array} \right] $$

3.  **Reduce to RREF.**
    *   Add 2 times the first row to the second row ($$ R_2 \leftarrow R_2 + 2R_1 $$):
        $$ \left[ \begin{array}{cc|c} -1 & 1 & 0 \\ 0 & 0 & 0 \end{array} \right] $$
    *   Multiply the first row by -1 ($$ R_1 \leftarrow -1R_1 $$):
        $$ \left[ \begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 0 & 0 \end{array} \right] $$

4.  **Write the system of equations.**
    The RREF gives us the equation: $$ x_1 - x_2 = 0 $$
    The second row of zeros indicates that $$ x_2 $$ is a free variable.

5.  **Express basic variables in terms of free variables.**
    $$ x_1 = x_2 $$

6.  **Choose a non-zero value for the free variable.**
    Let $$ x_2 = 1 $$. Then $$ x_1 = 1 $$.
    The eigenvector for $$ \lambda_1 = 5 $$ is $$ \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$.

### Eigenvector for $$ \lambda_2 = 2 $$

1.  **Form $$ (A - 2I) $$.**
    $$ A - 2I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - 2\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} $$

2.  **Set up the augmented matrix:**
    $$ \left[ \begin{array}{cc|c} 2 & 1 & 0 \\ 2 & 1 & 0 \end{array} \right] $$

3.  **Reduce to RREF.**
    *   Subtract the first row from the second row ($$ R_2 \leftarrow R_2 - R_1 $$):
        $$ \left[ \begin{array}{cc|c} 2 & 1 & 0 \\ 0 & 0 & 0 \end{array} \right] $$
    *   Multiply the first row by $$ \frac{1}{2} $$ ($$ R_1 \leftarrow \frac{1}{2}R_1 $$):
        $$ \left[ \begin{array}{cc|c} 1 & \frac{1}{2} & 0 \\ 0 & 0 & 0 \end{array} \right] $$

4.  **Write the system of equations.**
    The RREF gives us the equation: $$ x_1 + \frac{1}{2}x_2 = 0 $$
    Here, $$ x_2 $$ is the free variable.

5.  **Express basic variables in terms of free variables.**
    $$ x_1 = -\frac{1}{2}x_2 $$

6.  **Choose a non-zero value for the free variable.**
    Let $$ x_2 = 2 $$ (to avoid fractions easily). Then $$ x_1 = -1 $$.
    The eigenvector for $$ \lambda_2 = 2 $$ is $$ \mathbf{v}_2 = \begin{pmatrix} -1 \\ 2 \end{pmatrix} $$.

## Key Takeaways

*   Eigenvectors are found by solving $$ (A - \lambda I)x = 0 $$ for each eigenvalue $$ \lambda $$.
*   This involves solving a homogeneous system of linear equations.
*   Gaussian elimination is your primary tool for simplifying these systems.
*   Remember that eigenvectors are defined up to a scalar multiple, so there are infinitely many for each eigenvalue. You typically present the simplest one.

## Supports

- [[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/eigenvector-computation|Eigenvector computation]]
