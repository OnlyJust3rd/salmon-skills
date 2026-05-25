---
type: "medium"
title: "Euclidean Algorithm: The Foundation of Finding Common Ground"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euclidean-algorithm-definition|euclidean-algorithm-definition]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/number-theory-in-cryptography|number-theory-in-cryptography]]"
learning-time-in-minutes: 3
---
# Euclidean Algorithm: The Foundation of Finding Common Ground

In the world of cryptography, we often need to understand the relationships between numbers. One fundamental tool that helps us do this is the **Euclidean Algorithm**. This algorithm is a very efficient method for finding the greatest common divisor (GCD) of two integers. The GCD of two numbers is the largest positive integer that divides both numbers without leaving a remainder.

## What is the Euclidean Algorithm?

At its core, the Euclidean Algorithm is a process of repeated division with remainder. It's based on a simple but powerful principle:

> The greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number. This process is repeated until one of the numbers becomes zero, and the other number is the GCD.

A more efficient version of this principle uses the remainder of a division instead of the difference.

Let's state the principle formally:
For two non-negative integers, $a$ and $b$, where $a \ge b$:
$$ \text{gcd}(a, b) = \text{gcd}(b, a \pmod{b}) $$
where $a \pmod{b}$ represents the remainder when $a$ is divided by $b$.

The algorithm terminates when the remainder becomes 0. The last non-zero remainder is the GCD.

## How it Works: A Step-by-Step Idea

Imagine you have two numbers, say 48 and 18. We want to find their GCD.

1.  **Divide the larger number by the smaller number and find the remainder.**
    *   $48 \div 18 = 2$ with a remainder of $12$.
    *   So, $\text{gcd}(48, 18) = \text{gcd}(18, 12)$.

2.  **Now, repeat the process with the smaller number (18) and the remainder (12).**
    *   $18 \div 12 = 1$ with a remainder of $6$.
    *   So, $\text{gcd}(18, 12) = \text{gcd}(12, 6)$.

3.  **Continue this process: use the previous remainder (12) and the current remainder (6).**
    *   $12 \div 6 = 2$ with a remainder of $0$.
    *   So, $\text{gcd}(12, 6) = \text{gcd}(6, 0)$.

4.  **When the remainder is 0, the other number (the last non-zero remainder) is the GCD.**
    *   In our case, the last non-zero remainder was 6.

Therefore, the greatest common divisor of 48 and 18 is 6.

## A Pseudocode Example

The Euclidean Algorithm can be easily implemented in code. Here's a common pseudocode representation:

```pseudocode
function euclidean_gcd(a, b):
  while b != 0:
    temp = b
    b = a mod b
    a = temp
  return a
```

Let's trace this pseudocode with our example $a=48, b=18$:

*   **Iteration 1:**
    *   `b` is 18 (not 0).
    *   `temp` becomes 18.
    *   `b` becomes $48 \pmod{18}$, which is 12.
    *   `a` becomes `temp`, which is 18.
    *   Now, $a=18, b=12$.

*   **Iteration 2:**
    *   `b` is 12 (not 0).
    *   `temp` becomes 12.
    *   `b` becomes $18 \pmod{12}$, which is 6.
    *   `a` becomes `temp`, which is 12.
    *   Now, $a=12, b=6$.

*   **Iteration 3:**
    *   `b` is 6 (not 0).
    *   `temp` becomes 6.
    *   `b` becomes $12 \pmod{6}$, which is 0.
    *   `a` becomes `temp`, which is 6.
    *   Now, $a=6, b=0$.

*   **Loop terminates** because `b` is 0.
*   The function returns `a`, which is 6.

## Why is this important for Cryptography?

The Euclidean Algorithm is a cornerstone for many cryptographic operations. It's particularly crucial for:

*   **Finding Modular Inverses:** In algorithms like RSA, we need to find numbers that "undo" other numbers within a specific modulus. The Extended Euclidean Algorithm (a variation of the standard algorithm) is used for this purpose.
*   **Primality Testing:** While not directly part of primality tests, the understanding of divisibility and GCD that the Euclidean Algorithm reinforces is fundamental to number theory concepts used in these tests.

By understanding how the Euclidean Algorithm efficiently finds the GCD, you're building a solid foundation for grasping more complex cryptographic concepts.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euclidean-algorithm-definition|Euclidean Algorithm Definition]]
