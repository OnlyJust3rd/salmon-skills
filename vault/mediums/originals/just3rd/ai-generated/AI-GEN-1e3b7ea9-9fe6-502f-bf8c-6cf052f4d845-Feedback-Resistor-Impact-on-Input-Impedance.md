---
type: "medium"
title: "Analyzing Feedback Resistors: Impact on Input Impedance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/feedback-resistor-impact-on-input-impedance|feedback-resistor-impact-on-input-impedance]]"
learning-time-in-minutes: 3
---
# Analyzing Feedback Resistors: Impact on Input Impedance

In amplifier design, understanding how feedback components affect circuit performance is crucial. This lesson focuses on how the values of feedback resistors influence the input impedance of operational amplifier (op-amp) circuits.

## What is Input Impedance?

Input impedance is the opposition a circuit presents to the flow of AC current. A higher input impedance means the amplifier draws less current from the signal source, preventing signal attenuation or distortion.

## Feedback Resistors and Input Impedance in Op-Amp Circuits

In common op-amp configurations like the inverting and non-inverting amplifiers, feedback resistors play a significant role in determining input impedance.

*   **Inverting Amplifier:** The input impedance of an ideal inverting amplifier is primarily determined by the resistor connected between the input signal source and the inverting input terminal (often labeled \(R_1\)). The feedback resistor (\(R_f\)) influences the gain, but its direct impact on input impedance is indirect. A smaller \(R_1\) will result in a lower input impedance.

*   **Non-Inverting Amplifier:** The input impedance of an ideal non-inverting amplifier is theoretically infinite. However, in practical circuits, it's very high due to the op-amp's inherent high input impedance. The feedback resistors (\(R_1\) and \(R_f\)) in this configuration determine the voltage gain, but they do not directly set the input impedance in the same way \(R_1\) does for the inverting amplifier.

**Key Takeaway:** For an inverting amplifier, the input resistor (\(R_1\)) directly controls input impedance. For a non-inverting amplifier, the feedback network's influence on input impedance is less direct, as the op-amp's intrinsic input impedance dominates.

## Practical Scenario

Imagine you are designing an audio pre-amplifier using an op-amp. Your signal source is a microphone with a relatively high output impedance. To avoid losing signal strength from the microphone, you need the pre-amplifier to have a high input impedance.

If you choose an inverting amplifier configuration, you would select a large value for the input resistor (\(R_1\)) to achieve this high input impedance. The feedback resistor (\(R_f\)) would then be chosen to set the desired voltage gain. If you chose a non-inverting configuration, you'd benefit from its naturally high input impedance, and the feedback resistors would primarily set the gain.

## Practice Task

Consider an inverting op-amp configuration.

1.  If the input resistor (\(R_1\)) is 1 kΩ and the feedback resistor (\(R_f\)) is 10 kΩ, what is the approximate input impedance of the circuit?
2.  If you change \(R_1\) to 10 kΩ while keeping \(R_f\) at 10 kΩ, how does the input impedance change?

## Self-Check Questions

1.  In an inverting amplifier, which resistor value directly sets the input impedance?
2.  What is the theoretical input impedance of an ideal non-inverting amplifier?
3.  Why is a high input impedance desirable when interfacing with a high-impedance signal source?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/feedback-resistor-impact-on-input-impedance|Feedback Resistor Impact on Input Impedance]]
