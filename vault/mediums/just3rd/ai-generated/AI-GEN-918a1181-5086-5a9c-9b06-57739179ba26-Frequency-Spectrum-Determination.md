---
type: "medium"
title: "Calculating the Frequency Spectrum of Aperiodic Signals"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/fourier-transform-analysis/microskills/frequency-spectrum-determination|Frequency Spectrum Determination]]"
---
# Calculating the Frequency Spectrum of Aperiodic Signals

This lesson focuses on how to determine the frequency spectrum of aperiodic signals using the Fourier Transform (FT) and Discrete-Time Fourier Transform (DTFT). Understanding the frequency spectrum is crucial for analyzing how signals are composed of different frequencies, which is a fundamental aspect of Fourier Transform Analysis.

## What is a Frequency Spectrum?

The frequency spectrum of a signal provides a representation of the signal's content in the frequency domain. Instead of viewing a signal as a function of time (its time-domain representation), we view it as a function of frequency, showing the amplitude and phase of each sinusoidal component that makes up the signal.

For aperiodic signals, which do not repeat over time, we use specific forms of the Fourier Transform:

*   **Continuous-Time Fourier Transform (CTFT)**: For continuous-time aperiodic signals.
*   **Discrete-Time Fourier Transform (DTFT)**: For discrete-time aperiodic signals.

The output of these transforms is often a complex-valued function of frequency. The **magnitude** of this function gives us the amplitude spectrum, and the **angle** gives us the phase spectrum. For this lesson, we will primarily focus on determining the magnitude spectrum.

## Calculating the Frequency Spectrum

The process for calculating the frequency spectrum differs slightly depending on whether the signal is continuous or discrete.

### Continuous-Time Aperiodic Signals (CTFT)

The CTFT of a continuous-time signal \(x(t)\) is defined as:

\[
X(j\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt
\]

where:
*   \(X(j\omega)\) is the frequency spectrum of \(x(t)\).
*   \(\omega\) is the angular frequency.
*   \(j\) is the imaginary unit.

To find the frequency spectrum, we need to compute this integral for all possible values of \(\omega\).

**Example:** Let's find the frequency spectrum of a rectangular pulse:

\[
x(t) = \begin{cases} 1 & \text{if } -\frac{T}{2} \le t \le \frac{T}{2} \\ 0 & \text{otherwise} \end{cases}
\]

Applying the CTFT integral:

\[
X(j\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt = \int_{-T/2}^{T/2} 1 \cdot e^{-j\omega t} dt
\]

If \(\omega \neq 0\):
\[
X(j\omega) = \left[ \frac{e^{-j\omega t}}{-j\omega} \right]_{-T/2}^{T/2} = \frac{e^{-j\omega T/2} - e^{j\omega T/2}}{-j\omega}
\]

Using Euler's formula, \(e^{i\theta} - e^{-i\theta} = 2j \sin(\theta)\), we can rewrite this:
\[
X(j\omega) = \frac{-(e^{j\omega T/2} - e^{-j\omega T/2})}{-j\omega} = \frac{-2j \sin(\omega T/2)}{-j\omega} = \frac{2 \sin(\omega T/2)}{\omega}
\]

This can be expressed using the sinc function, \( \text{sinc}(x) = \frac{\sin(\pi x)}{\pi x} \). If we normalize the sinc function as \( \text{sinc}(x) = \frac{\sin(x)}{x} \), then:
\[
X(j\omega) = T \cdot \text{sinc}\left(\frac{\omega T}{2}\right)
\]

If \(\omega = 0\):
\[
X(j0) = \int_{-T/2}^{T/2} 1 dt = T
\]

The magnitude spectrum is \( |X(j\omega)| = \left| T \cdot \text{sinc}\left(\frac{\omega T}{2}\right) \right| \). This spectrum has a main lobe centered at DC (\(\omega=0\)) and decays as frequency increases, with nulls at multiples of \( \frac{2\pi}{T} \).

### Discrete-Time Aperiodic Signals (DTFT)

The DTFT of a discrete-time signal \(x[n]\) is defined as:

\[
X(e^{j\omega}) = \mathcal{DTFT}\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] e^{-j\omega n}
\]

where:
*   \(X(e^{j\omega})\) is the frequency spectrum of \(x[n]\).
*   \(\omega\) is the normalized angular frequency (radians per sample). The spectrum is periodic with a period of \(2\pi\).

To find the frequency spectrum, we compute this infinite sum. In practice, for signals that are non-zero over a finite duration, this sum becomes finite.

**Example:** Let's find the frequency spectrum of a discrete-time rectangular pulse:

\[
x[n] = \begin{cases} 1 & \text{if } 0 \le n \le N-1 \\ 0 & \text{otherwise} \end{cases}
\]

Applying the DTFT sum:
\[
X(e^{j\omega}) = \sum_{n=0}^{N-1} 1 \cdot e^{-j\omega n}
\]

This is a finite geometric series with first term \(a=1\), common ratio \(r=e^{-j\omega}\), and \(N\) terms. The sum is given by:
\[
X(e^{j\omega}) = \frac{1 - (e^{-j\omega})^N}{1 - e^{-j\omega}} = \frac{1 - e^{-j\omega N}}{1 - e^{-j\omega}}
\]

We can manipulate this expression to make it more interpretable in terms of magnitude and phase. A common approach is to factor out terms:
\[
X(e^{j\omega}) = e^{-j\omega (N-1)/2} \frac{e^{j\omega (N-1)/2} - e^{-j\omega (N-1)/2}}{e^{j\omega/2} - e^{-j\omega/2}}
\]
\[
X(e^{j\omega}) = e^{-j\omega (N-1)/2} \frac{2j \sin(\omega N/2)}{2j \sin(\omega/2)} = e^{-j\omega (N-1)/2} \frac{\sin(\omega N/2)}{\sin(\omega/2)}
\]

The magnitude spectrum is \( |X(e^{j\omega})| = \left| \frac{\sin(\omega N/2)}{\sin(\omega/2)} \right| \). This spectrum also exhibits a main lobe and side lobes, similar to the continuous-time case, but the exact shape is influenced by the discrete nature and the periodicity of the DTFT.

## Key Takeaways

*   The frequency spectrum reveals the constituent frequencies of a signal.
*   For continuous-time aperiodic signals, use the CTFT integral.
*   For discrete-time aperiodic signals, use the DTFT summation.
*   The magnitude of the transformed function gives the amplitude spectrum.
*   Understanding these transforms allows us to analyze signals in a way that is often more insightful than their time-domain representation alone.

## Supports

- [[skills/mathematics/fourier-transform-analysis/microskills/frequency-spectrum-determination|Frequency Spectrum Determination]]
