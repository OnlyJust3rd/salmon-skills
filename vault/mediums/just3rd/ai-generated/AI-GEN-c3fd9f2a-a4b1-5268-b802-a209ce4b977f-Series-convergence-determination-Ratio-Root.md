---
type: "medium"
title: "Applying Ratio and Root Tests for Series Convergence"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/sequence-and-series-convergence/microskills/series-convergence-determination-ratio-root|series-convergence-determination-ratio-root]]"
---
# Applying Ratio and Root Tests for Series Convergence

This lesson focuses on how to apply the Ratio Test and the Root Test to determine whether an infinite series converges or diverges. These tests are powerful tools when dealing with series involving factorials or exponential terms.

## Understanding the Goal

We're looking to analyze infinite series of the form $$ \sum_{n=1}^{\infty} a_n $$ and decide if the sum of its infinitely many terms approaches a finite value (convergence) or grows without bound (divergence).

## The Ratio Test

The Ratio Test is particularly useful when the terms of your series involve factorials or powers.

### When to Use the Ratio Test

The Ratio Test is often effective for series where \(a_n\) contains \(n!\) or \(r^n\).

### The Test Itself

Let $$ \sum_{n=1}^{\infty} a_n $$ be a series with positive terms. Calculate the limit:
$$ L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| $$

The outcome depends on the value of \(L\):

*   **If \(L < 1\):** The series converges absolutely.
*   **If \(L > 1\) or \(L = \infty\):** The series diverges.
*   **If \(L = 1\):** The test is inconclusive. You'll need to use a different convergence test.

### Applying the Ratio Test: A Worked Example

Let's determine the convergence of the series $$ \sum_{n=1}^{\infty} \frac{2^n}{n!} $$.

Here, $$ a_n = \frac{2^n}{n!} $$.
To find $$ a_{n+1} $$, replace \(n\) with \(n+1\):
$$ a_{n+1} = \frac{2^{n+1}}{(n+1)!} $$

Now, let's set up the ratio $$ \frac{a_{n+1}}{a_n} $$:
$$ \frac{a_{n+1}}{a_n} = \frac{\frac{2^{n+1}}{(n+1)!}}{\frac{2^n}{n!}} $$

Simplify this expression:
$$ \frac{a_{n+1}}{a_n} = \frac{2^{n+1}}{(n+1)!} \cdot \frac{n!}{2^n} $$
$$ \frac{a_{n+1}}{a_n} = \frac{2^n \cdot 2}{(n+1) \cdot n!} \cdot \frac{n!}{2^n} $$

Cancel out common terms:
$$ \frac{a_{n+1}}{a_n} = \frac{2}{n+1} $$

Now, calculate the limit as \(n \to \infty\):
$$ L = \lim_{n \to \infty} \left| \frac{2}{n+1} \right| $$
$$ L = \lim_{n \to \infty} \frac{2}{n+1} = 0 $$

Since \(L = 0\), which is less than 1, the series $$ \sum_{n=1}^{\infty} \frac{2^n}{n!} $$ **converges**.

## The Root Test

The Root Test is another powerful test, especially when the terms of the series have terms raised to the power of \(n\).

### When to Use the Root Test

The Root Test is a good choice for series where \(a_n\) has a term raised to the power of \(n\), like \( (b_n)^n \).

### The Test Itself

Let $$ \sum_{n=1}^{\infty} a_n $$ be a series with positive terms. Calculate the limit:
$$ L = \lim_{n \to \infty} \sqrt[n]{|a_n|} = \lim_{n \to \infty} |a_n|^{1/n} $$

The outcome depends on the value of \(L\):

*   **If \(L < 1\):** The series converges absolutely.
*   **If \(L > 1\) or \(L = \infty\):** The series diverges.
*   **If \(L = 1\):** The test is inconclusive. You'll need to use a different convergence test.

### Applying the Root Test: A Worked Example

Let's determine the convergence of the series $$ \sum_{n=1}^{\infty} \left(\frac{n}{3n+1}\right)^n $$.

Here, $$ a_n = \left(\frac{n}{3n+1}\right)^n $$.

We need to calculate $$ \sqrt[n]{|a_n|} $$:
$$ \sqrt[n]{|a_n|} = \sqrt[n]{\left|\left(\frac{n}{3n+1}\right)^n\right|} $$

Since \(n\) starts from 1, the term $$ \frac{n}{3n+1} $$ will be positive. So, the absolute value is not strictly necessary here, but it's good practice to include it as per the test definition.
$$ \sqrt[n]{|a_n|} = \left(\left(\frac{n}{3n+1}\right)^n\right)^{1/n} $$
$$ \sqrt[n]{|a_n|} = \frac{n}{3n+1} $$

Now, calculate the limit as \(n \to \infty\):
$$ L = \lim_{n \to \infty} \frac{n}{3n+1} $$

To evaluate this limit, we can divide the numerator and denominator by the highest power of \(n\) in the denominator, which is \(n\):
$$ L = \lim_{n \to \infty} \frac{n/n}{(3n/n) + (1/n)} $$
$$ L = \lim_{n \to \infty} \frac{1}{3 + 1/n} $$

As \(n \to \infty\), \(1/n \to 0\):
$$ L = \frac{1}{3 + 0} = \frac{1}{3} $$

Since \(L = \frac{1}{3}\), which is less than 1, the series $$ \sum_{n=1}^{\infty} \left(\frac{n}{3n+1}\right)^n $$ **converges**.

## Summary Table

| Test       | When to Use                                    | Limit Calculation                                             | Convergence Condition | Divergence Condition | Inconclusive Case |
| :--------- | :--------------------------------------------- | :------------------------------------------------------------ | :------------------ | :------------------- | :---------------- |
| Ratio Test | Series with factorials ($n!$) or exponentials ($r^n$) | $$ L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| $$ | \(L < 1\)           | \(L > 1\) or \(L=\infty\) | \(L = 1\)         |
| Root Test  | Series with terms raised to the power of \(n\) | $$ L = \lim_{n \to \infty} \sqrt[n]{|a_n|} $$                 | \(L < 1\)           | \(L > 1\) or \(L=\infty\) | \(L = 1\)         |

Mastering these tests will greatly enhance your ability to analyze the behavior of infinite series. Practice with various types of series to build confidence in choosing the appropriate test and executing the calculations.

## Supports

- [[skills/mathematics/sequence-and-series-convergence/microskills/series-convergence-determination-ratio-root|Series convergence determination (Ratio/Root)]]
