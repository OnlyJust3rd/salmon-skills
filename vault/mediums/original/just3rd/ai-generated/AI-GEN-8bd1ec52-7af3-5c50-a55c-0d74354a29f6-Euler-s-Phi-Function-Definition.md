---
type: "medium"
title: "Euler's Phi Function Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euler-s-phi-function-definition|euler-s-phi-function-definition]]"
learning-time-in-minutes: 2
---
# Euler's Phi Function Definition

In cryptography, we often deal with properties of numbers that are essential for secure communication. One such important concept is Euler's Totient Function, often denoted as $\phi(n)$ or $\varphi(n)$. This function is a cornerstone in understanding the structure of numbers modulo $n$.

## What is Euler's Phi Function?

Euler's Phi function, $\phi(n)$, counts the number of positive integers less than or equal to $n$ that are relatively prime to $n$.

Two integers, $a$ and $b$, are considered **relatively prime** (or coprime) if their greatest common divisor (GCD) is 1. That is, $gcd(a, b) = 1$.

Let's break this down with examples.

### Example 1: $\phi(10)$

We want to find the number of positive integers less than or equal to 10 that are relatively prime to 10. Let's list the numbers from 1 to 10 and check their GCD with 10:

*   $gcd(1, 10) = 1$ (Relatively prime)
*   $gcd(2, 10) = 2$ (Not relatively prime)
*   $gcd(3, 10) = 1$ (Relatively prime)
*   $gcd(4, 10) = 2$ (Not relatively prime)
*   $gcd(5, 10) = 5$ (Not relatively prime)
*   $gcd(6, 10) = 2$ (Not relatively prime)
*   $gcd(7, 10) = 1$ (Relatively prime)
*   $gcd(8, 10) = 2$ (Not relatively prime)
*   $gcd(9, 10) = 1$ (Relatively prime)
*   $gcd(10, 10) = 10$ (Not relatively prime)

The numbers that are relatively prime to 10 are 1, 3, 7, and 9. There are 4 such numbers.

Therefore, $$ \phi(10) = 4 $$

### Example 2: $\phi(7)$

Now let's find $\phi(7)$. We list numbers from 1 to 7 and check their GCD with 7:

*   $gcd(1, 7) = 1$ (Relatively prime)
*   $gcd(2, 7) = 1$ (Relatively prime)
*   $gcd(3, 7) = 1$ (Relatively prime)
*   $gcd(4, 7) = 1$ (Relatively prime)
*   $gcd(5, 7) = 1$ (Relatively prime)
*   $gcd(6, 7) = 1$ (Relatively prime)
*   $gcd(7, 7) = 7$ (Not relatively prime)

The numbers that are relatively prime to 7 are 1, 2, 3, 4, 5, and 6. There are 6 such numbers.

Therefore, $$ \phi(7) = 6 $$

Notice a pattern here: for a prime number $p$, all positive integers less than $p$ are relatively prime to $p$. So, for a prime $p$, $$ \phi(p) = p - 1 $$

### Key Takeaways

*   Euler's Phi Function ($\phi(n)$) counts the positive integers up to $n$ that share no common factors with $n$ other than 1.
*   These numbers are also called the "coprimes" or "relatively prime" to $n$.
*   For a prime number $p$, $$ \phi(p) = p - 1 $$.

Understanding this function is crucial as it appears in many number-theoretic results fundamental to cryptographic algorithms like RSA.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euler-s-phi-function-definition|Euler's Phi Function Definition]]
