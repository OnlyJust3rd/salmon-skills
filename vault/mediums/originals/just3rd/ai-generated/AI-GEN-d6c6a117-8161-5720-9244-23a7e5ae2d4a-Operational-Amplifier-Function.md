---
type: "medium"
title: "Operational Amplifier Function"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/operational-amplifier-function|operational-amplifier-function]]"
learning-time-in-minutes: 3
---
# Operational Amplifier Function

An operational amplifier, or op-amp, is a fundamental building block in analog electronics. Its primary function is to amplify voltage signals. Think of it as a high-gain differential amplifier that can perform various mathematical operations when combined with external components.

At its core, an op-amp amplifies the difference between two input voltages: a non-inverting input (+) and an inverting input (-). It has a very high open-loop gain, meaning a tiny difference in input voltage results in a very large output voltage. However, this high gain makes it difficult to control directly. To make op-amps useful in practical circuits, we use negative feedback.

### How it Works

An ideal op-amp has two key characteristics:

1.  **Infinite Input Impedance:** It draws no current from the input signal source.
2.  **Zero Output Impedance:** It can deliver any amount of current to the load without its output voltage changing.

In reality, these are not infinite or zero, but they are very large and very small, respectively, which allows op-amps to behave very predictably in many applications.

The output voltage of an op-amp is proportional to the difference between its two inputs, multiplied by its gain.

\[ V_{out} = A_{OL} \times (V_+ - V_-) \]

Where:
*   \(V_{out}\) is the output voltage.
*   \(A_{OL}\) is the open-loop gain.
*   \(V_+\) is the voltage at the non-inverting input.
*   \(V_-\) is the voltage at the inverting input.

Because \(A_{OL}\) is extremely high, even a minuscule voltage difference can drive the output to its maximum or minimum voltage limits (saturation). This is why op-amps are rarely used in their open-loop configuration.

### Practical Scenario

Imagine you're designing a simple audio preamplifier. You have a very weak audio signal from a microphone that needs to be boosted before it can be processed by other audio circuits. An op-amp, configured with appropriate external resistors, can take this weak signal and amplify it to a usable level. Without the op-amp's ability to precisely amplify voltage differences, the microphone's output would be too faint to work with.

### Practice Task

Consider an op-amp. If the voltage at the non-inverting input (\(V_+\)) is 1V and the voltage at the inverting input (\(V_-\)) is 0.9V, and the op-amp has an open-loop gain of 100,000, what would be the theoretical output voltage if it were operating in its linear region (and not saturated)?

### Self-Check Questions

1.  What is the primary function of an operational amplifier?
2.  What are the two input terminals of an op-amp called?
3.  Why are op-amps rarely used in their open-loop configuration?
4.  What does "high input impedance" mean for an op-amp?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/operational-amplifier-function|Operational Amplifier Function]]
