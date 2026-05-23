---
type: "medium"
title: "UART Baud Rate Registers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/avr-communication-programming/microskills/uart-baud-rate-registers|uart-baud-rate-registers]]"
learning-time-in-minutes: 4
---
# UART Baud Rate Registers

When working with AVR microcontrollers and serial communication, establishing a reliable connection is paramount. One of the most fundamental aspects of serial communication, particularly with UART (Universal Asynchronous Receiver/Transmitter), is setting the correct **baud rate**. The baud rate dictates the speed at which data is transmitted and received. To control this speed on AVR microcontrollers, we need to interact with specific hardware registers. This lesson focuses on identifying these registers responsible for configuring the UART baud rate.

## What are Baud Rate Registers?

The baud rate is the number of signal changes or symbols per second. For UART, this translates to the number of bits transmitted per second. To achieve communication between two devices, they must agree on the same baud rate. On AVR microcontrollers, this synchronization is managed through dedicated hardware registers within the UART peripheral.

The primary registers involved in setting the UART baud rate are:

*   **UBRRnA** and **UBRRnB**: These are the two registers that, when combined, form the **UBRR (USART Baud Rate Register)**. The 'n' in UBRRn typically refers to the specific USART module on the microcontroller (e.g., UBRR0 for USART0, UBRR1 for USART1). The UBRR register holds a calculated value that the microcontroller uses to configure its internal clock divider for the serial transmission.

    *   **UBRRnA**: This is the lower 8 bits of the 16-bit UBRR register.
    *   **UBRRnB**: This is the higher 8 bits of the 16-bit UBRR register.

    The 16-bit value stored in UBRR (formed by concatenating UBRRnH and UBRRmL) determines the baud rate. A larger value in UBRR results in a slower baud rate, while a smaller value results in a faster baud rate.

## How are they Used?

The calculation of the value to be loaded into the UBRR registers is crucial. It depends on the microcontroller's system clock frequency and the desired baud rate. The general formula is:

\[
UBRR = \left( \frac{f_{osc}}{16 \times BaudRate} \right) - 1
\]

Where:
*   `f_osc` is the system clock frequency of the microcontroller (in Hz).
*   `BaudRate` is the desired communication speed (in bits per second).

This formula is for the *normal asynchronous mode*. AVR microcontrollers also offer a *double speed asynchronous mode* which uses a different formula and often provides higher accuracy.

To set the baud rate, you would typically:

1.  Determine your microcontroller's system clock frequency.
2.  Choose your desired baud rate (e.g., 9600, 115200).
3.  Calculate the UBRR value using the appropriate formula.
4.  Load the calculated value into the UBRR registers. For a 16-bit value, the higher byte goes into UBRRnH and the lower byte goes into UBRRnL.

## Practical Scenario

Imagine you are building a system where an AVR microcontroller needs to send sensor readings to a computer for logging. The computer is expecting data at a standard baud rate of 9600 bits per second. Your AVR microcontroller is running at a system clock frequency of 16 MHz.

To establish communication, you must configure the UART module of your AVR to operate at 9600 baud. You'll use the UBRR registers for this.

Let's calculate the UBRR value for normal asynchronous mode:

\[
UBRR = \left( \frac{16,000,000 \text{ Hz}}{16 \times 9600 \text{ bps}} \right) - 1
\]

\[
UBRR = \left( \frac{16,000,000}{153,600} \right) - 1
\]

\[
UBRR \approx 104.1667 - 1
\]

\[
UBRR \approx 103.1667
\]

Since register values must be integers, we round this to the nearest whole number, which is 103.

This 103 is a 16-bit value. In binary, 103 is `0000 0000 0110 0111`.

*   The higher byte (UBRRnH) would be `0000 0000`, which is decimal 0.
*   The lower byte (UBRRnL) would be `0110 0111`, which is decimal 103.

So, in your C code, you would write something like this (assuming you are using `USART0`):

```c
#include <avr/io.h>

void uart_init(unsigned int ubrr) {
    // Set baud rate
    UBRR0H = (unsigned char)(ubrr >> 8); // Load the higher 8 bits into UBRR0H
    UBRR0L = (unsigned char)ubrr;        // Load the lower 8 bits into UBRR0L

    // Enable receiver and transmitter (details in other lessons)
    UCSR0B = (1 << RXEN0) | (1 << TXEN0);

    // Set frame format: 8 data bits, 2 stop bits, no parity (details in other lessons)
    UCSR0C = (0 << USBS0) | (3 << UCSZ00);
}

int main(void) {
    // Initialize UART with calculated UBRR value for 9600 baud at 16MHz
    uart_init(103);

    // ... rest of your program ...

    return 0;
}
```

This `uart_init` function directly manipulates the `UBRR0H` and `UBRR0L` registers to set the desired communication speed.

## Practice Task

Consider an AVR microcontroller running at a system clock of 8 MHz. You need to configure its UART to communicate with another device at a baud rate of 115200 bps.

Calculate the required UBRR value for normal asynchronous mode. Determine the values to be loaded into `UBRR0H` and `UBRR0L`.

## Self-Check Questions

1.  What are the two primary registers used to set the baud rate for AVR UART communication?
2.  What does the value stored in the UBRR register represent?
3.  If the system clock frequency increases, what happens to the UBRR value needed for a specific baud rate (assuming normal asynchronous mode)?
4.  Which register holds the higher 8 bits of the UBRR value, and which holds the lower 8 bits?
5.  What are the potential consequences of mismatching baud rates between two communicating devices?

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/avr-communication-programming/microskills/uart-baud-rate-registers|UART Baud Rate Registers]]
