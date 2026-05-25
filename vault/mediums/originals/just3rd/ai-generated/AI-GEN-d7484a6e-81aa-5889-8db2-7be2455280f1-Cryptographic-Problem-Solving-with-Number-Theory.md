---
type: "medium"
title: "Cryptographic Problem Solving with Number Theory"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/cryptographic-problem-solving-with-number-theory|cryptographic-problem-solving-with-number-theory]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/number-theory-in-cryptography|number-theory-in-cryptography]]"
learning-time-in-minutes: 5
---
# Cryptographic Problem Solving with Number Theory

This lesson focuses on how fundamental number theory concepts help us solve basic cryptographic problems. We'll explore practical applications of modular arithmetic, the Euclidean algorithm, and Euler's Phi function.

## What is the Goal?

The core idea is to use the predictable, yet complex, nature of numbers to secure information. Cryptography relies on mathematical problems that are easy to perform in one direction but incredibly difficult to reverse without specific knowledge (like a secret key). Number theory provides the tools to build and break these systems.

## Core Number Theory Tools in Action

### 1. Modular Arithmetic: The Clockwork of Cryptography

Modular arithmetic, often referred to as "clock arithmetic," deals with remainders after division. It's foundational because many cryptographic operations wrap around a specific number (the modulus).

**Key Concepts:**

*   **Congruence:** We say \(a\) is congruent to \(b\) modulo \(m\), written as \(a \equiv b \pmod{m}\), if \(a\) and \(b\) have the same remainder when divided by \(m\). Equivalently, \(m\) divides \(a-b\).
*   **Operations:** Addition, subtraction, and multiplication work as expected, but the result is always reduced modulo \(m\).

**Cryptographic Problem Example:**

Imagine a simple substitution cipher where each letter is shifted by a fixed amount. If we represent 'A' as 0, 'B' as 1, ..., 'Z' as 25, and our shift is 3:
*   'A' (0) becomes 'D' (3). \(0 + 3 \equiv 3 \pmod{26}\).
*   'X' (23) becomes 'A' (0). \(23 + 3 = 26 \equiv 0 \pmod{26}\).

This simple shifting is a direct application of modular addition.

### 2. Greatest Common Divisor (GCD) and the Euclidean Algorithm

The GCD of two integers is the largest positive integer that divides both of them without leaving a remainder. The Euclidean Algorithm is an efficient method to find this GCD.

**Why it Matters in Cryptography:**

The Euclidean Algorithm is crucial for finding modular multiplicative inverses. An inverse \(a^{-1}\) modulo \(m\) is a number such that \(a \cdot a^{-1} \equiv 1 \pmod{m}\). These inverses are vital for decryption in many cryptosystems.

**The Euclidean Algorithm (Iterative Approach):**

To find `gcd(a, b)` where \(a > b\):
1.  Divide \(a\) by \(b\) and get the remainder, \(r\).
2.  If \(r = 0\), then \(b\) is the GCD.
3.  If \(r \neq 0\), replace \(a\) with \(b\) and \(b\) with \(r\), and repeat step 1.

**Example: Finding GCD(48, 18)**

1.  \(48 \div 18 = 2\) with remainder \(12\). ( \(48 = 2 \cdot 18 + 12\) )
2.  Now consider GCD(18, 12): \(18 \div 12 = 1\) with remainder \(6\). ( \(18 = 1 \cdot 12 + 6\) )
3.  Now consider GCD(12, 6): \(12 \div 6 = 2\) with remainder \(0\). ( \(12 = 2 \cdot 6 + 0\) )
4.  The remainder is 0, so the GCD is the last non-zero remainder, which is **6**.

**Extended Euclidean Algorithm for Modular Inverse:**

The Extended Euclidean Algorithm not only finds the GCD but also finds integers \(x\) and \(y\) such that \(ax + by = \text{gcd}(a, b)\). If \(\text{gcd}(a, m) = 1\), then \(ax + my = 1\). Taking this equation modulo \(m\), we get \(ax \equiv 1 \pmod{m}\), meaning \(x\) is the modular inverse of \(a\) modulo \(m\).

### 3. Euler's Totient Function (\(\phi(n)\)): The Key to Modular Exponentiation

Euler's totient function, \(\phi(n)\), counts the number of positive integers up to a given integer \(n\) that are relatively prime to \(n\) (i.e., their GCD with \(n\) is 1).

**Formula for Prime \(p\):**
If \(p\) is a prime number, then \(\phi(p) = p - 1\). This is because all numbers from 1 to \(p-1\) are relatively prime to \(p\).

**Euler's Theorem:**
If \(a\) and \(n\) are relatively prime (i.e., \(\text{gcd}(a, n) = 1\)), then $$ a^{\phi(n)} \equiv 1 \pmod{n} $$

**Cryptographic Relevance:**

Euler's Theorem is fundamental to RSA encryption. The difficulty of factoring large numbers into their prime components is what makes RSA secure. Knowing \(\phi(n)\) for a composite number \(n\) essentially means you know its prime factorization.

**Example:**

Let's find \(\phi(10)\). The numbers less than or equal to 10 that are relatively prime to 10 are 1, 3, 7, 9. So, \(\phi(10) = 4\).
According to Euler's Theorem, if \(\text{gcd}(a, 10) = 1\), then \(a^4 \equiv 1 \pmod{10}\).
Let's test with \(a=3\):
\(3^4 = 81\).
\(81 \div 10 = 8\) with remainder \(1\). So, \(81 \equiv 1 \pmod{10}\). This holds true.

## Putting It Together: A Simple Cryptographic Scenario

Consider a simplified encryption scheme where the ciphertext \(C\) is calculated from plaintext \(P\) using a public key \((e, n)\) as:

$$ C \equiv P^e \pmod{n} $$

And decryption uses a private key \((d, n)\) as:

$$ P \equiv C^d \pmod{n} $$

For this to work, we need \(e \cdot d \equiv 1 \pmod{\phi(n)}\). This means \(d\) is the modular multiplicative inverse of \(e\) modulo \(\phi(n)\).

**How number theory solves this:**

1.  **Choosing \(n\):** \(n\) is typically the product of two large, distinct prime numbers \(p\) and \(q\). Factoring \(n\) back into \(p\) and \(q\) is computationally very hard for large numbers, forming the basis of RSA's security.
2.  **Calculating \(\phi(n)\):** If \(n = p \cdot q\) where \(p\) and \(q\) are distinct primes, then \(\phi(n) = \phi(p) \cdot \phi(q) = (p-1)(q-1)\). This step requires knowing the prime factors of \(n\).
3.  **Choosing \(e\) and \(d\):** \(e\) is chosen such that \(1 < e < \phi(n)\) and \(\text{gcd}(e, \phi(n)) = 1\). Then, \(d\) is found using the Extended Euclidean Algorithm to be the modular multiplicative inverse of \(e\) modulo \(\phi(n)\).

This shows how modular arithmetic, GCD (via the Extended Euclidean Algorithm), and Euler's Totient Function are intrinsically linked and essential for building fundamental cryptographic operations.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/cryptographic-problem-solving-with-number-theory|Cryptographic Problem Solving with Number Theory]]
