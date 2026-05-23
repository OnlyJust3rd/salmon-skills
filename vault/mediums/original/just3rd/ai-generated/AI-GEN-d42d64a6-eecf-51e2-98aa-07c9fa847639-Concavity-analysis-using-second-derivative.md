---
type: "medium"
title: "Understanding Concavity with the Second Derivative"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/concavity-analysis-using-second-derivative|concavity-analysis-using-second-derivative]]"
learning-time-in-minutes: 3
---
# Understanding Concavity with the Second Derivative

The shape of a function's graph tells us a lot about its behavior. While the first derivative helps us understand if a function is increasing or decreasing, the **second derivative** reveals the **concavity** of the graph. Concavity describes how the graph curves.

## What is Concavity?

*   **Concave Up:** The graph looks like a U-shape. The tangent lines to the curve lie *below* the curve itself. Think of a bowl holding water.
*   **Concave Down:** The graph looks like an upside-down U-shape. The tangent lines to the curve lie *above* the curve itself. Think of a hill or an umbrella.

## Using the Second Derivative for Concavity Analysis

The relationship between the second derivative and concavity is straightforward:

*   If \(f''(x) > 0\) on an interval, then the graph of \(f(x)\) is **concave up** on that interval.
*   If \(f''(x) < 0\) on an interval, then the graph of \(f(x)\) is **concave down** on that interval.

**Inflection Points:** A point where the concavity of the graph changes (from concave up to concave down, or vice versa) is called an **inflection point**. These often occur where \(f''(x) = 0\) or where \(f''(x)\) is undefined, but we must check the sign of \(f''(x)\) on either side of these points to confirm a change in concavity.

## Practical Example: Analyzing \(f(x) = x^3 - 6x^2 + 5\)

Let's use our function \(f(x) = x^3 - 6x^2 + 5\) to practice finding concavity.

**Step 1: Find the first derivative.**
\(f'(x) = 3x^2 - 12x\)

**Step 2: Find the second derivative.**
\(f''(x) = 6x - 12\)

**Step 3: Find where \(f''(x) = 0\) or is undefined.**
Set \(f''(x) = 0\):
\(6x - 12 = 0\)
\(6x = 12\)
\(x = 2\)

This value, \(x=2\), is a potential inflection point. We need to test the intervals around it.

**Step 4: Determine the concavity on the intervals.**
We will test intervals \( (-\infty, 2) \) and \( (2, \infty) \) using our second derivative, \(f''(x) = 6x - 12\).

*   **Interval \( (-\infty, 2) \):** Choose a test value, say \(x = 0\).
    \(f''(0) = 6(0) - 12 = -12\)
    Since \(f''(0) < 0\), the graph of \(f(x)\) is **concave down** on \( (-\infty, 2) \).

*   **Interval \( (2, \infty) \):** Choose a test value, say \(x = 3\).
    \(f''(3) = 6(3) - 12 = 18 - 12 = 6\)
    Since \(f''(3) > 0\), the graph of \(f(x)\) is **concave up** on \( (2, \infty) \).

**Step 5: Identify Inflection Points.**
Since the concavity changes at \(x = 2\) (from concave down to concave up), there is an inflection point. To find the y-coordinate, substitute \(x=2\) back into the original function:
\(f(2) = (2)^3 - 6(2)^2 + 5 = 8 - 6(4) + 5 = 8 - 24 + 5 = -11\)
The inflection point is at **(2, -11)**.

## Practice Task

For the function \(g(x) = x^4 - 4x^3\):

1.  Find the second derivative, \(g''(x)\).
2.  Determine the intervals where \(g(x)\) is concave up.
3.  Determine the intervals where \(g(x)\) is concave down.
4.  Find any inflection points.

## Self-Check Questions

*   What does it mean for a graph to be concave up?
*   How does the sign of the second derivative relate to concavity?
*   What is an inflection point, and how do we find it using the second derivative?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/concavity-analysis-using-second-derivative|Concavity analysis using second derivative]]
