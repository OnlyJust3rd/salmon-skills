---
type: "medium"
title: "Taylor Series Expansion"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/power-series-and-taylor-expansions/microskills/taylor-series-expansion|taylor-series-expansion]]"
related-skills:
  - "[[skills/mathematics/calculus/power-series-and-taylor-expansions/power-series-and-taylor-expansions|power-series-and-taylor-expansions]]"
learning-time-in-minutes: 4
---
# Taylor Series Expansion

This lesson focuses on understanding and applying the Taylor series expansion for standard functions. This is a fundamental technique within the broader topic of Power Series and Taylor Expansions, allowing us to approximate complex functions with simpler polynomials.

## What is a Taylor Series?

A Taylor series is a way to represent a function as an infinite sum of terms. These terms are calculated from the values of the function's derivatives at a single point. Essentially, it's like building a very accurate approximation of a function using a polynomial, where the accuracy increases with more terms.

The general form of a Taylor series expansion of a function $f(x)$ about a point $a$ is:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

where:
*   $f^{(n)}(a)$ is the $n$-th derivative of $f(x)$ evaluated at $a$.
*   $n!$ is the factorial of $n$ ($n! = n \times (n-1) \times \dots \times 2 \times 1$), with $0! = 1$.
*   $(x-a)^n$ is the term $(x-a)$ raised to the power of $n$.

### Maclaurin Series: A Special Case

A Maclaurin series is a Taylor series expansion about the point $a=0$. This simplifies the formula:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n
$$

This is often easier to work with, as evaluating derivatives at 0 is usually straightforward.

## Why Use Taylor Series?

Taylor series are incredibly useful for several reasons:

*   **Approximation:** They allow us to approximate function values, especially for functions that are difficult to calculate directly.
*   **Simplification:** Polynomials are much simpler to work with than many other functions (like trigonometric or exponential functions), making calculations and analysis easier.
*   **Solving Differential Equations:** They are fundamental in finding solutions to differential equations.
*   **Understanding Function Behavior:** The terms in a Taylor series reveal insights into how a function behaves near a specific point.

## Steps to Expand a Function using Taylor Series

Let's outline the process of finding a Taylor series expansion for a function $f(x)$ around a point $a$.

1.  **Calculate Derivatives:** Find the first few derivatives of $f(x)$: $f'(x)$, $f''(x)$, $f'''(x)$, and so on. The number of derivatives needed depends on the desired accuracy or the pattern you observe.
2.  **Evaluate Derivatives at 'a':** Substitute the point $a$ into each of the derivatives calculated in step 1: $f(a)$, $f'(a)$, $f''(a)$, $f'''(a)$, etc.
3.  **Calculate Factorials:** Compute the factorials of the corresponding derivative orders: $0!$, $1!$, $2!$, $3!$, etc.
4.  **Form the Terms:** Construct the individual terms of the Taylor series using the formula: $\frac{f^{(n)}(a)}{n!}(x-a)^n$.
5.  **Sum the Terms:** Add the terms together to form the Taylor series expansion. Identify any discernible pattern for an infinite series.

## Worked Example: Expanding \(e^x\) around \(a=0\) (Maclaurin Series)

Let's find the Maclaurin series for the function $f(x) = e^x$.

1.  **Calculate Derivatives:**
    *   $f(x) = e^x$
    *   $f'(x) = e^x$
    *   $f''(x) = e^x$
    *   $f'''(x) = e^x$
    *   In general, $f^{(n)}(x) = e^x$ for all $n \ge 0$.

2.  **Evaluate Derivatives at \(a=0\):**
    *   $f(0) = e^0 = 1$
    *   $f'(0) = e^0 = 1$
    *   $f''(0) = e^0 = 1$
    *   $f'''(0) = e^0 = 1$
    *   In general, $f^{(n)}(0) = 1$ for all $n \ge 0$.

3.  **Calculate Factorials:**
    *   $0! = 1$
    *   $1! = 1$
    *   $2! = 2$
    *   $3! = 6$
    *   And so on...

4.  **Form the Terms:** Using the Maclaurin series formula $f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n$:
    *   Term 0 ($n=0$): $\frac{f^{(0)}(0)}{0!}x^0 = \frac{1}{1} \times 1 = 1$
    *   Term 1 ($n=1$): $\frac{f^{(1)}(0)}{1!}x^1 = \frac{1}{1}x = x$
    *   Term 2 ($n=2$): $\frac{f^{(2)}(0)}{2!}x^2 = \frac{1}{2}x^2$
    *   Term 3 ($n=3$): $\frac{f^{(3)}(0)}{3!}x^3 = \frac{1}{6}x^3$
    *   And so on...

5.  **Sum the Terms:**
    $$
    e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots
    $$
    This can be written compactly as:
    $$
    e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
    $$

This is the well-known Maclaurin series for $e^x$. If we wanted to approximate $e^{0.5}$, we could use the first few terms of this series: $1 + 0.5 + \frac{(0.5)^2}{2} + \frac{(0.5)^3}{6}$.

## Common Taylor and Maclaurin Series

It's very useful to memorize the Taylor (or Maclaurin) series for common functions, as they appear frequently.

| Function      | Maclaurin Series                                             |
| :------------ | :----------------------------------------------------------- |
| \(e^x\)       | $$ \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots $$ |
| \(\sin x\)    | $$ \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots $$ |
| \(\cos x\)    | $$ \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots $$ |
| \(\frac{1}{1-x}\) | $$ \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \dots \quad (|x|<1) $$ |
| \(\ln(1+x)\)  | $$ \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots \quad (|x|<1) $$ |

## Practice Problems

1.  Find the Maclaurin series for $f(x) = \sin x$.
2.  Find the Taylor series for $f(x) = \ln x$ around $a=1$.
3.  Use the first three non-zero terms of the Maclaurin series for $\cos x$ to approximate $\cos(0.2)$.

## Supports

- [[skills/mathematics/calculus/power-series-and-taylor-expansions/microskills/taylor-series-expansion|Taylor series expansion]]
