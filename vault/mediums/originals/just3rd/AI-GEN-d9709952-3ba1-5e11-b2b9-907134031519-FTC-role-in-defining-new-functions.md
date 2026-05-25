---
type: "medium"
title: "The FTC: Building New Functions from Areas"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/ftc-role-in-defining-new-functions|ftc-role-in-defining-new-functions]]"
related-skills:
  - "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/fundamental-theorem-of-calculus|fundamental-theorem-of-calculus]]"
learning-time-in-minutes: 3
---
# The FTC: Building New Functions from Areas

The Fundamental Theorem of Calculus (FTC) reveals a deep connection between differentiation and integration. While the FTC is often remembered for its role in evaluating definite integrals, it also provides a powerful way to *define* new functions. This lesson focuses on that aspect: understanding how the FTC allows us to construct and analyze functions based on accumulated areas.

### The "Area Accumulator" Function

Imagine a function, let's call it \(A(x)\), that represents the *area under the curve* of another function, \(f(t)\), from some starting point (say, \(a\)) up to a variable point \(x\). We can write this mathematically as:

\[
A(x) = \int_{a}^{x} f(t) \, dt
\]

Here, \(f(t)\) is the integrand, and \(dt\) indicates that we are integrating with respect to \(t\). The variable \(x\) is the upper limit of integration, and it's the value that determines the extent of the area we're accumulating. As \(x\) changes, the accumulated area \(A(x)\) also changes, thus defining a new function.

### The FTC's Revelation

The FTC tells us something remarkable about this "area accumulator" function \(A(x)\). Specifically, the *derivative* of \(A(x)\) with respect to \(x\) is simply the original function \(f(x)\) (evaluated at \(x\), not \(t\)).

Mathematically, this is stated as:

\[
A'(x) = \frac{d}{dx} \left( \int_{a}^{x} f(t) \, dt \right) = f(x)
\]

**What does this mean in plain English?**

It means that if you define a function by accumulating the area under another function, the rate at which that accumulated area changes (its derivative) is exactly the value of the original function at that point. In other words, integration (accumulating area) and differentiation (finding the rate of change) are inverse operations.

### Why is this important for defining new functions?

1.  **Constructing Functions with Specific Properties:** We can use this to build functions whose rates of change are precisely defined by another function. For example, if we want a function whose rate of growth is proportional to its current value, we can integrate a function representing that proportionality.

2.  **Understanding Accumulation:** It formalizes our intuition about how quantities accumulate over time or space. The FTC shows that the "flow" of accumulation (the derivative of the accumulated amount) is precisely the rate at which we are accumulating.

3.  **Defining Non-Elementary Functions:** Some functions are difficult or impossible to express using standard algebraic operations, exponentials, logarithms, and trigonometric functions. The FTC allows us to define such functions using integrals.

### Example: Defining a Logarithm Function

Historically, before the natural logarithm was formally defined using its own symbol \( \ln \), it was defined using this FTC concept. The natural logarithm of \(x\) can be defined as the area under the curve \(y = 1/t\) from 1 to \(x\):

\[
\ln(x) = \int_{1}^{x} \frac{1}{t} \, dt \quad \text{for } x > 0
\]

Let's use the FTC to find the derivative of this function:

Using the FTC, the derivative of \( \ln(x) \) with respect to \(x\) is:

\[
\frac{d}{dx} (\ln(x)) = \frac{d}{dx} \left( \int_{1}^{x} \frac{1}{t} \, dt \right)
\]

According to the FTC, the derivative is simply the integrand with \(t\) replaced by the upper limit of integration, \(x\):

\[
\frac{d}{dx} (\ln(x)) = \frac{1}{x}
\]

This confirms the well-known derivative of the natural logarithm. This integral definition using the FTC is fundamental to understanding the properties of the logarithm, such as its additive property \( \ln(ab) = \ln(a) + \ln(b) \).

### Key Takeaways

*   The FTC provides a method to define a new function by integrating another function up to a variable upper limit.
*   This "area accumulator" function's derivative is the original integrand.
*   This relationship highlights integration and differentiation as inverse processes.
*   This concept is crucial for understanding the construction of many important mathematical functions and their properties.

## Supports

- [[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/ftc-role-in-defining-new-functions|FTC role in defining new functions]]
