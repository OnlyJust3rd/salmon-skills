---
type: "medium"
title: "RSA Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/rsa-principles|rsa-principles]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/asymmetric-algorithm-mechanics|asymmetric-algorithm-mechanics]]"
learning-time-in-minutes: 2
---
# RSA Principles

This lesson focuses on recalling the fundamental mathematical concepts that underpin the RSA algorithm, a cornerstone of asymmetric cryptography.

## What are the Core Mathematical Principles of RSA?

RSA relies on a few key mathematical ideas:

1.  **Prime Numbers:** These are numbers greater than 1 that have only two divisors: 1 and themselves (e.g., 2, 3, 5, 7, 11).
2.  **Modular Arithmetic:** This is arithmetic that "wraps around." For example, in modulo 10, 12 is the same as 2, and 17 is the same as 7. We often write this as \(a \equiv b \pmod{m}\), meaning \(a\) and \(b\) have the same remainder when divided by \(m\).
3.  **Euler's Totient Theorem:** This theorem states that if two numbers, \(a\) and \(n\), are coprime (their greatest common divisor is 1), then \(a^{\phi(n)} \equiv 1 \pmod{n}\). Here, \(\phi(n)\) (phi of n) is Euler's totient function, which counts the positive integers up to \(n\) that are relatively prime to \(n\). If \(n\) is a prime number \(p\), then \(\phi(p) = p-1\).

## Practical Scenario: The Difficulty of Factoring

Imagine you have a very large number that is the product of two large prime numbers. RSA's security hinges on the fact that it's computationally very difficult to find those original two prime numbers when you only know their product.

For instance, if you are given the number 77, you can easily figure out it's 7 * 11. However, if you are given a number like 18,446,744,073,709,551,617, which is the product of two very large primes, it would take an immense amount of computing power to find those primes. This difficulty in factoring large numbers is the "hard problem" that RSA exploits.

## Practice Task

Recall and write down the definition of a prime number and explain what modular arithmetic means in your own words.

## Self-Check Questions

1.  What is the defining characteristic of a prime number?
2.  What does \(a \equiv b \pmod{m}\) represent in modular arithmetic?
3.  Which mathematical concept, related to prime numbers and modular arithmetic, is central to RSA's security?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/rsa-principles|RSA Principles]]
