---
type: "medium"
title: "Interrupt Vectoring and Nesting"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/input-output-interfacing/microskills/interrupt-vectoring-and-nesting|Interrupt Vectoring and Nesting]]"
---
# Interrupt Vectoring and Nesting

When we talk about Input/Output (I/O) in computer systems, devices need a way to signal the CPU when they need attention. This is where interrupts come in. Interrupts are signals that a device sends to the CPU to indicate an event that requires immediate processing. To handle these interrupts efficiently, especially when multiple devices can generate them, we use concepts like **interrupt vectoring** and **interrupt nesting**.

## What is Interrupt Vectoring?

Imagine you have a central dispatcher receiving calls from many different people. If all calls sound the same, the dispatcher wouldn't know who to help first or what their specific problem is. Interrupt vectoring is like giving each caller a unique way to identify themselves and their issue.

In a CPU, when an interrupt occurs, it needs to know *which* device generated the interrupt so it can execute the correct piece of code (the Interrupt Service Routine, or ISR) to handle it. Interrupt vectoring is a mechanism that helps the CPU quickly determine the source of an interrupt and jump to the appropriate ISR.

Here's how it generally works:

1.  **Interrupt Request (IRQ):** A device sends an interrupt signal to the CPU.
2.  **Interrupt Controller:** In most systems, a dedicated piece of hardware called an Interrupt Controller (like the Programmable Interrupt Controller or PIC) manages these IRQs. It prioritizes interrupts if multiple occur simultaneously.
3.  **Interrupt Vector:** The interrupt controller provides the CPU with an **interrupt vector**. This vector is essentially an index or an address that points to a specific location in a special table called the **Interrupt Vector Table (IVT)**.
4.  **Interrupt Vector Table (IVT):** The IVT is a table stored in memory. Each entry in the IVT contains the starting address of a specific ISR for a particular interrupt.
5.  **CPU Action:** The CPU uses the interrupt vector to look up the correct ISR address in the IVT and then jumps to that address to execute the ISR.

**Think of it like this:**

*   **IRQ:** A doorbell rings.
*   **Interrupt Controller:** The person at the door (or a receptionist) notes who is at the door.
*   **Interrupt Vector:** The receptionist tells you, "The mailman is at the door, and he's usually at door number 5."
*   **IVT:** You have a directory where door number 5 is listed as "Mail Delivery Protocol."
*   **ISR:** You go to door number 5 and follow the "Mail Delivery Protocol."

### Why is Vectoring Important?

*   **Speed:** It allows the CPU to identify and start handling an interrupt much faster than if it had to poll each device individually.
*   **Efficiency:** It eliminates the need for the CPU to spend time figuring out which device is requesting attention.

## What is Interrupt Nesting?

Now, what happens if, while the CPU is busy handling an interrupt (executing an ISR), another, perhaps more urgent, interrupt occurs? This is where **interrupt nesting** comes into play.

Interrupt nesting allows a higher-priority interrupt to interrupt the execution of a lower-priority ISR.

Here's the flow:

1.  **Low-Priority Interrupt:** A device (Device A) generates an interrupt, and its ISR (ISR A) starts executing.
2.  **High-Priority Interrupt:** While ISR A is running, another device (Device B), which has a higher priority, generates an interrupt.
3.  **Nesting:** The interrupt controller recognizes that Device B's interrupt is more urgent. It *pauses* ISR A and tells the CPU to start executing the ISR for Device B (ISR B).
4.  **Higher-Priority ISR Execution:** ISR B is executed completely.
5.  **Return to Lower-Priority ISR:** Once ISR B finishes, the CPU *resumes* the execution of ISR A from where it was paused.
6.  **Completion:** Finally, ISR A finishes, and the CPU returns to its main program execution.

### Key Concepts in Nesting:

*   **Priority Levels:** Devices and their associated interrupts are assigned priority levels. Higher numbers usually mean higher priority, or vice versa, depending on the system design.
*   **Masking:** The interrupt controller can be configured to "mask" (ignore or disable) interrupts of lower priority while a higher-priority interrupt is being handled. This ensures that lower-priority tasks don't interfere with urgent ones.
*   **Stack Usage:** When an interrupt occurs, the CPU typically pushes the current program's state (like the program counter and register values) onto a stack. When an ISR is interrupted for nesting, the state of the interrupted ISR is also pushed onto the stack. This mechanism is crucial for restoring the correct execution context later.

**Example Scenario:**

Imagine a system controlling a robot arm:

*   **Low-Priority Interrupt:** A sensor detects a part arriving for assembly (Interrupt 1). The ISR starts positioning the arm.
*   **High-Priority Interrupt:** A safety limit switch is triggered, indicating an obstacle is too close (Interrupt 2). This is a critical situation.
*   **Nesting in Action:** The robot arm's movement ISR (ISR 1) is interrupted. The system immediately executes the emergency stop ISR (ISR 2).
*   **Recovery:** Once the obstacle is clear and the safety ISR (ISR 2) completes, the system resumes positioning the arm from where it left off (back to ISR 1).

### Nested Interrupts vs. Non-Nested Interrupts:

| Feature          | Nested Interrupts                                      | Non-Nested Interrupts                                   |
| :--------------- | :----------------------------------------------------- | :------------------------------------------------------ |
| **Interruption** | Higher-priority ISR can interrupt lower-priority ISR.  | Once an ISR starts, no other interrupt can interrupt it. |
| **Complexity**   | More complex to design and debug.                      | Simpler to implement.                                   |
| **Responsiveness**| Better for time-critical applications needing immediate response. | May lead to delays in handling urgent events.           |
| **Resource Use** | Requires more stack space due to saving multiple contexts. | Uses less stack space.                                  |

## Conclusion

Interrupt vectoring provides an efficient way for the CPU to identify the source of an interrupt and dispatch it to the correct handler. Interrupt nesting builds on this by allowing the system to prioritize and handle urgent events even while a less critical interrupt is being serviced. Together, these mechanisms are fundamental to creating responsive and efficient I/O systems.

## Supports

- [[skills/hardware-embedded/electronics-embedded/input-output-interfacing/microskills/interrupt-vectoring-and-nesting|Interrupt Vectoring and Nesting]]
