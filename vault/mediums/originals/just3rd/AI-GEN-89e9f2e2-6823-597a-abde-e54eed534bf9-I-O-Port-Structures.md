---
type: "medium"
title: "AVR Microcontroller I/O Ports: The Gateway to the Outside World"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/avr-microcontroller-architecture/microskills/i-o-port-structures|i-o-port-structures]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/avr-microcontroller-architecture/avr-microcontroller-architecture|avr-microcontroller-architecture]]"
learning-time-in-minutes: 5
---
# AVR Microcontroller I/O Ports: The Gateway to the Outside World

Welcome to this lesson on AVR microcontroller I/O ports. As we explore the architecture of AVR microcontrollers, understanding how they interact with the external environment is crucial. I/O ports are the primary mechanism for this interaction, allowing the microcontroller to receive input from sensors and send output to actuators or display devices. This lesson focuses on the fundamental structure and configuration of these vital components.

### What are I/O Ports?

In an AVR microcontroller, an I/O port is a collection of pins that can be individually configured as either an input or an output. Think of these pins as tiny digital bridges connecting the internal world of the microcontroller to the external world.

Each I/O port is typically associated with three special registers:

*   **DDRx (Data Direction Register x):** This register controls the direction of each pin within the port. If a bit in the DDRx register is set to `1`, the corresponding pin is configured as an **output**. If the bit is `0`, the pin is configured as an **input**.
*   **PORTx (Port Data Register x):** This register has a dual purpose.
    *   When the corresponding pin is configured as an **output** (DDRx bit is `1`), writing a `1` to a bit in the PORTx register drives the pin HIGH (e.g., 5V or 3.3V). Writing a `0` drives the pin LOW (0V).
    *   When the corresponding pin is configured as an **input** (DDRx bit is `0`), writing a `1` to a bit in the PORTx register enables the **internal pull-up resistor** on that pin. Writing `0` disables the pull-up resistor.
*   **PINx (Port Input Pins Register x):** This register is read-only and reflects the *actual* logic level of the pins configured as inputs. If a pin is connected to an external HIGH voltage, reading a `1` from the corresponding PINx bit is expected. If it's LOW, you'll read a `0`.

**Note:** The 'x' in DDRx, PORTx, and PINx represents the specific port letter (e.g., A, B, C, D). For instance, on an ATmega328P (common in Arduino), you'll find ports like PORTB, DDRB, and PINB.

### Understanding Input and Output Configurations

Let's break down how these registers work in practice.

#### Configuring a Pin as an Output

To make a pin on a port act as an output, you need to:

1.  Set the corresponding bit in the DDRx register to `1`.
2.  Write a `0` or `1` to the corresponding bit in the PORTx register to set the output level to LOW or HIGH, respectively.

**Example:** To configure pin PB0 (Port B, pin 0) as an output and set it to HIGH:

```c
// Assume we are using AVR-GCC C
DDRB |= (1 << PB0);   // Set the PB0 bit in DDRB to 1 (configure as output)
PORTB |= (1 << PB0);  // Set the PB0 bit in PORTB to 1 (drive pin HIGH)
```

#### Configuring a Pin as an Input

To make a pin on a port act as an input, you need to:

1.  Set the corresponding bit in the DDRx register to `0`.
2.  You can then choose to enable or disable the internal pull-up resistor by writing `1` or `0` to the corresponding bit in the PORTx register. Enabling the pull-up is common when you expect the input to be actively driven by an external device that can pull the line LOW, but might otherwise leave the pin floating.

**Example:** To configure pin PC1 (Port C, pin 1) as an input and enable its internal pull-up resistor:

```c
// Assume we are using AVR-GCC C
DDRC &= ~(1 << PC1);  // Set the PC1 bit in DDRC to 0 (configure as input)
PORTC |= (1 << PC1);  // Set the PC1 bit in PORTC to 1 (enable pull-up resistor)
```

To read the state of this input pin:

```c
// Assume we are using AVR-GCC C
if (PINC & (1 << PC1)) {
  // Pin PC1 is HIGH (pulled up or driven HIGH externally)
} else {
  // Pin PC1 is LOW (pulled down or driven LOW externally)
}
```

### Practical Scenario: Controlling an LED with a Button

Imagine you want to build a simple circuit where pressing a button turns on an LED.

*   **Output:** An LED will be connected to an output pin.
*   **Input:** A push button will be connected to an input pin.

Let's say:
*   The LED is connected to **PORTD, pin 5 (PD5)**.
*   The button is connected to **PORTD, pin 2 (PD2)**. The button is wired such that when pressed, it connects PD2 to ground. When not pressed, PD2 is left open (we'll use a pull-up).

**Configuration Steps:**

1.  **Configure PD5 as output:**
    *   `DDRD |= (1 << PD5);`
2.  **Configure PD2 as input with pull-up:**
    *   `DDRD &= ~(1 << PD2);` // Set PD2 direction to input
    *   `PORTD |= (1 << PD2);` // Enable pull-up on PD2
3.  **In your main loop:**
    *   Read the state of PD2 using the PINx register.
    *   If PD2 is LOW (button pressed), turn the LED ON by setting PD5 HIGH.
    *   If PD2 is HIGH (button not pressed), turn the LED OFF by setting PD5 LOW.

```c
#include <avr/io.h>

int main(void) {
    // Configure PD5 as output for the LED
    DDRD |= (1 << PD5);

    // Configure PD2 as input for the button with internal pull-up
    DDRD &= ~(1 << PD2); // Set PD2 direction to input
    PORTD |= (1 << PD2); // Enable pull-up on PD2

    while (1) {
        // Check if the button (PD2) is pressed (logic LOW)
        if (!(PIND & (1 << PD2))) {
            // Button is pressed, turn LED ON (set PD5 HIGH)
            PORTD |= (1 << PD5);
        } else {
            // Button is not pressed, turn LED OFF (set PD5 LOW)
            PORTD &= ~(1 << PD5);
        }
    }
    return 0;
}
```

### Practice Task

Identify the registers and bit manipulation needed to perform the following:

1.  Configure pin PB3 as an **output** and set it to **LOW**.
2.  Configure pin PC5 as an **input** and **disable** its internal pull-up resistor.
3.  Read the state of pin PA0 and store it in a variable named `buttonState`.

### Self-Check Questions

1.  What is the purpose of the DDRx register?
2.  How do you configure a pin as an input?
3.  What is the role of the PORTx register when a pin is configured as an input?
4.  If you want to read the current logic level of a pin configured as an input, which register do you read from?
5.  Describe the two conditions under which a pin configured as an input would read as HIGH.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/avr-microcontroller-architecture/microskills/i-o-port-structures|I/O Port Structures]]
