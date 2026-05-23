---
type: "medium"
title: "Zeros of a Transfer Function"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/zeros-definition|zeros-definition]]"
learning-time-in-minutes: 2
---
# Zeros of a Transfer Function

In our exploration of Complex Frequency Domain Analysis, understanding the building blocks of transfer functions is crucial. One of these fundamental building blocks is the concept of a **zero**.

## What are Zeros?

In the context of a transfer function, a **zero** is a value of the complex variable \(s\) (for the Laplace transform) or \(z\) (for the Z-transform) that makes the numerator of the transfer function equal to zero. When the numerator is zero, the entire transfer function becomes zero.

Think of a transfer function as describing how a system responds to an input. Zeros represent frequencies (or complex frequencies) where the system completely *blocks* or *eliminates* that specific input component from the output.

If \(H(s)\) is a transfer function, and \(N(s)\) is its numerator polynomial, then the zeros of \(H(s)\) are the roots of the equation \(N(s) = 0\).

## Practical Scenario

Imagine you are designing a simple audio filter. You want to create a filter that significantly reduces the volume of a specific high-frequency sound.

Let's say your filter's transfer function is represented by \(H(z)\). If you've designed this filter such that there's a zero at \(z = 0.9\), this means that any input signal component that corresponds to \(z = 0.9\) will be attenuated to zero in the output of the filter. In simpler terms, that particular frequency will not pass through the filter.

The location of these zeros on the complex plane tells us about the characteristics of the system's frequency response.

## Practice Task

Consider the following transfer function in the Z-domain:

\[
H(z) = \frac{z - 0.5}{z^2 - 0.7z + 0.12}
\]

Identify the zeros of this transfer function.

## Self-Check Questions

1.  What is a zero of a transfer function?
2.  What mathematical condition must be met for a value to be considered a zero of a transfer function?
3.  What is the impact of a zero on a system's output for a specific input component?

## Supports

- [[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/zeros-definition|Zeros Definition]]
