---
type: "medium"
title: "Understanding Diode Operation Under Reverse Bias"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/semiconductor-device-operation/microskills/reverse-bias-diode-behavior|Reverse Bias Diode Behavior]]"
---
# Understanding Diode Operation Under Reverse Bias

In the realm of semiconductor devices, understanding how a diode behaves under different conditions is crucial. We've explored its fundamental structure and forward bias operation. Now, let's focus on what happens when we apply a voltage in the opposite direction – the reverse bias condition.

## What is Reverse Bias?

Reverse bias occurs when the voltage applied across a diode is such that it *opposes* the normal flow of current. For a standard P-N junction diode, this means connecting the positive terminal of the voltage source to the P-type material (which has an excess of holes) and the negative terminal to the N-type material (which has an excess of electrons).

Think of it like trying to push water uphill. The external voltage is working against the inherent properties of the diode junction.

## The Depletion Region Widens

Recall from our discussion of forward bias that a depletion region forms at the P-N junction. This region is characterized by a lack of free charge carriers (both electrons and holes).

When we apply a reverse bias:

1.  **Electric Field Formation:** The external voltage creates an electric field that pulls the free charge carriers *away* from the junction. Positive charges in the P-region are attracted towards the negative terminal, and negative charges (electrons) in the N-region are attracted towards the positive terminal.
2.  **Depletion Region Expansion:** As these mobile charge carriers are pulled away, the depletion region *expands*. More and more of the semiconductor material on either side of the junction becomes depleted of free charge carriers.
3.  **Increased Barrier Potential:** The expansion of the depletion region leads to an increase in the width of the depletion region. This wider region creates a larger *potential barrier* that must be overcome for current to flow.

## Minimal Current Flow: The Reverse Saturation Current

Because the depletion region is wide and the barrier potential is high in reverse bias, very little current can flow through the diode. The majority charge carriers (holes in the P-side and electrons in the N-side) are pushed away from the junction and cannot cross it.

However, there are always a small number of *minority* charge carriers present in both the P and N regions. For example, in the P-type material, there are a few free electrons (even though it's dominated by holes), and in the N-type material, there are a few holes (even though it's dominated by electrons).

These minority carriers are swept across the junction by the electric field created by the reverse bias. This results in a very small, constant current that flows through the diode, known as the **reverse saturation current ($I_S$)**. This current is essentially independent of the applied reverse voltage, up to a certain point.

> **Key Takeaway:** In reverse bias, a diode acts very much like an open switch, allowing only a tiny, almost negligible current to pass.

## Breakdown Voltage

While the diode effectively blocks current in reverse bias, this is only true up to a certain limit. If the reverse voltage is increased too much, the diode will eventually break down, and a significant current will begin to flow. This critical voltage is known as the **breakdown voltage ($V_{BR}$)**.

There are two primary mechanisms for reverse breakdown:

1.  **Zener Breakdown:** Occurs in heavily doped diodes. The strong electric field at the junction can directly pull electrons out of their covalent bonds, creating a surge of current.
2.  **Avalanche Breakdown:** Occurs in lightly doped diodes. High-energy electrons in the depletion region collide with atoms, knocking out more electrons. These new electrons gain energy and cause further collisions, creating a cascading "avalanche" of charge carriers.

Once breakdown occurs, the diode can be damaged if the current is not limited by external circuitry. Diodes designed to operate in the breakdown region are called Zener diodes and are used for voltage regulation.

## Summary of Reverse Bias Behavior

*   **Applied Voltage:** Positive terminal to N-type, negative terminal to P-type.
*   **Depletion Region:** Widens significantly.
*   **Barrier Potential:** Increases.
*   **Current Flow:** Very small reverse saturation current ($I_S$) due to minority carriers.
*   **Diode Function:** Acts like an open switch, blocking forward current.
*   **Breakdown:** Occurs at the breakdown voltage ($V_{BR}$), leading to a large current flow.

## Supports

- [[skills/hardware-embedded/electronics-embedded/semiconductor-device-operation/microskills/reverse-bias-diode-behavior|Reverse Bias Diode Behavior]]
