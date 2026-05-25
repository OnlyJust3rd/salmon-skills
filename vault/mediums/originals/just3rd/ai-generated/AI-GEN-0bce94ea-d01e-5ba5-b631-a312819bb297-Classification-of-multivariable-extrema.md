---
type: "medium"
title: "Classifying Multivariable Extrema"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/multivariable-calculus-analysis/microskills/classification-of-multivariable-extrema|classification-of-multivariable-extrema]]"
learning-time-in-minutes: 4
---
# Classifying Multivariable Extrema

In multivariable calculus, we often want to find the highest or lowest points of a function. These are called extrema. Critical points are candidates for these extrema. Not all critical points are extrema, however. Some might be saddle points, which are neither a maximum nor a minimum. Understanding how to classify these points is crucial for analyzing multivariable functions.

## What are Critical Points and Extrema?

For a function of a single variable, $f(x)$, a critical point occurs where the derivative $f'(x) = 0$ or is undefined. These are potential locations for local maxima or minima.

For a multivariable function, $f(x, y)$, the concept extends. A critical point $(a, b)$ is where the gradient of $f$ is the zero vector, or where the gradient is undefined. The gradient is:

$$
\nabla f(x, y) = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle
$$

So, a critical point $(a, b)$ occurs when:
*   $$ \frac{\partial f}{\partial x}(a, b) = 0 $$ and $$ \frac{\partial f}{\partial y}(a, b) = 0 $$
*   Or when either $$ \frac{\partial f}{\partial x} $$ or $$ \frac{\partial f}{\partial y} $$ (or both) are undefined at $(a, b)$.

At these critical points, a function *may* have a local maximum, a local minimum, or a saddle point.

## Distinguishing Between Maxima, Minima, and Saddle Points: The Second Derivative Test

The **Second Derivative Test** is a powerful tool for classifying critical points of a function $f(x, y)$ that has continuous second partial derivatives.

First, find all critical points $(a, b)$ by setting the first partial derivatives to zero: $$ \frac{\partial f}{\partial x} = 0 $$ and $$ \frac{\partial f}{\partial y} = 0 $$.

Next, calculate the second partial derivatives:
*   $f_{xx}(x, y) = \frac{\partial^2 f}{\partial x^2}$
*   $f_{yy}(x, y) = \frac{\partial^2 f}{\partial y^2}$
*   $f_{xy}(x, y) = \frac{\partial^2 f}{\partial x \partial y}$

Now, define the discriminant, $D$, as:
$$
D(x, y) = f_{xx}(x, y) f_{yy}(x, y) - [f_{xy}(x, y)]^2
$$

Evaluate $D$ and the value of $f_{xx}$ at each critical point $(a, b)$:

| Test Result at $(a, b)$ | Classification     |
| :---------------------- | :----------------- |
| $D(a, b) > 0$ and $f_{xx}(a, b) > 0$ | Local Minimum      |
| $D(a, b) > 0$ and $f_{xx}(a, b) < 0$ | Local Maximum      |
| $D(a, b) < 0$           | Saddle Point       |
| $D(a, b) = 0$           | Test is Inconclusive |

### What are Local Maxima, Minima, and Saddle Points?

*   **Local Maximum:** A point $(a, b)$ is a local maximum if $f(a, b) \ge f(x, y)$ for all $(x, y)$ in some open disk around $(a, b)$. The function's value at this point is higher than at all nearby points.
*   **Local Minimum:** A point $(a, b)$ is a local minimum if $f(a, b) \le f(x, y)$ for all $(x, y)$ in some open disk around $(a, b)$. The function's value at this point is lower than at all nearby points.
*   **Saddle Point:** A point $(a, b)$ is a saddle point if it is a critical point, but it is neither a local maximum nor a local minimum. Near a saddle point, the function increases in some directions and decreases in other directions. Imagine the shape of a horse's saddle.

## Worked Example: Classifying Critical Points

Let's classify the critical points of the function $f(x, y) = x^3 + y^3 - 3xy$.

**Step 1: Find the first partial derivatives and critical points.**

$$
\frac{\partial f}{\partial x} = 3x^2 - 3y
$$

$$
\frac{\partial f}{\partial y} = 3y^2 - 3x
$$

Set the partial derivatives to zero to find critical points:
1.  $3x^2 - 3y = 0 \implies y = x^2$
2.  $3y^2 - 3x = 0 \implies y^2 = x$

Substitute the first equation into the second:
$(x^2)^2 = x$
$x^4 = x$
$x^4 - x = 0$
$x(x^3 - 1) = 0$

This gives us $x = 0$ or $x^3 = 1 \implies x = 1$.

*   If $x = 0$, then $y = 0^2 = 0$. So, $(0, 0)$ is a critical point.
*   If $x = 1$, then $y = 1^2 = 1$. So, $(1, 1)$ is a critical point.

Our critical points are $(0, 0)$ and $(1, 1)$.

**Step 2: Find the second partial derivatives.**

$$
f_{xx} = \frac{\partial}{\partial x}(3x^2 - 3y) = 6x
$$

$$
f_{yy} = \frac{\partial}{\partial y}(3y^2 - 3x) = 6y
$$

$$
f_{xy} = \frac{\partial}{\partial y}(3x^2 - 3y) = -3
$$

**Step 3: Calculate the discriminant $D(x, y)$.**

$$
D(x, y) = f_{xx} f_{yy} - (f_{xy})^2
$$

$$
D(x, y) = (6x)(6y) - (-3)^2
$$

$$
D(x, y) = 36xy - 9
$$

**Step 4: Evaluate $D$ and $f_{xx}$ at each critical point.**

*   **At $(0, 0)$:**
    $D(0, 0) = 36(0)(0) - 9 = -9$
    Since $D(0, 0) < 0$, the point $(0, 0)$ is a **saddle point**.

*   **At $(1, 1)$:**
    $D(1, 1) = 36(1)(1) - 9 = 36 - 9 = 27$
    $f_{xx}(1, 1) = 6(1) = 6$
    Since $D(1, 1) > 0$ and $f_{xx}(1, 1) > 0$, the point $(1, 1)$ is a **local minimum**.

## Key Takeaways

*   Critical points are candidates for local maxima, minima, or saddle points.
*   The Second Derivative Test uses the discriminant $D$ and the second partial derivative $f_{xx}$ to classify these critical points.
*   A positive $D$ with positive $f_{xx}$ indicates a local minimum.
*   A positive $D$ with negative $f_{xx}$ indicates a local maximum.
*   A negative $D$ indicates a saddle point.
*   If $D=0$, the test is inconclusive, and other methods are needed.

## Supports

- [[skills/mathematics/calculus/multivariable-calculus-analysis/microskills/classification-of-multivariable-extrema|Classification of multivariable extrema]]
