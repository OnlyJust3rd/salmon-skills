---
type: "medium"
title: "Gaussian Elimination for Matrix Inverses"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/gaussian-elimination-for-inverse|gaussian-elimination-for-inverse]]"
learning-time-in-minutes: 5
---
# Gaussian Elimination for Matrix Inverses

This lesson focuses on a powerful technique for finding the inverse of a square matrix: Gaussian elimination. This method is particularly useful for matrices larger than 2x2, where direct formula application becomes cumbersome.

## What is a Matrix Inverse?

Before diving into the method, let's briefly recap what a matrix inverse is. For a square matrix \(A\), its inverse, denoted as \(A^{-1}\), is a matrix such that when multiplied by \(A\), it results in the identity matrix (\(I\)).

$$
A \cdot A^{-1} = A^{-1} \cdot A = I
$$

The identity matrix is a square matrix with ones on the main diagonal and zeros everywhere else. For example, a 3x3 identity matrix is:

$$
I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

Not all square matrices have an inverse. A matrix has an inverse if and only if its determinant is non-zero.

## The Gaussian Elimination Approach

Gaussian elimination transforms a given matrix into the identity matrix by applying a series of elementary row operations. The key idea is to augment the original matrix \(A\) with the identity matrix \(I\) of the same dimension, forming an augmented matrix \([A | I]\). Then, we apply row operations to transform the left side (\(A\)) into the identity matrix (\(I\)). Whatever operations we perform on the left side must also be performed on the right side (\(I\)). When the left side becomes \(I\), the right side will automatically transform into \(A^{-1}\).

The augmented matrix will look like this:

$$
[A | I]
$$

Our goal is to transform it into:

$$
[I | A^{-1}]
$$

## Elementary Row Operations

The allowed operations are:

1.  **Swapping two rows:** \(R_i \leftrightarrow R_j\)
2.  **Multiplying a row by a non-zero scalar:** \(k R_i \rightarrow R_i\) (where \(k \neq 0\))
3.  **Adding a multiple of one row to another row:** \(R_i + k R_j \rightarrow R_i\) (where \(i \neq j\))

## Steps to Compute the Inverse using Gaussian Elimination

Let's outline the process with a step-by-step approach.

**Example:** Find the inverse of the matrix \(A\) using Gaussian elimination.

$$
A = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}
$$

**Step 1: Form the Augmented Matrix**

Augment the matrix \(A\) with the 2x2 identity matrix.

$$
[A | I] = \begin{pmatrix} 2 & 1 & | & 1 & 0 \\ 3 & 4 & | & 0 & 1 \end{pmatrix}
$$

**Step 2: Make the top-left element a '1'**

We want the first element of the first row to be 1. We can achieve this by dividing the first row by 2.

$$
\frac{1}{2} R_1 \rightarrow R_1
$$

$$
\begin{pmatrix} 1 & 1/2 & | & 1/2 & 0 \\ 3 & 4 & | & 0 & 1 \end{pmatrix}
$$

**Step 3: Make the element below the leading '1' in the first column a '0'**

To make the '3' in the second row, first column a '0', we can subtract 3 times the first row from the second row.

$$
R_2 - 3 R_1 \rightarrow R_2
$$

$$
\begin{pmatrix} 1 & 1/2 & | & 1/2 & 0 \\ 3 - 3(1) & 4 - 3(1/2) & | & 0 - 3(1/2) & 1 - 3(0) \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 1/2 & | & 1/2 & 0 \\ 0 & 4 - 3/2 & | & -3/2 & 1 \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 1/2 & | & 1/2 & 0 \\ 0 & 5/2 & | & -3/2 & 1 \end{pmatrix}
$$

**Step 4: Make the diagonal element in the second row a '1'**

Now, we want to make the '5/2' in the second row, second column a '1'. We can do this by multiplying the second row by its reciprocal, \(2/5\).

$$
\frac{2}{5} R_2 \rightarrow R_2
$$

$$
\begin{pmatrix} 1 & 1/2 & | & 1/2 & 0 \\ 0 \cdot \frac{2}{5} & \frac{5}{2} \cdot \frac{2}{5} & | & -\frac{3}{2} \cdot \frac{2}{5} & 1 \cdot \frac{2}{5} \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 1/2 & | & 1/2 & 0 \\ 0 & 1 & | & -3/5 & 2/5 \end{pmatrix}
$$

**Step 5: Make the element above the leading '1' in the second column a '0'**

Our goal is to have the identity matrix on the left. We now need to make the '1/2' in the first row, second column a '0'. We can achieve this by subtracting 1/2 times the second row from the first row.

$$
R_1 - \frac{1}{2} R_2 \rightarrow R_1
$$

$$
\begin{pmatrix} 1 - \frac{1}{2}(0) & \frac{1}{2} - \frac{1}{2}(1) & | & \frac{1}{2} - \frac{1}{2}(-\frac{3}{5}) & 0 - \frac{1}{2}(\frac{2}{5}) \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 0 & | & \frac{1}{2} + \frac{3}{10} & -\frac{1}{5} \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 0 & | & \frac{5}{10} + \frac{3}{10} & -\frac{1}{5} \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 0 & | & \frac{8}{10} & -\frac{1}{5} \end{pmatrix}
$$

$$
\begin{pmatrix} 1 & 0 & | & \frac{4}{5} & -\frac{1}{5} \end{pmatrix}
$$

The complete augmented matrix is now:

$$
\begin{pmatrix} 1 & 0 & | & 4/5 & -1/5 \\ 0 & 1 & | & -3/5 & 2/5 \end{pmatrix}
$$

**Step 6: Identify the Inverse Matrix**

The left side is now the identity matrix. The right side is the inverse of the original matrix \(A\).

$$
A^{-1} = \begin{pmatrix} 4/5 & -1/5 \\ -3/5 & 2/5 \end{pmatrix}
$$

You can verify this by multiplying \(A\) and \(A^{-1}\):

$$
A \cdot A^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 4/5 & -1/5 \\ -3/5 & 2/5 \end{pmatrix} = \begin{pmatrix} 2(4/5)+1(-3/5) & 2(-1/5)+1(2/5) \\ 3(4/5)+4(-3/5) & 3(-1/5)+4(2/5) \end{pmatrix}
$$

$$
= \begin{pmatrix} 8/5-3/5 & -2/5+2/5 \\ 12/5-12/5 & -3/5+8/5 \end{pmatrix} = \begin{pmatrix} 5/5 & 0 \\ 0 & 5/5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I
$$

## When Gaussian Elimination Might Not Work

If at any point during the row operations, you end up with a row of all zeros on the left side of the augmented matrix while trying to create the identity matrix, it means the original matrix \(A\) is singular (its determinant is zero) and therefore does not have an inverse.

## Practice

Try this method with a 3x3 matrix. The process remains the same, but it will involve more steps to transform the left side into the 3x3 identity matrix. Remember to be systematic and careful with your calculations.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/gaussian-elimination-for-inverse|Gaussian elimination for inverse]]
