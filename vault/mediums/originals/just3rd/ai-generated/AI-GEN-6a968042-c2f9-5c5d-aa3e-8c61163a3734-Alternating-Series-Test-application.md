---
type: "medium"
title: "Applying the Alternating Series Test"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/alternating-series-test-application|alternating-series-test-application]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 4
---
# Applying the Alternating Series Test

The Alternating Series Test is a powerful tool for determining the convergence or divergence of series where the terms alternate in sign. This lesson will focus on the practical application of this test.

## What is an Alternating Series?

An alternating series is a series where the terms alternate between positive and negative. A common form of an alternating series is:

$$ \sum_{n=1}^{\infty} (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \dots $$

or

$$ \sum_{n=1}^{\infty} (-1)^{n} a_n = -a_1 + a_2 - a_3 + a_4 - \dots $$

where $a_n$ are positive terms.

## The Alternating Series Test (AST)

The Alternating Series Test provides a condition for convergence of an alternating series. For a series $$ \sum_{n=1}^{\infty} (-1)^{n-1} a_n $$, the series converges if **both** of the following conditions are met:

1.  **Alternating Signs:** The terms $a_n$ must be positive for all $n$ (or at least for all $n$ greater than some integer $N$). This is usually evident from the form of the series.
2.  **Decreasing Magnitude:** The absolute values of the terms, $a_n$, must be decreasing, meaning $$ a_{n+1} \le a_n $$ for all $n$ (or for all $n$ greater than some integer $N$).
3.  **Limit of Terms is Zero:** The limit of the absolute values of the terms must approach zero as $n$ approaches infinity, meaning $$ \lim_{n \to \infty} a_n = 0 $$.

If *any* of these conditions are not met, the AST cannot be used to prove convergence, and the series may diverge.

## Steps to Apply the Alternating Series Test

To apply the Alternating Series Test, follow these steps:

1.  **Identify the Series:** Recognize if the given series is an alternating series. Look for the $$ (-1)^n $$ or $$ (-1)^{n-1} $$ factor.
2.  **Isolate the Absolute Value Term:** Let $$ a_n $$ be the absolute value of the terms of the series. For example, in $$ \sum_{n=1}^{\infty} \frac{(-1)^n}{n} $$, $$ a_n = \frac{1}{n} $$.
3.  **Check Condition 2 (Decreasing Magnitude):** Verify if $$ a_{n+1} \le a_n $$. This can often be done by:
    *   Comparing $$ a_{n+1} $$ and $$ a_n $$ directly.
    *   Showing that the derivative of the corresponding function $$ f(x) = a_x $$ is negative for $$ x \ge N $$.
    *   Observing the pattern of the terms.
4.  **Check Condition 3 (Limit is Zero):** Calculate $$ \lim_{n \to \infty} a_n $$.
5.  **Conclude:**
    *   If **both** conditions (decreasing magnitude AND limit is zero) are met, then the alternating series **converges** by the Alternating Series Test.
    *   If **either** condition is not met, the Alternating Series Test is inconclusive. You might need to use other convergence tests (like the Divergence Test or Integral Test) to determine convergence or divergence.

## Worked Example

Let's apply the Alternating Series Test to the series:

$$ \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2 + 1} $$

**Step 1: Identify the Series**
This is an alternating series because of the $$ (-1)^{n+1} $$ term.

**Step 2: Isolate the Absolute Value Term**
Let $$ a_n = \frac{1}{n^2 + 1} $$. These are all positive terms for $$ n \ge 1 $$.

**Step 3: Check Condition 2 (Decreasing Magnitude)**
We need to check if $$ a_{n+1} \le a_n $$.
$$ a_{n+1} = \frac{1}{(n+1)^2 + 1} = \frac{1}{n^2 + 2n + 1 + 1} = \frac{1}{n^2 + 2n + 2} $$
Since $$ n^2 + 2n + 2 > n^2 + 1 $$ for all $$ n \ge 1 $$, it follows that:
$$ \frac{1}{n^2 + 2n + 2} < \frac{1}{n^2 + 1} $$
Thus, $$ a_{n+1} < a_n $$. The terms are decreasing.

**Step 4: Check Condition 3 (Limit is Zero)**
Calculate the limit of $$ a_n $$ as $$ n \to \infty $$:
$$ \lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{1}{n^2 + 1} $$
As $$ n $$ becomes very large, $$ n^2 + 1 $$ also becomes very large, so the fraction approaches 0.
$$ \lim_{n \to \infty} \frac{1}{n^2 + 1} = 0 $$

**Step 5: Conclude**
Both conditions of the Alternating Series Test are met:
1.  The terms $$ a_n = \frac{1}{n^2 + 1} $$ are positive and decreasing.
2.  $$ \lim_{n \to \infty} a_n = 0 $$.

Therefore, by the Alternating Series Test, the series $$ \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2 + 1} $$ **converges**.

## Common Pitfalls

*   **Forgetting one of the conditions:** The AST requires *both* the decreasing magnitude *and* the limit being zero. If you only check one, your conclusion might be incorrect or incomplete.
*   **Applying the AST when it's not suitable:** If the series isn't alternating, the AST is irrelevant.
*   **Inconclusive AST:** Remember that if the AST is inconclusive (i.e., one of the conditions fails), it does not automatically mean the series diverges. You must use another test. For instance, the Divergence Test is often a good first step for *any* series, alternating or not.

By systematically applying these steps, you can confidently use the Alternating Series Test to analyze the convergence of many alternating series.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/alternating-series-test-application|Alternating Series Test application]]
