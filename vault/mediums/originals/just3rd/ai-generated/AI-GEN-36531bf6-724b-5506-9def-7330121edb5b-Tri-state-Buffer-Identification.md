---
type: "medium"
title: "Identifying Tri-state Buffers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/bus-drivers-registers-and-tri-state/microskills/tri-state-buffer-identification|tri-state-buffer-identification]]"
learning-time-in-minutes: 3
---
# Identifying Tri-state Buffers

Understanding tri-state buffers is key to working with digital systems, especially when dealing with shared communication lines like buses. This lesson focuses on recognizing tri-state buffers and how they behave.

### What is a Tri-state Buffer?

A tri-state buffer is a digital logic component that has three output states:

1.  **High (1):** The output is actively driven to a logic HIGH.
2.  **Low (0):** The output is actively driven to a logic LOW.
3.  **High-Impedance (Hi-Z):** The output is effectively disconnected from the circuit. It neither drives HIGH nor LOW, and it doesn't significantly load the line it's connected to.

The behavior of a tri-state buffer is controlled by an **enable** signal. When the enable is active, the buffer passes its input signal to the output. When the enable is inactive, the buffer goes into its high-impedance state.

### Why Use Tri-state Buffers?

Tri-state buffers are essential for situations where multiple devices need to share a single set of wires (a bus) without interfering with each other. Imagine a group of people wanting to speak one at a time on a shared phone line. Tri-state buffers act like microphones that can be turned on or off. Only the person whose microphone is "on" (enabled) can be heard on the line. The others are "off" (high-impedance), so they don't disrupt the conversation.

### Practical Example: A Shared Bus

Consider a simplified memory system where a central processor needs to read data from one of several memory chips connected to a data bus.

*   Each memory chip has its own output buffer.
*   These output buffers are tri-state buffers.
*   The processor sends an "address select" signal to each memory chip.
*   Only the selected memory chip's output buffer is *enabled*.
*   The other memory chips' output buffers remain *disabled* (in high-impedance state).

This ensures that only the data from the *selected* memory chip appears on the data bus at any given time, preventing data collisions.

### Practice Task

Look at the following digital circuit diagrams. Can you identify the tri-state buffer in each? Pay attention to the component's symbol and the presence of an enable control input.

**Diagram 1:**
(Imagine a diagram showing a standard buffer with an additional input labeled 'Enable')

**Diagram 2:**
(Imagine a diagram showing a logic gate with a standard input and an additional input labeled 'OE' for Output Enable)

### Self-Check Questions

1.  What are the three possible output states of a tri-state buffer?
2.  What signal controls whether a tri-state buffer is active or in high-impedance?
3.  Why are tri-state buffers useful in systems with shared data lines (buses)?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/bus-drivers-registers-and-tri-state/microskills/tri-state-buffer-identification|Tri-state Buffer Identification]]
