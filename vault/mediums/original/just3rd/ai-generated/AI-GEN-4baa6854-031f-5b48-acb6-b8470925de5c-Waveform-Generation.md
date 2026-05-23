---
type: "medium"
title: "Generating Waveforms with AVR Timers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/waveform-generation|waveform-generation]]"
learning-time-in-minutes: 5
---
# Generating Waveforms with AVR Timers

This lesson focuses on using AVR microcontroller timers and counters to generate specific signal patterns, often referred to as waveforms. This is a fundamental aspect of interfacing with the real world, enabling tasks like creating audio tones, controlling motor speeds with PWM, or generating precise timing signals for communication.

## Understanding Waveform Generation

Waveform generation involves controlling the output pin of an AVR microcontroller to switch between HIGH and LOW states at precise intervals. Timers and counters are ideal for this because they can be configured to trigger events or alter output states automatically based on a predetermined count or time interval.

The core concept is to leverage the timer's ability to:
1.  **Count:** Increment at a specific rate (determined by the system clock and prescaler).
2.  **Compare:** Match its current count value against a predefined value (in the Compare Match Register - OCRnx).
3.  **Act:** Perform an action when a match occurs, such as toggling an output pin or generating an interrupt.

For waveform generation, we'll primarily focus on the **Compare Match Output Mode** of the AVR timers. This mode allows the timer to automatically control an output pin (usually associated with a Timer Output Compare pin, like OC0A, OC0B, OC1A, etc.) based on the comparison of the timer's counter value with the value in the Output Compare Register (OCRnx).

## Practical Example: Generating a Square Wave

Let's aim to generate a simple square wave on an AVR microcontroller pin. A square wave alternates between a HIGH and LOW state with equal duration for each state. We can achieve this using Timer/Counter0 (Timer0) in Clear Timer on Compare Match (CTC) mode.

In CTC mode, the timer counts up until it reaches the value in the OCR0A register. At this point, the timer resets to zero, and an event can be triggered. We'll configure this event to toggle an output pin.

### Components Needed:

*   An AVR microcontroller (e.g., ATmega328P found on Arduino Uno)
*   A way to program the AVR (e.g., an Arduino Uno board)
*   A basic understanding of AVR registers.

### Code Implementation (C for AVR-GCC)

We'll use Timer0 in CTC mode.

**1. Configuration Steps:**

*   **Set Timer Mode:** Configure Timer/Counter Control Register B (TCCR0B) for CTC mode.
*   **Set Prescaler:** Choose a prescaler (from TCCR0B) to control the timer's clock speed. A prescaler divides the system clock. For example, a prescaler of 64 means the timer increments every 64 system clock cycles.
*   **Set Compare Value (OCR0A):** Determine the value for OCR0A. This value, along with the prescaler, dictates the frequency of the waveform.
*   **Configure Output Pin:** Set the relevant data direction register (DDR) for the chosen output pin to be an output.
*   **Set Compare Match Output Mode:** Configure Timer/Counter Control Register A (TCCR0A) to toggle the OC0A pin on Compare Match.

**2. Calculation for Frequency:**

The frequency of the generated waveform is given by:

\[
f_{out} = \frac{f_{clk}}{2 \cdot N \cdot (1 + OCR0A)}
\]

Where:
*   \(f_{out}\) is the output frequency.
*   \(f_{clk}\) is the system clock frequency (e.g., 16 MHz for Arduino Uno).
*   \(N\) is the prescaler value (1, 8, 64, 256, 1024).
*   \(OCR0A\) is the value in the Output Compare Register A for Timer0.

Let's aim for a frequency of approximately 1 kHz.
Assuming \(f_{clk} = 16 \text{ MHz}\) and we choose a prescaler \(N = 64\).

\(1000 \text{ Hz} = \frac{16,000,000 \text{ Hz}}{2 \cdot 64 \cdot (1 + OCR0A)}\)
\(1 + OCR0A = \frac{16,000,000}{2 \cdot 64 \cdot 1000}\)
\(1 + OCR0A = \frac{16,000,000}{128,000}\)
\(1 + OCR0A = 125\)
\(OCR0A = 124\)

So, we need to set OCR0A to 124.

**3. C Code Example (for ATmega328P, e.g., Arduino Uno):**

This code assumes you are running on an Arduino Uno and want to generate a 1 kHz square wave on pin D6, which is the OC0A pin for Timer0.

```c
#include <avr/io.h>
#include <util/delay.h>

// Define system clock frequency
#define F_CPU 16000000UL // 16 MHz for Arduino Uno

int main(void) {
    // Set OC0A pin (Digital Pin 6 on Arduino Uno) as output
    DDRD |= (1 << PD6);

    // Configure Timer0 for CTC mode
    // WGM02:0 = 010 (CTC mode)
    TCCR0A |= (1 << WGM01);
    TCCR0B &= ~((1 << WGM02) | (1 << WGM00));

    // Set the Output Compare Register A value
    OCR0A = 124; // Calculated value for ~1kHz with prescaler 64

    // Set Compare Match Output Mode: Toggle OC0A on Compare Match
    // COM0A1:0 = 01 (Toggle OC0A on Compare Match)
    TCCR0A |= (1 << COM0A0);
    TCCR0A &= ~(1 << COM0A1);

    // Set Prescaler: 64
    // CS02:0 = 011 (Prescaler 64)
    TCCR0B |= (1 << CS01) | (1 << CS00);
    TCCR0B &= ~(1 << CS02);

    // Enable global interrupts (not strictly necessary for pure waveform generation,
    // but good practice if you might add interrupt-driven features later)
    // sei();

    while (1) {
        // Main loop is empty as the timer handles waveform generation automatically
        // You could add other non-time-critical tasks here.
    }

    return 0;
}
```

### How it Works:

1.  `DDRD |= (1 << PD6);`: This line configures Digital Pin 6 (which is PD6 on the ATmega328P) as an output pin. The `|=` (bitwise OR assign) ensures that only the bit corresponding to PD6 is set to 1, leaving other bits in DDRD unaffected.
2.  `TCCR0A |= (1 << WGM01); TCCR0B &= ~((1 << WGM02) | (1 << WGM00));`: These lines set Timer0 to operate in CTC mode. WGM bits are spread across TCCR0A and TCCR0B. For CTC mode, we need `WGM01` set and `WGM02`, `WGM00` cleared.
3.  `OCR0A = 124;`: This sets the target count value. When Timer0's counter reaches 124, a Compare Match event will occur.
4.  `TCCR0A |= (1 << COM0A0); TCCR0A &= ~(1 << COM0A1);`: This configures the output behavior for the OC0A pin. Setting `COM0A0` and clearing `COM0A1` tells the timer to *toggle* the OC0A pin's state every time a Compare Match occurs.
5.  `TCCR0B |= (1 << CS01) | (1 << CS00); TCCR0B &= ~(1 << CS02);`: This sets the prescaler for Timer0 to 64. The `CS02:0` bits determine the clock source and prescaler. Bits `CS01` and `CS00` set to 1, and `CS02` set to 0, selects a prescaler of 64. This means Timer0 increments every 64 system clock cycles.
6.  `while (1)`: The main loop is empty because once configured, the timer and its associated output pin behavior run automatically in hardware, independent of the CPU's main loop execution.

## Practice Task

Modify the code to generate a square wave with a frequency of approximately 500 Hz on pin PD5 (which is OC0B for Timer0 on ATmega328P).

**Hint:** You will need to adjust the `OCR0A` value (or `OCR0B` if using Timer0 Channel B) and potentially the prescaler. Remember that the OC0B pin is associated with `COM0B0` and `COM0B1` bits in `TCCR0A`.

## Self-Check Questions

1.  What is the role of the Output Compare Register (OCRnx) in waveform generation?
2.  If you wanted to generate a lower frequency waveform, what changes would you make to the Timer configuration?
3.  How would you modify the code to generate a signal that stays HIGH for twice as long as it stays LOW (a duty cycle of 66%)? (This might involve using different timer modes or more complex interrupt handling, but consider what fundamental timer parameters you'd need to adjust).
4.  Explain the purpose of the prescaler in relation to waveform generation.

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/waveform-generation|Waveform Generation]]
