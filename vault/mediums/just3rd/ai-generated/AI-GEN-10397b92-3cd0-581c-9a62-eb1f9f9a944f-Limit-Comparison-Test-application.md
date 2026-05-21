---
type: "medium"
title: "Applying the Limit Comparison Test"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/sequence-and-series-convergence/microskills/limit-comparison-test-application|limit-comparison-test-application]]"
---
# Applying the Limit Comparison Test

The Limit Comparison Test is a powerful tool for determining the convergence or divergence of an infinite series. It's particularly useful when a series looks similar to another series whose convergence is already known.

## When to Use the Limit Comparison Test

You should consider using the Limit Comparison Test when:

*   You have a series, let's call it $\sum a_n$, and you suspect it behaves like a known series, $\sum b_n$ (like a p-series or geometric series).
*   The terms of your series, $a_n$, are positive for all sufficiently large $n$.
*   Directly comparing $a_n$ with $b_n$ (using inequalities) seems difficult.

## The Limit Comparison Test Statement

Let $\sum a_n$ and $\sum b_n$ be two series with positive terms, $a_n > 0$ and $b_n > 0$, for all sufficiently large $n$.

If $$ \lim_{n \to \infty} \frac{a_n}{b_n} = L $$
where $L$ is a finite, positive number ($0 < L < \infty$), then both series $\sum a_n$ and $\sum b_n$ either converge or both diverge.

## How it Works: The Intuition

The limit $L = \lim_{n \to \infty} \frac{a_n}{b_n}$ tells us about the relationship between the terms $a_n$ and $b_n$ as $n$ gets very large. If $L$ is a positive finite number, it means that for large $n$, $a_n$ is roughly $L$ times $b_n$. Since $L$ is a constant, $a_n$ and $b_n$ "behave" similarly in terms of their growth or decay. Therefore, if one series converges, the other must also converge, and if one diverges, the other must also diverge.

## Steps for Applying the Limit Comparison Test

1.  **Identify your series:** You are given a series $\sum a_n$.
2.  **Choose a comparison series:** Find a simpler series $\sum b_n$ whose convergence or divergence is known (often a p-series $\sum \frac{1}{n^p}$ or a geometric series $\sum ar^n$). The terms of $\sum b_n$ should resemble the terms of $\sum a_n$ for large $n$.
3.  **Verify positive terms:** Ensure that $a_n > 0$ and $b_n > 0$ for all sufficiently large $n$.
4.  **Compute the limit:** Calculate $$ L = \lim_{n \to \infty} \frac{a_n}{b_n} $$
5.  **Interpret the result:**
    *   If $0 < L < \infty$, then $\sum a_n$ converges if $\sum b_n$ converges, and $\sum a_n$ diverges if $\sum b_n$ diverges.
    *   **Important Note:** If $L=0$ and $\sum b_n$ converges, then $\sum a_n$ converges. If $L=\infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges. (These are extensions of the test, but the core test focuses on $0 < L < \infty$).

## Worked Example

Let's determine if the series $\sum_{n=1}^{\infty} \frac{3n^2 + 2n + 1}{n^4 + 5n}$ converges or diverges.

**Step 1: Identify your series**
Our series is $\sum_{n=1}^{\infty} a_n$, where $a_n = \frac{3n^2 + 2n + 1}{n^4 + 5n}$.

**Step 2: Choose a comparison series**
For large $n$, the dominant term in the numerator is $3n^2$ and in the denominator is $n^4$. So, $a_n$ behaves like $\frac{3n^2}{n^4} = \frac{3}{n^2}$. This suggests comparing our series to the p-series $\sum_{n=1}^{\infty} b_n$ where $b_n = \frac{1}{n^2}$.
We know that $\sum_{n=1}^{\infty} \frac{1}{n^2}$ is a convergent p-series because $p=2 > 1$.

**Step 3: Verify positive terms**
For $n \ge 1$, the terms $a_n = \frac{3n^2 + 2n + 1}{n^4 + 5n}$ are clearly positive.
The terms $b_n = \frac{1}{n^2}$ are also positive for $n \ge 1$.

**Step 4: Compute the limit**
We need to compute $$ L = \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{\frac{3n^2 + 2n + 1}{n^4 + 5n}}{\frac{1}{n^2}} $$
$$ L = \lim_{n \to \infty} \frac{3n^2 + 2n + 1}{n^4 + 5n} \cdot n^2 $$
$$ L = \lim_{n \to \infty} \frac{3n^4 + 2n^3 + n^2}{n^4 + 5n} $$
To evaluate this limit, we can divide the numerator and denominator by the highest power of $n$ in the denominator, which is $n^4$:
$$ L = \lim_{n \to \infty} \frac{\frac{3n^4}{n^4} + \frac{2n^3}{n^4} + \frac{n^2}{n^4}}{\frac{n^4}{n^4} + \frac{5n}{n^4}} $$
$$ L = \lim_{n \to \infty} \frac{3 + \frac{2}{n} + \frac{1}{n^2}}{1 + \frac{5}{n^3}} $$
As $n \to \infty$, the terms $\frac{2}{n}$, $\frac{1}{n^2}$, and $\frac{5}{n^3}$ all approach 0.
$$ L = \frac{3 + 0 + 0}{1 + 0} = 3 $$

**Step 5: Interpret the result**
We found that $L=3$, which satisfies $0 < L < \infty$.
Since our comparison series $\sum b_n = \sum \frac{1}{n^2}$ converges (it's a p-series with $p=2>1$), the Limit Comparison Test tells us that our original series $\sum_{n=1}^{\infty} \frac{3n^2 + 2n + 1}{n^4 + 5n}$ also **converges**.

## Common Mistakes to Avoid

*   **Forgetting to check for positive terms:** The Limit Comparison Test *requires* that the terms of both series be positive for sufficiently large $n$. If terms can be negative, you might need other tests.
*   **Incorrectly choosing a comparison series:** If your chosen $\sum b_n$ doesn't accurately represent the behavior of $\sum a_n$ for large $n$, the limit $L$ might not be finite and positive, or the conclusion will be invalid.
*   **Misinterpreting the limit:** Remember that $L=0$ and $L=\infty$ cases have different implications than the core $0 < L < \infty$ case. The primary rule applies when $L$ is a positive finite number.
*   **Confusing convergence/divergence of $\sum a_n$ with $\sum b_n$:** The test states that *if* the limit is finite and positive, *then* they have the same convergence behavior. Make sure you know the convergence of your chosen $\sum b_n$.

## Supports

- [[skills/mathematics/sequence-and-series-convergence/microskills/limit-comparison-test-application|Limit Comparison Test application]]
