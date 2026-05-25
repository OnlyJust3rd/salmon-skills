---
type: medium
title: Managing the Interrupt Vector Table on AVR Microcontrollers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[interrupt-vector-table-management|interrupt-vector-table-management]]"
learning-time-in-minutes: 5
---
# Managing the Interrupt Vector Table on AVR Microcontrollers

Understanding how to manage the Interrupt Vector Table (IVT) is crucial for effectively handling external interrupts in AVR microcontrollers. This lesson focuses on configuring the microcontroller to direct interrupt requests to their appropriate Interrupt Service Routines (ISRs).

## What is the Interrupt Vector Table?

When an interrupt occurs (e.g., a button press detected by an external pin, data received by a serial port), the microcontroller needs to know which piece of code to execute to handle that specific event. The Interrupt Vector Table (IVT) is a special table stored in memory (usually Flash memory) that contains the starting addresses of these interrupt handling routines, known as Interrupt Service Routines (ISRs).

Each interrupt source has a dedicated entry in the IVT. When an interrupt is triggered, the microcontroller looks up the corresponding entry in the IVT and jumps to the address stored there, executing the ISR.

## How the IVT Works on AVRs

AVR microcontrollers have a fixed IVT. The compiler and the linker play a key role in populating this table. When you write an ISR function in your C code, you need to inform the compiler and linker that this function is an ISR and where it should be placed in the IVT.

The crucial part of managing the IVT is using specific compiler directives or attributes to declare your ISRs. The most common way to do this in AVR-GCC (the compiler widely used for AVR microcontrollers) is by using the `ISR()` macro.

The `ISR()` macro takes two arguments:

1.  **Interrupt Vector Name:** This is a predefined name for the specific interrupt source. For example, `INT0_vect` for external interrupt 0, `PCINT0_vect` for pin change interrupt on port B, etc. These names are typically defined in the microcontroller's header file (e.g., `<avr/io.h>`).
2.  **Function Name:** This is the name of your C function that will act as the ISR.

### Structure of an ISR

An ISR is a C function with specific characteristics:

*   It typically takes no arguments.
*   It typically returns `void`.
*   It should be as short and fast as possible to minimize interrupt latency.
*   It should not rely on blocking operations.
*   It often needs to clear the interrupt flag associated with the interrupt source to prevent the interrupt from firing again immediately.

## Practical Example: Handling External Interrupt 0 (INT0)

Let's consider a common scenario: using an external interrupt on pin PD2 (which corresponds to INT0 on many AVR microcontrollers like the ATmega328P) to toggle an LED.

**Scenario:** We want an LED connected to pin PB5 to toggle its state every time the button connected to PD2 is pressed. We will use INT0 for this.

**Steps:**

1.  **Configure the Pin:**
    *   Set PD2 as an input pin.
    *   Enable the internal pull-up resistor on PD2 (if the button is connected between PD2 and GND) or configure it as a standard input if an external pull-up is used.
    *   Set PB5 as an output pin.

2.  **Configure the Interrupt:**
    *   **Enable External Interrupt 0:** Set the `INT0` bit in the `GICR` (General Interrupt Control Register) or `EICRA`/`EICRB` registers depending on the specific AVR.
    *   **Set Trigger Condition:** Determine when INT0 should trigger. We'll set it to trigger on a falling edge (low level active) using the `ISC01` and `ISC00` bits in the `MCUCR` (Microcontroller Control Register).
    *   **Clear Interrupt Flags:** Ensure the interrupt flag for INT0 (`INTF0` in `GIFR`) is cleared initially.

3.  **Write the ISR:** Create a function that toggles the state of the LED.

4.  **Declare the ISR:** Use the `ISR()` macro to link your ISR function to the `INT0_vect`.

5.  **Enable Global Interrupts:** After configuring everything, you need to enable global interrupts using the `sei()` function.

### Code Example (ATmega328P)

```c
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h> // For demo purposes if needed, but avoid in real ISR

// Define the LED pin
#define LED_PIN PB5
#define LED_PORT PORTB
#define LED_DDR DDRB

// Define the button pin connected to INT0
#define BUTTON_PIN PD2
#define BUTTON_PORT PORTD
#define BUTTON_DDR DDRD

// Declare the Interrupt Service Routine for External Interrupt 0
ISR(INT0_vect) {
    // This function is executed when INT0 is triggered.
    // Toggle the LED state
    LED_PORT ^= (1 << LED_PIN);

    // In a real-world scenario, you might want to check the button state here
    // to debounce it, but for a simple toggle, just toggling is fine.
    // The interrupt flag is automatically cleared by hardware when the ISR is entered
    // for edge-triggered interrupts on many AVRs. For level-triggered, it might need manual clearing.
}

int main(void) {
    // --- Pin Configuration ---
    // Set LED pin as output
    LED_DDR |= (1 << LED_PIN);
    // Ensure LED is initially off
    LED_PORT &= ~(1 << LED_PIN);

    // Set Button pin (PD2/INT0) as input with internal pull-up enabled
    BUTTON_DDR &= ~(1 << BUTTON_PIN); // Set as input
    BUTTON_PORT |= (1 << BUTTON_PIN); // Enable pull-up resistor

    // --- Interrupt Configuration ---
    // Enable External Interrupt 0 (INT0)
    GICR |= (1 << INT0); // Or EIMSK |= (1 << INT0); on newer AVRs

    // Set INT0 to trigger on a falling edge (low level detected)
    // MCUCR:
    //   ISC01 = 1, ISC00 = 0  => Falling edge
    //   ISC01 = 0, ISC00 = 1  => Rising edge
    //   ISC01 = 0, ISC00 = 0  => Low level
    //   ISC01 = 1, ISC00 = 1  => Change
    MCUCR |= (1 << ISC01);
    MCUCR &= ~(1 << ISC00);

    // No need to manually clear INTF0 flag here as it's cleared by hardware
    // upon entering the ISR for edge-triggered interrupts.

    // --- Enable Global Interrupts ---
    sei(); // Set Interrupt Enable flag

    // --- Main Loop ---
    // The main loop can do other things, or just sit idle.
    // The interrupt handler will execute when the button is pressed.
    while (1) {
        // Do other tasks if needed.
        // For this example, the main loop is empty as the LED toggling
        // is handled entirely by the ISR.
    }

    return 0;
}
```

**Explanation of the IVT Management:**

*   `ISR(INT0_vect)`: This is the core of IVT management. It tells the compiler that the `INT0_vect` (the vector for External Interrupt 0) should point to our `ISR` function. The compiler and linker then ensure that the address of our `ISR` function is placed at the correct location in the generated object code, corresponding to the `INT0_vect` entry in the IVT.
*   `#include <avr/interrupt.h>`: This header file provides the `ISR()` macro and the `sei()` function.
*   `#include <avr/io.h>`: This header file defines the register names like `GICR`, `MCUCR`, `PORTB`, `DDRB`, etc., and the interrupt vector names like `INT0_vect`.

## Practice Task

1.  **Modify the Example:** Change the code to use External Interrupt 1 (INT1), typically on pin PD3, to toggle the LED. Ensure you update the `ISR()` macro and the interrupt configuration registers accordingly.
2.  **Add Another Interrupt:** If your AVR microcontroller has another interrupt source available (e.g., an interrupt on a different pin or a timer interrupt), try to set up a second interrupt handler for it. For instance, use INT1 to toggle a different LED (if available) or to send a character over serial. You'll need to declare and configure this second ISR using its specific vector name.

## Self-Check Questions

1.  What is the primary purpose of the Interrupt Vector Table?
2.  Which `ISR()` macro argument specifies the interrupt source, and where do these names come from?
3.  Why is it important for an ISR to be short and efficient?
4.  In the provided example, what specific configuration registers were used to enable INT0 and set its trigger condition?
5.  What function is used to globally enable interrupts in AVR C programming?
6.  If you wanted to handle an interrupt from a serial port reception, what would be a likely interrupt vector name you'd use with the `ISR()` macro (hint: look for `USART` or `RX` related names)?

## Supports

- [[interrupt-vector-table-management|Interrupt Vector Table Management]]
