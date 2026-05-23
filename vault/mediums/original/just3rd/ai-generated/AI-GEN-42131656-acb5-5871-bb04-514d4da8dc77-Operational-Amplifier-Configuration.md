---
type: "medium"
title: "Operational Amplifier Configurations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/operational-amplifier-configuration|operational-amplifier-configuration]]"
learning-time-in-minutes: 3
---
# Operational Amplifier Configurations

Understanding how to set up an operational amplifier (op-amp) is the first step in using its power for signal amplification. Op-amps are versatile integrated circuits that can amplify signals, but their behavior depends heavily on how they are connected. This lesson focuses on the fundamental circuit setups.

## What is an Op-Amp Configuration?

An op-amp configuration refers to the way external components, like resistors and capacitors, are connected to the op-amp's terminals. These connections dictate how the op-amp processes input signals and produces an output. The two primary terminals of an op-amp are the inverting input (-) and the non-inverting input (+).

## Basic Configurations

There are two fundamental op-amp configurations we'll explore:

1.  **The Inverting Configuration:** In this setup, the input signal is applied to the inverting (-) input terminal, and the non-inverting (+) input is typically connected to ground (0V). This configuration inverts the input signal, meaning the output signal is 180 degrees out of phase with the input. It also provides a voltage gain that is determined by the ratio of external resistors.

2.  **The Non-Inverting Configuration:** Here, the input signal is applied to the non-inverting (+) input terminal, and the inverting (-) input is connected to ground through a feedback network. This configuration amplifies the input signal without inverting its phase. The voltage gain is determined by the feedback network.

## Practical Scenario

Imagine you have a very weak audio signal from a microphone that needs to be amplified before it can be processed by a speaker system.

*   **Using an Inverting Configuration:** If you wanted to amplify and also potentially filter out some noise that might be synchronized with the desired signal (causing it to be "inverted" in a way), you might use an inverting amplifier. The output will be a stronger version of the input signal, but its phase will be flipped.

*   **Using a Non-Inverting Configuration:** If you simply need to boost the strength of the audio signal without altering its phase, the non-inverting configuration is the way to go. The output will be a larger, in-phase replica of the microphone's signal.

## Practice Task

Sketch the circuit diagrams for both an inverting and a non-inverting op-amp configuration using a single op-amp, input signal source, resistors, and ground. Label all components and terminals.

## Self-Check Questions

1.  In an inverting op-amp configuration, where is the input signal typically applied?
2.  What happens to the phase of the input signal when using a non-inverting op-amp configuration?
3.  What external components are essential for setting the gain in both inverting and non-inverting op-amp circuits?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/operational-amplifier-configuration|Operational Amplifier Configuration]]
