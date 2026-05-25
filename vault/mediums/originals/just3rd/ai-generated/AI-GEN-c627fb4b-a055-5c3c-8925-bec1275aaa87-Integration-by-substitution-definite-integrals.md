---
type: "medium"
title: "Integration by Substitution for Definite Integrals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/integral-evaluation/microskills/integration-by-substitution-definite-integrals|integration-by-substitution-definite-integrals]]"
learning-time-in-minutes: 4
---
# Integration by Substitution for Definite Integrals

This lesson focuses on applying the substitution method specifically to evaluate definite integrals. This builds upon your understanding of indefinite integrals and the substitution technique.

## Why Use Substitution for Definite Integrals?

When you encounter a definite integral where the integrand (the function being integrated) is a composite function, and its derivative (or a constant multiple of it) is also present, integration by substitution is often the most efficient method. For definite integrals, we need to adjust the limits of integration to match the substitution.

## The Core Idea

The substitution method for definite integrals involves the following key steps:

1.  **Identify a suitable substitution:** Choose a part of the integrand (usually the inner function of a composite function) to represent with a new variable, say \(u\).
2.  **Find the differential:** Calculate the differential \(du\) in terms of \(dx\).
3.  **Change the limits of integration:** This is the crucial difference from indefinite integrals. The original limits of integration are in terms of \(x\). You need to find the corresponding limits for \(u\) using your substitution equation.
4.  **Rewrite the integral:** Substitute \(u\) and \(du\) into the integral, and crucially, replace the original \(x\) limits with the new \(u\) limits.
5.  **Evaluate the new integral:** Integrate the transformed function with respect to \(u\) using the new limits.
6.  **Calculate the result:** Apply the Fundamental Theorem of Calculus using the \(u\) limits.

## Worked Example

Let's evaluate the definite integral:

$$ \int_0^1 x \sqrt{1 + x^2} \, dx $$

**Step 1: Identify a suitable substitution**

The integrand is \(x \sqrt{1 + x^2}\). The expression inside the square root, \(1 + x^2\), seems like a good candidate for substitution. Let:
$$ u = 1 + x^2 $$

**Step 2: Find the differential**

Differentiate \(u\) with respect to \(x\):
$$ \frac{du}{dx} = 2x $$
Rearrange to find \(du\):
$$ du = 2x \, dx $$
We have \(x \, dx\) in our integral, so we can rewrite this as:
$$ \frac{1}{2} du = x \, dx $$

**Step 3: Change the limits of integration**

The original limits are for \(x\): the lower limit is \(x=0\) and the upper limit is \(x=1\). We use our substitution \(u = 1 + x^2\) to find the corresponding limits for \(u\):

*   **Lower limit:** When \(x = 0\), \(u = 1 + (0)^2 = 1\).
*   **Upper limit:** When \(x = 1\), \(u = 1 + (1)^2 = 1 + 1 = 2\).

So, the new limits of integration for \(u\) are from 1 to 2.

**Step 4: Rewrite the integral**

Substitute \(u\) for \(1 + x^2\) and \(\frac{1}{2} du\) for \(x \, dx\). Replace the original limits of integration (0 to 1) with the new limits (1 to 2):

$$ \int_0^1 \sqrt{1 + x^2} \cdot (x \, dx) $$
becomes
$$ \int_1^2 \sqrt{u} \cdot \left(\frac{1}{2} du\right) $$
This can be simplified to:
$$ \frac{1}{2} \int_1^2 u^{1/2} \, du $$

**Step 5: Evaluate the new integral**

Now we integrate \(u^{1/2}\) with respect to \(u\):
$$ \frac{1}{2} \left[ \frac{u^{1/2 + 1}}{1/2 + 1} \right]_1^2 $$
$$ \frac{1}{2} \left[ \frac{u^{3/2}}{3/2} \right]_1^2 $$
$$ \frac{1}{2} \left[ \frac{2}{3} u^{3/2} \right]_1^2 $$

**Step 6: Calculate the result**

Apply the Fundamental Theorem of Calculus using the new limits (from \(u=1\) to \(u=2\)):
$$ \frac{1}{2} \left( \frac{2}{3} (2)^{3/2} - \frac{2}{3} (1)^{3/2} \right) $$
$$ \frac{1}{2} \cdot \frac{2}{3} \left( 2^{3/2} - 1^{3/2} \right) $$
$$ \frac{1}{3} \left( 2\sqrt{2} - 1 \right) $$

So, the value of the definite integral is \( \frac{2\sqrt{2} - 1}{3} \).

## Alternative Approach (Less Common for Definite Integrals)

Some prefer to find the antiderivative in terms of \(x\) first and then substitute the original limits. While this works, it's generally more prone to errors when dealing with definite integrals and the substitution.

If we followed this approach for the example above:
1.  Let \(u = 1 + x^2\), so \(du = 2x \, dx\), or \(x \, dx = \frac{1}{2} du\).
2.  The indefinite integral is \( \int x \sqrt{1 + x^2} \, dx = \int \sqrt{u} \frac{1}{2} du = \frac{1}{2} \int u^{1/2} du = \frac{1}{2} \cdot \frac{2}{3} u^{3/2} + C = \frac{1}{3} u^{3/2} + C \).
3.  Substitute back \(u = 1 + x^2\): The antiderivative is \( \frac{1}{3} (1 + x^2)^{3/2} \).
4.  Now evaluate this from \(x=0\) to \(x=1\):
    $$ \left[ \frac{1}{3} (1 + x^2)^{3/2} \right]_0^1 = \frac{1}{3} (1 + 1^2)^{3/2} - \frac{1}{3} (1 + 0^2)^{3/2} $$
    $$ = \frac{1}{3} (2)^{3/2} - \frac{1}{3} (1)^{3/2} = \frac{1}{3} (2\sqrt{2}) - \frac{1}{3} (1) = \frac{2\sqrt{2} - 1}{3} $$

As you can see, both methods yield the same result. However, changing the limits of integration upfront often simplifies the process and reduces the chance of forgetting to substitute back or evaluate at the original limits.

## Key Takeaways

*   When using substitution for definite integrals, always remember to change the limits of integration.
*   The new limits of integration must correspond to the variable of substitution.
*   The substitution method is a powerful tool for simplifying complex integrals, and adapting it for definite integrals allows for efficient evaluation.

## Supports

- [[skills/mathematics/calculus/integral-evaluation/microskills/integration-by-substitution-definite-integrals|Integration by substitution (definite integrals)]]
