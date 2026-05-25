---
type: "medium"
title: "Applying the Time-Shifting Property for FS/DTFS Coefficient Calculation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/signal-operations/microskills/time-shifting-property-application-fs-dtfs|time-shifting-property-application-fs-dtfs]]"
learning-time-in-minutes: 5
---
# Applying the Time-Shifting Property for FS/DTFS Coefficient Calculation

This lesson focuses on applying the time-shifting property to calculate Fourier Series (FS) and Discrete-Time Fourier Series (DTFS) coefficients. Understanding this property allows us to efficiently determine the frequency content of shifted signals without recomputing everything from scratch.

## What is the Time-Shifting Property?

The Fourier Series (FS) and Discrete-Time Fourier Series (DTFS) represent periodic signals as a sum of complex exponentials. The time-shifting property states how a time shift in the original signal affects its FS/DTFS coefficients.

### For Continuous-Time Fourier Series (FS)

If a signal $x(t)$ has a Fourier Series expansion with coefficients $c_k$, then the shifted signal $x(t - t_0)$ has the Fourier Series expansion with coefficients:

$$ c_k e^{-j k \omega_0 t_0} $$

where:
*   $c_k$ are the FS coefficients of $x(t)$.
*   $t_0$ is the time shift.
*   $\omega_0$ is the fundamental angular frequency ($\omega_0 = 2\pi/T$, where $T$ is the period).
*   $k$ is the harmonic index.

### For Discrete-Time Fourier Series (DTFS)

If a discrete-time signal $x[n]$ has a DTFS expansion with coefficients $d_k$, then the shifted signal $x[n - n_0]$ has the DTFS expansion with coefficients:

$$ d_k e^{-j k \frac{2\pi}{N} n_0} $$

where:
*   $d_k$ are the DTFS coefficients of $x[n]$.
*   $n_0$ is the time shift (in samples).
*   $N$ is the period of the discrete-time signal.
*   $k$ is the harmonic index.

## Why Use the Time-Shifting Property?

Calculating FS/DTFS coefficients directly involves integration (for FS) or summation (for DTFS) over one period. If you have a signal $x(t)$ and you need to find the coefficients for $x(t - t_0)$, you could re-calculate the entire integral/sum. However, if you already know the coefficients for $x(t)$, the time-shifting property provides a shortcut. You simply multiply the original coefficients by a complex exponential term. This is particularly useful when dealing with multiple shifts or when analyzing systems where signals are often delayed.

## Applying the Property: Step-by-Step

Let's outline the general approach for applying this property.

### Step 1: Identify the Original Signal and its Coefficients
Determine the known signal, say $x(t)$ or $x[n]$, and its corresponding FS or DTFS coefficients. If you don't have them, you might need to derive them first using the standard formulas.

### Step 2: Identify the Shifted Signal
Determine the shifted version of the signal. This will be in the form $x(t - t_0)$ or $x[n - n_0]$. Note the value and direction of the time shift ($t_0$ or $n_0$). A positive $t_0$ or $n_0$ indicates a shift to the right (delay), while a negative value indicates a shift to the left (advance).

### Step 3: Determine the Fundamental Frequency
For FS, calculate $\omega_0 = 2\pi/T$. For DTFS, the fundamental frequency is implicitly handled by the term $\frac{2\pi}{N}$ in the exponent, where $N$ is the signal's period.

### Step 4: Apply the Time-Shifting Formula
Use the appropriate formula (FS or DTFS) to find the new coefficients.
*   For FS: New coefficients = (Original $c_k$) $\times e^{-j k \omega_0 t_0}$
*   For DTFS: New coefficients = (Original $d_k$) $\times e^{-j k \frac{2\pi}{N} n_0}$

## Worked Example (DTFS)

Let's consider a discrete-time signal $x[n]$ that is a rectangular pulse of duration 3 samples centered at $n=0$, with period $N=5$. Suppose we have already calculated its DTFS coefficients to be:

$$ d_k = \frac{1}{5} \left( 1 + 2 \cos\left(\frac{2\pi k}{5}\right) \right) $$

Now, let's find the DTFS coefficients for the shifted signal $y[n] = x[n-2]$.

**Step 1: Original Signal and Coefficients**
*   Original signal: $x[n]$
*   Original coefficients: $d_k = \frac{1}{5} \left( 1 + 2 \cos\left(\frac{2\pi k}{5}\right) \right)$

**Step 2: Shifted Signal**
*   Shifted signal: $y[n] = x[n-2]$
*   Time shift: $n_0 = 2$ (a shift to the right by 2 samples)

**Step 3: Fundamental Frequency Term**
The period is $N=5$. The fundamental frequency term in the exponent is $\frac{2\pi}{N} = \frac{2\pi}{5}$.

**Step 4: Apply the Time-Shifting Formula**
The new coefficients, let's call them $d'_k$, are:

$$ d'_k = d_k e^{-j k \frac{2\pi}{5} n_0} $$

Substitute $d_k$ and $n_0 = 2$:

$$ d'_k = \frac{1}{5} \left( 1 + 2 \cos\left(\frac{2\pi k}{5}\right) \right) e^{-j k \frac{2\pi}{5} (2)} $$

$$ d'_k = \frac{1}{5} \left( 1 + 2 \cos\left(\frac{2\pi k}{5}\right) \right) e^{-j \frac{4\pi k}{5}} $$

We can further expand the cosine term using Euler's formula: $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$.

$$ \cos\left(\frac{2\pi k}{5}\right) = \frac{e^{j \frac{2\pi k}{5}} + e^{-j \frac{2\pi k}{5}}}{2} $$

Substitute this back:

$$ d'_k = \frac{1}{5} \left( 1 + 2 \left( \frac{e^{j \frac{2\pi k}{5}} + e^{-j \frac{2\pi k}{5}}}{2} \right) \right) e^{-j \frac{4\pi k}{5}} $$

$$ d'_k = \frac{1}{5} \left( 1 + e^{j \frac{2\pi k}{5}} + e^{-j \frac{2\pi k}{5}} \right) e^{-j \frac{4\pi k}{5}} $$

Distribute the exponential term:

$$ d'_k = \frac{1}{5} \left( e^{-j \frac{4\pi k}{5}} + e^{j \frac{2\pi k}{5}} e^{-j \frac{4\pi k}{5}} + e^{-j \frac{2\pi k}{5}} e^{-j \frac{4\pi k}{5}} \right) $$

$$ d'_k = \frac{1}{5} \left( e^{-j \frac{4\pi k}{5}} + e^{-j \frac{2\pi k}{5}} + e^{-j \frac{6\pi k}{5}} \right) $$

These are the DTFS coefficients for the shifted signal $x[n-2]$. Notice how the original coefficients have been multiplied by the phase factor $e^{-j \frac{4\pi k}{5}}$.

## Common Mistakes to Avoid

*   **Incorrectly identifying the shift direction:** Remember that $x(t - t_0)$ with a positive $t_0$ shifts the signal to the *right* (later in time), and the exponent in the property has a *negative* sign for $t_0$.
*   **Using the wrong fundamental frequency:** Ensure you are using $\omega_0$ for FS and $\frac{2\pi}{N}$ for DTFS in the exponent.
*   **Algebraic errors with complex exponentials:** Be careful when multiplying complex exponentials and when expanding trigonometric functions.

By mastering the time-shifting property, you can significantly simplify the analysis of periodic signals and their transformations in both continuous and discrete time domains.

## Supports

- [[skills/mathematics/signals-systems/signal-operations/microskills/time-shifting-property-application-fs-dtfs|Time-Shifting Property Application (FS/DTFS)]]
