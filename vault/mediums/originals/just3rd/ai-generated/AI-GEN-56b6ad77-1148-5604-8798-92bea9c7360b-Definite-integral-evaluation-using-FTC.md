---
type: "medium"
title: "Evaluating Definite Integrals with the Fundamental Theorem of Calculus"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/definite-integral-evaluation-using-ftc|definite-integral-evaluation-using-ftc]]"
learning-time-in-minutes: 3
---
# Evaluating Definite Integrals with the Fundamental Theorem of Calculus

This lesson focuses on how to use the Fundamental Theorem of Calculus (FTC) to calculate the exact value of definite integrals. This is a crucial step in understanding the relationship between differentiation and integration.

### The Core Idea: Antiderivatives to the Rescue

You've learned that integration is the process of finding the "area under the curve" of a function. The Fundamental Theorem of Calculus provides a powerful shortcut for this. Instead of approximating the area with many small rectangles (like in Riemann sums), we can use antiderivatives.

The FTC states that if \(f(x)\) is continuous on the interval \([a, b]\) and \(F(x)\) is any antiderivative of \(f(x)\) (meaning \(F'(x) = f(x)\)), then the definite integral of \(f(x)\) from \(a\) to \(b\) is given by:

\[
\int_a^b f(x) \, dx = F(b) - F(a)
\]

This expression, \(F(b) - F(a)\), is often written more compactly as \([F(x)]_a^b\).

### Steps to Evaluate a Definite Integral using FTC

1.  **Identify the Integrand and Limits:** Determine the function you need to integrate, \(f(x)\), and the lower limit of integration, \(a\), and the upper limit of integration, \(b\).
2.  **Find an Antiderivative:** Find a function \(F(x)\) whose derivative is \(f(x)\). Remember that there are infinitely many antiderivatives for any function, differing by a constant \(C\). For definite integrals, this constant will cancel out, so we can usually choose \(C=0\).
3.  **Evaluate the Antiderivative at the Limits:** Calculate the value of the antiderivative at the upper limit (\(F(b)\)) and at the lower limit (\(F(a)\)).
4.  **Subtract:** Subtract the value at the lower limit from the value at the upper limit: \(F(b) - F(a)\).

### Worked Example

Let's evaluate the definite integral:

\[
\int_1^3 (2x + 1) \, dx
\]

**Step 1: Identify the Integrand and Limits**
*   Integrand: \(f(x) = 2x + 1\)
*   Lower limit: \(a = 1\)
*   Upper limit: \(b = 3\)

**Step 2: Find an Antiderivative**
We need a function \(F(x)\) such that \(F'(x) = 2x + 1\).
Using the power rule for integration (\(\int x^n \, dx = \frac{x^{n+1}}{n+1} + C\)) and the constant rule (\(\int c \, dx = cx + C\)):
*   The antiderivative of \(2x\) is \(2 \cdot \frac{x^{1+1}}{1+1} = 2 \cdot \frac{x^2}{2} = x^2\).
*   The antiderivative of \(1\) is \(1 \cdot x = x\).
So, an antiderivative is \(F(x) = x^2 + x\). We can choose \(C=0\).

**Step 3: Evaluate the Antiderivative at the Limits**
*   At the upper limit (\(b=3\)): \(F(3) = (3)^2 + 3 = 9 + 3 = 12\).
*   At the lower limit (\(a=1\)): \(F(1) = (1)^2 + 1 = 1 + 1 = 2\).

**Step 4: Subtract**
\[
\int_1^3 (2x + 1) \, dx = F(3) - F(1) = 12 - 2 = 10
\]

Therefore, the value of the definite integral is 10. This means the area under the curve of \(y = 2x + 1\) from \(x=1\) to \(x=3\) is exactly 10.

### Common Pitfalls to Avoid

*   **Forgetting the Antiderivative Rules:** Make sure you are comfortable with finding antiderivatives for common functions (power rule, trigonometric functions, exponential functions).
*   **Incorrectly Applying the Limits:** Always subtract \(F(a)\) from \(F(b)\). Mixing this up will result in the negative of the correct answer.
*   **Missing the Constant of Integration (for indefinite integrals):** While the \("+ C"\) cancels out in definite integrals, it's a fundamental part of finding indefinite integrals. Be mindful of it when you're in that context.
*   **Arithmetic Errors:** Simple calculation mistakes can easily lead to the wrong final answer. Double-check your arithmetic.

By mastering this application of the Fundamental Theorem of Calculus, you gain an efficient and precise method for calculating definite integrals, opening doors to solving a wide range of problems in mathematics, science, and engineering.

## Supports

- [[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/definite-integral-evaluation-using-ftc|Definite integral evaluation using FTC]]
