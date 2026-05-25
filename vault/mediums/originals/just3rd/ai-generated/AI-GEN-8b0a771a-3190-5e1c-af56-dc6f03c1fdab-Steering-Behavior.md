---
type: "medium"
title: "Steering Behavior: Guiding AI Movement"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-ai/microskills/steering-behavior|steering-behavior]]"
related-skills:
  - "[[skills/digital-media/game-development/game-ai/game-ai|game-ai]]"
learning-time-in-minutes: 4
---
# Steering Behavior: Guiding AI Movement

In game AI, making characters move convincingly is crucial. Steering behaviors are fundamental building blocks that allow AI agents to react dynamically to their environment and goals, creating natural and engaging movement. This lesson will help you understand the core concepts behind steering behaviors, focusing on how AI agents move toward or away from targets.

## What are Steering Behaviors?

Steering behaviors are algorithms that determine how an AI agent will move. Instead of simply setting a destination and letting the agent instantly teleport or follow a pre-defined path, steering behaviors calculate a *desired velocity* based on various factors. This desired velocity is then used to steer the agent's actual movement.

Think of it like driving a car:
*   **You have a destination (target).**
*   **You have your current speed and direction.**
*   **You constantly adjust your steering wheel and accelerator/brake to get closer to your destination, while also avoiding obstacles and obeying traffic laws.**

Steering behaviors provide this dynamic control for AI agents. They are often combined to create complex and realistic movements.

## Core Concepts: Seek and Flee

The most basic steering behaviors are **Seek** and **Flee**.

### Seek

The **Seek** behavior makes an AI agent move towards a target.

**How it works:**
1.  **Calculate the vector from the agent's current position to the target's position.** This vector points directly towards the target.
2.  **Normalize this vector.** Normalizing means scaling the vector so its length is 1, giving you a direction.
3.  **Multiply the normalized vector by the agent's maximum speed.** This gives you the *desired velocity* – a velocity that points directly at the target with the agent's maximum speed.
4.  **Apply steering forces.** The agent then uses this desired velocity to adjust its current velocity. This is often done by calculating a "steering force" which is the difference between the desired velocity and the current velocity, capped by a maximum steering force. This force is then applied to the agent's acceleration.

**Example:** Imagine a character in a game that needs to walk to a specific pick-up item. The Seek behavior will continuously calculate the direction to the item and move the character in that direction.

### Flee

The **Flee** behavior does the opposite of Seek: it makes an AI agent move *away* from a target.

**How it works:**
1.  **Calculate the vector from the agent's current position to the target's position.**
2.  **Reverse this vector.** This now points away from the target.
3.  **Normalize the reversed vector.**
4.  **Multiply by the agent's maximum speed.** This gives the *desired velocity* pointing away from the target.
5.  **Apply steering forces** as with Seek.

**Example:** If an enemy character spots the player, it might use Flee to run away if it's weak or programmed to evade.

## Applying Steering Behaviors

Steering behaviors are rarely used in isolation. They are typically combined to create more sophisticated AI.

### Combining Seek and Flee

Consider an AI agent that should approach a specific point but stop before getting too close, or retreat if the player gets too near.

*   If the agent is far from the point, it uses **Seek**.
*   As it gets closer, it might switch to a different behavior or reduce its speed.
*   If the player gets too close, it might use **Flee** to move away from the player.

### Key Components

For any steering behavior, you'll generally need:

*   **Agent's Current Position:** Where the AI is right now.
*   **Agent's Current Velocity:** The agent's speed and direction of movement.
*   **Agent's Maximum Speed:** The fastest the agent can move.
*   **Agent's Maximum Steering Force:** How quickly the agent can change its direction/velocity.
*   **Target Position:** The point the agent is trying to reach or avoid.

### Pseudocode Example (Seek)

This pseudocode illustrates the core logic for a Seek behavior:

```pseudocode
function seek(agent, target):
  // 1. Calculate vector from agent to target
  desired_vector = target.position - agent.position

  // 2. Normalize the vector to get direction
  direction = normalize(desired_vector)

  // 3. Scale by max speed to get desired velocity
  desired_velocity = direction * agent.max_speed

  // 4. Calculate steering force
  steering_force = desired_velocity - agent.velocity

  // 5. Clamp steering force to max steering force
  steering_force = clamp(steering_force, agent.max_steering_force)

  // 6. Apply steering force to acceleration
  agent.acceleration = steering_force

  // Update velocity and position (usually done in a game loop)
  // agent.velocity = agent.velocity + agent.acceleration * delta_time
  // agent.position = agent.position + agent.velocity * delta_time

  return steering_force
```

## Common Pitfalls and Considerations

*   **Jerkiness:** Without careful implementation, agents can appear to "snap" to the desired velocity. Smooth acceleration and deceleration are important.
*   **Over-shooting:** If an agent is moving too fast when it reaches the target, it might overshoot. Behaviors like "Arrive" (a variation of Seek that slows down as it approaches) address this.
*   **Tuning Parameters:** `max_speed` and `max_steering_force` significantly impact how responsive and natural the movement looks. These often require tuning.
*   **Frame Rate Dependency:** Ensure your calculations use `delta_time` (the time elapsed since the last frame) to make movement consistent across different frame rates.

By understanding Seek and Flee, you've grasped the foundational concepts of steering behaviors. These simple yet powerful ideas form the basis for many more advanced AI movement techniques.

## Supports

- [[skills/digital-media/game-development/game-ai/microskills/steering-behavior|Steering Behavior]]
