---
type: "medium"
title: "Calculating Eigenpairs: Eigenvalues and Eigenvectors"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/eigenpair-calculation|eigenpair-calculation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/spectral-analysis-and-matrix-decomposition|spectral-analysis-and-matrix-decomposition]]"
learning-time-in-minutes: 5
---
# Calculating Eigenpairs: Eigenvalues and Eigenvectors

In spectral analysis, understanding the fundamental properties of matrices is crucial. A key aspect of this is finding the **eigenvalues** and **eigenvectors** of a matrix. These special pairs reveal how a linear transformation represented by the matrix stretches or compresses space along specific directions. This lesson focuses on the practical skill of calculating these eigenpairs.

## What are Eigenvalues and Eigenvectors?

When a linear transformation is applied to a vector, the vector's direction can change. However, for certain special vectors, the direction remains the same (or is flipped by 180 degrees), only scaling in magnitude. These special vectors are called **eigenvectors**, and the scaling factor is called the **eigenvalue**.

Mathematically, for a square matrix \(A\), a non-zero vector \(\mathbf{v}\) is an eigenvector if it satisfies the equation:

$$ A\mathbf{v} = \lambda\mathbf{v} $$

where \(\lambda\) (lambda) is the corresponding eigenvalue.

## The Characteristic Equation

To find eigenvalues, we rearrange the definition:

$$ A\mathbf{v} - \lambda\mathbf{v} = \mathbf{0} $$
$$ (A - \lambda I)\mathbf{v} = \mathbf{0} $$

Here, \(I\) is the identity matrix of the same dimension as \(A\), and \(\mathbf{0}\) is the zero vector.

For this equation to have a non-trivial solution (i.e., \(\mathbf{v} \neq \mathbf{0}\)), the matrix \((A - \lambda I)\) must be singular. A singular matrix has a determinant of zero. Therefore, we can find the eigenvalues by solving the **characteristic equation**:

$$ \det(A - \lambda I) = 0 $$

## Step-by-Step Calculation

Let's walk through the process of calculating eigenvalues and eigenvectors for a 2x2 matrix.

**Example Matrix:**
$$ A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} $$

### Step 1: Form the Matrix \(A - \lambda I\)

Subtract \(\lambda\) from the diagonal elements of \(A\):
$$ A - \lambda I = \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} $$

### Step 2: Calculate the Determinant and Set it to Zero (Characteristic Equation)

$$ \det \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = 0 $$

Using the determinant formula for a 2x2 matrix \( \begin{pmatrix} a & b \\ c & d \end{pmatrix} \rightarrow ad - bc \):

$$ (4 - \lambda)(3 - \lambda) - (1)(2) = 0 $$
$$ (12 - 4\lambda - 3\lambda + \lambda^2) - 2 = 0 $$
$$ \lambda^2 - 7\lambda + 12 - 2 = 0 $$
$$ \lambda^2 - 7\lambda + 10 = 0 $$

This is our characteristic equation.

### Step 3: Solve the Characteristic Equation for Eigenvalues (\(\lambda\))

We can factor this quadratic equation:
$$ (\lambda - 5)(\lambda - 2) = 0 $$

The eigenvalues are:
$$ \lambda_1 = 5 $$
$$ \lambda_2 = 2 $$

### Step 4: Find the Eigenvectors for Each Eigenvalue

Now, for each eigenvalue, we substitute it back into the equation \((A - \lambda I)\mathbf{v} = \mathbf{0}\) and solve for the vector \(\mathbf{v} = \begin{pmatrix} x \\ y \end{pmatrix}\).

#### For \(\lambda_1 = 5\):

Substitute \(\lambda = 5\) into \((A - \lambda I)\):
$$ A - 5I = \begin{pmatrix} 4 - 5 & 1 \\ 2 & 3 - 5 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} $$

Now solve \(\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}\):

This gives us two equations:
1. \( -x + y = 0 \implies y = x \)
2. \( 2x - 2y = 0 \implies y = x \)

Both equations are consistent. This means any vector where \(y=x\) is an eigenvector. We can choose a simple non-zero value for \(x\), for example, \(x=1\).
So, the eigenvector for \(\lambda_1 = 5\) is \(\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).

#### For \(\lambda_2 = 2\):

Substitute \(\lambda = 2\) into \((A - \lambda I)\):
$$ A - 2I = \begin{pmatrix} 4 - 2 & 1 \\ 2 & 3 - 2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} $$

Now solve \(\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}\):

This gives us two equations:
1. \( 2x + y = 0 \implies y = -2x \)
2. \( 2x + y = 0 \implies y = -2x \)

Again, consistent equations. We can choose a simple non-zero value for \(x\), for example, \(x=1\).
So, the eigenvector for \(\lambda_2 = 2\) is \(\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}\).

**Summary of Eigenpairs:**

*   Eigenvalue \(\lambda_1 = 5\) with Eigenvector \(\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\).
*   Eigenvalue \(\lambda_2 = 2\) with Eigenvector \(\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}\).

You can verify these by plugging them back into \(A\mathbf{v} = \lambda\mathbf{v}\):
For \(\lambda_1 = 5, \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}\):
$$ \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4(1)+1(1) \\ 2(1)+3(1) \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix} = 5 \begin{pmatrix} 1 \\ 1 \end{pmatrix} $$
For \(\lambda_2 = 2, \mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}\):
$$ \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 4(1)+1(-2) \\ 2(1)+3(-2) \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix} = 2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} $$

## Important Considerations

*   **Square Matrices Only:** Eigenvalues and eigenvectors are defined only for square matrices.
*   **Non-Uniqueness of Eigenvectors:** An eigenvector is not unique. If \(\mathbf{v}\) is an eigenvector for \(\lambda\), then any non-zero scalar multiple \(c\mathbf{v}\) is also an eigenvector for \(\lambda\). We usually choose the simplest form (e.g., with integer components and the first non-zero component being 1).
*   **Number of Eigenvalues:** An \(n \times n\) matrix will have \(n\) eigenvalues, though some may be repeated (multiplicity) or complex.
*   **Higher Dimensions:** The process extends to \(n \times n\) matrices, but solving the characteristic polynomial (which will be of degree \(n\)) can become complex. Numerical methods are often used for larger matrices.

By mastering the calculation of eigenpairs, you gain a deeper insight into the behavior of linear transformations and lay the groundwork for advanced spectral analysis techniques.

## Supports

- [[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/eigenpair-calculation|Eigenpair calculation]]
