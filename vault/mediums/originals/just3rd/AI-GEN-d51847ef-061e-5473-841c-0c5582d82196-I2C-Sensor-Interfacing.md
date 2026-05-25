---
type: "medium"
title: "I2C Sensor Interfacing with AVR Microcontrollers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/i2c-sensor-interfacing|i2c-sensor-interfacing]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/embedded-system-interfacing|embedded-system-interfacing]]"
learning-time-in-minutes: 4
---
# I2C Sensor Interfacing with AVR Microcontrollers

This lesson focuses on the practical application of the Inter-Integrated Circuit (I2C) communication protocol to interface external sensors with AVR microcontrollers. Building upon the ability to interface microcontrollers with peripherals, we will specifically explore how to connect, configure, and read data from I2C-enabled sensors.

## Understanding the I2C Protocol

I2C is a serial communication protocol developed by Philips Semiconductors. It's a multi-master, multi-slave bus that uses only two wires for communication:

*   **SDA (Serial Data):** Carries the data being transmitted.
*   **SCL (Serial Clock):** Carries the clock signal, which synchronizes data transfer.

I2C is known for its simplicity, low pin count, and the ability to connect multiple devices to the same bus. Each device on the I2C bus has a unique 7-bit or 10-bit address.

### Key I2C Concepts

*   **Master/Slave:** In an I2C communication, one device acts as the master, initiating the communication and generating the clock signal. Other devices act as slaves, responding to the master's requests. An AVR microcontroller typically acts as the I2C master.
*   **Addressing:** To communicate with a specific slave device, the master sends the slave's unique address over the bus.
*   **Start and Stop Conditions:** Special patterns on the SDA and SCL lines signal the beginning and end of a data transfer.
*   **Acknowledge (ACK) / Not Acknowledge (NACK):** After each byte of data is transferred, the receiving device sends an ACK signal to confirm successful reception. A NACK indicates an error or that the device is busy.

## Interfacing an I2C Sensor

Let's consider a common I2C sensor, like a temperature and humidity sensor (e.g., the DHT22, although some versions use a proprietary protocol, many similar sensors like the BMP280 or SHT3x are I2C). For this example, we'll assume we are using a hypothetical I2C temperature sensor with a 7-bit address.

### Hardware Connections

The I2C pins on an AVR microcontroller (like those found on Arduino boards) are typically labeled **SDA** and **SCL**. You need to connect these pins to the corresponding SDA and SCL pins on your I2C sensor.

*   **AVR SDA** <---> **Sensor SDA**
*   **AVR SCL** <---> **Sensor SCL**

Additionally, both the microcontroller and the sensor need power and ground connections:

*   **AVR VCC** <---> **Sensor VCC**
*   **AVR GND** <---> **Sensor GND**

Most I2C devices require pull-up resistors on both the SDA and SCL lines. These are often built into development boards like Arduino Uno (typically 4.7kΩ). If you are using a bare AVR microcontroller, you might need to add external pull-up resistors connected from SDA to VCC and SCL to VCC.

### Software Implementation (Conceptual C Code)

The specific implementation will depend on the AVR microcontroller's datasheet and the chosen development environment (e.g., AVR-GCC with the AVR-Libc library, or an Arduino environment). Here's a conceptual C code structure:

```c
#include <avr/io.h>
#include <util/delay.h>
#include <twi.h> // For AVR-Libc TWI (I2C) functions

// Define the I2C slave address of the sensor
#define SENSOR_ADDRESS 0x76 // Example address

void i2c_init(void) {
    // Initialize TWI (Two-Wire Interface) for I2C communication
    // Set the I2C clock frequency (e.g., 100kHz)
    // TWBR = ((F_CPU / SCL_Frequency) - 16) / 2;
    TWBR = 72; // For F_CPU = 16MHz and SCL = 100kHz
    TWCR = (1 << TWEN); // Enable TWI
}

// Function to send a byte to the I2C slave
uint8_t i2c_send_byte(uint8_t data) {
    TWDR = data; // Load data into the TWI data register
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTA); // Send start condition and data
    while (!(TWCR & (1 << TWINT))); // Wait for TWI interrupt flag

    // Check for errors
    if ((TWSR & 0xF8) != 0x40) return 0; // Not acknowledged
    return 1; // Sent successfully
}

// Function to receive a byte from the I2C slave
uint8_t i2c_receive_byte(uint8_t ack) {
    TWCR = (1 << TWINT) | (1 << TWEN) | (ack ? (1 << TWEA) : 0); // Enable ACK or NACK
    while (!(TWCR & (1 << TWINT))); // Wait for TWI interrupt flag
    return TWDR; // Return the received data
}

// Function to read data from the sensor
// This function's logic will be specific to the sensor's datasheet
// For a temperature sensor, it might involve sending a command and then reading data bytes
void read_temperature_humidity(uint16_t *temperature, uint16_t *humidity) {
    uint8_t data_buffer[4]; // Assuming 4 bytes of data (e.g., 2 for temp, 2 for hum)

    // 1. Send START condition
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTA);
    while (!(TWCR & (1 << TWINT)));

    // 2. Send Slave Address + Write bit
    if (!i2c_send_byte(SENSOR_ADDRESS << 1)) {
        // Handle error: Device not found or busy
        return;
    }

    // 3. Send command to read temperature (specific to sensor, e.g., register address)
    // This step depends heavily on the sensor's datasheet.
    // For many sensors, you might need to send a command to initiate measurement or read from a specific register.
    // Example: i2c_send_byte(0xF3); // Command to start measurement (hypothetical)
    // _delay_ms(100); // Wait for measurement to complete (if needed)

    // 4. Send Repeated START condition (if reading after writing a command)
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTA);
    while (!(TWCR & (1 << TWINT)));

    // 5. Send Slave Address + Read bit
    if (!i2c_send_byte((SENSOR_ADDRESS << 1) | 0x01)) {
        // Handle error
        return;
    }

    // 6. Receive data bytes
    data_buffer[0] = i2c_receive_byte(1); // Receive first byte with ACK
    data_buffer[1] = i2c_receive_byte(1); // Receive second byte with ACK
    data_buffer[2] = i2c_receive_byte(1); // Receive third byte with ACK
    data_buffer[3] = i2c_receive_byte(0); // Receive fourth byte with NACK (last byte)

    // 7. Send STOP condition
    TWCR = (1 << TWINT) | (1 << TWEN) | (1 << TWSTO);
}

int main(void) {
    i2c_init();
    uint16_t temp, hum;

    // ... other initialization ...

    while (1) {
        read_temperature_humidity(&temp, &hum);
        // Process temp and hum values (e.g., print to serial, control actuators)
        _delay_ms(1000);
    }
    return 0;
}
```

### Reading Sensor Data

After establishing communication, you'll need to consult the sensor's datasheet to understand how to:

1.  **Initiate a Measurement (if applicable):** Some sensors require a command to start taking readings.
2.  **Read Data Registers:** Sensors store their measured values in specific memory addresses (registers). You need to know which registers to read from and in what order.
3.  **Interpret the Data:** The raw data read from the sensor is often in a specific format (e.g., two's complement, scaled values). The datasheet will explain how to convert this raw data into meaningful units (e.g., Celsius, percentage).

**Example: Hypothetical Data Interpretation**

If the sensor returns two bytes for temperature, say `0x01` and `0x90`, and the datasheet says temperature is \( \frac{\text{Value}}{10} \) °C:

*   Combined value: \( (0x01 \ll 8) | 0x90 \) = \( (1 \ll 8) | 144 \) = \( 256 | 144 \) = \( 400 \)
*   Temperature: \( \frac{400}{10} \) = \( 40.0 \) °C

## Common Pitfalls

*   **Incorrect Slave Address:** Double-check the sensor's datasheet for the exact 7-bit I2C address.
*   **Missing or Incorrect Pull-up Resistors:** This is a very common issue. Ensure they are present and of the correct value.
*   **Incorrect SDA/SCL Wiring:** Verify the connections.
*   **Timing Issues:** Especially with fast communication speeds or complex sequences, timing can be critical.
*   **Not Handling ACK/NACK Properly:** Ensure your code correctly interprets ACK signals for successful transmissions and NACK signals for errors or end-of-data.
*   **Ignoring the Datasheet:** The datasheet is your primary reference for I2C addresses, register maps, data formats, and timing requirements.

By following these steps and carefully referencing your sensor's datasheet, you can successfully interface various I2C sensors with your AVR microcontrollers and utilize the data for diverse embedded system applications.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/i2c-sensor-interfacing|I2C Sensor Interfacing]]
