---
type: "medium"
title: "UART Device Interfacing: Sending and Receiving Data"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/uart-device-interfacing|uart-device-interfacing]]"
learning-time-in-minutes: 4
---
# UART Device Interfacing: Sending and Receiving Data

This lesson focuses on connecting and communicating with devices using the Universal Asynchronous Receiver/Transmitter (UART) protocol, a fundamental skill for interfacing microcontrollers with various peripherals. We'll explore how to send and receive data, understanding the essential components of UART communication.

## What is UART?

UART is a serial communication protocol that allows two devices to exchange data one bit at a time. Unlike parallel communication where multiple bits are sent simultaneously, UART sends data sequentially over a single wire (or a pair for bidirectional communication). It's asynchronous, meaning there's no shared clock signal between the sender and receiver. Instead, they agree on a common communication speed (baud rate) and data format beforehand.

### Key Concepts:

*   **Baud Rate:** The number of signal changes per second, which dictates the speed of data transfer. Common baud rates include 9600, 115200, etc.
*   **Data Bits:** The number of bits that represent the actual data being sent (typically 7 or 8 bits).
*   **Parity Bit (Optional):** A bit used for basic error detection.
*   **Stop Bits:** One or more bits that signify the end of a data frame.

## How UART Works: A Deeper Look

UART communication relies on two main lines:

1.  **TX (Transmit):** The line used by the microcontroller to send data.
2.  **RX (Receive):** The line used by the microcontroller to receive data.

For bidirectional communication, the TX pin of one device is connected to the RX pin of the other, and vice-versa.

### Data Framing:

Data is sent in frames. A typical UART frame includes:

1.  **Start Bit:** A transition from high to low, signaling the beginning of a frame.
2.  **Data Bits:** The actual data payload.
3.  **Parity Bit (Optional):** For error checking.
4.  **Stop Bits:** Indicate the end of the frame.

The receiver synchronizes with the sender upon detecting the start bit and samples the data bits at predefined intervals based on the agreed-upon baud rate.

## Practical Application: Interfacing with a Computer

One of the most common uses of UART is to communicate with a computer via a USB-to-UART converter. This allows you to send commands from your computer to the microcontroller and receive sensor readings or status updates back.

### Hardware Connections:

*   Microcontroller's TX pin connected to the USB-to-UART converter's RX pin.
*   Microcontroller's RX pin connected to the USB-to-UART converter's TX pin.
*   Microcontroller's GND connected to the USB-to-UART converter's GND.

### Software Configuration (AVR Microcontrollers - Conceptual):

On AVR microcontrollers, UART functionality is often managed through dedicated hardware registers. While the exact register names might vary slightly between AVR families, the concepts remain the same.

Here's a conceptual example using AVR-GCC C, illustrating how you might initialize UART and send/receive data:

```c
#include <avr/io.h>
#include <util/delay.h>

// Function to initialize UART
void uart_init(unsigned int ubrr) {
    // Set baud rate
    UBRR0H = (unsigned char)(ubrr >> 8);
    UBRR0L = (unsigned char)ubrr;

    // Enable receiver and transmitter
    UCSR0B = (1 << RXEN0) | (1 << TXEN0);

    // Set frame format: 8 data bits, 2 stop bits
    UCSR0C = (1 << USBS0) | (3 << UCSZ00);
}

// Function to send a byte
void uart_transmit(unsigned char data) {
    // Wait for empty transmit buffer
    while (!(UCSR0A & (1 << UDRE0)));

    // Put data into buffer, sends the data
    UDR0 = data;
}

// Function to receive a byte
unsigned char uart_receive(void) {
    // Wait for data to be received
    while (!(UCSR0A & (1 << RXC0)));

    // Get and return received data from buffer
    return UDR0;
}

int main(void) {
    // Initialize UART with a specific baud rate (e.g., 9600)
    // Formula for UBRR: F_CPU / (16 * BAUD_RATE) - 1
    // For 16MHz CPU and 9600 baud: 16000000 / (16 * 9600) - 1 = 103
    uart_init(103);

    char received_char;

    while (1) {
        // Example: Echo received characters back
        received_char = uart_receive();
        uart_transmit(received_char);

        // You can also send predefined messages
        // uart_transmit('H');
        // uart_transmit('e');
        // uart_transmit('l');
        // uart_transmit('l');
        // uart_transmit('o');
        // uart_transmit('\n');
        // _delay_ms(1000);
    }

    return 0;
}
```

**Explanation:**

*   `uart_init()`: Configures the UART module by setting the baud rate and enabling the receiver and transmitter.
*   `uart_transmit()`: Waits until the transmit buffer is empty and then loads the data byte to be sent.
*   `uart_receive()`: Waits until a byte has been received and then returns it.

You would then use a serial terminal program (like PuTTY, CoolTerm, or the Arduino IDE Serial Monitor) on your computer to connect to the COM port assigned to your USB-to-UART converter and interact with your microcontroller.

## Common Pitfalls:

*   **Incorrect Baud Rate:** Mismatched baud rates between the microcontroller and the receiving device will result in garbled data.
*   **Incorrect Pin Connections:** Swapping TX and RX lines is a very common mistake.
*   **Ground Connection Missing:** A missing ground connection will prevent communication.
*   **Voltage Level Mismatch:** Ensure the voltage levels of the microcontroller and the connected device are compatible. Many USB-to-UART converters operate at 3.3V or 5V.

By mastering UART device interfacing, you unlock a powerful way to communicate with a vast array of sensors, modules, and even other microcontrollers, forming the backbone of many embedded system interactions.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/uart-device-interfacing|UART Device Interfacing]]
