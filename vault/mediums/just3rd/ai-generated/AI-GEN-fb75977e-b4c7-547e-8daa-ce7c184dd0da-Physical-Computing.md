---
type: "medium"
title: "Physical Computing with Arduino: Bringing Ideas to Life"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/interactive-system-development/microskills/physical-computing|physical-computing]]"
---
# Physical Computing with Arduino: Bringing Ideas to Life

This lesson will guide you through the fundamentals of physical computing using Arduino, enabling you to build functional prototypes that interact with the real world. We'll focus on applying this knowledge to create tangible outcomes as part of your interactive system development journey.

## What is Physical Computing?

Physical computing is the practice of building interactive physical objects and systems that sense and respond to the real world. It bridges the gap between the digital and physical realms. Think of it as giving your code a body and senses. Instead of just displaying information on a screen, you can make lights blink, motors spin, or sounds play based on inputs from sensors.

Arduino is a popular open-source electronics platform based on easy-to-use hardware and software. It's a powerful tool for hobbyists, artists, designers, and anyone who wants to create interactive projects.

## Core Components of an Arduino Prototype

At its heart, an Arduino prototype involves three main elements:

1.  **The Arduino Board (The Brain):** This is the microcontroller that runs your code. It reads input from sensors and controls output devices. Common Arduino boards include the Arduino Uno, Nano, and Mega.
2.  **Inputs (The Senses):** These are devices that gather information from the environment. Examples include:
    *   **Pushbuttons:** Detect when a button is pressed.
    *   **Potentiometers:** Measure varying levels of resistance, often used as knobs.
    *   **Light Dependent Resistors (LDRs):** Measure ambient light levels.
    *   **Temperature Sensors:** Measure the surrounding temperature.
3.  **Outputs (The Actions):** These are devices that perform actions or provide feedback to the user or environment. Examples include:
    *   **LEDs (Light Emitting Diodes):** Emit light.
    *   **Buzzers/Speakers:** Produce sound.
    *   **Servos/DC Motors:** Create movement.
    *   **LCD Displays:** Show text or simple graphics.

## Getting Started: A Simple LED Blinker

Let's build a fundamental prototype: an LED that blinks on and off. This introduces the basic workflow of Arduino programming.

### What You'll Need:

*   An Arduino board (e.g., Arduino Uno)
*   A USB cable to connect the Arduino to your computer
*   A breadboard
*   An LED
*   A 220-ohm resistor (to protect the LED)
*   Jumper wires

### The Circuit Setup:

1.  **Connect the LED:**
    *   Locate the longer leg of the LED (the anode). This will connect to the Arduino.
    *   Locate the shorter leg (the cathode). This will connect to ground.
2.  **Connect the Resistor:** Place the 220-ohm resistor in series with the LED. One end of the resistor connects to the LED's anode, and the other end will connect to a digital pin on the Arduino. This limits the current flowing through the LED, preventing it from burning out.
3.  **Connect to Arduino:**
    *   Connect the free end of the resistor (which is connected to the LED's anode) to a digital pin on your Arduino board. Digital pins 0-13 are suitable. Let's choose **Pin 13**.
    *   Connect the LED's cathode (the shorter leg) to a **GND** (Ground) pin on the Arduino.

### The Code (Arduino Sketch):

You'll write this code using the Arduino IDE (Integrated Development Environment), which you'll need to install on your computer.

```c++
// Define the pin where the LED is connected
const int ledPin = 13;

// The setup function runs once when you press reset or power the board
void setup() {
  // Initialize the digital pin as an output.
  pinMode(ledPin, OUTPUT);
}

// The loop function runs over and over again forever
void loop() {
  digitalWrite(ledPin, HIGH);   // Turn the LED on (HIGH is the voltage level)
  delay(1000);                  // Wait for a second (1000 milliseconds)
  digitalWrite(ledPin, LOW);    // Turn the LED off by making the voltage LOW
  delay(1000);                  // Wait for a second
}
```

### How it Works:

*   `const int ledPin = 13;`: This line declares a constant variable named `ledPin` and assigns it the value `13`. This makes your code more readable and easier to modify if you decide to use a different pin.
*   `void setup()`: This function is executed only once when the Arduino starts up.
    *   `pinMode(ledPin, OUTPUT);`: This function configures the specified pin (`ledPin`) to act as an output. This means the Arduino will send voltage out through this pin.
*   `void loop()`: This function runs repeatedly after `setup()` has finished.
    *   `digitalWrite(ledPin, HIGH);`: This sends a HIGH voltage (typically 5V on an Arduino Uno) to `ledPin`, turning the LED on.
    *   `delay(1000);`: This pauses the program execution for 1000 milliseconds (1 second).
    *   `digitalWrite(ledPin, LOW);`: This sends a LOW voltage (0V) to `ledPin`, turning the LED off.
    *   The `loop()` function then repeats, causing the LED to blink.

### Uploading and Running:

1.  Connect your Arduino board to your computer via USB.
2.  Open the Arduino IDE.
3.  Paste the code into the editor.
4.  Select the correct board and port from the "Tools" menu.
5.  Click the "Upload" button (the arrow pointing to the right).

If everything is connected correctly, you should see your LED start blinking!

## Next Steps: Expanding Your Prototypes

This simple LED blinker is just the beginning. You can:

*   **Add a Button:** Connect a pushbutton to an input pin. In your `loop()` function, read the state of the button using `digitalRead()`. If the button is pressed, turn the LED on; otherwise, keep it off.
*   **Control Brightness:** Use Pulse Width Modulation (PWM) on specific digital pins (marked with a `~` symbol on many boards) to control the brightness of the LED. Instead of `digitalWrite()`, use `analogWrite()` with values from 0 (off) to 255 (full brightness).
*   **Incorporate Sensors:** Connect an LDR to read light levels and adjust the LED's behavior accordingly. For example, make the LED brighter in darker conditions.

By understanding how to connect components and write basic code, you are applying the principles of physical computing to build functional Arduino prototypes.

## Supports

- [[skills/web-and-design/frontend-ux/interactive-system-development/microskills/physical-computing|Physical Computing]]
