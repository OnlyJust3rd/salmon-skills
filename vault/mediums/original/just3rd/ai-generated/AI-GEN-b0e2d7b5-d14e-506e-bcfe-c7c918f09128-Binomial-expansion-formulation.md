---
type: "medium"
title: "Binomial Expansion Formulation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/calculus/power-series-and-taylor-expansions/microskills/binomial-expansion-formulation|binomial-expansion-formulation]]"
learning-time-in-minutes: 3
---
# Binomial Expansion Formulation

This lesson focuses on the core skill of applying the binomial expansion formula to generate series. We'll explore how to use this formula systematically to represent certain types of functions as infinite series.

## What is the Binomial Expansion?

The binomial expansion is a powerful tool that allows us to express functions of the form $$(1+x)^k$$ as an infinite series, provided that certain conditions are met. This is a fundamental concept in understanding power series and Taylor expansions.

The general formula for the binomial expansion is:

$$
(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n = \binom{k}{0} + \binom{k}{1}x + \binom{k}{2}x^2 + \binom{k}{3}x^3 + \dots
$$

where:
*   $$k$$ is any real number.
*   $$x$$ is a variable.
*   $$ \binom{k}{n} $$ is the generalized binomial coefficient, defined as:
    $$
    \binom{k}{n} = \frac{k(k-1)(k-2)\dots(k-n+1)}{n!}
    $$
    for $$n \ge 1$$, and $$ \binom{k}{0} = 1 $$.

### Understanding the Binomial Coefficient

Let's break down the binomial coefficient:

*   For $$n=0$$, $$ \binom{k}{0} = 1 $$. This is the constant term in the expansion.
*   For $$n=1$$, $$ \binom{k}{1} = \frac{k}{1!} = k $$. This gives the term $$kx$$.
*   For $$n=2$$, $$ \binom{k}{2} = \frac{k(k-1)}{2!} = \frac{k(k-1)}{2} $$. This gives the term $$ \frac{k(k-1)}{2} x^2 $$.
*   For $$n=3$$, $$ \binom{k}{3} = \frac{k(k-1)(k-2)}{3!} = \frac{k(k-1)(k-2)}{6} $$. This gives the term $$ \frac{k(k-1)(k-2)}{6} x^3 $$.

And so on. The numerator has $$n$$ terms, starting from $$k$$ and decreasing by 1 in each step. The denominator is $$n!$$.

## Applying the Formula: Worked Examples

Let's see how to use this formula to generate series for specific functions.

### Example 1: Expanding $$(1+x)^{1/2}$$

Here, $$k = 1/2$$. We need to calculate the first few binomial coefficients:

*   $$ \binom{1/2}{0} = 1 $$
*   $$ \binom{1/2}{1} = \frac{1/2}{1!} = \frac{1}{2} $$
*   $$ \binom{1/2}{2} = \frac{(1/2)(1/2 - 1)}{2!} = \frac{(1/2)(-1/2)}{2} = \frac{-1/4}{2} = -\frac{1}{8} $$
*   $$ \binom{1/2}{3} = \frac{(1/2)(1/2 - 1)(1/2 - 2)}{3!} = \frac{(1/2)(-1/2)(-3/2)}{6} = \frac{3/8}{6} = \frac{3}{48} = \frac{1}{16} $$

Now, substitute these into the binomial expansion formula:

$$
(1+x)^{1/2} = 1 + \frac{1}{2}x + \left(-\frac{1}{8}\right)x^2 + \left(\frac{1}{16}\right)x^3 + \dots
$$

$$
\sqrt{1+x} = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 + \dots
$$

### Example 2: Expanding $$(1-2x)^{-3}$$

This looks slightly different, but we can rewrite it as $$ (1 + (-2x))^{-3} $$.
Here, $$k = -3$$ and we are expanding in terms of $$(-2x)$$ instead of $$x$$. So, the general formula becomes:

$$
(1 + u)^k = \sum_{n=0}^{\infty} \binom{k}{n} u^n
$$

with $$u = -2x$$ and $$k = -3$$.

Let's calculate the binomial coefficients for $$k=-3$$:

*   $$ \binom{-3}{0} = 1 $$
*   $$ \binom{-3}{1} = \frac{-3}{1!} = -3 $$
*   $$ \binom{-3}{2} = \frac{(-3)(-3-1)}{2!} = \frac{(-3)(-4)}{2} = \frac{12}{2} = 6 $$
*   $$ \binom{-3}{3} = \frac{(-3)(-3-1)(-3-2)}{3!} = \frac{(-3)(-4)(-5)}{6} = \frac{-60}{6} = -10 $$

Now, substitute these coefficients and $$u = -2x$$ into the series:

$$
(1+(-2x))^{-3} = \binom{-3}{0} + \binom{-3}{1}(-2x) + \binom{-3}{2}(-2x)^2 + \binom{-3}{3}(-2x)^3 + \dots
$$

$$
(1-2x)^{-3} = 1 + (-3)(-2x) + (6)(-2x)^2 + (-10)(-2x)^3 + \dots
$$

$$
(1-2x)^{-3} = 1 + 6x + 6(4x^2) - 10(-8x^3) + \dots
$$

$$
(1-2x)^{-3} = 1 + 6x + 24x^2 + 80x^3 + \dots
$$

## Common Mistakes to Avoid

*   **Incorrectly calculating the binomial coefficient:** Pay close attention to the numerator's structure (decreasing terms) and the denominator ($$n!$$).
*   **Forgetting the '1+' in the general form:** The formula is specifically for $$(1+x)^k$$. If you have something like $$(a+x)^k$$, you need to factor out $$a^k$$ first: $$(a+x)^k = a^k (1 + x/a)^k$$.
*   **Errors with negative or fractional exponents:** These require careful calculation of the binomial coefficients.
*   **Substituting incorrectly when expanding a term like $$(1-2x)^{-3}$$:** Treat the entire term inside the parenthesis (e.g., $$u = -2x$$) as the variable in the expansion.

## Next Steps

Understanding how to formulate the binomial expansion is the first step. The next crucial aspect is determining the conditions for its validity and the interval of convergence, which will be covered in subsequent lessons. This allows you to know *when* these series representations are accurate.

## Supports

- [[skills/mathematics/calculus/power-series-and-taylor-expansions/microskills/binomial-expansion-formulation|Binomial expansion formulation]]
