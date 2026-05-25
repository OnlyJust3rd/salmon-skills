---
type: "medium"
title: "Sinusoidal to Phasor Conversion"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/sinusoidal-to-phasor-conversion|sinusoidal-to-phasor-conversion]]"
learning-time-in-minutes: 3
---
# Sinusoidal to Phasor Conversion

Understanding how to represent time-varying signals, like sinusoidal voltages and currents, in a simpler, fixed form is crucial for circuit analysis. This skill focuses on transforming these time-domain signals into their phasor equivalents.

### Why Convert to Phasors?

Sinusoidal signals change over time, making circuit analysis with differential equations complex. Phasors allow us to convert these time-domain differential equations into algebraic equations, significantly simplifying calculations for steady-state AC circuit analysis. A phasor is a complex number that represents the amplitude and phase of a sinusoidal signal.

### The Conversion Formula

A sinusoidal voltage or current of the form:

\(v(t) = V_m \cos(\omega t + \phi)\)

or

\(i(t) = I_m \cos(\omega t + \phi)\)

can be converted into a phasor \(V\) or \(I\) using the following relationships:

*   **Magnitude:** The magnitude of the phasor is the RMS value of the sinusoid. For a sinusoid with amplitude \(V_m\), the RMS value is \(V_{rms} = \frac{V_m}{\sqrt{2}}\).
*   **Angle:** The angle of the phasor is the phase angle \(\phi\) of the sinusoid.

So, the phasor representation is:

\[
V = V_{rms} \angle \phi = \frac{V_m}{\sqrt{2}} \angle \phi
\]

or

\[
I = I_{rms} \angle \phi = \frac{I_m}{\sqrt{2}} \angle \phi
\]

Often, especially in textbooks, phasors are defined with the peak amplitude as the magnitude. In this context, the conversion is simply:

\[
V = V_m \angle \phi
\]

and

\[
I = I_m \angle \phi
\]

For this exercise, we will use the **peak amplitude** as the phasor magnitude for simplicity in direct conversion. Always confirm the convention being used in your specific context.

### Practical Example

Let's convert the following sinusoidal voltage into its phasor representation:

\(v(t) = 10 \cos(377t + 45^\circ) \text{ V}\)

Here:
*   Amplitude, \(V_m = 10 \text{ V}\)
*   Angular frequency, \(\omega = 377 \text{ rad/s}\) (this value is important for the time-domain signal but not directly part of the phasor itself)
*   Phase angle, \(\phi = 45^\circ\)

Using the peak amplitude convention for the phasor:

\[
V = 10 \angle 45^\circ \text{ V}
\]

This phasor \(10 \angle 45^\circ\) tells us that the voltage has a peak value of 10 Volts and a phase of 45 degrees relative to the reference.

### Impact of Amplitude and Phase Changes

*   **Changing Amplitude (\(V_m\)):** If the amplitude increases to 20V, the phasor magnitude changes proportionally. For \(v(t) = 20 \cos(377t + 45^\circ) \text{ V}\), the phasor becomes \(V = 20 \angle 45^\circ \text{ V}\). The length of the phasor in the complex plane increases.
*   **Changing Phase (\(\phi\)):** If the phase shifts to \(90^\circ\), the phasor angle changes. For \(v(t) = 10 \cos(377t + 90^\circ) \text{ V}\), the phasor becomes \(V = 10 \angle 90^\circ \text{ V}\). The direction of the phasor in the complex plane rotates.

### Practice Task

Convert the following sinusoidal signals into their phasor equivalents (using peak amplitude as the phasor magnitude):

1.  \(i(t) = 5 \sin(100t - 30^\circ) \text{ A}\)
2.  \(v(t) = 12 \cos(500t) \text{ V}\)
3.  \(i(t) = -2 \cos(200t + 150^\circ) \text{ A}\)

### Self-Check Questions

1.  What are the two key pieces of information a phasor represents about a sinusoidal signal?
2.  If a sinusoidal voltage is given as \(v(t) = 25 \cos(1000t - 60^\circ) \text{ V}\), what is its phasor representation?
3.  How does doubling the amplitude of a sinusoidal signal affect its phasor representation?
4.  How does shifting the phase of a sinusoidal signal by \(90^\circ\) affect its phasor representation?

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/sinusoidal-to-phasor-conversion|Sinusoidal to Phasor Conversion]]
