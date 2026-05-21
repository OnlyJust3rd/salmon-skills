---
type: "medium"
title: "Rectangular to Polar Coordinate Conversion Formulas"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multiple-integral-evaluation/microskills/rectangular-to-polar-conversion-formulas|rectangular-to-polar-conversion-formulas]]"
---
# Rectangular to Polar Coordinate Conversion Formulas

This lesson focuses on recalling the formulas needed to convert coordinates from the rectangular system to the polar system. This is a fundamental step in evaluating multiple integrals in different coordinate systems.

## Understanding Coordinate Systems

Before diving into the formulas, let's quickly recap what rectangular and polar coordinates represent.

*   **Rectangular Coordinates (x, y):** In a 2D plane, these coordinates describe a point's position using its horizontal distance from the origin (x-axis) and its vertical distance from the origin (y-axis).

*   **Polar Coordinates (r, θ):** These coordinates describe a point's position using its distance from the origin (radius, *r*) and the angle it makes with the positive x-axis (theta, *θ*).

## The Conversion Formulas

To move from rectangular coordinates (x, y) to polar coordinates (r, θ), we use the following relationships derived from trigonometry:

$$
r = \sqrt{x^2 + y^2}
$$

$$
\theta = \arctan\left(\frac{y}{x}\right)
$$

### Understanding the Formulas

Let's break down each formula:

1.  **Formula for *r*:**
    *   This formula comes directly from the Pythagorean theorem. Imagine a right triangle where the legs are the x and y distances from the origin, and the hypotenuse is the distance *r* to the point.
    *   $x^2 + y^2 = r^2$, so taking the square root of both sides gives us $r = \sqrt{x^2 + y^2}$.
    *   *r* will always be a non-negative value, representing a distance.

2.  **Formula for *θ*:**
    *   This formula uses the arctangent function (inverse tangent). In our right triangle, the tangent of the angle *θ* is the ratio of the opposite side (y) to the adjacent side (x).
    *   Therefore, $\tan(\theta) = \frac{y}{x}$.
    *   Applying the arctangent function to both sides gives us $\theta = \arctan\left(\frac{y}{x}\right)$.

### Important Considerations for *θ*

The `arctan(y/x)` function can sometimes be ambiguous. The arctangent function typically returns values in the range $(-\frac{\pi}{2}, \frac{\pi}{2})$. However, the angle *θ* can lie in any of the four quadrants.

*   **Quadrant I (x > 0, y > 0):** The standard `arctan(y/x)` will give the correct angle.
*   **Quadrant II (x < 0, y > 0):** The `arctan(y/x)` will give a negative angle (in Quadrant IV). To get the correct angle in Quadrant II, you need to add $\pi$ to the result of `arctan(y/x)`.
*   **Quadrant III (x < 0, y < 0):** Similar to Quadrant II, `arctan(y/x)` will give a positive angle (in Quadrant I). To get the correct angle in Quadrant III, you need to add $\pi$ to the result of `arctan(y/x)`.
*   **Quadrant IV (x > 0, y < 0):** The standard `arctan(y/x)` will give the correct negative angle.

A more robust way to handle the angle, especially in programming or when using calculators, is to use the `atan2(y, x)` function, which takes both *y* and *x* as arguments and correctly determines the angle in all four quadrants. However, for recalling the fundamental formulas, remembering the relationship with `arctan(y/x)` and understanding quadrant adjustments is key.

## Quick Recall Table

To help with remembering, here's a summary:

| Rectangular (x, y) | Polar (r, θ)        | Formula for r      | Formula for θ (with quadrant awareness) |
| :----------------- | :------------------ | :----------------- | :-------------------------------------- |
| (3, 4)             | (5, arctan(4/3))    | \(r = \sqrt{x^2 + y^2}\) | \( \theta = \arctan\left(\frac{y}{x}\right) \) (+ adjustment for quadrant) |
| (-3, 4)            | (5, \(\pi\) + arctan(4/-3)) |                    |                                         |
| (-3, -4)           | (5, \(\pi\) + arctan(-4/-3)) |                    |                                         |
| (3, -4)            | (5, arctan(-4/3))   |                    |                                         |

**Note:** In the table above, the angles are expressed conceptually. Actual calculation might involve approximate decimal values for the angles.

## Practice Problems

1.  What are the formulas for converting a point from rectangular coordinates (x, y) to polar coordinates (r, θ)?
2.  If a point is at (x, y) = (2, 2), what is its *r* value in polar coordinates?
3.  For the point (2, 2), what is its *θ* value in polar coordinates, assuming the angle is in the first quadrant?
4.  If a point is at (x, y) = (-1, 1), what is its *r* value in polar coordinates?
5.  For the point (-1, 1), what is its *θ* value in polar coordinates, considering it's in the second quadrant?

## Supports

- [[skills/mathematics/multiple-integral-evaluation/microskills/rectangular-to-polar-conversion-formulas|Rectangular to polar conversion formulas]]
