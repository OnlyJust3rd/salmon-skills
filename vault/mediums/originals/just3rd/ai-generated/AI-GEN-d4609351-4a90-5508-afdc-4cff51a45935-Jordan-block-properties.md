---
type: "medium"
title: "Understanding Jordan Block Properties"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/jordan-block-properties|jordan-block-properties]]"
learning-time-in-minutes: 5
---
# Understanding Jordan Block Properties

In spectral analysis, understanding the structure of matrices is crucial. One key component that helps us understand the behavior of a matrix, especially when it's not diagonalizable, is the **Jordan Normal Form**. At the heart of this form are **Jordan blocks**. This lesson focuses on the properties that define these individual blocks.

## What is a Jordan Block?

A Jordan block is a special type of square matrix. It's characterized by its diagonal entries, its super-diagonal entries, and all other entries being zero. These blocks are fundamental building blocks for understanding the Jordan Normal Form of any square matrix.

Specifically, a Jordan block of size \(k \times k\) associated with an eigenvalue \(\lambda\) has the following structure:

$$
J_k(\lambda) =
\begin{bmatrix}
\lambda & 1 & 0 & \dots & 0 \\
0 & \lambda & 1 & \dots & 0 \\
0 & 0 & \lambda & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & \lambda
\end{bmatrix}
$$

This means:
*   The diagonal entries are all equal to the eigenvalue \(\lambda\).
*   The entries immediately above the diagonal (the "super-diagonal") are all 1.
*   All other entries are 0.

A Jordan block can be of size \(1 \times 1\), in which case it's simply a scalar \([\lambda]\).

## Key Properties of a Jordan Block

Let's break down the essential characteristics of a Jordan block.

### 1. Eigenvalue

Every Jordan block is associated with a specific eigenvalue \(\lambda\) of the matrix it's part of. This eigenvalue appears on the main diagonal of the block.

### 2. Size

The size of a Jordan block, denoted by \(k\), determines how many rows and columns it has. A \(k \times k\) Jordan block can be visualized as a \(k \times k\) matrix. The size of the Jordan block is related to the "generalized eigenvectors" associated with the eigenvalue.

### 3. Super-diagonal of Ones

The defining feature of a Jordan block (for size greater than 1) is the presence of 1s on the super-diagonal. These 1s are what prevent the matrix from being diagonalized. If these were zeros, the block would simply be a diagonal matrix with all \(\lambda\) on the diagonal.

### 4. Rank

The rank of a \(k \times k\) Jordan block \(J_k(\lambda)\) is \(k\) if \(\lambda \neq 0\). If \(\lambda = 0\), the rank is \(k-1\).

**Example:**
Consider a Jordan block \(J_3(2)\):
$$
J_3(2) =
\begin{bmatrix}
2 & 1 & 0 \\
0 & 2 & 1 \\
0 & 0 & 2
\end{bmatrix}
$$
The eigenvalue is \(\lambda=2\), and the size is \(k=3\). Since \(\lambda \neq 0\), its rank is 3.

Now consider a Jordan block with \(\lambda = 0\):
$$
J_3(0) =
\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{bmatrix}
$$
The eigenvalue is \(\lambda=0\), and the size is \(k=3\). Its rank is \(k-1 = 3-1 = 2\).

### 5. Defect (or Nullity)

The defect of an eigenvalue \(\lambda\) for a given Jordan block is the difference between the size of the block and the rank of the block.

*   If \(\lambda \neq 0\), the defect is \(k - k = 0\).
*   If \(\lambda = 0\), the defect is \(k - (k-1) = 1\).

This property is directly related to the number of "linearly independent generalized eigenvectors" associated with that eigenvalue within that block.

### 6. Eigenvectors and Generalized Eigenvectors

A Jordan block has only **one** linearly independent eigenvector, which is the standard eigenvector corresponding to the eigenvalue \(\lambda\). For a \(k \times k\) Jordan block with \(\lambda \neq 0\), this eigenvector can be taken as:

$$
\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}
$$

However, a Jordan block of size \(k > 1\) also has \(k-1\) **generalized eigenvectors**. These are vectors that satisfy equations like \((J_k(\lambda) - \lambda I) \mathbf{v}_i = \mathbf{v}_{i-1}\), where \(\mathbf{v}_1\) is the eigenvector and \(I\) is the identity matrix. The presence of these generalized eigenvectors is what distinguishes a Jordan block from a diagonal matrix.

For \(J_k(\lambda)\) with \(\lambda \neq 0\), the generalized eigenvectors can be constructed as follows, starting with \(\mathbf{v}_1 = [1, 0, \dots, 0]^T\):
*   \(\mathbf{v}_2 = (J_k(\lambda) - \lambda I)^{-1} \mathbf{v}_1 = [0, 1, 0, \dots, 0]^T\)
*   \(\mathbf{v}_3 = (J_k(\lambda) - \lambda I)^{-1} \mathbf{v}_2 = [0, 0, 1, 0, \dots, 0]^T\)
*   ... and so on.

### 7. Algebraic and Geometric Multiplicity

For a Jordan block of size \(k\) associated with an eigenvalue \(\lambda\):
*   The **algebraic multiplicity** of \(\lambda\) within this block is \(k\). This means \(\lambda\) is a root of the characteristic polynomial \(k\) times.
*   The **geometric multiplicity** of \(\lambda\) within this block is 1. This means there is only one linearly independent eigenvector for \(\lambda\) within this block.

The fact that the geometric multiplicity is strictly less than the algebraic multiplicity for blocks of size greater than 1 is the key indicator that the matrix is not diagonalizable.

## Summary of Properties

| Property                | Description                                                                    | Significance                                                                                             |
| :---------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **Eigenvalue (\(\lambda\))** | Value on the main diagonal.                                                    | Identifies the root of the characteristic polynomial associated with the block.                          |
| **Size (\(k\))**        | Number of rows/columns.                                                        | Indicates the number of generalized eigenvectors and the "degree" of non-diagonalizability for \(\lambda\). |
| **Super-diagonal**      | Entries equal to 1 immediately above the main diagonal (if \(k > 1\)).         | The "off-diagonal" structure that prevents simple diagonalization.                                       |
| **Rank**                | \(k\) if \(\lambda \neq 0\), \(k-1\) if \(\lambda = 0\).                        | Related to the number of linearly independent columns/rows.                                              |
| **Defect**              | \(0\) if \(\lambda \neq 0\), \(1\) if \(\lambda = 0\).                         | Directly related to the number of generalized eigenvectors beyond the standard eigenvectors.             |
| **Eigenvectors**        | One linearly independent eigenvector per block.                                | The standard vector that satisfies \(J\mathbf{v} = \lambda\mathbf{v}\).                                 |
| **Generalized Eigenvectors** | \(k-1\) additional generalized eigenvectors per block (if \(k > 1\)).       | Vectors that satisfy \((J - \lambda I)^m \mathbf{v} \neq 0\) but \((J - \lambda I)^{m+1} \mathbf{v} = 0\). |
| **Algebraic Multiplicity** | \(k\) for the eigenvalue \(\lambda\).                                          | How many times \(\lambda\) is a root of the characteristic polynomial.                                 |
| **Geometric Multiplicity** | \(1\) for the eigenvalue \(\lambda\).                                          | How many linearly independent eigenvectors exist for \(\lambda\).                                        |

Understanding these properties of individual Jordan blocks is the first step to comprehending the structure of the entire Jordan Normal Form, which provides a canonical representation for matrices that are not diagonalizable.

## Supports

- [[skills/mathematics/linear-algebra/spectral-analysis-and-matrix-decomposition/microskills/jordan-block-properties|Jordan block properties]]
