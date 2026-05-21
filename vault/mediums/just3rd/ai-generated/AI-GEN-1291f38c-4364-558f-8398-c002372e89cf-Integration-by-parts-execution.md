---
type: "medium"
title: "Executing Integration by Parts"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/integration-by-parts-execution|integration-by-parts-execution]]"
---
# Executing Integration by Parts

This lesson focuses on the practical execution of the integration by parts technique, a crucial tool for evaluating integrals that are not directly solvable by basic power or substitution rules. We'll build upon the understanding that integration by parts is derived from the product rule for differentiation.

## The Core Idea: Transforming Integrals

Integration by parts is used when we have an integral of a product of two functions, say $\int u \, dv$. The formula is:

$$
\int u \, dv = uv - \int v \, du
$$

The goal is to choose $u$ and $dv$ such that the new integral, $\int v \, du$, is simpler to solve than the original integral.

### Choosing $u$ and $dv$: The LIATE/ILATE Rule

A common mnemonic to help choose $u$ is LIATE (Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential) or ILATE (Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential). The function type that appears earlier in this list is generally a good candidate for $u$. Once $u$ is chosen, $dv$ is the remaining part of the integrand.

*   **L**ogarithmic: $\ln(x)$, $\log_2(x)$
*   **I**nverse Trigonometric: $\arctan(x)$, $\arcsin(x)$
*   **A**lgebraic: $x^2$, $3x+1$
*   **T**rigonometric: $\sin(x)$, $\cos(2x)$
*   **E**xponential: $e^x$, $5^{x}$

Remember, this is a guideline, not a strict rule. Sometimes, strategic manipulation is needed.

## Step-by-Step Execution

Let's break down the process with a worked example.

**Problem:** Evaluate the indefinite integral $\int x \cos(x) \, dx$.

**Step 1: Identify $u$ and $dv$.**
Using the LIATE rule, an Algebraic function ($x$) comes before a Trigonometric function ($\cos(x)$).
*   Let $u = x$.
*   Let $dv = \cos(x) \, dx$.

**Step 2: Find $du$ and $v$.**
*   Differentiate $u$ to find $du$:
    $du = \frac{d}{dx}(x) \, dx = 1 \, dx = dx$.
*   Integrate $dv$ to find $v$:
    $v = \int \cos(x) \, dx = \sin(x)$. (We don't need the constant of integration here; it will be added at the final step).

**Step 3: Apply the integration by parts formula.**
$$
\int u \, dv = uv - \int v \, du
$$
Substitute our chosen parts:
$$
\int x \cos(x) \, dx = (x)(\sin(x)) - \int (\sin(x)) \, dx
$$

**Step 4: Evaluate the new integral.**
The new integral is $\int \sin(x) \, dx$. This is a standard integral:
$$
\int \sin(x) \, dx = -\cos(x)
$$

**Step 5: Combine and add the constant of integration.**
Substitute the result of the new integral back into the equation:
$$
\int x \cos(x) \, dx = x \sin(x) - (-\cos(x)) + C
$$
Simplify:
$$
\int x \cos(x) \, dx = x \sin(x) + \cos(x) + C
$$

This is our final answer.

## Repeated Application of Integration by Parts

Sometimes, a single application of integration by parts isn't enough. The new integral might still be complex, but one step closer to a solvable form. In such cases, you apply the integration by parts formula again to the new integral.

**Problem:** Evaluate $\int x^2 e^x \, dx$.

**First Application:**
*   Choose $u = x^2$ (Algebraic) and $dv = e^x \, dx$ (Exponential).
*   Then $du = 2x \, dx$ and $v = e^x$.

Applying the formula:
$$
\int x^2 e^x \, dx = x^2 e^x - \int e^x (2x \, dx)
$$
$$
\int x^2 e^x \, dx = x^2 e^x - 2 \int x e^x \, dx
$$

Now we have a new integral, $\int x e^x \, dx$, which still requires integration by parts.

**Second Application (to $\int x e^x \, dx$):**
*   Choose $u = x$ (Algebraic) and $dv = e^x \, dx$ (Exponential).
*   Then $du = dx$ and $v = e^x$.

Applying the formula to this sub-integral:
$$
\int x e^x \, dx = x e^x - \int e^x \, dx
$$
$$
\int x e^x \, dx = x e^x - e^x
$$

**Step 3: Substitute back and simplify.**
Now, substitute this result back into our equation from the first application:
$$
\int x^2 e^x \, dx = x^2 e^x - 2 (x e^x - e^x) + C
$$
Distribute the -2:
$$
\int x^2 e^x \, dx = x^2 e^x - 2x e^x + 2e^x + C
$$
You can factor out $e^x$ for a slightly cleaner look:
$$
\int x^2 e^x \, dx = e^x (x^2 - 2x + 2) + C
$$

## Common Pitfalls

*   **Incorrectly choosing $u$ and $dv$:** This can lead to a more complex integral. Always check if the new integral is simpler.
*   **Forgetting the $dx$:** Ensure that $du$ and $dv$ are complete differentials.
*   **Mistakes in differentiation or integration:** Double-check these fundamental calculus steps.
*   **Algebraic errors:** Especially when substituting back or simplifying after repeated applications.
*   **Forgetting the constant of integration ($+C$):** This is essential for indefinite integrals.

Mastering integration by parts requires practice. Work through various examples, paying close attention to the choices for $u$ and $dv$, and be meticulous with your calculations.

## Supports

- [[skills/mathematics/integral-evaluation/microskills/integration-by-parts-execution|Integration by parts execution]]
