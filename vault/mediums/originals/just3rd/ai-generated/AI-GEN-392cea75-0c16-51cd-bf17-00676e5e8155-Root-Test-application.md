---
type: "medium"
title: "Applying the Root Test for Series Convergence"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/sequence-and-series-convergence/microskills/root-test-application|root-test-application]]"
learning-time-in-minutes: 4
---
# Applying the Root Test for Series Convergence

This lesson focuses on applying the Root Test, one of the powerful tools we have to determine if an infinite series converges or diverges. We'll work through examples to build your confidence in using this test.

## Understanding the Root Test

The Root Test is particularly useful when the terms of a series involve powers, especially terms raised to the $n$-th power.

**The Test:**
Consider an infinite series $\sum_{n=1}^{\infty} a_n$. We calculate the limit:

$$ L = \lim_{n \to \infty} \sqrt[n]{|a_n|} = \lim_{n \to \infty} |a_n|^{1/n} $$

Based on the value of $L$, we can conclude:

*   **If $L < 1$**: The series $\sum a_n$ converges absolutely.
*   **If $L > 1$ (or $L = \infty$)**: The series $\sum a_n$ diverges.
*   **If $L = 1$**: The Root Test is inconclusive. We must use another test to determine convergence or divergence.

### Why does it work?

Intuitively, if $|a_n|^{1/n}$ approaches a value $L$ less than 1, it means that for large $n$, $|a_n|$ is roughly like $L^n$. A geometric series with a common ratio $L < 1$ converges, and the Root Test leverages this similarity. Conversely, if $L > 1$, $|a_n|$ grows faster than $L^n$, indicating divergence.

## When to Use the Root Test

The Root Test is a good first choice when:

*   The general term $a_n$ contains an $n$-th power, like $(b_n)^n$.
*   The general term involves expressions like $n^n$.

## Step-by-Step Application

Let's break down the process of applying the Root Test.

**Step 1: Identify the general term $a_n$.**
This is the expression that defines each term in your series.

**Step 2: Calculate the $n$-th root of the absolute value of $a_n$.**
Find $|a_n|^{1/n}$.

**Step 3: Evaluate the limit of this expression as $n \to \infty$.**
Calculate $L = \lim_{n \to \infty} |a_n|^{1/n}$. This is often the most challenging step and may require using known limit properties or L'Hôpital's Rule.

**Step 4: Interpret the result based on the value of $L$.**
*   $L < 1$: Converges
*   $L > 1$: Diverges
*   $L = 1$: Inconclusive

## Worked Example

Let's apply the Root Test to the series $\sum_{n=1}^{\infty} \left(\frac{2n+1}{n+3}\right)^n$.

**Step 1: Identify $a_n$.**
Here, $a_n = \left(\frac{2n+1}{n+3}\right)^n$.

**Step 2: Calculate $|a_n|^{1/n}$.**
Since the terms are positive, $|a_n| = a_n$.
$$ |a_n|^{1/n} = \left[ \left(\frac{2n+1}{n+3}\right)^n \right]^{1/n} = \frac{2n+1}{n+3} $$

**Step 3: Evaluate the limit as $n \to \infty$.**
We need to find $L = \lim_{n \to \infty} \frac{2n+1}{n+3}$.
To evaluate this limit, we can divide both the numerator and the denominator by the highest power of $n$ in the denominator, which is $n$:
$$ L = \lim_{n \to \infty} \frac{\frac{2n}{n}+\frac{1}{n}}{\frac{n}{n}+\frac{3}{n}} = \lim_{n \to \infty} \frac{2+\frac{1}{n}}{1+\frac{3}{n}} $$
As $n \to \infty$, $\frac{1}{n} \to 0$ and $\frac{3}{n} \to 0$.
$$ L = \frac{2+0}{1+0} = 2 $$

**Step 4: Interpret the result.**
We found that $L = 2$. Since $L > 1$, the series $\sum_{n=1}^{\infty} \left(\frac{2n+1}{n+3}\right)^n$ **diverges**.

## Another Example: The Inconclusive Case

Consider the series $\sum_{n=1}^{\infty} \left(\frac{n+1}{n}\right)^{n^2}$.

**Step 1: Identify $a_n$.**
$a_n = \left(\frac{n+1}{n}\right)^{n^2}$.

**Step 2: Calculate $|a_n|^{1/n}$.**
$$ |a_n|^{1/n} = \left[ \left(\frac{n+1}{n}\right)^{n^2} \right]^{1/n} = \left(\frac{n+1}{n}\right)^{n^2 \cdot \frac{1}{n}} = \left(\frac{n+1}{n}\right)^n $$

**Step 3: Evaluate the limit as $n \to \infty$.**
We need to find $L = \lim_{n \to \infty} \left(\frac{n+1}{n}\right)^n$.
This limit can be rewritten as:
$$ L = \lim_{n \to \infty} \left(1+\frac{1}{n}\right)^n $$
This is a well-known limit that equals $e$.
$$ L = e $$

**Step 4: Interpret the result.**
We found that $L = e$. Since $e \approx 2.718$, we have $L > 1$. Therefore, the series $\sum_{n=1}^{\infty} \left(\frac{n+1}{n}\right)^{n^2}$ **diverges**.

**What if the limit was 1?**
If we had encountered a series where $L=1$, the Root Test wouldn't give us an answer. For instance, the series $\sum_{n=1}^{\infty} \frac{1}{n^2}$ would yield $L=1$. In such cases, we would need to switch to another test, like the p-series test or the integral test.

## Common Pitfalls

*   **Forgetting the absolute value:** While not an issue if all terms are positive, always remember to consider $|a_n|$ in general, as the convergence of $\sum a_n$ is related to the convergence of $\sum |a_n|$ (absolute convergence).
*   **Errors in limit evaluation:** Evaluating limits involving $n \to \infty$ can be tricky. Practice with common limits and techniques like L'Hôpital's Rule.
*   **Misinterpreting $L=1$:** Remember that $L=1$ means the test is inconclusive, not that the series converges or diverges.

By practicing these steps with various series, you'll become proficient in applying the Root Test to determine convergence.

## Supports

- [[skills/mathematics/calculus/sequence-and-series-convergence/microskills/root-test-application|Root Test application]]
