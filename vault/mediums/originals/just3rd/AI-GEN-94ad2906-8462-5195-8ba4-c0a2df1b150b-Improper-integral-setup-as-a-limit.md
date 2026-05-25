---
type: "medium"
title: "Rewriting Improper Integrals as Limits"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/integral-evaluation/microskills/improper-integral-setup-as-a-limit|improper-integral-setup-as-a-limit]]"
related-skills:
  - "[[skills/mathematics/calculus/integral-evaluation/integral-evaluation|integral-evaluation]]"
learning-time-in-minutes: 5
---
# Rewriting Improper Integrals as Limits

This lesson focuses on the first crucial step in evaluating improper integrals: correctly setting them up as limits. Improper integrals arise when the interval of integration is infinite or when the integrand has an infinite discontinuity within the interval.

## What is an Improper Integral?

Before we rewrite them, let's quickly identify an improper integral. There are two main types:

1.  **Infinite Interval of Integration:** The integral has an $\infty$ or $-\infty$ as one or both of its limits of integration.
    $$ \int_a^\infty f(x) \, dx \quad \text{or} \quad \int_{-\infty}^b f(x) \, dx \quad \text{or} \quad \int_{-\infty}^\infty f(x) \, dx $$
2.  **Infinite Discontinuity:** The integrand $f(x)$ approaches infinity (or negative infinity) at one or more points within the interval of integration $[a, b]$.
    $$ \int_a^b f(x) \, dx \quad \text{where } f(x) \to \pm\infty \text{ as } x \to c \text{ for some } a < c < b $$

## Why Rewrite as a Limit?

Integrals are fundamentally defined over finite intervals. To "evaluate" an integral over an infinite interval or one with a discontinuity, we need to bridge this gap. We do this by replacing the problematic part of the integral (the infinity or the point of discontinuity) with a variable and then taking the limit as that variable approaches the problematic value. This allows us to use the tools of standard integration and limits to determine the integral's behavior.

## Rewriting Type 1: Infinite Interval of Integration

### Case 1: Upper Limit is Infinity

If you have an integral with an upper limit of infinity, like $\int_a^\infty f(x) \, dx$, you replace the $\infty$ with a variable, say $b$, and then take the limit as $b$ approaches $\infty$.

$$ \int_a^\infty f(x) \, dx = \lim_{b \to \infty} \int_a^b f(x) \, dx $$

**Example:** Rewrite $\int_1^\infty \frac{1}{x^2} \, dx$.

*   Identify the problematic limit: $\infty$.
*   Replace $\infty$ with a variable, say $b$.
*   Set up the limit:
    $$ \lim_{b \to \infty} \int_1^b \frac{1}{x^2} \, dx $$

### Case 2: Lower Limit is Negative Infinity

Similarly, for an integral with a lower limit of $-\infty$, like $\int_{-\infty}^b f(x) \, dx$, you replace $-\infty$ with a variable, say $a$, and take the limit as $a$ approaches $-\infty$.

$$ \int_{-\infty}^b f(x) \, dx = \lim_{a \to -\infty} \int_a^b f(x) \, dx $$

**Example:** Rewrite $\int_{-\infty}^0 e^x \, dx$.

*   Identify the problematic limit: $-\infty$.
*   Replace $-\infty$ with a variable, say $a$.
*   Set up the limit:
    $$ \lim_{a \to -\infty} \int_a^0 e^x \, dx $$

### Case 3: Both Limits are Infinite

If both limits are infinite, $\int_{-\infty}^\infty f(x) \, dx$, you must split the integral into two separate improper integrals at any convenient point $c$ (often $c=0$ or any other real number). Then, you rewrite each part as a limit.

$$ \int_{-\infty}^\infty f(x) \, dx = \int_{-\infty}^c f(x) \, dx + \int_c^\infty f(x) \, dx $$
$$ = \lim_{a \to -\infty} \int_a^c f(x) \, dx + \lim_{b \to \infty} \int_c^b f(x) \, dx $$

**Example:** Rewrite $\int_{-\infty}^\infty x \, dx$.

*   Choose a splitting point, say $c=0$.
*   Split the integral: $\int_{-\infty}^0 x \, dx + \int_0^\infty x \, dx$.
*   Rewrite each part as a limit:
    $$ \lim_{a \to -\infty} \int_a^0 x \, dx + \lim_{b \to \infty} \int_0^b x \, dx $$

## Rewriting Type 2: Infinite Discontinuity

If the integrand $f(x)$ has an infinite discontinuity at a point $c$ within the interval $[a, b]$, you split the integral into two parts at $c$. Then, you rewrite each integral as a limit.

### Case 1: Discontinuity at the Upper Limit ($b$)

If $f(x)$ has a discontinuity at $b$, replace $b$ with a variable, say $t$, and take the limit as $t$ approaches $b$ *from the left* (since we are integrating from $a$ up to $b$).

$$ \int_a^b f(x) \, dx = \lim_{t \to b^-} \int_a^t f(x) \, dx $$

**Example:** Rewrite $\int_0^1 \frac{1}{\sqrt{1-x}} \, dx$.

*   Identify the discontinuity: At $x=1$, the denominator is $\sqrt{1-1}=0$, making the integrand undefined and approach infinity.
*   Replace the upper limit $1$ with a variable, say $t$.
*   Set up the limit as $t \to 1^-$:
    $$ \lim_{t \to 1^-} \int_0^t \frac{1}{\sqrt{1-x}} \, dx $$

### Case 2: Discontinuity at the Lower Limit ($a$)

If $f(x)$ has a discontinuity at $a$, replace $a$ with a variable, say $t$, and take the limit as $t$ approaches $a$ *from the right* (since we are integrating from $a$ up to $b$).

$$ \int_a^b f(x) \, dx = \lim_{t \to a^+} \int_t^b f(x) \, dx $$

**Example:** Rewrite $\int_0^2 \frac{1}{x} \, dx$.

*   Identify the discontinuity: At $x=0$, the denominator is $0$, making the integrand undefined and approach infinity.
*   Replace the lower limit $0$ with a variable, say $t$.
*   Set up the limit as $t \to 0^+$:
    $$ \lim_{t \to 0^+} \int_t^2 \frac{1}{x} \, dx $$

### Case 3: Discontinuity within the Interval ($a < c < b$)

If $f(x)$ has a discontinuity at a point $c$ strictly between $a$ and $b$, split the integral into two at $c$. Then, rewrite each part as a limit, approaching $c$ from the left for the first integral and from the right for the second.

$$ \int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx $$
$$ = \lim_{t \to c^-} \int_a^t f(x) \, dx + \lim_{t \to c^+} \int_t^b f(x) \, dx $$

**Example:** Rewrite $\int_{-1}^1 \frac{1}{x^2} \, dx$.

*   Identify the discontinuity: At $x=0$, the denominator is $0$, making the integrand undefined and approach infinity. The point $c=0$ is within $[-1, 1]$.
*   Split the integral at $c=0$: $\int_{-1}^0 \frac{1}{x^2} \, dx + \int_0^1 \frac{1}{x^2} \, dx$.
*   Rewrite each part as a limit:
    $$ \lim_{t \to 0^-} \int_{-1}^t \frac{1}{x^2} \, dx + \lim_{t \to 0^+} \int_t^1 \frac{1}{x^2} \, dx $$

## Summary of Rewriting Rules

| Integral Type                 | Form                                        | Limit Setup                                                              |
| :---------------------------- | :------------------------------------------ | :----------------------------------------------------------------------- |
| Infinite Upper Limit          | $\int_a^\infty f(x) \, dx$                  | $\lim_{b \to \infty} \int_a^b f(x) \, dx$                               |
| Infinite Lower Limit          | $\int_{-\infty}^b f(x) \, dx$               | $\lim_{a \to -\infty} \int_a^b f(x) \, dx$                               |
| Infinite Both Limits          | $\int_{-\infty}^\infty f(x) \, dx$          | $\lim_{a \to -\infty} \int_a^c f(x) \, dx + \lim_{b \to \infty} \int_c^b f(x) \, dx$ |
| Discontinuity at Upper Limit  | $\int_a^b f(x) \, dx$, $f(b)$ undefined     | $\lim_{t \to b^-} \int_a^t f(x) \, dx$                                   |
| Discontinuity at Lower Limit  | $\int_a^b f(x) \, dx$, $f(a)$ undefined     | $\lim_{t \to a^+} \int_t^b f(x) \, dx$                                   |
| Discontinuity in Interval     | $\int_a^b f(x) \, dx$, $f(c)$ undefined ($a<c<b$) | $\lim_{t \to c^-} \int_a^t f(x) \, dx + \lim_{t \to c^+} \int_t^b f(x) \, dx$ |

This setup is the essential first step. Once you have the integral rewritten as a limit, you can proceed to evaluate the definite integral and then compute the limit to determine if the improper integral converges or diverges.

## Supports

- [[skills/mathematics/calculus/integral-evaluation/microskills/improper-integral-setup-as-a-limit|Improper integral setup as a limit]]
