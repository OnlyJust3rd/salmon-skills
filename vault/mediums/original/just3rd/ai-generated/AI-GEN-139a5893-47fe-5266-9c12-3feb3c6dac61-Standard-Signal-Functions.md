---
type: "medium"
title: "Standard Signal Functions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/signal-representation-and-classification/microskills/standard-signal-functions|standard-signal-functions]]"
learning-time-in-minutes: 4
---
# Standard Signal Functions

Welcome to this lesson on standard signal functions, a core component of understanding signal representation. We'll explore the mathematical building blocks that help us describe and analyze signals.

## What are Standard Signal Functions?

Standard signal functions are basic mathematical expressions that represent common types of signals encountered in various fields like electrical engineering, communications, and digital signal processing. Knowing these functions is crucial for modeling, analyzing, and manipulating signals.

## Key Standard Signal Functions

Let's dive into some of the most important standard signal functions:

### 1. Sinusoidal Signals

Sinusoidal signals are fundamental in nature and widely used in signal analysis. They represent oscillations and waves.

*   **General Form:**
    $$ x(t) = A \sin(\omega t + \phi) $$
    or
    $$ x(t) = A \cos(\omega t + \phi) $$

    Where:
    *   $A$ is the **amplitude**: The maximum displacement or value of the signal.
    *   $\omega$ is the **angular frequency**: Determines how fast the signal oscillates, measured in radians per second.
    *   $t$ is **time**: The independent variable.
    *   $\phi$ is the **phase**: Represents the initial shift of the waveform at $t=0$, measured in radians.

*   **Frequency:** The standard frequency $f$ is related to angular frequency by $\omega = 2\pi f$. It's measured in Hertz (Hz), representing cycles per second.
*   **Period:** The period $T$ is the time it takes for one complete cycle of the waveform, and $T = 1/f = 2\pi/\omega$.

**Example:**
A signal $x(t) = 5 \cos(2\pi \cdot 100 t - \pi/4)$ has an amplitude of 5, a frequency of 100 Hz, and an initial phase of $-\pi/4$ radians.

### 2. Exponential Signals

Exponential signals represent growth or decay. They are particularly important in transient analysis of systems.

*   **Continuous-Time Exponential:**
    $$ x(t) = A e^{at} $$

    Where:
    *   $A$ is a scaling factor.
    *   $a$ is a real constant.
        *   If $a > 0$, the signal grows exponentially.
        *   If $a < 0$, the signal decays exponentially.

*   **Discrete-Time Exponential:**
    $$ x[n] = A r^n $$

    Where:
    *   $A$ is a scaling factor.
    *   $r$ is a real or complex constant.
        *   If $|r| < 1$, the signal decays.
        *   If $|r| > 1$, the signal grows.

**Example:**
A signal $x(t) = 10 e^{-2t}$ represents a decaying exponential. A signal $x[n] = 2 (0.5)^n$ represents a decaying discrete-time exponential.

### 3. Unit Step Function

The unit step function, often denoted by $u(t)$ for continuous-time and $u[n]$ for discrete-time, is a simple but powerful function that "turns on" a signal at a specific point in time.

*   **Continuous-Time Unit Step Function:**
    $$ u(t) = \begin{cases} 0, & t < 0 \\ 1, & t \ge 0 \end{cases} $$

    This function is zero for all negative time and jumps to 1 at time $t=0$ and stays there.

*   **Discrete-Time Unit Step Function:**
    $$ u[n] = \begin{cases} 0, & n < 0 \\ 1, & n \ge 0 \end{cases} $$

    Similar to the continuous-time version, it's zero for negative sample indices and 1 for non-negative sample indices.

**Uses:** The unit step function is excellent for representing signals that start or stop abruptly, or for defining causal signals (signals that are zero for $t<0$).

**Example:**
To represent a signal that is zero for $t<5$ and equals $e^{-t}$ for $t \ge 5$, we can write it as $x(t) = e^{-t} u(t-5)$.

### 4. Unit Impulse Function (Dirac Delta Function)

The unit impulse function, also known as the Dirac delta function, is an idealized signal that is infinitely narrow and infinitely tall, with a total area of one. It's a crucial tool for modeling sudden, brief events or as a sampling signal.

*   **Continuous-Time Unit Impulse Function:**
    $$ \delta(t) $$

    It has the property that:
    $$ \int_{-\infty}^{\infty} \delta(t) dt = 1 $$
    and
    $$ \int_{-\infty}^{\infty} f(t) \delta(t - t_0) dt = f(t_0) $$
    for any continuous function $f(t)$. This property is called the "sifting" or "sampling" property.

*   **Discrete-Time Unit Impulse Function (Kronecker Delta):**
    $$ \delta[n] = \begin{cases} 1, & n = 0 \\ 0, & n \ne 0 \end{cases} $$

    This is simpler to visualize as a single spike of value 1 at $n=0$ and zero everywhere else.

**Key Idea:** The unit impulse can be thought of as the derivative of the unit step function.

**Uses:** The unit impulse is used to model impacts, sudden changes, or to represent the sampling process in discrete-time signals.

**Example:**
A signal that is $f(t)$ only at $t=3$ and zero everywhere else can be represented as $f(t) \delta(t-3)$.

## Conclusion

Mastering these standard signal functions – sinusoidal, exponential, unit step, and unit impulse – provides a strong foundation for understanding and working with signals in any context. They are the basic elements that can be combined to represent much more complex signal behaviors.

## Supports

- [[skills/mathematics/signals-systems/signal-representation-and-classification/microskills/standard-signal-functions|Standard Signal Functions]]
