---
type: "medium"
title: "Timer Mode Configuration on AVR Microcontrollers"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-peripheral-programming/microskills/timer-mode-configuration|Timer Mode Configuration]]"
---
# Timer Mode Configuration on AVR Microcontrollers

Timers and counters are fundamental peripherals on AVR microcontrollers, enabling precise control over time-based operations. To effectively leverage these timers for tasks like generating delays or creating waveforms, we must first understand how to configure their operating modes. This lesson focuses on selecting and configuring the appropriate timer/counter mode using C.

## Understanding Timer Modes

AVR timers/counters can operate in several distinct modes, each suited for different applications. The primary modes are:

*   **Normal Mode:** The simplest mode. The timer counts upwards from its current value to a maximum (255 for 8-bit timers, 65535 for 16-bit timers). When it overflows, it resets to 0 and sets an overflow flag (TOVn).
*   **CTC (Clear Timer on Compare Match) Mode:** In CTC mode, the timer counts up to a user-defined value stored in the Output Compare Register (OCRnA). When the timer's value matches the OCRnA value, it resets to 0 and sets a Compare Match flag (OCFnA). This mode is excellent for generating precise delays or frequencies.
*   **PWM (Pulse Width Modulation) Modes:** These modes allow for the generation of variable duty cycle square waves. They are crucial for controlling motor speeds, dimming LEDs, and generating analog-like outputs from a digital system. There are several PWM modes, including Fast PWM and Phase Correct PWM.

### Key Registers for Mode Configuration

Configuring the timer mode involves manipulating specific bits within control registers. The most important registers are:

*   **TCCRnx (Timer/Counter Control Register A/B):** These registers contain bits that determine the timer's operating mode (WGM bits) and prescaler selection. The prescaler divides the system clock to slow down the timer's counting speed, allowing for longer delays or lower frequencies.
*   **OCRnx (Output Compare Register A/B):** Used in CTC and PWM modes to set the compare match value.
*   **TCNTn (Timer/Counter Register):** Holds the current count value of the timer.

## Practical Scenario: Implementing a Precise Delay

Let's say we need to create a delay of approximately 1 millisecond (ms) on an AVR microcontroller running at a 16MHz system clock. Using CTC mode is ideal for this as it allows us to precisely define the timing based on a compare match.

**Scenario Breakdown:**

*   **Target Delay:** 1ms
*   **System Clock:** 16MHz
*   **Timer:** We'll use Timer1 (a 16-bit timer) for greater flexibility.
*   **Mode:** CTC Mode.
*   **Prescaler:** We'll need to choose a prescaler to achieve the desired count.

**Calculation for CTC Mode:**

The timer increments based on the system clock divided by the prescaler.
Frequency of Timer Clock = System Clock / Prescaler

The number of clock cycles needed to reach the compare match value (OCR1A) determines the delay.
Delay = (OCR1A + 1) * (Prescaler / System Clock)

We want a 1ms delay, which is \(1 \times 10^{-3}\) seconds.
\(1 \times 10^{-3} \text{ s} = (\text{OCR1A} + 1) \times \frac{\text{Prescaler}}{16 \times 10^6 \text{ Hz}}\)

Let's try a prescaler of 64.
\(1 \times 10^{-3} = (\text{OCR1A} + 1) \times \frac{64}{16 \times 10^6}\)
\(1 \times 10^{-3} = (\text{OCR1A} + 1) \times 4 \times 10^{-6}\)
\(\frac{1 \times 10^{-3}}{4 \times 10^{-6}} = \text{OCR1A} + 1\)
\(250 = \text{OCR1A} + 1\)
\(\text{OCR1A} = 249\)

An OCR1A value of 249 is well within the range of a 16-bit timer (0 to 65535). This configuration will give us a precise 1ms delay.

**C Code Implementation:**

```c
#include <avr/io.h>
#include <util/delay.h> // For convenience, though we're implementing our own delay logic

// Function to create a precise delay in milliseconds using Timer1 CTC mode
void timer1_delay_ms(uint16_t ms) {
    // 1. Stop Timer1
    TCCR1B &= ~(_BV(CS10) | _BV(CS11) | _BV(CS12)); // Clear prescaler bits

    // 2. Set Timer1 to CTC mode (WGM12 = 1)
    TCCR1B |= _BV(WGM12);
    TCCR1A &= ~(_BV(WGM10) | _BV(WGM11)); // Ensure WGM10 and WGM11 are clear for CTC mode

    // 3. Calculate OCR1A value for the desired delay
    // System clock = 16MHz
    // Desired delay = ms milliseconds = ms * 1000 microseconds
    // Prescaler = 64
    // Timer clock frequency = 16MHz / 64 = 250KHz
    // Timer clock period = 1 / 250KHz = 4 microseconds
    // Number of ticks needed = (ms * 1000) / 4
    uint16_t ocr1a_value = (uint16_t)(((uint32_t)ms * 1000) / 4) - 1; // Subtract 1 because OCR counts up to N

    // 4. Load OCR1A register
    OCR1AH = (uint8_t)(ocr1a_value >> 8);
    OCR1AL = (uint8_t)(ocr1a_value & 0xFF);

    // 5. Set prescaler to 64 (CS11 = 1, CS10 = 1) and start Timer1
    TCCR1B |= (_BV(CS11) | _BV(CS10));

    // 6. Wait for the Compare Match flag (OCF1A) to be set
    // This indicates the timer has reached OCR1A and will reset
    while (!(TIFR1 & _BV(OCF1A)));

    // 7. Clear the Compare Match flag (by writing a 1 to it)
    TIFR1 |= _BV(OCF1A);

    // 8. Stop Timer1 to prevent further counting until next call
    TCCR1B &= ~(_BV(CS10) | _BV(CS11) | _BV(CS12));
}

int main(void) {
    // Example usage: Blink an LED every second
    DDRB |= _BV(PB5); // Set PB5 (LED on many Arduino boards) as output

    while (1) {
        PORTB |= _BV(PB5); // Turn LED on
        timer1_delay_ms(500); // Wait for 500ms

        PORTB &= ~_BV(PB5); // Turn LED off
        timer1_delay_ms(500); // Wait for 500ms
    }
}
```

**Explanation of the Code:**

1.  **Stop Timer:** We first disable the timer by clearing the prescaler bits in `TCCR1B`. This ensures a clean start.
2.  **CTC Mode:** We set the `WGM12` bit in `TCCR1B` to enable CTC mode. `WGM10` and `WGM11` in `TCCR1A` are cleared to ensure we are in CTC mode (as opposed to PWM modes that also use `WGM12`).
3.  **Calculate OCR1A:** The calculation determines the exact value for `OCR1A` based on the desired delay, system clock, and chosen prescaler. We subtract 1 because the timer counts from 0 up to the value in `OCR1A`, meaning `OCR1A + 1` ticks occur.
4.  **Load OCR1A:** The calculated value is loaded into the `OCR1AH` and `OCR1AL` registers for Timer1.
5.  **Start Timer & Prescaler:** We set the prescaler to 64 by setting `CS11` and `CS10` in `TCCR1B`. This starts the timer counting.
6.  **Wait for Flag:** The `while` loop polls the `OCF1A` (Output Compare Flag A) in `TIFR1`. This flag is automatically set by the hardware when the timer count (`TCNTN`) matches `OCR1A`.
7.  **Clear Flag:** Once the flag is set, we clear it by writing a '1' to it. This is crucial for the loop to terminate and to prepare for future timing events.
8.  **Stop Timer:** We stop the timer again to ensure it doesn't continue counting after our delay period has elapsed, making the delay function repeatable.

## Practice Task

Modify the `timer1_delay_ms` function to create a delay of 250ms. Then, write a `main` function that blinks an LED connected to Port D, Pin 0 (PD0) at a rate of approximately 2Hz (meaning it's on for 250ms and off for 250ms, creating a full cycle of 500ms).

## Self-Check Questions

1.  What are the primary advantages of using CTC mode over Normal mode for generating precise delays?
2.  If you wanted to create a delay of 100ms with a 16MHz clock and a prescaler of 1, what would be the approximate value of `OCR1A`? (Consider if this is feasible with an 8-bit timer).
3.  Explain the role of the `OCFnA` flag in CTC mode.
4.  What happens if you forget to clear the `OCFnA` flag after the timer has matched `OCRnA`?
5.  Why is it important to stop the timer after the delay function completes in the provided example?

## Supports

- [[skills/programming/programming-languages/avr-peripheral-programming/microskills/timer-mode-configuration|Timer Mode Configuration]]
