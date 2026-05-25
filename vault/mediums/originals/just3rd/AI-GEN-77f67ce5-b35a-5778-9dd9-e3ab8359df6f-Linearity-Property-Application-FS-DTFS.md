---
type: "medium"
title: "Applying the Linearity Property for Simplified Fourier Series Calculations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/linearity-property-application-fs-dtfs|linearity-property-application-fs-dtfs]]"
related-skills:
  - "[[skills/mathematics/signals-systems/system-property-analysis/system-property-analysis|system-property-analysis]]"
learning-time-in-minutes: 6
---
# Applying the Linearity Property for Simplified Fourier Series Calculations

This lesson focuses on applying the **linearity property** to simplify the computation of Fourier Series (FS) and Discrete-Time Fourier Series (DTFS) coefficients for composite signals. Understanding this property is crucial for efficiently analyzing signals composed of simpler, known components.

## What is the Linearity Property?

The linearity property is a fundamental characteristic of many mathematical systems, including those used in Fourier analysis. It states that a linear system's response to a sum of inputs is the sum of its responses to each individual input, scaled by the same constants.

In the context of Fourier Series, this means that if we know the Fourier Series coefficients for individual signals, we can easily find the coefficients for a signal that is a linear combination of those individual signals.

Mathematically, if:
*   $x_1(t)$ has a Fourier Series with coefficients $c_{1,k}$
*   $x_2(t)$ has a Fourier Series with coefficients $c_{2,k}$

Then, a signal $x(t) = ax_1(t) + bx_2(t)$ (where $a$ and $b$ are constants) will have a Fourier Series with coefficients $c_{k}$ given by:

$$ c_k = a \cdot c_{1,k} + b \cdot c_{2,k} $$

The same principle applies to Discrete-Time Fourier Series (DTFS). If:
*   $x_1[n]$ has a DTFS with coefficients $X_{1,k}$
*   $x_2[n]$ has a DTFS with coefficients $X_{2,k}$

Then, for $x[n] = ax_1[n] + bx_2[n]$, the DTFS coefficients $X_k$ are:

$$ X_k = a \cdot X_{1,k} + b \cdot X_{2,k} $$

## Why Use the Linearity Property?

Directly calculating the Fourier Series or DTFS coefficients for a complex signal can be computationally intensive and time-consuming. The linearity property allows us to:

*   **Break down complex signals:** Decompose a complicated signal into simpler components whose Fourier Series/DTFS coefficients are already known or easily derivable.
*   **Leverage existing knowledge:** Utilize pre-calculated coefficients for basic signals (e.g., sinusoids, rectangular pulses).
*   **Reduce computation:** Avoid repetitive integral calculations for each part of a composite signal.

## Applying the Linearity Property: Worked Examples

Let's illustrate with examples for both Fourier Series (FS) and Discrete-Time Fourier Series (DTFS).

### Fourier Series (FS) Example

**Problem:** Find the Fourier Series coefficients for the signal $x(t) = \cos(2\pi t) + 2\sin(4\pi t)$. Assume the fundamental period is $T=1$.

**Solution:**

We know the FS for cosine and sine functions. The FS for $A\cos(\omega_0 t)$ is $A\pi \delta(\omega - \omega_0) + A\pi \delta(\omega + \omega_0)$ and for $A\sin(\omega_0 t)$ is $-jA\pi \delta(\omega - \omega_0) + jA\pi \delta(\omega + \omega_0)$ in the continuous-time Fourier Transform domain, which translates to specific coefficients in the FS representation.

However, a more direct approach for periodic signals is to use the definition $x(t) = \sum_{k=-\infty}^{\infty} c_k e^{jk\omega_0 t}$.

1.  **Identify Components:**
    *   Signal 1: $x_1(t) = \cos(2\pi t)$. Here, $A=1$, $\omega_0 = 2\pi$. This corresponds to the fundamental frequency for $T=1$. The FS representation is $\cos(2\pi t) = \frac{1}{2}e^{j2\pi t} + \frac{1}{2}e^{-j2\pi t}$. So, $c_{1,1} = \frac{1}{2}$, $c_{1,-1} = \frac{1}{2}$, and all other $c_{1,k} = 0$.

    *   Signal 2: $x_2(t) = 2\sin(4\pi t)$. Here, $A=2$, $\omega_0 = 4\pi$. This frequency is twice the fundamental frequency. Using Euler's formula, $2\sin(4\pi t) = 2 \left(\frac{e^{j4\pi t} - e^{-j4\pi t}}{2j}\right) = \frac{1}{j}e^{j4\pi t} - \frac{1}{j}e^{-j4\pi t}$.
        Since $\omega_0 = 2\pi$, $4\pi t$ corresponds to $k=2$ and $-4\pi t$ to $k=-2$.
        So, $c_{2,2} = \frac{1}{j} = -j$, $c_{2,-2} = -\frac{1}{j} = j$, and all other $c_{2,k} = 0$.

2.  **Apply Linearity:** The composite signal is $x(t) = x_1(t) + x_2(t)$. Using the linearity property with $a=1$ and $b=1$:
    $c_k = 1 \cdot c_{1,k} + 1 \cdot c_{2,k}$.

3.  **Determine Coefficients:**
    *   For $k=1$: $c_1 = c_{1,1} + c_{2,1} = \frac{1}{2} + 0 = \frac{1}{2}$.
    *   For $k=-1$: $c_{-1} = c_{1,-1} + c_{2,-1} = \frac{1}{2} + 0 = \frac{1}{2}$.
    *   For $k=2$: $c_2 = c_{1,2} + c_{2,2} = 0 + (-j) = -j$.
    *   For $k=-2$: $c_{-2} = c_{1,-2} + c_{2,-2} = 0 + j = j$.
    *   For all other $k$, $c_k = 0 + 0 = 0$.

Therefore, the Fourier Series coefficients for $x(t) = \cos(2\pi t) + 2\sin(4\pi t)$ are $c_1 = \frac{1}{2}$, $c_{-1} = \frac{1}{2}$, $c_2 = -j$, $c_{-2} = j$, and $c_k = 0$ for all other $k$.

### Discrete-Time Fourier Series (DTFS) Example

**Problem:** Find the DTFS coefficients for the signal $x[n] = 3 \cdot \text{rect}(n/4) + \sin(\frac{\pi n}{2})$, where $\text{rect}(n/4)$ is a rectangular pulse of width 4 centered at $n=0$ (i.e., $1$ for $-1 \le n \le 1$ and $0$ otherwise) and the sampling period is $N=4$.

**Solution:**

The DTFS is defined for a periodic signal $x[n]$ with period $N$ as:
$$ x[n] = \sum_{k=0}^{N-1} X_k e^{j\frac{2\pi k}{N}n} $$
and the coefficients are given by:
$$ X_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-j\frac{2\pi k}{N}n} $$

For this problem, $N=4$.

1.  **Identify Components and their DTFS Coefficients:**

    *   **Component 1: $x_1[n] = 3 \cdot \text{rect}(n/4)$**
        The rectangular pulse $\text{rect}(n/4)$ for $N=4$ is:
        $\text{rect}(n/4) = \begin{cases} 1 & \text{for } -1 \le n \le 1 \\ 0 & \text{otherwise} \end{cases}$
        Since we need to consider the signal over one period ($N=4$, so $n=0, 1, 2, 3$), the values are:
        $\text{rect}(0/4) = 1$
        $\text{rect}(1/4) = 1$
        $\text{rect}(2/4) = 0$ (since $2 > 1$)
        $\text{rect}(3/4) = 0$ (since $3 > 1$)
        So, within the period $n=0,1,2,3$, $\text{rect}(n/4)$ is $1, 1, 0, 0$.
        The signal $x_1[n]$ is $3, 3, 0, 0$ for $n=0, 1, 2, 3$.

        Let's find its DTFS coefficients $X_{1,k}$:
        $$ X_{1,k} = \frac{1}{4} \sum_{n=0}^{3} x_1[n] e^{-j\frac{2\pi k}{4}n} = \frac{1}{4} \sum_{n=0}^{3} x_1[n] e^{-j\frac{\pi k}{2}n} $$
        $X_{1,0} = \frac{1}{4} (3 \cdot e^0 + 3 \cdot e^0 + 0 + 0) = \frac{1}{4}(3+3) = \frac{6}{4} = \frac{3}{2}$
        $X_{1,1} = \frac{1}{4} (3 \cdot e^{-j\frac{\pi}{2}} + 3 \cdot e^{-j\frac{\pi}{2}} + 0 + 0) = \frac{1}{4}(3(-j) + 3(-j)) = \frac{1}{4}(-6j) = -\frac{3}{2}j$
        $X_{1,2} = \frac{1}{4} (3 \cdot e^{-j\pi} + 3 \cdot e^{-j\pi} + 0 + 0) = \frac{1}{4}(3(-1) + 3(-1)) = \frac{1}{4}(-6) = -\frac{3}{2}$
        $X_{1,3} = \frac{1}{4} (3 \cdot e^{-j\frac{3\pi}{2}} + 3 \cdot e^{-j\frac{3\pi}{2}} + 0 + 0) = \frac{1}{4}(3(j) + 3(j)) = \frac{1}{4}(6j) = \frac{3}{2}j$
        So, for $x_1[n]$, the coefficients are $X_{1,0}=\frac{3}{2}, X_{1,1}=-\frac{3}{2}j, X_{1,2}=-\frac{3}{2}, X_{1,3}=\frac{3}{2}j$.

    *   **Component 2: $x_2[n] = \sin(\frac{\pi n}{2})$**
        The frequency term is $\frac{\pi n}{2}$. Comparing with $e^{j\frac{2\pi k}{N}n}$, we have $\frac{2\pi k}{4} = \frac{\pi k}{2}$.
        So, for $\frac{\pi n}{2}$, we have $\frac{\pi k}{2} = \frac{\pi}{2}$, which means $k=1$.
        We know that $\sin(\theta) = \frac{e^{j\theta} - e^{-j\theta}}{2j}$.
        So, $\sin(\frac{\pi n}{2}) = \frac{e^{j\frac{\pi n}{2}} - e^{-j\frac{\pi n}{2}}}{2j}$.
        The term $e^{j\frac{\pi n}{2}}$ corresponds to $k=1$.
        The term $e^{-j\frac{\pi n}{2}}$ corresponds to $k=-1$. Since our coefficient index $k$ runs from $0$ to $N-1$, we express $k=-1$ modulo $N=4$ as $k=3$.
        Therefore, $\sin(\frac{\pi n}{2}) = \frac{1}{2j}e^{j\frac{2\pi (1)}{4}n} - \frac{1}{2j}e^{j\frac{2\pi (3)}{4}n}$.
        The DTFS coefficients for $\sin(\frac{\pi n}{2})$ are $X_{2,1} = \frac{1}{2j} = -\frac{j}{2}$ and $X_{2,3} = -\frac{1}{2j} = \frac{j}{2}$. All other $X_{2,k}=0$.

2.  **Apply Linearity:** The composite signal is $x[n] = 1 \cdot x_1[n] + 1 \cdot x_2[n]$.
    Using the linearity property with $a=1$ and $b=1$:
    $X_k = 1 \cdot X_{1,k} + 1 \cdot X_{2,k}$.

3.  **Determine Coefficients:**
    *   For $k=0$: $X_0 = X_{1,0} + X_{2,0} = \frac{3}{2} + 0 = \frac{3}{2}$.
    *   For $k=1$: $X_1 = X_{1,1} + X_{2,1} = -\frac{3}{2}j + (-\frac{j}{2}) = -\frac{4}{2}j = -2j$.
    *   For $k=2$: $X_2 = X_{1,2} + X_{2,2} = -\frac{3}{2} + 0 = -\frac{3}{2}$.
    *   For $k=3$: $X_3 = X_{1,3} + X_{2,3} = \frac{3}{2}j + \frac{j}{2} = \frac{4}{2}j = 2j$.

Therefore, the DTFS coefficients for $x[n] = 3 \cdot \text{rect}(n/4) + \sin(\frac{\pi n}{2})$ with $N=4$ are $X_0 = \frac{3}{2}$, $X_1 = -2j$, $X_2 = -\frac{3}{2}$, and $X_3 = 2j$.

## Common Mistakes to Avoid

*   **Incorrectly identifying fundamental periods:** Ensure that the fundamental period $T$ (for FS) or $N$ (for DTFS) is correctly determined for all components of the composite signal, or that you are using a common period.
*   **Mismatched frequencies/frequencies:** When combining components, ensure their frequencies align with the harmonic series defined by the fundamental frequency ($\omega_0$ for FS, $\frac{2\pi}{N}$ for DTFS). If frequencies don't align as integer multiples, direct application of linearity might require considering the least common multiple of the periods.
*   **Forgetting coefficients for negative indices (FS):** For FS, remember that coefficients for $k$ and $-k$ are often related, especially for real signals.
*   **Confusing FS and DTFS formulas:** Use the correct definitions and formulas for each type of Fourier series.

By mastering the linearity property, you can significantly streamline the process of analyzing composite signals in both continuous and discrete time.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/linearity-property-application-fs-dtfs|Linearity Property Application (FS/DTFS)]]
