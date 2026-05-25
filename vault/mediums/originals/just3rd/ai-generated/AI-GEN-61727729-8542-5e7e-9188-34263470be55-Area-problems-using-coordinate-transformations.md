---
type: "medium"
title: "Area Problems with Polar Coordinates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/multiple-integral-evaluation/microskills/area-problems-using-coordinate-transformations|area-problems-using-coordinate-transformations]]"
learning-time-in-minutes: 4
---
# Area Problems with Polar Coordinates

This lesson focuses on using polar coordinates to solve area problems, a crucial step in evaluating multiple integrals. We'll learn how to recognize when polar coordinates simplify the process and how to set up the integral correctly.

### Why Polar Coordinates for Area?

Sometimes, the region whose area we want to calculate is easier to describe using angles and distances from a central point rather than x and y coordinates. Think about areas that are circular, annular (ring-shaped), or have boundaries that are simple curves in polar form. In such cases, converting from Cartesian coordinates to polar coordinates can significantly simplify the integral setup.

### The Conversion

The key relationships between Cartesian $(x, y)$ and polar $(r, \theta)$ coordinates are:

*   $x = r \cos \theta$
*   $y = r \sin \theta$
*   $r^2 = x^2 + y^2$
*   $\tan \theta = \frac{y}{x}$

When we switch to polar coordinates for integration, our differential area element $dA$ also changes. In Cartesian coordinates, $dA = dx \, dy$. In polar coordinates, $dA = r \, dr \, d\theta$. This extra factor of $r$ is essential and arises from the geometry of the transformation.

### Setting Up the Integral

To find the area of a region $R$ using polar coordinates, we evaluate the double integral:

$$
\text{Area}(R) = \iint_R dA = \iint_R r \, dr \, d\theta
$$

The process involves:

1.  **Sketching the Region:** Visualize or draw the region whose area you need to find.
2.  **Identifying Polar Boundaries:** Determine the range of $r$ and $\theta$ that describe the region.
    *   **For $\boldsymbol{r}$:** What is the smallest and largest distance from the origin to a point within the region? This will give you the limits for $dr$. Often, $r$ will range from a constant (or 0) to a function of $\theta$, or between two functions of $\theta$.
    *   **For $\boldsymbol{\theta}$:** What is the smallest and largest angle (measured from the positive x-axis) that sweeps out the entire region? This will give you the limits for $d\theta$. The range for $\theta$ is typically a constant interval, like $[0, 2\pi]$ for a full circle, or a smaller interval for a sector.
3.  **Setting up the Integral:** Write down the double integral with the correct limits for $r$ and $\theta$, and the differential $r \, dr \, d\theta$.

### Worked Example

**Problem:** Find the area of the region bounded by the cardioid $r = 1 + \cos \theta$.

**Solution:**

1.  **Sketch the Region:** The cardioid $r = 1 + \cos \theta$ is a heart-shaped curve. As $\theta$ goes from $0$ to $2\pi$, the curve is traced out exactly once.
    *   When $\theta = 0$, $r = 1 + \cos(0) = 1+1 = 2$.
    *   When $\theta = \pi/2$, $r = 1 + \cos(\pi/2) = 1+0 = 1$.
    *   When $\theta = \pi$, $r = 1 + \cos(\pi) = 1-1 = 0$.
    *   When $\theta = 3\pi/2$, $r = 1 + \cos(3\pi/2) = 1+0 = 1$.
    *   When $\theta = 2\pi$, $r = 1 + \cos(2\pi) = 1+1 = 2$.

2.  **Identify Polar Boundaries:**
    *   **For $\boldsymbol{\theta}$:** To trace the entire cardioid, $\theta$ must range from $0$ to $2\pi$. So, $0 \le \theta \le 2\pi$.
    *   **For $\boldsymbol{r}$:** For any given angle $\theta$, the distance from the origin $r$ starts at $0$ and goes out to the boundary of the cardioid, which is given by $r = 1 + \cos \theta$. So, $0 \le r \le 1 + \cos \theta$.

3.  **Set up the Integral:** The area is given by:

    $$
    \text{Area} = \int_{0}^{2\pi} \int_{0}^{1+\cos \theta} r \, dr \, d\theta
    $$

4.  **Evaluate the Integral:**

    First, integrate with respect to $r$:
    $$
    \int_{0}^{1+\cos \theta} r \, dr = \left[ \frac{r^2}{2} \right]_{0}^{1+\cos \theta} = \frac{(1+\cos \theta)^2}{2} - \frac{0^2}{2} = \frac{1}{2}(1 + 2\cos \theta + \cos^2 \theta)
    $$

    Now, integrate this result with respect to $\theta$:
    $$
    \text{Area} = \int_{0}^{2\pi} \frac{1}{2}(1 + 2\cos \theta + \cos^2 \theta) \, d\theta
    $$

    We use the identity $\cos^2 \theta = \frac{1 + \cos(2\theta)}{2}$:
    $$
    \text{Area} = \frac{1}{2} \int_{0}^{2\pi} \left( 1 + 2\cos \theta + \frac{1 + \cos(2\theta)}{2} \right) \, d\theta
    $$
    $$
    \text{Area} = \frac{1}{2} \int_{0}^{2\pi} \left( \frac{3}{2} + 2\cos \theta + \frac{1}{2}\cos(2\theta) \right) \, d\theta
    $$
    $$
    \text{Area} = \frac{1}{2} \left[ \frac{3}{2}\theta + 2\sin \theta + \frac{1}{4}\sin(2\theta) \right]_{0}^{2\pi}
    $$
    $$
    \text{Area} = \frac{1}{2} \left[ \left( \frac{3}{2}(2\pi) + 2\sin(2\pi) + \frac{1}{4}\sin(4\pi) \right) - \left( \frac{3}{2}(0) + 2\sin(0) + \frac{1}{4}\sin(0) \right) \right]
    $$
    $$
    \text{Area} = \frac{1}{2} \left[ (3\pi + 0 + 0) - (0 + 0 + 0) \right]
    $$
    $$
    \text{Area} = \frac{3\pi}{2}
    $$

### Common Mistakes to Avoid

*   **Forgetting the $\boldsymbol{r}$ factor:** This is the most frequent error. Always include $r$ in $r \, dr \, d\theta$.
*   **Incorrect $\boldsymbol{\theta}$ limits:** Make sure your angle limits sweep out the entire region exactly once. For regions not centered at the origin, you might need to adjust the $\theta$ range.
*   **Confusing $\boldsymbol{r}$ and $\boldsymbol{\theta}$ limits:** Ensure your limits are set up as $\int_{\theta_1}^{\theta_2} \int_{r_1(\theta)}^{r_2(\theta)} r \, dr \, d\theta$. The inner integral's limits should generally be functions of the outer variable.

By mastering the conversion and careful setup, you can effectively use polar coordinates to solve a wide range of area problems.

## Supports

- [[skills/mathematics/calculus/multiple-integral-evaluation/microskills/area-problems-using-coordinate-transformations|Area problems using coordinate transformations]]
