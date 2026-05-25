---
type: "medium"
title: "Eigenvalues as Diagonal Entries in Diagonalization"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/eigenvalues-in-diagonal-matrix-d|eigenvalues-in-diagonal-matrix-d]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/spectral-analysis-and-matrix-decomposition|spectral-analysis-and-matrix-decomposition]]"
learning-time-in-minutes: 3
---
# Eigenvalues as Diagonal Entries in Diagonalization

This lesson explores how eigenvalues, the special scalars associated with a matrix, directly populate the diagonal of a transformed matrix during diagonalization. Understanding this relationship is a key step in grasping the power of spectral analysis and matrix decomposition.

## The Diagonalization Goal

Recall that the ultimate aim of diagonalization is to transform a square matrix $$A$$ into a simpler, diagonal matrix $$D$$. This transformation is achieved using a matrix of eigenvectors $$P$$, such that:

$$
A = PDP^{-1}
$$

The matrix $$D$$ is special because all its off-diagonal elements are zero. The question we are addressing is: what values reside on the diagonal of $$D$$?

## Connecting Eigenvalues to the Diagonal

The fundamental definition of an eigenvalue $$ \lambda $$ and its corresponding eigenvector $$ \mathbf{v} $$ for a matrix $$A$$ is:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

This equation tells us that when the matrix $$A$$ acts on its eigenvector $$ \mathbf{v} $$, it simply scales $$ \mathbf{v} $$ by the eigenvalue $$ \lambda $$. The direction of $$ \mathbf{v} $$ remains unchanged.

Now, let's consider the process of diagonalization. If we have a set of linearly independent eigenvectors $$ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_n $$ for an $$ n \times n $$ matrix $$A$$, we can form the matrix $$P$$ where each column is an eigenvector:

$$
P = \begin{bmatrix} | & | & & | \\ \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n \\ | & | & & | \end{bmatrix}
$$

When we multiply $$AP$$, we are essentially applying $$A$$ to each eigenvector column of $$P$$. Using the eigenvalue-eigenvector definition:

$$
AP = A \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n \end{bmatrix} = \begin{bmatrix} A\mathbf{v}_1 & A\mathbf{v}_2 & \cdots & A\mathbf{v}_n \end{bmatrix}
$$

$$
AP = \begin{bmatrix} \lambda_1\mathbf{v}_1 & \lambda_2\mathbf{v}_2 & \cdots & \lambda_n\mathbf{v}_n \end{bmatrix}
$$

Now, look at this resulting matrix $$AP$$. We can rewrite it by factoring out the scalar eigenvalues:

$$
AP = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{bmatrix}
$$

Notice that the matrix on the right, which contains the eigenvalues $$ \lambda_1, \lambda_2, \ldots, \lambda_n $$ on its diagonal and zeros everywhere else, is precisely the diagonal matrix $$D$$!

$$
AP = PD
$$

If $$P$$ is invertible (which it is if the eigenvectors are linearly independent), we can multiply both sides by $$P^{-1}$$ on the right:

$$
APP^{-1} = PDP^{-1}
$$

$$
A = PDP^{-1}
$$

This confirms that the diagonal elements of the matrix $$D$$ are precisely the eigenvalues of the original matrix $$A$$.

## Key Takeaway

The diagonal matrix $$D$$ in the diagonalization of a matrix $$A$$ contains the **eigenvalues** of $$A$$ along its main diagonal. Each eigenvalue $$ \lambda_i $$ corresponds to the eigenvector $$ \mathbf{v}_i $$ which forms the $$i$$-th column of the matrix $$P$$.

This is why eigenvalues are so crucial in spectral analysis. They reveal the fundamental scaling factors of the linear transformation represented by the matrix, and when a matrix is diagonalized, these scaling factors are directly exposed on the diagonal of the resulting matrix $$D$$.

## Supports

- [[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/eigenvalues-in-diagonal-matrix-d|Eigenvalues in diagonal matrix D]]
