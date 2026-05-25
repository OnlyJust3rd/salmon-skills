---
type: "medium"
title: "Differentiable Function Conditions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/function-analysis/microskills/differentiable-function-conditions|differentiable-function-conditions]]"
related-skills:
  - "[[skills/mathematics/calculus/function-analysis/function-analysis|function-analysis]]"
learning-time-in-minutes: 4
---
# Differentiable Function Conditions

Understanding when a function is differentiable is a key step in analyzing its properties. This lesson focuses on the fundamental conditions that make a function differentiable.

## What is a Differentiable Function?

In simple terms, a function is differentiable at a point if its graph has a well-defined, non-vertical tangent line at that point. This means the function is "smooth" and doesn't have any sharp corners, cusps, or breaks at that location.

Mathematically, a function \(f(x)\) is differentiable at a point \(x=a\) if the following limit exists:

\[
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
\]

This limit, \(f'(a)\), represents the instantaneous rate of change of the function at \(x=a\), which is the slope of the tangent line.

## Conditions for Differentiability

For a function to be differentiable at a point \(x=a\), two primary conditions must be met:

1.  **The function must be continuous at \(x=a\).**
2.  **The limit defining the derivative must exist.**

Let's break down these conditions.

### Condition 1: Continuity

A function \(f(x)\) is continuous at \(x=a\) if:

*   \(f(a)\) is defined.
*   \(\lim_{x \to a} f(x)\) exists.
*   \(\lim_{x \to a} f(x) = f(a)\).

If a function is not continuous at a point, it cannot be differentiable at that point. Think of a jump discontinuity or a removable discontinuity (a hole). You can't draw a unique, non-vertical tangent line at such points.

**Example of Non-Continuity Leading to Non-Differentiability:**

Consider the function:
\[
f(x) = \begin{cases} x & \text{if } x < 0 \\ x+1 & \text{if } x \ge 0 \end{cases}
\]
This function has a jump discontinuity at \(x=0\). \(f(0) = 1\), but \(\lim_{x \to 0^-} f(x) = 0\). Since the limit does not equal \(f(0)\), the function is not continuous at \(x=0\), and therefore not differentiable at \(x=0\).

### Condition 2: Existence of the Derivative Limit

Even if a function is continuous at a point, it might still not be differentiable. This happens if the "slope" approaching the point from the left is different from the "slope" approaching from the right, or if the tangent line becomes vertical.

The existence of the limit \(\lim_{h \to 0} \frac{f(a+h) - f(a)}{h}\) implies that the left-hand derivative and the right-hand derivative are equal:

\[
\lim_{h \to 0^-} \frac{f(a+h) - f(a)}{h} = \lim_{h \to 0^+} \frac{f(a+h) - f(a)}{h}
\]

If these one-sided limits are not equal, or if one or both are infinite (leading to a vertical tangent), the function is not differentiable at \(x=a\).

**Common Scenarios Where Differentiability Fails (Even with Continuity):**

*   **Sharp Corners (Cusps):** The slopes from the left and right are different.
    *   **Example:** The absolute value function \(f(x) = |x|\) is continuous at \(x=0\).
        *   Left-hand derivative at \(x=0\): \(\lim_{h \to 0^-} \frac{|0+h| - |0|}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1\).
        *   Right-hand derivative at \(x=0\): \(\lim_{h \to 0^+} \frac{|0+h| - |0|}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1\).
        Since \(-1 \neq 1\), \(f(x) = |x|\) is not differentiable at \(x=0\).

*   **Vertical Tangent Lines:** The limit defining the derivative approaches infinity.
    *   **Example:** The cube root function \(f(x) = \sqrt[3]{x} = x^{1/3}\) is continuous at \(x=0\).
        \[
        f'(x) = \frac{1}{3}x^{-2/3} = \frac{1}{3\sqrt[3]{x^2}}
        \]
        At \(x=0\), the derivative \(f'(0)\) is undefined because the denominator becomes zero.
        \[
        \lim_{h \to 0} \frac{\sqrt[3]{0+h} - \sqrt[3]{0}}{h} = \lim_{h \to 0} \frac{\sqrt[3]{h}}{h} = \lim_{h \to 0} \frac{1}{\sqrt[3]{h^2}} = \infty
        \]
        Since the limit is infinite, the tangent line at \(x=0\) is vertical, and the function is not differentiable at \(x=0\).

## Summary of Conditions for Differentiability at \(x=a\):

A function \(f(x)\) is differentiable at \(x=a\) if:

1.  **Continuity:** \(f(x)\) is continuous at \(x=a\). This means \(f(a)\) is defined, \(\lim_{x \to a} f(x)\) exists, and \(\lim_{x \to a} f(x) = f(a)\).
2.  **Limit Existence:** The limit \(\lim_{h \to 0} \frac{f(a+h) - f(a)}{h}\) exists (i.e., it's a finite number). This implies that the left-hand and right-hand derivatives are equal.

If either of these conditions fails, the function is not differentiable at that point. Recognizing these conditions is crucial for analyzing the behavior and smoothness of functions.

## Supports

- [[skills/mathematics/calculus/function-analysis/microskills/differentiable-function-conditions|Differentiable function conditions]]
