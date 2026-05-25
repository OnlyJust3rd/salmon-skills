---
type: medium
title: Configuring AVR Microcontroller Input Pins
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[input-pin-configuration|input-pin-configuration]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-programming/avr-peripheral-programming/avr-peripheral-programming|avr-peripheral-programming]]"
learning-time-in-minutes: 4
---
# Configuring AVR Microcontroller Input Pins

This lesson focuses on setting up General Purpose Input/Output (GPIO) pins on an AVR microcontroller to function as digital inputs. This is a fundamental step in interacting with the physical world, allowing your microcontroller to read the state of buttons, switches, sensors, and other digital signals.

## Understanding Input Pin Configuration

When we configure an I/O pin as an input, the microcontroller's primary job is to *read* the voltage level present on that pin. This voltage level, typically interpreted as either HIGH (close to VCC) or LOW (close to GND), represents the state of the external device connected to the pin.

To properly configure a pin as an input, we need to set two critical aspects:

1.  **Data Direction Register (DDR):** This register controls whether a pin on a specific port (e.g., PORTB, PORTC) is configured as an input or an output. For a pin to be an input, its corresponding bit in the DDR must be set to `0`.
2.  **Port Register (PORT):** While the DDR determines the pin's direction, the PORT register has a secondary, yet crucial, role for input pins. It controls the **internal pull-up resistor**.

### The Pull-Up Resistor

An unconnected digital input pin can "float," meaning its voltage level is indeterminate, leading to unpredictable readings. To prevent this, AVR microcontrollers have optional internal pull-up resistors. When enabled, these resistors weakly connect the input pin to the microcontroller's VCC.

*   **With a pull-up enabled:**
    *   If nothing is connected to the pin (or the connected device is open-circuit), the pull-up resistor pulls the pin HIGH.
    *   If the connected device (like a button) connects the pin to GND, it overcomes the pull-up resistor and pulls the pin LOW.
*   **With a pull-up disabled:**
    *   If nothing is connected, the pin floats.
    *   If a device connects to GND, the pin reads LOW.
    *   If a device connects to VCC, the pin reads HIGH.

Most commonly, input pins are configured with their internal pull-up resistor enabled. This simplifies external circuitry, as you often only need to connect a switch or button between the input pin and GND. When the button is not pressed, the pin is HIGH due to the pull-up. When pressed, it grounds the pin, making it LOW.

## Practical Scenario: Reading a Button Press

Let's say we want to read the state of a simple push button connected to pin PB0 of an AVR microcontroller (like an ATmega328P, common in Arduino boards). We want to detect when the button is pressed.

We'll connect the button as follows:

*   One terminal of the button to PB0.
*   The other terminal of the button to GND.

We will configure PB0 as an input with the internal pull-up resistor enabled.

## Bare-Metal C Implementation

Here's how you would configure pin PB0 as an input with the pull-up enabled using bare-metal C code. Note that specific register names might vary slightly between AVR families, but the principles remain the same. We'll use common ATmega register names.

```c
#include <avr/io.h>

int main(void) {
    // --- Configure PB0 as Input with Pull-Up Resistor ---

    // 1. Set Data Direction for PB0 to be an Input.
    // The DDRB register controls the direction of PORTB pins.
    // Setting a bit to 0 configures the corresponding pin as an input.
    // We want to affect only PB0 (the 0th bit).
    DDRB &= ~(1 << PB0); // Clear the PB0 bit in DDRB

    // 2. Enable the internal pull-up resistor for PB0.
    // The PORTB register controls the output state AND the pull-up resistors
    // for PORTB pins when they are configured as inputs.
    // Setting a bit to 1 enables the pull-up resistor for the corresponding pin.
    // We want to affect only PB0 (the 0th bit).
    PORTB |= (1 << PB0); // Set the PB0 bit in PORTB

    // --- Now, PB0 is configured as an input with its pull-up resistor enabled ---

    // Example of reading the pin state later (within a loop or event handler):
    while (1) {
        // Read the state of PB0.
        // The PINB register reflects the actual voltage level on the pins of PORTB.
        // If the button is NOT pressed, PINB & (1 << PB0) will be non-zero (HIGH).
        // If the button IS pressed, PINB & (1 << PB0) will be zero (LOW).

        if (PINB & (1 << PB0)) {
            // Button is NOT pressed (pin is HIGH due to pull-up)
            // Your code here...
        } else {
            // Button IS pressed (pin is LOW, connected to GND)
            // Your code here...
        }
    }

    return 0; // Should not be reached in an embedded system with an infinite loop
}
```

### Explanation of the Code:

*   `#include <avr/io.h>`: This header file provides the definitions for the AVR microcontroller's special function registers (SFRs), like `DDRB`, `PORTB`, and `PINB`.
*   `DDRB &= ~(1 << PB0);`:
    *   `PB0` is a macro (defined in `<avr/io.h>`) representing the bit position for pin 0 of PORTB.
    *   `(1 << PB0)` creates a bitmask with only the PB0 bit set (e.g., `00000001`).
    *   `~(1 << PB0)` inverts this bitmask (e.g., `11111110`).
    *   The bitwise AND (`&=`) operation with this inverted mask ensures that only the PB0 bit in `DDRB` is cleared to `0`, leaving all other bits unchanged. This sets PB0 as an input.
*   `PORTB |= (1 << PB0);`:
    *   `(1 << PB0)` is the same bitmask.
    *   The bitwise OR (`|=`) operation with this mask ensures that the PB0 bit in `PORTB` is set to `1`. This enables the internal pull-up resistor for PB0.
*   `PINB & (1 << PB0)`:
    *   `PINB` is a register that reads the actual logic level of the physical pins on PORTB.
    *   The bitwise AND with `(1 << PB0)` isolates the state of PB0. If the result is non-zero, the pin is HIGH; if it's zero, the pin is LOW.

## Practice Task

Configure pin PC2 of an AVR microcontroller as a digital input with its internal pull-up resistor enabled. Write the bare-metal C code to perform this configuration within the `main` function. Assume the necessary header file is included.

## Self-Check Questions

1.  What is the purpose of the Data Direction Register (DDR) for an I/O pin?
2.  Explain why enabling the internal pull-up resistor is important for input pins, especially when reading a button connected to ground.
3.  If you want to configure pin PD7 as an input without a pull-up resistor, what would be the values you would set in `DDRD` and `PORTD` for the 7th bit?

## Supports

- [[input-pin-configuration|Input Pin Configuration]]
