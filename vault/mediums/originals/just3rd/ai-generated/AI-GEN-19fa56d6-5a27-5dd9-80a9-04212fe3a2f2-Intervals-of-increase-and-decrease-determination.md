---
type: "medium"
title: "Identifying Intervals of Increase and Decrease Using the First Derivative"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/intervals-of-increase-and-decrease-determination|intervals-of-increase-and-decrease-determination]]"
learning-time-in-minutes: 3
---
# Identifying Intervals of Increase and Decrease Using the First Derivative

When we analyze the behavior of a function, one of the most fundamental aspects is understanding where it is going up (increasing) and where it is going down (decreasing). The first derivative is our primary tool for this.

### Short Explanation

The sign of the first derivative, \(f'(x)\), tells us about the slope of the tangent line to the function's graph at any given point.

*   If \(f'(x) > 0\), the function \(f(x)\) is **increasing** at that point. The graph is sloping upwards as you move from left to right.
*   If \(f'(x) < 0\), the function \(f(x)\) is **decreasing** at that point. The graph is sloping downwards as you move from left to right.
*   If \(f'(x) = 0\), the function has a **horizontal tangent line** at that point. These points are often candidates for local maximums or minimums.

To find the intervals where a function is increasing or decreasing, we need to:
1.  Find the first derivative, \(f'(x)\).
2.  Find the critical points by setting \(f'(x) = 0\) and solving for \(x\), and also identify any points where \(f'(x)\) is undefined.
3.  These critical points divide the number line into intervals.
4.  Test a value from each interval in \(f'(x)\) to determine its sign. The sign of \(f'(x)\) in an interval will be the same for all points within that interval.

### Practical Example: Analyzing a Cubic Function

Let's find the intervals where the function \(f(x) = x^3 - 6x^2 + 5\) is increasing or decreasing.

**Step 1: Find the first derivative.**
\[
f'(x) = \frac{d}{dx}(x^3 - 6x^2 + 5) = 3x^2 - 12x
\]

**Step 2: Find the critical points.**
Set \(f'(x) = 0\):
\[
3x^2 - 12x = 0
\]
Factor out \(3x\):
\[
3x(x - 4) = 0
\]
This gives us two critical points: \(x = 0\) and \(x = 4\). The derivative is defined for all real numbers, so we don't have any points where it's undefined.

**Step 3: Divide the number line into intervals.**
The critical points \(x=0\) and \(x=4\) divide the number line into three intervals:
*   \((-\infty, 0)\)
*   \((0, 4)\)
*   \((4, \infty)\)

**Step 4: Test a value from each interval in \(f'(x)\).**

*   **Interval \((-\infty, 0)\):** Let's test \(x = -1\).
    \(f'(-1) = 3(-1)^2 - 12(-1) = 3(1) + 12 = 15\).
    Since \(f'(-1) > 0\), the function \(f(x)\) is **increasing** on \((-\infty, 0)\).

*   **Interval \((0, 4)\):** Let's test \(x = 2\).
    \(f'(2) = 3(2)^2 - 12(2) = 3(4) - 24 = 12 - 24 = -12\).
    Since \(f'(2) < 0\), the function \(f(x)\) is **decreasing** on \((0, 4)\).

*   **Interval \((4, \infty)\):** Let's test \(x = 5\).
    \(f'(5) = 3(5)^2 - 12(5) = 3(25) - 60 = 75 - 60 = 15\).
    Since \(f'(5) > 0\), the function \(f(x)\) is **increasing** on \((4, \infty)\).

**Conclusion:**
The function \(f(x) = x^3 - 6x^2 + 5\) is increasing on the intervals \((-\infty, 0)\) and \((4, \infty)\). It is decreasing on the interval \((0, 4)\).

### Practice Task

Find the intervals where the function \(g(x) = 2x^3 + 3x^2 - 12x + 1\) is increasing and decreasing.

### Self-Check Questions

1.  If \(f'(c) = 0\), what does this tell you about the function \(f(x)\) at \(x=c\)?
2.  If \(f'(x)\) is positive on an interval, is \(f(x)\) increasing or decreasing on that interval?
3.  What are the critical points of a function used for when determining intervals of increase and decrease?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/intervals-of-increase-and-decrease-determination|Intervals of increase and decrease determination]]
