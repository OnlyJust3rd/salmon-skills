---
type: "medium"
title: "ADC Conversion Triggering"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-conversion-triggering|adc-conversion-triggering]]"
learning-time-in-minutes: 5
---
# ADC Conversion Triggering

Understanding how to initiate an Analog-to-Digital Converter (ADC) conversion is a fundamental step in reading analog sensor data with an AVR microcontroller. This lesson focuses on the specific mechanisms used to tell the ADC when to start converting an analog voltage into a digital value.

## What is ADC Conversion Triggering?

The AVR ADC doesn't continuously sample the input voltage. Instead, it performs conversions on demand. You, as the programmer, need to signal the ADC to begin this conversion process. This signal is often referred to as a "trigger." Once triggered, the ADC takes a snapshot of the analog input voltage and converts it into a 10-bit digital representation.

The way a conversion is triggered can significantly impact your application. Some triggers are manual (initiated by software), while others are automatic, driven by hardware events like timer overflows. Choosing the correct trigger mechanism depends on whether you need precise timing, periodic readings, or simple, on-demand measurements.

## Practical Scenario: Monitoring Battery Voltage

Imagine you're building a simple battery monitoring system using an AVR microcontroller. You want to read the battery's voltage periodically to display it or take action if it gets too low. To do this, you'll connect the battery voltage (properly scaled down to a safe level for the microcontroller's analog input pins) to an ADC channel.

For this scenario, a common approach is to use a timer to trigger ADC conversions at regular intervals. This way, you get a reading every, say, 100 milliseconds, without having to constantly poll the ADC in your main loop. This leaves your main loop free to handle other tasks, like updating a display or responding to button presses.

## Triggering Methods on AVR Microcontrollers

AVR microcontrollers offer several ways to trigger an ADC conversion. The most common ones are:

1.  **Free Running Mode:** In this mode, the ADC continuously converts the input. As soon as one conversion is complete, it starts a new one. This is useful for applications where you need the very latest reading, but it can consume more power and may not be suitable if you need synchronized readings with other system events.

2.  **Single Conversion Mode (Software Trigger):** This is the simplest method. You explicitly set a bit in a control register to start a conversion. After the conversion is complete, the ADC automatically resets to an idle state, waiting for the next trigger. This is ideal for when you need to read a sensor only when a specific event occurs (e.g., a button press) or when you're developing and want to test the ADC functionality.

3.  **Event Triggered Modes (Hardware Trigger):** The AVR ADC can be triggered by various hardware events. Common event sources include:
    *   **Timer/Counter overflows:** For periodic sampling.
    *   **Comparator outputs:** For detecting voltage thresholds.
    *   **External interrupt pins:** For triggering based on external signals.

    This lesson will focus on **Software Triggering (Single Conversion Mode)** as it's the most direct way to understand the initiation process and is a prerequisite for understanding more complex hardware triggering.

## Implementing Software Triggering in C

To initiate an ADC conversion using software, you primarily interact with two registers:

*   **`ADCSRA` (ADC Control and Status Register A):** This register contains the `ADSC` (ADC Start Conversion) bit. Setting this bit to `1` starts a conversion.
*   **`ADMUX` (ADC Multiplexer Selection Register):** While not directly for triggering, `ADMUX` is crucial as it selects which analog input channel the ADC will read *during* the conversion. You must set this *before* starting the conversion.

### Steps for Software Triggering:

1.  **Enable ADC:** Ensure the ADC is powered up by setting the `ADEN` (ADC Enable) bit in `ADCSRA`.
2.  **Select Channel:** Configure `ADMUX` to select the desired analog input pin (e.g., `ADC0`, `ADC1`, etc.).
3.  **Set Reference Voltage:** Configure `ADMUX` to select the voltage reference for the ADC conversion (e.g., internal voltage reference, external AREF pin).
4.  **Clear `ADSC` (if necessary):** Ensure the `ADSC` bit is clear (`0`) before you intend to set it.
5.  **Set `ADSC`:** Write a `1` to the `ADSC` bit in `ADCSRA` to start the conversion.
6.  **Wait for Completion:** The `ADSC` bit remains `1` until the conversion is complete. You can poll this bit, or more efficiently, wait for the `ADIF` (ADC Interrupt Flag) bit in `ADCSRA` to be set. Setting `ADIF` indicates that a conversion has finished.

### Code Example: Single Software Triggered Conversion

Let's assume we're using an ATmega328P (common in Arduino Uno). We want to read from `ADC0`.

```c
#include <avr/io.h>
#include <util/delay.h> // For delay functions, though not strictly for ADC triggering itself

// Function to initialize the ADC
void adc_init() {
    // 1. Enable ADC
    ADCSRA |= (1 << ADEN); // Set ADEN bit in ADCSRA

    // 2. Select Channel (e.g., ADC0) - Assuming ADMUX is already set to 0 for channel 0
    // We'll set this before each conversion in this example for clarity,
    // but it's often set once in initialization if reading from a single channel.

    // 3. Set Reference Voltage (e.g., AVCC with external capacitor at AREF pin)
    // For ATmega328P, REFS1:0 bits in ADMUX control this.
    // REFS0 = 1, REFS1 = 0 selects AVCC as reference.
    ADMUX &= ~((1 << REFS1) | (1 << REFS0)); // Clear REFS bits
    ADMUX |= (1 << REFS0); // Set REFS0 for AVCC reference

    // Optional: Set prescaler for ADC clock. A prescaler of 32 is often a good starting point.
    // ADPS2:0 bits in ADCSRA control this.
    // 110 -> prescaler 64
    ADCSRA |= (1 << ADPS2) | (1 << ADPS1) | (0 << ADPS0); // Set prescaler to 64
}

// Function to start and complete a single ADC conversion
uint16_t adc_read(uint8_t channel) {
    // Select the desired channel
    // Clear the MUX bits first to avoid unintended selections if other bits are set.
    ADMUX &= ~((1 << MUX3) | (1 << MUX2) | (1 << MUX1) | (1 << MUX0));
    ADMUX |= (channel & 0x0F); // Set the channel bits

    // 4. Ensure ADSC is clear (optional, but good practice)
    // ADCSRA &= ~(1 << ADSC); // Clear ADSC bit - not strictly needed as it clears on completion

    // 5. Start the conversion
    ADCSRA |= (1 << ADSC); // Set ADSC bit to start conversion

    // 6. Wait for the conversion to complete
    // Poll the ADSC bit (it becomes 0 when conversion is done)
    while (ADCSRA & (1 << ADSC)) {
        // Wait
    }
    // Alternatively, poll the ADIF bit (interrupt flag)
    // while (!(ADCSRA & (1 << ADIF)));
    // ADCSRA |= (1 << ADIF); // Clear the interrupt flag after reading the result

    // Read the ADC result (10-bit value)
    // The result is stored in ADCW (ADC Data Register)
    return ADCW;
}

int main(void) {
    // Initialize the ADC
    adc_init();

    uint16_t battery_value;

    while (1) {
        // Read from ADC channel 0 (where the scaled battery voltage is connected)
        battery_value = adc_read(0);

        // Now 'battery_value' holds the digital representation of the analog voltage.
        // You would then process this value (e.g., convert it back to volts,
        // compare it to a threshold, display it).

        // For demonstration, let's just print a placeholder or delay
        // In a real application, you'd do something with battery_value here.
        _delay_ms(500); // Wait for 500ms before taking another reading
    }

    return 0; // Should not reach here in an embedded system
}
```

**Explanation of the Code:**

*   `adc_init()`: Sets up the ADC. `ADEN` enables the ADC. `REFS0` is set for AVCC reference. The prescaler is set to 64, which divides the system clock by 64 to generate the ADC clock. A good ADC clock speed is usually between 50kHz and 200kHz.
*   `adc_read(uint8_t channel)`:
    *   It first configures `ADMUX` to select the input channel.
    *   Then, it sets the `ADSC` bit in `ADCSRA`. This is the critical step that **triggers** the conversion.
    *   The `while (ADCSRA & (1 << ADSC))` loop polls the `ADSC` bit. This bit is automatically cleared by the hardware when the conversion is complete, exiting the loop.
    *   Finally, `ADCW` (a 16-bit register that combines `ADCL` and `ADCH`) is read, containing the 10-bit conversion result.

## Practice Task

Write a C function `trigger_and_read_adc(uint8_t channel)` that:

1.  Takes an `ADC` channel number (0-7 for most AVRs) as an argument.
2.  Configures `ADMUX` to select the provided channel.
3.  Initiates an ADC conversion by setting the `ADSC` bit.
4.  Waits for the conversion to complete by polling the `ADSC` bit.
5.  Returns the 10-bit digital value read from `ADCW`.

Ensure your function assumes that `adc_init()` has already been called and that the ADC is enabled and configured with a suitable reference voltage and prescaler.

## Self-Check Questions

1.  What is the primary purpose of the `ADSC` bit in the `ADCSRA` register?
2.  Why is it important to select the ADC channel using `ADMUX` *before* triggering a conversion?
3.  In the provided code example, what does the `while (ADCSRA & (1 << ADSC))` loop do, and how does it indicate that a conversion is finished?
4.  What are the advantages of using hardware event triggering over software triggering for periodic sensor readings? (Briefly explain).
5.  If you wanted to read from `ADC2`, what value would you bitwise OR with the `ADMUX` register after clearing its channel selection bits?

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-conversion-triggering|ADC Conversion Triggering]]
