---
type: "medium"
title: "Computing Differentials"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/compute-differentials|compute-differentials]]"
learning-time-in-minutes: 3
---
# Computing Differentials

Differentials help us understand how small changes in an input variable affect the output of a function. They are a foundational tool for linear approximation, allowing us to estimate function values and understand approximation errors.

### What are Differentials?

For a function \(y = f(x)\), the differential of \(x\), denoted by \(dx\), is simply any small change in \(x\). The differential of \(y\), denoted by \(dy\), represents the corresponding change in \(y\) *along the tangent line* to the curve of \(f(x)\) at a specific point.

The relationship between \(dy\) and \(dx\) is given by the derivative of the function:
\[
dy = f'(x) \, dx
\]

Here:
*   \(f'(x)\) is the derivative of the function \(f(x)\).
*   \(dx\) is the change in the independent variable \(x\).
*   \(dy\) is the resulting change in the dependent variable \(y\) as estimated by the tangent line.

Think of \(dy\) as an approximation of the actual change in \(y\), denoted by \(\Delta y\). For small values of \(dx\), \(dy \approx \Delta y\).

### Practical Scenario: Measuring a Square's Area

Imagine you have a square, and you want to measure its area. The side length of the square is \(x\). The area \(A\) is given by \(A(x) = x^2\).

Suppose the measured side length is \(x = 10\) cm, and you estimate that your measurement might be off by \(dx = 0.1\) cm (a small error). How much might the area be off?

1.  **Find the derivative:** The derivative of \(A(x) = x^2\) is \(A'(x) = 2x\).
2.  **Compute the differential \(dA\):** Using the formula \(dy = f'(x) \, dx\), we have \(dA = A'(x) \, dx\).
    \[
    dA = (2x) \, dx
    \]
3.  **Substitute the values:** At \(x = 10\) cm and \(dx = 0.1\) cm:
    \[
    dA = (2 \times 10) \times 0.1
    \]
    \[
    dA = 20 \times 0.1
    \]
    \[
    dA = 2 \text{ cm}^2
    \]

This means that if the side length is \(10\) cm and the error in measurement is \(0.1\) cm, the error in the calculated area is approximately \(2\) cm\(^2\).

Let's compare this to the actual change in area (\(\Delta A\)). If the side length increases from \(10\) cm to \(10.1\) cm:
\[
A(10.1) = (10.1)^2 = 102.01 \text{ cm}^2
\]
\[
A(10) = 10^2 = 100 \text{ cm}^2
\]
\[
\Delta A = A(10.1) - A(10) = 102.01 - 100 = 2.01 \text{ cm}^2
\]
As you can see, \(dA = 2\) cm\(^2\) is a very good approximation of \(\Delta A = 2.01\) cm\(^2\) for this small change.

### Practice Task

Consider the function \(f(x) = x^3 - 2x + 5\).
1.  Find the derivative \(f'(x)\).
2.  Write the formula for the differential \(dy\).
3.  If \(x = 2\) and \(dx = 0.05\), compute the differential \(dy\).
4.  Interpret what the computed value of \(dy\) means in terms of changes in \(x\) and \(f(x)\).

### Self-Check Questions

1.  What is the fundamental relationship between \(dy\), \(f'(x)\), and \(dx\)?
2.  When is \(dy\) a good approximation for the actual change in the function, \(\Delta y\)?
3.  If \(g(x) = \sqrt{x}\) and \(x = 16\) with \(dx = -0.2\), what is the computed differential \(dg\)?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/compute-differentials|Compute differentials]]
