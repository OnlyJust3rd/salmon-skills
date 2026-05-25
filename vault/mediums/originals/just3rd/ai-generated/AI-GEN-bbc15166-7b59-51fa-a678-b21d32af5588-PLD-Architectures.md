---
type: "medium"
title: "PLD Architectures: The Building Blocks of Programmable Logic"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/pld-architectures|pld-architectures]]"
learning-time-in-minutes: 5
---
# PLD Architectures: The Building Blocks of Programmable Logic

As we delve into FPGA implementation, understanding the fundamental architectures of Programmable Logic Devices (PLDs) is crucial. This lesson focuses on remembering the general structures that make these devices so versatile.

## What are PLDs?

Programmable Logic Devices are integrated circuits that can be programmed by a customer or designer after manufacturing. This programmability allows for flexibility in digital circuit design, enabling us to create custom logic functions without needing to fabricate entirely new silicon.

## Key PLD Architectures

While there are several types of PLDs, three foundational architectures stand out, each with its own way of implementing logic:

### 1. Programmable Read-Only Memory (PROM)

*   **Concept:** PROMs are the simplest form of PLDs. They consist of a fixed array of AND gates (forming a "product term" array) and a programmable array of OR gates. The programming process involves blowing fuses (or using anti-fuses) to create the desired connections. Once programmed, the data is fixed and cannot be changed.

*   **General Architecture:**
    *   **Decoder Array (AND gates):** This fixed part generates all possible minterms (or product terms) of the input variables.
    *   **Programmable Array (OR gates):** This array contains connections that can be made or broken, allowing you to select which minterms are connected to the OR gate outputs. The programming action determines which minterms are summed by the OR gates.

*   **Analogy:** Think of a PROM like a pre-written book. The content is set, and you can only "read" it. The programming is like deciding which sentences from a comprehensive list are included in each chapter.

### 2. Programmable Array Logic (PAL)

*   **Concept:** PALs offer more flexibility than PROMs. They have a fixed OR array and a programmable AND array. This means you can program the product terms (AND array) to feed into fixed OR gates.

*   **General Architecture:**
    *   **Programmable Array (AND gates):** This is where the programming happens. You can configure the connections to create specific product terms from the input signals.
    *   **Fixed Array (OR gates):** The outputs of the AND gates are connected to fixed OR gates, which sum the product terms to produce the final outputs.

*   **Analogy:** A PAL is like a set of customizable Lego bricks. You can arrange the AND "bricks" to form specific product terms, and then these are automatically combined by the fixed OR "connectors" to build your circuit.

### 3. Generic Array Logic (GAL)

*   **Concept:** GALs are an evolution of PALs. They feature a programmable AND array and a programmable OR array, along with a programmable output logic. This high degree of programmability makes them very flexible. They also typically employ CMOS technology, allowing them to be reprogrammed multiple times.

*   **General Architecture:**
    *   **Programmable Array (AND gates):** Similar to PALs, this array allows for custom product term generation.
    *   **Programmable Array (OR gates):** Unlike PALs, the OR array can also be programmed, allowing for more complex summation of product terms.
    *   **Programmable Output Logic:** This provides additional flexibility to configure the output behavior (e.g., active high/low, tristate).

*   **Analogy:** A GAL is like a highly advanced, multi-tool construction kit. You can customize both the initial components (AND array) and how they are assembled (OR array), and even fine-tune how the final structure interacts with its environment (output logic). The ability to reconfigure it makes it a reusable tool.

### 4. Complex Programmable Logic Device (CPLD)

*   **Concept:** CPLDs are essentially collections of PAL-like blocks or macrocells, interconnected by a programmable interconnect matrix. They offer more logic capacity than a single PAL or GAL and are often used for "glue logic" or smaller control functions. Their architecture is more structured than FPGAs.

*   **General Architecture:**
    *   **Macrocells:** Each macrocell typically contains a programmable AND array, a fixed OR array, and a flip-flop for sequential logic.
    *   **Programmable Interconnect:** This matrix connects the macrocells, allowing signals to be routed between them.
    *   **I/O Blocks:** These interface the internal logic to the external pins of the device.

*   **Analogy:** Imagine a CPLD as a small town with several specialized workshops (macrocells). Each workshop can perform specific tasks. The roads and junctions connecting these workshops (programmable interconnect) allow for communication and collaboration between them to build larger structures or manage town functions.

### 5. Field-Programmable Gate Array (FPGA)

*   **Concept:** FPGAs represent the highest level of complexity and flexibility among PLDs. They consist of a large array of configurable logic blocks (CLBs), a rich programmable interconnect network, and specialized blocks like Block RAMs and DSP slices.

*   **General Architecture:**
    *   **Configurable Logic Blocks (CLBs):** These are the fundamental building blocks, typically containing Look-Up Tables (LUTs) that can implement any Boolean function of their inputs, along with flip-flops.
    *   **Programmable Interconnect:** A highly flexible routing network that connects the CLBs and other resources.
    *   **Specialized Blocks:** Dedicated hardware for functions like memory (Block RAM), arithmetic operations (DSP slices), and clock management.

*   **Analogy:** An FPGA is like a vast, customizable digital playground. You have many small, adaptable units (CLBs) that can be configured to perform specific logic tasks. A massive network of roads and bridges (interconnect) allows these units to communicate and work together in almost any imaginable configuration to build complex digital systems.

## Summary Table

| PLD Type | Programmable AND Array | Programmable OR Array | Reprogrammable | General Use Case                      |
| :------- | :--------------------- | :-------------------- | :------------- | :------------------------------------ |
| PROM     | No                     | Yes                   | No             | Fixed function implementation         |
| PAL      | Yes                    | No                    | No             | Simple logic functions                |
| GAL      | Yes                    | Yes                   | Yes            | Flexible logic, reusable              |
| CPLD     | Yes (within macrocells) | Yes (within macrocells) | Yes            | Glue logic, state machines, control   |
| FPGA     | Yes (within CLBs/LUTs) | Yes (within CLBs/LUTs) | Yes            | Complex digital systems, acceleration |

Understanding these fundamental architectures will help you appreciate the design and capabilities of the devices you'll be working with in FPGA implementation.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/fpga-implementation/microskills/pld-architectures|PLD Architectures]]
