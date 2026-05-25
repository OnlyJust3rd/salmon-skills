---
type: "medium"
title: "Applying the Comparison Test to Determine Series Convergence"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/comparison-test-application|comparison-test-application]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 4
---
# Applying the Comparison Test to Determine Series Convergence

This lesson focuses on using the **Comparison Test** to figure out if an infinite series adds up to a finite number (converges) or grows infinitely large (diverges). This is a powerful tool when dealing with series that look similar to other series whose convergence or divergence we already know.

## When to Use the Comparison Test

The Comparison Test is most effective when you have a series, let's call it $\sum a_n$, and you suspect it behaves similarly to another series, $\sum b_n$, whose convergence or divergence is known. Specifically, if:

*   Both $a_n$ and $b_n$ are positive for all $n$ (after some initial term).
*   You can easily compare $a_n$ and $b_n$.

## The Comparison Test: The Rule

Let $\sum a_n$ and $\sum b_n$ be two series with positive terms for all $n$.

1.  **If $\sum b_n$ converges and $a_n \le b_n$ for all $n$ (or for all $n$ greater than some integer $N$), then $\sum a_n$ also converges.**
    *   *Think of it this way:* If your series ($a_n$) is "smaller" than a series that converges ($b_n$), it has no choice but to converge too. It's like comparing the amount of sand in two buckets; if the larger bucket only holds a finite amount, the smaller bucket must also hold a finite amount.

2.  **If $\sum b_n$ diverges and $a_n \ge b_n$ for all $n$ (or for all $n$ greater than some integer $N$), then $\sum a_n$ also diverges.**
    *   *Think of it this way:* If your series ($a_n$) is "larger" than a series that diverges ($b_n$), it must also diverge. If the smaller bucket is overflowing, the larger one will definitely overflow.

## Worked Example: Applying the Comparison Test

Let's determine the convergence or divergence of the series:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2 + 2^n}
$$

**Step 1: Identify the terms of your series.**
Our terms are $a_n = \frac{1}{n^2 + 2^n}$. Since $n \ge 1$, $n^2$ and $2^n$ are always positive, so $a_n$ is always positive.

**Step 2: Find a comparable "known" series.**
We need to find a series $\sum b_n$ whose convergence or divergence is known and that we can compare $a_n$ to. Look at the dominant terms in the denominator of $a_n$: $n^2$ and $2^n$. For large $n$, $2^n$ grows much faster than $n^2$. This suggests we should compare our series to one involving $2^n$.

Consider the geometric series $\sum_{n=1}^{\infty} \frac{1}{2^n}$. We know that this is a geometric series with $r = 1/2$, and since $|r| < 1$, it **converges**. Let $b_n = \frac{1}{2^n}$.

**Step 3: Compare the terms.**
We need to compare $a_n = \frac{1}{n^2 + 2^n}$ with $b_n = \frac{1}{2^n}$.

Let's look at the denominators:
$n^2 + 2^n$ compared to $2^n$.
Since $n^2 \ge 0$ for all $n \ge 1$, it's clear that:
$n^2 + 2^n \ge 2^n$

Now, let's look at the reciprocals (the terms of our series):
Taking the reciprocal of both sides of the inequality $n^2 + 2^n \ge 2^n$ reverses the inequality sign:
$$
\frac{1}{n^2 + 2^n} \le \frac{1}{2^n}
$$
So, $a_n \le b_n$ for all $n \ge 1$.

**Step 4: Apply the Comparison Test rule.**
We found that $a_n \le b_n$ and we know that $\sum b_n = \sum_{n=1}^{\infty} \frac{1}{2^n}$ converges.
According to the first part of the Comparison Test, if $\sum b_n$ converges and $a_n \le b_n$, then $\sum a_n$ must also converge.

**Conclusion:** The series $\sum_{n=1}^{\infty} \frac{1}{n^2 + 2^n}$ **converges**.

## Common Pitfalls and Tips

*   **Choosing the wrong comparison series:** If you pick a series $\sum b_n$ that doesn't "line up" correctly (e.g., you choose a diverging series when you need to show your series is smaller, or a converging series when you need to show yours is larger), the test won't work.
*   **Algebraic errors in comparison:** Be very careful when comparing fractions and inequalities. Remember that taking reciprocals reverses the inequality.
*   **Positive terms are crucial:** The Comparison Test, in this form, strictly requires all terms to be positive. If terms can be negative, you might need to consider the absolute value of the terms and the concept of absolute convergence.
*   **Focus on the behavior for large $n$**: For the comparison, you only need the inequality to hold for $n$ sufficiently large. You don't need it to hold from $n=1$.

By carefully selecting a known series and establishing the correct inequality between its terms and the terms of your series, you can powerfully determine convergence or divergence.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/comparison-test-application|Comparison Test application]]
