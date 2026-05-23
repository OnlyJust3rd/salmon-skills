---
type: "medium"
title: "Applying Euler's Phi Function in Cryptography"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euler-s-phi-function-application|euler-s-phi-function-application]]"
learning-time-in-minutes: 5
---
# Applying Euler's Phi Function in Cryptography

In the realm of cryptography, efficiency and security are paramount. Number theory provides the mathematical backbone for many cryptographic systems. You've learned about modular arithmetic, GCD, and the Euclidean algorithm. Now, we'll focus on a powerful tool derived from these concepts: Euler's Phi function.

## What is Euler's Phi Function?

Euler's Phi function, denoted as $$ \phi(n) $$, counts the number of positive integers less than or equal to $$ n $$ that are relatively prime to $$ n $$. Two integers are relatively prime if their greatest common divisor (GCD) is 1.

**Example:**
Let's find $$ \phi(10) $$.
The positive integers less than or equal to 10 are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
Now, let's find their GCD with 10:
* $$ \text{gcd}(1, 10) = 1 $$
* $$ \text{gcd}(2, 10) = 2 $$
* $$ \text{gcd}(3, 10) = 1 $$
* $$ \text{gcd}(4, 10) = 2 $$
* $$ \text{gcd}(5, 10) = 5 $$
* $$ \text{gcd}(6, 10) = 2 $$
* $$ \text{gcd}(7, 10) = 1 $$
* $$ \text{gcd}(8, 10) = 2 $$
* $$ \text{gcd}(9, 10) = 1 $$
* $$ \text{gcd}(10, 10) = 10 $$

The numbers that are relatively prime to 10 are 1, 3, 7, and 9.
Therefore, $$ \phi(10) = 4 $$.

### Calculating $$ \phi(n) $$

For a prime number $$ p $$, $$ \phi(p) = p - 1 $$. This is because all numbers from 1 to $$ p-1 $$ are relatively prime to $$ p $$.

For a number $$ n $$ with a prime factorization $$ n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r} $$, the formula for $$ \phi(n) $$ is:
$$ \phi(n) = n \left(1 - \frac{1}{p_1}\right) \left(1 - \frac{1}{p_2}\right) \cdots \left(1 - \frac{1}{p_r}\right) $$
This can also be written as:
$$ \phi(n) = p_1^{k_1-1}(p_1-1) \cdot p_2^{k_2-1}(p_2-1) \cdots p_r^{k_r-1}(p_r-1) $$

**Example:**
Let's calculate $$ \phi(12) $$.
The prime factorization of 12 is $$ 2^2 \cdot 3^1 $$.
Using the formula:
$$ \phi(12) = 12 \left(1 - \frac{1}{2}\right) \left(1 - \frac{1}{3}\right) = 12 \left(\frac{1}{2}\right) \left(\frac{2}{3}\right) = 12 \cdot \frac{2}{6} = 4 $$
Alternatively, using the second form:
$$ \phi(12) = 2^{2-1}(2-1) \cdot 3^{1-1}(3-1) = 2^1(1) \cdot 3^0(2) = 2 \cdot 1 \cdot 1 \cdot 2 = 4 $$
The numbers relatively prime to 12 are 1, 5, 7, 11. So $$ \phi(12) = 4 $$.

## Euler's Totient Theorem

Euler's Totient Theorem is a cornerstone in applying the Phi function. It states that if $$ a $$ and $$ n $$ are relatively prime positive integers (i.e., $$ \text{gcd}(a, n) = 1 $$), then:
$$ a^{\phi(n)} \equiv 1 \pmod{n} $$

This theorem is incredibly useful for simplifying modular exponentiation, which is a fundamental operation in many cryptographic algorithms.

## Application: RSA Cryptography (Simplified)

Euler's Phi function is most famously used in the RSA public-key cryptosystem. While a full RSA implementation involves many details, the core idea of how encryption and decryption work relies on Euler's Totient Theorem.

In RSA, two large prime numbers, $$ p $$ and $$ q $$, are chosen.
A modulus $$ n $$ is calculated as $$ n = p \cdot q $$.
The value $$ \phi(n) $$ is crucial and is calculated as:
$$ \phi(n) = \phi(p \cdot q) = (p-1)(q-1) $$
(This holds because $$ p $$ and $$ q $$ are distinct primes, making them relatively prime.)

**Key Idea:**
RSA leverages the fact that if we have a message $$ M $$ and encrypt it as $$ C = M^e \pmod{n} $$, we can decrypt it using a private exponent $$ d $$ such that $$ M = C^d \pmod{n} $$. The relationship between $$ e $$, $$ d $$, and $$ \phi(n) $$ is that $$ e \cdot d \equiv 1 \pmod{\phi(n)} $$. This means $$ e $$ and $$ d $$ are modular multiplicative inverses modulo $$ \phi(n) $$.

**How Euler's Totient Theorem is applied:**
When you decrypt: $$ C^d \pmod{n} = (M^e)^d \pmod{n} = M^{ed} \pmod{n} $$.
Since $$ ed \equiv 1 \pmod{\phi(n)} $$, we can write $$ ed = k \cdot \phi(n) + 1 $$ for some integer $$ k $$.
So, $$ M^{ed} \pmod{n} = M^{k \cdot \phi(n) + 1} \pmod{n} = (M^{\phi(n)})^k \cdot M^1 \pmod{n} $$.

If $$ M $$ is relatively prime to $$ n $$, by Euler's Totient Theorem: $$ M^{\phi(n)} \equiv 1 \pmod{n} $$.
Therefore, $$ (M^{\phi(n)})^k \cdot M^1 \pmod{n} \equiv 1^k \cdot M \pmod{n} \equiv M \pmod{n} $$.

This shows that decryption successfully recovers the original message $$ M $$. The security of RSA relies on the difficulty of factoring $$ n $$ into $$ p $$ and $$ q $$, which makes it hard to compute $$ \phi(n) = (p-1)(q-1) $$ without knowing $$ p $$ and $$ q $$.

## Worked Example: Simplified Encryption/Decryption

Let's use small prime numbers to illustrate.
1.  **Choose primes:** $$ p = 3 $$, $$ q = 11 $$
2.  **Calculate modulus:** $$ n = p \cdot q = 3 \cdot 11 = 33 $$
3.  **Calculate $$ \phi(n) $$:** $$ \phi(33) = (3-1)(11-1) = 2 \cdot 10 = 20 $$
4.  **Choose public exponent $$ e $$:** Pick $$ e $$ such that $$ 1 < e < \phi(n) $$ and $$ \text{gcd}(e, \phi(n)) = 1 $$. Let's choose $$ e = 7 $$. $$ \text{gcd}(7, 20) = 1 $$.
5.  **Calculate private exponent $$ d $$:** Find $$ d $$ such that $$ e \cdot d \equiv 1 \pmod{\phi(n)} $$, i.e., $$ 7d \equiv 1 \pmod{20} $$. We can use the Extended Euclidean Algorithm or trial and error.
    *   $$ 7 \cdot 1 = 7 \pmod{20} $$
    *   $$ 7 \cdot 2 = 14 \pmod{20} $$
    *   $$ 7 \cdot 3 = 21 \equiv 1 \pmod{20} $$
    So, $$ d = 3 $$.

**Public Key:** $$ (n, e) = (33, 7) $$
**Private Key:** $$ (n, d) = (33, 3) $$

**Encryption:**
Let's encrypt a message $$ M = 5 $$. (Note: For simplicity, we choose $$ M < n $$ and $$ \text{gcd}(M, n) = 1 $$.)
$$ C = M^e \pmod{n} = 5^7 \pmod{33} $$
$$ 5^1 = 5 \pmod{33} $$
$$ 5^2 = 25 \pmod{33} $$
$$ 5^3 = 25 \cdot 5 = 125 \equiv 26 \pmod{33} $$
$$ 5^4 \equiv 26 \cdot 5 = 130 \equiv 31 \equiv -2 \pmod{33} $$
$$ 5^7 = 5^3 \cdot 5^4 \equiv 26 \cdot (-2) = -52 \equiv -52 + 2 \cdot 33 = -52 + 66 = 14 \pmod{33} $$
So, the ciphertext $$ C = 14 $$.

**Decryption:**
$$ M = C^d \pmod{n} = 14^3 \pmod{33} $$
$$ 14^1 = 14 \pmod{33} $$
$$ 14^2 = 196 $$
$$ 196 \div 33 $$
$$ 33 \times 5 = 165 $$
$$ 196 - 165 = 31 $$
So, $$ 14^2 \equiv 31 \equiv -2 \pmod{33} $$
$$ 14^3 = 14^2 \cdot 14 \equiv (-2) \cdot 14 = -28 \pmod{33} $$
$$ -28 \equiv -28 + 33 = 5 \pmod{33} $$
The decrypted message is $$ M = 5 $$, which matches our original message.

This simplified example shows how Euler's Phi function, through Euler's Totient Theorem, is fundamental to creating a system where information can be encrypted with one key and decrypted with another, securely.

## Supports

- [[skills/computing/security-privacy/cybersecurity/number-theory-in-cryptography/microskills/euler-s-phi-function-application|Euler's Phi Function Application]]
