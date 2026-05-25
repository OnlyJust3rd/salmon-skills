---
type: "medium"
title: "CTFT Phase Calculation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/ctft-phase-calculation|ctft-phase-calculation]]"
learning-time-in-minutes: 4
---
# CTFT Phase Calculation

In our exploration of Fourier Transform Analysis, we've seen how the Fourier Transform (FT) decomposes a signal into its constituent frequencies. While the magnitude spectrum tells us the strength of each frequency component, the phase spectrum reveals the *timing* or *shift* of these components. This lesson focuses on how to calculate the phase spectrum of a continuous-time Fourier Transform (CTFT).

## Understanding the Phase Spectrum

The CTFT of a continuous-time signal \(x(t)\) is given by:

\[
X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt
\]

The resulting \(X(\omega)\) is a complex-valued function of frequency \(\omega\). Any complex number can be represented in polar form as \(r e^{j\theta}\), where \(r\) is the magnitude and \(\theta\) is the phase. For \(X(\omega)\), we have:

\[
X(\omega) = |X(\omega)| e^{j\phi(\omega)}
\]

Here, \(|X(\omega)|\) is the magnitude spectrum (which we've likely already covered or will cover) and \(\phi(\omega)\) is the phase spectrum.

The phase \(\phi(\omega)\) is calculated as the angle of the complex number \(X(\omega)\):

\[
\phi(\omega) = \text{atan2}(\text{Im}\{X(\omega)\}, \text{Re}\{X(\omega)\})
\]

The `atan2(y, x)` function is crucial here. It calculates the arctangent of \(y/x\) but takes into account the signs of both \(y\) and \(x\) to determine the correct quadrant of the angle, providing a phase in the range \((-\pi, \pi]\) or \((0, 2\pi]\) depending on the implementation. This is more robust than a simple `arctan(y/x)` which can be ambiguous.

## Calculating the Phase: A Step-by-Step Approach

To calculate the phase spectrum \(\phi(\omega)\) for a given signal \(x(t)\), follow these steps:

1.  **Compute the CTFT, \(X(\omega)\):** First, find the continuous-time Fourier Transform of \(x(t)\). This might involve using standard FT pairs or performing the integration.
2.  **Identify the Real and Imaginary Parts:** Once you have \(X(\omega)\) in the form \(A(\omega) + jB(\omega)\), identify the real part \(A(\omega) = \text{Re}\{X(\omega)\}\) and the imaginary part \(B(\omega) = \text{Im}\{X(\omega)\}\).
3.  **Apply the `atan2` function:** Use the `atan2` function with the imaginary part as the first argument and the real part as the second argument to compute the phase angle \(\phi(\omega)\).

## Worked Example: Phase of a Rectangular Pulse

Let's consider a simple rectangular pulse:

\[
x(t) = \begin{cases} 1 & |t| \leq T/2 \\ 0 & |t| > T/2 \end{cases}
\]

We know its CTFT is:

\[
X(\omega) = T \frac{\sin(\omega T/2)}{\omega T/2} = T \text{sinc}(\omega T/2)
\]

where \(\text{sinc}(x) = \frac{\sin(x)}{x}\).

Now, let's find its phase spectrum.

**Step 1: Compute the CTFT, \(X(\omega)\)**
We already have \(X(\omega) = T \frac{\sin(\omega T/2)}{\omega T/2}\).

**Step 2: Identify the Real and Imaginary Parts**
The expression \(X(\omega) = T \frac{\sin(\omega T/2)}{\omega T/2}\) is a real-valued function for all real \(\omega\). This means:
*   \(\text{Re}\{X(\omega)\} = T \frac{\sin(\omega T/2)}{\omega T/2}\)
*   \(\text{Im}\{X(\omega)\} = 0\)

**Step 3: Apply the `atan2` function**
\[
\phi(\omega) = \text{atan2}(\text{Im}\{X(\omega)\}, \text{Re}\{X(\omega)\}) = \text{atan2}(0, T \frac{\sin(\omega T/2)}{\omega T/2})
\]

Now, we need to consider the sign of the real part:
*   If \(T \frac{\sin(\omega T/2)}{\omega T/2} > 0\), then \(\text{atan2}(0, \text{positive}) = 0\). This occurs when \(\sin(\omega T/2)\) and \(\omega T/2\) have the same sign.
*   If \(T \frac{\sin(\omega T/2)}{\omega T/2} < 0\), then \(\text{atan2}(0, \text{negative}) = \pi\) (or \(-\pi\)). This occurs when \(\sin(\omega T/2)\) and \(\omega T/2\) have opposite signs.
*   If \(T \frac{\sin(\omega T/2)}{\omega T/2} = 0\), this happens at frequencies where \(\sin(\omega T/2) = 0\) but \(\omega T/2 \neq 0\). For these frequencies, the phase is technically undefined, but often conventionally set to 0.

So, the phase spectrum of a rectangular pulse is:

\[
\phi(\omega) = \begin{cases} 0 & \text{if } \frac{\sin(\omega T/2)}{\omega T/2} \ge 0 \\ \pi & \text{if } \frac{\sin(\omega T/2)}{\omega T/2} < 0 \end{cases}
\]

This means the phase is 0 for the main lobe and the positive side lobes of the sinc function, and \(\pi\) for the negative side lobes.

## Common Pitfalls

*   **Using `arctan` instead of `atan2`:** Forgetting to account for the quadrant of the complex number can lead to incorrect phase values. Always use `atan2` for phase calculations.
*   **Assuming a signal is purely real:** Not all signals have real Fourier Transforms. If \(X(\omega)\) has an imaginary component, ignoring it will lead to an incorrect phase.
*   **Ignoring the phase at DC (\(\omega = 0\)):** If your signal is non-zero at \(t=0\) and its FT is well-behaved at \(\omega=0\), the phase at DC is important. For functions like the sinc, the limit as \(\omega \to 0\) needs careful handling.

By mastering the calculation of the phase spectrum, you gain a deeper understanding of the time-domain behavior and spectral characteristics of your signals.

## Supports

- [[skills/mathematics/signals-systems/fourier-transform-analysis/microskills/ctft-phase-calculation|CTFT Phase Calculation]]
