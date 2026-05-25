---
type: "medium"
title: "Identifying Monotonically Decreasing Sequences"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/monotonically-decreasing-sequence-identification|monotonically-decreasing-sequence-identification]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 4
---
# Identifying Monotonically Decreasing Sequences

This lesson focuses on a key property of sequences: whether they are monotonically decreasing. Understanding this helps us analyze sequence convergence.

## What is a Monotonically Decreasing Sequence?

A sequence is **monotonically decreasing** if each term is less than or equal to the previous term. In simpler terms, the sequence never increases; it either stays the same or goes down.

Formally, a sequence $\{a_n\}$ is monotonically decreasing if for all $n \geq 1$, the following inequality holds:

$$ a_{n+1} \leq a_n $$

**Key Idea:** The "next" term is always "smaller or equal to" the "current" term.

## How to Determine if a Sequence is Monotonically Decreasing

There are a couple of common methods to check this property.

### Method 1: Comparing Consecutive Terms

The most direct way is to compare $a_{n+1}$ with $a_n$.

**Steps:**

1.  Write out the general term for $a_n$.
2.  Find the general term for $a_{n+1}$ by replacing $n$ with $n+1$ in the expression for $a_n$.
3.  Form the inequality $a_{n+1} \leq a_n$.
4.  Simplify the inequality and determine if it holds true for all $n \geq 1$.

**Example:**

Let's check if the sequence defined by $a_n = \frac{1}{n}$ is monotonically decreasing.

1.  $a_n = \frac{1}{n}$
2.  $a_{n+1} = \frac{1}{n+1}$
3.  We want to check if $a_{n+1} \leq a_n$:
    $$ \frac{1}{n+1} \leq \frac{1}{n} $$
4.  To simplify, we can multiply both sides by $n(n+1)$. Since $n \geq 1$, both $n$ and $n+1$ are positive, so the inequality direction doesn't change.
    $$ n \leq n+1 $$
    Subtracting $n$ from both sides gives:
    $$ 0 \leq 1 $$
    This statement is always true. Therefore, the sequence $a_n = \frac{1}{n}$ is monotonically decreasing.

**Another Example:**

Consider the sequence $a_n = 5 - 2n$.

1.  $a_n = 5 - 2n$
2.  $a_{n+1} = 5 - 2(n+1) = 5 - 2n - 2 = 3 - 2n$
3.  Check $a_{n+1} \leq a_n$:
    $$ 3 - 2n \leq 5 - 2n $$
4.  Add $2n$ to both sides:
    $$ 3 \leq 5 $$
    This statement is always true. So, $a_n = 5 - 2n$ is a monotonically decreasing sequence.

### Method 2: Analyzing the Difference $a_{n+1} - a_n$

Another way to think about it is to look at the difference between consecutive terms. If this difference is always less than or equal to zero, the sequence is decreasing.

**Steps:**

1.  Calculate the difference: $d_n = a_{n+1} - a_n$.
2.  Analyze the sign of $d_n$ for all $n \geq 1$.
3.  If $d_n \leq 0$ for all $n \geq 1$, the sequence is monotonically decreasing.

**Example (using $a_n = \frac{1}{n}$):**

1.  $d_n = a_{n+1} - a_n = \frac{1}{n+1} - \frac{1}{n}$
2.  Find a common denominator to combine the fractions:
    $$ d_n = \frac{n}{(n+1)n} - \frac{n+1}{n(n+1)} = \frac{n - (n+1)}{n(n+1)} = \frac{-1}{n(n+1)} $$
3.  For $n \geq 1$, $n$ is positive and $n+1$ is positive, so $n(n+1)$ is positive. Therefore, $\frac{-1}{n(n+1)}$ is always negative.
    Since $d_n < 0$ for all $n \geq 1$, the sequence $a_n = \frac{1}{n}$ is monotonically decreasing.

### Method 3: Analyzing the Ratio $\frac{a_{n+1}}{a_n}$ (for positive terms)

If all terms of the sequence are positive, you can also analyze the ratio of consecutive terms.

**Steps:**

1.  Calculate the ratio: $r_n = \frac{a_{n+1}}{a_n}$.
2.  Analyze the value of $r_n$ for all $n \geq 1$.
3.  If $0 \leq r_n \leq 1$ for all $n \geq 1$ (and $a_n > 0$), the sequence is monotonically decreasing.

**Example (using $a_n = \frac{1}{n}$):**

1.  $r_n = \frac{a_{n+1}}{a_n} = \frac{\frac{1}{n+1}}{\frac{1}{n}}$
2.  Simplify the complex fraction:
    $$ r_n = \frac{1}{n+1} \times \frac{n}{1} = \frac{n}{n+1} $$
3.  For $n \geq 1$, we can see that $n < n+1$. Therefore, $\frac{n}{n+1} < 1$.
    Also, since $n \geq 1$, both $n$ and $n+1$ are positive, so $r_n > 0$.
    Thus, $0 < r_n < 1$ for all $n \geq 1$. Since $a_n = \frac{1}{n}$ consists of positive terms, this ratio confirms that the sequence is monotonically decreasing.

**Important Note:** This ratio method only works reliably for sequences where all terms are positive. If terms can be zero or negative, you need to use Method 1 or Method 2.

## Common Mistakes to Avoid

*   **Assuming without proving:** Just because the first few terms seem to be decreasing doesn't mean the entire sequence will. Always verify for all $n \geq 1$.
*   **Incorrectly handling inequalities:** When multiplying or dividing inequalities, remember to flip the inequality sign if you are working with negative numbers. This is avoided in Method 1 by ensuring terms remain positive when simplifying.
*   **Forgetting the "or equal to" part:** A sequence can be monotonically decreasing even if some consecutive terms are equal. For example, $a_n = 5$ for all $n$ is monotonically decreasing ($5 \leq 5$). Similarly, $a_n = 3$ for $n=1,2$ and $a_n = 1$ for $n \geq 3$ is also monotonically decreasing.

## Practice Problem

Determine if the sequence $a_n = \frac{n+1}{n}$ is monotonically decreasing.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/monotonically-decreasing-sequence-identification|Monotonically decreasing sequence identification]]
