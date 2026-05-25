---
type: "medium"
title: "Displaying Geometric Primitives"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/rasterization-algorithms/microskills/displaying-geometric-primitives|displaying-geometric-primitives]]"
learning-time-in-minutes: 4
---
# Displaying Geometric Primitives

When we create computer graphics, we start with geometric shapes like lines, circles, and polygons. However, computer screens are made of tiny dots called pixels. We can't directly draw a perfect mathematical line or circle; instead, we need to figure out which pixels to "turn on" to best represent these shapes. This process is called **scan conversion**. Displaying geometric primitives means understanding how to translate these ideal shapes into a format that a display device can render, pixel by pixel.

## Why Scan Conversion?

Imagine drawing a line on a piece of graph paper. You'd decide which squares (pixels) the line passes through. Computer displays work similarly.

*   **Discrete Nature:** Screens are grids of pixels, not a continuous space.
*   **Approximation:** We need algorithms to approximate continuous geometric shapes using discrete pixels.
*   **Efficiency:** These algorithms must be fast to update the screen in real-time, especially for animations.

## The Core Idea: From Math to Pixels

The fundamental challenge is to determine, for a given geometric primitive (like a line segment), the set of pixels that lie closest to it. This involves:

1.  **Identifying Candidate Pixels:** Determining which pixels are candidates for being "lit up".
2.  **Decision Making:** Using mathematical criteria to decide if a candidate pixel should be part of the primitive's representation.

For lines, the most common algorithms aim to find the pixels that are closest to the ideal mathematical line.

## Line Drawing Algorithms: The Foundation

Lines are the building blocks for many other shapes. Efficiently drawing lines is crucial.

### Bresenham's Line Algorithm: A Classic

Bresenham's algorithm is a highly efficient integer-based algorithm for drawing lines. It works by incrementally deciding which pixel to illuminate next, moving from one end of the line to the other. It avoids floating-point arithmetic, making it very fast.

#### How it Works (Conceptual)

Let's consider drawing a line from $$(x_1, y_1)$$ to $$(x_2, y_2)$$.

1.  **Determine Slope:** Calculate the slope of the line. The algorithm handles different slopes (gentle, steep, horizontal, vertical) by taking advantage of symmetry.
2.  **Initialize:** Start at the first pixel $$(x_1, y_1)$$.
3.  **Iterative Decision:** At each step, the algorithm needs to decide whether to move to the next pixel in the x-direction, the y-direction, or both. This decision is based on an error term that tracks how far the current pixel path deviates from the ideal line.
4.  **Update Error:** The error term is updated based on the decision made.

The core of Bresenham's algorithm involves choosing between two adjacent pixels at each step based on which one is closer to the true line.

#### Pseudocode Example (Simplified for illustration)

```
function bresenhamLine(x1, y1, x2, y2)
    dx = abs(x2 - x1)
    dy = abs(y2 - y1)
    sx = if x1 < x2 then 1 else -1
    sy = if y1 < y2 then 1 else -1
    err = dx - dy

    x = x1
    y = y1

    loop
        plot(x, y) // Illuminate the pixel at (x, y)

        if x == x2 and y == y2 then break // Reached the end

        e2 = 2 * err
        if e2 > -dy then // Check if moving in x direction is better
            err = err - dy
            x = x + sx
        end if
        if e2 < dx then // Check if moving in y direction is better
            err = err + dx
            y = y + sy
        end if
    end loop
end function
```

This pseudocode shows the iterative process. At each point, we plot the current pixel and then check our error value to decide whether to move horizontally, vertically, or both to get closer to the ideal line for the next pixel.

### Other Line Drawing Algorithms

*   **Digital Differential Analyzer (DDA):** An earlier algorithm that uses floating-point increments. It's simpler to understand but less efficient than Bresenham's due to floating-point calculations.
*   **Midpoint Circle Algorithm:** Similar in principle to Bresenham's but adapted for circles, also using integer arithmetic to efficiently determine pixels.

## Scan Conversion for Other Primitives

While lines are fundamental, the concept extends to other shapes:

*   **Circles:** Algorithms determine pixels that best approximate a circle's circumference. The Midpoint Circle Algorithm is a common example.
*   **Polygons:** For filled polygons, scan conversion involves identifying all pixels that fall *inside* the polygon's boundaries. This often involves algorithms like the scanline fill algorithm.

## Key Takeaways

*   **Displaying geometric primitives** is about converting mathematical shapes into a grid of pixels.
*   **Scan conversion algorithms** are the techniques used for this translation.
*   **Bresenham's Line Algorithm** is a highly efficient, integer-based method for drawing lines by making incremental pixel choices.
*   The core idea is to find the pixels closest to the ideal geometric shape.

## Supports

- [[skills/digital-media/computer-graphics/rasterization-algorithms/microskills/displaying-geometric-primitives|Displaying Geometric Primitives]]
