---
type: "medium"
title: "Remembering Standard Derivative Rules"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/derivative-computation-and-analysis/microskills/standard-derivative-rules|Standard derivative rules]]"
---
# Remembering Standard Derivative Rules

This lesson focuses on recalling the fundamental rules for calculating derivatives. Mastering these rules is the first step in understanding how functions change.

## What are Standard Derivative Rules?

In calculus, the derivative of a function tells us the instantaneous rate of change of that function. Standard derivative rules are established formulas that allow us to efficiently compute these rates of change for various types of functions without having to go back to the definition of the derivative (the limit definition) every single time. Think of them as shortcuts that mathematicians have discovered.

## Key Rules to Remember

Here are some of the most essential standard derivative rules:

*   **The Constant Rule:** The derivative of any constant number is always zero.
    *   If \(f(x) = c\), where \(c\) is a constant, then \(f'(x) = 0\).
    *   *Why?* A constant function has a flat graph, and its rate of change is zero everywhere.

*   **The Power Rule:** This is one of the most frequently used rules.
    *   If \(f(x) = x^n\), where \(n\) is any real number, then \(f'(x) = nx^{n-1}\).
    *   *How it works:* Bring the exponent down as a multiplier and then decrease the exponent by one.

*   **The Constant Multiple Rule:** If you have a constant multiplied by a function, the derivative is the constant times the derivative of the function.
    *   If \(f(x) = c \cdot g(x)\), then \(f'(x) = c \cdot g'(x)\).

*   **The Sum/Difference Rule:** The derivative of a sum or difference of functions is the sum or difference of their derivatives.
    *   If \(f(x) = g(x) \pm h(x)\), then \(f'(x) = g'(x) \pm h'(x)\).

## Practical Example

Let's use these rules to find the derivative of a simple polynomial function: \(f(x) = 3x^4 + 5x^2 - 7\).

We can break this down term by term:

1.  **Term 1: \(3x^4\)**
    *   Apply the Constant Multiple Rule: The constant is 3.
    *   Apply the Power Rule to \(x^4\): \(n=4\), so the derivative is \(4x^{4-1} = 4x^3\).
    *   Combine: \(3 \cdot (4x^3) = 12x^3\).

2.  **Term 2: \(5x^2\)**
    *   Apply the Constant Multiple Rule: The constant is 5.
    *   Apply the Power Rule to \(x^2\): \(n=2\), so the derivative is \(2x^{2-1} = 2x^1 = 2x\).
    *   Combine: \(5 \cdot (2x) = 10x\).

3.  **Term 3: \(-7\)**
    *   Apply the Constant Rule: The derivative of \(-7\) is 0.

4.  **Combine the derivatives of each term using the Sum/Difference Rule:**
    *   \(f'(x) = 12x^3 + 10x - 0\)
    *   Therefore, \(f'(x) = 12x^3 + 10x\).

## Practice Task

Using the rules you've recalled, find the derivative of the following function:

\(g(x) = 5x^3 - 2x + 9\)

## Self-Check Questions

1.  What is the derivative of a constant?
2.  If \(f(x) = x^7\), what is \(f'(x)\)?
3.  If \(h(x) = -4x^2\), what is \(h'(x)\)?
4.  What is the derivative of \(f(x) = x\)?

## Supports

- [[skills/mathematics/derivative-computation-and-analysis/microskills/standard-derivative-rules|Standard derivative rules]]
