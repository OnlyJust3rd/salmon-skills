---
type: "medium"
title: "Locating Critical Points for Multivariable Functions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multivariable-calculus-analysis/microskills/multivariable-critical-point-identification|multivariable-critical-point-identification]]"
---
# Locating Critical Points for Multivariable Functions

In multivariable calculus, understanding the behavior of functions is crucial for analysis. One key aspect of this analysis is identifying **critical points**. These are points where a function might reach its highest or lowest values (extrema) or exhibit other interesting behavior like saddle points. This lesson focuses specifically on how to **locate** these critical points for functions of multiple variables.

## What are Critical Points?

For a function of a single variable, $f(x)$, critical points occur where the derivative $f'(x)$ is either zero or undefined. For functions of multiple variables, the concept extends to the **gradient** of the function.

The gradient of a function $f(x, y)$ is a vector of its partial derivatives:
$$ \nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle $$

**Definition:** A point $(a, b)$ in the domain of a function $f(x, y)$ is a **critical point** if:
1. The gradient is the zero vector: $$ \nabla f(a, b) = \langle 0, 0 \rangle $$ This means both partial derivatives are zero at that point: $$ \frac{\partial f}{\partial x}(a, b) = 0 \quad \text{and} \quad \frac{\partial f}{\partial y}(a, b) = 0 $$
2. At least one of the partial derivatives is undefined at $(a, b)$.

For functions of more variables, like $f(x, y, z)$, the gradient is a vector of all first-order partial derivatives, and a critical point is where this gradient vector is zero or undefined.

## Why are Critical Points Important?

Critical points are the "candidates" for local maxima and minima of a function. If a function has a local maximum or minimum at a point where its derivative exists, that point must be a critical point. For multivariable functions, critical points are also where saddle points can occur, which are points that are neither local maxima nor minima. Identifying these points is the first step in determining the nature of these extrema.

## How to Find Critical Points

The process of finding critical points involves two main steps: finding where the gradient is zero and finding where it is undefined.

### Step 1: Find where the gradient is zero.

This is usually the most common scenario. You'll need to:
1.  **Calculate the partial derivatives** of the function with respect to each variable.
2.  **Set each partial derivative equal to zero** and solve the resulting system of equations.

### Step 2: Find where the gradient is undefined.

This occurs if any of the partial derivatives are undefined at a particular point. This typically happens with functions involving:
*   Square roots of variables (e.g., $\sqrt{x}$)
*   Logarithms of variables (e.g., $\ln(x)$)
*   Denominators that could be zero (e.g., $1/x$)

You need to examine the domains of your partial derivative functions for any such issues.

## Worked Example

Let's find the critical points of the function:
$$ f(x, y) = x^2 + y^2 - 2x - 4y + 5 $$

**Step 1: Calculate the partial derivatives.**

$$ \frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^2 - 2x - 4y + 5) = 2x - 2 $$
$$ \frac{\partial f}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^2 - 2x - 4y + 5) = 2y - 4 $$

**Step 2: Set the partial derivatives to zero and solve.**

We have the following system of equations:
1.  $2x - 2 = 0$
2.  $2y - 4 = 0$

Solving the first equation for $x$:
$2x = 2 \implies x = 1$

Solving the second equation for $y$:
$2y = 4 \implies y = 2$

So, we have a potential critical point at $(1, 2)$.

**Step 3: Check where the partial derivatives are undefined.**

In this case, both $\frac{\partial f}{\partial x} = 2x - 2$ and $\frac{\partial f}{\partial y} = 2y - 4$ are polynomials. Polynomials are defined for all real numbers. Therefore, there are no points where the partial derivatives are undefined.

**Conclusion:** The only critical point for $f(x, y) = x^2 + y^2 - 2x - 4y + 5$ is $(1, 2)$.

## Another Example (with an undefined derivative case)

Find the critical points of the function:
$$ g(x, y) = x^2 + y^{2/3} $$

**Step 1: Calculate the partial derivatives.**

$$ \frac{\partial g}{\partial x} = \frac{\partial}{\partial x}(x^2 + y^{2/3}) = 2x $$
$$ \frac{\partial g}{\partial y} = \frac{\partial}{\partial y}(x^2 + y^{2/3}) = \frac{2}{3}y^{-1/3} = \frac{2}{3\sqrt[3]{y}} $$

**Step 2: Set the partial derivatives to zero and solve.**

1.  $2x = 0 \implies x = 0$
2.  $\frac{2}{3\sqrt[3]{y}} = 0$

The second equation, $\frac{2}{3\sqrt[3]{y}} = 0$, has no solution because a fraction can only be zero if its numerator is zero, and the numerator here is 2. So, there are no points where *both* partial derivatives are simultaneously zero.

**Step 3: Check where the partial derivatives are undefined.**

*   $\frac{\partial g}{\partial x} = 2x$ is defined everywhere.
*   $\frac{\partial g}{\partial y} = \frac{2}{3\sqrt[3]{y}}$ is undefined when the denominator is zero, which occurs when $y=0$.

So, at any point where $y=0$, the partial derivative $\frac{\partial g}{\partial y}$ is undefined. We need to combine this with the condition from the first partial derivative. From Step 2, we found that the first partial derivative is zero only when $x=0$.

Therefore, the point where $\frac{\partial g}{\partial y}$ is undefined and $\frac{\partial g}{\partial x}$ is defined is any point on the line $y=0$. However, to be a critical point, we need either both derivatives to be zero OR at least one to be undefined.

Consider the point where $x=0$ (making the first derivative zero) and $y=0$ (making the second derivative undefined). This point is $(0, 0)$.
At $(0, 0)$:
*   $\frac{\partial g}{\partial x}(0, 0) = 2(0) = 0$ (defined and zero)
*   $\frac{\partial g}{\partial y}(0, 0)$ is undefined.

Thus, $(0, 0)$ is a critical point.

**Conclusion:** The function $g(x, y) = x^2 + y^{2/3}$ has one critical point at $(0, 0)$.

## Common Mistakes to Avoid

*   **Forgetting to check where derivatives are undefined:** While setting derivatives to zero finds many critical points, neglecting the undefined cases means you might miss some.
*   **Solving systems of equations incorrectly:** Multivariable critical point finding often leads to systems of non-linear equations. Be careful with your algebraic manipulation.
*   **Confusing critical points with extrema:** Critical points are *candidates* for extrema. You need further tests (like the Second Derivative Test) to classify them.

By systematically following these steps, you can accurately identify the critical points of multivariable functions, which is a fundamental step in analyzing their behavior.

## Supports

- [[skills/mathematics/multivariable-calculus-analysis/microskills/multivariable-critical-point-identification|Multivariable critical point identification]]
