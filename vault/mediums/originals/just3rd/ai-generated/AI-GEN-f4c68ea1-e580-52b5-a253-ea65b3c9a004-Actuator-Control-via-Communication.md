---
type: "medium"
title: "Controlling Actuators with Communication Protocols"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/actuator-control-via-communication|actuator-control-via-communication]]"
learning-time-in-minutes: 4
---
# Controlling Actuators with Communication Protocols

This lesson focuses on using communication protocols to control external actuators with AVR microcontrollers. This is a key step in interfacing microcontrollers with peripherals, enabling them to interact with the physical world beyond just reading sensor data.

## Understanding Actuator Control

Actuators are devices that convert an electrical signal into a physical action. Common examples include:

*   **Motors:** For movement and rotation (DC motors, stepper motors, servos).
*   **LEDs/Displays:** For visual feedback.
*   **Solenoids:** For linear motion or valve control.
*   **Buzzers/Speakers:** For auditory feedback.

To control these actuators, we need to send specific commands or data through communication protocols. This lesson will explore how to do this using UART, SPI, and I2C.

## Actuator Control via UART

UART (Universal Asynchronous Receiver/Transmitter) is a serial communication protocol often used for simple, point-to-point communication. It's ideal for sending commands to actuators that accept simple serial data streams.

**Scenario:** Controlling a simple buzzer to emit a specific tone.

Let's assume you have a buzzer that can be controlled by sending a specific frequency value via UART.

**Conceptual Code (AVR C):**

```c
#include <avr/io.h>
#include <util/delay.h>

// Function to initialize UART
void uart_init(void) {
    // Set baud rate (e.g., 9600)
    UBRR0H = 0;
    UBRR0L = 103; // For 16MHz clock and 9600 baud
    // Enable receiver and transmitter
    UCSR0B = (1 << RXEN0) | (1 << TXEN0);
    // Set frame format: 8 data bits, 2 stop bits
    UCSR0C = (1 << USBS0) | (3 << UCSZ00);
}

// Function to send a byte via UART
void uart_transmit(unsigned char data) {
    // Wait for empty buffer
    while (!(UCSR0A & (1 << UDRE0)));
    // Put data into buffer, sends the data
    UDR0 = data;
}

// Function to send a string via UART
void uart_transmit_string(const char* str) {
    while (*str) {
        uart_transmit(*str++);
    }
}

int main(void) {
    // Initialize UART
    uart_init();

    // Command to play a 440 Hz tone (example, actual command depends on buzzer)
    const char* tone_command = "TONE 440\n";

    // Send the command to the buzzer
    uart_transmit_string(tone_command);

    // Keep the program running or perform other tasks
    while (1) {
        // Your other code here
    }

    return 0;
}
```

**How it Works:**

1.  **Initialization:** `uart_init()` configures the microcontroller's UART module, setting the baud rate, enabling transmission, and defining the data format.
2.  **Transmission:** `uart_transmit()` sends a single byte. It waits until the transmit buffer is empty before sending the data.
3.  **String Transmission:** `uart_transmit_string()` sends a null-terminated string by repeatedly calling `uart_transmit()`.
4.  **Control Command:** In `main()`, a specific command string (`"TONE 440\n"`) is prepared and sent to the connected buzzer. The buzzer module interprets this command and starts emitting the specified tone.

## Actuator Control via SPI

SPI (Serial Peripheral Interface) is a synchronous serial communication protocol that is much faster than UART. It's commonly used for controlling more complex peripherals like displays or motor drivers that require higher data throughput.

**Scenario:** Controlling a servo motor using an SPI-based servo driver IC.

Many servo drivers can be controlled by sending specific register values via SPI. For example, you might need to set the pulse width to dictate the servo's angle.

**Conceptual Code (AVR C):**

```c
#include <avr/io.h>

// Function to initialize SPI for master mode
void spi_init_master(void) {
    // Set MOSI, SCK, and SS as output, MISO as input
    DDRB |= (1 << DDB5) | (1 << DDB7) | (1 << DDB4); // MOSI, SCK, SS
    DDRB &= ~(1 << DDB6); // MISO

    // Enable SPI, Master, set clock rate fck/16
    SPCR = (1 << SPE) | (1 << MSTR) | (1 << SPR0);
}

// Function to transmit and receive a byte via SPI
unsigned char spi_transmit_receive(unsigned char data) {
    // Start transmission
    SPDR = data;
    // Wait for transmission complete
    while (!(SPSR & (1 << SPIF)));
    // Return data received
    return SPDR;
}

int main(void) {
    // Initialize SPI
    spi_init_master();

    // Servo driver specific commands/data
    // Example: Set servo angle to 90 degrees (actual values depend on driver datasheet)
    unsigned char command_byte = 0x01; // Example: Command to set position
    unsigned char angle_data = 0x5A;  // Example: Value for 90 degrees

    // Select the slave device (servo driver)
    PORTB &= ~(1 << PORTB4); // Set SS low

    // Send the command and data
    spi_transmit_receive(command_byte);
    spi_transmit_receive(angle_data);

    // Deselect the slave device
    PORTB |= (1 << PORTB4); // Set SS high

    while (1) {
        // Your other code here
    }

    return 0;
}
```

**How it Works:**

1.  **Initialization:** `spi_init_master()` configures the microcontroller as an SPI master. It sets the direction of the SPI pins (MOSI, SCK, SS as output; MISO as input) and enables the SPI module with specific clock settings.
2.  **SPI Transfer:** `spi_transmit_receive()` sends a byte to the SPI slave and simultaneously receives a byte from it. It waits for the transfer to complete.
3.  **Slave Select (SS):** The `SS` (Slave Select) pin is crucial. Pulling it low (`PORTB &= ~(1 << PORTB4);`) selects the specific SPI device you want to communicate with. Pulling it high (`PORTB |= (1 << PORTB4);`) deselects it.
4.  **Sending Commands:** In `main()`, specific command and data bytes are defined. These are then sent sequentially to the servo driver via SPI after selecting it. The servo driver interprets these bytes to adjust the servo's position.

## Actuator Control via I2C

I2C (Inter-Integrated Circuit) is a multi-master, multi-slave serial communication protocol. It's efficient for connecting multiple devices on the same bus and is commonly used for controlling sensors and actuators with I2C interfaces.

**Scenario:** Controlling an I2C-based motor controller to set motor speed.

Many motor controller ICs are available with an I2C interface, allowing you to set speed, direction, and other parameters.

**Conceptual Code (AVR C - using a simplified I2C library concept):**

```c
#include <avr/io.h>
#include "i2c_master.h" // Assuming you have an I2C master library

// Define the I2C address of the motor controller
#define MOTOR_CONTROLLER_ADDRESS 0x60 // Example address

int main(void) {
    // Initialize I2C
    i2c_master_init();

    // Parameters for motor control
    unsigned char motor_channel = 0x01; // Example: Motor A
    unsigned char speed = 128;         // Example: 50% speed (0-255)

    // Start I2C transmission
    i2c_master_start();

    // Send the device address with write bit
    if (i2c_master_send_address(MOTOR_CONTROLLER_ADDRESS, I2C_WRITE) != 0) {
        // Handle error: NACK received
        i2c_master_stop();
        // ... error handling ...
    }

    // Send the motor channel command
    if (i2c_master_send_byte(motor_channel) != 0) {
        // Handle error
        i2c_master_stop();
        // ... error handling ...
    }

    // Send the speed data
    if (i2c_master_send_byte(speed) != 0) {
        // Handle error
        i2c_master_stop();
        // ... error handling ...
    }

    // End I2C transmission
    i2c_master_stop();

    while (1) {
        // Your other code here
    }

    return 0;
}
```

**Conceptual `i2c_master.h` (simplified functions):**

```c
// Assuming TWBR, TWCR, TWDR, TWAR registers are configured and used.
// This is illustrative, a real library would be more robust.

#define I2C_WRITE 0
#define I2C_READ  1

void i2c_master_init(void);
unsigned char i2c_master_send_address(unsigned char address, unsigned char rw);
unsigned char i2c_master_send_byte(unsigned char data);
void i2c_master_stop(void);
```

**How it Works:**

1.  **Initialization:** `i2c_master_init()` configures the microcontroller's I2C module for master operation, setting the clock frequency.
2.  **Start Condition:** `i2c_master_start()` generates the I2C START condition.
3.  **Address Transmission:** `i2c_master_send_address()` sends the 7-bit I2C slave address followed by either a read (1) or write (0) bit. The slave device that matches the address acknowledges receipt with a NACK.
4.  **Data Transmission:** `i2c_master_send_byte()` sends a data byte to the slave. The slave acknowledges receipt with a NACK.
5.  **Stop Condition:** `i2c_master_stop()` generates the I2C STOP condition, releasing the bus.
6.  **Control Sequence:** In `main()`, the process involves starting the bus, sending the motor controller's address, sending commands for the motor channel, and then sending the desired speed value. The motor controller interprets these bytes to adjust its output.

## Key Considerations for Actuator Control

*   **Datasheets are Crucial:** Always refer to the datasheet of the actuator or its controller IC. This will specify the communication protocol used, the device's I2C/SPI address, the command set, and the meaning of data bytes.
*   **Protocol Selection:** Choose the protocol based on the actuator's requirements:
    *   **UART:** Simple, low-speed commands.
    *   **SPI:** High-speed, complex control, multiple data bytes needed quickly.
    *   **I2C:** Connecting multiple devices, moderate speed.
*   **Voltage Levels:** Ensure the microcontroller's I/O voltage levels are compatible with the actuator's voltage levels. You might need level shifters.
*   **Timing:** Pay close attention to timing diagrams in datasheets, especially for SPI and I2C, to ensure correct communication.
*   **Error Handling:** Implement checks for acknowledgments (ACK/NACK) in I2C and SPI to detect communication failures. For UART, you might need checksums or other mechanisms if reliability is critical.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/actuator-control-via-communication|Actuator Control via Communication]]
