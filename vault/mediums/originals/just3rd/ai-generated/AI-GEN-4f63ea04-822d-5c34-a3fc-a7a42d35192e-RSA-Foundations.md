---
type: "medium"
title: "RSA Foundations: The Math Behind the Magic"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/rsa-foundations|rsa-foundations]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/asymmetric-algorithm-mechanics|asymmetric-algorithm-mechanics]]"
learning-time-in-minutes: 4
---
# RSA Foundations: The Math Behind the Magic

This lesson dives into the fundamental mathematical principles that make the RSA algorithm work, a cornerstone of asymmetric cryptography for secure communication and digital signatures.

### What's the Big Idea?

RSA's security hinges on the difficulty of factoring large numbers. It relies on a few key mathematical concepts:

*   **Prime Numbers:** Numbers greater than 1 that are only divisible by 1 and themselves (e.g., 2, 3, 5, 7, 11).
*   **Modular Arithmetic:** A system of arithmetic for integers where numbers "wrap around" upon reaching a certain value—the modulus. For example, in modulo 12, 13 is equivalent to 1. We express this as \(13 \equiv 1 \pmod{12}\).
*   **Euler's Totient Function (\(\phi(n)\)):** For a positive integer \(n\), \(\phi(n)\) counts the number of positive integers up to \(n\) that are relatively prime to \(n\). Two numbers are relatively prime if their greatest common divisor (GCD) is 1. If \(p\) and \(q\) are distinct prime numbers, then \(\phi(pq) = (p-1)(q-1)\).

### How it Works (The Core Math)

RSA involves generating a pair of keys: a public key (for encryption and signature verification) and a private key (for decryption and signature generation). The process involves these steps:

1.  **Key Generation:**
    *   Choose two large, distinct prime numbers, \(p\) and \(q\).
    *   Calculate their product: \(n = p \times q\). This \(n\) is part of both your public and private keys.
    *   Calculate Euler's totient function: \(\phi(n) = (p-1)(q-1)\).
    *   Choose an integer \(e\) such that \(1 < e < \phi(n)\) and \(\text{gcd}(e, \phi(n)) = 1\). This \(e\) is the public exponent, part of your public key.
    *   Calculate \(d\), the modular multiplicative inverse of \(e\) modulo \(\phi(n)\). This means finding a \(d\) such that \((d \times e) \equiv 1 \pmod{\phi(n)}\). This \(d\) is the private exponent, part of your private key.

    The **public key** is the pair \((n, e)\).
    The **private key** is the pair \((n, d)\).

2.  **Encryption (Conceptual):** To encrypt a message \(M\) (represented as a number), you compute: \(C = M^e \pmod n\).

3.  **Decryption (Conceptual):** To decrypt a ciphertext \(C\), you compute: \(M = C^d \pmod n\).

The crucial mathematical property that makes this work is based on **Euler's Theorem**: If \(a\) and \(n\) are relatively prime, then \(a^{\phi(n)} \equiv 1 \pmod n\). Because of how \(d\) and \(e\) are chosen in relation to \(\phi(n)\), it can be shown that \((M^e)^d \equiv M \pmod n\).

### Practical Example: Simplified RSA

Let's use small numbers for illustration (in real-world RSA, primes are hundreds of digits long!).

1.  **Key Generation:**
    *   Choose \(p = 3\) and \(q = 11\). Both are prime.
    *   Calculate \(n = p \times q = 3 \times 11 = 33\).
    *   Calculate \(\phi(n) = (p-1)(q-1) = (3-1)(11-1) = 2 \times 10 = 20\).
    *   Choose \(e\). Let's pick \(e = 7\). Is \(1 < 7 < 20\)? Yes. Is \(\text{gcd}(7, 20) = 1\)? Yes. So, \(e=7\) is valid.
    *   Calculate \(d\). We need \((d \times 7) \equiv 1 \pmod{20}\). By trying values, or using the Extended Euclidean Algorithm, we find \(d=3\), because \(3 \times 7 = 21\), and \(21 \equiv 1 \pmod{20}\).

    So, the **public key** is \((n=33, e=7)\).
    The **private key** is \((n=33, d=3)\).

2.  **Encryption:** Let's encrypt the message \(M=5\).
    *   \(C = M^e \pmod n = 5^7 \pmod{33}\).
    *   \(5^7 = 78125\).
    *   \(78125 \div 33 \approx 2367.42\).
    *   \(78125 = 2367 \times 33 + 14\). So, \(78125 \equiv 14 \pmod{33}\).
    *   The ciphertext is \(C=14\).

3.  **Decryption:** Now, decrypt \(C=14\) using the private key \((n=33, d=3)\).
    *   \(M = C^d \pmod n = 14^3 \pmod{33}\).
    *   \(14^3 = 2744\).
    *   \(2744 \div 33 \approx 83.15\).
    *   \(2744 = 83 \times 33 + 5\). So, \(2744 \equiv 5 \pmod{33}\).
    *   The decrypted message is \(M=5\), which is our original message!

### Practice Task

Using the same primes \(p=3\) and \(q=11\), and the public exponent \(e=7\):

1.  Determine the private exponent \(d\).
2.  Encrypt the message \(M=2\).
3.  Decrypt the resulting ciphertext to verify you get \(M=2\) back.

### Self-Check Questions

1.  What are the two main mathematical concepts that RSA relies on for its security?
2.  If \(p\) and \(q\) are the two large prime numbers used in RSA, what is the formula for \(\phi(pq)\)?
3.  Why are prime numbers of hundreds of digits used in real-world RSA, rather than small numbers like in our example?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/rsa-foundations|RSA Foundations]]
