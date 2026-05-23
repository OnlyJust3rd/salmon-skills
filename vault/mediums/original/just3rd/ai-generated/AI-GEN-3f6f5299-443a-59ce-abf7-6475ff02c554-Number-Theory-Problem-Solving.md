---
type: "medium"
title: "Number Theory Problem Solving"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/number-theory-problem-solving|number-theory-problem-solving]]"
learning-time-in-minutes: 3
---
# Number Theory Problem Solving

This lesson focuses on applying algorithmic thinking to solve problems using number theory concepts. We'll explore how to translate number theory principles into practical computational solutions.

## What is Number Theory Problem Solving?

Number theory deals with the properties of integers. In algorithmic thinking, we leverage these properties to design efficient solutions for computational tasks. This often involves algorithms like checking for primality, finding greatest common divisors (GCD), or working with modular arithmetic. These techniques are fundamental in areas like cryptography, data compression, and error correction codes.

## Practical Example: Checking for Prime Numbers

A common problem is determining if a given number is prime. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

**Algorithm Idea:**

A naive approach would be to check every number from 2 up to \(n-1\) to see if it divides \(n\). However, we can optimize this. If a number \(n\) has a divisor \(d > \sqrt{n}\), then it must also have a divisor \(n/d < \sqrt{n}\). Therefore, we only need to check for divisors up to the square root of \(n\).

**Pseudocode:**

```
function isPrime(n):
  if n <= 1:
    return false
  if n <= 3:
    return true
  if n mod 2 == 0 or n mod 3 == 0:
    return false
  i = 5
  while i * i <= n:
    if n mod i == 0 or n mod (i + 2) == 0:
      return false
    i = i + 6
  return true
```

**Explanation:**

1.  **Base Cases:** Numbers less than or equal to 1 are not prime. 2 and 3 are prime.
2.  **Divisibility by 2 and 3:** We quickly eliminate multiples of 2 and 3.
3.  **Optimized Loop:** We then check divisors of the form \(6k \pm 1\). This is because any prime number greater than 3 can be expressed in this form. We only need to check up to \(\sqrt{n}\) because if \(n\) has a factor larger than \(\sqrt{n}\), it must also have a factor smaller than \(\sqrt{n}\).

## Practice Task: Greatest Common Divisor (GCD)

The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of them without leaving a remainder. The Euclidean algorithm is an efficient method for computing the GCD.

**Task:** Implement a function in your preferred programming language that calculates the GCD of two non-negative integers using the Euclidean algorithm.

**Euclidean Algorithm (Recursive):**

\[
\text{gcd}(a, b) = \begin{cases}
a & \text{if } b = 0 \\
\text{gcd}(b, a \pmod{b}) & \text{otherwise}
\end{cases}
\]

## Self-Check Questions

1.  What is the time complexity of the `isPrime` function described above? \(O(\sqrt{n})\) or \(O(n)\)?
2.  Using the Euclidean algorithm, what is the GCD of 48 and 18?
3.  Why is checking divisibility only up to the square root of \(n\) sufficient for primality testing?

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/number-theory-problem-solving|Number Theory Problem Solving]]
