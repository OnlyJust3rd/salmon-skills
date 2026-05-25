---
type: medium
title: Problem Solving with Reactive Control
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[problem-solving-with-reactive-control|problem-solving-with-reactive-control]]"
related-skills:
  - "[[skills/computing/hardware-embedded/robotics/robotics/robotics|robotics]]"
learning-time-in-minutes: 4
---
# Problem Solving with Reactive Control

Reactive control is a fundamental approach in robotics where a robot's actions are directly triggered by its sensory inputs. Unlike deliberative control, which involves complex planning and world modeling, reactive control focuses on immediate responses to the environment. This skill is crucial for robots that need to navigate dynamic or unpredictable situations, such as avoiding obstacles or responding to unexpected events.

This lesson will focus on applying reactive control concepts to solve specific robotic tasks. We'll explore how to translate sensory data into robot actions to achieve desired outcomes.

## Core Idea: Stimulus-Response

At its heart, reactive control operates on a simple stimulus-response mechanism.

*   **Stimulus:** Sensory input from the environment (e.g., proximity sensor detecting an obstacle, camera seeing a line).
*   **Response:** A pre-defined motor command or action (e.g., turn left, stop, follow the line).

This forms a direct loop: Sense -> Think (very simply) -> Act. The "think" part is minimal; it's often just a set of rules or a lookup table that maps specific sensor readings to specific actions.

## Applying Reactive Control to Obstacle Avoidance

A classic example of reactive control in action is obstacle avoidance. Imagine a simple mobile robot equipped with ultrasonic sensors on its front.

**Scenario:** A robot needs to navigate a room without hitting walls or furniture.

**Reactive Strategy:**

1.  **Sense:** Continuously read the distance from the ultrasonic sensors.
2.  **Rule:**
    *   If the front sensor detects an object within a threshold distance (e.g., 20 cm), then react.
    *   If the front sensor detects an object far away (e.g., > 20 cm), then continue moving forward.
3.  **Act:**
    *   If an object is too close: Stop forward motion, turn right for a short duration, then resume forward motion.
    *   If no object is too close: Move forward.

### Pseudocode for Obstacle Avoidance

```pseudocode
ROBOT_STATE = MOVING_FORWARD
OBSTACLE_THRESHOLD = 20 // cm

LOOP FOREVER:
    front_distance = READ_ULTRA_SONIC_SENSOR()

    IF front_distance < OBSTACLE_THRESHOLD:
        IF ROBOT_STATE == MOVING_FORWARD:
            STOP_MOTORS()
            TURN_RIGHT(duration=0.5) // Turn for 0.5 seconds
            ROBOT_STATE = TURNING
    ELSE: // Object is far away
        IF ROBOT_STATE == TURNING:
            MOVE_FORWARD()
            ROBOT_STATE = MOVING_FORWARD

    // Add other sensor checks and behaviors here (e.g., side sensors)
```

### Practical Considerations

*   **Sensor Fusion:** For more robust avoidance, you might use multiple sensors (e.g., front, left, right). The rules would then become more complex: if front is blocked, check left and right to decide which way to turn.
*   **Turning Behavior:** The duration or angle of the turn is critical. Too short, and the robot might get stuck. Too long, and it might miss an opening. This often requires tuning.
*   **State Machine:** The pseudocode implicitly uses a simple state machine (MOVING\_FORWARD, TURNING). More complex reactive systems can use more elaborate state machines to manage different behaviors.

## Applying Reactive Control to Line Following

Another common task where reactive control shines is line following. A robot with line-following sensors needs to stay centered on a dark line on a light surface (or vice-versa).

**Scenario:** A robot needs to follow a black line on a white floor.

**Reactive Strategy:**

1.  **Sense:** Use line-following sensors (often infrared) positioned to detect the line. Typically, you'd have sensors on the left and right sides of the robot's intended path.
    *   `LEFT_SENSOR`: Detects the line (e.g., high reading for black) or not (e.g., low reading for white).
    *   `RIGHT_SENSOR`: Detects the line or not.
2.  **Rule & Act:** Based on the sensor readings, the robot adjusts its steering.
    *   If both sensors see white: The robot is likely off the line to the right. Steer left.
    *   If both sensors see black: The robot is likely centered on the line. Move forward.
    *   If the left sensor sees white and the right sees black: The robot is off the line to the left. Steer right.
    *   If the left sensor sees black and the right sees white: The robot is off the line to the right. Steer left.

### Pseudocode for Line Following

```pseudocode
LINE_FOLLOWING_STATE = MOVING_FORWARD
FORWARD_SPEED = 50 // % of max speed
TURN_SPEED = 30 // % of max speed

LOOP FOREVER:
    left_sensor_reading = READ_LEFT_LINE_SENSOR()
    right_sensor_reading = READ_RIGHT_LINE_SENSOR()

    // Assume higher reading means it's on the line (black)
    IF left_sensor_reading > THRESHOLD AND right_sensor_reading > THRESHOLD:
        // Centered on the line
        SET_MOTOR_SPEEDS(FORWARD_SPEED, FORWARD_SPEED)
    ELSE IF left_sensor_reading < THRESHOLD AND right_sensor_reading > THRESHOLD:
        // Robot drifted right, need to steer left
        SET_MOTOR_SPEEDS(TURN_SPEED, FORWARD_SPEED) // Left motor slower
    ELSE IF left_sensor_reading > THRESHOLD AND right_sensor_reading < THRESHOLD:
        // Robot drifted left, need to steer right
        SET_MOTOR_SPEEDS(FORWARD_SPEED, TURN_SPEED) // Right motor slower
    ELSE IF left_sensor_reading < THRESHOLD AND right_sensor_reading < THRESHOLD:
        // Lost the line completely, try to find it (e.g., wider search pattern)
        // For simplicity, let's assume we stop or signal an error
        STOP_MOTORS()
        PRINT("Lost the line!")
        BREAK // Exit loop for this example
    // Handle cases where one sensor might be unreliable or noise

```

### Practical Considerations

*   **Threshold Tuning:** The `THRESHOLD` value is crucial. It determines what the sensors consider "on the line" versus "off the line." This needs careful calibration based on lighting conditions and the surface.
*   **Turning Proportionality:** Instead of fixed `TURN_SPEED`, a more advanced reactive system might adjust the turning speed proportionally to how far off the line the robot is. The larger the difference between sensors, the sharper the turn.
*   **Sensor Placement:** The physical placement and spacing of the line sensors directly affect the robot's responsiveness and ability to handle curves.

## Key Takeaways

*   Reactive control is about direct mapping of sensory input to motor output.
*   It's effective for tasks requiring immediate responses to environmental stimuli.
*   Problem-solving with reactive control involves defining clear rules based on sensor data.
*   Tuning parameters (thresholds, durations, speeds) is essential for successful implementation.
*   While simple, reactive control can be surprisingly powerful and forms the basis of many robotic behaviors.

## Supports

- [[problem-solving-with-reactive-control|Problem Solving with Reactive Control]]
