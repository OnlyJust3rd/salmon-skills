---
type: "medium"
title: "Understanding AVR Interrupt Controller Mechanisms"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-peripheral-programming/microskills/interrupt-controller-mechanisms|Interrupt Controller Mechanisms]]"
---
# Understanding AVR Interrupt Controller Mechanisms

This lesson will help you understand how interrupt mechanisms work on AVR microcontrollers. This is a fundamental part of AVR Peripheral Programming, allowing your microcontroller to respond to external events efficiently. We'll focus on how interrupts are enabled, triggered, and then handled by the microcontroller.

## What are Interrupts?

Imagine you are busy working on a task, and suddenly the doorbell rings. You pause your current task, go to the door, handle the visitor, and then return to your original task. An interrupt on a microcontroller works similarly.

Instead of continuously checking if something needs attention (like a button press or a timer reaching a certain value), the microcontroller can continue its main program execution. When an event occurs that requires immediate attention (an interrupt), the microcontroller "interrupts" its current task, handles the event, and then resumes its original task. This is much more efficient than constantly polling for events.

## How Interrupts Work: The Core Concepts

AVR microcontrollers have a dedicated Interrupt Controller that manages these events. The process generally involves these key steps:

1.  **Enable Interrupts:** The microcontroller needs to be told that interrupts are allowed to happen. There's a global interrupt enable bit.
2.  **Enable Specific Interrupt Sources:** Even if global interrupts are enabled, you need to enable individual interrupt sources (e.g., an interrupt for a button press, an interrupt for a timer overflow).
3.  **Triggering an Interrupt:** An external event (like a pin change) or an internal event (like a timer reaching zero) triggers the interrupt.
4.  **Interrupt Vector:** When an interrupt occurs, the microcontroller needs to know *where* to jump to handle it. This is done through interrupt vectors. Each interrupt source has a dedicated address in memory pointing to its Interrupt Service Routine (ISR).
5.  **Interrupt Service Routine (ISR):** This is a special piece of code designed to handle a specific interrupt. When an interrupt is triggered, the microcontroller jumps to the ISR associated with that interrupt.
6.  **Return from Interrupt:** After the ISR has finished its work, it tells the microcontroller to return to where it was executing before the interrupt occurred.

### Key Registers Involved

To configure and manage interrupts, you'll interact with several important registers on an AVR microcontroller:

*   **SREG (Status Register):** This register contains the **I-bit (Global Interrupt Enable)**. Setting this bit to 1 enables all interrupts. Clearing it disables all interrupts.
    *   **I-bit:** Bit 7 of the SREG.
*   **Interrupt Mask Registers (e.g., GIMSK, EIMSK, TIMSK, etc.):** These registers contain bits that enable or disable specific interrupt sources. For example, a bit in the `EIMSK` (External Interrupt Mask Register) might enable or disable an interrupt triggered by a change on an external pin.
*   **Interrupt Flag Registers (e.g., GIFR, EIFR, TIFR, etc.):** These registers contain bits that are set (become 1) when an interrupt condition occurs. They are often called "flags." For example, the `EIFR` (External Interrupt Flag Register) would have a flag bit set if an external interrupt condition was detected. These flags are usually cleared automatically by hardware when the ISR is entered, or sometimes manually by software.

## Practical Example: Responding to a Button Press

Let's consider a common scenario: you want your AVR microcontroller to increment a counter every time a button is pressed. Instead of constantly checking the button's state in your main loop, we can use an external interrupt.

Suppose we have a button connected to pin PD2 (which is associated with External Interrupt 0, INT0).

1.  **Enable Global Interrupts:**
    We need to set the I-bit in the SREG.

    ```c
    // Enable global interrupts
    SREG |= (1 << 7); // Or using the macro: sei();
    ```

2.  **Enable the Specific Interrupt Source (INT0):**
    We need to enable the interrupt for INT0. This is typically done by setting a corresponding bit in an Interrupt Mask Register (e.g., `EIMSK` for External Interrupts). Let's assume the bit for INT0 is bit 0.

    ```c
    // Enable INT0
    EIMSK |= (1 << 0);
    ```

3.  **Configure the External Interrupt Trigger:**
    We also need to tell the microcontroller *when* INT0 should trigger. Should it be on a rising edge, a falling edge, or a change on the pin? This is usually configured in an Interrupt Control Register (e.g., `EICR` or `MCUCR`). Let's say we want it to trigger on a rising edge.

    ```c
    // Configure INT0 to trigger on rising edge
    EICR |= (1 << 1) | (1 << 0); // Example bits for rising edge on INT0
    ```

4.  **Write the Interrupt Service Routine (ISR):**
    This is the code that runs when INT0 is triggered. It needs to have a specific function signature so the compiler knows it's an ISR.

    ```c
    volatile unsigned int counter = 0; // volatile because it can change outside of this loop

    ISR(INT0_vect) {
        counter++; // Increment the counter
        // The flag for INT0 is usually cleared automatically by hardware when INT0_vect is entered.
    }
    ```

5.  **The Main Loop:**
    The main loop can now do other things, or simply wait.

    ```c
    int main(void) {
        // ... (Initialization code for I/O ports, etc.)

        // Enable global interrupts (sei() typically does this)
        sei(); // This sets the I-bit in SREG

        while (1) {
            // Do other tasks here, or just let the interrupts handle events
        }
        return 0;
    }
    ```

**Explanation of `volatile`:** The `volatile` keyword is crucial for variables that are modified within an ISR and used elsewhere (like in the main loop). It tells the compiler that this variable's value can change at any time without any action on the part of the software being compiled, so it should not optimize away reads or writes to it.

## Practice Task

Imagine you are working with an AVR microcontroller and you need to blink an LED every second. You decide to use a Timer/Counter interrupt for this.

1.  **Identify the necessary registers:** What interrupt mask register and flag register would you likely use for a timer interrupt? What about the global interrupt enable register?
2.  **Describe the steps:** Outline the sequence of steps you would take in your code to:
    *   Enable global interrupts.
    *   Configure a specific timer to generate an overflow interrupt periodically (e.g., every 1 second).
    *   Write an ISR that toggles the state of an LED when the timer interrupt occurs.
    *   Ensure your main loop can then do other work or wait.

## Self-Check Questions

1.  What is the primary purpose of the I-bit in the SREG?
2.  Why is it important to enable *both* global interrupts and specific interrupt sources?
3.  What is an Interrupt Service Routine (ISR), and what is its role?
4.  What does the `volatile` keyword signify when used with variables accessed by ISRs?
5.  If you want your program to react to a button press without constantly checking the button in the `while(1)` loop, what peripheral programming feature would you use?

## Supports

- [[skills/programming/programming-languages/avr-peripheral-programming/microskills/interrupt-controller-mechanisms|Interrupt Controller Mechanisms]]
