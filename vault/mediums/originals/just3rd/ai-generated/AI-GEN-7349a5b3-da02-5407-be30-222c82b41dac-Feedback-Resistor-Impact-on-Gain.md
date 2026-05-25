---
type: "medium"
title: "Analyzing Feedback Resistor Impact on Op-Amp Gain"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/feedback-resistor-impact-on-gain|feedback-resistor-impact-on-gain]]"
learning-time-in-minutes: 3
---
# Analyzing Feedback Resistor Impact on Op-Amp Gain

Understanding how feedback resistors influence an operational amplifier's (op-amp) gain is crucial for designing circuits with predictable performance. This lesson focuses on analyzing this specific relationship within amplifier designs.

## The Core Concept

In many op-amp configurations, the gain is primarily determined by the ratio of specific resistors. For non-inverting and inverting amplifiers, the feedback network, typically consisting of a feedback resistor ($R_f$) and an input resistor ($R_i$ or related components), sets the overall voltage gain. By changing the values of these resistors, we can directly alter how much the op-amp amplifies the input signal.

## Practical Scenario: Gain Adjustment

Imagine you're designing an audio preamplifier using an op-amp. You have a raw audio signal from a microphone that needs to be boosted significantly before it can be processed further. You've chosen a non-inverting amplifier configuration.

Let's consider the formula for the gain ($A_v$) of a non-inverting op-amp:

\[ A_v = 1 + \frac{R_f}{R_{in}} \]

Where:
*   $R_f$ is the feedback resistor.
*   $R_{in}$ is the resistor connected from the inverting input to ground.

You initially set $R_f = 100 \, k\Omega$ and $R_{in} = 10 \, k\Omega$. The gain is:

$A_v = 1 + \frac{100 \, k\Omega}{10 \, k\Omega} = 1 + 10 = 11$

Now, you realize the signal is being amplified too much, causing clipping. To reduce the gain, you need to decrease the ratio $\frac{R_f}{R_{in}}$.

**Option 1: Increase $R_{in}$**
If you change $R_{in}$ to $20 \, k\Omega$ while keeping $R_f = 100 \, k\Omega$:
$A_v = 1 + \frac{100 \, k\Omega}{20 \, k\Omega} = 1 + 5 = 6$. The gain is reduced.

**Option 2: Decrease $R_f$**
If you change $R_f$ to $50 \, k\Omega$ while keeping $R_{in} = 10 \, k\Omega$:
$A_v = 1 + \frac{50 \, k\Omega}{10 \, k\Omega} = 1 + 5 = 6$. The gain is also reduced.

**Analysis:** Both options achieve the desired gain reduction. The choice might depend on other factors like input impedance or availability of resistor values.

## Practice Task

For an inverting op-amp configuration with the gain formula:

\[ A_v = -\frac{R_f}{R_{in}} \]

Where:
*   $R_f$ is the feedback resistor.
*   $R_{in}$ is the input resistor connected from the input signal to the inverting input.

You are currently using $R_f = 220 \, k\Omega$ and $R_{in} = 10 \, k\Omega$. Calculate the current gain. Then, determine what new values for $R_f$ and $R_{in}$ you would choose to achieve a gain of -5.

## Self-Check Questions

1.  In a non-inverting op-amp, if you double the feedback resistor ($R_f$) and keep the input resistor ($R_{in}$) the same, how does the gain change?
2.  In an inverting op-amp, if you want to increase the magnitude of the gain (e.g., from -10 to -20), what should you do to the ratio $\frac{R_f}{R_{in}}$?
3.  Besides gain, how might changing feedback resistor values affect other op-amp circuit characteristics (consider input and output impedance at a high level)?

## Supports

- [[skills/computing/hardware-embedded/electronics/amplifier-design/microskills/feedback-resistor-impact-on-gain|Feedback Resistor Impact on Gain]]
