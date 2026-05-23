---
type: "medium"
title: "DTFT Magnitude Calculation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/dtft-magnitude-calculation|dtft-magnitude-calculation]]"
learning-time-in-minutes: 3
---
# DTFT Magnitude Calculation

This lesson focuses on calculating the magnitude of the Discrete-Time Fourier Transform (DTFT) for given signals. This is a fundamental step in understanding the frequency content of discrete-time signals, which is crucial in various signal processing and communications applications.

## Understanding the DTFT Magnitude

The DTFT transforms a discrete-time signal \(x[n]\) into its frequency-domain representation, \(X(e^{j\omega})\). This representation is generally a complex-valued function of frequency \(\omega\). The magnitude of this complex function, \(|X(e^{j\omega})|\), tells us the amplitude of each frequency component present in the signal.

The DTFT is defined as:
\[
X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}
\]
The magnitude of the DTFT is then:
\[
|X(e^{j\omega})| = \left| \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n} \right|
\]
Calculating this directly can be complex. Often, we compute the DTFT \(X(e^{j\omega})\) first and then find its magnitude.

## Worked Calculation Example

Let's consider a simple finite-duration, non-zero-valued discrete-time signal:
\(x[n] = \{1, 2, 1\}\) for \(n = 0, 1, 2\), and \(x[n] = 0\) otherwise.

**Step 1: Write out the DTFT sum for the non-zero samples.**
For this signal, the summation is from \(n=0\) to \(n=2\).
\[
X(e^{j\omega}) = x[0]e^{-j\omega \cdot 0} + x[1]e^{-j\omega \cdot 1} + x[2]e^{-j\omega \cdot 2}
\]
Substitute the values of \(x[n]\):
\[
X(e^{j\omega}) = 1 \cdot e^{0} + 2 \cdot e^{-j\omega} + 1 \cdot e^{-j2\omega}
\]
\[
X(e^{j\omega}) = 1 + 2e^{-j\omega} + e^{-j2\omega}
\]

**Step 2: Simplify the expression for \(X(e^{j\omega})\).**
We can factor this expression. Notice the similarity to a quadratic expansion.
\[
X(e^{j\omega}) = e^{-j\omega}(e^{j\omega} + 2 + e^{-j\omega})
\]
Recall Euler's formula: \(e^{j\theta} + e^{-j\theta} = 2\cos(\theta)\).
So, \(e^{j\omega} + e^{-j\omega} = 2\cos(\omega)\).
\[
X(e^{j\omega}) = e^{-j\omega}(2\cos(\omega) + 2)
\]
\[
X(e^{j\omega}) = 2e^{-j\omega}(1 + \cos(\omega))
\]

**Step 3: Calculate the magnitude \(|X(e^{j\omega})|\).**
The magnitude of a product is the product of the magnitudes: \(|ab| = |a||b|\).
\[
|X(e^{j\omega})| = |2e^{-j\omega}(1 + \cos(\omega))|
\]
\[
|X(e^{j\omega})| = |2| \cdot |e^{-j\omega}| \cdot |1 + \cos(\omega)|
\]
*   \(|2| = 2\)
*   \(|e^{-j\omega}| = |\cos(-\omega) + j\sin(-\omega)| = \sqrt{\cos^2(-\omega) + \sin^2(-\omega)} = \sqrt{1} = 1\). Generally, \(|e^{j\theta}| = 1\) for any real \(\theta\).
*   Since \(\cos(\omega)\) ranges from -1 to 1, \(1 + \cos(\omega)\) ranges from 0 to 2, which is always non-negative. Therefore, \(|1 + \cos(\omega)| = 1 + \cos(\omega)\).

Combining these, we get the magnitude spectrum:
\[
|X(e^{j\omega})| = 2 \cdot 1 \cdot (1 + \cos(\omega))
\]
\[
|X(e^{j\omega})| = 2(1 + \cos(\omega))
\]

## Interpretation of the Magnitude Spectrum

The resulting magnitude spectrum \(|X(e^{j\omega})| = 2(1 + \cos(\omega))\) is a function of \(\omega\).
*   When \(\omega = 0\) (DC component), \(|X(e^{j0})| = 2(1 + \cos(0)) = 2(1+1) = 4\). This is the sum of the signal's samples (1+2+1=4).
*   When \(\omega = \pi\) (Nyquist frequency), \(|X(e^{j\pi})| = 2(1 + \cos(\pi)) = 2(1-1) = 0\).
*   The magnitude is symmetric around \(\omega=0\) and also has a period of \(2\pi\), which is expected for the DTFT.

## Common Pitfalls

*   **Forgetting the complex exponential:** When calculating the magnitude, it's easy to overlook the \(e^{-j\omega n}\) term. Always remember that \(X(e^{j\omega})\) is generally complex.
*   **Incorrectly simplifying complex exponentials:** Make sure to correctly apply Euler's formula or properties of complex exponentials when simplifying \(X(e^{j\omega})\).
*   **Magnitude of sums:** The magnitude of a sum is NOT the sum of the magnitudes: \(|A+B| \neq |A| + |B|\). You must first compute the sum \(X(e^{j\omega})\) and then take its magnitude.
*   **Sign errors:** Be careful with negative signs when manipulating trigonometric functions or complex exponentials.

## Practice Problems

1.  Calculate the DTFT magnitude for the signal \(x[n] = \{1, -1, 1, -1\}\) for \(n=0, 1, 2, 3\), and \(x[n]=0\) otherwise.
2.  Find the magnitude spectrum of the signal \(x[n] = 2 \cdot \delta[n-1]\) (a delayed impulse).

## Supports

- [[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/dtft-magnitude-calculation|DTFT Magnitude Calculation]]
