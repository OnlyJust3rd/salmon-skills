---
type: "medium"
title: "Achieving Specific Cutoff Frequencies in RC and RL Filters"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/filter-design/microskills/cutoff-frequency-specification-achievement|Cutoff Frequency Specification Achievement]]"
---
# Achieving Specific Cutoff Frequencies in RC and RL Filters

This lesson focuses on the crucial step of **achieving specific cutoff frequencies** when designing passive RC and RL filters. This directly relates to the outcome of designing and testing filters to remove noise based on defined cutoff frequencies.

## Understanding the Cutoff Frequency

The cutoff frequency ($f_c$) is the point at which the filter's output power is reduced by half, or the voltage/current amplitude is reduced to approximately 70.7% of its input value. This is often referred to as the -3dB point. For passive RC and RL filters, it's the frequency that dictates where the transition occurs between passing and attenuating signals.

### RC Filters

In a simple RC low-pass filter, the cutoff frequency is determined by the resistance (R) and capacitance (C):

\[
f_c = \frac{1}{2\pi RC}
\]

In a simple RC high-pass filter, the formula is the same:

\[
f_c = \frac{1}{2\pi RC}
\]

### RL Filters

For a simple RL low-pass filter, the cutoff frequency is determined by the resistance (R) and inductance (L):

\[
f_c = \frac{R}{2\pi L}
\]

For a simple RL high-pass filter, the formula is the same:

\[
f_c = \frac{R}{2\pi L}
\]

## Designing for a Target Cutoff Frequency

The core task here is to **create** a filter that meets a desired cutoff frequency. This involves selecting appropriate component values (R, C, L) based on the formulas above.

### Scenario: Designing a Low-Pass RC Filter to Remove High-Frequency Noise

**Problem:** You have a sensor signal that is being corrupted by high-frequency noise above 1 kHz. You need to design a simple RC low-pass filter to attenuate this noise while passing the desired signal below 1 kHz.

**Goal:** Design an RC low-pass filter with a cutoff frequency ($f_c$) of 1 kHz.

**Steps:**

1.  **Identify the Target Frequency:** $f_c = 1 \text{ kHz} = 1000 \text{ Hz}$.
2.  **Choose a Component Type:** We are designing an RC filter, so we will use a resistor (R) and a capacitor (C).
3.  **Select One Component Value:** It's often practical to choose one component value based on availability or desired characteristics (e.g., a common resistor value or a capacitor suitable for the signal amplitude). Let's choose a resistor value. For sensor circuits, a resistor in the kilo-ohm range is often a good starting point to avoid excessive current draw. Let's pick $R = 10 \text{ k}\Omega = 10,000 \Omega$.
4.  **Calculate the Other Component Value:** Now, rearrange the cutoff frequency formula to solve for the unknown component (C):

    From \(f_c = \frac{1}{2\pi RC}\), we get:
    \[
    C = \frac{1}{2\pi R f_c}
    \]

    Substitute the known values:
    \[
    C = \frac{1}{2\pi (10,000 \Omega) (1000 \text{ Hz})}
    \]

    \[
    C \approx \frac{1}{62,831,853} \text{ Farads}
    \]

    \[
    C \approx 1.59 \times 10^{-8} \text{ Farads}
    \]

    In practical terms, this is approximately $15.9 \text{ nF}$ (nanofarads).

5.  **Component Selection and Practical Considerations:**
    *   **Availability:** $15.9 \text{ nF}$ might not be a standard capacitor value. Standard values near this might be $15 \text{ nF}$ or $18 \text{ nF}$.
    *   **Tolerance:** Real capacitors have tolerances (e.g., $\pm 10\%$, $\pm 5\%$). If you choose a $15 \text{ nF}$ capacitor, the actual cutoff frequency will be slightly different.
    *   **Choosing Standard Values:** If you select a standard $15 \text{ nF}$ capacitor, you would recalculate R:
        \[
        R = \frac{1}{2\pi C f_c} = \frac{1}{2\pi (15 \times 10^{-9} \text{ F}) (1000 \text{ Hz})} \approx 10,610 \Omega
        \]
        This would mean using a $10 \text{ k}\Omega$ resistor and a $15 \text{ nF}$ capacitor, resulting in a cutoff frequency of approximately $1.06 \text{ kHz}$. This might be acceptable, or you might need to use a series/parallel combination of resistors to get closer to the target.

### Scenario: Designing a High-Pass RL Filter

**Problem:** You need to remove a DC offset or very low-frequency hum (e.g., 50/60 Hz from power lines) from a signal, allowing frequencies above 100 Hz to pass.

**Goal:** Design an RL high-pass filter with a cutoff frequency ($f_c$) of 100 Hz.

**Steps:**

1.  **Identify the Target Frequency:** $f_c = 100 \text{ Hz}$.
2.  **Choose a Component Type:** RL filter (Resistor R and Inductor L).
3.  **Select One Component Value:** Inductors can be more expensive and less common than resistors. Let's assume you have a $100 \text{ mH}$ (millihenry) inductor available, so $L = 0.1 \text{ H}$.
4.  **Calculate the Other Component Value:** Rearrange the cutoff frequency formula for R:

    From \(f_c = \frac{R}{2\pi L}\), we get:
    \[
    R = 2\pi L f_c
    \]

    Substitute the known values:
    \[
    R = 2\pi (0.1 \text{ H}) (100 \text{ Hz})
    \]

    \[
    R \approx 62.8 \Omega
    \]

5.  **Component Selection and Practical Considerations:**
    *   A $62.8 \Omega$ resistor is a standard value or easily achievable with standard resistors.
    *   Ensure the inductor's current rating is sufficient for your signal.

## Testing and Verification

Once you've designed your filter based on calculations, **testing is critical**.

*   **Signal Generator:** Use a signal generator to input sine waves at various frequencies.
*   **Oscilloscope/Spectrum Analyzer:** Measure the output amplitude of the filter at each frequency.
*   **Comparison:** Compare your measured results to the calculated cutoff frequency and the desired filter behavior (passing frequencies below/above $f_c$ as intended).
*   **Iterate:** If the measured cutoff frequency is significantly different from your target, you may need to recalculate and select different component values, taking into account component tolerances.

By systematically designing and verifying your component choices against the cutoff frequency formulas, you can successfully create passive RC and RL filters tailored to specific noise removal needs.

## Supports

- [[skills/hardware-embedded/electronics-embedded/filter-design/microskills/cutoff-frequency-specification-achievement|Cutoff Frequency Specification Achievement]]
