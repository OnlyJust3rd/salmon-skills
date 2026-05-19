---
type: "medium"
title: "Analyzing Power Series Convergence"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/power-series-and-taylor-expansions/microskills/power-series-convergence-assessment|Power series convergence assessment]]"
---
# Analyzing Power Series Convergence

When working with power series, a critical step is to understand for which values of $x$ the series actually converges to a finite sum. This is where we analyze the **radius and interval of convergence**. A power series is an infinite series of the form:

$$
\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots
$$

where $c_n$ are constants and $a$ is the center of the series. We want to find the set of all $x$ values for which this series converges.

## The Radius of Convergence

The **radius of convergence**, denoted by $R$, is a non-negative number that dictates how "far" from the center $a$ the power series will converge.

*   If $R = 0$, the series only converges at the center $x=a$.
*   If $R = \infty$, the series converges for all real numbers $x$.
*   If $0 < R < \infty$, the series converges for all $x$ such that $|x-a| < R$ and diverges for all $x$ such that $|x-a| > R$.

The most common tool to determine the radius of convergence is the **Ratio Test**.

### The Ratio Test for Power Series

For a power series $\sum_{n=0}^{\infty} c_n (x-a)^n$, let $a_n = c_n (x-a)^n$. We apply the Ratio Test by calculating the limit:

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \right|
$$

Simplifying this gives:

$$
L = |x-a| \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|
$$

The Ratio Test states that the series converges absolutely if $L < 1$ and diverges if $L > 1$. The test is inconclusive if $L = 1$.

From $L < 1$, we get $|x-a| \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| < 1$.
If $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| \neq 0$, we can write:

$$
|x-a| < \frac{1}{\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|}
$$

This inequality tells us that the series converges when $|x-a| < R$, where:

$$
R = \frac{1}{\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|}
$$

If the limit is 0, then $R = \infty$. If the limit is $\infty$, then $R = 0$.

### Worked Example: Radius of Convergence

Let's find the radius of convergence for the power series:

$$
\sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

Here, $c_n = \frac{1}{n!}$ and $a=0$.
We need to calculate $\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|$:

$$
\lim_{n \to \infty} \left| \frac{1/(n+1)!}{1/n!} \right| = \lim_{n \to \infty} \left| \frac{n!}{(n+1)!} \right| = \lim_{n \to \infty} \left| \frac{n!}{(n+1) \cdot n!} \right| = \lim_{n \to \infty} \frac{1}{n+1} = 0
$$

Since this limit is 0, the radius of convergence is:

$$
R = \frac{1}{0} = \infty
$$

This means the series converges for all real numbers $x$.

## The Interval of Convergence

The radius of convergence $R$ tells us that the series converges for $|x-a| < R$. This inequality defines an open interval $(a-R, a+R)$. However, the Ratio Test is inconclusive at the endpoints of this interval, i.e., when $|x-a| = R$, which means $x = a-R$ and $x = a+R$.

To find the **interval of convergence**, we must:

1.  **Find the radius of convergence $R$** using the Ratio Test (or sometimes the Root Test).
2.  **Test the endpoints** $x = a-R$ and $x = a+R$ separately by substituting these values back into the original power series and determining if the resulting series converges.

For endpoint convergence, we often use tests like the **p-series test**, **alternating series test**, or **comparison test**.

### Worked Example: Interval of Convergence

Let's find the interval of convergence for the power series:

$$
\sum_{n=1}^{\infty} \frac{(x-2)^n}{n \cdot 3^n}
$$

1.  **Radius of Convergence:**
    Here, $c_n = \frac{1}{n \cdot 3^n}$ and $a=2$.
    $$
    \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \left| \frac{1/((n+1)3^{n+1})}{1/(n \cdot 3^n)} \right| = \lim_{n \to \infty} \left| \frac{n \cdot 3^n}{(n+1)3^{n+1}} \right| = \lim_{n \to \infty} \frac{n}{n+1} \cdot \frac{1}{3} = 1 \cdot \frac{1}{3} = \frac{1}{3}
    $$
    The radius of convergence is $R = \frac{1}{1/3} = 3$.
    The series converges for $|x-2| < 3$, which means $-3 < x-2 < 3$, or $-1 < x < 5$.

2.  **Test the Endpoints:**

    *   **Left Endpoint ($x = -1$):**
        Substitute $x=-1$ into the series:
        $$
        \sum_{n=1}^{\infty} \frac{(-1-2)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{(-3)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{(-1)^n \cdot 3^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n}
        $$
        This is the alternating harmonic series, which converges by the Alternating Series Test.

    *   **Right Endpoint ($x = 5$):**
        Substitute $x=5$ into the series:
        $$
        \sum_{n=1}^{\infty} \frac{(5-2)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{3^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{1}{n}
        $$
        This is the harmonic series, which is a well-known divergent series (a type of p-series with $p=1$).

Since the series converges at $x=-1$ but diverges at $x=5$, the interval of convergence is $[-1, 5)$.

## Key Takeaways

*   The **radius of convergence** $R$ indicates the "width" of the interval around the center $a$ where the series converges.
*   The **Ratio Test** is your primary tool for finding $R$.
*   The **interval of convergence** is determined by finding $R$ and then specifically testing the convergence at the endpoints $x = a-R$ and $x = a+R$.
*   Endpoint convergence requires using other convergence tests.
*   A power series converges at a single point (center $a$) if $R=0$, everywhere if $R=\infty$, or on an interval $(a-R, a+R)$ possibly including endpoints if $0 < R < \infty$.

## Supports

- [[skills/mathematics/power-series-and-taylor-expansions/microskills/power-series-convergence-assessment|Power series convergence assessment]]
