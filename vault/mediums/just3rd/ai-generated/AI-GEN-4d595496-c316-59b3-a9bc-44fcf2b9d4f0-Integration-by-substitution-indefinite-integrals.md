---
type: "medium"
title: "Applying Integration by Substitution for Indefinite Integrals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/integration-by-substitution-indefinite-integrals|integration-by-substitution-indefinite-integrals]]"
---
# Applying Integration by Substitution for Indefinite Integrals

This lesson focuses on the practical application of integration by substitution to solve indefinite integrals. This is a fundamental technique within the broader skill of Integral Evaluation.

## What is Integration by Substitution?

Integration by substitution, often called u-substitution, is a method for finding antiderivatives (indefinite integrals) that simplifies complex integrals by transforming them into simpler, more recognizable forms. It's essentially the reverse of the chain rule for differentiation.

The core idea is to identify a part of the integrand (the function being integrated) that, when substituted with a new variable (commonly '$u$'), simplifies the integral significantly.

## When to Use Integration by Substitution

You should consider using substitution when you see an integrand that looks like a composite function, where one part of the function is the derivative (or a constant multiple of the derivative) of another part.

Look for patterns like:

*   A function multiplied by its derivative.
*   A function inside another function (like inside a power, sine, cosine, exponential, or logarithm).

**Example:** In the integral $$ \int 2x \cos(x^2) dx $$, we notice that the derivative of $x^2$ is $2x$, which is also present in the integrand.

## The Steps for Substitution

Here's a systematic approach to applying integration by substitution for indefinite integrals:

1.  **Choose your substitution ($u$):** Identify a part of the integrand, usually the "inner" function of a composite function, to set as '$u$'. A good choice for '$u$' often results in its derivative, '$du$', appearing elsewhere in the integrand.

2.  **Find the differential ($du$):** Differentiate your chosen '$u$' with respect to the original variable (e.g., '$x$') to find '$du$'. You'll express '$du$' in terms of '$dx$'.

    *   If $$ u = f(x) $$, then $$ \frac{du}{dx} = f'(x) $$, which means $$ du = f'(x) dx $$.

3.  **Substitute:** Replace the chosen part of the integrand with '$u$' and the '$dx$' part (including the derivative) with '$du$'. The goal is to rewrite the entire integral solely in terms of '$u$' and '$du$'.

4.  **Integrate with respect to $u$:** Solve the new, simpler integral with respect to '$u$'.

5.  **Substitute back:** Replace '$u$' with its original expression in terms of '$x$' to express the final answer in terms of the original variable.

6.  **Add the constant of integration ($+C$):** Remember that for indefinite integrals, there's always an arbitrary constant '$C$' added to the final result, as the derivative of any constant is zero.

## Worked Example

Let's evaluate the indefinite integral: $$ \int (3x^2 + 1)(x^3 + x) dx $$

1.  **Choose your substitution ($u$):**
    Observe that the derivative of '$x^3 + x$' is '$3x^2 + x$'. This is a strong candidate for '$u$'.
    Let $$ u = x^3 + x $$

2.  **Find the differential ($du$):**
    Differentiate '$u$' with respect to '$x$':
    $$ \frac{du}{dx} = 3x^2 + 1 $$
    Multiply by '$dx$' to get:
    $$ du = (3x^2 + 1) dx $$

3.  **Substitute:**
    Notice that the entire term '$ (3x^2 + 1) dx $' appears in our original integral. We can directly substitute '$u$' for '$x^3 + x$' and '$du$' for '$ (3x^2 + 1) dx $'.
    The integral becomes:
    $$ \int u \, du $$

4.  **Integrate with respect to $u$:**
    This is a simple power rule integral:
    $$ \int u \, du = \frac{u^2}{2} + C_1 $$
    (We use $C_1$ temporarily as we'll eventually replace $u$).

5.  **Substitute back:**
    Replace '$u$' with its original expression '$x^3 + x$':
    $$ \frac{(x^3 + x)^2}{2} + C_1 $$

6.  **Add the constant of integration ($+C$):**
    The final answer is:
    $$ \frac{(x^3 + x)^2}{2} + C $$

## Common Pitfalls and Tips

*   **Forgetting to substitute $dx$:** Ensure that the *entire* integral is expressed in terms of '$u$' and '$du$' before you integrate. If you still have '$x$' terms, you likely missed part of the substitution or chose the wrong '$u$'.
*   **Incorrect differentiation:** Double-check your differentiation when finding '$du$'. A single mistake here will lead to an incorrect result.
*   **Constant multiples:** Sometimes the derivative of your chosen '$u$' might only differ by a constant multiple from what's in the integrand. For example, if you chose $$ u = x^2 $$ and the integrand had '$x$' instead of '$2x$'. In such cases, you can adjust '$du$' by multiplying or dividing by the constant.
    *   If $$ u = x^2 $$, then $$ du = 2x \, dx $$.
    *   If you have $$ \int x \, dx $$, you can rearrange: $$ \frac{1}{2} du = x \, dx $$. Then the integral becomes $$ \int \frac{1}{2} du $$.
*   **Choosing the "wrong" $u$:** Not every integral can be solved by substitution. If, after choosing a '$u$', the resulting integral looks even more complicated, try a different substitution or recognize that a different integration technique might be needed.

Mastering integration by substitution is a crucial step in developing your ability to evaluate integrals. Practice with various examples to build confidence in recognizing the patterns and applying the steps correctly.

## Supports

- [[skills/mathematics/integral-evaluation/microskills/integration-by-substitution-indefinite-integrals|Integration by substitution (indefinite integrals)]]
