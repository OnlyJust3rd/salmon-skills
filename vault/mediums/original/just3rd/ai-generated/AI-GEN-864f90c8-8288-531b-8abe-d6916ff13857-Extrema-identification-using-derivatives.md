---
type: "medium"
title: "Finding Local Extrema with Derivatives"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/extrema-identification-using-derivatives|extrema-identification-using-derivatives]]"
learning-time-in-minutes: 4
---
# Finding Local Extrema with Derivatives

In our journey to understand function behavior and sketch graphs accurately, identifying the "peaks" and "valleys" of a curve is crucial. These "peaks" and "valleys" are called local extrema, specifically local maxima and local minima. We use the power of derivatives to pinpoint these critical points.

## What are Local Extrema?

*   **Local Maximum:** A point on a curve where the function's value is greater than or equal to the values at all nearby points. Think of it as a "peak" in a small region.
*   **Local Minimum:** A point on a curve where the function's value is less than or equal to the values at all nearby points. Think of it as a "valley" in a small region.

These points often occur where the function changes from increasing to decreasing (a local maximum) or from decreasing to increasing (a local minimum). At these transition points, the slope of the tangent line is horizontal, meaning the derivative is zero.

## The First Derivative Test

The first derivative tells us about the slope of the function. By examining where the sign of the first derivative changes, we can identify local extrema.

1.  **Find the Critical Points:** Critical points are the values of \(x\) where the first derivative, \(f'(x)\), is either equal to zero or undefined. These are the *candidates* for local extrema.
2.  **Test Intervals:** Choose test values in the intervals created by the critical points.
3.  **Analyze the Sign of \(f'(x)\):**
    *   If \(f'(x)\) changes from positive to negative at a critical point \(c\), then there is a **local maximum** at \(x=c\). The function was increasing and then started decreasing.
    *   If \(f'(x)\) changes from negative to positive at a critical point \(c\), then there is a **local minimum** at \(x=c\). The function was decreasing and then started increasing.
    *   If \(f'(x)\) does not change sign at a critical point \(c\), then there is neither a local maximum nor a local minimum at \(x=c\).

## Practical Example: Finding Extrema for \(f(x) = x^3 - 6x^2 + 5\)

Let's apply the first derivative test to find the local extrema of the function \(f(x) = x^3 - 6x^2 + 5\).

**Step 1: Find the First Derivative**
\[
f'(x) = 3x^2 - 12x
\]

**Step 2: Find Critical Points**
Set \(f'(x) = 0\) and solve for \(x\):
\[
3x^2 - 12x = 0
\]
Factor out \(3x\):
\[
3x(x - 4) = 0
\]
This gives us critical points at \(x=0\) and \(x=4\). These are our candidates for local extrema.

**Step 3: Test Intervals**
The critical points \(x=0\) and \(x=4\) divide the number line into three intervals: \((-\infty, 0)\), \((0, 4)\), and \((4, \infty)\).

*   **Interval 1: \((-\infty, 0)\)**
    Let's choose a test value, say \(x = -1\).
    \(f'(-1) = 3(-1)^2 - 12(-1) = 3(1) + 12 = 15\).
    Since \(f'(-1) > 0\), the function is **increasing** in this interval.

*   **Interval 2: \((0, 4)\)**
    Let's choose a test value, say \(x = 1\).
    \(f'(1) = 3(1)^2 - 12(1) = 3 - 12 = -9\).
    Since \(f'(1) < 0\), the function is **decreasing** in this interval.

*   **Interval 3: \((4, \infty)\)**
    Let's choose a test value, say \(x = 5\).
    \(f'(5) = 3(5)^2 - 12(5) = 3(25) - 60 = 75 - 60 = 15\).
    Since \(f'(5) > 0\), the function is **increasing** in this interval.

**Step 4: Analyze the Sign Changes**

*   At \(x=0\), \(f'(x)\) changes from positive to negative. This indicates a **local maximum** at \(x=0\).
    To find the y-value of the local maximum, substitute \(x=0\) back into the original function: \(f(0) = (0)^3 - 6(0)^2 + 5 = 5\). So, the local maximum is at \((0, 5)\).

*   At \(x=4\), \(f'(x)\) changes from negative to positive. This indicates a **local minimum** at \(x=4\).
    To find the y-value of the local minimum, substitute \(x=4\) back into the original function: \(f(4) = (4)^3 - 6(4)^2 + 5 = 64 - 6(16) + 5 = 64 - 96 + 5 = -27\). So, the local minimum is at \((4, -27)\).

## Practice Task

Find the local maxima and minima of the function \(g(x) = 2x^3 - 9x^2 + 12x - 3\) using the first derivative test.

## Self-Check Questions

1.  What are critical points, and why are they important for finding local extrema?
2.  How does the sign change of the first derivative tell us whether we have a local maximum or minimum?
3.  If the first derivative is zero at a point but doesn't change sign, what does that tell you about the function at that point?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/extrema-identification-using-derivatives|Extrema identification using derivatives]]
