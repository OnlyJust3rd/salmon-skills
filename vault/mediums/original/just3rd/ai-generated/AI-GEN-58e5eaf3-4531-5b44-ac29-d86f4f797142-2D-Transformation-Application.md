---
type: "medium"
title: "Applying 2D Transformations: Translation, Scaling, and Rotation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/computer-graphics/geometric-transformations/microskills/2d-transformation-application|2d-transformation-application]]"
learning-time-in-minutes: 4
---
# Applying 2D Transformations: Translation, Scaling, and Rotation

In the world of computer graphics, animation, and game development, we often need to move, resize, or spin objects around. This is where 2D transformations come in. This lesson focuses on how to apply three fundamental 2D transformations: translation, scaling, and rotation, to points and simple shapes.

## Understanding Transformations

Transformations are operations that change the position, size, or orientation of a geometric object. We'll be working with 2D points, which can be represented by their (x, y) coordinates. Polygons are simply collections of connected points.

### 1. Translation

Translation is simply **moving** an object from one location to another. It's like sliding an object without rotating or resizing it.

To translate a point $(x, y)$ by a vector $(t_x, t_y)$, we add the translation components to the original coordinates:

$$
\text{New Point} = (x + t_x, y + t_y)
$$

*   $(t_x, t_y)$ represents how much to move the point along the x-axis and y-axis, respectively.
*   If $t_x$ is positive, the point moves to the right. If negative, it moves to the left.
*   If $t_y$ is positive, the point moves up. If negative, it moves down.

**Applying Translation to a Polygon:**

To translate a polygon, we simply apply the translation to each of its vertices (corner points).

**Example:**

Let's translate a triangle with vertices A(1, 2), B(4, 2), and C(2, 5) by a translation vector of $(3, -1)$.

*   **Point A (1, 2):**
    New A = $(1 + 3, 2 + (-1)) = (4, 1)$
*   **Point B (4, 2):**
    New B = $(4 + 3, 2 + (-1)) = (7, 1)$
*   **Point C (2, 5):**
    New C = $(2 + 3, 5 + (-1)) = (4, 4)$

The translated triangle has vertices A'(4, 1), B'(7, 1), and C'(4, 4).

### 2. Scaling

Scaling **changes the size** of an object. We can make it larger or smaller. Scaling is done relative to a **scaling origin**, which is typically the point (0,0) unless otherwise specified.

To scale a point $(x, y)$ by factors $(s_x, s_y)$, we multiply the original coordinates by these factors:

$$
\text{New Point} = (x \times s_x, y \times s_y)
$$

*   $s_x$ scales the object along the x-axis, and $s_y$ scales it along the y-axis.
*   If $s_x > 1$, the object stretches horizontally. If $0 < s_x < 1$, it shrinks horizontally.
*   If $s_y > 1$, the object stretches vertically. If $0 < s_y < 1$, it shrinks vertically.
*   If $s_x = 1$ and $s_y = 1$, the size remains unchanged.
*   If $s_x$ or $s_y$ is negative, it also results in a reflection.

**Applying Scaling to a Polygon:**

Similar to translation, we apply scaling to each vertex of the polygon.

**Example:**

Let's scale the same triangle A(1, 2), B(4, 2), C(2, 5) by scaling factors $s_x = 2$ and $s_y = 0.5$.

*   **Point A (1, 2):**
    New A = $(1 \times 2, 2 \times 0.5) = (2, 1)$
*   **Point B (4, 2):**
    New B = $(4 \times 2, 2 \times 0.5) = (8, 1)$
*   **Point C (2, 5):**
    New C = $(2 \times 2, 5 \times 0.5) = (4, 2.5)$

The scaled triangle has vertices A'(2, 1), B'(8, 1), and C'(4, 2.5). Notice how it became wider and shorter.

### 3. Rotation

Rotation **turns** an object around a specific point (the center of rotation). By default, this is often the origin (0,0). Rotations are typically measured in degrees or radians.

To rotate a point $(x, y)$ by an angle $\theta$ (counter-clockwise around the origin), we use the following formulas:

$$
\text{New X} = x \cos(\theta) - y \sin(\theta)
$$

$$
\text{New Y} = x \sin(\theta) + y \cos(\theta)
$$

*   $\theta$ is the angle of rotation.
*   If $\theta$ is positive, the rotation is counter-clockwise.
*   If $\theta$ is negative, the rotation is clockwise.

**Applying Rotation to a Polygon:**

Again, we apply the rotation formula to each vertex of the polygon.

**Example:**

Let's rotate the point P(3, 1) by 90 degrees counter-clockwise around the origin (0,0).

Here, $x=3$, $y=1$, and $\theta = 90^\circ$.
We know that $\cos(90^\circ) = 0$ and $\sin(90^\circ) = 1$.

*   **New X:** $3 \times \cos(90^\circ) - 1 \times \sin(90^\circ) = 3 \times 0 - 1 \times 1 = -1$
*   **New Y:** $3 \times \sin(90^\circ) + 1 \times \cos(90^\circ) = 3 \times 1 + 1 \times 0 = 3$

So, the rotated point P' is (-1, 3).

### Common Mistakes to Avoid

*   **Mixing up scaling factors:** Ensure you apply $s_x$ to x-coordinates and $s_y$ to y-coordinates.
*   **Incorrect angle direction:** Remember that positive angles usually mean counter-clockwise rotation.
*   **Forgetting to transform all points:** For polygons, every vertex must be transformed to maintain the shape's integrity.
*   **Confusing operations:** Don't apply scaling as if it were translation, or vice-versa.

By practicing these three fundamental transformations, you'll build a strong foundation for manipulating geometric objects in various applications.

## Supports

- [[skills/digital-media/computer-graphics/geometric-transformations/microskills/2d-transformation-application|2D Transformation Application]]
