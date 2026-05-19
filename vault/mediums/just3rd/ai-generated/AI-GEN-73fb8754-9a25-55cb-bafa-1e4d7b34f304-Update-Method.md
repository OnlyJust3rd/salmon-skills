---
type: "medium"
title: "Implementing Per-Frame Behavior with the Update Method"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/game-engine-architecture/microskills/update-method|Update Method]]"
---
# Implementing Per-Frame Behavior with the Update Method

In game engine architecture, we often need objects within our game's "scene" to behave dynamically. This means they need to change over time, react to user input, or interact with other game elements. The **Update Method** is a fundamental pattern for achieving this per-frame behavior. It's a designated function or method within a game entity's component that gets called by the engine on every single frame of gameplay.

## The Core Idea: Continuous Action

Think of a game as a flipbook. Each page is a frame, and the animation happens as you rapidly flip through them. The `Update` method is like the instructions for what needs to change on *each* page to make the animation smooth and believable.

When the game engine is running, it constantly renders frames. After rendering a frame, it typically calls the `Update` method on relevant entities or their components. This provides a consistent place to put logic that needs to happen repeatedly, such as:

*   Moving an object.
*   Checking for collisions.
*   Playing animations.
*   Updating scores.
*   Processing player input.
*   Simulating physics.

## Structure and Application

The `Update` method is typically part of a **Component** attached to an **Entity** within the **Scene**.

*   **Scene:** The overall container for all game objects and their states.
*   **Entity:** A game object in the scene. It's essentially a container for components.
*   **Component:** A piece of data or functionality that can be attached to an entity. Examples include a `Transform` component (for position, rotation, scale), a `Renderer` component (to draw the object), or a `PhysicsBody` component.

The `Update` method is most commonly found on components that define behavior. For instance, a `PlayerController` component might have an `Update` method that checks for joystick input and moves the player entity accordingly. A `Health` component might have an `Update` method that checks if the entity's health has dropped to zero and triggers a death animation.

### Pseudocode Example

Let's imagine a simple `MovingPlatform` component.

```pseudocode
class MovingPlatformComponent:
  properties:
    speed: float
    direction: Vector2
    boundaryStart: Vector2
    boundaryEnd: Vector2
    currentPosition: Vector2

  method Update(deltaTime: float):
    // deltaTime is the time elapsed since the last frame
    
    // Calculate the new position based on direction and speed
    moveAmount = direction * speed * deltaTime
    currentPosition = currentPosition + moveAmount

    // Check if the platform has reached its boundary
    if (currentPosition is beyond boundaryEnd and direction is positive) or 
       (currentPosition is beyond boundaryStart and direction is negative):
      // Reverse direction
      direction = -direction
      // Snap position to boundary to prevent overshooting
      if direction is positive:
        currentPosition = boundaryEnd
      else:
        currentPosition = boundaryStart
        
    // Apply the updated position to the entity's transform
    entity.transform.position = currentPosition
```

In this pseudocode:

1.  The `MovingPlatformComponent` has properties like `speed`, `direction`, and the start/end points of its movement.
2.  The `Update` method receives `deltaTime`. This is crucial for making movement frame-rate independent. Multiplying by `deltaTime` ensures that the object moves the same distance regardless of how fast or slow the game is running.
3.  It calculates how much to move based on `direction`, `speed`, and `deltaTime`.
4.  It checks if the platform has hit its designated path limits.
5.  If a limit is hit, it reverses the `direction` and snaps the `currentPosition` to prevent it from "sticking" or going too far.
6.  Finally, it updates the `entity.transform.position` to reflect the new location. The `entity.transform.position` is likely a property of a `TransformComponent` that the `MovingPlatformComponent` can access.

## Key Considerations

*   **`deltaTime` is Your Friend:** Always use `deltaTime` when updating positions, rotations, or any value that represents movement over time. This ensures consistent game behavior across different hardware. Failing to do so will make your game speed up on faster machines and slow down on slower ones.
*   **Performance:** The `Update` method is called every frame. Keep the logic inside it as efficient as possible. Avoid complex calculations or operations that could cause frame drops. If a calculation only needs to happen once, do it in an initialization method, not in `Update`.
*   **State Management:** The `Update` method is where you manage the state of your components and entities. This includes updating variables, checking conditions, and triggering events.
*   **Input Handling:** Player input is often read within the `Update` method. For example, checking `Input.GetKeyPressed("Jump")` in Unity.
*   **Order of Execution:** In complex scenes, the order in which `Update` methods are called can matter. Game engines often have mechanisms to control this execution order, or you might need to design your components to be robust regardless of the order.
*   **FixedUpdate vs. Update:** Some engines (like Unity) offer a `FixedUpdate` method. This method is called at a fixed time interval, often used for physics calculations to ensure stability. `Update` is called every frame, making it suitable for most other logic like input, animations, and non-physics-based movement.

By understanding and effectively using the `Update` method, you can bring your game entities to life, creating dynamic and interactive experiences within your game engine.

## Supports

- [[skills/hardware-embedded/electronics-embedded/game-engine-architecture/microskills/update-method|Update Method]]
