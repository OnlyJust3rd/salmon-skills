---
type: "medium"
title: "ADC Reference Voltage Configuration"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-peripheral-programming/microskills/adc-reference-voltage-configuration|ADC Reference Voltage Configuration]]"
---
# ADC Reference Voltage Configuration

To accurately read analog sensor values with your AVR microcontroller's Analog-to-Digital Converter (ADC), you need to define the voltage range the ADC will interpret. This is where configuring the ADC's reference voltage comes in. The reference voltage sets the upper limit of the ADC's measurement scale. Without proper configuration, your readings might be inaccurate, leading to incorrect system behavior.

## Why Reference Voltage Matters

The ADC converts an incoming analog voltage into a digital value. This conversion is done by comparing the input voltage to a known reference voltage.

*   **Higher Reference Voltage:** The ADC can measure a wider range of input voltages. For example, if the reference voltage is 5V, the ADC can distinguish between voltages from 0V up to 5V.
*   **Lower Reference Voltage:** The ADC can measure a narrower range of input voltages. If the reference voltage is 2.5V, the ADC can only accurately measure voltages from 0V up to 2.5V. Any voltage above 2.5V will be clipped at the maximum digital value.

The AVR microcontroller offers several options for setting the reference voltage, each with its own advantages and use cases.

## ADC Reference Voltage Options in AVR Microcontrollers

AVR microcontrollers provide flexibility in choosing the ADC reference voltage. The primary options are typically found in the `ADMUX` (ADC Multiplexer Selection) register.

Here are common reference voltage selections:

| Option                                  | Description                                                                                                                                                                                                                                                                                                                            | Voltage Reference (V<sub>ref</sub>)                                                                                                |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **External AREF Pin**                   | Uses a dedicated pin (AREF) on the microcontroller as the voltage reference. This offers the most flexibility as you can supply a highly stable, external voltage source.                                                                                                                                                              | Voltage supplied to the AREF pin.                                                                                                    |
| **AVCC with external capacitor at AREF** | Connects the AVCC pin (the main power supply for the analog circuitry) to the AREF pin through a capacitor. This option uses the AVCC voltage as the reference but filters it for better stability. A typical capacitor value is 0.1µF or 100nF. This is a common choice for many applications.                                              | AVCC voltage (typically 3.3V or 5V, depending on the microcontroller and power supply).                                             |
| **Internal 2.56V Reference**            | Uses an internal, bandgap-based voltage reference. This is a convenient option as it doesn't require external components. It provides a stable 2.56V reference, suitable for measuring signals within this range.                                                                                                                      | 2.56V (for many AVRs, check your specific datasheet).                                                                                 |
| **Internal 1.1V Reference**             | Similar to the 2.56V reference, but uses a different internal bandgap voltage. This is useful for measuring lower-voltage signals.                                                                                                                                                                                                      | 1.1V (for many AVRs, check your specific datasheet).                                                                                 |

### Selecting the Reference Voltage in C

You'll use specific bit settings within the `ADMUX` register to choose your reference voltage. Let's look at a common scenario for an AVR microcontroller like the ATmega328P (used in Arduino Uno).

The relevant bits in `ADMUX` are `REFS1` and `REFS0`.

*   `REFS1` | `REFS0` | Reference Selection
*   `0` | `0` | AREF, default digital I/O on the AREF pin. Not connected to any voltage source.
*   `0` | `1` | AVCC with external capacitor at AREF pin.
*   `1` | `0` | Internal 2.56V voltage reference, with external capacitor at AREF pin.
*   `1` | `1` | Internal 1.1V voltage reference, with external capacitor at AREF pin.

#### Practical Example: Using AVCC as Reference

Let's say you want to read a sensor that outputs a voltage between 0V and 5V, and your microcontroller is powered by 5V. A good choice is to use AVCC with an external capacitor.

First, ensure you have a capacitor (e.g., 0.1µF) connected between the AREF pin and GND.

In your C code, you would configure the `ADMUX` register as follows:

```c
#include <avr/io.h>

void setup_adc_reference() {
    // Select AVCC with external capacitor at AREF for ADC reference
    // ADMUX &= ~(1 << REFS1); // Clear REFS1 bit
    // ADMUX |=  (1 << REFS0); // Set REFS0 bit
    // Alternatively, using bitwise OR with a mask for clarity:
    ADMUX = (ADMUX & ~((1 << REFS1) | (1 << REFS0))) | (1 << REFS0);

    // You might also need to configure other ADMUX bits, like selecting the ADC channel.
    // For example, to select ADC0 (PA0):
    // ADMUX = (ADMUX & 0xF0) | 0; // Clear lower 4 bits and set to 0 for ADC0
}

int main(void) {
    setup_adc_reference();

    // ... rest of your ADC reading code ...

    while (1) {
        // ADC conversion happens here
    }

    return 0;
}
```

**Explanation:**

1.  `#include <avr/io.h>`: This header file provides definitions for AVR I/O registers, including `ADMUX`.
2.  `ADMUX &= ~((1 << REFS1) | (1 << REFS0))`: This part clears both the `REFS1` and `REFS0` bits. We use bitwise AND (`&`) with the bitwise NOT (`~`) of a combined mask `((1 << REFS1) | (1 << REFS0))`. This ensures that any previous settings for these bits are reset to `0`.
3.  `| (1 << REFS0)`: This part then sets the `REFS0` bit to `1`.
    *   `REFS1` is `0`.
    *   `REFS0` is `1`.
    *   This combination (`01`) corresponds to the "AVCC with external capacitor at AREF pin" option.

#### Important Considerations:

*   **Datasheet is Key:** Always consult the datasheet for your specific AVR microcontroller. The exact register names, bit positions, and available reference voltages can vary.
*   **External Capacitor:** For AVCC and internal reference options that mention an external capacitor at AREF, do not omit it. It's crucial for stabilizing the reference voltage and preventing noise.
*   **Voltage Range:** Ensure your sensor's output voltage is within the range defined by your chosen reference voltage. If your sensor can output up to 5V, and you set a 2.56V reference, you'll lose resolution and accuracy for values above 2.56V.
*   **AVCC Stability:** If you use AVCC as the reference, ensure your AVCC power supply is as clean and stable as possible. Fluctuations in AVCC will directly affect your ADC readings.
*   **Initialization Order:** Configure the reference voltage *before* starting any ADC conversions.

### Practice Task

1.  Identify the `ADMUX` register and the reference selection bits (`REFS1`, `REFS0`) for your target AVR microcontroller by consulting its datasheet.
2.  Write a C function, `configure_adc_ref(int ref_option)`, that takes an integer representing the desired reference option (e.g., 0 for AREF, 1 for AVCC, 2 for internal 2.56V, 3 for internal 1.1V) and configures the `ADMUX` register accordingly.
3.  In your `main` function, call this `configure_adc_ref` function to set the reference voltage to the "Internal 2.56V Reference" option.

---

### Self-Check Questions

1.  What is the primary purpose of configuring the ADC reference voltage?
2.  If you connect a sensor that outputs voltages up to 5V, and you accidentally configure the ADC with an internal 1.1V reference, what will happen to readings above 1.1V?
3.  What are the advantages of using an internal voltage reference compared to an external one?
4.  Why is it important to connect a capacitor to the AREF pin when using the "AVCC with external capacitor" or internal reference options?
5.  How do the `REFS1` and `REFS0` bits in the `ADMUX` register determine the voltage reference selection?

## Supports

- [[skills/programming/programming-languages/avr-peripheral-programming/microskills/adc-reference-voltage-configuration|ADC Reference Voltage Configuration]]
