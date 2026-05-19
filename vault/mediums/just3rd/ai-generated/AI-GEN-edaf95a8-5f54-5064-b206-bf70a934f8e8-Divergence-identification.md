---
type: "medium"
title: "Identifying Divergence in Series"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/sequence-and-series-convergence/microskills/divergence-identification|Divergence identification]]"
---
# Identifying Divergence in Series

Welcome to this lesson on identifying when a series diverges. Understanding divergence is crucial for fully grasping the behavior of infinite series, a key aspect of Sequence and Series Convergence. We'll focus on how to analyze a series and confidently determine if it does not converge.

## What is Divergence?

A series is a sum of an infinite sequence of numbers. If the partial sums of a series do not approach a finite limit as the number of terms goes to infinity, the series **diverges**. This means the sum grows infinitely large (positive or negative) or oscillates without settling on a single value.

## Key Tests for Divergence

While there are many convergence tests, some directly help us identify divergence.

### The Test for Divergence (nth Term Test)

This is often the first and simplest test to apply.

**The Rule:**
If the limit of the terms of the series as \(n \to \infty\) does not equal zero, then the series diverges.

$$
\text{If } \lim_{n \to \infty} a_n \neq 0, \text{ then } \sum_{n=1}^{\infty} a_n \text{ diverges.}
$$

**Why it works:**
For a series to converge, its terms *must* get closer and closer to zero. If the terms don't approach zero, the sum will just keep accumulating more and more significant values, preventing it from settling on a finite sum.

**Important Note:**
If \( \lim_{n \to \infty} a_n = 0 \), this test is **inconclusive**. The series *might* converge, or it *might* diverge. You'll need to use other tests in this case.

**Examples:**

1.  **Series:** $$ \sum_{n=1}^{\infty} \frac{n}{n+1} $$
    **Analysis:**
    Calculate the limit of the nth term:
    $$
    \lim_{n \to \infty} \frac{n}{n+1} = \lim_{n \to \infty} \frac{1}{1 + 1/n} = \frac{1}{1+0} = 1
    $$
    Since the limit is \(1 \neq 0\), the series **diverges** by the Test for Divergence.

2.  **Series:** $$ \sum_{n=1}^{\infty} \frac{1}{\sqrt{n}} $$
    **Analysis:**
    Calculate the limit of the nth term:
    $$
    \lim_{n \to \infty} \frac{1}{\sqrt{n}} = 0
    $$
    The limit is 0. This test is **inconclusive**. We cannot determine divergence using this test alone.

### Divergence of Geometric Series

A geometric series has the form $$ \sum_{n=0}^{\infty} ar^n $$ where \(a\) is the first term and \(r\) is the common ratio.

**The Rule:**
A geometric series diverges if the absolute value of the common ratio is greater than or equal to 1.

$$
\text{If } |r| \geq 1, \text{ then } \sum_{n=0}^{\infty} ar^n \text{ diverges.}
$$

**Why it works:**
If \(|r| \geq 1\), the terms either stay the same size (if \(|r|=1\) and \(r \neq 1\)) or grow larger in magnitude with each term. The sum will therefore not approach a finite limit.

**Examples:**

1.  **Series:** $$ \sum_{n=1}^{\infty} 3 \left(\frac{2}{3}\right)^{n-1} $$
    **Analysis:**
    This is a geometric series with \(a=3\) and \(r = \frac{2}{3}\).
    Since \(|r| = \left|\frac{2}{3}\right| = \frac{2}{3} < 1\), this series **converges**. (This is an example of convergence, showing the boundary condition.)

2.  **Series:** $$ \sum_{n=1}^{\infty} 5 (1.1)^n $$
    **Analysis:**
    This is a geometric series with \(a=5\) and \(r = 1.1\).
    Since \(|r| = |1.1| = 1.1 \geq 1\), the series **diverges**.

3.  **Series:** $$ \sum_{n=1}^{\infty} (-1)^n $$
    **Analysis:**
    This is a geometric series with \(a=-1\) and \(r=-1\).
    Since \(|r| = |-1| = 1 \geq 1\), the series **diverges**. (The partial sums oscillate between -1 and 0.)

### Divergence of p-Series

A p-series has the form $$ \sum_{n=1}^{\infty} \frac{1}{n^p} $$ where \(p\) is a positive constant.

**The Rule:**
A p-series diverges if \(p \leq 1\).

$$
\text{If } p \leq 1, \text{ then } \sum_{n=1}^{\infty} \frac{1}{n^p} \text{ diverges.}
$$

**Why it works:**
When \(p \leq 1\), the terms of the series decrease too slowly for the sum to converge. For \(p=1\), this is the famous harmonic series, which is known to diverge.

**Examples:**

1.  **Series:** $$ \sum_{n=1}^{\infty} \frac{1}{n} $$
    **Analysis:**
    This is a p-series with \(p=1\).
    Since \(p=1 \leq 1\), the series **diverges**. This is the harmonic series.

2.  **Series:** $$ \sum_{n=1}^{\infty} \frac{1}{n^{0.5}} $$
    **Analysis:**
    This is a p-series with \(p=0.5\).
    Since \(p=0.5 \leq 1\), the series **diverges**.

3.  **Series:** $$ \sum_{n=1}^{\infty} \frac{1}{n^2} $$
    **Analysis:**
    This is a p-series with \(p=2\).
    Since \(p=2 > 1\), this series **converges**. (Another example of convergence, highlighting the boundary.)

## Strategy for Identifying Divergence

When faced with a series, consider these steps:

1.  **Apply the Test for Divergence (nth Term Test):** Calculate $$ \lim_{n \to \infty} a_n $$. If it's not 0, you've found divergence. If it's 0, move on.
2.  **Identify Series Type:** Is it a geometric series or a p-series? If so, apply their specific divergence rules.
3.  **Consider Other Tests:** If the above don't yield a conclusive divergence, you'll need to explore other convergence tests (like the Ratio Test, Root Test, or Integral Test) that can sometimes also prove divergence, or prove convergence.

By systematically applying these tests, you can effectively analyze series and differentiate those that diverge from those that converge.

## Supports

- [[skills/mathematics/sequence-and-series-convergence/microskills/divergence-identification|Divergence identification]]
