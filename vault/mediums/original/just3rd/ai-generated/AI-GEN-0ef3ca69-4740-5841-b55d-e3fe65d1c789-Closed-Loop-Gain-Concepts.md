---
type: "medium"
title: "Understanding Closed-Loop Gain in Op-Amps"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/closed-loop-gain-concepts|closed-loop-gain-concepts]]"
learning-time-in-minutes: 3
---
# Understanding Closed-Loop Gain in Op-Amps

In amplifier design, operational amplifiers (op-amps) are fundamental building blocks. While op-amps have a very high inherent gain (open-loop gain), this gain is often unmanageable and difficult to control precisely. This is where **closed-loop gain** comes in. Closed-loop gain refers to the overall gain of an amplifier circuit when feedback is applied. Feedback allows us to precisely control the amplifier's gain and stabilize its operation.

## The Power of Feedback

Feedback is the process of taking a portion of the output signal and feeding it back to the input. For op-amps, this is typically done by connecting components (resistors, capacitors) between the output and one of the input terminals. This connection creates a "loop" from output back to input, hence "closed-loop."

With negative feedback (where the signal fed back opposes the input signal), the op-amp adjusts its output to maintain a very specific voltage difference between its two input terminals (the inverting and non-inverting inputs). This behavior is key to achieving predictable closed-loop gain.

## Calculating Closed-Loop Gain

The beauty of negative feedback in op-amp circuits is that the closed-loop gain often depends on the values of the external components (like resistors) rather than the op-amp's internal, variable open-loop gain.

For the most common op-amp configurations using resistors, the closed-loop gain can often be determined by simple resistor ratios.

### Example: The Inverting Amplifier

Consider an inverting amplifier configuration. The output voltage ($V_{out}$) is an amplified and inverted version of the input voltage ($V_{in}$).

*   **Input Resistor ($R_{in}$):** Connects the input signal to the inverting input of the op-amp.
*   **Feedback Resistor ($R_f$):** Connects the output of the op-amp back to the inverting input.
*   **Non-inverting input:** Typically connected to ground.

The closed-loop voltage gain ($A_{v, cl}$) for an ideal inverting amplifier is given by:

\[
A_{v, cl} = -\frac{R_f}{R_{in}}
\]

The negative sign indicates that the output signal is inverted (180-degree phase shift) relative to the input.

**Scenario:** Imagine you need to reduce a 1-Volt sensor signal down to 0.1 Volts for an analog-to-digital converter (ADC). Using an inverting amplifier, you could choose $R_{in} = 10 \text{ k}\Omega$ and $R_f = 1 \text{ k}\Omega$.

\[
A_{v, cl} = -\frac{1 \text{ k}\Omega}{10 \text{ k}\Omega} = -0.1
\]

With this configuration, your 1V input becomes -0.1V output, achieving the desired attenuation.

## Practice Task

Build a simple inverting amplifier circuit in a simulator (like Tinkercad Circuits, LTspice, or even a breadboard with actual components if available).

1.  Choose an op-amp component.
2.  Connect an input resistor ($R_{in}$) and a feedback resistor ($R_f$). For instance, set $R_{in} = 5 \text{ k}\Omega$ and $R_f = 25 \text{ k}\Omega$.
3.  Apply a small sine wave input signal (e.g., 0.5V peak).
4.  Measure the output voltage.

What is the expected closed-loop gain in terms of the resistor ratio? What is the expected output voltage amplitude?

## Self-Check Questions

1.  What is the primary purpose of using feedback in an op-amp circuit?
2.  In an inverting amplifier, how does the ratio of the feedback resistor ($R_f$) to the input resistor ($R_{in}$) affect the circuit's gain?
3.  If you want to increase the gain of an inverting amplifier, what would you do to the resistor values ($R_f$ and $R_{in}$)?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/closed-loop-gain-concepts|Closed-Loop Gain Concepts]]
