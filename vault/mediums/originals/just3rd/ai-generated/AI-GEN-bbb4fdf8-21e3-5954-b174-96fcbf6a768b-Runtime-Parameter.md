---
type: "medium"
title: "Driving Animation with Runtime Parameters"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-animation/microskills/runtime-parameter|runtime-parameter]]"
learning-time-in-minutes: 4
---
# Driving Animation with Runtime Parameters

In game animation, an **Animation State Machine** helps manage complex character behaviors by defining how animations transition between each other. While states dictate *what* animation is playing, the transitions between those states are often controlled by specific conditions. This is where **Runtime Parameters** become essential.

Runtime parameters are variables that you can change during the game's execution. By linking these parameters to the conditions in your animation state machine, you can dynamically control character animations based on real-time gameplay events.

## The Core Idea: Gameplay State to Animation State

Imagine your character needs to switch from an "Idle" animation to a "Walk" animation. What tells the game that it's time to walk? It's not a fixed rule; it's a gameplay state. For example, the player might be pressing the forward movement key, or the character's velocity might exceed a certain threshold.

Runtime parameters act as the bridge between these gameplay states and the animation state machine. You define parameters within your animation system, and then you set their values based on gameplay. The animation state machine then uses these parameter values to decide which transition to take.

## Common Runtime Parameters and Their Use Cases

Here are some common types of runtime parameters used to drive animation:

### 1. Boolean Parameters

These parameters have only two states: `true` or `false`. They are excellent for representing binary conditions.

*   **Example:** `IsWalking`
    *   **Gameplay Trigger:** Player presses the forward movement key.
    *   **Animation State Machine Condition:** Transition from `Idle` to `Walk` when `IsWalking` is `true`. Transition from `Walk` to `Idle` when `IsWalking` is `false`.

*   **Example:** `IsJumping`
    *   **Gameplay Trigger:** Player presses the jump button.
    *   **Animation State Machine Condition:** Transition from `Grounded` state to `Jump` state when `IsJumping` is `true`. Transition from `Jump` state to `Falling` state when `IsJumping` becomes `false` (while airborne).

### 2. Float Parameters

These parameters can hold any floating-point number. They are very versatile and are often used for analog inputs or continuous values.

*   **Example:** `Speed`
    *   **Gameplay Trigger:** The character's current movement speed.
    *   **Animation State Machine Condition:**
        *   Transition from `Idle` to `Walk` when `Speed` is greater than a small threshold (e.g., 0.1).
        *   Transition from `Walk` to `Run` when `Speed` is greater than a larger threshold (e.g., 5.0).
        *   Transition from `Run` back to `Walk` when `Speed` drops below 5.0.
        *   Transition from `Walk` back to `Idle` when `Speed` drops below 0.1.

*   **Example:** `Direction` (often used with `Speed`)
    *   **Gameplay Trigger:** The direction the character is moving relative to their facing direction.
    *   **Animation State Machine Condition:** Used to blend between different locomotion animations (e.g., walking forward, backward, strafing left, strafing right) based on the `Speed` and `Direction` parameters. This allows for smooth transitions without needing separate animations for every single directional combination.

### 3. Integer Parameters

These parameters hold whole numbers. They are useful for discrete states or counts.

*   **Example:** `AttackType`
    *   **Gameplay Trigger:** Player chooses a specific attack combo.
    *   **Animation State Machine Condition:**
        *   If `AttackType` is 1, play the "Light Attack" animation.
        *   If `AttackType` is 2, play the "Heavy Attack" animation.
        *   If `AttackType` is 3, play the "Special Attack" animation.

*   **Example:** `Stance`
    *   **Gameplay Trigger:** Player switches between offensive, defensive, or neutral stances.
    *   **Animation State Machine Condition:**
        *   If `Stance` is 0, play "Neutral Stance" animations.
        *   If `Stance` is 1, play "Offensive Stance" animations.
        *   If `Stance` is 2, play "Defensive Stance" animations.

## How It Works: Setting the Parameters

In your game engine's scripting environment (like C# in Unity or C++ in Unreal Engine), you'll access the character's animator component. This component exposes the parameters defined in the animation state machine. You then update these parameters based on gameplay logic.

**Pseudocode Example (Unity-like):**

```csharp
// Assuming 'animator' is a reference to the character's Animator component

// Example: Updating the IsWalking parameter based on player input
if (Input.GetKey(KeyCode.W))
{
    animator.SetBool("IsWalking", true);
}
else
{
    animator.SetBool("IsWalking", false);
}

// Example: Updating the Speed parameter based on character's velocity
float currentSpeed = characterController.velocity.magnitude;
animator.SetFloat("Speed", currentSpeed);

// Example: Updating the AttackType parameter when an attack is initiated
if (Input.GetButtonDown("Fire1"))
{
    animator.SetInteger("AttackType", 1); // Light Attack
    // Potentially trigger a transition to an attacking state
}
```

When you call these `SetBool`, `SetFloat`, or `SetInteger` methods, the animation state machine reads the new parameter values and evaluates its transition conditions. If a condition is met, the animation transitions accordingly.

## Key Takeaways

*   Runtime parameters allow your animations to be responsive to gameplay in real-time.
*   They act as the crucial link between your game's logic and your animation state machine.
*   Boolean, float, and integer parameters cater to different types of gameplay conditions.
*   By effectively setting these parameters through scripting, you can create dynamic and engaging character behaviors.

## Supports

- [[skills/digital-media/game-development/game-animation/microskills/runtime-parameter|Runtime Parameter]]
