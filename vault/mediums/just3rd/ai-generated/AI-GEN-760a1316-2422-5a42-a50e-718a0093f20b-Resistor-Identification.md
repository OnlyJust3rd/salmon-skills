---
type: "medium"
title: "Resistor Identification"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/circuit-prototyping/microskills/resistor-identification|Resistor Identification]]"
---
# Resistor Identification

In circuit prototyping, understanding the basic components is crucial. This lesson focuses on identifying resistors, their symbols, and their fundamental role in a circuit.

## What is a Resistor?

A resistor is a passive electronic component that **resists** the flow of electric current. Think of it like a narrow pipe in a water system that limits how much water can flow through. In electronic circuits, resistors are used to control the amount of current flowing through different parts of the circuit, to adjust voltage levels, and to protect other components from too much current.

## Resistor Symbols

Resistors are represented by specific symbols in circuit diagrams. These symbols are standardized so that engineers and hobbyists worldwide can understand circuit designs.

*   **American Standard Symbol:** A zigzag line.
    ```
    /\/\/\/\
    ```
*   **European Standard Symbol:** A rectangle.
    ```
    [____]
    ```

When you are looking at a circuit diagram, seeing either of these symbols indicates the presence of a resistor.

## Basic Function of a Resistor

The primary function of a resistor is to oppose the flow of electric current. This opposition is measured in **ohms** (Ω). A higher ohm value means more resistance, and less current will flow for a given voltage. A lower ohm value means less resistance, and more current will flow.

## Practical Scenario: Simple LED Circuit

Imagine you want to light up a Light Emitting Diode (LED) using a battery. LEDs are sensitive and can be easily damaged by too much current. To prevent this, you need to include a resistor in the circuit.

Let's say you have a 5-volt battery and an LED that needs about 2 volts and 20 milliamps (mA) to operate safely. Without a resistor, the LED would receive the full 5 volts, likely burning it out immediately.

By adding a resistor, you can "drop" some of the voltage across the resistor and limit the current to the LED. The resistor "resists" the current flow, ensuring that only the safe amount reaches the LED.

## Practice Task: Identifying Resistors in a Diagram

Look at the following simple circuit diagram (represented textually):

*   A battery (symbol: `+ --- -`)
*   A resistor (symbol: `/\/\/\/\`)
*   An LED (symbol: `-->|--`)
*   All connected in a loop.

Your task is to:

1.  Identify the symbol that represents the resistor.
2.  Describe in your own words what the resistor is doing in this circuit.

## Self-Check Questions

1.  What is the main job of a resistor in an electronic circuit?
2.  Name the two common symbols used to represent a resistor in circuit diagrams.
3.  If a resistor has a high ohm value, does it allow more or less current to flow (assuming the same voltage)?

## Supports

- [[skills/hardware-embedded/electronics-embedded/circuit-prototyping/microskills/resistor-identification|Resistor Identification]]
