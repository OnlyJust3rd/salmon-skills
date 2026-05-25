---
type: "medium"
title: "Differentiating Conditional Convergence"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/conditional-convergence-identification|conditional-convergence-identification]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 3
---
# Differentiating Conditional Convergence

This lesson focuses on identifying series that exhibit conditional convergence. This is a crucial step in analyzing the behavior of infinite series, building upon our understanding of absolute convergence and divergence.

## What is Conditional Convergence?

A series $\sum a_n$ is said to converge **conditionally** if it converges, but its series of absolute values, $\sum |a_n|$, diverges.

This means that the alternating signs of the terms are essential for the series to reach a finite sum. If you were to remove the alternating nature and consider only the magnitudes of the terms, the sum would grow infinitely large.

### Key Characteristics of Conditionally Convergent Series:

*   **The original series converges:** This is the primary condition. We must first establish that the series itself has a finite sum.
*   **The series of absolute values diverges:** This is the distinguishing factor from absolute convergence.

## How to Identify Conditional Convergence

Identifying conditional convergence involves a two-step process:

1.  **Test for Convergence of the Original Series:** You need to confirm that the series $\sum a_n$ converges. The **Alternating Series Test (AST)** is particularly useful here, as it's designed for series with alternating signs.

    The Alternating Series Test states that an alternating series of the form $\sum_{n=1}^{\infty} (-1)^{n+1} b_n$ or $\sum_{n=1}^{\infty} (-1)^{n} b_n$ converges if the following two conditions are met:
    *   $b_n > 0$ for all $n$.
    *   The sequence $\{b_n\}$ is non-increasing (i.e., $b_{n+1} \le b_n$ for all $n$ beyond some integer $N$).
    *   $\lim_{n \to \infty} b_n = 0$.

2.  **Test for Convergence of the Absolute Value Series:** After confirming the original series converges, you must then test the series $\sum |a_n|$. If this series diverges, and the original series converges, then the series is conditionally convergent. Common tests for absolute convergence include the Ratio Test, Root Test, or Integral Test.

## Worked Example: Identifying a Conditionally Convergent Series

Let's analyze the series:

$$ \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} $$

### Step 1: Test for Convergence of the Original Series $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$

This is an alternating series. Let $b_n = \frac{1}{n}$.

*   **Condition 1 ($b_n > 0$):** For $n \ge 1$, $b_n = \frac{1}{n}$ is always positive.
*   **Condition 2 ($b_n$ is non-increasing):** As $n$ increases, $\frac{1}{n}$ decreases. So, $b_{n+1} = \frac{1}{n+1} \le \frac{1}{n} = b_n$. This condition is met.
*   **Condition 3 ($\lim_{n \to \infty} b_n = 0$):** $\lim_{n \to \infty} \frac{1}{n} = 0$. This condition is met.

Since all conditions of the Alternating Series Test are satisfied, the original series $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ **converges**.

### Step 2: Test for Convergence of the Absolute Value Series $\sum_{n=1}^{\infty} \left|\frac{(-1)^{n+1}}{n}\right|$

The series of absolute values is:

$$ \sum_{n=1}^{\infty} \left|\frac{(-1)^{n+1}}{n}\right| = \sum_{n=1}^{\infty} \frac{1}{n} $$

This is the **harmonic series**. We know from calculus that the harmonic series is a p-series with $p=1$, and it **diverges**.

### Conclusion

Since the original series $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ converges, and the series of its absolute values $\sum_{n=1}^{\infty} \frac{1}{n}$ diverges, the series $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ is **conditionally convergent**.

## Common Pitfalls

*   **Confusing conditional convergence with absolute convergence:** Simply showing a series converges is not enough. You must also check the convergence of its absolute value series.
*   **Incorrectly applying the Alternating Series Test:** Ensure all three conditions are met before concluding convergence for an alternating series.
*   **Assuming divergence of the absolute value series too quickly:** You must first establish convergence of the original series.

## When to Look for Conditional Convergence

Conditional convergence is most often encountered when dealing with **alternating series**. If an alternating series passes the Alternating Series Test but fails tests for absolute convergence (like the Ratio Test applied to the absolute values), it's a strong candidate for conditional convergence.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/conditional-convergence-identification|Conditional convergence identification]]
