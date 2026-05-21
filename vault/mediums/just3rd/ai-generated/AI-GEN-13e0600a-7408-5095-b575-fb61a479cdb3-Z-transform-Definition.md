---
type: "medium"
title: "Z-transform Definition: Unveiling the Mathematical Core"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/complex-frequency-domain-analysis/microskills/z-transform-definition|z-transform-definition]]"
---
# Z-transform Definition: Unveiling the Mathematical Core

In the realm of signal processing and system analysis, the Z-transform is a fundamental tool for understanding discrete-time signals and systems. It transforms a discrete-time signal from the time domain into a function in the complex 'z-domain'. This transformation allows us to analyze system properties and manipulate signals more easily.

### What is the Z-transform?

The Z-transform of a discrete-time signal \(x[n]\) is a power series defined as:

\[ X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n} \]

Here:
*   \(x[n]\) represents the discrete-time signal, where \(n\) is the time index (an integer).
*   \(z\) is a complex variable, often expressed in polar form as \(z = r e^{j\omega}\), where \(r\) is the magnitude and \(\omega\) is the angle.
*   \(X(z)\) is the Z-transform of \(x[n]\), a function of the complex variable \(z\).

This definition essentially converts a sequence of numbers into a function of a complex variable. This function \(X(z)\) encapsulates important information about the original signal \(x[n]\).

### Practical Example: A Simple Unit Step Signal

Let's consider a basic discrete-time signal: the unit step signal, defined as \(x[n] = u[n]\), where \(u[n] = 1\) for \(n \ge 0\) and \(u[n] = 0\) for \(n < 0\).

To find its Z-transform, we apply the definition:

\[ X(z) = \sum_{n=-\infty}^{\infty} u[n] z^{-n} \]

Since \(u[n] = 0\) for \(n < 0\), the summation starts from \(n=0\). And since \(u[n] = 1\) for \(n \ge 0\), the terms become \(1 \cdot z^{-n}\).

\[ X(z) = \sum_{n=0}^{\infty} 1 \cdot z^{-n} = \sum_{n=0}^{\infty} (z^{-1})^n \]

This is a geometric series with the first term \(a = 1\) (for \(n=0\)) and the common ratio \(r = z^{-1}\). A geometric series converges if the absolute value of the common ratio is less than 1, i.e., \(|z^{-1}| < 1\), which is equivalent to \(|z| > 1\).

The sum of an infinite geometric series is given by \( \frac{a}{1-r} \). Applying this:

\[ X(z) = \frac{1}{1 - z^{-1}} \]

This can also be written as:

\[ X(z) = \frac{z}{z - 1} \]

This result, \( \frac{z}{z-1} \), is the Z-transform of the unit step signal \(u[n]\), valid for \(|z| > 1\). The condition \(|z| > 1\) defines a region in the complex plane where the Z-transform converges, known as the Region of Convergence (ROC), which we will explore further.

### Practice Task

Determine the Z-transform of the discrete-time signal \(x[n] = a^n u[n]\), where \(a\) is a constant and \(u[n]\) is the unit step function.

### Self-Check Questions

1.  What is the fundamental purpose of the Z-transform in signal processing?
2.  Write down the mathematical definition of the Z-transform.
3.  For the unit step signal \(u[n]\), what is its Z-transform?

## Supports

- [[skills/mathematics/complex-frequency-domain-analysis/microskills/z-transform-definition|Z-transform Definition]]
