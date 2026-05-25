---
type: "medium"
title: "Finding New Coordinates: Coordinate Vector Transformation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/vector-space/microskills/coordinate-vector-transformation|coordinate-vector-transformation]]"
related-skills:
  - "[[skills/mathematics/linear-algebra/vector-space/vector-space|vector-space]]"
learning-time-in-minutes: 6
---
# Finding New Coordinates: Coordinate Vector Transformation

In linear algebra, a vector can be represented in different ways depending on the basis we choose. This lesson focuses on how to find the coordinates of a vector with respect to a new basis. This is a fundamental skill when working with vector spaces and understanding how different perspectives can represent the same underlying object.

## What is a Coordinate Vector?

A coordinate vector is simply a list of scalars that, when used as coefficients for the basis vectors, reconstruct the original vector. If we have a basis $B = \{ \mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n \}$ for a vector space $V$, and a vector $\mathbf{x} \in V$, then $\mathbf{x}$ can be written as a linear combination of the basis vectors:

$$ \mathbf{x} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_n \mathbf{v}_n $$

The coordinate vector of $\mathbf{x}$ with respect to the basis $B$, denoted as $[\mathbf{x}]_B$, is the column vector of these coefficients:

$$ [\mathbf{x}]_B = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix} $$

## The Challenge: Changing Bases

Sometimes, we are given a vector's coordinates with respect to one basis and need to find its coordinates with respect to a *different* basis. This is where the concept of coordinate vector transformation becomes crucial.

Let's say we have an original basis $B = \{ \mathbf{b}_1, \mathbf{b}_2, \dots, \mathbf{b}_n \}$ and a new basis $B' = \{ \mathbf{b}'_1, \mathbf{b}'_2, \dots, \mathbf{b}'_n \}$. We are given a vector $\mathbf{x}$ and its coordinates $[\mathbf{x}]_B$ with respect to basis $B$. Our goal is to find $[\mathbf{x}]_{B'}$, the coordinates of $\mathbf{x}$ with respect to basis $B'$.

## The Key: The Change-of-Basis Matrix

The bridge between coordinate systems is the **change-of-basis matrix**. There are two types:

1.  **From the new basis to the old basis ($P_{B \to B'}$):** This matrix transforms coordinates from the new basis ($B'$) to the old basis ($B$). Its columns are the coordinate vectors of the *new* basis vectors expressed in terms of the *old* basis.
    $$ P_{B \to B'} = \begin{bmatrix} [\mathbf{b}'_1]_B & [\mathbf{b}'_2]_B & \dots & [\mathbf{b}'_n]_B \end{bmatrix} $$

2.  **From the old basis to the new basis ($P_{B' \to B}$):** This matrix transforms coordinates from the old basis ($B$) to the new basis ($B'$). Its columns are the coordinate vectors of the *old* basis vectors expressed in terms of the *new* basis.
    $$ P_{B' \to B} = \begin{bmatrix} [\mathbf{b}_1]_{B'} & [\mathbf{b}_2]_{B'} & \dots & [\mathbf{b}_n]_{B'} \end{bmatrix} $$

The relationship between these matrices is that they are inverses of each other: $P_{B' \to B} = (P_{B \to B'})^{-1}$.

## The Transformation Formula

Once we have the change-of-basis matrix, finding the new coordinates is straightforward.

*   **To find coordinates in the new basis ($B'$) from coordinates in the old basis ($B$):**
    $$ [\mathbf{x}]_{B'} = P_{B \to B'} [\mathbf{x}]_B $$
    Here, $P_{B \to B'}$ is the matrix whose columns are the coordinates of the *old* basis vectors expressed in terms of the *new* basis. This seems counter-intuitive initially, but think about it: to express the original vector $\mathbf{x}$ in the new basis, you need to know how the original basis vectors "translate" into the new basis.

*   **To find coordinates in the old basis ($B$) from coordinates in the new basis ($B'$):**
    $$ [\mathbf{x}]_B = P_{B' \to B} [\mathbf{x}]_{B'} $$
    Here, $P_{B' \to B}$ is the matrix whose columns are the coordinates of the *new* basis vectors expressed in terms of the *old* basis.

**Important Note on Notation:** Some texts define the change-of-basis matrix with columns as the *new* basis vectors in terms of the *old*. If that's the convention used, the formula would be:
$$ [\mathbf{x}]_{B'} = (P_{B' \to B})^{-1} [\mathbf{x}]_B $$
where $P_{B' \to B}$ has the new basis vectors as columns, expressed in the old basis. For clarity, we will stick to the convention where the matrix directly transforms the coordinates we have to the coordinates we want.

Let's use the convention where the change-of-basis matrix $P$ transforms coordinates from basis $B_1$ to basis $B_2$ as $P_{B_1 \to B_2}$, and the formula is:
$$ [\mathbf{x}]_{B_2} = P_{B_1 \to B_2} [\mathbf{x}]_{B_1} $$
where the columns of $P_{B_1 \to B_2}$ are the coordinate vectors of the basis $B_1$ vectors expressed in terms of the basis $B_2$.

## Worked Example

Let's consider a 2D vector space, $R^2$.

Suppose we have the standard basis $B = \{ \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \end{bmatrix} \}$.
Let a vector $\mathbf{x}$ have coordinates $[\mathbf{x}]_B = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$ with respect to this basis. So, $\mathbf{x} = 3 \begin{bmatrix} 1 \\ 0 \end{bmatrix} + 5 \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$.

Now, consider a new basis $B' = \{ \mathbf{b}'_1, \mathbf{b}'_2 \}$, where:
$\mathbf{b}'_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$
$\mathbf{b}'_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$

We want to find the coordinates of $\mathbf{x}$ with respect to $B'$, i.e., $[\mathbf{x}]_{B'}$.

**Step 1: Express the original basis vectors in terms of the new basis.**
This is often the trickiest part. We need to find scalars $c_1, c_2$ such that:
$\begin{bmatrix} 1 \\ 0 \end{bmatrix} = c_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix}$
$\begin{bmatrix} 0 \\ 1 \end{bmatrix} = d_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + d_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix}$

Let's solve the first equation:
$$ \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} c_1 + c_2 \\ c_1 - c_2 \end{bmatrix} $$
This gives us a system of equations:
$c_1 + c_2 = 1$
$c_1 - c_2 = 0$
Adding the two equations: $2c_1 = 1 \implies c_1 = 1/2$.
Substituting $c_1$ back: $1/2 + c_2 = 1 \implies c_2 = 1/2$.
So, $\begin{bmatrix} 1 \\ 0 \end{bmatrix} = \frac{1}{2} \mathbf{b}'_1 + \frac{1}{2} \mathbf{b}'_2$.
The coordinate vector is $[\begin{bmatrix} 1 \\ 0 \end{bmatrix}]_{B'} = \begin{bmatrix} 1/2 \\ 1/2 \end{bmatrix}$.

Now for the second equation:
$$ \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} d_1 + d_2 \\ d_1 - d_2 \end{bmatrix} $$
This gives us a system of equations:
$d_1 + d_2 = 0$
$d_1 - d_2 = 1$
Adding the two equations: $2d_1 = 1 \implies d_1 = 1/2$.
Substituting $d_1$ back: $1/2 + d_2 = 0 \implies d_2 = -1/2$.
So, $\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \frac{1}{2} \mathbf{b}'_1 - \frac{1}{2} \mathbf{b}'_2$.
The coordinate vector is $[\begin{bmatrix} 0 \\ 1 \end{bmatrix}]_{B'} = \begin{bmatrix} 1/2 \\ -1/2 \end{bmatrix}$.

**Step 2: Construct the change-of-basis matrix $P_{B \to B'}$**
This matrix has the coordinate vectors of the *old* basis ($B$) expressed in terms of the *new* basis ($B'$) as its columns.
$$ P_{B \to B'} = \begin{bmatrix} [\begin{bmatrix} 1 \\ 0 \end{bmatrix}]_{B'} & [\begin{bmatrix} 0 \\ 1 \end{bmatrix}]_{B'} \end{bmatrix} = \begin{bmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{bmatrix} $$

**Step 3: Apply the transformation formula.**
We want to find $[\mathbf{x}]_{B'}$, and we have $[\mathbf{x}]_B$.
$$ [\mathbf{x}]_{B'} = P_{B \to B'} [\mathbf{x}]_B $$
$$ [\mathbf{x}]_{B'} = \begin{bmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{bmatrix} \begin{bmatrix} 3 \\ 5 \end{bmatrix} $$
$$ [\mathbf{x}]_{B'} = \begin{bmatrix} (1/2)(3) + (1/2)(5) \\ (1/2)(3) + (-1/2)(5) \end{bmatrix} $$
$$ [\mathbf{x}]_{B'} = \begin{bmatrix} 3/2 + 5/2 \\ 3/2 - 5/2 \end{bmatrix} = \begin{bmatrix} 8/2 \\ -2/2 \end{bmatrix} = \begin{bmatrix} 4 \\ -1 \end{bmatrix} $$

So, the coordinates of $\mathbf{x}$ with respect to the new basis $B'$ are $4$ and $-1$.
Let's verify this:
$4 \mathbf{b}'_1 + (-1) \mathbf{b}'_2 = 4 \begin{bmatrix} 1 \\ 1 \end{bmatrix} - 1 \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 4 \\ 4 \end{bmatrix} - \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$.
This matches our original vector $\mathbf{x}$.

## Common Pitfalls

*   **Confusing the direction of transformation:** Carefully identify whether you are going from an old basis to a new one or vice-versa.
*   **Incorrectly constructing the change-of-basis matrix:** Ensure the columns of your matrix represent the coordinates of the *source* basis vectors in terms of the *target* basis vectors.
*   **Algebraic errors:** Solving systems of equations and matrix multiplication are common places for mistakes. Double-check your calculations.

By understanding how to construct and use change-of-basis matrices, you can effectively translate vector representations between different coordinate systems.

## Supports

- [[skills/mathematics/linear-algebra/vector-space/microskills/coordinate-vector-transformation|Coordinate vector transformation]]
