---
type: "medium"
title: "Mathematical Signal Models"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/signal-representation-and-classification/microskills/mathematical-signal-models|mathematical-signal-models]]"
learning-time-in-minutes: 5
---
# Mathematical Signal Models

Signals are fundamental to many fields, from engineering and physics to economics and biology. To analyze and understand these signals, we often use mathematical expressions to model them. This lesson focuses on the basic mathematical models used to describe signals.

## What are Mathematical Signal Models?

A mathematical signal model is an equation or a set of equations that describes how a signal behaves over time or some other independent variable. These models allow us to:

*   **Represent:** Precisely define the signal's values.
*   **Analyze:** Understand the signal's properties (e.g., amplitude, frequency, duration).
*   **Predict:** Forecast the signal's behavior in the future or under different conditions.
*   **Manipulate:** Modify or synthesize signals for specific applications.

We often distinguish between **continuous-time** signals, which are defined for all values of time (often denoted by $t$), and **discrete-time** signals, which are defined only at specific, distinct points in time (often denoted by $n$).

## Common Mathematical Signal Models

Several mathematical functions serve as building blocks for describing signals. Here are some of the most fundamental ones:

### 1. The Unit Step Function

The unit step function, often denoted by $u(t)$ for continuous-time and $u[n]$ for discrete-time, is a simple yet crucial function. It represents a signal that is zero before a certain point and then instantly jumps to a value of one and stays there.

**Continuous-Time Unit Step Function:**

$$
u(t) =
\begin{cases}
0 & \text{if } t < 0 \\
1 & \text{if } t \geq 0
\end{cases}
$$

**Discrete-Time Unit Step Function:**

$$
u[n] =
\begin{cases}
0 & \text{if } n < 0 \\
1 & \text{if } n \geq 0
\end{cases}
$$

**Interpretation:**
The unit step function is like a switch that turns "on" at time $t=0$ (or $n=0$). It's useful for modeling events that start at a specific moment and continue indefinitely, such as the application of a constant voltage or the beginning of a process.

**Example:**
A signal $x(t) = 5u(t)$ represents a constant value of 5 that begins at $t=0$ and continues forever.

### 2. The Unit Impulse Function (Dirac Delta Function)

The unit impulse function, also known as the Dirac delta function, is a theoretical construct representing an infinitely short but infinitely strong pulse whose total area is one. It's crucial for modeling very short, sharp events.

**Continuous-Time Unit Impulse Function (Dirac Delta Function):**

The Dirac delta function, $\delta(t)$, is defined by two properties:

1.  $\delta(t) = 0$ for $t \neq 0$
2.  $$ \int_{-\infty}^{\infty} \delta(t) dt = 1 $$

It can also be characterized by its "sifting" property: for any continuous function $f(t)$,
$$ \int_{-\infty}^{\infty} f(t)\delta(t - t_0) dt = f(t_0) $$
This means the impulse function "picks out" the value of the function at the time the impulse occurs.

**Discrete-Time Unit Impulse Function:**

The discrete-time unit impulse function, $\delta[n]$, is simply 1 at $n=0$ and 0 everywhere else.

$$
\delta[n] =
\begin{cases}
1 & \text{if } n = 0 \\
0 & \text{if } n \neq 0
\end{cases}
$$

**Interpretation:**
The unit impulse models instantaneous events, like a hammer striking an object, a brief electrical pulse, or sampling a signal. In discrete time, it's the fundamental building block for constructing other sequences.

**Example:**
A signal $y(t) = 3\delta(t-2)$ represents a single, sharp spike of amplitude 3 occurring precisely at $t=2$.

### 3. Constant Signals

A constant signal is a signal that maintains a fixed value over time.

**Continuous-Time Constant Signal:** $x(t) = C$
**Discrete-Time Constant Signal:** $x[n] = C$

Where $C$ is a constant value. This is a very simple model, but it's useful for representing steady states or DC components in signals.

**Example:** A battery providing a steady 5 volts can be modeled as $V(t) = 5$ volts.

### 4. Exponential Signals

Exponential signals are characterized by their amplitude changing exponentially with time. They are fundamental to understanding systems that exhibit growth or decay.

**Continuous-Time Exponential Signal:** $x(t) = A e^{at}$
**Discrete-Time Exponential Signal:** $x[n] = A a^n$

Where:
*   $A$ is the initial amplitude.
*   $a$ is a constant that determines the rate of growth or decay.
    *   If $a > 1$ (continuous-time) or $|a| > 1$ (discrete-time), the signal grows exponentially.
    *   If $0 < a < 1$ (continuous-time) or $0 < |a| < 1$ (discrete-time), the signal decays exponentially.
    *   If $a$ is negative, the signal oscillates with increasing or decreasing amplitude.

**Example:** Radioactive decay is often modeled using an exponential decay function.

### 5. Sinusoidal Signals

Sinusoidal signals (sine and cosine waves) are ubiquitous in nature and engineering, representing periodic phenomena like sound waves, AC power, and oscillations.

**Continuous-Time Sinusoidal Signal:** $x(t) = A \cos(\omega_0 t + \phi)$ or $x(t) = A \sin(\omega_0 t + \phi)$
**Discrete-Time Sinusoidal Signal:** $x[n] = A \cos(\omega_0 n + \phi)$ or $x[n] = A \sin(\omega_0 n + \phi)$

Where:
*   $A$ is the amplitude (maximum deviation from zero).
*   $\omega_0$ is the angular frequency (radians per unit time for continuous-time, or normalized radians per sample for discrete-time).
*   $\phi$ is the phase (the shift of the waveform along the time axis).

**Example:** An AC voltage signal in a household outlet is a sinusoidal signal.

## Combining Models

More complex signals can be represented by combining these basic mathematical models. For instance, a signal that turns on at a specific time and then exhibits an exponential decay can be modeled as a product of a unit step function and an exponential function.

$$
x(t) = e^{-bt} u(t) \quad \text{for } b > 0
$$

This model represents an exponential decay that starts at $t=0$.

## Conclusion

Understanding these fundamental mathematical models is the first step in comprehending and manipulating signals. They provide the language and tools needed to describe how signals change and behave, forming the bedrock for signal representation and classification.

## Supports

- [[skills/mathematics/signals-systems/signal-representation-and-classification/microskills/mathematical-signal-models|Mathematical Signal Models]]
