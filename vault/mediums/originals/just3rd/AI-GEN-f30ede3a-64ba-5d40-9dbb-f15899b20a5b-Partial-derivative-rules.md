---
type: "medium"
title: "Recalling Partial Derivative Rules"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/partial-derivative-rules|partial-derivative-rules]]"
related-skills:
  - "[[skills/mathematics/calculus/derivative-computation-and-analysis/derivative-computation-and-analysis|derivative-computation-and-analysis]]"
learning-time-in-minutes: 4
---
# Recalling Partial Derivative Rules

In the world of multivariable calculus, we often encounter functions that depend on more than one variable. To understand how these functions change, we use partial derivatives. This lesson focuses on recalling the fundamental rules for computing these partial derivatives.

## What are Partial Derivatives?

A partial derivative measures how a multivariable function changes with respect to one of its variables, while holding all other variables constant. Think of it like isolating the effect of one ingredient in a recipe on the final taste, while keeping all other ingredients the same.

For a function \(f(x, y)\), the partial derivative with respect to \(x\) is denoted as \(\frac{\partial f}{\partial x}\) or \(f_x(x, y)\). Similarly, the partial derivative with respect to \(y\) is denoted as \(\frac{\partial f}{\partial y}\) or \(f_y(x, y)\).

The key principle when computing a partial derivative is to treat all other variables as constants. This means applying the same derivative rules you're familiar with from single-variable calculus, but with this crucial "treat others as constants" mindset.

## Core Partial Derivative Rules

The rules for partial derivatives are direct extensions of single-variable differentiation rules:

*   **Constant Rule:** If \(c\) is a constant, then \(\frac{\partial c}{\partial x} = 0\).
*   **Power Rule:** For any real number \(n\), \(\frac{\partial (x^n)}{\partial x} = nx^{n-1}\).
*   **Constant Multiple Rule:** If \(c\) is a constant, then \(\frac{\partial (c \cdot g(x))}{\partial x} = c \cdot \frac{\partial g(x)}{\partial x}\).
*   **Sum/Difference Rule:** \(\frac{\partial (g(x) \pm h(x))}{\partial x} = \frac{\partial g(x)}{\partial x} \pm \frac{\partial h(x)}{\partial x}\).
*   **Product Rule:** \(\frac{\partial (u \cdot v)}{\partial x} = u \frac{\partial v}{\partial x} + v \frac{\partial u}{\partial x}\), where \(u\) and \(v\) are functions of \(x\) (or can involve other variables treated as constants).
*   **Quotient Rule:** \(\frac{\partial (u/v)}{\partial x} = \frac{v \frac{\partial u}{\partial x} - u \frac{\partial v}{\partial x}}{v^2}\).
*   **Chain Rule:** If \(f\) is a function of \(u\) and \(u\) is a function of \(x\), then \(\frac{\partial f}{\partial x} = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial x}\). This extends to multiple variables in more complex ways.
*   **Derivatives of Transcendental Functions:** Rules for \(e^x\), \(\ln(x)\), \(\sin(x)\), \(\cos(x)\), etc., apply directly to the variable with respect to which you are differentiating, while treating other variables as constants. For example, \(\frac{\partial (e^{xy})}{\partial x} = y e^{xy}\) because we treat \(y\) as a constant.

## Practical Example: Temperature Distribution

Imagine a metal plate where the temperature \(T\) at any point \((x, y)\) is given by the function:

\[
T(x, y) = 3x^2y + 5y^3 - 2x
\]

Let's find out how the temperature changes as we move only in the \(x\)-direction (keeping \(y\) constant), and how it changes as we move only in the \(y\)-direction (keeping \(x\) constant).

**1. Partial derivative with respect to \(x\):**

We treat \(y\) as a constant.
*   The derivative of \(3x^2y\) with respect to \(x\) is \(3y \cdot (2x) = 6xy\). (Using Power Rule and Constant Multiple Rule, where \(3y\) is the constant).
*   The derivative of \(5y^3\) with respect to \(x\) is \(0\), because \(5y^3\) is a constant with respect to \(x\).
*   The derivative of \(-2x\) with respect to \(x\) is \(-2\).

So,
\[
\frac{\partial T}{\partial x} = 6xy + 0 - 2 = 6xy - 2
\]
This tells us the rate of temperature change per unit change in \(x\).

**2. Partial derivative with respect to \(y\):**

We treat \(x\) as a constant.
*   The derivative of \(3x^2y\) with respect to \(y\) is \(3x^2 \cdot (1) = 3x^2\). (Using Power Rule and Constant Multiple Rule, where \(3x^2\) is the constant).
*   The derivative of \(5y^3\) with respect to \(y\) is \(5 \cdot (3y^2) = 15y^2\). (Using Power Rule).
*   The derivative of \(-2x\) with respect to \(y\) is \(0\), because \(-2x\) is a constant with respect to \(y\).

So,
\[
\frac{\partial T}{\partial y} = 3x^2 + 15y^2 - 0 = 3x^2 + 15y^2
\]
This tells us the rate of temperature change per unit change in \(y\).

## Practice Task

For the function \(f(x, y, z) = x^3y^2z - 4x\sin(y) + e^{2z}\), find the following partial derivatives:

1.  \(\frac{\partial f}{\partial x}\)
2.  \(\frac{\partial f}{\partial y}\)
3.  \(\frac{\partial f}{\partial z}\)

## Self-Check Questions

1.  When computing the partial derivative of \(f(x, y)\) with respect to \(x\), what is the fundamental principle regarding the variable \(y\)?
2.  If \(g(x, y) = 5\), what is \(\frac{\partial g}{\partial y}\)?
3.  State the power rule for partial derivatives with respect to \(x\).
4.  Consider the function \(h(x, y) = x^2 + y^2\). What is \(\frac{\partial h}{\partial x}\) and \(\frac{\partial h}{\partial y}\)?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/partial-derivative-rules|Partial derivative rules]]
