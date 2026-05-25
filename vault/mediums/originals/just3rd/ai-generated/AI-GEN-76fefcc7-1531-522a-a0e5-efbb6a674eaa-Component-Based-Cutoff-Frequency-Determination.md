---
type: "medium"
title: "Calculating Cutoff Frequency with Component Values"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/filter-design/microskills/component-based-cutoff-frequency-determination|component-based-cutoff-frequency-determination]]"
learning-time-in-minutes: 3
---
# Calculating Cutoff Frequency with Component Values

This lesson focuses on calculating the cutoff frequency of simple passive RC and RL filters directly from their component values. This is a fundamental skill in understanding how filters shape signals.

## Understanding the Cutoff Frequency

The cutoff frequency, often denoted as \(f_c\), is a critical parameter for any filter. It represents the frequency at which the filter's output power is reduced by half, or the voltage/current amplitude is reduced to approximately 70.7% of its value at lower (for a low-pass filter) or higher (for a high-pass filter) frequencies. This point is also known as the -3 dB point.

For basic passive filters, this frequency is determined by the values of the resistors (R) and capacitors (C) in an RC filter, or resistors (R) and inductors (L) in an RL filter.

## RC Filter Cutoff Frequency

For a simple passive RC filter, the cutoff frequency is calculated using the following formula:

\[
f_c = \frac{1}{2 \pi R C}
\]

Where:
*   \(f_c\) is the cutoff frequency in Hertz (Hz).
*   \(\pi\) (pi) is a mathematical constant, approximately 3.14159.
*   \(R\) is the resistance in Ohms (\(\Omega\)).
*   \(C\) is the capacitance in Farads (F).

It's important to ensure that \(R\) is in Ohms and \(C\) is in Farads before plugging them into the formula. Common units for capacitance are microfarads (\(\mu F\)) or nanofarads (nF), so you may need to convert these to Farads (e.g., \(1 \mu F = 1 \times 10^{-6} F\)).

### Worked Example: RC Filter

Let's calculate the cutoff frequency for an RC low-pass filter with a resistor of \(10 k\Omega\) and a capacitor of \(0.1 \mu F\).

1.  **Identify Component Values:**
    *   \(R = 10 k\Omega = 10 \times 10^3 \Omega\)
    *   \(C = 0.1 \mu F = 0.1 \times 10^{-6} F\)

2.  **Apply the Formula:**
    \[
    f_c = \frac{1}{2 \pi R C}
    \]
    \[
    f_c = \frac{1}{2 \pi (10 \times 10^3 \Omega) (0.1 \times 10^{-6} F)}
    \]

3.  **Calculate:**
    \[
    f_c = \frac{1}{2 \pi (1 \times 10^{-3})}
    \]
    \[
    f_c = \frac{1}{0.002 \pi}
    \]
    \[
    f_c \approx \frac{1}{0.006283}
    \]
    \[
    f_c \approx 159.15 \text{ Hz}
    \]

So, the cutoff frequency for this RC filter is approximately 159.15 Hz.

## RL Filter Cutoff Frequency

For a simple passive RL filter, the cutoff frequency is calculated using a similar formula:

\[
f_c = \frac{R}{2 \pi L}
\]

Where:
*   \(f_c\) is the cutoff frequency in Hertz (Hz).
*   \(\pi\) (pi) is the mathematical constant.
*   \(R\) is the resistance in Ohms (\(\Omega\)).
*   \(L\) is the inductance in Henries (H).

Similar to RC filters, ensure \(R\) is in Ohms and \(L\) is in Henries. Inductance is often given in millihenries (mH), so conversion may be necessary (e.g., \(1 mH = 1 \times 10^{-3} H\)).

### Worked Example: RL Filter

Let's calculate the cutoff frequency for an RL high-pass filter with a resistor of \(1 k\Omega\) and an inductor of \(10 mH\).

1.  **Identify Component Values:**
    *   \(R = 1 k\Omega = 1 \times 10^3 \Omega\)
    *   \(L = 10 mH = 10 \times 10^{-3} H\)

2.  **Apply the Formula:**
    \[
    f_c = \frac{R}{2 \pi L}
    \]
    \[
    f_c = \frac{1 \times 10^3 \Omega}{2 \pi (10 \times 10^{-3} H)}
    \]

3.  **Calculate:**
    \[
    f_c = \frac{1000}{0.02 \pi}
    \]
    \[
    f_c \approx \frac{1000}{0.06283}
    \]
    \[
    f_c \approx 15915 \text{ Hz}
    \]

The cutoff frequency for this RL filter is approximately 15915 Hz, or 15.915 kHz.

## Key Takeaways

*   The cutoff frequency is a vital parameter defining a filter's behavior.
*   For simple RC filters, \(f_c = \frac{1}{2 \pi R C}\).
*   For simple RL filters, \(f_c = \frac{R}{2 \pi L}\).
*   Always ensure component values are in base SI units (Ohms, Farads, Henries) before calculation.
*   This calculation applies to basic first-order passive filters. More complex filters may have different formulas.

## Supports

- [[skills/computing/hardware-embedded/electronics/filter-design/microskills/component-based-cutoff-frequency-determination|Component-Based Cutoff Frequency Determination]]
