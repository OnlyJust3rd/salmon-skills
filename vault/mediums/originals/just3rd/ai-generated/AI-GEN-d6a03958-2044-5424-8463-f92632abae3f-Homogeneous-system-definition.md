---
type: "medium"
title: "Understanding Homogeneous Linear Systems"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/homogeneous-system-definition|homogeneous-system-definition]]"
learning-time-in-minutes: 3
---
# Understanding Homogeneous Linear Systems

In matrix algebra, we often encounter systems of linear equations. These systems can be classified into two main types: non-homogeneous and homogeneous. This lesson focuses on understanding the definition of a homogeneous linear system.

## What is a Linear System?

Before diving into homogeneous systems, let's quickly recall what a linear system of equations is. A linear system involves variables raised to the power of one, connected by addition and subtraction, and multiplied by constants.

For example, a system with two variables, $x$ and $y$, might look like this:
$$
2x + 3y = 5 \\
x - y = 1
$$

## Introducing Homogeneous Systems

A **homogeneous linear system** is a special type of linear system where all the constant terms (the terms on the right-hand side of the equals sign) are zero.

Consider a general system of $m$ linear equations with $n$ variables:
$$
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
$$

This system is called **homogeneous** if and only if all the $b_i$ values are zero:
$$
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = 0 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = 0 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = 0
$$

In matrix form, a homogeneous linear system can be represented as:
$$
\mathbf{A}\mathbf{x} = \mathbf{0}
$$
where:
*   $\mathbf{A}$ is the coefficient matrix.
*   $\mathbf{x}$ is the column vector of variables.
*   $\mathbf{0}$ is the zero vector (a column vector where all entries are zero).

## Key Characteristic: The Trivial Solution

A fundamental property of any homogeneous linear system is that it *always* has at least one solution. This solution is called the **trivial solution**.

The trivial solution occurs when all the variables in the system are equal to zero.
$$
x_1 = 0, x_2 = 0, \dots, x_n = 0
$$

Let's see why this is always true. If we substitute $x_1=0, x_2=0, \dots, x_n=0$ into any equation of a homogeneous system:
$$
a_{i1}(0) + a_{i2}(0) + \dots + a_{in}(0) = 0
$$
The left side of the equation becomes a sum of zeros, which always equals zero. This matches the right side of the equation (which is also zero by definition of a homogeneous system). Therefore, setting all variables to zero always satisfies every equation in the system.

## Examples of Homogeneous Systems

**Example 1 (Two variables):**
$$
3x + 2y = 0 \\
x - y = 0
$$
This is a homogeneous system because both constant terms are zero. The trivial solution $(x=0, y=0)$ satisfies this system:
$3(0) + 2(0) = 0$ (True)
$0 - 0 = 0$ (True)

**Example 2 (Three variables):**
$$
x - y + 2z = 0 \\
2x + y - z = 0 \\
x + 2y - 3z = 0
$$
Again, all the right-hand sides are zero, making this a homogeneous system. The trivial solution $(x=0, y=0, z=0)$ is guaranteed to satisfy it.

## Distinguishing from Non-Homogeneous Systems

It's important to recognize the difference. A non-homogeneous system has at least one non-zero constant term:
$$
2x + 3y = 5 \\
x - y = 1
$$
This system does *not* necessarily have a trivial solution. In fact, for this specific example, $x=8/5$ and $y=3/5$ is the unique solution, which is not the trivial solution.

## Summary

A homogeneous linear system is a system of linear equations where all the constant terms on the right-hand side of the equations are zero. This can be represented in matrix form as $\mathbf{A}\mathbf{x} = \mathbf{0}$. The most significant defining feature of such systems is that they always possess the **trivial solution**, where all variables are equal to zero.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/homogeneous-system-definition|Homogeneous system definition]]
