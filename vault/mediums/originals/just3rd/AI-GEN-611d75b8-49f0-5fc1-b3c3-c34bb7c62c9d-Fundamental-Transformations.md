---
type: "medium"
title: "Fundamental Geometric Transformations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/geometric-transformations/microskills/fundamental-transformations|fundamental-transformations]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/geometric-transformations/geometric-transformations|geometric-transformations]]"
learning-time-in-minutes: 3
---
# Fundamental Geometric Transformations

This lesson focuses on identifying and defining the core geometric transformations: translation, scaling, and rotation. Understanding these basic building blocks is essential for working with geometric shapes and understanding how they can be manipulated in two and three dimensions.

## What are Geometric Transformations?

Geometric transformations are operations that move, resize, or rotate a geometric object. Think of them as ways to change the position, size, or orientation of a shape without changing its fundamental form or proportions.

### Translation

**Definition:** A translation is a geometric transformation that moves every point of a figure or a space by the same distance in a given direction. It's like sliding an object without rotating or resizing it.

**Key Idea:** Every point on the object is shifted by the same vector.

**Example:**
Imagine a square with corners at coordinates (0,0), (1,0), (1,1), and (0,1). If we translate this square 2 units to the right and 3 units up, the new coordinates of the corners will be (2,3), (3,3), (3,4), and (2,4). The shape and size of the square remain the same; only its position has changed.

**In simpler terms:** Shifting.

### Scaling

**Definition:** Scaling is a geometric transformation that changes the size of an object. It can make an object larger (enlargement) or smaller (reduction). The object is either expanded or contracted from a fixed point called the center of scaling.

**Key Idea:** Distances from the center of scaling are multiplied by a scaling factor. If the scaling factor is greater than 1, the object gets larger. If it's between 0 and 1, the object gets smaller.

**Example:**
Consider a triangle with vertices at (1,1), (3,1), and (2,3). If we scale this triangle by a factor of 2 from the origin (0,0), the new vertices will be (2,2), (6,2), and (4,6). The triangle has doubled in size. If we scaled it by a factor of 0.5, the new vertices would be (0.5, 0.5), (1.5, 0.5), and (1, 1.5), making it half its original size.

**In simpler terms:** Resizing.

### Rotation

**Definition:** A rotation is a geometric transformation that turns an object around a fixed point called the center of rotation. The object is turned by a specific angle in a specific direction (clockwise or counterclockwise).

**Key Idea:** Points on the object move along circular arcs around the center of rotation. The angle of rotation determines how much the object turns.

**Example:**
Picture a letter 'L' positioned in the first quadrant of a coordinate plane. If we rotate this 'L' by 90 degrees counterclockwise around the origin (0,0), its orientation will change. The parts of the 'L' that were pointing upwards and to the right will now point upwards and to the left, relative to its new position.

**In simpler terms:** Turning.

## Summary Table

Here's a quick reference for these fundamental transformations:

| Transformation | What it does | Key Action |
|---|---|---|
| **Translation** | Moves an object. | Shifts all points equally. |
| **Scaling** | Changes the size of an object. | Enlarges or reduces the object from a center point. |
| **Rotation** | Turns an object. | Revolves the object around a fixed point. |

Understanding these three basic transformations provides the foundation for more complex geometric manipulations and is crucial in fields like computer graphics, engineering, and design.

## Supports

- [[skills/digital-media/computer-graphics/geometric-transformations/microskills/fundamental-transformations|Fundamental Transformations]]
