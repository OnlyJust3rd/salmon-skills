---
type: "medium"
title: "Analyzing Feedback Resistor Impact on Output Impedance"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/amplifier-design/microskills/feedback-resistor-impact-on-output-impedance|feedback-resistor-impact-on-output-impedance]]"
---
# Analyzing Feedback Resistor Impact on Output Impedance

In amplifier design, understanding how feedback affects circuit parameters is crucial. This lesson focuses on analyzing the impact of feedback resistors on the output impedance of operational amplifier (op-amp) circuits. This is a key step in mastering feedback analysis.

## The Role of Feedback in Output Impedance

Operational amplifiers, when used in open-loop configurations, have very high output impedances. However, negative feedback dramatically alters this. The feedback network, typically composed of resistors, reduces the effective output impedance of the amplifier circuit. Different configurations and resistor values will lead to varying levels of output impedance reduction, impacting how the amplifier behaves when connected to a load.

*   **Inverting Amplifier:** Negative feedback applied to an inverting op-amp configuration generally *reduces* the output impedance.
*   **Non-inverting Amplifier:** Similar to the inverting configuration, negative feedback in a non-inverting setup also *reduces* the output impedance.

The degree of reduction is directly related to the feedback factor, which is determined by the feedback resistors.

## Practical Scenario: Driving a Speaker

Imagine you're designing an audio amplifier. The amplifier's output stage needs to drive a loudspeaker, which has a relatively low impedance (e.g., 8 ohms). If the amplifier's open-loop output impedance is too high, a significant portion of the audio signal's power will be lost across the amplifier's internal output resistance, and the frequency response might be affected. By carefully selecting feedback resistors, you can significantly lower the circuit's output impedance, ensuring efficient power transfer to the speaker and a cleaner audio signal.

Let's consider a basic non-inverting amplifier. The theoretical output impedance of an ideal op-amp in a non-inverting configuration with feedback is given by:

\[
Z_{out} = \frac{R_{out\_amp}}{1 + A_v \beta}
\]

Where:
*   \(Z_{out}\) is the closed-loop output impedance.
*   \(R_{out\_amp}\) is the open-loop output impedance of the op-amp (typically very high).
*   \(A_v\) is the open-loop voltage gain of the op-amp (also very high).
*   \(\beta\) is the feedback factor, determined by the feedback resistors. For a non-inverting amplifier, \(\beta \approx \frac{R_f}{R_1 + R_f}\), where \(R_1\) is the resistor from the inverting input to ground, and \(R_f\) is the feedback resistor.

From the formula, we can see that a larger \(\beta\) (achieved by choosing appropriate \(R_f\) and \(R_1\)) will result in a much smaller \(Z_{out}\) because it's divided by a larger factor.

## Practice Task

Consider a non-inverting amplifier circuit using an op-amp with an open-loop output impedance \(R_{out\_amp} = 1 \, M\Omega\) and an open-loop gain \(A_v = 100,000\).

1.  **Scenario A:** You choose \(R_1 = 1 \, k\Omega\) and \(R_f = 99 \, k\Omega\). Calculate the feedback factor \(\beta\) and the closed-loop output impedance \(Z_{out}\).
2.  **Scenario B:** You choose \(R_1 = 1 \, k\Omega\) and \(R_f = 199 \, k\Omega\). Calculate the feedback factor \(\beta\) and the closed-loop output impedance \(Z_{out}\).
3.  Compare the output impedances from Scenario A and Scenario B. How does increasing the feedback resistor value affect the output impedance?

## Self-Check Questions

1.  In a negative feedback configuration, what is the general effect of feedback resistors on the output impedance of an op-amp circuit?
2.  How would you choose feedback resistor values to achieve a *lower* output impedance for an amplifier driving a sensitive load?
3.  If you were designing an amplifier where a high output impedance was *desired* (e.g., for current sources), would you use negative feedback to reduce it, or would you consider other approaches?

## Supports

- [[skills/hardware-embedded/electronics-embedded/amplifier-design/microskills/feedback-resistor-impact-on-output-impedance|Feedback Resistor Impact on Output Impedance]]
