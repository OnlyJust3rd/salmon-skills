---
type: medium
title: Reading ADC Conversion Results
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[adc-result-reading|adc-result-reading]]"
learning-time-in-minutes: 4
---
# Reading ADC Conversion Results

This lesson focuses on how to retrieve the digital value from the AVR microcontroller's Analog-to-Digital Converter (ADC) after a conversion has been completed. Understanding this is crucial for accurately interpreting analog sensor data.

## What is ADC Result Reading?

Once the AVR microcontroller's ADC has finished converting an analog voltage into a digital value, that digital result needs to be read and stored in a variable for further processing. The ADC hardware presents this digital result in specific registers.

The AVR ADC typically provides a 10-bit resolution, meaning the digital output can range from 0 to 1023. This 10-bit result is usually stored in two 8-bit registers. For most AVR microcontrollers (like the ATmega328P found on Arduino boards), these registers are named `ADCL` (ADC Data Low Register) and `ADCH` (ADC Data High Register).

The specific arrangement of the bits in `ADCL` and `ADCH` depends on the AVR architecture, but generally, the most significant bits (MSBs) are in `ADCH` and the least significant bits (LSBs) are in `ADCL`.

**Important Note:** When reading the 10-bit result, it's essential to read the `ADCL` register *first*, and then the `ADCH` register. This order is critical to ensure you get a correct, synchronized 10-bit value. If you read `ADCH` first, and a new conversion starts during the read process, the LSBs might be corrupted.

## Practical Example: Reading a Potentiometer Value

Let's imagine we have a potentiometer connected to an analog input pin (let's say, analog pin 0, which corresponds to ADC channel 0). We want to read the position of the potentiometer and display it.

### Setup (Conceptual)

Before reading, we need to ensure the ADC is configured and a conversion has started. This typically involves:

1.  **Selecting the Analog Channel:** Setting the `ADMUX` register to choose the desired analog input pin.
2.  **Setting Reference Voltage:** Configuring the `ADMUX` register for the voltage reference.
3.  **Enabling the ADC:** Setting the `ADEN` bit in the `ADCSRA` register.
4.  **Starting a Conversion:** Setting the `ADSC` bit in the `ADCSRA` register.

Once `ADSC` is set, the ADC will perform the conversion. We then need to wait for it to complete. The completion is signaled by the `ADIF` (ADC Interrupt Flag) bit in the `ADCSRA` register. When `ADIF` is set, the conversion is done.

### Reading the Result

After the conversion is complete (indicated by `ADIF` being set), we can read the results from `ADCL` and `ADCH`.

```c
// Assume ADC is already configured and a conversion has started.
// The ADSC bit has been set and we are waiting for ADIF to be set.

// Wait for ADC conversion to complete
while (ADCSRA & (1 << ADIF)) {
    // Wait here until the ADIF flag is set.
    // In a real application, you might use interrupts or do other work.
}

// Read the 10-bit ADC result
// Important: Read ADCL first, then ADCH
uint8_t low_byte = ADCL;
uint8_t high_byte = ADCH;

// Combine the bytes to form the 10-bit value
uint16_t adc_result = (high_byte << 8) | low_byte;

// Now 'adc_result' holds the 10-bit digital value (0-1023)
// You can now use this value, e.g., to calculate voltage or display it.
```

**Explanation:**

*   `while (ADCSRA & (1 << ADIF))`: This loop checks if the `ADIF` bit (ADC Interrupt Flag) in the `ADCSRA` register is set. The `&` (bitwise AND) operator combined with `(1 << ADIF)` checks if that specific bit is `1`. The loop continues as long as the `ADIF` bit is *not* set (meaning the conversion is not yet finished). In many embedded scenarios, this busy-wait loop is acceptable for simple tasks, but for more complex systems, interrupt-driven ADC reading is preferred.
*   `uint8_t low_byte = ADCL;`: We read the lower 8 bits of the ADC result into an 8-bit unsigned integer variable `low_byte`.
*   `uint8_t high_byte = ADCH;`: We read the higher 8 bits of the ADC result into an 8-bit unsigned integer variable `high_byte`.
*   `uint16_t adc_result = (high_byte << 8) | low_byte;`: This is the core of combining the two bytes.
    *   `(high_byte << 8)`: This left-shifts all bits in `high_byte` by 8 positions. This effectively moves the bits that represent the higher 8 bits of the 10-bit result into the upper positions of a 16-bit space. For example, if `high_byte` was `0b00000101`, after shifting it becomes `0b010100000000`.
    *   `| low_byte`: This is a bitwise OR operation. It combines the shifted `high_byte` with `low_byte`. Since the lower 8 bits of the shifted `high_byte` are now zeros, the bits from `low_byte` fill in those positions, perfectly reconstructing the 10-bit value. For example, if `low_byte` was `0b11010110`, the result would be `0b010111010110`, which is the 10-bit value 758.
*   `uint16_t adc_result`: We use a 16-bit unsigned integer to store the combined 10-bit result, as the maximum value (1023) requires 10 bits.

## Practice Task

Write a C code snippet for an AVR microcontroller that performs the following:

1.  Assumes the ADC is already enabled and configured to use the internal voltage reference (e.g., VCC with a capacitor at AREF).
2.  Selects ADC channel 1.
3.  Starts a single ADC conversion.
4.  Waits for the conversion to complete.
5.  Reads the 10-bit result from `ADCL` and `ADCH`.
6.  Combines these into a single `uint16_t` variable named `sensor_value`.
7.  *Optional (for deeper understanding):* If you were using a system where you *also* needed to clear the `ADIF` flag manually, show how you would do that after reading the result.

## Self-Check Questions

1.  Why is the order of reading `ADCL` before `ADCH` critical?
2.  What is the maximum value a 10-bit ADC can represent?
3.  If `ADCH` contains `0b00000101` and `ADCL` contains `0b11010110`, what is the final 10-bit `adc_result` when combined? (Express in binary).
4.  What bit in the `ADCSRA` register signals that an ADC conversion is complete?

## Supports

- [[adc-result-reading|ADC Result Reading]]
