---
type: "medium"
title: "Applying L'Hôpital's Rule: The Process"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/calculus-theorems-application/microskills/general-l-hopital-s-rule-process|general-l-hopital-s-rule-process]]"
---
# Applying L'Hôpital's Rule: The Process

L'Hôpital's Rule is a powerful tool for evaluating limits that result in indeterminate forms, such as \( \frac{0}{0} \) or \( \frac{\infty}{\infty} \). Understanding the step-by-step process is key to applying it correctly.

## When to Use L'Hôpital's Rule

Before diving into the steps, it's crucial to recognize when L'Hôpital's Rule is applicable. You can only use it when direct substitution of the limit value into the function results in one of the indeterminate forms:

*   \( \frac{0}{0} \)
*   \( \frac{\infty}{\infty} \)
*   \( -\frac{\infty}{\infty} \)
*   \( \frac{\infty}{-\infty} \)
*   \( -\frac{\infty}{-\infty} \)

If direct substitution yields a determinate form (like \( \frac{5}{2} \) or \( \frac{0}{3} \)), you don't need L'Hôpital's Rule.

## The Steps to Apply L'Hôpital's Rule

Here's the general process:

1.  **Identify the Limit and Indeterminate Form:**
    Let the limit be \( \lim_{x \to c} \frac{f(x)}{g(x)} \).
    First, substitute \( x = c \) into both \( f(x) \) and \( g(x) \). If the result is \( \frac{0}{0} \) or \( \frac{\infty}{\infty} \) (or its variations), proceed.

2.  **Differentiate the Numerator and Denominator Separately:**
    Calculate the derivative of the numerator, \( f'(x) \).
    Calculate the derivative of the denominator, \( g'(x) \).
    *Important:* You are differentiating \( f(x) \) and \( g(x) \) independently, not using the quotient rule.

3.  **Form the New Limit:**
    Create a new limit using the derivatives: \( \lim_{x \to c} \frac{f'(x)}{g'(x)} \).

4.  **Evaluate the New Limit:**
    Substitute \( x = c \) into the new limit \( \frac{f'(x)}{g'(x)} \).
    *   If this substitution results in a determinate form, that value is your answer.
    *   If the new limit is *still* an indeterminate form, repeat steps 2-4 with the second derivatives \( f''(x) \) and \( g''(x) \), and so on.

5.  **Handle Other Indeterminate Forms (If Necessary):**
    Sometimes, a limit might present as \( 0 \cdot \infty \), \( \infty - \infty \), \( 1^\infty \), \( 0^0 \), or \( \infty^0 \). For these, you first need to rewrite the expression algebraically to fit the \( \frac{0}{0} \) or \( \frac{\infty}{\infty} \) form before applying L'Hôpital's Rule.

## Practical Example

Let's evaluate the limit: \( \lim_{x \to 0} \frac{\sin(x)}{x} \)

1.  **Identify:** Substituting \( x=0 \) gives \( \frac{\sin(0)}{0} = \frac{0}{0} \). This is an indeterminate form, so we can use L'Hôpital's Rule.

2.  **Differentiate:**
    \( f(x) = \sin(x) \Rightarrow f'(x) = \cos(x) \)
    \( g(x) = x \Rightarrow g'(x) = 1 \)

3.  **New Limit:** The new limit is \( \lim_{x \to 0} \frac{\cos(x)}{1} \).

4.  **Evaluate:** Substitute \( x=0 \) into the new limit: \( \frac{\cos(0)}{1} = \frac{1}{1} = 1 \).

Therefore, \( \lim_{x \to 0} \frac{\sin(x)}{x} = 1 \).

## Practice Task

Evaluate the following limit using L'Hôpital's Rule. Clearly show each step of the process.

\( \lim_{x \to \infty} \frac{e^x}{x^2} \)

## Self-Check Questions

1.  What are the two primary indeterminate forms that allow direct application of L'Hôpital's Rule?
2.  When applying L'Hôpital's Rule, do you use the quotient rule to differentiate the fraction, or do you differentiate the numerator and denominator separately?
3.  If after applying L'Hôpital's Rule once, the limit is still indeterminate, what is the next step?

## Supports

- [[skills/mathematics/calculus-theorems-application/microskills/general-l-hopital-s-rule-process|General L'Hôpital's rule process]]
