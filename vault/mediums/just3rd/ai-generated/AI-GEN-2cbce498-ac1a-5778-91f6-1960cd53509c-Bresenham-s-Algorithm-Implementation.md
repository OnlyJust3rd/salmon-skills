---
type: "medium"
title: "Implementing Bresenham's Algorithm"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/rasterization-algorithms/microskills/bresenham-s-algorithm-implementation|bresenham-s-algorithm-implementation]]"
---
# Implementing Bresenham's Algorithm

This lesson focuses on the practical implementation of Bresenham's Line Drawing Algorithm. We'll walk through the core logic and provide pseudocode to help you translate it into your preferred programming language for rendering lines on a display.

### The Core Idea: Incremental Decision Making

Bresenham's algorithm is a clever and efficient way to determine which pixels to turn on to form a straight line between two given points on a raster grid. Instead of using floating-point arithmetic for slope calculations at every step (which can be slow and prone to rounding errors), it relies entirely on integer arithmetic.

The algorithm works by incrementally choosing the "best" next pixel based on a decision parameter. At each step, it decides whether to move one unit horizontally and zero units vertically, or zero units horizontally and one unit vertically (or vice-versa, depending on the line's slope and octant). This decision is made by comparing a calculated error term against a threshold.

### Understanding the Decision Parameter

Let's consider a line segment from $(x_1, y_1)$ to $(x_2, y_2)$. For simplicity, let's first assume the line is in the first octant (i.e., $0 \le \Delta y \le \Delta x$, where $\Delta x = x_2 - x_1$ and $\Delta y = y_2 - y_1$).

At each step, we increment $x$ by 1. We need to decide whether to also increment $y$ by 1 or keep $y$ the same. The ideal $y$ value for a given $x$ would be calculated by the line equation: $y = m x + c$. However, since we're dealing with pixels, we want to choose the $y$ coordinate that is closest to this ideal line.

The decision parameter, often denoted by $p$, is used to track the error. Initially, we set up a starting point and an initial decision parameter. As we move along the line, we update this parameter.

The pseudocode below illustrates the general steps for implementing Bresenham's algorithm, focusing on the first octant where $\Delta x \ge \Delta y \ge 0$.

### Pseudocode for Bresenham's Algorithm (First Octant)

```pseudocode
function bresenhamLine(x1, y1, x2, y2):
  // Calculate deltas
  dx = abs(x2 - x1)
  dy = abs(y2 - y1)

  // Determine step directions
  sx = sign(x2 - x1) // 1 if x2 > x1, -1 if x2 < x1
  sy = sign(y2 - y1) // 1 if y2 > y1, -1 if y2 < y1

  // Initialize decision parameter and current point
  current_x = x1
  current_y = y1

  // Initial decision parameter (can be derived from 2*dy - dx)
  // For simplicity here, we'll use a common form that implicitly handles it.
  // The core idea is to see if 2*error - dx is positive or negative.
  // A common starting point for the decision parameter is often 2*dy - dx.
  // If it's positive, we increment y. If negative, we don't.

  p = 2 * dy - dx // For the first octant, p = 2*delta_y - delta_x

  // Loop until we reach the end point
  while current_x != x2 or current_y != y2:
    // Plot the current pixel
    plotPixel(current_x, current_y)

    // Check the decision parameter
    if p > 0:
      // Move diagonally (increment y)
      current_y = current_y + sy
      p = p + 2 * dy - 2 * dx // Update p for diagonal step
    else:
      // Move horizontally (do not increment y)
      p = p + 2 * dy // Update p for horizontal step

    // Always move horizontally
    current_x = current_x + sx

  // Plot the last pixel
  plotPixel(x2, y2)

// Helper function for plotting a pixel (implementation depends on your graphics API)
function plotPixel(x, y):
  // Your graphics code to set the pixel at (x, y) to a specific color
  print("Plotting pixel at: (", x, ", ", y, ")")

// Helper function to get the sign of a number
function sign(num):
  if num > 0: return 1
  if num < 0: return -1
  return 0
```

### How it Works (Step-by-Step Walkthrough)

Let's trace a simple example: drawing a line from $(1, 1)$ to $(8, 5)$.

1.  **Initialization:**
    *   $(x_1, y_1) = (1, 1)$
    *   $(x_2, y_2) = (8, 5)$
    *   $\Delta x = 8 - 1 = 7$
    *   $\Delta y = 5 - 1 = 4$
    *   $sx = 1$ (since $8 > 1$)
    *   $sy = 1$ (since $5 > 1$)
    *   Current point $(1, 1)$
    *   Initial decision parameter $p = 2 \times \Delta y - \Delta x = 2 \times 4 - 7 = 8 - 7 = 1$.

2.  **Iteration 1:**
    *   Plot $(1, 1)$.
    *   $p = 1 > 0$. So, we move diagonally.
    *   $current\_y = 1 + sy = 1 + 1 = 2$.
    *   $p = p + 2 \times \Delta y - 2 \times \Delta x = 1 + 2 \times 4 - 2 \times 7 = 1 + 8 - 14 = -5$.
    *   $current\_x = 1 + sx = 1 + 1 = 2$.
    *   Next point is $(2, 2)$.

3.  **Iteration 2:**
    *   Plot $(2, 2)$.
    *   $p = -5 \le 0$. So, we move horizontally.
    *   $p = p + 2 \times \Delta y = -5 + 2 \times 4 = -5 + 8 = 3$.
    *   $current\_x = 2 + sx = 2 + 1 = 3$.
    *   Next point is $(3, 2)$.

4.  **Iteration 3:**
    *   Plot $(3, 2)$.
    *   $p = 3 > 0$. So, we move diagonally.
    *   $current\_y = 2 + sy = 2 + 1 = 3$.
    *   $p = p + 2 \times \Delta y - 2 \times \Delta x = 3 + 2 \times 4 - 2 \times 7 = 3 + 8 - 14 = -3$.
    *   $current\_x = 3 + sx = 3 + 1 = 4$.
    *   Next point is $(4, 3)$.

... and so on, until $(8, 5)$ is reached.

### Adapting for Other Octants

The pseudocode above is simplified for the first octant. To handle lines in all directions and slopes, you'll need to:

*   **Handle Negative Deltas:** Use `abs()` for $\Delta x$ and $\Delta y$, and use `sx` and `sy` to determine the correct increment direction for $x$ and $y$.
*   **Handle Slopes Greater Than 1:** If $\Delta y > \Delta x$, you would typically swap the roles of $x$ and $y$ in the algorithm, incrementing $y$ by 1 at each step and deciding whether to increment $x$. The decision parameter calculation and update rules would be adjusted accordingly. A common approach is to ensure that the larger delta determines which coordinate is incremented in each main step.

### Key Takeaways for Implementation

*   **Integer Arithmetic:** The core strength of Bresenham's algorithm is its reliance on integer math, making it fast and precise on digital systems.
*   **Decision Parameter:** The choice of incrementing the $y$ coordinate (or $x$ coordinate for steep lines) is based on a simple comparison of the decision parameter with zero.
*   **Incremental Updates:** The decision parameter is updated incrementally, avoiding costly recalculations.
*   **Generalization:** While the basic form is for a specific octant, the underlying principle can be extended to all octants by careful management of signs and which coordinate drives the iteration.

By understanding this core logic and adapting it for different line orientations, you can effectively implement Bresenham's algorithm to draw lines in your graphical applications.

## Supports

- [[skills/programming/algorithms/rasterization-algorithms/microskills/bresenham-s-algorithm-implementation|Bresenham's Algorithm Implementation]]
