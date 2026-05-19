---
type: "medium"
title: "Understanding the Chain Rule for Single-Variable Functions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/derivative-computation-and-analysis/microskills/chain-rule-application-single-variable|Chain rule application (single-variable)]]"
---
# Understanding the Chain Rule for Single-Variable Functions

The chain rule is a fundamental tool in calculus that allows us to find the derivative of **composite functions**. A composite function is essentially a function within another function, like \(f(g(x))\). When we need to differentiate such a structure, the chain rule provides a systematic way to do it.

## What is a Composite Function?

Imagine you have two functions:
*   An "outer" function, let's call it \(f(u)\).
*   An "inner" function, let's call it \(u = g(x)\).

When you substitute the inner function into the outer function, you get a composite function: \(f(g(x))\).

For example, if \(f(u) = u^2\) and \(g(x) = \sin(x)\), then the composite function is \(f(g(x)) = (\sin(x))^2\).

## The Chain Rule Formula

The chain rule states that the derivative of a composite function \(f(g(x))\) is the derivative of the outer function evaluated at the inner function, multiplied by the derivative of the inner function.

In mathematical notation:

\[
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
\]

Think of it this way:
1.  Differentiate the "outside" function, leaving the "inside" function untouched.
2.  Multiply this by the derivative of the "inside" function.

## Practical Application: Differentiating \(y = (\sin(x))^2\)

Let's apply the chain rule to our example: \(y = (\sin(x))^2\).

1.  **Identify the outer and inner functions:**
    *   Outer function: \(f(u) = u^2\)
    *   Inner function: \(g(x) = \sin(x)\)

2.  **Find the derivatives of the outer and inner functions:**
    *   Derivative of the outer function: \(f'(u) = 2u\)
    *   Derivative of the inner function: \(g'(x) = \cos(x)\)

3.  **Apply the chain rule formula:** \(f'(g(x)) \cdot g'(x)\)
    *   Substitute \(g(x)\) back into \(f'(u)\): \(f'(g(x)) = 2(\sin(x))\)
    *   Multiply by \(g'(x)\): \(2(\sin(x)) \cdot \cos(x)\)

So, the derivative of \(y = (\sin(x))^2\) is \(2\sin(x)\cos(x)\). This can also be written as \(\sin(2x)\) using a trigonometric identity.

## Another Example: \(y = e^{3x^2 + 1}\)

Let's try another one: \(y = e^{3x^2 + 1}\).

1.  **Outer function:** \(f(u) = e^u\)
2.  **Inner function:** \(g(x) = 3x^2 + 1\)

3.  **Derivatives:**
    *   \(f'(u) = e^u\)
    *   \(g'(x) = 6x\)

4.  **Apply chain rule:** \(f'(g(x)) \cdot g'(x)\)
    *   \(e^{3x^2 + 1} \cdot 6x\)

The derivative is \(6xe^{3x^2 + 1}\).

## Practice Task

Find the derivative of the following functions using the chain rule:

1.  \(y = \sqrt{4x^2 + 5}\)
2.  \(y = \cos(5x)\)
3.  \(y = (x^3 - 2x + 1)^4\)

## Self-Check Questions

1.  What is the main purpose of the chain rule in differentiation?
2.  When differentiating \(y = \ln(x^2+1)\), what is the outer function and what is the inner function?
3.  If \(h(x) = f(g(x))\), what are the two parts you need to multiply together to find \(h'(x)\)?

## Supports

- [[skills/mathematics/derivative-computation-and-analysis/microskills/chain-rule-application-single-variable|Chain rule application (single-variable)]]
