---
type: "medium"
title: "Mathematical Signal Representation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/signal-representation-and-classification/microskills/mathematical-signal-representation|mathematical-signal-representation]]"
related-skills:
  - "[[skills/mathematics/signals-systems/signal-representation-and-classification/signal-representation-and-classification|signal-representation-and-classification]]"
learning-time-in-minutes: 5
---
# Mathematical Signal Representation

In the world of signal processing, signals are the raw material. To understand, manipulate, and analyze them, we first need a way to describe them mathematically. This lesson focuses on how mathematical models and functions serve as the language for representing signals, both continuous-time and discrete-time.

## What is a Mathematical Signal Representation?

A mathematical signal representation is essentially a function or a set of equations that precisely defines the value of a signal at any given point in time (or space, depending on the signal's nature). Think of it like a recipe for a signal: it tells you exactly what the signal "is" at every moment.

This representation is crucial for several reasons:

*   **Precise Definition:** It removes ambiguity. Instead of a vague description, we have an exact mathematical form.
*   **Analysis:** Mathematical tools and theorems can be applied directly to these representations to extract meaningful information about the signal (e.g., its frequency content, its energy).
*   **Synthesis:** We can generate signals with specific desired properties by creating their mathematical representations.
*   **Simulation:** Computers can easily work with mathematical functions to simulate real-world signal behavior.

## Continuous-Time vs. Discrete-Time Signals

The fundamental difference lies in how we observe or sample the signal's value.

### Continuous-Time Signals

A continuous-time signal, often denoted by $x(t)$, has a value defined for every instant of time $t$ within a given interval. Time $t$ can take on any real value.

**Mathematical Representation:**

These signals are typically represented by functions of a continuous variable, $t$.

*   **Example 1: A Sinusoidal Signal**
    A common example is a sine wave:
    $$
    x(t) = A \sin(\omega t + \phi)
    $$
    Here:
    *   $A$ is the amplitude (maximum value).
    *   $\omega$ is the angular frequency (how fast it oscillates).
    *   $t$ is the continuous time variable.
    *   $\phi$ is the phase shift (horizontal shift).

*   **Example 2: An Exponential Signal**
    An exponentially decaying signal:
    $$
    x(t) = Be^{-at} u(t)
    $$
    Here:
    *   $B$ is a scaling factor.
    *   $a$ is a positive constant determining the decay rate.
    *   $u(t)$ is the **unit step function**, which is 0 for $t < 0$ and 1 for $t \geq 0$. This function is used to define when the signal "starts."

**Key Idea:** For continuous-time signals, the domain of the independent variable ($t$) is the set of all real numbers (or a continuous subset).

### Discrete-Time Signals

A discrete-time signal, often denoted by $x[n]$, has a value defined only at specific, distinct points in time. These points are usually indexed by an integer $n$. Think of it as snapshots of a continuous signal taken at regular intervals.

**Mathematical Representation:**

These signals are represented by sequences or functions of an integer variable, $n$.

*   **Example 1: A Discrete Sinusoidal Signal**
    If we sample the continuous sine wave $A \sin(\omega t + \phi)$ at regular intervals $T$, where $t = nT$, we get:
    $$
    x[n] = A \sin(\omega nT + \phi)
    $$
    Often, we define a new discrete frequency variable, $\Omega = \omega T$. So, the representation becomes:
    $$
    x[n] = A \sin(\Omega n + \phi)
    $$

*   **Example 2: A Discrete Unit Step Signal**
    The discrete unit step function, $u[n]$, is defined as:
    $$
    u[n] = \begin{cases} 0 & \text{if } n < 0 \\ 1 & \text{if } n \geq 0 \end{cases}
    $$

*   **Example 3: A Discrete Exponential Signal**
    $$
    x[n] = C a^n u[n]
    $$
    Here:
    *   $C$ is a scaling factor.
    *   $a$ is a constant that determines the behavior (growth or decay).
    *   $u[n]$ is the discrete unit step function.

**Key Idea:** For discrete-time signals, the domain of the independent variable ($n$) is the set of integers (or a discrete subset).

## Visualizing Signals in the Time Domain

The time domain representation of a signal shows its amplitude (or value) as a function of time. This is often the most intuitive way to understand a signal's behavior.

### Continuous-Time Visualization

A graph of $x(t)$ versus $t$.

*   **Example: $x(t) = 5 \sin(2\pi \cdot 10 t)$**
    This is a sine wave with amplitude 5, oscillating 10 times per second (10 Hz). On a graph, you would see a smooth, continuous curve oscillating between +5 and -5.

### Discrete-Time Visualization

A graph of $x[n]$ versus $n$. This is typically shown as a series of points (or impulses) at integer values of $n$.

*   **Example: $x[n] = 3 \cdot (0.8)^n u[n]$**
    This represents a decaying exponential sequence.
    *   At $n=0$, $x[0] = 3 \cdot (0.8)^0 \cdot 1 = 3$.
    *   At $n=1$, $x[1] = 3 \cdot (0.8)^1 \cdot 1 = 2.4$.
    *   At $n=2$, $x[2] = 3 \cdot (0.8)^2 \cdot 1 = 1.92$.
    On a graph, you would see points at $(0, 3), (1, 2.4), (2, 1.92)$, and so on, with the values decreasing as $n$ increases.

## Common Mathematical Functions Used

Many fundamental mathematical functions are used to build signal representations:

*   **Sinusoids (Sine and Cosine):** Represent periodic oscillations.
*   **Exponentials:** Represent growth or decay.
*   **Unit Step Function ($u(t)$ or $u[n]$):** Marks the beginning of a signal.
*   **Unit Impulse Function (Dirac Delta $\delta(t)$ or Kronecker Delta $\delta[n]$):** Represents a signal that is infinitely strong at a single point in time and zero everywhere else. Crucial for modeling very short events or for sampling theory.
*   **Ramp Function:** Represents a signal that increases linearly with time.

Understanding these basic building blocks and how they are combined into mathematical functions is the first step to effectively representing and analyzing any signal.

## Supports

- [[skills/mathematics/signals-systems/signal-representation-and-classification/microskills/mathematical-signal-representation|Mathematical Signal Representation]]
