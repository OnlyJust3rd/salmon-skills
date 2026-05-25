---
type: "medium"
title: "Endpoint Behavior Analysis for Power Series"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/power-series-and-taylor-expansions/microskills/endpoint-behavior-analysis|endpoint-behavior-analysis]]"
learning-time-in-minutes: 3
---
# Endpoint Behavior Analysis for Power Series

We've been exploring power series and how to determine their convergence using the radius and interval of convergence. Now, we'll focus on a crucial detail: what happens at the *endpoints* of that interval. This is the final step in fully analyzing a power series' convergence.

## Why Endpoint Analysis Matters

The tests we use to find the radius and interval of convergence (like the Ratio Test or Root Test) often break down at the endpoints. They might yield an inconclusive result (a ratio of 1 or a limit of 1). At these specific points, the power series behaves differently, and we need to use different convergence tests to understand its behavior.

For example, a power series might converge beautifully within an interval, but diverge at one or both endpoints. Knowing this is vital for using the series accurately in further calculations or applications.

## The Process: Testing the Endpoints

Once you've determined the interval of convergence, say it looks something like $$(a, b)$$, $$[a, b)$$, $$(a, b]$$, or $$[a, b]$$, the next step is to check the values $$x=a$$ and $$x=b$$.

Here's the general approach:

1.  **Identify the Endpoints:** These are the values that define the boundary of your interval of convergence.
2.  **Substitute Each Endpoint:** Plug each endpoint value into the original power series.
3.  **Apply Appropriate Convergence Tests:** The resulting series at each endpoint will be a standard series. You'll need to use tests like:
    *   **The Alternating Series Test:** If the series alternates in sign.
    *   **The p-Series Test:** If the series is of the form $$ \sum \frac{1}{n^p} $$.
    *   **The Integral Test:** If the terms are positive and decreasing.
    *   **The Comparison Test (Direct or Limit):** Compare it to a known convergent or divergent series.

## Worked Example: Analyzing Endpoint Behavior

Let's analyze the power series:

$$
\sum_{n=1}^{\infty} \frac{(x-3)^n}{n}
$$

**Step 1: Find the Interval of Convergence (Previous Steps)**

Using the Ratio Test, we find that the radius of convergence is $$R=1$$. The center of the series is $$c=3$$. This gives us a preliminary interval of $$(3-1, 3+1)$$, which is $$(2, 4)$$.

Now, we must check the endpoints $$x=2$$ and $$x=4$$.

**Step 2: Test the Left Endpoint (x=2)**

Substitute $$x=2$$ into the series:

$$
\sum_{n=1}^{\infty} \frac{(2-3)^n}{n} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n}
$$

This is the alternating harmonic series. We can use the **Alternating Series Test**:
*   Let $$b_n = \frac{1}{n}$$.
*   $$b_n > 0$$ for $$n \geq 1$$.
*   $$b_n$$ is decreasing (since $$n$$ increases, $$1/n$$ decreases).
*   $$ \lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{1}{n} = 0 $$

Since all conditions of the Alternating Series Test are met, the series **converges** at $$x=2$$.

**Step 3: Test the Right Endpoint (x=4)**

Substitute $$x=4$$ into the series:

$$
\sum_{n=1}^{\infty} \frac{(4-3)^n}{n} = \sum_{n=1}^{\infty} \frac{(1)^n}{n} = \sum_{n=1}^{\infty} \frac{1}{n}
$$

This is the harmonic series, which is a well-known **divergent** p-series (with $$p=1$$).

**Step 4: Conclude the Interval of Convergence**

*   The series converges at the left endpoint $$x=2$$.
*   The series diverges at the right endpoint $$x=4$$.

Therefore, the **interval of convergence** is $$[2, 4)$$.

## Common Pitfalls

*   **Forgetting to test endpoints:** This is the most common mistake. The radius and interval of convergence are incomplete without endpoint analysis.
*   **Using the wrong test at endpoints:** Remember that the Ratio Test and Root Test are often inconclusive at endpoints, so you need to switch to other convergence tests.
*   **Confusing open and closed brackets:** Ensure you correctly denote whether an endpoint is included (closed bracket, $$[ ]$$) or excluded (open bracket, $$ ( ) $$) based on your convergence test results.

By mastering endpoint analysis, you gain a complete understanding of where a power series converges, which is essential for its accurate application in calculus and beyond.

## Supports

- [[skills/mathematics/calculus/power-series-and-taylor-expansions/microskills/endpoint-behavior-analysis|Endpoint behavior analysis]]
