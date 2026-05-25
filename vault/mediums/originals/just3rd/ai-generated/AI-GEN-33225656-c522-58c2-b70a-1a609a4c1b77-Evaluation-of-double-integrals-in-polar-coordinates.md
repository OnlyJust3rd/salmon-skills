---
type: "medium"
title: "Evaluating Double Integrals in Polar Coordinates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/microskills/evaluation-of-double-integrals-in-polar-coordinates|evaluation-of-double-integrals-in-polar-coordinates]]"
learning-time-in-minutes: 4
---
# Evaluating Double Integrals in Polar Coordinates

This lesson focuses on a key technique within the broader skill of evaluating multiple integrals. We'll be diving into how to efficiently calculate double integrals by transforming them into polar coordinates. This is particularly useful when dealing with regions of integration that are circular or have radial symmetry.

## Why Use Polar Coordinates for Integration?

When your integration region is a circle, a sector of a circle, or any shape that's easier to describe using a radius and an angle, converting to polar coordinates can simplify your integral significantly. Standard rectangular coordinates ($x$, $y$) often lead to complex bounds and integrands in these cases.

Recall the transformation equations:
*   $x = r \cos(\theta)$
*   $y = r \sin(\theta)$

And importantly, when changing coordinate systems for double integrals, we must account for the Jacobian of the transformation. For polar coordinates, the differential area element $dA$ in rectangular coordinates ($dx \, dy$) becomes $r \, dr \, d\theta$ in polar coordinates.

$$
dA = dx \, dy \quad \rightarrow \quad dA = r \, dr \, d\theta
$$

This factor of $r$ is crucial and often forgotten, leading to incorrect results.

## Setting Up a Double Integral in Polar Coordinates

The process involves two main steps:

1.  **Describe the Region in Polar Coordinates:** Sketch your region of integration. Identify the range of the radial distance ($r$) and the angle ($\theta$).
    *   **For $r$**: Typically, $r$ will range from a constant to another constant, or from an expression involving $\theta$ to another expression involving $\theta$.
    *   **For $\theta$**: $\theta$ usually ranges from a constant to another constant, representing the sweep of the region. A full circle is $0$ to $2\pi$.

2.  **Transform the Integrand:** Replace every instance of $x$ and $y$ in your integrand with their polar equivalents ($r \cos(\theta)$ and $r \sin(\theta)$).

3.  **Include the Jacobian:** Multiply your transformed integrand by the factor $r$.

4.  **Set up the Integral:** Write the double integral with the transformed integrand, the $r$ from the Jacobian, and the determined bounds for $r$ and $\theta$. The order of integration ($dr \, d\theta$ or $d\theta \, dr$) depends on how you've set up your bounds. If $r$ is bounded by constants and $\theta$ by constants, the order doesn't significantly impact the setup. If $r$ depends on $\theta$, it's usually best to integrate with respect to $r$ first.

## Worked Example

Let's evaluate the double integral of the function $f(x, y) = x^2 + y^2$ over the region $D$ which is the upper half of a disk of radius 2 centered at the origin.

**Step 1: Describe the Region in Polar Coordinates**

The region is the upper half of a disk with radius 2.
*   The radius $r$ goes from the center ($r=0$) to the edge of the disk ($r=2$). So, $0 \le r \le 2$.
*   The upper half of the disk corresponds to angles from the positive x-axis counterclockwise to the negative x-axis. So, $0 \le \theta \le \pi$.

**Step 2: Transform the Integrand**

Our integrand is $f(x, y) = x^2 + y^2$.
Recall that $x^2 + y^2 = (r \cos(\theta))^2 + (r \sin(\theta))^2 = r^2 \cos^2(\theta) + r^2 \sin^2(\theta) = r^2(\cos^2(\theta) + \sin^2(\theta)) = r^2$.
So, in polar coordinates, the integrand is simply $r^2$.

**Step 3: Include the Jacobian**

We must multiply by $r$. Our new integrand becomes $r^2 \cdot r = r^3$.

**Step 4: Set up the Integral**

The integral in polar coordinates is:
$$
\iint_D (x^2 + y^2) \, dA = \int_{0}^{\pi} \int_{0}^{2} r^3 \, dr \, d\theta
$$

**Step 5: Evaluate the Integral**

First, evaluate the inner integral with respect to $r$:
$$
\int_{0}^{2} r^3 \, dr = \left[ \frac{r^4}{4} \right]_{0}^{2} = \frac{2^4}{4} - \frac{0^4}{4} = \frac{16}{4} = 4
$$

Now, substitute this result into the outer integral with respect to $\theta$:
$$
\int_{0}^{\pi} 4 \, d\theta = \left[ 4\theta \right]_{0}^{\pi} = 4\pi - 4(0) = 4\pi
$$

Therefore, the value of the double integral is $4\pi$.

## Common Mistakes to Avoid

*   **Forgetting the Jacobian $r$**: This is the most frequent error. Always remember to multiply your integrand by $r$.
*   **Incorrectly defining the bounds**: Carefully sketch the region and determine the correct ranges for $r$ and $\theta$.
*   **Mixing up rectangular and polar forms**: Ensure all $x$'s and $y$'s are replaced by their polar equivalents before integrating.
*   **Incorrectly calculating $x^2 + y^2$**: While it simplifies to $r^2$, ensure you perform the algebraic substitution correctly.

By practicing these steps and being mindful of the common pitfalls, you'll become proficient at using polar coordinates to simplify and solve double integrals.

## Supports

- [[skills/mathematics/calculus/multiple-integral-evaluation/microskills/evaluation-of-double-integrals-in-polar-coordinates|Evaluation of double integrals in polar coordinates]]
