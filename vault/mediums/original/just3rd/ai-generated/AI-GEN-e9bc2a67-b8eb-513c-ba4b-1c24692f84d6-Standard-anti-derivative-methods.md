---
type: "medium"
title: "Standard Anti-derivative Methods"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/integral-evaluation/microskills/standard-anti-derivative-methods|standard-anti-derivative-methods]]"
learning-time-in-minutes: 4
---
# Standard Anti-derivative Methods

This lesson focuses on recalling the fundamental techniques used to find anti-derivatives, a key part of Integral Evaluation. Mastering these methods will equip you to tackle a wide range of integration problems.

## What is an Anti-derivative?

Before diving into the techniques, let's quickly recap. An anti-derivative of a function \(f(x)\) is a function \(F(x)\) whose derivative is \(f(x)\). In other words, if \(F'(x) = f(x)\), then \(F(x)\) is an anti-derivative of \(f(x)\).

The most common notation for an anti-derivative (or indefinite integral) is:
$$ \int f(x) \, dx = F(x) + C $$
Here, \(C\) represents the constant of integration. This is because the derivative of a constant is always zero, so there are infinitely many anti-derivatives for any given function, differing only by a constant.

## Core Techniques for Finding Anti-derivatives

The journey to finding anti-derivatives often involves recognizing patterns and applying specific rules. Here are the standard techniques you should remember:

### 1. The Power Rule for Integration

This is the most fundamental rule and is the inverse of the power rule for differentiation.

*   **Rule:** For any real number \(n \neq -1\), the anti-derivative of \(x^n\) is given by:
    $$ \int x^n \, dx = \frac{x^{n+1}}{n+1} + C $$

*   **Example:** Find the anti-derivative of \(x^3\).
    Here, \(n=3\).
    $$ \int x^3 \, dx = \frac{x^{3+1}}{3+1} + C = \frac{x^4}{4} + C $$

*   **Special Case:** For \(n=0\) (i.e., a constant function \(f(x)=1\)):
    $$ \int 1 \, dx = \int x^0 \, dx = \frac{x^{0+1}}{0+1} + C = x + C $$

### 2. The Constant Multiple Rule

This rule states that you can pull any constant factor out of an integral.

*   **Rule:** If \(k\) is a constant, then:
    $$ \int k \cdot f(x) \, dx = k \int f(x) \, dx $$

*   **Example:** Find the anti-derivative of \(5x^2\).
    $$ \int 5x^2 \, dx = 5 \int x^2 \, dx $$
    Now, applying the power rule to \(\int x^2 \, dx\):
    $$ 5 \left( \frac{x^{2+1}}{2+1} \right) + C = 5 \left( \frac{x^3}{3} \right) + C = \frac{5}{3}x^3 + C $$

### 3. The Sum and Difference Rules

When integrating a sum or difference of functions, you can integrate each term separately.

*   **Rule:**
    $$ \int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx $$

*   **Example:** Find the anti-derivative of \(x^2 + 3x - 7\).
    We can integrate each term:
    $$ \int (x^2 + 3x - 7) \, dx = \int x^2 \, dx + \int 3x \, dx - \int 7 \, dx $$
    Applying the power rule and constant multiple rule:
    $$ \frac{x^{2+1}}{2+1} + 3 \left( \frac{x^{1+1}}{1+1} \right) - 7x + C $$
    $$ \frac{x^3}{3} + 3 \left( \frac{x^2}{2} \right) - 7x + C $$
    $$ \frac{x^3}{3} + \frac{3}{2}x^2 - 7x + C $$

### 4. Standard Integrals of Trigonometric Functions

There are specific anti-derivatives for basic trigonometric functions that are crucial to remember.

*   **Key Integrals:**
    $$ \int \cos(x) \, dx = \sin(x) + C $$
    $$ \int \sin(x) \, dx = -\cos(x) + C $$
    $$ \int \sec^2(x) \, dx = \tan(x) + C $$
    $$ \int \sec(x) \tan(x) \, dx = \sec(x) + C $$
    $$ \int \csc^2(x) \, dx = -\cot(x) + C $$
    $$ \int \csc(x) \cot(x) \, dx = -\csc(x) + C $$

*   **Example:** Find the anti-derivative of \(2\sin(x) - \sec^2(x)\).
    $$ \int (2\sin(x) - \sec^2(x)) \, dx = \int 2\sin(x) \, dx - \int \sec^2(x) \, dx $$
    $$ = 2 \int \sin(x) \, dx - \int \sec^2(x) \, dx $$
    $$ = 2(-\cos(x)) - \tan(x) + C $$
    $$ = -2\cos(x) - \tan(x) + C $$

### 5. Standard Integrals of Exponential and Logarithmic Functions

The derivatives of exponential and logarithmic functions are closely related, and their anti-derivatives follow suit.

*   **Key Integrals:**
    $$ \int e^x \, dx = e^x + C $$
    $$ \int a^x \, dx = \frac{a^x}{\ln(a)} + C \quad (\text{for } a > 0, a \neq 1) $$
    $$ \int \frac{1}{x} \, dx = \ln|x| + C $$

*   **Example:** Find the anti-derivative of \(3^x + \frac{2}{x}\).
    $$ \int \left(3^x + \frac{2}{x}\right) \, dx = \int 3^x \, dx + \int \frac{2}{x} \, dx $$
    $$ = \int 3^x \, dx + 2 \int \frac{1}{x} \, dx $$
    $$ = \frac{3^x}{\ln(3)} + 2\ln|x| + C $$

### 6. Substitution (u-substitution)

While not always a "standard" integral form in itself, substitution is a fundamental technique that *transforms* a problem into one that can be solved using the above rules. It's the inverse of the chain rule for differentiation.

*   **When to Use:** When the integrand contains a composite function and its derivative (or a constant multiple of its derivative). You'll often see a function and its derivative multiplied together within the integral.

*   **General Idea:** Let \(u\) be an inner function. Then \(du\) will be its derivative multiplied by \(dx\). Substitute \(u\) and \(du\) into the integral, solve for \(u\), and then substitute back the original expression for \(u\).

*   **Example:** Find the anti-derivative of \(2x(x^2 + 1)^3\).
    Let \(u = x^2 + 1\).
    Then \(du = 2x \, dx\).
    The integral becomes:
    $$ \int u^3 \, du $$
    Using the power rule for integration:
    $$ \frac{u^{3+1}}{3+1} + C = \frac{u^4}{4} + C $$
    Now, substitute back \(u = x^2 + 1\):
    $$ \frac{(x^2 + 1)^4}{4} + C $$

## Summary of Standard Techniques

To excel at finding anti-derivatives, commit these core techniques to memory:

*   **Power Rule:** For \(x^n\) where \(n \neq -1\).
*   **Constant Multiple Rule:** Pulling constants out.
*   **Sum/Difference Rule:** Integrating term by term.
*   **Basic Trigonometric Integrals:** Remembering \(\sin, \cos, \sec, \tan\).
*   **Exponential/Logarithmic Integrals:** For \(e^x, a^x, 1/x\).
*   **Substitution (u-substitution):** To simplify complex integrands.

Practice applying these rules consistently. As you encounter more complex integrals, these fundamental techniques will form the building blocks for more advanced methods like integration by parts and partial fractions.

## Supports

- [[skills/mathematics/calculus/integral-evaluation/microskills/standard-anti-derivative-methods|Standard anti-derivative methods]]
