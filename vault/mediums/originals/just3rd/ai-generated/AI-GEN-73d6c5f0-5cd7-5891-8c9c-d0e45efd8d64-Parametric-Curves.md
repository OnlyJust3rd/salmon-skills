---
type: "medium"
title: "Understanding Parametric Curves"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/computer-graphics/curve-modeling/microskills/parametric-curves|parametric-curves]]"
learning-time-in-minutes: 4
---
# Understanding Parametric Curves

Parametric curves are a fundamental concept in curve modeling. They are defined by a set of equations that express the coordinates of the points on the curve as functions of a common independent variable, often called a parameter. This parameter acts like a "time" variable, tracing out the curve as it changes.

## What is a Parametric Curve?

Instead of defining a curve by a relationship between its x and y coordinates (like \(y = f(x)\)), a parametric curve is defined by separate functions for x and y, both depending on a parameter, usually denoted by \(t\).

The general form of a parametric curve in 2D is:

\[
\begin{cases}
x = f(t) \\
y = g(t)
\end{cases}
\]

As the parameter \(t\) varies over a specified range, the point \((x, y)\) traces out the curve.

## Common Types of Parametric Curves

While there are infinitely many possible parametric curves, some types appear frequently in various fields like computer graphics, engineering, and mathematics. For this lesson, we'll focus on remembering their forms and how they are represented.

1.  **Lines:** A straight line can be represented parametrically. If you have two points \((x_1, y_1)\) and \((x_2, y_2)\), a parametric representation is:
    \[
    \begin{cases}
    x = x_1 + t(x_2 - x_1) \\
    y = y_1 + t(y_2 - y_1)
    \end{cases}
    \]
    Here, \(t\) typically ranges from 0 to 1. When \(t=0\), you are at \((x_1, y_1)\); when \(t=1\), you are at \((x_2, y_2)\). Values of \(t\) between 0 and 1 give points along the line segment connecting them.

2.  **Circles:** A circle centered at the origin with radius \(r\) can be represented as:
    \[
    \begin{cases}
    x = r \cos(t) \\
    y = r \sin(t)
    \end{cases}
    \]
    Here, \(t\) typically ranges from \(0\) to \(2\pi\) (or 0 to 360 degrees). As \(t\) increases, the point \((x, y)\) moves counter-clockwise around the circle.

3.  **Bézier Curves:** These are a very important class of parametric curves used extensively in computer graphics for drawing smooth shapes. They are defined by a set of control points.
    *   **Linear Bézier Curve (a line segment):** Defined by two endpoints, \(P_0\) and \(P_1\).
        \[
        B(t) = (1-t)P_0 + tP_1, \quad 0 \le t \le 1
        \]
    *   **Quadratic Bézier Curve:** Defined by three control points: an start point \(P_0\), a control point \(P_1\), and an end point \(P_2\).
        \[
        B(t) = (1-t)^2 P_0 + 2(1-t)t P_1 + t^2 P_2, \quad 0 \le t \le 1
        \]
    *   **Cubic Bézier Curve:** Defined by four control points: \(P_0, P_1, P_2, P_3\).
        \[
        B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t)t^2 P_2 + t^3 P_3, \quad 0 \le t \le 1
        \]
    Bézier curves are versatile because their shape is intuitive to control by moving the control points.

## Practical Scenario

Imagine you are designing a simple animation for a game character. The character's arm moves along a curved path. To define this movement, you could use a parametric curve.

*   If the arm moves in a straight line from point A to point B, you would use a **parametric line segment** representation.
*   If the arm moves in a circular arc, you would use a **parametric circle** segment.
*   If you want a more fluid, natural-looking curved path, you might use a **Bézier curve**, adjusting its control points to get the desired swoop and shape for the arm's motion.

## Practice Task

Identify the type of parametric curve described by each of the following representations. State the typical range for the parameter \(t\).

1.  \[
    \begin{cases}
    x = 5 \cos(t) \\
    y = 5 \sin(t)
    \end{cases}
    \]

2.  \[
    \begin{cases}
    x = 1 + t(7 - 1) \\
    y = 2 + t(4 - 2)
    \end{cases}
    \]

3.  A curve defined by \(B(t) = (1-t)^2 P_0 + 2(1-t)t P_1 + t^2 P_2\).

## Self-Check Questions

1.  What is the main difference between a standard function \(y=f(x)\) and a parametric curve \((x(t), y(t))\)?
2.  If you want to draw a circle using parametric equations, what trigonometric functions are commonly used?
3.  What are Bézier curves primarily used for?
4.  In the parametric representation of a line segment between points \(P_0\) and \(P_1\), what point does the curve represent when \(t=0.5\)?

## Supports

- [[skills/digital-media/computer-graphics/curve-modeling/microskills/parametric-curves|Parametric Curves]]
