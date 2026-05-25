---
type: "medium"
title: "Proofs of Integer Sums Using Mathematical Induction"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/mathematical-induction/microskills/induction-proofs-for-integer-sums|induction-proofs-for-integer-sums]]"
learning-time-in-minutes: 3
---
# Proofs of Integer Sums Using Mathematical Induction

This lesson focuses on applying mathematical induction to prove statements about the sums of integers. We will walk through the process step-by-step, understanding each component of the inductive proof.

## Understanding the Principle of Mathematical Induction

Mathematical induction is a powerful proof technique used to establish that a statement is true for all natural numbers (or a subset of them starting from a certain point). It works in two main steps:

1.  **Base Case (or Basis Step):** Show that the statement is true for the smallest value of $n$ (usually $n=1$).
2.  **Inductive Step:** Assume the statement is true for some arbitrary positive integer $k$ (this is called the **Inductive Hypothesis**). Then, using this assumption, prove that the statement is also true for the next integer, $k+1$.

If both these steps are successfully proven, then by the principle of mathematical induction, the statement is true for all integers $n$ from the base case onwards.

## Structure of an Induction Proof for Integer Sums

When proving a formula for an integer sum using induction, your proof will typically follow this structure:

*   **State the Proposition:** Clearly write down the statement (formula) you want to prove.
*   **Base Case:** Verify the statement for the smallest integer, usually $n=1$.
*   **Inductive Hypothesis:** Assume the statement is true for an arbitrary integer $k \geq 1$.
*   **Inductive Step:** Prove the statement is true for $k+1$, using the inductive hypothesis.
*   **Conclusion:** State that, by the principle of mathematical induction, the proposition is true for all integers $n \geq 1$.

## Worked Example: Sum of the First $n$ Positive Integers

Let's prove the formula for the sum of the first $n$ positive integers:

$$
\sum_{i=1}^{n} i = 1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}
$$

**1. State the Proposition**

Let $P(n)$ be the statement: $$ \sum_{i=1}^{n} i = \frac{n(n+1)}{2} $$

**2. Base Case**

We need to show that $P(1)$ is true.
For $n=1$, the left side (LS) is $\sum_{i=1}^{1} i = 1$.
The right side (RS) is $\frac{1(1+1)}{2} = \frac{1(2)}{2} = 1$.
Since LS = RS, $P(1)$ is true.

**3. Inductive Hypothesis**

Assume that $P(k)$ is true for some arbitrary positive integer $k \geq 1$. That is, assume:
$$
\sum_{i=1}^{k} i = \frac{k(k+1)}{2}
$$

**4. Inductive Step**

We need to prove that $P(k+1)$ is true. That is, we need to show:
$$
\sum_{i=1}^{k+1} i = \frac{(k+1)((k+1)+1)}{2} = \frac{(k+1)(k+2)}{2}
$$

Let's start with the left side of $P(k+1)$:
$$
\sum_{i=1}^{k+1} i = \left(\sum_{i=1}^{k} i\right) + (k+1)
$$
Now, we can use our Inductive Hypothesis to substitute the sum of the first $k$ integers:
$$
\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1)
$$
To combine these terms, find a common denominator:
$$
\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + \frac{2(k+1)}{2}
$$
Now, combine the numerators:
$$
\sum_{i=1}^{k+1} i = \frac{k(k+1) + 2(k+1)}{2}
$$
Factor out the common term $(k+1)$ from the numerator:
$$
\sum_{i=1}^{k+1} i = \frac{(k+1)(k + 2)}{2}
$$
This is exactly the right side of $P(k+1)$. Therefore, we have shown that if $P(k)$ is true, then $P(k+1)$ is also true.

**5. Conclusion**

By the principle of mathematical induction, the statement $P(n)$ is true for all positive integers $n$. That is, for all $n \geq 1$:
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Common Pitfalls to Avoid

*   **Confusing the Inductive Hypothesis:** Remember that you *assume* the statement is true for $k$. You do not prove it for $k$ in the inductive step.
*   **Algebraic Errors:** The inductive step often involves algebraic manipulation. Be careful with expanding, factoring, and finding common denominators.
*   **Not Completing all Steps:** A valid induction proof requires both the base case and the inductive step to be proven.

## Practice Problems

1.  Prove that for all positive integers $n$:
    $$
    \sum_{i=1}^{n} (2i - 1) = n^2
    $$
    (This is the sum of the first $n$ odd numbers.)

2.  Prove that for all positive integers $n$:
    $$
    \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}
    $$

## Supports

- [[skills/mathematics/discrete-math/mathematical-induction/microskills/induction-proofs-for-integer-sums|Induction proofs for integer sums]]
