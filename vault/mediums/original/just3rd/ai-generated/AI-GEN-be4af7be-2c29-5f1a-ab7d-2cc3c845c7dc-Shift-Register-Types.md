---
type: "medium"
title: "Shift Register Types: SISO, SIPO, PISO, PIPO"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/digital-logic/bus-drivers-registers-and-tri-state/microskills/shift-register-types|shift-register-types]]"
learning-time-in-minutes: 3
---
# Shift Register Types: SISO, SIPO, PISO, PIPO

Shift registers are fundamental digital circuits used for storing and moving data. They are a key component in many electronic systems, including bus drivers and data acquisition systems. This lesson will help you recall the different types of shift registers.

## What is a Shift Register?

A shift register is a type of sequential logic circuit that can shift its binary information serially or in parallel. Data bits are moved one position at a time with each clock pulse.

There are four primary types of shift registers, categorized by how data enters (input) and how data exits (output):

*   **SISO (Serial-In, Serial-Out):** Data enters one bit at a time and exits one bit at a time.
*   **SIPO (Serial-In, Parallel-Out):** Data enters one bit at a time, but all bits can be read out simultaneously.
*   **PISO (Parallel-In, Serial-Out):** Data enters all bits simultaneously, but exits one bit at a time.
*   **PIPO (Parallel-In, Parallel-Out):** Data enters all bits simultaneously and can be read out simultaneously.

## Practical Scenario

Imagine you are designing a system to transmit a sequence of sensor readings from one microcontroller to another over a limited number of wires.

*   If you only have two wires available for data transfer (one clock and one data line), you would use a **SISO** shift register at the transmitting end to send each sensor reading bit by bit, and a **SISO** shift register at the receiving end to collect these bits.
*   If you have enough wires to send all the bits of a sensor reading at once (e.g., 8 bits require 8 data wires plus a clock), but only a few wires to send the converted result to a display, you might use a **PIPO** shift register to receive the sensor data and then output it serially to the display using a **SIPO** register.

## Practice Task

Draw a simple block diagram for each of the following scenarios, labeling the input and output types:

1.  A system that receives 4 bits of data sequentially and outputs them one by one.
2.  A system that receives 4 bits of data simultaneously and allows you to read all 4 bits at any time.
3.  A system that receives 4 bits of data one by one and allows you to read all 4 bits at any time.
4.  A system that receives 4 bits of data simultaneously and outputs them one by one.

## Self-Check Questions

1.  Which type of shift register is characterized by data entering one bit at a time and exiting one bit at a time?
2.  If you want to load multiple bits into a register all at once but read them out one by one, which type of shift register would you use?
3.  What does the "P" stand for in PISO and PIPO shift registers?
4.  Which shift register type allows for the fastest reading of stored data?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/bus-drivers-registers-and-tri-state/microskills/shift-register-types|Shift Register Types]]
