---
type: "medium"
title: "Applying Forces to Change Motion"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-physics/microskills/force-application|force-application]]"
related-skills:
  - "[[skills/digital-media/game-development/game-physics/game-physics|game-physics]]"
learning-time-in-minutes: 4
---
# Applying Forces to Change Motion

In game development, understanding how forces affect objects is fundamental to creating realistic and engaging physics. This lesson focuses on the **Force Application** micro-skill, a key part of applying rigid body movement and forces concepts. We'll explore how to change an object's motion by applying forces to it.

## Core Idea: Newton's Second Law

The relationship between force, mass, and acceleration is described by **Newton's Second Law of Motion**. In simple terms, this law states:

*   An object's acceleration is directly proportional to the net force acting on it and inversely proportional to its mass.

This can be expressed with the iconic formula:

$$
\vec{F} = m\vec{a}
$$

Where:
*   $\vec{F}$ is the net force acting on the object (a vector).
*   $m$ is the mass of the object (a scalar).
*   $\vec{a}$ is the acceleration of the object (a vector).

In game physics engines, this law is the backbone of how movement is simulated. When you apply a force, the engine uses this equation to calculate the resulting acceleration. Over time, this acceleration changes the object's velocity, which in turn changes its position.

## How Forces Affect Motion

Applying a force changes an object's state of motion in the following ways:

1.  **Starting Motion:** If an object is at rest, applying a force will cause it to accelerate and begin moving.
2.  **Changing Velocity:** If an object is already moving, applying a force can:
    *   **Increase speed:** If the force is in the same direction as the velocity.
    *   **Decrease speed (decelerate):** If the force is in the opposite direction of the velocity.
    *   **Change direction:** If the force is at an angle to the velocity.
3.  **Overcoming Resistance:** Forces like friction or drag resist motion. Applying a force is necessary to overcome these resistances and cause movement.

## Practical Application in Games

In a game engine (like Unity, Unreal Engine, Godot), rigid bodies are game objects that are governed by physics. When you want to move a character, push a box, or launch a projectile, you'll be applying forces.

### Applying Force in a Game Engine (Pseudocode Example)

Most game engines provide functions to apply forces to rigid bodies. Here's a conceptual look at how it might work using pseudocode.

```pseudocode
// Assume 'rigidbody' is a reference to the object's rigid body component
// Assume 'forceVector' is a Vector3 representing the direction and magnitude of the force

// Example 1: Applying an instantaneous "push"
rigidbody.AddForce(forceVector, ForceMode.Impulse);

// Example 2: Applying a continuous force over time (like an engine thrust)
rigidbody.AddForce(forceVector, ForceMode.Force);
```

**Explanation of `ForceMode` (common concepts):**

*   **`ForceMode.Force`:** Applies a continuous force to the rigidbody, using its mass. This simulates a steady push or pull over the frame. The resulting acceleration is $\vec{F}/m$.
*   **`ForceMode.Impulse`:** Applies an instant force impulse to the rigidbody, using its mass. This is like a sudden hit or kick, resulting in an instant change in velocity. The change in velocity is $\Delta \vec{v} = \vec{F}/m$.
*   **`ForceMode.Acceleration`:** Applies a continuous acceleration to the rigidbody, ignoring its mass. This directly modifies velocity as $\vec{a} \cdot \Delta t$.
*   **`ForceMode.VelocityChange`:** Applies an instant velocity change to the rigidbody, ignoring its mass. This directly modifies velocity as $\Delta \vec{v}$.

For our skill outcome of "Apply Rigid Body Movement and Forces Concepts" by changing object motion, `ForceMode.Force` and `ForceMode.Impulse` are the most direct ways to *apply forces*.

### Common Mistakes to Avoid

*   **Confusing `ForceMode.Force` and `ForceMode.Impulse`:** For a sudden "kick," use `Impulse`. For sustained pushing (like a rocket), use `Force`. Applying an impulse when you mean force can lead to objects moving much faster than intended.
*   **Ignoring Mass:** Forgetting that heavier objects require more force to achieve the same acceleration. If you only consider force magnitude without mass, heavier objects will feel unnaturally light.
*   **Applying Force in the Wrong Direction:** Aiming for a specific movement but applying force in a way that opposes or misaligns with the desired outcome. Always consider the object's current velocity and the desired change.
*   **Not Considering Net Force:** If multiple forces are acting on an object (e.g., gravity, player input, wind), you need to consider their *sum* (the net force) to determine the actual acceleration.

## Key Takeaways

*   Forces are the primary mechanism for changing an object's motion in physics simulations.
*   Newton's Second Law ($\vec{F} = m\vec{a}$) governs this relationship.
*   Game engines provide functions to apply forces, often with different modes (`Force`, `Impulse`) to simulate various physical interactions.
*   Understanding the object's mass and the direction of the force is crucial for achieving desired movement.

## Supports

- [[skills/digital-media/game-development/game-physics/microskills/force-application|Force Application]]
