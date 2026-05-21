---
type: "medium"
title: "Understanding 2D and 3D Transformations"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/geometric-transformations/microskills/2d-and-3d-transformations|2d-and-3d-transformations]]"
---
# Understanding 2D and 3D Transformations

This lesson introduces the fundamental geometric transformations: translation, scaling, and rotation. We will learn to identify and define these transformations in both two and three dimensions. Understanding these concepts is the first step in mastering geometric transformations.

## What are Geometric Transformations?

Geometric transformations are operations that move, resize, or reshape a geometric object. Think of them as actions you can perform on shapes in space. These actions are precisely defined by mathematical rules.

### Why are Transformations Important?

Transformations are fundamental in many fields:

*   **Computer Graphics:** Creating and manipulating images, animations, and 3D models.
*   **Engineering:** Designing and analyzing structures, machines, and products.
*   **Robotics:** Planning robot movements and navigation.
*   **Art and Design:** Creating patterns and visual effects.
*   **Mathematics:** Studying the properties of shapes and their relationships.

We will focus on three core transformations: translation, scaling, and rotation.

## Translation: Sliding Shapes

**Translation** is the simplest transformation. It means moving an object from one position to another without changing its size, shape, or orientation. Imagine sliding a block across a table – that's translation.

### Key Idea

A translation is defined by a **vector**, which specifies the direction and distance of the movement.

### In 2D

In a 2D plane (like a piece of paper), a point $(x, y)$ can be translated by adding a translation vector $(tx, ty)$. The new position $(x', y')$ will be:

$$
x' = x + tx \\
y' = y + ty
$$

**Example:** If we have a point at (2, 3) and we translate it by the vector (4, -1), the new point will be at (2+4, 3-1) = (6, 2).

### In 3D

In 3D space, a point $(x, y, z)$ is translated by a vector $(tx, ty, tz)$. The new position $(x', y', z')$ will be:

$$
x' = x + tx \\
y' = y + ty \\
z' = z + tz
$$

**Example:** A point at (1, 5, 2) translated by (3, -2, 1) moves to (1+3, 5-2, 2+1) = (4, 3, 3).

## Scaling: Resizing Shapes

**Scaling** changes the size of an object. You can make an object larger or smaller. Scaling can be uniform (meaning it stretches or shrinks equally in all directions) or non-uniform (stretching or shrinking differently along different axes).

### Key Idea

Scaling is defined by **scale factors**. Each scale factor determines how much the object is stretched or shrunk along a specific axis.

### In 2D

To scale a point $(x, y)$ by scale factors $sx$ along the x-axis and $sy$ along the y-axis, relative to the origin, the new point $(x', y')$ is:

$$
x' = x \times sx \\
y' = y \times sy
$$

*   If $sx > 1$ or $sy > 1$, the object is enlarged.
*   If $0 < sx < 1$ or $0 < sy < 1$, the object is shrunk.
*   If $sx = 1$ and $sy = 1$, the size remains unchanged.

**Example:** Scaling a point (3, 4) by $sx=2$ and $sy=0.5$ results in a new point at (3*2, 4*0.5) = (6, 2). The object is stretched in the x-direction and shrunk in the y-direction.

### In 3D

In 3D, scaling a point $(x, y, z)$ by scale factors $sx$, $sy$, and $sz$ results in a new point $(x', y', z')$:

$$
x' = x \times sx \\
y' = y \times sy \\
z' = z \times sz
$$

**Example:** Scaling a point (2, 2, 2) by $sx=3$, $sy=0.5$, and $sz=1$ gives a new point at (2*3, 2*0.5, 2*1) = (6, 1, 2).

## Rotation: Turning Shapes

**Rotation** changes the orientation of an object by turning it around a fixed point or axis. Think of spinning a wheel.

### Key Idea

Rotation is defined by an **angle** and a **center of rotation** (or an axis of rotation in 3D).

### In 2D

Rotating a point $(x, y)$ around the origin $(0,0)$ by an angle $\theta$ (measured counter-clockwise) results in a new point $(x', y')$:

$$
x' = x \cos(\theta) - y \sin(\theta) \\
y' = x \sin(\theta) + y \cos(\theta)
$$

**Example:** Rotating the point (1, 0) by 90 degrees ($\theta = \frac{\pi}{2}$ radians or 90 degrees) counter-clockwise:
$x' = 1 \cos(90^\circ) - 0 \sin(90^\circ) = 1 \times 0 - 0 \times 1 = 0$
$y' = 1 \sin(90^\circ) + 0 \cos(90^\circ) = 1 \times 1 + 0 \times 0 = 1$
The new point is (0, 1).

### In 3D

Rotation in 3D is more complex as it requires specifying an axis of rotation. Common rotations are around the x, y, or z axes.

*   **Rotation around the z-axis:** Affects x and y coordinates similar to 2D rotation, while z remains unchanged.
    $$
    x' = x \cos(\theta) - y \sin(\theta) \\
    y' = x \sin(\theta) + y \cos(\theta) \\
    z' = z
    $$

*   **Rotation around the x-axis:** Affects y and z coordinates.
    $$
    x' = x \\
    y' = y \cos(\theta) - z \sin(\theta) \\
    z' = y \sin(\theta) + z \cos(\theta)
    $$

*   **Rotation around the y-axis:** Affects x and z coordinates.
    $$
    x' = x \cos(\theta) + z \sin(\theta) \\
    y' = y \\
    z' = -x \sin(\theta) + z \cos(\theta)
    $$

**Example:** Rotating a point (1, 0, 0) by 90 degrees counter-clockwise around the z-axis:
$x' = 1 \cos(90^\circ) - 0 \sin(90^\circ) = 0$
$y' = 1 \sin(90^\circ) + 0 \cos(90^\circ) = 1$
$z' = 0$
The new point is (0, 1, 0).

## Summary

| Transformation | Description                                                                   | Key Defining Element |
| :------------- | :---------------------------------------------------------------------------- | :------------------- |
| **Translation**| Moving an object without changing its size, shape, or orientation.            | Vector               |
| **Scaling**    | Changing the size of an object.                                               | Scale Factors        |
| **Rotation**   | Turning an object around a point (2D) or an axis (3D).                        | Angle & Center/Axis  |

These three transformations—translation, scaling, and rotation—are the building blocks for more complex geometric operations. Understanding their definitions is crucial for working with them.

## Supports

- [[skills/creative-media/graphics-media/geometric-transformations/microskills/2d-and-3d-transformations|2D and 3D Transformations]]
