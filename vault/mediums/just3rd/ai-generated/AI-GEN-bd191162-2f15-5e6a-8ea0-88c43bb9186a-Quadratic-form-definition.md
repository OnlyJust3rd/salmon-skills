---
type: "medium"
title: "Understanding Quadratic Forms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/quadratic-forms-and-definiteness/microskills/quadratic-form-definition|Quadratic form definition]]"
---
# Understanding Quadratic Forms

This lesson will help you understand the basic definition of a quadratic form. This is a foundational concept for exploring how matrices represent certain types of mathematical expressions.

## What is a Quadratic Form?

A quadratic form is a type of polynomial expression. Specifically, it's a homogeneous polynomial of degree two. Let's break that down:

*   **Polynomial:** An expression made up of variables and coefficients, involving only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables.
*   **Homogeneous:** Every term in the polynomial has the same total degree.
*   **Degree Two:** The sum of the exponents of the variables in each term is exactly 2.

### Algebraic Definition

Consider a set of $n$ variables, let's call them $x_1, x_2, \dots, x_n$. A quadratic form in these variables is a sum of terms, where each term is a constant coefficient multiplied by the product of two variables (which can be the same variable squared).

The general form of a quadratic form in $n$ variables $x_1, x_2, \dots, x_n$ is:

$$
Q(x_1, x_2, \dots, x_n) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j
$$

where $a_{ij}$ are constant coefficients.

### Example in Two Variables

Let's look at a quadratic form in two variables, $x$ and $y$. According to the definition, every term must have a total degree of 2. Possible terms are $x^2$, $y^2$, and $xy$.

So, a general quadratic form in $x$ and $y$ would look like:

$$
Q(x, y) = ax^2 + bxy + cy^2
$$

where $a$, $b$, and $c$ are coefficients.

**Example 1:**
$$
Q(x, y) = 3x^2 - 2xy + 5y^2
$$
Here, $a=3$, $b=-2$, and $c=5$. Each term ($3x^2$, $-2xy$, $5y^2$) has a total degree of 2.

**Example 2:**
$$
Q(x, y) = x^2 + 4y^2
$$
Here, $a=1$, $b=0$, and $c=4$. The $xy$ term has a coefficient of zero.

**Example 3:**
$$
Q(x, y) = -x^2 + 6xy - y^2
$$
Here, $a=-1$, $b=6$, and $c=-1$.

### What is NOT a Quadratic Form?

It's important to distinguish quadratic forms from other polynomial expressions.

*   **Non-homogeneous:** If terms have different degrees.
    *   Example: $x^2 + y$ (degree 2 and degree 1 terms)
*   **Degree other than two:** If the total degree of terms is not 2.
    *   Example: $x^3 + y^2$ (degree 3 and degree 2 terms)
    *   Example: $x + y$ (degree 1 terms)
*   **Involving higher powers or products of three or more variables:**
    *   Example: $x^3$, $x^2y^2$, $xyz$

### Key Takeaway

A quadratic form is a polynomial where every term is a constant multiplied by the product of two variables, and the total degree of every term is exactly two.

## Supports

- [[skills/mathematics/quadratic-forms-and-definiteness/microskills/quadratic-form-definition|Quadratic form definition]]
