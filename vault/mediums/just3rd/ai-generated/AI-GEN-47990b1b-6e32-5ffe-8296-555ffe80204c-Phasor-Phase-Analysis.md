---
type: "medium"
title: "Phasor Phase Analysis"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/phasor-phase-analysis|phasor-phase-analysis]]"
---
# Phasor Phase Analysis

In circuit analysis, signals are often represented as phasors. A phasor is a complex number that captures both the magnitude and phase of a sinusoidal signal at a specific frequency. While the magnitude represents the amplitude of the signal, the phase represents its position in its cycle relative to a reference. Understanding how phase changes affect the phasor is crucial for analyzing how signals interact in circuits.

## Why Phase Matters in Phasors

Imagine two identical waves, but one starts a little later than the other. This "later start" is the phase difference. In AC circuits, these phase differences are critical. They determine when currents peak relative to voltages, affecting how components like capacitors and inductors behave.

A phasor is typically represented as \(V = |V|e^{j\phi}\) or \(V = |V|\angle\phi\), where \(|V|\) is the magnitude (amplitude) and \(\phi\) is the phase angle. Changing the phase angle \(\phi\) directly rotates the phasor on the complex plane.

## Practical Scenario: Signal Timing in an AC Circuit

Consider two AC voltage sources connected to a circuit.

*   **Source A:** \(v_A(t) = 10\cos(100\pi t + 30^\circ)\) Volts
*   **Source B:** \(v_B(t) = 10\cos(100\pi t - 60^\circ)\) Volts

Both sources have the same amplitude (10V) and the same frequency (50 Hz, since \(\omega = 100\pi\)). The difference lies in their phase: Source A leads Source B by \(30^\circ - (-60^\circ) = 90^\circ\).

Let's convert these to phasors. Assuming the cosine reference (angle = 0 degrees), the phasors are:

*   **Phasor A (\(V_A\)):** \(10 \angle 30^\circ\) V
*   **Phasor B (\(V_B\)):** \(10 \angle -60^\circ\) V

On the complex plane:

*   Phasor A is in the first quadrant, 30 degrees counter-clockwise from the positive real axis.
*   Phasor B is in the fourth quadrant, 60 degrees clockwise from the positive real axis.

The 90-degree phase difference means that at any given time, the voltage of Source A is at a different point in its cycle compared to Source B. This difference is directly visualized by the angular separation between their phasors. If you were to add these voltages in a circuit, the resulting phasor would depend on this 90-degree separation.

## Practice Task

1.  Convert the following sinusoidal voltage and current into their phasor equivalents. State the magnitude and phase angle clearly.
    *   Voltage: \(v(t) = 12\sin(2000\pi t + 15^\circ)\) V
    *   Current: \(i(t) = 5\cos(2000\pi t - 45^\circ)\) A
    *(Hint: Remember that \(\sin(\theta) = \cos(\theta - 90^\circ)\).)*

2.  Describe how the phasor representation of \(v(t) = 5\cos(\omega t + 10^\circ)\) would change if the phase angle increased by \(20^\circ\). What would the new phasor be?

## Self-Check Questions

1.  What does the phase angle in a phasor represent in terms of the original sinusoidal signal?
2.  If two signals have the same frequency and amplitude but different phase angles, how does this difference manifest in their phasor representations?
3.  How does a leading phase angle (e.g., \(+30^\circ\)) differ from a lagging phase angle (e.g., \(-30^\circ\)) on the complex plane?

## Supports

- [[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/phasor-phase-analysis|Phasor Phase Analysis]]
