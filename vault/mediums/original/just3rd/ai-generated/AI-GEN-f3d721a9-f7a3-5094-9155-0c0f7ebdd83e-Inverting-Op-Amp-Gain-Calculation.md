---
type: "medium"
title: "Inverting Op-Amp Gain Calculation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/inverting-op-amp-gain-calculation|inverting-op-amp-gain-calculation]]"
learning-time-in-minutes: 3
---
# Inverting Op-Amp Gain Calculation

This lesson focuses on applying the formula to calculate the voltage gain of a basic inverting operational amplifier (op-amp) configuration. Understanding this calculation is fundamental to designing amplifier circuits for signal processing.

### The Core Concept

An inverting op-amp configuration uses negative feedback to stabilize the circuit and control its gain. The key characteristic of an ideal op-amp is that its input terminals draw no current, and the voltage difference between the two input terminals is zero. This leads to a simple formula for the voltage gain.

The voltage gain ($A_v$) of an inverting op-amp is determined by the ratio of the feedback resistor ($R_f$) to the input resistor ($R_{in}$). It's also negative, indicating that the output signal is inverted (180 degrees out of phase) relative to the input signal.

The formula is:
\[ A_v = -\frac{R_f}{R_{in}} \]

Where:
*   $A_v$ is the voltage gain.
*   $R_f$ is the resistance of the feedback resistor.
*   $R_{in}$ is the resistance of the input resistor.

### Practical Example: Audio Preamplifier Stage

Imagine you are designing a simple audio preamplifier to boost a weak microphone signal before it goes to a main amplifier. You have a microphone that outputs a very small voltage, and you need to increase this voltage by a factor of 10, while also inverting it.

You have available resistors and need to choose values for $R_f$ and $R_{in}$. Let's say you choose an input resistor, $R_{in}$, of 1 kΩ (1000 Ω).

To achieve a gain of -10, you can use the formula:
\( A_v = -\frac{R_f}{R_{in}} \)

Substitute the known values:
\( -10 = -\frac{R_f}{1 \text{ kΩ}} \)

Rearrange the formula to solve for $R_f$:
\( R_f = 10 \times 1 \text{ kΩ} \)
\( R_f = 10 \text{ kΩ} \)

So, you would connect a 1 kΩ resistor from the input signal to the inverting input of the op-amp, and a 10 kΩ resistor from the output of the op-amp back to its inverting input. The output signal will be 10 times larger than the input signal and inverted in phase.

### Practice Task

Design an inverting amplifier circuit using an op-amp to achieve a voltage gain of -5. You have chosen an input resistor ($R_{in}$) of 2 kΩ. Calculate the required value for the feedback resistor ($R_f$).

### Self-Check Questions

1.  What does the negative sign in the inverting op-amp gain formula indicate?
2.  If you use an $R_{in}$ of 10 kΩ and an $R_f$ of 100 kΩ, what is the voltage gain of the inverting amplifier?
3.  If you need to decrease the voltage gain of an inverting amplifier (make it less negative, closer to zero), what change would you make to $R_f$ or $R_{in}$?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/inverting-op-amp-gain-calculation|Inverting Op-Amp Gain Calculation]]
