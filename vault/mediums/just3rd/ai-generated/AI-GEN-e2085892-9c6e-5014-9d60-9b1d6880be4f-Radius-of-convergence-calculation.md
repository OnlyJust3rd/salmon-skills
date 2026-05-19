---
type: "medium"
title: "Calculating the Radius of Convergence"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/power-series-and-taylor-expansions/microskills/radius-of-convergence-calculation|Radius of convergence calculation]]"
---
# Calculating the Radius of Convergence

This lesson focuses on a key aspect of analyzing power series: determining their **radius of convergence**. Understanding this radius is crucial for knowing within which values of \(x\) the power series behaves predictably and can be used for approximations or representations.

## What is a Power Series?

Recall that a power series centered at \(a\) is a series of the form:
$$
\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots
$$
where \(c_n\) are constants and \(x\) is a variable. The behavior of this series, specifically whether it converges to a finite sum, depends heavily on the value of \(x\).

## The Radius of Convergence (R)

For any given power series, there's a value, \(R\), known as the radius of convergence. This value tells us about the "reach" of the series' convergence.

*   If \(R > 0\), the series converges absolutely for \(|x-a| < R\) and diverges for \(|x-a| > R\).
*   If \(R = 0\), the series converges only at \(x=a\).
*   If \(R = \infty\), the series converges for all real numbers \(x\).

The set of \(x\) values for which the series converges is called the **interval of convergence**. The radius of convergence is half the length of this interval (if it's finite).

## Methods for Calculating the Radius of Convergence

The most common and reliable methods for finding the radius of convergence involve using convergence tests. We'll focus on the **Ratio Test** and the **Root Test**, as they are particularly well-suited for power series.

### 1. The Ratio Test

The Ratio Test is a powerful tool for determining the convergence of series. For a series \(\sum a_n\), we examine the limit:
$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$
If \(L < 1\), the series converges absolutely. If \(L > 1\), the series diverges. If \(L = 1\), the test is inconclusive.

For a power series \(\sum_{n=0}^{\infty} c_n (x-a)^n\), we consider the terms to be \(a_n = c_n (x-a)^n\). Applying the Ratio Test:

$$
\lim_{n \to \infty} \left| \frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \right| < 1
$$

$$
\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} (x-a) \right| < 1
$$

$$
|x-a| \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| < 1
$$

Let \(L' = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|\). Then, the condition for convergence is:
$$
|x-a| L' < 1
$$
$$
|x-a| < \frac{1}{L'}
$$

Therefore, the radius of convergence \(R\) is:
$$
R = \frac{1}{L'} = \frac{1}{\lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|}
$$
If \(L' = 0\), then \(R = \infty\). If \(L' = \infty\), then \(R = 0\).

### 2. The Root Test

The Root Test also helps determine convergence. For a series \(\sum a_n\), we examine the limit:
$$
L = \lim_{n \to \infty} \sqrt[n]{|a_n|}
$$
If \(L < 1\), the series converges absolutely. If \(L > 1\), the series diverges. If \(L = 1\), the test is inconclusive.

For a power series \(\sum_{n=0}^{\infty} c_n (x-a)^n\), we consider \(a_n = c_n (x-a)^n\). Applying the Root Test:

$$
\lim_{n \to \infty} \sqrt[n]{|c_n (x-a)^n|} < 1
$$

$$
\lim_{n \to \infty} \sqrt[n]{|c_n|} |x-a| < 1
$$

Let \(L'' = \lim_{n \to \infty} \sqrt[n]{|c_n|}\). Then, the condition for convergence is:
$$
|x-a| L'' < 1
$$
$$
|x-a| < \frac{1}{L''}
$$

Therefore, the radius of convergence \(R\) is:
$$
R = \frac{1}{L''} = \frac{1}{\lim_{n \to \infty} \sqrt[n]{|c_n|}}
$$
Again, if \(L'' = 0\), then \(R = \infty\). If \(L'' = \infty\), then \(R = 0\).

**When to Use Which Test:**

*   The **Ratio Test** is often easier to apply when the coefficients \(c_n\) involve factorials or exponential terms.
*   The **Root Test** is generally more straightforward when the coefficients \(c_n\) involve powers of \(n\).

If one test is inconclusive (results in \(L=1\)), you might need to try the other or resort to other convergence tests for endpoint analysis.

## Worked Example: Calculating the Radius of Convergence

Let's find the radius of convergence for the power series:
$$
\sum_{n=1}^{\infty} \frac{(x+2)^n}{n 3^n}
$$

Here, \(a = -2\), \(c_n = \frac{1}{n 3^n}\), and the terms are \(a_n = \frac{(x+2)^n}{n 3^n}\). We'll use the Ratio Test.

First, identify \(c_{n+1}\):
$$
c_{n+1} = \frac{1}{(n+1) 3^{n+1}}
$$

Now, calculate the limit for \(L'\):
$$
L' = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| = \lim_{n \to \infty} \left| \frac{\frac{1}{(n+1) 3^{n+1}}}{\frac{1}{n 3^n}} \right|
$$

$$
L' = \lim_{n \to \infty} \left| \frac{n 3^n}{(n+1) 3^{n+1}} \right| = \lim_{n \to \infty} \left| \frac{n}{(n+1)} \cdot \frac{3^n}{3^{n+1}} \right|
$$

$$
L' = \lim_{n \to \infty} \left| \frac{n}{n+1} \cdot \frac{1}{3} \right|
$$

We know that \(\lim_{n \to \infty} \frac{n}{n+1} = \lim_{n \to \infty} \frac{1}{1 + 1/n} = 1\).
So,
$$
L' = 1 \cdot \frac{1}{3} = \frac{1}{3}
$$

Now, we find the radius of convergence \(R\):
$$
R = \frac{1}{L'} = \frac{1}{1/3} = 3
$$

The radius of convergence for this power series is \(R = 3\). This means the series converges for \(|x - (-2)| < 3\), or \(|x+2| < 3\).

## Common Pitfalls

*   **Forgetting the absolute value:** The Ratio and Root tests rely on the absolute value of the ratio or the n-th root.
*   **Algebraic errors:** Simplification of fractions and limits is critical. Pay close attention to powers and factorials.
*   **Misinterpreting the result:** The radius \(R\) is a distance. The interval of convergence is centered at \(a\), so it extends from \(a-R\) to \(a+R\).

By mastering the calculation of the radius of convergence using these tests, you build a strong foundation for analyzing the full interval of convergence and understanding the behavior of power series.

## Supports

- [[skills/mathematics/power-series-and-taylor-expansions/microskills/radius-of-convergence-calculation|Radius of convergence calculation]]
