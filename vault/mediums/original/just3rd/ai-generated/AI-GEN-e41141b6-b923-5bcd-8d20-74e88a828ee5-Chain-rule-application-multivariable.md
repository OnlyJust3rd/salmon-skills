---
type: "medium"
title: "Understanding the Multivariable Chain Rule"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/chain-rule-application-multivariable|chain-rule-application-multivariable]]"
learning-time-in-minutes: 4
---
# Understanding the Multivariable Chain Rule

When we deal with functions that depend on other functions, finding the rate of change can get complicated. The chain rule is our tool for this. For single-variable functions, it helps us differentiate composite functions like \(f(g(x))\). In the multivariable world, things get a bit more intricate, but the core idea remains the same: breaking down the overall rate of change into a series of smaller, manageable rates of change.

## What is the Multivariable Chain Rule?

Imagine you have a function, say \(z\), that depends on variables \(x\) and \(y\). But \(x\) and \(y\) themselves depend on another variable, say \(t\). We want to know how \(z\) changes with respect to \(t\). The multivariable chain rule provides a way to calculate this.

Essentially, it states that the total derivative of \(z\) with respect to \(t\) is the sum of the partial derivatives of \(z\) with respect to \(x\) and \(y\), each multiplied by the rate of change of \(x\) and \(y\) with respect to \(t\), respectively.

For a function \(z = f(x, y)\), where \(x = g(t)\) and \(y = h(t)\), the chain rule for \(\frac{dz}{dt}\) is:

\[
\frac{dz}{dt} = \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}
\]

If \(x\) and \(y\) depend on multiple variables, say \(s\) and \(t\), then we can find the partial derivatives of \(z\) with respect to \(s\) and \(t\) using a similar expanded form of the chain rule.

For example, to find \(\frac{\partial z}{\partial s}\):

\[
\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s}
\]

And to find \(\frac{\partial z}{\partial t}\):

\[
\frac{\partial z}{\partial t} = \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}
\]

## Practical Scenario: Temperature on a Moving Plate

Consider a scenario where the temperature \(T\) on a metal plate depends on its position \((x, y)\). The formula for temperature is given by \(T(x, y) = x^2y - y^3\).

Now, imagine that a small insect is crawling on this plate, and its position at any time \(t\) is described by the parametric equations \(x(t) = t^2\) and \(y(t) = 2t\). We want to find the rate at which the temperature experienced by the insect is changing with respect to time.

Here, \(T\) is a function of \(x\) and \(y\), and both \(x\) and \(y\) are functions of \(t\). We can use the multivariable chain rule to find \(\frac{dT}{dt}\).

1.  **Find the partial derivatives of \(T\) with respect to \(x\) and \(y\):**
    *   \(\frac{\partial T}{\partial x} = 2xy\)
    *   \(\frac{\partial T}{\partial y} = x^2 - 3y^2\)

2.  **Find the derivatives of \(x\) and \(y\) with respect to \(t\):**
    *   \(\frac{dx}{dt} = 2t\)
    *   \(\frac{dy}{dt} = 2\)

3.  **Apply the chain rule formula:**
    \[
    \frac{dT}{dt} = \frac{\partial T}{\partial x} \frac{dx}{dt} + \frac{\partial T}{\partial y} \frac{dy}{dt}
    \]
    \[
    \frac{dT}{dt} = (2xy)(2t) + (x^2 - 3y^2)(2)
    \]

4.  **Substitute the expressions for \(x\) and \(y\) in terms of \(t\):**
    \(x = t^2\), \(y = 2t\)
    \[
    \frac{dT}{dt} = (2(t^2)(2t))(2t) + ((t^2)^2 - 3(2t)^2)(2)
    \]
    \[
    \frac{dT}{dt} = (4t^3)(2t) + (t^4 - 12t^2)(2)
    \]
    \[
    \frac{dT}{dt} = 8t^4 + 2t^4 - 24t^2
    \]
    \[
    \frac{dT}{dt} = 10t^4 - 24t^2
    \]

This result tells us the rate of change of temperature the insect feels at any given time \(t\).

## Practice Task

Suppose the profit \(P\) of a company depends on the number of units sold \(x\) and the advertising cost \(y\) as \(P(x, y) = 100\sqrt{x} - 5y\). The number of units sold \(x\) depends on the advertising expenditure \(a\) and the price \(b\) as \(x(a, b) = 50a^2b\), and the advertising cost \(y\) depends on \(a\) and \(b\) as \(y(a, b) = 10a + 2b^2\).

Calculate \(\frac{\partial P}{\partial a}\) and \(\frac{\partial P}{\partial b}\) using the multivariable chain rule.

## Self-Check Questions

1.  What is the fundamental idea behind the multivariable chain rule?
2.  When you have a function \(z = f(u, v)\) and \(u = g(x, y)\), \(v = h(x, y)\), what are the formulas for \(\frac{\partial z}{\partial x}\) and \(\frac{\partial z}{\partial y}\)?
3.  In the temperature on a moving plate example, what does the final expression \(\frac{dT}{dt} = 10t^4 - 24t^2\) represent?

## Supports

- [[skills/mathematics/calculus/derivative-computation-and-analysis/microskills/chain-rule-application-multivariable|Chain rule application (multivariable)]]
