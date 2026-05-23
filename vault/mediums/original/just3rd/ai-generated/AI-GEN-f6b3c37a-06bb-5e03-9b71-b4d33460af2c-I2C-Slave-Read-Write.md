---
type: "medium"
title: "I2C Slave Read/Write Operations in AVR Microcontrollers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/avr-communication-programming/microskills/i2c-slave-read-write|i2c-slave-read-write]]"
learning-time-in-minutes: 6
---
# I2C Slave Read/Write Operations in AVR Microcontrollers

This lesson focuses on implementing C code for I2C slave read and write operations. Building upon the foundation of AVR communication programming, you will learn how to configure your AVR microcontroller to act as an I2C slave device, responding to requests from a master device. This is crucial for enabling data exchange between your AVR and other peripherals or microcontrollers on an I2C bus.

## Understanding I2C Slave Mode

In an I2C communication, there are two primary roles: the Master and the Slave. The Master initiates communication, sends start/stop conditions, and controls the clock. The Slave device listens for its address on the bus and responds to the Master's commands.

As an I2C slave, your AVR will:

1.  **Acknowledge its Address:** When the Master sends a start condition followed by the slave's address, the slave must acknowledge it.
2.  **Respond to Read/Write Requests:** If the Master requests to write data to the slave, the slave receives and stores it. If the Master requests to read data from the slave, the slave transmits the requested data.
3.  **Handle Repeated Start Conditions:** The I2C protocol allows for repeated start conditions, which the slave must also be able to handle.

### Key I2C Slave Operations

*   **Receiving Data (Write):** The Master sends data bytes to the slave. The slave reads these bytes and typically stores them in its internal memory or registers.
*   **Sending Data (Read):** The Master requests data from the slave. The slave reads data from its internal memory or registers and transmits it back to the Master.

## Implementing I2C Slave Code in C (AVR-GCC)

To implement I2C slave functionality, you'll typically use the AVR's built-in Two-Wire Interface (TWI) module. The exact registers and bit manipulation might vary slightly between AVR families, but the general principles remain the same. We'll use common register names for demonstration.

**Core Steps:**

1.  **Initialization:**
    *   Configure the TWI pins (SDA and SCL) as inputs.
    *   Set the TWI bit rate (though this is more critical for the Master).
    *   Enable the TWI module.
    *   Configure the TWI as a Slave by setting the appropriate bits in the TWI Control Register (e.g., `TWCR`).
    *   Load the slave's 7-bit I2C address into the TWI Address Register (`TWAR`).

2.  **Interrupt Service Routine (ISR) for TWI:**
    *   The TWI module generates interrupts for various events (address match, data received, data transmitted, etc.). You'll need an ISR to handle these.
    *   Inside the ISR, check the `TWSR` (TWI Status Register) to determine the current event.
    *   Based on the event, perform the necessary action:
        *   **Address Match Received (SLA+W):** If the Master is trying to write to this slave, acknowledge it by setting the `TWAA` (TWI Acknowledge Address) bit in `TWCR` and prepare to receive data.
        *   **Address Match Received (SLA+R):** If the Master is trying to read from this slave, acknowledge it by setting `TWAA` in `TWCR` and prepare to transmit data.
        *   **Data Byte Received:** Read the received data from `TWDR` (TWI Data Register) and store it. Acknowledge reception.
        *   **Data Byte Transmitted:** If the slave was transmitting data, the Master has acknowledged it. Prepare to send the next byte.
        *   **Last Byte Received/Transmitted:** Handle the end of a transaction.

3.  **Data Buffering:**
    *   You'll need arrays or variables to store data received from the Master and data to be sent to the Master.

### Practical Scenario: Simple I2C Slave for Sensor Data

Imagine you have an AVR microcontroller (the slave) connected to an I2C bus. A Master device (another microcontroller or a PC interface) wants to read sensor data from this AVR. The AVR will act as an I2C slave, exposing a small buffer where it stores sensor readings.

**Example Code Snippet (Conceptual - specific registers depend on AVR model):**

```c
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/twi.h> // For TWI status codes

#define F_CPU 16000000UL // Example clock frequency
#define TWI_SPEED 100000UL // 100kHz I2C speed

// Slave address (7-bit) - replace with your desired address
#define MY_I2C_ADDRESS 0x50

// Buffer to hold data to be sent to the master
volatile uint8_t txBuffer[10];
volatile uint8_t txBufferIndex = 0;
volatile uint8_t txBufferLength = 0;

// Buffer to hold data received from the master
volatile uint8_t rxBuffer[10];
volatile uint8_t rxBufferIndex = 0;
volatile uint8_t rxBufferLength = 0;

// Flag to indicate if we are in a read operation (master requesting data)
volatile uint8_t isReading = 0;

// Function to initialize TWI as a slave
void twi_slave_init(uint8_t address) {
    // Set SDA and SCL pins as inputs
    DDRC &= ~((1 << PC4) | (1 << PC5)); // Assuming PORTC for TWI on ATmega328P

    // Load the 7-bit slave address into TWAR
    TWAR = (address << 1); // Shift left to make space for R/W bit

    // Enable TWI, acknowledge on own address, enable interrupts
    TWCR = (1 << TWEN) | (1 << TWIE) | (1 << TWAIE);
}

// Dummy function to simulate getting sensor data
void update_sensor_data() {
    // In a real application, read from actual sensors here
    // For demonstration, fill the txBuffer with dummy data
    txBuffer[0] = 0x01; // Example sensor value 1
    txBuffer[1] = 0x02; // Example sensor value 2
    txBufferLength = 2;
}

// TWI Interrupt Service Routine
ISR(TWI_vect) {
    uint8_t status = TWSR;

    switch (status) {
        // --- Address Received ---
        case TW_SR_SLA_ACK: // Own SLA+W received, data is to be written to me
            rxBufferIndex = 0;
            rxBufferLength = 0;
            isReading = 0;
            // Acknowledge address and prepare to receive data
            TWCR |= (1 << TWINT) | (1 << TWEA);
            break;

        case TW_SR_GCALL_ACK: // General Call Address received, data is to be written to me
            // Handle General Call if needed, or just acknowledge
            rxBufferIndex = 0;
            rxBufferLength = 0;
            isReading = 0;
            TWCR |= (1 << TWINT) | (1 << TWEA);
            break;

        case TW_SR_DATA_ACK: // Data byte received, ACK sent
            // Read the received data
            rxBuffer[rxBufferIndex++] = TWDR;
            // Check if we've filled the buffer or if this is the last expected byte
            if (rxBufferIndex >= sizeof(rxBuffer)) {
                rxBufferLength = sizeof(rxBuffer); // Indicate buffer is full
            } else {
                rxBufferLength = rxBufferIndex; // Update current received length
            }
            // Acknowledge reception of this data byte
            TWCR |= (1 << TWINT) | (1 << TWEA);
            break;

        case TW_SR_STOP: // STOP condition received
            // STOP condition detected. The transaction is over.
            // Process the received data in rxBuffer here if needed.
            // Reset for next transaction.
            rxBufferIndex = 0;
            rxBufferLength = 0;
            isReading = 0;
            TWCR |= (1 << TWINT); // Clear TWINT to receive new start/stop
            break;

        // --- Master Requesting Data (Read) ---
        case TW_ST_SLA_ACK: // Own SLA+R received, data is to be read from me
            isReading = 1;
            txBufferIndex = 0;
            // Prepare to send the first byte from txBuffer
            update_sensor_data(); // Get fresh data
            TWDR = txBuffer[txBufferIndex++];
            // Send data and acknowledge the master's request for next byte
            TWCR |= (1 << TWINT) | (1 << TWEA);
            break;

        case TW_ST_DATA_ACK: // Data byte sent, ACK received from Master
            // If there are more bytes to send, send the next one
            if (txBufferIndex < txBufferLength) {
                TWDR = txBuffer[txBufferIndex++];
                TWCR |= (1 << TWINT) | (1 << TWEA); // Send next byte and acknowledge
            } else {
                // No more data, send NACK to indicate end of transmission
                TWCR |= (1 << TWINT); // NACK is implicit when TWEA is not set
            }
            break;

        case TW_ST_DATA_NACK: // NACK received from Master
            // Master does not want more data. End transmission.
            TWCR |= (1 << TWINT); // Clear TWINT to receive new start/stop
            isReading = 0;
            break;

        // --- Error Handling ---
        case TW_BUS_ERROR:
            // Handle bus errors (e.g., arbitration lost, SCL/SDA stuck)
            // Reset TWI module and clear TWINT
            TWCR |= (1 << TWINT);
            // Potentially re-initialize TWI or handle error appropriately
            break;

        // Add cases for other statuses as needed (e.g., TW_SR_ADD_DATA_ACK, TW_SR_GCALL_DATA_ACK)
        default:
            // Clear TWINT to continue processing
            TWCR |= (1 << TWINT);
            break;
    }
}

int main(void) {
    // Initialize sensor (if applicable)
    // ...

    // Initialize TWI as slave with your address
    twi_slave_init(MY_I2C_ADDRESS);

    // Enable global interrupts
    sei();

    while (1) {
        // Main loop can do other tasks, but TWI communication is handled by ISR
        // For example, you might update txBuffer with new sensor readings periodically
        // if (!isReading) { // Only update if not currently sending data
        //     update_sensor_data();
        // }
    }
}
```

### How it Works:

*   **`twi_slave_init()`:** Configures the hardware, sets the slave address, and enables interrupts.
*   **`TWI_vect` ISR:** This is the heart of the slave operation. It constantly monitors the TWI status register (`TWSR`).
*   **`TW_SR_SLA_ACK` / `TW_SR_GCALL_ACK`:** When the Master sends your slave address (either specific or general call) followed by a write bit, the slave acknowledges it and prepares to receive data.
*   **`TW_SR_DATA_ACK`:** A data byte has arrived. The slave reads it from `TWDR`, stores it in `rxBuffer`, and acknowledges to the Master that it's ready for the next byte.
*   **`TW_SR_STOP`:** The Master has finished its write operation. The ISR clears flags and prepares for the next transaction.
*   **`TW_ST_SLA_ACK`:** When the Master sends your slave address followed by a read bit, the slave prepares to send data. It loads the first byte from `txBuffer` into `TWDR` and acknowledges the Master's request.
*   **`TW_ST_DATA_ACK`:** The Master has acknowledged the byte just sent. If there are more bytes in `txBuffer`, the slave sends the next one.
*   **`TW_ST_DATA_NACK`:** The Master sent a NACK, meaning it doesn't want any more data. The slave stops transmitting.
*   **`TW_BUS_ERROR`:** Catches common I2C errors and can be used for recovery.

## Practice Task

**Objective:** Implement an I2C slave on an AVR microcontroller that can:

1.  Be addressed by an I2C Master using the address `0x42`.
2.  Receive a single byte from the Master and store it in an internal variable.
3.  When the Master requests to read, send back the stored byte followed by a fixed value `0xAA`.

**Steps:**

1.  **Setup:**
    *   Use an AVR development board (e.g., Arduino Uno with ATmega328P, or a dedicated AVR development board).
    *   Connect your AVR to a PC via an I2C master interface (e.g., a second Arduino programmed as an I2C master, or a USB-to-I2C adapter).
    *   Connect the SDA and SCL lines between the devices. Add pull-up resistors (typically 4.7kΩ) to both SDA and SCL lines to VCC.

2.  **Slave Code:**
    *   Adapt the example code provided above.
    *   Set `MY_I2C_ADDRESS` to `0x42`.
    *   Modify the ISR to:
        *   When `TW_SR_DATA_ACK` occurs, store `TWDR` into a global `uint8_t received_byte`.
        *   When `TW_ST_SLA_ACK` occurs, prepare `txBuffer` such that `txBuffer[0]` is `received_byte` and `txBuffer[1]` is `0xAA`. Set `txBufferLength` to `2`.
    *   Ensure you handle the `TW_SR_STOP` and `TW_ST_DATA_NACK` correctly for proper transaction completion.

3.  **Master Code (for testing):**
    *   Write a simple I2C master program (on the second Arduino or PC interface) to:
        *   Send the byte `0x33` to the slave address `0x42`.
        *   Read two bytes from the slave address `0x42`.
        *   Print the received bytes to the serial monitor.

## Self-Check Questions

1.  What is the primary role of an I2C slave device?
2.  Explain the purpose of the `TWCR` (TWI Control Register) and `TWSR` (TWI Status Register) in I2C slave operation.
3.  When the Master sends the slave address followed by a write bit (`SLA+W`), which TWI status code will the slave ISR typically encounter first, and what action should it take?
4.  When the Master sends the slave address followed by a read bit (`SLA+R`), which TWI status code will the slave ISR typically encounter first, and what action should it take?
5.  What is the difference between `TW_ST_DATA_ACK` and `TW_ST_DATA_NACK` from the slave's perspective during a read operation?
6.  Why are pull-up resistors essential for I2C communication?

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/avr-communication-programming/microskills/i2c-slave-read-write|I2C Slave Read/Write]]
