---
type: "medium"
title: "AVR Microcontroller Memory Organization"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/avr-microcontroller-architecture/microskills/memory-organization|memory-organization]]"
---
# AVR Microcontroller Memory Organization

Understanding the memory types within an AVR microcontroller is crucial for effectively programming it. This lesson will focus on the different kinds of memory you'll encounter and their primary uses.

## What is Memory Organization in AVRs?

AVR microcontrollers use a Harvard architecture, which means they have separate memory spaces for program instructions and data. This allows for simultaneous fetching of instructions and data, leading to faster execution. The three primary types of memory are:

*   **Flash Memory:** This is where your program code resides. It's non-volatile, meaning it retains its contents even when the power is turned off. Think of it as the permanent storage for your instructions.
*   **SRAM (Static Random-Access Memory):** This is used for temporary data storage, such as variables, the stack, and intermediate calculation results. SRAM is volatile, so its contents are lost when the microcontroller loses power. It offers fast read and write access.
*   **EEPROM (Electrically Erasable Programmable Read-Only Memory):** This is another type of non-volatile memory, but it's typically used for storing configuration data or small amounts of persistent settings that might need to be changed occasionally. EEPROM has a much slower write speed and a limited number of write/erase cycles compared to Flash.

## Key Characteristics and Uses

Let's break down the characteristics and typical uses of each memory type:

| Memory Type | Volatility    | Speed (Read/Write) | Purpose                                             | Typical Size      |
| :---------- | :------------ | :----------------- | :-------------------------------------------------- | :---------------- |
| **Flash**   | Non-volatile  | Fast Read, Slow Write | Stores program code (instructions)                  | Kilobytes to Megabytes |
| **SRAM**    | Volatile      | Very Fast          | Stores variables, stack, temporary data             | Kilobytes         |
| **EEPROM**  | Non-volatile  | Slow Write, Fast Read | Stores configuration data, persistent settings      | Bytes to Kilobytes |

### Flash Memory: Your Program's Home

Every time you compile your C or Assembly code and upload it to an AVR microcontroller, that compiled code is stored in the Flash memory. The microcontroller fetches instructions from here to execute your program.

### SRAM: The Working Space

When your program needs to store a value, like the result of a calculation or a counter, it uses SRAM. The stack, which manages function calls and local variables, also resides in SRAM. Because SRAM is volatile, any data stored here is gone once the device powers down.

### EEPROM: Remembering the Little Things

Consider a device that needs to remember its last set brightness level, or a unique device ID. Instead of reprogramming the microcontroller each time, this information can be stored in EEPROM. This allows the microcontroller to recall these settings even after being powered off and on again. However, writing to EEPROM is a slower process and it has a finite lifespan for writes, so it's not suitable for frequently changing data.

## Practical Scenario: A Simple LED Blinker

Imagine you're programming an AVR to blink an LED.

*   The **code** that tells the microcontroller to toggle the LED's state and introduce delays will reside in **Flash memory**.
*   If you have a variable, say `delay_time`, to control how long the LED stays on or off, that variable would be stored in **SRAM**.
*   Now, suppose you want the AVR to remember the *last* blink pattern it was set to (e.g., fast blink vs. slow blink) even after power loss. You could store a configuration byte in **EEPROM** to indicate the desired blink speed. When the AVR powers up, it reads this byte from EEPROM to set the initial blink pattern.

## Practice Task: Memory Allocation Consideration

You are designing a system with an AVR microcontroller. You need to store the following:

1.  Your main program code.
2.  A series of sensor readings that need to be averaged over a short period.
3.  A unique device serial number that is programmed once during manufacturing and never changes.

For each of these items, identify which type of memory (Flash, SRAM, or EEPROM) would be the most appropriate choice and why.

## Self-Check Questions

1.  Which memory type is used to store the program instructions that the AVR microcontroller executes?
2.  If you need a temporary variable to hold a calculated value that will be lost when the power is off, which memory type would you use?
3.  What is the primary advantage of using EEPROM for storing configuration settings?
4.  Why is it generally not advisable to store frequently changing data in EEPROM?
5.  If an AVR microcontroller is programmed to blink an LED, where is the C code that defines this blinking behavior stored?

## Supports

- [[skills/hardware-embedded/electronics-embedded/avr-microcontroller-architecture/microskills/memory-organization|Memory Organization]]
