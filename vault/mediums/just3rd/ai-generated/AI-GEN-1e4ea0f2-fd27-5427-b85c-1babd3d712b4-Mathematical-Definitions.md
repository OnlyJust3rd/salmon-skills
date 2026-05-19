---
type: "medium"
title: "Mathematical Definitions of Geometric Primitives"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/geometric-representation/microskills/mathematical-definitions|Mathematical Definitions]]"
---
# Mathematical Definitions of Geometric Primitives

In computer graphics, we build complex shapes from simpler building blocks. These basic building blocks are called **geometric primitives**. Understanding their mathematical definitions is crucial for accurately representing and manipulating them. This lesson focuses on recalling these fundamental definitions.

## What are Geometric Primitives?

Geometric primitives are the simplest forms that can be defined mathematically and rendered on a screen. Think of them as the "atoms" of visual information. In the context of computer graphics, the most common primitives are:

*   **Points**
*   **Lines**
*   **Polygons**

Let's dive into their mathematical definitions.

## 1. Points

A **point** is the most fundamental geometric primitive. Mathematically, it represents a specific location in space. It has no dimension (length, width, or height).

### Definition

In a 2D Cartesian coordinate system, a point is defined by an ordered pair of numbers $(x, y)$, where:

*   $x$ represents the horizontal position (distance from the y-axis).
*   $y$ represents the vertical position (distance from the x-axis).

In a 3D Cartesian coordinate system, a point is defined by an ordered triplet of numbers $(x, y, z)$, where:

*   $x$ represents the horizontal position.
*   $y$ represents the depth position.
*   $z$ represents the vertical position.

### Examples

*   In 2D: The point $(3, 5)$ is located 3 units to the right of the origin and 5 units up.
*   In 3D: The point $(1, -2, 4)$ is located 1 unit along the x-axis, 2 units back along the y-axis, and 4 units up along the z-axis.

## 2. Lines

A **line** is a one-dimensional primitive that extends infinitely in both directions. In computer graphics, we are often interested in **line segments**, which are finite portions of a line defined by two distinct endpoints.

### Definition

A line can be defined in several ways, but for computer graphics, defining it by its endpoints is common.

#### Using Two Points (Line Segment)

A line segment in 2D is defined by two distinct points, $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$. Every point on the line segment between $P_1$ and $P_2$ can be expressed as a linear interpolation between these two points:

$$
P(t) = P_1 + t(P_2 - P_1)
$$

where $t$ is a parameter that ranges from 0 to 1.

*   When $t=0$, $P(0) = P_1$ (the starting point).
*   When $t=1$, $P(1) = P_2$ (the ending point).
*   For $0 < t < 1$, $P(t)$ represents a point on the segment between $P_1$ and $P_2$.

In terms of coordinates:
$$
x(t) = x_1 + t(x_2 - x_1) \\
y(t) = y_1 + t(y_2 - y_1)
$$

A line (infinite) can be defined by an equation, such as the slope-intercept form ($y = mx + c$) or the general form ($Ax + By + C = 0$).

### Examples

*   **Line Segment:** A line segment connecting point A $(1, 2)$ and point B $(5, 8)$.
    *   For $t=0.5$, the point on the segment is $(1 + 0.5(5-1), 2 + 0.5(8-2)) = (1 + 0.5(4), 2 + 0.5(6)) = (1+2, 2+3) = (3, 5)$.

## 3. Polygons

A **polygon** is a two-dimensional primitive that forms a closed shape defined by a sequence of connected line segments. The line segments are called **edges**, and the points where the edges meet are called **vertices**.

### Definition

A polygon is defined by an ordered list of its vertices. For a simple polygon (one that does not intersect itself), these vertices define the boundary of the shape.

In 2D, a polygon is specified by a sequence of vertices $V_1, V_2, V_3, \dots, V_n$, where each $V_i = (x_i, y_i)$. The edges are the line segments connecting $V_1$ to $V_2$, $V_2$ to $V_3$, ..., $V_{n-1}$ to $V_n$, and finally $V_n$ back to $V_1$ to close the shape.

### Types of Polygons

*   **Triangle:** A polygon with 3 vertices (and 3 edges). For example, vertices A(0,0), B(3,0), C(1,2).
*   **Quadrilateral:** A polygon with 4 vertices. Examples include squares, rectangles, and parallelograms.
*   **Pentagon:** A polygon with 5 vertices.
*   **Hexagon:** A polygon with 6 vertices.
*   And so on...

### Examples

*   **Triangle:** Vertices at (0,0), (5,0), and (2,3). This defines a closed shape with three sides.
*   **Rectangle:** Vertices at (1,1), (4,1), (4,3), and (1,3). This defines a rectangle with width 3 and height 2.

## Recap

To summarize, recalling the mathematical definitions of these basic geometric primitives is fundamental:

| Primitive | Dimensionality | Mathematical Definition                                     | Key Concept                                             |
| :-------- | :------------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **Point** | 0D             | $(x, y)$ or $(x, y, z)$                                   | A specific location in space.                           |
| **Line**  | 1D             | Defined by two points $(x_1, y_1), (x_2, y_2)$ (segment) | A straight path extending infinitely or between two points. |
| **Polygon**| 2D             | Ordered sequence of vertices $V_1, V_2, \dots, V_n$       | A closed shape made of connected line segments.         |

## Supports

- [[skills/creative-media/graphics-media/geometric-representation/microskills/mathematical-definitions|Mathematical Definitions]]
