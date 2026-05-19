---
type: "medium"
title: "Understanding Phasor Amplitude"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/phasor-amplitude-analysis|Phasor Amplitude Analysis]]"
---
# Understanding Phasor Amplitude

In circuit analysis, we often deal with signals that change over time, like voltages and currents. Phasors are a powerful tool to represent these sinusoidal signals in a simpler, non-time-varying form. While phasors capture both the magnitude and phase of a signal, this lesson focuses specifically on how changes in the signal's **amplitude** affect its phasor representation.

## What is Amplitude?

The amplitude of a sinusoidal signal (like voltage or current) is its maximum deviation from its average value. For a voltage described by \(v(t) = V_m \cos(\omega t + \phi)\), \(V_m\) is the amplitude.

## Amplitude's Impact on Phasors

When converting a sinusoidal voltage or current to a phasor, the amplitude of the original signal directly determines the **magnitude** of the phasor. The standard convention for voltage and current phasors is to use the **RMS (Root Mean Square)** value for the magnitude. If the sinusoidal signal is given in its peak (amplitude) form, you need to divide by \(\sqrt{2}\) to get the RMS value.

If \(v(t) = V_m \cos(\omega t + \phi)\), its phasor \( \mathbf{V} \) is given by:
\[
\mathbf{V} = \frac{V_m}{\sqrt{2}} \angle \phi
\]

### Key Takeaway:
*   **Increased Amplitude:** A larger amplitude in the sinusoidal signal results in a larger magnitude for its corresponding phasor.
*   **Decreased Amplitude:** A smaller amplitude in the sinusoidal signal results in a smaller magnitude for its corresponding phasor.

## Practical Example

Consider two voltage signals:

1.  \(v_1(t) = 10 \cos(1000t + 45^\circ) \, \text{V}\)
2.  \(v_2(t) = 20 \cos(1000t + 45^\circ) \, \text{V}\)

Both signals have the same frequency (\(1000 \, \text{rad/s}\)) and phase (\(45^\circ\)). However, \(v_2(t)\) has twice the amplitude of \(v_1(t)\).

Let's convert them to phasors using RMS values:

*   For \(v_1(t)\):
    *   Peak amplitude \(V_{m1} = 10 \, \text{V}\)
    *   RMS value \(V_{rms1} = \frac{10}{\sqrt{2}} \, \text{V}\)
    *   Phasor \( \mathbf{V}_1 = \frac{10}{\sqrt{2}} \angle 45^\circ \, \text{V} \)

*   For \(v_2(t)\):
    *   Peak amplitude \(V_{m2} = 20 \, \text{V}\)
    *   RMS value \(V_{rms2} = \frac{20}{\sqrt{2}} \, \text{V}\)
    *   Phasor \( \mathbf{V}_2 = \frac{20}{\sqrt{2}} \angle 45^\circ \, \text{V} \)

As you can see, the magnitude of \( \mathbf{V}_2 \) is twice the magnitude of \( \mathbf{V}_1 \), directly reflecting the difference in their original amplitudes.

## Practice Task

Convert the following sinusoidal voltages to their phasor equivalents (using RMS values) and comment on how the amplitude changes affect their magnitudes.

1.  \(v_a(t) = 5 \sin(377t - 30^\circ) \, \text{V}\)
2.  \(v_b(t) = 2.5 \sin(377t - 30^\circ) \, \text{V}\)
3.  \(v_c(t) = 5 \sin(377t - 30^\circ) \, \text{V}\) (Note: This is the same as \(v_a\))
4.  \(v_d(t) = 5 \sin(377t + 60^\circ) \, \text{V}\)

*Hint: Remember that phasors typically use the cosine function. You may need to adjust the phase for sine functions. Recall that \(\sin(\theta) = \cos(\theta - 90^\circ)\).*

## Self-Check Questions

1.  If the amplitude of a sinusoidal voltage doubles, what happens to the magnitude of its corresponding RMS phasor?
2.  Does changing the amplitude of a sinusoidal signal affect its phase angle? How does this relate to its phasor representation?
3.  Why is it important to use RMS values for phasor magnitudes in circuit analysis rather than peak amplitudes?

## Supports

- [[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/phasor-amplitude-analysis|Phasor Amplitude Analysis]]
