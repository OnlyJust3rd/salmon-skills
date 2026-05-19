---
type: "medium"
title: "Critical Points and Their Connection to Extrema"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multivariable-calculus-analysis/microskills/relationship-between-critical-points-and-extrema|Relationship between critical points and extrema]]"
---
# Critical Points and Their Connection to Extrema

When analyzing multivariable functions, finding the highest or lowest values (extrema) is often a primary goal. Critical points are the key locations where these extrema *might* occur. Understanding the relationship between critical points and extrema is fundamental in multivariable calculus analysis.

## What are Critical Points?

For a function of a single variable, $f(x)$, critical points occur where the derivative $f'(x) = 0$ or where $f'(x)$ is undefined. For multivariable functions, this concept extends to the **gradient**.

The gradient of a function $f(x, y)$ is a vector of its partial derivatives:
$$ \nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle $$

A critical point $(a, b)$ of a multivariable function $f(x, y)$ is a point where:

1.  The gradient is the zero vector: $$ \nabla f(a, b) = \langle 0, 0 \rangle $$
    This means both partial derivatives are zero at that point: $$ \frac{\partial f}{\partial x}(a, b) = 0 \quad \text{and} \quad \frac{\partial f}{\partial y}(a, b) = 0 $$

2.  At least one of the partial derivatives is undefined at $(a, b)$.

Critical points are potential locations for relative maxima, relative minima, or saddle points. They are like "candidate locations" that we need to investigate further.

## The Relationship: Critical Points as Candidates

Think of critical points as the "flattest" spots on the surface defined by the function. At these points, the surface isn't clearly increasing or decreasing in any specific direction. This "flatness" is precisely why they are candidates for extrema.

*   **Relative Maxima:** A point $(a, b)$ is a relative maximum if $f(a, b)$ is greater than or equal to $f(x, y)$ for all $(x, y)$ in a small neighborhood around $(a, b)$. At a relative maximum, the surface "peaks."

*   **Relative Minima:** A point $(a, b)$ is a relative minimum if $f(a, b)$ is less than or equal to $f(x, y)$ for all $(x, y)$ in a small neighborhood around $(a, b)$. At a relative minimum, the surface "dips."

*   **Saddle Points:** A point $(a, b)$ is a saddle point if it is a critical point, but it is neither a relative maximum nor a relative minimum. Imagine a saddle on a horse: it curves up in one direction and down in another.

### Why are Critical Points Important for Extrema?

The **First Derivative Test** for multivariable functions (though more formally the **Second Derivative Test** is used for classification) relies on the idea that if a function has a relative extremum at a point, and the partial derivatives exist at that point, then that point *must* be a critical point.

This means:
*   If you find a relative maximum or minimum, it must be at a critical point.
*   If a point is *not* a critical point, it cannot be a relative maximum or minimum.

However, the converse is not always true: **not all critical points are extrema.** Some critical points are saddle points. This is why we need further tests (like the Second Derivative Test) to classify the nature of each critical point.

## Identifying Critical Points: An Example

Let's find the critical points of the function:
$$ f(x, y) = x^3 - 3xy + y^3 $$

**Step 1: Find the partial derivatives.**
$$ \frac{\partial f}{\partial x} = 3x^2 - 3y $$
$$ \frac{\partial f}{\partial y} = -3x + 3y^2 $$

**Step 2: Set the partial derivatives equal to zero.**
We need to solve the system of equations:
1.  $3x^2 - 3y = 0 \implies x^2 - y = 0 \implies y = x^2$
2.  $-3x + 3y^2 = 0 \implies -x + y^2 = 0$

**Step 3: Solve the system of equations.**
Substitute the first equation ($y = x^2$) into the second equation:
$$ -x + (x^2)^2 = 0 $$
$$ -x + x^4 = 0 $$
$$ x(x^3 - 1) = 0 $$

This gives us two possibilities for $x$:
*   $x = 0$
*   $x^3 - 1 = 0 \implies x^3 = 1 \implies x = 1$

**Step 4: Find the corresponding $y$ values.**
*   If $x = 0$, then $y = x^2 = 0^2 = 0$. So, $(0, 0)$ is a critical point.
*   If $x = 1$, then $y = x^2 = 1^2 = 1$. So, $(1, 1)$ is a critical point.

**Step 5: Check for undefined partial derivatives.**
The partial derivatives $3x^2 - 3y$ and $-3x + 3y^2$ are polynomials, which are defined for all real numbers $x$ and $y$. Therefore, there are no critical points arising from undefined partial derivatives for this function.

So, the critical points for $f(x, y) = x^3 - 3xy + y^3$ are $(0, 0)$ and $(1, 1)$.

## Next Steps: Classifying Critical Points

We have identified that critical points are essential locations where extrema can occur. However, simply finding critical points is not enough. The next crucial step in multivariable calculus analysis is to classify these critical points: are they relative maxima, relative minima, or saddle points? This classification is typically done using the Second Derivative Test.

## Supports

- [[skills/mathematics/multivariable-calculus-analysis/microskills/relationship-between-critical-points-and-extrema|Relationship between critical points and extrema]]
