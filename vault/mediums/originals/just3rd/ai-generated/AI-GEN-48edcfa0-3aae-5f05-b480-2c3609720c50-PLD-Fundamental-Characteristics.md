---
type: "medium"
title: "PLD Fundamental Characteristics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/pld-fundamental-characteristics|pld-fundamental-characteristics]]"
learning-time-in-minutes: 4
---
# PLD Fundamental Characteristics

This lesson focuses on recalling the fundamental characteristics that define Programmable Logic Devices (PLDs). Understanding these characteristics is the first step in identifying different PLD types within the broader context of FPGA implementation.

## What are PLDs?

Programmable Logic Devices (PLDs) are integrated circuits designed to be configured by the end-user after manufacturing. Unlike fixed-function logic chips (like basic gates or flip-flops), PLDs offer flexibility, allowing you to implement custom logic functions. This programmability is key to their use in FPGA implementation.

The core idea behind a PLD is to provide a configurable array of logic elements that can be interconnected to perform a desired digital function.

## Key Characteristics of PLDs

To understand PLDs, we need to recall their fundamental characteristics. These characteristics help distinguish them and understand their capabilities.

### 1. Programmability

This is the defining feature of PLDs. It means the internal connections and/or the logic functions themselves can be altered after the chip has been manufactured. There are different ways this programming is achieved:

*   **One-time Programmable (OTP):** The configuration is permanent and cannot be changed after it's set. This is often done using fuses or antifuses.
*   **Reprogrammable:** The configuration can be erased and rewritten multiple times. Common technologies include:
    *   **EEPROM (Electrically Erasable Programmable Read-Only Memory):** Uses floating-gate transistors.
    *   **SRAM (Static Random-Access Memory):** Uses volatile memory cells, meaning the configuration is lost when power is removed and must be reloaded. This is typical for FPGAs.
    *   **Flash Memory:** Similar to EEPROM but typically offers higher density and faster erase/write times.

### 2. Logic Array Structure

PLDs are built around specific internal structures that define how logic functions are implemented. The two most common basic structures are:

*   **AND-Array:** A programmable array of AND gates.
*   **OR-Array:** A programmable array of OR gates.

The combination and programmability of these arrays lead to different types of PLDs.

### 3. Input/Output (I/O) Blocks

PLDs have dedicated input and output pins that interface with the external circuitry. The number and capabilities of these I/O blocks can vary significantly between different PLD types and families. Modern PLDs often feature sophisticated I/O capabilities, including support for various voltage standards and high-speed signaling.

### 4. Macrocells

A macrocell is a fundamental building block within many PLDs. It typically combines a programmable array logic (PAL) or programmable array logic with a flip-flop. This allows a macrocell to implement a product term (ANDed inputs) that can be summed (ORed) and then optionally registered (stored in a flip-flop). The output of the macrocell can then be fed back into the logic array or sent to an output pin.

### 5. Product Term Structure

A product term is the result of ANDing several inputs together. For example, `A . B . C` is a product term. PLDs use product terms to implement logic functions. The number of product terms available and how they are shared among outputs is a key characteristic.

### 6. Speed and Performance

The speed at which a PLD can operate (its clock frequency) is influenced by:

*   **Propagation Delay:** The time it takes for a signal to travel through the logic.
*   **Architecture:** How the logic is organized internally.
*   **Manufacturing Technology:** The underlying semiconductor process.

### 7. Power Consumption

PLDs consume power, and this consumption can vary based on the complexity of the implemented logic, the operating frequency, and the type of PLD. Static power (when not actively switching) and dynamic power (when switching) are important considerations.

### 8. Density

This refers to the amount of logic that can be implemented within a single PLD. Density is often measured in terms of:

*   Logic gates
*   Look-Up Tables (LUTs)
*   Flip-flops
*   Macrocells

## Why These Characteristics Matter

Recalling these fundamental characteristics is crucial because they are the building blocks for understanding more complex PLD architectures like SPLDs, CPLDs, and FPGAs. Each type of PLD is defined by how it combines and utilizes these characteristics. For instance, the way a CPLD manages its AND/OR arrays and macrocells differs from how an FPGA uses its LUTs and routing fabric.

By remembering these core concepts, you lay the groundwork for accurately identifying and differentiating between various programmable logic devices.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/pld-fundamental-characteristics|PLD Fundamental Characteristics]]
