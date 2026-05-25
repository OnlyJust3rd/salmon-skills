---
type: "medium"
title: "Convergence vs. Divergence of Improper Integrals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/integral-evaluation/microskills/convergence-vs-divergence|convergence-vs-divergence]]"
related-skills:
  - "[[skills/mathematics/calculus/integral-evaluation/integral-evaluation|integral-evaluation]]"
learning-time-in-minutes: 4
---
# Convergence vs. Divergence of Improper Integrals

This lesson focuses on determining whether an improper integral converges to a finite value or diverges to infinity. Understanding this distinction is crucial for evaluating improper integrals, a key skill in our macro skill of Integral Evaluation.

## What is an Improper Integral?

An improper integral is an integral where the interval of integration is infinite, or the integrand has an infinite discontinuity within the interval of integration. We've learned how to set them up using limits. Now, let's see what happens when we evaluate those limits.

## Convergence and Divergence Explained

When we evaluate an improper integral, we are essentially asking: does the area under the curve approach a finite number, or does it extend infinitely?

*   **Convergence:** If the limit of the definite integral exists and is a finite number, the improper integral **converges**. This means the total area under the curve is finite.
*   **Divergence:** If the limit does not exist, or if it is infinite (positive or negative), the improper integral **diverges**. This means the total area under the curve is infinite.

## How to Determine Convergence or Divergence

We determine convergence or divergence by evaluating the limit we established when defining the improper integral.

### Case 1: Infinite Interval of Integration

If we have an integral of the form $$ \int_a^\infty f(x) \, dx $$, we rewrite it as:
$$ \lim_{b \to \infty} \int_a^b f(x) \, dx $$

If this limit results in a finite number, the integral converges. If it's $$ \infty $$ or $$ -\infty $$, or if the limit doesn't exist, it diverges.

#### Worked Example 1: Convergence

Let's evaluate $$ \int_1^\infty \frac{1}{x^2} \, dx $$.

1.  **Rewrite using a limit:**
    $$ \lim_{b \to \infty} \int_1^b \frac{1}{x^2} \, dx $$

2.  **Evaluate the definite integral:**
    The antiderivative of $$ \frac{1}{x^2} $$ (or $$ x^{-2} $$) is $$ -x^{-1} $$ or $$ -\frac{1}{x} $$.
    $$ \int_1^b \frac{1}{x^2} \, dx = \left[ -\frac{1}{x} \right]_1^b = -\frac{1}{b} - \left(-\frac{1}{1}\right) = 1 - \frac{1}{b} $$

3.  **Evaluate the limit:**
    $$ \lim_{b \to \infty} \left( 1 - \frac{1}{b} \right) $$
    As $$ b $$ approaches infinity, $$ \frac{1}{b} $$ approaches 0.
    $$ 1 - 0 = 1 $$

Since the limit is 1 (a finite number), the improper integral $$ \int_1^\infty \frac{1}{x^2} \, dx $$ **converges** to 1.

#### Worked Example 2: Divergence

Let's evaluate $$ \int_1^\infty \frac{1}{x} \, dx $$.

1.  **Rewrite using a limit:**
    $$ \lim_{b \to \infty} \int_1^b \frac{1}{x} \, dx $$

2.  **Evaluate the definite integral:**
    The antiderivative of $$ \frac{1}{x} $$ is $$ \ln|x| $$.
    $$ \int_1^b \frac{1}{x} \, dx = [\ln|x|]_1^b = \ln|b| - \ln|1| = \ln(b) - 0 = \ln(b) $$

3.  **Evaluate the limit:**
    $$ \lim_{b \to \infty} \ln(b) $$
    As $$ b $$ approaches infinity, $$ \ln(b) $$ also approaches infinity.

Since the limit is $$ \infty $$, the improper integral $$ \int_1^\infty \frac{1}{x} \, dx $$ **diverges**.

### Case 2: Infinite Discontinuity

If we have an integral of the form $$ \int_a^b f(x) \, dx $$ where $$ f(x) $$ has an infinite discontinuity at $$ x=c $$ (where $$ a \le c \le b $$), we split the integral at $$ c $$ and evaluate limits for each part.

For example, if the discontinuity is at the upper limit $$ b $$, we write:
$$ \lim_{t \to b^-} \int_a^t f(x) \, dx $$

If the discontinuity is at the lower limit $$ a $$, we write:
$$ \lim_{t \to a^+} \int_t^b f(x) \, dx $$

If the discontinuity is in the middle, say at $$ c $$, we split it:
$$ \int_a^c f(x) \, dx + \int_c^b f(x) \, dx = \lim_{t \to c^-} \int_a^t f(x) \, dx + \lim_{t \to c^+} \int_t^b f(x) \, dx $$

For the original integral to converge, **both** of these limits must exist and be finite. If either limit diverges, the entire integral diverges.

#### Worked Example 3: Convergence (Discontinuity at Lower Bound)

Let's evaluate $$ \int_0^1 \frac{1}{\sqrt{x}} \, dx $$. The function $$ \frac{1}{\sqrt{x}} $$ has an infinite discontinuity at $$ x=0 $$.

1.  **Rewrite using a limit (since the discontinuity is at the lower bound):**
    $$ \lim_{a \to 0^+} \int_a^1 \frac{1}{\sqrt{x}} \, dx $$

2.  **Evaluate the definite integral:**
    $$ \frac{1}{\sqrt{x}} = x^{-1/2} $$
    The antiderivative is $$ \frac{x^{1/2}}{1/2} = 2\sqrt{x} $$.
    $$ \int_a^1 x^{-1/2} \, dx = [2\sqrt{x}]_a^1 = 2\sqrt{1} - 2\sqrt{a} = 2 - 2\sqrt{a} $$

3.  **Evaluate the limit:**
    $$ \lim_{a \to 0^+} (2 - 2\sqrt{a}) $$
    As $$ a $$ approaches 0 from the positive side, $$ \sqrt{a} $$ approaches 0.
    $$ 2 - 2(0) = 2 $$

Since the limit is 2 (a finite number), the improper integral $$ \int_0^1 \frac{1}{\sqrt{x}} \, dx $$ **converges** to 2.

#### Worked Example 4: Divergence (Discontinuity at Upper Bound)

Let's evaluate $$ \int_0^1 \frac{1}{x} \, dx $$. The function $$ \frac{1}{x} $$ has an infinite discontinuity at $$ x=0 $$.

1.  **Rewrite using a limit:**
    $$ \lim_{a \to 0^+} \int_a^1 \frac{1}{x} \, dx $$

2.  **Evaluate the definite integral:**
    $$ \int_a^1 \frac{1}{x} \, dx = [\ln|x|]_a^1 = \ln(1) - \ln(a) = 0 - \ln(a) = -\ln(a) $$

3.  **Evaluate the limit:**
    $$ \lim_{a \to 0^+} (-\ln(a)) $$
    As $$ a $$ approaches 0 from the positive side, $$ \ln(a) $$ approaches $$ -\infty $$.
    So, $$ -\ln(a) $$ approaches $$ -(-\infty) = \infty $$.

Since the limit is $$ \infty $$, the improper integral $$ \int_0^1 \frac{1}{x} \, dx $$ **diverges**.

## Key Takeaways

*   The convergence or divergence of an improper integral is determined by the behavior of the limit(s) used in its definition.
*   If the limit is a finite number, the integral converges, and that number is its value.
*   If the limit is $$ \infty $$, $$ -\infty $$, or does not exist, the integral diverges.
*   For integrals with discontinuities, all split integrals must converge for the overall integral to converge.

## Supports

- [[skills/mathematics/calculus/integral-evaluation/microskills/convergence-vs-divergence|Convergence vs divergence]]
