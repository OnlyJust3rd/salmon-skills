---
type: "medium"
title: "Diffie-Hellman Key Agreement Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/diffie-hellman-key-agreement-principles|diffie-hellman-key-agreement-principles]]"
learning-time-in-minutes: 3
---
# Diffie-Hellman Key Agreement Principles

Diffie-Hellman Key Agreement is a method that allows two parties to establish a shared secret key over an insecure communication channel. This shared secret can then be used to encrypt subsequent communications. Understanding its foundational mathematical principles is crucial for grasping how it achieves this secure exchange.

### Core Concepts

The security of Diffie-Hellman relies on a few core mathematical ideas:

*   **Modular Arithmetic:** This involves performing arithmetic operations within a finite set of integers. When you perform a division, you are only concerned with the remainder. For example, in modulo 7, 10 is equivalent to 3 because 10 divided by 7 leaves a remainder of 3. This is often written as \(10 \equiv 3 \pmod{7}\).
*   **Primitive Root Modulo \(p\):** A primitive root modulo \(p\) (where \(p\) is a prime number) is an integer \(g\) such that every number from 1 to \(p-1\) can be expressed as \(g^x \pmod{p}\) for some integer \(x\). In simpler terms, it's a generator for all the possible values in the modular system.
*   **Discrete Logarithm Problem:** This is the core computational difficulty that makes Diffie-Hellman secure. Given a prime \(p\), a primitive root \(g\), and a value \(y\), it is computationally hard to find the integer \(x\) such that \(g^x \equiv y \pmod{p}\). Knowing \(g\), \(x\), and \(p\), it's easy to calculate \(y\), but the reverse (finding \(x\) given \(y\), \(g\), and \(p\)) is extremely difficult for large numbers.

### Practical Scenario

Imagine Alice and Bob want to agree on a secret code word without anyone eavesdropping. They agree on a large prime number, say \(p=23\), and a primitive root for that prime, say \(g=5\).

1.  Alice picks a secret number, \(a=6\). She calculates her public value: \(A = g^a \pmod{p} = 5^6 \pmod{23}\).
    \(5^6 = 15625\).
    \(15625 \div 23 = 679\) with a remainder of \(8\). So, \(A=8\). Alice sends \(A=8\) to Bob.

2.  Bob picks a secret number, \(b=15\). He calculates his public value: \(B = g^b \pmod{p} = 5^{15} \pmod{23}\).
    \(5^{15} \pmod{23}\) can be calculated to be \(19\). So, \(B=19\). Bob sends \(B=19\) to Alice.

3.  Alice receives Bob's public value \(B=19\). She calculates the shared secret using her secret number \(a\) and Bob's public value \(B\):
    Secret = \(B^a \pmod{p} = 19^6 \pmod{23}\).
    \(19^6 \pmod{23} = 2\).

4.  Bob receives Alice's public value \(A=8\). He calculates the shared secret using his secret number \(b\) and Alice's public value \(A\):
    Secret = \(A^b \pmod{p} = 8^{15} \pmod{23}\).
    \(8^{15} \pmod{23} = 2\).

Both Alice and Bob arrive at the same shared secret, \(2\), without ever sending their secret numbers \(a\) or \(b\) directly. An eavesdropper only sees \(p=23\), \(g=5\), \(A=8\), and \(B=19\). To find the shared secret, they would need to solve the discrete logarithm problem for \(5^a \equiv 8 \pmod{23}\) or \(5^b \equiv 19 \pmod{23}\), which is difficult.

### Practice Task

Identify the prime number \(p\) and the primitive root \(g\) in the scenario above. Which values represent Alice's and Bob's public keys?

### Self-Check Questions

1.  What mathematical operation is fundamental to Diffie-Hellman and involves remainders?
2.  What makes it computationally difficult to determine a secret number given a public value in Diffie-Hellman?
3.  If Alice calculates \(g^a \pmod{p}\) and Bob calculates \(g^b \pmod{p}\), what final calculation do they each perform to derive the shared secret?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/diffie-hellman-key-agreement-principles|Diffie-Hellman Key Agreement Principles]]
