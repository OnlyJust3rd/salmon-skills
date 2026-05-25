---
type: "medium"
title: "Analyzing System Input-Output Behavior"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/signals-systems/system-property-analysis/microskills/input-output-behavior-analysis|input-output-behavior-analysis]]"
related-skills:
  - "[[skills/mathematics/signals-systems/system-property-analysis/system-property-analysis|system-property-analysis]]"
learning-time-in-minutes: 4
---
# Analyzing System Input-Output Behavior

This lesson focuses on **deconstructing system responses to different inputs**. Understanding this input-output relationship is fundamental to analyzing system properties like linearity, time-invariance, causality, and stability.

## What is Input-Output Behavior?

In any system, we provide **inputs**, and the system produces **outputs**. The way the output changes in response to different inputs is its input-output behavior. This behavior reveals a lot about the system's underlying characteristics.

Think of a simple thermostat:
*   **Input:** The desired temperature setting.
*   **Output:** Whether the heater or cooler is activated, or if the system is idle.

If you change the desired temperature (input) from 20°C to 25°C, the thermostat (system) will likely turn on the heater (output). The *way* it responds – how quickly it turns on, how much it overshoots, etc. – is its input-output behavior.

## Observing Input-Output Behavior

To analyze this behavior, we often use specific types of inputs and observe the corresponding outputs. Common test inputs include:

*   **Step Input:** A sudden change from zero to a constant value.
*   **Impulse Input:** A very short, sharp "kick" of energy.
*   **Sinusoidal Input:** A smoothly varying input, like a sine wave.
*   **Ramp Input:** An input that increases linearly over time.

### Example: A Simple RC Circuit

Consider a simple series RC circuit with a voltage source \(v_{in}(t)\) as the input and the voltage across the capacitor \(v_c(t)\) as the output. The differential equation governing this system is:

$$
RC \frac{dv_c(t)}{dt} + v_c(t) = v_{in}(t)
$$

Let's analyze its behavior with different inputs.

#### 1. Step Input

Suppose the input is a step function: \(v_{in}(t) = V_0 u(t)\), where \(u(t)\) is the unit step function (0 for \(t<0\), 1 for \(t \ge 0\)). Assume the capacitor is initially uncharged (\(v_c(0) = 0\)).

The solution for \(v_c(t)\) is:

$$
v_c(t) = V_0 (1 - e^{-t/(RC)}) u(t)
$$

**Observation:**
*   The output starts at 0.
*   It smoothly rises towards the input voltage \(V_0\).
*   It takes time to reach (or approach) the final value, characterized by the time constant \(\tau = RC\). The output reaches about 63.2% of \(V_0\) at \(t=\tau\).

#### 2. Sinusoidal Input

Suppose the input is a sine wave: \(v_{in}(t) = A \sin(\omega t)\).

The output will also be a sinusoidal wave, but it will be **attenuated** (its amplitude will be smaller) and **phase-shifted** (it will lag or lead the input). The exact output is:

$$
v_c(t) = \frac{A}{\sqrt{1 + (\omega RC)^2}} \sin(\omega t - \arctan(\omega RC))
$$

**Observation:**
*   The output is also a sinusoid.
*   Its amplitude \(A_{out} = \frac{A}{\sqrt{1 + (\omega RC)^2}}\) depends on the input frequency \(\omega\). Higher frequencies lead to smaller output amplitudes.
*   There is a phase lag \(\phi = \arctan(\omega RC)\). Higher frequencies lead to larger phase lags.

## Why Analyze Input-Output Behavior?

By observing how a system responds to these standard inputs, we can infer crucial properties:

*   **Linearity:** If the system is linear, scaling the input by a factor \(k\) scales the output by the same factor \(k\). Also, the response to a sum of inputs is the sum of the responses to individual inputs.
*   **Time-Invariance:** If the system is time-invariant, delaying the input by a certain time \(t_0\) simply delays the output by the same time \(t_0\). The shape of the response remains the same.
*   **Causality:** A causal system's output at any time \(t\) depends only on present and past inputs, not on future inputs. For example, the RC circuit is causal; turning the voltage source on at \(t=0\) doesn't instantly affect \(v_c(t)\) for \(t < 0\).
*   **Stability:** A stable system will have a bounded output for a bounded input (BIBO stability). If you apply a finite input, the output won't grow indefinitely large. The RC circuit is stable; \(v_c(t)\) never exceeds \(V_0\) for a step input \(V_0\).

## Key Takeaways

*   Input-output behavior describes how a system transforms inputs into outputs.
*   Analyzing this behavior involves applying standard test inputs (step, impulse, sinusoid) and observing the resulting outputs.
*   The characteristics of the output (e.g., rise time, steady-state value, amplitude, phase shift) provide clues about the system's fundamental properties.
*   This analysis is the foundation for understanding linearity, time-invariance, causality, and stability.

## Supports

- [[skills/mathematics/signals-systems/system-property-analysis/microskills/input-output-behavior-analysis|Input-Output Behavior Analysis]]
