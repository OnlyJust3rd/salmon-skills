---
type: "medium"
title: "Computing Fourier Series Coefficients"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/fourier-series-computation/microskills/fourier-series-representation-computation|fourier-series-representation-computation]]"
learning-time-in-minutes: 4
---
# Computing Fourier Series Coefficients

This lesson focuses on the practical skill of computing the Fourier series representation of a periodic function by calculating its coefficients. This builds upon the understanding of what a Fourier series is and how it decomposes a periodic function into a sum of sines and cosines.

## Understanding the Goal

The Fourier series allows us to approximate any periodic function, within certain conditions, as an infinite sum of simple sinusoidal functions. The general form of a Fourier series for a function \(f(x)\) with period \(T\) is:

\[
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{2\pi nx}{T}\right) + b_n \sin\left(\frac{2\pi nx}{T}\right) \right)
\]

Our goal is to find the values of the coefficients \(a_0\), \(a_n\), and \(b_n\) for a given function \(f(x)\). These coefficients are what "tune" the sines and cosines to best match the original function.

## The Formulas for the Coefficients

The coefficients are calculated using integral formulas. For a function \(f(x)\) defined over an interval \([c, c+T]\), the formulas are:

**1. The \(a_0\) Coefficient (Average Value):**
This coefficient represents twice the average value of the function over one period.

\[
a_0 = \frac{2}{T} \int_{c}^{c+T} f(x) \, dx
\]

**2. The \(a_n\) Coefficients (Cosine Terms):**
These coefficients determine the amplitude of the cosine terms at different frequencies.

\[
a_n = \frac{2}{T} \int_{c}^{c+T} f(x) \cos\left(\frac{2\pi nx}{T}\right) \, dx \quad \text{for } n = 1, 2, 3, \dots
\]

**3. The \(b_n\) Coefficients (Sine Terms):**
These coefficients determine the amplitude of the sine terms at different frequencies.

\[
b_n = \frac{2}{T} \int_{c}^{c+T} f(x) \sin\left(\frac{2\pi nx}{T}\right) \, dx \quad \text{for } n = 1, 2, 3, \dots
\]

*Note:* The integration interval \([c, c+T]\) can be any interval of length \(T\). The most convenient interval is often \([0, T]\) or \([-\frac{T}{2}, \frac{T}{2}]\). For simplicity, we will use \([0, T]\) in our examples.

## Worked Example: A Simple Square Wave

Let's compute the Fourier series coefficients for the following square wave function, which has a period \(T=2\):

\[
f(x) = \begin{cases} 1 & \text{if } 0 \le x < 1 \\ -1 & \text{if } 1 \le x < 2 \end{cases}
\]

Here, \(T=2\), and we'll integrate from \(0\) to \(2\).

### Calculating \(a_0\)

\[
a_0 = \frac{2}{2} \int_{0}^{2} f(x) \, dx = \int_{0}^{2} f(x) \, dx
\]

We need to split the integral based on the definition of \(f(x)\):

\[
a_0 = \int_{0}^{1} (1) \, dx + \int_{1}^{2} (-1) \, dx
\]
\[
a_0 = [x]_{0}^{1} + [-x]_{1}^{2}
\]
\[
a_0 = (1 - 0) + (-2 - (-1)) = 1 + (-1) = 0
\]
So, \(a_0 = 0\).

### Calculating \(a_n\)

\[
a_n = \frac{2}{2} \int_{0}^{2} f(x) \cos\left(\frac{2\pi nx}{2}\right) \, dx = \int_{0}^{2} f(x) \cos(n\pi x) \, dx
\]

Again, split the integral:

\[
a_n = \int_{0}^{1} (1) \cos(n\pi x) \, dx + \int_{1}^{2} (-1) \cos(n\pi x) \, dx
\]
\[
a_n = \left[\frac{\sin(n\pi x)}{n\pi}\right]_{0}^{1} - \left[\frac{\sin(n\pi x)}{n\pi}\right]_{1}^{2}
\]
\[
a_n = \left(\frac{\sin(n\pi)}{n\pi} - \frac{\sin(0)}{n\pi}\right) - \left(\frac{\sin(2n\pi)}{n\pi} - \frac{\sin(n\pi)}{n\pi}\right)
\]

Since \(\sin(n\pi) = 0\) and \(\sin(2n\pi) = 0\) for all integer values of \(n\), we get:

\[
a_n = (0 - 0) - (0 - 0) = 0
\]
So, all \(a_n\) coefficients are \(0\). This makes sense intuitively because the function is odd with respect to its midpoint (\(x=1\)), and cosine is an even function.

### Calculating \(b_n\)

\[
b_n = \frac{2}{2} \int_{0}^{2} f(x) \sin\left(\frac{2\pi nx}{2}\right) \, dx = \int_{0}^{2} f(x) \sin(n\pi x) \, dx
\]

Split the integral:

\[
b_n = \int_{0}^{1} (1) \sin(n\pi x) \, dx + \int_{1}^{2} (-1) \sin(n\pi x) \, dx
\]
\[
b_n = \left[-\frac{\cos(n\pi x)}{n\pi}\right]_{0}^{1} - \left[-\frac{\cos(n\pi x)}{n\pi}\right]_{1}^{2}
\]
\[
b_n = \left(-\frac{\cos(n\pi)}{n\pi} - (-\frac{\cos(0)}{n\pi})\right) - \left(-\frac{\cos(2n\pi)}{n\pi} - (-\frac{\cos(n\pi)}{n\pi})\right)
\]
\[
b_n = \left(-\frac{\cos(n\pi)}{n\pi} + \frac{1}{n\pi}\right) - \left(-\frac{1}{n\pi} + \frac{\cos(n\pi)}{n\pi}\right) \quad (\text{since } \cos(0)=1, \cos(2n\pi)=1)
\]
\[
b_n = -\frac{\cos(n\pi)}{n\pi} + \frac{1}{n\pi} + \frac{1}{n\pi} - \frac{\cos(n\pi)}{n\pi}
\]
\[
b_n = \frac{2}{n\pi} - \frac{2\cos(n\pi)}{n\pi}
\]

Now, recall that \(\cos(n\pi)\) alternates between \(-1\) (for odd \(n\)) and \(1\) (for even \(n\)).

*   If \(n\) is even (\(n=2, 4, 6, \dots\)), \(\cos(n\pi) = 1\).
    \(b_n = \frac{2}{n\pi} - \frac{2(1)}{n\pi} = 0\)
*   If \(n\) is odd (\(n=1, 3, 5, \dots\)), \(\cos(n\pi) = -1\).
    \(b_n = \frac{2}{n\pi} - \frac{2(-1)}{n\pi} = \frac{2}{n\pi} + \frac{2}{n\pi} = \frac{4}{n\pi}\)

So, the non-zero \(b_n\) coefficients are for odd \(n\): \(b_1 = \frac{4}{\pi}\), \(b_3 = \frac{4}{3\pi}\), \(b_5 = \frac{4}{5\pi}\), etc.

### The Fourier Series Representation

Putting it all together, the Fourier series for this square wave is:

\[
f(x) = \frac{0}{2} + \sum_{n=1}^{\infty} \left( 0 \cdot \cos(n\pi x) + b_n \sin(n\pi x) \right)
\]
\[
f(x) = \sum_{n \text{ odd}} \frac{4}{n\pi} \sin(n\pi x)
\]
\[
f(x) = \frac{4}{\pi} \left( \sin(\pi x) + \frac{1}{3}\sin(3\pi x) + \frac{1}{5}\sin(5\pi x) + \dots \right)
\]

## Key Takeaways and Common Pitfalls

*   **Periodicity is Crucial:** Ensure you correctly identify the period \(T\) of the function.
*   **Integration Limits:** Use an integration interval of exactly one period. \([0, T]\) is usually the easiest.
*   **Symmetry:** For even functions (\(f(-x) = f(x)\)), all \(b_n\) coefficients are zero. For odd functions (\(f(-x) = -f(x)\)), all \(a_n\) coefficients (including \(a_0\)) are zero. This can save a lot of calculation.
*   **Trigonometric Identities:** Be comfortable with evaluating \(\cos(n\pi)\) and \(\sin(n\pi)\) for integer \(n\).
*   **Integration Techniques:** You might need integration by parts for more complex functions.

By applying these formulas systematically, you can compute the Fourier series coefficients for a wide range of periodic functions.

## Supports

- [[skills/mathematics/signals-systems/fourier-series-computation/microskills/fourier-series-representation-computation|Fourier series representation computation]]
