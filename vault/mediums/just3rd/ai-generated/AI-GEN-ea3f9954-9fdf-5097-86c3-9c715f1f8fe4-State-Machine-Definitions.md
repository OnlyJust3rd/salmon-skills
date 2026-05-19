---
type: "medium"
title: "State Machine Definitions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/sequential-logic-design/microskills/state-machine-definitions|State Machine Definitions]]"
---
# State Machine Definitions

In sequential logic design, understanding the fundamental building blocks is crucial. We've touched upon flip-flops, counters, and memory devices. Now, let's focus on a key sequential component: the **state machine**.

This lesson is about recalling and defining what a state machine is.

## What is a State Machine?

At its core, a state machine is a mathematical model of computation. In the context of digital circuits, it's a system that can exist in one of a finite number of **states** at any given time. The system transitions from one state to another based on **inputs**. The output of the system can also depend on the current state or the inputs.

Think of it like a traffic light. A traffic light has a finite number of states: Red, Yellow, and Green. It transitions from one state to another based on a timer (an internal input) or a sensor (an external input). The output of the traffic light is the color it displays.

### Key Components of a State Machine

1.  **States**: These represent the distinct conditions or configurations the system can be in. Each state encapsulates a specific memory of past events.
2.  **Inputs**: These are external signals that influence the behavior of the state machine, causing it to change its state.
3.  **Outputs**: These are the signals produced by the state machine, which can be dependent on the current state and/or the inputs.
4.  **Transitions**: These are the rules that dictate how the state machine moves from its current state to a next state based on the received inputs.

## Types of State Machines

There are two primary types of state machines, distinguished by how their outputs are generated:

### Mealy Machine

In a Mealy machine, the output depends on **both the current state and the current inputs**.

*   **Definition**: An output is associated with each transition.
*   **Characteristic**: The output can change immediately when an input changes, even if the state doesn't change.

Consider a simple example: a button that toggles a light.
*   **States**: ON, OFF
*   **Inputs**: Button Press
*   **Outputs**: Light ON, Light OFF

If the light is OFF and the button is pressed, it transitions to ON, and the output is Light ON. If the light is ON and the button is pressed, it transitions to OFF, and the output is Light OFF. The output is tied to the transition driven by the button press.

### Moore Machine

In a Moore machine, the output depends **only on the current state**.

*   **Definition**: An output is associated with each state.
*   **Characteristic**: The output changes only when the state changes.

Using the traffic light example:
*   **States**: RED, YELLOW, GREEN
*   **Inputs**: Timer signals, Vehicle sensors (simplified for this definition)
*   **Outputs**: Display RED light, Display YELLOW light, Display GREEN light

If the state is GREEN, the output is to display the GREEN light. If the state changes to YELLOW, the output changes to display the YELLOW light. The output is directly determined by which state the machine is currently in.

## Why are State Machines Important?

State machines are fundamental to designing a wide range of digital systems. They provide a structured way to:

*   Control the sequence of operations in a system.
*   Implement complex decision-making logic.
*   Design communication protocols.
*   Build user interfaces.
*   Create synchronized operations in hardware.

By defining states and transitions, engineers can systematically design and verify the behavior of sequential circuits, ensuring they perform as intended under various conditions.

## Key Takeaways

*   A state machine is a system with a finite number of states that transitions between them based on inputs.
*   **Mealy machines** have outputs dependent on both current state and current inputs.
*   **Moore machines** have outputs dependent solely on the current state.
*   Understanding state machines is vital for sequential logic design.

## Supports

- [[skills/hardware-embedded/electronics-embedded/sequential-logic-design/microskills/state-machine-definitions|State Machine Definitions]]
