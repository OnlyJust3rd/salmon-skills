---
type: "medium"
title: "Simpson's Rule Approximation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/integral-evaluation/microskills/simpson-s-rule-approximation|simpson-s-rule-approximation]]"
learning-time-in-minutes: 4
---
# Simpson's Rule Approximation

Simpson's rule is a powerful numerical method for approximating definite integrals. When dealing with functions that are difficult or impossible to integrate analytically, or when we only have discrete data points, Simpson's rule provides a more accurate approximation than simpler methods like the trapezoidal rule.

This lesson focuses on how to apply Simpson's rule to compute integral estimates.

## When to Use Simpson's Rule

Simpson's rule is particularly effective when the function you are integrating can be approximated by parabolas. This is often the case when the function is smooth.

*   **Analytical Integration is Difficult/Impossible:** For many functions, finding an exact antiderivative is not feasible.
*   **Discrete Data:** When you have a set of data points from an experiment or observation, Simpson's rule can approximate the area under the curve defined by these points.
*   **Higher Accuracy Needed:** Compared to the trapezoidal rule, Simpson's rule generally offers a more accurate approximation for the same number of subintervals, especially for smooth functions.

**Key Requirement:** Simpson's rule, in its basic form, requires an **even** number of subintervals ($n$).

## The Core Idea: Approximating with Parabolas

Instead of approximating the area under the curve with straight lines (like the trapezoidal rule), Simpson's rule approximates the curve within small intervals using **parabolas**. By fitting parabolas over pairs of subintervals, it captures the curvature of the function more effectively, leading to a better approximation.

## The Formula

The composite Simpson's rule for approximating the definite integral of a function $f(x)$ from $a$ to $b$ is given by:

$$
\int_a^b f(x) \, dx \approx \frac{h}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \dots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n)]
$$

Where:

*   $a$: The lower limit of integration.
*   $b$: The upper limit of integration.
*   $n$: The number of subintervals (must be an **even** number).
*   $h$: The width of each subinterval, calculated as $h = \frac{b - a}{n}$.
*   $x_i$: The points along the x-axis, where $x_i = a + i \cdot h$ for $i = 0, 1, 2, \dots, n$.

Notice the pattern of coefficients: 1, 4, 2, 4, 2, ..., 2, 4, 1.

## Step-by-Step Application

Let's walk through an example to apply Simpson's rule.

**Problem:** Approximate the integral of $f(x) = x^3 + 2x^2 - 5x + 1$ from $x=0$ to $x=2$ using Simpson's rule with $n=4$ subintervals.

**1. Determine the Number of Subintervals and Calculate $h$:**

*   We are given $n=4$. This is an even number, so we can proceed.
*   The interval is from $a=0$ to $b=2$.
*   Calculate $h$: $h = \frac{b - a}{n} = \frac{2 - 0}{4} = \frac{2}{4} = 0.5$.

**2. Determine the Points $x_i$:**

*   $x_0 = a = 0$
*   $x_1 = a + h = 0 + 0.5 = 0.5$
*   $x_2 = a + 2h = 0 + 2(0.5) = 1.0$
*   $x_3 = a + 3h = 0 + 3(0.5) = 1.5$
*   $x_4 = a + 4h = 0 + 4(0.5) = 2.0$ (This is our $b$)

**3. Evaluate the Function at Each Point $x_i$:**

*   $f(x_0) = f(0) = (0)^3 + 2(0)^2 - 5(0) + 1 = 1$
*   $f(x_1) = f(0.5) = (0.5)^3 + 2(0.5)^2 - 5(0.5) + 1 = 0.125 + 2(0.25) - 2.5 + 1 = 0.125 + 0.5 - 2.5 + 1 = -0.875$
*   $f(x_2) = f(1.0) = (1.0)^3 + 2(1.0)^2 - 5(1.0) + 1 = 1 + 2 - 5 + 1 = -1$
*   $f(x_3) = f(1.5) = (1.5)^3 + 2(1.5)^2 - 5(1.5) + 1 = 3.375 + 2(2.25) - 7.5 + 1 = 3.375 + 4.5 - 7.5 + 1 = 1.375$
*   $f(x_4) = f(2.0) = (2.0)^3 + 2(2.0)^2 - 5(2.0) + 1 = 8 + 2(4) - 10 + 1 = 8 + 8 - 10 + 1 = 7$

**4. Apply the Simpson's Rule Formula:**

$$
\int_0^2 f(x) \, dx \approx \frac{h}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + f(x_4)]
$$

Substitute the values:

$$
\approx \frac{0.5}{3} [1 + 4(-0.875) + 2(-1) + 4(1.375) + 7]
$$

$$
\approx \frac{0.5}{3} [1 - 3.5 - 2 + 5.5 + 7]
$$

$$
\approx \frac{0.5}{3} [8]
$$

$$
\approx \frac{4}{3} \approx 1.3333
$$

**Verification (Optional):**
The exact integral of $f(x) = x^3 + 2x^2 - 5x + 1$ is $\frac{x^4}{4} + \frac{2x^3}{3} - \frac{5x^2}{2} + x$.
Evaluating from 0 to 2:
$[\frac{2^4}{4} + \frac{2(2^3)}{3} - \frac{5(2^2)}{2} + 2] - [\frac{0^4}{4} + \frac{2(0^3)}{3} - \frac{5(0^2)}{2} + 0]$
$= [\frac{16}{4} + \frac{16}{3} - \frac{20}{2} + 2] - 0$
$= [4 + 5.3333 - 10 + 2] = 1.3333$
In this case, Simpson's rule gave the exact result because the function is a polynomial of degree 3, and Simpson's rule is exact for polynomials of degree up to 3.

## Common Mistakes to Avoid

*   **Odd Number of Subintervals:** Always ensure $n$ is even. If your initial choice of $n$ is odd, increase it by 1 to make it even.
*   **Incorrect Coefficients:** Double-check the alternating pattern of 4 and 2. The endpoints always have a coefficient of 1.
*   **Calculation Errors:** Be meticulous with arithmetic, especially when dealing with fractions or decimals.
*   **Misinterpreting $x_i$:** Ensure you are correctly calculating each $x_i$ point based on $a$, $h$, and the index $i$.

## Summary

Simpson's rule offers a significant improvement in integral approximation accuracy over simpler methods by fitting parabolas to segments of the function. Remember to use an even number of subintervals and carefully apply the weighted sum of function values. This technique is invaluable when direct integration is not an option.

## Supports

- [[skills/mathematics/calculus/integral-evaluation/microskills/simpson-s-rule-approximation|Simpson's rule approximation]]
