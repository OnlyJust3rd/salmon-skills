---
type: "medium"
title: "Parametric Curve Definition"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/curve-modeling/microskills/parametric-curve-definition|Parametric Curve Definition]]"
---
# Parametric Curve Definition

Curves can be a bit tricky to describe with a single equation like \(y = f(x)\). Think about a circle: \(x^2 + y^2 = r^2\). While this works, it doesn't easily tell you how to trace the circle point by point as you move along it. Parametric representation offers a more flexible way to define curves, especially for computer graphics and design.

## What is Parametric Representation?

Instead of relating \(y\) directly to \(x\), parametric representation uses a third variable, often called a **parameter** (commonly denoted by \(t\)), to define both \(x\) and \(y\) independently.

We express the coordinates of any point on the curve as functions of this parameter:

\[
x = x(t)
\]

\[
y = y(t)
\]

As the parameter \(t\) changes over a specified range, the point \((x(t), y(t))\) traces out the curve. This is like having a "time" parameter that dictates where the curve is at any given moment.

## Why Use Parametric Representation?

*   **Direction and Speed:** The parameter \(t\) can represent time. As \(t\) increases, the point \((x(t), y(t))\) moves along the curve. This allows us to control the direction and speed of traversal.
*   **Complex Shapes:** It's much easier to describe complex paths, loops, and curves that might not pass the vertical line test (where \(y\) is a single-valued function of \(x\)). Think of a car driving on a winding road – its position over time is a perfect parametric example.
*   **Higher Dimensions:** The concept easily extends to 3D (and beyond) by adding a \(z(t)\) component.

## Practical Example: The Circle

Let's redefine the circle using a parametric approach. We know that for a circle of radius \(r\) centered at the origin, we can use trigonometric functions.

Let our parameter be \(t\), representing an angle in radians.

\[
x(t) = r \cos(t)
\]

\[
y(t) = r \sin(t)
\]

If we let \(t\) range from \(0\) to \(2\pi\), the point \((x(t), y(t))\) will trace out a complete circle starting from \((r, 0)\) and moving counter-clockwise.

*   When \(t = 0\): \((r \cos(0), r \sin(0)) = (r, 0)\)
*   When \(t = \pi/2\): \((r \cos(\pi/2), r \sin(\pi/2)) = (0, r)\)
*   When \(t = \pi\): \((r \cos(\pi), r \sin(\pi)) = (-r, 0)\)
*   When \(t = 2\pi\): \((r \cos(2\pi), r \sin(2\pi)) = (r, 0)\)

This parametric form clearly shows how to generate points on the circle sequentially.

## Practice Task

Imagine you are designing a path for a robot in a factory. The robot needs to move from a starting point, follow a curve, and end at a specific location.

Consider a simple parabolic path. A parabola can be represented parametrically. Let's define a simple parabola opening upwards.

Define a parametric representation for a parabola of the form \(y = x^2\).

Hint: What if we let our parameter \(t\) be equal to \(x\)?

## Self-Check Questions

1.  In a parametric representation \(x = x(t)\) and \(y = y(t)\), what does the parameter \(t\) typically represent?
2.  Describe one advantage of using parametric curves over standard function definitions like \(y = f(x)\) when modeling curves.
3.  If a curve is defined by \(x(t) = t^2\) and \(y(t) = t^4\) for \(t \in \mathbb{R}\), what is the Cartesian equation (\(y\) in terms of \(x\)) for this curve?

## Supports

- [[skills/creative-media/graphics-media/curve-modeling/microskills/parametric-curve-definition|Parametric Curve Definition]]
