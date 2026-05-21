---
type: "medium"
title: "Mean Value Theorem Applicability Conditions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/calculus-theorems-application/microskills/mean-value-theorem-applicability-conditions|mean-value-theorem-applicability-conditions]]"
---
# Mean Value Theorem Applicability Conditions

The Mean Value Theorem (MVT) is a powerful tool in calculus that relates the average rate of change of a function over an interval to its instantaneous rate of change at some point within that interval. However, like many theorems, it has specific conditions that must be met for it to be applicable. Understanding these conditions is crucial for correctly applying the MVT.

### Short Explanation

For the Mean Value Theorem to apply to a function \(f(x)\) on a closed interval \([a, b]\), three conditions must be satisfied:

1.  **Continuity on the Closed Interval:** The function \(f(x)\) must be continuous on the closed interval \([a, b]\). This means there are no breaks, jumps, or holes in the graph of the function between \(a\) and \(b\), including at the endpoints \(a\) and \(b\).
2.  **Differentiability on the Open Interval:** The function \(f(x)\) must be differentiable on the open interval \((a, b)\). This means the function must have a derivative (a slope) at every point *between* \(a\) and \(b\). Geometrically, this implies that the graph of the function has no sharp corners or vertical tangents within the open interval.
3.  **Existence of a Point \(c\):** The theorem itself states that if the above two conditions are met, then there exists at least one number \(c\) in the open interval \((a, b)\) such that the derivative at \(c\) is equal to the average rate of change of the function over the interval \([a, b]\). Mathematically, this is expressed as:
    \[
    f'(c) = \frac{f(b) - f(a)}{b - a}
    \]
    While this is the conclusion of the theorem, the first two are the *applicability conditions* you need to check.

### Practical Scenario

Imagine you are analyzing the speed of a car during a road trip. You start at point A (time \(t_1\)) and end at point B (time \(t_2\)). The total distance covered is \(d\).

*   **Continuity:** The car's position changes smoothly over time; it doesn't teleport. So, the function representing the car's position as a function of time is continuous.
*   **Differentiability:** At any moment *between* your start and end times, the car has a well-defined speed (its velocity). There are no instantaneous changes in direction or infinite acceleration that would make the speed undefined or cause a sharp turn in the position-time graph. So, the position function is differentiable on the open interval of time.

If these conditions are met, the Mean Value Theorem guarantees that at some point during your trip (between \(t_1\) and \(t_2\)), your instantaneous speed was exactly equal to your average speed for the entire trip.

### Practice Task

For each of the following functions and intervals, determine if the Mean Value Theorem can be applied. List the conditions and explain whether they are met or not.

1.  \(f(x) = x^2 - 4x + 5\) on the interval \([1, 3]\).
2.  \(g(x) = \frac{1}{x}\) on the interval \([-1, 1]\).
3.  \(h(x) = |x|\) on the interval \([-2, 2]\).

### Self-Check Questions

1.  What are the two primary conditions you must verify before you can apply the Mean Value Theorem?
2.  If a function has a jump discontinuity on an interval \([a, b]\), can the Mean Value Theorem be applied? Why or why not?
3.  If a function has a sharp corner (like \(f(x) = |x|\) at \(x=0\)) within an interval \((a, b)\), can the Mean Value Theorem be applied to that interval? Explain.

## Supports

- [[skills/mathematics/calculus-theorems-application/microskills/mean-value-theorem-applicability-conditions|Mean Value Theorem applicability conditions]]
