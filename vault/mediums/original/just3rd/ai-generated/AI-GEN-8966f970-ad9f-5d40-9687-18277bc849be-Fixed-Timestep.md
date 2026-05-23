---
type: "medium"
title: "Fixed Timestep: Stable Physics Updates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/game-development/game-physics/microskills/fixed-timestep|fixed-timestep]]"
learning-time-in-minutes: 4
---
# Fixed Timestep: Stable Physics Updates

In game development, especially when dealing with physics simulations, ensuring that things happen consistently and predictably is crucial. One of the fundamental concepts that helps achieve this is the **fixed timestep**.

## What is a Timestep?

Imagine your game running. At regular intervals, the game engine updates everything: character positions, object interactions, AI decisions, and, of course, physics. The "timestep" refers to the amount of time that passes between these updates.

*   **Variable Timestep:** In a variable timestep system, the duration of each update is flexible. It depends on how long the calculations for that frame take. If your game is running smoothly on a powerful computer, the timestep might be very short. If it's struggling on a weaker machine, the timestep could be longer.
*   **Fixed Timestep:** With a fixed timestep, the duration of each physics update is always the same, regardless of how long it takes to render the frame. The game engine aims to perform these physics updates at a consistent rate, for example, 60 times per second.

## Why is a Fixed Timestep Important for Physics?

Physics simulations involve a lot of calculations, like gravity, momentum, collisions, and forces. These calculations often build upon the results of the previous step.

Consider a simple example: an object falling due to gravity. To calculate its new position, you need its current position, its velocity, and the acceleration due to gravity. If the time between updates (the timestep) changes drastically, the accuracy of these calculations can be compromised.

**Problem with Variable Timestep for Physics:**

If a frame takes a very long time to process (a large variable timestep), an object might "jump" too far in a single physics update. Conversely, if frames are processed very quickly (a very small variable timestep), the simulation might not advance enough to detect subtle interactions accurately. This inconsistency can lead to:

*   **Jittery Movement:** Objects appearing to teleport or move erratically.
*   **Collision Detection Issues:** Objects passing through each other because the simulation didn't have enough "time" to register the collision.
*   **Unpredictable Behavior:** Physics acting differently on different hardware or under different game loads.

**The Solution: Fixed Timestep**

By using a fixed timestep, we ensure that physics calculations are performed over consistent, predictable intervals. This allows the physics engine to:

1.  **Maintain Accuracy:** Each step represents a fixed duration, so calculations like integration (calculating new positions and velocities from forces and accelerations) are performed reliably.
2.  **Improve Stability:** Predictable updates lead to smoother, more stable simulations.
3.  **Enable Determinism:** In some cases, a fixed timestep can help make physics deterministic, meaning the same sequence of events will always produce the same outcome, which is vital for multiplayer games or replays.

## How it Works in Practice

The challenge with a fixed timestep is that rendering a frame might take longer than the fixed physics update interval. Game engines handle this by decoupling physics updates from rendering updates.

Here's a common approach:

1.  **Fixed Physics Update:** The game engine runs its physics simulation for a fixed duration (e.g., 1/60th of a second). It might need to run this simulation multiple times within a single frame if the frame rendering takes longer than the physics update interval.
2.  **Variable Render Update:** The game engine renders the scene as quickly as it can.

This separation ensures that physics is always updated at its intended rate, even if the visual display is stuttering slightly due to performance issues.

**Pseudocode Example:**

```pseudocode
fixed_delta_time = 1.0 / 60.0  // For 60 physics updates per second
accumulator = 0.0

while game_is_running:
    current_time = get_current_time()
    delta_time = current_time - last_time
    last_time = current_time

    accumulator += delta_time

    // Accumulate time until we have enough to perform a full fixed physics step
    while accumulator >= fixed_delta_time:
        update_physics(fixed_delta_time)
        accumulator -= fixed_delta_time

    // Render the scene based on the current state (interpolation can be used here)
    render_game()
```

In this pseudocode:
*   `fixed_delta_time` is our consistent physics update duration.
*   `accumulator` stores any leftover time from previous frames that hasn't yet been used for a full physics update.
*   The inner `while` loop ensures that we perform all necessary physics updates for the elapsed time, even if it means multiple updates per render frame.

## Key Takeaways

*   A **fixed timestep** is a constant interval for physics calculations, ensuring stability and accuracy.
*   It's crucial for preventing issues like jittery movement and collision detection errors in physics simulations.
*   Game engines often decouple physics updates (fixed timestep) from rendering updates (variable timestep) to maintain smooth gameplay.
*   Understanding fixed timesteps is fundamental to building robust and predictable physics systems in games.

## Supports

- [[skills/digital-media/game-development/game-physics/microskills/fixed-timestep|Fixed Timestep]]
