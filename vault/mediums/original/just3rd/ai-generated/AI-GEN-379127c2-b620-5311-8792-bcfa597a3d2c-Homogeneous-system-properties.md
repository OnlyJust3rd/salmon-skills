---
type: "medium"
title: "Homogeneous Systems: The Trivial Solution"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/homogeneous-system-properties|homogeneous-system-properties]]"
learning-time-in-minutes: 3
---
# Homogeneous Systems: The Trivial Solution

In Matrix Algebra, understanding different types of linear systems is crucial. Today, we'll focus on a specific type: **homogeneous systems**.

## What is a Homogeneous System?

A homogeneous system of linear equations is a system where all the constant terms are zero. When represented in matrix form, this means the system looks like:

$$
Ax = 0
$$

Here:
*   `A` is the coefficient matrix.
*   `x` is the vector of variables.
*   `0` is the zero vector (a vector where all entries are zero).

Let's look at a simple example. Consider the system:

$$
\begin{cases}
2x_1 + x_2 = 0 \\
x_1 - x_2 = 0
\end{cases}
$$

In matrix form, this is:

$$
\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

## The Always-Present Solution: The Trivial Solution

Every homogeneous system has at least one solution. This is because if we set all the variables to zero (i.e., $x_1 = 0, x_2 = 0, \ldots, x_n = 0$), the left side of every equation will be zero, and the right side is already zero.

This solution, where all variables are zero, is called the **trivial solution**.

For our example system:
$$
\begin{cases}
2x_1 + x_2 = 0 \\
x_1 - x_2 = 0
\end{cases}
$$
If we set $x_1 = 0$ and $x_2 = 0$:
*   Equation 1: $2(0) + 0 = 0$ (True)
*   Equation 2: $0 - 0 = 0$ (True)

So, $x_1=0, x_2=0$ is a solution, and it's the trivial solution.

## Beyond the Trivial: Non-Trivial Solutions

The interesting part about homogeneous systems is whether they have *other* solutions besides the trivial one. Solutions other than the trivial solution are called **non-trivial solutions**.

The existence of non-trivial solutions depends on the properties of the coefficient matrix `A`.

### Key Property: Determinant

A fundamental property related to non-trivial solutions in homogeneous systems involves the **determinant** of the coefficient matrix `A`.

*   If the determinant of `A` is **non-zero** ($det(A) \neq 0$), the system $Ax=0$ has **only the trivial solution**.
*   If the determinant of `A` is **zero** ($det(A) = 0$), the system $Ax=0$ has **infinitely many non-trivial solutions** in addition to the trivial solution.

Let's check our example matrix:
$$
A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}
$$
The determinant is $det(A) = (2 \times -1) - (1 \times 1) = -2 - 1 = -3$.
Since $det(A) = -3 \neq 0$, our example system only has the trivial solution.

### Key Property: Rank and Number of Variables

Another way to think about non-trivial solutions is through the **rank** of the coefficient matrix `A` and the number of variables.

*   Let `n` be the number of variables in the system.
*   Let `rank(A)` be the rank of the coefficient matrix.

If `rank(A) < n`, then the system $Ax=0$ has non-trivial solutions.
If `rank(A) = n`, then the system $Ax=0$ has only the trivial solution.

For a square matrix `A`, `rank(A) = n` is equivalent to $det(A) \neq 0$.

## Summary of Homogeneous System Properties

| Condition                               | Solutions of $Ax=0$       |
| :-------------------------------------- | :------------------------ |
| $det(A) \neq 0$ (or $rank(A) = n$)      | Only the trivial solution |
| $det(A) = 0$ (or $rank(A) < n$)         | Infinitely many non-trivial solutions (plus the trivial one) |

Understanding these properties allows us to quickly determine if a homogeneous system has solutions beyond the zero vector. This is a foundational concept for solving and analyzing systems of linear equations.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/homogeneous-system-properties|Homogeneous system properties]]
