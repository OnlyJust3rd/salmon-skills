---
type: "medium"
title: "Applying the Superposition Theorem"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/superposition-theorem-application|Superposition Theorem Application]]"
---
# Applying the Superposition Theorem

This lesson focuses on applying the Superposition theorem to analyze electrical circuits and find unknown circuit parameters like voltage or current.

## Understanding Superposition

The Superposition theorem is a powerful tool for analyzing linear circuits that contain multiple independent sources (voltage or current). It states that:

> In a linear circuit with multiple independent sources, the total current or voltage through any element is the algebraic sum of the currents or voltages produced by each individual independent source, considered one at a time, with all other independent sources turned off.

**Key Concepts:**

*   **Linear Circuit:** A circuit where the relationship between voltage and current is linear (obeys Ohm's Law). Resistors are the primary linear components.
*   **Independent Source:** A source (voltage or current) whose output is independent of the circuit's load.
*   **Turning Off Sources:**
    *   An independent **voltage source** is turned off by replacing it with a short circuit (a wire).
    *   An independent **current source** is turned off by replacing it with an open circuit (removing it).

**Why Use Superposition?**

While methods like mesh or nodal analysis can solve circuits with multiple sources directly, Superposition can simplify the process by breaking down a complex problem into several simpler ones, each with only one source active. This is particularly useful for understanding the contribution of each source to the overall circuit behavior.

## Practical Example: Finding the Current through a Resistor

Consider the following circuit with two independent voltage sources:

```
      +----- R1 -----+
      |              |
     V1            R2
      |              |
      +----- R3 -----+
      |              |
     V2            R4
      |              |
      +--------------+
```

Let's assume:
*   \(V_1 = 10V\)
*   \(V_2 = 5V\)
*   \(R_1 = 2\Omega\)
*   \(R_2 = 3\Omega\)
*   \(R_3 = 1\Omega\)
*   \(R_4 = 4\Omega\)

We want to find the current flowing through \(R_2\).

### Step 1: Analyze with \(V_1\) active and \(V_2\) off.

Turn off \(V_2\) by replacing it with a short circuit. The circuit now has only \(V_1\) and resistors. We can solve this simplified circuit using basic circuit analysis techniques (like series/parallel combinations or Ohm's Law).

Let \(I_{2,V1}\) be the current through \(R_2\) due to \(V_1\).

*   Redraw the circuit with \(V_2\) shorted.
*   Calculate the equivalent resistance seen by \(V_1\).
*   Calculate the total current from \(V_1\).
*   Determine the portion of this current that flows through \(R_2\) using current division if applicable, or by finding the voltage across \(R_2\).

### Step 2: Analyze with \(V_2\) active and \(V_1\) off.

Turn off \(V_1\) by replacing it with a short circuit. The circuit now has only \(V_2\) and resistors.

Let \(I_{2,V2}\) be the current through \(R_2\) due to \(V_2\).

*   Redraw the circuit with \(V_1\) shorted.
*   Repeat the process from Step 1 to find the current through \(R_2\), this time considering the effect of \(V_2\).

### Step 3: Sum the contributions.

The total current through \(R_2\) is the algebraic sum of the currents found in Step 1 and Step 2:

\[ I_{R_2} = I_{2,V1} + I_{2,V2} \]

**Important:** Pay close attention to the direction of current flow in each step. If the currents calculated in Step 1 and Step 2 flow in opposite directions through \(R_2\), you will subtract one from the other.

## Practice Task

Consider a circuit with a \(6V\) voltage source and a \(2\Omega\) resistor in series with a parallel combination of a \(3\Omega\) resistor and a \(4\Omega\) resistor. Now, add a \(2A\) current source in parallel with the \(3\Omega\) resistor. Use the Superposition theorem to find the current through the \(4\Omega\) resistor.

**Steps to follow:**

1.  **Source 1 (\(6V\) voltage source) active, Source 2 (\(2A\) current source) off:** Replace the \(2A\) current source with an open circuit. Calculate the current through the \(4\Omega\) resistor.
2.  **Source 2 (\(2A\) current source) active, Source 1 (\(6V\) voltage source) off:** Replace the \(6V\) voltage source with a short circuit. Calculate the current through the \(4\Omega\) resistor.
3.  **Sum the results:** Algebraically add the currents found in steps 1 and 2 to get the total current through the \(4\Omega\) resistor.

## Self-Check Questions

1.  When applying the Superposition theorem, how do you turn off an independent voltage source?
2.  How do you turn off an independent current source?
3.  Can the Superposition theorem be directly applied to circuits containing dependent sources? Why or why not?
4.  What is the primary advantage of using the Superposition theorem?

## Supports

- [[skills/hardware-embedded/electronics-embedded/circuit-analysis/microskills/superposition-theorem-application|Superposition Theorem Application]]
