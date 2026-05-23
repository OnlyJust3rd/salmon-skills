---
type: "medium"
title: "Collision Response: Making Objects React to Collisions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/game-development/game-physics/microskills/collision-response|collision-response]]"
learning-time-in-minutes: 5
---
# Collision Response: Making Objects React to Collisions

In game physics, once we know that two objects have collided (collision detection), we need to decide what happens next. This is **collision response**. It's the mechanism that dictates how objects react and behave immediately after their bounding boxes or shapes intersect.

Think of it like a real-world collision: when two billiard balls hit, they don't just pass through each other. They bounce off, changing direction and speed based on how they collided. Collision response in games aims to simulate this physical interaction.

## Core Concepts of Collision Response

The primary goal of collision response is to prevent objects from overlapping and to simulate realistic physical reactions. The most common approaches involve adjusting the velocities and positions of the colliding objects.

### 1. Preventing Overlap (Separation)

The most immediate concern after detecting a collision is to separate the objects so they don't appear to be stuck inside each other. This is often achieved by moving the objects apart along the vector that points from the center of one object to the center of the other, or along the normal of the collision surface.

### 2. Simulating Reactivity (Impulse and Response)

Beyond just separating objects, we want them to react realistically. This often involves calculating and applying an **impulse**. An impulse is a sudden force applied over a very short period, resulting in a change in momentum.

The amount of impulse applied depends on several factors:

*   **Mass:** More massive objects are harder to move.
*   **Relative Velocity:** The faster objects are moving towards each other, the stronger the reaction.
*   **Restitution (Bounciness):** This property determines how "bouncy" the collision is. A restitution of 1 means a perfectly elastic collision (no energy lost), while a restitution of 0 means a perfectly inelastic collision (objects stick together).

## Common Collision Response Techniques

Let's explore some practical ways collision response is implemented.

### 1. Positional Correction (Separation Axis Theorem for simple shapes)

For simple shapes like rectangles and circles, we can often determine the minimum overlap and the direction to push objects apart.

**Example:** Imagine two rectangles colliding.

*   **Detection:** We find they overlap.
*   **Response (Positional Correction):**
    1.  Calculate the overlap depth along each axis (X and Y for rectangles).
    2.  Determine the smallest overlap.
    3.  Push both objects apart by half of this smallest overlap along the corresponding axis, in opposite directions. This prevents them from being stuck.

### 2. Impulse-Based Response (More Realistic)

This technique uses physics principles to calculate how velocities should change. It's more computationally intensive but provides more realistic results, especially for dynamic objects.

**The Basic Idea (for two colliding objects, A and B):**

When two objects collide, their velocities change due to an instantaneous impulse. The impulse is directed along the **normal** of the collision (the line perpendicular to the surface where they touch).

The magnitude of the impulse depends on:

*   The relative velocity of the objects along the collision normal.
*   The masses of the objects.
*   The restitution ($e$) of the collision.

A simplified formula for the impulse ($J$) applied along the collision normal ($n$) can look something like this:

$$ J = -\frac{(1+e)(v_{rel} \cdot n)}{(1/m_A + 1/m_B)} $$

Where:

*   $e$ is the coefficient of restitution.
*   $v_{rel}$ is the relative velocity of object A with respect to object B ($v_A - v_B$).
*   $n$ is the normalized collision normal vector.
*   $m_A$ and $m_B$ are the masses of objects A and B.

After calculating $J$, you update the velocities:

*   $v'_A = v_A + (J/m_A)n$
*   $v'_B = v_B - (J/m_B)n$

**Applying the Impulse:**

1.  **Detect Collision:** Determine that objects A and B are colliding and find the collision normal ($n$).
2.  **Calculate Relative Velocity:** Find $v_{rel} = v_A - v_B$.
3.  **Check if Moving Towards Each Other:** If $v_{rel} \cdot n > 0$, they are already moving apart, so no impulse is needed.
4.  **Calculate Impulse ($J$):** Use the formula above.
5.  **Apply Impulse:** Update the velocities of both objects based on $J$ and their masses.
6.  **Resolve Overlap:** After updating velocities, you might still have slight overlap. You'll need to separate them slightly, typically by moving them apart along the collision normal based on their inverse masses (static objects don't move).

### 3. Stickiness (Inelastic Collisions)

If the restitution ($e$) is 0, the objects will effectively "stick" together after the collision. This is useful for things like pickups, traps, or when one object is meant to absorb another.

### 4. Bouncing (Elastic Collisions)

With a restitution close to 1, objects will bounce off each other with minimal loss of energy, maintaining their speed and changing direction. This is common for projectiles, characters, and most solid objects.

## Common Pitfalls in Collision Response

*   **Tunneling:** If objects are moving very fast, they might pass through each other between frames without a collision being detected. This requires careful tuning of physics update rates or swept collision detection.
*   **Jittering/Instability:** Incorrectly applied impulses or positional corrections can cause objects to vibrate or behave erratically. Ensure consistent calculation of normals and impulse application.
*   **Sticking Together:** If positional correction isn't strong enough or if impulse calculations aren't precise, objects might appear to get stuck.
*   **Infinite Loops:** Complex interactions where multiple objects collide in a single frame can sometimes lead to scenarios where objects are repeatedly pushed and detected as colliding. Careful ordering of operations and time-stepping can mitigate this.

## Conclusion

Collision response is the crucial step that brings game physics to life after a collision is detected. By understanding and applying concepts like positional correction, impulse calculation, and restitution, you can create believable and engaging interactions between game objects. Experimenting with different restitution values and observing how objects behave is key to mastering this aspect of game physics.

## Supports

- [[skills/digital-media/game-development/game-physics/microskills/collision-response|Collision Response]]
