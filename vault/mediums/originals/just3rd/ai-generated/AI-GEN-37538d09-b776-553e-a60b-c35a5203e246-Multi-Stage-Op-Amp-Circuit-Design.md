---
type: "medium"
title: "Designing Multi-Stage Op-Amp Circuits"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/multi-stage-op-amp-circuit-design|multi-stage-op-amp-circuit-design]]"
learning-time-in-minutes: 4
---
# Designing Multi-Stage Op-Amp Circuits

This lesson focuses on designing multi-stage operational amplifier (op-amp) circuits to achieve precise amplification and signal inversion. We'll move beyond single-stage designs to create more complex circuits that meet specific performance requirements.

## The Need for Multiple Stages

A single op-amp stage, while powerful, has limitations in terms of overall gain, bandwidth, and output drive capability. By cascading multiple op-amp stages, we can overcome these limitations. Each stage can be optimized for a particular function, such as high voltage gain, precise current buffering, or filtering, contributing to a robust overall amplifier design.

## Practical Scenario

Imagine you need to design an audio preamplifier for a sensitive microphone. The microphone output signal is very small and requires significant amplification. Additionally, the system might need to filter out unwanted high-frequency noise. A single-stage op-amp might not provide enough clean gain, or it might struggle to drive subsequent audio processing stages.

We will design a two-stage amplifier:
1.  **Stage 1: High Voltage Gain:** This stage will use a non-inverting amplifier configuration to boost the low-level microphone signal significantly.
2.  **Stage 2: Buffering and Output Drive:** This stage will use a voltage follower (common collector configuration in BJT terms, but an op-amp voltage follower for us) to provide a low output impedance, ensuring the amplified signal can drive the next stage without loss.

## Design Steps

Let's outline the process for creating a two-stage amplifier with a target overall gain of 1000 and ensure the output is in phase with the input (no net inversion).

**Stage 1: Non-Inverting Amplifier**

*   **Requirement:** Achieve a voltage gain ($A_{v1}$) of 100.
*   **Formula:** For a non-inverting op-amp, \(A_v = 1 + \frac{R_f}{R_i}\).
*   **Component Selection:** Let's choose $R_i = 1 \, \text{k}\Omega$. To achieve $A_{v1} = 100$:
    $100 = 1 + \frac{R_f}{1 \, \text{k}\Omega}$
    $99 = \frac{R_f}{1 \, \text{k}\Omega}$
    $R_f = 99 \, \text{k}\Omega$.
    So, Stage 1 will have $R_i = 1 \, \text{k}\Omega$ and $R_f = 99 \, \text{k}\Omega$. This stage provides a positive gain.

**Stage 2: Voltage Follower**

*   **Requirement:** Provide a voltage gain ($A_{v2}$) of 10 and low output impedance.
*   **Configuration:** A voltage follower has a gain of approximately 1. This stage's primary role is buffering. To achieve the *overall* gain of 1000, we need to reconsider Stage 1's gain or add an inverting stage if necessary.

**Revised Design Strategy for Overall Gain of 1000:**

To achieve a total gain of 1000, we can use two inverting stages, each providing a gain of 31.6 (since \(31.6 \times 31.6 \approx 1000\)) and resulting in a non-inverted final output. Or, one non-inverting stage and one inverting stage. Let's aim for:

*   **Stage 1: Non-Inverting Amplifier**
    *   **Requirement:** Gain of 100.
    *   $R_i = 1 \, \text{k}\Omega$, $R_f = 99 \, \text{k}\Omega$. (Gain = 100, Non-inverted)
*   **Stage 2: Inverting Amplifier**
    *   **Requirement:** Gain of 10.
    *   **Formula:** For an inverting op-amp, \(A_v = -\frac{R_f}{R_i}\).
    *   **Component Selection:** Let $R_i = 10 \, \text{k}\Omega$. To achieve a gain of -10:
        $-10 = -\frac{R_f}{10 \, \text{k}\Omega}$
        $R_f = 100 \, \text{k}\Omega$.
    *   So, Stage 2 will have $R_i = 10 \, \text{k}\Omega$ and $R_f = 100 \, \text{k}\Omega$. This stage provides a gain of -10.

**Overall Gain and Inversion:**
Total Gain = $A_{v1} \times A_{v2} = 100 \times (-10) = -1000$.
The negative sign indicates inversion. To achieve a positive overall gain of 1000 (output in phase), we would need an odd number of inverting stages (e.g., three stages) or a non-inverting stage followed by an inverting stage, then another non-inverting stage.

For our specific requirement of achieving a gain of 1000 and a non-inverted output, let's use:
*   **Stage 1: Non-Inverting Amplifier:** Gain = 31.6
    *   $R_i = 1 \, \text{k}\Omega$. $31.6 = 1 + \frac{R_f}{1 \, \text{k}\Omega} \implies R_f \approx 30.6 \, \text{k}\Omega$.
*   **Stage 2: Non-Inverting Amplifier:** Gain = 31.6
    *   $R_i = 1 \, \text{k}\Omega$. $R_f \approx 30.6 \, \text{k}\Omega$.

The output of Stage 1 is non-inverted. The output of Stage 2 (taking input from Stage 1) is also non-inverted. Therefore, the overall output is non-inverted with a gain of approximately $31.6 \times 31.6 \approx 1000$.

## Practice Task

Design a three-stage amplifier with an overall voltage gain of 100,000, where the final output signal is in phase with the input signal. Specify the configuration (inverting/non-inverting) and resistor values for each stage, assuming you have access to ideal op-amps and standard resistor values (e.g., 1kΩ, 10kΩ, 100kΩ).

## Self-Check Questions

1.  What is the primary advantage of using multiple op-amp stages over a single stage for high-gain applications?
2.  If Stage 1 has a gain of -50 and Stage 2 has a gain of -20, what is the overall gain and inversion characteristic of the two-stage amplifier?
3.  Why is a voltage follower often used as the final stage in a multi-stage amplifier?
4.  Explain how you would achieve a net positive gain from two cascaded inverting amplifier stages.

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/multi-stage-op-amp-circuit-design|Multi-Stage Op-Amp Circuit Design]]
