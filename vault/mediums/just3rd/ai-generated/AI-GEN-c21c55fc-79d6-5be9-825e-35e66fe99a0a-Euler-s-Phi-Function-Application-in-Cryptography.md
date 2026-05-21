---
type: "medium"
title: "Euler's Phi Function in Cryptography"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/number-theory-in-cryptography/microskills/euler-s-phi-function-application-in-cryptography|euler-s-phi-function-application-in-cryptography]]"
---
# Euler's Phi Function in Cryptography

Euler's totient function, often denoted as $\phi(n)$, plays a crucial role in several cryptographic algorithms, particularly those based on number theory. It quantifies the number of positive integers less than or equal to a given integer $n$ that are relatively prime to $n$. This means we're counting numbers $k$ such that $1 \le k \le n$ and $\text{gcd}(k, n) = 1$.

## What is Euler's Phi Function?

Let's break down what $\phi(n)$ actually tells us.

*   **Relatively Prime:** Two integers are relatively prime if their greatest common divisor (GCD) is 1. For example, 7 and 10 are relatively prime because their only common positive divisor is 1 ($\text{gcd}(7, 10) = 1$).
*   **Counting:** $\phi(n)$ is the count of these relatively prime numbers up to $n$.

**Example:**

Let's calculate $\phi(10)$:
The positive integers less than or equal to 10 are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
Now, let's find their GCD with 10:
*   $\text{gcd}(1, 10) = 1$ (relatively prime)
*   $\text{gcd}(2, 10) = 2$
*   $\text{gcd}(3, 10) = 1$ (relatively prime)
*   $\text{gcd}(4, 10) = 2$
*   $\text{gcd}(5, 10) = 5$
*   $\text{gcd}(6, 10) = 2$
*   $\text{gcd}(7, 10) = 1$ (relatively prime)
*   $\text{gcd}(8, 10) = 2$
*   $\text{gcd}(9, 10) = 1$ (relatively prime)
*   $\text{gcd}(10, 10) = 10$

The numbers relatively prime to 10 are 1, 3, 7, and 9.
Therefore, $\phi(10) = 4$.

## Calculating Euler's Phi Function

While we can manually count for small numbers, there's a more efficient formula for calculating $\phi(n)$, especially when $n$ is large and we know its prime factorization.

If the prime factorization of $n$ is given by $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$, where $p_1, p_2, \ldots, p_r$ are distinct prime factors and $k_1, k_2, \ldots, k_r$ are their positive integer exponents, then:

$$
\phi(n) = n \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right)
$$

This formula can also be written as:

$$
\phi(n) = (p_1^{k_1} - p_1^{k_1-1}) (p_2^{k_2} - p_2^{k_2-1}) \cdots (p_r^{k_r} - p_r^{k_r-1})
$$

**Example using the formula:**

Let's calculate $\phi(10)$ using its prime factorization.
The prime factorization of 10 is $2^1 \times 5^1$. So, $p_1 = 2$, $k_1 = 1$, $p_2 = 5$, $k_2 = 1$.

Using the first formula:
$$
\phi(10) = 10 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{5}\right)
$$
$$
\phi(10) = 10 \left(\frac{1}{2}\right) \left(\frac{4}{5}\right)
$$
$$
\phi(10) = 10 \times \frac{4}{10} = 4
$$

Using the second formula:
$$
\phi(10) = (2^1 - 2^{1-1})(5^1 - 5^{1-1})
$$
$$
\phi(10) = (2^1 - 2^0)(5^1 - 5^0)
$$
$$
\phi(10) = (2 - 1)(5 - 1)
$$
$$
\phi(10) = (1)(4) = 4
$$

Both formulas give the same result, 4.

## Application in Cryptography: Euler's Theorem

Euler's totient function is fundamental to Euler's Theorem. This theorem states that if $a$ and $n$ are relatively prime positive integers, then:

$$
a^{\phi(n)} \equiv 1 \pmod{n}
$$

This theorem is the bedrock for many asymmetric encryption algorithms, most notably **RSA**.

### How it's used in RSA:

RSA relies on the difficulty of factoring large numbers. In RSA, a public key and a private key are generated. The public key can be used to encrypt messages, and the private key can be used to decrypt them.

1.  **Key Generation:**
    *   Two large prime numbers, $p$ and $q$, are chosen.
    *   A modulus $n$ is calculated as $n = p \times q$.
    *   Euler's totient function for $n$ is calculated: $\phi(n) = \phi(pq) = (p-1)(q-1)$ (since $p$ and $q$ are distinct primes).
    *   A public exponent $e$ is chosen such that $1 < e < \phi(n)$ and $\text{gcd}(e, \phi(n)) = 1$.
    *   A private exponent $d$ is calculated such that $d \times e \equiv 1 \pmod{\phi(n)}$. This means $d$ is the modular multiplicative inverse of $e$ modulo $\phi(n)$.

2.  **Encryption:**
    *   To encrypt a message $M$ (represented as a number) into ciphertext $C$, the sender uses the public key $(n, e)$:
        $$
        C = M^e \pmod{n}
        $$

3.  **Decryption:**
    *   To decrypt the ciphertext $C$ back into the original message $M$, the receiver uses their private key $(n, d)$:
        $$
        M = C^d \pmod{n}
        $$

### Why does this work?

Using Euler's Theorem, we can show how decryption works:

We have $C = M^e \pmod{n}$.
So, $C^d \pmod{n} = (M^e)^d \pmod{n} = M^{ed} \pmod{n}$.

Since $e \times d \equiv 1 \pmod{\phi(n)}$, we can write $e \times d = k \times \phi(n) + 1$ for some integer $k$.
Therefore, $M^{ed} \pmod{n} = M^{k \times \phi(n) + 1} \pmod{n} = (M^{\phi(n)})^k \times M^1 \pmod{n}$.

By Euler's Theorem, if $\text{gcd}(M, n) = 1$, then $M^{\phi(n)} \equiv 1 \pmod{n}$.
So, $(1)^k \times M \pmod{n} = M \pmod{n}$.

This process of encryption and decryption relies directly on the properties of modular arithmetic and Euler's Theorem, which in turn depends on Euler's Phi function. The security of RSA hinges on the computational difficulty of finding the prime factors $p$ and $q$ given $n$, which is necessary to calculate $\phi(n)$ and thus derive the private key $d$.

In summary, Euler's Phi function is not just a mathematical curiosity; it's a foundational element that enables secure communication in modern cryptography.

## Supports

- [[skills/security/cybersecurity/number-theory-in-cryptography/microskills/euler-s-phi-function-application-in-cryptography|Euler's Phi Function Application in Cryptography]]
