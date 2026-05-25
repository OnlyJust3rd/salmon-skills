---
type: "medium"
title: "Controlling LEDs with GPIO"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/led-control-via-gpio|led-control-via-gpio]]"
learning-time-in-minutes: 4
---
# Controlling LEDs with GPIO

This lesson focuses on a fundamental aspect of embedded systems: controlling Light Emitting Diodes (LEDs) using General Purpose Input/Output (GPIO) pins on a microcontroller or Single Board Computer (SBC). This is a common starting point for basic embedded system implementation.

## What is GPIO?

GPIO pins are versatile digital pins on a microcontroller or SBC that can be configured by software to act as either an **input** (to read signals from external devices) or an **output** (to send signals to external devices). For LED control, we'll configure them as outputs.

## How LEDs Work with GPIO

An LED is a semiconductor device that emits light when an electric current passes through it. To control an LED with a GPIO pin, we need to:

1.  **Configure the GPIO pin as an output.**
2.  **Set the pin's voltage level.**
    *   Setting the pin to a **high** voltage (typically close to the microcontroller's power supply voltage, e.g., 3.3V or 5V) will allow current to flow through the LED, turning it **on**.
    *   Setting the pin to a **low** voltage (typically 0V) will prevent current flow, turning the LED **off**.

### Important Consideration: Current Limiting Resistors

LEDs can be damaged by too much current. Therefore, it's crucial to use a current-limiting resistor in series with the LED. This resistor drops a portion of the voltage and restricts the current to a safe level for the LED.

The value of the resistor can be calculated using Ohm's Law: \(R = (V_{source} - V_{LED}) / I_{LED}\), where:
*   \(V_{source}\) is the voltage of the GPIO pin (e.g., 3.3V).
*   \(V_{LED}\) is the forward voltage drop of the LED (typically around 2V for red LEDs, and slightly higher for blue/green/white).
*   \(I_{LED}\) is the desired forward current for the LED (e.g., 10mA to 20mA).

For simplicity in many introductory embedded projects, a common resistor value like 220 ohms or 330 ohms is often sufficient for typical LEDs and microcontroller voltages.

## Implementing LED Control

The specific code will vary depending on the microcontroller or SBC platform you are using (e.g., Arduino, Raspberry Pi, ESP32). However, the core logic remains the same. We'll use pseudocode to illustrate the concept.

### Pseudocode Example

```pseudocode
// Define the GPIO pin connected to the LED
DEFINE LED_PIN = 5 // Example: GPIO pin number 5

// --- Setup Function (runs once at the beginning) ---
FUNCTION setup()
  // Configure the LED_PIN as an output
  SET_PIN_MODE(LED_PIN, OUTPUT)
END FUNCTION

// --- Main Loop Function (runs continuously) ---
FUNCTION loop()
  // Turn the LED ON
  WRITE_PIN(LED_PIN, HIGH)
  DELAY(1000) // Wait for 1 second

  // Turn the LED OFF
  WRITE_PIN(LED_PIN, LOW)
  DELAY(1000) // Wait for 1 second
END FUNCTION
```

### Explanation of Pseudocode:

*   `DEFINE LED_PIN = 5`: This line assigns a numerical identifier to the specific GPIO pin we've connected our LED to. This makes the code more readable.
*   `SET_PIN_MODE(LED_PIN, OUTPUT)`: This is a crucial step. It tells the microcontroller that `LED_PIN` will be used to send signals *out* to control an external device (the LED).
*   `WRITE_PIN(LED_PIN, HIGH)`: This command sets the voltage level of `LED_PIN` to a high state, effectively turning the LED ON (assuming the circuit is correctly wired).
*   `WRITE_PIN(LED_PIN, LOW)`: This command sets the voltage level of `LED_PIN` to a low state, turning the LED OFF.
*   `DELAY(1000)`: This pauses the program execution for 1000 milliseconds (1 second). This allows us to see the LED turn on and off.

## Practical Circuit Diagram (Conceptual)

```
+--------------+       +------------------+       +-------+
| Microcontroller| ----> |   GPIO Pin (e.g., 5)| ----> | Resistor | ----> | LED | ----> GND
|  (or SBC)    |       +------------------+       | (e.g., 220 Ohm) |       +-------+
+--------------+                                  +-----------------+
```

In this diagram:
*   The arrow from the GPIO pin shows the direction of control.
*   The resistor is placed in series with the LED.
*   The other end of the LED connects to ground (GND).

## Common Mistakes to Avoid

*   **Forgetting the current-limiting resistor:** This can quickly burn out your LED or even damage the microcontroller's GPIO pin.
*   **Incorrectly configuring the pin mode:** If the pin is set as an input, you won't be able to control the LED's state.
*   **Miswiring:** Double-check your connections between the microcontroller, resistor, and LED. LEDs have polarity; the longer leg is typically the anode (+) and should be connected towards the resistor and the GPIO pin, while the shorter leg (cathode, -) connects to ground.
*   **Assuming default pin states:** Always explicitly set the pin mode and initial state in your setup routine.

By mastering LED control via GPIO, you've taken a significant step towards implementing basic embedded systems. This skill forms the foundation for more complex interactions with the physical world.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/led-control-via-gpio|LED Control via GPIO]]
