---
type: "medium"
title: "Setting Up Double Integrals in Rectangular Coordinates"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/double-integral-setup-rectangular|Double integral setup (rectangular)]]"
---
# Setting Up Double Integrals in Rectangular Coordinates

This lesson focuses on the crucial first step in evaluating double integrals: **setting them up correctly in rectangular coordinates**. This skill is fundamental for calculating areas and volumes, and mastering it will make the subsequent evaluation process much smoother.

## What is a Double Integral Setup?

A double integral is used to find the volume under a surface $z = f(x, y)$ over a region $R$ in the $xy$-plane. Setting up the double integral means translating the geometric problem (finding a volume or area) into an iterated integral form that can be evaluated. In rectangular coordinates, this involves defining the limits of integration for both $x$ and $y$.

The general form of a double integral in rectangular coordinates is:

$$
\iint_R f(x, y) \, dA
$$

where $dA$ can be $dx \, dy$ or $dy \, dx$. The choice of order depends on how we describe the region $R$.

## Types of Regions and Their Setups

The way we set up the integral depends entirely on the shape of the region $R$. We'll consider two main types of regions when working with rectangular coordinates:

### Type I Regions: Vertical Slices

A Type I region is one where for each $x$ between two constants $a$ and $b$, $y$ varies between two functions of $x$, say $g_1(x)$ and $g_2(x)$.

**Description:**
*   $a \le x \le b$
*   $g_1(x) \le y \le g_2(x)$

**Integral Setup:**
If we slice the region vertically (parallel to the y-axis), we are integrating with respect to $y$ first, from the lower boundary function to the upper boundary function. Then, we integrate with respect to $x$ from the leftmost $x$-value to the rightmost $x$-value.

$$
\int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y) \, dy \right) \, dx
$$

**How to Identify:**
Imagine drawing vertical lines across the region. If these lines enter and exit the region through two specific functions (which may be constant or varying with $x$), and these lines sweep out the entire region as you move them from left to right between two constant $x$ values, it's a Type I region.

### Type II Regions: Horizontal Slices

A Type II region is one where for each $y$ between two constants $c$ and $d$, $x$ varies between two functions of $y$, say $h_1(y)$ and $h_2(y)$.

**Description:**
*   $c \le y \le d$
*   $h_1(y) \le x \le h_2(y)$

**Integral Setup:**
If we slice the region horizontally (parallel to the x-axis), we are integrating with respect to $x$ first, from the left boundary function to the right boundary function. Then, we integrate with respect to $y$ from the lowest $y$-value to the highest $y$-value.

$$
\int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y) \, dx \right) \, dy
$$

**How to Identify:**
Imagine drawing horizontal lines across the region. If these lines enter and exit the region through two specific functions (which may be constant or varying with $y$), and these lines sweep out the entire region as you move them from bottom to top between two constant $y$ values, it's a Type II region.

## Example: Setting Up a Double Integral for Area

Let's say we want to find the area of the region $R$ bounded by the curves $y = x^2$ and $y = \sqrt{x}$.

**1. Sketch the Region:**
First, visualize or sketch the curves.
*   $y = x^2$ is a parabola opening upwards.
*   $y = \sqrt{x}$ is the upper half of a parabola opening to the right.

To find the intersection points, set $x^2 = \sqrt{x}$. Squaring both sides gives $x^4 = x$, so $x^4 - x = 0$, which factors as $x(x^3 - 1) = 0$. The solutions are $x=0$ and $x=1$. The corresponding $y$ values are $y=0$ and $y=1$. So the intersection points are $(0,0)$ and $(1,1)$.

**2. Determine the Type of Region:**

*   **Can we slice vertically (Type I)?**
    For any $x$ between 0 and 1, a vertical line enters the region at $y = x^2$ (the lower curve) and exits at $y = \sqrt{x}$ (the upper curve). This fits the description of a Type I region.
    *   $0 \le x \le 1$
    *   $x^2 \le y \le \sqrt{x}$

*   **Can we slice horizontally (Type II)?**
    For any $y$ between 0 and 1, a horizontal line enters the region at $x = y^2$ (solving $y = x^2$ for $x$) and exits at $x = y$ (solving $y = \sqrt{x}$ for $x$). This also fits the description of a Type II region.
    *   $0 \le y \le 1$
    *   $y^2 \le x \le y$

**3. Set Up the Double Integral:**

To find the area, we integrate the function $f(x, y) = 1$ over the region $R$.

*   **Using Type I setup (vertical slices):**
    The limits are $x$ from 0 to 1, and for each $x$, $y$ goes from $x^2$ to $\sqrt{x}$.
    $$
    \text{Area} = \int_0^1 \left( \int_{x^2}^{\sqrt{x}} 1 \, dy \right) \, dx
    $$

*   **Using Type II setup (horizontal slices):**
    The limits are $y$ from 0 to 1, and for each $y$, $x$ goes from $y^2$ to $y$.
    $$
    \text{Area} = \int_0^1 \left( \int_{y^2}^{y} 1 \, dx \right) \, dy
    $$

Both setups are valid for this region. Sometimes, one order of integration is significantly easier to evaluate than the other.

## Common Mistakes to Avoid

*   **Incorrectly Sketching the Region:** A faulty sketch will lead to wrong boundaries and limits. Always plot your boundary curves.
*   **Confusing Upper/Lower vs. Right/Left Boundaries:** Ensure you're using the correct functions for your chosen slice direction. For Type I, $y$ is bounded by functions of $x$; for Type II, $x$ is bounded by functions of $y$.
*   **Mixing Coordinate Systems:** This lesson is strictly about rectangular coordinates. Be careful not to introduce polar or other coordinate concepts here.
*   **Incorrect Intersection Points:** Calculate these carefully, as they often define the outer limits of integration.

Mastering the setup is key. Once the integral is correctly set up, the next step is evaluation, which builds directly on this foundation.

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/double-integral-setup-rectangular|Double integral setup (rectangular)]]
