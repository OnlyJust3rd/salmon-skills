---
type: "medium"
title: "The Fundamental Theorem of Calculus: Part 1 Statement"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/fundamental-theorem-of-calculus-statement|fundamental-theorem-of-calculus-statement]]"
learning-time-in-minutes: 4
---
# The Fundamental Theorem of Calculus: Part 1 Statement

Welcome to this lesson on the Fundamental Theorem of Calculus (FTC). This theorem is a cornerstone of calculus, connecting the seemingly different concepts of differentiation and integration. Understanding its statement is the first crucial step.

### What is the Fundamental Theorem of Calculus?

The Fundamental Theorem of Calculus establishes a profound link between differentiation and integration. It essentially states that these two operations are inverses of each other. There are two parts to the theorem. This lesson focuses on the first part, which is about defining an antiderivative using an integral.

### Statement of the Fundamental Theorem of Calculus, Part 1

Let's precisely state the first part of the theorem.

**Theorem Statement (FTC Part 1):**

If \(f\) is a continuous function on a closed interval \([a, b]\), and we define a function \(F\) for all \(x\) in \([a, b]\) by
\[
F(x) = \int_{a}^{x} f(t) \, dt
\]
then \(F\) is continuous on \([a, b]\), differentiable on the open interval \((a, b)\), and its derivative is \(f(x)\):
\[
F'(x) = \frac{d}{dx} \left( \int_{a}^{x} f(t) \, dt \right) = f(x)
\]

### Breaking Down the Statement

Let's unpack the components of this statement to ensure we understand each part.

*   **Continuous Function \(f\):** The theorem requires the function \(f\) to be continuous over the interval \([a, b]\). Continuity means that the graph of the function has no breaks, jumps, or holes within that interval. This is a crucial condition for the theorem to hold.

*   **The Integral Definition of \(F(x)\):** The function \(F(x)\) is defined as the definite integral of \(f(t)\) from a constant lower limit \(a\) to a variable upper limit \(x\).
    *   \(\int_{a}^{x}\): This represents the signed area under the curve of \(f(t)\) from \(t=a\) to \(t=x\).
    *   \(f(t) \, dt\): This is the integrand, the function we are integrating with respect to the variable \(t\). We use \(t\) as the integration variable to avoid confusion with the upper limit \(x\).

*   **Properties of \(F(x)\):** The theorem states two key properties about the function \(F(x)\) that we've defined using the integral:
    *   **Continuity:** \(F(x)\) is continuous on the closed interval \([a, b]\). This means that as \(x\) changes within the interval, the accumulated area \(F(x)\) changes smoothly without any abrupt jumps.
    *   **Differentiability:** \(F(x)\) is differentiable on the open interval \((a, b)\). This means that we can find the derivative of \(F(x)\) for any point strictly between \(a\) and \(b\).

*   **The Main Result: \(F'(x) = f(x)\):** This is the core of FTC Part 1. It says that the rate at which the accumulated area \(F(x)\) changes as \(x\) increases is exactly equal to the value of the original function \(f(x)\) at that point \(x\). In simpler terms, the derivative of an integral with a variable upper limit is the original function.

### Why is This Important?

FTC Part 1 tells us that integration (finding the area under a curve) and differentiation (finding the slope of a curve) are intimately related. Specifically, it shows how to construct an antiderivative for any continuous function. If you have a function \(f\), you can create a new function \(F\) that is its antiderivative simply by integrating \(f\).

### Example to Illustrate

Let's consider a simple example to visualize this.

Suppose \(f(t) = 2t\). This is a continuous function. Let's choose \(a = 1\).
Then, we define \(F(x)\) as:
\[
F(x) = \int_{1}^{x} 2t \, dt
\]

Now, let's evaluate this integral:
\[
F(x) = \left[ t^2 \right]_{1}^{x} = x^2 - 1^2 = x^2 - 1
\]

According to FTC Part 1, the derivative of \(F(x)\) should be equal to our original function \(f(x)\). Let's check:
\[
F'(x) = \frac{d}{dx}(x^2 - 1) = 2x
\]

Indeed, \(F'(x) = 2x\), which is our original function \(f(x)\). This example visually demonstrates how the rate of change of the accumulated area (\(F'(x)\)) is equal to the height of the function (\(f(x)\)).

### Key Takeaway

The Fundamental Theorem of Calculus, Part 1, states that if you define a function \(F(x)\) by integrating a continuous function \(f(t)\) from a constant \(a\) to a variable \(x\), then the derivative of \(F(x)\) is simply \(f(x)\). This theorem is essential for understanding how differentiation and integration are inverse processes.

Remember this statement precisely, as it forms the foundation for many calculus concepts and applications.

## Supports

- [[skills/mathematics/calculus/fundamental-theorem-of-calculus/microskills/fundamental-theorem-of-calculus-statement|Fundamental Theorem of Calculus statement]]
