---
type: medium
title: Selecting the ADC Channel on AVR Microcontrollers
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[adc-channel-selection|adc-channel-selection]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-programming/avr-peripheral-programming/avr-peripheral-programming|avr-peripheral-programming]]"
learning-time-in-minutes: 4
---
# Selecting the ADC Channel on AVR Microcontrollers

To read analog sensor values using the Analog-to-Digital Converter (ADC) on an AVR microcontroller, you first need to tell the microcontroller *which* analog input pin you want to read from. This process is called **ADC channel selection**. Each analog input pin on the AVR is multiplexed, meaning it can be selected as an input to the ADC.

## Why Channel Selection Matters

AVR microcontrollers typically have multiple analog input pins. The ADC hardware is designed to sample one of these pins at a time. By selecting a specific channel, you are configuring the internal analog multiplexer to connect the desired input pin to the ADC's core sampling circuitry.

## How Channel Selection Works

Channel selection is managed by specific bits within a control register, usually named `ADMUX` (ADC Multiplexer Selection Register). This register not only determines the input channel but also can configure other ADC settings like the voltage reference.

For common AVR microcontrollers (like the ATmega328P found on Arduino boards), the analog input pins are labeled `ADC0`, `ADC1`, `ADC2`, and so on. These correspond to specific physical pins on the microcontroller package.

The `ADMUX` register typically has bits dedicated to selecting the analog channel. For example, the lower 3 bits of `ADMUX` (often referred to as `MUX3:0`) are used to select one of up to 8 analog input channels.

| MUX3 | MUX2 | MUX1 | MUX0 | Channel Description |
|------|------|------|------|---------------------|
| 0    | 0    | 0    | 0    | ADC0 (Single-ended) |
| 0    | 0    | 0    | 1    | ADC1 (Single-ended) |
| 0    | 0    | 1    | 0    | ADC2 (Single-ended) |
| ...  | ...  | ...  | ...  | ...                 |
| 0    | 1    | 1    | 0    | ADC6 (Single-ended) |
| 0    | 1    | 1    | 1    | ADC7 (Single-ended) |

*Note: The exact number and mapping of channels can vary slightly between different AVR families. Always consult the datasheet for your specific AVR microcontroller.*

To select a channel, you write a specific binary value to these `MUX` bits. For instance, to select `ADC0`, you'd set the `MUX` bits to `000`. To select `ADC2`, you'd set them to `010`.

## Practical Example: Reading a Potentiometer

Let's say you have a potentiometer connected to the `ADC1` pin of your AVR microcontroller. The potentiometer's wiper is connected to `ADC1`, and the outer terminals are connected to the AVR's `AVCC` (analog supply voltage) and `GND` (ground).

To read the value from this potentiometer, you first need to select `ADC1` as the input channel.

Here's a simplified C code snippet for an ATmega328P:

```c
#include <avr/io.h>

void setup_adc() {
    // Configure ADMUX for ADC1
    // Clear existing channel bits and set the new channel
    // For ADC1, MUX bits should be 0001 (binary)
    ADMUX = (ADMUX & ~0x1F) | 0x01; // Select ADC1

    // Enable ADC and set prescaler (e.g., for 16MHz clock, prescaler 128)
    ADCSRA = (1 << ADEN) | (1 << ADPS2) | (1 << ADPS1) | (1 << ADPS0);
}

uint16_t read_adc(uint8_t channel) {
    // Note: In this specific example, 'channel' parameter is redundant
    // if setup_adc() already selected the channel.
    // For a more general function, you'd select the channel here.

    // Start the conversion
    ADCSRA |= (1 << ADSC);

    // Wait for the conversion to complete
    while (ADCSRA & (1 << ADSC));

    // Return the result (10-bit value)
    return ADC;
}

int main(void) {
    setup_adc(); // Initialize ADC and select ADC1

    uint16_t sensor_value;

    while (1) {
        sensor_value = read_adc(1); // Read from the pre-selected ADC1
        // Now 'sensor_value' holds the 10-bit ADC reading from the potentiometer.
        // You would typically send this value over serial or use it to control something.
    }
    return 0;
}
```

**Explanation of the `setup_adc()` function:**

1.  `ADMUX = (ADMUX & ~0x1F) | 0x01;`
    *   `0x1F` in binary is `00011111`. This mask covers the lower 5 bits of `ADMUX` which are used for channel selection and reference selection.
    *   `ADMUX & ~0x1F` effectively clears the lower 5 bits of `ADMUX`, ensuring we start with a clean slate for channel selection.
    *   `| 0x01` (binary `00000001`) sets the lower bits to select `ADC1`.
        *   `00000` (previous state, cleared)
        *   `00001` (new state, selecting ADC1)
        *   This results in `ADMUX` having its channel selection bits set to `00001`.

**Important Consideration:** The `ADMUX` register also contains bits for selecting the voltage reference (`REFS1:0`). When you modify `ADMUX` for channel selection, you must also ensure that the voltage reference bits are set correctly according to your needs. In the example above, we only focused on channel selection, assuming default voltage reference settings are acceptable or handled elsewhere.

## Practice Task

You have a temperature sensor (like a thermistor) whose analog output is connected to the `ADC4` pin of your AVR microcontroller. Write a C function called `select_and_read_temp_sensor()` that:

1.  Selects `ADC4` as the input channel for the ADC.
2.  Initiates an ADC conversion.
3.  Waits for the conversion to complete.
4.  Returns the 10-bit ADC reading.

Assume the ADC has already been enabled and the prescaler configured in a separate `setup_adc_defaults()` function that you can call before `select_and_read_temp_sensor()`.

## Self-Check Questions

1.  Which register is primarily used for selecting the analog-to-digital converter (ADC) channel on AVR microcontrollers?
2.  What do the lower bits of the `ADMUX` register typically control regarding analog input?
3.  If you want to read from `ADC3`, what binary value would you need to set the `MUX` bits in the `ADMUX` register to (assuming only the `MUX` bits are being modified)?
4.  Why is it important to be aware of other settings within the `ADMUX` register (like voltage reference) when selecting a channel?

## Supports

- [[adc-channel-selection|ADC Channel Selection]]
