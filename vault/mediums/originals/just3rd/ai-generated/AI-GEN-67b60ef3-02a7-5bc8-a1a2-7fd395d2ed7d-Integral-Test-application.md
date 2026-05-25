---
type: "medium"
title: "Applying the Integral Test for Series Convergence"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/integral-test-application|integral-test-application]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 4
---
# Applying the Integral Test for Series Convergence

This lesson focuses on using the Integral Test to determine if an infinite series converges or diverges. This is a crucial tool when dealing with series whose terms resemble a continuous function.

### What is the Integral Test?

The Integral Test provides a bridge between the convergence of an infinite series and the convergence of an improper integral. It states that for a series $\sum_{n=1}^{\infty} a_n$, if the function $f(x)$ corresponding to the terms $a_n$ (i.e., $f(n) = a_n$) satisfies the following conditions:

1.  **Positivity:** $f(x) > 0$ for all $x \geq N$ for some integer $N$.
2.  **Continuity:** $f(x)$ is continuous for all $x \geq N$.
3.  **Decreasing:** $f(x)$ is decreasing for all $x \geq N$.

Then, the series $\sum_{n=1}^{\infty} a_n$ converges if and only if the improper integral $\int_{N}^{\infty} f(x) \, dx$ converges. Conversely, the series diverges if and only if the integral diverges.

**Key Idea:** If the area under the curve of $f(x)$ from some point onwards is finite (converges), then the sum of the corresponding series terms will also be finite. If the area is infinite (diverges), then the sum of the terms will also be infinite.

### When to Use the Integral Test

The Integral Test is most effective when:

*   The terms of the series, $a_n$, can be easily represented by a continuous, positive, and decreasing function $f(x)$.
*   You are comfortable evaluating improper integrals.
*   Other simpler tests (like the Divergence Test or Geometric Series Test) are not applicable or straightforward.

### Steps for Applying the Integral Test

1.  **Identify the function $f(x)$:** Given a series $\sum_{n=1}^{\infty} a_n$, replace $n$ with $x$ to get $f(x)$.
2.  **Check the conditions:** Verify that $f(x)$ is positive, continuous, and decreasing for $x \geq N$ for some starting integer $N$. Often, $N=1$ works, but you might need a larger $N$.
3.  **Set up the improper integral:** Form the integral $\int_{N}^{\infty} f(x) \, dx$.
4.  **Evaluate the integral:** Calculate the value of the improper integral using limits.
    $$ \int_{N}^{\infty} f(x) \, dx = \lim_{b \to \infty} \int_{N}^{b} f(x) \, dx $$
5.  **Determine convergence or divergence:**
    *   If the limit exists and is a finite number, the integral converges, and therefore the series converges.
    *   If the limit is $\infty$, $-\infty$, or does not exist, the integral diverges, and therefore the series diverges.

### Worked Example

Let's apply the Integral Test to the series $\sum_{n=1}^{\infty} \frac{1}{n^2}$.

1.  **Identify $f(x)$:** Let $f(x) = \frac{1}{x^2}$.

2.  **Check the conditions:**
    *   **Positivity:** For $x \geq 1$, $x^2 > 0$, so $f(x) = \frac{1}{x^2} > 0$. Condition met.
    *   **Continuity:** $f(x) = \frac{1}{x^2}$ is continuous for all $x \neq 0$. Since we are considering $x \geq 1$, it is continuous. Condition met.
    *   **Decreasing:** To check if it's decreasing, we can look at its derivative: $f'(x) = -\frac{2}{x^3}$. For $x \geq 1$, $x^3 > 0$, so $f'(x) < 0$. This means $f(x)$ is decreasing for $x \geq 1$. Condition met.
    Since all conditions are met for $N=1$, we can proceed.

3.  **Set up the improper integral:** We will evaluate $\int_{1}^{\infty} \frac{1}{x^2} \, dx$.

4.  **Evaluate the integral:**
    $$ \int_{1}^{\infty} \frac{1}{x^2} \, dx = \lim_{b \to \infty} \int_{1}^{b} x^{-2} \, dx $$
    $$ = \lim_{b \to \infty} \left[ \frac{x^{-1}}{-1} \right]_{1}^{b} $$
    $$ = \lim_{b \to \infty} \left[ -\frac{1}{x} \right]_{1}^{b} $$
    $$ = \lim_{b \to \infty} \left( -\frac{1}{b} - (-\frac{1}{1}) \right) $$
    $$ = \lim_{b \to \infty} \left( -\frac{1}{b} + 1 \right) $$
    As $b \to \infty$, $-\frac{1}{b} \to 0$.
    $$ = 0 + 1 = 1 $$

5.  **Determine convergence or divergence:** The integral $\int_{1}^{\infty} \frac{1}{x^2} \, dx$ converges to $1$. Therefore, by the Integral Test, the series $\sum_{n=1}^{\infty} \frac{1}{n^2}$ also **converges**.

### Common Mistakes to Avoid

*   **Forgetting to check the conditions:** Always verify that $f(x)$ is positive, continuous, and decreasing over the relevant interval before applying the test. If any condition fails, the Integral Test cannot be used.
*   **Incorrectly evaluating the integral:** Be careful with the integration rules and limit calculations for improper integrals.
*   **Confusing the value of the integral with the sum of the series:** The Integral Test tells you *if* the series converges or diverges, but the value of the integral is generally *not* equal to the sum of the series. (In our example, the sum of $\sum_{n=1}^{\infty} \frac{1}{n^2}$ is actually $\frac{\pi^2}{6}$, not 1).

By following these steps and being mindful of the conditions, you can effectively use the Integral Test to analyze the convergence of many infinite series.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/integral-test-application|Integral Test application]]
