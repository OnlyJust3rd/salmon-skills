---
type: "medium"
title: "3D Transformation Principles"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/geometric-transformations/microskills/3d-transformation-principles|3D Transformation Principles]]"
---
# 3D Transformation Principles

In 3D graphics and geometry, understanding how objects move and change their orientation and size is fundamental. These changes are achieved through transformations. While 2D transformations deal with a flat plane, 3D transformations extend these concepts into three dimensions (length, width, and height). This lesson focuses on the underlying mathematical principles that govern these 3D transformations.

## The Foundation: Coordinate Systems

Just like in 2D, 3D transformations operate within a coordinate system. The most common is the **Cartesian coordinate system**, which uses three perpendicular axes: X, Y, and Z.

*   **X-axis**: Typically represents width (left/right).
*   **Y-axis**: Typically represents height (up/down).
*   **Z-axis**: Typically represents depth (forward/backward).

A point in 3D space is represented by a triplet of coordinates: $$(x, y, z)$$.

## Core 3D Transformations

The primary transformations in 3D are extensions of their 2D counterparts:

1.  **Translation**: Moving an object without changing its orientation or size.
2.  **Rotation**: Turning an object around an axis.
3.  **Scaling**: Resizing an object uniformly or non-uniformly.

### 1. Translation in 3D

To translate a point $$(x, y, z)$$ by a vector $$(tx, ty, tz)$$, we simply add the translation components to the point's coordinates.

**Mathematical Principle:**
If $$(x', y', z')$$ is the new position of the point $$(x, y, z)$$ after translation, then:
$$
x' = x + tx \\
y' = y + ty \\
z' = z + tz
$$

**Example:**
Translate the point $$(2, 3, 4)$$ by the translation vector $$(1, -2, 0)$$.
$$
x' = 2 + 1 = 3 \\
y' = 3 + (-2) = 1 \\
z' = 4 + 0 = 4
$$
The new point is $$(3, 1, 4)$$.

### 2. Rotation in 3D

Rotation in 3D is more complex than in 2D because we can rotate around any axis. The most common rotations are around the primary axes (X, Y, and Z).

#### Rotation around the X-axis:

When rotating a point $$(x, y, z)$$ by an angle $'\theta'$ around the X-axis, the X-coordinate remains unchanged. The Y and Z coordinates are transformed similarly to a 2D rotation.

**Mathematical Principle:**
If $$(x', y', z')$$ is the new position after rotation by $'\theta'$ around the X-axis:
$$
x' = x \\
y' = y \cos(\theta) - z \sin(\theta) \\
z' = y \sin(\theta) + z \cos(\theta)
$$

#### Rotation around the Y-axis:

When rotating by an angle $'\theta'$ around the Y-axis, the Y-coordinate remains unchanged.

**Mathematical Principle:**
If $$(x', y', z')$$ is the new position after rotation by $'\theta'$ around the Y-axis:
$$
x' = x \cos(\theta) + z \sin(\theta) \\
y' = y \\
z' = -x \sin(\theta) + z \cos(\theta)
$$

#### Rotation around the Z-axis:

When rotating by an angle $'\theta'$ around the Z-axis, the Z-coordinate remains unchanged. This is identical to a 2D rotation in the XY plane.

**Mathematical Principle:**
If $$(x', y', z')$$ is the new position after rotation by $'\theta'$ around the Z-axis:
$$
x' = x \cos(\theta) - y \sin(\theta) \\
y' = x \sin(\theta) + y \cos(\theta) \\
z' = z
$$

**Important Note:** The order of rotations matters in 3D. Rotating around X then Y will generally produce a different result than rotating around Y then X.

### 3. Scaling in 3D

Scaling changes the size of an object. In 3D, we can scale along each axis independently or uniformly.

#### Uniform Scaling:

When scaling uniformly by a factor 's', the object's proportions are maintained.

**Mathematical Principle:**
If $$(x', y', z')$$ is the new position of $$(x, y, z)$$ after uniform scaling by 's':
$$
x' = s \cdot x \\
y' = s \cdot y \\
z' = s \cdot z
$$

#### Non-Uniform Scaling:

When scaling non-uniformly, we use different scale factors for each axis ($$sx, sy, sz$$).

**Mathematical Principle:**
If $$(x', y', z')$$ is the new position of $$(x, y, z)$$ after non-uniform scaling by $$(sx, sy, sz)$$ :
$$
x' = sx \cdot x \\
y' = sy \cdot y \\
z' = sz \cdot z
$$

**Example:**
Scale the point $$(2, 3, 4)$$ non-uniformly by factors $$(2, 0.5, 1)$$.
$$
x' = 2 \cdot 2 = 4 \\
y' = 0.5 \cdot 3 = 1.5 \\
z' = 1 \cdot 4 = 4
$$
The new point is $$(4, 1.5, 4)$$.

## Matrix Representation (Brief Overview)

While the formulas above show the direct application of transformations to points, in computer graphics, these transformations are often represented and applied using **matrices**. This allows for efficient combination of multiple transformations into a single matrix operation.

A point $$(x, y, z, 1)$$ (using homogeneous coordinates) can be transformed by multiplying it with a transformation matrix. For example, a translation matrix looks like:

$$
\begin{pmatrix}
1 & 0 & 0 & tx \\
0 & 1 & 0 & ty \\
0 & 0 & 1 & tz \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

Understanding these fundamental mathematical principles is key to manipulating and rendering 3D objects effectively.

## Supports

- [[skills/creative-media/graphics-media/geometric-transformations/microskills/3d-transformation-principles|3D Transformation Principles]]
