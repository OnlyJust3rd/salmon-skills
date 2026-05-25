---
type: "medium"
title: "Analyzing Op-Amp Feedback for Performance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/op-amp-circuit-performance-analysis|op-amp-circuit-performance-analysis]]"
learning-time-in-minutes: 3
---
# Analyzing Op-Amp Feedback for Performance

This lesson will explore how changing the values of feedback resistors in an operational amplifier (op-amp) circuit directly impacts its performance, specifically its gain and input/output impedance. Understanding this relationship is crucial for effectively designing and troubleshooting amplifier circuits.

### The Role of Feedback Resistors

In many op-amp configurations, feedback resistors are essential components that control the amplifier's behavior. They connect the op-amp's output back to its input (either inverting or non-inverting), creating a closed-loop system. The ratio and values of these resistors determine key performance metrics.

For a basic inverting op-amp configuration, the voltage gain (\(A_v\)) is primarily determined by the ratio of the feedback resistor (\(R_f\)) to the input resistor (\(R_{in}\)). The formula is:

\[
A_v = -\frac{R_f}{R_{in}}
\]

The input impedance of an ideal inverting op-amp is approximately equal to \(R_{in}\), while the output impedance is very low.

For a non-inverting op-amp, the voltage gain is given by:

\[
A_v = 1 + \frac{R_f}{R_{in}}
\]

In this case, the input impedance is very high (ideally infinite), and the output impedance is low.

### Practical Scenario: Audio Amplifier Design

Imagine you're designing a simple audio amplifier circuit using an op-amp. You want to amplify a weak audio signal to drive a small speaker.

**Initial Design:** You start with an inverting op-amp configuration.
*   Input Resistor (\(R_{in}\)): 1 kΩ
*   Feedback Resistor (\(R_f\)): 10 kΩ

With these values, the theoretical gain is \(-10\). The input impedance is approximately 1 kΩ.

**Modification 1: Increasing Gain:** To make the audio signal louder, you need more gain. You decide to increase the feedback resistor to 50 kΩ.
*   \(R_{in}\): 1 kΩ
*   \(R_f\): 50 kΩ

New gain = \(-50\). The input impedance remains around 1 kΩ.

**Modification 2: Decreasing Gain (and potentially increasing input impedance in a non-inverting setup):** Now, suppose you have too much gain and are clipping the audio signal. You need to reduce it. Let's switch to a non-inverting configuration for higher input impedance to avoid loading the audio source.

*   Input Resistor (\(R_{in}\)): 10 kΩ (This now connects the non-inverting input to ground)
*   Feedback Resistor (\(R_f\)): 100 kΩ (This connects the output to the non-inverting input)

Gain = \(1 + \frac{100 \text{ kΩ}}{10 \text{ kΩ}} = 1 + 10 = 11\).

If you wanted to reduce the gain in this non-inverting circuit, you would decrease \(R_f\) or increase \(R_{in}\). For example, changing \(R_f\) to 50 kΩ would give a gain of \(1 + \frac{50 \text{ kΩ}}{10 \text{ kΩ}} = 6\). The input impedance remains very high.

### Practice Task

Consider a non-inverting op-amp circuit with an input resistor (\(R_{in}\)) of 20 kΩ and a feedback resistor (\(R_f\)) of 100 kΩ.

1.  Calculate the voltage gain (\(A_v\)) of this circuit.
2.  What is the approximate input impedance of this non-inverting configuration?
3.  If you wanted to reduce the gain to approximately 4, how would you change the feedback resistor value?

### Self-Check Questions

1.  In an inverting op-amp configuration, if you double the feedback resistor (\(R_f\)) while keeping the input resistor (\(R_{in}\)) the same, what happens to the gain?
2.  Which op-amp configuration (inverting or non-inverting) typically offers a higher input impedance?
3.  How does increasing the feedback resistor (\(R_f\)) affect the gain of a non-inverting op-amp?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/op-amp-circuit-performance-analysis|Op-Amp Circuit Performance Analysis]]
