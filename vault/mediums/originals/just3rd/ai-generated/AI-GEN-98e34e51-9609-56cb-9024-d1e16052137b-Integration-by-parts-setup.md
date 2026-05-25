---
type: "medium"
title: "Choosing u and dv for Integration by Parts"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/integral-evaluation/microskills/integration-by-parts-setup|integration-by-parts-setup]]"
learning-time-in-minutes: 4
---
# Choosing u and dv for Integration by Parts

When evaluating integrals, especially those that don't fit simple substitution patterns, the **Integration by Parts** technique is a powerful tool. The core of this technique lies in transforming a difficult integral into a simpler one using the formula:

$$ \int u \, dv = uv - \int v \, du $$

To successfully apply this formula, the most crucial step is choosing which part of the integrand will be '$u$' and which part will be '$dv$'. This choice directly impacts the complexity of the resulting integral, $\int v \, du$.

## The Goal of Choosing u and dv

The objective when selecting '$u$' and '$dv$' is to make the new integral, $\int v \, du$, significantly easier to solve than the original integral, $\int u \, dv$. This usually means aiming for an integral that is:

*   Polynomial
*   Logarithmic (if the derivative of $u$ simplifies it)
*   Exponential
*   A constant

Conversely, you want to avoid an integral that becomes more complex or remains equally difficult.

## The LIATE Rule: A Helpful Guideline

A common and effective mnemonic to help guide your choice of '$u$' is **LIATE**:

*   **L**ogarithmic functions (e.g., $\ln x$, $\log_b x$)
*   **I**nverse trigonometric functions (e.g., $\arcsin x$, $\arctan x$)
*   **A**lgebraic functions (polynomials, rational functions like $x^2$, $\frac{1}{x+1}$)
*   **T**rigonometric functions (e.g., $\sin x$, $\cos x$)
*   **E**xponential functions (e.g., $e^x$, $2^x$)

The LIATE rule suggests that you should choose '$u$' to be the function that appears earliest in this list. Once '$u$' is chosen, the remaining part of the integrand (along with '$dx$') becomes '$dv$'.

**Why does LIATE work?**

This order generally corresponds to functions whose derivatives simplify (Logarithmic, Inverse Trigonometric, Algebraic) or whose integrals are easily found and don't "get more complicated" (Trigonometric, Exponential).

*   **Derivatives:** The derivatives of logarithmic and inverse trigonometric functions often result in simpler algebraic or rational functions. Polynomials ($x^n$) become $nx^{n-1}$, which is simpler as the power decreases.
*   **Integrals:** The integrals of trigonometric and exponential functions are typically themselves trigonometric or exponential functions, not inherently more complex.

## Steps for Setting Up Integration by Parts

1.  **Examine the Integrand:** Look at all the functions multiplied together in your integral.
2.  **Apply LIATE:** Identify the function that comes first in the LIATE order. This will be your '$u$'.
3.  **Define dv:** The rest of the integrand (including '$dx$') will be '$dv$'.
4.  **Calculate du and v:**
    *   Differentiate '$u$' to find '$du$'.
    *   Integrate '$dv$' to find '$v$'. Remember that when integrating '$dv$', you can ignore the constant of integration for now; it will be accounted for in the final result.
5.  **Substitute into the Formula:** Plug '$u$', '$dv$', '$v$', and '$du$' into the integration by parts formula: $$ \int u \, dv = uv - \int v \, du $$

## Worked Example: Setting Up the Integration by Parts

Let's apply this to an example.

**Problem:** Evaluate the integral $$ \int x e^x \, dx $$

**Step 1: Examine the Integrand**
The integrand is a product of an algebraic function ($x$) and an exponential function ($e^x$).

**Step 2: Apply LIATE**
*   **A**lgebraic ($x$)
*   **E**xponential ($e^x$)

According to LIATE, 'Algebraic' comes before 'Exponential'. So, we choose:
$u = x$

**Step 3: Define dv**
The remaining part of the integrand is $e^x \, dx$. So, we set:
$dv = e^x \, dx$

**Step 4: Calculate du and v**
*   Differentiate $u$:
    If $u = x$, then $du = 1 \, dx = dx$.
*   Integrate $dv$:
    If $dv = e^x \, dx$, then $v = \int e^x \, dx = e^x$. (We omit the '+C' for now).

**Step 5: Substitute into the Formula**
Now, substitute these into the integration by parts formula:
$$ \int u \, dv = uv - \int v \, du $$
$$ \int x e^x \, dx = (x)(e^x) - \int (e^x)(dx) $$
$$ \int x e^x \, dx = x e^x - \int e^x \, dx $$

The new integral, $\int e^x \, dx$, is much simpler than the original. This setup has successfully transformed the problem into a solvable form.

## What if the First Choice Doesn't Work?

While LIATE is a good guideline, it's not an absolute rule. Sometimes, the choice dictated by LIATE might still lead to a difficult integral. In such cases, you might need to try swapping the roles of '$u$' and '$dv$', or perhaps applying integration by parts twice.

Consider the integral $$ \int \ln x \, dx $$.
*   **LIATE suggests:** $u = \ln x$ (Logarithmic), $dv = dx$ (Algebraic, but here treated as the "rest").
    *   $du = \frac{1}{x} \, dx$
    *   $v = x$
    *   This leads to: $$ \int \ln x \, dx = x \ln x - \int x \left(\frac{1}{x}\right) \, dx = x \ln x - \int 1 \, dx $$
    This worked perfectly!

However, sometimes you might encounter situations where the "obvious" choice isn't the best. The key is to analyze the derivatives and integrals of the potential '$u$' and '$dv$' to see which combination simplifies the problem.

## Supports

- [[skills/mathematics/calculus/integral-evaluation/microskills/integration-by-parts-setup|Integration by parts setup]]
