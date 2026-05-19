---
type: "medium"
title: "Line Clipping Algorithms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/viewing-and-clipping/microskills/line-clipping-algorithm|Line Clipping Algorithm]]"
---
# Line Clipping Algorithms

This lesson focuses on implementing line clipping algorithms to determine which parts of a line are visible within a defined clipping window. This is a crucial step in computer graphics for displaying only the relevant portions of a scene.

## What is Line Clipping?

Line clipping is the process of identifying the segments of a line that lie inside a specified rectangular clipping window. Lines that are entirely inside the window are kept. Lines that are entirely outside are discarded. Lines that partially intersect the window need to have their endpoints adjusted to lie on the window boundaries.

## The Need for Clipping

Imagine you have a large 3D world and you're viewing it through a small screen. Not everything in the world can be displayed. Clipping ensures that only the geometry within the viewer's field of vision (represented by the clipping window) is rendered, saving processing time and producing a correct image.

## Cohen-Sutherland Line Clipping Algorithm

The Cohen-Sutherland algorithm is a popular and efficient method for line clipping. It works by dividing the 2D space into nine regions based on the clipping window. Each region is assigned a 4-bit "outcode."

### Outcodes

The outcode for a point $(x, y)$ relative to a rectangular window defined by $x_{min}$, $x_{max}$, $y_{min}$, and $y_{max}$ is determined as follows:

*   **Bit 0 (LEFT):** 1 if $x < x_{min}$, 0 otherwise.
*   **Bit 1 (RIGHT):** 1 if $x > x_{max}$, 0 otherwise.
*   **Bit 2 (BOTTOM):** 1 if $y < y_{min}$, 0 otherwise.
*   **Bit 3 (TOP):** 1 if $y > y_{max}$, 0 otherwise.

The outcode of a line segment's endpoints are calculated. Based on these outcodes, we can quickly determine if a line is entirely inside, entirely outside, or needs further processing.

### Algorithm Steps

1.  **Compute Outcodes:** Calculate the outcodes for both endpoints of the line segment, say $P_1 = (x_1, y_1)$ and $P_2 = (x_2, y_2)$.
2.  **Trivial Accept:** If both outcodes are 0000, the line is entirely inside the window. Accept and draw the entire line.
3.  **Trivial Reject:** If the bitwise AND of the two outcodes is *not* 0000, it means both endpoints lie in the same "outside" region (e.g., both are to the left of the window). The line is entirely outside. Reject and discard the line.
4.  **Clipping Required:** If neither of the above conditions is met, the line might be partially inside.
    *   Choose an endpoint that is *not* trivially accepted (i.e., its outcode is not 0000). Let's call this endpoint $P_{out}$.
    *   Determine which boundary the line segment crosses based on the bits set in $P_{out}$'s outcode.
        *   If the LEFT bit is set ($x_1 < x_{min}$), the line crosses the left boundary.
        *   If the RIGHT bit is set ($x_1 > x_{max}$), the line crosses the right boundary.
        *   If the BOTTOM bit is set ($y_1 < y_{min}$), the line crosses the bottom boundary.
        *   If the TOP bit is set ($y_1 > y_{max}$), the line crosses the top boundary.
    *   **Calculate Intersection:** Compute the intersection point of the line segment with the clipping boundary.
        *   Intersection with a vertical boundary ($x = x_{boundary}$):
            $$ y_{intersect} = y_1 + m \cdot (x_{boundary} - x_1) $$
            where $m = (y_2 - y_1) / (x_2 - x_1)$ is the slope.
        *   Intersection with a horizontal boundary ($y = y_{boundary}$):
            $$ x_{intersect} = x_1 + \frac{1}{m} \cdot (y_{boundary} - y_1) $$
            where $1/m = (x_2 - x_1) / (y_2 - y_1)$.
    *   **Update Endpoint:** Replace the coordinates of $P_{out}$ with the intersection point's coordinates.
    *   **Recompute Outcode:** Recalculate the outcode for the updated endpoint.
    *   **Repeat:** Go back to step 2 with the modified line segment.

### Pseudocode Example

```
// Define clipping window
xmin = 0; xmax = 100; ymin = 0; ymax = 100;

// Function to compute outcode for a point (x, y)
function computeOutcode(x, y):
    code = 0
    if x < xmin: code = code | LEFT
    else if x > xmax: code = code | RIGHT
    if y < ymin: code = code | BOTTOM
    else if y > ymax: code = code | TOP
    return code

// Cohen-Sutherland clipping algorithm
function clipLine(x1, y1, x2, y2):
    outcode1 = computeOutcode(x1, y1)
    outcode2 = computeOutcode(x2, y2)
    accept = false

    while true:
        if (outcode1 == 0) and (outcode2 == 0):
            // Trivial accept
            accept = true
            break
        else if (outcode1 & outcode2) != 0:
            // Trivial reject
            break
        else:
            // Clipping required
            // Pick one endpoint outside the clip window
            x = 0; y = 0
            outcodeOut = outcode1 if outcode1 != 0 else outcode2

            // Find intersection point
            if outcodeOut & TOP:
                x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1)
                y = ymax
            else if outcodeOut & BOTTOM:
                x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1)
                y = ymin
            else if outcodeOut & RIGHT:
                y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1)
                x = xmax
            else if outcodeOut & LEFT:
                y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1)
                x = xmin

            // Now move outside point to intersection point to clip
            if outcodeOut == outcode1:
                x1 = x
                y1 = y
                outcode1 = computeOutcode(x1, y1)
            else:
                x2 = x
                y2 = y
                outcode2 = computeOutcode(x2, y2)

    if accept:
        // Draw the clipped line from (x1, y1) to (x2, y2)
        draw(x1, y1, x2, y2)
```

## Liang-Barsky Algorithm

The Liang-Barsky algorithm is another efficient line clipping algorithm, particularly suited for parametric representations of lines. It uses inequalities to determine clipping parameters.

A line can be represented parametrically as:
$$
x = x_1 + t(x_2 - x_1) \\
y = y_1 + t(y_2 - y_1)
$$
where $t$ ranges from 0 to 1.

The algorithm checks these inequalities against the clipping window boundaries:
*   $x_{min} \le x_1 + t \Delta x \le x_{max}$
*   $y_{min} \le y_1 + t \Delta y \le y_{max}$

These can be rewritten as:
*   $t \Delta x \ge x_{min} - x_1$
*   $t \Delta x \le x_{max} - x_1$
*   $t \Delta y \ge y_{min} - y_1$
*   $t \Delta y \le y_{max} - y_1$

The algorithm then analyzes these inequalities by considering the values of $p$ and $q$:
*   $p_1 = -\Delta x$, $q_1 = x_1 - x_{min}$
*   $p_2 = \Delta x$, $q_2 = x_{max} - x_1$
*   $p_3 = -\Delta y$, $q_3 = y_1 - y_{min}$
*   $p_4 = \Delta y$, $q_4 = y_{max} - y_1$

The inequalities become $p_k t \le q_k$.

*   If $p_k = 0$:
    *   If $q_k < 0$, the line is outside the boundary. Reject.
    *   If $q_k \ge 0$, the line is parallel and inside. Continue.
*   If $p_k \ne 0$:
    *   Calculate $r = q_k / p_k$.
    *   If $p_k < 0$ (entering the clip region), update $t_{enter} = \max(t_{enter}, r)$.
    *   If $p_k > 0$ (exiting the clip region), update $t_{exit} = \min(t_{exit}, r)$.

After checking all four boundaries, if $t_{enter} < t_{exit}$, the line segment is visible within the clip window. The clipped endpoints are:
$$
x_{new1} = x_1 + t_{enter} \Delta x \\
y_{new1} = y_1 + t_{enter} \Delta y \\
x_{new2} = x_1 + t_{exit} \Delta x \\
y_{new2} = y_1 + t_{exit} \Delta y
$$

## Choosing an Algorithm

Both Cohen-Sutherland and Liang-Barsky are effective.
*   **Cohen-Sutherland** is generally easier to understand and implement due to its region-based outcodes. It performs well when many lines are outside the window.
*   **Liang-Barsky** can be more efficient, especially when clipping against multiple windows or when lines are nearly parallel to window boundaries, as it involves fewer calculations.

In practice, for simple rectangular windows, Cohen-Sutherland is often the go-to choice due to its conceptual clarity.

## Supports

- [[skills/creative-media/graphics-media/viewing-and-clipping/microskills/line-clipping-algorithm|Line Clipping Algorithm]]
