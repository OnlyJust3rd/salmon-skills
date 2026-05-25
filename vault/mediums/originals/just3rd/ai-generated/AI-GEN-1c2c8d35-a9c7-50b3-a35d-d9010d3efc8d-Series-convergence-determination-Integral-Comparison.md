---
type: "medium"
title: "Applying the Integral and Comparison Tests for Series Convergence"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/series-convergence-determination-integral-comparison|series-convergence-determination-integral-comparison]]"
learning-time-in-minutes: 5
---
# Applying the Integral and Comparison Tests for Series Convergence

This lesson focuses on using specific tools – the Integral Test and Comparison Tests – to determine if an infinite series converges or diverges. This is a crucial step in understanding the behavior of sequences and series.

## The Integral Test

The Integral Test provides a way to connect the convergence of an infinite series to the convergence of an improper integral.

### When to Use the Integral Test

Use the Integral Test if the terms of your series, $a_n$, can be represented by a positive, continuous, and decreasing function $f(x)$ such that $a_n = f(n)$ for all $n \ge 1$.

### The Test

If $f(x)$ is positive, continuous, and decreasing for $x \ge 1$, then the series $$ \sum_{n=1}^{\infty} a_n $$ converges if and only if the improper integral $$ \int_{1}^{\infty} f(x) \, dx $$ converges.

### Worked Example

Let's determine the convergence of the series $$ \sum_{n=1}^{\infty} \frac{1}{n^2 + 1} $$.

1.  **Identify $f(x)$**: Let $f(x) = \frac{1}{x^2 + 1}$.
2.  **Check conditions for $f(x)$**:
    *   **Positive**: For $x \ge 1$, $x^2 + 1 > 0$, so $f(x) > 0$.
    *   **Continuous**: $f(x)$ is a rational function with a denominator that is never zero for $x \ge 1$, so it's continuous.
    *   **Decreasing**: To check if it's decreasing, we can look at its derivative: $f'(x) = -\frac{2x}{(x^2+1)^2}$. For $x \ge 1$, $f'(x) < 0$, so $f(x)$ is decreasing.
3.  **Evaluate the improper integral**:
    $$ \int_{1}^{\infty} \frac{1}{x^2 + 1} \, dx $$
    Recall that the antiderivative of $\frac{1}{x^2 + 1}$ is $\arctan(x)$.
    $$ \int_{1}^{\infty} \frac{1}{x^2 + 1} \, dx = \lim_{b \to \infty} \int_{1}^{b} \frac{1}{x^2 + 1} \, dx $$
    $$ = \lim_{b \to \infty} [\arctan(x)]_{1}^{b} $$
    $$ = \lim_{b \to \infty} (\arctan(b) - \arctan(1)) $$
    As $b \to \infty$, $\arctan(b) \to \frac{\pi}{2}$. And $\arctan(1) = \frac{\pi}{4}$.
    $$ = \frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4} $$
4.  **Conclusion**: Since the integral $$ \int_{1}^{\infty} \frac{1}{x^2 + 1} \, dx $$ converges to a finite value ($\frac{\pi}{4}$), the series $$ \sum_{n=1}^{\infty} \frac{1}{n^2 + 1} $$ also converges by the Integral Test.

## Comparison Tests

Comparison Tests are powerful for series where the terms resemble those of a known convergent or divergent series.

### 1. Direct Comparison Test

This test compares the terms of your series directly with the terms of a known series.

#### When to Use the Direct Comparison Test

Use this test when the terms of your series $a_n$ are "similar" to the terms of a series $b_n$ for which you already know the convergence or divergence.

#### The Test

Let $$ \sum a_n $$ and $$ \sum b_n $$ be series with positive terms.
*   If $a_n \le b_n$ for all $n$ greater than some integer $N$, and $$ \sum b_n $$ converges, then $$ \sum a_n $$ also converges.
*   If $a_n \ge b_n$ for all $n$ greater than some integer $N$, and $$ \sum b_n $$ diverges, then $$ \sum a_n $$ also diverges.

#### Worked Example

Determine the convergence of $$ \sum_{n=1}^{\infty} \frac{1}{2^n + 3} $$.

1.  **Identify a comparison series**: The terms $\frac{1}{2^n + 3}$ look similar to $\frac{1}{2^n}$. We know that $$ \sum_{n=1}^{\infty} \frac{1}{2^n} $$ is a geometric series with $|r| = \frac{1}{2} < 1$, so it converges. Let $b_n = \frac{1}{2^n}$.
2.  **Compare terms**: For $n \ge 1$, $2^n + 3 > 2^n$. Therefore, $$ \frac{1}{2^n + 3} < \frac{1}{2^n} $$. So, $a_n < b_n$.
3.  **Conclusion**: Since $a_n < b_n$ and $$ \sum b_n $$ converges, by the Direct Comparison Test, $$ \sum a_n = \sum_{n=1}^{\infty} \frac{1}{2^n + 3} $$ also converges.

### 2. Limit Comparison Test

This test is often easier to apply when direct comparison is tricky. It examines the ratio of the terms of two series.

#### When to Use the Limit Comparison Test

Use this test when the terms of your series $a_n$ behave like the terms of a known series $b_n$ for large $n$, but direct comparison is difficult.

#### The Test

Let $$ \sum a_n $$ and $$ \sum b_n $$ be series with positive terms. Compute the limit:
$$ L = \lim_{n \to \infty} \frac{a_n}{b_n} $$
*   If $L$ is a finite, positive number ($0 < L < \infty$), then both series have the same convergence behavior (both converge or both diverge).
*   If $L = 0$ and $$ \sum b_n $$ converges, then $$ \sum a_n $$ also converges.
*   If $L = \infty$ and $$ \sum b_n $$ diverges, then $$ \sum a_n $$ also diverges.

#### Worked Example

Determine the convergence of $$ \sum_{n=1}^{\infty} \frac{3n^2 - 5n}{n^4 + 2n + 1} $$.

1.  **Identify a comparison series**: For large $n$, the dominant term in the numerator is $3n^2$ and in the denominator is $n^4$. So, $a_n$ behaves like $$ \frac{3n^2}{n^4} = \frac{3}{n^2} $$. Let's choose $$ b_n = \frac{1}{n^2} $$. We know that $$ \sum_{n=1}^{\infty} \frac{1}{n^2} $$ is a $p$-series with $p=2>1$, so it converges.
2.  **Compute the limit of the ratio**:
    $$ L = \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{\frac{3n^2 - 5n}{n^4 + 2n + 1}}{\frac{1}{n^2}} $$
    $$ = \lim_{n \to \infty} \frac{3n^2 - 5n}{n^4 + 2n + 1} \cdot n^2 $$
    $$ = \lim_{n \to \infty} \frac{3n^4 - 5n^3}{n^4 + 2n + 1} $$
    To evaluate this limit, divide the numerator and denominator by the highest power of $n$ in the denominator ($n^4$):
    $$ = \lim_{n \to \infty} \frac{3 - \frac{5}{n}}{1 + \frac{2}{n^3} + \frac{1}{n^4}} = \frac{3 - 0}{1 + 0 + 0} = 3 $$
3.  **Conclusion**: Since $L=3$, which is a finite, positive number ($0 < 3 < \infty$), and $$ \sum b_n = \sum_{n=1}^{\infty} \frac{1}{n^2} $$ converges, by the Limit Comparison Test, $$ \sum a_n = \sum_{n=1}^{\infty} \frac{3n^2 - 5n}{n^4 + 2n + 1} $$ also converges.

## Summary of Tests

| Test                 | When to Use                                                                        | Key Idea                                                                                                     |
| :------------------- | :--------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Integral Test**    | $a_n = f(n)$, where $f(x)$ is positive, continuous, and decreasing for $x \ge 1$. | Convergence of series $\sum a_n$ matches convergence of integral $\int_1^\infty f(x) dx$.                  |
| **Direct Comparison**| $a_n$ is similar to $b_n$ and direct inequality $a_n \le b_n$ or $a_n \ge b_n$ is clear. | If a larger series converges, the smaller one converges. If a smaller series diverges, the larger one diverges. |
| **Limit Comparison** | $a_n$ behaves like $b_n$ for large $n$, but direct comparison is hard.             | Ratio of terms $a_n/b_n$ approaches a finite positive number, implying similar convergence behavior.        |

Mastering these tests allows you to systematically determine the convergence of a wide range of infinite series. Practice identifying which test is most suitable for a given series.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/series-convergence-determination-integral-comparison|Series convergence determination (Integral/Comparison)]]
