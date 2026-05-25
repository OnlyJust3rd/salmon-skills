---
type: "medium"
title: "SBC Configuration for Embedded Systems"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/sbc-configuration|sbc-configuration]]"
learning-time-in-minutes: 4
---
# SBC Configuration for Embedded Systems

This lesson focuses on the foundational skills of configuring Single Board Computers (SBCs) for basic embedded system implementations, specifically for controlling LEDs and reading button inputs via General Purpose Input/Output (GPIO) pins.

## Understanding SBCs in Embedded Systems

Single Board Computers (SBCs) are complete computer systems built on a single circuit board. Unlike microcontrollers (MCUs), SBCs typically run a full operating system (like Linux) and offer more processing power and memory. For embedded projects, they provide a flexible platform where you can leverage familiar programming languages and tools.

When configuring an SBC for embedded tasks, you're essentially preparing its operating system and hardware interfaces to interact with external electronic components. The primary interface we'll use is GPIO.

## General Purpose Input/Output (GPIO)

GPIO pins are versatile digital pins on the SBC that can be configured as either inputs or outputs.

*   **Output:** When configured as an output, the SBC can send a signal (high or low voltage) to control an external device, such as turning an LED on or off.
*   **Input:** When configured as an input, the SBC can read a signal from an external device, such as detecting if a button has been pressed.

## Setting Up GPIO on a Common SBC (Raspberry Pi Example)

While many SBCs exist, the Raspberry Pi is a very popular choice for embedded systems. The configuration steps below are illustrative and may vary slightly for other SBCs, but the core concepts remain the same.

### Key Concepts:

1.  **Root/Superuser Privileges:** Accessing and controlling hardware directly often requires elevated privileges. You'll frequently use `sudo` before commands.
2.  **GPIO Numbering Schemes:** There are different ways to refer to GPIO pins. The two most common are:
    *   **BOARD numbering:** Refers to the physical pin number on the Raspberry Pi header.
    *   **BCM (Broadcom SOC Channel) numbering:** Refers to the GPIO channel number as assigned by the Broadcom chip. BCM numbering is generally preferred for software flexibility.

### Basic Configuration Steps:

The most common way to interact with GPIO on a Linux-based SBC like the Raspberry Pi is through the `/sys/class/gpio` interface or using libraries like `RPi.GPIO` (Python). We'll focus on the `/sys/class/gpio` method first for a deeper understanding.

#### 1. Exporting a GPIO Pin

Before you can use a GPIO pin, you must "export" it. This makes the pin available for user-space control.

**Command:**

```bash
echo <gpio_number> | sudo tee /sys/class/gpio/export
```

*   Replace `<gpio_number>` with the BCM number of the pin you want to use. For example, to export GPIO 17:
    ```bash
    echo 17 | sudo tee /sys/class/gpio/export
    ```

#### 2. Setting the Pin Direction

Once exported, you need to tell the system whether the pin will be an input or an output.

**Command:**

```bash
echo <direction> | sudo tee /sys/class/gpio/gpio<gpio_number>/direction
```

*   Replace `<direction>` with either `in` or `out`.
*   **Example (Output for LED):**
    ```bash
    echo out | sudo tee /sys/class/gpio/gpio17/direction
    ```
*   **Example (Input for Button):**
    ```bash
    echo in | sudo tee /sys/class/gpio/gpio18/direction
    ```

#### 3. Controlling the Pin Value (Output)

If the pin is configured as an output, you can set its value (high or low).

**Command:**

```bash
echo <value> | sudo tee /sys/class/gpio/gpio<gpio_number>/value
```

*   Replace `<value>` with `1` for high voltage (typically 3.3V on Raspberry Pi) or `0` for low voltage (0V).
*   **Example (Turn LED ON):**
    ```bash
    echo 1 | sudo tee /sys/class/gpio/gpio17/value
    ```
*   **Example (Turn LED OFF):**
    ```bash
    echo 0 | sudo tee /sys/class/gpio/gpio17/value
    ```

#### 4. Reading the Pin Value (Input)

If the pin is configured as an input, you can read its current state.

**Command:**

```bash
cat /sys/class/gpio/gpio<gpio_number>/value
```

*   This command will output `0` or `1` representing the state of the input pin.
*   **Example (Read Button State):**
    ```bash
    cat /sys/class/gpio/gpio18/value
    ```

#### 5. Unexporting a GPIO Pin

When you're finished with a GPIO pin, it's good practice to unexport it.

**Command:**

```bash
echo <gpio_number> | sudo tee /sys/class/gpio/unexport
```

*   **Example:**
    ```bash
    echo 17 | sudo tee /sys/class/gpio/unexport
    ```

## Using a Python Library (`RPi.GPIO`)

While direct `/sys/class/gpio` interaction is fundamental, using libraries simplifies development. The `RPi.GPIO` library for Python is widely used and abstracts away much of the low-level detail.

### Installation:

If not already installed, you can usually install it using pip:

```bash
sudo apt update
sudo apt install python3-rpi.gpio
```

### Basic Python Example: Blinking an LED

This example uses BCM numbering.

```python
import RPi.GPIO as GPIO
import time

# Pin Definitions (using BCM numbering)
LED_PIN = 17

# Setup GPIO
GPIO.setmode(GPIO.BCM)          # Use Broadcom SOC channel numbering
GPIO.setup(LED_PIN, GPIO.OUT)   # Set LED_PIN as an output

try:
    while True:
        print("LED ON")
        GPIO.output(LED_PIN, GPIO.HIGH) # Turn LED ON
        time.sleep(1)                   # Wait for 1 second

        print("LED OFF")
        GPIO.output(LED_PIN, GPIO.LOW)  # Turn LED OFF
        time.sleep(1)                   # Wait for 1 second

except KeyboardInterrupt:
    # Clean up GPIO settings when script is interrupted
    print("Exiting program and cleaning up GPIO.")
    GPIO.cleanup()
```

**To run this:** Save it as a `.py` file (e.g., `blink.py`) and execute it using `sudo python3 blink.py`.

### Basic Python Example: Reading a Button

```python
import RPi.GPIO as GPIO
import time

# Pin Definitions (using BCM numbering)
BUTTON_PIN = 18

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP) # Set BUTTON_PIN as input with pull-up resistor

print("Press the button (or Ctrl+C to exit)...")

try:
    while True:
        button_state = GPIO.input(BUTTON_PIN)
        if button_state == GPIO.LOW: # Button is pressed (LOW because of pull-up resistor)
            print("Button Pressed!")
            time.sleep(0.1) # Debounce delay
        else:
            print("Button Released.")
            time.sleep(0.1) # Debounce delay

except KeyboardInterrupt:
    print("Exiting program and cleaning up GPIO.")
    GPIO.cleanup()
```

**Explanation:**

*   `pull_up_down=GPIO.PUD_UP`: This is important for buttons. When a button is connected between a GPIO pin and ground, it's common to use a pull-up resistor. This means the pin will read HIGH when the button is *not* pressed and LOW when it *is* pressed. This avoids floating input states.
*   `time.sleep(0.1)`: This is a simple form of debouncing, which helps ignore spurious signals when the button is pressed or released.

## Configuration Considerations

*   **Power:** Ensure your SBC is adequately powered, especially when connecting external components.
*   **Voltage Levels:** Be mindful of the voltage levels your SBC's GPIO pins operate at (e.g., 3.3V for Raspberry Pi). Connecting components designed for different voltage levels (like 5V) directly can damage your SBC.
*   **Current Limits:** GPIO pins have current limitations. For higher-power devices like motors, you'll need driver circuits (e.g., transistors, motor drivers) instead of connecting them directly.
*   **Libraries and Tools:** For more complex projects, explore other libraries or dedicated embedded Linux distributions.

By mastering these basic SBC configuration techniques, you lay the groundwork for building more sophisticated embedded systems that can interact with the physical world.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/sbc-configuration|SBC Configuration]]
