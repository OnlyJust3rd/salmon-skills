---
type: "medium"
title: "Creating Simple Character Movement"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-design/microskills/simple-mechanic-creation|simple-mechanic-creation]]"
related-skills:
  - "[[skills/digital-media/game-development/game-design/game-design|game-design]]"
learning-time-in-minutes: 4
---
# Creating Simple Character Movement

This lesson focuses on creating basic movement mechanics for game characters. We'll explore how to translate player input into character actions like walking and jumping. This is a foundational step in implementing gameplay mechanics for any character role.

## Understanding Input and Output

At its core, character movement is about translating player input (like pressing a key or moving a joystick) into observable actions within the game world.

*   **Input:** This is what the player does. Common inputs for movement include:
    *   Arrow keys or WASD for directional movement.
    *   Spacebar or a button for jumping.
*   **Output:** This is how the character responds. For movement, this typically means changing the character's:
    *   **Position:** Moving the character left, right, up, or down.
    *   **Velocity:** The speed and direction of the character's movement.

## Core Concepts: Velocity and Position

In most game engines, movement is handled by manipulating a character's **velocity** and **position**.

*   **Velocity:** Think of this as the character's "desire to move." It's a vector (a direction and a magnitude/speed). When you press "left," you're essentially telling the character to have a negative velocity on its horizontal axis.
*   **Position:** This is where the character actually is in the game world. The game engine updates the character's position each frame based on its current velocity.

## Implementing Basic Horizontal Movement

Let's outline the steps to create simple left/right movement. We'll use pseudocode to illustrate the logic, which can be adapted to most game development environments (like Unity, Godot, or Unreal Engine).

### Steps

1.  **Detect Input:** Check if the player is pressing the left or right movement keys.
2.  **Set Horizontal Velocity:** Based on the input, set a horizontal velocity for the character.
    *   If "right" is pressed, set a positive horizontal velocity.
    *   If "left" is pressed, set a negative horizontal velocity.
    *   If neither is pressed, set the horizontal velocity to zero.
3.  **Apply Velocity to Position:** Update the character's position based on its horizontal velocity and the time elapsed since the last frame (delta time).

### Pseudocode Example

```pseudocode
// Variables
float moveSpeed = 5.0f; // How fast the character moves horizontally
Vector2 characterPosition;
Vector2 characterVelocity;
float deltaTime; // Time elapsed since last frame

// In the Update function (called every frame)
function Update() {
    // 1. Detect Input
    bool isMovingRight = Input.IsKeyPressed("RightArrow") || Input.IsKeyPressed("D");
    bool isMovingLeft = Input.IsKeyPressed("LeftArrow") || Input.IsKeyPressed("A");

    // 2. Set Horizontal Velocity
    if (isMovingRight) {
        characterVelocity.x = moveSpeed;
    } else if (isMovingLeft) {
        characterVelocity.x = -moveSpeed;
    } else {
        characterVelocity.x = 0.0f; // Stop horizontal movement
    }

    // 3. Apply Velocity to Position
    // Multiply by deltaTime to ensure consistent movement speed across different frame rates
    characterPosition.x += characterVelocity.x * deltaTime;

    // Update the character's actual position in the game engine
    SetCharacterWorldPosition(characterPosition);
}
```

**Explanation:**

*   `moveSpeed` controls how fast the character moves.
*   `characterVelocity.x` directly controls the horizontal speed.
*   `deltaTime` is crucial. It normalizes movement speed so that the character moves at the same pace regardless of how fast or slow the computer is running the game.

## Implementing Basic Jumping

Jumping involves applying an upward force to the character, usually fighting against gravity.

### Concepts

*   **Gravity:** A constant force pulling the character downwards.
*   **Vertical Velocity:** Similar to horizontal velocity, but for the up/down direction.
*   **Grounded Check:** You typically only want the character to jump if they are on the ground. This prevents infinite jumping.

### Steps

1.  **Detect Jump Input:** Check if the jump button is pressed.
2.  **Check if Grounded:** Determine if the character is currently touching the ground.
3.  **Apply Upward Velocity:** If the jump button is pressed *and* the character is grounded, apply a sudden upward velocity.
4.  **Apply Gravity:** In every frame, reduce the character's vertical velocity to simulate gravity's pull.
5.  **Apply Velocity to Position:** Update the character's vertical position based on its vertical velocity and `deltaTime`.

### Pseudocode Example (Extending previous example)

```pseudocode
// Variables (add these)
float jumpForce = 10.0f; // How high the character jumps
float gravity = -20.0f; // The strength of gravity (negative to pull down)
bool isGrounded = true; // Assume grounded initially

// In the Update function
function Update() {
    // ... (horizontal movement code from before) ...

    // 4. Apply Gravity
    characterVelocity.y += gravity * deltaTime;

    // 5. Apply Velocity to Position
    characterPosition.y += characterVelocity.y * deltaTime;

    // Update the character's actual position in the game engine
    SetCharacterWorldPosition(characterPosition);

    // 1. Detect Jump Input
    bool jumpButtonPressed = Input.IsKeyPressed("Spacebar");

    // 2. Check if Grounded (This is a simplified check)
    // In a real game, you'd use raycasts or collision detection.
    // For this example, let's assume if y position is at or below a ground level:
    float groundLevel = 0.0f;
    if (characterPosition.y <= groundLevel) {
        isGrounded = true;
        characterPosition.y = groundLevel; // Snap to ground to prevent sinking
        characterVelocity.y = 0.0f; // Stop vertical movement when on ground
    } else {
        isGrounded = false;
    }


    // 3. Apply Upward Velocity
    if (jumpButtonPressed && isGrounded) {
        characterVelocity.y = jumpForce;
        isGrounded = false; // No longer grounded immediately after jumping
    }
}
```

**Key Points for Jumping:**

*   The `isGrounded` check is critical. Without it, players could fly by repeatedly pressing the jump button.
*   Gravity is applied every frame, gradually decreasing the upward velocity until the character starts falling, and then increasing the downward velocity.
*   The character's `y` position is snapped to the `groundLevel` and `characterVelocity.y` is reset to zero when landing. This prevents the character from falling through the ground or getting stuck in a state of continuous falling acceleration.

## Iteration and Refinement

These are the most basic forms of movement. As you progress, you'll want to consider:

*   **Animation:** Triggering animations (walking, jumping) based on movement state.
*   **Air Control:** How much control the player has while in the air.
*   **Slope Handling:** How the character moves on inclines.
*   **Stamina/Energy:** Limiting actions like jumping or sprinting.

By understanding how input translates to velocity and how that velocity affects position, you can start building the core interactions that make your game characters feel alive.

## Supports

- [[skills/digital-media/game-development/game-design/microskills/simple-mechanic-creation|Simple Mechanic Creation]]
