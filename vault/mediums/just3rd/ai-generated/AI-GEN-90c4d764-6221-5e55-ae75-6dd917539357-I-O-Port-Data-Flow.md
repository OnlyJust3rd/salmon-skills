---
type: "medium"
title: "AVR Microcontroller: I/O Port Data Flow"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/avr-microcontroller-architecture/microskills/i-o-port-data-flow|I/O Port Data Flow]]"
---
# AVR Microcontroller: I/O Port Data Flow

This lesson explores how data moves between the AVR microcontroller's Central Processing Unit (CPU) and its Input/Output (I/O) ports. Understanding this data flow is crucial for interacting with external components like LEDs, buttons, sensors, and actuators.

## Understanding I/O Port Data Flow

AVR microcontrollers use dedicated I/O ports to communicate with the outside world. These ports are essentially groups of pins that can be configured as either inputs or outputs. The CPU orchestrates this communication by reading data from input pins or writing data to output pins.

The core idea behind I/O port data flow is straightforward:

*   **Writing to an Output Port:** When the CPU needs to send a signal or data to an external device (e.g., turn on an LED), it writes a specific value to a designated I/O port register. This value then appears on the physical pins configured as outputs for that port.
*   **Reading from an Input Port:** When the CPU needs to receive information from an external device (e.g., check if a button is pressed), it reads the current state of the input pins associated with a specific I/O port. This state is reflected in the corresponding I/O port register.

The AVR architecture provides special registers for each I/O port, typically named `PORTx`, `DDRx`, and `PINx`, where `x` represents the port number (e.g., PORTA, DDRB, PINC).

*   **`PORTx` Register:** This register controls the *output* value of the pins. When a pin is configured as an output, writing a '1' to the corresponding bit in `PORTx` will make the pin high (e.g., +5V or +3.3V), and writing a '0' will make it low (e.g., 0V). It can also be used to set the initial state of an output pin when it's configured as an output.
*   **`DDRx` (Data Direction Register) Register:** This register determines the *direction* of each pin on the port. If a bit in `DDRx` is set to '1', the corresponding pin is configured as an *output*. If it's set to '0', the corresponding pin is configured as an *input*.
*   **`PINx` Register:** This register is used to *read* the current logic level of the pins on a port. This is only relevant for pins configured as inputs. Reading from `PINx` will give you the actual voltage level on the pin at that moment.

### The Data Flow in Action

1.  **Configuration:** Before data can flow, the CPU must configure the I/O pins. This involves writing to the `DDRx` register to set each pin as either input or output.
2.  **Output Operation:**
    *   The CPU writes a byte (or a specific bit) to the `PORTx` register.
    *   For pins configured as outputs (where the corresponding bit in `DDRx` is '1'), the value written to `PORTx` is driven onto the physical pins.
3.  **Input Operation:**
    *   The CPU reads the byte (or a specific bit) from the `PINx` register.
    *   For pins configured as inputs (where the corresponding bit in `DDRx` is '0'), the value read from `PINx` reflects the external electrical state of those pins.

It's important to note that you **always configure the direction using `DDRx` first**, and then you **write to `PORTx` for output**, or **read from `PINx` for input**.

## Practical Example: Controlling an LED and Reading a Button

Let's consider a common scenario: controlling an LED with a button.

*   **Goal:** When a button is pressed, turn on an LED. When the button is released, turn off the LED.
*   **Hardware:**
    *   An AVR microcontroller (e.g., ATmega328P found on Arduino boards).
    *   An LED connected to an output pin (e.g., digital pin 7).
    *   A push button connected to an input pin (e.g., digital pin 2). A pull-up resistor is usually used for buttons so the input pin reads HIGH when the button is not pressed and LOW when it is pressed.

*   **Conceptual Code (C language pseudocode):**

```c
// Assume we are using PORTB for the LED and PORTD for the Button
// And specific pins: PB7 for LED, PD2 for Button

// --- Initialization ---
// Configure pin 7 (PB7) as an output for the LED
DDRB |= (1 << PB7);

// Configure pin 2 (PD2) as an input for the Button
DDRD &= ~(1 << PD2);

// --- Main Loop ---
while (1) {
    // Check the state of the button (pin 2 on PORTD)
    if (PIND & (1 << PD2)) {
        // Button is NOT pressed (input pin is HIGH due to pull-up)
        // Turn OFF the LED (set PB7 LOW)
        PORTB &= ~(1 << PB7);
    } else {
        // Button IS pressed (input pin is LOW)
        // Turn ON the LED (set PB7 HIGH)
        PORTB |= (1 << PB7);
    }
}
```

**Explanation of the Pseudocode:**

1.  **`DDRB |= (1 << PB7);`**: This line configures digital pin 7 of Port B as an output.
    *   `(1 << PB7)` creates a binary value with a '1' at the position corresponding to `PB7` and '0's elsewhere.
    *   The `|=` (bitwise OR assignment) operator sets that specific bit in `DDRB` to '1' without affecting other bits.
2.  **`DDRD &= ~(1 << PD2);`**: This line configures digital pin 2 of Port D as an input.
    *   `(1 << PD2)` creates a mask with a '1' at the `PD2` position.
    *   `~(1 << PD2)` inverts this mask, creating a value with '0' at the `PD2` position and '1's everywhere else.
    *   The `&=` (bitwise AND assignment) operator sets the `PD2` bit in `DDRD` to '0' (making it an input) while leaving other bits unchanged.
3.  **`if (PIND & (1 << PD2))`**: This checks the state of the button.
    *   `PIND` reads the current state of Port D.
    *   `(1 << PD2)` creates a mask for pin 2.
    *   The `&` (bitwise AND) operator checks if the `PD2` bit in `PIND` is '1'. If it is, the expression evaluates to true (button not pressed).
4.  **`PORTB &= ~(1 << PB7);`**: This turns off the LED by setting pin 7 of Port B low.
5.  **`PORTB |= (1 << PB7);`**: This turns on the LED by setting pin 7 of Port B high.

## Practice Task

Imagine you have an AVR microcontroller and you want to:

1.  Configure Port C as an output port.
2.  Write the value `0b10101010` to Port C.
3.  Configure Port A as an input port.
4.  Read the value from Port A and store it in a variable called `input_data`.

Write down the C-style pseudocode to achieve this. Assume Port C pins are referred to as `PC0` through `PC7` and Port A pins as `PA0` through `PA7`.

## Self-Check Questions

1.  What is the purpose of the `DDRx` register?
2.  When configuring a pin as an output, do you typically write to the `PORTx` or `PINx` register to set its initial state?
3.  If a pin is configured as an input, which register would you read from to determine its current electrical state?
4.  Explain the difference between `PORTx |= (1 << PINSOMETHING);` and `PORTx &= ~(1 << PINSOMETHING);` when `PINSOMETHING` is an output pin.

## Supports

- [[skills/hardware-embedded/electronics-embedded/avr-microcontroller-architecture/microskills/i-o-port-data-flow|I/O Port Data Flow]]
