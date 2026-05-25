---
type: medium
title: Basic Code Implementation for Arduino Prototypes
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[basic-code-implementation|basic-code-implementation]]"
learning-time-in-minutes: 4
---
# Basic Code Implementation for Arduino Prototypes

This lesson focuses on the fundamental skill of writing and testing simple code for Arduino-based interactive prototypes. We'll explore the core components of an Arduino sketch and how to make your prototype respond to basic inputs and produce outputs.

## Understanding the Arduino Sketch

An Arduino sketch is essentially a program written in a simplified version of C/C++ that runs on the Arduino board. Every Arduino sketch has two main functions:

*   **`setup()`**: This function runs once when the Arduino board powers up or is reset. It's used for initializing pins, libraries, and starting serial communication.
*   **`loop()`**: This function runs repeatedly after `setup()` has finished. This is where your main program logic resides, continuously executing commands.

### Basic Structure of an Arduino Sketch

```c++
void setup() {
  // Initialization code goes here
  // For example, setting pin modes
  // Serial.begin(9600); // To start serial communication
}

void loop() {
  // Main program logic goes here
  // This code will run over and over
}
```

## Your First Program: The Blink Sketch

The "Blink" sketch is the "Hello, World!" of physical computing. It demonstrates how to control an output pin to turn an LED on and off. Most Arduino boards have a built-in LED connected to pin 13.

### Steps to Implement the Blink Sketch

1.  **Open the Arduino IDE**: If you don't have it installed, download it from the official Arduino website.
2.  **New Sketch**: Go to `File > New Sketch`.
3.  **Write the Code**: Copy and paste the following code into the IDE.

    ```c++
    // The setup function runs once when you press reset or power the board
    void setup() {
      // Initialize digital pin LED_BUILTIN as an output.
      pinMode(LED_BUILTIN, OUTPUT);
    }

    // The loop function runs over and over again forever
    void loop() {
      digitalWrite(LED_BUILTIN, HIGH);   // Turn the LED on (HIGH is the voltage level)
      delay(1000);                       // Wait for a second
      digitalWrite(LED_BUILTIN, LOW);    // Turn the LED off by making the voltage LOW
      delay(1000);                       // Wait for a second
    }
    ```
4.  **Verify (Compile) the Code**: Click the checkmark icon (✓) in the Arduino IDE toolbar. This checks for syntax errors.
5.  **Upload the Code**: Connect your Arduino board to your computer using a USB cable. Select your Arduino board and COM port from `Tools > Board` and `Tools > Port` respectively. Then, click the right arrow icon (→) to upload the sketch.

### How the Blink Sketch Works

*   `pinMode(LED_BUILTIN, OUTPUT);`: In `setup()`, this line configures the built-in LED pin (which is a predefined constant for pin 13) as an `OUTPUT`. This means the Arduino will send signals *out* through this pin.
*   `digitalWrite(LED_BUILTIN, HIGH);`: In `loop()`, this command sets the voltage on the `LED_BUILTIN` pin to `HIGH` (typically 5V or 3.3V depending on the board). This supplies enough voltage to light up the LED.
*   `delay(1000);`: This function pauses the program execution for the specified number of milliseconds. `1000` milliseconds equals 1 second.
*   `digitalWrite(LED_BUILTIN, LOW);`: This command sets the voltage on the pin to `LOW` (0V), which turns the LED off.

## Controlling External Components

You can extend this concept to control external LEDs by connecting them to other digital pins on your Arduino.

### Connecting an External LED

1.  **Components**: You'll need an LED, a resistor (around 220-330 ohms is common for standard LEDs), and jumper wires.
2.  **Wiring**:
    *   Connect the longer leg of the LED (anode) to a digital pin (e.g., pin 7).
    *   Connect the shorter leg of the LED (cathode) to one end of the resistor.
    *   Connect the other end of the resistor to the `GND` (Ground) pin on your Arduino.

### Modified Blink Sketch for External LED

```c++
const int ledPin = 7; // Define the pin number for the LED

void setup() {
  // Initialize the ledPin as an output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Turn the LED on
  digitalWrite(ledPin, HIGH);
  delay(500); // Wait for half a second

  // Turn the LED off
  digitalWrite(ledPin, LOW);
  delay(500); // Wait for half a second
}
```

**Key Changes**:
*   We defined a constant `ledPin` to make it easy to change the pin number.
*   `pinMode(ledPin, OUTPUT);` and `digitalWrite(ledPin, ...)` now use our defined `ledPin` variable.

## Reading Input: The Button Example

Interactive prototypes often involve responding to user input. A common input device is a push button.

### Connecting a Push Button

1.  **Components**: A momentary push button and jumper wires.
2.  **Wiring (Pull-down Resistor Method)**:
    *   Connect one terminal of the button to a digital pin (e.g., pin 2).
    *   Connect the other terminal of the button to `5V`.
    *   Connect a resistor (e.g., 10k ohms) between the same digital pin (pin 2) and `GND`.

### Reading a Button State

```c++
const int buttonPin = 2;    // the number of the pushbutton pin
const int ledPin = 13;      // the number of the LED pin (built-in LED)

int buttonState = 0;        // variable for reading the pushbutton status

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
  // Initialize the button pin as an input
  pinMode(buttonPin, INPUT);
}

void loop() {
  // Read the state of the pushbutton value
  buttonState = digitalRead(buttonPin);

  // Check if the pushbutton is pressed.
  // If buttonState is HIGH, the button is pressed (due to the pull-down resistor).
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

### How the Button Example Works

*   `pinMode(buttonPin, INPUT);`: In `setup()`, we configure `buttonPin` as an `INPUT` so the Arduino can read the voltage level from it.
*   `buttonState = digitalRead(buttonPin);`: In `loop()`, `digitalRead()` reads the voltage on the `buttonPin`. It returns `HIGH` if the voltage is close to 5V and `LOW` if it's close to 0V.
    *   When the button is **not pressed**, the resistor pulls the pin to `LOW` (0V).
    *   When the button **is pressed**, it connects the pin directly to `5V`, overriding the resistor and making the pin `HIGH`.
*   `if (buttonState == HIGH)`: This `if` statement checks if the `buttonState` variable is `HIGH`. If it is, it means the button is pressed, and we turn the LED on.
*   `else`: If the `buttonState` is not `HIGH` (meaning it's `LOW`), the `else` block executes, turning the LED off.

## Testing and Debugging

*   **Serial Monitor**: Use `Serial.begin(9600);` in `setup()` and `Serial.println(your_variable);` in `loop()` to print values to the Serial Monitor in the Arduino IDE. This is invaluable for seeing what your program is actually doing.
*   **Check Connections**: Loose wires are a common source of problems. Double-check all your connections.
*   **Correct Pins**: Ensure you're using the correct pin numbers in your code that match your wiring.
*   **Upload Errors**: If you get compilation errors, read them carefully. They often point to the exact line and type of error.

By mastering these basic coding concepts, you're well on your way to building more complex and interactive Arduino prototypes.

## Supports

- [[basic-code-implementation|Basic Code Implementation]]
