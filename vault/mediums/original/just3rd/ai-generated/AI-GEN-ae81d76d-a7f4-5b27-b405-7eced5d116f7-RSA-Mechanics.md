---
type: "medium"
title: "RSA Mechanics: A Practical Application"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/rsa-mechanics|rsa-mechanics]]"
learning-time-in-minutes: 3
---
# RSA Mechanics: A Practical Application

This lesson focuses on applying the mathematical principles behind RSA to understand how it actually works. We'll go through a practical demonstration to solidify your understanding of RSA operations.

RSA is an asymmetric encryption algorithm that relies on the difficulty of factoring large numbers. It uses a pair of keys: a public key for encryption and a private key for decryption.

## The Core Mechanics

The RSA algorithm involves several mathematical steps using modular arithmetic.

1.  **Key Generation:**
    *   Choose two large prime numbers, \(p\) and \(q\).
    *   Calculate \(n = p \times q\). This \(n\) is part of both the public and private keys.
    *   Calculate Euler's totient function: \(\phi(n) = (p-1)(q-1)\).
    *   Choose an integer \(e\) such that \(1 < e < \phi(n)\) and \(e\) is coprime to \(\phi(n)\) (i.e., \(\text{gcd}(e, \phi(n)) = 1\)). This \(e\) is the public exponent.
    *   Calculate the modular multiplicative inverse of \(e\) modulo \(\phi(n)\). This means finding an integer \(d\) such that \((d \times e) \equiv 1 \pmod{\phi(n)}\). This \(d\) is the private exponent.
    *   The public key is \((n, e)\).
    *   The private key is \((n, d)\).

2.  **Encryption:**
    *   To encrypt a message \(M\) (represented as an integer), the sender uses the recipient's public key \((n, e)\).
    *   The ciphertext \(C\) is calculated as: \(C = M^e \pmod{n}\).

3.  **Decryption:**
    *   To decrypt the ciphertext \(C\), the recipient uses their private key \((n, d)\).
    *   The original message \(M\) is recovered as: \(M = C^d \pmod{n}\).

## Worked Example

Let's walk through a simplified RSA example.

**Key Generation:**

*   Choose \(p = 7\) and \(q = 11\). (In reality, these are much larger primes).
*   Calculate \(n = p \times q = 7 \times 11 = 77\).
*   Calculate \(\phi(n) = (p-1)(q-1) = (7-1)(11-1) = 6 \times 10 = 60\).
*   Choose \(e = 17\). We check: \(1 < 17 < 60\) and \(\text{gcd}(17, 60) = 1\). So, \(e=17\) is valid.
*   Find \(d\) such that \(17d \equiv 1 \pmod{60}\). Using the Extended Euclidean Algorithm or by testing multiples, we find \(d = 53\) because \(17 \times 53 = 901\), and \(901 \pmod{60} = 1\).
*   Public Key: \((n, e) = (77, 17)\)
*   Private Key: \((n, d) = (77, 53)\)

**Encryption:**

*   Let the message be \(M = 10\).
*   Encrypt using the public key \((77, 17)\):
    \(C = M^e \pmod{n} = 10^{17} \pmod{77}\).
    Calculating this: \(10^{17} \pmod{77} = 43\).
*   Ciphertext \(C = 43\).

**Decryption:**

*   Decrypt \(C = 43\) using the private key \((77, 53)\):
    \(M = C^d \pmod{n} = 43^{53} \pmod{77}\).
    Calculating this: \(43^{53} \pmod{77} = 10\).
*   The original message \(M = 10\) is recovered.

## Practice Task

Using the same primes \(p=5\) and \(q=13\):

1.  Calculate \(n\).
2.  Calculate \(\phi(n)\).
3.  Choose a suitable \(e\) and find its corresponding \(d\).
4.  Formulate the public and private keys.
5.  Encrypt the message \(M = 6\).
6.  Decrypt the resulting ciphertext to verify it recovers the original message.

## Self-Check Questions

*   What is the role of \(p\) and \(q\) in RSA key generation?
*   Why is the private key derived from the public exponent \(e\) and \(\phi(n)\)?
*   If \(n\) is small, can you easily determine the private key from the public key? Explain why.

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/rsa-mechanics|RSA Mechanics]]
