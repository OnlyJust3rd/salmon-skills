---
type: "medium"
title: "Z-transform Zero Calculation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/z-transform-zero-calculation|Z-transform Zero Calculation]]"
---
# Z-transform Zero Calculation

Understanding zeros is crucial when analyzing discrete-time systems using the Z-transform. Zeros, along with poles, define the behavior of a system's frequency response. For Z-transform functions, zeros are the values of \(z\) that make the function equal to zero.

## What are Zeros in a Z-transform?

A Z-transform of a discrete-time signal \(x[n]\) is represented as \(X(z)\). When \(X(z)\) is expressed as a ratio of two polynomials in \(z\), say:

\[
X(z) = \frac{N(z)}{D(z)} = \frac{b_m z^m + b_{m-1} z^{m-1} + \dots + b_1 z + b_0}{a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0}
\]

The **zeros** of \(X(z)\) are the roots of the numerator polynomial, \(N(z)\), i.e., the values of \(z\) for which \(N(z) = 0\). These are the values of \(z\) that make the Z-transform equal to zero.

The **poles** of \(X(z)\) are the roots of the denominator polynomial, \(D(z)\), i.e., the values of \(z\) for which \(D(z) = 0\). These are the values of \(z\) that make the Z-transform infinite.

## Practical Example: Finding Zeros

Let's consider a Z-transform function representing a discrete-time system's impulse response, \(h[n]\), given by its Z-transform:

\[
H(z) = \frac{2z^2 - 4z}{z^2 - 3z + 2}
\]

To find the zeros of \(H(z)\), we need to find the roots of the numerator polynomial.
The numerator is \(N(z) = 2z^2 - 4z\).

Set the numerator to zero and solve for \(z\):
\(2z^2 - 4z = 0\)

Factor out common terms:
\(2z(z - 2) = 0\)

This equation has two solutions:
1. \(2z = 0 \implies z = 0\)
2. \(z - 2 = 0 \implies z = 2\)

So, the zeros of \(H(z)\) are at \(z = 0\) and \(z = 2\).

**Important Note:** For a proper rational Z-transform function, it's often useful to factorize both the numerator and denominator into their simplest forms before identifying zeros and poles.

Let's also find the poles for completeness. The denominator is \(D(z) = z^2 - 3z + 2\).
Set the denominator to zero:
\(z^2 - 3z + 2 = 0\)

Factor the quadratic equation:
\((z - 1)(z - 2) = 0\)

The poles are at \(z = 1\) and \(z = 2\).

In this case, we have a zero and a pole at \(z=2\). When a zero and a pole coincide, they can cancel each other out in the frequency response calculation, but it's still important to identify them individually.

## Practice Task

For the following Z-transform function, find all the zeros:

\[
Y(z) = \frac{3z^3 + 6z^2 + 3z}{z^3 - 1}
\]

Show the steps involved in factoring the numerator and solving for \(z\).

## Self-Check Questions

1.  What part of a rational Z-transform function determines its zeros?
2.  In the Z-transform \(X(z) = \frac{z-1}{z+1}\), what is the zero?
3.  If the numerator of a Z-transform is \(5z\), what is a zero at \(z=0\)?
4.  Can a Z-transform have a zero at \(z = \infty\)? (Hint: Consider the behavior as \(|z| \to \infty\))

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/z-transform-zero-calculation|Z-transform Zero Calculation]]
