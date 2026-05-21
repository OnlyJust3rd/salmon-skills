---
type: "medium"
title: "Partial Fraction Decomposition"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/partial-fraction-decomposition|partial-fraction-decomposition]]"
---
# Partial Fraction Decomposition

This lesson focuses on **Partial Fraction Decomposition**, a technique that breaks down complex rational functions into simpler ones, making them easier to integrate. This is a crucial step in applying more advanced integration techniques.

## What is a Rational Function?

A rational function is a function that can be expressed as the ratio of two polynomials, $P(x)$ and $Q(x)$, where $Q(x)$ is not the zero polynomial.

$$ f(x) = \frac{P(x)}{Q(x)} $$

For example, $$ \frac{x+1}{x^2 - 4} $$ is a rational function.

## Why Decompose?

Integrating rational functions directly can be challenging. Partial fraction decomposition allows us to rewrite a single, complex rational function as a sum of simpler rational functions. Each of these simpler functions can then be integrated using basic integration rules.

## The Core Idea: Rewriting the Fraction

The fundamental principle is that if the denominator $Q(x)$ can be factored into simpler terms, the original rational function can be expressed as a sum of fractions where each denominator is one of those simpler factors.

Consider a rational function $$ \frac{P(x)}{Q(x)} $$. If $Q(x)$ can be factored as $Q(x) = (ax+b)(cx+d)$, we can decompose $$ \frac{P(x)}{Q(x)} $$ into the form:

$$ \frac{P(x)}{(ax+b)(cx+d)} = \frac{A}{ax+b} + \frac{B}{cx+d} $$

where A and B are constants we need to find.

## Types of Denominators and Their Decompositions

The form of the partial fraction decomposition depends on the factors of the denominator $Q(x)$.

### 1. Distinct Linear Factors

If $Q(x)$ can be factored into distinct linear factors: $$ Q(x) = (a_1x + b_1)(a_2x + b_2)...(a_nx + b_n) $$

Then the decomposition is:

$$ \frac{P(x)}{Q(x)} = \frac{A_1}{a_1x + b_1} + \frac{A_2}{a_2x + b_2} + ... + \frac{A_n}{a_nx + b_n} $$

**Example:** Decompose $$ \frac{x+5}{(x-1)(x+2)} $$

We want to find constants A and B such that:

$$ \frac{x+5}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2} $$

To find A and B, we can combine the terms on the right side:

$$ \frac{A(x+2) + B(x-1)}{(x-1)(x+2)} = \frac{(A+B)x + (2A-B)}{(x-1)(x+2)} $$

Now, we equate the numerators:

$$ x+5 = (A+B)x + (2A-B) $$

By comparing the coefficients of $x$ and the constant terms, we get a system of linear equations:

1.  Coefficient of $x$: $$ 1 = A + B $$
2.  Constant term: $$ 5 = 2A - B $$

Adding equation (1) and (2):
$$ (1) + (2) \Rightarrow 1+5 = (A+B) + (2A-B) $$
$$ 6 = 3A $$
$$ A = 2 $$

Substitute $A=2$ into equation (1):
$$ 1 = 2 + B $$
$$ B = -1 $$

So, the decomposition is:

$$ \frac{x+5}{(x-1)(x+2)} = \frac{2}{x-1} + \frac{-1}{x+2} $$

### 2. Repeated Linear Factors

If $Q(x)$ has a repeated linear factor, like $$ (ax+b)^k $$, the decomposition includes terms for each power of that factor up to $k$.

$$ \frac{P(x)}{(ax+b)^k} = \frac{A_1}{ax+b} + \frac{A_2}{(ax+b)^2} + ... + \frac{A_k}{(ax+b)^k} $$

**Example:** Decompose $$ \frac{2x-1}{(x+3)^2} $$

$$ \frac{2x-1}{(x+3)^2} = \frac{A}{x+3} + \frac{B}{(x+3)^2} $$

Combine the right side:
$$ \frac{A(x+3) + B}{(x+3)^2} = \frac{Ax + 3A + B}{(x+3)^2} $$

Equate numerators:
$$ 2x-1 = Ax + (3A+B) $$

Equating coefficients:

1.  Coefficient of $x$: $$ 2 = A $$
2.  Constant term: $$ -1 = 3A + B $$

Substitute $A=2$ into equation (2):
$$ -1 = 3(2) + B $$
$$ -1 = 6 + B $$
$$ B = -7 $$

So, the decomposition is:

$$ \frac{2x-1}{(x+3)^2} = \frac{2}{x+3} + \frac{-7}{(x+3)^2} $$

### 3. Irreducible Quadratic Factors

An irreducible quadratic factor is a quadratic that cannot be factored into real linear factors (e.g., $$ x^2 + 1 $$). For each irreducible quadratic factor $$ ax^2 + bx + c $$, the decomposition includes a term of the form $$ \frac{Ax+B}{ax^2+bx+c} $$.

$$ \frac{P(x)}{(ax^2+bx+c)} = \frac{Ax+B}{ax^2+bx+c} $$

**Example:** Decompose $$ \frac{x+2}{x^2+1} $$

This fraction is already in its simplest partial fraction form because $$ x^2+1 $$ is an irreducible quadratic.

**Example with an irreducible quadratic factor:** Decompose $$ \frac{x}{(x-1)(x^2+1)} $$

$$ \frac{x}{(x-1)(x^2+1)} = \frac{A}{x-1} + \frac{Bx+C}{x^2+1} $$

Combine the right side:
$$ \frac{A(x^2+1) + (Bx+C)(x-1)}{(x-1)(x^2+1)} = \frac{Ax^2+A + Bx^2 - Bx + Cx - C}{(x-1)(x^2+1)} $$
$$ = \frac{(A+B)x^2 + (-B+C)x + (A-C)}{(x-1)(x^2+1)} $$

Equate numerators:
$$ x = (A+B)x^2 + (-B+C)x + (A-C) $$

Equating coefficients:

1.  Coefficient of $$ x^2 $$: $$ 0 = A+B $$
2.  Coefficient of $$ x $$: $$ 1 = -B+C $$
3.  Constant term: $$ 0 = A-C $$

From (1), $$ B = -A $$.
From (3), $$ C = A $$.

Substitute these into (2):
$$ 1 = -(-A) + A $$
$$ 1 = A + A $$
$$ 1 = 2A $$
$$ A = \frac{1}{2} $$

Now find B and C:
$$ B = -A = -\frac{1}{2} $$
$$ C = A = \frac{1}{2} $$

So, the decomposition is:
$$ \frac{x}{(x-1)(x^2+1)} = \frac{1/2}{x-1} + \frac{-1/2 x + 1/2}{x^2+1} $$

### 4. Repeated Irreducible Quadratic Factors

If $Q(x)$ has a repeated irreducible quadratic factor, like $$ (ax^2+bx+c)^k $$, the decomposition includes terms for each power up to $k$, with linear numerators for each term.

$$ \frac{P(x)}{(ax^2+bx+c)^k} = \frac{A_1x+B_1}{ax^2+bx+c} + \frac{A_2x+B_2}{(ax^2+bx+c)^2} + ... + \frac{A_kx+B_k}{(ax^2+bx+c)^k} $$

## Practical Tips

*   **Degree of Numerator:** If the degree of the numerator is greater than or equal to the degree of the denominator, perform polynomial long division first. The remainder will then be a proper rational function that can be decomposed.
*   **Cover-up Method (Heaviside Method):** For distinct linear factors, you can sometimes find the coefficients more quickly. For $$ \frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b} $$, to find A, "cover up" the $$ (x-a) $$ term in the original fraction and substitute $$ x=a $$ into the remaining expression. Similarly for B with $$ x=b $$.

This technique is foundational for integrating many rational functions. Mastering it will greatly simplify your approach to calculus problems involving such functions.

## Supports

- [[skills/mathematics/integral-evaluation/microskills/partial-fraction-decomposition|Partial fraction decomposition]]
