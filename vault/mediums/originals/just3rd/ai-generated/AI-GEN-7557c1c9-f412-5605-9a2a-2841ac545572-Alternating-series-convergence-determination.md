---
type: "medium"
title: "Applying the Alternating Series Test"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/alternating-series-convergence-determination|alternating-series-convergence-determination]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 4
---
# Applying the Alternating Series Test

This lesson focuses on how to determine if an alternating series converges or diverges using the Alternating Series Test.

## What is an Alternating Series?

An alternating series is a series where the terms alternate in sign. They often look like this:

$$
\sum_{n=1}^{\infty} (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \dots
$$

or

$$
\sum_{n=1}^{\infty} (-1)^{n} a_n = -a_1 + a_2 - a_3 + a_4 - \dots
$$

where $a_n$ is a sequence of positive terms.

## The Alternating Series Test (AST)

The Alternating Series Test provides a straightforward way to check for convergence of an alternating series. For a series $\sum_{n=1}^{\infty} (-1)^{n-1} b_n$ (where $b_n > 0$ for all $n$), the AST states that the series converges if the following two conditions are met:

1.  **The terms decrease in magnitude:** $b_{n+1} \le b_n$ for all $n$ (or at least for all $n$ greater than some integer $N$). This means the absolute value of consecutive terms is getting smaller or staying the same.
2.  **The limit of the terms is zero:** $$ \lim_{n \to \infty} b_n = 0 $$ This means the terms are approaching zero as $n$ gets larger.

If either of these conditions is **not** met, the alternating series diverges.

## Steps to Apply the Alternating Series Test

Let's break down the process into clear steps. Given an alternating series, first identify the sequence of positive terms $b_n$.

1.  **Identify $b_n$**: Separate the alternating part (like $(-1)^n$ or $(-1)^{n-1}$) from the rest of the term. The remaining part, which should be positive, is $b_n$.

2.  **Check Condition 1: Decreasing Terms**:
    *   **Method A (Comparison):** Compare $b_{n+1}$ with $b_n$. Is $b_{n+1} \le b_n$? You can often do this algebraically.
    *   **Method B (Derivative):** Consider the function $f(x)$ where $f(n) = b_n$. If the derivative $f'(x) < 0$ for large $x$, then the sequence is decreasing. This is often useful when $b_n$ involves $n$ in a complex way.

3.  **Check Condition 2: Limit of Terms**:
    *   Calculate $$ \lim_{n \to \infty} b_n $$. Does it equal 0?

4.  **Conclude**:
    *   If **both** conditions are met, the series **converges** by the Alternating Series Test.
    *   If **either** condition is **not** met, the series **diverges**.

## Worked Example

Let's apply the AST to the series:

$$
\sum_{n=1}^{\infty} (-1)^{n-1} \frac{n}{n+1}
$$

**Step 1: Identify $b_n$**
The alternating part is $(-1)^{n-1}$. The positive terms are $b_n = \frac{n}{n+1}$.

**Step 2: Check Condition 1 (Decreasing Terms)**
Let's compare $b_{n+1}$ and $b_n$:
$b_{n+1} = \frac{n+1}{(n+1)+1} = \frac{n+1}{n+2}$

Is $\frac{n+1}{n+2} \le \frac{n}{n+1}$?
Cross-multiply: $(n+1)(n+1) \le n(n+2)$
$n^2 + 2n + 1 \le n^2 + 2n$
$1 \le 0$
This inequality is **false**. Therefore, $b_{n+1} > b_n$, meaning the terms are **increasing**, not decreasing.

**Step 3: Check Condition 2 (Limit of Terms)**
Calculate $$ \lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{n}{n+1} $$
To evaluate this limit, divide the numerator and denominator by the highest power of $n$, which is $n$:
$$ \lim_{n \to \infty} \frac{1}{1 + \frac{1}{n}} = \frac{1}{1+0} = 1 $$
The limit is 1, which is **not** 0.

**Step 4: Conclude**
Condition 1 (decreasing terms) is **not** met.
Condition 2 (limit of terms is zero) is **not** met.

Since at least one condition failed (in fact, both did), the series **diverges**.

---

Another Example:

Consider the series:

$$
\sum_{n=1}^{\infty} (-1)^n \frac{1}{n}
$$

**Step 1: Identify $b_n$**
The alternating part is $(-1)^n$. The positive terms are $b_n = \frac{1}{n}$.

**Step 2: Check Condition 1 (Decreasing Terms)**
$b_{n+1} = \frac{1}{n+1}$.
Is $b_{n+1} \le b_n$?
Is $\frac{1}{n+1} \le \frac{1}{n}$?
Since $n+1 > n$ for positive $n$, taking reciprocals reverses the inequality: $\frac{1}{n+1} < \frac{1}{n}$.
So, $b_{n+1} < b_n$, which means the terms are strictly decreasing. Condition 1 is met.

**Step 3: Check Condition 2 (Limit of Terms)**
Calculate $$ \lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{1}{n} = 0 $$
Condition 2 is met.

**Step 4: Conclude**
Both conditions of the Alternating Series Test are met. Therefore, the series **converges**.

## Common Pitfalls

*   **Forgetting to identify $b_n$ correctly:** Make sure you are only checking the positive part of the term.
*   **Confusing the conditions:** Ensure you check *both* decreasing magnitude *and* the limit going to zero.
*   **Assuming convergence if the limit is zero:** If the terms are *not* decreasing, even if the limit is zero, the AST does not guarantee convergence. For example, a series with terms like $\frac{(-1)^n}{\sqrt{n}} + \frac{1}{n}$ might have a limit of zero but not decrease. (Though this specific example's convergence would be determined by other tests).
*   **Applying the AST to non-alternating series:** The AST is *only* for alternating series.

By systematically applying these steps, you can confidently determine the convergence or divergence of many alternating series.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/alternating-series-convergence-determination|Alternating series convergence determination]]
