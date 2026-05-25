---
type: medium
title: Implementing Interrupt Service Routines (ISRs)
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[interrupt-service-routine-implementation|interrupt-service-routine-implementation]]"
learning-time-in-minutes: 4
---
# Implementing Interrupt Service Routines (ISRs)

This lesson focuses on writing the code that executes when an external interrupt signal is detected by your AVR microcontroller. This is a crucial part of applying interrupt handling in AVR peripheral programming.

## What is an Interrupt Service Routine (ISR)?

An Interrupt Service Routine (ISR), also known as an interrupt handler, is a special function within your program that the microcontroller automatically jumps to when a specific interrupt event occurs. Instead of constantly polling (checking in a loop) for a condition, an interrupt allows the microcontroller to be notified asynchronously when something important happens.

Think of it like this: you're busy cooking (your main program). If the doorbell rings (an interrupt), you stop cooking (pause the main program), answer the door (execute the ISR), and then go back to cooking where you left off.

When an interrupt occurs, the microcontroller:
1.  Stops executing the current instruction.
2.  Saves the current program state (like the program counter and some registers) onto the stack.
3.  Jumps to the memory address of the ISR for that specific interrupt.
4.  Executes the code within the ISR.
5.  Restores the saved program state from the stack.
6.  Resumes execution of the main program from where it left off.

## Practical Example: Reacting to a Button Press

Let's illustrate this with a common scenario: using an external interrupt to detect a button press. When the button is pressed, we want to toggle an LED. We'll use the `INT0` pin on an AVR microcontroller (like an ATmega328P, common in Arduino Uno).

Here's the breakdown of what we need to do in C:

1.  **Configure the interrupt pin:** Set the pin connected to the button as an input.
2.  **Configure the interrupt:**
    *   Enable the specific interrupt (e.g., `INT0`).
    *   Set the trigger condition (e.g., a falling edge, which typically signifies a button press).
3.  **Write the ISR:** Define the function that will run when the interrupt occurs. This function will toggle the state of an LED.
4.  **Enable global interrupts:** Allow the microcontroller to respond to interrupts.

### C Code Example

This example assumes you are using the AVR-GCC toolchain and a standard AVR microcontroller. The specific register names might vary slightly between different AVR families.

```c
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>

// Define which pin is connected to the LED
#define LED_PIN PB5 // Example: Arduino Uno's built-in LED is on PB5

// --- Interrupt Service Routine for External Interrupt 0 ---
// The name 'ISR(INT0_vect)' is a convention recognized by the AVR-GCC compiler.
// 'INT0_vect' is the interrupt vector name for external interrupt 0.
ISR(INT0_vect) {
    // This code executes when INT0 (usually PD2) detects a falling edge.

    // Toggle the LED state
    PORTB ^= (1 << LED_PIN);

    // Optional: Add a small delay here if debouncing is needed,
    // but it's often better to handle debouncing in software or hardware.
    // _delay_ms(50);
}

int main(void) {
    // --- Initialization ---

    // 1. Configure LED pin as output
    DDRB |= (1 << LED_PIN); // Set PB5 as output

    // 2. Configure INT0 (usually PD2) as input
    DDRD &= ~(1 << PD2); // Set PD2 as input (assuming INT0 is on PD2)

    // 3. Configure INT0 to trigger on a falling edge (button press)
    //    ISC01 and ISC00 bits control the trigger source.
    //    00: low level, 01: any logic change, 10: falling edge, 11: rising edge
    EICRA |= (1 << ISC01); // Set ISC01 bit
    EICRA &= ~(1 << ISC00); // Clear ISC00 bit (for falling edge)

    // 4. Enable INT0 interrupt
    //    The GIMSK (General Interrupt Mask Register) or EIMSK (External Interrupt Mask Register)
    //    contains the enable bits for external interrupts.
    EIMSK |= (1 << INT0); // Enable the INT0 interrupt

    // 5. Enable global interrupts
    //    The SREG (Status Register) has the I-bit (Interrupt enable).
    sei(); // Sets the Global Interrupt Enable bit in SREG

    // --- Main Program Loop ---
    // The main loop can do other tasks or simply wait.
    // When an interrupt occurs, execution is temporarily diverted to the ISR.
    while (1) {
        // Main program tasks can go here.
        // For this example, the main loop is mostly idle.
        // The LED toggling is handled by the ISR.
    }

    return 0; // This line is never reached in an embedded system's main loop
}
```

### How the Code Works

*   `ISR(INT0_vect)`: This macro defines the function that will be executed when the interrupt vector `INT0_vect` is triggered. The AVR-GCC toolchain automatically links this function to the correct interrupt vector address.
*   `PORTB ^= (1 << LED_PIN);`: Inside the ISR, this line toggles the state of the LED connected to `PB5`. The XOR (^) operator is perfect for toggling a bit.
*   `DDRB |= (1 << LED_PIN);`: Configures the `PB5` pin as an output for the LED.
*   `DDRD &= ~(1 << PD2);`: Configures the `PD2` pin (commonly used for `INT0`) as an input for the button.
*   `EICRA |= (1 << ISC01); EICRA &= ~(1 << ISC00);`: These lines configure the interrupt control register `EICRA` to trigger `INT0` on a **falling edge**. This is typical for a momentary push button connected between the input pin and ground.
*   `EIMSK |= (1 << INT0);`: This line enables the interrupt for `INT0` in the `EIMSK` register.
*   `sei();`: This is a critical instruction. `sei()` stands for "Set Interrupt Enable" and it enables the global interrupt flag in the Status Register (SREG). Without this, even if individual interrupts are enabled, the microcontroller will ignore them.
*   `while (1)`: The main loop is often kept simple when using interrupts extensively, as the core logic is handled by the ISRs.

## Practice Task

1.  **Adapt the Code:** Modify the provided C code to use an external interrupt on a different pin (e.g., `INT1` if available on your microcontroller). You'll need to change the `ISR` function name (`ISR(INT1_vect)`), the interrupt trigger configuration register (`EICRA` for `INT0`/`INT1` on many AVRs), and the interrupt enable bit in `EIMSK`.
2.  **Change Trigger Condition:** Modify the `EICRA` register bits to trigger the interrupt on a **rising edge** instead of a falling edge. Observe how this affects the button press behavior (you might need to adjust your button wiring or logic).
3.  **Add a Counter:** Inside the ISR, add a global `volatile` integer variable. Increment this counter each time the ISR is executed. In your `main()` function, add code to display this counter's value (e.g., by blinking an LED a number of times corresponding to the counter). Remember to use `volatile` for variables modified within an ISR and accessed by the main loop.

## Self-Check Questions

1.  What is the primary purpose of an Interrupt Service Routine (ISR)?
2.  Why is the `volatile` keyword important when declaring variables that are modified by an ISR and used by the main program?
3.  What is the function of `sei()` and why is it essential for interrupt handling?
4.  Describe the difference between triggering an interrupt on a falling edge versus a rising edge.
5.  If your ISR is not being executed, what are the first few things you should check in your code and microcontroller configuration?

## Supports

- [[interrupt-service-routine-implementation|Interrupt Service Routine Implementation]]
