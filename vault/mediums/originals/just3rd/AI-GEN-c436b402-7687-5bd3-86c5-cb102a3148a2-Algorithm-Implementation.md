---
type: "medium"
title: "Implementing the Euclidean Algorithm for GCD"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/algorithm-implementation|algorithm-implementation]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/algorithmic-thinking/algorithmic-thinking|algorithmic-thinking]]"
learning-time-in-minutes: 3
---
# Implementing the Euclidean Algorithm for GCD

This lesson focuses on coding computational solutions using number theory principles, specifically implementing the Euclidean Algorithm to find the Greatest Common Divisor (GCD) of two numbers. This is a fundamental step in many number theory applications.

## What is the Euclidean Algorithm?

The Euclidean Algorithm is an efficient method for computing the greatest common divisor (GCD) of two integers. The GCD is the largest positive integer that divides both numbers without leaving a remainder. The algorithm is based on the principle that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number. This process is repeated until one of the numbers becomes zero, at which point the other number is the GCD.

A more efficient version uses the modulo operator: the GCD of two numbers `a` and `b` (where `a > b`) is the same as the GCD of `b` and the remainder of `a` divided by `b` (i.e., `a % b`).

## Practical Example: File Compression

Imagine you're developing a file compression tool that uses algorithms to represent data more efficiently. A crucial step in some compression techniques involves reducing fractions to their simplest form. To do this, you need to divide both the numerator and the denominator by their Greatest Common Divisor (GCD).

Let's say you have a ratio represented as 120/180. To simplify this fraction, you need to find the GCD of 120 and 180.

Using the Euclidean Algorithm:

1.  `GCD(180, 120)`:  \(180 \mod 120 = 60\). Now we need `GCD(120, 60)`.
2.  `GCD(120, 60)`:  \(120 \mod 60 = 0\). Since the remainder is 0, the GCD is the current smaller number, which is 60.

So, the GCD of 120 and 180 is 60. The simplified fraction is \(120/60\) / \(180/60\), which equals 2/3.

## Algorithm Implementation (Python)

Here's how you can implement the Euclidean Algorithm in Python:

```python
def gcd(a, b):
    """
    Computes the Greatest Common Divisor (GCD) of two numbers
    using the Euclidean Algorithm.
    """
    while b:
        a, b = b, a % b
    return a

# Example usage:
num1 = 120
num2 = 180
result = gcd(num1, num2)
print(f"The GCD of {num1} and {num2} is: {result}") # Output: The GCD of 120 and 180 is: 60

num3 = 48
num4 = 18
result2 = gcd(num3, num4)
print(f"The GCD of {num3} and {num4} is: {result2}") # Output: The GCD of 48 and 18 is: 6
```

In this code, the `while b:` loop continues as long as `b` is not zero. In each iteration, `a` takes the value of `b`, and `b` takes the value of the remainder of `a` divided by `b`. When `b` becomes zero, the loop terminates, and the current value of `a` is the GCD.

## Practice Task

Implement the Euclidean Algorithm in a programming language of your choice (e.g., JavaScript, Java, C++). Test your implementation with the following pairs of numbers:

1.  `a = 56`, `b = 98`
2.  `a = 101`, `b = 103` (prime numbers)
3.  `a = 0`, `b = 25`

## Self-Check Questions

1.  What is the GCD of 75 and 50?
2.  If `gcd(a, b)` returns 0, what does that imply about the input numbers `a` and `b`?
3.  Why is the modulo operator version of the Euclidean Algorithm generally more efficient than the subtraction version?

## Supports

- [[skills/computing/computer-science/algorithms/algorithmic-thinking/microskills/algorithm-implementation|Algorithm Implementation]]
- [[skills/computing/computer-science/algorithms/algorithms/microskills/algorithm-implementation|Algorithm Implementation]]
