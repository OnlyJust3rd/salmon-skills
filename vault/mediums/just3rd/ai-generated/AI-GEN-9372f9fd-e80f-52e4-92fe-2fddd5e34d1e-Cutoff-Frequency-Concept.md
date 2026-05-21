---
type: "medium"
title: "Understanding Cutoff Frequency"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/filter-design/microskills/cutoff-frequency-concept|cutoff-frequency-concept]]"
---
# Understanding Cutoff Frequency

This lesson focuses on a fundamental concept in filter design: the **cutoff frequency**. Understanding cutoff frequency is crucial for designing and analyzing both RC (Resistor-Capacitor) and RL (Resistor-Inductor) circuits, which are the building blocks of many passive filters.

## What is Cutoff Frequency?

In the context of electrical filters, cutoff frequency, often denoted by \(f_c\) or \(\omega_c\) (where \(\omega_c = 2\pi f_c\)), is a **boundary frequency** that separates the "passband" from the "stopband" of a filter.

*   **Passband:** The range of frequencies where the filter allows signals to pass through with minimal attenuation (loss of signal strength).
*   **Stopband:** The range of frequencies where the filter significantly attenuates signals.

More precisely, the cutoff frequency is defined as the point where the **power** of the output signal is **half** the power of the input signal in the passband. In terms of voltage or current amplitude, this corresponds to a reduction to approximately **70.7%** of the passband value. This specific point is also known as the **-3 dB point**.

> **Definition:** The cutoff frequency (\(f_c\)) is the frequency at which the output signal's power is reduced by half (or its voltage/current amplitude is reduced to \(1/\sqrt{2}\) or approximately 0.707) compared to the passband level. This is equivalent to a -3 dB reduction.

### Why is it Significant?

The cutoff frequency tells us **where the filter starts to significantly block signals**. It's a key parameter that defines the filter's characteristic.

*   **For low-pass filters:** The cutoff frequency marks the upper limit of the passband. Frequencies above \(f_c\) are attenuated.
*   **For high-pass filters:** The cutoff frequency marks the lower limit of the passband. Frequencies below \(f_c\) are attenuated.
*   **For band-pass and band-stop filters:** There are usually two cutoff frequencies that define the edges of the passband or stopband.

Knowing the cutoff frequency allows engineers to select components (resistors, capacitors, inductors) to design filters that pass desired frequencies while rejecting unwanted ones.

## Cutoff Frequency in RC and RL Circuits

The cutoff frequency is directly determined by the values of the passive components (resistors, capacitors, and inductors) in the circuit.

### RC Circuits

In a simple series RC circuit, the cutoff frequency is determined by the resistance (R) and capacitance (C).

*   **Low-pass RC Filter:** In this configuration, the output voltage is taken across the capacitor. The cutoff frequency is given by:
    \[
    f_c = \frac{1}{2\pi RC}
    \]
    Here, \(R\) is in Ohms (\(\Omega\)) and \(C\) is in Farads (F). The result \(f_c\) will be in Hertz (Hz).
    As R or C increases, the cutoff frequency decreases, meaning the filter passes lower frequencies.

*   **High-pass RC Filter:** In this configuration, the output voltage is taken across the resistor. The cutoff frequency formula is the same:
    \[
    f_c = \frac{1}{2\pi RC}
    \]
    However, the behavior of the filter is reversed. As R or C increases, the cutoff frequency decreases, meaning the filter now passes higher frequencies more effectively.

### RL Circuits

Similarly, in a simple series RL circuit, the cutoff frequency is determined by the resistance (R) and inductance (L).

*   **Low-pass RL Filter:** The output voltage is taken across the resistor. The cutoff frequency is given by:
    \[
    f_c = \frac{R}{2\pi L}
    \]
    Here, \(R\) is in Ohms (\(\Omega\)) and \(L\) is in Henrys (H). The result \(f_c\) will be in Hertz (Hz).
    As R increases or L decreases, the cutoff frequency increases.

*   **High-pass RL Filter:** The output voltage is taken across the inductor. The cutoff frequency formula is the same:
    \[
    f_c = \frac{R}{2\pi L}
    \]
    As R increases or L decreases, the cutoff frequency increases, meaning the filter passes higher frequencies more effectively.

## Example Calculation

Let's consider a simple low-pass RC filter used to remove high-frequency noise from an audio signal.

Suppose we have a resistor \(R = 10 \text{ k}\Omega\) (\(10 \times 10^3 \Omega\)) and a capacitor \(C = 0.1 \mu\text{F}\) (\(0.1 \times 10^{-6}\) F). We want to find the cutoff frequency.

Using the formula for an RC low-pass filter:
\[
f_c = \frac{1}{2\pi RC}
\]
Substitute the values:
\[
f_c = \frac{1}{2\pi \times (10 \times 10^3 \Omega) \times (0.1 \times 10^{-6} \text{ F})}
\]
\[
f_c = \frac{1}{2\pi \times 10^{-3}}
\]
\[
f_c \approx \frac{1}{6.283 \times 10^{-3}}
\]
\[
f_c \approx 159.15 \text{ Hz}
\]

This means that in this RC circuit, frequencies above approximately 159 Hz will start to be significantly attenuated. Frequencies well below 159 Hz will pass through with little loss.

## Common Pitfalls

*   **Confusing Power and Voltage/Current:** Remember that the -3 dB point refers to half the *power*. This translates to \(1/\sqrt{2}\) (or approximately 0.707) of the voltage or current amplitude.
*   **Unit Mismatches:** Always ensure your component values are in base SI units (Ohms, Farads, Henrys) before plugging them into the formulas to get the frequency in Hertz. For example, use \(10 \times 10^{-6}\) for \(10 \mu\text{F}\) and \(1 \times 10^{-3}\) for \(1 \text{ mH}\).
*   **Incorrect Filter Configuration:** Make sure you identify whether you are dealing with a low-pass or high-pass configuration to understand the implications of the calculated cutoff frequency. The formulas for \(f_c\) are often the same for RC and RL circuits, but their meaning in the context of the filter's operation differs.

By understanding the definition and calculation of cutoff frequency, you gain a vital tool for analyzing and designing filters for a wide range of applications.

## Supports

- [[skills/hardware-embedded/electronics-embedded/filter-design/microskills/cutoff-frequency-concept|Cutoff Frequency Concept]]
