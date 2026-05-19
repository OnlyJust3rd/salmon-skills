---
type: "medium"
title: "Linearization: Approximating with Tangent Lines"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/derivative-computation-and-analysis/microskills/linearization-tangent-line-approximation|Linearization (tangent line approximation)]]"
---
# Linearization: Approximating with Tangent Lines

Sometimes, we need to estimate the value of a function at a point that's difficult to calculate directly. Linearization, also known as tangent line approximation, offers a powerful way to do this. The core idea is that for a smooth function, the tangent line at a specific point is a very good approximation of the function itself in the immediate vicinity of that point.

### What is Linearization?

Recall that the derivative of a function \(f(x)\) at a point \(x=a\), denoted as \(f'(a)\), represents the slope of the tangent line to the function's graph at that point. The equation of a line passing through a point \((x_0, y_0)\) with slope \(m\) is given by \(y - y_0 = m(x - x_0)\).

For a function \(f(x)\) and a point \(x=a\), the tangent line at \((a, f(a))\) has a slope of \(f'(a)\). Therefore, the equation of the tangent line, which serves as our linear approximation, is:

\[
y - f(a) = f'(a)(x - a)
\]

We can rewrite this to express \(y\) (the approximation) in terms of \(x\):

\[
L(x) = f(a) + f'(a)(x - a)
\]

This function \(L(x)\) is called the linearization of \(f(x)\) at \(x=a\). For values of \(x\) close to \(a\), \(f(x) \approx L(x)\).

### Practical Example: Estimating a Square Root

Let's say we want to estimate the value of \(\sqrt{4.1}\). Calculating this directly might require a calculator. We can use linearization to get a good estimate.

1.  **Choose a function and a nearby point:**
    Let \(f(x) = \sqrt{x}\). We want to estimate \(f(4.1)\). A convenient point near \(4.1\) where we know the square root is \(a=4\).

2.  **Find the derivative:**
    The derivative of \(f(x) = x^{1/2}\) is \(f'(x) = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}\).

3.  **Evaluate \(f(a)\) and \(f'(a)\):**
    *   \(f(a) = f(4) = \sqrt{4} = 2\)
    *   \(f'(a) = f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{2 \cdot 2} = \frac{1}{4}\)

4.  **Construct the linearization \(L(x)\):**
    Using the formula \(L(x) = f(a) + f'(a)(x - a)\):
    \(L(x) = 2 + \frac{1}{4}(x - 4)\)

5.  **Approximate \(f(4.1)\):**
    Now, we use \(L(x)\) to approximate \(f(4.1)\). We substitute \(x = 4.1\) into \(L(x)\):
    \(L(4.1) = 2 + \frac{1}{4}(4.1 - 4) = 2 + \frac{1}{4}(0.1) = 2 + 0.025 = 2.025\)

So, our linearization estimates that \(\sqrt{4.1} \approx 2.025\). (The actual value is approximately \(2.0248...\), showing how good the approximation is!)

### Practice Task

Use linearization to approximate the value of \(\cos(0.1)\).

*   Hint: Let \(f(x) = \cos(x)\) and choose \(a=0\).

### Self-Check Questions

1.  What is the fundamental principle behind using a tangent line for approximation?
2.  When you are asked to linearize a function \(f(x)\) at \(x=a\), what two pieces of information do you need to find?
3.  Why is it important for the point you are approximating to be "close to" the point of tangency?

## Supports

- [[skills/mathematics/derivative-computation-and-analysis/microskills/linearization-tangent-line-approximation|Linearization (tangent line approximation)]]
