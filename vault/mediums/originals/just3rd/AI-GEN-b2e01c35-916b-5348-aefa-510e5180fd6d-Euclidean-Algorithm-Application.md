---
type: "medium"
title: "Euclidean Algorithm in Cryptography"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euclidean-algorithm-application|euclidean-algorithm-application]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/number-theory-in-cryptography|number-theory-in-cryptography]]"
learning-time-in-minutes: 5
---
# Euclidean Algorithm in Cryptography

The Euclidean algorithm is a powerful tool for finding the greatest common divisor (GCD) of two integers. In cryptography, this seemingly simple mathematical concept plays a crucial role in several algorithms, particularly in finding modular inverses, which are essential for decryption in many public-key cryptosystems.

## What is the Euclidean Algorithm?

The Euclidean algorithm is an efficient method for computing the greatest common divisor (GCD) of two integers. The GCD of two integers is the largest positive integer that divides both of them without leaving a remainder.

The algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number. This process is repeated until one of the numbers becomes zero, at which point the other number is the GCD. A more efficient version uses the remainder of the division instead of the difference.

$$
\text{gcd}(a, b) = \text{gcd}(b, a \pmod{b})
$$

When $$ a \pmod{b} = 0 $$, then $$ \text{gcd}(a, b) = b $$.

### Worked Example: Finding GCD

Let's find the GCD of 48 and 18.

1.  **Step 1:** Divide 48 by 18.
    $$ 48 = 2 \times 18 + 12 $$
    The remainder is 12. Now we find the GCD of 18 and 12.

2.  **Step 2:** Divide 18 by 12.
    $$ 18 = 1 \times 12 + 6 $$
    The remainder is 6. Now we find the GCD of 12 and 6.

3.  **Step 3:** Divide 12 by 6.
    $$ 12 = 2 \times 6 + 0 $$
    The remainder is 0. The algorithm stops.

The last non-zero remainder is our GCD, which is **6**.

## The Extended Euclidean Algorithm and Modular Inverses

While the standard Euclidean algorithm finds the GCD, its *extended* version is what's truly invaluable in cryptography. The Extended Euclidean Algorithm not only computes the GCD of two integers, say $$a$$ and $$b$$, but also finds integers $$x$$ and $$y$$ such that:

$$
ax + by = \text{gcd}(a, b)
$$

This equation is known as Bézout's identity.

### Application: Finding Modular Inverses

A crucial cryptographic operation is finding the *modular multiplicative inverse*. For two integers $$a$$ and $$m$$, the modular multiplicative inverse of $$a$$ modulo $$m$$ is an integer $$x$$ such that:

$$
ax \equiv 1 \pmod{m}
$$

This inverse exists if and only if $$a$$ and $$m$$ are coprime, meaning their GCD is 1.

How does the Extended Euclidean Algorithm help? If $$ \text{gcd}(a, m) = 1 $$, then Bézout's identity gives us:

$$
ax + my = 1
$$

Taking this equation modulo $$m$$:

$$
ax + my \equiv 1 \pmod{m}
$$
Since $$my \equiv 0 \pmod{m}$$, we get:
$$
ax \equiv 1 \pmod{m}
$$

This means that the integer $$x$$ found by the Extended Euclidean Algorithm is the modular inverse of $$a$$ modulo $$m$$. If $$x$$ is negative, we can add multiples of $$m$$ to make it positive.

### Worked Example: Finding a Modular Inverse

Let's find the modular inverse of 7 modulo 26. We need to find $$x$$ such that $$7x \equiv 1 \pmod{26}$$.

First, we use the Extended Euclidean Algorithm to find integers $$x$$ and $$y$$ such that $$7x + 26y = \text{gcd}(7, 26)$$.

1.  **Apply Euclidean Algorithm:**
    *   $$ 26 = 3 \times 7 + 5 $$  (Remainder 5)
    *   $$ 7 = 1 \times 5 + 2 $$   (Remainder 2)
    *   $$ 5 = 2 \times 2 + 1 $$   (Remainder 1)
    *   $$ 2 = 2 \times 1 + 0 $$   (Remainder 0)

    The GCD is 1. So, the inverse exists.

2.  **Back-substitute to find x and y:**
    Start from the second-to-last equation:
    *   $$ 1 = 5 - 2 \times 2 $$

    Now substitute the expression for the remainder 2 from the previous step:
    *   $$ 1 = 5 - 2 \times (7 - 1 \times 5) $$
    *   $$ 1 = 5 - 2 \times 7 + 2 \times 5 $$
    *   $$ 1 = 3 \times 5 - 2 \times 7 $$

    Now substitute the expression for the remainder 5:
    *   $$ 1 = 3 \times (26 - 3 \times 7) - 2 \times 7 $$
    *   $$ 1 = 3 \times 26 - 9 \times 7 - 2 \times 7 $$
    *   $$ 1 = 3 \times 26 - 11 \times 7 $$

    Rearranging to match Bézout's identity $$ax + by = \text{gcd}(a, b)$$ (where $$a=7, b=26$$):
    *   $$ (-11) \times 7 + 3 \times 26 = 1 $$

    Here, $$x = -11$$ and $$y = 3$$.

3.  **Find the positive modular inverse:**
    We found $$ -11 \times 7 \equiv 1 \pmod{26} $$.
    To get a positive inverse, we add 26 to -11:
    $$ -11 + 26 = 15 $$

    So, the modular inverse of 7 modulo 26 is **15**.

    Let's verify: $$ 7 \times 15 = 105 $$.
    $$ 105 \div 26 = 4 \text{ with a remainder of } 1 $$.
    $$ 105 \equiv 1 \pmod{26} $$. Correct!

## Cryptographic Relevance

In cryptographic systems like RSA, you often need to compute modular exponentiation, such as $$m^e \pmod{n}$$ (encryption) and $$c^d \pmod{n}$$ (decryption). The decryption exponent $$d$$ is the modular multiplicative inverse of the encryption exponent $$e$$ modulo $$ \phi(n) $$, where $$ \phi(n) $$ is Euler's totient function.

$$
ed \equiv 1 \pmod{\phi(n)}
$$

The Extended Euclidean Algorithm is precisely the method used to calculate $$d$$ given $$e$$ and $$ \phi(n) $$, ensuring that decryption can effectively reverse the encryption process.

By understanding and applying the Euclidean algorithm and its extended version, you gain a fundamental skill for working with and understanding many modern cryptographic protocols.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euclidean-algorithm-application|Euclidean Algorithm Application]]
