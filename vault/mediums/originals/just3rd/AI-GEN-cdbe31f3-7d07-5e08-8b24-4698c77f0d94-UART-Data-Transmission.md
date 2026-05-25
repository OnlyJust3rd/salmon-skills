---
type: medium
title: "UART Data Transmission: Sending Data Serially with AVR C"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[uart-data-transmission|uart-data-transmission]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-programming/avr-communication-programming/avr-communication-programming|avr-communication-programming]]"
learning-time-in-minutes: 5
---
# UART Data Transmission: Sending Data Serially with AVR C

This lesson focuses on a fundamental aspect of AVR communication programming: sending data serially using the Universal Asynchronous Receiver/Transmitter (UART) protocol. By the end of this lesson, you will be able to apply your knowledge of C programming to write code that transmits data from an AVR microcontroller to an external device.

## What is UART Data Transmission?

UART is a hardware communication protocol that allows microcontrollers to send and receive data serially, one bit at a time, over a single wire. It's a common and relatively simple way to communicate with devices like computers (via a USB-to-serial converter), other microcontrollers, or sensors that have a serial interface.

When transmitting data via UART, the microcontroller sends a stream of bits representing a character or a byte. This stream is framed with special bits: a start bit to signal the beginning of data, and one or more stop bits to signal the end. Data bits are transmitted in a defined order, often with an optional parity bit for error checking.

## Practical Example: Sending a Sensor Reading

Imagine you have an AVR microcontroller connected to a temperature sensor. You want to periodically read the temperature and send this reading to a computer for display. The computer is connected to the AVR via a USB-to-serial adapter, which emulates a UART port.

Here's how you might implement the transmission part:

### Key Registers and Concepts

To send data using UART on an AVR microcontroller, you'll primarily interact with the following hardware registers:

*   **UDR (UART Data Register):** This is the register you write data to for transmission. When you write a byte to UDR, the UART hardware automatically starts transmitting it.
*   **UCSRA (UART Control and Status Register A):** This register contains status flags and control bits. The most important flag for transmission is **UDRE (UART Data Register Empty)**. This flag is set when the UDR is empty and ready to accept new data for transmission.
*   **UCSRB (UART Control and Status Register B):** This register controls the UART's transmit and receive enable bits. For transmission, you'll need to enable the **TXEN (Transmit Enable)** bit.
*   **UBRRH & UBRRL (UART Baud Rate Registers High/Low):** These registers are used to configure the baud rate, which is the speed at which data is transmitted (e.g., 9600 bits per second). Setting the correct baud rate is crucial for successful communication.

### C Code Implementation (Simplified)

This example assumes you've already configured the UART module for a specific baud rate. The focus here is on the transmission function.

```c
#include <avr/io.h>
#include <util/delay.h> // For delays if needed

// Function to initialize UART (example, baud rate calculation not shown)
void uart_init(unsigned int ubrr) {
    // Set baud rate
    UBRRH = (unsigned char)(ubrr>>8);
    UBRRL = (unsigned char)ubrr;

    // Enable transmitter
    UCSRB |= (1 << TXEN);

    // Set frame format: 8 data bits, 2 stop bits, no parity (example)
    // You'd typically set UCSZ bits in UCSRC register here
    // For simplicity, assuming 8N1 or 8N2 configured elsewhere.
}

// Function to send a single character
void uart_transmit_char(char data) {
    // Wait for the buffer to be empty
    while (!(UCSRA & (1 << UDRE))) {
        // Do nothing, just loop and check
    }
    // Put data into buffer, sends the data
    UDR = data;
}

// Function to send a string
void uart_transmit_string(const char* str) {
    while (*str != '\0') {
        uart_transmit_char(*str);
        str++;
    }
}

int main(void) {
    // Initialize UART with a specific baud rate (e.g., 9600)
    // The ubrr value depends on your AVR clock frequency.
    // For 16MHz clock and 9600 baud: ubrr = 103
    uart_init(103);

    const char* message = "Temperature: 25 C\r\n"; // Example message

    while (1) {
        // In a real scenario, you would read the sensor here
        // For this example, we send a static message.

        uart_transmit_string(message);

        // Wait for a bit before sending again
        _delay_ms(1000);
    }

    return 0;
}
```

#### How it Works:

1.  **`uart_init()`**: Sets up the UART hardware, including the baud rate and enabling the transmitter (`TXEN`).
2.  **`uart_transmit_char(char data)`**: This is the core transmission function for a single character.
    *   The `while (!(UCSRA & (1 << UDRE)))` loop is crucial. It continuously checks the `UDRE` flag in `UCSRA`. As long as `UDRE` is 0 (meaning the UART data buffer is *not* empty), the loop continues. This ensures that you don't overwrite data that's still being transmitted.
    *   Once `UDRE` becomes 1 (buffer is empty), the loop exits, and `UDR = data;` writes the character to the data register. The UART hardware then takes over and sends this character out serially.
3.  **`uart_transmit_string(const char* str)`**: This function iterates through a null-terminated string, calling `uart_transmit_char()` for each character.
4.  **`main()`**: Initializes the UART and then enters an infinite loop, continuously sending the `message` string.

## Practice Task

1.  **Setup:** Ensure you have an AVR development environment set up (e.g., Atmel Studio, PlatformIO) with a board like an Arduino Uno (which uses an ATmega328P). Connect your AVR board to your computer via a USB-to-serial adapter or directly if your board has one built-in.
2.  **Code Modification:**
    *   Take the provided `uart_transmit_string` function and integrate it into a new AVR C project.
    *   Modify the `main` function to transmit a string that includes your name and the current hour (you can hardcode it for now). For example: "Hello, [Your Name]! The hour is 14."
    *   Use a standard baud rate like 9600. You'll need to calculate the appropriate `UBRR` value for your AVR's clock frequency. (For an Arduino Uno running at 16MHz, `UBRR = 103` for 9600 baud).
3.  **Testing:**
    *   Compile and upload the code to your AVR microcontroller.
    *   Open a serial terminal program on your computer (e.g., PuTTY, Tera Term, the Arduino Serial Monitor).
    *   Configure the serial terminal to match the baud rate you set in your code (e.g., 9600 baud, 8 data bits, no parity, 1 stop bit).
    *   You should see your name and the hardcoded hour appearing in the serial terminal.

## Self-Check Questions

1.  What is the primary purpose of the `UDRE` flag in the `UCSRA` register when transmitting data via UART?
2.  Why is it important to wait for the `UDRE` flag to be set before writing data to the `UDR` register?
3.  If you want to send the character 'A' using the `uart_transmit_char` function, what value would you pass as the argument?
4.  What would happen if the baud rate configured on the AVR microcontroller does not match the baud rate configured in the serial terminal on your computer?
5.  Describe one scenario where sending data serially via UART would be a suitable communication method.

## Supports

- [[uart-data-transmission|UART Data Transmission]]
