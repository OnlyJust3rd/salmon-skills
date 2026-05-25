---
type: "medium"
title: "Converting Polar Coordinates to Rectangular Coordinates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/polar-coordinate-systems/microskills/polar-to-rectangular-coordinate-conversion|polar-to-rectangular-coordinate-conversion]]"
related-skills:
  - "[[skills/mathematics/calculus/polar-coordinate-systems/polar-coordinate-systems|polar-coordinate-systems]]"
learning-time-in-minutes: 3
---
# Converting Polar Coordinates to Rectangular Coordinates

When we work with graphs and equations, we sometimes need to switch between different ways of describing locations. One way is the familiar rectangular (or Cartesian) coordinate system, where we use an x-axis and a y-axis. Another way is the polar coordinate system, which uses a distance from a central point (the pole) and an angle from a reference direction (the polar axis).

This lesson focuses on how to convert a point given in polar coordinates $(r, \theta)$ into its equivalent rectangular coordinates $(x, y)$.

## Understanding the Relationship

Imagine a point P in a plane. In the rectangular system, we locate P by moving `x` units horizontally and `y` units vertically from the origin (0,0).

In the polar system, we locate P by starting at the origin, pointing along the polar axis, and then rotating by the angle `$\theta$`. From that direction, we move a distance `r` from the origin.

We can visualize this relationship using a right-angled triangle. If we consider the point P and its polar coordinates $(r, \theta)$:

*   The distance `r` is the hypotenuse of the right-angled triangle.
*   The angle `$\theta$` is one of the acute angles in the triangle.
*   The adjacent side to the angle `$\theta$` represents the x-coordinate.
*   The opposite side to the angle `$\theta$` represents the y-coordinate.

## The Conversion Formulas

Using basic trigonometry (SOH CAH TOA), we can derive the formulas for converting polar coordinates $(r, \theta)$ to rectangular coordinates $(x, y)$:

*   **x-coordinate:** The adjacent side is found using cosine.
    $$ x = r \cos(\theta) $$

*   **y-coordinate:** The opposite side is found using sine.
    $$ y = r \sin(\theta) $$

These formulas are the key to converting any point from polar to rectangular form.

## Worked Example

Let's convert the polar coordinate $(r, \theta) = (4, \frac{\pi}{3})$ to rectangular coordinates.

1.  **Identify r and $\theta$**:
    Here, $r = 4$ and $\theta = \frac{\pi}{3}$ radians.

2.  **Apply the x-coordinate formula**:
    $$ x = r \cos(\theta) $$
    $$ x = 4 \cos\left(\frac{\pi}{3}\right) $$
    We know that $\cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$.
    $$ x = 4 \times \frac{1}{2} $$
    $$ x = 2 $$

3.  **Apply the y-coordinate formula**:
    $$ y = r \sin(\theta) $$
    $$ y = 4 \sin\left(\frac{\pi}{3}\right) $$
    We know that $\sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$.
    $$ y = 4 \times \frac{\sqrt{3}}{2} $$
    $$ y = 2\sqrt{3} $$

So, the polar coordinate $(4, \frac{\pi}{3})$ is equivalent to the rectangular coordinate $(2, 2\sqrt{3})$.

**Geometric Interpretation:** This means that if you start at the origin, rotate $\frac{\pi}{3}$ radians (or 60 degrees) counterclockwise, and then move 4 units in that direction, you will end up at the point $(2, 2\sqrt{3})$ on a standard rectangular grid.

## Common Pitfalls and Tips

*   **Angle Units**: Always be mindful of whether your angle is in degrees or radians. Make sure your calculator is set to the correct mode when evaluating trigonometric functions. In mathematics, radians are generally preferred.
*   **Negative 'r' Values**: While less common in basic examples, if you encounter a negative 'r' value in polar coordinates, remember that it means you move in the opposite direction of the angle $\theta$. The formulas $x = r \cos(\theta)$ and $y = r \sin(\theta)$ will still work correctly. For example, $(-2, \frac{\pi}{4})$ is the same as $(2, \frac{5\pi}{4})$.
*   **Trigonometric Values**: Have a good grasp of the sine and cosine values for common angles (like $0, \frac{\pi}{6}, \frac{\pi}{4}, \frac{\pi}{3}, \frac{\pi}{2}$ and their multiples) or know how to find them.

## Practice

1.  Convert the polar coordinate $(6, \frac{\pi}{6})$ to rectangular coordinates.
2.  Convert the polar coordinate $(2, \pi)$ to rectangular coordinates.
3.  Convert the polar coordinate $(5, \frac{3\pi}{4})$ to rectangular coordinates.

## Supports

- [[skills/mathematics/calculus/polar-coordinate-systems/microskills/polar-to-rectangular-coordinate-conversion|Polar to rectangular coordinate conversion]]
