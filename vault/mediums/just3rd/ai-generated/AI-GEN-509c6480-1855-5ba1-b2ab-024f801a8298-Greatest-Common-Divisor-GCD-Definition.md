---
type: "medium"
title: "Greatest Common Divisor (GCD)"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/number-theory-in-cryptography/microskills/greatest-common-divisor-gcd-definition|Greatest Common Divisor (GCD) Definition]]"
---
# Greatest Common Divisor (GCD)

Welcome to this lesson on fundamental concepts in Number Theory that are crucial for understanding cryptography. Today, we'll focus on defining and identifying the **Greatest Common Divisor (GCD)**.

## What is the Greatest Common Divisor (GCD)?

The **Greatest Common Divisor (GCD)** of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers without leaving a remainder.

Think of it as the biggest number that can evenly divide all the numbers you're considering.

Let's break down the terms:

*   **Divisor:** A number that divides another number exactly, with no remainder. For example, the divisors of 12 are 1, 2, 3, 4, 6, and 12.
*   **Common Divisor:** A number that is a divisor of two or more numbers. For example, 2 and 4 are common divisors of 12 and 20.
*   **Greatest Common Divisor (GCD):** The largest among all the common divisors.

The GCD is also sometimes referred to as the **Highest Common Factor (HCF)**.

### Notation

We typically denote the GCD of two numbers, say $a$ and $b$, as:

$$ \text{gcd}(a, b) $$

or sometimes as:

$$ (a, b) $$

For example, the GCD of 12 and 18 is written as $\text{gcd}(12, 18)$.

## How to Find the GCD

There are a few ways to find the GCD. For this introductory lesson, we'll focus on a method that helps solidify the definition: listing the divisors.

### Method 1: Listing Divisors

1.  **List all positive divisors** of the first number.
2.  **List all positive divisors** of the second number.
3.  **Identify the common divisors** that appear in both lists.
4.  The **greatest** number among these common divisors is the GCD.

**Example:** Find the GCD of 24 and 36.

1.  **Divisors of 24:** 1, 2, 3, 4, 6, 8, 12, 24
2.  **Divisors of 36:** 1, 2, 3, 4, 6, 9, 12, 18, 36
3.  **Common Divisors:** 1, 2, 3, 4, 6, 12
4.  **Greatest Common Divisor:** The largest number in the common divisors list is 12.

Therefore, $$ \text{gcd}(24, 36) = 12 $$.

**Example:** Find the GCD of 15 and 25.

1.  **Divisors of 15:** 1, 3, 5, 15
2.  **Divisors of 25:** 1, 5, 25
3.  **Common Divisors:** 1, 5
4.  **Greatest Common Divisor:** The largest number in the common divisors list is 5.

Therefore, $$ \text{gcd}(15, 25) = 5 $$.

## Special Cases

*   **GCD of a number and itself:** The GCD of any non-zero number and itself is the number itself. For example, $$ \text{gcd}(7, 7) = 7 $$.
*   **GCD involving 1:** The GCD of any integer and 1 is always 1. For example, $$ \text{gcd}(10, 1) = 1 $$.
*   **GCD of 0 and another number:** The GCD of 0 and any non-zero integer $a$ is the absolute value of $a$. This is because every integer divides 0, so the divisors of 0 are all integers. The largest divisor of $a$ is $|a|$. For example, $$ \text{gcd}(0, 5) = 5 $$ and $$ \text{gcd}(0, -5) = 5 $$.
*   **GCD of 0 and 0:** The GCD of 0 and 0 is typically undefined, but in some contexts, it's taken as 0. For cryptographic purposes, we usually deal with non-zero integers.

## Why is GCD Important in Cryptography?

The concept of GCD is foundational for several cryptographic algorithms. For instance:

*   It's used in the **Euclidean Algorithm** (which we'll cover next) to efficiently calculate the GCD.
*   It plays a role in determining if two numbers are **coprime** (their GCD is 1). Coprime numbers are essential for operations in modular arithmetic, like finding modular multiplicative inverses, which are critical for encryption and decryption.
*   It's a building block for concepts like **Euler's Totient Theorem**, which is used in RSA encryption.

Understanding the GCD is your first step towards grasping these more complex cryptographic ideas.

## Supports

- [[skills/security/cybersecurity/number-theory-in-cryptography/microskills/greatest-common-divisor-gcd-definition|Greatest Common Divisor (GCD) Definition]]
