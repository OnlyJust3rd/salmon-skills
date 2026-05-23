---
type: "medium"
title: "Programmable Logic Device Types"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/programmable-logic-device-types|programmable-logic-device-types]]"
learning-time-in-minutes: 4
---
# Programmable Logic Device Types

Welcome to this lesson on identifying different types of Programmable Logic Devices (PLDs). Understanding these fundamental building blocks is crucial for anyone working with FPGA implementation. We'll explore the common categories of PLDs and their basic architectures.

## What are PLDs?

Programmable Logic Devices (PLDs) are integrated circuits designed to be configured by a customer or designer after manufacturing. Unlike fixed-function integrated circuits, PLDs offer flexibility, allowing you to implement custom logic functions. This programmability is what makes them so powerful in digital design.

## Categories of PLDs

PLDs can be broadly categorized into several types, each with distinct characteristics and historical significance. For the purpose of this lesson, we will focus on the most prevalent categories:

*   **ROM (Read-Only Memory)**
*   **PROM (Programmable Read-Only Memory)**
*   **PLA (Programmable Logic Array)**
*   **PAL (Programmable Array Logic)**
*   **CPLD (Complex Programmable Logic Device)**
*   **FPGA (Field-Programmable Gate Array)**

Let's delve into each of these.

### 1. ROM (Read-Only Memory)

While primarily used for data storage, ROMs can also be configured to implement combinational logic.

*   **Architecture:** A ROM consists of a fixed array of transistors that are permanently wired during the manufacturing process. The logic function is determined by the pattern of these connections.
*   **Key Characteristic:** The logic is fixed at the time of manufacturing. You cannot change the logic after the chip is produced.

### 2. PROM (Programmable Read-Only Memory)

PROMs are a step up from ROMs, offering programmability after manufacturing.

*   **Architecture:** A PROM contains a matrix of fuses or anti-fuses. During programming, these fuses are blown (or anti-fuses are fused) to create or break connections, thereby defining the logic function.
*   **Key Characteristic:** Programmable by the end-user once, typically using a PROM programmer. Once programmed, the logic is fixed.

### 3. PLA (Programmable Logic Array)

PLAs offer more flexibility than PROMs by allowing both the AND and OR arrays to be programmed.

*   **Architecture:** A PLA has a programmable AND array followed by a programmable OR array. This structure allows for a more efficient implementation of complex logic functions by minimizing the number of product terms.
*   **Key Characteristic:** Both the AND and OR planes are programmable. This provides greater design flexibility but can sometimes lead to larger chip sizes.

### 4. PAL (Programmable Array Logic)

PALs are a popular type of PLD where the AND array is programmable, but the OR array is fixed.

*   **Architecture:** A PAL consists of a programmable AND array feeding into fixed OR gates. Each OR gate can sum a limited number of product terms.
*   **Key Characteristic:** Simpler architecture than a PLA, often leading to faster operation and lower cost for certain logic functions. The fixed OR structure means that the number of product terms feeding each output is predetermined.

### 5. CPLD (Complex Programmable Logic Device)

CPLDs are essentially collections of simpler PLDs (like PALs) interconnected by a programmable switch matrix.

*   **Architecture:** A CPLD typically consists of multiple "macrocells," where each macrocell contains a small array of logic gates (often based on PAL-like structures). These macrocells are then connected through a central programmable interconnect.
*   **Key Characteristic:** Offer more logic capacity than simple PLDs. They are often used for "glue logic" or for implementing moderate-sized state machines and control logic. CPLDs tend to have predictable timing due to their predictable interconnect structure.

### 6. FPGA (Field-Programmable Gate Array)

FPGAs are the most advanced and flexible type of PLD, offering a vast array of configurable logic blocks and programmable interconnects.

*   **Architecture:** FPGAs are built around a large array of configurable logic blocks (CLBs) or logic elements (LEs), along with a flexible routing fabric. Each CLB can be configured to perform a variety of logic functions (e.g., lookup tables, flip-flops). The routing fabric allows for complex interconnections between these CLBs.
*   **Key Characteristic:** Highly flexible and reconfigurable. FPGAs can implement very complex digital systems and are widely used in prototyping, high-performance computing, and custom hardware acceleration. Their programmability is typically based on SRAM technology, meaning they need to be configured every time they power up.

## Summary Table

Here's a quick comparison to help solidify your understanding:

| PLD Type | Programmable AND Array | Programmable OR Array | Interconnect Type | Complexity | Typical Use Cases |
| :------- | :--------------------- | :-------------------- | :---------------- | :--------- | :---------------- |
| ROM      | No                     | No (Fixed)            | N/A               | Low        | Fixed functions, Data storage |
| PROM     | Yes                    | No (Fixed)            | Fuses/Anti-fuses  | Low        | Simple logic, Small designs |
| PLA      | Yes                    | Yes                   | N/A               | Medium     | Wider logic implementation |
| PAL      | Yes                    | No (Fixed)            | N/A               | Medium     | Faster, simpler logic |
| CPLD     | Yes (within macrocells)| Yes (within macrocells)| Programmable Matrix| High       | Glue logic, Control logic |
| FPGA     | Yes (in CLBs)          | Yes (in CLBs)         | Highly flexible   | Very High  | Complex Systems, Prototyping |

## Conclusion

You have now learned to identify the different types of programmable logic devices. Each type, from the basic PROM to the complex FPGA, offers a unique balance of flexibility, performance, and cost. Understanding these distinctions is the first step towards effectively utilizing them in your FPGA implementation projects.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/programmable-logic-device-types|Programmable Logic Device Types]]
