---
type: "medium"
title: "Modular Arithmetic Application in Cryptography"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/modular-arithmetic-application|modular-arithmetic-application]]"
learning-time-in-minutes: 6
---
# Modular Arithmetic Application in Cryptography

This lesson focuses on how modular arithmetic is used to solve practical problems in cryptography. We'll explore how its properties allow for secure operations.

## Why Modular Arithmetic in Cryptography?

Cryptography relies on mathematical operations that are easy to perform in one direction but extremely difficult to reverse. Modular arithmetic provides precisely this property. It's the foundation for many encryption algorithms.

Consider basic arithmetic: if you know $10 + 5 = 15$, it's easy to find $15 - 5 = 10$. In modular arithmetic, this reversal is much harder.

## Core Concept: Modular Arithmetic

Modular arithmetic, also known as "clock arithmetic," deals with remainders after division. When we say $a \equiv b \pmod{n}$, it means that $a$ and $b$ have the same remainder when divided by $n$.

For example, on a 12-hour clock:
* 15 o'clock is the same as 3 o'clock ($15 = 1 \times 12 + 3$, so $15 \equiv 3 \pmod{12}$).
* 27 o'clock is the same as 3 o'clock ($27 = 2 \times 12 + 3$, so $27 \equiv 3 \pmod{12}$).

Mathematically, $a \equiv b \pmod{n}$ if and only if $n$ divides $(a - b)$, or equivalently, $a = kn + b$ for some integer $k$.

### Key Properties

The properties of modular arithmetic that make it useful for cryptography include:

*   **Addition:** If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then $(a+c) \equiv (b+d) \pmod{n}$.
*   **Subtraction:** If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then $(a-c) \equiv (b-d) \pmod{n}$.
*   **Multiplication:** If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then $(a \times c) \equiv (b \times d) \pmod{n}$.

These properties allow us to perform calculations with large numbers by keeping them within a manageable range (the modulus).

## Application: Simple Substitution Cipher

A very basic cryptographic technique is a substitution cipher. In a monoalphabetic substitution cipher, each letter of the alphabet is consistently replaced by another letter or symbol. A simple variant uses modular arithmetic for shifting letters.

Let's assign numbers to letters: A=0, B=1, ..., Z=25.
We can encrypt a message by shifting each letter's corresponding number by a fixed amount, say 3, and then taking the result modulo 26 (since there are 26 letters in the alphabet). This is a Caesar cipher.

**Encryption:**
The formula for encrypting a letter $P$ (plain text, represented by its number) to $C$ (cipher text) is:
$$ C = (P + k) \pmod{26} $$
where $k$ is the shift key.

**Decryption:**
To decrypt, we reverse the process. The formula for decrypting a cipher text letter $C$ back to $P$ is:
$$ P = (C - k) \pmod{26} $$

### Worked Example: Encrypting a Message

Let's encrypt the message "HELLO" with a shift key $k=3$.

1.  **Convert letters to numbers:**
    *   H = 7
    *   E = 4
    *   L = 11
    *   L = 11
    *   O = 14

2.  **Apply the encryption formula $C = (P + 3) \pmod{26}$:**
    *   For H (7): $(7 + 3) \pmod{26} = 10 \pmod{26} = 10$. The 10th letter is K.
    *   For E (4): $(4 + 3) \pmod{26} = 7 \pmod{26} = 7$. The 7th letter is H.
    *   For L (11): $(11 + 3) \pmod{26} = 14 \pmod{26} = 14$. The 14th letter is O.
    *   For L (11): $(11 + 3) \pmod{26} = 14 \pmod{26} = 14$. The 14th letter is O.
    *   For O (14): $(14 + 3) \pmod{26} = 17 \pmod{26} = 17$. The 17th letter is R.

3.  **The encrypted message is "KHOOR".**

### Worked Example: Decrypting a Message

Now, let's decrypt "KHOOR" with the same key $k=3$.

1.  **Convert letters to numbers:**
    *   K = 10
    *   H = 7
    *   O = 14
    *   O = 14
    *   R = 17

2.  **Apply the decryption formula $P = (C - 3) \pmod{26}$:**
    *   For K (10): $(10 - 3) \pmod{26} = 7 \pmod{26} = 7$. The 7th letter is H.
    *   For H (7): $(7 - 3) \pmod{26} = 4 \pmod{26} = 4$. The 4th letter is E.
    *   For O (14): $(14 - 3) \pmod{26} = 11 \pmod{26} = 11$. The 11th letter is L.
    *   For O (14): $(14 - 3) \pmod{26} = 11 \pmod{26} = 11$. The 11th letter is L.
    *   For R (17): $(17 - 3) \pmod{26} = 14 \pmod{26} = 14$. The 14th letter is O.

3.  **The decrypted message is "HELLO".**

### Handling Negative Remainders

A common pitfall is when $C-k$ is negative. For example, if we wanted to decrypt 'B' (1) with a key of 3:
$(1 - 3) \pmod{26} = -2 \pmod{26}$.

In modular arithmetic, we want a result between 0 and $n-1$. To find the correct positive remainder for a negative number, we add the modulus until it becomes positive:
$-2 + 26 = 24$.
So, $-2 \equiv 24 \pmod{26}$. The 24th letter is Y.

This means if 'Y' was encrypted with a key of 3, it would become 'B':
$(24 + 3) \pmod{26} = 27 \pmod{26} = 1$ (which is 'B').

## Application: Modular Exponentiation

Modular exponentiation is a cornerstone of modern public-key cryptography, such as RSA. The operation $b^e \pmod{m}$ is computationally easy to calculate, but if $b$ and $e$ are very large, finding $e$ given $b^e \pmod{m}$ (the discrete logarithm problem) is computationally infeasible for appropriately chosen $m$.

$$ C = M^e \pmod{n} $$
where $M$ is the message, $e$ is the public exponent, and $n$ is the modulus.

### Worked Example: Simple Modular Exponentiation

Let's calculate $3^4 \pmod{7}$.

1.  **Calculate $3^4$:** $3 \times 3 \times 3 \times 3 = 81$.
2.  **Find the remainder when 81 is divided by 7:**
    $81 = 11 \times 7 + 4$.
    The remainder is 4.

So, $3^4 \equiv 4 \pmod{7}$.

This can be made more efficient using properties of modular arithmetic:
$3^1 \equiv 3 \pmod{7}$
$3^2 \equiv 3 \times 3 \equiv 9 \equiv 2 \pmod{7}$
$3^3 \equiv 3^2 \times 3 \equiv 2 \times 3 \equiv 6 \pmod{7}$
$3^4 \equiv 3^3 \times 3 \equiv 6 \times 3 \equiv 18 \equiv 4 \pmod{7}$

This step-by-step approach, reducing the intermediate results modulo $n$, is crucial for handling the very large numbers involved in real cryptographic algorithms.

## Summary

Modular arithmetic provides a framework for operations that are asymmetric in difficulty – easy to compute one way, hard to reverse. This property is fundamental to:

*   Simple substitution ciphers (like the Caesar cipher).
*   The computationally difficult discrete logarithm problem, which underpins many modern public-key cryptosystems via modular exponentiation.

By understanding how to perform addition, subtraction, and multiplication within a modulus, and by using modular exponentiation efficiently, you can grasp the mathematical basis of many cryptographic techniques.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/modular-arithmetic-application|Modular Arithmetic Application]]
