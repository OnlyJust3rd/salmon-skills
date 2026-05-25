---
type: "medium"
title: "Fourier Transform (FT) Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/fourier-transform-ft-definition|fourier-transform-ft-definition]]"
learning-time-in-minutes: 3
---
# Fourier Transform (FT) Definition

This lesson focuses on recalling the mathematical definition of the Fourier Transform (FT). Understanding this fundamental definition is the first step in mastering Fourier Transform Analysis.

## What is the Fourier Transform?

The Fourier Transform is a mathematical tool that decomposes a function of time (a signal) into its constituent frequencies. Essentially, it tells us which frequencies are present in a signal and their respective amplitudes and phases. Think of it like taking a musical chord and breaking it down into the individual notes that make it up.

The FT is defined for **continuous-time signals**, meaning signals that are defined for all values of time, even those in between.

## The Mathematical Definition

The Fourier Transform of a continuous-time signal \(x(t)\) is denoted by \(X(\omega)\) and is defined as:

\[
X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt
\]

Let's break down this formula:

*   **\(x(t)\)**: This represents the original continuous-time signal. It's a function of time \(t\).
*   **\(X(\omega)\)**: This is the Fourier Transform of \(x(t)\). It's a function of angular frequency \(\omega\).
*   **\(\int_{-\infty}^{\infty} \dots dt\)**: This is a definite integral from negative infinity to positive infinity. It means we are summing up contributions from all points in time.
*   **\(e^{-j\omega t}\)**: This is a complex exponential term.
    *   \(e\): Euler's number (approximately 2.71828).
    *   \(j\): The imaginary unit, where \(j^2 = -1\).
    *   \(\omega\): Angular frequency, measured in radians per second.
    *   \(t\): Time, typically in seconds.

The term \(e^{-j\omega t}\) can be expanded using Euler's formula: \(e^{-j\theta} = \cos(\theta) - j\sin(\theta)\). So, \(e^{-j\omega t} = \cos(\omega t) - j\sin(\omega t)\). This shows that the Fourier Transform essentially correlates the signal \(x(t)\) with complex sinusoids (cosine and sine waves) of all possible frequencies \(\omega\).

The result, \(X(\omega)\), is a complex-valued function. The **magnitude** of \(X(\omega)\), \(|X(\omega)|\), represents the amplitude of the frequency \(\omega\) present in the signal \(x(t)\). The **phase** of \(X(\omega)\), \(\angle X(\omega)\), represents the phase shift of that frequency component.

## Why is this definition important?

This integral definition is the cornerstone of Fourier analysis. It allows us to move from the time domain (where we see how a signal changes over time) to the frequency domain (where we see which frequencies make up the signal). This transformation is incredibly powerful for understanding, analyzing, and manipulating signals in various fields like signal processing, communications, and physics.

## Key Takeaway

The Fourier Transform \(X(\omega)\) of a continuous-time signal \(x(t)\) is calculated by integrating the product of the signal and a complex exponential \(e^{-j\omega t}\) over all time. This process reveals the frequency content of the signal.

## Supports

- [[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/fourier-transform-ft-definition|Fourier Transform (FT) Definition]]
