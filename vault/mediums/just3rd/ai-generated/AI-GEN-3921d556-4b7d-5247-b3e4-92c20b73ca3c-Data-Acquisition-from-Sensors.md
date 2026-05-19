---
type: "medium"
title: "Reading Sensor Data with Microcontrollers: A Practical Guide"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/embedded-system-interfacing/microskills/data-acquisition-from-sensors|Data Acquisition from Sensors]]"
---
# Reading Sensor Data with Microcontrollers: A Practical Guide

This lesson focuses on acquiring data from sensors, a crucial part of interfacing microcontrollers with external components. We'll explore how to read sensor data using common communication protocols, enabling your microcontroller to understand the physical world.

## Understanding Sensor Data Acquisition

Sensors are devices that detect and respond to some type of input from the physical environment. This input could be light, heat, motion, pressure, or virtually any other physical phenomenon. To make use of this information, microcontrollers need to read the data the sensor produces. This data is typically an analog voltage or a digital signal, which is then interpreted by the microcontroller.

The way a microcontroller reads this data depends heavily on how the sensor communicates. For embedded systems, this often involves using specific communication protocols.

## Key Communication Protocols for Sensors

While there are many ways sensors can transmit data, three common protocols are essential for microcontroller interfacing:

*   **UART (Universal Asynchronous Receiver/Transmitter):** A serial communication protocol that sends data one bit at a time. It's simple and widely used for point-to-point communication.
*   **SPI (Serial Peripheral Interface):** A synchronous serial communication protocol used for full-duplex communication. It's known for its speed and is often used for devices like memory chips or displays.
*   **I2C (Inter-Integrated Circuit):** A synchronous serial communication protocol that uses two wires (SDA for data, SCL for clock). It's a multi-master, multi-slave bus, allowing multiple devices to share the same bus. This is particularly useful for connecting multiple sensors to a microcontroller.

For this lesson, we'll focus on how to read data from sensors using these protocols, with a special emphasis on I2C for sensor interfacing.

## Reading Data via I2C

I2C is a popular choice for sensor interfacing because it requires only two wires and allows multiple devices to be connected to the same microcontroller. Many environmental sensors (temperature, humidity, pressure, light) communicate using I2C.

### How I2C Works for Sensor Data Acquisition

1.  **Addressing:** Each I2C device on the bus has a unique 7-bit or 10-bit address. The microcontroller (master) uses this address to select which device it wants to communicate with.
2.  **Start and Stop Conditions:** The communication begins with a START condition and ends with a STOP condition, signaled by specific changes on the SDA and SCL lines.
3.  **Read Operation:**
    *   The microcontroller sends the START condition.
    *   It then sends the 7-bit address of the sensor, followed by a read/write bit (0 for write, 1 for read).
    *   The sensor acknowledges receipt of the address.
    *   The microcontroller sends a repeated START condition (optional, but common for reading).
    *   It sends the sensor's address again with the read bit set.
    *   The sensor acknowledges its address.
    *   The sensor then transmits the data bytes back to the microcontroller.
    *   After each byte received, the microcontroller sends an acknowledge (ACK) signal, except for the last byte.
    *   For the last byte, the microcontroller sends a not-acknowledge (NACK) signal.
    *   Finally, the microcontroller sends a STOP condition.

### Practical Example: Reading Temperature from an I2C Sensor (e.g., BMP180)

Let's imagine you have a BMP180 pressure and temperature sensor connected to your AVR microcontroller. The BMP180 datasheet will specify its I2C address and the registers where temperature data is stored.

**Typical steps in your microcontroller code (AVR C):**

1.  **Include necessary libraries:** You'll need libraries for I2C communication (e.g., `TWI.h` for AVR-GCC) and potentially sensor-specific libraries.
2.  **Initialize I2C:** Configure the AVR microcontroller's TWI (Two-Wire Interface) module as the master.
    ```c
    #include <avr/io.h>
    #include <util/twi.h>

    void twi_init() {
        TWSR = 0x00; // Set prescaler to 1
        TWBR = 0x04; // Set bit rate (e.g., 400kHz for 16MHz clock)
        TWCR = (1 << TWEN); // Enable TWI
    }
    ```
3.  **Write to a control register (if needed):** Some sensors require you to write to a specific register to initiate a measurement or set a configuration. For the BMP180, you might write a command to start a temperature conversion.
4.  **Wait for measurement completion (if applicable):** Some sensors take time to complete a measurement. You might need to poll a status register or use a delay.
5.  **Read data from sensor registers:**
    *   Send START condition.
    *   Send sensor's I2C address with the write bit.
    *   Send the address of the temperature data register.
    *   Send a repeated START condition.
    *   Send the sensor's I2C address with the read bit.
    *   Receive data bytes from the sensor, sending ACK after each except the last.
    *   Send NACK for the last byte.
    *   Send STOP condition.

    ```c
    // Pseudocode for reading from a sensor register
    uint8_t read_sensor_register(uint8_t sensor_address, uint8_t reg_address) {
        uint8_t data;
        // Send START
        TWCR = (1 << TWINT) | (1 << TWSTA) | (1 << TWEN);
        while (!(TWCR & (1 << TWINT))); // Wait for START to complete

        // Send sensor address + write bit
        TWDR = (sensor_address << 1) & 0xFE;
        TWCR = (1 << TWINT) | (1 << TWEN);
        while (!(TWCR & (1 << TWINT))); // Wait for transmission

        // Send register address
        TWDR = reg_address;
        TWCR = (1 << TWINT) | (1 << TWEN);
        while (!(TWCR & (1 << TWINT))); // Wait for transmission

        // Send repeated START
        TWCR = (1 << TWINT) | (1 << TWSTA) | (1 << TWEN);
        while (!(TWCR & (1 << TWINT))); // Wait for START to complete

        // Send sensor address + read bit
        TWDR = (sensor_address << 1) | 0x01;
        TWCR = (1 << TWINT) | (1 << TWEN);
        while (!(TWCR & (1 << TWINT))); // Wait for transmission

        // Receive data (ACK)
        TWCR = (1 << TWINT) | (1 << TWEA) | (1 << TWEN);
        while (!(TWCR & (1 << TWINT))); // Wait for reception

        // Get data from TWDR
        data = TWDR;

        // Send STOP
        TWCR = (1 << TWINT) | (1 << TWSTO) | (1 << TWEN);

        return data;
    }

    // To read a 16-bit temperature value (example for BMP180):
    // uint16_t temperature = (read_sensor_register(BMP180_ADDRESS, 0xF6) << 8) | read_sensor_register(BMP180_ADDRESS, 0xF7);
    ```
    *(Note: This pseudocode simplifies the error handling and specific register details for clarity. Refer to the sensor's datasheet for precise implementation.)*

6.  **Process the received data:** Convert the raw byte values into meaningful units (e.g., degrees Celsius, percentage humidity). This often involves applying calibration values and formulas provided in the sensor's datasheet.

## Considerations for Sensor Data Acquisition

*   **Datasheets are Key:** Always refer to the sensor's datasheet. It contains critical information on I2C addresses, register maps, data formats, timing diagrams, and conversion formulas.
*   **Error Handling:** Implement checks for I2C acknowledgments and communication failures.
*   **Timing:** Ensure your code respects the timing requirements of the sensor and the I2C protocol.
*   **Data Types:** Be mindful of the data types used (e.g., `uint8_t`, `int16_t`) to correctly interpret sensor readings.
*   **Sensor Calibration:** Many sensors require calibration to provide accurate readings. This might involve reading a calibration value from the sensor's memory or applying a known offset.

By mastering the art of reading sensor data using protocols like I2C, you unlock the ability to create sophisticated embedded systems that interact intelligently with their environment.

## Supports

- [[skills/hardware-embedded/electronics-embedded/embedded-system-interfacing/microskills/data-acquisition-from-sensors|Data Acquisition from Sensors]]
