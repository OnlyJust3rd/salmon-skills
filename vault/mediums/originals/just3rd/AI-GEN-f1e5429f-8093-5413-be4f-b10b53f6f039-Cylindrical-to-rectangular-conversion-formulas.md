---
type: "medium"
title: "Cylindrical to Rectangular Coordinate Conversion Formulas"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/microskills/cylindrical-to-rectangular-conversion-formulas|cylindrical-to-rectangular-conversion-formulas]]"
related-skills:
  - "[[skills/mathematics/calculus/multiple-integral-evaluation/multiple-integral-evaluation|multiple-integral-evaluation]]"
learning-time-in-minutes: 3
---
# Cylindrical to Rectangular Coordinate Conversion Formulas

When working with problems involving rotational symmetry or cylindrical shapes, using cylindrical coordinates can simplify calculations. However, sometimes you might need to express these points or regions in rectangular coordinates (x, y, z). This lesson focuses on recalling the formulas to convert from cylindrical coordinates to rectangular coordinates.

## Understanding Cylindrical Coordinates

In the cylindrical coordinate system $(r, \theta, z)$:

*   **r**: The radial distance from the z-axis to the point. This is the same as the radius in polar coordinates.
*   **$\theta$**: The azimuthal angle, measured counterclockwise from the positive x-axis in the xy-plane.
*   **z**: The height above or below the xy-plane, identical to the z-coordinate in rectangular coordinates.

## Understanding Rectangular Coordinates

In the rectangular coordinate system $(x, y, z)$:

*   **x**: The horizontal distance from the yz-plane.
*   **y**: The depth distance from the xz-plane.
*   **z**: The vertical distance from the xy-plane.

## The Conversion Formulas

The conversion from cylindrical coordinates $(r, \theta, z)$ to rectangular coordinates $(x, y, z)$ relies on the familiar relationships from polar coordinates in the xy-plane. The z-coordinate remains unchanged.

The formulas are:

*   $$ x = r \cos(\theta) $$
*   $$ y = r \sin(\theta) $$
*   $$ z = z $$

### Why These Formulas Work

Imagine projecting the point $(r, \theta, z)$ onto the xy-plane. This projection would be at a distance $r$ from the origin, making an angle $\theta$ with the positive x-axis. The x and y components of this projected point are precisely $r \cos(\theta)$ and $r \sin(\theta)$, respectively, just like in polar coordinates. Since the z-coordinate in cylindrical and rectangular systems is the same, it carries over directly.

## Recalling the Formulas: A Memory Aid

A helpful way to remember these is to visualize the right triangle formed in the xy-plane with hypotenuse $r$, angle $\theta$ adjacent to the x-axis, and sides $x$ and $y$.

*   $x$ is the adjacent side to $\theta$ over the hypotenuse $r$: $x/r = \cos(\theta) \implies x = r \cos(\theta)$.
*   $y$ is the opposite side to $\theta$ over the hypotenuse $r$: $y/r = \sin(\theta) \implies y = r \sin(\theta)$.

The $z$ coordinate is simply the height.

## Example

Let's convert the cylindrical point $(r, \theta, z) = (4, \pi/3, 5)$ to rectangular coordinates.

Using the formulas:

*   $$ x = 4 \cos(\pi/3) $$
    We know that $ \cos(\pi/3) = 1/2 $.
    $$ x = 4 \times (1/2) = 2 $$

*   $$ y = 4 \sin(\pi/3) $$
    We know that $ \sin(\pi/3) = \sqrt{3}/2 $.
    $$ y = 4 \times (\sqrt{3}/2) = 2\sqrt{3} $$

*   $$ z = 5 $$

So, the rectangular coordinates are $ (2, 2\sqrt{3}, 5) $.

## Key Takeaway

The conversion from cylindrical to rectangular coordinates is straightforward if you recall the trigonometric relationships from polar coordinates for $x$ and $y$, and remember that $z$ remains unchanged.

$$
\begin{array}{|c|c|}
\hline
\textbf{Cylindrical Coordinate} & \textbf{Rectangular Coordinate} \\
\hline
(r, \theta, z) & (x, y, z) \\
\hline
x = r \cos(\theta) & \\
y = r \sin(\theta) & \\
z = z & \\
\hline
\end{array}
$$

## Supports

- [[skills/mathematics/calculus/multiple-integral-evaluation/microskills/cylindrical-to-rectangular-conversion-formulas|Cylindrical to rectangular conversion formulas]]
