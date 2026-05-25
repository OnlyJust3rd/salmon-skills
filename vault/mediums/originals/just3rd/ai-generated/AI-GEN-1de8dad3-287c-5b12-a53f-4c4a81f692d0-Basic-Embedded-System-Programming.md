---
type: "medium"
title: "Basic Embedded System Programming"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/basic-embedded-system-programming|basic-embedded-system-programming]]"
learning-time-in-minutes: 5
---
# Basic Embedded System Programming

This lesson focuses on the core of creating fundamental control logic for microcontrollers, which is essential for developing basic embedded systems that interface with sensors and actuators. We will explore how to write and execute simple programs to make a microcontroller perform specific tasks.

## What is Embedded System Programming?

Embedded system programming involves writing code that runs on a microcontroller within a larger system. This code is typically designed to perform a specific function, often in real-time, and to interact with the physical world through sensors and actuators. The goal is to create efficient, reliable, and often resource-constrained programs.

## Core Concepts

When developing basic embedded system programs, several core concepts are crucial:

*   **Microcontroller Architecture:** Understanding the basic components of a microcontroller, such as the CPU, memory (RAM, Flash), and Input/Output (I/O) pins, is fundamental. I/O pins are how the microcontroller communicates with the outside world.
*   **Digital I/O:** Most basic interactions involve digital signals, which are either HIGH (usually representing 3.3V or 5V) or LOW (0V).
    *   **Digital Output:** Sending a signal (HIGH or LOW) to an actuator, like turning an LED on or off, or controlling a motor.
    *   **Digital Input:** Reading a signal from a sensor, like detecting if a button is pressed or if a light sensor is detecting light.
*   **Control Logic:** This is the heart of the program. It defines the sequence of operations and decision-making processes. For example, "if the button is pressed, turn the LED on; otherwise, turn it off."
*   **Programming Language:** C is the dominant language for embedded systems due to its efficiency and low-level control. Other languages like C++ and MicroPython are also used.
*   **Development Environment (IDE) and Toolchain:** You'll need software to write, compile, and upload your code to the microcontroller. This includes an Integrated Development Environment (IDE), a compiler, and a programmer/debugger.

## Applying Basic Control Logic: A Practical Example

Let's illustrate with a common scenario: controlling an LED using a button.

**Goal:** When a button connected to a microcontroller is pressed, turn an LED ON. When the button is released, turn the LED OFF.

**Components:**

*   A microcontroller development board (e.g., Arduino Uno, ESP32, Raspberry Pi Pico)
*   An LED
*   A push button
*   Resistors (e.g., 220-ohm for the LED, 10k-ohm for the button pull-down)
*   Jumper wires

**Circuit Setup (Conceptual):**

1.  **LED:** Connect the longer leg (anode) of the LED to a digital output pin on the microcontroller through a current-limiting resistor (e.g., 220 ohms). Connect the shorter leg (cathode) to the microcontroller's Ground (GND).
2.  **Button:** Connect one terminal of the push button to a digital input pin on the microcontroller. Connect the other terminal of the push button to the microcontroller's 5V (or 3.3V, depending on the board). To ensure a stable LOW reading when the button is *not* pressed, connect a pull-down resistor (e.g., 10k ohms) between the digital input pin and GND. This means the pin will read LOW by default. When the button is pressed, it connects the pin to 5V, making it read HIGH.

**Code (Pseudocode and Arduino C Example):**

This example uses Arduino's C-like syntax, which is common for beginner-friendly boards.

```c++
// Define the pins used
const int buttonPin = 2;  // Digital pin connected to the button
const int ledPin = 13;   // Digital pin connected to the LED

// Variable to store the button state
int buttonState = 0;

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
  // Initialize the button pin as an input
  pinMode(buttonPin, INPUT);
}

void loop() {
  // Read the state of the button
  buttonState = digitalRead(buttonPin);

  // Check if the button is pressed
  if (buttonState == HIGH) {
    // Turn LED ON
    digitalWrite(ledPin, HIGH);
  } else {
    // Turn LED OFF
    digitalWrite(ledPin, LOW);
  }
}
```

**Explanation of the Code:**

*   `const int buttonPin = 2;` and `const int ledPin = 13;`: These lines declare constants to represent the microcontroller pins you've connected your button and LED to. Using constants makes your code more readable and easier to modify.
*   `int buttonState = 0;`: This declares an integer variable to hold the current state of the button (HIGH or LOW).
*   `void setup()`: This function runs once when the microcontroller powers up or resets.
    *   `pinMode(ledPin, OUTPUT);`: Configures the `ledPin` to be an output pin, meaning the microcontroller can send signals to it.
    *   `pinMode(buttonPin, INPUT);`: Configures the `buttonPin` to be an input pin, meaning the microcontroller can read signals from it.
*   `void loop()`: This function runs repeatedly forever after `setup()` has finished. This is where your main control logic resides.
    *   `buttonState = digitalRead(buttonPin);`: Reads the digital value from `buttonPin`. If the button is pressed (and connected to 5V through the button and pull-down resistor correctly configured), it will read `HIGH`. If not pressed, it will read `LOW`.
    *   `if (buttonState == HIGH)`: This is a conditional statement. It checks if the value read from the button is `HIGH`.
    *   `digitalWrite(ledPin, HIGH);`: If the condition is true (button is pressed), this command sets the `ledPin` to `HIGH`, sending voltage to the LED and turning it ON.
    *   `else`: If the condition is false (button is not pressed).
    *   `digitalWrite(ledPin, LOW);`: This command sets the `ledPin` to `LOW`, removing voltage from the LED and turning it OFF.

## Execution and Testing

1.  **Connect Hardware:** Carefully wire up your components according to the circuit diagram.
2.  **Write Code:** Type or copy the code into your IDE.
3.  **Compile:** The IDE will compile your code into machine language that the microcontroller understands.
4.  **Upload:** Use your IDE's tools to upload the compiled code to your microcontroller board.
5.  **Test:** Observe the LED. It should turn ON when you press the button and turn OFF when you release it.

## Common Mistakes to Avoid

*   **Incorrect Pin Configuration:** Forgetting to set pins as `INPUT` or `OUTPUT` in `setup()`.
*   **Wiring Errors:** Misconnecting components, leading to no response or damage. Double-check polarity for LEDs and power connections.
*   **Missing Pull-up/Pull-down Resistors:** This can lead to "floating" input pins, where the microcontroller reads erratic values instead of a clear HIGH or LOW. For buttons, a pull-down resistor (as described) is common when connecting the button to VCC. Alternatively, a pull-up resistor can be used when connecting the button to GND.
*   **Ignoring Current Limits:** Connecting LEDs directly to microcontroller pins without a current-limiting resistor can burn out the LED or the microcontroller pin.
*   **Logic Errors:** Simple mistakes in `if/else` statements or loop conditions that don't match the desired behavior.

By understanding these core concepts and practicing with simple examples, you can begin to apply your knowledge to develop more complex control programs for embedded systems.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/basic-embedded-system-programming|Basic Embedded System Programming]]
