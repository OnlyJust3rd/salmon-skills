---
type: medium
title: Interrupt-Driven Communication
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[interrupt-driven-communication|interrupt-driven-communication]]"
learning-time-in-minutes: 4
---
# Interrupt-Driven Communication

In AVR microcontroller programming, communication often involves sending and receiving data. While you could continuously poll (check repeatedly) if data is available, this is inefficient. **Interrupt-driven communication** is a more efficient approach where the microcontroller is alerted by a hardware event (like receiving a byte of data) and then handles that event without constantly checking. This allows the main program to perform other tasks while waiting for communication events.

## How Interrupts Work for Communication

When a communication peripheral (like UART, SPI, or I2C) encounters a significant event – for example, receiving a complete byte of data, or finishing sending a byte – it can trigger an interrupt.

1.  **Interrupt Request (IRQ):** The communication peripheral generates a signal to the microcontroller's interrupt controller.
2.  **Interrupt Controller:** The controller acknowledges the request and, if interrupts are enabled, pauses the current program execution.
3.  **Interrupt Service Routine (ISR):** The microcontroller jumps to a pre-defined function called an Interrupt Service Routine (ISR). This is where you write the code to handle the specific communication event.
4.  **Event Handling:** Inside the ISR, you'll typically read the received data, update a buffer, or manage the next transmission.
5.  **Return:** Once the ISR is finished, the microcontroller returns to where it was interrupted, resuming its previous tasks.

This method significantly improves efficiency because the CPU isn't "wasting" time polling. It only acts when there's actual communication data to process.

## Practical Scenario: Receiving Data via UART with Interrupts

Imagine you have an AVR microcontroller connected to a sensor that sends temperature readings over UART. You want your microcontroller to read these readings and display them, but also be able to blink an LED at a regular interval.

Without interrupts, you'd have a loop like this:

```c
while (1) {
    if (uart_data_is_ready()) {
        temperature = uart_read_byte();
        // Process temperature
    }
    // Blink LED logic here - might be delayed by UART polling
}
```

This is inefficient because `uart_data_is_ready()` would be checked constantly, even when no data is arriving.

With interrupts, the UART receiver hardware will signal the microcontroller when a byte is ready. Your code would look something like this:

```c
#include <avr/io.h>
#include <avr/interrupt.h>
#include <string.h> // For memset

volatile unsigned char received_data[32]; // Buffer to store received data
volatile unsigned int data_index = 0;
volatile uint8_t new_data_flag = 0;

// UART Receive Complete Interrupt Service Routine
ISR(USART_RXC_vect) {
    unsigned char received_byte = UDR0; // Read the received byte from the buffer

    if (data_index < sizeof(received_data) - 1) {
        received_data[data_index++] = received_byte;
        if (received_byte == '\n') { // Assuming newline terminates a message
            received_data[data_index] = '\0'; // Null-terminate the string
            new_data_flag = 1; // Set flag to indicate new data is ready
            data_index = 0; // Reset index for next message
        }
    } else {
        // Buffer overflow handling (optional, but good practice)
        data_index = 0; // Reset buffer if overflow
    }
}

void uart_init_interrupt(uint32_t baudrate) {
    // Set baud rate
    uint16_t ubrr = F_CPU / 16 / baudrate - 1;
    UBRR0H = (unsigned char)(ubrr >> 8);
    UBRR0L = (unsigned char)ubrr;

    // Enable receiver and transmitter
    UCSR0B = (1 << RXEN0) | (1 << TXEN0) | (1 << RXCIE0); // Enable RX, TX, and RX Complete Interrupt

    // Set frame format: 8 data bits, 2 stop bits
    UCSR0C = (0 << USBS0) | (3 << UCSZ00); // 8 data bits (UCSZ01=1, UCSZ00=1)
}

int main(void) {
    // Initialize LED pin (example)
    DDRB |= (1 << PB5); // Set PB5 (built-in LED on many AVRs) as output

    uart_init_interrupt(9600); // Initialize UART with interrupt support

    sei(); // Enable global interrupts

    while (1) {
        // Main program tasks can run here, like blinking an LED
        PORTB ^= (1 << PB5); // Toggle LED
        _delay_ms(500);     // Delay for blinking

        // Check if new data has arrived from the interrupt
        if (new_data_flag) {
            new_data_flag = 0; // Reset the flag
            // Process the received_data here (e.g., parse temperature)
            // For this example, let's just print it back (echo)
            // You would normally parse the temperature reading
            printf("Received: %s\n", received_data); // Assumes you have a stdio setup
        }
    }
    return 0;
}
```

**Explanation of the C Code:**

*   `ISR(USART_RXC_vect)`: This is the Interrupt Service Routine for the UART Receive Complete event. When the UART hardware finishes receiving a byte, this function is automatically called.
*   `UDR0`: This is the UART I/O Data Register. Reading from `UDR0` retrieves the received byte.
*   `volatile`: The `volatile` keyword is crucial for variables accessed within ISRs and the main loop. It tells the compiler that the variable's value can change unexpectedly (by the interrupt), preventing the compiler from optimizing away reads or writes that it might otherwise assume are constant.
*   `received_data`, `data_index`, `new_data_flag`: These are used to buffer the incoming data and signal the main loop that data is available.
*   `UCSR0B = ... | (1 << RXCIE0)`: This line in `uart_init_interrupt` specifically enables the Receive Complete Interrupt (RXCIE0).
*   `sei()`: This function (Set Interrupts) globally enables all interrupts on the microcontroller. Without this, even if individual interrupts are enabled (like `RXCIE0`), they won't be serviced.
*   The `while(1)` loop in `main()` now primarily handles the LED blinking. It only checks `new_data_flag` periodically, and when set, processes the data received by the ISR.

## Practice Task

Modify the provided C code example. Instead of echoing the received data, assume the sensor sends a single byte representing a command: '1' to turn an LED ON, and '0' to turn it OFF. Use the same interrupt-driven UART setup to receive these commands and control the built-in LED (PB5).

## Self-Check Questions

1.  What is the primary advantage of using interrupt-driven communication over polling?
2.  Why is the `volatile` keyword important for variables shared between an ISR and the main program loop?
3.  Which bit in the `UCSR0B` register needs to be set to enable the UART receive complete interrupt?
4.  What is the purpose of the `sei()` function?
5.  Describe a situation where a buffer overflow might occur in the provided `ISR(USART_RXC_vect)` and how the current code attempts to mitigate it.

## Supports

- [[interrupt-driven-communication|Interrupt-Driven Communication]]
