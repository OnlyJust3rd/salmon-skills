---
type: medium
title: Setting and Clearing AVR Output Pins
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[digital-signal-manipulation|digital-signal-manipulation]]"
learning-time-in-minutes: 4
---
# Setting and Clearing AVR Output Pins

This lesson focuses on the fundamental technique of directly manipulating the state of output pins on an AVR microcontroller. This is a core aspect of AVR I/O control, allowing your bare-metal C code to signal external devices by turning LEDs on and off, driving relays, or communicating with other components.

## Understanding Output Pin States

AVR microcontrollers have General Purpose Input/Output (GPIO) pins that can be configured as either inputs or outputs. When a pin is configured as an output, you can control whether it's in a HIGH state (typically representing a voltage close to VCC, like 5V or 3.3V) or a LOW state (typically representing ground, 0V).

To control these states, we'll be working with special memory addresses within the microcontroller called **registers**. For output pins, there are two primary registers we interact with:

*   **PORT Register (e.g., PORTB, PORTC, PORTD):** Writing a '1' to a specific bit in this register sets the corresponding output pin to a HIGH state. Writing a '0' sets it to a LOW state.
*   **DDR Register (Data Direction Register, e.g., DDRB, DDRC, DDRD):** This register determines the direction of each pin. To use a pin as an output, you must set the corresponding bit in its DDR register to '1'. If the bit is '0', the pin is configured as an input.

**Important Note:** Before you can set or clear an output pin, you **must** first configure it as an output by setting the corresponding bit in the DDR register to '1'.

## Practical Example: Blinking an LED

A classic example to illustrate direct output control is blinking an LED. We'll assume you have an AVR microcontroller (like an ATmega328P found on Arduino boards) with an LED connected to one of its digital pins. For this example, let's say the LED is connected to **Port D, Pin 5 (PD5)**.

To blink an LED, we need to:

1.  **Configure PD5 as an output.**
2.  **Set PD5 HIGH** (to turn the LED on).
3.  **Wait for a short period.**
4.  **Set PD5 LOW** (to turn the LED off).
5.  **Wait for a short period.**
6.  **Repeat.**

Here's the bare-metal C code to achieve this:

```c
#define F_CPU 16000000UL // Define CPU frequency (e.g., 16MHz) - important for delay functions
#include <avr/io.h>
#include <util/delay.h>

int main(void) {
    // 1. Configure PD5 as an output
    // DDRD is the Data Direction Register for Port D.
    // Setting the 5th bit (PD5) to 1 makes it an output.
    // We use the bitwise OR operator (|) to set only the 5th bit without affecting others.
    DDRD |= (1 << PD5); // PD5 is a predefined macro for bit 5 of Port D

    // Main loop for blinking
    while (1) {
        // 2. Set PD5 HIGH (turn LED ON)
        // PORTD is the Port D Data Register.
        // Setting the 5th bit to 1 drives the pin HIGH.
        PORTD |= (1 << PD5);

        // 3. Wait for a short period (e.g., 500 milliseconds)
        _delay_ms(500);

        // 4. Set PD5 LOW (turn LED OFF)
        // To set a bit LOW, we use the bitwise AND operator (&) with the bitwise NOT (~) of the bit.
        // This clears only the 5th bit while leaving others unchanged.
        PORTD &= ~(1 << PD5);

        // 5. Wait for a short period (e.g., 500 milliseconds)
        _delay_ms(500);
    }

    return 0; // This line is never reached in an embedded system's main loop
}
```

### How it Works:

*   `#define F_CPU 16000000UL`: This macro is crucial for the `_delay_ms()` function. It tells the compiler the clock speed of your microcontroller so it can calculate accurate delays. Replace `16000000UL` with your microcontroller's actual clock frequency.
*   `#include <avr/io.h>`: This header file provides definitions for all the AVR I/O registers and bit names (like `PORTD`, `DDRD`, `PD5`).
*   `#include <util/delay.h>`: This header provides the delay functions like `_delay_ms()`.
*   `DDRD |= (1 << PD5);`: This line configures PD5 as an output. `(1 << PD5)` creates a binary number with only the 5th bit set. The bitwise OR (`|=`) merges this with the existing `DDRD` value, ensuring only the 5th bit is affected.
*   `PORTD |= (1 << PD5);`: This sets the PD5 pin HIGH.
*   `PORTD &= ~(1 << PD5);`: This clears the PD5 pin LOW. The `~` operator inverts all bits, so `~(1 << PD5)` creates a mask with all bits set except the 5th. The bitwise AND (`&=`) with this mask forces the 5th bit to '0' while leaving other bits in `PORTD` untouched.

## Practice Task

Modify the blinking LED code to:

1.  Make the LED blink twice as fast (halve the delay times).
2.  Introduce a longer pause (e.g., 2 seconds) after every 5 blinks. You'll need to add a counter variable for this.

## Self-Check Questions

1.  What is the purpose of the DDR register, and how do you use it to configure a pin as an output?
2.  Explain the difference between writing to the `PORT` register and writing to the `DDR` register for an output pin.
3.  How would you set **Port B, Pin 2 (PB2)** to a LOW state, assuming it has already been configured as an output? Write the C code for this action.
4.  What is the role of the `F_CPU` macro when using delay functions in AVR programming?
5.  Imagine you have an LED on PD0 and another on PD1. How would you turn both LEDs ON simultaneously using a single line of code?

## Supports

- [[digital-signal-manipulation|Digital Signal Manipulation]]
