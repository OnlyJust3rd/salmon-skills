---
type: "medium"
title: "Calculating the Interval of Convergence for Power Series"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/power-series-and-taylor-expansions/microskills/interval-of-convergence-calculation|interval-of-convergence-calculation]]"
---
# Calculating the Interval of Convergence for Power Series

This lesson focuses on a key technique for analyzing power series: calculating their interval of convergence. Understanding this interval tells us for which values of \(x\) the power series actually produces a meaningful sum.

## What is the Interval of Convergence?

A power series is an infinite series of the form:

$$
\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots
$$

where \(c_n\) are constants and \(a\) is a real number. The interval of convergence is the set of all \(x\) values for which this series converges. This interval always takes one of these forms:

1.  A single point: \(x=a\)
2.  An open interval: \((a-R, a+R)\)
3.  A closed interval: \([a-R, a+R]\)
4.  A half-open interval: \((a-R, a+R]\) or \([a-R, a+R)\)
5.  The entire real line: \((-\infty, \infty)\)

Here, \(R\) is called the **radius of convergence**.

## The Ratio Test: Your Primary Tool

The most common and effective method for finding the radius of convergence is the **Ratio Test**. For a series \(\sum a_n\), the Ratio Test states that if:

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$

Then the series converges absolutely if \(L < 1\), diverges if \(L > 1\) (or \(L = \infty\)), and the test is inconclusive if \(L = 1\).

For power series, our terms \(a_n\) are \(c_n (x-a)^n\). So, the ratio becomes:

$$
\left| \frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n} \right| = \left| \frac{c_{n+1}}{c_n} (x-a) \right| = \left| \frac{c_{n+1}}{c_n} \right| |x-a|
$$

Applying the limit:

$$
L = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| |x-a|
$$

For convergence, we need \(L < 1\):

$$
\left( \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| \right) |x-a| < 1
$$

Let \(K = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right|\). Then the condition is \(K|x-a| < 1\).

If \(K=0\), the series converges for all \(x\).
If \(K > 0\), we can isolate \(|x-a|\):

$$
|x-a| < \frac{1}{K}
$$

This inequality directly gives us the radius of convergence: $$R = \frac{1}{K}$$, provided \(K > 0\).

## Step-by-Step Calculation of the Interval of Convergence

Let's break down the process of finding the interval of convergence.

1.  **Identify the series terms:** Given a power series \(\sum_{n=0}^{\infty} c_n (x-a)^n\), identify \(c_n\). The terms we'll use for the Ratio Test are \(a_n = c_n (x-a)^n\).
2.  **Apply the Ratio Test:** Calculate the limit $$L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{c_{n+1}}{c_n} \right| |x-a|$$.
3.  **Determine the Radius of Convergence (\(R\)):**
    *   If $$L < 1$$, solve the inequality for \(|x-a|\) to find the radius of convergence, $$R$$.
    *   If the limit of the ratio of coefficients is 0, then \(R = \infty\).
    *   If the limit of the ratio of coefficients is \(\infty\), then \(R = 0\).
4.  **Determine the open interval of convergence:** Once you have \(R\), the series converges for \(a-R < x < a+R\). This is your open interval.
5.  **Test the endpoints:** The Ratio Test is inconclusive when $$L = 1$$, which happens at the endpoints \(x = a-R\) and \(x = a+R\). You must test each endpoint separately by substituting the value of \(x\) back into the original power series and determining if the resulting series converges.
    *   Use convergence tests like the **p-series test**, **alternating series test**, or **integral test** for these endpoint series.
6.  **Write the final interval of convergence:** Combine the open interval with the endpoints that converge.

## Worked Example

Let's find the interval of convergence for the power series:

$$
\sum_{n=1}^{\infty} \frac{(x-2)^n}{n 3^n}
$$

1.  **Identify terms:** \(a_n = \frac{(x-2)^n}{n 3^n}\). So, \(c_n = \frac{1}{n 3^n}\). Note that this is a series starting from \(n=1\). The center is \(a=2\).

2.  **Apply Ratio Test:**
    $$
    a_{n+1} = \frac{(x-2)^{n+1}}{(n+1) 3^{n+1}}
    $$
    $$
    \frac{a_{n+1}}{a_n} = \frac{(x-2)^{n+1}}{(n+1) 3^{n+1}} \cdot \frac{n 3^n}{(x-2)^n} = \frac{n}{n+1} \cdot \frac{x-2}{3}
    $$
    $$
    L = \lim_{n \to \infty} \left| \frac{n}{n+1} \cdot \frac{x-2}{3} \right| = \lim_{n \to \infty} \frac{n}{n+1} \cdot \left| \frac{x-2}{3} \right|
    $$
    Since $$ \lim_{n \to \infty} \frac{n}{n+1} = 1 $$,
    $$
    L = 1 \cdot \left| \frac{x-2}{3} \right| = \frac{|x-2|}{3}
    $$

3.  **Determine Radius of Convergence:** For convergence, \(L < 1\):
    $$
    \frac{|x-2|}{3} < 1 \implies |x-2| < 3
    $$
    The radius of convergence is $$R = 3$$.

4.  **Determine Open Interval:** The open interval is $$a-R < x < a+R$$, which is $$2-3 < x < 2+3$$, so $$-1 < x < 5$$.

5.  **Test Endpoints:**
    *   **Endpoint \(x = -1\):** Substitute \(x=-1\) into the original series:
        $$
        \sum_{n=1}^{\infty} \frac{(-1-2)^n}{n 3^n} = \sum_{n=1}^{\infty} \frac{(-3)^n}{n 3^n} = \sum_{n=1}^{\infty} \frac{(-1)^n 3^n}{n 3^n} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n}
        $$
        This is the **alternating harmonic series**, which is known to converge (by the Alternating Series Test). So, \(x=-1\) is included.

    *   **Endpoint \(x = 5\):** Substitute \(x=5\) into the original series:
        $$
        \sum_{n=1}^{\infty} \frac{(5-2)^n}{n 3^n} = \sum_{n=1}^{\infty} \frac{3^n}{n 3^n} = \sum_{n=1}^{\infty} \frac{1}{n}
        $$
        This is the **harmonic series**, which is known to diverge (it's a p-series with \(p=1\)). So, \(x=5\) is excluded.

6.  **Write Final Interval:** Since \(x=-1\) converges and \(x=5\) diverges, the interval of convergence is $$[-1, 5)$$.

## Common Mistakes to Avoid

*   **Forgetting the absolute value:** Always use the absolute value in the Ratio Test.
*   **Inconclusive endpoints:** Never assume endpoints converge or diverge without testing them. The Ratio Test *only* tells you about convergence for \(|x-a| < R\).
*   **Incorrectly identifying \(c_n\):** Be careful when the series doesn't start at \(n=0\) or when there are factorials or other functions of \(n\) in the coefficients.
*   **Algebraic errors:** Simplify fractions and limits carefully.

By systematically applying the Ratio Test and testing the endpoints, you can confidently determine the interval of convergence for any power series.

## Supports

- [[skills/mathematics/power-series-and-taylor-expansions/microskills/interval-of-convergence-calculation|Interval of convergence calculation]]
