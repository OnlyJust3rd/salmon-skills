---
type: "medium"
title: "Induction Proofs for Inequalities"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/mathematical-induction/microskills/induction-proofs-for-inequalities|induction-proofs-for-inequalities]]"
learning-time-in-minutes: 4
---
# Induction Proofs for Inequalities

This lesson focuses on using the principle of mathematical induction to prove statements involving inequalities. We'll build upon the foundational steps of induction and apply them specifically to situations where we need to show that an inequality holds true for all integers greater than or equal to a certain base case.

## Understanding the Goal

When proving an inequality using induction, our aim is to demonstrate that a statement $P(n)$ involving an inequality is true for all integers $n \ge n_0$, where $n_0$ is the starting integer. The principle of mathematical induction involves two key steps:

1.  **Base Case:** Show that the statement $P(n_0)$ is true.
2.  **Inductive Step:** Assume that the statement $P(k)$ is true for some arbitrary integer $k \ge n_0$ (this is the inductive hypothesis), and then prove that the statement $P(k+1)$ must also be true.

If both these steps are successfully completed, then the principle of mathematical induction guarantees that $P(n)$ is true for all integers $n \ge n_0$.

## Key Strategies for the Inductive Step

The core challenge in inductive proofs for inequalities often lies in the inductive step. When proving $P(k+1)$ assuming $P(k)$, we usually start with the left-hand side (LHS) of the inequality for $P(k+1)$ and try to manipulate it to show it's greater than or equal to the right-hand side (RHS) of $P(k+1)$. Here are some common strategies:

*   **Direct Substitution:** Use the inductive hypothesis ($P(k)$ is true) to substitute an equivalent or bounding expression into the LHS of $P(k+1)$.
*   **Adding/Subtracting Terms:** Add or subtract appropriate terms to the inequality from $P(k)$ to reach the inequality for $P(k+1)$.
*   **Factoring or Rearranging:** Algebraic manipulation of the LHS of $P(k+1)$ can be crucial.

## Worked Example: Proving an Inequality

Let's prove the inequality $2^n > n$ for all integers $n \ge 1$ using mathematical induction.

### Step 1: Base Case ($n=1$)

We need to show that $P(1)$ is true.
The statement $P(n)$ is $2^n > n$.
For $n=1$: $2^1 > 1$, which simplifies to $2 > 1$.
This is true. So, the base case holds.

### Step 2: Inductive Step

Assume $P(k)$ is true for some arbitrary integer $k \ge 1$. This is our **inductive hypothesis**:
$$ 2^k > k \quad (*)$$

Now, we need to prove that $P(k+1)$ is true, i.e., $2^{k+1} > k+1$.

Let's start with the LHS of $P(k+1)$:
$$ 2^{k+1} $$

We can rewrite this using exponent rules:
$$ 2^{k+1} = 2 \cdot 2^k $$

Now, we can use our inductive hypothesis ($2^k > k$). Since $2^k > k$, we can substitute $k$ for $2^k$ on the RHS, but we must be careful: if we replace $2^k$ with a smaller value, the inequality sign might change or be harder to work with. Instead, let's use the fact that $2^k > k$ to establish a lower bound for $2^{k+1}$:

$$ 2^{k+1} = 2 \cdot 2^k > 2 \cdot k \quad (\text{using } 2^k > k) $$

So, we have $2^{k+1} > 2k$.
Our goal is to show that $2^{k+1} > k+1$. We currently have $2^{k+1} > 2k$.
If we can show that $2k \ge k+1$ for $k \ge 1$, then by transitivity, we will have $2^{k+1} > k+1$.

Let's check if $2k \ge k+1$ for $k \ge 1$:
Subtract $k$ from both sides:
$k \ge 1$

This is true because our inductive hypothesis is for $k \ge 1$.
Since $2^{k+1} > 2k$ and $2k \ge k+1$ for $k \ge 1$, we can conclude that:
$$ 2^{k+1} > k+1 $$

This is $P(k+1)$, which we have successfully proven.

### Conclusion

Since the base case ($n=1$) is true, and the inductive step (if $P(k)$ is true, then $P(k+1)$ is true) has been proven, by the principle of mathematical induction, the inequality $2^n > n$ is true for all integers $n \ge 1$.

## Common Pitfalls and How to Avoid Them

*   **Incorrect Base Case:** Always ensure your base case is correctly calculated and stated. If the base case is $n=0$ or $n=2$, the proof might fail for earlier integers.
*   **Flawed Inductive Hypothesis:** Clearly state your inductive hypothesis ($P(k)$ is true). Do not assume $P(k+1)$ is true within the inductive step.
*   **Algebraic Errors:** Be meticulous with algebraic manipulations. A single mistake can invalidate the entire proof.
*   **Not Using the Inductive Hypothesis Effectively:** The inductive hypothesis is a powerful tool. Make sure you are using it to simplify or bound the expression in the inductive step.
*   **Assuming the Result:** Do not start the inductive step by assuming the inequality for $k+1$ is true. Work from one side (usually the LHS) towards the desired outcome.

## Practice Problem

Prove that for all integers $n \ge 2$, the following inequality holds:
$$ \sum_{i=1}^{n} \frac{1}{i^2} \le 2 - \frac{1}{n} $$

## Supports

- [[skills/mathematics/discrete-math/mathematical-induction/microskills/induction-proofs-for-inequalities|Induction proofs for inequalities]]
