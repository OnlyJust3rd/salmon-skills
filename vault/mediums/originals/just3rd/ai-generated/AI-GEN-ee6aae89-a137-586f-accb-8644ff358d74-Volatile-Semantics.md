---
type: medium
title: Volatile Semantics in Bare-Metal C
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[volatile-semantics|volatile-semantics]]"
learning-time-in-minutes: 3
---
# Volatile Semantics in Bare-Metal C

In bare-metal C programming, direct interaction with hardware registers is common. The `volatile` keyword is crucial for ensuring your code behaves predictably when variables are shared between your program and external events like hardware changes or interrupts.

## Understanding `volatile`

Normally, a C compiler is quite clever. To optimize your code, it might assume that a variable's value only changes when you explicitly modify it in your code. It can cache variable values in CPU registers or reorder read/write operations to improve performance.

However, when a variable represents a hardware register or is accessed by an interrupt service routine (ISR), this optimization can lead to disaster. The hardware might change the value of a register *without* your program knowing, or an ISR might modify a variable that your main loop is also reading.

The `volatile` keyword tells the compiler: "This variable's value can change at any time, from outside the normal flow of my program. You absolutely must not make any assumptions about its value and must re-read it from memory every single time it's accessed."

## Practical Scenario: Controlling an LED

Imagine you're writing code for an embedded system to control an LED connected to a specific memory-mapped I/O register. Let's say this register's address is `0x40001000`.

If you declare a variable to hold the state of this LED without `volatile`:

```c
unsigned int* led_register = (unsigned int*)0x40001000;

void turn_on_led() {
    *led_register = 1; // Set the bit to turn on the LED
}

void turn_off_led() {
    *led_register = 0; // Clear the bit to turn off the LED
}

int main() {
    while (1) {
        turn_on_led();
        // Some delay
        turn_off_led();
        // Some more delay
    }
    return 0;
}
```

The compiler might optimize the `turn_on_led` and `turn_off_led` calls. It might notice that `*led_register` is being set to 1 and then immediately to 0. It could potentially decide to just write 0 directly, skipping the write of 1 altogether, or cache the value and not actually perform the memory write when expected. This would mean the LED might never turn on!

Now, let's use `volatile`:

```c
volatile unsigned int* led_register = (volatile unsigned int*)0x40001000;

void turn_on_led() {
    *led_register = 1; // Forces a read from memory address 0x40001000 and writes 1
}

void turn_off_led() {
    *led_register = 0; // Forces a read from memory address 0x40001000 and writes 0
}

int main() {
    while (1) {
        turn_on_led();
        // Some delay
        turn_off_led();
        // Some more delay
    }
    return 0;
}
```

With `volatile`, the compiler *must* perform the read from the memory address `0x40001000` and then write the new value (1 or 0) on each access. This guarantees that the hardware register is updated as intended, and your LED will blink correctly.

The same principle applies to variables that might be modified by an interrupt service routine. If your main loop reads a flag set by an ISR, declaring the flag `volatile` ensures the loop always reads the most up-to-date value from memory, not a potentially stale cached copy.

## Practice Task

Consider a scenario where you have a timer interrupt that increments a global counter variable every millisecond. Your main program loop continuously reads this counter to determine elapsed time.

Declare the counter variable appropriately to ensure that the main loop always reads the correct, most recent value.

```c
// Declare the counter variable here, suitable for interrupt modification and main loop reading.
// ... your code ...

void timer_isr() {
    // Increment the counter
    // ... your code ...
}

int main() {
    // Initialize timer and enable interrupts

    while (1) {
        unsigned int elapsed_time = counter; // Read the counter
        // Use elapsed_time for some logic
    }
    return 0;
}
```

## Self-Check Questions

1.  Why is `volatile` necessary for variables that directly map to hardware registers?
2.  What happens if you use a non-`volatile` variable to control an LED connected to a memory-mapped I/O port, and the compiler aggressively optimizes it?
3.  If an interrupt service routine modifies a variable that your main program loop reads, why should that variable be declared `volatile`?

## Supports

- [[volatile-semantics|Volatile Semantics]]
