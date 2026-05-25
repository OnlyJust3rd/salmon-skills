---
type: "medium"
title: "Discrete-Time Fourier Series (DTFS) Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/fourier-series-analysis/microskills/discrete-time-fourier-series-dtfs-definition|discrete-time-fourier-series-dtfs-definition]]"
learning-time-in-minutes: 3
---
# Discrete-Time Fourier Series (DTFS) Definition

In our journey to understand how periodic signals can be represented as a sum of sinusoids, we'll start by defining the Discrete-Time Fourier Series (DTFS). This definition is the bedrock upon which the entire concept is built.

## What is the Discrete-Time Fourier Series?

The Discrete-Time Fourier Series (DTFS) is a mathematical tool that allows us to decompose a discrete-time periodic signal into a sum of complex exponentials (which are closely related to sinusoids). Think of it like breaking down a complex musical chord into its individual notes.

A discrete-time signal \(x[n]\) is periodic if there exists a positive integer \(N\) such that \(x[n] = x[n+N]\) for all \(n\). The smallest such positive integer \(N\) is called the fundamental period.

The DTFS expresses such a periodic signal \(x[n]\) as a sum of harmonically related complex exponentials. The general form of the DTFS is:

\[
x[n] = \sum_{k=0}^{N-1} c_k e^{j \frac{2\pi k}{N} n}
\]

Here's a breakdown of what each component means:

*   \(x[n]\): The original discrete-time periodic signal.
*   \(n\): The discrete time index.
*   \(N\): The fundamental period of the signal \(x[n]\).
*   \(k\): An integer index that runs from \(0\) to \(N-1\). This index represents the different harmonics.
*   \(c_k\): These are the **complex Fourier coefficients**. They are constants that represent the amplitude and phase of each complex exponential component at the \(k\)-th harmonic. These are crucial because they tell us "how much" of each exponential is present in the signal.
*   \(e^{j \frac{2\pi k}{N} n}\): These are the complex exponential basis functions. Each one is a sinusoid at a specific frequency.
    *   When \(k=0\), we have \(e^{j 0 \cdot n} = 1\), which represents the DC component (average value) of the signal.
    *   For \(k \neq 0\), these terms represent sinusoids with frequencies that are integer multiples of the fundamental frequency \(\frac{1}{N}\) (in units of samples per second).

## How to Find the Fourier Coefficients (\(c_k\))

The real power of the DTFS lies in being able to calculate these coefficients \(c_k\). They are found using the following formula:

\[
c_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k}{N} n}
\]

Let's look at the components of this formula:

*   \(c_k\): The complex Fourier coefficient for the \(k\)-th harmonic, which we are trying to calculate.
*   \(N\): The fundamental period of the signal.
*   \(\sum_{n=0}^{N-1}\): This summation is performed over one period of the signal.
*   \(x[n]\): The values of the signal within that period.
*   \(e^{-j \frac{2\pi k}{N} n}\): This is the complex conjugate of the basis function in the synthesis equation. This term is used to "extract" the component at the \(k\)-th harmonic from the signal.

## Key Takeaways

*   The DTFS decomposes a discrete-time periodic signal into a sum of **complex exponentials**.
*   The fundamental period \(N\) is critical, as it dictates the number of terms in the series (\(N\) terms) and the fundamental frequency.
*   The **complex Fourier coefficients** \(c_k\) are the weights that determine the contribution of each complex exponential to the original signal.
*   The synthesis equation reconstructs the signal from its Fourier coefficients.
*   The analysis equation calculates the Fourier coefficients from the signal.

Understanding this definition is the first step towards appreciating how complex periodic signals can be represented and manipulated using simpler sinusoidal building blocks.

## Supports

- [[skills/mathematics/signals-systems/fourier-series-analysis/microskills/discrete-time-fourier-series-dtfs-definition|Discrete-Time Fourier Series (DTFS) Definition]]
