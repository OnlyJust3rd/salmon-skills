---
type: "medium"
title: "AC Circuit Analysis with Mesh and Nodal Methods"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/ac-circuit-analysis|ac-circuit-analysis]]"
learning-time-in-minutes: 3
---
# AC Circuit Analysis with Mesh and Nodal Methods

This lesson focuses on applying mesh and nodal analysis techniques specifically to AC circuits. While the fundamental principles remain the same as DC analysis, AC circuits introduce impedance (reactance and resistance) and phase shifts, which we'll account for using complex numbers.

## Understanding AC Circuit Analysis

In AC circuits, instead of simple resistances, we deal with **impedances**, denoted by 'Z'. Impedance is a complex quantity that combines resistance (R) and reactance (X), where reactance can be inductive (X_L) or capacitive (X_C).

*   **Inductive Reactance:** \(X_L = \omega L\), where \(\omega\) is the angular frequency and L is inductance.
*   **Capacitive Reactance:** \(X_C = \frac{1}{\omega C}\), where C is capacitance.

Impedance is represented as \(Z = R + jX\), where 'j' is the imaginary unit. For mesh analysis, we'll set up Kirchhoff's Voltage Law (KVL) equations in terms of mesh currents and impedances. For nodal analysis, we'll use Kirchhoff's Current Law (KCL) equations with nodal voltages and admittances (the reciprocal of impedance).

## Practical Example: Finding Current in an AC Series-Parallel Circuit

Consider an AC circuit with a voltage source \(V_s = 10\angle 0^\circ V\) at 60 Hz. The circuit contains a 10 \(\Omega\) resistor (R1), a 50 mH inductor (L1), and a 100 \(\mu F\) capacitor (C1) connected in series. We want to find the total current flowing from the source using nodal analysis.

**1. Calculate Reactances and Impedances:**

*   Angular frequency \(\omega = 2\pi f = 2\pi (60) \approx 377\) rad/s.
*   Inductive Reactance \(X_L = \omega L_1 = 377 \times 50 \times 10^{-3} \approx 18.85 \Omega\).
*   Capacitive Reactance \(X_C = \frac{1}{\omega C_1} = \frac{1}{377 \times 100 \times 10^{-6}} \approx 26.53 \Omega\).

Now, represent these as complex impedances:

*   \(Z_R1 = 10 \Omega\)
*   \(Z_{L1} = jX_L \approx j18.85 \Omega\)
*   \(Z_{C1} = -jX_C \approx -j26.53 \Omega\)

The total impedance of the series combination is:
\(Z_{total} = Z_{R1} + Z_{L1} + Z_{C1} = 10 + j18.85 - j26.53 = 10 - j7.68 \Omega\).

**2. Apply Nodal Analysis (Simplified for this series circuit):**

Since this is a simple series circuit, we can directly apply Ohm's Law with complex impedances. There's only one main node relative to the source's negative terminal. We can consider the source as driving the total impedance.

The total current \(I\) is given by:
\[ I = \frac{V_s}{Z_{total}} \]
\[ I = \frac{10\angle 0^\circ V}{10 - j7.68 \Omega} \]

To divide complex numbers, we convert the denominator to polar form:
Magnitude: \(|Z_{total}| = \sqrt{10^2 + (-7.68)^2} \approx \sqrt{100 + 58.98} \approx \sqrt{158.98} \approx 12.61 \Omega\)
Phase angle: \(\theta = \arctan\left(\frac{-7.68}{10}\right) \approx -37.5^\circ\)

So, \(Z_{total} \approx 12.61\angle -37.5^\circ \Omega\).

Now, calculate the current:
\[ I = \frac{10\angle 0^\circ V}{12.61\angle -37.5^\circ \Omega} = \frac{10}{12.61} \angle (0^\circ - (-37.5^\circ)) \]
\[ I \approx 0.793 \angle 37.5^\circ A \]

The current flowing from the source is approximately 0.793 A, with a phase lead of 37.5 degrees relative to the voltage source.

## Practice Task

Consider an AC circuit with two parallel branches connected to a voltage source \(V_s = 20\angle 30^\circ V\) at 100 Hz.
*   Branch 1: A 5 \(\Omega\) resistor in series with a 20 mH inductor.
*   Branch 2: A 10 \(\mu F\) capacitor.

Use mesh analysis to find the current through the inductor.

## Self-Check Questions

1.  What is the primary difference in impedance between DC and AC circuit analysis?
2.  How do you represent an inductor and a capacitor as complex impedances in an AC circuit?
3.  When applying mesh analysis to an AC circuit, what fundamental law do you use, and how do complex impedances factor into the equations?

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/ac-circuit-analysis|AC Circuit Analysis]]
