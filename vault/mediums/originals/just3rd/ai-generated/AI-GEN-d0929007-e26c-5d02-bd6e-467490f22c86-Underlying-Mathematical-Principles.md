---
type: "medium"
title: "The Math Behind Moving and Reshaping Shapes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/geometric-transformations/microskills/underlying-mathematical-principles|underlying-mathematical-principles]]"
learning-time-in-minutes: 4
---
# The Math Behind Moving and Reshaping Shapes

In geometric transformations, we often move, resize, or rotate shapes. While we can visualize these changes, understanding the underlying math makes them precise and predictable. This lesson focuses on the mathematical principles that power translation, scaling, and rotation.

## Coordinate Systems: The Foundation

To describe a shape and its transformations mathematically, we need a **coordinate system**. The most common is the Cartesian coordinate system, using \(x\) and \(y\) axes (and \(z\) for 3D). A point's position is defined by its coordinates, like \((x, y)\).

For a geometric object, like a triangle, we can define its vertices by their coordinates. Transforming the object means transforming these individual points.

## Translation: Shifting Without Changing Size or Orientation

Translation is simply sliding an object from one position to another without rotating or resizing it. Mathematically, this is achieved by **adding** a constant value to the coordinates of each point.

Consider a point \(P\) with coordinates \((x, y)\). If we want to translate it by \(tx\) units in the x-direction and \(ty\) units in the y-direction, the new coordinates \((x', y')\) will be:

$$ x' = x + tx $$
$$ y' = y + ty $$

This can be represented as a **translation vector** \( \begin{pmatrix} tx \\ ty \end{pmatrix} \). Applying this vector to a point \((x, y)\) results in \((x+tx, y+ty)\).

**Example:**
Let's translate a triangle with vertices A(1, 2), B(3, 4), and C(2, 5) by the vector \(\begin{pmatrix} 3 \\ -1 \end{pmatrix}\).

*   **Vertex A:**
    *   New x = \(1 + 3 = 4\)
    *   New y = \(2 + (-1) = 1\)
    *   New A' is (4, 1)
*   **Vertex B:**
    *   New x = \(3 + 3 = 6\)
    *   New y = \(4 + (-1) = 3\)
    *   New B' is (6, 3)
*   **Vertex C:**
    *   New x = \(2 + 3 = 5\)
    *   New y = \(5 + (-1) = 4\)
    *   New C' is (5, 4)

The translated triangle has vertices A'(4, 1), B'(6, 3), and C'(5, 4). The shape and size remain identical.

## Scaling: Resizing the Object

Scaling changes the size of an object. It can make an object larger or smaller. Mathematically, this involves **multiplying** the coordinates of each point by a **scaling factor**.

Consider a point \(P\) with coordinates \((x, y)\). If we want to scale it by a factor \(sx\) in the x-direction and \(sy\) in the y-direction, the new coordinates \((x', y')\) will be:

$$ x' = x \times sx $$
$$ y' = y \times sy $$

*   If \(|sx| > 1\) or \(|sy| > 1\), the object is enlarged.
*   If \(0 < |sx| < 1\) or \(0 < |sy| < 1\), the object is shrunk.
*   If \(sx = 1\) and \(sy = 1\), there is no scaling.
*   If \(sx\) or \(sy\) is negative, it also involves a reflection.

Scaling is usually done relative to an **origin point** (often \((0,0)\)).

**Example:**
Let's scale the same triangle with vertices A(1, 2), B(3, 4), and C(2, 5) by a factor of \(sx = 2\) and \(sy = 0.5\).

*   **Vertex A:**
    *   New x = \(1 \times 2 = 2\)
    *   New y = \(2 \times 0.5 = 1\)
    *   New A' is (2, 1)
*   **Vertex B:**
    *   New x = \(3 \times 2 = 6\)
    *   New y = \(4 \times 0.5 = 2\)
    *   New B' is (6, 2)
*   **Vertex C:**
    *   New x = \(2 \times 2 = 4\)
    *   New y = \(5 \times 0.5 = 2.5\)
    *   New C' is (4, 2.5)

The scaled triangle has vertices A'(2, 1), B'(6, 2), and C'(4, 2.5). Notice how it has stretched horizontally and compressed vertically.

## Rotation: Turning the Object

Rotation changes the orientation of an object around a fixed point, called the **center of rotation**. When rotating around the origin \((0,0)\), the mathematical formulas involve **trigonometry**.

Consider a point \(P\) with coordinates \((x, y)\). To rotate it counter-clockwise by an angle \(\theta\) around the origin, the new coordinates \((x', y')\) are:

$$ x' = x \cos(\theta) - y \sin(\theta) $$
$$ y' = x \sin(\theta) + y \cos(\theta) $$

*   \(\cos(\theta)\) and \(\sin(\theta)\) are trigonometric functions.
*   \(\theta\) is usually measured in radians or degrees.
*   A positive angle \(\theta\) typically means counter-clockwise rotation.

**Example:**
Let's rotate point A(1, 2) by 90 degrees counter-clockwise around the origin.
First, convert 90 degrees to radians: \(90^\circ \times \frac{\pi}{180^\circ} = \frac{\pi}{2}\) radians.
So, \(\theta = \frac{\pi}{2}\).
We know that \(\cos(\frac{\pi}{2}) = 0\) and \(\sin(\frac{\pi}{2}) = 1\).

Using the rotation formulas:

*   New x' = \(1 \times 0 - 2 \times 1 = -2\)
*   New y' = \(1 \times 1 + 2 \times 0 = 1\)

The new point A' is (-2, 1).

## Summary of Principles

| Transformation | Mathematical Operation | Key Concept                 |
| :------------- | :--------------------- | :-------------------------- |
| Translation    | Addition of Vectors    | Shifting position           |
| Scaling        | Multiplication by Factor | Changing size               |
| Rotation       | Trigonometric Functions | Changing orientation (angle) |

Understanding these mathematical principles allows us to precisely control how geometric objects are manipulated in various applications, from computer graphics to engineering.

## Supports

- [[skills/digital-media/computer-graphics/geometric-transformations/microskills/underlying-mathematical-principles|Underlying Mathematical Principles]]
