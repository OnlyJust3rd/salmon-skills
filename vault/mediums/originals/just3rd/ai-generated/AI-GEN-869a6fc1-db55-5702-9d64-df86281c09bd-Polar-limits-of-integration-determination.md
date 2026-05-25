---
type: "medium"
title: "Determining Polar Limits of Integration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/polar-coordinate-systems/microskills/polar-limits-of-integration-determination|polar-limits-of-integration-determination]]"
learning-time-in-minutes: 5
---
# Determining Polar Limits of Integration

This lesson focuses on a crucial step in converting double integrals to polar coordinates: accurately determining the limits of integration. This skill is essential for successfully applying polar coordinate transformations.

## Why Polar Limits Matter

When we transform a double integral from rectangular ($x, y$) to polar ($r, \theta$) coordinates, the region of integration also transforms. The new limits of integration in terms of $r$ and $\theta$ must precisely describe this transformed region. Incorrect limits will lead to an incorrect integral result, even if the integrand and Jacobian are handled perfectly.

## Key Concepts for Polar Integration

Recall the relationships between rectangular and polar coordinates:
*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $r^2 = x^2 + y^2$
*   $\tan \theta = y/x$

The Jacobian of the transformation is $|J| = r$. This is a separate component of the integral conversion and will be handled in its own lesson. Our focus here is solely on finding the bounds for $r$ and $\theta$.

## Strategy for Finding Polar Limits

The most effective way to determine polar limits is by **sketching the region of integration** in the $xy$-plane. Once the region is visualized, we can translate it into polar terms.

Here's a general strategy:

1.  **Sketch the Region:** Accurately draw the region $D$ defined by the bounds of your original double integral in rectangular coordinates. Identify any curves or lines that form the boundaries of this region.
2.  **Identify the Range of $\theta$:**
    *   Imagine sweeping a ray (a line segment starting from the origin) across the region $D$.
    *   Determine the minimum and maximum angles, $\theta_{min}$ and $\theta_{max}$, that this ray makes with the positive $x$-axis as it traverses the entire region.
    *   Angles are typically measured counterclockwise from the positive $x$-axis. Common ranges are $[0, 2\pi]$ or $[-\pi/2, \pi/2]$, depending on the region.
3.  **Identify the Range of $r$ for a Fixed $\theta$:**
    *   For any given angle $\theta$ within the range $[\theta_{min}, \theta_{max}]$, draw a ray from the origin at that angle.
    *   Trace this ray through the region $D$.
    *   Determine the minimum and maximum values of $r$ at which the ray **enters** and **exits** the region $D$.
    *   The distance from the origin to the boundary of the region will give you the bounds for $r$. These bounds will typically be functions of $\theta$.

## Worked Example

Let's convert the following double integral to polar coordinates:

$$ \iint_D y \, dA $$

where $D$ is the region in the first quadrant bounded by the circle $x^2 + y^2 = 4$ and the lines $y=x$ and $y=0$.

### Step 1: Sketch the Region

*   **Circle:** $x^2 + y^2 = 4$ is a circle centered at the origin with radius 2.
*   **Lines:** $y=x$ is a line passing through the origin with a slope of 1 (making a 45-degree angle with the positive $x$-axis). $y=0$ is the positive $x$-axis.
*   **First Quadrant:** This means $x \ge 0$ and $y \ge 0$.

Sketching these, we see that the region $D$ is a sector of the circle in the first quadrant, bounded below by the $x$-axis and above by the line $y=x$.

### Step 2: Determine the Range of $\theta$

*   The region starts along the positive $x$-axis. The angle for the positive $x$-axis is $\theta = 0$.
*   The region ends along the line $y=x$. In the first quadrant, the angle corresponding to $y=x$ is $\theta = \pi/4$ (or 45 degrees).
*   So, the range for $\theta$ is $0 \le \theta \le \pi/4$.

### Step 3: Determine the Range of $r$ for a Fixed $\theta$

*   For any angle $\theta$ between $0$ and $\pi/4$, imagine a ray starting from the origin.
*   This ray **enters** the region $D$ at the origin, where $r=0$.
*   This ray **exits** the region $D$ when it hits the circle $x^2 + y^2 = 4$.
*   In polar coordinates, $x^2 + y^2 = r^2$. So, $r^2 = 4$, which means $r = 2$ (since $r \ge 0$).
*   Therefore, for a fixed $\theta$, the range for $r$ is $0 \le r \le 2$.

### The Polar Integral Setup

With these limits, the integral in polar coordinates becomes:

$$ \iint_D y \, dA = \int_0^{\pi/4} \int_0^2 (r \sin \theta) \, r \, dr \, d\theta $$

Notice that the integrand $y$ becomes $r \sin \theta$, and the $dA$ becomes $r \, dr \, d\theta$ (the $r$ comes from the Jacobian, which we'll cover elsewhere).

## Common Pitfalls and How to Avoid Them

*   **Confusing $r$ and $\theta$ Bounds:** Always determine the range of $\theta$ first, then the range of $r$ for a *fixed* $\theta$.
*   **Incorrectly Identifying Boundary Curves in Polar:** Sometimes, boundary curves that are simple in rectangular coordinates (like lines) might be more complex in polar, or vice-versa. Always convert your boundary equations to polar form ($r=...$ or $\theta=...$) to help visualize.
    *   A vertical line $x=c$ becomes $r \cos \theta = c$, so $r = c/\cos \theta$.
    *   A horizontal line $y=c$ becomes $r \sin \theta = c$, so $r = c/\sin \theta$.
*   **Forgetting the First Quadrant Constraint:** If your region is restricted to a specific quadrant, ensure your $\theta$ range reflects this. For the first quadrant, $0 \le \theta \le \pi/2$.
*   **Not Sketching:** This is the most common mistake. A good sketch is your best tool.

## Practice Problems

1.  Determine the polar limits of integration for the region $D$ bounded by the circle $x^2+y^2=1$.
2.  Find the polar limits for the region $D$ in the first quadrant bounded by the curve $y = \sqrt{4-x^2}$ and the lines $x=0, y=0$.
3.  Determine the polar limits for the region $D$ bounded by $y=x^2$ and $y=2x$. (Hint: This region is not easily described by constant $r$ bounds.)

By mastering the skill of determining polar limits of integration, you build a strong foundation for confidently converting and solving double integrals in polar coordinates.

## Supports

- [[skills/mathematics/calculus/polar-coordinate-systems/microskills/polar-limits-of-integration-determination|Polar limits of integration determination]]
