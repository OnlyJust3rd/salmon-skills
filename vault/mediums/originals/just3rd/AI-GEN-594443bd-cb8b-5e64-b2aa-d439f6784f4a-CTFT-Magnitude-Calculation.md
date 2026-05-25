---
type: "medium"
title: "CTFT Magnitude Calculation: Unveiling Signal Frequencies"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/ctft-magnitude-calculation|ctft-magnitude-calculation]]"
related-skills:
  - "[[skills/mathematics/signals-systems/fourier-transform-analysis/fourier-transform-analysis|fourier-transform-analysis]]"
learning-time-in-minutes: 3
---
# CTFT Magnitude Calculation: Unveiling Signal Frequencies

This lesson focuses on a crucial step in Fourier Transform Analysis: calculating the magnitude spectrum of a Continuous-Time Fourier Transform (CTFT). Understanding the magnitude spectrum tells us the strength of each frequency component present in a signal.

## The Essence of Magnitude

When we transform a time-domain signal into the frequency domain using the CTFT, we obtain a complex-valued function. This complex function, \(X(j\omega)\), contains both magnitude and phase information. The **magnitude spectrum**, denoted as \(|X(j\omega)|\), tells us *how much* of a particular frequency \(\omega\) is present in the original signal. A peak in the magnitude spectrum at a certain frequency indicates that this frequency is a dominant component of the signal.

## The CTFT Formula

Recall the definition of the Continuous-Time Fourier Transform (CTFT):

\[
X(j\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt
\]

where:
*   \(x(t)\) is the time-domain signal.
*   \(X(j\omega)\) is the frequency-domain representation (a complex function).
*   \(\omega\) is the angular frequency.

## Calculating the Magnitude

The CTFT, \(X(j\omega)\), is generally a complex number. For any complex number \(z = a + jb\), its magnitude is given by \(|z| = \sqrt{a^2 + b^2}\).

When \(X(j\omega)\) is expressed in polar form, it is written as \(X(j\omega) = |X(j\omega)| e^{j\phi(\omega)}\). Here, \(|X(j\omega)|\) is the magnitude and \(\phi(\omega)\) is the phase.

Therefore, to calculate the magnitude spectrum \(|X(j\omega)|\) from the integral definition:

1.  **Compute the CTFT:** First, you need to evaluate the integral \(X(j\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt\). This will result in a complex-valued function of \(\omega\).
2.  **Find the Magnitude:** Once you have \(X(j\omega)\), take its magnitude. If \(X(j\omega) = A(\omega) + jB(\omega)\) (where \(A(\omega)\) and \(B(\omega)\) are real functions of \(\omega\)), then the magnitude is:
    \[
    |X(j\omega)| = \sqrt{(A(\omega))^2 + (B(\omega))^2}
    \]

## Worked Example: A Simple Rectangular Pulse

Let's calculate the magnitude spectrum of a rectangular pulse:

\[
x(t) = \begin{cases} 1 & |t| \le T \\ 0 & |t| > T \end{cases}
\]

### Step 1: Calculate the CTFT

\[
X(j\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt = \int_{-T}^{T} 1 \cdot e^{-j\omega t} dt
\]

If \(\omega = 0\):
\[
X(j0) = \int_{-T}^{T} 1 dt = [t]_{-T}^{T} = T - (-T) = 2T
\]

If \(\omega \neq 0\):
\[
X(j\omega) = \left[ \frac{e^{-j\omega t}}{-j\omega} \right]_{-T}^{T} = \frac{e^{-j\omega T} - e^{j\omega T}}{-j\omega}
\]

Using Euler's formula, \(e^{j\theta} - e^{-j\theta} = 2j \sin(\theta)\):
\[
X(j\omega) = \frac{-(e^{j\omega T} - e^{-j\omega T})}{-j\omega} = \frac{-(2j \sin(\omega T))}{-j\omega} = \frac{2 \sin(\omega T)}{\omega}
\]

This is the sinc function, often written as \(2T \cdot \text{sinc}(\omega T / \pi)\).

So, the CTFT is:
\[
X(j\omega) = \begin{cases} 2T & \omega = 0 \\ \frac{2 \sin(\omega T)}{\omega} & \omega \neq 0 \end{cases}
\]

Notice that for \(\omega \neq 0\), the result \(\frac{2 \sin(\omega T)}{\omega}\) is a real number.

### Step 2: Calculate the Magnitude Spectrum

For \(\omega = 0\):
\[
|X(j0)| = |2T| = 2T
\]

For \(\omega \neq 0\):
\[
|X(j\omega)| = \left| \frac{2 \sin(\omega T)}{\omega} \right|
\]

This magnitude spectrum is symmetric around \(\omega = 0\), as expected for a real-valued signal. The shape of the magnitude spectrum is characterized by a main lobe centered at \(\omega=0\) and decaying side lobes, indicating the distribution of energy across frequencies.

## Key Takeaways

*   The magnitude spectrum \(|X(j\omega)|\) quantifies the strength of each frequency component.
*   To calculate it, first find the CTFT \(X(j\omega)\), which is a complex function.
*   Then, apply the standard formula for the magnitude of a complex number: \(|X(j\omega)| = \sqrt{(\text{Real part})^2 + (\text{Imaginary part})^2}\).
*   For many common real-valued signals, their CTFTs are also real, simplifying the magnitude calculation to the absolute value.

## Supports

- [[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/ctft-magnitude-calculation|CTFT Magnitude Calculation]]
