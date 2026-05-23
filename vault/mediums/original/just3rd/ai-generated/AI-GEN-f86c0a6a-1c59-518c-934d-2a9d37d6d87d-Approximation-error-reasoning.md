---
type: "medium"
title: "Understanding Approximation Error with Linearization"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/approximation-error-reasoning|approximation-error-reasoning]]"
learning-time-in-minutes: 4
---
# Understanding Approximation Error with Linearization

When we use linear approximation to estimate function values, we're essentially replacing a curve with a straight line. This straight line is tangent to the curve at a specific point. This section focuses on *why* this approximation gets better as we get closer to that tangent point and worse as we move away.

## The Big Picture: Why Does Distance Matter?

Imagine you have a wiggly path (your function) and you're standing at a specific spot (your expansion point). You decide to use a straight plank of wood to reach other spots. If another spot is right next to you, the plank is a pretty good representation of the path. But if that other spot is far away, the wiggly path will have probably curved significantly away from your straight plank.

In calculus terms, the "wiggliness" of a function is related to its higher-order derivatives. A linear approximation only considers the function's value and its slope (the first derivative) at the expansion point.

*   **Near the Expansion Point:** The function behaves very much like its tangent line. The change in the function's value is dominated by the linear term.
*   **Farther Away:** The higher-order terms in the function's Taylor expansion (which the linear approximation is the first part of) start to have a significant impact. These terms account for the curvature and other non-linear behaviors. As we move further from the expansion point, these "error" terms become larger, making the linear approximation less accurate.

This concept is often formalized using Big O notation. The error in linear approximation is typically proportional to the square of the distance from the expansion point, often written as \(O(\Delta x^2)\). This means the error decreases quadratically as \(\Delta x\) (the distance from the expansion point) approaches zero.

## Practical Scenario: Estimating Volume

Let's say you're designing a spherical balloon. You know the radius is precisely \(r_0 = 2\) cm, and the volume is \(V(r) = \frac{4}{3}\pi r^3\). You want to estimate the volume when the radius is slightly larger, say \(r = 2.05\) cm.

Your linear approximation, centered at \(r_0 = 2\), gives you a tangent line for the volume function.

*   The function value at \(r_0\) is \(V(2) = \frac{4}{3}\pi (2)^3 = \frac{32}{3}\pi\).
*   The derivative is \(V'(r) = 4\pi r^2\).
*   The slope at \(r_0 = 2\) is \(V'(2) = 4\pi (2)^2 = 16\pi\).

The linear approximation formula is \(L(r) = V(r_0) + V'(r_0)(r - r_0)\).
So, \(L(r) = \frac{32}{3}\pi + 16\pi(r - 2)\).

Now, let's look at the approximation error at different distances from \(r_0 = 2\):

1.  **Estimate at \(r = 2.05\) (distance = 0.05):**
    \(L(2.05) = \frac{32}{3}\pi + 16\pi(2.05 - 2) = \frac{32}{3}\pi + 16\pi(0.05) = \frac{32}{3}\pi + 0.8\pi \approx 10.667\pi + 0.8\pi = 11.467\pi\).
    The actual volume is \(V(2.05) = \frac{4}{3}\pi (2.05)^3 \approx 11.507\pi\).
    The error is about \(11.507\pi - 11.467\pi = 0.04\pi\).

2.  **Estimate at \(r = 2.1\) (distance = 0.1):**
    \(L(2.1) = \frac{32}{3}\pi + 16\pi(2.1 - 2) = \frac{32}{3}\pi + 16\pi(0.1) = \frac{32}{3}\pi + 1.6\pi \approx 10.667\pi + 1.6\pi = 12.267\pi\).
    The actual volume is \(V(2.1) = \frac{4}{3}\pi (2.1)^3 \approx 12.385\pi\).
    The error is about \(12.385\pi - 12.267\pi = 0.118\pi\).

Notice how the error increased from \(0.04\pi\) to \(0.118\pi\) when the distance from the expansion point doubled (from 0.05 to 0.1). This aligns with the idea that the error grows faster than the distance itself. The function's curve is bending away from the tangent line more significantly as we move further out.

## Practice Task

Consider the function \(f(x) = \cos(x)\) and its linear approximation around \(x_0 = 0\).

1.  Calculate the linear approximation \(L(x)\) for \(f(x)\) around \(x_0 = 0\).
2.  Use \(L(x)\) to estimate \(f(0.1)\) and \(f(0.5)\).
3.  Calculate the actual values of \(f(0.1)\) and \(f(0.5)\).
4.  Compare the errors for \(f(0.1)\) and \(f(0.5)\). How does the error change as you move farther from \(x_0 = 0\)? Explain *why* this happens in terms of the function's graph and its tangent line.

## Self-Check Questions

*   What is the primary reason why linear approximation becomes less accurate as you move away from the expansion point?
*   If the error in a linear approximation is roughly proportional to the square of the distance from the expansion point, what happens to the error if you double the distance?
*   Why is the tangent line a good approximation *at* the point of tangency?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/approximation-error-reasoning|Approximation error reasoning]]
