---
type: "medium"
title: "Induction Proofs for Divisibility"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/mathematical-induction/microskills/induction-proofs-for-divisibility|induction-proofs-for-divisibility]]"
related-skills:
  - "[[skills/mathematics/discrete-math/mathematical-induction/mathematical-induction|mathematical-induction]]"
learning-time-in-minutes: 5
---
# Induction Proofs for Divisibility

This lesson focuses on using the powerful technique of mathematical induction to prove statements about divisibility, specifically for integers. We will build upon the fundamental steps of induction to tackle problems where we need to show that a certain expression is always divisible by a particular number.

## Understanding the Goal

Our aim is to prove statements of the form: "For all integers $n \geq n_0$, the expression $P(n)$ is divisible by $k$." Here, $n_0$ is a starting integer, and $k$ is the divisor.

For example, we might want to prove that $n^3 - n$ is divisible by 3 for all integers $n \geq 1$.

## The Principle of Mathematical Induction (Recall)

Remember the two crucial steps for a proof by induction:

1.  **Base Case:** Prove the statement is true for the smallest integer in our domain (e.g., for $n=1$).
2.  **Inductive Step:**
    *   **Inductive Hypothesis:** Assume the statement is true for some arbitrary integer $m \geq n_0$. That is, assume $P(m)$ is divisible by $k$.
    *   **Inductive Proof:** Prove that the statement must also be true for the next integer, $m+1$. That is, prove $P(m+1)$ is divisible by $k$.

## Applying Induction to Divisibility

When proving divisibility, the key is to use the **Inductive Hypothesis** to show that $P(m+1)$ is divisible by $k$. Often, this involves algebraic manipulation.

Let's illustrate with an example:

**Statement:** Prove that for all integers $n \geq 1$, the expression $3^n - 1$ is divisible by 2.

---

### Step 1: Base Case

We need to show that the statement is true for $n=1$.
For $n=1$, the expression is $3^1 - 1 = 3 - 1 = 2$.
Since 2 is divisible by 2, the base case holds true.

---

### Step 2: Inductive Step

#### Inductive Hypothesis

Assume that for some arbitrary integer $m \geq 1$, the statement is true. This means we assume that $3^m - 1$ is divisible by 2.
Mathematically, this can be written as:
$3^m - 1 = 2c$ for some integer $c$.
From this, we can also write $3^m = 2c + 1$. This form can be very useful.

#### Inductive Proof

Now, we need to prove that the statement is true for $n = m+1$. We need to show that $3^{m+1} - 1$ is divisible by 2.

Let's start with the expression for $n=m+1$:
$$
P(m+1) = 3^{m+1} - 1
$$

We can rewrite $3^{m+1}$ as $3^m \cdot 3^1$:
$$
P(m+1) = 3^m \cdot 3 - 1
$$

Now, we strategically use our Inductive Hypothesis. We know from the hypothesis that $3^m = 2c + 1$. Substitute this into the expression:
$$
P(m+1) = (2c + 1) \cdot 3 - 1
$$

Distribute the 3:
$$
P(m+1) = 6c + 3 - 1
$$

Simplify the expression:
$$
P(m+1) = 6c + 2
$$

Now, we want to show this is divisible by 2. We can factor out a 2:
$$
P(m+1) = 2(3c + 1)
$$

Since $c$ is an integer, $3c$ is also an integer, and $3c + 1$ is an integer. Let $d = 3c + 1$.
Then, $P(m+1) = 2d$, where $d$ is an integer.
This shows that $3^{m+1} - 1$ is divisible by 2.

---

### Conclusion

We have successfully shown that the statement holds for the base case ($n=1$) and that if it holds for an arbitrary integer $m$, it also holds for $m+1$. Therefore, by the principle of mathematical induction, the expression $3^n - 1$ is divisible by 2 for all integers $n \geq 1$.

---

## Common Pitfalls and Tips

*   **Algebraic Manipulation:** The most critical part of divisibility proofs is skillfully manipulating the expression $P(m+1)$ to reveal a factor of $k$ (in our example, 2) and terms that match your Inductive Hypothesis.
*   **Using the Hypothesis Correctly:** Ensure you substitute or rearrange your Inductive Hypothesis ($P(m)$ is divisible by $k$) into the expression for $P(m+1)$. Don't just state the hypothesis; *use* it.
*   **Clear Definition of Divisibility:** Remember that "a is divisible by b" means $a = kb$ for some integer $k$. When proving divisibility by $k$, you aim to show your expression equals $k$ times some integer.
*   **Starting Point:** Always verify the correct starting integer ($n_0$) for your base case.

---

## Another Example

**Statement:** Prove that for all integers $n \geq 0$, $n^3 - n$ is divisible by 6.

---

### Step 1: Base Case

For $n=0$: $0^3 - 0 = 0$.
0 is divisible by 6 ($0 = 6 \times 0$). The base case holds.

---

### Step 2: Inductive Step

#### Inductive Hypothesis

Assume that for some integer $m \geq 0$, $m^3 - m$ is divisible by 6.
This means $m^3 - m = 6c$ for some integer $c$.
Therefore, $m^3 = 6c + m$.

#### Inductive Proof

We need to show that $(m+1)^3 - (m+1)$ is divisible by 6.

Let's expand the expression for $n=m+1$:
$$
P(m+1) = (m+1)^3 - (m+1)
$$
Expand $(m+1)^3$:
$$
P(m+1) = (m^3 + 3m^2 + 3m + 1) - (m+1)
$$
Simplify:
$$
P(m+1) = m^3 + 3m^2 + 3m + 1 - m - 1
$$
$$
P(m+1) = m^3 + 3m^2 + 2m
$$

Now, substitute $m^3 = 6c + m$ from the Inductive Hypothesis:
$$
P(m+1) = (6c + m) + 3m^2 + 2m
$$
Combine like terms:
$$
P(m+1) = 6c + 3m^2 + 3m
$$

We want to show this is divisible by 6. We can factor out $3m$ from the last two terms:
$$
P(m+1) = 6c + 3m(m+1)
$$

Now, consider the term $3m(m+1)$.
We know that $m(m+1)$ is the product of two consecutive integers. One of these integers must be even, so their product $m(m+1)$ is always divisible by 2.
Let $m(m+1) = 2k$ for some integer $k$.

Substitute this back:
$$
P(m+1) = 6c + 3(2k)
$$
$$
P(m+1) = 6c + 6k
$$

Factor out 6:
$$
P(m+1) = 6(c + k)
$$

Since $c$ and $k$ are integers, $c+k$ is also an integer. Let $j = c+k$.
Then, $P(m+1) = 6j$, where $j$ is an integer.
This proves that $(m+1)^3 - (m+1)$ is divisible by 6.

---

### Conclusion

By the principle of mathematical induction, $n^3 - n$ is divisible by 6 for all integers $n \geq 0$.

---

Mastering these steps will allow you to confidently construct proofs for divisibility statements using mathematical induction.

## Supports

- [[skills/mathematics/discrete-math/mathematical-induction/microskills/induction-proofs-for-divisibility|Induction proofs for divisibility]]
