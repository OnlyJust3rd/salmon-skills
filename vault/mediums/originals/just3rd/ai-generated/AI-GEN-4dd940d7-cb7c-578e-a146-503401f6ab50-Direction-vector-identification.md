---
type: "medium"
title: "Identifying Direction Vectors in 3D Geometric Equations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/geometry/geometric-formulation/microskills/direction-vector-identification|direction-vector-identification]]"
learning-time-in-minutes: 4
---
# Identifying Direction Vectors in 3D Geometric Equations

This lesson focuses on a fundamental skill within 3D geometric formulations: recognizing and extracting direction vectors from various equations. Understanding direction vectors is crucial for defining lines and understanding their orientation in three-dimensional space.

## What is a Direction Vector?

In 3D geometry, a **direction vector** is a vector that indicates the direction and sense of a line. It tells us how a line is "pointing" in space. For a line in 3D, any vector parallel to the line serves as its direction vector.

Consider a line passing through a point $P_0 = (x_0, y_0, z_0)$ and moving in a direction specified by the vector $\mathbf{v} = \langle a, b, c \rangle$. Any point $P = (x, y, z)$ on this line can be reached by starting at $P_0$ and moving some scalar multiple of $\mathbf{v}$.

## Direction Vectors in Parametric Equations of a Line

Parametric equations are a common way to represent lines in 3D. A line can be described by the following parametric equations:

$$
\begin{aligned}
x &= x_0 + at \\
y &= y_0 + bt \\
z &= z_0 + ct
\end{aligned}
$$

Here:
*   $(x_0, y_0, z_0)$ is a known point on the line.
*   $\langle a, b, c \rangle$ is the **direction vector** of the line.
*   $t$ is the parameter, which can be any real number.

When you see equations in this form, the coefficients of the parameter $t$ directly give you the components of the direction vector.

### Example 1: Identifying Direction Vector

Consider the parametric equations of a line:

$$
\begin{aligned}
x &= 2 + 3t \\
y &= -1 + 5t \\
z &= 4 - 2t
\end{aligned}
$$

To identify the direction vector, look at the terms multiplied by $t$:
*   The coefficient of $t$ in the $x$ equation is $3$.
*   The coefficient of $t$ in the $y$ equation is $5$.
*   The coefficient of $t$ in the $z$ equation is $-2$.

Therefore, the direction vector for this line is $\mathbf{v} = \langle 3, 5, -2 \rangle$.

### Example 2: Another Identification

Suppose a line is given by:

$$
\begin{aligned}
x &= 5t \\
y &= 10 - t \\
z &= 7 + 8t
\end{aligned}
$$

Here, the coefficients of $t$ are $5$, $-1$, and $8$.
The direction vector is $\mathbf{v} = \langle 5, -1, 8 \rangle$.

**Note:** If a component of the equation does not explicitly show a term with $t$, it implies the coefficient is 0. For example, if $x = 3 + 0t$, the $x$-component of the direction vector is $0$.

## Direction Vectors from Two Points

If you are given two distinct points on a line, say $P_1 = (x_1, y_1, z_1)$ and $P_2 = (x_2, y_2, z_2)$, you can find a direction vector by calculating the vector from $P_1$ to $P_2$.

The vector $\vec{P_1 P_2}$ is given by:
$$ \vec{P_1 P_2} = \langle x_2 - x_1, y_2 - y_1, z_2 - z_1 \rangle $$
This vector is parallel to the line and can be used as its direction vector.

### Example 3: Direction Vector from Two Points

Find a direction vector for the line passing through $P_1 = (1, 2, 3)$ and $P_2 = (4, -1, 5)$.

Calculate the components of the vector $\vec{P_1 P_2}$:
*   $x$-component: $4 - 1 = 3$
*   $y$-component: $-1 - 2 = -3$
*   $z$-component: $5 - 3 = 2$

So, a direction vector is $\mathbf{v} = \langle 3, -3, 2 \rangle$.

You could also use the vector $\vec{P_2 P_1} = \langle 1 - 4, 2 - (-1), 3 - 5 \rangle = \langle -3, 3, -2 \rangle$. This is also a valid direction vector; it just points in the opposite direction along the same line.

## Key Takeaway

The direction vector of a line in 3D space is a vector that is parallel to the line. In parametric equations of the form $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$, the direction vector is simply $\langle a, b, c \rangle$. If you have two points on the line, you can find a direction vector by subtracting the coordinates of one point from the other.

## Supports

- [[skills/mathematics/geometry/geometric-formulation/microskills/direction-vector-identification|Direction vector identification]]
