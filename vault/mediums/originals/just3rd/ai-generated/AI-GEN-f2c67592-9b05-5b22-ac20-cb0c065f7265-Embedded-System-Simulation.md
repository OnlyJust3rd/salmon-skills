---
type: "medium"
title: "Simulating Embedded Systems in Tinkercad"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/circuit-prototyping/microskills/embedded-system-simulation|embedded-system-simulation]]"
related-skills:
  - "[[skills/computing/hardware-embedded/electronics/circuit-prototyping/circuit-prototyping|circuit-prototyping]]"
learning-time-in-minutes: 3
---
# Simulating Embedded Systems in Tinkercad

This lesson focuses on running simulations in Tinkercad that specifically involve microcontrollers and their associated code. This is a crucial step in verifying the functionality of your embedded system designs before committing to physical hardware.

## Understanding Embedded System Simulation

Embedded systems are specialized computer systems designed for a particular function within a larger mechanical or electrical system. They often include microcontrollers, which are small computers on a single integrated circuit containing a processor core, memory, and programmable input/output peripherals.

Tinkercad allows you to simulate these systems by providing virtual microcontrollers (like Arduino boards), components, and the ability to upload and run code. This lets you test your logic, interactions between components, and the microcontroller's behavior without needing actual hardware.

## Practical Example: Blinking an LED with Arduino

Let's simulate a common embedded system task: blinking an LED using an Arduino Uno and its built-in code editor.

**Scenario:** You want to test if your code correctly makes an LED blink at a specific interval.

**Steps in Tinkercad:**

1.  **Start a New Project:** Open Tinkercad and create a new "Circuits" design.
2.  **Add Components:**
    *   Drag an "Arduino Uno R3" board from the Components panel onto the workspace.
    *   Drag an "LED" (choose any color) onto the workspace.
    *   Drag a "Resistor" onto the workspace.
3.  **Wire the Circuit:**
    *   Connect the longer leg (anode) of the LED to a digital pin on the Arduino (e.g., pin 13).
    *   Connect the shorter leg (cathode) of the LED to one end of the resistor.
    *   Connect the other end of the resistor to the "GND" (Ground) pin on the Arduino.
    *   Connect the positive side of the LED (anode) to the digital pin.
4.  **Write the Code:**
    *   Click the "Code" button in Tinkercad.
    *   Select "Text" from the dropdown to use code view.
    *   Replace the default code with the following:

    ```c++
    // Define the pin connected to the LED
    int ledPin = 13;

    void setup() {
      // Initialize the digital pin as an output.
      pinMode(ledPin, OUTPUT);
    }

    void loop() {
      digitalWrite(ledPin, HIGH);   // Turn the LED on
      delay(1000);                  // Wait for 1 second
      digitalWrite(ledPin, LOW);    // Turn the LED off
      delay(1000);                  // Wait for 1 second
    }
    ```
5.  **Start Simulation:**
    *   Click the "Start Simulation" button.

**Observation:** You should see the LED in the Tinkercad circuit light up for one second, then turn off for one second, repeating this cycle. This confirms your code and circuit setup are working as intended.

## Practice Task

Create a new Tinkercad circuit that includes an Arduino Uno and two LEDs. Write code to make one LED blink twice, followed by a pause, and then the other LED blink once, followed by a longer pause. Repeat this sequence.

**Tips:**
*   Use different digital pins for each LED.
*   Experiment with different `delay()` values for varied blinking speeds and pauses.

## Self-Check Questions

1.  What is the purpose of the `pinMode()` function in the `setup()` block?
2.  Explain the role of the `delay()` function in controlling the LED's blinking rate.
3.  If your LED doesn't blink, what are two common wiring mistakes to check in Tinkercad?
4.  How would you modify the code to make the LED blink faster?

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-prototyping/microskills/embedded-system-simulation|Embedded System Simulation]]
