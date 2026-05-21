---
type: "medium"
title: "Rectangular to Cylindrical Coordinate Conversion Formulas"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/rectangular-to-cylindrical-conversion-formulas|rectangular-to-cylindrical-conversion-formulas]]"
---
# Rectangular to Cylindrical Coordinate Conversion Formulas

This lesson focuses on remembering the formulas needed to convert coordinates from the rectangular (Cartesian) system to the cylindrical coordinate system. This is a fundamental step in evaluating multiple integrals, especially when dealing with problems that have cylindrical symmetry.

## Understanding the Coordinate Systems

Before diving into the formulas, let's quickly visualize the two systems:

*   **Rectangular Coordinates ($$(x, y, z)$$)**: This is the familiar 3D coordinate system where points are located by their perpendicular distances along the x, y, and z axes.
*   **Cylindrical Coordinates ($$(r, \theta, z)$$)**: This system is like polar coordinates in the xy-plane, extended into three dimensions.
    *   $$(r, \theta)$$ describe the position in the xy-plane.
    *   $$z$$ is the same as in the rectangular system and represents the height above or below the xy-plane.

The key idea behind cylindrical coordinates is to use a distance and an angle in the base plane, which simplifies problems with rotational symmetry around an axis (often the z-axis).

## Conversion Formulas: Rectangular to Cylindrical

To convert from rectangular coordinates $$(x, y, z)$$ to cylindrical coordinates $$(r, \theta, z)$$, we need to express $$r$$ and $$\theta$$ in terms of $$x$$ and $$y$$, while $$z$$ remains unchanged.

### The Formulas

Here are the essential formulas you need to remember:

*   **Relating $$r$$ to $$x$$ and $$y$$**:
    $$r = \sqrt{x^2 + y^2}$$

    This formula comes directly from the Pythagorean theorem applied to the right triangle formed by the origin, the point $$(x, y)$$ in the xy-plane, and the projection of the point onto the x-axis (or y-axis). $$r$$ is the hypotenuse.

*   **Relating $$\theta$$ to $$x$$ and $$y$$**:
    $$\theta = \arctan\left(\frac{y}{x}\right)$$

    This formula is derived from trigonometry in the right triangle mentioned above. The tangent of the angle $$\theta$$ is the ratio of the opposite side (y) to the adjacent side (x).

    **Important Note on $$\theta$$**: The `arctan` function (or `atan2` function in programming) is crucial here. While `arctan(y/x)` gives a principal value for the angle, it doesn't distinguish between quadrants. For example, points $$(1, 1)$$ and $$(-1, -1)$$ both have $$y/x = 1$$, but their angles differ by $$\pi$$ radians (180 degrees). You must consider the signs of both $$x$$ and $$y$$ to determine the correct quadrant for $$\theta$$.

*   **The $$z$$ coordinate**:
    $$z_{cylindrical} = z_{rectangular}$$

    The height coordinate is the same in both systems.

### Summary Table

| Rectangular Variable | Cylindrical Variable | Formula                                       | Notes                                   |
| :------------------- | :------------------- | :-------------------------------------------- | :-------------------------------------- |
| $$x$$                | $$r$$                | $$r = \sqrt{x^2 + y^2}$$                      | Distance from z-axis in xy-plane        |
| $$y$$                | $$\theta$$           | $$\theta = \arctan\left(\frac{y}{x}\right)$$ | Angle with positive x-axis (in xy-plane) |
| $$z$$                | $$z$$                | $$z_{cylindrical} = z_{rectangular}$$         | Height remains unchanged                |

## Worked Example (Conceptual)

Let's say you have a point in rectangular coordinates $$(x, y, z) = (3, 4, 5)$$.

1.  **Find $$r$$**:
    $$r = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

2.  **Find $$\theta$$**:
    $$\theta = \arctan\left(\frac{4}{3}\right)$$
    Using a calculator, $$\arctan(4/3) \approx 0.927$$ radians (or about 53.1 degrees). Since both $$x=3$$ and $$y=4$$ are positive, this angle is in the first quadrant, which is correct for the `arctan` function's principal value.

3.  **Find $$z$$**:
    $$z = 5$$

So, the cylindrical coordinates for the point $$(3, 4, 5)$$ are approximately $$(5, 0.927, 5)$$.

## Key Takeaways for Remembering

*   **$$r$$**: Think "radius" in the xy-plane. It's the distance from the origin (or the z-axis when extended to 3D). It's always non-negative.
*   **$$\theta$$**: Think "theta" as the angle measured counterclockwise from the positive x-axis. Be mindful of the quadrant.
*   **$$z$$**: It's the "same old z".

Memorizing these formulas is crucial for seamlessly transitioning between coordinate systems in your calculus and physics problems. Practice recalling them without looking!

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/rectangular-to-cylindrical-conversion-formulas|Rectangular to cylindrical conversion formulas]]
