---
type: "medium"
title: "Diffie-Hellman Key Agreement Mechanics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/diffie-hellman-key-agreement-mechanics|diffie-hellman-key-agreement-mechanics]]"
learning-time-in-minutes: 4
---
# Diffie-Hellman Key Agreement Mechanics

This lesson focuses on understanding and applying the mathematical underpinnings of the Diffie-Hellman key agreement protocol. We'll walk through a practical example to solidify the mechanics.

Diffie-Hellman allows two parties, who have no prior knowledge of each other, to jointly establish a shared secret key over an insecure communication channel. This shared secret can then be used for symmetric encryption.

## The Core Idea

Diffie-Hellman relies on the difficulty of the discrete logarithm problem. It uses modular arithmetic and exponentiation. The key components are:

*   **A large prime number \(p\):** This is the modulus and is publicly known.
*   **A primitive root \(g\) modulo \(p\):** This is also publicly known.
*   **Private keys \(a\) and \(b\):** Each party generates a secret random integer.
*   **Public keys \(A\) and \(B\):** Each party computes their public key using the shared \(p\), \(g\), and their private key.

## Practical Example

Let's illustrate with small numbers for clarity (in practice, \(p\) would be very large).

1.  **Alice and Bob agree on public parameters:**
    *   Prime \(p = 23\)
    *   Primitive root \(g = 5\)

2.  **Alice chooses her private key:**
    *   Alice picks \(a = 6\)

3.  **Alice computes her public key:**
    *   \(A = g^a \pmod{p}\)
    *   \(A = 5^6 \pmod{23}\)
    *   \(5^1 = 5\)
    *   \(5^2 = 25 \equiv 2 \pmod{23}\)
    *   \(5^3 = 5 \times 2 = 10 \pmod{23}\)
    *   \(5^4 = 5 \times 10 = 50 \equiv 4 \pmod{23}\)
    *   \(5^5 = 5 \times 4 = 20 \equiv -3 \pmod{23}\)
    *   \(5^6 = 5 \times 20 = 100 \equiv 8 \pmod{23}\)
    *   Alice's public key \(A = 8\). Alice sends \(A\) to Bob.

4.  **Bob chooses his private key:**
    *   Bob picks \(b = 15\)

5.  **Bob computes his public key:**
    *   \(B = g^b \pmod{p}\)
    *   \(B = 5^{15} \pmod{23}\)
    *   We can use previous calculations: \(5^6 \equiv 8 \pmod{23}\).
    *   \(5^{12} = (5^6)^2 \equiv 8^2 = 64 \equiv 18 \pmod{23}\)
    *   \(5^{15} = 5^{12} \times 5^3 \equiv 18 \times 10 = 180 \pmod{23}\)
    *   \(180 = 7 \times 23 + 19\)
    *   \(B = 19\). Bob sends \(B\) to Alice.

6.  **Alice computes the shared secret:**
    *   Alice receives Bob's public key \(B=19\).
    *   She computes \(S = B^a \pmod{p}\)
    *   \(S = 19^6 \pmod{23}\)
    *   \(19 \equiv -4 \pmod{23}\)
    *   \(S = (-4)^6 \pmod{23}\)
    *   \(S = 4^6 \pmod{23}\)
    *   \(4^1 = 4\)
    *   \(4^2 = 16\)
    *   \(4^3 = 4 \times 16 = 64 \equiv 18 \pmod{23}\)
    *   \(4^6 = (4^3)^2 \equiv 18^2 = 324 \pmod{23}\)
    *   \(324 = 14 \times 23 + 2\)
    *   Alice's shared secret is \(S = 2\).

7.  **Bob computes the shared secret:**
    *   Bob receives Alice's public key \(A=8\).
    *   He computes \(S = A^b \pmod{p}\)
    *   \(S = 8^{15} \pmod{23}\)
    *   We know \(5^6 \equiv 8 \pmod{23}\).
    *   \(S = (5^6)^{15} \pmod{23}\)
    *   \(S = 5^{90} \pmod{23}\)
    *   Let's use \(5^{15} \equiv 19 \pmod{23}\) and \(5^6 \equiv 8 \pmod{23}\)
    *   \(8^{15} = 8^{10} \times 8^5\). This can get complex. Let's restart this step using the received public keys directly.
    *   Bob computes \(S = A^b \pmod{p} = 8^{15} \pmod{23}\).
    *   \(8^1 = 8\)
    *   \(8^2 = 64 \equiv 18 \pmod{23}\)
    *   \(8^3 = 8 \times 18 = 144 \equiv 6 \pmod{23}\)
    *   \(8^4 = 8 \times 6 = 48 \equiv 2 \pmod{23}\)
    *   \(8^8 = (8^4)^2 \equiv 2^2 = 4 \pmod{23}\)
    *   \(8^{15} = 8^8 \times 8^4 \times 8^3 \equiv 4 \times 2 \times 6 = 48 \equiv 2 \pmod{23}\).
    *   Bob's shared secret is \(S = 2\).

Both Alice and Bob arrive at the same shared secret value, \(2\). An eavesdropper only sees \(p, g, A, B\). To find the secret, they would need to solve for \(a\) in \(5^a \equiv 8 \pmod{23}\) or for \(b\) in \(5^b \equiv 19 \pmod{23}\), which is the discrete logarithm problem.

## Practice Task

Using the same public parameters \(p = 29\) and \(g = 2\):
1.  Alice chooses a private key \(a = 7\). Calculate her public key \(A\).
2.  Bob chooses a private key \(b = 11\). Calculate his public key \(B\).
3.  Show how Alice calculates the shared secret.
4.  Show how Bob calculates the shared secret.

## Self-Check Questions

1.  What mathematical problem makes Diffie-Hellman secure?
2.  If Alice's private key was \(a=3\), \(p=17\), and \(g=3\), what would her public key \(A\) be?
3.  Why is it important that \(p\) is a large prime number in real-world implementations?

## Supports

- [[skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics/microskills/diffie-hellman-key-agreement-mechanics|Diffie-Hellman Key Agreement Mechanics]]
