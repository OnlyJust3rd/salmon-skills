---
type: "medium"
title: "Rolle's Theorem Applicability Conditions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/calculus-theorems-application/microskills/rolle-s-theorem-applicability-conditions|rolle-s-theorem-applicability-conditions]]"
learning-time-in-minutes: 3
---
# Rolle's Theorem Applicability Conditions

Rolle's Theorem is a fundamental result in calculus that tells us about the existence of a horizontal tangent line for a function under specific conditions. To correctly apply Rolle's Theorem, you must first ensure that these conditions are met.

## What are the Conditions for Rolle's Theorem?

For Rolle's Theorem to apply to a function \(f(x)\) on an interval \([a, b]\), three conditions must be satisfied:

1.  **Continuity:** The function \(f(x)\) must be continuous on the closed interval \([a, b]\). This means that the graph of the function has no breaks, jumps, or holes within this interval, including at the endpoints \(a\) and \(b\).
2.  **Differentiability:** The function \(f(x)\) must be differentiable on the open interval \((a, b)\). This means that the function has a derivative at every point strictly between \(a\) and \(b\), which implies the graph has no sharp corners or vertical tangents in this open interval.
3.  **Equal Endpoints:** The function must have the same value at the endpoints of the interval, i.e., \(f(a) = f(b)\).

If all three of these conditions hold true, then Rolle's Theorem guarantees that there exists at least one number \(c\) in the open interval \((a, b)\) such that \(f'(c) = 0\). This means there is at least one point between \(a\) and \(b\) where the tangent line to the function's graph is horizontal.

## Practical Scenario

Imagine you are analyzing the trajectory of a projectile. Let \(h(t)\) represent the height of the projectile at time \(t\). Suppose you observe the projectile from launch time \(t=0\) to the time it hits the ground at \(t=T\).

*   **Continuity:** The height of the projectile is a continuous function of time. It doesn't suddenly jump up or disappear. So, \(h(t)\) is continuous on \([0, T]\).
*   **Differentiability:** The velocity of the projectile (which is the derivative of height) exists at all times between \(0\) and \(T\) (ignoring any idealized instantaneous changes in direction at the peak). So, \(h(t)\) is differentiable on \((0, T)\).
*   **Equal Endpoints:** The projectile starts at ground level (\(h(0) = 0\)) and returns to ground level (\(h(T) = 0\)). Thus, \(h(0) = h(T)\).

Since all three conditions are met, Rolle's Theorem tells us that there must be at least one moment \(c\) between \(0\) and \(T\) where the projectile's instantaneous velocity is zero (\(h'(c) = 0\)). This moment corresponds to the peak of the projectile's trajectory.

## Practice Task

For each of the following functions and intervals, determine if Rolle's Theorem can be applied. List the conditions and state whether each is met or not.

1.  \(f(x) = x^2 - 4x + 5\) on the interval \([1, 3]\)
2.  \(g(x) = |x|\) on the interval \([-1, 1]\)
3.  \(h(t) = \sin(t)\) on the interval \([0, 2\pi]\)

## Self-Check Questions

*   What does it mean for a function to be continuous on a closed interval?
*   What does it mean for a function to be differentiable on an open interval?
*   If a function is continuous on \([a, b]\) and differentiable on \((a, b)\), but \(f(a) \neq f(b)\), can Rolle's Theorem be applied? Why or why not?
*   What is the main conclusion guaranteed by Rolle's Theorem if its conditions are met?

## Supports

- [[skills/mathematics/calculus/calculus-theorems-application/microskills/rolle-s-theorem-applicability-conditions|Rolle's Theorem applicability conditions]]
