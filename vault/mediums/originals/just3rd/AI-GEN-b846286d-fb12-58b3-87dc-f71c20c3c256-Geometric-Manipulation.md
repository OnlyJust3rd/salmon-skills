---
type: "medium"
title: "Geometric Manipulation: Transforming Shapes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/geometric-transformations/microskills/geometric-manipulation|geometric-manipulation]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/geometric-transformations/geometric-transformations|geometric-transformations]]"
learning-time-in-minutes: 5
---
# Geometric Manipulation: Transforming Shapes

This lesson focuses on the practical application of geometric transformations, specifically translation, scaling, and rotation, to modify 2D and 3D shapes. We'll explore how these operations change the position, size, and orientation of geometric objects.

## Understanding the Transformations

Before we start manipulating shapes, let's quickly define the core transformations we'll be using:

*   **Translation:** Moving a shape from one position to another without changing its size or orientation. Think of sliding an object across a surface.
*   **Scaling:** Resizing a shape, making it larger or smaller. This can be uniform (scaling by the same factor in all directions) or non-uniform (scaling by different factors in different directions).
*   **Rotation:** Turning a shape around a fixed point (the pivot or center of rotation).

## Applying Transformations to 2D Shapes

We'll begin with 2D points and polygons. For simplicity, we'll represent points using coordinates $(x, y)$.

### Translation in 2D

To translate a point $(x, y)$ by a vector $(tx, ty)$, we simply add the translation components to the original coordinates:

$$
(x', y') = (x + tx, y + ty)
$$

Let's say we have a triangle with vertices A(1, 2), B(3, 5), and C(6, 1). We want to translate this triangle by 3 units in the x-direction and -2 units in the y-direction.

*   **Vertex A':** $(1 + 3, 2 + (-2)) = (4, 0)$
*   **Vertex B':** $(3 + 3, 5 + (-2)) = (6, 3)$
*   **Vertex C':** $(6 + 3, 1 + (-2)) = (9, -1)$

The translated triangle has vertices A'(4, 0), B'(6, 3), and C'(9, -1). The shape and size remain the same, only its position has changed.

### Scaling in 2D

To scale a point $(x, y)$ from the origin by factors $sx$ in the x-direction and $sy$ in the y-direction, we multiply the coordinates by these factors:

$$
(x', y') = (x \times sx, y \times sy)
$$

Consider a square with vertices P(2, 2), Q(4, 2), R(4, 4), and S(2, 4). Let's scale it by a factor of 2 in the x-direction ($sx = 2$) and 1.5 in the y-direction ($sy = 1.5$).

*   **Vertex P':** $(2 \times 2, 2 \times 1.5) = (4, 3)$
*   **Vertex Q':** $(4 \times 2, 2 \times 1.5) = (8, 3)$
*   **Vertex R':** $(4 \times 2, 4 \times 1.5) = (8, 6)$
*   **Vertex S':** $(2 \times 2, 4 \times 1.5) = (4, 6)$

The new square (or rectangle, in this case, due to non-uniform scaling) has vertices P'(4, 3), Q'(8, 3), R'(8, 6), and S'(4, 6). The shape has been stretched.

### Rotation in 2D

Rotating a point $(x, y)$ around the origin by an angle $\theta$ counterclockwise is a bit more involved. The formulas are:

$$
x' = x \cos(\theta) - y \sin(\theta)
$$
$$
y' = x \sin(\theta) + y \cos(\theta)
$$

Let's rotate the point A(1, 0) by 90 degrees ($\theta = \frac{\pi}{2}$ radians or 90 degrees) counterclockwise.
We know that $\cos(90^\circ) = 0$ and $\sin(90^\circ) = 1$.

*   **Vertex A':**
    $x' = 1 \times 0 - 0 \times 1 = 0$
    $y' = 1 \times 1 + 0 \times 0 = 1$

So, A(1, 0) rotates to A'(0, 1). This makes sense – a point on the positive x-axis rotated 90 degrees counterclockwise lands on the positive y-axis.

**Note on Rotation:** Rotating around a point other than the origin involves translating the shape so the pivot is at the origin, performing the rotation, and then translating it back.

## Applying Transformations to 3D Objects

In 3D, we use coordinates $(x, y, z)$. The principles of translation, scaling, and rotation extend to three dimensions.

### Translation in 3D

Similar to 2D, translating a point $(x, y, z)$ by a vector $(tx, ty, tz)$ is done by adding the components:

$$
(x', y', z') = (x + tx, y + ty, z + tz)
$$

If we have a point in 3D space at (2, 3, 4) and we translate it by (-1, 0, 5), the new point will be $(2 - 1, 3 + 0, 4 + 5) = (1, 3, 9)$.

### Scaling in 3D

Scaling a point $(x, y, z)$ from the origin by factors $sx$, $sy$, and $sz$ in each respective direction:

$$
(x', y', z') = (x \times sx, y \times sy, z \times sz)
$$

A cube with one corner at the origin (0,0,0) and extending to (1,1,1) can be scaled. If we scale it by $sx=2, sy=3, sz=1$, the corner originally at (1,1,1) would move to $(1 \times 2, 1 \times 3, 1 \times 1) = (2, 3, 1)$. This stretches the cube into a rectangular prism.

### Rotation in 3D

Rotation in 3D is more complex as it can occur around any axis (x, y, or z, or even arbitrary axes). The formulas for rotation around the standard axes are:

*   **Rotation around the z-axis by angle $\theta$:**
    $$
    x' = x \cos(\theta) - y \sin(\theta)
    $$
    $$
    y' = x \sin(\theta) + y \cos(\theta)
    $$
    $$
    z' = z
    $$

*   **Rotation around the x-axis by angle $\theta$:**
    $$
    x' = x
    $$
    $$
    y' = y \cos(\theta) - z \sin(\theta)
    $$
    $$
    z' = y \sin(\theta) + z \cos(\theta)
    $$

*   **Rotation around the y-axis by angle $\theta$:**
    $$
    x' = x \cos(\theta) + z \sin(\theta)
    $$
    $$
    y' = y
    $$
    $$
    z' = -x \sin(\theta) + z \cos(\theta)
    $$

Consider a simple 3D object, like a point at (1, 0, 0). Rotating this point 90 degrees counterclockwise around the z-axis will result in:

*   $x' = 1 \cos(90^\circ) - 0 \sin(90^\circ) = 0$
*   $y' = 1 \sin(90^\circ) + 0 \cos(90^\circ) = 1$
*   $z' = 0$

The point (1, 0, 0) rotates to (0, 1, 0), which is a point on the positive y-axis.

## Summary of Applications

Geometric manipulation through translation, scaling, and rotation is fundamental in various fields:

*   **Computer Graphics:** Moving, resizing, and orienting objects in games, simulations, and animations.
*   **CAD (Computer-Aided Design):** Designing and modifying 2D and 3D models of products and structures.
*   **Robotics:** Planning paths and controlling the movement of robotic arms and vehicles.
*   **Image Processing:** Adjusting the position, size, and orientation of images.

By understanding and applying these transformations, you gain the ability to precisely control and modify geometric shapes in both two and three dimensions.

## Supports

- [[skills/digital-media/computer-graphics/geometric-transformations/microskills/geometric-manipulation|Geometric Manipulation]]
