---
type: "medium"
title: "Points and Lines: The Building Blocks of Graphics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/computer-graphics/geometric-representation/microskills/points-and-lines|points-and-lines]]"
learning-time-in-minutes: 3
---
# Points and Lines: The Building Blocks of Graphics

In computer graphics, everything you see on your screen is built from very basic geometric shapes. We call these the **geometric primitives**. For this lesson, we'll focus on the most fundamental ones: **points** and **lines**. Understanding these is the first step to representing more complex shapes.

## What is a Point?

A **point** is the most basic geometric entity. It has no size, no length, no width, and no depth. Think of it as an exact location in space.

*   **Definition:** A point is a dimensionless location.
*   **Representation:** In a 2D computer graphics system, a point is usually defined by its coordinates $(x, y)$. The $x$-coordinate tells you how far to move horizontally, and the $y$-coordinate tells you how far to move vertically from an origin point (often the bottom-left or top-left corner of the screen). In 3D graphics, a point would have three coordinates: $(x, y, z)$.

### Example

Imagine a grid on your screen.

*   A point at $(0, 0)$ would be at the origin.
*   A point at $(10, 5)$ would be 10 units to the right and 5 units up from the origin.

## What is a Line?

A **line** is formed by connecting two distinct points. It has length but no width.

*   **Definition:** A line is a straight path between two points that extends infinitely in both directions. In computer graphics, we often work with **line segments**, which are lines with a defined start and end point.
*   **Representation:** A line segment is defined by its two endpoints, let's call them $P_1$ and $P_2$. If $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$, these two points uniquely define the line segment between them.

### How Lines are Used

Lines are used for:

*   Drawing borders around objects.
*   Creating the edges of shapes.
*   Representing pathways or trajectories.

### Types of Lines

While we often draw "straight" lines, there are concepts related to them:

*   **Line Segment:** The portion of a line between two endpoints. This is what's most commonly drawn.
*   **Ray:** A line that starts at one point and extends infinitely in one direction.
*   **Infinite Line:** A line that extends infinitely in both directions.

In practical computer graphics, we almost always deal with **line segments**.

## Identifying Points and Lines

Let's look at some examples to help you identify points and lines.

### Example 1: A Simple Drawing

Imagine a very simple drawing on a piece of graph paper (this is like our 2D coordinate system).

*   If you place your pencil down at a single spot and don't move it, you've created a **point**.
*   If you move your pencil in a straight path from one spot to another, you've drawn a **line segment**.

### Example 2: Coordinates

Consider these sets of coordinates:

*   **(15, 20)**: This represents a single **point** in a 2D space.
*   **Line from (10, 10) to (50, 30)**: This defines a **line segment**. It starts at point (10, 10) and ends at point (50, 30).

## Key Takeaways

*   **Points** are locations with no size. They are defined by coordinates.
*   **Lines** (specifically line segments in graphics) are straight paths connecting two points. They have length.
*   These are the fundamental building blocks for creating any visual representation in computer graphics.

## Supports

- [[skills/digital-media/computer-graphics/geometric-representation/microskills/points-and-lines|Points and Lines]]
