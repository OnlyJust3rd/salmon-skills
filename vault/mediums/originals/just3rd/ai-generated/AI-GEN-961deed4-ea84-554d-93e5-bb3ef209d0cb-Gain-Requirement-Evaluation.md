---
type: "medium"
title: "Evaluating Amplification Gain Requirements"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/gain-requirement-evaluation|gain-requirement-evaluation]]"
related-skills:
  - "[[skills/computing/hardware-embedded/electronics/amplifier-design/amplifier-design|amplifier-design]]"
learning-time-in-minutes: 3
---
# Evaluating Amplification Gain Requirements

This lesson focuses on judging the suitability of different operational amplifier (op-amp) configurations based on their ability to meet specific amplification gain targets. Understanding the inherent gain characteristics of common op-amp circuits is crucial for effective amplifier design.

### Understanding Op-Amp Gain

Op-amps are fundamental building blocks in electronic circuits, and their primary function is often amplification. The gain of an amplifier determines how much the input signal's amplitude is increased. Different op-amp configurations (like non-inverting, inverting, voltage follower) have distinct gain formulas. Evaluating a configuration against a desired gain involves comparing the theoretical gain of the circuit to the target amplification.

### Practical Example: Designing a Pre-amplifier

Imagine you are designing a pre-amplifier for an audio system. Your input signal is a low-level microphone output, and you need to boost it by a factor of 100 before it reaches the main amplifier.

Let's consider two common op-amp configurations:

1.  **Non-inverting amplifier:** The gain is given by \(A_v = 1 + \frac{R_f}{R_i}\).
2.  **Inverting amplifier:** The gain is given by \(A_v = -\frac{R_f}{R_i}\). (Note: the negative sign indicates signal inversion, which is often acceptable or even desired in audio systems).

To achieve a gain of 100:

*   **For the non-inverting configuration:** We need \(1 + \frac{R_f}{R_i} = 100\). This means \(\frac{R_f}{R_i} = 99\). We could choose \(R_i = 1k\Omega\) and \(R_f = 99k\Omega\), or \(R_i = 10k\Omega\) and \(R_f = 990k\Omega\).
*   **For the inverting configuration:** We need \(-\frac{R_f}{R_i} = 100\) (considering magnitude). This means \(\frac{R_f}{R_i} = 100\). We could choose \(R_i = 1k\Omega\) and \(R_f = 100k\Omega\).

Both configurations can achieve the desired gain magnitude. Your evaluation would then consider other factors like input impedance, output impedance, and potential for signal inversion requirements.

### Practice Task

You need to design a circuit that amplifies a sensor signal by a factor of 50. You have a set of standard resistors available: 1kΩ, 10kΩ, 100kΩ, and 1MΩ.

1.  Determine which of the following configurations can achieve the required gain of 50 using only the available resistors:
    *   Non-inverting amplifier.
    *   Inverting amplifier.

2.  For each configuration that can achieve the gain, specify the resistor values you would use.

### Self-Check Questions

1.  If a non-inverting amplifier circuit uses \(R_i = 10k\Omega\) and \(R_f = 1M\Omega\), what is its voltage gain?
2.  If an inverting amplifier circuit needs a gain of -20, and you want to use \(R_f = 200k\Omega\), what value must \(R_i\) be?
3.  What is the primary difference in gain calculation between a non-inverting and an inverting op-amp configuration?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/gain-requirement-evaluation|Gain Requirement Evaluation]]
