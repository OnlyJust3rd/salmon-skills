---
type: "medium"
title: "Reconciliation: Bringing Your Game State Back in Sync"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-networking/microskills/reconciliation|reconciliation]]"
learning-time-in-minutes: 5
---
# Reconciliation: Bringing Your Game State Back in Sync

In game networking, especially in client-server architectures, maintaining a consistent game state across all players is crucial. We've discussed how the server acts as the authority. But what happens when the client's local understanding of the game state drifts from what the server dictates? This is where **Reconciliation** comes in. It's the process of correcting the client's local state to match the authoritative state provided by the server.

## Why Reconciliation is Necessary

Imagine a fast-paced shooter game. Your client predicts your character's movement based on your input. This prediction makes the game feel responsive, as you don't have to wait for the server's confirmation. However, network latency means the server's updates might arrive late or differ slightly from your prediction due to other players' actions or server-side logic.

Without reconciliation, these discrepancies would lead to:

*   **Visual inconsistencies:** Your character might appear to jump around or snap to different positions.
*   **Incorrect game logic:** You might appear to hit an enemy that the server says isn't there, or vice-versa.
*   **Player frustration:** A jerky, out-of-sync experience is a sure way to lose players.

Reconciliation is the mechanism that smooths over these differences, ensuring that what you see on your screen is a faithful representation of the authoritative game state.

## The Core Idea: State Correction

At its heart, reconciliation involves comparing the client's predicted state with the server's authoritative state and then adjusting the client's local state to match. This isn't just about blindly overwriting data; it's about intelligently merging and correcting.

Consider a player's position. Your client might predict you'll move from (10, 10) to (12, 12). The server, however, might process this movement and also incorporate an update from another player that slightly altered the environment, resulting in your authoritative position being (11.8, 11.9).

Reconciliation on the client would:

1.  Receive the authoritative state from the server: `position = (11.8, 11.9)`.
2.  Compare this with the client's current predicted state.
3.  **Reconcile** the client's state to `position = (11.8, 11.9)`.

This correction might be immediate (a "snap") or a smooth interpolation, depending on the game's design and the magnitude of the difference.

## Reconciliation in Action: A Step-by-Step Scenario

Let's walk through a simplified scenario involving a player's position.

**Assumptions:**

*   Client predicts movement locally.
*   Server is the authority.
*   Network latency exists.

**Scenario:**

1.  **Client Prediction (Time T1):**
    *   Player's current local state: `position = (10, 10)`.
    *   Player inputs "move forward."
    *   Client predicts new position: `position = (12, 12)`. The client immediately updates its visual representation to (12, 12).

2.  **Server Processing (Slightly Later):**
    *   Server receives the "move forward" input.
    *   Server processes other game events (e.g., another player moved, a physics interaction).
    *   Server determines the authoritative position for this player: `position = (11.8, 11.9)`.

3.  **Server Update (Time T2):**
    *   Server sends an update to the client containing the authoritative state, including the corrected position `(11.8, 11.9)`. This update is timestamped or associated with a specific game tick.

4.  **Client Reconciliation (Receiving Server Update):**
    *   The client receives the server's update. It checks if this update corresponds to a game state it has already simulated and predicted.
    *   The client compares the received authoritative position `(11.8, 11.9)` with its currently displayed predicted position `(12, 12)`.
    *   A discrepancy is detected.
    *   The client now needs to reconcile its local state.

### Reconciliation Strategies

How the client performs the reconciliation depends on the strategy:

*   **Direct Correction (Snap):** The simplest approach. The client immediately sets its position to the server's authoritative position.
    *   *Pros:* Guarantees consistency with the server.
    *   *Cons:* Can lead to jarring visual jumps if the difference is large.

    ```
    // Pseudocode for direct correction
    function onServerUpdate(serverState) {
        this.localPlayer.position = serverState.playerPosition;
        // Update visuals immediately
    }
    ```

*   **Interpolation/Smoothing:** The client smoothly moves its current predicted position towards the authoritative server position over a short period. This makes the correction less jarring.
    *   *Pros:* Visually smoother experience.
    *   *Cons:* Introduces a small visual lag, as the client temporarily shows a state that is slightly behind the authoritative one during the interpolation.

    ```
    // Pseudocode for interpolation-based reconciliation
    let targetPosition = null;
    let interpolationStartTime = 0;
    const INTERPOLATION_DURATION = 0.1; // seconds

    function onServerUpdate(serverState) {
        // Store the authoritative position to move towards
        targetPosition = serverState.playerPosition;
        interpolationStartTime = currentTime;
    }

    function update(deltaTime) {
        if (targetPosition !== null) {
            let timeSinceStart = currentTime - interpolationStartTime;
            let t = Math.min(1.0, timeSinceStart / INTERPOLATION_DURATION);

            // Interpolate current position towards target
            this.localPlayer.position = lerp(this.localPlayer.position, targetPosition, t);

            if (t >= 1.0) {
                targetPosition = null; // Interpolation complete
            }
        }
        // ... render based on this.localPlayer.position
    }
    ```
    Here, `lerp` is a linear interpolation function: `lerp(a, b, t) = a * (1 - t) + b * t`.

## Key Considerations for Reconciliation

*   **Timing:** Reconciliation must be tied to authoritative server updates. If the client reconciles based on predicted states, it can compound errors.
*   **Magnitude of Correction:** For small discrepancies, interpolation is usually sufficient. For larger ones, a direct correction might be unavoidable, or a more aggressive interpolation might be needed.
*   **Client-Side Prediction Impact:** Reconciliation is intimately linked with client-side prediction. The effectiveness of prediction can reduce the frequency and magnitude of necessary reconciliations.
*   **Other Players:** Reconciliation isn't just for your own player. You need to reconcile the states of other players based on server updates as well.

## Common Pitfalls

*   **Reconciling Too Often:** Reconciling every frame without waiting for authoritative updates can lead to a chaotic state.
*   **Ignoring Server Authority:** If the client consistently ignores server updates or tries to "correct" the server, the game will become desynchronized.
*   **Janky Movement:** Poorly implemented interpolation can make movement appear rubber-bandy or jittery.

Reconciliation is a fundamental technique for creating smooth and believable networked game experiences. By understanding how to correct local state based on authoritative server information, you build more robust and enjoyable games.

## Supports

- [[skills/digital-media/game-development/game-networking/microskills/reconciliation|Reconciliation]]
