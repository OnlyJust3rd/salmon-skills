---
type: "medium"
title: "GCD Application in Cryptography"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/gcd-application|gcd-application]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/number-theory-in-cryptography|number-theory-in-cryptography]]"
learning-time-in-minutes: 4
---
# GCD Application in Cryptography

This lesson focuses on applying the Greatest Common Divisor (GCD) to solve simple cryptographic problems. Understanding GCD is a fundamental step in grasping how number theory powers modern encryption.

## What is GCD?

The Greatest Common Divisor (GCD) of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers without leaving a remainder.

For example:
*   The GCD of 12 and 18 is 6. (Divisors of 12: 1, 2, 3, 4, 6, 12. Divisors of 18: 1, 2, 3, 6, 9, 18. Common divisors: 1, 2, 3, 6. The greatest is 6.)
*   The GCD of 7 and 13 is 1. (These are prime numbers, so their only common positive divisor is 1.)

### Why is GCD Important in Cryptography?

In cryptography, GCD plays a crucial role in:

1.  **Key Generation:** Determining valid keys and ensuring they have specific properties.
2.  **Algorithm Security:** Ensuring certain mathematical relationships hold true for secure operations.
3.  **Finding Multiplicative Inverses:** A core operation in many public-key cryptosystems.

## Applying GCD: The Extended Euclidean Algorithm

While calculating GCD for small numbers is straightforward, for large numbers used in cryptography, we rely on the **Euclidean Algorithm**. Even more importantly, its extension, the **Extended Euclidean Algorithm**, is key.

The **Extended Euclidean Algorithm** not only finds the GCD of two integers, say $a$ and $b$, but it also finds integers $x$ and $y$ such that:

$$ ax + by = \text{gcd}(a, b) $$

This equation is known as Bezout's identity.

### Cryptographic Application: Finding Multiplicative Inverses

One of the most direct applications of the Extended Euclidean Algorithm is finding the **multiplicative inverse** modulo $n$.

The multiplicative inverse of an integer $a$ modulo $n$ is an integer $a^{-1}$ such that:

$$ a \cdot a^{-1} \equiv 1 \pmod{n} $$

For the multiplicative inverse to exist, $a$ and $n$ must be **coprime**, meaning their GCD is 1:

$$ \text{gcd}(a, n) = 1 $$

If $\text{gcd}(a, n) = 1$, the Extended Euclidean Algorithm will find integers $x$ and $y$ such that:

$$ ax + ny = 1 $$

Taking this equation modulo $n$:

$$ ax + ny \equiv 1 \pmod{n} $$

Since $ny \equiv 0 \pmod{n}$ (because $ny$ is a multiple of $n$), we get:

$$ ax \equiv 1 \pmod{n} $$

This means that $x$ is the multiplicative inverse of $a$ modulo $n$. If $x$ is negative, we can add multiples of $n$ to it to get a positive inverse.

### Worked Example: Finding a Multiplicative Inverse

Let's find the multiplicative inverse of $a=7$ modulo $n=26$.

1.  **Check for Coprimality:**
    Is $\text{gcd}(7, 26) = 1$?
    *   Divisors of 7: 1, 7
    *   Divisors of 26: 1, 2, 13, 26
    *   Yes, $\text{gcd}(7, 26) = 1$. So, an inverse exists.

2.  **Apply Extended Euclidean Algorithm:**
    We want to find integers $x$ and $y$ such that $7x + 26y = 1$.

    We use the standard Euclidean Algorithm steps and track the coefficients:

    *   $26 = 3 \cdot 7 + 5$
    *   $7 = 1 \cdot 5 + 2$
    *   $5 = 2 \cdot 2 + 1$  (This is our GCD: 1)

    Now, we work backwards to express 1 in terms of 7 and 26:

    *   From $5 = 2 \cdot 2 + 1$, we get $1 = 5 - 2 \cdot 2$.
    *   Substitute the expression for $2$ from $7 = 1 \cdot 5 + 2$, which means $2 = 7 - 1 \cdot 5$:
        $1 = 5 - 2 \cdot (7 - 1 \cdot 5)$
        $1 = 5 - 2 \cdot 7 + 2 \cdot 5$
        $1 = 3 \cdot 5 - 2 \cdot 7$
    *   Substitute the expression for $5$ from $26 = 3 \cdot 7 + 5$, which means $5 = 26 - 3 \cdot 7$:
        $1 = 3 \cdot (26 - 3 \cdot 7) - 2 \cdot 7$
        $1 = 3 \cdot 26 - 9 \cdot 7 - 2 \cdot 7$
        $1 = 3 \cdot 26 - 11 \cdot 7$

    So, we have:
    $(-11) \cdot 7 + 3 \cdot 26 = 1$

    This is in the form $ax + ny = 1$, where $a=7$, $n=26$, $x=-11$, and $y=3$.

3.  **Interpret the Result:**
    The coefficient $x = -11$ is the multiplicative inverse of 7 modulo 26.
    However, we usually prefer a positive inverse in the range $[1, n-1]$.
    To find the positive inverse, we add $n$ to $x$ until it's positive:
    $-11 + 26 = 15$

    So, the multiplicative inverse of 7 modulo 26 is 15.

4.  **Verification:**
    Let's check if $7 \cdot 15 \equiv 1 \pmod{26}$:
    $7 \cdot 15 = 105$
    $105 \div 26 = 4$ with a remainder of $1$.
    $105 = 4 \cdot 26 + 1$
    So, $105 \equiv 1 \pmod{26}$. This is correct!

### Conclusion

The GCD, particularly when found using the Extended Euclidean Algorithm, is a foundational tool in cryptography. Its ability to guarantee the existence of and compute multiplicative inverses is essential for the functioning of algorithms like RSA, where such inverses are used in decryption and signature verification. Mastering this application is a key step in understanding how number theory secures our digital communications.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/gcd-application|GCD Application]]
