---
type: "medium"
title: "Sketching Curves with Derivatives"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/applied-calculus-problem-solving/microskills/calculus-based-graph-sketching|calculus-based-graph-sketching]]"
---
# Sketching Curves with Derivatives

In applied calculus, understanding the shape of a function's graph is crucial. Derivatives are powerful tools that help us sketch these curves accurately. This lesson focuses on using derivatives to analyze and visualize the behavior of functions.

## Why Sketching Matters

When solving real-world problems, especially those involving optimization or related rates, a visual representation of the function can offer significant insights. Derivatives help us identify:

*   **Increasing/Decreasing Intervals:** Where the function is going up or down.
*   **Local Maxima and Minima:** The peaks and valleys of the graph.
*   **Concavity:** Whether the graph is curving upwards or downwards.
*   **Inflection Points:** Where the concavity changes.

## Using Derivatives for Sketching

We primarily use the first and second derivatives for curve sketching.

1.  **First Derivative ($f'(x)$):**
    *   If \(f'(x) > 0\) on an interval, \(f(x)\) is **increasing**.
    *   If \(f'(x) < 0\) on an interval, \(f(x)\) is **decreasing**.
    *   Critical points (where \(f'(x) = 0\) or is undefined) are candidates for local maxima/minima.

2.  **Second Derivative ($f''(x)$):**
    *   If \(f''(x) > 0\) on an interval, \(f(x)\) is **concave up**.
    *   If \(f''(x) < 0\) on an interval, \(f(x)\) is **concave down**.
    *   Inflection points occur where \(f''(x) = 0\) or is undefined, and the concavity changes.

## Practical Example: Analyzing \(f(x) = x^3 - 6x^2 + 5\)

Let's sketch this polynomial using derivatives.

**Step 1: Find the first derivative.**
\[
f'(x) = 3x^2 - 12x
\]

**Step 2: Find critical points.**
Set \(f'(x) = 0\):
\(3x^2 - 12x = 0\)
\(3x(x - 4) = 0\)
Critical points are \(x = 0\) and \(x = 4\).

**Step 3: Determine increasing/decreasing intervals.**
Test intervals:
*   \(x < 0\): e.g., \(x = -1\). \(f'(-1) = 3(-1)^2 - 12(-1) = 3 + 12 = 15 > 0\). \(f(x)\) is increasing.
*   \(0 < x < 4\): e.g., \(x = 1\). \(f'(1) = 3(1)^2 - 12(1) = 3 - 12 = -9 < 0\). \(f(x)\) is decreasing.
*   \(x > 4\): e.g., \(x = 5\). \(f'(5) = 3(5)^2 - 12(5) = 75 - 60 = 15 > 0\). \(f(x)\) is increasing.

This tells us:
*   Local maximum at \(x = 0\). \(f(0) = 5\). Point: \((0, 5)\).
*   Local minimum at \(x = 4\). \(f(4) = 4^3 - 6(4^2) + 5 = 64 - 96 + 5 = -27\). Point: \((4, -27)\).

**Step 4: Find the second derivative.**
\[
f''(x) = 6x - 12
\]

**Step 5: Find potential inflection points.**
Set \(f''(x) = 0\):
\(6x - 12 = 0\)
\(6x = 12\)
\(x = 2\).

**Step 6: Determine concavity.**
Test intervals:
*   \(x < 2\): e.g., \(x = 1\). \(f''(1) = 6(1) - 12 = -6 < 0\). \(f(x)\) is concave down.
*   \(x > 2\): e.g., \(x = 3\). \(f''(3) = 6(3) - 12 = 18 - 12 = 6 > 0\). \(f(x)\) is concave up.

This tells us:
*   Inflection point at \(x = 2\). \(f(2) = 2^3 - 6(2^2) + 5 = 8 - 24 + 5 = -11\). Point: \((2, -11)\).

**Step 7: Sketch the graph.**
Plot the critical points \((0, 5)\) and \((4, -27)\) and the inflection point \((2, -11)\). Use the increasing/decreasing and concavity information to draw a smooth curve. The graph rises until \(x=0\), falls from \(x=0\) to \(x=4\), and rises again after \(x=4\). It is concave down before \(x=2\) and concave up after \(x=2\).

## Practice Task

Sketch the graph of the function \(g(x) = x^4 - 4x^3\) using the steps above. Identify intervals of increase/decrease, local extrema, intervals of concavity, and inflection points.

## Self-Check Questions

1.  What does the sign of the first derivative tell you about a function's graph?
2.  What does the sign of the second derivative tell you about a function's graph?
3.  How do you find potential local maxima and minima using the first derivative?
4.  How do you find potential inflection points using the second derivative?

## Supports

- [[skills/mathematics/applied-calculus-problem-solving/microskills/calculus-based-graph-sketching|Calculus-based graph sketching]]
