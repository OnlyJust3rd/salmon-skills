---
type: "medium"
title: "Understanding and Controlling Velocity in Game Physics"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/game-development/game-physics/microskills/velocity-control|Velocity Control]]"
---
# Understanding and Controlling Velocity in Game Physics

In game physics, understanding how objects move is fundamental. We're focusing on **Velocity Control**, which means reasoning about an object's speed and direction. This is a key part of applying rigid body movement and forces to make your game feel responsive and predictable.

## What is Velocity?

Velocity is more than just speed; it's a vector quantity. This means it has both:

*   **Magnitude (Speed):** How fast an object is moving.
*   **Direction:** Which way the object is moving.

In a 2D game, velocity is often represented by two components: a horizontal velocity (x-axis) and a vertical velocity (y-axis). In 3D, it would have three components (x, y, and z).

## Why is Velocity Control Important?

Precise control over velocity is essential for:

*   **Player Movement:** Making characters feel like they accelerate, decelerate, and turn realistically.
*   **Projectile Behavior:** Ensuring bullets, arrows, or thrown objects travel along predictable paths.
*   **Environmental Interactions:** How objects bounce off each other or slide along surfaces.
*   **Game Feel:** A well-tuned velocity system contributes significantly to how satisfying and engaging your game feels to play.

## How Velocity Changes

In a physics simulation, an object's velocity changes due to forces acting upon it. However, in many game contexts, especially for direct player control or scripted events, we often *directly manipulate* an object's velocity to achieve desired movement.

### Direct Velocity Manipulation

This is where you, as the developer, set or modify the velocity of a game object.

**Scenario 1: Simple Forward Movement**

Imagine a spaceship that moves forward at a constant speed. You would set its velocity vector in the direction it's facing.

*   **Concept:** If your spaceship is rotated 30 degrees upwards and to the right, its forward direction vector will reflect that. You'd then multiply a desired speed by this direction vector to get the final velocity.
*   **Example (Pseudocode):**

```
// Assume ship.transform.forward is a vector pointing in the ship's forward direction
// Assume desiredSpeed is a float representing how fast we want it to go
float desiredSpeed = 5.0f;
Vector3 forwardDirection = ship.transform.forward;
ship.rigidbody.velocity = forwardDirection * desiredSpeed;
```

**Scenario 2: Applying Friction or Drag**

To make an object slow down when no engine force is applied, you can simulate friction or drag by reducing its velocity over time.

*   **Concept:** Gradually decrease the object's current velocity towards zero.
*   **Example (Pseudocode):**

```
// Assume dragCoefficient is a small value like 0.98f
float dragCoefficient = 0.98f;
rigidbody.velocity = rigidbody.velocity * dragCoefficient;

// Or, more accurately, if velocity is very small, just set it to zero to avoid drift
if (rigidbody.velocity.magnitude < 0.01f) {
    rigidbody.velocity = Vector3.zero;
}
```

**Scenario 3: Changing Direction**

When a player turns a character or a projectile hits a wall and bounces, its velocity needs to change direction.

*   **Concept:** For simple turns, you might directly set the velocity in the new direction. For bounces, you'd typically calculate a reflection vector based on the surface normal.
*   **Example (Pseudocode for a simple turn):**

```
// Assume turning towards a new direction vector
Vector3 newDirection = CalculateTurnDirection();
float currentSpeed = rigidbody.velocity.magnitude;
rigidbody.velocity = newDirection.normalized * currentSpeed; // Maintain speed while turning
```

### Common Pitfalls

*   **Setting Velocity Directly vs. Applying Forces:** While directly setting `rigidbody.velocity` is common for player control, remember that applying forces (like `AddForce`) is generally more physically accurate for simulating continuous actions like engine thrust or explosions. Mixing these without understanding can lead to unpredictable behavior.
*   **Zeroing Velocity Incorrectly:** If you simply set `rigidbody.velocity = Vector3.zero` at the end of every frame, nothing will move. You need to apply incremental changes or set it only when you intend for an object to stop.
*   **Ignoring Frame Rate:** If you're directly manipulating velocity based on time, ensure you're using the appropriate time delta (`Time.deltaTime` in Unity, for example) to make movement consistent across different frame rates.

## Practical Application: Player Character Movement

Let's consider a simple 2D platformer character.

1.  **Ground Movement:**
    *   When the player presses "left" or "right," you'll want to set the horizontal component of the character's velocity. You might also want to incorporate acceleration and deceleration for a smoother feel, rather than instantly reaching full speed.
2.  **Jumping:**
    *   When the player presses "jump," you apply a sudden, upward vertical velocity. The height of the jump will be determined by this initial upward velocity.
3.  **Gravity:**
    *   Gravity constantly pulls the character down. This is usually implemented by adding a downward force or directly modifying the vertical velocity each frame to simulate acceleration due to gravity.
4.  **Air Control:**
    *   While in the air, you might still allow some limited horizontal velocity control, but it will feel different than on the ground due to the lack of friction.

By understanding how to set, modify, and interpret these velocity components, you can build characters and objects that behave in ways that are both intuitive and fun for players. This is the core of **Velocity Control** in game physics.

## Supports

- [[skills/creative-media/game-development/game-physics/microskills/velocity-control|Velocity Control]]
