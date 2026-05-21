---
type: "medium"
title: "Non-inverting Op-Amp Gain Calculation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/amplifier-design/microskills/non-inverting-op-amp-gain-calculation|non-inverting-op-amp-gain-calculation]]"
---
# Non-inverting Op-Amp Gain Calculation

In amplifier design, understanding how to control voltage gain is fundamental. This lesson focuses on applying the formula to calculate the voltage gain of a non-inverting operational amplifier (op-amp) configuration.

## Understanding Non-inverting Op-Amp Gain

A non-inverting op-amp configuration amplifies an input signal and outputs a signal with the same polarity. The voltage gain in this configuration is determined by the ratio of two resistors: the feedback resistor ($R_f$) and the resistor connected from the inverting input to ground ($R_i$).

The formula for the voltage gain ($A_v$) of a non-inverting op-amp is:

\[ A_v = 1 + \frac{R_f}{R_i} \]

Where:
*   $A_v$ is the voltage gain.
*   $R_f$ is the resistance of the feedback resistor.
*   $R_i$ is the resistance of the resistor connected from the inverting input to ground.

Notice that the gain is always greater than or equal to 1, as expected for a non-inverting amplifier.

## Practical Example: Designing an Amplifier for an Audio Preamp

Imagine you are designing a simple audio preamplifier circuit. You have an audio source producing a small voltage signal, and you need to boost it by a factor of 10 before sending it to the next stage. You've chosen to use a non-inverting op-amp configuration.

Let's say you select a standard resistor value for $R_i$ of 1 kΩ (1000 Ohms). You need to calculate the value of $R_f$ required to achieve a gain of 10.

Using the formula:

\[ 10 = 1 + \frac{R_f}{1 \text{ kΩ}} \]

Subtract 1 from both sides:

\[ 9 = \frac{R_f}{1 \text{ kΩ}} \]

Multiply both sides by 1 kΩ:

\[ R_f = 9 \times 1 \text{ kΩ} = 9 \text{ kΩ} \]

So, to achieve a voltage gain of 10 with a non-inverting op-amp where $R_i = 1$ kΩ, you would need a feedback resistor $R_f$ of 9 kΩ.

## Practice Task

You are building a sensor signal conditioner. The sensor outputs a small voltage, and you need to amplify it by a factor of 5. You decide to use a non-inverting op-amp configuration. If you choose to use a 10 kΩ resistor for $R_i$, what value of $R_f$ will you need?

## Self-Check Questions

1.  What is the formula for the voltage gain of a non-inverting op-amp?
2.  If $R_f = 50$ kΩ and $R_i = 10$ kΩ in a non-inverting configuration, what is the voltage gain?
3.  Can the voltage gain of a non-inverting op-amp be less than 1? Explain why or why not.

## Supports

- [[skills/hardware-embedded/electronics-embedded/amplifier-design/microskills/non-inverting-op-amp-gain-calculation|Non-inverting Op-Amp Gain Calculation]]
