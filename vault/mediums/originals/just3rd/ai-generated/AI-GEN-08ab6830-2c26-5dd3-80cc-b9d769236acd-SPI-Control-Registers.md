---
type: medium
title: SPI Control Registers for AVR Microcontrollers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[spi-control-registers|spi-control-registers]]"
learning-time-in-minutes: 5
---
# SPI Control Registers for AVR Microcontrollers

This lesson introduces you to the essential registers used to control the Serial Peripheral Interface (SPI) on AVR microcontrollers. Understanding these registers is crucial for configuring SPI for efficient data transfer.

## What are SPI Control Registers?

SPI is a synchronous serial communication protocol used for short-distance, high-speed communication between microcontrollers and peripheral devices. To utilize SPI on an AVR microcontroller, you need to interact with specific hardware registers. These registers are memory locations within the microcontroller that control the behavior and operation of the SPI module. By writing specific values to these registers, you can enable the SPI, set its operating mode, control data transfer direction, and more.

## Key SPI Control Registers

While the exact register names might vary slightly between different AVR microcontroller families, the core functionality remains consistent. Here are the most common and important registers for SPI control:

### SPCR (SPI Control Register)

This is the primary control register for the SPI module. It contains bits that enable and configure the SPI.

| Bit | Name | Description |
|---|---|---|
| 7 | SPEn | SPI Enable. When set to 1, enables the SPI module. |
| 6 | SPIE | SPI Interrupt Enable. When set to 1, enables SPI interrupt generation. |
| 5 | SPEA | SPI Enable Acknowledgment (used in some configurations, often 0). |
| 4 | DORD | Data Order. When set to 0, MSB is sent first. When set to 1, LSB is sent first. |
| 3 | MSTR | Master/Slave Select. When set to 1, the AVR is configured as the SPI master. When set to 0, it's configured as the slave. |
| 2 | CPOL | Clock Polarity. Defines the idle state of the SPI clock (SCK). <br> 0: SCK is low when idle. <br> 1: SCK is high when idle. |
| 1 | CPHA | Clock Phase. Defines when data is sampled. <br> 0: Data is sampled on the leading clock edge. <br> 1: Data is sampled on the trailing clock edge. |
| 0 | SPR1 | SPI Clock Rate Select 1. Used with SPR0 to select the SPI clock frequency. |

### SPSR (SPI Status Register)

This register provides status information about the SPI module.

| Bit | Name | Description |
|---|---|---|
| 7 | SPIF | SPI Interrupt Flag. Set to 1 when an SPI interrupt is pending (e.g., transmission complete). It's a read/write bit; writing 1 to it clears the interrupt flag. |
| 6 | WCOL | Write Collision Flag. Set to 1 if an attempt is made to write to the SPI Data Register (SPDR) while a transmission is in progress. |
| 5-0 | Reserved | Unused bits. |

### SPDR (SPI Data Register)

This is a read/write register used for transmitting and receiving data. When you write a byte to SPDR, it starts the SPI transmission. When a byte is received, it will be available in SPDR.

### SPSR Clock Rate Bits (SPR0, SPR1)

The SPR1 bit from SPCR, along with an SPR0 bit (often part of SPCR itself or another dedicated register depending on the AVR), are used to select the SPI clock frequency relative to the system clock. This allows you to match the SPI clock speed with that of the peripheral device. Common combinations often relate to dividing the system clock by 4, 16, 64, or 128.

## Practical Scenario: Master Mode Configuration

Imagine you need to connect an AVR microcontroller (acting as the master) to an external SPI sensor that requires the following configuration:

*   SPI enabled.
*   AVR as the master.
*   Data transmitted MSB first.
*   SPI clock idle low and data sampled on the leading edge (Mode 0).
*   A specific clock speed.

Here's how you would configure the SPI control registers in C:

```c
#include <avr/io.h>

void spi_master_init(void) {
    // Set MOSI, SCK, and SS as outputs. MISO as input.
    // For most AVRs, these are part of PORTB
    DDRB |= (1 << DDB5) | (1 << DDB7) | (1 << DDB4); // MOSI, SCK, SS as output
    DDRB &= ~(1 << DDB6); // MISO as input

    // Enable SPI, set as Master, set clock polarity (CPOL=0),
    // clock phase (CPHA=0), and data order (DORD=0 for MSB first).
    // SPR1 and SPR0 bits (here SPR1=0, SPR0=0) will determine clock rate.
    SPCR = (1 << SPE) | (1 << MSTR) | (0 << CPOL) | (0 << CPHA) | (0 << DORD);

    // You might also configure SPI clock rate using SPSR or other bits if needed.
    // For example, to set a faster clock rate:
    // SPSR |= (1 << SPI2X); // Doubles the SPI clock frequency
}

void spi_transmit(uint8_t data) {
    // Load the data into the SPI data register
    SPDR = data;

    // Wait for transmission to complete (SPIF flag is set)
    while (!(SPSR & (1 << SPIF))) {
        // Wait here
    }
    // Reading SPDR also clears the SPIF flag
    uint8_t received_data = SPDR;
}
```

**Explanation of the Code:**

1.  **`DDRB |= (1 << DDB5) | (1 << DDB7) | (1 << DDB4);`**: This line configures the direction of the pins on Port B. `DDB5` is typically MOSI (Master Out Slave In), `DDB7` is SCK (SPI Clock), and `DDB4` is SS (Slave Select) for the master. Setting them as outputs is necessary for the master.
2.  **`DDRB &= ~(1 << DDB6);`**: This line configures the MISO (Master In Slave Out) pin (`DDB6`) as an input.
3.  **`SPCR = (1 << SPE) | (1 << MSTR) | ... ;`**: This is the core configuration.
    *   `(1 << SPE)`: Enables the SPI module.
    *   `(1 << MSTR)`: Sets the AVR to operate as an SPI master.
    *   `(0 << CPOL)` and `(0 << CPHA)`: Configures SPI Mode 0.
    *   `(0 << DORD)`: Configures MSB first data order.
4.  **`spi_transmit(uint8_t data)` function**:
    *   `SPDR = data;`: Writes the byte to be sent into the data register. This initiates the transmission.
    *   `while (!(SPSR & (1 << SPIF)))`: This loop continuously checks the `SPIF` bit in the `SPSR` register. When `SPIF` becomes 1, it means the transmission is complete.
    *   `uint8_t received_data = SPDR;`: Reading from `SPDR` after transmission retrieves any data that was received from the slave. This action also clears the `SPIF` flag.

## Practice Task

1.  Imagine you need to configure your AVR microcontroller as an SPI slave. Which bit in the `SPCR` register would you need to change from the master configuration?
2.  If you wanted to send data with the Least Significant Bit (LSB) first, which bit in `SPCR` would you set?
3.  How would you check if an SPI transmission has completed without using interrupts? Which register and bit would you examine?

## Self-Check Questions

1.  What is the primary function of the `SPCR` register?
2.  What does the `MSTR` bit in `SPCR` control?
3.  How do you initiate an SPI data transmission using the `SPDR` register?
4.  What does the `SPIF` flag in the `SPSR` register indicate?
5.  Which register would you consult to understand the current SPI clock polarity and phase?

## Supports

- [[spi-control-registers|SPI Control Registers]]
