---
type: "medium"
title: "Finite State Machines: Controlling Game AI Behavior"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-ai/microskills/finite-state-machine|finite-state-machine]]"
related-skills:
  - "[[skills/digital-media/game-development/game-ai/game-ai|game-ai]]"
learning-time-in-minutes: 5
---
# Finite State Machines: Controlling Game AI Behavior

In the world of game development, creating intelligent non-player characters (NPCs) is crucial for an engaging experience. One fundamental tool for achieving this is the **Finite State Machine (FSM)**. Understanding FSMs will help you grasp how game AI makes decisions and transitions between different actions.

## What is a Finite State Machine?

At its core, a Finite State Machine is a model of computation that can be in exactly one of a finite number of **states** at any given time. The FSM can change from one state to another in response to some external **inputs**. This change from one state to another is called a **transition**.

Think of it like a traffic light. It can be in one of three states: Red, Yellow, or Green.
*   When it's **Green**, it transitions to **Yellow** after a certain time.
*   When it's **Yellow**, it transitions to **Red**.
*   When it's **Red**, it transitions back to **Green** after a certain time.

The "inputs" here are the passage of time and the programmed logic that dictates how long each light stays on.

## Key Concepts in Finite State Machines

1.  **States:** These represent distinct behaviors or conditions of an AI. For example, an NPC in a game might have states like:
    *   **Idle:** The NPC is doing nothing, waiting.
    *   **Patrolling:** The NPC is moving along a predefined path.
    *   **Chasing:** The NPC is pursuing the player.
    *   **Attacking:** The NPC is performing an attack.
    *   **Fleeing:** The NPC is running away from danger.

2.  **Transitions:** These are the rules or conditions that dictate when the AI should switch from one state to another. Transitions are triggered by events or changes in the game world.
    *   *Example:* If an NPC is in the **Idle** state and the **Player Enters View Cone**, it should transition to the **Chasing** state.
    *   *Example:* If an NPC is in the **Chasing** state and its **Health Reaches Zero**, it should transition to a **Dead** state.

3.  **Events/Inputs:** These are the things that cause transitions to occur. They can be:
    *   **Player actions:** Player enters a certain area, player attacks.
    *   **Time:** After a certain duration, a state completes.
    *   **Game logic:** A specific condition is met (e.g., an ally is defeated, an objective is achieved).
    *   **Sensory input:** The AI "sees" or "hears" something.

## How FSMs Apply to Game AI

FSMs provide a structured way to define and manage the complex behaviors of game characters. Instead of writing one giant, unmanageable block of code for an NPC's actions, you break it down into discrete, manageable states.

Let's consider an enemy guard in a stealth game:

*   **State: Patrolling**
    *   **Behavior:** The guard walks along a set path.
    *   **Transitions:**
        *   If **Player is Spotted**, transition to **Alerted**.
        *   If **Path Reaches End**, loop back to start of path.

*   **State: Alerted**
    *   **Behavior:** The guard stops patrolling and scans the area, perhaps calling out.
    *   **Transitions:**
        *   If **Player is Lost**, transition back to **Patrolling** (after a timeout).
        *   If **Player is Seen Again**, transition to **Chasing**.

*   **State: Chasing**
    *   **Behavior:** The guard runs directly towards the player's last known position or current position.
    *   **Transitions:**
        *   If **Player is Lost for a Duration**, transition to **Searching**.
        *   If **Player is within Attack Range**, transition to **Attacking**.

*   **State: Attacking**
    *   **Behavior:** The guard performs an attack (e.g., swings a sword, shoots a gun).
    *   **Transitions:**
        *   If **Attack Cooldown is Ready**, transition back to **Chasing** or **Patrolling** (depending on situation).
        *   If **Player is too Far Away**, transition to **Chasing**.

*   **State: Searching**
    *   **Behavior:** The guard moves around the area where the player was last seen, looking for them.
    *   **Transitions:**
        *   If **Player is Spotted**, transition to **Chasing**.
        *   If **Player is not Found after a Timeout**, transition back to **Patrolling**.

## Visualizing an FSM

FSMs are often represented visually using state diagrams. These diagrams use nodes for states and arrows for transitions, labeled with the events that trigger them.

```
+------------+     Player Spotted     +----------+
| Patrolling | ---------------------> | Alerted  |
+------------+                        +----------+
      ^                                    |
      |                                    | Player Seen Again
      | Player Lost after Timeout          |
      |                                    v
+----------+     Player within Range   +----------+
| Searching| <---------------------- | Chasing  |
+----------+                       +----------+
      ^                                    |
      |                                    | Player too Far
      |                                    |
      +------------------------------------+
```
*(This is a simplified example; a real diagram would be more detailed)*

## Advantages of Using FSMs

*   **Clarity and Simplicity:** They break down complex AI into understandable components.
*   **Modularity:** Each state's behavior can be implemented independently.
*   **Maintainability:** Easier to debug and modify existing AI behaviors.
*   **Foundation for More Complex AI:** FSMs are often the building blocks for more advanced AI techniques.

## Common Pitfalls

*   **State Explosion:** For very complex AI, the number of states and transitions can become unwieldy.
*   **Lack of Nuance:** Simple FSMs might struggle with AI that needs to react to multiple simultaneous conditions or exhibit subtle behaviors.
*   **"Spaghetti Code" within States:** If the logic within a single state becomes too complex, it defeats the purpose of breaking down the AI.

## Conclusion

Finite State Machines are a fundamental concept for understanding how game AI operates. By defining distinct states and the transitions between them, developers can create predictable and understandable behaviors for non-player characters, making your game worlds feel more alive and responsive. As you delve deeper into game AI, you'll see how FSMs serve as a powerful yet accessible starting point for building intelligent agents.

## Supports

- [[skills/digital-media/game-development/game-ai/microskills/finite-state-machine|Finite State Machine]]
