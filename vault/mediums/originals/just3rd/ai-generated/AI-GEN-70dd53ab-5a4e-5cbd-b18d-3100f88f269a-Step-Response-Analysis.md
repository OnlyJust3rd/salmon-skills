---
type: "medium"
title: "Interpreting Step Responses of RC and RL Circuits"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/step-response-analysis|step-response-analysis]]"
learning-time-in-minutes: 3
---
# Interpreting Step Responses of RC and RL Circuits

Understanding how circuits behave when a sudden voltage or current change (a step input) is applied is crucial. This lesson focuses on interpreting the resulting voltage and current waveforms in RC (Resistor-Capacitor) and RL (Resistor-Inductor) circuits.

## What is a Step Response?

When a DC voltage source is suddenly connected or disconnected to an RC or RL circuit, the currents and voltages don't instantly reach their steady-state values. Instead, they change gradually over time. This transient behavior, how the circuit settles to its new state, is called its step response.

The key to understanding step responses lies in the **time constant** (\(\tau\)). This value, determined by the circuit's components, tells us how quickly the circuit responds.

*   **For an RC circuit:** \(\tau = R \times C\)
*   **For an RL circuit:** \(\tau = \frac{L}{R}\)

After one time constant, the voltage or current will have reached approximately 63.2% of its total change. After five time constants, it's considered to have reached its steady-state value.

## Interpreting Waveforms

Let's look at how these responses appear as graphs (waveforms):

**RC Circuit Step Response (Charging):**

When a DC voltage is applied to an uncharged capacitor in series with a resistor, the capacitor voltage starts at zero and rises exponentially towards the source voltage. The current starts at a maximum value (equal to the source voltage divided by the resistance) and decays exponentially to zero.

**RL Circuit Step Response (Inductor Energizing):**

When a DC voltage is applied to an inductor in series with a resistor, the inductor current starts at zero and rises exponentially towards its steady-state value (source voltage divided by resistance). The voltage across the inductor starts at the source voltage (since the initial current is zero, the voltage drop across R is zero) and decays exponentially to zero.

## Practical Scenario: Power Supply Filtering

Imagine a simple DC power supply that uses a capacitor to smooth out voltage ripples. When the power supply is switched on, the capacitor "charges up" through a series resistor. The time it takes for the capacitor to reach its desired voltage (and thus stabilize the output voltage) is dictated by the RC time constant. A smaller time constant means the supply stabilizes faster.

## Practice Task

Consider an RC circuit with a 10 k\(\Omega\) resistor and a 1 \(\mu\)F capacitor. A 5V DC step voltage is applied.

1.  Calculate the time constant (\(\tau\)).
2.  Sketch the expected waveform for the capacitor voltage over time, indicating the voltage at \(t=0\) and \(t=\infty\).
3.  Describe what happens to the current in the circuit during this time.

## Self-Check Questions

1.  What does the time constant (\(\tau\)) represent in the step response of an RC or RL circuit?
2.  In an RC charging circuit, what is the initial voltage across the capacitor when the step voltage is applied?
3.  In an RL circuit, what happens to the voltage across the inductor as time progresses after a step voltage is applied?

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/step-response-analysis|Step Response Analysis]]
