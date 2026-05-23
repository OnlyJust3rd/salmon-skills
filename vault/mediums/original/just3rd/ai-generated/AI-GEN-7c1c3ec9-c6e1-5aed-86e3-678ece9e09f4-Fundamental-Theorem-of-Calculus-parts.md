---
type: "medium"
title: "Understanding the Parts of the Fundamental Theorem of Calculus"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/fundamental-theorem-of-calculus-parts|fundamental-theorem-of-calculus-parts]]"
learning-time-in-minutes: 3
---
# Understanding the Parts of the Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus (FTC) is a cornerstone of calculus, connecting the concepts of differentiation and integration. It essentially states that these two operations are inverses of each other. To fully grasp this powerful theorem, it's crucial to understand its individual parts.

## Part 1 of the Fundamental Theorem of Calculus

Part 1 of the FTC deals with how to find the derivative of an integral. It tells us that if we define a function as an integral with a variable upper limit, its derivative will be the integrand evaluated at that upper limit.

### Definition

Let \(f\) be a continuous function on an interval \( [a, b] \). Define a function \(F\) on \( [a, b] \) by
\[
F(x) = \int_{a}^{x} f(t) \, dt
\]
Then, \(F\) is differentiable on \( (a, b) \), and
\[
F'(x) = \frac{d}{dx} \int_{a}^{x} f(t) \, dt = f(x)
\]

### What This Means

In simpler terms, Part 1 says that if you integrate a function \(f(t)\) from a constant \(a\) up to a variable \(x\), and then you differentiate that result with respect to \(x\), you get back the original function \(f(x)\). This confirms the inverse relationship between differentiation and integration.

### Example

Let's say we have the function \( f(t) = t^2 \) and we define a new function:
\[
G(x) = \int_{0}^{x} t^2 \, dt
\]
According to Part 1 of the FTC, the derivative of \(G(x)\) with respect to \(x\) should be \(f(x)\). So,
\[
G'(x) = \frac{d}{dx} \int_{0}^{x} t^2 \, dt = x^2
\]
We can verify this by actually performing the integration first:
\[
G(x) = \int_{0}^{x} t^2 \, dt = \left[ \frac{t^3}{3} \right]_{0}^{x} = \frac{x^3}{3} - \frac{0^3}{3} = \frac{x^3}{3}
\]
Now, let's differentiate \(G(x)\):
\[
G'(x) = \frac{d}{dx} \left( \frac{x^3}{3} \right) = \frac{3x^2}{3} = x^2
\]
As expected, \(G'(x) = x^2\), which is indeed \(f(x)\).

## Part 2 of the Fundamental Theorem of Calculus

Part 2 of the FTC provides a method for evaluating definite integrals. It states that if you can find an antiderivative of a function, you can find the definite integral by evaluating that antiderivative at the upper and lower limits of integration and subtracting.

### Definition

Let \(f\) be continuous on \( [a, b] \) and let \(F\) be any antiderivative of \(f\) on \( [a, b] \) (meaning \( F'(x) = f(x) \)). Then
\[
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
\]

### What This Means

This is the part of the FTC that we most often use to calculate the exact value of definite integrals. It says that to find the area under a curve \(f(x)\) from \(a\) to \(b\), you just need to find a function whose derivative is \(f(x)\) (an antiderivative), plug in the upper limit \(b\), plug in the lower limit \(a\), and subtract the second result from the first.

### Example

Let's find the definite integral of \( f(x) = x^3 \) from \( x=1 \) to \( x=3 \).
\[
\int_{1}^{3} x^3 \, dx
\]
First, we need to find an antiderivative of \( f(x) = x^3 \). Using the power rule for integration, an antiderivative is \( F(x) = \frac{x^{3+1}}{3+1} = \frac{x^4}{4} \).

Now, we apply Part 2 of the FTC:
\[
\int_{1}^{3} x^3 \, dx = F(3) - F(1)
\]
Evaluate \(F(x)\) at the upper limit \(x=3\):
\[
F(3) = \frac{3^4}{4} = \frac{81}{4}
\]
Evaluate \(F(x)\) at the lower limit \(x=1\):
\[
F(1) = \frac{1^4}{4} = \frac{1}{4}
\]
Subtract the two values:
\[
F(3) - F(1) = \frac{81}{4} - \frac{1}{4} = \frac{80}{4} = 20
\]
So, the value of the definite integral is 20.

## Key Takeaways

*   **Part 1:** The derivative of an integral with a variable upper limit is the integrand itself. It shows that differentiation "undoes" integration.
*   **Part 2:** To evaluate a definite integral, find an antiderivative and evaluate it at the limits of integration, then subtract. It provides a practical method for computing areas and accumulation.

Understanding these two parts is fundamental to mastering calculus and its applications.

## Supports

- [[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/fundamental-theorem-of-calculus-parts|Fundamental Theorem of Calculus parts]]
