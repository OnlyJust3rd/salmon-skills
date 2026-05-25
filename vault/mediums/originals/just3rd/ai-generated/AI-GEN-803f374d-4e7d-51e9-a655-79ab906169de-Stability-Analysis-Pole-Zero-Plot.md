---
type: "medium"
title: "Stability Analysis Using Pole-Zero Plots"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/stability-analysis-pole-zero-plot|stability-analysis-pole-zero-plot]]"
learning-time-in-minutes: 4
---
# Stability Analysis Using Pole-Zero Plots

This lesson focuses on a key aspect of analyzing system properties: determining system stability by examining pole-zero plots. Understanding system stability is crucial for designing reliable and predictable systems in various engineering and signal processing applications.

## What is Stability?

A system is considered **stable** if its output remains bounded for all bounded inputs. In simpler terms, a stable system will not "blow up" or produce infinitely large outputs when given a reasonable input. If a system is not stable, it's called **unstable**.

The location of poles in a system's transfer function is directly related to its stability. A pole is a value of 's' (for continuous-time systems) or 'z' (for discrete-time systems) that makes the denominator of the system's transfer function equal to zero.

## Stability and Pole Locations

The relationship between pole locations and stability depends on whether we are dealing with continuous-time or discrete-time systems.

### Continuous-Time Systems (Laplace Domain)

For continuous-time systems represented by a transfer function \(H(s)\), stability is determined by the real part of the poles in the s-plane.

*   **Stable:** All poles lie in the **left-half plane** (i.e., their real parts are negative). This means the impulse response of the system will decay to zero over time.
*   **Marginally Stable:** One or more poles lie on the **imaginary axis** (real part is zero), and all other poles are in the left-half plane. The impulse response may oscillate or remain constant but does not grow unbounded.
*   **Unstable:** One or more poles lie in the **right-half plane** (i.e., their real parts are positive). This means the impulse response will grow unbounded over time.

### Discrete-Time Systems (Z-Domain)

For discrete-time systems represented by a transfer function \(H(z)\), stability is determined by the magnitude of the poles in the z-plane.

*   **Stable:** All poles lie **inside the unit circle** (i.e., their magnitudes are less than 1: \(|p| < 1\)). This means the impulse response of the system will decay to zero over time.
*   **Marginally Stable:** One or more poles lie **on the unit circle** \(|p| = 1\), and all other poles are inside the unit circle. The impulse response may oscillate or remain constant.
*   **Unstable:** One or more poles lie **outside the unit circle** (i.e., their magnitudes are greater than 1: \(|p| > 1\)). This means the impulse response will grow unbounded over time.

## Visualizing Stability: The Pole-Zero Plot

A pole-zero plot is a graphical representation of the poles and zeros of a system's transfer function.

*   **Poles** are typically marked with an 'x'.
*   **Zeros** are typically marked with an 'o'.

By plotting these locations, we can quickly assess the stability of a system without complex calculations.

### Example Scenario: Continuous-Time System

Consider a continuous-time system with the transfer function \(H(s) = \frac{s+2}{(s+1)(s+3)}\).

**Steps to Analyze Stability:**

1.  **Identify the poles:** The poles are the values of 's' that make the denominator zero. So, \(s+1=0 \Rightarrow s=-1\) and \(s+3=0 \Rightarrow s=-3\).
2.  **Plot the poles:** In the s-plane, plot 'x' at -1 and -3.
3.  **Analyze pole locations:** Both poles, \(s=-1\) and \(s=-3\), have negative real parts. They are both in the left-half plane.
4.  **Determine stability:** Since all poles are in the left-half plane, this continuous-time system is **stable**.

### Example Scenario: Discrete-Time System

Consider a discrete-time system with the transfer function \(H(z) = \frac{z-0.5}{(z-0.2)(z-1.5)}\).

**Steps to Analyze Stability:**

1.  **Identify the poles:** The poles are the values of 'z' that make the denominator zero. So, \(z-0.2=0 \Rightarrow z=0.2\) and \(z-1.5=0 \Rightarrow z=1.5\).
2.  **Plot the poles:** In the z-plane, draw a unit circle. Plot 'x' at \(z=0.2\) and \(z=1.5\).
3.  **Analyze pole locations:** The pole at \(z=0.2\) has a magnitude \(|0.2| = 0.2\), which is less than 1. The pole at \(z=1.5\) has a magnitude \(|1.5| = 1.5\), which is greater than 1.
4.  **Determine stability:** Since one pole (\(z=1.5\)) lies outside the unit circle, this discrete-time system is **unstable**.

## Practice Task

For each of the following systems, identify the poles, sketch a pole-zero plot (in the appropriate plane), and determine if the system is stable, marginally stable, or unstable.

1.  **Continuous-Time System:** \(H(s) = \frac{s-1}{(s+2)(s^2+4s+5)}\)
2.  **Discrete-Time System:** \(H(z) = \frac{1}{z^2 - 1.2z + 0.36}\)
3.  **Continuous-Time System:** \(H(s) = \frac{1}{s(s+1)}\)
4.  **Discrete-Time System:** \(H(z) = \frac{z^2}{(z-1)(z+1)}\)

## Self-Check Questions

1.  In the s-plane, where must poles be located for a continuous-time system to be stable?
2.  In the z-plane, where must poles be located for a discrete-time system to be stable?
3.  What does it mean for a system to be marginally stable?
4.  If a continuous-time system has a pole at \(s = -2 + 3j\), is it stable? Why or why not?
5.  If a discrete-time system has a pole at \(z = 1\), is it stable? Why or why not?

## Supports

- [[skills/mathematics/signals-systems/complex-frequency-domain-analysis/microskills/stability-analysis-pole-zero-plot|Stability Analysis (Pole-Zero Plot)]]
