---
type: medium
title: Interrupt Enable/Disable Control on AVR Microcontrollers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[interrupt-enable-disable-control|interrupt-enable-disable-control]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-programming/avr-peripheral-programming/avr-peripheral-programming|avr-peripheral-programming]]"
learning-time-in-minutes: 6
---
# Interrupt Enable/Disable Control on AVR Microcontrollers

This lesson focuses on the fundamental aspect of interrupt handling: controlling when interrupts are enabled or disabled. This is crucial for preventing race conditions and ensuring that your interrupt service routines (ISRs) are executed reliably within your AVR microcontroller projects.

## Why Control Interrupts?

Interrupts are powerful tools that allow your microcontroller to respond to external events without constantly polling for them. However, if multiple interrupts can occur simultaneously, or if your program is in a critical section of code where an interrupt would cause problems, you need a way to temporarily disable them. This micro-skill is about gaining programmatic control over interrupt behavior.

Consider a scenario where you're updating a critical variable that is also read by an ISR. If an interrupt occurs midway through the update, the ISR might read a corrupted or incomplete value, leading to unexpected behavior. By disabling interrupts during the update process, you ensure atomicity, meaning the update either completes fully or not at all from the perspective of the ISR.

## Core Concepts: GIE Bit and Specific Interrupt Enable Bits

AVR microcontrollers manage interrupt enabling at two levels:

1.  **Global Interrupt Enable (GIE):** This is a master switch for all interrupts. When the GIE bit is cleared, all interrupts are disabled, regardless of their individual enable settings. When it's set, interrupts are enabled *if* their specific enable bits are also set.
2.  **Specific Interrupt Enable Bits:** Each interrupt source (like external interrupts INT0, INT1, timer overflows, etc.) has its own dedicated enable bit within its respective control register.

### Global Interrupt Enable (GIE)

The GIE bit is located in the Status Register (SREG) of the AVR microcontroller.

*   **Enabling all interrupts:** The `sei()` macro (Set Interrupt) is used. This macro typically expands to an `SREG` instruction that sets the GIE bit.
*   **Disabling all interrupts:** The `cli()` macro (Clear Interrupt) is used. This macro typically expands to an `SREG` instruction that clears the GIE bit.

### Specific Interrupt Enable Bits

These bits are found in various peripheral control registers. For example:

*   **External Interrupts (INT0, INT1, INT2):** The `INTn` bits in the `GICR` (General Interrupt Control Register) or `EICRA`/`EICRB` (External Interrupt Control Registers A/B) control specific external interrupts.
*   **Timer/Counter Interrupts:** Bits within the `TIMSK` (Timer/Counter Interrupt Mask Register) or `TIMSKn` (Timer/Counter Interrupt Mask Register n) enable timer overflow, compare match, or capture events.

## Practical Example: Handling a Button Press While Protecting Data

Let's illustrate with an example where we want to count button presses using an external interrupt (INT0), but we also have a critical section of code that updates a shared variable.

**Scenario:**
We have a counter that increments every time a button connected to INT0 is pressed. This counter is also read periodically by another part of our program. To prevent the counter from being read while it's being incremented by the ISR, we'll disable global interrupts during the increment operation within the ISR.

**Code Structure (Conceptual):**

```c
#include <avr/io.h>
#include <avr/interrupt.h>

volatile uint16_t critical_data = 0;
volatile uint16_t interrupt_counter = 0;

// Interrupt Service Routine for External Interrupt 0
ISR(INT0_vect) {
    // --- Critical Section Start ---
    cli(); // Disable global interrupts to protect data during update

    // Simulate a more complex update or read that needs protection
    // For this simple example, we'll just increment and then read
    // a hypothetical shared variable. In a real scenario,
    // this might involve reading from shared memory or performing
    // a multi-byte update.

    interrupt_counter++; // Increment our counter

    // Hypothetical read of critical_data which might be updated elsewhere
    uint16_t temp_data = critical_data;

    sei(); // Re-enable global interrupts
    // --- Critical Section End ---

    // Other ISR tasks can go here, but ensure they don't
    // re-enable interrupts if that's not desired.
}

int main(void) {
    // --- Initialization ---

    // Configure Port D for INT0 (assuming PD2 is INT0)
    DDRD &= ~(1 << PD2); // Set PD2 as input
    PORTD |= (1 << PD2); // Enable pull-up resistor for the button

    // Configure External Interrupt 0
    // Trigger INT0 on a falling edge (button press)
    MCUCR |= (1 << ISC01);
    MCUCR &= ~(1 << ISC00);

    // Enable INT0
    GICR |= (1 << INT0);

    // Enable global interrupts
    sei();

    // --- Main Loop ---
    while (1) {
        // Periodically update critical_data and potentially read interrupt_counter
        // For demonstration, let's just increment critical_data
        cli(); // Disable interrupts while modifying critical_data
        critical_data++;
        sei(); // Re-enable interrupts

        // In a real application, you might read interrupt_counter here
        // uint16_t current_count;
        // cli();
        // current_count = interrupt_counter;
        // sei();
        // ... use current_count ...

        // Example: A simple delay or other main loop tasks
        // This loop doesn't need interrupts disabled for its own operations
        // unless it's also modifying data that the ISR accesses.
    }
    return 0;
}
```

**Explanation:**

1.  **`ISR(INT0_vect)`:** This defines the function that will be executed when an interrupt on INT0 occurs.
2.  **`cli();` inside ISR:** Immediately upon entering the ISR, we call `cli()`. This is crucial. If the `critical_data++` operation (or any operation that reads `critical_data`) were to be interrupted by *another* interrupt (e.g., a timer interrupt) while `critical_data` was being updated, it could lead to data corruption. By disabling interrupts, we ensure that the code block between `cli()` and `sei()` within the ISR runs atomically with respect to other interrupts.
3.  **`sei();` inside ISR:** After the critical operations within the ISR are complete, we re-enable global interrupts using `sei()`. This allows other interrupts to be serviced.
4.  **`main()` function:**
    *   We configure the pin connected to INT0 as an input with a pull-up resistor.
    *   We configure `ISC01` and `ISC00` to trigger INT0 on a falling edge (typical for button presses).
    *   `GICR |= (1 << INT0);` enables the specific INT0 source.
    *   `sei();` at the end of `main()` enables global interrupts, allowing our ISR to be triggered.
    *   Inside the `while(1)` loop, we also use `cli()` and `sei()` around the `critical_data++` operation. This protects `critical_data` from being modified by the main loop *while* the ISR is potentially reading it. This is a common pattern when shared variables are accessed by both the main loop and ISRs.

## When to Use `cli()` and `sei()`

*   **Protecting Critical Sections:** Any block of code where data is being modified or read, and where an interrupt occurring mid-operation would cause an error, should be wrapped in `cli()` and `sei()`. This is often referred to as making a section of code "atomic".
*   **Preventing Re-entrancy Issues:** If an ISR itself might trigger another interrupt that could call the *same* ISR again (though less common with simple external interrupts), disabling interrupts can prevent re-entrancy problems.
*   **Specific Interrupt Management:** While `cli()` and `sei()` disable *all* interrupts, you can also use the specific interrupt enable bits (e.g., in `GICR`, `TIMSK`) to enable or disable individual interrupt sources, providing finer-grained control.

## Common Pitfalls

*   **Forgetting `sei()`:** If you disable interrupts with `cli()` and forget to re-enable them with `sei()`, your microcontroller will become unresponsive to all interrupts. This is a common bug that can be hard to debug without an external debugger.
*   **Over-use of `cli()`/`sei()`:** Disabling interrupts for too long can delay critical responses to other events, impacting real-time performance. Keep critical sections as short as possible.
*   **Incorrectly Enabling Specific Interrupts:** Ensure the specific interrupt enable bits for the interrupts you intend to use are set correctly in their respective registers.

## Practice Task

1.  Modify the provided C code example.
2.  Add another volatile integer variable, `another_data`.
3.  In the `main()` loop, periodically increment `another_data`.
4.  In the `ISR(INT0_vect)`, after incrementing `interrupt_counter`, read `another_data` into a local variable and then print it to a hypothetical serial output (you can just store it in another volatile variable for now, e.g., `last_read_another_data`).
5.  Ensure that both `critical_data` and `another_data` updates in the main loop, and the reading of `another_data` within the ISR, are protected by `cli()` and `sei()` to prevent race conditions.

## Self-Check Questions

1.  What is the purpose of the `GIE` bit in the `SREG` register?
2.  What are the primary functions used in AVR C to enable and disable all interrupts globally?
3.  Why is it important to disable interrupts before modifying a shared variable that an ISR also accesses?
4.  Describe a scenario where you might use `cli()` and `sei()` within an Interrupt Service Routine itself.
5.  If your AVR microcontroller stops responding to any external events after a certain operation, what is a likely cause related to interrupt handling?

## Supports

- [[interrupt-enable-disable-control|Interrupt Enable/Disable Control]]
