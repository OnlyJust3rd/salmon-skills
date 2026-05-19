---
type: "medium"
title: "Approximating Function Values with Maclaurin Series"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/power-series-and-taylor-expansions/microskills/function-value-approximation-using-maclaurin-series|Function value approximation using Maclaurin series]]"
---
# Approximating Function Values with Maclaurin Series

We've learned about power series and Taylor expansions, and now we'll focus on a specific and very useful application: approximating function values using Maclaurin series. A Maclaurin series is simply a Taylor series expansion of a function centered at $a=0$. This simplification makes it particularly handy for approximating function values near zero.

## Why Approximate Function Values?

Many functions, like $e^x$, $\sin(x)$, or $\cos(x)$, have infinite series expansions. While these expansions are exact representations, they are often impractical to calculate directly, especially for specific values. Maclaurin series provide a way to approximate these functions using a finite number of terms, making calculations feasible and often surprisingly accurate.

This is especially important in fields like physics, engineering, and computer science where rapid estimation of function values is crucial.

## The Maclaurin Series Formula

The Maclaurin series for a function $f(x)$ is given by:

$$
f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots + \frac{f^{(n)}(0)}{n!}x^n + \dots
$$

This can be written more compactly using summation notation:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n
$$

where:
*   $f^{(n)}(0)$ is the $n$-th derivative of $f(x)$ evaluated at $x=0$.
*   $n!$ is the factorial of $n$ ($n! = n \times (n-1) \times \dots \times 2 \times 1$).

### The Approximation

To approximate a function value, we use a finite number of terms from the Maclaurin series. This finite sum is called a Maclaurin polynomial. The more terms we include, the better the approximation generally becomes, especially for values of $x$ close to 0.

The $N$-th degree Maclaurin polynomial, denoted by $P_N(x)$, is:

$$
P_N(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \dots + \frac{f^{(N)}(0)}{N!}x^N
$$

So, $f(x) \approx P_N(x)$.

## Worked Example: Approximating $e^x$

Let's approximate the value of $e^{0.1}$ using the Maclaurin series for $f(x) = e^x$.

**Step 1: Find the Maclaurin series for $f(x) = e^x$.**

We need to find the derivatives of $f(x) = e^x$ and evaluate them at $x=0$:

*   $f(x) = e^x \implies f(0) = e^0 = 1$
*   $f'(x) = e^x \implies f'(0) = e^0 = 1$
*   $f''(x) = e^x \implies f''(0) = e^0 = 1$
*   $f'''(x) = e^x \implies f'''(0) = e^0 = 1$

In general, $f^{(n)}(x) = e^x$, so $f^{(n)}(0) = 1$ for all $n \ge 0$.

Substituting these into the Maclaurin series formula:

$$
e^x = 1 + \frac{1}{1!}x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \dots
$$

**Step 2: Use a Maclaurin polynomial to approximate $e^{0.1}$.**

Let's use the first four terms (up to the $x^3$ term) of the Maclaurin series for $e^x$. This means we are using the third-degree Maclaurin polynomial, $P_3(x)$:

$$
P_3(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!}
$$

Now, substitute $x = 0.1$:

$$
e^{0.1} \approx P_3(0.1) = 1 + (0.1) + \frac{(0.1)^2}{2} + \frac{(0.1)^3}{6}
$$

Let's calculate each term:
*   $1 = 1$
*   $0.1 = 0.1$
*   $\frac{(0.1)^2}{2} = \frac{0.01}{2} = 0.005$
*   $\frac{(0.1)^3}{6} = \frac{0.001}{6} \approx 0.00016667$

Summing these up:
$$
e^{0.1} \approx 1 + 0.1 + 0.005 + 0.00016667 = 1.10516667
$$

**Comparison:**
The actual value of $e^{0.1}$ is approximately $1.105170918$. Our approximation using just four terms is remarkably close!

## Key Considerations for Approximation

*   **Proximity to the Center:** Maclaurin series approximations are generally more accurate for values of $x$ that are closer to the center of the expansion ($x=0$). As $|x|$ increases, you typically need more terms for a good approximation.
*   **Number of Terms:** Including more terms in the Maclaurin polynomial will generally improve the accuracy of the approximation. The "cost" of this accuracy is increased computation.
*   **Error Bound:** For many functions, there are ways to estimate the maximum possible error introduced by using a finite number of terms. This is known as the remainder term.

## Practice Problem

Use the Maclaurin series for $\cos(x)$ to approximate $\cos(0.2)$. Use terms up to $x^4$.

Recall that the Maclaurin series for $\cos(x)$ is:
$$
\cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots
$$

**Your Task:**
1.  Identify the Maclaurin polynomial $P_4(x)$ for $\cos(x)$.
2.  Substitute $x = 0.2$ into $P_4(x)$.
3.  Calculate the approximate value of $\cos(0.2)$.

By practicing these approximations, you'll build a strong intuition for how Maclaurin series can be used to efficiently estimate function values.

## Supports

- [[skills/mathematics/power-series-and-taylor-expansions/microskills/function-value-approximation-using-maclaurin-series|Function value approximation using Maclaurin series]]
