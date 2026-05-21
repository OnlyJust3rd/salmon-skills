---
type: "medium"
title: "Maclaurin Series Expansion"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/power-series-and-taylor-expansions/microskills/maclaurin-series-expansion|maclaurin-series-expansion]]"
---
# Maclaurin Series Expansion

This lesson focuses on the Maclaurin series, a specific type of Taylor expansion. Understanding Maclaurin series is a key step in mastering power series and Taylor expansions, allowing you to approximate function values and understand function behavior near zero.

## What is a Maclaurin Series?

A Maclaurin series is simply a Taylor series expansion of a function around the point $x=0$. The general formula for a Taylor series of a function $f(x)$ centered at $a$ is:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots
$$

When we set the center $a=0$, the formula simplifies to the Maclaurin series:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots
$$

This series represents the function $f(x)$ as an infinite polynomial in $x$, provided the series converges to $f(x)$.

## Why Use Maclaurin Series?

Maclaurin series are incredibly useful for:

*   **Approximating function values:** For functions where direct calculation is difficult or impossible, their Maclaurin series can provide accurate approximations, especially for values of $x$ close to 0.
*   **Analyzing function behavior:** The polynomial form of the series reveals insights into the function's shape and behavior near $x=0$.
*   **Solving differential equations:** Maclaurin series can be used as a method to find series solutions to certain differential equations.
*   **Evaluating limits:** They can simplify complex limit expressions.

## Common Maclaurin Series

Some standard functions have well-known Maclaurin series expansions that are frequently used. Memorizing these can save significant time.

Here are a few essential ones:

*   **Exponential Function:**
    $$
    e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots
    $$
    This series converges for all $x$.

*   **Sine Function:**
    $$
    \sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots
    $$
    This series converges for all $x$. Notice it only contains odd powers of $x$.

*   **Cosine Function:**
    $$
    \cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots
    $$
    This series converges for all $x$. Notice it only contains even powers of $x$.

*   **Geometric Series (for $|x| < 1$):**
    $$
    \frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + x^4 + \dots
    $$

## Calculating a Maclaurin Series

When you need to find the Maclaurin series for a function that isn't one of the standard ones, you can use the general formula. This involves finding the function's derivatives, evaluating them at $x=0$, and plugging them into the series formula.

Let's find the Maclaurin series for $f(x) = e^{2x}$.

**Steps:**

1.  **Find the derivatives of $f(x)$:**
    *   $f(x) = e^{2x}$
    *   $f'(x) = 2e^{2x}$
    *   $f''(x) = 2^2e^{2x} = 4e^{2x}$
    *   $f'''(x) = 2^3e^{2x} = 8e^{2x}$
    *   In general, $f^{(n)}(x) = 2^n e^{2x}$.

2.  **Evaluate the derivatives at $x=0$:**
    *   $f(0) = e^{2(0)} = e^0 = 1$
    *   $f'(0) = 2e^{2(0)} = 2(1) = 2$
    *   $f''(0) = 4e^{2(0)} = 4(1) = 4$
    *   $f'''(0) = 8e^{2(0)} = 8(1) = 8$
    *   In general, $f^{(n)}(0) = 2^n$.

3.  **Plug the values into the Maclaurin series formula:**
    $$
    f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n
    $$
    $$
    e^{2x} = \frac{f(0)}{0!}x^0 + \frac{f'(0)}{1!}x^1 + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots
    $$
    $$
    e^{2x} = \frac{1}{0!} + \frac{2}{1!}x + \frac{4}{2!}x^2 + \frac{8}{3!}x^3 + \dots
    $$
    $$
    e^{2x} = 1 + 2x + \frac{4}{2}x^2 + \frac{8}{6}x^3 + \dots
    $$
    $$
    e^{2x} = 1 + 2x + 2x^2 + \frac{4}{3}x^3 + \dots
    $$

    The general term is $\frac{2^n}{n!}x^n$. So the Maclaurin series for $e^{2x}$ is:
    $$
    e^{2x} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!}
    $$

**Alternative Method (Using Known Series):**

Since we know the Maclaurin series for $e^u$ is $\sum_{n=0}^{\infty} \frac{u^n}{n!}$, we can substitute $u = 2x$ directly:

$$
e^{2x} = \sum_{n=0}^{\infty} \frac{(2x)^n}{n!} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!}
$$
This yields the same result much faster if you can recognize the pattern.

## Applying Maclaurin Series for Approximation

Let's use the Maclaurin series for $e^x$ to approximate $e^{0.1}$. The Maclaurin series is $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$.

We can use a few terms to get an approximation:

*   **Using the first term:** $e^{0.1} \approx 1$ (Not very accurate)
*   **Using the first two terms:** $e^{0.1} \approx 1 + 0.1 = 1.1$
*   **Using the first three terms:** $e^{0.1} \approx 1 + 0.1 + \frac{(0.1)^2}{2} = 1 + 0.1 + \frac{0.01}{2} = 1 + 0.1 + 0.005 = 1.105$
*   **Using the first four terms:** $e^{0.1} \approx 1 + 0.1 + 0.005 + \frac{(0.1)^3}{6} = 1.105 + \frac{0.001}{6} \approx 1.105 + 0.000167 = 1.105167$

The actual value of $e^{0.1}$ is approximately $1.1051709$. As you include more terms in the Maclaurin series, the approximation gets closer to the actual value, especially when $x$ is close to 0.

## Common Pitfalls

*   **Incorrectly calculating derivatives:** Double-check your derivative calculations, especially for composite functions or trigonometric functions.
*   **Errors in evaluating at $x=0$:** A simple arithmetic mistake here can propagate through the entire series.
*   **Forgetting the factorial in the denominator:** The $n!$ term is crucial for the series to be correct.
*   **Ignoring the interval of convergence:** Not all Maclaurin series converge for all values of $x$. While the examples shown (e^x, sin x, cos x) converge everywhere, other functions might have restrictions. The geometric series $\frac{1}{1-x}$ is only valid for $|x|<1$.

## Supports

- [[skills/mathematics/power-series-and-taylor-expansions/microskills/maclaurin-series-expansion|Maclaurin series expansion]]
