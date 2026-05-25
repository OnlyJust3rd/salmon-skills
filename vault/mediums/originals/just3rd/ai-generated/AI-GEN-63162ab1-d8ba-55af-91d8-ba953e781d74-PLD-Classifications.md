---
type: "medium"
title: "PLD Classifications: Remembering the Types"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/pld-classifications|pld-classifications]]"
learning-time-in-minutes: 4
---
# PLD Classifications: Remembering the Types

In the world of Field-Programmable Gate Arrays (FPGAs), understanding the different types of Programmable Logic Devices (PLDs) is a foundational step. This lesson focuses on recalling and identifying these classifications.

### What are Programmable Logic Devices (PLDs)?

At their core, PLDs are integrated circuits that can be programmed *after* manufacturing. This means you can configure their internal logic to perform a specific function. This flexibility is what makes FPGAs so powerful for custom hardware design.

### Key Classifications of PLDs

PLDs can be broadly classified based on their internal architecture and complexity. The main categories you should remember are:

*   **Programmable Read-Only Memory (PROM)**
*   **Programmable Array Logic (PAL)**
*   **Generic Array Logic (GAL)**
*   **Complex Programmable Logic Device (CPLD)**
*   **Field-Programmable Gate Array (FPGA)**

Let's briefly touch on each.

#### 1. Programmable Read-Only Memory (PROM)

*   **Concept:** PROMs are the simplest form of programmable logic. They consist of a fixed AND array and a programmable OR array. Once programmed, the data stored is permanent and cannot be changed.
*   **Architecture:** Think of it like a lookup table. You input an address, and it outputs a specific, pre-determined data word.
*   **Use Case (Historical):** Primarily used for storing small lookup tables or microcode. They are largely obsolete for general logic design now due to their inflexibility and the development of more advanced PLDs.

#### 2. Programmable Array Logic (PAL)

*   **Concept:** PALs feature a programmable AND array feeding into a fixed OR array. This makes them more flexible than PROMs for implementing combinational logic.
*   **Architecture:** The AND gates can be programmed to combine input signals in various ways, and their outputs are fed into fixed OR gates. This allows for the creation of various sum-of-products logic functions.
*   **Key Feature:** Programmable AND array, fixed OR array.

#### 3. Generic Array Logic (GAL)

*   **Concept:** GALs are an advanced version of PALs. They have a programmable AND array and a *programmable* OR array, along with programmable output logic. This makes them reprogrammable and more versatile.
*   **Architecture:** Similar to PALs but with added programmability in the OR array and output macrocells. This allows for more complex logic functions and the ability to be erased and reprogrammed multiple times.
*   **Key Feature:** Reprogrammable, programmable AND and OR arrays, programmable output logic.

#### 4. Complex Programmable Logic Device (CPLD)

*   **Concept:** CPLDs are essentially collections of PALs or GALs (called "logic array blocks" or LABs) interconnected by a programmable interconnect matrix. They offer higher logic density than basic PALs/GALs.
*   **Architecture:** Multiple logic blocks, each containing AND/OR arrays and macrocells, are linked by a routing fabric. This structure makes them suitable for medium-complexity logic designs.
*   **Key Feature:** Multiple logic blocks, predictable timing due to shorter routing paths within blocks.

#### 5. Field-Programmable Gate Array (FPGA)

*   **Concept:** FPGAs are the most complex and versatile type of PLD. They consist of a large array of configurable logic blocks (CLBs) and programmable interconnects, along with specialized resources like RAM blocks and DSP slices.
*   **Architecture:** A vast grid of CLBs (which can implement various logic functions like look-up tables or multiplexers) connected by a highly flexible routing network.
*   **Key Feature:** High logic density, flexibility, parallelism, designed for complex digital systems.

### Summary Table of PLD Classifications

To help you remember, here's a table summarizing the key characteristics:

| PLD Type        | Programmable Array | Fixed Array | Reprogrammable | Typical Complexity |
| :-------------- | :----------------- | :---------- | :------------- | :----------------- |
| PROM            | No (Fixed AND)     | Yes (OR)    | No             | Very Low           |
| PAL             | Yes (AND)          | Yes (OR)    | No             | Low                |
| GAL             | Yes (AND)          | Yes (OR)    | Yes            | Low to Medium      |
| CPLD            | Yes (multiple)     | Yes (multiple) | Yes            | Medium             |
| FPGA            | Yes (many)         | N/A         | Yes            | High to Very High  |

**Remember:** The progression from PROM to FPGA generally involves increasing levels of programmability, flexibility, and logic density. Each type builds upon the concepts of the previous ones, offering more powerful solutions for digital design.

By recalling these classifications, you lay the groundwork for understanding how different PLDs are chosen for various FPGA implementation tasks.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/pld-classifications|PLD Classifications]]
