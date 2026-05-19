---
type: "medium"
title: "Theoretical Outcome Deviation Analysis"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/theoretical-outcome-deviation-analysis|Theoretical Outcome Deviation Analysis]]"
---
# Theoretical Outcome Deviation Analysis

Understanding how small changes in electronic components can significantly alter a circuit's performance is crucial in practical circuit analysis. This lesson focuses on assessing how variations in component values impact predicted circuit results.

## Explanation

When we design or analyze a circuit, we often use ideal component values. However, real-world components have manufacturing tolerances, meaning their actual values can deviate from their marked values. For example, a 1kΩ resistor might actually measure 980Ω or 1020Ω. This lesson helps you analyze the consequences of these deviations on key circuit parameters like voltage, current, gain, or frequency response.

The process involves:
1.  **Identifying critical components:** Determine which components have the most significant impact on the circuit's outcome.
2.  **Determining deviation ranges:** Understand the typical tolerance of the components being used (e.g., ±5%, ±10%).
3.  **Recalculating outcomes:** Rerun circuit calculations (using Ohm's Law, Kirchhoff's Laws, etc.) with the component values at their extreme tolerance limits.
4.  **Analyzing the difference:** Compare the results with nominal values to quantify the deviation.

## Practical Scenario: Analyzing a Simple Voltage Divider

Consider a voltage divider circuit used to create a reference voltage.

**Circuit:**
A 10V source is connected to a series combination of two resistors, R1 and R2. The output voltage (Vout) is measured across R2.

*   R1 = 1kΩ
*   R2 = 2kΩ
*   Vsource = 10V

**Theoretical Calculation (Nominal Values):**
The total resistance is R_total = R1 + R2 = 1kΩ + 2kΩ = 3kΩ.
The current flowing through the circuit is I = Vsource / R_total = 10V / 3kΩ ≈ 3.33mA.
The output voltage is Vout = I * R2 = 3.33mA * 2kΩ = 6.67V.

**Component Variation Analysis:**
Let's assume R1 has a tolerance of ±5% and R2 has a tolerance of ±10%.

**Case 1: Maximum Vout**
To maximize Vout, we need to maximize R2 and minimize R1.
*   R1_min = 1kΩ * (1 - 0.05) = 950Ω
*   R2_max = 2kΩ * (1 + 0.10) = 2.2kΩ
*   R_total_max_Vout = 950Ω + 2.2kΩ = 3.15kΩ
*   I_max_Vout = 10V / 3.15kΩ ≈ 3.17mA
*   Vout_max = 3.17mA * 2.2kΩ ≈ **7.00V**

**Case 2: Minimum Vout**
To minimize Vout, we need to minimize R2 and maximize R1.
*   R1_max = 1kΩ * (1 + 0.05) = 1.05kΩ
*   R2_min = 2kΩ * (1 - 0.10) = 1.8kΩ
*   R_total_min_Vout = 1.05kΩ + 1.8kΩ = 2.85kΩ
*   I_min_Vout = 10V / 2.85kΩ ≈ 3.51mA
*   Vout_min = 3.51mA * 1.8kΩ ≈ **6.32V**

**Deviation Analysis:**
The theoretical output voltage was 6.67V.
*   Maximum deviation: 7.00V - 6.67V = +0.33V (approximately +4.9%)
*   Minimum deviation: 6.32V - 6.67V = -0.35V (approximately -5.2%)

This analysis shows that the output voltage can vary by about ±5% due to component tolerances, which is important information for applications requiring a precise reference voltage.

## Practice Task

Analyze a simple series RC circuit with a voltage source.

*   Vsource = 5V
*   R = 10kΩ (tolerance ±1%)
*   C = 1µF (tolerance ±10%)

Calculate the time constant (\(\tau = RC\)) using nominal values. Then, calculate the maximum and minimum possible time constants by considering the worst-case component tolerances. Determine the percentage deviation of the time constant from its nominal value in both cases.

## Self-Check Questions

1.  Why is it important to analyze component variations in circuit design?
2.  In the voltage divider example, which resistor had a larger *absolute* impact on the Vout deviation, and why?
3.  If a circuit requires a highly stable output, what steps can be taken regarding component selection and analysis?

## Supports

- [[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/theoretical-outcome-deviation-analysis|Theoretical Outcome Deviation Analysis]]
