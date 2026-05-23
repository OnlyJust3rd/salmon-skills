---
type: "medium"
title: "Identifying Bounded Sequences"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/bounded-sequence-identification|bounded-sequence-identification]]"
learning-time-in-minutes: 5
---
# Identifying Bounded Sequences

This lesson focuses on a key aspect of understanding sequences: determining if a sequence is **bounded**. This skill is fundamental in the broader area of Sequence and Series Convergence, specifically when we need to apply properties of sequences to predict their behavior.

## What is a Bounded Sequence?

A sequence is considered **bounded** if its terms do not grow infinitely large or infinitely small. More formally, a sequence $\{a_n\}$ is bounded if there exist real numbers $m$ and $M$ such that for all $n$, $m \le a_n \le M$.

*   **Bounded Below**: If there exists a real number $m$ such that $m \le a_n$ for all $n$.
*   **Bounded Above**: If there exists a real number $M$ such that $a_n \le M$ for all $n$.
*   **Bounded**: A sequence is bounded if it is both bounded below and bounded above.

Think of it like this: if you can draw a horizontal line above all the points of the sequence on a graph and another horizontal line below all the points, then the sequence is bounded.

## Why is Boundedness Important?

Boundedness is a crucial property because it helps us infer other behaviors of a sequence, especially its convergence. For example, a **monotonic and bounded** sequence is guaranteed to converge. By identifying if a sequence is bounded, we can start to build a picture of its long-term behavior.

## How to Identify if a Sequence is Bounded

The core of identifying boundedness is to find (or prove the existence of) those numbers $m$ and $M$. Here's a practical approach:

### Step 1: Examine the Terms of the Sequence

Write out the first few terms of the sequence. This often gives you an intuitive sense of whether the terms are growing without limit or staying within a certain range.

### Step 2: Look for Patterns or Formulas

If a general formula for $a_n$ is given, analyze it.
*   **Consider the behavior of the dominant terms**: For rational functions of $n$, look at the highest powers of $n$ in the numerator and denominator.
*   **Trigonometric functions**: Sequences involving $\sin(n)$ or $\cos(n)$ are often bounded because their values are restricted to $[-1, 1]$.
*   **Exponential functions**: Be cautious with exponential terms like $2^n$ (unbounded) versus $(1/2)^n$ (bounded).

### Step 3: Attempt to Find Bounds

Try to find values for $m$ and $M$.

*   **Lower Bound ($m$)**: Can you find a number that all terms are greater than or equal to?
*   **Upper Bound ($M$)**: Can you find a number that all terms are less than or equal to?

### Step 4: Prove the Bounds (If Necessary)

Sometimes, just looking at the first few terms isn't enough. You might need to use inequalities or other mathematical tools to prove that your chosen $m$ and $M$ hold for *all* $n$.

## Worked Examples

Let's apply these steps to some examples.

### Example 1:  $a_n = \frac{1}{n}$

1.  **Examine terms**: $a_1 = 1, a_2 = 1/2, a_3 = 1/3, a_4 = 1/4, \dots$
2.  **Look for patterns**: As $n$ gets larger, $1/n$ gets smaller and approaches 0. The terms are decreasing.
3.  **Attempt to find bounds**:
    *   For $n \ge 1$, $n$ is always positive, so $1/n$ is always positive. This suggests a lower bound. We can say $a_n > 0$ for all $n$. So, $m=0$ is a possible lower bound.
    *   The largest term occurs when $n=1$, which is $a_1 = 1$. For all $n > 1$, $a_n < 1$. This suggests an upper bound. We can say $a_n \le 1$ for all $n$. So, $M=1$ is a possible upper bound.
4.  **Conclusion**: Since we found $0 \le a_n \le 1$ for all $n$, the sequence $\{a_n = \frac{1}{n}\}$ is **bounded**.

### Example 2: $a_n = n^2$

1.  **Examine terms**: $a_1 = 1, a_2 = 4, a_3 = 9, a_4 = 16, \dots$
2.  **Look for patterns**: The terms are increasing rapidly. It looks like they will continue to grow without end.
3.  **Attempt to find bounds**:
    *   For $n \ge 1$, $n^2 \ge 1$. So, $m=1$ is a lower bound. The sequence is bounded below.
    *   Can we find a number $M$ such that $n^2 \le M$ for all $n$? No. As $n$ increases, $n^2$ will eventually exceed any chosen $M$. For instance, if we picked $M=100$, then for $n=11$, $a_{11} = 121 > 100$.
4.  **Conclusion**: The sequence $\{a_n = n^2\}$ is **not bounded above**, and therefore it is **not bounded**.

### Example 3: $a_n = (-1)^n$

1.  **Examine terms**: $a_1 = -1, a_2 = 1, a_3 = -1, a_4 = 1, \dots$
2.  **Look for patterns**: The terms alternate between -1 and 1.
3.  **Attempt to find bounds**:
    *   The smallest term is -1. So, $-1 \le a_n$ for all $n$. Thus, $m=-1$ is a lower bound.
    *   The largest term is 1. So, $a_n \le 1$ for all $n$. Thus, $M=1$ is an upper bound.
4.  **Conclusion**: Since we found $-1 \le a_n \le 1$ for all $n$, the sequence $\{a_n = (-1)^n\}$ is **bounded**.

### Example 4: $a_n = \sin(n)$

1.  **Examine terms**: $a_1 = \sin(1) \approx 0.841$, $a_2 = \sin(2) \approx 0.909$, $a_3 = \sin(3) \approx 0.141$, $a_4 = \sin(4) \approx -0.757$, $\dots$
2.  **Look for patterns**: The terms oscillate, but their values are always between -1 and 1 due to the nature of the sine function.
3.  **Attempt to find bounds**:
    *   We know that for any real number $x$, $-1 \le \sin(x) \le 1$.
    *   Therefore, for any integer $n$, $-1 \le \sin(n) \le 1$.
4.  **Conclusion**: We have found that $-1 \le a_n \le 1$ for all $n$. The sequence $\{a_n = \sin(n)\}$ is **bounded**.

## Common Mistakes to Avoid

*   **Confusing "bounded" with "convergent"**: While related, they are not the same. A bounded sequence might oscillate (like $\{(-1)^n\}$) and not converge. However, if a sequence *is* convergent, it *must* be bounded.
*   **Only checking the first few terms**: Ensure your bounds hold for *all* terms of the sequence. The behavior for large $n$ is what matters most.
*   **Assuming unboundedness too quickly**: For complex formulas, carefully analyze all components before concluding a sequence grows infinitely large.

By practicing these steps and understanding the definitions, you'll become proficient at identifying whether a sequence is bounded, a crucial skill for analyzing sequences and series.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/bounded-sequence-identification|Bounded sequence identification]]
