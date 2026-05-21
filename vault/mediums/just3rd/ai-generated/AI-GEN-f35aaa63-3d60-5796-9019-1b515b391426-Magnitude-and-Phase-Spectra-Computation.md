---
type: "medium"
title: "Magnitude and Phase Spectra Computation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/fourier-transform-analysis/microskills/magnitude-and-phase-spectra-computation|magnitude-and-phase-spectra-computation]]"
---
# Magnitude and Phase Spectra Computation

This lesson focuses on the practical computation of the magnitude and phase spectra from the Fourier Transform (FT) and Discrete-Time Fourier Transform (DTFT). Understanding these components allows us to analyze the frequency content of signals and systems, which is a core aspect of Fourier Transform Analysis.

## Why Magnitude and Phase?

The Fourier Transform of a signal, \(X(\omega)\) for continuous-time signals or \(X(e^{j\omega})\) for discrete-time signals, is generally a complex-valued function. A complex number can be represented in rectangular form (\(a + jb\)) or polar form (\(re^{j\theta}\)).

*   **Magnitude Spectrum:** The magnitude, \(|X(\omega)|\) or \(|X(e^{j\omega})|\), represents the amplitude or strength of each frequency component present in the signal. It tells us "how much" of each frequency is there.
*   **Phase Spectrum:** The phase, \(\angle X(\omega)\) or \(\angle X(e^{j\omega})\), represents the shift or delay of each frequency component. It tells us about the timing or alignment of these frequencies.

Together, the magnitude and phase completely characterize the frequency content of a signal.

## Computing Magnitude and Phase

Given a complex-valued Fourier Transform \(X\), we can compute its magnitude and phase.

### For Continuous-Time Fourier Transform (FT)

If \(X(\omega) = \text{Re}\{X(\omega)\} + j \text{Im}\{X(\omega)\}\), then:

*   **Magnitude:**
    \[
    |X(\omega)| = \sqrt{(\text{Re}\{X(\omega)\})^2 + (\text{Im}\{X(\omega)\})^2}
    \]

*   **Phase:**
    \[
    \angle X(\omega) = \arctan2(\text{Im}\{X(\omega)\}, \text{Re}\{X(\omega)\})
    \]

The `arctan2` function is important here because it correctly handles the signs of the real and imaginary parts to place the angle in the correct quadrant, ranging from \(-\pi\) to \(\pi\).

### For Discrete-Time Fourier Transform (DTFT)

Similarly, if \(X(e^{j\omega}) = \text{Re}\{X(e^{j\omega})\} + j \text{Im}\{X(e^{j\omega})\}\), then:

*   **Magnitude:**
    \[
    |X(e^{j\omega})| = \sqrt{(\text{Re}\{X(e^{j\omega})\})^2 + (\text{Im}\{X(e^{j\omega})\})^2}
    \]

*   **Phase:**
    \[
    \angle X(e^{j\omega}) = \arctan2(\text{Im}\{X(e^{j\omega})\}, \text{Re}\{X(e^{j\omega})\})
    \]

### Worked Example: A Simple Exponential Signal

Let's consider a continuous-time signal \(x(t) = e^{-at}u(t)\) for \(a > 0\). Its FT is given by:

\[
X(\omega) = \frac{1}{a + j\omega}
\]

We can rewrite this in rectangular form:

\[
X(\omega) = \frac{1}{a + j\omega} \times \frac{a - j\omega}{a - j\omega} = \frac{a - j\omega}{a^2 + \omega^2} = \frac{a}{a^2 + \omega^2} - j\frac{\omega}{a^2 + \omega^2}
\]

From this, we can identify the real and imaginary parts:
*   \(\text{Re}\{X(\omega)\} = \frac{a}{a^2 + \omega^2}\)
*   \(\text{Im}\{X(\omega)\} = -\frac{\omega}{a^2 + \omega^2}\)

Now, let's compute the magnitude and phase:

*   **Magnitude:**
    \[
    |X(\omega)| = \sqrt{\left(\frac{a}{a^2 + \omega^2}\right)^2 + \left(-\frac{\omega}{a^2 + \omega^2}\right)^2} = \sqrt{\frac{a^2 + \omega^2}{(a^2 + \omega^2)^2}} = \sqrt{\frac{1}{a^2 + \omega^2}} = \frac{1}{\sqrt{a^2 + \omega^2}}
    \]
    This shows that the magnitude is symmetric around \(\omega=0\) and decreases as \(|\omega|\) increases.

*   **Phase:**
    \[
    \angle X(\omega) = \arctan2\left(-\frac{\omega}{a^2 + \omega^2}, \frac{a}{a^2 + \omega^2}\right) = \arctan2(-\omega, a)
    \]
    Since \(a > 0\), this simplifies to:
    \[
    \angle X(\omega) = -\arctan\left(\frac{\omega}{a}\right)
    \]
    The phase is an odd function of \(\omega\), indicating a delay that depends on frequency.

### Practical Implementation Notes

When working with discrete-time signals and the DTFT, or using numerical tools for FT, you will often get results in complex number format. Libraries in programming languages like Python (NumPy, SciPy) and MATLAB provide built-in functions to directly compute the magnitude and phase of complex numbers.

For a complex number `z` in Python/NumPy:
*   Magnitude: `np.abs(z)`
*   Phase: `np.angle(z)`

These functions internally use the formulas described above.

## Summary of Steps

To compute the magnitude and phase spectra for a given signal's Fourier Transform:

1.  **Obtain the Fourier Transform:** Calculate the FT or DTFT of the signal, resulting in a complex-valued function \(X\).
2.  **Identify Real and Imaginary Parts:** Express \(X\) as \(X = \text{Re}\{X\} + j \text{Im}\{X\}\).
3.  **Calculate Magnitude:** Apply the formula \(|X| = \sqrt{(\text{Re}\{X\})^2 + (\text{Im}\{X\})^2}\).
4.  **Calculate Phase:** Apply the formula \(\angle X = \arctan2(\text{Im}\{X\}, \text{Re}\{X\})\).
5.  **Interpret:** Analyze the resulting magnitude and phase plots to understand the signal's frequency content.

## Supports

- [[skills/mathematics/fourier-transform-analysis/microskills/magnitude-and-phase-spectra-computation|Magnitude and Phase Spectra Computation]]
