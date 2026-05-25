---
type: "medium"
title: "Formulating Integrals for Polar Area"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/polar-coordinate-systems/microskills/polar-curve-area-formulation|polar-curve-area-formulation]]"
related-skills:
  - "[[skills/mathematics/calculus/polar-coordinate-systems/polar-coordinate-systems|polar-coordinate-systems]]"
learning-time-in-minutes: 6
---
# Formulating Integrals for Polar Area

This lesson focuses on **Polar curve area formulation**, a key step in calculating the area of regions using polar coordinates. We'll learn how to set up the correct definite integral to represent these areas.

## Understanding the Area Element in Polar Coordinates

In Cartesian coordinates, we think of area as summing up small rectangles of width $dx$ and height $f(x)$. In polar coordinates, our basic building block is a small sector of a circle.

Imagine a polar curve defined by $r = f(\theta)$. As $\theta$ changes by a small amount $d\theta$, the radius sweeps out a small sector. The area of a sector of a circle with radius $r$ and angle $\Delta\theta$ (in radians) is given by:

$$
\text{Area of sector} = \frac{1}{2} r^2 (\Delta\theta)
$$

When we consider an infinitesimally small change $d\theta$, the area of this tiny sector is:

$$
dA = \frac{1}{2} [f(\theta)]^2 d\theta
$$

To find the total area of a region bounded by the polar curve $r = f(\theta)$ from $\theta = a$ to $\theta = b$, we integrate this small area element:

$$
\text{Area} = \int_{a}^{b} \frac{1}{2} [f(\theta)]^2 d\theta
$$

## Formulating Integrals for Simple Polar Regions

Let's consider how to formulate the integral for different scenarios.

### Region bounded by a single polar curve

If you need to find the area of a region enclosed by a single polar curve $r = f(\theta)$ between angles $\theta = a$ and $\theta = b$, the integral is directly applied:

$$
\text{Area} = \int_{a}^{b} \frac{1}{2} [f(\theta)]^2 d\theta
$$

**Example:** Find the area enclosed by the cardioid $r = 1 + \cos(\theta)$.

1.  **Identify the curve and its bounds:** The curve is $r = 1 + \cos(\theta)$. A cardioid completes a full loop as $\theta$ goes from $0$ to $2\pi$. So, $a=0$ and $b=2\pi$.

2.  **Apply the formula:**
    $$
    \text{Area} = \int_{0}^{2\pi} \frac{1}{2} (1 + \cos(\theta))^2 d\theta
    $$

This is the formulation. The next step would be to evaluate this integral.

### Region between two polar curves

When you have two polar curves, say $r_1 = f_1(\theta)$ and $r_2 = f_2(\theta)$, and you want to find the area of the region between them, you subtract the smaller area from the larger area. Generally, we assume $r_1 \ge r_2$ over the interval of integration.

The area of the outer curve from $\theta = a$ to $\theta = b$ is:
$$
\text{Area}_1 = \int_{a}^{b} \frac{1}{2} [f_1(\theta)]^2 d\theta
$$

The area of the inner curve from $\theta = a$ to $\theta = b$ is:
$$
\text{Area}_2 = \int_{a}^{b} \frac{1}{2} [f_2(\theta)]^2 d\theta
$$

The area between the curves is then $\text{Area}_1 - \text{Area}_2$. Combining these into a single integral:

$$
\text{Area} = \int_{a}^{b} \frac{1}{2} ([f_1(\theta)]^2 - [f_2(\theta)]^2) d\theta
$$

**Example:** Find the area inside the circle $r = 3$ and outside the cardioid $r = 1 + \cos(\theta)$.

1.  **Visualize the region:** We're looking for the area that is within the larger circle but not within the cardioid.

2.  **Find intersection points:** Set the two equations equal to find where they intersect:
    $3 = 1 + \cos(\theta)$
    $2 = \cos(\theta)$
    This has no solution, meaning the circle $r=3$ completely encloses the cardioid $r = 1 + \cos(\theta)$ (since the maximum value of $1+\cos\theta$ is 2). This simplifies our problem.

3.  **Determine the bounds of integration:** Since the circle encloses the cardioid, and we want the area *inside* the circle and *outside* the cardioid, the region is defined by the full range of $\theta$ where the cardioid is "inside" the circle. As established, the cardioid is always inside $r=3$.

    Let's consider a different example for clarity where intersection points are crucial. Suppose we want the area inside $r=2\sin\theta$ and outside $r=1$.
    Intersection: $2\sin\theta = 1 \implies \sin\theta = 1/2$. This occurs at $\theta = \pi/6$ and $\theta = 5\pi/6$.
    In this case, the bounds would be $a=\pi/6$ and $b=5\pi/6$.
    The area *inside* $r=2\sin\theta$ and *outside* $r=1$ would be:
    $$
    \text{Area} = \int_{\pi/6}^{5\pi/6} \frac{1}{2} ((2\sin\theta)^2 - (1)^2) d\theta
    $$

    **Back to our original example:** Find the area inside the circle $r = 3$ and outside the cardioid $r = 1 + \cos(\theta)$.
    Since $r=3$ encloses the cardioid $r = 1 + \cos(\theta)$ for all $\theta$, we can consider the area of the circle and subtract the area of the cardioid. However, the phrasing "inside the circle AND outside the cardioid" implies we are looking for a specific region.

    Let's re-evaluate the problem statement with a more typical scenario for two curves.
    **Revised Example:** Find the area of the region that lies inside $r = 2\sin\theta$ and outside $r = 1$.

    1.  **Identify the curves:** $r_1 = 2\sin\theta$ (a circle) and $r_2 = 1$ (a line).
    2.  **Find intersection points:** Set $r_1 = r_2$:
        $2\sin\theta = 1$
        $\sin\theta = \frac{1}{2}$
        This occurs at $\theta = \frac{\pi}{6}$ and $\theta = \frac{5\pi}{6}$. These will be our integration bounds, $a = \frac{\pi}{6}$ and $b = \frac{5\pi}{6}$.
    3.  **Determine which curve is "outer" and "inner":** Over the interval $(\frac{\pi}{6}, \frac{5\pi}{6})$, $2\sin\theta$ is greater than or equal to 1. For example, at $\theta = \frac{\pi}{2}$, $2\sin(\frac{\pi}{2}) = 2$, which is greater than 1. So $r_1 = 2\sin\theta$ is the outer curve and $r_2 = 1$ is the inner curve.
    4.  **Formulate the integral:**
        $$
        \text{Area} = \int_{\pi/6}^{5\pi/6} \frac{1}{2} \left( (2\sin\theta)^2 - (1)^2 \right) d\theta
        $$
        $$
        \text{Area} = \int_{\pi/6}^{5\pi/6} \frac{1}{2} \left( 4\sin^2\theta - 1 \right) d\theta
        $$

## Key Considerations When Formulating

*   **Bounds of Integration:** Always determine the correct angular bounds ($a$ and $b$). This often involves finding intersection points or understanding the range over which the region is traced.
*   **Outer vs. Inner Curve:** For areas between two curves, clearly identify which function represents the outer boundary and which represents the inner boundary within your chosen interval. The difference of squares formula $\frac{1}{2} (r_{\text{outer}}^2 - r_{\text{inner}}^2)$ is crucial.
*   **Symmetry:** If the region is symmetric, you can sometimes calculate the area of a portion and multiply by a factor (e.g., calculate the area of the top half and multiply by 2 if symmetric about the x-axis). This can simplify calculations.
*   **Curve Tracing:** Be mindful of how the polar curve is traced. Some curves might require multiple integrals if they loop back on themselves or if you're looking at regions defined by different parts of the curve. For example, $r = \cos(2\theta)$ traces four petals, and you might need to set up integrals for each petal or exploit symmetry.

## Practice Scenario

Formulate the definite integral to find the area of the region that lies inside the circle $r = 2$ and outside the circle $r = 2\cos\theta$.

Take a moment to:
1.  Sketch the two curves.
2.  Find their intersection points.
3.  Identify the "outer" and "inner" curve within the relevant angular range.
4.  Write down the integral.

This formulation step is critical for accurately calculating areas in polar coordinates.

## Supports

- [[skills/mathematics/calculus/polar-coordinate-systems/microskills/polar-curve-area-formulation|Polar curve area formulation]]
