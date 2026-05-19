---
type: "medium"
title: "Fulfilling Application Requirements in Embedded Systems"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/embedded-system-creation/microskills/application-requirement-fulfillment|Application Requirement Fulfillment]]"
---
# Fulfilling Application Requirements in Embedded Systems

This lesson focuses on **Application Requirement Fulfillment**, a crucial microskill for **Embedded System Creation**, specifically when aiming to **Complete Embedded System Creation** using bare-bone RTOS and AVR microcontrollers. Your goal is to ensure the system you build precisely meets the needs of its intended application.

## Understanding Application Requirements

Before you write a single line of code or connect a single component, you *must* thoroughly understand the application requirements. These aren't just vague ideas; they are concrete specifications that define what your embedded system needs to do.

### Types of Requirements

Requirements can generally be categorized as:

*   **Functional Requirements:** What the system *does*. This includes inputs, outputs, processing logic, and specific behaviors.
*   **Non-Functional Requirements:** How the system *performs*. This covers aspects like performance (speed, response time), reliability (error handling, uptime), power consumption, cost, size, security, and usability.

### Translating Requirements into Embedded System Design

This is where the "Create" action from Bloom's Taxonomy comes into play. You are taking abstract requirements and translating them into concrete hardware and software design decisions.

For example, if a requirement states: "The system must detect a button press within 10 milliseconds and toggle an LED," you need to consider:

*   **Hardware:** What type of button (tactile, capacitive)? How will it be connected to the AVR microcontroller (interrupt-driven, polling)? What LED (standard, high-brightness)?
*   **Software:** How will button presses be debounced? What interrupt service routine (ISR) will be triggered? How will the RTOS scheduler manage the task of toggling the LED? What is the timing budget for this operation?

## Practical Application: Designing a Simple Environmental Monitor

Let's consider a scenario for an AVR microcontroller-based embedded system.

**Application Requirements:**

1.  **Functional:**
    *   Read temperature from a TMP36 sensor every 5 seconds.
    *   Read humidity from a DHT22 sensor every 10 seconds.
    *   If temperature exceeds 30°C, turn on a red LED.
    *   If humidity exceeds 60%, turn on a green LED.
    *   If both conditions are met, turn on a blue LED (if available, otherwise cycle between red and green).
    *   Display current temperature and humidity on a simple 16x2 LCD.
2.  **Non-Functional:**
    *   System must be responsive, with sensor readings and LED changes occurring within 1 second of their trigger condition.
    *   Power consumption should be minimized, especially when idle.
    *   The system should be robust against temporary sensor read failures (e.g., retry reading if initial read fails).

### Design Considerations for Fulfillment

To fulfill these requirements, we need to make specific choices:

*   **Microcontroller:** An AVR microcontroller like the ATmega328P (common in Arduino boards) is suitable.
*   **RTOS:** A bare-bone RTOS will be used for task management. We'll likely need tasks for:
    *   `TempReadTask`: Reads temperature sensor.
    *   `HumidityReadTask`: Reads humidity sensor.
    *   `DisplayTask`: Updates LCD.
    *   `StatusLEDTask`: Manages LED output based on sensor data.
*   **Sensors:**
    *   TMP36: Analog output, requires an ADC channel on the AVR.
    *   DHT22: Digital, requires specific timing protocols. Libraries will be essential.
*   **Output:**
    *   LEDs: Connected to digital output pins.
    *   LCD: Connected via I2C or parallel interface.
*   **Timing:**
    *   Timer interrupts will be crucial for scheduling sensor reads and RTOS ticks.
    *   The RTOS will manage task priorities and scheduling to meet the 1-second responsiveness requirement.
*   **Robustness:**
    *   Implement retry mechanisms in sensor reading functions.
    *   Use flags or status variables to indicate sensor health.

### Translating Requirements to Code Structure (Pseudocode)

```pseudocode
// --- Global Variables ---
volatile float current_temperature = 0.0;
volatile float current_humidity = 0.0;
volatile bool temp_over_limit = false;
volatile bool humidity_over_limit = false;

// --- Task Definitions ---

// Task to read temperature sensor
task TempReadTask() {
    while (true) {
        // Read TMP36 analog value
        analog_value = read_adc(ADC_CHANNEL_TMP36);
        // Convert to Celsius (assuming TMP36 datasheet formula)
        temperature = (analog_value * 5.0 / 1024.0 - 0.5) * 100.0; // Example conversion

        // Check against limit and set flag
        if (temperature > 30.0) {
            temp_over_limit = true;
        } else {
            temp_over_limit = false;
        }
        current_temperature = temperature; // Update shared variable

        // Delay for 5 seconds
        rtos_delay_ms(5000);
    }
}

// Task to read humidity sensor
task HumidityReadTask() {
    while (true) {
        // Read DHT22 data (requires specific protocol implementation/library)
        success = read_dht22(&humidity, &temperature_from_dht); // Note: DHT22 can also provide temp

        if (success) {
            // Check against limit and set flag
            if (humidity > 60.0) {
                humidity_over_limit = true;
            } else {
                humidity_over_limit = false;
            }
            current_humidity = humidity; // Update shared variable
        } else {
            // Handle read failure - maybe log error or indicate sensor offline
            // For robustness, we might retry, but for simplicity here, we skip update.
        }

        // Delay for 10 seconds
        rtos_delay_ms(10000);
    }
}

// Task to update LCD display
task DisplayTask() {
    initialize_lcd();
    while (true) {
        sprintf(buffer, "T: %.1f C", current_temperature);
        set_lcd_cursor(0, 0);
        print_lcd(buffer);

        sprintf(buffer, "H: %.1f %%", current_humidity);
        set_lcd_cursor(1, 0);
        print_lcd(buffer);

        // Delay for display refresh rate (e.g., 1 second)
        rtos_delay_ms(1000);
    }
}

// Task to control status LEDs
task StatusLEDTask() {
    while (true) {
        if (temp_over_limit && humidity_over_limit) {
            // Both conditions met: turn on blue LED (if available)
            // Or cycle red/green if blue is not available.
            set_led(LED_BLUE, ON);
        } else if (temp_over_limit) {
            set_led(LED_RED, ON);
            set_led(LED_GREEN, OFF);
        } else if (humidity_over_limit) {
            set_led(LED_GREEN, ON);
            set_led(LED_RED, OFF);
        } else {
            set_led(LED_RED, OFF);
            set_led(LED_GREEN, OFF);
            set_led(LED_BLUE, OFF); // Ensure blue is off if not needed
        }
        rtos_delay_ms(200); // Check status frequently
    }
}

// --- Main Function ---
main() {
    initialize_hardware(); // Configure pins, ADC, timers
    rtos_init();

    // Create tasks
    rtos_create_task(TempReadTask, PRIORITY_LOW, STACK_SIZE_DEFAULT);
    rtos_create_task(HumidityReadTask, PRIORITY_LOW, STACK_SIZE_DEFAULT);
    rtos_create_task(DisplayTask, PRIORITY_MEDIUM, STACK_SIZE_DEFAULT);
    rtos_create_task(StatusLEDTask, PRIORITY_HIGH, STACK_SIZE_DEFAULT); // Higher priority for faster response

    // Start RTOS scheduler
    rtos_start_scheduler();
}
```

## Key Principles for Requirement Fulfillment

*   **Traceability:** Ensure every piece of your design (hardware component, software function, RTOS task) can be traced back to a specific requirement.
*   **Verification:** Plan how you will *verify* that each requirement is met. This involves testing, simulation, and analysis.
*   **Iteration:** Requirements can sometimes be ambiguous or incomplete. Be prepared to clarify them with stakeholders and iterate on your design.
*   **Trade-offs:** Often, requirements conflict (e.g., high performance vs. low power). You'll need to make informed decisions about trade-offs based on the application's priorities.

By diligently defining, translating, and verifying your application requirements, you lay the foundation for a successful embedded system. This process is central to the `Create` action at Bloom's Level 6, where you synthesize all elements into a functional whole.

## Supports

- [[skills/hardware-embedded/electronics-embedded/embedded-system-creation/microskills/application-requirement-fulfillment|Application Requirement Fulfillment]]
