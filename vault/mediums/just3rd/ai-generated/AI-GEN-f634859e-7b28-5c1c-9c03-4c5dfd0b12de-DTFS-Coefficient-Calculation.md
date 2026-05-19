---
type: "medium"
title: "Calculating Discrete-Time Fourier Series (DTFS) Coefficients"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/fourier-series-analysis/microskills/dtfs-coefficient-calculation|DTFS Coefficient Calculation]]"
---
# Calculating Discrete-Time Fourier Series (DTFS) Coefficients

This lesson focuses on the practical application of calculating the coefficients for the Discrete-Time Fourier Series (DTFS). This is a key step in decomposing discrete-time periodic signals into their constituent complex exponential frequencies.

## Understanding the DTFS Representation

A discrete-time periodic signal \(x[n]\) with fundamental period \(N\) can be represented by its DTFS as:

\[
x[n] = \sum_{k=0}^{N-1} d_k e^{j \frac{2\pi k}{N} n}
\]

where \(d_k\) are the DTFS coefficients. These coefficients represent the amplitude and phase of each complex exponential component at a specific frequency.

## The DTFS Coefficient Formula

To find these coefficients, we use the following formula:

\[
d_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k}{N} n}
\]

Let's break down this formula:

*   **\(d_k\)**: This is the coefficient we want to calculate for the \(k\)-th frequency component.
*   **\(N\)**: The fundamental period of the discrete-time signal \(x[n]\). This means the signal repeats every \(N\) samples.
*   **\(\sum_{n=0}^{N-1}\)**: We sum over one period of the signal, from sample \(n=0\) to \(n=N-1\).
*   **\(x[n]\)**: The value of the signal at the \(n\)-th sample.
*   **\(e^{-j \frac{2\pi k}{N} n}\)**: This is the complex exponential term, representing a sinusoid at a frequency related to \(k\). The negative sign in the exponent is crucial for the synthesis formula.

## Step-by-Step Calculation

To apply this formula, follow these steps:

1.  **Identify the signal \(x[n]\)**: You need the explicit form of your discrete-time periodic signal.
2.  **Determine the fundamental period \(N\)**: Find the smallest integer \(N\) for which \(x[n+N] = x[n]\) for all \(n\).
3.  **Select the coefficient index \(k\)**: You will calculate \(d_k\) for \(k = 0, 1, 2, \ldots, N-1\).
4.  **Substitute into the formula**: Plug \(x[n]\), \(N\), and the specific \(k\) into the DTFS coefficient formula.
5.  **Evaluate the sum**: Compute the summation for each \(k\). This often involves complex number arithmetic.

## Worked Example

Let's find the DTFS coefficients for the following discrete-time periodic signal:

\(x[n] = \cos\left(\frac{2\pi}{4} n\right)\)

1.  **Signal**: \(x[n] = \cos\left(\frac{\pi}{2} n\right)\).
2.  **Period \(N\)**:
    *   \(x[0] = \cos(0) = 1\)
    *   \(x[1] = \cos(\pi/2) = 0\)
    *   \(x[2] = \cos(\pi) = -1\)
    *   \(x[3] = \cos(3\pi/2) = 0\)
    *   \(x[4] = \cos(2\pi) = 1\)
    The signal repeats every 4 samples. So, \(N=4\).
3.  **Coefficient Indices**: We need to calculate \(d_0, d_1, d_2, d_3\).

Let's calculate each coefficient:

**For \(d_0\): (k=0)**

\[
d_0 = \frac{1}{4} \sum_{n=0}^{3} x[n] e^{-j \frac{2\pi (0)}{4} n} = \frac{1}{4} \sum_{n=0}^{3} x[n] e^{0} = \frac{1}{4} \sum_{n=0}^{3} x[n]
\]
\[
d_0 = \frac{1}{4} (x[0] + x[1] + x[2] + x[3]) = \frac{1}{4} (1 + 0 + (-1) + 0) = \frac{1}{4} (0) = 0
\]

**For \(d_1\): (k=1)**

\[
d_1 = \frac{1}{4} \sum_{n=0}^{3} x[n] e^{-j \frac{2\pi (1)}{4} n} = \frac{1}{4} \sum_{n=0}^{3} \cos\left(\frac{\pi}{2} n\right) e^{-j \frac{\pi}{2} n}
\]
We can use Euler's formula: \(\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}\).
So, \(x[n] = \frac{e^{j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n}}{2}\).

\[
d_1 = \frac{1}{4} \sum_{n=0}^{3} \left(\frac{e^{j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n}}{2}\right) e^{-j \frac{\pi}{2} n}
\]
\[
d_1 = \frac{1}{8} \sum_{n=0}^{3} \left(e^{j \frac{\pi}{2} n} e^{-j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n} e^{-j \frac{\pi}{2} n}\right)
\]
\[
d_1 = \frac{1}{8} \sum_{n=0}^{3} \left(e^{0} + e^{-j \pi n}\right) = \frac{1}{8} \sum_{n=0}^{3} (1 + e^{-j \pi n})
\]

Let's evaluate the sum:
*   \(n=0\): \(1 + e^0 = 1 + 1 = 2\)
*   \(n=1\): \(1 + e^{-j\pi} = 1 + (-1) = 0\)
*   \(n=2\): \(1 + e^{-j2\pi} = 1 + 1 = 2\)
*   \(n=3\): \(1 + e^{-j3\pi} = 1 + (-1) = 0\)

Sum = \(2 + 0 + 2 + 0 = 4\).
\[
d_1 = \frac{1}{8} (4) = \frac{1}{2}
\]

**For \(d_2\): (k=2)**

\[
d_2 = \frac{1}{4} \sum_{n=0}^{3} x[n] e^{-j \frac{2\pi (2)}{4} n} = \frac{1}{4} \sum_{n=0}^{3} \cos\left(\frac{\pi}{2} n\right) e^{-j \pi n}
\]
Using \(x[n] = \frac{e^{j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n}}{2}\):
\[
d_2 = \frac{1}{4} \sum_{n=0}^{3} \left(\frac{e^{j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n}}{2}\right) e^{-j \pi n}
\]
\[
d_2 = \frac{1}{8} \sum_{n=0}^{3} \left(e^{j \frac{\pi}{2} n} e^{-j \pi n} + e^{-j \frac{\pi}{2} n} e^{-j \pi n}\right)
\]
\[
d_2 = \frac{1}{8} \sum_{n=0}^{3} \left(e^{-j \frac{\pi}{2} n} + e^{-j \frac{3\pi}{2} n}\right)
\]

Let's evaluate the sum:
*   \(n=0\): \(e^0 + e^0 = 1 + 1 = 2\)
*   \(n=1\): \(e^{-j\pi/2} + e^{-j3\pi/2} = (-j) + (j) = 0\)
*   \(n=2\): \(e^{-j\pi} + e^{-j3\pi} = (-1) + (-1) = -2\)
*   \(n=3\): \(e^{-j3\pi/2} + e^{-j9\pi/2} = (j) + (-j) = 0\)

Sum = \(2 + 0 - 2 + 0 = 0\).
\[
d_2 = \frac{1}{8} (0) = 0
\]

**For \(d_3\): (k=3)**

Note that \(d_3\) is the complex conjugate of \(d_1\) because the signal \(x[n]\) is real.
\(d_3 = d_{4-1}^* = d_1^* = \left(\frac{1}{2}\right)^* = \frac{1}{2}\).
Let's verify:
\[
d_3 = \frac{1}{4} \sum_{n=0}^{3} x[n] e^{-j \frac{2\pi (3)}{4} n} = \frac{1}{4} \sum_{n=0}^{3} \cos\left(\frac{\pi}{2} n\right) e^{-j \frac{3\pi}{2} n}
\]
Using \(x[n] = \frac{e^{j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n}}{2}\):
\[
d_3 = \frac{1}{8} \sum_{n=0}^{3} \left(e^{j \frac{\pi}{2} n} e^{-j \frac{3\pi}{2} n} + e^{-j \frac{\pi}{2} n} e^{-j \frac{3\pi}{2} n}\right)
\]
\[
d_3 = \frac{1}{8} \sum_{n=0}^{3} \left(e^{-j \pi n} + e^{-j 2\pi n}\right)
\]

Let's evaluate the sum:
*   \(n=0\): \(e^0 + e^0 = 1 + 1 = 2\)
*   \(n=1\): \(e^{-j\pi} + e^{-j2\pi} = (-1) + 1 = 0\)
*   \(n=2\): \(e^{-j2\pi} + e^{-j4\pi} = 1 + 1 = 2\)
*   \(n=3\): \(e^{-j3\pi} + e^{-j6\pi} = (-1) + 1 = 0\)

Sum = \(2 + 0 + 2 + 0 = 4\).
\[
d_3 = \frac{1}{8} (4) = \frac{1}{2}
\]

So, the DTFS coefficients are: \(d_0 = 0, d_1 = 1/2, d_2 = 0, d_3 = 1/2\).

This means \(x[n] = \frac{1}{2} e^{j \frac{2\pi (1)}{4} n} + \frac{1}{2} e^{j \frac{2\pi (3)}{4} n}\).
Using Euler's formula again, \(e^{j\theta} + e^{-j\theta} = 2\cos(\theta)\), we can relate this back to our original cosine signal:
\(x[n] = \frac{1}{2} (e^{j \frac{\pi}{2} n} + e^{j \frac{3\pi}{2} n})\).
Since \(e^{j \frac{3\pi}{2} n} = e^{-j \frac{\pi}{2} n}\) for integer n,
\(x[n] = \frac{1}{2} (e^{j \frac{\pi}{2} n} + e^{-j \frac{\pi}{2} n}) = \cos\left(\frac{\pi}{2} n\right)\), which matches our original signal.

## Key Takeaways

*   The DTFS coefficient formula is the integral (summation) of the signal multiplied by a complex exponential over one period.
*   The fundamental period \(N\) is critical for defining the summation limits and the frequency spacing.
*   Calculations often involve complex number arithmetic and trigonometric identities.
*   For real signals, coefficients are conjugate symmetric: \(d_k = d_{N-k}^*\).

## Supports

- [[skills/mathematics/fourier-series-analysis/microskills/dtfs-coefficient-calculation|DTFS Coefficient Calculation]]
