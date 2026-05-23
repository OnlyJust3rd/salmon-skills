---
type: "medium"
title: "AVR Timer Prescaler Settings"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/prescaler-setting|prescaler-setting]]"
learning-time-in-minutes: 7
---
# AVR Timer Prescaler Settings

This lesson focuses on a critical aspect of using AVR microcontrollers for timing: **setting the prescaler for Timer/Counter functions**. Understanding prescalers is essential for controlling the speed at which timers count, allowing you to generate precise delays and waveforms. This skill is a building block for implementing time-based functionalities.

## What is a Prescaler?

Timers/Counters on AVR microcontrollers count pulses from a clock source. This clock source is often the microcontroller's main system clock. However, directly using the system clock for a timer can be too fast for many applications.

A **prescaler** acts like a gear reducer for the timer's clock signal. It divides the input clock frequency by a certain factor before it reaches the timer's counter register. This effectively slows down the timer's counting speed.

Think of it like this:
*   **Without a prescaler:** The timer counts every single tick of the main clock. If your system clock is 16 MHz, the timer would count 16 million times per second.
*   **With a prescaler of 8:** The timer only counts every 8th tick of the main clock. The effective counting frequency becomes 16 MHz / 8 = 2 MHz.
*   **With a prescaler of 1024:** The timer counts every 1024th tick. The effective counting frequency becomes 16 MHz / 1024 = 15,625 Hz.

By adjusting the prescaler, you can achieve a wide range of counting speeds, from very fast to very slow, which is crucial for controlling timing accuracy.

## Why is Prescaler Setting Important?

Choosing the correct prescaler setting is vital for:

1.  **Generating Specific Delays:** If you need a delay of exactly 1 millisecond, and your system clock is 16 MHz, you can't simply count clock cycles directly because 1 millisecond is far too short a period to be reliably managed by the timer with such a fast input. A prescaler allows you to slow down the timer so that a specific number of timer ticks corresponds to your desired delay.
2.  **Creating Waveforms:** For applications like Pulse Width Modulation (PWM) or generating square waves, the frequency and duty cycle are directly controlled by the timer's counting speed and the values loaded into its registers. The prescaler influences this speed significantly.
3.  **Optimizing Resource Usage:** Running the timer at an unnecessarily high speed can be a waste of processing power and can lead to timing inaccuracies if the timer overflows too quickly to be handled by your code.

## How Prescalers Work in AVR Timers

AVR microcontrollers have dedicated registers to control timer/counter behavior, including the prescaler. The most common registers involved are the **Timer/Counter Control Registers (TCCRxA, TCCRxB)**, where 'x' represents the timer number (e.g., TCCR0A, TCCR0B for Timer0).

Within these registers, specific bits are designated for prescaler selection. For example, in many AVRs, the `CS` (Clock Select) bits in TCCRxB control the prescaler.

Here's a typical example of `CS` bits and their meaning (this can vary slightly between AVR models):

| TCCRxB | CS2 | CS1 | CS0 | Description                                         |
| :----- | :-- | :-- | :-- | :-------------------------------------------------- |
| 000    | 0   | 0   | 0   | No clock source (Timer/Counter stopped)             |
| 100    | 0   | 0   | 1   | clk/1 (No prescaling)                               |
| 101    | 0   | 1   | 0   | clk/8 (Prescaler by 8)                              |
| 110    | 0   | 1   | 1   | clk/64 (Prescaler by 64)                            |
| 111    | 1   | 0   | 0   | clk/256 (Prescaler by 256)                          |
| 1000   | 1   | 0   | 1   | clk/1024 (Prescaler by 1024)                        |
| 1001   | 1   | 1   | 0   | External clock source on T0 pin, falling edge       |
| 1010   | 1   | 1   | 1   | External clock source on T0 pin, rising edge        |

*   **`clk`**: Refers to the system clock frequency of the microcontroller.

**Key Takeaway:** You need to consult the datasheet for your specific AVR microcontroller to find the exact bits and values that control the prescaler for each timer.

## Practical Example: Implementing a 1-Second Delay

Let's say you have an AVR microcontroller running at 16 MHz and you want to create a delay of approximately 1 second using Timer0.

**Assumptions:**
*   Microcontroller: ATmega328P (common on Arduino Uno)
*   System Clock Frequency: 16 MHz
*   Timer: Timer0
*   Target Delay: ~1 second

**Steps:**

1.  **Determine the desired timer counting frequency:**
    If your system clock is 16 MHz (16,000,000 Hz), and you want a delay of 1 second, you need the timer to count a specific number of times within that second. The timer will count from 0 up to a certain value (e.g., 255 for an 8-bit timer) and then overflow. An overflow event can be used to signal the passage of time.

2.  **Calculate the required prescaler:**
    We need to find a prescaler that, when applied to the 16 MHz clock, results in a counting frequency that makes it easy to achieve a 1-second delay.

    Let's try `clk/1024`:
    Timer Frequency = 16,000,000 Hz / 1024 = 15,625 Hz

    Now, how many ticks does it take to reach 1 second at this frequency?
    Number of Ticks = 1 second * 15,625 ticks/second = 15,625 ticks

    An 8-bit timer (like Timer0 on ATmega328P) can count from 0 to 255. 15,625 ticks is far more than 255. This means the timer will overflow multiple times within one second.

    We can use the timer's overflow interrupt to count these overflows. Each overflow represents a certain amount of time.

    Time per overflow = (Maximum Timer Value + 1) / Timer Frequency
    Time per overflow = (255 + 1) / 15,625 Hz = 256 / 15,625 Hz = 0.016384 seconds

    To get approximately 1 second, we need:
    Number of Overflows = 1 second / 0.016384 seconds/overflow ≈ 61.03 overflows

    So, if Timer0 overflows 61 times, we will have a delay of approximately 1 second.

3.  **Configure the Timer0 prescaler:**
    For the ATmega328P, Timer0 prescaler settings are in the `TCCR0B` register.
    *   `CS02` (Bit 2), `CS01` (Bit 1), `CS00` (Bit 0)

    To select `clk/1024`: `CS02=1`, `CS01=0`, `CS00=1`. This corresponds to the binary value `101` for the CS bits.
    Therefore, `TCCR0B` should be set to `(1 << CS02) | (1 << CS00)`.

4.  **Implement the C code:**

```c
#include <avr/io.h>
#include <avr/interrupt.h>

volatile unsigned int overflow_count = 0; // Counter for timer overflows
const unsigned int TARGET_OVERFLOWS = 61; // Number of overflows for ~1 second delay

void timer0_init() {
    // Configure Timer0 for normal mode (counting from 0 to 255)
    TCCR0A = 0x00; // WGM01=0, WGM00=0 for normal mode

    // Set prescaler to clk/1024
    // CS02=1, CS01=0, CS00=1
    TCCR0B = (1 << CS02) | (1 << CS00);

    // Enable Timer0 overflow interrupt
    TIMSK0 |= (1 << TOIE0);

    // Initialize timer count to 0
    TCNT0 = 0;

    // Enable global interrupts
    sei();
}

// Timer0 Overflow Interrupt Service Routine (ISR)
ISR(TIMER0_OVF_vect) {
    overflow_count++;
    TCNT0 = 0; // Reset timer count for next overflow
}

void delay_ms(unsigned int ms) {
    // This function is a placeholder. For precise ms delays,
    // you'd calculate based on timer frequency.
    // For this example, we focus on the 1-second delay.
}

int main(void) {
    // Configure LED pin as output (assuming an LED is connected to PB5, Arduino digital pin 13)
    DDRB |= (1 << PB5);

    timer0_init();

    while (1) {
        if (overflow_count >= TARGET_OVERFLOWS) {
            // Toggle LED to indicate 1 second has passed
            PORTB ^= (1 << PB5);
            overflow_count = 0; // Reset the overflow counter for the next second
        }
    }
    return 0;
}
```

**Explanation of the Code:**

*   `timer0_init()`:
    *   `TCCR0A = 0x00;`: Sets Timer0 to normal mode, where it counts from 0 to 255 and then overflows.
    *   `TCCR0B = (1 << CS02) | (1 << CS00);`: This is the crucial line for setting the prescaler. It combines the bits `CS02` and `CS00` to select the `clk/1024` division factor.
    *   `TIMSK0 |= (1 << TOIE0);`: Enables the Timer0 overflow interrupt. When Timer0 counts from 255 back to 0, an interrupt will be triggered.
    *   `TCNT0 = 0;`: Initializes the timer counter to zero.
    *   `sei();`: Enables global interrupts, allowing the ISR to run.

*   `ISR(TIMER0_OVF_vect)`: This is the Interrupt Service Routine that executes every time Timer0 overflows.
    *   `overflow_count++;`: Increments our global counter each time an overflow occurs.
    *   `TCNT0 = 0;`: Resets the timer counter to zero so it can start counting again for the next interval.

*   `main()`:
    *   Sets up an LED pin as an output.
    *   Calls `timer0_init()` to configure and start the timer.
    *   The `while(1)` loop continuously checks if `overflow_count` has reached `TARGET_OVERFLOWS`.
    *   When the target is met, it toggles the LED (making it blink every second) and resets `overflow_count`.

This example demonstrates how to select a prescaler to slow down the timer and then use its overflow interrupt to measure time intervals.

## Practice Task

1.  **Calculate and Implement a 500ms Delay:**
    Using the same 16 MHz system clock and Timer0, calculate the appropriate prescaler and the number of timer overflows needed to achieve a delay of approximately 500 milliseconds.
    *   Hint: The time per overflow with `clk/1024` is 0.016384 seconds. How many overflows are needed for 0.5 seconds?
    *   Modify the `TARGET_OVERFLOWS` constant in the provided C code to your calculated value.
    *   Observe the LED blinking: it should now blink twice every second (once for each 500ms interval).

2.  **Experiment with a Different Prescaler:**
    If you wanted a *shorter* delay (e.g., for blinking an LED faster, say every 100ms), which prescaler would you choose from the available options? Explain your reasoning.
    *   Would `clk/8` or `clk/256` be more suitable for generating shorter, more frequent events?

## Self-Check Questions

1.  What is the primary purpose of a prescaler in an AVR timer?
2.  If your AVR's system clock is 8 MHz and you select a prescaler of 64, what will be the effective counting frequency of the timer?
3.  Why is it often necessary to use both a prescaler and the timer's overflow interrupt to create longer delays?
4.  What bits in the TCCRxB register are typically used to control the prescaler on AVR microcontrollers? (Refer to a general datasheet or the ATmega328P datasheet if you have it.)
5.  If you want the timer to count *more* frequently (i.e., a faster counting speed), would you choose a *larger* or *smaller* prescaler value?

## Supports

- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/prescaler-setting|Prescaler Setting]]
