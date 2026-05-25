---
type: "medium"
title: "2D Geometric Representation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/geometric-representation/microskills/2d-geometric-representation|2d-geometric-representation]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/geometric-representation/geometric-representation|geometric-representation]]"
learning-time-in-minutes: 3
---
# 2D Geometric Representation

In the world of computer graphics, game development, and even basic geometry, we need ways to describe shapes precisely. This lesson focuses on understanding how we mathematically represent fundamental geometric shapes, called primitives, in a two-dimensional (2D) space. This is a key step in understanding the broader concept of mathematical representations of geometric primitives.

## What are Geometric Primitives?

Geometric primitives are the simplest building blocks of geometry. In 2D, the most common primitives include:

*   **Points:** A location in space.
*   **Lines:** A straight path between two points.
*   **Line Segments:** A portion of a line with defined endpoints.
*   **Polygons:** Closed shapes formed by connecting line segments (e.g., triangles, squares, circles).

## Mathematical Representation in 2D

To represent these primitives mathematically, we use coordinate systems. The most common is the **Cartesian coordinate system**.

### The Cartesian Coordinate System

In a 2D Cartesian system, any point is defined by an ordered pair of numbers, $(x, y)$.

*   The **x-axis** is the horizontal axis.
*   The **y-axis** is the vertical axis.
*   The point where the axes intersect is called the **origin**, represented as $(0, 0)$.

Every point in the 2D plane can be uniquely identified by its x and y coordinates.

### Representing Primitives Mathematically

Let's see how our primitives are represented using coordinates:

#### 1. Points

A point in 2D is simply represented by its coordinates:

$$ P = (x, y) $$

**Example:** The point P with coordinates $(3, 5)$ is located 3 units to the right of the origin and 5 units up from the origin.

#### 2. Lines and Line Segments

A line can be represented by an equation. The most common form is the **slope-intercept form**:

$$ y = mx + c $$

Where:
*   $m$ is the **slope** of the line (how steep it is).
*   $c$ is the **y-intercept** (where the line crosses the y-axis).

A **line segment** is defined by two endpoints. If the endpoints are $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$, the line segment is the set of all points between $P_1$ and $P_2$.

**Example:** The line $y = 2x + 1$ has a slope of 2 and crosses the y-axis at 1. A line segment between point A $(1, 3)$ and point B $(4, 9)$ includes all points on the line $y = 2x + 1$ where $x$ is between 1 and 4 (inclusive).

#### 3. Circles

A circle is defined by its center and its radius. The standard equation for a circle with center $(h, k)$ and radius $r$ is:

$$ (x - h)^2 + (y - k)^2 = r^2 $$

**Example:** A circle centered at $(2, -3)$ with a radius of 5 has the equation:
$$ (x - 2)^2 + (y - (-3))^2 = 5^2 $$
$$ (x - 2)^2 + (y + 3)^2 = 25 $$
Any point $(x, y)$ that satisfies this equation lies on the circle.

#### 4. Polygons

Polygons are represented by a sequence of their vertices (corner points) in order. For example, a triangle with vertices $P_1 = (x_1, y_1)$, $P_2 = (x_2, y_2)$, and $P_3 = (x_3, y_3)$ is defined by these three points.

**Example:** A square with vertices at $(0, 0)$, $(1, 0)$, $(1, 1)$, and $(0, 1)$ is defined by this ordered list of points.

## Key Concepts to Understand

*   **Coordinate System:** A framework for specifying points in space using numbers.
*   **Equation:** A mathematical statement that describes the relationship between coordinates for all points on a shape.
*   **Parameters:** Values within an equation that define a specific shape (e.g., radius of a circle, slope of a line).

By understanding these mathematical representations, we lay the groundwork for how computers can store, manipulate, and render geometric shapes in various applications.

## Supports

- [[skills/digital-media/computer-graphics/geometric-representation/microskills/2d-geometric-representation|2D Geometric Representation]]
