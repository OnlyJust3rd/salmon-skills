---
type: "medium"
title: "Capacitor Identification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/circuit-prototyping/microskills/capacitor-identification|capacitor-identification]]"
related-skills:
  - "[[skills/computing/hardware-embedded/electronics/circuit-prototyping/circuit-prototyping|circuit-prototyping]]"
learning-time-in-minutes: 4
---
# Capacitor Identification

Welcome! In this lesson, we'll focus on identifying capacitors, a fundamental component in circuit prototyping. Understanding what a capacitor is and how to recognize its symbol will help you when working with circuit diagrams and breadboards.

## What is a Capacitor?

A capacitor is a passive electronic component that stores electrical energy in an electric field. Think of it like a tiny, temporary battery. When you connect it to a circuit, it can accumulate and hold an electrical charge. When needed, it can release this charge back into the circuit.

Capacitors are crucial for many circuit functions, including:

*   **Filtering:** Smoothing out fluctuating voltages.
*   **Timing:** Controlling the duration of events in a circuit.
*   **Energy Storage:** Providing bursts of power.

## Recognizing the Capacitor Symbol

In circuit diagrams, capacitors have distinct symbols. The most common symbols represent a polarized capacitor and a non-polarized capacitor.

*   **Non-polarized Capacitor:** This symbol typically looks like two parallel lines of equal length. This indicates that the capacitor can be connected in either direction in a circuit.

    ```
    --| |---
    ```

*   **Polarized Capacitor:** This symbol is similar but one of the parallel lines is curved or has a plus (+) sign next to it. This signifies that the capacitor has a positive and negative terminal, and it *must* be connected in the correct orientation. Connecting it backward can damage the capacitor or the circuit.

    ```
    --| +|---   or   --| )|--- (curved line indicates negative)
    ```

When you see these symbols on a schematic, you know you're looking at a capacitor.

## Capacitor Identification on a Breadboard

On a breadboard, identifying capacitors is often done by their physical appearance, as they don't have printed symbols.

*   **Ceramic Capacitors:** These are usually small, disc-shaped components, often brown or blue. They have two leads (wires) for insertion into the breadboard. They are typically non-polarized.

*   **Electrolytic Capacitors:** These are usually cylindrical with two leads. One lead is often longer than the other, and there's usually a stripe (often white or gray) on the side of the cylinder with a minus (-) sign. This stripe indicates the negative terminal. Electrolytic capacitors are polarized.

*   **Tantalum Capacitors:** These are often small, teardrop-shaped, or rectangular with two leads. They also have a marking (like a stripe or a plus sign) to indicate polarity. They are polarized.

## Practical Scenario

Imagine you are building a simple LED blinking circuit. You have a schematic that shows an LED, a resistor, a power source, and a component with the symbol `---| |---`. You also have a bag of electronic components.

When you look at your components, you find a small, blue, disc-shaped component with two leads. This matches the typical appearance of a non-polarized capacitor. You can then confidently place this component on your breadboard in the location indicated by the symbol on your schematic.

Later, you need to add a timing component to control the blink rate. Your schematic now shows a component with the symbol `--| +|---`. You find a cylindrical component with a stripe on its side and a slightly shorter lead next to the stripe. This indicates a polarized capacitor. You must ensure the lead associated with the negative marking is connected to the negative side of the circuit as shown on your schematic.

## Practice Task

Look at a few common capacitor types (if you have access to them) or search online for images of different capacitor types (ceramic, electrolytic, tantalum). Try to identify the symbol for each type and note any polarity markings.

## Self-Check Questions

1.  What is the primary function of a capacitor in a circuit?
2.  What does the symbol `---| |---` represent in a circuit diagram?
3.  What does the curved line or plus sign next to a capacitor symbol indicate?
4.  How can you identify the negative terminal of an electrolytic capacitor on a breadboard?
5.  Why is it important to correctly orient a polarized capacitor?

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-prototyping/microskills/capacitor-identification|Capacitor Identification]]
