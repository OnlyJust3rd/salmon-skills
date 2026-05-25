---
type: medium
title: Reading Digital Inputs on AVR Microcontrollers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[reading-digital-inputs|reading-digital-inputs]]"
learning-time-in-minutes: 6
---
# Reading Digital Inputs on AVR Microcontrollers

This lesson focuses on reading the state of digital input pins on an AVR microcontroller using bare-metal C code. This is a fundamental skill for interacting with the physical world, allowing your microcontroller to sense external events.

## Understanding Digital Inputs

Digital input pins on a microcontroller can be in one of two states: **HIGH** (typically representing a voltage close to the microcontroller's power supply, often 5V or 3.3V) or **LOW** (typically representing a voltage close to ground, 0V). When you configure a pin as an input, you are essentially telling the microcontroller to monitor the voltage level on that pin.

The AVR microcontroller will then read this voltage and represent it in your C code as a logical 0 (for LOW) or a logical 1 (for HIGH). This allows your program to make decisions based on external signals, such as button presses, sensor readings, or the state of another device.

### Key Registers for Input Configuration

To read from a digital pin, you need to configure it as an input. This is done by interacting with the **Data Direction Register (DDR)** for the port the pin belongs to.

*   **DDRx (Data Direction Register for Port x):** Each port (e.g., PORTA, PORTB, PORTC) has a corresponding DDR. Setting a bit in the DDRx to `0` configures the corresponding pin as an input. Setting it to `1` configures it as an output.

Once a pin is configured as an input, you read its state from the **Port Register (PINx)**.

*   **PINx (Port Input Register for Port x):** Reading from PINx will give you the current logic level of the corresponding pins. A `1` in a bit position indicates a HIGH signal, and a `0` indicates a LOW signal.

**Important Note:** Even though you read the state from PINx, it's crucial to set the corresponding bit in DDRx to `0` to ensure the pin is configured as an input and not an output.

### Pull-up Resistors

When a pin is configured as an input and is not actively driven by an external source (like a button not being pressed), its state can be **floating**. A floating pin can pick up electrical noise, leading to unpredictable readings.

To avoid this, AVR microcontrollers have **internal pull-up resistors** that can be enabled. When enabled, these resistors pull the pin's voltage up to the HIGH state. If an external device (like a button) connects the pin to ground, the pin will then be pulled LOW.

To enable the pull-up resistor for a specific pin, you set the corresponding bit in the **Port Register (PORTx)** to `1`, *even though the pin is configured as an input*. This is a common point of confusion.

> **Rule of Thumb:**
> *   To configure a pin as input: Set the corresponding DDR bit to `0`.
> *   To enable the internal pull-up resistor for an input pin: Set the corresponding PORT bit to `1`.
> *   To read the state of an input pin: Read the corresponding PIN bit.

## Practical Scenario: Reading a Button Press

Let's imagine we have a simple circuit where a pushbutton is connected to pin PD2 (Digital Pin 2 of Port D) of an AVR microcontroller. We'll also enable the internal pull-up resistor. When the button is pressed, it will connect PD2 to ground, pulling the pin LOW. When the button is not pressed, the pull-up resistor will keep PD2 HIGH.

Our goal is to write C code that detects when the button is pressed.

### Example Code

This example assumes you are using an AVR microcontroller like the ATmega328P (common in Arduino boards) and are working with bare-metal C. The specific header files might vary slightly depending on your AVR device and toolchain.

```c
#include <avr/io.h> // Required for register definitions
#include <util/delay.h> // Required for _delay_ms

int main(void) {
    // Configure pin PD2 (connected to the button) as an input.
    // Setting the corresponding bit in DDRD to 0 does this.
    // DDRD &= ~(1 << PD2); // Alternatively, this can be used to clear a specific bit.
    DDRD = 0x00; // Set all pins of Port D as inputs (more general for this example)

    // Enable the internal pull-up resistor for pin PD2.
    // Setting the corresponding bit in PORTD to 1 does this.
    PORTD |= (1 << PD2); // Set the PD2 bit in PORTD to HIGH

    // Variable to store the button state
    int button_pressed = 0;

    while (1) {
        // Read the state of pin PD2 from the PIND register.
        // We use bitwise AND with (1 << PD2) to isolate the state of PD2.
        if (PIND & (1 << PD2)) {
            // Pin is HIGH (button is NOT pressed)
            button_pressed = 0;
        } else {
            // Pin is LOW (button IS pressed)
            button_pressed = 1;
        }

        // Now you can use the 'button_pressed' variable to control other parts of your program.
        // For demonstration, let's toggle an LED on pin PB5 if the button is pressed.
        if (button_pressed) {
            // Turn ON LED connected to PB5 (assuming it's configured as output)
            // For this to work, PB5 must be configured as an output in DDRB.
            // Let's assume DDRB is already configured to make PB5 an output.
            // If not, add: DDRB |= (1 << PB5);
            PORTB |= (1 << PB5); // Turn LED ON
            _delay_ms(10); // Small delay to prevent rapid toggling if button is held
        } else {
            // Turn OFF LED connected to PB5
            PORTB &= ~(1 << PB5); // Turn LED OFF
        }
    }
    return 0;
}
```

**Explanation of the Code:**

1.  **`#include <avr/io.h>`:** This header file provides definitions for all AVR I/O registers (like `DDRD`, `PORTD`, `PIND`, `PORTB`, `DDRB`).
2.  **`#include <util/delay.h>`:** This header file is included for the `_delay_ms()` function, which provides simple delay routines.
3.  **`DDRD = 0x00;`**: We configure all pins on Port D as inputs. This is equivalent to `DDRD &= ~((1 << PD0) | (1 << PD1) | ... | (1 << PD7));` but simpler if all pins are inputs. Crucially, `(1 << PD2)` bit in `DDRD` is `0`.
4.  **`PORTD |= (1 << PD2);`**: This enables the internal pull-up resistor on pin PD2. The bitwise OR operation `|=` ensures that only the `PD2` bit is set to `1`, leaving other `PORTD` bits unaffected.
5.  **`while (1)`**: This creates an infinite loop, so the microcontroller continuously checks the button state.
6.  **`if (PIND & (1 << PD2))`**:
    *   `PIND`: This reads the current state of all pins on Port D.
    *   `(1 << PD2)`: This creates a bitmask where only the bit corresponding to PD2 is `1`. For example, if `PD2` is bit 2, this is `00000100` in binary.
    *   `&`: The bitwise AND operator compares the `PIND` register with our mask. If the `PD2` bit in `PIND` is `1` (meaning the pin is HIGH), the result of the AND operation will be non-zero (true). If the `PD2` bit is `0` (meaning the pin is LOW), the result will be zero (false).
7.  **`button_pressed = 0;` / `button_pressed = 1;`**: We update a variable based on whether the button is pressed or not.
8.  **`PORTB |= (1 << PB5);` / `PORTB &= ~(1 << PB5);`**: This section demonstrates how you might use the button state. Here, we turn an LED connected to pin PB5 ON when the button is pressed and OFF when it's not. **Crucially, you would need to ensure that PB5 is configured as an output in `DDRB` elsewhere in your code (or at the beginning of `main`) for this part to function correctly.** For example: `DDRB |= (1 << PB5);`.

### Practice Task

1.  **Objective:** Modify the example code to control an LED (e.g., on PB0) such that it blinks at a rate of 1 Hz (once per second) *only when a button connected to PD3 is pressed*.
2.  **Setup:**
    *   Connect an LED through a current-limiting resistor to pin PB0.
    *   Connect a pushbutton to pin PD3. Ensure the other end of the button is connected to ground.
3.  **Your Code Modifications:**
    *   Configure PD3 as an input with the pull-up resistor enabled.
    *   Configure PB0 as an output.
    *   Implement the blinking logic, but only execute the blinking actions if the button on PD3 is detected as pressed.
    *   You will need to manage the timing for blinking, potentially by counting loop iterations or using timers (though for this basic task, simple loop counting or delays are acceptable).

## Self-Check Questions

1.  What are the two primary registers used to configure and read digital input pins on an AVR microcontroller?
2.  What value do you write to a bit in the `DDRx` register to configure the corresponding pin as an input?
3.  When using an external pushbutton that connects an input pin to ground when pressed, why is it essential to enable the internal pull-up resistor?
4.  If you read a `1` from a specific bit in the `PINx` register, does it mean the corresponding pin is HIGH or LOW?
5.  What is the difference between reading from `PORTx` and reading from `PINx`? When would you use each?

## Supports

- [[reading-digital-inputs|Reading Digital Inputs]]
