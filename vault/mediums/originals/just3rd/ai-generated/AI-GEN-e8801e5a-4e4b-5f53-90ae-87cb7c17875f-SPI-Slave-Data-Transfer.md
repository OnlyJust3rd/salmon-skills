---
type: medium
title: SPI Slave Data Transfer with AVR Microcontrollers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[spi-slave-data-transfer|spi-slave-data-transfer]]"
learning-time-in-minutes: 6
---
# SPI Slave Data Transfer with AVR Microcontrollers

This lesson focuses on implementing C code for SPI slave communication on AVR microcontrollers. We will learn how to configure the SPI peripheral to act as a slave device, receive data from a master, and transmit data back upon request. This is a crucial step in enabling AVR microcontrollers to communicate effectively within a system.

## Understanding SPI Slave Mode

SPI (Serial Peripheral Interface) is a synchronous serial communication protocol used for short-distance communication, primarily in embedded systems. In an SPI system, there's a master device that controls the clock and initiates data transfer, and one or more slave devices that respond to the master.

As an SPI slave, your AVR microcontroller will:

*   **Listen:** Wait for the master to initiate a communication by asserting the Slave Select (SS) line.
*   **Receive:** Accept data serially shifted in from the master.
*   **Transmit (on request):** Send data serially back to the master when clocked by the master.
*   **React:** Process received data and prepare data for transmission.

The core AVR SPI registers involved are:

*   **SPCR (SPI Control Register):** Configures SPI operation (Master/Slave select, Clock Polarity/Phase, SPI Enable, Data Order).
*   **SPSR (SPI Status Register):** Indicates SPI interrupts and flags (SPI Interrupt Flag, Write Collision Flag).
*   **SPDR (SPI Data Register):** Holds the data to be transmitted or received.

For slave operation, you'll typically set:

*   **SPE (SPI Enable):** Set to `1`.
*   **SPIE (SPI Interrupt Enable):** Often set to `1` to handle data transfer via interrupts.
*   **CPOL (Clock Polarity) and CPHA (Clock Phase):** These must match the master's configuration. Common modes are Mode 0 (CPOL=0, CPHA=0) and Mode 3 (CPOL=1, CPHA=1).
*   **DORD (Data Order):** Usually set to `0` (MSB first) to match common master configurations.

**Crucially, when acting as a slave, the MISO (Master In, Slave Out) pin is configured as an output if the SPI is enabled, and the MOSI (Master Out, Slave In), SCK (Serial Clock), and SS (Slave Select) pins are configured as inputs.** The AVR automatically handles the direction of MISO based on the SPI enablement.

## Practical Scenario: Temperature Sensor Data Acquisition

Imagine your AVR microcontroller needs to act as a slave to a central Raspberry Pi (acting as master). The Raspberry Pi will periodically request temperature readings from the AVR. The AVR reads the temperature from an attached sensor (assume this part is already implemented) and makes it available to the Raspberry Pi via SPI.

In this scenario, the AVR will receive a single byte command from the Raspberry Pi indicating the request for temperature data. Upon receiving this command, the AVR will transmit the 16-bit temperature reading (high byte then low byte) back to the Raspberry Pi.

## Implementing SPI Slave Code

Let's outline the essential C code structure for an AVR microcontroller (e.g., ATmega328P found on Arduino Uno) operating as an SPI slave.

```c
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h> // For potential delays if needed, though not directly in SPI transfer

volatile uint8_t spi_data_received = 0;
volatile uint8_t temperature_high_byte = 0x12; // Example data to transmit
volatile uint8_t temperature_low_byte = 0x34;  // Example data to transmit
volatile uint8_t byte_to_send_index = 0;      // To track which byte to send next

// Function to initialize SPI as slave
void spi_slave_init(void) {
    // Set MISO pin as output (AVR automatically handles direction for SPI)
    // MOSI, SCK, SS pins as input. This is default for input pins.
    // For ATmega328P:
    // MOSI is PB3, SCK is PB5, MISO is PB6, SS is PB4
    DDRB |= (1 << DDB6); // MISO as output
    DDRB &= ~(1 << DDB3); // MOSI as input
    DDRB &= ~(1 << DDB5); // SCK as input
    DDRB &= ~(1 << DDB4); // SS as input (important for slave mode)

    // Enable SPI, enable SPI interrupt, set as Slave
    // SPI Mode 0: CPOL=0, CPHA=0 (matches common master)
    // Data Order: MSB first (DORD=0)
    SPCR = (1 << SPE) | (1 << SPIE) | (0 << DORD);

    // Enable global interrupts
    sei();
}

// SPI Interrupt Service Routine
ISR(SPI_STC_vect) {
    // Data has been received/transmitted
    spi_data_received = SPDR; // Read the received data from SPDR

    // Logic to determine what to send next
    if (byte_to_send_index == 0) {
        SPDR = temperature_high_byte; // Load the high byte to send
        byte_to_send_index++;
    } else { // byte_to_send_index == 1
        SPDR = temperature_low_byte;  // Load the low byte to send
        byte_to_send_index = 0;       // Reset for next master request
    }

    // Process the received data if needed.
    // For this example, we are not acting on received data, just acknowledging it.
    // If the master sent a command, you'd check spi_data_received here.
}

int main(void) {
    // Initialize SPI
    spi_slave_init();

    // Main loop
    while (1) {
        // In a real application, you would read sensor data here
        // and update temperature_high_byte and temperature_low_byte
        // before the master requests it.

        // For example:
        // uint16_t current_temp = read_temperature_sensor();
        // temperature_high_byte = (uint8_t)(current_temp >> 8);
        // temperature_low_byte = (uint8_t)(current_temp & 0xFF);

        // No direct action needed in the main loop for SPI slave,
        // as interrupts handle the communication.
    }
}
```

### How the Code Works:

1.  **`spi_slave_init()`**:
    *   Configures the direction of the necessary pins (MISO as output, others as input).
    *   Enables the SPI module (`SPE`).
    *   Enables SPI interrupts (`SPIE`) so the `SPI_STC_vect` ISR is called upon completion of a byte transfer.
    *   Sets the desired SPI mode and data order.
    *   Enables global interrupts (`sei()`).

2.  **`ISR(SPI_STC_vect)`**:
    *   This interrupt routine is automatically executed whenever a byte transfer is completed (either sending or receiving).
    *   **Reading `SPDR`:** The first action is to read `SPDR`. This clears the SPI interrupt flag and also retrieves the byte that was *received* from the master.
    *   **Loading `SPDR`:** Then, we decide what to send back.
        *   If `byte_to_send_index` is 0, it means this is the first byte being sent back for this master request. We load `temperature_high_byte` into `SPDR`. Writing to `SPDR` initiates the transmission of this byte.
        *   If `byte_to_send_index` is 1, we load `temperature_low_byte` into `SPDR`.
        *   After sending the low byte, we reset `byte_to_send_index` to 0, preparing for the next master request.
    *   **Data Processing:** In a real application, you would analyze the `spi_data_received` byte here to determine what action the master wants (e.g., a command to read a different sensor, or a value to set). For this example, we are simply using it to control which temperature byte to send next.

3.  **`main()`**:
    *   Calls `spi_slave_init()`.
    *   Enters an infinite loop. The main loop is kept simple because the SPI communication is handled asynchronously by the interrupt service routine. You would place your application logic, such as reading sensor data, within this loop, updating the data that will be sent when the master requests it.

### Important Considerations for SPI Slave:

*   **Slave Select (SS) Pin:** The SPI interrupt is only triggered when the SS pin is low (asserted by the master). If the SS pin goes high (de-asserted), the SPI module is effectively disabled, and any ongoing transfer is aborted.
*   **Synchronization:** SPI is synchronous. Ensure the `CPOL` and `CPHA` settings in your slave code precisely match the master's configuration.
*   **Data Buffer:** For more complex protocols, you might need a circular buffer in RAM to queue data for transmission or to store incoming data before it's processed.
*   **Interrupt Latency:** Be mindful of the time taken within the ISR. If it's too long, it can affect timely data preparation or processing.
*   **`SPDR` Access:** Always read `SPDR` to clear the interrupt flag and retrieve received data. Always write to `SPDR` to initiate transmission.

## Practice Task

1.  **Modify the Code:** Adapt the provided C code for an AVR microcontroller of your choice (if different from ATmega328P, adjust pin definitions and register names accordingly).
2.  **Simulate Master:** If you have access to another AVR or a development board with SPI capabilities, configure it as an SPI master. Write a simple master program that sends a single byte (e.g., `0x01`) to the slave and then reads two bytes back.
3.  **Verify Data:** Use a debugger or output to a serial port (if available on your master) to verify that the two bytes received by the master correspond to `temperature_high_byte` and `temperature_low_byte` as defined in the slave code.
4.  **Change Data:** Modify the `temperature_high_byte` and `temperature_low_byte` variables in the slave code to different values and re-test to ensure the master receives the updated values.

## Self-Check Questions

1.  What is the primary role of the Slave Select (SS) pin in SPI slave communication?
2.  Why is it important to read from `SPDR` within the `SPI_STC_vect` ISR?
3.  What happens if the `CPOL` or `CPHA` settings do not match between the SPI master and slave?
4.  Describe how an SPI slave prepares data for transmission. When is the data loaded into `SPDR`?
5.  If you needed to send more than two bytes in response to a master request, how would you modify the `ISR` and the logic within it?

## Supports

- [[spi-slave-data-transfer|SPI Slave Data Transfer]]
