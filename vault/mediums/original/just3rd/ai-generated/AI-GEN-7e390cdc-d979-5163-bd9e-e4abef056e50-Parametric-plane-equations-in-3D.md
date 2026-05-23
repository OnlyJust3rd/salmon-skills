---
type: "medium"
title: "Parametric Plane Equations in 3D"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/geometry/geometric-formulation/microskills/parametric-plane-equations-in-3d|parametric-plane-equations-in-3d]]"
learning-time-in-minutes: 4
---
# Parametric Plane Equations in 3D

This lesson focuses on understanding and formulating parametric equations for planes in three-dimensional space. This is a fundamental skill within geometric formulation, enabling us to represent and work with planes mathematically.

## What is a Plane?

In 3D space, a plane is a flat, two-dimensional surface that extends infinitely. Think of it as an infinitely large sheet of paper.

## Representing a Plane Parametrically

To define a plane using parametric equations, we need a **point on the plane** and **two non-parallel direction vectors** that lie within the plane.

Let:
*   $P_0 = (x_0, y_0, z_0)$ be a known point on the plane.
*   $\vec{u} = \langle u_1, u_2, u_3 \rangle$ be a direction vector lying in the plane.
*   $\vec{v} = \langle v_1, v_2, v_3 \rangle$ be another direction vector lying in the plane, **not parallel** to $\vec{u}$.

Any point $P = (x, y, z)$ on the plane can be reached by starting at $P_0$ and moving some distance along $\vec{u}$ and some distance along $\vec{v}$. We can express this using scalar parameters, say $s$ and $t$.

The parametric equations for the plane are:

$$
\begin{aligned}
x &= x_0 + s u_1 + t v_1 \\
y &= y_0 + s u_2 + t v_2 \\
z &= z_0 + s u_3 + t v_3
\end{aligned}
$$

where $s$ and $t$ are any real numbers. By varying $s$ and $t$, we can generate every point on the plane.

### Why two direction vectors?

A single direction vector from a point defines a line. To define a plane, we need to span two independent directions from a starting point. These two vectors, $\vec{u}$ and $\vec{v}$, provide these independent directions. They must not be parallel, otherwise they would define the same direction, effectively reducing the plane to a line.

## Example: Formulating Parametric Plane Equations

Let's formulate the parametric equations for a plane that passes through the point $P_0 = (1, 2, 3)$ and has direction vectors $\vec{u} = \langle 2, -1, 0 \rangle$ and $\vec{v} = \langle 0, 3, 1 \rangle$.

Here, we have:
*   $(x_0, y_0, z_0) = (1, 2, 3)$
*   $\vec{u} = \langle u_1, u_2, u_3 \rangle = \langle 2, -1, 0 \rangle$
*   $\vec{v} = \langle v_1, v_2, v_3 \rangle = \langle 0, 3, 1 \rangle$

Plugging these values into the parametric equations:

$$
\begin{aligned}
x &= 1 + s(2) + t(0) \\
y &= 2 + s(-1) + t(3) \\
z &= 3 + s(0) + t(1)
\end{aligned}
$$

Simplifying, we get the parametric equations for the plane:

$$
\begin{aligned}
x &= 1 + 2s \\
y &= 2 - s + 3t \\
z &= 3 + t
\end{aligned}
$$

Any point on this plane can be found by choosing specific values for $s$ and $t$.

For instance, if $s=1$ and $t=2$:
$x = 1 + 2(1) = 3$
$y = 2 - 1 + 3(2) = 2 - 1 + 6 = 7$
$z = 3 + 2 = 5$
So, the point $(3, 7, 5)$ lies on this plane.

## How to find the direction vectors?

Often, you won't be directly given the direction vectors. You might be given:

1.  **Three non-collinear points** on the plane: Let these points be $A$, $B$, and $C$. You can form two direction vectors by taking the difference between pairs of these points, e.g., $\vec{u} = \vec{AB} = B - A$ and $\vec{v} = \vec{AC} = C - A$.

    **Example:** Plane passes through $A=(0,0,0)$, $B=(1,0,0)$, and $C=(0,1,0)$.
    *   $P_0 = A = (0,0,0)$
    *   $\vec{u} = B - A = \langle 1-0, 0-0, 0-0 \rangle = \langle 1, 0, 0 \rangle$
    *   $\vec{v} = C - A = \langle 0-0, 1-0, 0-0 \rangle = \langle 0, 1, 0 \rangle$

    The parametric equations are:
    $$
    \begin{aligned}
    x &= 0 + s(1) + t(0) \Rightarrow x = s \\
    y &= 0 + s(0) + t(1) \Rightarrow y = t \\
    z &= 0 + s(0) + t(0) \Rightarrow z = 0
    \end{aligned}
    $$
    This describes the $xy$-plane, as expected.

2.  **A point and a normal vector**: If you are given a point $P_0$ and a normal vector $\vec{n} = \langle a, b, c \rangle$ (a vector perpendicular to the plane), you can find two non-parallel vectors $\vec{u}$ and $\vec{v}$ that lie in the plane by ensuring their dot product with $\vec{n}$ is zero. For example, you can often find such vectors by inspection or by using cross products with other non-parallel vectors. A common way to find $\vec{u}$ and $\vec{v}$ from $\vec{n}$ is to pick arbitrary values for two components and solve for the third, ensuring the resulting vector is not zero and not parallel to other vectors you might derive. A more direct approach involves using the properties of vectors in the plane relative to the normal.

## Key Takeaways

*   Parametric equations for a plane require a point on the plane and two non-parallel direction vectors within the plane.
*   The parameters $s$ and $t$ allow you to "scale" and combine these direction vectors from the starting point to reach any point on the plane.
*   Understanding how to derive the direction vectors from given information (like three points) is crucial for applying this concept.

## Supports

- [[skills/mathematics/geometry/geometric-formulation/microskills/parametric-plane-equations-in-3d|Parametric plane equations in 3D]]
