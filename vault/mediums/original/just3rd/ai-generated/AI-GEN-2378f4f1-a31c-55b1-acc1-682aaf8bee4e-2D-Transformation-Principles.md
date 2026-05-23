---
type: "medium"
title: "Understanding 2D Transformation Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/computer-graphics/geometric-transformations/microskills/2d-transformation-principles|2d-transformation-principles]]"
learning-time-in-minutes: 4
---
# Understanding 2D Transformation Principles

In the world of 2D graphics, transformations are fundamental. They allow us to move, resize, and rotate shapes. Understanding the mathematical principles behind these transformations is key to manipulating geometric objects effectively. This lesson focuses on the underlying math that makes these common operations possible.

## Why Transformations Matter

Transformations are the building blocks for almost all graphical operations. Whether you're designing a game, creating a user interface, or working with CAD software, you'll be using these principles. By understanding how they work mathematically, you gain precise control over your designs.

## The Coordinate System

Before diving into transformations, let's briefly revisit the 2D Cartesian coordinate system. It uses two perpendicular axes, usually labeled X and Y, to define the position of any point in a plane. A point is represented by an ordered pair $(x, y)$.

## Translation: Moving Objects

Translation is the simplest transformation. It means shifting an object from one position to another without changing its orientation or size.

**Mathematical Principle:**
To translate a point $(x, y)$ by a distance $t_x$ in the X direction and $t_y$ in the Y direction, we simply add these values to the original coordinates:

$$
x' = x + t_x \\
y' = y + t_y
$$

Where $(x', y')$ are the new coordinates after translation.

**Example:**
Let's translate a triangle with vertices A(1, 2), B(4, 3), and C(2, 5) by $t_x = 3$ and $t_y = -2$.

*   **Vertex A:**
    $x' = 1 + 3 = 4$
    $y' = 2 + (-2) = 0$
    New A' is (4, 0).

*   **Vertex B:**
    $x' = 4 + 3 = 7$
    $y' = 3 + (-2) = 1$
    New B' is (7, 1).

*   **Vertex C:**
    $x' = 2 + 3 = 5$
    $y' = 5 + (-2) = 3$
    New C' is (5, 3).

The translated triangle has vertices A'(4, 0), B'(7, 1), and C'(5, 3).

## Scaling: Resizing Objects

Scaling changes the size of an object. It can make an object larger or smaller relative to a reference point (often the origin).

**Mathematical Principle:**
To scale a point $(x, y)$ by factors $s_x$ in the X direction and $s_y$ in the Y direction, we multiply the original coordinates by these factors:

$$
x' = x \times s_x \\
y' = y \times s_y
$$

Where $(x', y')$ are the new coordinates after scaling.

*   If $s_x > 1$ or $s_y > 1$, the object gets larger.
*   If $0 < s_x < 1$ or $0 < s_y < 1$, the object gets smaller.
*   If $s_x = 1$ and $s_y = 1$, the object's size remains unchanged.

**Example:**
Let's scale a rectangle with vertices P(2, 1), Q(5, 1), R(5, 3), and S(2, 3) by $s_x = 2$ and $s_y = 0.5$.

*   **Vertex P:**
    $x' = 2 \times 2 = 4$
    $y' = 1 \times 0.5 = 0.5$
    New P' is (4, 0.5).

*   **Vertex Q:**
    $x' = 5 \times 2 = 10$
    $y' = 1 \times 0.5 = 0.5$
    New Q' is (10, 0.5).

*   **Vertex R:**
    $x' = 5 \times 2 = 10$
    $y' = 3 \times 0.5 = 1.5$
    New R' is (10, 1.5).

*   **Vertex S:**
    $x' = 2 \times 2 = 4$
    $y' = 3 \times 0.5 = 1.5$
    New S' is (4, 1.5).

The scaled rectangle has vertices P'(4, 0.5), Q'(10, 0.5), R'(10, 1.5), and S'(4, 1.5). Notice how it stretched horizontally and compressed vertically.

## Rotation: Turning Objects

Rotation turns an object around a fixed point, called the center of rotation. By default, this is often the origin (0,0).

**Mathematical Principle:**
Rotating a point $(x, y)$ counter-clockwise around the origin by an angle $\theta$ results in new coordinates $(x', y')$ given by the following formulas:

$$
x' = x \cos(\theta) - y \sin(\theta) \\
y' = x \sin(\theta) + y \cos(\theta)
$$

*   If $\theta$ is positive, it's a counter-clockwise rotation.
*   If $\theta$ is negative, it's a clockwise rotation.
*   The angle $\theta$ is typically measured in radians or degrees.

**Example:**
Let's rotate a point D(3, 1) by 90 degrees ($\theta = \frac{\pi}{2}$ radians or 90 degrees) counter-clockwise around the origin.
We know that $\cos(90^\circ) = 0$ and $\sin(90^\circ) = 1$.

*   **Point D:**
    $x' = 3 \cos(90^\circ) - 1 \sin(90^\circ) = 3(0) - 1(1) = -1$
    $y' = 3 \sin(90^\circ) + 1 \cos(90^\circ) = 3(1) + 1(0) = 3$
    The new point D' is (-1, 3).

**Key Takeaways:**

*   **Translation:** Add shift values ($t_x, t_y$).
*   **Scaling:** Multiply by scale factors ($s_x, s_y$).
*   **Rotation:** Uses trigonometric functions (sine and cosine) to calculate new coordinates based on an angle.

Mastering these fundamental mathematical principles will give you a strong foundation for more complex geometric operations.

## Supports

- [[skills/digital-media/computer-graphics/geometric-transformations/microskills/2d-transformation-principles|2D Transformation Principles]]
