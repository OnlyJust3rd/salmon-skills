---
type: "medium"
title: "Implementing I2C Master Read/Write Operations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/avr-communication-programming/microskills/i2c-master-read-write|i2c-master-read-write]]"
learning-time-in-minutes: 5
---
# Implementing I2C Master Read/Write Operations

This lesson focuses on implementing bare-metal C code to perform I2C master read and write operations with external devices, a fundamental aspect of AVR microcontroller communication.

I2C (Inter-Integrated Circuit) is a serial communication protocol often used for short-distance communication between integrated circuits. It's a multi-master, multi-slave bus, but for this microskill, we'll focus on the AVR microcontroller acting as the I2C master.

In the I2C protocol, the master initiates all communication. For a **write** operation, the master sends the slave address and data. For a **read** operation, the master first sends the slave address to tell the slave what to do (usually to prepare to send data back), and then receives data from the slave.

## I2C Communication Flow

Understanding the sequence of events is crucial for implementing the code.

### I2C Write Operation (Master to Slave)

1.  **Start Condition:** The master sends a START condition.
2.  **Slave Address + Write Bit:** The master sends the 7-bit slave address followed by a '0' (indicating a write operation).
3.  **Slave Acknowledge (ACK):** The addressed slave acknowledges reception of the address and write bit by pulling the SDA line low.
4.  **Data Byte(s):** The master sends one or more data bytes.
5.  **Slave Acknowledge (ACK):** After each data byte received, the slave acknowledges by pulling SDA low.
6.  **Stop Condition:** The master sends a STOP condition to end the transmission.

### I2C Read Operation (Master from Slave)

1.  **Start Condition:** The master sends a START condition.
2.  **Slave Address + Write Bit:** The master sends the 7-bit slave address followed by a '1' (indicating a read operation).
3.  **Slave Acknowledge (ACK):** The addressed slave acknowledges reception of the address and read bit.
4.  **Data Byte(s):** The master receives one or more data bytes from the slave.
5.  **Master Acknowledge (ACK) / Not Acknowledge (NACK):**
    *   After receiving each data byte *except the last one*, the master sends an ACK to request the next byte.
    *   After receiving the *last* data byte, the master sends a NACK to signal the end of the read operation.
6.  **Stop Condition:** The master sends a STOP condition.

## AVR I2C Hardware (TWI)

AVR microcontrollers typically implement I2C using a module called Two-Wire Interface (TWI). To use TWI, you'll need to configure specific pins as SCL (Serial Clock) and SDA (Serial Data) and set up the TWI registers.

Key TWI registers you'll interact with include:

*   **TWBR (TWI Bit Rate Register):** Sets the I2C clock frequency.
*   **TWCR (TWI Control Register):** Enables TWI, starts/stops transmissions, sends ACK/NACK, and controls interrupts.
*   **TWDR (TWI Data Register):** Holds the data to be transmitted or received.
*   **TWSR (TWI Status Register):** Provides the current status of the TWI interface, crucial for determining the next action.

## Practical Example: Reading Data from an I2C Sensor

Let's assume we have an I2C temperature sensor (e.g., LM75) connected to an AVR microcontroller. The LM75 has a slave address (e.g., `0x48`). To read the temperature, we typically need to read from a specific register within the sensor. For simplicity, let's assume the temperature register is at address `0x00` and reading from it returns a 16-bit temperature value.

Here's a simplified C code snippet demonstrating how to implement an I2C master read operation. This code assumes basic TWI initialization has already been performed (setting up clock speed, enabling TWI, etc.).

```c
#include <avr/io.h>
#include <util/twi.h> // For TWI status codes

// Assuming TWI is initialized and configured elsewhere (e.g., TWBR, TWCR bits)

#define SLAVE_ADDRESS 0x48 // Example slave address for LM75
#define TEMP_REGISTER 0x00 // Address of the temperature register in the sensor

// Function to perform a single I2C write byte (e.g., to set register pointer)
uint8_t i2c_master_write_byte(uint8_t data) {
    TWDR = data;          // Load data into the TWI data register
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTA); // Start, Enable, Clear INT flag

    // Wait for transmission complete and ACK status
    while (!(TWCR & (1 << TWINT)));

    // Check for ACK
    if ((TWSR & 0xF8) != TW_MT_DATA_ACK) {
        return 0; // Error
    }
    return 1; // Success
}

// Function to perform a single I2C read byte
uint8_t i2c_master_read_byte(uint8_t ack) {
    TWCR = (1 << TWINT) | (1 << TWEN) | (ack ? (1 << TWEA) : 0); // Enable, Clear INT flag, Send ACK/NACK

    // Wait for reception complete
    while (!(TWCR & (1 << TWINT)));

    return TWDR; // Return received data
}

// Function to initiate an I2C read operation
// Reads 2 bytes for temperature value
uint16_t i2c_master_read_temp() {
    uint8_t temp_high, temp_low;
    uint16_t temperature;

    // 1. Send Start Condition
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTA);
    while (!(TWCR & (1 << TWINT))); // Wait for Start transmitted

    // Check TWI Status for Start transmitted ACK
    if ((TWSR & 0xF8) != TW_START) {
        // Handle error: Start condition failed
        return -1; // Indicate error
    }

    // 2. Send Slave Address + Write Bit (to point to the register)
    uint8_t address_write = (SLAVE_ADDRESS << 1) | TW_WRITE;
    if (!i2c_master_write_byte(address_write)) {
        // Handle error: Slave address not acknowledged
        return -1;
    }

    // 3. Send the register address we want to read from
    if (!i2c_master_write_byte(TEMP_REGISTER)) {
        // Handle error: Register address not acknowledged
        return -1;
    }

    // 4. Send a Repeated Start Condition
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTA);
    while (!(TWCR & (1 << TWINT))); // Wait for Repeated Start transmitted

    // Check TWI Status for Repeated Start transmitted ACK
    if ((TWSR & 0xF8) != TW_REP_START) {
        // Handle error: Repeated Start condition failed
        return -1;
    }

    // 5. Send Slave Address + Read Bit
    uint8_t address_read = (SLAVE_ADDRESS << 1) | TW_READ;
    TWDR = address_read;
    TWCR = (1 << TWINT) | (1 << TWEN); // Enable, Clear INT flag
    while (!(TWCR & (1 << TWINT))); // Wait for transmission complete

    // Check TWI Status for Slave Address + Read ACK
    if ((TWSR & 0xF8) != TW_MRADR_ACK) {
        // Handle error: Slave address (read) not acknowledged
        return -1;
    }

    // 6. Read the first data byte (MSB of temperature)
    // Send ACK to request the next byte
    temp_high = i2c_master_read_byte(1); // 1 means send ACK

    // 7. Read the second data byte (LSB of temperature)
    // Send NACK for the last byte
    temp_low = i2c_master_read_byte(0); // 0 means send NACK

    // 8. Send Stop Condition
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTO);

    // Combine bytes (this part depends on sensor's data format)
    // Assuming MSB first, and a simple interpretation
    temperature = (uint16_t)(temp_high << 8) | temp_low;

    // A real sensor might require bit shifts for valid temperature reading.
    // For LM75, the temp is usually in the upper bits of temp_high.
    // e.g., temperature = (int16_t)temp_high << 8 | temp_low; then divide by 256 or shift.
    // Consult the sensor datasheet for precise interpretation.

    return temperature;
}
```

**Explanation of the Code:**

*   **`i2c_master_write_byte`**: Handles sending a single byte to the slave and checks for an ACK.
*   **`i2c_master_read_byte`**: Handles receiving a single byte from the slave and allows specifying whether to send an ACK or NACK after reception.
*   **`i2c_master_read_temp`**: Orchestrates the full read operation:
    *   Starts the communication.
    *   Sends the slave address with the write bit to select the sensor and point to the desired register (`TEMP_REGISTER`).
    *   Sends the register address (`TEMP_REGISTER`).
    *   Initiates a repeated start.
    *   Sends the slave address with the read bit.
    *   Receives the two bytes of temperature data, sending ACK after the first and NACK after the second.
    *   Ends the communication with a stop condition.

**Important Notes:**

*   This code is a simplified illustration. Actual AVR TWI implementation requires proper initialization of `TWBR`, `TWCR` (enabling TWI, interrupts), and handling of DDR registers for the TWI pins (SDA and SCL).
*   Error handling is basic. In a real application, you'd want more robust checks and recovery mechanisms.
*   The interpretation of the received data (`temp_high`, `temp_low`) is crucial and depends entirely on the sensor's datasheet.
*   For write operations, the flow would be similar but would involve sending data bytes after the slave address and write bit, instead of receiving them.

## Practice Task

Modify the `i2c_master_read_temp` function to implement an I2C **write** operation to a hypothetical I2C EEPROM. Assume the EEPROM has a slave address of `0x50`, and you need to write 3 bytes of data (`0xAA`, `0xBB`, `0xCC`) to memory address `0x10`.

Your modified function should:

1.  Send a START condition.
2.  Send the EEPROM's slave address with the write bit.
3.  Send the memory address (`0x10`).
4.  Send the three data bytes (`0xAA`, `0xBB`, `0xCC`).
5.  Send a STOP condition.

The function should return `1` if all steps were acknowledged successfully, and `0` otherwise. You can adapt the existing `i2c_master_write_byte` function.

## Self-Check Questions

1.  What is the difference between an I2C START condition and a REPEATED START condition in terms of their purpose?
2.  When does the master send an ACK and when does it send a NACK during an I2C **read** operation?
3.  What is the role of the `TWSR` register in an AVR TWI communication?
4.  Describe the bit pattern sent by the master for a slave address with the write bit enabled.
5.  Why is it important to consult the datasheet of an external I2C device when implementing read/write operations?

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/avr-communication-programming/microskills/i2c-master-read-write|I2C Master Read/Write]]
