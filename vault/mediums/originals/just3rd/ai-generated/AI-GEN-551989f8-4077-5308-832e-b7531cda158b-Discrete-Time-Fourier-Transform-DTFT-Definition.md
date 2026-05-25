---
type: "medium"
title: "Discrete-Time Fourier Transform (DTFT) Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/discrete-time-fourier-transform-dtft-definition|discrete-time-fourier-transform-dtft-definition]]"
learning-time-in-minutes: 3
---
# Discrete-Time Fourier Transform (DTFT) Definition

This lesson focuses on remembering the mathematical definition of the Discrete-Time Fourier Transform (DTFT), a key concept within Fourier Transform Analysis. Understanding this definition is fundamental to analyzing discrete-time signals in the frequency domain.

## What is the DTFT?

The Discrete-Time Fourier Transform (DTFT) is a mathematical tool that transforms a discrete-time signal, which exists only at specific points in time, into a continuous function of frequency. This allows us to see the frequency components present in the signal.

Think of it like taking a sound recording (a discrete-time signal) and breaking it down into its constituent musical notes (frequencies). The DTFT does this mathematically.

## The Mathematical Definition

The DTFT of a discrete-time signal \(x[n]\) is denoted by \(X(e^{j\omega})\) and is defined by the following summation:

\[
X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}
\]

Let's break down this formula:

*   **\(X(e^{j\omega})\)**: This represents the DTFT of the signal \(x[n]\). The term \(e^{j\omega}\) signifies that the transformation maps the discrete-time domain to a frequency domain, where \(\omega\) is the angular frequency. The subscript "e" indicates that it's a transform of a discrete-time signal.
*   **\(\sum_{n=-\infty}^{\infty}\)**: This is a summation that runs over all possible time instances \(n\). This implies that the DTFT considers the entire infinite duration of the discrete-time signal.
*   **\(x[n]\)**: This is the discrete-time signal itself. It's a sequence of values indexed by time \(n\), where \(n\) is an integer (e.g., ..., -2, -1, 0, 1, 2, ...).
*   **\(e^{-j\omega n}\)**: This is a complex exponential term. It represents a sinusoid at angular frequency \(\omega\). The multiplication of \(x[n]\) with this complex exponential essentially "checks" how much of that specific frequency \(\omega\) is present in the signal \(x[n]\) at time \(n\).
    *   \(j\) is the imaginary unit, where \(j^2 = -1\).
    *   \(\omega\) is the angular frequency, typically measured in radians per sample.

**In simpler terms:** The DTFT calculates the DTFT of a signal by summing up the products of each sample of the signal and a complex exponential at a specific frequency \(\omega\). This summation reveals the amplitude and phase of each frequency component present in the signal.

## Key Characteristics of the DTFT

*   **Frequency Domain Representation**: The output of the DTFT, \(X(e^{j\omega})\), is a continuous function of frequency \(\omega\).
*   **Periodicity**: The DTFT is always periodic in \(\omega\) with a period of \(2\pi\). This is because \(e^{j(\omega + 2\pi)n} = e^{j\omega n} e^{j2\pi n} = e^{j\omega n} (1) = e^{j\omega n}\) for any integer \(n\). Therefore, we only need to examine the frequency spectrum over an interval of \(2\pi\), for example, from \(-\pi\) to \(\pi\).
*   **Convergence**: The DTFT converges if the signal \(x[n]\) is absolutely summable, i.e., \(\sum_{n=-\infty}^{\infty} |x[n]| < \infty\). Many practical signals might not strictly satisfy this condition, but they can often be analyzed using modified approaches or by considering specific properties.

## Example

Let's consider a simple discrete-time signal:

\(x[n] = \delta[n]\) (the discrete-time unit impulse at \(n=0\))

To find its DTFT, we apply the definition:

\[
X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} \delta[n] e^{-j\omega n}
\]

Due to the property of the unit impulse function (\(\delta[n]\) is 1 only at \(n=0\) and 0 otherwise), only the term at \(n=0\) will be non-zero:

\[
X(e^{j\omega}) = \delta[0] e^{-j\omega \cdot 0} = 1 \cdot e^0 = 1
\]

So, the DTFT of a unit impulse is 1. This means that a single impulse signal contains all frequencies with equal amplitude and zero phase.

## In Summary

The DTFT is a powerful tool for understanding the frequency content of discrete-time signals. The core of its definition lies in the summation of the signal samples multiplied by complex exponentials representing different frequencies.

**Remember the definition:**

\[
X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}
\]

## Supports

- [[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/discrete-time-fourier-transform-dtft-definition|Discrete-Time Fourier Transform (DTFT) Definition]]
