---
type: "medium"
title: "State Transitions in NPC Behavior"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/game-development/game-ai/microskills/state-transition|State Transition]]"
---
# State Transitions in NPC Behavior

In game development, Non-Player Characters (NPCs) need to react realistically to their environment and player actions. A crucial part of this is their behavior. We often model NPC behavior using **states**. An NPC might be in an "Idle" state, a "Patrolling" state, or a "Chasing" state. The ability to move an NPC from one state to another based on certain conditions is called a **state transition**. This micro-skill focuses on understanding and applying these transitions.

## What is a State Transition?

Imagine an NPC guard. Initially, they are **Patrolling** their area. If they hear a noise, this is a condition that triggers a **transition** to a "Investigating" state. If they see the player, another condition might transition them to a "Chasing" state. If they lose sight of the player for a while, they might transition back to "Patrolling."

A state transition involves:

*   **Current State:** The behavior the NPC is currently exhibiting.
*   **Condition:** An event or a logical check that, when met, signals the need to change state.
*   **Next State:** The new behavior the NPC will adopt after the transition.

## Common NPC States and Transitions

Let's consider a few typical states and how transitions might work.

| Current State    | Condition                                     | Next State       | Description                                                                          |
| :--------------- | :-------------------------------------------- | :--------------- | :----------------------------------------------------------------------------------- |
| **Idle**         | Player enters vicinity                          | **Alert**        | NPC becomes aware of a potential threat.                                             |
| **Idle**         | Sees a destructible object nearby               | **Interact**     | NPC might investigate or mess with the object.                                       |
| **Patrolling**   | Hears a loud noise                               | **Investigating**| NPC moves towards the source of the sound to check.                                  |
| **Patrolling**   | Sees the player                               | **Chasing**      | NPC decides to pursue the player.                                                    |
| **Chasing**      | Player is out of sight for a set duration     | **Searching**    | NPC actively looks for the player in the last known area.                            |
| **Chasing**      | Player is caught                                | **Attacking**    | NPC engages the player in combat.                                                    |
| **Investigating**| Finds the source of the noise and it's safe     | **Patrolling**   | NPC returns to its routine after checking.                                           |
| **Investigating**| Sees the player during investigation            | **Chasing**      | The investigation immediately turns into a pursuit.                                  |
| **Searching**    | Finds the player                                | **Chasing**      | The search successfully locates the player, initiating a chase.                      |
| **Searching**    | Player remains hidden for a long duration       | **Patrolling**   | NPC gives up searching and resumes its patrol.                                       |

## Applying State Transitions: A Simple Example

Let's illustrate this with a simplified pseudocode example. We'll imagine an NPC with three states: `IDLE`, `PATROLLING`, and `CHASING`.

```pseudocode
enum NPCState { IDLE, PATROLLING, CHASING }

class NPC {
    currentState: NPCState
    target: GameObject // The player or a point of interest
    detectionRange: float
    chaseSpeed: float
    idleSpeed: float

    // Constructor and other methods...

    function update() {
        switch (currentState) {
            case IDLE:
                // NPC does nothing, perhaps waits for an event
                if (canSeePlayer()) {
                    transitionTo(CHASING);
                }
                break;

            case PATROLLING:
                // NPC moves along a predefined path
                moveAlongPath();
                if (canSeePlayer()) {
                    transitionTo(CHASING);
                }
                break;

            case CHASING:
                // NPC moves towards the player's current position
                moveTo(target.position);
                if (playerOutOfSight()) {
                    // Example: If player hides for 5 seconds, go back to patrolling
                    if (timeSinceLastSeenPlayer > 5.0) {
                        transitionTo(PATROLLING);
                    }
                }
                break;
        }
    }

    function transitionTo(newState: NPCState) {
        // Logic to execute when leaving the current state (e.g., stop animation)
        onStateExit(currentState);

        currentState = newState;
        Debug.Log("NPC transitioned to: " + currentState);

        // Logic to execute when entering the new state (e.g., start animation)
        onStateEnter(currentState);
    }

    function canSeePlayer(): boolean {
        // Check distance and line of sight to the player
        distanceToPlayer = distance(position, target.position);
        if (distanceToPlayer < detectionRange && hasLineOfSight(target.position)) {
            return true;
        }
        return false;
    }

    function playerOutOfSight(): boolean {
        // Logic to determine if the player has been hidden from view for a period
        // This would involve timers and tracking when the player was last visible.
        return false; // Placeholder
    }

    function onStateEnter(state: NPCState) {
        // Code executed upon entering a state
        switch(state) {
            case CHASING:
                // Start chasing animation, set speed
                setSpeed(chaseSpeed);
                break;
            case PATROLLING:
                // Start patrolling animation, set speed
                setSpeed(idleSpeed);
                break;
            // ... other states
        }
    }

     function onStateExit(state: NPCState) {
        // Code executed upon exiting a state
        // Example: Stop movement if transitioning away from a movement state.
    }
}
```

### Key Components in the Example:

*   **`enum NPCState`**: Defines the possible states.
*   **`currentState`**: A variable holding the NPC's current state.
*   **`update()` function**: This is the core loop where the NPC checks its current state and evaluates conditions for transitions.
*   **`transitionTo(newState)` function**: Manages the actual change between states. It's good practice to have entry and exit logic for each state.
*   **Condition functions (`canSeePlayer`, `playerOutOfSight`)**: These are the checks that determine if a transition should occur.

## Common Pitfalls

*   **Infinite Loops:** Designing transitions that lead back to the same state without a proper exit condition can cause an NPC to get stuck. For example, if seeing the player always leads to "Chasing" and "Chasing" always leads back to "Chasing" under certain conditions.
*   **Overlapping Conditions:** If multiple conditions can be met simultaneously, ensure your logic prioritizes transitions correctly to avoid unexpected behavior.
*   **No Exit Conditions:** Forgetting to define how an NPC exits a state (e.g., how to stop chasing) will lead to stuck behavior.
*   **Ignoring Entry/Exit Logic:** Forgetting to include actions when entering or exiting a state (like playing animations or sounds) makes the transitions feel abrupt and unnatural.

## Conclusion

State transitions are fundamental to creating dynamic and believable NPC behavior. By defining distinct states and the conditions that trigger movement between them, you can control how your NPCs react to the game world, leading to more engaging gameplay. Practice implementing these transitions in simple scenarios to build a strong foundation for more complex AI behaviors.

## Supports

- [[skills/creative-media/game-development/game-ai/microskills/state-transition|State Transition]]
