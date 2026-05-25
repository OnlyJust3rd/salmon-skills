---
type: "medium"
title: "Converting Rectangular Coordinates to Polar Coordinates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/polar-coordinate-systems/microskills/rectangular-to-polar-coordinate-conversion|rectangular-to-polar-coordinate-conversion]]"
learning-time-in-minutes: 5
---
# Converting Rectangular Coordinates to Polar Coordinates

In mathematics, we often describe the location of a point. We're familiar with the rectangular coordinate system (also called Cartesian), where a point is located using its horizontal (x) and vertical (y) distances from an origin. However, there's another useful way to describe locations: the polar coordinate system.

The polar coordinate system uses a distance from the origin and an angle from a reference direction. Think of it like giving directions: "Go 5 miles northeast." The 5 miles is the distance, and "northeast" is the angle.

This lesson focuses on understanding how to convert a point given in rectangular coordinates ($ (x, y) $) to its equivalent in polar coordinates ($ (r, \theta) $).

## Understanding the Relationship

Imagine a point P in the xy-plane.

*   **Rectangular Coordinates:** We know its position by how far it is along the x-axis (the `x` value) and how far it is along the y-axis (the `y` value).
*   **Polar Coordinates:** In the polar system, we describe P by:
    *   **`r`**: The direct distance from the origin (0,0) to the point P. This is also called the radius.
    *   **`\(\theta\)` (theta)**: The angle measured counterclockwise from the positive x-axis to the line segment connecting the origin to point P.

We can visualize this relationship using a right-angled triangle. If we drop a perpendicular line from point P to the x-axis, we form a triangle with sides `x`, `y`, and hypotenuse `r`.

$$
\begin{tikzpicture}
  \draw[->] (-3,0) -- (3,0) node[right] {$x$};
  \draw[->] (0,-3) -- (0,3) node[above] {$y$};
  \draw (0,0) -- (2,2) node[above right] {$P(x,y)$};
  \draw[dashed] (2,0) -- (2,2);
  \draw (0,0) -- (2,0) node[below] {$x$};
  \draw (2,0) -- (2,2) node[right] {$y$};
  \draw[thick, red] (0,0) -- (2,2) node[above left, red] {$r$};
  \node[blue] at (0.7,0.7) {$\theta$};
  \draw[blue, ->] (0,0) -- (0.7,0.7) arc (0:45:0.7);
\end{tikzpicture}
$$

## The Conversion Formulas

Using trigonometry in our right-angled triangle, we can derive the formulas to convert from rectangular ($ (x, y) $) to polar ($ (r, \theta) $) coordinates:

1.  **Finding `r` (the distance):**
    The hypotenuse `r` can be found using the Pythagorean theorem:
    $$
    r^2 = x^2 + y^2
    $$
    So,
    $$
    r = \sqrt{x^2 + y^2}
    $$
    Since `r` represents a distance, we usually take the positive square root.

2.  **Finding `\(\theta\)` (the angle):**
    We can use the tangent function, which relates the opposite side (`y`) to the adjacent side (`x`):
    $$
    \tan(\theta) = \frac{y}{x}
    $$
    To find `\(\theta\)`, we use the inverse tangent function (arctangent or `atan`):
    $$
    \theta = \arctan\left(\frac{y}{x}\right)
    $$

    **Important Note:** The `arctan` function on most calculators or programming languages will give an angle between $$ -\frac{\pi}{2} $$ and $$ \frac{\pi}{2} $$ (or -90° and 90°). This means it only considers the first and fourth quadrants. We need to adjust the angle based on the quadrant where our point ($ (x, y) $) actually lies to get the correct polar angle.

    *   If ($x, y$) is in Quadrant I ($x > 0, y > 0$), then $$ \theta = \arctan\left(\frac{y}{x}\right) $$ is correct.
    *   If ($x, y$) is in Quadrant II ($x < 0, y > 0$), then $$ \theta = \arctan\left(\frac{y}{x}\right) + \pi $$ (or $$ \theta = \arctan\left(\frac{y}{x}\right) + 180^\circ $$). We add $$ \pi $$ to the calculator's result to move into the correct quadrant.
    *   If ($x, y$) is in Quadrant III ($x < 0, y < 0$), then $$ \theta = \arctan\left(\frac{y}{x}\right) + \pi $$ (or $$ \theta = \arctan\left(\frac{y}{x}\right) + 180^\circ $$). The `arctan(y/x)` will be positive here, so adding $$ \pi $$ puts it in the third quadrant.
    *   If ($x, y$) is in Quadrant IV ($x > 0, y < 0$), then $$ \theta = \arctan\left(\frac{y}{x}\right) $$ is correct (this might be a negative angle, which is valid in polar coordinates).
    *   If $$ x = 0 $$ and $$ y > 0 $$, $$ \theta = \frac{\pi}{2} $$ (or 90°).
    *   If $$ x = 0 $$ and $$ y < 0 $$, $$ \theta = -\frac{\pi}{2} $$ (or -90°).
    *   If $$ x = 0 $$ and $$ y = 0 $$, the point is the origin. $$ r = 0 $$, and $$ \theta $$ can be any angle (conventionally, $$ \theta = 0 $$).

    Many programming languages offer an `atan2(y, x)` function which handles these quadrant issues automatically, returning an angle in the range $$ (-\pi, \pi] $$ or $$ (-180^\circ, 180^\circ] $$.

## Worked Example

Let's convert the rectangular point $$ (-3, 4) $$ to polar coordinates.

**Step 1: Calculate `r`**

Using the formula $$ r = \sqrt{x^2 + y^2} $$:
$$
r = \sqrt{(-3)^2 + (4)^2}
$$
$$
r = \sqrt{9 + 16}
$$
$$
r = \sqrt{25}
$$
$$
r = 5
$$

**Step 2: Calculate `\(\theta\)`**

The point $$ (-3, 4) $$ is in Quadrant II (since $$ x < 0 $$ and $$ y > 0 $$).

First, let's find the basic angle using the arctangent:
$$
\frac{y}{x} = \frac{4}{-3} = -\frac{4}{3}
$$
$$
\arctan\left(-\frac{4}{3}\right) \approx -0.927 \text{ radians} \quad (\text{or} \approx -53.1^\circ)
$$
This angle is in Quadrant IV. Since our point is in Quadrant II, we need to add $$ \pi $$ radians (or 180°) to adjust it:

Using radians:
$$
\theta = -0.927 + \pi \approx -0.927 + 3.14159 \approx 2.214 \text{ radians}
$$
Using degrees:
$$
\theta = -53.1^\circ + 180^\circ = 126.9^\circ
$$

So, the polar coordinates for the point $$ (-3, 4) $$ are approximately $$ (5, 2.214 \text{ radians}) $$ or $$ (5, 126.9^\circ) $$.

**Geometric Interpretation:**
This means the point is 5 units away from the origin, and the line connecting the origin to the point makes an angle of about 126.9° counterclockwise from the positive x-axis.

## Summary

Converting rectangular coordinates $$ (x, y) $$ to polar coordinates $$ (r, \theta) $$ involves:

*   Calculating the distance $$ r = \sqrt{x^2 + y^2} $$.
*   Calculating the angle $$ \theta = \arctan\left(\frac{y}{x}\right) $$ and adjusting it based on the quadrant of the point $$ (x, y) $$. Using $$ \operatorname{atan2}(y, x) $$ is a more robust method for finding $$ \theta $$.

Understanding these conversions is a key step in working with polar coordinate systems and appreciating their geometric interpretations.

## Supports

- [[skills/mathematics/calculus/polar-coordinate-systems/microskills/rectangular-to-polar-coordinate-conversion|Rectangular to polar coordinate conversion]]
