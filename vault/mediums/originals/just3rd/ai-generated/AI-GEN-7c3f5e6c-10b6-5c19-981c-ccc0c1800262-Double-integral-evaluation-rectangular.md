---
type: "medium"
title: "Evaluating Double Integrals in Rectangular Coordinates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/microskills/double-integral-evaluation-rectangular|double-integral-evaluation-rectangular]]"
learning-time-in-minutes: 4
---
# Evaluating Double Integrals in Rectangular Coordinates

This lesson focuses on evaluating double integrals over plane regions using rectangular coordinates. This is a fundamental skill for calculating areas and understanding concepts in multiple integral evaluation.

## What is a Double Integral?

A double integral, denoted as $$ \iint_R f(x, y) \, dA $$, extends the concept of integration to two dimensions. It represents the volume under the surface $$ z = f(x, y) $$ and above a region $$ R $$ in the $$ xy $$-plane. When $$ f(x, y) = 1 $$, the double integral calculates the area of the region $$ R $$.

In rectangular coordinates, the differential area element $$ dA $$ can be expressed as $$ dx \, dy $$ or $$ dy \, dx $$. This choice dictates the order of integration.

## Setting Up the Integral: Iterated Integrals

To evaluate a double integral, we convert it into an iterated integral. This involves performing two successive single integrations. The limits of integration depend on the region $$ R $$.

### Type I Region: Vertical Slices

A region $$ R $$ is considered a Type I region if it can be described as:
$$ R = \{ (x, y) \, | \, a \le x \le b, \, g_1(x) \le y \le g_2(x) \} $$
Here, $$ x $$ ranges from constants $$ a $$ to $$ b $$, and for each $$ x $$, $$ y $$ is bounded by two functions of $$ x $$, $$ g_1(x) $$ and $$ g_2(x) $$.

The double integral over a Type I region is set up as an iterated integral in the following order:
$$ \iint_R f(x, y) \, dA = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) \, dx $$
We first integrate with respect to $$ y $$ (treating $$ x $$ as a constant), and then integrate the result with respect to $$ x $$.

### Type II Region: Horizontal Slices

A region $$ R $$ is considered a Type II region if it can be described as:
$$ R = \{ (x, y) \, | \, c \le y \le d, \, h_1(y) \le x \le h_2(y) \} $$
Here, $$ y $$ ranges from constants $$ c $$ to $$ d $$, and for each $$ y $$, $$ x $$ is bounded by two functions of $$ y $$, $$ h_1(y) $$ and $$ h_2(y) $$.

The double integral over a Type II region is set up as an iterated integral in the following order:
$$ \iint_R f(x, y) \, dA = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \right) \, dy $$
We first integrate with respect to $$ x $$ (treating $$ y $$ as a constant), and then integrate the result with respect to $$ y $$.

## Worked Example: Calculating Area

Let's calculate the area of the region $$ R $$ bounded by the curves $$ y = x^2 $$ and $$ y = \sqrt{x} $$.

1.  **Sketch the Region:** First, visualize or sketch the region. Find the intersection points by setting $$ x^2 = \sqrt{x} $$. This gives $$ x^4 = x $$, so $$ x(x^3 - 1) = 0 $$. The intersection points are $$ x=0 $$ and $$ x=1 $$. The corresponding $$ y $$ values are $$ y=0 $$ and $$ y=1 $$.

2.  **Determine the Type of Region:** Between $$ x=0 $$ and $$ x=1 $$, the curve $$ y = \sqrt{x} $$ is above $$ y = x^2 $$. This describes a Type I region where:
    *   $$ 0 \le x \le 1 $$
    *   $$ x^2 \le y \le \sqrt{x} $$

3.  **Set up the Double Integral for Area:** The area of $$ R $$ is given by:
    $$ Area(R) = \iint_R 1 \, dA $$
    Using the Type I description, we set up the iterated integral:
    $$ Area(R) = \int_0^1 \left( \int_{x^2}^{\sqrt{x}} 1 \, dy \right) \, dx $$

4.  **Evaluate the Inner Integral:** Integrate with respect to $$ y $$, treating $$ x $$ as a constant:
    $$ \int_{x^2}^{\sqrt{x}} 1 \, dy = [y]_{x^2}^{\sqrt{x}} = \sqrt{x} - x^2 $$

5.  **Evaluate the Outer Integral:** Substitute the result of the inner integral and integrate with respect to $$ x $$.
    $$ Area(R) = \int_0^1 (\sqrt{x} - x^2) \, dx $$
    $$ Area(R) = \int_0^1 (x^{1/2} - x^2) \, dx $$
    $$ Area(R) = \left[ \frac{x^{3/2}}{3/2} - \frac{x^3}{3} \right]_0^1 $$
    $$ Area(R) = \left[ \frac{2}{3}x^{3/2} - \frac{1}{3}x^3 \right]_0^1 $$
    $$ Area(R) = \left( \frac{2}{3}(1)^{3/2} - \frac{1}{3}(1)^3 \right) - \left( \frac{2}{3}(0)^{3/2} - \frac{1}{3}(0)^3 \right) $$
    $$ Area(R) = \left( \frac{2}{3} - \frac{1}{3} \right) - (0) $$
    $$ Area(R) = \frac{1}{3} $$

The area of the region bounded by $$ y = x^2 $$ and $$ y = \sqrt{x} $$ is $$ \frac{1}{3} $$ square units.

## Choosing the Order of Integration

Sometimes, the order of integration can significantly affect the complexity of the calculation. If a region can be described as both Type I and Type II, it's beneficial to choose the order that leads to simpler integrals.

For example, consider the region $$ R $$ bounded by $$ x=0 $$, $$ x=1 $$, $$ y=0 $$, and $$ y=x^2 $$.

*   **As Type I:** $$ 0 \le x \le 1 $$ and $$ 0 \le y \le x^2 $$.
    $$ \iint_R f(x, y) \, dA = \int_0^1 \int_0^{x^2} f(x, y) \, dy \, dx $$
*   **As Type II:** $$ 0 \le y \le 1 $$ and $$ \sqrt{y} \le x \le 1 $$.
    $$ \iint_R f(x, y) \, dA = \int_0^1 \int_{\sqrt{y}}^1 f(x, y) \, dx \, dy $$

The choice depends on the integrand $$ f(x, y) $$.

## Common Mistakes

*   **Incorrectly identifying the limits of integration:** Ensure the bounds for the inner integral are functions of the outer variable, and the outer bounds are constants.
*   **Confusing the order of integration:** Always integrate with respect to the inner variable first.
*   **Algebraic errors during integration or evaluation:** Carefully check your calculus and arithmetic.
*   **Not sketching the region:** Visualizing the region is crucial for setting up the limits correctly.

By mastering the setup and evaluation of double integrals in rectangular coordinates, you build a strong foundation for more complex multiple integral applications.

## Supports

- [[skills/mathematics/calculus/multiple-integral-evaluation/microskills/double-integral-evaluation-rectangular|Double integral evaluation (rectangular)]]
