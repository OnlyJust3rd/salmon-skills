---
type: "medium"
title: "Diffie-Hellman Key Agreement Foundations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/diffie-hellman-key-agreement-foundations|diffie-hellman-key-agreement-foundations]]"
learning-time-in-minutes: 3
---
# Diffie-Hellman Key Agreement Foundations

This lesson explores the mathematical underpinnings of the Diffie-Hellman key agreement protocol, a fundamental concept in asymmetric cryptography. Understanding these principles is crucial for grasping how secure shared secrets can be established over an insecure channel.

### Core Concept: The Magic of Modular Arithmetic

Diffie-Hellman relies on a mathematical property that is easy to compute in one direction but very difficult to reverse. This property is based on modular arithmetic, specifically exponentiation.

Imagine you have a large prime number, \(p\), and a base number, \(g\). Anyone can compute \(g^x \pmod{p}\) if they know \(g\), \(x\), and \(p\). However, if they only know \(p\), \(g\), and the result \(y = g^x \pmod{p}\), it's extremely hard to find \(x\). This is known as the **discrete logarithm problem**.

### The Process Explained

1.  **Publicly Known Values:** Alice and Bob agree on two public numbers:
    *   A large prime number \(p\).
    *   A primitive root modulo \(p\), denoted as \(g\).

2.  **Private Secrets:**
    *   Alice chooses a secret private number, \(a\).
    *   Bob chooses a secret private number, \(b\).

3.  **Public Key Generation:**
    *   Alice computes her public value: \(A = g^a \pmod{p}\).
    *   Bob computes his public value: \(B = g^b \pmod{p}\).

4.  **Exchange Public Values:** Alice sends \(A\) to Bob, and Bob sends \(B\) to Alice. These values are sent over an insecure channel, so an eavesdropper might see them.

5.  **Shared Secret Calculation:**
    *   Alice receives \(B\) and computes her shared secret: \(S = B^a \pmod{p}\).
    *   Bob receives \(A\) and computes his shared secret: \(S = A^b \pmod{p}\).

Because of the properties of exponents and modular arithmetic:
\[
B^a \pmod{p} = (g^b)^a \pmod{p} = g^{ba} \pmod{p}
\]
and
\[
A^b \pmod{p} = (g^a)^b \pmod{p} = g^{ab} \pmod{p}
\]
Since \(ab = ba\), both Alice and Bob arrive at the *same* shared secret, \(S\), even though they never directly exchanged it. An eavesdropper who sees \(p\), \(g\), \(A\), and \(B\) cannot easily compute \(S\) because they don't know \(a\) or \(b\).

### Practical Scenario

Imagine Alice and Bob want to encrypt their communications. They use Diffie-Hellman to establish a secret key.

*   **Public:** \(p = 23\), \(g = 5\)
*   **Alice's Secret:** \(a = 4\)
*   **Bob's Secret:** \(b = 3\)

**Alice calculates:** \(A = 5^4 \pmod{23} = 625 \pmod{23} = 4\)
**Bob calculates:** \(B = 5^3 \pmod{23} = 125 \pmod{23} = 10\)

They exchange \(A=4\) and \(B=10\).

**Alice calculates shared secret:** \(S = B^a \pmod{p} = 10^4 \pmod{23} = 10000 \pmod{23} = 18\)
**Bob calculates shared secret:** \(S = A^b \pmod{p} = 4^3 \pmod{23} = 64 \pmod{23} = 18\)

They now share the secret number 18, which they can use as a symmetric encryption key.

### Practice Task

Given \(p = 17\) and \(g = 3\):
*   Alice chooses secret \(a = 6\).
*   Bob chooses secret \(b = 8\).

Calculate Alice's public value \(A\), Bob's public value \(B\), and their shared secret \(S\).

### Self-Check Questions

1.  What is the primary mathematical problem that makes Diffie-Hellman secure?
2.  If Alice computes \(A = g^a \pmod{p}\) and Bob computes \(B = g^b \pmod{p}\), and they exchange \(A\) and \(B\), how do they both arrive at the same secret value?
3.  Why is it difficult for an eavesdropper to determine the shared secret \(S\) if they only see \(p\), \(g\), \(A\), and \(B\)?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/diffie-hellman-key-agreement-foundations|Diffie-Hellman Key Agreement Foundations]]
