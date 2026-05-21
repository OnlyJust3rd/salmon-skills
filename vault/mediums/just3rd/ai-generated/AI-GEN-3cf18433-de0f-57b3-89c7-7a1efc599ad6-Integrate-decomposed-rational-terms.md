---
type: "medium"
title: "Integrating Decomposed Rational Terms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/integral-evaluation/microskills/integrate-decomposed-rational-terms|integrate-decomposed-rational-terms]]"
---
# Integrating Decomposed Rational Terms

This lesson focuses on the final step of applying partial fractions: integrating the resulting decomposed terms. Once a rational function has been broken down into simpler partial fractions, integrating each of these simpler terms becomes manageable.

## Understanding the Goal

Recall that the process of partial fraction decomposition aims to rewrite a complex rational function as a sum of simpler fractions. Our objective now is to integrate each of these simpler fractions. The integration of these terms will often lead to logarithmic or arctangent functions.

## Common Integration Patterns

When integrating partial fractions, you'll frequently encounter the following forms:

*   **Linear Factors:** Integrals of the form $$ \int \frac{A}{ax+b} dx $$
*   **Quadratic Factors (leading to arctan):** Integrals of the form $$ \int \frac{Ax+B}{ax^2+bx+c} dx $$ where the denominator is an irreducible quadratic.

### Integrating Linear Factors

The integral of a term with a linear denominator is straightforward and results in a natural logarithm.

$$
\int \frac{A}{ax+b} dx
$$

To solve this, we can use a simple substitution. Let $$ u = ax+b $$. Then $$ du = a \, dx $$, which means $$ dx = \frac{1}{a} du $$.

Substituting these into the integral:

$$
\int \frac{A}{u} \left(\frac{1}{a} du\right) = \frac{A}{a} \int \frac{1}{u} du = \frac{A}{a} \ln|u| + C
$$

Replacing $$ u $$ back with $$ ax+b $$, we get:

$$
\frac{A}{a} \ln|ax+b| + C
$$

**Example:** Integrate $$ \int \frac{3}{2x+1} dx $$.
Here, $$ A=3 $$, $$ a=2 $$, and $$ b=1 $$.
Using the formula:
$$
\frac{3}{2} \ln|2x+1| + C
$$

### Integrating Quadratic Factors (Irreducible)

When the denominator is an irreducible quadratic (meaning it cannot be factored into real linear factors), the integration can lead to an arctangent function. An irreducible quadratic has a discriminant $$ b^2 - 4ac < 0 $$.

Consider an integral of the form:

$$
\int \frac{K}{x^2 + k^2} dx
$$

This is a standard integral form that evaluates to:

$$
\frac{1}{k} \arctan\left(\frac{x}{k}\right) + C
$$

If the numerator is linear, like $$ Ax+B $$, and the denominator is an irreducible quadratic $$ ax^2+bx+c $$, we often complete the square in the denominator and use a combination of substitution and the arctan formula.

**Example:** Integrate $$ \int \frac{1}{x^2 + 4} dx $$.
Here, $$ k^2 = 4 $$, so $$ k=2 $$.
Using the formula:
$$
\frac{1}{2} \arctan\left(\frac{x}{2}\right) + C
$$

If the denominator is not in the simple form $$ x^2 + k^2 $$, you may need to perform completing the square and scaling. For instance, to integrate $$ \int \frac{1}{2x^2 + 8} dx $$, you would first factor out the 2:
$$
\int \frac{1}{2(x^2 + 4)} dx = \frac{1}{2} \int \frac{1}{x^2 + 4} dx
$$
Then, apply the arctan formula as shown above.

## Worked Example: Combining Partial Fractions

Let's integrate a function that requires both types of partial fraction decomposition and subsequent integration.

Suppose we need to integrate:
$$
\int \frac{x+1}{x^2 - 1} dx
$$

**Step 1: Factor the denominator.**
$$ x^2 - 1 = (x-1)(x+1) $$

**Step 2: Perform Partial Fraction Decomposition.**
$$ \frac{x+1}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1} $$
Multiplying both sides by $$ (x-1)(x+1) $$ gives:
$$ x+1 = A(x+1) + B(x-1) $$

*   Let $$ x = 1 $$: $$ 1+1 = A(1+1) + B(1-1) \implies 2 = 2A \implies A = 1 $$
*   Let $$ x = -1 $$: $$ -1+1 = A(-1+1) + B(-1-1) \implies 0 = -2B \implies B = 0 $$

So, the decomposition is:
$$ \frac{x+1}{x^2 - 1} = \frac{1}{x-1} + \frac{0}{x+1} = \frac{1}{x-1} $$

**Step 3: Integrate the decomposed terms.**
We need to integrate:
$$ \int \frac{1}{x-1} dx $$

This is a simple linear factor integral. Using the formula $$ \int \frac{A}{ax+b} dx = \frac{A}{a} \ln|ax+b| + C $$ with $$ A=1 $$, $$ a=1 $$, and $$ b=-1 $$, we get:
$$ \ln|x-1| + C $$

**Important Note:** In this specific example, the partial fraction decomposition simplified the original fraction to a single term that didn't require complex integration patterns. However, many problems will yield multiple terms.

**Another Example (with irreducible quadratic):**
Integrate $$ \int \frac{2x+3}{x^2+9} dx $$.

This denominator $$ x^2+9 $$ is an irreducible quadratic. We can split the integral:
$$ \int \frac{2x}{x^2+9} dx + \int \frac{3}{x^2+9} dx $$

*   **First integral:** $$ \int \frac{2x}{x^2+9} dx $$
    Let $$ u = x^2+9 $$. Then $$ du = 2x \, dx $$.
    $$ \int \frac{1}{u} du = \ln|u| + C = \ln|x^2+9| + C $$
    Since $$ x^2+9 $$ is always positive, we can write $$ \ln(x^2+9) + C $$.

*   **Second integral:** $$ \int \frac{3}{x^2+9} dx $$
    This matches the arctan form $$ \int \frac{K}{x^2+k^2} dx $$ with $$ K=3 $$ and $$ k^2=9 \implies k=3 $$.
    Using the formula $$ \frac{1}{k} \arctan\left(\frac{x}{k}\right) + C $$, we get:
    $$ \frac{3}{3} \arctan\left(\frac{x}{3}\right) + C = \arctan\left(\frac{x}{3}\right) + C $$

Combining the results:
$$ \int \frac{2x+3}{x^2+9} dx = \ln(x^2+9) + \arctan\left(\frac{x}{3}\right) + C $$

## Key Takeaways

*   After partial fraction decomposition, the integration of linear terms yields logarithmic functions.
*   The integration of irreducible quadratic terms (after completing the square and appropriate scaling) often results in arctangent functions.
*   Be mindful of the constants and coefficients when applying the integration formulas.

## Supports

- [[skills/mathematics/integral-evaluation/microskills/integrate-decomposed-rational-terms|Integrate decomposed rational terms]]
