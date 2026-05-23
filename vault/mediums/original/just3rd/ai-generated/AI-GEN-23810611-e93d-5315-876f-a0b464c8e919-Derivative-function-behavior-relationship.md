---
type: "medium"
title: "Understanding the Derivative's Story: Function Behavior"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/applied-calculus-problem-solving/microskills/derivative-function-behavior-relationship|derivative-function-behavior-relationship]]"
learning-time-in-minutes: 4
---
# Understanding the Derivative's Story: Function Behavior

This lesson focuses on how the derivative of a function tells us about the function's behavior. We'll explore how the sign of the derivative reveals whether a function is increasing or decreasing, and how the second derivative relates to its concavity and potential inflection points.

## The Derivative as a Slope Indicator

Remember that the derivative of a function, \(f'(x)\), represents the instantaneous rate of change of the function at any given point \(x\). Geometrically, it's the slope of the tangent line to the function's graph at that point.

*   **If \(f'(x) > 0\)** on an interval, the function \(f(x)\) is **increasing** on that interval. The tangent lines have positive slopes.
*   **If \(f'(x) < 0\)** on an interval, the function \(f(x)\) is **decreasing** on that interval. The tangent lines have negative slopes.
*   **If \(f'(x) = 0\)** at a point, the tangent line is horizontal. This often indicates a local maximum, local minimum, or a stationary point.

## Concavity and Inflection Points

The second derivative, \(f''(x)\), tells us about the rate of change of the derivative, which in turn describes the concavity of the original function.

*   **If \(f''(x) > 0\)** on an interval, the function \(f(x)\) is **concave up** on that interval. The graph looks like a "smiley face." The slopes of the tangent lines are increasing.
*   **If \(f''(x) < 0\)** on an interval, the function \(f(x)\) is **concave down** on that interval. The graph looks like a "frowny face." The slopes of the tangent lines are decreasing.

An **inflection point** is a point on the graph where the concavity changes (from concave up to concave down, or vice versa). This typically occurs where \(f''(x) = 0\) or where \(f''(x)\) is undefined, provided the concavity actually changes at that point.

## Practical Scenario: Analyzing a Project's Profitability

Imagine a company is analyzing the profit \(P(t)\) of a new project over time \(t\) (in months).

Let's say the profit function is \(P(t) = -t^3 + 12t^2 + 60t\).

1.  **Find the first derivative:**
    \(P'(t) = -3t^2 + 24t + 60\)

2.  **Determine when the profit is increasing/decreasing:**
    We set \(P'(t) = 0\) to find critical points:
    \(-3t^2 + 24t + 60 = 0\)
    Dividing by -3: \(t^2 - 8t - 20 = 0\)
    Factoring: \((t-10)(t+2) = 0\)
    So, \(t = 10\) or \(t = -2\). Since time cannot be negative in this context, we consider \(t \ge 0\).
    *   For \(0 \le t < 10\), let's test \(t=5\): \(P'(5) = -3(25) + 24(5) + 60 = -75 + 120 + 60 = 105 > 0\). The profit is increasing.
    *   For \(t > 10\), let's test \(t=11\): \(P'(11) = -3(121) + 24(11) + 60 = -363 + 264 + 60 = -39 < 0\). The profit is decreasing.
    This means the profit increases for the first 10 months and then starts to decrease. A peak profit occurs around \(t=10\) months.

3.  **Find the second derivative:**
    \(P''(t) = -6t + 24\)

4.  **Determine concavity and inflection points:**
    Set \(P''(t) = 0\):
    \(-6t + 24 = 0\)
    \(6t = 24\)
    \(t = 4\)
    *   For \(0 \le t < 4\), let's test \(t=2\): \(P''(2) = -6(2) + 24 = -12 + 24 = 12 > 0\). The profit function is concave up.
    *   For \(t > 4\), let's test \(t=5\): \(P''(5) = -6(5) + 24 = -30 + 24 = -6 < 0\). The profit function is concave down.
    At \(t=4\) months, the concavity changes. This is an inflection point. Before 4 months, the rate of profit increase is accelerating, and after 4 months, the rate of profit increase is decelerating (or the rate of profit decrease is accelerating).

## Practice Task

Consider the function \(f(x) = x^3 - 6x^2 + 5\).
1.  Find the intervals where \(f(x)\) is increasing and decreasing.
2.  Find the intervals where \(f(x)\) is concave up and concave down.
3.  Identify any inflection points.

## Self-Check Questions

1.  If the first derivative \(f'(x)\) is negative over an interval, what can you say about the behavior of \(f(x)\) on that interval?
2.  What does a positive second derivative \(f''(x)\) indicate about the graph of \(f(x)\)?
3.  What condition must be met for a point to be considered an inflection point?

## Supports

- [[skills/mathematics/calculus/applied-calculus-problem-solving/microskills/derivative-function-behavior-relationship|Derivative-function behavior relationship]]
