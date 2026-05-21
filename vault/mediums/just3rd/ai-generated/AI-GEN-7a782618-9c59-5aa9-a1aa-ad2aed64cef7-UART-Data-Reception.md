---
type: "medium"
title: "UART Data Reception"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-communication-programming/microskills/uart-data-reception|uart-data-reception]]"
---
# UART Data Reception

This lesson focuses on a fundamental aspect of AVR microcontroller communication: receiving data serially using the Universal Asynchronous Receiver/Transmitter (UART) peripheral. Implementing this skill allows your AVR to listen for and process information sent from other devices.

## Short Explanation

The UART peripheral on an AVR microcontroller enables two-way serial communication. When data is transmitted serially, it's broken down into individual bits, sent one after another. The receiver on the other end must be configured to understand this stream of bits. For data reception, the AVR needs to:

1.  **Enable the UART Receiver:** Turn on the reception circuitry within the UART module.
2.  **Configure Data Format:** Set the correct baud rate (speed of transmission), number of data bits, parity bit (for error checking), and stop bits (to signal the end of a byte). These must match the transmitter's settings.
3.  **Wait for Data:** Monitor a status flag that indicates when a byte has been fully received.
4.  **Read Received Data:** Once data is available, read it from a specific register.

The AVR microcontroller often uses interrupts to signal when data is ready, or you can poll a status register. For this lesson, we'll focus on polling.

## Practical Example/Scenario

Imagine you have an AVR microcontroller connected to a GPS module. The GPS module sends its location data via UART at a standard baud rate. Your AVR needs to receive this data to display the coordinates or log them.

### Core Idea: Polling for Received Data

The most straightforward way to receive data is by continuously checking a status flag. The UART receiver has a register (often `UCSRA` or `UCSR0A` for USART registers in AVR) that contains bits indicating various states. The Data Received Complete flag (`RXC` or `RXC0`) is crucial here. When this flag is set, it means a full byte has arrived and is ready to be read from the UART Receive Data Buffer Register (often `UDR` or `UDR0`).

### Code Example (ATmega328P)

Let's assume you are using an ATmega328P (common in Arduino Uno) and need to receive a single character sent from a computer via a USB-to-serial converter.

**Assumptions:**
*   Baud rate: 9600
*   Data bits: 8
*   Parity: None
*   Stop bits: 1

```c
#include <avr/io.h>
#include <util/delay.h>

// Function to initialize UART for reception
void uart_init() {
    // Set baud rate: 9600 bps at 16MHz clock
    // UBRRL = 103 for 9600 @ 16MHz (refer to datasheet for calculations)
    UBRR0H = 0;
    UBRR0L = 103;

    // Enable receiver
    UCSR0B |= (1 << RXEN0);

    // Set frame format: 8 data bits, 1 stop bit
    // UCSZ01:0 = 011 for 8 data bits
    UCSR0C = (1 << UCSZ01) | (1 << UCSZ00);
}

// Function to check if data is available
unsigned char uart_data_available() {
    return (UCSR0A & (1 << RXC0));
}

// Function to read received data
unsigned char uart_read_byte() {
    // Wait for data to be received
    while (!uart_data_available());

    // Get data from buffer
    return UDR0;
}

int main(void) {
    // Initialize UART
    uart_init();

    // Initialize DDR for an LED (optional, for feedback)
    DDRB |= (1 << PB5); // Set PB5 (LED on Arduino Uno) as output

    unsigned char received_char;

    while (1) {
        // Check if data is available
        if (uart_data_available()) {
            received_char = uart_read_byte();

            // Example: If 'A' is received, turn on the LED
            if (received_char == 'A') {
                PORTB |= (1 << PB5); // Turn LED on
            } else {
                PORTB &= ~(1 << PB5); // Turn LED off
            }
        }
        // Small delay to prevent busy-waiting too aggressively if no data comes
        _delay_ms(10);
    }
    return 0;
}
```

### How it Works:

1.  **`uart_init()`**:
    *   `UBRR0H`, `UBRR0L`: These registers are set to calculate the desired baud rate. The exact values depend on the AVR's clock frequency and the target baud rate. The formula is typically `UBRR = (F_CPU / (16 * BAUD)) - 1`. For 16MHz and 9600 baud, this yields 103.
    *   `UCSR0B |= (1 << RXEN0);`: This line enables the UART receiver. `RXEN0` is a bit in the `UCSR0B` register.
    *   `UCSR0C = (1 << UCSZ01) | (1 << UCSZ00);`: This configures the data frame. Setting `UCSZ01` and `UCSZ00` to `1` (binary `11`) selects 8 data bits.

2.  **`uart_data_available()`**:
    *   `return (UCSR0A & (1 << RXC0));`: This function checks the `RXC0` bit in the `UCSR0A` register. If `RXC0` is `1`, it means a byte has been received. The bitwise AND operation `&` isolates this specific bit. The function returns non-zero if the bit is set (data available) and zero otherwise.

3.  **`uart_read_byte()`**:
    *   `while (!uart_data_available());`: This loop continuously checks if data is available. It will block (wait) here until `uart_data_available()` returns true.
    *   `return UDR0;`: Once data is available, this line reads the byte from the `UDR0` register. The `UDR0` register holds the received data. Reading from it automatically clears the `RXC0` flag.

4.  **`main()`**:
    *   The `main` function calls `uart_init()` once.
    *   The `while(1)` loop continuously checks for incoming data using `uart_data_available()`.
    *   If data is received, it's read into `received_char`.
    *   An `if` statement checks if the received character is 'A'. If it is, an LED on pin PB5 is turned on; otherwise, it's turned off. This provides a visual indication that the AVR is receiving and processing data.

## Practice Task

1.  **Modify the Example:** Adapt the provided `main` function to turn on an LED if the received character is 'B', and turn it off for any other character.
2.  **Echo Received Data:** Write a new function, `uart_send_byte(unsigned char data)`, which transmits a single byte. Then, modify the `main` function to *echo* every character it receives back to the sender. This means if you send 'H', the AVR should send 'H' back.

    ```c
    // You'll need to implement this function (similar structure to transmission init)
    void uart_send_byte(unsigned char data) {
        // Wait for transmit buffer to be empty
        while (!(UCSR0A & (1 << UDRE0)));
        // Put data into buffer, sends the data
        UDR0 = data;
    }
    ```

## Self-Check Questions

1.  What is the primary purpose of the `RXEN0` bit?
2.  Which register holds the received data, and what happens when you read from it?
3.  Explain the role of the `RXC0` flag.
4.  Why is it important for the baud rate, data bits, parity, and stop bits to match between the transmitter and receiver?
5.  What is a disadvantage of the polling method for data reception? (Hint: Think about what else the microcontroller could be doing).

## Supports

- [[skills/programming/programming-languages/avr-communication-programming/microskills/uart-data-reception|UART Data Reception]]
