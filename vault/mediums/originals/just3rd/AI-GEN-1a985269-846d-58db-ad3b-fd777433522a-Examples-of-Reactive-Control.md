---
type: medium
title: Examples of Reactive Control in Robotics
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[examples-of-reactive-control|examples-of-reactive-control]]"
related-skills:
  - "[[skills/computing/hardware-embedded/robotics/robotics/robotics|robotics]]"
learning-time-in-minutes: 5
---
# Examples of Reactive Control in Robotics

Reactive control is a fundamental approach in robotics where a robot responds directly to its immediate environment without complex planning or internal models. This lesson focuses on identifying and recalling common examples of implemented reactive control systems. Understanding these examples will help you recognize how reactive principles are applied in real-world robots.

## What is Reactive Control?

Before diving into examples, let's briefly recap reactive control. It's characterized by:

*   **Direct stimulus-response:** Actions are triggered by sensory inputs.
*   **No internal model:** The robot doesn't build or maintain a representation of its environment or its own state over time.
*   **Simplicity and speed:** It's often computationally inexpensive and fast, making it suitable for real-time interaction.

Now, let's look at some concrete examples.

## Examples of Reactive Control Systems

Here are several instances where reactive control paradigms are prominently used:

### 1. Simple Obstacle Avoidance

This is a classic example. A robot equipped with distance sensors (like ultrasonic or infrared sensors) can reactively avoid obstacles.

*   **How it works:**
    *   If a sensor detects an object within a certain threshold, the robot immediately stops or changes its direction of movement.
    *   For example, a simple wheeled robot might have a front-facing sensor. If the sensor reading drops below a specific value, the robot executes a predefined behavior, such as reversing a short distance and then turning right.
*   **Key characteristic:** The robot's action is a direct, immediate consequence of a single sensor reading exceeding a limit. There's no thinking about *what* the obstacle is or planning a path around it in advance; it just reacts to the proximity.

### 2. Line Following Robots (Basic Implementation)

Many introductory line-following robots utilize reactive control.

*   **How it works:**
    *   The robot uses downward-facing light sensors (e.g., infrared or phototransistors) to detect a contrasting line on the ground.
    *   If the sensors detect they are drifting off the line (e.g., the left sensor sees more white, the right sees more black), the robot reacts by turning back towards the line.
    *   A simple implementation might use two sensors. If the left sensor loses the line, the robot turns left. If the right sensor loses the line, the robot turns right. If both sensors see the line, the robot moves forward.
*   **Key characteristic:** The robot constantly monitors its position relative to the line and makes immediate, small adjustments based on sensor feedback.

### 3. Vacuum Cleaning Robots (e.g., Roomba)

While modern vacuum cleaning robots incorporate more sophisticated navigation, their foundational behaviors often rely on reactive principles, especially in older or simpler models.

*   **How it works:**
    *   **Bump sensors:** When the robot physically bumps into an obstacle (like a wall or furniture leg), the bump sensor is triggered. The robot then reacts by backing up and turning a random or fixed amount before continuing.
    *   **Cliff sensors:** Sensors pointing downwards detect drop-offs (stairs). If a cliff sensor is triggered, the robot immediately stops and backs away to avoid falling.
*   **Key characteristic:** Immediate responses to direct physical contact or detected environmental hazards.

### 4. Braitenberg Vehicles

These are hypothetical robots designed by Valentin Braitenberg to illustrate how simple sensory-motor mappings can lead to complex-seeming behaviors.

*   **How it works:**
    *   A Braitenberg vehicle has motors controlling wheels and sensors (e.g., light sensors).
    *   The sensors are directly wired to the motors. For instance, a "light-seeking" vehicle might have a light sensor on the left directly wired to the right motor (speeding it up when light is detected on the left) and vice-versa.
    *   **Example (Light-seeking):** If a light source is to the left, the left sensor detects it. This sensor is wired to the *right* motor. The right motor speeds up, causing the vehicle to turn towards the light.
*   **Key characteristic:** A direct, hard-coded relationship between sensor input and motor output. No processing or decision-making in between.

### 5. Simple Gripper Control

In some industrial settings, a robotic arm might use a simple reactive control for grasping.

*   **How it works:**
    *   When an object is in the gripper's path, force sensors or tactile sensors on the gripper detect contact.
    *   The robot's control system reacts by stopping the arm's approach and closing the gripper.
    *   Once the gripper is closed and a certain amount of force is detected, the arm lifts the object.
*   **Key characteristic:** The grasping action is initiated purely by the detection of contact, not by a prior plan to grasp that specific object at that precise location.

## Summary of Examples

These examples demonstrate the core idea of reactive control: **immediate, direct responses to sensory input.**

| Example                      | Primary Sensors Used        | Reactive Behavior                                   |
| :--------------------------- | :-------------------------- | :-------------------------------------------------- |
| Obstacle Avoidance           | Distance sensors            | Stop, reverse, or turn upon detecting an obstacle   |
| Line Following (Basic)       | Light/color sensors         | Turn to re-center on the line when drifting         |
| Vacuum Cleaning Robots       | Bump sensors, Cliff sensors | Back up and turn from obstacles, stop at edges      |
| Braitenberg Vehicles         | Light sensors (example)     | Direct sensor-to-motor mapping for seeking/avoiding |
| Simple Gripper Control       | Force/tactile sensors       | Stop and grasp upon detecting contact               |

By recognizing these common implementations, you can better identify and understand the principles of reactive control in various robotic systems.

## Supports

- [[examples-of-reactive-control|Examples of Reactive Control]]
