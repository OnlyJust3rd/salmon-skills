---
type: "medium"
title: "Core Concepts for RSA"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/core-concepts-for-rsa|core-concepts-for-rsa]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/asymmetric-algorithm-mechanics|asymmetric-algorithm-mechanics]]"
learning-time-in-minutes: 3
---
# Core Concepts for RSA

This lesson focuses on recalling the fundamental mathematical concepts that underpin the RSA encryption algorithm. Understanding these principles is crucial for grasping how RSA achieves secure communication.

## What is RSA?

RSA (Rivest–Shamir–Adleman) is a widely used public-key cryptosystem. It relies on the computational difficulty of factoring large numbers. In essence, it uses a pair of keys: a public key for encryption and a private key for decryption.

## Key Mathematical Concepts

To understand RSA, you need to be familiar with these core mathematical ideas:

1.  **Prime Numbers:** A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples: 2, 3, 5, 7, 11, 13.

2.  **Modular Arithmetic:** This is arithmetic of integers, where numbers "wrap around" upon reaching a certain value—the modulus. The result of a calculation is always a remainder.
    *   Example: \(17 \pmod{5}\) means finding the remainder when 17 is divided by 5. \(17 = 3 \times 5 + 2\), so \(17 \equiv 2 \pmod{5}\).

3.  **Euler's Totient Function (\(\phi(n)\)):** This function counts the number of positive integers less than or equal to \(n\) that are relatively prime to \(n\). Two numbers are relatively prime if their greatest common divisor (GCD) is 1.
    *   If \(n\) is a prime number, then \(\phi(n) = n - 1\).
    *   If \(n = p \times q\) where \(p\) and \(q\) are distinct prime numbers, then \(\phi(n) = \phi(p) \times \phi(q) = (p-1)(q-1)\).

4.  **Modular Multiplicative Inverse:** For integers \(a\) and \(m\), the modular multiplicative inverse of \(a\) modulo \(m\) is an integer \(x\) such that \(ax \equiv 1 \pmod{m}\). This inverse exists if and only if \(a\) and \(m\) are relatively prime (i.e., \(\text{gcd}(a, m) = 1\)).

5.  **Euler's Theorem:** This theorem states that if \(a\) and \(n\) are relatively prime positive integers, then \(a^{\phi(n)} \equiv 1 \pmod{n}\). This is a foundational theorem for RSA's decryption process.

## Practical Scenario

Imagine Alice wants to send a secret message to Bob. Bob generates a public key and a private key. He shares his public key with Alice. Alice uses Bob's public key to encrypt her message. When Bob receives the encrypted message, he uses his private key to decrypt it. The security of this process relies on the difficulty of deriving Bob's private key from his public key, which is linked to the difficulty of factoring the large number used in his key generation.

## Practice Task

List the key mathematical concepts required for RSA. For each concept, briefly describe what it is.

## Self-Check Questions

1.  What is a prime number?
2.  Explain modular arithmetic using an example like \(23 \pmod{7}\).
3.  If \(p=11\) and \(q=13\) are prime numbers, what is \(\phi(p \times q)\)?
4.  What does Euler's Theorem state, and what is its significance in cryptography?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/core-concepts-for-rsa|Core Concepts for RSA]]
