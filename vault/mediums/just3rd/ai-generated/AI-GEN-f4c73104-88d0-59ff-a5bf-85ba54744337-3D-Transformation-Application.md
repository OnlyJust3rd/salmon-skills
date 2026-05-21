---
type: "medium"
title: "Applying 3D Transformations: Translation, Scaling, and Rotation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/geometric-transformations/microskills/3d-transformation-application|3d-transformation-application]]"
---
# Applying 3D Transformations: Translation, Scaling, and Rotation

This lesson focuses on the practical application of translation, scaling, and rotation to simple 3D geometric objects. Understanding these transformations is fundamental to manipulating objects in 3D space, which is crucial in fields like computer graphics, game development, and CAD.

## Understanding 3D Transformations

In 3D space, points and objects are represented using three coordinates: (x, y, z). Transformations allow us to change an object's position, size, or orientation without altering its intrinsic shape.

### Translation

Translation moves an object from one point to another without changing its orientation or size. In 3D, this involves adding a displacement vector to each vertex of the object.

**Mathematical Representation:**
If a point $P = (x, y, z)$ is translated by a vector $T = (t_x, t_y, t_z)$, the new point $P'$ is given by:
$$ P' = P + T = (x + t_x, y + t_y, z + t_z) $$

**Example:**
Consider a simple cube with vertices at:
*   (0,0,0)
*   (1,0,0)
*   (1,1,0)
*   (0,1,0)
*   (0,0,1)
*   (1,0,1)
*   (1,1,1)
*   (0,1,1)

If we want to translate this cube by the vector $T = (2, 3, -1)$, each vertex will be shifted. For instance, the vertex (0,0,0) will move to (0+2, 0+3, 0-1) = (2,3,-1). The entire cube will now be located in a new position in 3D space.

### Scaling

Scaling changes the size of an object. It can make an object larger or smaller. Scaling can be uniform (all dimensions scaled by the same factor) or non-uniform (each dimension scaled by a different factor). Scaling is typically performed relative to an origin.

**Mathematical Representation:**
If a point $P = (x, y, z)$ is scaled by factors $s_x, s_y, s_z$ relative to the origin, the new point $P'$ is given by:
$$ P' = (s_x \cdot x, s_y \cdot y, s_z \cdot z) $$

**Example:**
Let's scale the same cube. If we want to double its size in all directions (uniform scaling), we use a scaling factor of 2 for each axis: $S = (2, 2, 2)$.
The vertex (1,1,1) would become $(2 \cdot 1, 2 \cdot 1, 2 \cdot 1) = (2,2,2)$.
If we wanted to stretch it only along the x-axis, we could use $S = (3, 1, 1)$, making the cube three times longer in the x-direction while keeping its height and depth the same.

### Rotation

Rotation changes the orientation of an object. In 3D, rotation is more complex than in 2D because you need to specify an axis of rotation and an angle. Common rotation axes are the x-axis, y-axis, and z-axis.

**Mathematical Representation (Rotation around Z-axis):**
Rotating a point $P = (x, y, z)$ by an angle $\theta$ around the z-axis results in a new point $P' = (x', y', z')$. The z-coordinate remains unchanged, while x and y are transformed similarly to 2D rotation:
$$ x' = x \cos(\theta) - y \sin(\theta) $$
$$ y' = x \sin(\theta) + y \cos(\theta) $$
$$ z' = z $$

**Mathematical Representation (Rotation around X-axis):**
Rotating a point $P = (x, y, z)$ by an angle $\theta$ around the x-axis:
$$ x' = x $$
$$ y' = y \cos(\theta) - z \sin(\theta) $$
$$ z' = y \sin(\theta) + z \cos(\theta) $$

**Mathematical Representation (Rotation around Y-axis):**
Rotating a point $P = (x, y, z)$ by an angle $\theta$ around the y-axis:
$$ x' = x \cos(\theta) + z \sin(\theta) $$
$$ y' = y $$
$$ z' = -x \sin(\theta) + z \cos(\theta) $$

**Example:**
Let's rotate a point $(1, 0, 0)$ by 90 degrees ( $\theta = \pi/2$ radians or 90 degrees) around the z-axis.
Using the z-axis rotation formulas:
$$ x' = 1 \cos(90^\circ) - 0 \sin(90^\circ) = 1 \cdot 0 - 0 \cdot 1 = 0 $$
$$ y' = 1 \sin(90^\circ) + 0 \cos(90^\circ) = 1 \cdot 1 + 0 \cdot 0 = 1 $$
$$ z' = 0 $$
The new point is $(0, 1, 0)$. This makes sense: a point on the positive x-axis rotated 90 degrees counter-clockwise around the z-axis moves to the positive y-axis.

## Applying Transformations to Simple 3D Objects

To transform a simple 3D object like a cube, pyramid, or sphere, you apply the chosen transformation to each of its defining vertices.

**Step-by-Step Application (Example: Translating a Pyramid):**

1.  **Define the Object:** Identify the vertices of the simple 3D object. For a square pyramid with its apex at (0, 0, 2) and a base in the xy-plane with vertices at (1, 1, 0), (-1, 1, 0), (-1, -1, 0), and (1, -1, 0).

2.  **Choose the Transformation:** Decide on the type of transformation (translation, scaling, rotation) and its parameters. Let's choose to translate the pyramid by a vector $T = (5, -2, 3)$.

3.  **Apply to Each Vertex:** Add the translation vector to each vertex's coordinates.
    *   Apex (0, 0, 2) becomes (0+5, 0-2, 2+3) = (5, -2, 5).
    *   Base vertex (1, 1, 0) becomes (1+5, 1-2, 0+3) = (6, -1, 3).
    *   Base vertex (-1, 1, 0) becomes (-1+5, 1-2, 0+3) = (4, -1, 3).
    *   Base vertex (-1, -1, 0) becomes (-1+5, -1-2, 0+3) = (4, -3, 3).
    *   Base vertex (1, -1, 0) becomes (1+5, -1-2, 0+3) = (6, -3, 3).

4.  **Visualize/Represent the Result:** The new set of vertices defines the translated pyramid.

**Combining Transformations:**
Transformations can be applied sequentially. For example, you might scale an object, then rotate it, and finally translate it. The order of operations matters.

## Key Considerations

*   **Origin of Transformation:** For scaling and rotation, the point around which the transformation occurs is critical. By default, it's often the origin (0,0,0), but it can be any point.
*   **Order of Operations:** Applying a rotation then a translation is generally different from applying a translation then a rotation.
*   **Matrix Representation:** In practical applications (like computer graphics), these transformations are often represented using matrices, which allows for efficient combination and application of multiple transformations.

By mastering these basic 3D transformations, you gain the ability to effectively manipulate and position objects within a 3D environment.

## Supports

- [[skills/creative-media/graphics-media/geometric-transformations/microskills/3d-transformation-application|3D Transformation Application]]
