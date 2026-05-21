---
type: "medium"
title: "ADC Control and Status Registers"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-peripheral-programming/microskills/adc-control-and-status-registers|adc-control-and-status-registers]]"
---
# ADC Control and Status Registers

The Analog-to-Digital Converter (ADC) on AVR microcontrollers allows you to read real-world analog signals, like voltage from a sensor, and convert them into digital values your microcontroller can process. To control this process and get the converted data, you'll interact with specific registers. Understanding these registers is key to configuring the ADC for your needs.

## What are ADC Registers?

ADC registers are special memory locations within the AVR microcontroller that directly control the ADC's behavior and hold its results. By writing specific values to these registers, you can:

*   Select the analog input channel.
*   Configure the reference voltage for the conversion.
*   Set the resolution of the conversion.
*   Start a new conversion.
*   Check if a conversion is complete.
*   Read the digital result of a conversion.

We'll focus on some of the most common and important registers for basic ADC operation.

## Key ADC Registers

Let's look at the primary registers involved in using the ADC. The exact names and bit fields might vary slightly between different AVR families (like ATmega or ATtiny), but the concepts remain the same. We'll use common ATmega register names.

### ADMUX (ADC Multiplexer Selection Register)

This register controls which analog input pin is currently being measured and how the reference voltage is set.

| Bit(s) | Name   | Description                                                                                                                                                                                                                                                         |
| :----- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7:6    | REFS1:REFS0 | Reference Selection Bits. These bits determine the voltage source for the ADC conversion. Common options include external AREF pin, internal voltage reference, or AVCC.                                                                                                |
| 5      | ADLAR  | ADC Left Adjust. If set (1), the 10-bit result is left-adjusted, meaning the most significant bits are in ADCH. If cleared (0), the result is right-adjusted, with the least significant bits in ADCL. For 10-bit results, right adjustment is usually preferred. |
| 4:0    | MUX3:MUX0 | Analog Channel Selection Bits. These bits select which of the available analog input channels (ADC0 to ADC7, or more on some devices) is connected to the ADC.                                                                                                    |

### ADCSRA (ADC Control and Status Register A)

This register contains bits for enabling the ADC, starting conversions, and controlling the conversion speed. It also has a flag to indicate when a conversion is complete.

| Bit(s) | Name   | Description                                                                                                                                                                                                                                                                                                                                            |
| :----- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7      | ADEN   | ADC Enable. Set to 1 to enable the ADC. If cleared (0), the ADC is powered down, saving power.                                                                                                                                                                                                                                                            |
| 6      | ADSC   | ADC Start Conversion. Writing a 1 to this bit starts an ADC conversion. This bit is automatically cleared (0) when the conversion is finished.                                                                                                                                                                                                         |
| 5      | ADFR   | ADC Free Running Mode Select. If set, the ADC runs in free-running mode, continuously converting. If cleared, it performs a single conversion when ADSC is set.                                                                                                                                                                                      |
| 4:3    | ADPS2:ADPS0 | ADC Prescaler Select Bits. These bits determine the division factor between the system clock and the ADC clock. The ADC clock frequency needs to be within a specific range for optimal performance (typically 50 kHz to 200 kHz). A common prescaler is 128 for a 16 MHz system clock, resulting in an ADC clock of ~125 kHz. |
| 0      | ADIF   | ADC Interrupt Flag. This bit is set (1) by the ADC hardware when a conversion is complete. It can be cleared by writing a 1 to it. If the ADIE bit in ADSCRA is set, this flag also triggers an interrupt.                                                                                                                                           |

### ADCL and ADCH (ADC Data Registers)

These two registers hold the 10-bit result of an ADC conversion.

*   **ADCL:** Holds the 8 Least Significant Bits (LSBs) of the conversion result.
*   **ADCH:** Holds the 2 Most Significant Bits (MSBs) of the conversion result.

If the ADLAR bit in ADMUX is 0 (right-adjusted, the default), the 10-bit result is read by first reading ADCL, then ADCH. For example, a result of `0b000010110101` would be stored as `ADCL = 0b10110101` and `ADCH = 0b00000010`. To reconstruct the full 10-bit value, you would combine them: `(ADCH << 8) | ADCL`.

If ADLAR is 1 (left-adjusted), the result is stored as `ADCH = 0b00001011` and `ADCL = 0b01010000`. The 10-bit result is then `ADCH` and the top 2 bits of `ADCL`.

## Practical Scenario

Imagine you want to read the voltage from a potentiometer connected to analog input pin ADC0 on an ATmega328P (used in Arduino Uno). You want to use the internal 1.1V voltage reference for better stability than relying on the AVCC pin.

Here's how you would configure the registers:

1.  **Select the Reference and Channel:**
    *   We want the internal 1.1V reference. Looking at the REFS bits in ADMUX, `REFS1=0` and `REFS0=1` selects the internal 1.1V reference.
    *   We want to read from ADC0, so `MUX3:0` should be `00000`.
    *   We'll use right-adjusted results, so `ADLAR=0`.

    So, `ADMUX` would be configured to `0b01000000`.

2.  **Enable the ADC and Set Prescaler:**
    *   We need to enable the ADC, so `ADEN=1`.
    *   We want to start a single conversion, so `ADSC=1` will be set later.
    *   Let's assume our system clock is 16 MHz. To get an ADC clock around 125 kHz (16 MHz / 128), we set the prescaler bits `ADPS2:0` to `111`.
    *   We don't need free-running mode, so `ADFR=0`.
    *   Interrupts are not needed for this basic example, so `ADIE` (if it were in this register, it's actually in ADCSRB on some parts, or enabled via a separate interrupt vector control register) would be off.

    So, `ADCSRA` would be configured to `0b10000111`.

3.  **Start the Conversion:**
    *   Write to `ADCSRA` to enable the ADC and set the prescaler.
    *   Then, set the `ADSC` bit in `ADCSRA` to start the conversion.

    ```c
    // Example configuration (syntax may vary based on compiler/library)

    // Set Reference voltage to internal 1.1V and select channel ADC0
    ADMUX = (1 << REFS1) | (0 << REFS0) | (0 << ADLAR) | (0 << MUX0); // MUX3-0 set to 0000 for ADC0

    // Enable ADC, set prescaler to 128 (for 16MHz clock -> ~125kHz ADC clock)
    ADCSRA = (1 << ADEN) | (1 << ADPS2) | (1 << ADPS1) | (1 << ADPS0);

    // Start a single conversion
    ADCSRA |= (1 << ADSC);

    // Wait for the conversion to complete (ADSC bit will clear)
    while (ADCSRA & (1 << ADSC));

    // Read the 10-bit result
    uint16_t adc_result = (ADCH << 8) | ADCL;

    // Now 'adc_result' holds the digital value (0-1023)
    ```

After the `while` loop, the conversion is done, and `adc_result` will contain the digital representation of the analog voltage on ADC0, scaled according to the 1.1V reference.

## Practice Task

Identify the registers and bit fields you would need to modify to:

1.  Read from analog channel ADC3.
2.  Use the AVCC pin as the voltage reference.
3.  Set the ADC prescaler to divide the system clock by 64.
4.  Ensure the result is left-adjusted.

Write down the expected hexadecimal values for `ADMUX` and `ADCSRA` after setting these configurations.

## Self-Check Questions

1.  What is the purpose of the `ADMUX` register?
2.  Which bit in `ADCSRA` is used to start an ADC conversion?
3.  What happens to the `ADSC` bit after a conversion starts?
4.  How do you reconstruct a 10-bit ADC result from `ADCL` and `ADCH` when `ADLAR` is 0?
5.  Why is it important to set the ADC prescaler correctly?

## Supports

- [[skills/programming/programming-languages/avr-peripheral-programming/microskills/adc-control-and-status-registers|ADC Control and Status Registers]]
