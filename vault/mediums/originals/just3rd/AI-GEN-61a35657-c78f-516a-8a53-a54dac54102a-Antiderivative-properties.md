---
type: "medium"
title: "Antiderivative Properties"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/antiderivative-properties|antiderivative-properties]]"
related-skills:
  - "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/fundamental-theorem-of-calculus|fundamental-theorem-of-calculus]]"
learning-time-in-minutes: 3
---
# Antiderivative Properties

As we explore the Fundamental Theorem of Calculus, understanding the building blocks is crucial. One of these essential building blocks is the concept of antiderivatives and their properties. This lesson focuses on recalling and enumerating these fundamental properties.

## What is an Antiderivative?

An antiderivative of a function \(f(x)\) is a function \(F(x)\) whose derivative is \(f(x)\). In simpler terms, it's the "reverse" of differentiation.

If \(F'(x) = f(x)\), then \(F(x)\) is an antiderivative of \(f(x)\).

For example, if \(f(x) = 2x\), then \(F(x) = x^2\) is an antiderivative because the derivative of \(x^2\) is \(2x\).

### The Constant of Integration

A key point to remember about antiderivatives is that there isn't just one! If \(F(x)\) is an antiderivative of \(f(x)\), then \(F(x) + C\), where \(C\) is any constant, is also an antiderivative. This is because the derivative of a constant is always zero.

So, for \(f(x) = 2x\), the antiderivatives are \(x^2 + C\), where \(C\) can be any real number (e.g., \(x^2 + 5\), \(x^2 - 3\), \(x^2\)). This collection of all antiderivatives is called the **indefinite integral**, denoted by:

\[
\int f(x) \, dx = F(x) + C
\]

## Fundamental Properties of Antiderivatives

These properties allow us to find antiderivatives of more complex functions by breaking them down into simpler pieces.

### 1. The Constant Multiple Rule

The antiderivative of a constant times a function is the constant times the antiderivative of the function.

If \(c\) is a constant and \(f(x)\) is a function, then:

\[
\int c f(x) \, dx = c \int f(x) \, dx
\]

**Example:**
To find the antiderivative of \(5x^3\):
We can pull out the constant 5 and find the antiderivative of \(x^3\).
\[
\int 5x^3 \, dx = 5 \int x^3 \, dx
\]

### 2. The Sum and Difference Rule

The antiderivative of a sum (or difference) of functions is the sum (or difference) of their antiderivatives.

If \(f(x)\) and \(g(x)\) are functions, then:

\[
\int [f(x) + g(x)] \, dx = \int f(x) \, dx + \int g(x) \, dx
\]

and

\[
\int [f(x) - g(x)] \, dx = \int f(x) \, dx - \int g(x) \, dx
\]

**Example:**
To find the antiderivative of \(x^2 + 3x\):
We can find the antiderivative of \(x^2\) and add it to the antiderivative of \(3x\).
\[
\int (x^2 + 3x) \, dx = \int x^2 \, dx + \int 3x \, dx
\]

### 3. Power Rule for Antiderivatives

This is a fundamental rule for finding antiderivatives of polynomial terms.

For any real number \(n \neq -1\):

\[
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C
\]

**Example:**
*   For \(x^2\): Here \(n=2\). So, \(\int x^2 \, dx = \frac{x^{2+1}}{2+1} + C = \frac{x^3}{3} + C\).
*   For \(x\): This is \(x^1\), so \(n=1\). \(\int x \, dx = \frac{x^{1+1}}{1+1} + C = \frac{x^2}{2} + C\).
*   For \(\sqrt{x}\): First, rewrite as \(x^{1/2}\). Here \(n=1/2\). So, \(\int x^{1/2} \, dx = \frac{x^{1/2+1}}{1/2+1} + C = \frac{x^{3/2}}{3/2} + C = \frac{2}{3}x^{3/2} + C\).

### 4. Antiderivative of a Constant

A special case of the power rule, or can be stated directly.

\[
\int k \, dx = kx + C
\]

where \(k\) is a constant.

**Example:**
\[
\int 7 \, dx = 7x + C
\]

### 5. Antiderivatives of Basic Trigonometric Functions

These are standard results you should memorize.

*   \[ \int \sin(x) \, dx = -\cos(x) + C \]
*   \[ \int \cos(x) \, dx = \sin(x) + C \]
*   \[ \int \sec^2(x) \, dx = \tan(x) + C \]

### 6. Antiderivatives of Exponential Functions

*   For the natural exponential function:
    \[ \int e^x \, dx = e^x + C \]

*   For other bases:
    \[ \int a^x \, dx = \frac{a^x}{\ln(a)} + C \]
    where \(a > 0\) and \(a \neq 1\).

**Example:**
\[
\int 3^x \, dx = \frac{3^x}{\ln(3)} + C
\]

## Practice Recalling These Properties

Before moving on to more complex applications of the Fundamental Theorem of Calculus, ensure you can recall these basic antiderivative properties without hesitation. Practice by listing them out, or by finding the antiderivative of simple functions that utilize these rules.

## Supports

- [[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/antiderivative-properties|Antiderivative properties]]
