---
type: "medium"
title: "Calculating Op-Amp Voltage Gain"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/single-stage-op-amp-gain-determination|single-stage-op-amp-gain-determination]]"
learning-time-in-minutes: 3
---
# Calculating Op-Amp Voltage Gain

Operational amplifiers (op-amps) are fundamental building blocks in many electronic circuits, and understanding how to calculate their voltage gain is a key step in amplifier design. This lesson focuses on determining the voltage gain for two basic op-amp configurations: the inverting and non-inverting amplifiers.

## Why This Matters

Knowing how to calculate voltage gain allows you to predict how an op-amp circuit will amplify an input signal. This is crucial for designing circuits that meet specific performance requirements, such as boosting a weak sensor signal or creating a precise voltage divider.

## Inverting Amplifier

The inverting amplifier configuration uses negative feedback to amplify the input signal and invert its phase.

### The Formula

The voltage gain (\(A_v\)) for an inverting amplifier is determined by the ratio of the feedback resistor (\(R_f\)) to the input resistor (\(R_{in}\)).

\[
A_v = -\frac{R_f}{R_{in}}
\]

The negative sign indicates that the output signal is inverted relative to the input signal.

### Practical Example

Imagine you have an audio signal from a microphone that is only 10 millivolts peak-to-peak. You want to amplify it to 1 volt peak-to-peak using an inverting op-amp. You choose an input resistor \(R_{in} = 10 \text{ k}\Omega\). What feedback resistor \(R_f\) do you need?

1.  **Determine the desired gain:**
    The desired output is 1 V, and the input is 0.01 V. The magnitude of the gain is \( \frac{1 \text{ V}}{0.01 \text{ V}} = 100 \).
2.  **Apply the formula and rearrange to solve for \(R_f\):**
    \( A_v = -\frac{R_f}{R_{in}} \)
    \( -100 = -\frac{R_f}{10 \text{ k}\Omega} \)
    \( R_f = 100 \times 10 \text{ k}\Omega = 1000 \text{ k}\Omega = 1 \text{ M}\Omega \)

So, you would need a feedback resistor of \(1 \text{ M}\Omega\).

## Non-Inverting Amplifier

The non-inverting amplifier configuration amplifies the input signal without inverting its phase.

### The Formula

For a non-inverting amplifier, the voltage gain (\(A_v\)) is determined by the sum of 1 and the ratio of the feedback resistor (\(R_f\)) to the resistor connected from the inverting input to ground (\(R_1\)).

\[
A_v = 1 + \frac{R_f}{R_1}
\]

### Practical Example

Let's say you have a temperature sensor that outputs a small voltage of 50 millivolts. You want to amplify this to 0.5 volts using a non-inverting op-amp. You've chosen \(R_1 = 1 \text{ k}\Omega\). What should \(R_f\) be?

1.  **Determine the desired gain:**
    The desired output is 0.5 V, and the input is 0.05 V. The gain is \( \frac{0.5 \text{ V}}{0.05 \text{ V}} = 10 \).
2.  **Apply the formula and rearrange to solve for \(R_f\):**
    \( A_v = 1 + \frac{R_f}{R_1} \)
    \( 10 = 1 + \frac{R_f}{1 \text{ k}\Omega} \)
    \( 9 = \frac{R_f}{1 \text{ k}\Omega} \)
    \( R_f = 9 \times 1 \text{ k}\Omega = 9 \text{ k}\Omega \)

You would need a feedback resistor of \(9 \text{ k}\Omega\).

## Practice Task

Consider an op-amp circuit with the following components:

*   **Inverting Configuration:** \(R_{in} = 20 \text{ k}\Omega\), \(R_f = 200 \text{ k}\Omega\)
*   **Non-Inverting Configuration:** \(R_1 = 5 \text{ k}\Omega\), \(R_f = 45 \text{ k}\Omega\)

Calculate the voltage gain for each configuration.

## Self-Check Questions

1.  What does the negative sign in the inverting amplifier gain formula signify?
2.  If you double the feedback resistor (\(R_f\)) in a non-inverting amplifier circuit, what happens to the voltage gain?
3.  Can an op-amp configured as an inverting amplifier have a voltage gain of +5? Explain why or why not.

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/single-stage-op-amp-gain-determination|Single-Stage Op-Amp Gain Determination]]
