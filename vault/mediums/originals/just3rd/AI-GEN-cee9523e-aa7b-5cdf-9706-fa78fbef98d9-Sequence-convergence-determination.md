---
type: "medium"
title: "Determining Sequence Convergence: Applying Properties"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/sequence-convergence-determination|sequence-convergence-determination]]"
related-skills:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/sequence-and-series-convergence|sequence-and-series-convergence]]"
learning-time-in-minutes: 4
---
# Determining Sequence Convergence: Applying Properties

To understand whether a sequence converges, we first need to determine some of its fundamental properties. This lesson focuses on applying definitions to check if a sequence is monotonically increasing, monotonically decreasing, or bounded. These properties are crucial stepping stones to determining convergence itself.

## What is a Monotonically Increasing Sequence?

A sequence $\{a_n\}$ is **monotonically increasing** if each term is greater than or equal to the previous term.

Mathematically, this means for all $n \ge 1$:
$$ a_{n+1} \ge a_n $$

**How to Check:**
You can check this property by:
1.  Comparing $a_{n+1}$ and $a_n$ directly.
2.  Looking at the difference $a_{n+1} - a_n$. If it's always $\ge 0$, the sequence is monotonically increasing.
3.  Looking at the ratio $\frac{a_{n+1}}{a_n}$ (if terms are positive). If it's always $\ge 1$, the sequence is monotonically increasing.

**Example:**
Consider the sequence $a_n = n^2$.
Let's check $a_{n+1}$ vs $a_n$:
$a_{n+1} = (n+1)^2 = n^2 + 2n + 1$
$a_n = n^2$
$a_{n+1} - a_n = (n^2 + 2n + 1) - n^2 = 2n + 1$.
Since $n \ge 1$, $2n + 1$ is always positive. Therefore, $a_{n+1} > a_n$, and the sequence $a_n = n^2$ is monotonically increasing.

## What is a Monotonically Decreasing Sequence?

A sequence $\{a_n\}$ is **monotonically decreasing** if each term is less than or equal to the previous term.

Mathematically, this means for all $n \ge 1$:
$$ a_{n+1} \le a_n $$

**How to Check:**
Similar to increasing sequences:
1.  Compare $a_{n+1}$ and $a_n$ directly.
2.  Look at the difference $a_{n+1} - a_n$. If it's always $\le 0$, the sequence is monotonically decreasing.
3.  Look at the ratio $\frac{a_{n+1}}{a_n}$ (if terms are positive). If it's always $\le 1$, the sequence is monotonically decreasing.

**Example:**
Consider the sequence $b_n = \frac{1}{n}$.
Let's check $b_{n+1}$ vs $b_n$:
$b_{n+1} = \frac{1}{n+1}$
$b_n = \frac{1}{n}$
$b_{n+1} - b_n = \frac{1}{n+1} - \frac{1}{n} = \frac{n - (n+1)}{n(n+1)} = \frac{-1}{n(n+1)}$.
Since $n \ge 1$, $n(n+1)$ is positive. Thus, $\frac{-1}{n(n+1)}$ is always negative. Therefore, $b_{n+1} < b_n$, and the sequence $b_n = \frac{1}{n}$ is monotonically decreasing.

## What is a Bounded Sequence?

A sequence $\{a_n\}$ is **bounded** if there exist numbers $m$ and $M$ such that for all $n \ge 1$:
$$ m \le a_n \le M $$

*   $m$ is called a **lower bound**.
*   $M$ is called an **upper bound**.

If a sequence has at least one lower bound and at least one upper bound, it is bounded. A sequence can have many upper and lower bounds; we are just looking for the existence of *any* such pair.

**How to Check:**
1.  **Identify potential bounds:** Look at the first few terms of the sequence. This can give you an idea of the range of values.
2.  **Analyze the general term $a_n$:** Try to determine the minimum and maximum possible values of $a_n$ as $n$ gets large.
    *   For sequences involving $n^k$, $\sin(n)$, $\cos(n)$, etc., consider their behavior.
    *   For rational functions of $n$, consider the limit as $n \to \infty$.

**Example 1:**
Consider the sequence $c_n = (-1)^n$.
The terms are $-1, 1, -1, 1, \dots$
We can see that all terms are either $-1$ or $1$.
So, we can choose $m = -1$ and $M = 1$.
Since $-1 \le c_n \le 1$ for all $n$, the sequence $c_n = (-1)^n$ is bounded.

**Example 2:**
Consider the sequence $d_n = 5 - \frac{1}{n}$.
The first few terms are:
$d_1 = 5 - 1 = 4$
$d_2 = 5 - \frac{1}{2} = 4.5$
$d_3 = 5 - \frac{1}{3} \approx 4.67$
As $n \to \infty$, $\frac{1}{n} \to 0$. So, $d_n$ approaches $5$.
Since $\frac{1}{n}$ is always positive, $5 - \frac{1}{n}$ is always less than $5$. So, $M = 5$ is an upper bound.
The smallest value occurs at $n=1$, which is $4$. So, $m = 4$ is a lower bound.
Thus, $4 \le d_n < 5$ for all $n$, and the sequence $d_n = 5 - \frac{1}{n}$ is bounded.

## Putting It Together: Monotonic and Bounded

A fundamental theorem in calculus states that **a sequence converges if and only if it is both monotonic (either increasing or decreasing) and bounded.**

This means to *determine* if a sequence converges, a common strategy is to first check if it's monotonic and bounded.

### Common Mistakes to Avoid

*   **Confusing "bounded" with "convergent":** A sequence can be bounded but not convergent (e.g., $a_n = (-1)^n$). It *must* be both monotonic *and* bounded to guarantee convergence.
*   **Assuming monotonicity:** Just because the first few terms look like they are increasing or decreasing doesn't mean the entire sequence behaves that way. Always check the general term.
*   **Incorrectly identifying bounds:** Ensure your chosen $m$ and $M$ truly encompass *all* terms of the sequence for all $n$.

By applying these definitions, you can classify sequences as increasing, decreasing, or bounded, which are essential steps in analyzing their convergence behavior.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/sequence-convergence-determination|Sequence convergence determination]]
