---
type: "medium"
title: "Applying Norton's Theorem"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/norton-theorem-application|norton-theorem-application]]"
learning-time-in-minutes: 2
---
# Applying Norton's Theorem

Norton's theorem is a powerful tool for simplifying complex circuits. It allows us to replace any linear two-terminal electrical network with an equivalent circuit consisting of a single current source in parallel with a single resistor. This simplification is particularly useful when analyzing the behavior of a specific part of a larger circuit.

### What is Norton's Theorem?

Norton's theorem states that any linear electrical network can be reduced to an equivalent circuit composed of a Norton current source ($I_{N}$) in parallel with a Norton resistance ($R_{N}$).

*   **Norton Current ($I_{N}$):** This is the current that would flow through the short-circuited terminals of the network.
*   **Norton Resistance ($R_{N}$):** This is the equivalent resistance looking back into the network from the terminals, with all independent sources turned off (voltage sources short-circuited, current sources open-circuited).

### When to Use Norton's Theorem

Norton's theorem is most beneficial when:

*   You need to analyze the current and voltage across a specific load in a complex circuit.
*   You are analyzing the circuit's response to multiple different load resistances.
*   You want to simplify a portion of a circuit to understand its fundamental behavior.

### Steps to Apply Norton's Theorem

1.  **Identify the Terminals:** Clearly mark the two terminals (let's call them A and B) across which you want to find the equivalent Norton circuit.
2.  **Calculate Norton Current ($I_{N}$):**
    *   Short-circuit the terminals A and B.
    *   Calculate the current flowing through this short circuit. This is your $I_{N}$. If the circuit contains only independent sources, you can use mesh analysis, nodal analysis, or superposition to find this short-circuit current.
3.  **Calculate Norton Resistance ($R_{N}$):**
    *   Deactivate all independent sources in the original circuit. Voltage sources become short circuits, and current sources become open circuits.
    *   Look into the terminals A and B and calculate the equivalent resistance. This is your $R_{N}$.
    *   If the circuit contains dependent sources, $R_{N}$ is calculated by applying a voltage or current source to the terminals and finding the resulting current or voltage, using the formula $R_{N} = V_{test}/I_{test}$.
4.  **Draw the Norton Equivalent Circuit:** Construct a circuit with a current source ($I_{N}$) in parallel with a resistor ($R_{N}$), connected to the identified terminals A and B.

### Practical Example

Consider the following circuit. We want to find the Norton equivalent circuit for the portion of the circuit to the left of terminals A and B, where a load resistor $R_L$ would be connected.

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/norton-theorem-application|Norton Theorem Application]]
