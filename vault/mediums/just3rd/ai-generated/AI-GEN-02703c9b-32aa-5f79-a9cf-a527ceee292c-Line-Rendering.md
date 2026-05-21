---
type: "medium"
title: "Implementing Bresenham's Line Algorithm"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/rasterization-algorithms/microskills/line-rendering|line-rendering]]"
---
# Implementing Bresenham's Line Algorithm

This lesson focuses on applying Bresenham's line drawing algorithm to render lines on a display. We'll explore how this efficient algorithm works and how to implement it.

## The Core Idea: Pixel Selection

Bresenham's algorithm is a clever way to draw lines using only integer arithmetic. Instead of calculating floating-point slopes and rounding, it iteratively decides which pixel is closest to the true line path at each step. This makes it very fast and suitable for hardware implementation.

The algorithm works by maintaining an error term. At each step, it increments either the x or y coordinate (or both, for diagonal lines) and then checks the error term to decide whether to adjust the other coordinate. This decision is based on whether moving to the next pixel in the primary direction takes us further away from the true line.

## Algorithm Steps (First Octant: 0 <= slope <= 1)

Let's consider the simplest case: drawing a line from $(x_1, y_1)$ to $(x_2, y_2)$ where $x_2 > x_1$ and $y_2 > y_1$, and the slope is between 0 and 1 (i.e., $\frac{y_2 - y_1}{x_2 - x_1} \le 1$).

1.  **Initialization**:
    *   Calculate $\Delta x = x_2 - x_1$ and $\Delta y = y_2 - y_1$.
    *   Initialize the decision parameter $P = 2 \Delta y - \Delta x$.
    *   Set the current point $(x, y)$ to $(x_1, y_1)$.
    *   Plot the first pixel at $(x_1, y_1)$.

2.  **Iteration**:
    *   Loop from $x = x_1$ to $x_2$:
        *   If $P > 0$:
            *   Increment $y$ (move diagonally up).
            *   Update $P = P + 2 \Delta y - 2 \Delta x$.
        *   Else ($P \le 0$):
            *   Keep $y$ the same (move horizontally).
            *   Update $P = P + 2 \Delta y$.
        *   Increment $x$.
        *   Plot the pixel at the new $(x, y)$.

## Worked Example

Let's draw a line from $(1, 2)$ to $(7, 5)$.

*   $x_1 = 1, y_1 = 2$
*   $x_2 = 7, y_2 = 5$
*   $\Delta x = 7 - 1 = 6$
*   $\Delta y = 5 - 2 = 3$

**Initialization**:
*   $P = 2 \Delta y - \Delta x = 2(3) - 6 = 6 - 6 = 0$.
*   Current point $(x, y) = (1, 2)$. Plot $(1, 2)$.

**Iteration**:

| x   | P     | Condition (P > 0) | y Action | New P               | Plot (x, y) |
| :-- | :---- | :---------------- | :------- | :------------------ | :---------- |
| 1   | 0     | False             | Stay     | $0 + 2(3) = 6$      | (1, 2)      |
| 2   | 6     | True              | Increment | $6 + 2(3) - 2(6) = 0$ | (2, 3)      |
| 3   | 0     | False             | Stay     | $0 + 2(3) = 6$      | (3, 3)      |
| 4   | 6     | True              | Increment | $6 + 2(3) - 2(6) = 0$ | (4, 4)      |
| 5   | 0     | False             | Stay     | $0 + 2(3) = 6$      | (5, 4)      |
| 6   | 6     | True              | Increment | $6 + 2(3) - 2(6) = 0$ | (6, 5)      |
| 7   | 0     | False             | Stay     | $0 + 2(3) = 6$      | (7, 5)      |

The plotted pixels are: (1,2), (2,3), (3,3), (4,4), (5,4), (6,5), (7,5).

## Pseudocode Implementation

Here's a basic pseudocode structure for the first octant:

```pseudocode
function bresenham_line(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    
    y = y1
    p = 2 * dy - dx
    
    for x from x1 to x2:
        plot_pixel(x, y)
        
        if p > 0:
            y = y + 1
            p = p + 2 * dy - 2 * dx
        else:
            p = p + 2 * dy
```

## Handling Different Slopes and Directions

The algorithm can be generalized to handle lines with any slope and in any direction:

*   **Slopes > 1**: Swap the roles of x and y. Increment y in the main loop and decide whether to increment x.
*   **Negative Slopes**: Adjust the increment/decrement for y based on the sign of $\Delta y$.
*   **Decreasing X**: If $x_1 > x_2$, iterate from $x_1$ down to $x_2$, negating $\Delta x$.
*   **Generalization**: The full algorithm accounts for all 8 octants by checking the signs of $\Delta x$ and $\Delta y$ and swapping their roles if $|\Delta y| > |\Delta x|$.

## Practical Considerations

When implementing Bresenham's algorithm in a programming language, remember:

*   **Integer Arithmetic**: Ensure all calculations are done using integers to maintain performance and avoid floating-point errors.
*   **Coordinate System**: Be mindful of the display's coordinate system (origin at top-left or bottom-left).
*   **Line Endpoints**: The algorithm typically includes both endpoints.

By understanding the error-driven approach and the iterative decision-making, you can effectively implement Bresenham's algorithm for rendering lines efficiently.

## Supports

- [[skills/programming/algorithms/rasterization-algorithms/microskills/line-rendering|Line Rendering]]
