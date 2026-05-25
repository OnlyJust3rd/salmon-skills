---
type: "medium"
title: "Finding Inflection Points"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/inflection-point-identification|inflection-point-identification]]"
related-skills:
  - "[[skills/mathematics/calculus/derivative-computation-and-analysis/derivative-computation-and-analysis|derivative-computation-and-analysis]]"
learning-time-in-minutes: 3
---
# Finding Inflection Points

Inflection points are crucial for understanding the shape of a function's graph. They are the points where the concavity of the function changes from concave up to concave down, or vice versa. This change in concavity signals a shift in how the rate of change is itself changing.

To locate potential inflection points, we use the second derivative of a function.

## The Role of the Second Derivative

The first derivative tells us about the slope of the tangent line, indicating where a function is increasing or decreasing. The second derivative tells us about the rate of change of the slope, which corresponds to the concavity of the function:

*   **\(f''(x) > 0\):** The function is concave up (like a cup).
*   **\(f''(x) < 0\):** The function is concave down (like a frown).

An inflection point occurs at a point \( (c, f(c)) \) if \( f''(c) = 0 \) or if \( f''(c) \) is undefined, AND the concavity changes at \( x = c \).

## Steps to Find Inflection Points

1.  **Find the second derivative** of the function, \( f''(x) \).
2.  **Find the values of \(x\)** where \( f''(x) = 0 \) or where \( f''(x) \) is undefined. These are your *potential* inflection points.
3.  **Test the intervals** around each potential inflection point. Choose a test value in each interval and evaluate \( f''(x) \) at that value to determine the concavity.
4.  **Identify inflection points:** If the concavity changes at a potential inflection point, then it is an inflection point. You will then need to find the corresponding \(y\)-value by plugging the \(x\)-value back into the original function, \( f(x) \).

## Practical Example

Let's find the inflection points of the function \( f(x) = x^3 - 6x^2 + 5 \).

1.  **Find the first and second derivatives:**
    \( f'(x) = 3x^2 - 12x \)
    \( f''(x) = 6x - 12 \)

2.  **Find potential inflection points:**
    Set \( f''(x) = 0 \):
    \( 6x - 12 = 0 \)
    \( 6x = 12 \)
    \( x = 2 \)
    The second derivative \( f''(x) \) is defined for all \(x\), so \(x=2\) is our only potential inflection point.

3.  **Test intervals:**
    We need to test intervals around \(x=2\). Let's consider the intervals \( (-\infty, 2) \) and \( (2, \infty) \).
    *   **Interval \( (-\infty, 2) \):** Choose a test value, say \(x=0\).
        \( f''(0) = 6(0) - 12 = -12 \). Since \( f''(0) < 0 \), the function is concave down on this interval.
    *   **Interval \( (2, \infty) \):** Choose a test value, say \(x=3\).
        \( f''(3) = 6(3) - 12 = 18 - 12 = 6 \). Since \( f''(3) > 0 \), the function is concave up on this interval.

4.  **Identify inflection points:**
    Since the concavity changes from down to up at \(x=2\), there is an inflection point at \(x=2\).
    Now, find the \(y\)-value by plugging \(x=2\) into the original function \( f(x) \):
    \( f(2) = (2)^3 - 6(2)^2 + 5 = 8 - 6(4) + 5 = 8 - 24 + 5 = -11 \)
    Therefore, the inflection point is at **\( (2, -11) \)**.

## Practice Task

Find the inflection points of the function \( g(x) = x^4 - 4x^3 + 10 \).

## Self-Check Questions

1.  What does the second derivative tell us about a function's graph?
2.  What are the two conditions that must be met for a point to be an inflection point?
3.  If \( f''(x) = 0 \) at a point, does that automatically mean it's an inflection point? Explain.

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/inflection-point-identification|Inflection point identification]]
