---
type: "medium"
title: "Executing a Basis Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/vector-space/microskills/basis-transformation-execution|basis-transformation-execution]]"
learning-time-in-minutes: 5
---
# Executing a Basis Transformation

In linear algebra, a vector can be represented by its coordinates with respect to a specific basis. Sometimes, it's necessary or more convenient to express that same vector using a different basis. This process is called a change of basis, and executing it involves a systematic procedure. This lesson focuses on the practical steps to perform this transformation.

## The Core Idea

When you change the basis of a vector space, you are essentially changing the "rulers" you use to measure a vector's components. The vector itself remains the same geometric object, but its numerical representation (its coordinate vector) changes.

Let's say we have a vector space $V$, an original basis $B = \{\mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_n\}$, and a new basis $B' = \{\mathbf{b}'_1, \mathbf{b}'_2, \dots, \mathbf{b}'_n\}$. If a vector $\mathbf{v}$ has coordinates $[\mathbf{v}]_B$ with respect to basis $B$, we want to find its coordinates $[\mathbf{v}]_{B'}$ with respect to basis $B'$.

The key to this transformation lies in understanding how the new basis vectors are expressed in terms of the original basis.

## Steps for Basis Transformation

To find the coordinate vector of a vector $\mathbf{v}$ with respect to a new basis $B'$, given its coordinates $[\mathbf{v}]_B$ with respect to an original basis $B$, follow these steps:

1.  **Express New Basis Vectors in Terms of the Old Basis:** For each vector $\mathbf{b}'_j$ in the new basis $B'$, find its coordinate vector with respect to the original basis $B$. Let these be $[\mathbf{b}'_j]_B$. This means writing each $\mathbf{b}'_j$ as a linear combination of the vectors in $B$:
    $$
    \mathbf{b}'_j = c_{1j} \mathbf{b}_1 + c_{2j} \mathbf{b}_2 + \dots + c_{nj} \mathbf{b}_n
    $$
    So, $[\mathbf{b}'_j]_B = \begin{bmatrix} c_{1j} \\ c_{2j} \\ \vdots \\ c_{nj} \end{bmatrix}$.

2.  **Form the Change-of-Basis Matrix (from B' to B):** Construct a matrix, often denoted as $P_{B \leftarrow B'}$, where the columns are the coordinate vectors of the new basis vectors (from $B'$) expressed in the old basis ($B$).
    $$
    P_{B \leftarrow B'} = \begin{bmatrix} [\mathbf{b}'_1]_B & [\mathbf{b}'_2]_B & \dots & [\mathbf{b}'_n]_B \end{bmatrix}
    $$

3.  **Relate Coordinate Vectors:** The relationship between the coordinate vectors is given by:
    $$
    [\mathbf{v}]_B = P_{B \leftarrow B'} [\mathbf{v}]_{B'}
    $$

4.  **Find the Inverse Matrix (if needed):** To find $[\mathbf{v}]_{B'}$ from $[\mathbf{v}]_B$, we need the inverse of $P_{B \leftarrow B'}$. Let $P_{B' \leftarrow B} = (P_{B \leftarrow B'})^{-1}$. This matrix $P_{B' \leftarrow B}$ is the change-of-basis matrix from $B$ to $B'$.
    $$
    [\mathbf{v}]_{B'} = P_{B' \leftarrow B} [\mathbf{v}]_B
    $$

5.  **Perform the Multiplication:** Multiply the inverse change-of-basis matrix $P_{B' \leftarrow B}$ by the original coordinate vector $[\mathbf{v}]_B$ to obtain the new coordinate vector $[\mathbf{v}]_{B'}$.
    $$
    [\mathbf{v}]_{B'} = (P_{B \leftarrow B'})^{-1} [\mathbf{v}]_B
    $$

## Worked Example

Let's consider a vector space $V = \mathbb{R}^2$.

**Original Basis B:**
$B = \{\mathbf{b}_1, \mathbf{b}_2\}$, where $\mathbf{b}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\mathbf{b}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$ (this is the standard basis).

**New Basis B':**
$B' = \{\mathbf{b}'_1, \mathbf{b}'_2\}$, where $\mathbf{b}'_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and $\mathbf{b}'_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

**Vector v:**
Suppose we have a vector $\mathbf{v}$ whose coordinates with respect to the original basis $B$ are $[\mathbf{v}]_B = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$. This means $\mathbf{v} = 2\mathbf{b}_1 + 3\mathbf{b}_2 = 2\begin{bmatrix} 1 \\ 0 \end{bmatrix} + 3\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$.

**Goal:** Find the coordinate vector of $\mathbf{v}$ with respect to the new basis $B'$, i.e., $[\mathbf{v}]_{B'}$.

**Step 1: Express New Basis Vectors in Terms of the Old Basis**
The new basis vectors are already given in terms of the standard basis $B$.
*   $\mathbf{b}'_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix} = 1\mathbf{b}_1 + 1\mathbf{b}_2$. So, $[\mathbf{b}'_1]_B = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
*   $\mathbf{b}'_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix} = 1\mathbf{b}_1 - 1\mathbf{b}_2$. So, $[\mathbf{b}'_2]_B = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$.

**Step 2: Form the Change-of-Basis Matrix (from B' to B)**
$$
P_{B \leftarrow B'} = \begin{bmatrix} [\mathbf{b}'_1]_B & [\mathbf{b}'_2]_B \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
$$

**Step 3: Relate Coordinate Vectors**
We know $[\mathbf{v}]_B = P_{B \leftarrow B'} [\mathbf{v}]_{B'}$.
$$
\begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} [\mathbf{v}]_{B'}
$$

**Step 4: Find the Inverse Matrix**
We need to find the inverse of $P_{B \leftarrow B'}$. For a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the inverse is $\frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.
Here, $a=1, b=1, c=1, d=-1$. The determinant is $ad-bc = (1)(-1) - (1)(1) = -1 - 1 = -2$.
$$
P_{B \leftarrow B'}^{-1} = \frac{1}{-2} \begin{bmatrix} -1 & -1 \\ -1 & 1 \end{bmatrix} = \begin{bmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{bmatrix}
$$
This inverse matrix is $P_{B' \leftarrow B}$.

**Step 5: Perform the Multiplication**
$$
[\mathbf{v}]_{B'} = P_{B' \leftarrow B} [\mathbf{v}]_B = \begin{bmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{bmatrix} \begin{bmatrix} 2 \\ 3 \end{bmatrix}
$$
$$
[\mathbf{v}]_{B'} = \begin{bmatrix} (1/2)(2) + (1/2)(3) \\ (1/2)(2) + (-1/2)(3) \end{bmatrix} = \begin{bmatrix} 1 + 1.5 \\ 1 - 1.5 \end{bmatrix} = \begin{bmatrix} 2.5 \\ -0.5 \end{bmatrix}
$$

So, the coordinate vector of $\mathbf{v}$ with respect to the new basis $B'$ is $\begin{bmatrix} 2.5 \\ -0.5 \end{bmatrix}$.
This means $\mathbf{v} = 2.5 \mathbf{b}'_1 - 0.5 \mathbf{b}'_2 = 2.5 \begin{bmatrix} 1 \\ 1 \end{bmatrix} - 0.5 \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 2.5 - 0.5 \\ 2.5 + 0.5 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$, which matches our original vector.

## Common Pitfalls

*   **Confusing the direction of transformation:** Ensure you are constructing the correct change-of-basis matrix ($P_{B \leftarrow B'}$ or $P_{B' \leftarrow B}$) and using its inverse appropriately. The matrix whose columns are the *new* basis vectors expressed in the *old* basis is the one whose inverse relates the *old* coordinates to the *new* coordinates.
*   **Incorrect matrix inversion:** Double-check your calculations when finding the inverse of the change-of-basis matrix.
*   **Order of operations:** Be meticulous with matrix multiplication and ensure the dimensions are compatible.

## Supports

- [[skills/mathematics/linear-algebra/vector-space/microskills/basis-transformation-execution|Basis transformation execution]]
