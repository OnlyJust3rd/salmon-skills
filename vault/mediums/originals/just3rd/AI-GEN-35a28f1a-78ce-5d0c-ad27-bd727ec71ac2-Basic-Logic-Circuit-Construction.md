---
type: "medium"
title: "Building Basic Logic Gates on a Breadboard"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/digital-circuit-construction/microskills/basic-logic-circuit-construction|basic-logic-circuit-construction]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/digital-circuit-construction/digital-circuit-construction|digital-circuit-construction]]"
learning-time-in-minutes: 5
---
# Building Basic Logic Gates on a Breadboard

This lesson will guide you through the practical application of building fundamental logic gates on a breadboard. By the end, you'll be able to construct and test simple combinational circuits, a core step in digital circuit construction.

## Understanding the Building Blocks: Logic Gates

Logic gates are the foundational elements of digital electronics. They perform basic logical operations based on one or more binary inputs (0 or 1, represented by low or high voltage) to produce a single binary output. We'll focus on the most common ones: AND, OR, and NOT.

### 1. The AND Gate

*   **Function:** An AND gate outputs a high signal (1) only if ALL of its inputs are high. Otherwise, it outputs a low signal (0).
*   **Truth Table:**

    | Input A | Input B | Output |
    | :------ | :------ | :----- |
    | 0       | 0       | 0      |
    | 0       | 1       | 0      |
    | 1       | 0       | 0      |
    | 1       | 1       | 1      |

### 2. The OR Gate

*   **Function:** An OR gate outputs a high signal (1) if AT LEAST ONE of its inputs is high. It only outputs a low signal (0) if ALL inputs are low.
*   **Truth Table:**

    | Input A | Input B | Output |
    | :------ | :------ | :----- |
    | 0       | 0       | 0      |
    | 0       | 1       | 1      |
    | 1       | 0       | 1      |
    | 1       | 1       | 1      |

### 3. The NOT Gate (Inverter)

*   **Function:** A NOT gate has a single input and a single output. It inverts the input signal: if the input is high (1), the output is low (0), and vice-versa.
*   **Truth Table:**

    | Input A | Output |
    | :------ | :----- |
    | 0       | 1      |
    | 1       | 0      |

## Components You'll Need

*   **Breadboard:** A solderless prototyping board.
*   **Jumper Wires:** For making connections.
*   **Integrated Circuits (ICs):**
    *   74LS08: Quad 2-input AND gate IC
    *   74LS32: Quad 2-input OR gate IC
    *   74LS04: Hex inverter (NOT gate) IC
*   **Power Supply:** A battery pack (e.g., 5V) or a regulated DC power supply.
*   **Resistors:** Typically 220-330 Ohms for current limiting with LEDs.
*   **LEDs (Light Emitting Diodes):** To visually indicate the output state (ON for 1, OFF for 0).
*   **DIP Switch or Buttons:** To provide stable input signals (optional, but recommended for ease of use).

## Breadboarding Basics

A breadboard has rows and columns of interconnected holes.

*   **Power Rails:** The long vertical columns (often marked with '+' and '-') are usually connected end-to-end, ideal for VCC (positive voltage) and GND (ground).
*   **Terminal Strips:** The shorter horizontal rows in the middle are for component leads and jumper wires. Holes within a single horizontal row are connected.

**Important:** Always connect power and ground to the ICs correctly. Consult the datasheet for the specific pinout of each IC. For the 74LS series, pin 14 is typically VCC, and pin 7 is GND.

## Building Your First Logic Gate: The AND Gate

Let's build an AND gate using the 74LS08 IC.

**Steps:**

1.  **Power Up:** Connect the VCC pin (pin 14) of the 74LS08 to the positive terminal of your power supply, and the GND pin (pin 7) to the negative terminal.
2.  **Identify Gate:** The 74LS08 contains four 2-input AND gates. Choose one. For example, pins 1 and 2 are inputs, and pin 3 is the output.
3.  **Connect Inputs:**
    *   Connect input A (pin 1) to a source of logic levels. You can use a DIP switch or connect it directly to VCC (for logic 1) or GND (for logic 0).
    *   Connect input B (pin 2) similarly.
4.  **Connect Output:**
    *   Connect the output pin (pin 3) to the anode (longer leg) of an LED.
    *   Connect the cathode (shorter leg) of the LED to a current-limiting resistor (e.g., 220 Ohm).
    *   Connect the other end of the resistor to GND.
5.  **Testing:**
    *   **Inputs 0, 0:** Set both input switches to GND. The LED should be OFF.
    *   **Inputs 0, 1:** Set one input to GND and the other to VCC. The LED should be OFF.
    *   **Inputs 1, 0:** Set one input to VCC and the other to GND. The LED should be OFF.
    *   **Inputs 1, 1:** Set both inputs to VCC. The LED should be ON.

If the LED behaves according to the AND gate truth table, you've successfully built an AND gate!

## Building Other Gates

Follow similar steps for the OR and NOT gates using their respective ICs (74LS32 for OR, 74LS04 for NOT).

*   **OR Gate (74LS32):** Choose one of the four OR gates. For example, pins 1 and 2 are inputs, and pin 3 is the output. Test its truth table.
*   **NOT Gate (74LS04):** This IC has six inverters. Pick one. For example, pin 1 is the input, and pin 2 is the output. Connect the output to an LED and resistor. Observe how the LED turns ON when the input is OFF, and vice-versa.

## Next Steps: Simple Combinational Circuits

Once you're comfortable building individual gates, you can combine them to create more complex circuits. A **half-adder** is a classic example. It takes two single bits as input and produces a Sum bit and a Carry bit.

A half-adder can be built using one XOR gate and one AND gate. The XOR gate produces the Sum, and the AND gate produces the Carry. You'll need to look up the pinouts for the XOR gate (often available in the same ICs or separate XOR ICs like the 74LS86).

Experiment by connecting the output of one gate to the input of another. This hands-on practice is crucial for developing your skills in digital circuit construction.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/digital-circuit-construction/microskills/basic-logic-circuit-construction|Basic Logic Circuit Construction]]
