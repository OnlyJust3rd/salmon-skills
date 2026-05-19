---
type: "medium"
title: "Triple Integral Evaluation in Rectangular Coordinates"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/triple-integral-evaluation-rectangular|Triple integral evaluation (rectangular)]]"
---
# Triple Integral Evaluation in Rectangular Coordinates

This lesson focuses on the ability to evaluate triple integrals over solid regions using rectangular coordinates. This is a key skill for calculating volumes and understanding mass distribution within 3D shapes.

## What is a Triple Integral?

A triple integral is an extension of double integrals to three dimensions. It allows us to integrate a function \(f(x, y, z)\) over a solid region \(E\) in \(\mathbb{R}^3\). In rectangular coordinates, the differential volume element is \(dV = dx \, dy \, dz\).

The triple integral is written as:
$$
\iiint_E f(x, y, z) \, dV
$$

When evaluating in rectangular coordinates, this expands to:
$$
\iiint_E f(x, y, z) \, dx \, dy \, dz
$$

## Setting up the Limits of Integration

The most crucial step in evaluating a triple integral is correctly setting up the limits of integration. For a solid region \(E\) in rectangular coordinates, we can define the integration order in six ways (\(dx \, dy \, dz\), \(dx \, dz \, dy\), \(dy \, dx \, dz\), etc.). The choice often depends on the shape of the region and what is easiest to describe.

Let's consider a region \(E\) where \(x\) varies from \(a\) to \(b\), \(y\) varies from \(g_1(x)\) to \(g_2(x)\), and \(z\) varies from \(h_1(x, y)\) to \(h_2(x, y)\). The integral would be set up as:

$$
\int_a^b \int_{g_1(x)}^{g_2(x)} \int_{h_1(x, y)}^{h_2(x, y)} f(x, y, z) \, dz \, dy \, dx
$$

*   The innermost integral with respect to \(z\) has limits that can depend on \(x\) and \(y\).
*   The middle integral with respect to \(y\) has limits that can depend only on \(x\).
*   The outermost integral with respect to \(x\) has constant limits.

Other orders follow a similar pattern: the limits of the inner integrals can depend on the variables of the outer integrals.

## Evaluating a Triple Integral: A Worked Example

Let's evaluate the triple integral of \(f(x, y, z) = xyz\) over the solid region \(E\) bounded by the planes \(x=0\), \(y=0\), \(z=0\), and \(x+y+z=1\).

**1. Visualize and Describe the Region \(E\):**
This region is a tetrahedron with vertices at \((0,0,0)\), \((1,0,0)\), \((0,1,0)\), and \((0,0,1)\).

**2. Choose an Order of Integration:**
Let's choose the order \(dz \, dy \, dx\).

*   **Innermost integral (dz):** For a fixed \(x\) and \(y\), \(z\) ranges from the bottom plane \(z=0\) to the slanted plane \(x+y+z=1\). So, \(0 \le z \le 1-x-y\).

*   **Middle integral (dy):** Now consider the projection of the region onto the \(xy\)-plane. This projection is a triangle bounded by \(x=0\), \(y=0\), and the line \(x+y=1\) (obtained by setting \(z=0\) in \(x+y+z=1\)). For a fixed \(x\), \(y\) ranges from \(y=0\) to the line \(y=1-x\). So, \(0 \le y \le 1-x\).

*   **Outermost integral (dx):** Finally, \(x\) ranges from the minimum value in the projection (which is 0) to the maximum value along the \(x\)-axis (which is 1). So, \(0 \le x \le 1\).

**3. Set up the Integral:**
$$
\int_0^1 \int_0^{1-x} \int_0^{1-x-y} xyz \, dz \, dy \, dx
$$

**4. Evaluate the Integral Step-by-Step:**

*   **Innermost integral (with respect to \(z\)):**
    $$
    \int_0^{1-x-y} xyz \, dz = xy \left[ \frac{z^2}{2} \right]_0^{1-x-y} = xy \frac{(1-x-y)^2}{2}
    $$

*   **Middle integral (with respect to \(y\)):**
    Now we need to integrate \(xy \frac{(1-x-y)^2}{2}\) with respect to \(y\) from 0 to \(1-x\).
    Let \(u = 1-x-y\). Then \(du = -dy\). When \(y=0\), \(u=1-x\). When \(y=1-x\), \(u=0\). Also, \(y = 1-x-u\).
    The integral becomes:
    $$
    \frac{x}{2} \int_{1-x}^0 (1-x-u)^2 (-du) = \frac{x}{2} \int_0^{1-x} (1-x-u)^2 \, du
    $$
    Let \(w = 1-x-u\). Then \(dw = -du\). When \(u=0\), \(w=1-x\). When \(u=1-x\), \(w=0\).
    $$
    \frac{x}{2} \int_{1-x}^0 w^2 (-dw) = \frac{x}{2} \int_0^{1-x} w^2 \, dw = \frac{x}{2} \left[ \frac{w^3}{3} \right]_0^{1-x} = \frac{x}{2} \frac{(1-x)^3}{3} = \frac{x(1-x)^3}{6}
    $$

*   **Outermost integral (with respect to \(x\)):**
    Finally, we integrate \(\frac{x(1-x)^3}{6}\) from 0 to 1.
    $$
    \int_0^1 \frac{x(1-x)^3}{6} \, dx
    $$
    Expand \((1-x)^3 = 1 - 3x + 3x^2 - x^3\).
    $$
    \frac{1}{6} \int_0^1 x(1 - 3x + 3x^2 - x^3) \, dx = \frac{1}{6} \int_0^1 (x - 3x^2 + 3x^3 - x^4) \, dx
    $$
    $$
    = \frac{1}{6} \left[ \frac{x^2}{2} - x^3 + \frac{3x^4}{4} - \frac{x^5}{5} \right]_0^1
    $$
    $$
    = \frac{1}{6} \left( \frac{1}{2} - 1 + \frac{3}{4} - \frac{1}{5} \right)
    $$
    Find a common denominator (20):
    $$
    = \frac{1}{6} \left( \frac{10}{20} - \frac{20}{20} + \frac{15}{20} - \frac{4}{20} \right) = \frac{1}{6} \left( \frac{1}{20} \right) = \frac{1}{120}
    $$

So, the value of the triple integral \(\iiint_E xyz \, dV\) is \(\frac{1}{120}\).

## Common Mistakes to Avoid

*   **Incorrect Limits:** The most frequent error. Double-check that the limits for each variable are correctly determined based on the region's geometry and the chosen integration order. Ensure the limits of inner integrals do not depend on variables of outer integrals.
*   **Order of Integration:** While the final answer should be the same regardless of the integration order, choosing a difficult order can make the calculation significantly more complex. Visualize the region and its projection to select the easiest order.
*   **Algebraic Errors:** Triple integral evaluations involve multiple steps of integration and algebraic manipulation. Be meticulous with calculations, especially when expanding polynomials or applying substitution rules.
*   **Forgetting the Differential Element:** Always include \(dV\) (or \(dx \, dy \, dz\) in the correct order) in the integral setup.

By carefully setting up the limits of integration and systematically evaluating the nested integrals, you can successfully compute triple integrals in rectangular coordinates.

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/triple-integral-evaluation-rectangular|Triple integral evaluation (rectangular)]]
