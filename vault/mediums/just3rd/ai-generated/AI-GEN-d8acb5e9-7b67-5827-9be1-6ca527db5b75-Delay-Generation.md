---
type: "medium"
title: "Generating Precise Delays with AVR Timers"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-peripheral-programming/microskills/delay-generation|Delay Generation]]"
---
# Generating Precise Delays with AVR Timers

This lesson focuses on implementing precise time delays using AVR microcontroller timers. Building upon the broader skill of AVR Peripheral Programming, we will specifically learn how to *apply* timer/counter functions in C to achieve accurate timing for embedded systems. This is a fundamental building block for many time-based functionalities, such as controlling blinking LEDs, triggering sensor readings at specific intervals, or synchronizing communication protocols.

## Understanding Timer-Based Delays

Software delays, often implemented using simple loops, are highly dependent on the microcontroller's clock speed and compiler optimizations. This makes them inaccurate and unreliable for critical timing applications. AVR timers offer a hardware-based solution. They are independent counters that can be configured to increment at a rate determined by the system clock or an external clock source. By setting up a timer to count for a specific duration, we can then trigger an action or signify the passage of time.

The core idea behind timer-based delays is to:
1.  **Configure a Timer:** Select a suitable timer (Timer0, Timer1, Timer2 on many AVRs) and set its operating mode.
2.  **Set a Timer Value:** Load the timer's counter register (TCNT) with an initial value or configure a Compare Match Register (OCR) to trigger an interrupt or action after a certain count.
3.  **Start the Timer:** Enable the timer to begin counting.
4.  **Wait for the Event:** Poll a flag (like the Timer Overflow Flag - TOV) or wait for an interrupt to be raised when the desired count is reached.
5.  **Stop/Reset the Timer:** Halt the timer or reset its counter for the next delay.

## Practical Example: Blinking an LED with Precise Timing

Let's create a scenario where we want to blink an LED connected to PORTB, Pin 5 (PB5) of an AVR microcontroller (like an ATmega328P) with a precise 500-millisecond delay between each blink. We'll use Timer1 for this.

### Setup

*   **Microcontroller:** ATmega328P (commonly found on Arduino Uno)
*   **Clock Speed:** Assume 16 MHz (typical for Arduino Uno)
*   **LED:** Connected to PB5.
*   **Timer:** Timer1 (16-bit timer)

### Calculations

We need to determine the timer prescaler and the initial counter value (or compare value) to achieve a 500ms delay.

Timer Frequency = System Clock Frequency / Prescaler

Let's aim for an overflow that signifies our desired delay. A 16-bit timer can count up to 65536.

If we use a prescaler of 1024, the timer clock frequency is:
16,000,000 Hz / 1024 = 15,625 Hz

The time for one timer tick is:
1 / 15,625 Hz = 0.000064 seconds = 64 microseconds

To achieve a 500ms (0.5 seconds) delay, we need:
Number of ticks = Desired delay / Time per tick
Number of ticks = 0.5 seconds / 0.000064 seconds/tick = 7812.5 ticks

Since the timer overflows after reaching its maximum count (65536 for a 16-bit timer if counting from 0), we need to find an initial value that, when added to the desired ticks, results in 65536.

Initial Value = Maximum Count - Number of ticks
Initial Value = 65536 - 7812.5
Since we can't use fractions, we'll round this to 7813 for the number of ticks.
Initial Value = 65536 - 7813 = 57723

This initial value will be loaded into the `TCNT1H` and `TCNT1L` registers.

### C Code

```c
#define F_CPU 16000000UL // Define CPU frequency for delay functions (if using <util/delay.h>)
#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h> // For convenience in demonstrating, though we're implementing manually

volatile uint16_t timer_ticks_needed = 7813; // Number of ticks for ~500ms
volatile uint16_t timer_initial_value = 65536 - 7813; // Pre-calculated initial value

void setup_timer1_delay() {
    // Configure Timer1 for normal mode (counting up to TOP)
    TCCR1A = 0x00; // WGM10, WGM11 bits are 0 for normal mode
    TCCR1B = 0x00; // WGM12, WGM13 bits are 0 for normal mode

    // Set the prescaler to 1024
    // CS10 = 0, CS11 = 0, CS12 = 1 -> Prescaler 1024
    TCCR1B |= (1 << CS12);

    // Load the initial value into Timer1
    TCNT1 = timer_initial_value;

    // Enable Timer1 Overflow Interrupt
    TIMSK1 |= (1 << TOIE1);

    // Enable global interrupts
    sei();
}

void delay_ms_timer1(uint16_t ms) {
    // This function would typically calculate and set timer values for a given ms
    // For this specific example, setup_timer1_delay already sets it for ~500ms.
    // To make this more general, you'd recalculate timer_initial_value based on 'ms'.
    // For now, we assume setup_timer1_delay is called once and we'll poll.

    // Start the timer by setting the prescaler
    TCCR1B |= (1 << CS12); // Prescaler 1024

    // Wait for Timer1 Overflow Flag (TOV1) to be set
    while (!(TIFR1 & (1 << TOV1)));

    // Clear the Timer1 Overflow Flag by writing a 1 to it
    TIFR1 |= (1 << TOV1);

    // Stop the timer by clearing the prescaler bits
    TCCR1B &= ~((1 << CS10) | (1 << CS11) | (1 << CS12));

    // Reload the timer for the next delay (optional, depends on application)
    // TCNT1 = timer_initial_value;
}

// Interrupt Service Routine for Timer1 Overflow
ISR(TIMER1_OVF_vect) {
    // This ISR is typically used for tasks that need to happen precisely when the timer overflows.
    // For a simple delay, we often poll the flag instead of relying solely on an ISR.
    // However, if you wanted to trigger an action *during* the delay (e.g., update a counter),
    // you'd do it here.
    // For this basic delay, we just let it overflow and poll the flag in main.

    // Re-load the timer for continuous pulsing if needed, but for a polled delay, we clear the flag in main.
    // TCNT1 = timer_initial_value;
}

int main(void) {
    // Set PB5 (connected to LED) as an output
    DDRB |= (1 << DDB5);

    // Initialize Timer1 for our delay setup
    // If using ISR: setup_timer1_delay();
    // For polled delay, we only need TCNT1 and prescaler setup implicitly in delay_ms_timer1

    while (1) {
        // Toggle the LED state
        PORTB ^= (1 << PORTB5);

        // Use our custom timer-based delay
        // For this demonstration, we call the polled delay function:
        delay_ms_timer1(500); // Aiming for ~500ms delay
    }

    return 0;
}
```

**Explanation of the Code:**

*   **`#define F_CPU 16000000UL`**: This is crucial if you intend to use `<util/delay.h>` functions. While we are implementing our own delay logic, it's good practice to define it.
*   **`TCCR1A`, `TCCR1B`**: These are Timer/Counter Control Registers. We use them to configure Timer1's mode and prescaler.
    *   `WGM1x` bits in `TCCR1A` and `TCCR1B` control the Waveform Generation Mode. Setting all to 0 puts Timer1 in "normal mode" where it counts from `0x0000` up to `0xFFFF` (65535) and then overflows.
    *   `CS1x` bits in `TCCR1B` set the clock prescaler. `(1 << CS12)` sets the prescaler to 1024. This means the timer increments once for every 1024 system clock cycles.
*   **`TCNT1`**: This is the 16-bit Timer/Counter register. We load `timer_initial_value` into it. When the timer counts up from this value to `0xFFFF`, it will overflow.
*   **`TIMSK1`**: Timer/Counter Interrupt Mask Register. `(1 << TOIE1)` enables the Timer1 Overflow Interrupt.
*   **`sei()`**: Enables global interrupts. This is necessary if you're using ISRs. For a purely polled delay, it's not strictly needed for the delay logic itself but is often used in general AVR programming.
*   **`ISR(TIMER1_OVF_vect)`**: This is the Interrupt Service Routine (ISR) that executes automatically when Timer1 overflows. In a purely polled delay, we don't *need* to do anything here, but if you wanted to trigger an event *at* the overflow, this is where it would go.
*   **`TIFR1`**: Timer/Counter Interrupt Flag Register. `(1 << TOV1)` is the Timer1 Overflow Flag. This flag is set by hardware when the timer overflows.
*   **`PORTB |= (1 << DDB5);`**: Configures Pin 5 of Port B as an output.
*   **`PORTB ^= (1 << PORTB5);`**: Toggles the state of Pin 5 of Port B.
*   **`while (!(TIFR1 & (1 << TOV1)));`**: This is the polling mechanism. The program stays in this `while` loop until the `TOV1` flag becomes `1` (meaning the timer has overflowed).
*   **`TIFR1 |= (1 << TOV1);`**: **Crucially**, you must manually clear the overflow flag by writing a `1` to it. This is a common point of confusion. The flag is read-only, but writing a `1` to it clears it.
*   **`TCCR1B &= ~((1 << CS10) | (1 << CS11) | (1 << CS12));`**: This line stops the timer by clearing the prescaler bits, effectively disabling further counting.

### Practice Task

Modify the `main` function to:
1.  Make the LED blink at approximately 1 second intervals (each blink phase lasting 500ms).
2.  Implement a second LED connected to another pin (e.g., PORTD, Pin 2) that blinks at approximately 250ms intervals. You will need to reconfigure Timer1 or use another timer (Timer0 or Timer2) and recalculate the required prescaler and initial values for each.

### Self-Check Questions

1.  What is the primary advantage of using timers for delays over software loops?
2.  If you change the system clock frequency, how will your timer-based delay be affected if you don't adjust the timer configuration?
3.  In the `delay_ms_timer1` function, why is it necessary to clear the `TOV1` flag (`TIFR1 |= (1 << TOV1);`)?
4.  How would you modify the code to achieve a delay of 10 milliseconds instead of 500 milliseconds with a 16 MHz clock and a prescaler of 1024? Show the calculation for the `timer_initial_value`.
5.  What are the potential drawbacks of using a polled delay compared to an interrupt-driven delay for very frequent or critical timing events?

## Supports

- [[skills/programming/programming-languages/avr-peripheral-programming/microskills/delay-generation|Delay Generation]]
