---
type: "medium"
title: "Illustrating Public Key Algorithm Operations"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/asymmetric-algorithm-mechanics/microskills/public-key-algorithm-illustration|Public Key Algorithm Illustration]]"
---
# Illustrating Public Key Algorithm Operations

This lesson will guide you through understanding the step-by-step operations of common public-key cryptography algorithms, building upon the foundations of asymmetric encryption. We'll focus on how these algorithms enable secure communication without pre-sharing secret keys.

## What We'll Cover

Public-key cryptography, also known as asymmetric cryptography, uses a pair of keys: a public key for encryption and a private key for decryption. This lesson breaks down the mechanics of how messages are secured and verified using these key pairs.

## Practical Example: Simulating Diffie-Hellman Key Agreement

Diffie-Hellman is a foundational algorithm that allows two parties to establish a shared secret key over an insecure channel. Let's walk through a simplified illustration.

**Scenario:** Alice and Bob want to agree on a secret key.

**Setup:**
*   **Publicly known prime number \(p\):** 23
*   **Publicly known base \(g\):** 5

**Steps:**

1.  **Alice chooses a secret private key \(a\):** Let's say Alice chooses \(a = 6\).
2.  **Alice computes her public key \(A\):**
    \(A = g^a \mod p\)
    \(A = 5^6 \mod 23\)
    \(A = 15625 \mod 23\)
    \(A = 8\)
    Alice sends her public key \(A=8\) to Bob.

3.  **Bob chooses a secret private key \(b\):** Let's say Bob chooses \(b = 15\).
4.  **Bob computes his public key \(B\):**
    \(B = g^b \mod p\)
    \(B = 5^{15} \mod 23\)
    \(B = 30517578125 \mod 23\)
    \(B = 19\)
    Bob sends his public key \(B=19\) to Alice.

5.  **Alice computes the shared secret key \(s\):**
    \(s = B^a \mod p\)
    \(s = 19^6 \mod 23\)
    \(s = 47045881 \mod 23\)
    \(s = 2\)

6.  **Bob computes the shared secret key \(s\):**
    \(s = A^b \mod p\)
    \(s = 8^{15} \mod 23\)
    \(s = 35184372088832 \mod 23\)
    \(s = 2\)

Both Alice and Bob have now arrived at the same shared secret key \(s=2\) without ever transmitting it directly.

## Practice Task

Imagine you are Alice and Bob. Using the same public values \(p=23\) and \(g=5\):

1.  Choose new private keys for Alice and Bob.
2.  Calculate their respective public keys.
3.  Calculate the final shared secret key from both Alice's and Bob's perspectives.

## Self-Check Questions

1.  What is the purpose of the publicly known values \(p\) and \(g\) in Diffie-Hellman?
2.  Why is it crucial that the private keys \(a\) and \(b\) remain secret?
3.  What would happen if Alice used Bob's public key (\(B\)) and her own private key (\(a\)) to try and decrypt a message encrypted by Bob?

## Supports

- [[skills/programming/algorithms/asymmetric-algorithm-mechanics/microskills/public-key-algorithm-illustration|Public Key Algorithm Illustration]]
