---
type: "medium"
title: "3D Geometric Representation: Understanding Mathematical Models"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/computer-graphics/geometric-representation/microskills/3d-geometric-representation|3d-geometric-representation]]"
learning-time-in-minutes: 4
---
# 3D Geometric Representation: Understanding Mathematical Models

In the realm of **Geometric Representation**, we're exploring how shapes are described using mathematics. Previously, we might have focused on 2D, but now we're stepping into three dimensions. This lesson focuses on understanding how geometric primitives – the basic building blocks of shapes – are mathematically represented in **3D space**.

## What are Geometric Primitives in 3D?

Just like a line is a primitive in 2D, in 3D, our basic building blocks are:

*   **Points**: A single location defined by three coordinates.
*   **Lines (or Line Segments)**: A straight path between two points.
*   **Planes**: A flat, two-dimensional surface that extends infinitely.
*   **Basic Shapes**: Like spheres, cubes, cylinders, and cones.

## Representing 3D Primitives Mathematically

The core idea is to use **coordinate systems** and **mathematical equations** to precisely define these primitives. The most common system in 3D is the **Cartesian coordinate system**, using $(x, y, z)$ coordinates.

### 1. Points

A point in 3D space is simply its $(x, y, z)$ coordinates.

**Example:**
A point $P$ could be represented as $P(2, 3, 5)$. This means it is 2 units along the x-axis, 3 units along the y-axis, and 5 units along the z-axis.

### 2. Lines

A line in 3D can be represented in a few ways, but a common one is using a **parametric equation**. This requires a starting point and a direction vector.

Let $P_0 = (x_0, y_0, z_0)$ be a point on the line, and let $\mathbf{v} = (a, b, c)$ be the direction vector of the line. Any point $P(x, y, z)$ on the line can be represented as:

$$
P(t) = P_0 + t\mathbf{v}
$$

Where $t$ is a scalar parameter. Expanding this into coordinates:

$$
\begin{aligned}
x &= x_0 + ta \\
y &= y_0 + tb \\
z &= z_0 + tc
\end{aligned}
$$

*   **Understanding the Parameter `t`**:
    *   When $t=0$, you get the starting point $P_0$.
    *   As $t$ changes, you move along the line in the direction of $\mathbf{v}$.
    *   Positive values of $t$ move in one direction from $P_0$, and negative values move in the opposite direction.
    *   If you are representing a line *segment*, you would restrict the range of $t$ (e.g., $0 \le t \le 1$).

**Example:**
Consider a line passing through $P_0(1, 2, 3)$ with a direction vector $\mathbf{v} = (4, 5, 6)$.
The parametric equations are:
$x = 1 + 4t$
$y = 2 + 5t$
$z = 3 + 6t$

If $t=1$, the point is $(1+4, 2+5, 3+6) = (5, 7, 9)$. This point is also on the line.

### 3. Planes

A plane in 3D can be defined by a point on the plane and a **normal vector** (a vector perpendicular to the plane).

Let $P_0 = (x_0, y_0, z_0)$ be a point on the plane, and let $\mathbf{n} = (A, B, C)$ be the normal vector. For any point $P(x, y, z)$ on the plane, the vector from $P_0$ to $P$, which is $(x-x_0, y-y_0, z-z_0)$, must be perpendicular to the normal vector $\mathbf{n}$.

The dot product of perpendicular vectors is zero:

$$
\mathbf{n} \cdot (P - P_0) = 0
$$

Expanding this:

$$
A(x - x_0) + B(y - y_0) + C(z - z_0) = 0
$$

This can be rewritten into the standard form of a plane equation:

$$
Ax + By + Cz + D = 0
$$

Where $D = -(Ax_0 + By_0 + Cz_0)$.

**Example:**
Find the equation of a plane passing through $P_0(1, 2, 3)$ with a normal vector $\mathbf{n} = (4, 5, 6)$.
Using the formula $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$:
$4(x - 1) + 5(y - 2) + 6(z - 3) = 0$
$4x - 4 + 5y - 10 + 6z - 18 = 0$
$4x + 5y + 6z - 32 = 0$

This is the equation of the plane. Any point $(x, y, z)$ that satisfies this equation lies on this plane.

### 4. Basic 3D Shapes

More complex shapes are built from these primitives or defined by their own specific equations.

*   **Sphere**: Defined by a center point $(x_c, y_c, z_c)$ and a radius $r$. The equation for a sphere is:
    $$
    (x - x_c)^2 + (y - y_c)^2 + (z - z_c)^2 = r^2
    $$

*   **Cube**: Can be defined by the coordinates of one corner and its side length, or by the coordinates of opposite corners. For an axis-aligned cube with one corner at the origin $(0,0,0)$ and side length $s$, the points $(x,y,z)$ within the cube satisfy:
    $$
    0 \le x \le s, \quad 0 \le y \le s, \quad 0 \le z \le s
    $$

## Why is this Important?

Understanding these mathematical models is crucial for:

*   **Computer Graphics**: Rendering 3D scenes, animating objects.
*   **3D Modeling Software**: Creating and manipulating shapes.
*   **Engineering and Design**: Simulating physical systems, designing parts.
*   **Robotics**: Path planning for robots in 3D space.

By using these mathematical representations, we can precisely define, locate, and manipulate geometric objects in the digital world, mirroring their properties in the real world.

## Supports

- [[skills/digital-media/computer-graphics/geometric-representation/microskills/3d-geometric-representation|3D Geometric Representation]]
