---
type: "medium"
title: "Diode Function Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/semiconductor-device-operation/microskills/diode-function-principles|diode-function-principles]]"
related-skills:
  - "[[skills/computing/hardware-embedded/electronics/semiconductor-device-operation/semiconductor-device-operation|semiconductor-device-operation]]"
learning-time-in-minutes: 4
---
# Diode Function Principles

In the realm of semiconductor devices, the diode is a fundamental building block. Understanding its operation is key to grasping how many electronic circuits function. This lesson will explore the core principles of how a diode works, focusing on its behavior under different electrical conditions.

## What is a Diode?

At its heart, a diode is a two-terminal electronic component that conducts current primarily in one direction. Think of it as a one-way valve for electricity. This property is achieved through its internal structure, which is typically made from semiconductor materials like silicon or germanium.

The two terminals of a diode are called the **anode** (A) and the **cathode** (K). By convention, the anode is the positive terminal and the cathode is the negative terminal.

## The p-n Junction: The Core of a Diode

The magic of a diode lies in its **p-n junction**. This junction is formed by joining two types of semiconductor materials:

*   **p-type semiconductor:** This material has an excess of "holes" (places where an electron is missing), which act as positive charge carriers.
*   **n-type semiconductor:** This material has an excess of free electrons, which act as negative charge carriers.

When these two materials are brought together, electrons from the n-type material diffuse into the p-type material, and holes from the p-type material diffuse into the n-type material, near the junction. This diffusion creates a region around the junction called the **depletion region**. In this region, there are very few free charge carriers (electrons or holes).

Crucially, the diffusion also leaves behind fixed, charged atoms. In the n-type side of the depletion region, positively charged donor atoms are left uncovered, creating a net positive charge. In the p-type side, negatively charged acceptor atoms are left uncovered, creating a net negative charge. This separation of charge creates an internal electric field, often referred to as the **built-in potential**. This built-in potential opposes further diffusion of charge carriers, establishing an equilibrium.

## Diode Operation: Forward Bias

When we connect a voltage source to a diode in a way that allows current to flow easily, we say the diode is **forward-biased**.

To achieve forward bias:

*   The **positive terminal** of the voltage source is connected to the **anode** (p-type material).
*   The **negative terminal** of the voltage source is connected to the **cathode** (n-type material).

When a sufficient forward voltage is applied (greater than the built-in potential, often around 0.7V for silicon diodes and 0.3V for germanium diodes), it overcomes the built-in potential. This causes the depletion region to narrow.

With the depletion region narrowed, the applied electric field pushes the majority charge carriers (holes from the p-side and electrons from the n-side) towards the junction. They then recombine with the opposite type of charge carriers and current flows through the diode.

**Key Characteristics of Forward Bias:**

*   **Low resistance:** The diode offers very little opposition to current flow.
*   **Current flows:** A significant current passes through the diode once the threshold voltage is exceeded.
*   **Depletion region shrinks.**

## Diode Operation: Reverse Bias

When we connect a voltage source to a diode in a way that opposes current flow, we say the diode is **reverse-biased**.

To achieve reverse bias:

*   The **negative terminal** of the voltage source is connected to the **anode** (p-type material).
*   The **positive terminal** of the voltage source is connected to the **cathode** (n-type material).

In this configuration, the applied voltage pushes the majority charge carriers (holes on the p-side and electrons on the n-side) *away* from the junction. This widens the depletion region, making it more difficult for current to flow. The increased separation of fixed charges creates a stronger electric field that further opposes the movement of charge carriers.

**Key Characteristics of Reverse Bias:**

*   **High resistance:** The diode acts almost like an open circuit, blocking current flow.
*   **Very little current flows:** Only a tiny amount of current, called **reverse saturation current**, flows. This is due to minority charge carriers that are present in small numbers.
*   **Depletion region widens.**

## Breakdown Voltage

If the reverse bias voltage is increased too much, a point is reached where the diode can no longer block the current. This is called the **breakdown voltage**. At breakdown, a large reverse current flows, which can permanently damage the diode if not limited.

## Summary of Diode Function

| Condition     | Anode Voltage vs. Cathode Voltage | Depletion Region | Resistance | Current Flow |
| :------------ | :-------------------------------- | :--------------- | :--------- | :----------- |
| **Forward Bias** | Anode > Cathode (by threshold)    | Narrows          | Low        | Significant  |
| **Reverse Bias** | Anode < Cathode                   | Widens           | High       | Very small   |

## Supports

- [[skills/computing/hardware-embedded/electronics/semiconductor-device-operation/microskills/diode-function-principles|Diode Function Principles]]
