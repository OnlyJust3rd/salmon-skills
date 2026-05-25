---
type: "medium"
title: "Applying the Fourier Series Formula to Calculate Coefficients"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/fourier-series-analysis/microskills/fourier-series-formula-application|fourier-series-formula-application]]"
learning-time-in-minutes: 4
---
# Applying the Fourier Series Formula to Calculate Coefficients

This lesson focuses on applying the fundamental formulas to compute the coefficients of a Fourier Series (FS). These coefficients represent the amplitude and phase of each sinusoidal component that makes up a periodic signal.

## Understanding the FS Formulas

For a real-valued, periodic signal \(f(t)\) with fundamental period \(T_0\), its Fourier Series representation is given by:

\[
f(t) = a_0 + \sum_{n=1}^{\infty} \left( a_n \cos\left(n\omega_0 t\right) + b_n \sin\left(n\omega_0 t\right) \right)
\]

where \(\omega_0 = \frac{2\pi}{T_0}\) is the fundamental angular frequency.

The coefficients \(a_0\), \(a_n\), and \(b_n\) are calculated using the following integral formulas:

*   **DC Component (\(a_0\))**: This represents the average value of the signal over one period.
    \[
    a_0 = \frac{1}{T_0} \int_{T_0} f(t) dt
    \]

*   **Cosine Coefficients (\(a_n\))**: These represent the amplitude of the cosine terms at each harmonic frequency.
    \[
    a_n = \frac{2}{T_0} \int_{T_0} f(t) \cos\left(n\omega_0 t\right) dt \quad \text{for } n = 1, 2, 3, \ldots
    \]

*   **Sine Coefficients (\(b_n\))**: These represent the amplitude of the sine terms at each harmonic frequency.
    \[
    b_n = \frac{2}{T_0} \int_{T_0} f(t) \sin\left(n\omega_0 t\right) dt \quad \text{for } n = 1, 2, 3, \ldots
    \]

The integration interval \(\int_{T_0}\) can be any interval of length \(T_0\), such as from \(0\) to \(T_0\), or from \(-T_0/2\) to \(T_0/2\). The choice often depends on the symmetry of the function \(f(t)\).

## Worked Example: Calculating FS Coefficients for a Square Wave

Let's consider a simple square wave signal \(f(t)\) with amplitude \(A\) and period \(T_0\). This wave is \(A\) for \(0 < t < T_0/2\) and \(-A\) for \(T_0/2 < t < T_0\).

**1. Identify Signal Properties:**
*   Amplitude: \(A\)
*   Period: \(T_0\)
*   Fundamental frequency: \(\omega_0 = \frac{2\pi}{T_0}\)

**2. Calculate \(a_0\) (DC Component):**
We integrate over one period, from \(0\) to \(T_0\).
\[
a_0 = \frac{1}{T_0} \int_{0}^{T_0} f(t) dt
\]
\[
a_0 = \frac{1}{T_0} \left( \int_{0}^{T_0/2} A dt + \int_{T_0/2}^{T_0} (-A) dt \right)
\]
\[
a_0 = \frac{1}{T_0} \left( [At]_{0}^{T_0/2} + [-At]_{T_0/2}^{T_0} \right)
\]
\[
a_0 = \frac{1}{T_0} \left( A\frac{T_0}{2} - 0 + (-A T_0) - (-A\frac{T_0}{2}) \right)
\]
\[
a_0 = \frac{1}{T_0} \left( \frac{A T_0}{2} - A T_0 + \frac{A T_0}{2} \right)
\]
\[
a_0 = \frac{1}{T_0} \left( A T_0 - A T_0 \right) = 0
\]
The DC component is 0, which makes sense as the signal is symmetrical around the time axis.

**3. Calculate \(a_n\) (Cosine Coefficients):**
\[
a_n = \frac{2}{T_0} \int_{0}^{T_0} f(t) \cos\left(n\omega_0 t\right) dt
\]
\[
a_n = \frac{2}{T_0} \left( \int_{0}^{T_0/2} A \cos\left(n\omega_0 t\right) dt + \int_{T_0/2}^{T_0} (-A) \cos\left(n\omega_0 t\right) dt \right)
\]
\[
a_n = \frac{2A}{T_0} \left( \int_{0}^{T_0/2} \cos\left(n\omega_0 t\right) dt - \int_{T_0/2}^{T_0} \cos\left(n\omega_0 t\right) dt \right)
\]
Integrating \(\cos(n\omega_0 t)\) gives \(\frac{1}{n\omega_0} \sin(n\omega_0 t)\).
\[
a_n = \frac{2A}{T_0} \left( \left[\frac{\sin(n\omega_0 t)}{n\omega_0}\right]_{0}^{T_0/2} - \left[\frac{\sin(n\omega_0 t)}{n\omega_0}\right]_{T_0/2}^{T_0} \right)
\]
Substitute \(\omega_0 = \frac{2\pi}{T_0}\):
\[
a_n = \frac{2A}{T_0} \left( \frac{T_0}{2\pi n} \left( \sin\left(n\frac{2\pi}{T_0} \frac{T_0}{2}\right) - \sin(0) \right) - \frac{T_0}{2\pi n} \left( \sin\left(n\frac{2\pi}{T_0} T_0\right) - \sin\left(n\frac{2\pi}{T_0} \frac{T_0}{2}\right) \right) \right)
\]
\[
a_n = \frac{2A}{2\pi n} \left( (\sin(n\pi) - 0) - (\sin(2n\pi) - \sin(n\pi)) \right)
\]
Since \(\sin(n\pi) = 0\) and \(\sin(2n\pi) = 0\) for any integer \(n\):
\[
a_n = \frac{A}{\pi n} (0 - 0 - 0 + 0) = 0
\]
All cosine coefficients are 0. This is expected because the square wave is an odd function when shifted to be centered at \(t=0\).

**4. Calculate \(b_n\) (Sine Coefficients):**
\[
b_n = \frac{2}{T_0} \int_{0}^{T_0} f(t) \sin\left(n\omega_0 t\right) dt
\]
\[
b_n = \frac{2}{T_0} \left( \int_{0}^{T_0/2} A \sin\left(n\omega_0 t\right) dt + \int_{T_0/2}^{T_0} (-A) \sin\left(n\omega_0 t\right) dt \right)
\]
\[
b_n = \frac{2A}{T_0} \left( \int_{0}^{T_0/2} \sin\left(n\omega_0 t\right) dt - \int_{T_0/2}^{T_0} \sin\left(n\omega_0 t\right) dt \right)
\]
Integrating \(\sin(n\omega_0 t)\) gives \(-\frac{1}{n\omega_0} \cos(n\omega_0 t)\).
\[
b_n = \frac{2A}{T_0} \left( \left[-\frac{\cos(n\omega_0 t)}{n\omega_0}\right]_{0}^{T_0/2} - \left[-\frac{\cos(n\omega_0 t)}{n\omega_0}\right]_{T_0/2}^{T_0} \right)
\]
\[
b_n = \frac{2A}{T_0} \left( -\frac{T_0}{2\pi n} \left( \cos\left(n\frac{2\pi}{T_0} \frac{T_0}{2}\right) - \cos(0) \right) + \frac{T_0}{2\pi n} \left( \cos\left(n\frac{2\pi}{T_0} T_0\right) - \cos\left(n\frac{2\pi}{T_0} \frac{T_0}{2}\right) \right) \right)
\]
\[
b_n = \frac{A}{\pi n} \left( - (\cos(n\pi) - 1) + (\cos(2n\pi) - \cos(n\pi)) \right)
\]
We know \(\cos(0) = 1\), \(\cos(2n\pi) = 1\), and \(\cos(n\pi) = (-1)^n\).
\[
b_n = \frac{A}{\pi n} \left( - ((-1)^n - 1) + (1 - (-1)^n) \right)
\]
\[
b_n = \frac{A}{\pi n} \left( -(-1)^n + 1 + 1 - (-1)^n \right)
\]
\[
b_n = \frac{A}{\pi n} \left( 2 - 2(-1)^n \right)
\]
\[
b_n = \frac{2A}{\pi n} (1 - (-1)^n)
\]

Now, let's examine \(b_n\) for different values of \(n\):
*   If \(n\) is even, \(n=2k\): \(b_{2k} = \frac{2A}{\pi (2k)} (1 - (-1)^{2k}) = \frac{A}{\pi k} (1 - 1) = 0\).
*   If \(n\) is odd, \(n=2k-1\): \(b_{2k-1} = \frac{2A}{\pi (2k-1)} (1 - (-1)^{2k-1}) = \frac{2A}{\pi (2k-1)} (1 - (-1)) = \frac{2A}{\pi (2k-1)} (2) = \frac{4A}{\pi (2k-1)}\).

So, the sine coefficients are non-zero only for odd harmonics:
\(b_1 = \frac{4A}{\pi}\), \(b_3 = \frac{4A}{3\pi}\), \(b_5 = \frac{4A}{5\pi}\), and so on.

The Fourier Series for this square wave is therefore:
\[
f(t) = \sum_{k=1}^{\infty} \frac{4A}{\pi (2k-1)} \sin\left((2k-1)\omega_0 t\right)
\]

## Key Takeaways

*   The formulas for \(a_0\), \(a_n\), and \(b_n\) are direct applications of integration.
*   The choice of integration interval can simplify calculations, especially for signals with symmetry.
*   Observing signal symmetry can help predict which coefficients will be zero (e.g., odd functions often have zero \(a_n\) coefficients, even functions often have zero \(b_n\) coefficients).
*   The resulting coefficients define the amplitudes of the cosine and sine waves that reconstruct the original signal.

## Supports

- [[skills/mathematics/signals-systems/fourier-series-analysis/microskills/fourier-series-formula-application|Fourier Series Formula Application]]
