---
type: "medium"
title: "Interpolation: Smoothing Game Network Updates"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/networking/game-networking/microskills/interpolation|interpolation]]"
---
# Interpolation: Smoothing Game Network Updates

In game networking, we often deal with situations where a client needs to display the state of an object that is also being updated by a server. Because network communication isn't instantaneous or perfectly consistent, these updates arrive at the client at discrete intervals. If we simply jump an object's position from one received state to the next, the movement will appear jerky and unnatural. This is where **interpolation** comes in.

Interpolation is a technique used to smooth out the perceived movement of networked objects by estimating their position (or other properties) *between* received updates. It's a crucial part of client-server synchronization, helping to create a fluid and enjoyable player experience even with inherent network latency.

## The Problem: Stuttering Movement

Imagine a player character moving across the screen. The server sends position updates every 100 milliseconds.

*   **Time 0ms:** Server sends position (10, 10). Client updates character to (10, 10).
*   **Time 100ms:** Server sends position (20, 20). Client updates character to (20, 20).
*   **Time 200ms:** Server sends position (30, 30). Client updates character to (30, 30).

Without interpolation, the character would instantly teleport from (10, 10) to (20, 20) at 100ms, and then again to (30, 30) at 200ms. This looks like:

(10,10) ---teleport---> (20,20) ---teleport---> (30,30)

This is clearly not how smooth movement should look in a game.

## The Solution: Interpolation

Interpolation aims to fill in the gaps between these discrete updates. The core idea is to maintain a history of recent states and use them to calculate intermediate positions.

### Key Concepts

1.  **State Buffer:** The client stores a small buffer of the most recent *server-authoritative* states it has received. Each state typically includes the object's position, rotation, and a timestamp or sequence number indicating when it was valid on the server.

2.  **Interpolation Time:** The client renders the game world at its own frame rate (e.g., 60 frames per second). For each frame, the client needs to decide where an object *should* be. Instead of rendering at the *latest* received state (which would still cause stuttering if frames don't perfectly align with server updates), it renders at a slightly *delayed* state. This delay is called the **interpolation delay** or **buffer time**.

    A common interpolation delay is around 100-200 milliseconds. This means that when the client renders a frame, it's showing the game state as it was 100-200ms ago. This buffer time gives the client enough room to receive new updates and smoothly animate between them.

3.  **Linear Interpolation (Lerp):** The simplest form of interpolation. If we have two known states, State A at Time A and State B at Time B, we can calculate the position at any time T between A and B using a linear formula.

    Let:
    *   `P_A` = Position of State A
    *   `P_B` = Position of State B
    *   `T_A` = Timestamp of State A
    *   `T_B` = Timestamp of State B
    *   `T` = The current time we want to calculate the position for (a time between `T_A` and `T_B`)

    The interpolation factor, often denoted as `alpha` (`\(\alpha\)`), is calculated as:
    $$
    \alpha = \frac{T - T_A}{T_B - T_A}
    $$
    This `\(\alpha\)` value will be between 0 and 1.

    The interpolated position `P_T` is then:
    $$
    P_T = P_A + (P_B - P_A) \times \alpha
    $$
    Or, more commonly written as:
    $$
    P_T = (1 - \alpha)P_A + \alpha P_B
    $$

### How it Works in Practice

Let's revisit our example with interpolation:

*   **Server Update 1:** Arrives at client at Time 50ms. Contains State A: Position (10, 10), Timestamp 0ms (server time).
*   **Server Update 2:** Arrives at client at Time 150ms. Contains State B: Position (20, 20), Timestamp 100ms (server time).
*   **Server Update 3:** Arrives at client at Time 250ms. Contains State C: Position (30, 30), Timestamp 200ms (server time).

Assume the client has an **interpolation delay of 100ms**. This means the client aims to render the world as it was 100ms in the past *from the time the current frame is being processed*.

*   **Client Frame at Time 100ms:**
    *   The client wants to render the state from server time 0ms.
    *   It has State A (position (10, 10), server time 0ms).
    *   It has State B (position (20, 20), server time 100ms).
    *   The client has received State B and knows it's for server time 100ms. It has State A for server time 0ms.
    *   The client will render the object *at* State B's position (20, 20), because the interpolation buffer has caught up to the most recent authoritative state.

*   **Client Frame at Time 110ms:**
    *   The client wants to render the state from server time 10ms.
    *   It has State A (position (10, 10), server time 0ms).
    *   It has State B (position (20, 20), server time 100ms).
    *   The server time we want to render is 10ms.
    *   `T_A = 0ms`, `P_A = (10, 10)`
    *   `T_B = 100ms`, `P_B = (20, 20)`
    *   `T = 10ms` (relative to server timestamps)
    *   `\(\alpha = (10 - 0) / (100 - 0) = 0.1\)`
    *   `P_T = (1 - 0.1) * (10, 10) + 0.1 * (20, 20)`
    *   `P_T = 0.9 * (10, 10) + 0.1 * (20, 20)`
    *   `P_T = (9, 9) + (2, 2)`
    *   `P_T = (11, 11)`
    *   The object is rendered at (11, 11).

*   **Client Frame at Time 200ms:**
    *   The client wants to render the state from server time 100ms.
    *   It has State B (position (20, 20), server time 100ms).
    *   It has State C (position (30, 30), server time 200ms).
    *   The client will render the object *at* State B's position (20, 20).

*   **Client Frame at Time 210ms:**
    *   The client wants to render the state from server time 110ms.
    *   `T_B = 100ms`, `P_B = (20, 20)`
    *   `T_C = 200ms`, `P_C = (30, 30)`
    *   `T = 110ms`
    *   `\(\alpha = (110 - 100) / (200 - 100) = 0.1\)`
    *   `P_T = (1 - 0.1) * (20, 20) + 0.1 * (30, 30)`
    *   `P_T = 0.9 * (20, 20) + 0.1 * (30, 30)`
    *   `P_T = (18, 18) + (3, 3)`
    *   `P_T = (21, 21)`
    *   The object is rendered at (21, 21).

This continuous calculation between received states creates smooth, gradual movement.

## Pseudocode Example

```pseudocode
// On the client
struct NetworkState {
    Vector3 position;
    Quaternion rotation;
    float timestamp; // Server time when this state was valid
}

// Stores the last two authoritative states received from the server
NetworkState stateA;
NetworkState stateB;

// The current time on the server we are aiming to render
float renderingServerTime;

// Fixed interpolation delay (e.g., 100ms)
float interpolationDelay = 0.1;

// Called every frame by the game engine
function Update(deltaTime):
    // Calculate the server time we want to render for this frame
    // This is the current client time minus the interpolation delay
    // (Need to track client time relative to server time or have a reliable clock)
    // For simplicity, let's assume we know the current server time `currentTimeOnServer`
    renderingServerTime = currentTimeOnServer - interpolationDelay;

    // Ensure we have at least two states to interpolate between
    if (stateA.timestamp is valid && stateB.timestamp is valid) {
        // If the rendering time falls between stateA and stateB
        if (renderingServerTime >= stateA.timestamp && renderingServerTime <= stateB.timestamp) {
            float timeDiff = stateB.timestamp - stateA.timestamp;
            if (timeDiff > 0) { // Avoid division by zero
                float alpha = (renderingServerTime - stateA.timestamp) / timeDiff;

                // Clamp alpha to be between 0 and 1 in case of minor inaccuracies
                alpha = clamp(alpha, 0.0, 1.0);

                // Interpolate position
                currentObject.position = Lerp(stateA.position, stateB.position, alpha);
                // Interpolate rotation (using Slerp for Quaternions is better)
                currentObject.rotation = Slerp(stateA.rotation, stateB.rotation, alpha);
            } else {
                // If timestamps are identical, just use stateB's position
                currentObject.position = stateB.position;
                currentObject.rotation = stateB.rotation;
            }
        } else if (renderingServerTime > stateB.timestamp) {
            // If rendering time is ahead of the latest state, snap to the latest state
            // This can happen if network updates are very sparse or delayed
            currentObject.position = stateB.position;
            currentObject.rotation = stateB.rotation;
        } else {
             // If rendering time is behind stateA (should ideally not happen with proper buffering)
             currentObject.position = stateA.position;
             currentObject.rotation = stateA.rotation;
        }
    } else if (stateB.timestamp is valid) {
        // If only one state is available, snap to it
        currentObject.position = stateB.position;
        currentObject.rotation = stateB.rotation;
    }

// When a new state arrives from the server
function OnNewStateReceived(newState: NetworkState):
    // Shift states: the old stateB becomes the new stateA
    stateA = stateB;
    // The new state becomes the new stateB
    stateB = newState;

    // Note: In a real implementation, you'd have a queue or buffer of states,
    // and you'd remove outdated states and insert new ones, ensuring they are
    // ordered by timestamp. This simplified example uses just two states.

// Helper function for linear interpolation
function Lerp(from: Vector3, to: Vector3, t: float): Vector3 {
    return from + (to - from) * t;
}

// Helper function for spherical linear interpolation (for rotations)
function Slerp(from: Quaternion, to: Quaternion, t: float): Quaternion {
    // Implementation of Slerp algorithm
    // ...
}

// Helper function to clamp a value
function clamp(value, min, max):
    return max(min, min(value, max));
```

## When to Use Interpolation

Interpolation is almost always used for visual representation of dynamic objects on the client side, such as:

*   Player characters
*   AI-controlled enemies
*   Projectiles
*   Moving environmental objects (e.g., platforms)

It helps mask network jitter and packet loss, providing a smoother visual experience.

## Potential Issues

*   **Input Lag:** The primary drawback is that interpolation introduces a visual delay. The player's actions are sent to the server, processed, and then the updated state is sent back. Because of the interpolation buffer, the player will see their character respond to their input with a delay equal to the interpolation delay plus the network round-trip time. This can make fast-paced games feel sluggish.
*   **Snapping:** If network updates are lost or arrive extremely out of order, the interpolation might fail to keep up. The object might then snap to the latest received state, which is still visually jarring.
*   **Cost:** While not computationally intensive for simple linear interpolation, it does add a small overhead to the client's rendering loop.

## Next Steps

While linear interpolation is simple, more advanced techniques like **extrapolation** (predicting future states based on current trends) or **arrival rate compensation** can be combined with interpolation to further improve the perceived smoothness and responsiveness of networked games. However, understanding basic interpolation is the fundamental first step to tackling these challenges.

## Supports

- [[skills/systems/networking/game-networking/microskills/interpolation|Interpolation]]
