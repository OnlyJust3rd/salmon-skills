---
type: "medium"
title: "Calculating the \\\\(b_n\\\\) Fourier Coefficients"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/fourier-series-computation/microskills/fourier-coefficient-bn-calculation|fourier-coefficient-bn-calculation]]"
related-skills:
  - "[[skills/mathematics/signals-systems/fourier-series-computation/fourier-series-computation|fourier-series-computation]]"
learning-time-in-minutes: 4
---
# Calculating the \(b_n\) Fourier Coefficients

This lesson focuses on a specific part of computing the Fourier series representation of a periodic function: calculating the \(b_n\) coefficients. These coefficients, along with \(a_0\) and \(a_n\), help us express a complex periodic waveform as a sum of simpler sine and cosine waves.

## Understanding the \(b_n\) Coefficients

The \(b_n\) coefficients represent the amplitude of the sine wave components at different frequencies within the Fourier series. They are particularly important for functions that have odd symmetry.

The general formula for the \(b_n\) coefficient for a function \(f(x)\) with period \(T = 2L\) is:

\[
b_n = \frac{2}{T} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx
\]

where \(n\) is a positive integer (\(n = 1, 2, 3, \ldots\)).

If the function is defined over the interval \([0, T]\), the formula can be written as:

\[
b_n = \frac{2}{T} \int_{0}^{T} f(x) \sin\left(\frac{2n\pi x}{T}\right) dx
\]

For a function with period \(2\pi\) (so \(L=\pi\)), the formula simplifies to:

\[
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) dx
\]

or

\[
b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) dx \quad \text{(if } f(x) \text{ is odd)}
\]

### Key Considerations for \(b_n\)

*   **Symmetry:** If \(f(x)\) is an even function (\(f(-x) = f(x)\)), then \(f(x)\sin(nx)\) is an odd function, and the integral from \(-L\) to \(L\) will be zero. Therefore, \(b_n = 0\) for even functions.
*   **Odd Functions:** If \(f(x)\) is an odd function (\(f(-x) = -f(x)\)), then \(f(x)\sin(nx)\) is an even function, and the integral from \(-L\) to \(L\) can be simplified to twice the integral from \(0\) to \(L\).
*   **Interval of Integration:** Always use the interval over which the function is defined or one full period. The choice of \([-L, L]\) or \([0, T]\) (where \(T=2L\)) depends on the function definition and convenience.

## Worked Example: Calculating \(b_n\) for a Square Wave

Let's calculate the \(b_n\) coefficients for the following square wave function, which has a period of \(T=2\pi\):

\[
f(x) = \begin{cases} 1 & \text{if } 0 < x < \pi \\ -1 & \text{if } -\pi < x < 0 \end{cases}
\]

This function is an odd function because \(f(-x) = -f(x)\).

Here, \(T = 2\pi\), so \(L = \pi\). The formula for \(b_n\) becomes:

\[
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) dx
\]

Since \(f(x)\) is odd, we can simplify the integral:

\[
b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x) \sin(nx) dx
\]

In the interval \((0, \pi)\), \(f(x) = 1\). So, the integral becomes:

\[
b_n = \frac{2}{\pi} \int_{0}^{\pi} (1) \sin(nx) dx
\]

Now, let's evaluate the integral:

\[
b_n = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_{0}^{\pi}
\]

\[
b_n = \frac{2}{\pi} \left( -\frac{\cos(n\pi)}{n} - \left(-\frac{\cos(0)}{n}\right) \right)
\]

\[
b_n = \frac{2}{\pi} \left( -\frac{\cos(n\pi)}{n} + \frac{1}{n} \right)
\]

\[
b_n = \frac{2}{n\pi} (1 - \cos(n\pi))
\]

Now, let's evaluate this for different values of \(n\):

*   **If \(n\) is even** (e.g., \(n=2, 4, 6, \ldots\)): \(n\pi\) is an even multiple of \(\pi\), so \(\cos(n\pi) = 1\).
    \[
    b_n = \frac{2}{n\pi} (1 - 1) = 0
    \]
*   **If \(n\) is odd** (e.g., \(n=1, 3, 5, \ldots\)): \(n\pi\) is an odd multiple of \(\pi\), so \(\cos(n\pi) = -1\).
    \[
    b_n = \frac{2}{n\pi} (1 - (-1)) = \frac{2}{n\pi} (2) = \frac{4}{n\pi}
    \]

So, the \(b_n\) coefficients for this square wave are:

*   \(b_n = 0\) for even \(n\)
*   \(b_n = \frac{4}{n\pi}\) for odd \(n\)

This means the sine components of the Fourier series will only appear at odd frequencies.

## Common Mistakes to Avoid

1.  **Incorrect Interval:** Using an interval that is not a full period of the function can lead to wrong results.
2.  **Ignoring Symmetry:** Failing to recognize and utilize function symmetry (even or odd) can make calculations unnecessarily complex or lead to errors. For example, assuming \(b_n \neq 0\) for an even function.
3.  **Integration Errors:** Basic calculus mistakes during integration can propagate through the entire calculation. Double-check your integration steps.
4.  **Confusing \(a_n\) and \(b_n\):** Remember that \(a_n\) involves \(\cos(nx)\) and \(b_n\) involves \(\sin(nx)\).
5.  **Forgetting the \(n\) in the Denominator:** When integrating \(\sin(nx)\) or \(\cos(nx)\), the \(n\) often appears in the denominator. Ensure it's correctly handled, especially when evaluating at the limits.

By carefully applying the formula and considering the properties of the function, you can accurately compute the \(b_n\) Fourier coefficients.

## Supports

- [[skills/mathematics/signals-systems/fourier-series-computation/microskills/fourier-coefficient-bn-calculation|Fourier coefficient bn calculation]]
