---
type: "medium"
title: "Calculating the Area Between Two Curves"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/area-between-curves-calculation|Area between curves calculation]]"
---
# Calculating the Area Between Two Curves

In this lesson, we'll build upon our understanding of definite integrals to calculate the area enclosed *between* two functions. This is a practical application of integral calculus, often used in fields like engineering, physics, and economics to quantify bounded regions.

## The Core Idea

Imagine you have two functions, $f(x)$ and $g(x)$, plotted on a graph. If one function, say $f(x)$, is consistently above another function, $g(x)$, over a certain interval $[a, b]$, the area between them is found by integrating the difference between the upper function and the lower function over that interval.

Think of it like this: you're finding the area under the *upper* curve and then "subtracting" the area under the *lower* curve, leaving just the area in between.

## Formula

The area $A$ between two curves $y = f(x)$ and $y = g(x)$, where $f(x) \ge g(x)$ for all $x$ in the interval $[a, b]$, is given by:

$$
A = \int_{a}^{b} [f(x) - g(x)] \, dx
$$

Where:
*   $f(x)$ is the "upper" function.
*   $g(x)$ is the "lower" function.
*   $[a, b]$ is the interval of integration. The limits $a$ and $b$ are usually determined by the points of intersection of the two curves, or they might be explicitly given.

## Steps to Calculate Area Between Curves

1.  **Identify the Functions:** Determine the two functions, $f(x)$ and $g(x)$, that define the boundaries of the area you want to calculate.
2.  **Determine the Interval of Integration $[a, b]$:**
    *   Find the points of intersection by setting $f(x) = g(x)$ and solving for $x$. These intersection points will often be your limits of integration, $a$ and $b$.
    *   If the problem specifies an interval, use those as your limits.
3.  **Determine Which Function is "Upper" and Which is "Lower":** Within the interval $[a, b]$, evaluate both functions at a test point (a value of $x$ between $a$ and $b$) or analyze their graphs to see which function has a larger value. The function with the larger value is $f(x)$ (the upper function), and the one with the smaller value is $g(x)$ (the lower function).
4.  **Set Up the Definite Integral:** Formulate the integral using the formula: $A = \int_{a}^{b} [f(x) - g(x)] \, dx$.
5.  **Evaluate the Integral:** Compute the definite integral to find the numerical value of the area.

## Worked Example

Let's find the area of the region enclosed by the curves $y = x^2$ and $y = x+2$.

1.  **Identify the Functions:**
    *   $f(x)$ and $g(x)$ are $y = x^2$ and $y = x+2$.

2.  **Determine the Interval of Integration $[a, b]$:**
    Set the functions equal to find intersection points:
    $x^2 = x + 2$
    $x^2 - x - 2 = 0$
    Factor the quadratic:
    $(x - 2)(x + 1) = 0$
    The intersection points are $x = 2$ and $x = -1$. So, our interval is $[-1, 2]$.

3.  **Determine Which Function is "Upper" and Which is "Lower":**
    Let's test a point within the interval $[-1, 2]$, say $x=0$.
    For $y = x^2$, at $x=0$, $y = 0^2 = 0$.
    For $y = x+2$, at $x=0$, $y = 0+2 = 2$.
    Since $2 > 0$, the line $y = x+2$ is above the parabola $y = x^2$ on the interval $[-1, 2]$.
    So, $f(x) = x+2$ and $g(x) = x^2$.

4.  **Set Up the Definite Integral:**
    $$
    A = \int_{-1}^{2} [(x+2) - x^2] \, dx
    $$

5.  **Evaluate the Integral:**
    First, find the antiderivative of $(x+2) - x^2$:
    $\int (x + 2 - x^2) \, dx = \frac{x^2}{2} + 2x - \frac{x^3}{3} + C$

    Now, evaluate the definite integral using the limits of integration:
    $$
    A = \left[ \frac{x^2}{2} + 2x - \frac{x^3}{3} \right]_{-1}^{2}
    $$

    Substitute the upper limit ($x=2$):
    $\left( \frac{2^2}{2} + 2(2) - \frac{2^3}{3} \right) = \left( \frac{4}{2} + 4 - \frac{8}{3} \right) = \left( 2 + 4 - \frac{8}{3} \right) = \left( 6 - \frac{8}{3} \right) = \left( \frac{18}{3} - \frac{8}{3} \right) = \frac{10}{3}$

    Substitute the lower limit ($x=-1$):
    $\left( \frac{(-1)^2}{2} + 2(-1) - \frac{(-1)^3}{3} \right) = \left( \frac{1}{2} - 2 - \frac{-1}{3} \right) = \left( \frac{1}{2} - 2 + \frac{1}{3} \right) = \left( \frac{3}{6} - \frac{12}{6} + \frac{2}{6} \right) = -\frac{7}{6}$

    Subtract the lower limit value from the upper limit value:
    $A = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{10}{3} + \frac{7}{6} = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$

    The area enclosed between the curves $y = x^2$ and $y = x+2$ is $\frac{9}{2}$ square units.

## Common Mistakes to Avoid

*   **Incorrectly identifying the upper and lower functions:** Always verify which function is above the other within the given interval. Switching them will result in a negative area, which usually indicates an error.
*   **Missing intersection points:** Ensure you find *all* relevant intersection points that define the enclosed region.
*   **Algebraic errors during integration or evaluation:** Be meticulous with your calculations, especially when dealing with negative signs and fractions.
*   **Forgetting the difference:** The core of the formula is the difference $[f(x) - g(x)]$. Don't forget to subtract the lower function from the upper function.

## Supports

- [[skills/mathematics/integral-evaluation/microskills/area-between-curves-calculation|Area between curves calculation]]
