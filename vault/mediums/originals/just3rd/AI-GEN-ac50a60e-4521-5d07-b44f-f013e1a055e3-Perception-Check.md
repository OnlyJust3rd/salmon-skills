---
type: "medium"
title: "Perception Check: How NPCs See the Game World"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/game-development/game-ai/microskills/perception-check|perception-check]]"
related-skills:
  - "[[skills/digital-media/game-development/game-ai/game-ai|game-ai]]"
learning-time-in-minutes: 3
---
# Perception Check: How NPCs See the Game World

In Game AI, Non-Player Characters (NPCs) need to interact with their environment. A crucial part of this interaction is their ability to perceive, or "see," relevant game objects. This skill, known as a **Perception Check**, determines if an NPC can detect things like players, other NPCs, items, or environmental hazards. This is fundamental to how NPCs behave, impacting everything from their movement to their decision-making.

## What is a Perception Check?

A perception check is essentially a **test** within the game's logic to see if an NPC can detect a specific game object or event. This isn't about whether the object *exists*, but whether the NPC's senses and current conditions allow them to *notice* it.

Think of it like this: a player might be hiding behind a wall. The wall exists, but the NPC can't see the player *through* the wall. The perception check determines if the NPC can overcome obstacles and environmental factors to gain awareness.

## Core Concepts in Perception

Several factors influence whether a perception check succeeds or fails:

*   **Line of Sight (LOS):** Can the NPC draw a straight, unobstructed line from their own position to the target object? Walls, doors, and other solid objects block LOS.
*   **Distance:** How far away is the target object? Many perception systems have a maximum detection range.
*   **Sensory Capabilities:** What senses does the NPC possess? Most NPCs have "vision." Some might have enhanced "hearing" or even "smell" (simulated, of course). These can be used for different types of perception checks.
*   **Target's State:** Is the target object actively trying to hide or be stealthy? A player character sneaking might have a lower chance of being perceived than one running at full speed.
*   **Environmental Conditions:** Is it foggy, dark, or noisy? These can impair an NPC's ability to perceive.
*   **NPC's Current State:** Is the NPC distracted, engaged in combat, or performing another action? This can affect their focus and perception ability.

## How Perception Checks are Implemented (Pseudocode Example)

While the exact implementation varies wildly between game engines and custom AI systems, the core logic often involves a combination of these checks.

```pseudocode
function CanPerceive(npc, targetObject, perceptionType):
    // 1. Check if targetObject is null or already known
    if targetObject is null or npc.knownObjects.contains(targetObject):
        return true // Already known, so perception is guaranteed

    // 2. Check sensory capabilities and perception type
    if perceptionType == "vision":
        if not npc.hasVision:
            return false
        detectionRange = npc.visionRange
        obstacleCheck = CheckLineOfSight(npc.position, targetObject.position)
        stealthModifier = GetStealthModifier(targetObject)
        environmentalModifier = GetEnvironmentalModifier(npc.position)
    else if perceptionType == "hearing":
        if not npc.hasHearing:
            return false
        detectionRange = npc.hearingRange
        // For hearing, we might check for noise sources near the target
        noiseLevel = GetNoiseLevelNear(targetObject.position)
        stealthModifier = GetSoundModifier(targetObject) // How quiet is the target?
        environmentalModifier = GetEnvironmentalNoiseModifier()
    else:
        return false // Unknown perception type

    // 3. Basic distance check
    distance = CalculateDistance(npc.position, targetObject.position)
    if distance > detectionRange:
        return false

    // 4. Obstacle check (crucial for vision)
    if perceptionType == "vision" and not obstacleCheck:
        return false

    // 5. Combine modifiers and perform a probabilistic check
    // This is where randomness comes in, making AI feel less predictable.
    perceptionRoll = RandomFloat(0, 1) // A dice roll simulation

    // Calculate the required perception threshold
    // This threshold is influenced by the target's stealth and the environment
    perceptionThreshold = CalculatePerceptionThreshold(targetObject.basePerceptionValue, stealthModifier, environmentalModifier)

    // Success if the roll meets or exceeds the threshold
    if perceptionRoll >= perceptionThreshold:
        npc.AddKnownObject(targetObject) // Add to what the NPC knows
        return true
    else:
        return false

function CheckLineOfSight(startPos, endPos):
    // Complex raycasting or geometry check here to see if anything obstructs the path
    // ... returns true if clear, false if obstructed
    pass

function GetStealthModifier(gameObject):
    // Returns a value that reduces the chance of being perceived (e.g., 0.8 for 20% harder to detect)
    pass

function CalculatePerceptionThreshold(baseValue, stealth, environment):
    // A simplified example:
    // A higher baseValue means it's easier to perceive.
    // Stealth and environment modifiers make it harder.
    return baseValue * stealth * environment
    pass
```

## Practical Applications and Scenarios

*   **Player Stealth:** A player trying to sneak past guards. The guards perform perception checks (vision and hearing) against the player's stealth attempts.
*   **Enemy Awareness:** An enemy NPC hears a gunshot and initiates a perception check (hearing) to locate the source. If successful, they might investigate.
*   **Item Discovery:** An NPC walking through a room might perform periodic perception checks (vision) for hidden items or interactable objects.
*   **Environmental Hazards:** An NPC might need to perceive a pitfall or a falling rock to react in time.

## Common Pitfalls

*   **Over-reliance on simple distance:** Just because something is "near" doesn't mean it's perceived if there are obstructions.
*   **Perfect Perception:** NPCs that can always see or hear everything are boring and frustrating for players. Introduce randomness and environmental factors.
*   **Ignoring Stealth:** If stealth mechanics exist for players, NPCs *must* have perception checks that can be influenced by stealth.
*   **Failing to Update Perception:** An NPC shouldn't "forget" they saw the player if the player just moved slightly out of their direct line of sight but is still within range and visible. The perception system needs to continuously re-evaluate.

By mastering the concept of perception checks, you can create NPCs that react more intelligently and realistically to the game world, making for a more engaging player experience.

## Supports

- [[skills/digital-media/game-development/game-ai/microskills/perception-check|Perception Check]]
