---
type: "medium"
title: "Understanding Bresenham's Algorithm Steps"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/rasterization-algorithms/microskills/bresenham-s-algorithm-steps|bresenham-s-algorithm-steps]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/rasterization-algorithms/rasterization-algorithms|rasterization-algorithms]]"
learning-time-in-minutes: 4
---
# Understanding Bresenham's Algorithm Steps

Bresenham's line drawing algorithm is a clever method used in computer graphics to determine which pixels to plot to approximate a straight line on a raster display. It's efficient because it uses only integer arithmetic, avoiding the computationally expensive floating-point operations often associated with line drawing. This lesson focuses on understanding the fundamental steps involved in this algorithm.

## The Goal of Bresenham's Algorithm

The primary purpose of Bresenham's algorithm is to draw a line between two given points on a pixel grid as accurately as possible. Since pixels are discrete, we can't always draw a perfectly straight line. The algorithm aims to select the set of pixels that best represents the intended line, minimizing visual distortion.

## The Core Idea: Incremental Decision Making

Instead of recalculating the exact position of the line at each pixel, Bresenham's algorithm makes incremental decisions. It starts at one endpoint and, for each new pixel it draws along the line's direction, it decides whether to move horizontally, vertically, or diagonally to the next pixel. This decision is based on an error term that tracks how far the ideal line position deviates from the center of the current pixel.

## Algorithm Steps: A Detailed Look

Let's break down the steps of Bresenham's algorithm for a line segment from point $$(x_1, y_1)$$ to $$(x_2, y_2)$$. For simplicity, we'll first consider a line with a slope between 0 and 1, meaning it generally moves to the right and slightly upwards. The algorithm can be adapted for other octants (different slope directions).

**1. Initialization:**

*   **Determine the starting point:** The algorithm begins at the first endpoint $$(x_1, y_1)$$.
*   **Calculate differences:** Find the total change in x and y coordinates:
    $$
    \Delta x = |x_2 - x_1|
    $$
    $$
    \Delta y = |y_2 - y_1|
    $$
*   **Determine direction:** Define step increments for x and y. If $$(x_2 > x_1)$$, then $$step_x = 1$$; otherwise, $$step_x = -1$$. Similarly for y.
*   **Initialize Decision Parameter (D):** This is the crucial part. The decision parameter helps us decide which pixel to plot next. For a line going from left to right, with a slope less than 1, a common initialization is:
    $$
    D = 2 \cdot \Delta y - \Delta x
    $$

**2. Iteration (Drawing Pixels):**

The algorithm iterates from the starting point until it reaches the endpoint. In each iteration, it plots the current pixel and then decides where the *next* pixel should be.

*   **Plot Current Pixel:** The current $$(x, y)$$ coordinates represent the pixel to be plotted.
*   **Check Decision Parameter (D):**
    *   **If $$D < 0$$:** This means the ideal line is closer to the lower pixel (in the current step). We increment x (move horizontally), but y stays the same. The decision parameter is updated as follows:
        $$
        D_{new} = D_{old} + 2 \cdot \Delta y
        $$
    *   **If $$D \ge 0$$:** This means the ideal line is closer to the diagonally upper pixel. We increment both x and y (move diagonally). The decision parameter is updated as follows:
        $$
        D_{new} = D_{old} + 2 \cdot \Delta y - 2 \cdot \Delta x
        $$
*   **Update Coordinates:** Based on the decision made above, update the current $$(x, y)$$ coordinates using the `step_x` and `step_y` values calculated during initialization.
*   **Repeat:** Continue this process until x reaches $$x_2$$.

**3. Termination:**

The loop terminates when the algorithm has plotted pixels all the way to the second endpoint $$(x_2, y_2)$$.

## Example Walkthrough (Conceptual)

Let's consider drawing a line from (1, 1) to (5, 3).

*   $$(x_1, y_1) = (1, 1)$$, $$(x_2, y_2) = (5, 3)$$
*   $$\Delta x = |5 - 1| = 4$$
*   $$\Delta y = |3 - 1| = 2$$
*   $$step_x = 1$$, $$step_y = 1$$ (since $$x_2 > x_1$$ and $$y_2 > y_1$$)
*   Initial $$D = 2 \cdot \Delta y - \Delta x = 2 \cdot 2 - 4 = 0$$

| Iteration | Current (x, y) | Initial D | Check D | New D | Update (x, y) | Plot Pixel |
| :-------- | :------------- | :-------- | :------ | :---- | :------------ | :--------- |
| 1         | (1, 1)         | -         | -       | 0     | (1, 1)        | (1, 1)     |
| 2         | (1, 1)         | 0         | $$D \ge 0$$ | $$0 + 2 \cdot 2 - 2 \cdot 4 = -4$$ | $$(1+1, 1+1) = (2, 2)$$ | (2, 2)     |
| 3         | (2, 2)         | -4        | $$D < 0$$   | $$-4 + 2 \cdot 2 = 0$$     | $$(2+1, 2) = (3, 2)$$   | (3, 2)     |
| 4         | (3, 2)         | 0         | $$D \ge 0$$ | $$0 + 2 \cdot 2 - 2 \cdot 4 = -4$$ | $$(3+1, 2+1) = (4, 3)$$ | (4, 3)     |
| 5         | (4, 3)         | -4        | $$D < 0$$   | $$-4 + 2 \cdot 2 = 0$$     | $$(4+1, 3) = (5, 3)$$   | (5, 3)     |

The algorithm stops as x reaches $$x_2$$. The plotted pixels would be (1, 1), (2, 2), (3, 2), (4, 3), (5, 3).

## Key Takeaways

*   **Integer Arithmetic:** Bresenham's algorithm exclusively uses addition, subtraction, and multiplication by 2 (which can be implemented as bit shifts), making it very fast.
*   **Decision Parameter:** The "D" value is key to determining which pixel is "closest" to the true line at each step.
*   **Incremental Updates:** The algorithm efficiently moves from one pixel to the next without recalculating the entire line.
*   **Adaptability:** While we focused on one octant, the core principles can be extended to draw lines in all directions.

## Supports

- [[skills/digital-media/computer-graphics/rasterization-algorithms/microskills/bresenham-s-algorithm-steps|Bresenham's Algorithm Steps]]
