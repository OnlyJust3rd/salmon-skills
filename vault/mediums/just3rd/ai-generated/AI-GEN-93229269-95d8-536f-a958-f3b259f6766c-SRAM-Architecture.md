---
type: "medium"
title: "SRAM Cell Architecture and Operation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/sequential-logic-design/microskills/sram-architecture|sram-architecture]]"
---
# SRAM Cell Architecture and Operation

Static Random-Access Memory (SRAM) is a fundamental building block in digital systems, known for its speed. Understanding its architecture is key to comprehending how data is stored and accessed. This lesson focuses on the core of SRAM: the SRAM cell.

## The SRAM Cell: A Bistable Latch

At its heart, an SRAM cell is a bistable circuit, meaning it can exist in one of two stable states, representing a '0' or a '1'. This bistability is achieved using a pair of **cross-coupled inverters**.

### Cross-Coupled Inverters

An inverter is a basic logic gate that outputs the opposite of its input. When two inverters are connected such that the output of the first is the input of the second, and the output of the second is the input of the first, they form a latch.

Imagine two inverters, INV1 and INV2.
*   The output of INV1 is connected to the input of INV2.
*   The output of INV2 is connected to the input of INV1.

If the input to INV1 is 'high' (logic 1), its output will be 'low' (logic 0). This 'low' signal then becomes the input to INV2. INV2 will invert this 'low' signal, producing a 'high' output. This 'high' output feeds back to the input of INV1, reinforcing its initial 'high' input. This creates a stable state where INV1's output is 'low' and INV2's output is 'high'.

Conversely, if the input to INV1 starts as 'low', its output becomes 'high'. This 'high' signal goes to INV2, which outputs 'low'. This 'low' output feeds back to INV1, maintaining its 'low' input. This establishes the second stable state where INV1's output is 'high' and INV2's output is 'low'.

These two stable states represent the stored bit: one state for '0' and the other for '1'.

### Components of a Basic 6T SRAM Cell

The most common SRAM cell design uses six transistors (hence, a 6T SRAM cell):

1.  **Two Cross-Coupled Inverters:** These are typically implemented using four transistors: two PMOS (P-channel Metal-Oxide-Semiconductor) transistors and two NMOS (N-channel Metal-Oxide-Semiconductor) transistors. These form the bistable latch that holds the data.
2.  **Two Access Transistors:** These are NMOS transistors that act as switches. They connect or disconnect the latch from the bit lines (data lines) for reading and writing data.

### Diagram of a 6T SRAM Cell

While we can't draw here, visualize a structure where:
*   The two inverters form a loop in the center.
*   The outputs of these inverters are connected to complementary **bit lines** (often labeled BL and BLB for Bit Line and Bit Line Bar).
*   The access transistors are controlled by a **word line** (WL). When the word line is activated (high), the access transistors turn on, allowing communication between the latch and the bit lines.

## SRAM Operation: Read and Write

The cross-coupled inverters maintain the stored value indefinitely as long as power is supplied. The magic of accessing this data lies in the word line and bit lines.

### Read Operation

1.  **Precharge Bit Lines:** Before reading, both bit lines (BL and BLB) are precharged to a high voltage level (Vdd).
2.  **Activate Word Line:** The word line (WL) corresponding to the desired SRAM cell is activated (driven to a high voltage). This turns on the two access transistors of the cell.
3.  **Discharge Bit Line:** The stored data in the cell will cause one of the bit lines to be discharged towards ground.
    *   If the cell stores a '0' (meaning the output of the inverter connected to BL is low), the BL will be pulled low.
    *   If the cell stores a '1' (meaning the output of the inverter connected to BL is high), the BLB will be pulled low.
4.  **Sense Amplification:** A sense amplifier connected to the bit lines detects the small voltage difference between BL and BLB and determines the stored bit (0 or 1).

### Write Operation

1.  **Drive Bit Lines:** The data to be written is applied to the bit lines.
    *   To write a '0': BL is driven low (to ground), and BLB is driven high (to Vdd).
    *   To write a '1': BL is driven high (to Vdd), and BLB is driven low (to ground).
2.  **Activate Word Line:** The word line (WL) for the target cell is activated, turning on the access transistors.
3.  **Overwrite Latch:** The strong signals on the bit lines overcome the current state of the cross-coupled inverters and force them into the desired new state. For example, if you want to write a '0', driving BL low will pull the node connected to the output of the first inverter low, forcing its complement to go high, thus overwriting the stored value.

## Key Characteristics of SRAM

*   **Speed:** SRAM is very fast because it doesn't require refreshing. Access times are typically in the nanosecond range.
*   **Complexity:** Each bit requires more transistors (6T) compared to DRAM, making SRAM cells larger and more complex.
*   **Power Consumption:** SRAM consumes more power when idle compared to DRAM, especially due to the constant presence of power to the latch. However, its active power consumption can be lower due to faster operation.
*   **Cost:** Due to its complexity and larger cell size, SRAM is generally more expensive per bit than DRAM.

SRAM cells, with their cross-coupled inverters, are the fundamental units that enable fast data storage and retrieval in memory systems. Understanding their read and write mechanisms is crucial for grasping the performance of many digital circuits.

## Supports

- [[skills/hardware-embedded/electronics-embedded/sequential-logic-design/microskills/sram-architecture|SRAM Architecture]]
