---
type: medium
title: SIMBot Maze Traversal Programming
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[simbot-maze-traversal-programming|simbot-maze-traversal-programming]]"
related-skills:
  - "[[skills/computing/hardware-embedded/robotics/mobile-robot-navigation/mobile-robot-navigation|mobile-robot-navigation]]"
learning-time-in-minutes: 4
---
# SIMBot Maze Traversal Programming

This lesson focuses on programming a SIMBot robot to navigate a simple maze. We will explore the core logic required to make the SIMBot move through a maze, avoid obstacles, and reach its goal. This builds upon your understanding of mobile robot navigation fundamentals and is a practical application of the "Implement SIMBot Navigation" skill outcome.

## Understanding the Maze Environment

Imagine a simple maze. Your SIMBot starts at an entrance and needs to find its way to an exit. The maze consists of walls and open paths. The SIMBot can move forward, turn left, and turn right. It will need to use its sensors to detect walls and make decisions about where to go.

## Core Navigation Strategy: Wall Following

A common and effective strategy for navigating simple mazes is the "wall following" algorithm. The basic idea is to keep one side of the robot consistently touching a wall.

There are two main variations:

*   **Right-Hand Rule:** Always keep the right side of your robot against a wall.
*   **Left-Hand Rule:** Always keep the left side of your robot against a wall.

For this lesson, let's focus on the **Right-Hand Rule**.

## SIMBot Sensors and Actions

To implement the wall-following strategy, your SIMBot will need:

1.  **Sensors:** To detect the presence of walls. We'll assume your SIMBot has at least three sensors:
    *   **Front Sensor:** Detects obstacles directly in front.
    *   **Right Sensor:** Detects obstacles to the right.
    *   **Left Sensor:** Detects obstacles to the left.
2.  **Actuators:** To control movement.
    *   **Move Forward:** The robot moves one step ahead.
    *   **Turn Left:** The robot rotates 90 degrees counter-clockwise.
    *   **Turn Right:** The robot rotates 90 degrees clockwise.

## Programming the Right-Hand Rule

The logic for the right-hand rule can be broken down into a series of conditional statements. The robot repeatedly checks its surroundings and decides its next action.

Here's a pseudocode representation of the logic:

```
while (robot is not at the exit):
  if (front sensor detects a wall):
    turn_left()
  else if (right sensor detects no wall):
    turn_right()
    move_forward()
  else: # front and right sensors detect walls, so go left
    move_forward()

# If we exit the loop, it means we've reached the exit
```

Let's refine this pseudocode to be more explicit about sensor states and actions:

```
# Assume the SIMBot starts facing a direction (e.g., North)

while (not_at_exit):
  # Check for wall directly in front
  if (front_sensor.is_wall()):
    # If there's a wall in front, we must turn to avoid it.
    # Prefer turning right if possible to maintain the wall-following.
    # However, if we are in a dead end, we might need to turn left.
    # For simplicity in this basic version, let's prioritize turning away from the wall.
    # A more robust algorithm would consider turning right first if available.

    # Simple approach: if blocked front, turn left.
    turn_left()

  else: # No wall in front, so we can potentially move forward
    # Now, check the right side. We want to keep a wall on our right.
    if (right_sensor.is_wall()):
      # If there's a wall to the right, and no wall in front,
      # we can safely move forward along the wall.
      move_forward()
    else:
      # No wall in front, and no wall to the right.
      # This means we are at a corner or an opening.
      # To maintain the right-hand rule, we should turn right into the opening
      # and then move forward.
      turn_right()
      move_forward()

# Robot has reached the exit
```

**Explanation of the Pseudocode:**

1.  **`while (not_at_exit):`**: The robot continues to move until it reaches the designated exit point.
2.  **`if (front_sensor.is_wall()):`**: The robot first checks if there's an immediate obstacle in its path.
    *   If `true`, it means it has hit a wall. The most basic maneuver to avoid this is to turn left. This prevents the robot from crashing into the wall.
3.  **`else:`**: If there's no wall directly in front, the robot has an opportunity to move forward.
    *   **`if (right_sensor.is_wall()):`**: It then checks its right side. If there's a wall on its right, it means it's successfully following a wall. In this case, it simply moves forward to continue along that wall.
    *   **`else:`**: If there's no wall in front AND no wall to the right, it implies an open space or a corner opening to the right. To adhere to the right-hand rule, the robot should turn right to face this new path and then move forward into it.

## Implementing in SIMBot's Environment

When you implement this in the SIMBot programming environment, you will use specific functions provided by the SIMBot SDK. These functions will likely map to the `move_forward()`, `turn_left()`, `turn_right()`, and sensor checking methods.

For example, in a Python-like environment for SIMBot, it might look something like this:

```python
# Assume 'simbot' is an object representing your SIMBot
# and it has methods like:
# simbot.move_forward()
# simbot.turn_left()
# simbot.turn_right()
# simbot.get_front_distance()  # Returns distance, 0 if wall is very close
# simbot.get_right_distance() # Returns distance, 0 if wall is very close

wall_threshold = 0.1 # Define what constitutes "close enough" to be a wall

while not simbot.is_at_exit(): # Assuming a function to check exit condition
    if simbot.get_front_distance() < wall_threshold:
        simbot.turn_left()
    else:
        if simbot.get_right_distance() < wall_threshold:
            simbot.move_forward()
        else:
            simbot.turn_right()
            simbot.move_forward()

print("SIMBot has reached the exit!")
```

## Key Considerations and Improvements

*   **Sensor Accuracy:** The effectiveness of this algorithm depends heavily on the accuracy and range of your sensors.
*   **Maze Complexity:** This basic wall-following approach works well for simple, connected mazes where there are no isolated walls or loops that could trap the robot.
*   **Dead Ends:** In the simplified pseudocode, hitting a dead end (a wall in front and on the right) will cause the robot to turn left. If the left is also blocked, it will repeatedly turn left, effectively spinning in place until it eventually turns 360 degrees and tries to move forward again. More advanced dead-end handling is possible.
*   **Initial Orientation:** Ensure your robot starts in a known orientation relative to the maze.
*   **Exit Condition:** Define a clear way for the SIMBot to know when it has reached the exit. This could be a specific location, a color sensor detecting an exit marker, or a proximity sensor detecting an open area.

By understanding and implementing this wall-following logic, you are actively applying programming skills to achieve autonomous navigation for your SIMBot in a maze environment.

## Supports

- [[simbot-maze-traversal-programming|SIMBot Maze Traversal Programming]]
