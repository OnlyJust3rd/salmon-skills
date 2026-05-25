---
type: medium
title: "I/O Port Configuration Registers: Controlling Your AVR's Pins"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[i-o-port-configuration-registers|i-o-port-configuration-registers]]"
learning-time-in-minutes: 5
---
# I/O Port Configuration Registers: Controlling Your AVR's Pins

This lesson dives into the fundamental registers that allow you to control the input and output behavior of your AVR microcontroller's general-purpose I/O (GPIO) pins. Understanding these registers is crucial for interacting with the external world, whether you're blinking an LED or reading a sensor.

## What are I/O Port Configuration Registers?

AVR microcontrollers have dedicated ports, each containing multiple I/O pins. These pins can be configured as either inputs, allowing the microcontroller to read external signals, or outputs, enabling the microcontroller to send signals to external devices. The behavior of each pin on a port is determined by specific configuration registers.

For each I/O port (e.g., PORTA, PORTB, PORTC, etc.), there are typically three main registers involved:

1.  **DDRx (Data Direction Register x):** This register controls the direction of each pin on port 'x'. By setting a bit in the DDRx register to a '1', the corresponding pin is configured as an output. Setting it to a '0' configures the pin as an input.
2.  **PORTx (Port Data Register x):** This register has a dual role.
    *   When the corresponding pin is configured as an **output** (DDRx bit is '1'), writing a '1' to a bit in PORTx will set the output pin HIGH (logic 1). Writing a '0' will set the output pin LOW (logic 0).
    *   When the corresponding pin is configured as an **input** (DDRx bit is '0'), writing a '1' to a bit in PORTx will enable the internal pull-up resistor for that pin. Writing a '0' will disable the pull-up resistor.
3.  **PINx (Port Input Pins Register x):** This register is used exclusively for reading the logic level of pins configured as **inputs**. Reading from PINx will give you the current state of the input pin, regardless of whether a pull-up resistor is enabled or not.

Let's use an example to illustrate. Suppose we are working with PORTB on an AVR microcontroller.

### Practical Example: Controlling an LED

Imagine you want to control an LED connected to pin PB0 of your AVR microcontroller. You want to configure PB0 as an output and then turn the LED on and off.

**Scenario:** An LED is connected to pin PB0. When PB0 is HIGH, the LED lights up. When PB0 is LOW, the LED is off.

**Steps:**

1.  **Configure PB0 as an output:** We need to set the corresponding bit in the DDRB register. For pin PB0, this is the least significant bit (bit 0).
    *   To set bit 0 of DDRB to '1', we can perform a bitwise OR operation with the value `0x01` (binary `00000001`).

    ```c
    DDRB |= (1 << PB0); // Configure PB0 as an output
    ```
    *   `PB0` is a predefined macro in AVR-GCC often representing the bit position (e.g., `0`). `(1 << PB0)` creates a value with only bit 0 set to '1'. The `|=` operator performs a bitwise OR, ensuring other bits in DDRB remain unchanged.

2.  **Turn the LED ON (set PB0 HIGH):** Since PB0 is an output, we write to the PORTB register.
    *   To set PB0 HIGH, we set bit 0 of PORTB to '1'.

    ```c
    PORTB |= (1 << PB0); // Set PB0 high to turn LED ON
    ```

3.  **Turn the LED OFF (set PB0 LOW):**
    *   To set PB0 LOW, we clear bit 0 of PORTB to '0'.

    ```c
    PORTB &= ~(1 << PB0); // Clear PB0 low to turn LED OFF
    ```
    *   `~(1 << PB0)` creates a mask with bit 0 as '0' and all other bits as '1'. The `&=` operator performs a bitwise AND, clearing only bit 0 while leaving other bits in PORTB unchanged.

### Using Pull-Up Resistors with Inputs

Now, let's consider configuring a pin as an input. Suppose you have a push button connected to pin PD2. When the button is pressed, it connects PD2 to ground. You want to detect when the button is pressed.

**Scenario:** A push button is connected to PD2. One side of the button is connected to PD2, the other to ground. We want to read the state of the button.

**Steps:**

1.  **Configure PD2 as an input:** Set the corresponding bit in the DDRD register to '0'.
    *   If we don't need a pull-up, we can just ensure the bit is '0'.

    ```c
    DDRD &= ~(1 << PD2); // Configure PD2 as an input
    ```

2.  **Enable the internal pull-up resistor for PD2:** This is crucial for buttons. When the button is *not* pressed, the pull-up resistor will pull the pin HIGH. When the button *is* pressed, it connects the pin to ground, overriding the pull-up and pulling the pin LOW.
    *   We write a '1' to bit 2 of PORTD.

    ```c
    PORTD |= (1 << PD2); // Enable pull-up resistor on PD2
    ```

3.  **Read the state of the button:** We read from the PINx register.
    *   If `PINREG & (1 << PD2)` evaluates to non-zero (true), the pin is HIGH, meaning the button is *not* pressed.
    *   If `PINREG & (1 << PD2)` evaluates to zero (false), the pin is LOW, meaning the button *is* pressed.

    ```c
    if (PIND & (1 << PD2)) {
        // Button is not pressed (PD2 is HIGH)
    } else {
        // Button is pressed (PD2 is LOW)
    }
    ```

### Summary Table

| Register | Bit Set ('1')                       | Bit Clear ('0')                        | Primary Purpose                    |
| :------- | :---------------------------------- | :------------------------------------- | :--------------------------------- |
| **DDRx** | Pin 'x' configured as **Output**    | Pin 'x' configured as **Input**        | Data Direction                     |
| **PORTx**| (Output) Pin 'x' is **HIGH**<br>(Input) Pull-up **Enabled** | (Output) Pin 'x' is **LOW**<br>(Input) Pull-up **Disabled** | Port Data / Pull-up Control        |
| **PINx** | Reads **HIGH** on Input Pin 'x'     | Reads **LOW** on Input Pin 'x'         | Input Pin State Reading            |

### Practice Task

Consider an AVR microcontroller. You have an LED connected to pin PC7 and a switch connected to pin PC2.

1.  Configure PC7 as an output.
2.  Configure PC2 as an input with its internal pull-up resistor enabled.
3.  Write C code snippets (using bitwise operations as shown above) to achieve these configurations.
4.  Write a C code snippet to read the state of the switch connected to PC2.

### Self-Check Questions

1.  What is the function of the DDRx register?
2.  When configuring a pin as an input, what is the purpose of writing to the PORTx register?
3.  If you want to use an external button that connects an input pin to ground when pressed, why is it important to enable the internal pull-up resistor?
4.  Which register do you read from to determine the current logic level of an input pin?
5.  If you want to ensure pin PD5 is an output and is currently LOW, what is the correct combination of DDRD and PORTD settings?

## Supports

- [[i-o-port-configuration-registers|I/O Port Configuration Registers]]
