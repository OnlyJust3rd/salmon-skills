---
type: "medium"
title: "Understanding the Impact of Signal Transformations on Fourier Series Coefficients"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/signal-operations/microskills/fourier-series-coefficient-impact|fourier-series-coefficient-impact]]"
learning-time-in-minutes: 5
---
# Understanding the Impact of Signal Transformations on Fourier Series Coefficients

This lesson explores how basic signal transformations, specifically time reversal and time shifting, affect the Fourier Series (FS) and Discrete-Time Fourier Series (DTFS) coefficients of a signal. This knowledge is crucial for understanding how signal processing operations influence the frequency-domain representation of signals.

## The Essence of Fourier Series Coefficients

The Fourier Series decomposes a periodic signal into a sum of sinusoids at different frequencies. For a continuous-time signal $x(t)$ with period $T$, its FS coefficients are given by:

$$
a_n = \frac{1}{T} \int_0^T x(t) e^{-j n \omega_0 t} dt
$$

where $\omega_0 = \frac{2\pi}{T}$ is the fundamental angular frequency.

For a discrete-time signal $x[n]$ with period $N$, its DTFS coefficients are:

$$
a_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi k n}{N}}
$$

These coefficients, $a_n$ or $a_k$, essentially tell us the amplitude and phase of each sinusoidal component present in the signal. When we transform a signal, these coefficients will change in a predictable way.

## Time Reversal

Time reversal means flipping the signal around the time axis. If we have a signal $x(t)$, its time-reversed version is $x(-t)$.

### Impact on FS Coefficients

Let $y(t) = x(-t)$. We want to find the FS coefficients of $y(t)$, let's call them $b_n$.

$$
b_n = \frac{1}{T} \int_0^T y(t) e^{-j n \omega_0 t} dt
$$

Substitute $y(t) = x(-t)$:

$$
b_n = \frac{1}{T} \int_0^T x(-t) e^{-j n \omega_0 t} dt
$$

Let $\tau = -t$. Then $dt = -d\tau$. When $t=0$, $\tau=0$. When $t=T$, $\tau=-T$.
The integral becomes:

$$
b_n = \frac{1}{T} \int_0^{-T} x(\tau) e^{-j n \omega_0 (-\tau)} (-d\tau)
$$

$$
b_n = \frac{1}{T} \int_{-T}^0 x(\tau) e^{j n \omega_0 \tau} d\tau
$$

Since the integral is over a full period, and the integrand $x(\tau) e^{j n \omega_0 \tau}$ has the same value for $\tau$ and $\tau+T$ if $x(\tau)$ is periodic with period $T$, we can shift the integration limits. A more direct way is to recognize the relationship with the complex conjugate of the original coefficients.

If $a_n$ are the FS coefficients of $x(t)$, then the FS coefficients of $x(-t)$ are $a_{-n}^*$. The asterisk denotes the complex conjugate.

### Impact on DTFS Coefficients

Let $y[n] = x[-n]$. We want to find the DTFS coefficients of $y[n]$, let's call them $b_k$.

$$
b_k = \frac{1}{N} \sum_{n=0}^{N-1} y[n] e^{-j \frac{2\pi k n}{N}}
$$

Substitute $y[n] = x[-n]$:

$$
b_k = \frac{1}{N} \sum_{n=0}^{N-1} x[-n] e^{-j \frac{2\pi k n}{N}}
$$

Let $m = -n$. As $n$ goes from $0$ to $N-1$, $m$ goes from $0$ to $-(N-1)$. We can rewrite this summation to cover a full period. For example, as $n$ goes from $0$ to $N-1$, $-n$ modulo $N$ will also cover all values from $0$ to $N-1$. A simpler approach is to relate it to the complex conjugate of the original coefficients.

If $a_k$ are the DTFS coefficients of $x[n]$, then the DTFS coefficients of $x[-n]$ are $a_{-k}^*$.

**Key Takeaway:** Time reversal of a signal results in the complex conjugate of the coefficients at the negative harmonic indices.

## Time Shifting

Time shifting means delaying or advancing the signal in time. If we have a signal $x(t)$, a time-shifted version is $x(t - t_0)$ for a continuous-time signal, and $x[n - n_0]$ for a discrete-time signal.

### Impact on FS Coefficients

Let $y(t) = x(t - t_0)$. We want to find the FS coefficients of $y(t)$, let's call them $b_n$.

$$
b_n = \frac{1}{T} \int_0^T y(t) e^{-j n \omega_0 t} dt
$$

Substitute $y(t) = x(t - t_0)$:

$$
b_n = \frac{1}{T} \int_0^T x(t - t_0) e^{-j n \omega_0 t} dt
$$

Let $\tau = t - t_0$. Then $dt = d\tau$. When $t=0$, $\tau = -t_0$. When $t=T$, $\tau = T - t_0$.

$$
b_n = \frac{1}{T} \int_{-t_0}^{T-t_0} x(\tau) e^{-j n \omega_0 (\tau + t_0)} d\tau
$$

$$
b_n = \frac{1}{T} \int_{-t_0}^{T-t_0} x(\tau) e^{-j n \omega_0 \tau} e^{-j n \omega_0 t_0} d\tau
$$

Since $e^{-j n \omega_0 t_0}$ is a constant with respect to the integration variable $\tau$, we can pull it out. Also, since the integration is over a full period of $x(\tau)$, the limits can be shifted without changing the value of the integral.

$$
b_n = e^{-j n \omega_0 t_0} \left( \frac{1}{T} \int_{-t_0}^{T-t_0} x(\tau) e^{-j n \omega_0 \tau} d\tau \right)
$$

The integral part is the definition of the $n$-th FS coefficient of $x(t)$, which is $a_n$.

$$
b_n = a_n e^{-j n \omega_0 t_0}
$$

### Impact on DTFS Coefficients

Let $y[n] = x[n - n_0]$. We want to find the DTFS coefficients of $y[n]$, let's call them $b_k$.

$$
b_k = \frac{1}{N} \sum_{n=0}^{N-1} y[n] e^{-j \frac{2\pi k n}{N}}
$$

Substitute $y[n] = x[n - n_0]$:

$$
b_k = \frac{1}{N} \sum_{n=0}^{N-1} x[n - n_0] e^{-j \frac{2\pi k n}{N}}
$$

Let $m = n - n_0$. Then $n = m + n_0$, and $dn = dm$. The summation limits change. As $n$ goes from $0$ to $N-1$, $m$ goes from $-n_0$ to $N-1-n_0$.

$$
b_k = \frac{1}{N} \sum_{m=-n_0}^{N-1-n_0} x[m] e^{-j \frac{2\pi k (m + n_0)}{N}}
$$

$$
b_k = \frac{1}{N} \sum_{m=-n_0}^{N-1-n_0} x[m] e^{-j \frac{2\pi k m}{N}} e^{-j \frac{2\pi k n_0}{N}}
$$

The term $e^{-j \frac{2\pi k n_0}{N}}$ is a constant with respect to $m$. The summation is over a full period of $x[m]$. Thus, we can shift the limits to $0$ to $N-1$.

$$
b_k = e^{-j \frac{2\pi k n_0}{N}} \left( \frac{1}{N} \sum_{m=0}^{N-1} x[m] e^{-j \frac{2\pi k m}{N}} \right)
$$

The term in the parenthesis is the $k$-th DTFS coefficient of $x[n]$, which is $a_k$.

$$
b_k = a_k e^{-j \frac{2\pi k n_0}{N}}
$$

**Key Takeaway:** Time shifting a signal by $t_0$ (or $n_0$) introduces a phase shift in its Fourier Series coefficients, proportional to the harmonic index and the shift amount.

## Summary Table

Here's a quick summary of the effects:

| Transformation      | Continuous-Time Signal $x(t)$ with FS coefficients $a_n$ | Discrete-Time Signal $x[n]$ with DTFS coefficients $a_k$ |
| :------------------ | :------------------------------------------------------- | :------------------------------------------------------- |
| Time Reversal       | $x(-t)$ has FS coefficients $a_{-n}^*$                     | $x[-n]$ has DTFS coefficients $a_{-k}^*$                   |
| Time Shifting       | $x(t - t_0)$ has FS coefficients $a_n e^{-j n \omega_0 t_0}$ | $x[n - n_0]$ has DTFS coefficients $a_k e^{-j \frac{2\pi k n_0}{N}}$ |

Understanding these relationships allows us to predict how the frequency content of a signal changes when we apply common signal processing operations, without needing to recompute the entire Fourier Series. This is a fundamental concept in analyzing and manipulating signals in both the time and frequency domains.

## Supports

- [[skills/mathematics/signals-systems/signal-operations/microskills/fourier-series-coefficient-impact|Fourier Series Coefficient Impact]]
