---
type: "medium"
title: "Embedded System Input/Output Devices: Sensors and Actuators"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/embedded-system-input-output-devices|embedded-system-input-output-devices]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-systems/embedded-systems|embedded-systems]]"
learning-time-in-minutes: 5
---
# Embedded System Input/Output Devices: Sensors and Actuators

In embedded systems, interacting with the real world is crucial. This interaction happens through input and output devices. For embedded systems, the primary input devices are **sensors**, and the primary output devices are **actuators**. Understanding their roles is fundamental to building functional systems.

## What are Sensors?

Sensors are devices that detect and respond to some type of input from the physical environment. This input can be light, heat, motion, humidity, pressure, or any other environmental phenomenon. The sensor then converts this physical input into an electrical signal, typically a voltage or current, that an embedded system's microcontroller can read and process.

Think of sensors as the "eyes" and "ears" of an embedded system. They provide the system with information about its surroundings.

### Common Sensor Types and Their Functions

Here are some frequently used sensors in embedded systems:

*   **Temperature Sensors:** Measure the ambient temperature. They are essential for climate control, weather monitoring, and safety systems that prevent overheating.
    *   *Example:* A digital thermometer in your smart thermostat.
*   **Light Sensors (Photoresistors/Photodiodes):** Detect the intensity of light. They can be used to automate lighting, adjust screen brightness, or detect the presence or absence of light.
    *   *Example:* The ambient light sensor on your smartphone that adjusts screen brightness.
*   **Motion Sensors (PIR - Passive Infrared):** Detect movement by sensing changes in infrared radiation. They are commonly used in security systems and automatic lighting.
    *   *Example:* Motion-activated lights in a room.
*   **Proximity Sensors:** Detect the presence of nearby objects without physical contact. They can use infrared, ultrasonic waves, or capacitive sensing.
    *   *Example:* Sensors in your car that detect obstacles when parking.
*   **Humidity Sensors:** Measure the amount of water vapor in the air. Important for environmental monitoring and agriculture.
    *   *Example:* A sensor in a greenhouse to maintain optimal humidity for plants.
*   **Pressure Sensors:** Measure pressure in a fluid or gas. Used in weather stations, tire pressure monitoring systems, and industrial applications.
    *   *Example:* A barometric pressure sensor in a weather device.
*   **Accelerometers and Gyroscopes:** Measure acceleration and angular velocity, respectively. Crucial for detecting orientation, movement, and vibration in devices like smartphones, drones, and wearable technology.
    *   *Example:* The screen rotation feature on your smartphone.

## What are Actuators?

Actuators are devices that convert electrical signals from an embedded system into some form of physical action or output. They are the "hands" and "voice" of an embedded system, allowing it to interact with and control its environment.

### Common Actuator Types and Their Functions

Here are some common actuators used in embedded systems:

*   **Motors (DC, Servo, Stepper):** Electric motors are widely used to create rotational or linear motion.
    *   **DC Motors:** Provide continuous rotation. Used in fans, pumps, and simple robotic movements.
    *   **Servo Motors:** Allow precise control over the angular position. Used in robotics for precise limb movements.
    *   **Stepper Motors:** Move in discrete steps, offering very precise positioning. Ideal for 3D printers and CNC machines.
    *   *Example:* The motor that spins the blades of a cooling fan in a computer.
*   **LEDs (Light Emitting Diodes):** Emit light when an electrical current passes through them. Used for indicators, displays, and illumination.
    *   *Example:* The power indicator light on your router.
*   **Buzzers and Speakers:** Produce sound. Buzzers create simple tones, while speakers can reproduce complex audio.
    *   *Example:* The beeping sound when your microwave finishes.
*   **Solenoids:** Electromechanical switches that convert electrical energy into linear mechanical motion. Used in valves, locks, and automated doors.
    *   *Example:* The locking mechanism in an electronic door lock.
*   **Relays:** Electromechanical switches that use a small electrical signal to control a larger electrical circuit. Useful for switching high-voltage or high-current devices on and off.
    *   *Example:* A thermostat using a relay to turn a heating system on or off.
*   **Displays (LCD, OLED, Seven-Segment):** While more complex, displays are actuators that provide visual output.
    *   *Example:* The numbers shown on a digital clock.

## The Sensor-Actuator Loop

Sensors and actuators often work together in a loop within an embedded system:

1.  **Sensing:** A sensor detects a change in the environment.
2.  **Processing:** The embedded system's microcontroller reads the sensor's signal and processes it based on its programming.
3.  **Actuating:** Based on the processed information, the microcontroller sends a signal to an actuator to perform an action.
4.  **Feedback:** The action taken by the actuator might change the environment, which is then detected by the sensor, restarting the loop.

### A Simple Example: Automatic Sprinkler System

*   **Sensor:** A **soil moisture sensor** measures the dryness of the soil.
*   **Processing:** The embedded system reads the moisture level. If it's below a certain threshold, it decides to water.
*   **Actuator:** An **electric water valve (solenoid)** is opened.
*   **Feedback:** The valve allows water to flow, watering the plants, and the soil moisture sensor will eventually detect the increased moisture.

## Conclusion

Sensors and actuators are the vital interfaces that allow embedded systems to perceive and interact with the physical world. By understanding the diverse types and functions of these devices, you gain the ability to design and build systems that can sense their environment and respond intelligently to it.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-systems/microskills/embedded-system-input-output-devices|Embedded System Input/Output Devices]]
