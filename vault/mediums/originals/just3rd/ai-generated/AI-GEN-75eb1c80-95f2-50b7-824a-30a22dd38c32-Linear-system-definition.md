---
type: "medium"
title: "Understanding Linear Systems: The Building Blocks"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/linear-algebra/matrix-algebra/microskills/linear-system-definition|linear-system-definition]]"
learning-time-in-minutes: 3
---
# Understanding Linear Systems: The Building Blocks

In Matrix Algebra, understanding how to define and represent systems is the first crucial step. This lesson focuses on the fundamental structure of a **linear system**, which is a collection of one or more linear equations.

## What is a Linear Equation?

Before we talk about a system, let's define a single linear equation. A linear equation in multiple variables is an equation where each term is either a constant or a constant multiplied by a single variable. The variables are only raised to the power of 1.

For example, here are some linear equations:
*   $$ 2x + 3y = 7 $$
*   $$ x - 5z = 10 $$
*   $$ 4a + b - 2c = 0 $$

And here are some equations that are *not* linear:
*   $$ x^2 + y = 5 $$ (because of $$ x^2 $$)
*   $$ \frac{1}{x} + y = 3 $$ (because of $$ \frac{1}{x} $$)
*   $$ \sin(x) + y = 1 $$ (because of $$ \sin(x) $$)

The key takeaway is that in a linear equation, variables are not multiplied together, squared, or subjected to other non-linear operations.

## What is a System of Linear Equations?

A **system of linear equations** is simply a set of two or more linear equations that share the same variables. When we talk about a system, we are often interested in finding values for these variables that satisfy *all* the equations in the system simultaneously.

Think of it like a puzzle. Each equation gives you a clue, and you're looking for the solution that fits all the clues.

### Components of a Linear System

Let's break down the components of a typical linear system:

1.  **Variables:** These are the unknown quantities we are trying to solve for. They are usually represented by letters like $$ x, y, z, a, b, c $$, etc.
2.  **Coefficients:** These are the numerical values that multiply the variables in each equation. In the equation $$ 2x + 3y = 7 $$, the coefficients are 2 (for $$ x $$) and 3 (for $$ y $$).
3.  **Constants (or Free Terms):** These are the numbers on the right-hand side of the equals sign in each equation. In $$ 2x + 3y = 7 $$, the constant is 7.

### Example of a Linear System

Consider the following system of two linear equations with two variables, $$ x $$ and $$ y $$:

Equation 1: $$ 2x + 3y = 7 $$
Equation 2: $$ x - 5y = -3 $$

In this system:
*   The **variables** are $$ x $$ and $$ y $$.
*   The **coefficients** in Equation 1 are 2 and 3.
*   The **coefficients** in Equation 2 are 1 (for $$ x $$) and -5 (for $$ y $$).
*   The **constants** are 7 in Equation 1 and -3 in Equation 2.

Our goal in solving such a system would be to find a pair of values for $$ x $$ and $$ y $$ that make both equations true at the same time.

### General Form of a Linear System

A linear system with $$ m $$ equations and $$ n $$ variables can be written in a general form:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{cases}
$$

Here:
*   $$ x_1, x_2, \dots, x_n $$ are the $$ n $$ variables.
*   $$ a_{ij} $$ represents the coefficient of the $$ j^{th} $$ variable in the $$ i^{th} $$ equation. The first index $$ i $$ refers to the equation number, and the second index $$ j $$ refers to the variable number.
*   $$ b_i $$ is the constant term for the $$ i^{th} $$ equation.

Understanding this structure is fundamental because it forms the basis for representing these systems in more compact forms, like matrices, which we will explore next.

## Supports

- [[skills/mathematics/linear-algebra/matrix-algebra/microskills/linear-system-definition|Linear system definition]]
- [[skills/mathematics/signals-systems/system-property-analysis/microskills/linear-system-definition|Linear System Definition]]
