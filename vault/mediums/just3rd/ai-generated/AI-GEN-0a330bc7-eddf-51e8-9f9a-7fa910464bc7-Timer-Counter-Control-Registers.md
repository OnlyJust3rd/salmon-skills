---
type: "medium"
title: "Timer/Counter Control Registers in AVR Microcontrollers"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/avr-peripheral-programming/microskills/timer-counter-control-registers|Timer/Counter Control Registers]]"
---
# Timer/Counter Control Registers in AVR Microcontrollers

AVR microcontrollers offer powerful timer/counter peripherals that can be used for a wide range of applications, from generating precise delays to creating Pulse Width Modulation (PWM) signals. To harness this power, you need to understand the registers that control their operation. This lesson focuses on the Timer/Counter Control Registers (TCCRx), which are fundamental to configuring these peripherals.

## Understanding Timer/Counter Modes and Prescalers

Timers and counters in AVRs can operate in different modes. The TCCRx registers allow you to select these modes and control how the timer/counter increments (or decrements) its value.

### Key Concepts

*   **Timer Mode:** The timer counts up from a starting value to a specified maximum value and then resets. This is useful for creating time delays or measuring intervals.
*   **Counter Mode:** The counter increments or decrements based on external events, typically detected on specific I/O pins. This is useful for counting external pulses.
*   **Prescaler:** The prescaler divides the system clock frequency before it reaches the timer/counter. This allows the timer to count at a slower rate, effectively extending the range of measurable time intervals or the maximum count value. A prescaler of 1 means no division, 8 means divide by 8, and so on.
*   **Waveform Generation Mode (WGM):** This selection determines how the timer/counter operates. Common modes include:
    *   **Normal Mode:** The timer counts up to its maximum value (255 for 8-bit timers, 65535 for 16-bit timers) and then overflows.
    *   **CTC (Clear Timer on Compare Match) Mode:** The timer counts up until its value matches a value stored in a separate compare register (OCRx). When a match occurs, the timer is reset to zero. This is excellent for generating precise delays.
    *   **PWM (Pulse Width Modulation) Modes:** These modes allow you to generate variable-duty cycle square waves, ideal for controlling motor speed or dimming LEDs.

### Timer/Counter Control Registers (TCCRxA and TCCRxB)

The specific control registers depend on the timer/counter you are using. For example, Timer/Counter 0 typically uses `TCCR0A` and `TCCR0B`, while Timer/Counter 1 might use `TCCR1A` and `TCCR1B`. These registers are often split into two parts (A and B) to accommodate the various configuration bits.

Let's look at a common 8-bit timer (like Timer/Counter 0) as an example.

#### `TCCR0A` Register Bits (Typical)

| Bit(s) | Name | Description |
| :----- | :--- | :---------- |
| 7:6    | COM0A1:COM0A0 | Compare Match Output Mode for Channel A (COM0A1:0) |
| 5:4    | COM0B1:COM0B0 | Compare Match Output Mode for Channel B (COM0B1:0) |
| 3      | -    | Reserved |
| 2:0    | WGM02:WGM00 | Waveform Generation Mode |

The COM bits (Compare Output Mode) determine how an output pin (like OC0A or OC0B) behaves when a compare match occurs. For example, you can set it to toggle the pin, clear it, or set it.

#### `TCCR0B` Register Bits (Typical)

| Bit(s) | Name | Description |
| :----- | :--- | :---------- |
| 7      | FOC0A | Force Output Compare A (for non-PWM modes) |
| 6      | FOC0B | Force Output Compare B (for non-PWM modes) |
| 5:3    | WGM02:WGM00 | Waveform Generation Mode (continuation from TCCR0A) |
| 2:0    | CS02:CS00 | Clock Select (Prescaler bits) |

The CS bits (Clock Select) are crucial for setting the prescaler. They determine the source of the clock signal for the timer.

*   `000`: No clock source (timer stopped).
*   `001`: `clk/1` (No prescaling).
*   `010`: `clk/8`.
*   `011`: `clk/64`.
*   `100`: `clk/256`.
*   `101`: `clk/1024`.
*   `110`: External clock source on T0 pin (falling edge).
*   `111`: External clock source on T0 pin (rising edge).

By combining bits in `TCCR0A` and `TCCR0B`, you can achieve various operational modes. For example, to use CTC mode with no prescaler:

*   `WGM01` (in `TCCR0A`) = 1
*   `WGM00` (in `TCCR0A`) = 0
*   `WGM02` (in `TCCR0B`) = 0
*   `CS00` (in `TCCR0B`) = 1 (for `clk/1`)
*   `CS01` (in `TCCR0B`) = 0
*   `CS02` (in `TCCR0B`) = 0

This configuration would be represented by setting the `TCCR0A` register to `00000010` (binary) and `TCCR0B` to `00000001` (binary).

## Practical Example: Setting up a Timer for a Delay

Imagine you want to create a simple delay of approximately 1 second using an AVR microcontroller running at an 8 MHz system clock. You can use Timer/Counter 0 in CTC mode.

1.  **Calculate the required prescaler and compare value:**
    *   System clock: 8 MHz = 8,000,000 Hz.
    *   We want a timer overflow or compare match to happen roughly every second.
    *   Let's aim for a timer tick frequency of around 1000 Hz for easier calculation of the delay, meaning each tick takes 1ms.
    *   To get 1000 Hz from 8 MHz, we need a prescaler of 8,000,000 / 1000 = 8000.
    *   This is not directly achievable with standard prescalers (1, 8, 64, 256, 1024). Let's re-evaluate.

    Let's aim for a more practical frequency by choosing a prescaler. If we use a prescaler of 1024:
    *   Timer tick frequency = 8,000,000 Hz / 1024 = 7812.5 Hz.
    *   Each timer tick takes \(1 / 7812.5 = 0.000128\) seconds, or 0.128 milliseconds.

    Now, we need to find a compare value (`OCR0A`) that, when counted by the timer with a prescaler of 1024, results in a delay of roughly 1 second.
    *   Number of ticks for 1 second = \(1 \text{ second} / 0.000128 \text{ seconds/tick} \approx 7812.5\) ticks.
    *   Since Timer/Counter 0 is an 8-bit timer, its maximum value is 255. We need to use the compare match value (`OCR0A`).
    *   If we set `OCR0A` to 255, the timer will count from 0 to 255, which is 256 ticks.
    *   The delay for 256 ticks with a prescaler of 1024 would be \(256 \times 0.000128 \text{ s} = 0.032768\) seconds. This is too short.

    Let's try a different prescaler. If we use a prescaler of 256:
    *   Timer tick frequency = 8,000,000 Hz / 256 = 31250 Hz.
    *   Each timer tick takes \(1 / 31250 = 0.000032\) seconds, or 0.032 milliseconds.

    Now, calculate the compare value for a 1-second delay:
    *   Number of ticks for 1 second = \(1 \text{ second} / 0.000032 \text{ seconds/tick} = 31250\) ticks.
    *   Again, this is much larger than 256.

    It seems we might need to use a 16-bit timer or chain multiple overflows from an 8-bit timer for a precise 1-second delay with these clock speeds and prescalers. However, for demonstration, let's aim for a shorter delay, say 100 milliseconds.

    With a prescaler of 256 (31250 Hz tick frequency):
    *   Number of ticks for 0.1 seconds = \(0.1 \text{ second} / 0.000032 \text{ seconds/tick} = 3125\) ticks.
    *   Still too large for an 8-bit timer.

    Let's use a prescaler of 64:
    *   Timer tick frequency = 8,000,000 Hz / 64 = 125,000 Hz.
    *   Each timer tick takes \(1 / 125,000 = 0.000008\) seconds, or 0.008 milliseconds.

    Number of ticks for 0.1 seconds = \(0.1 \text{ second} / 0.000008 \text{ seconds/tick} = 12500\) ticks.
    Still too large.

    Let's re-think the target frequency. If we want a tick every millisecond:
    *   Target frequency = 1000 Hz.
    *   Prescaler needed = 8,000,000 / 1000 = 8000. Not directly available.

    What if we use the `OCR0A` register to set the period?
    Let's use **CTC mode** and a **prescaler of 64**.
    Timer tick interval = 0.008 ms.
    To get a delay of 100ms, we need \(100 \text{ ms} / 0.008 \text{ ms/tick} = 12500\) ticks. This is too large.

    Let's try a prescaler of 256.
    Timer tick interval = 0.032 ms.
    To get a delay of 100ms, we need \(100 \text{ ms} / 0.032 \text{ ms/tick} = 3125\) ticks. Still too large.

    Let's use a prescaler of 1024.
    Timer tick interval = 0.128 ms.
    To get a delay of 100ms, we need \(100 \text{ ms} / 0.128 \text{ ms/tick} \approx 781\) ticks. Still too large.

    This highlights that for longer delays, you might need to:
    *   Use a 16-bit timer.
    *   Trigger an interrupt on overflow and count the overflows in software.
    *   Choose a different clock frequency for your microcontroller.

    For our example, let's aim for a delay that is achievable with an 8-bit timer and a standard prescaler, say, around 10 ms.

    Using prescaler 1024 (tick interval = 0.128 ms):
    *   Number of ticks for 10 ms = \(10 \text{ ms} / 0.128 \text{ ms/tick} \approx 78\) ticks.
    *   This is achievable! We can set `OCR0A` to 77 (for 78 ticks).

2.  **Configure the registers (example for AVR-GCC):**

```c
#include <avr/io.h>

void setup_timer_for_delay() {
    // 1. Set Waveform Generation Mode (WGM) for CTC
    // WGM01 bit in TCCR0A, WGM02 bit in TCCR0B
    // This results in WGM0[2:0] = 010 (CTC Mode)
    TCCR0A |= (1 << WGM01); // Set WGM01
    TCCR0B &= ~(1 << WGM02); // Clear WGM02

    // 2. Set the Compare Match value (OCR0A) for approximately 10ms delay
    // Timer tick interval = 0.128 ms (with prescaler 1024)
    // We need 10ms / 0.128ms/tick = ~78 ticks.
    // OCR0A counts from 0, so OCR0A = 77 will cause a match after 78 ticks (0 to 77).
    OCR0A = 77;

    // 3. Set the Clock Select (CS) bits for prescaler 1024
    // CS02, CS01, CS00 bits in TCCR0B
    // This results in CS0[2:0] = 101 (clk/1024)
    TCCR0B |= (1 << CS02) | (1 << CS00); // Set CS02 and CS00
    TCCR0B &= ~(1 << CS01);            // Clear CS01

    // Optional: Enable Timer/Counter0 Compare Match A Interrupt (if you want ISR-based delay)
    // TIMSK0 |= (1 << OCIE0A);
    // sei(); // Enable global interrupts
}

// Example usage within main() or another function:
int main(void) {
    // ... other setup ...

    setup_timer_for_delay();

    // To create a delay, you would typically poll the timer flag or wait for an interrupt.
    // For a simple blocking delay (not recommended for real-time systems):
    while (1) {
        // Wait for the compare match flag to be set
        while (!(TIFR0 & (1 << OCF0A)));

        // Clear the flag by writing a 1 to it
        TIFR0 |= (1 << OCF0A);

        // Now approximately 10ms has passed. You can toggle an LED or do other tasks.
        // For example:
        // PORTB ^= (1 << PB5); // Toggle an LED on PB5
    }

    return 0;
}
```

In this example:
*   `TCCR0A` is configured for CTC mode.
*   `TCCR0B` is configured for a prescaler of 1024.
*   `OCR0A` is set to 77.
*   The `while (!(TIFR0 & (1 << OCF0A)));` loop continuously checks the Timer Interrupt Flag Register (`TIFR0`) for the `OCF0A` bit. This bit is set by hardware when the timer value matches `OCR0A`.
*   Once the flag is set, it's cleared by writing a '1' to it, and the loop repeats, creating a series of 10ms delays.

## Practice Task

Configure Timer/Counter 0 on an AVR microcontroller to operate in **Normal Mode** with a **prescaler of 8**. What will be the approximate frequency of the timer's clock source? If you wanted to create a delay of approximately 1 millisecond using this configuration, what value would you set for `OCR0A` (assuming you'd be using CTC mode for this delay)? (Hint: You will need to use both `TCCR0A` and `TCCR0B` bits for this calculation and mode selection).

## Self-Check Questions

1.  What are the primary functions of the `TCCRxA` and `TCCRxB` registers?
2.  Explain the role of the prescaler in timer/counter operation. List at least three common prescaler values.
3.  In CTC mode, what event causes the timer to reset?
4.  If the system clock is 16 MHz and you want a timer tick every 1 microsecond (\(1 \mu s\)), what prescaler would you choose, and what would the timer tick frequency be?
5.  What is the maximum value an 8-bit timer can count to in Normal Mode?

## Supports

- [[skills/programming/programming-languages/avr-peripheral-programming/microskills/timer-counter-control-registers|Timer/Counter Control Registers]]
