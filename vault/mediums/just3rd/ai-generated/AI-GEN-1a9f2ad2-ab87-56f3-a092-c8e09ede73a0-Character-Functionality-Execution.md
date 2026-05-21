---
type: "medium"
title: "Character Functionality Execution"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/game-development/game-design/microskills/character-functionality-execution|character-functionality-execution]]"
---
# Character Functionality Execution

This lesson focuses on bringing your game character to life by implementing their core functionalities. We're building on the skill of implementing basic character mechanics, aiming to make those mechanics directly serve the character's role and purpose within your game. This means their actions should feel intuitive and meaningful for how they are meant to be played.

## Core Idea: Mechanics as Purpose

Think of your character's mechanics not just as buttons to press, but as tools they use to interact with the game world and achieve their goals. A speedy scout character will have different movement mechanics than a heavily armored tank. Their abilities should reflect their role.

For example:

*   **A nimble rogue:** Might have mechanics for dodging, stealth, or double-jumping.
*   **A powerful warrior:** Might have mechanics for charging, heavy attacks, or blocking.
*   **A support mage:** Might have mechanics for casting healing spells, buffs, or crowd control.

The goal is to **apply** these mechanics in a way that makes sense for the character's intended gameplay loop.

## Implementing Movement

Movement is often the most fundamental mechanic. How your character moves dictates how they explore, engage, and escape.

### Basic Movement

This usually involves responding to player input (like WASD keys or a joystick) to translate into directional movement and possibly jumping.

```csharp
// Example in pseudocode (Unity-like)
public class PlayerMovement : MonoBehaviour
{
    public float moveSpeed = 5f;
    public float jumpForce = 10f;
    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");

        Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);
        rb.AddForce(movement * moveSpeed);

        if (Input.GetButtonDown("Jump"))
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
    }
}
```

**How it works:**

*   `Input.GetAxis("Horizontal")` and `Input.GetAxis("Vertical")` capture directional input.
*   These inputs are used to create a `Vector3` for movement.
*   `rb.AddForce` applies the movement to the character's physics body.
*   `Input.GetButtonDown("Jump")` checks for the jump input.
*   `rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse)` applies an instant upward force for the jump.

### Role-Specific Movement Adjustments

Consider how your character's role affects their movement:

*   **Fast Character:** Increase `moveSpeed`. Perhaps add a dash ability.
*   **Heavy Character:** Decrease `moveSpeed`, but maybe allow them to break through obstacles.
*   **Flying Character:** Implement vertical movement and perhaps different gravity effects.

## Implementing Actions and Abilities

Beyond movement, characters have distinct actions that define their role.

### Basic Action Implementation

This could be anything from attacking to using an item. Let's look at a simple attack.

```csharp
// Example in pseudocode (Unity-like)
public class PlayerAttack : MonoBehaviour
{
    public float attackDamage = 10f;
    public float attackRange = 1.5f;
    public LayerMask enemyLayer; // What layer are enemies on?

    void Update()
    {
        if (Input.GetButtonDown("Fire1")) // Typically the left mouse button or a controller button
        {
            PerformAttack();
        }
    }

    void PerformAttack()
    {
        // Detect enemies in range
        Collider[] hitColliders = Physics.OverlapSphere(transform.position, attackRange, enemyLayer);
        foreach (var hitCollider in hitColliders)
        {
            // Apply damage to the enemy
            // For example, if the enemy has a script called EnemyHealth:
            EnemyHealth enemyHealth = hitCollider.GetComponent<EnemyHealth>();
            if (enemyHealth != null)
            {
                enemyHealth.TakeDamage(attackDamage);
            }
        }
    }

    // Optional: Visualize attack range in the editor
    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(transform.position, attackRange);
    }
}
```

**How it works:**

*   The `Update` function checks for the attack input (`"Fire1"`).
*   `PerformAttack` uses `Physics.OverlapSphere` to find any colliders (enemies) within a specified `attackRange` around the character.
*   It then iterates through found enemies and calls a `TakeDamage` method (assumed to exist on an `EnemyHealth` script).
*   `OnDrawGizmosSelected` is a helpful editor function to visualize the attack range.

### Role-Specific Ability Design

This is where your character's role shines.

*   **Melee Attacker:** Might have a combo system, a charged attack, or a lunge.
*   **Ranged Attacker:** Might have different projectile types, aiming mechanics, or reload times.
*   **Support Character:** Might have cooldowns for healing or buffing spells, target selection logic, or area-of-effect indicators.

**Consider:**

*   **Resource Management:** Do abilities consume mana, stamina, or ammo? Implement the logic for this.
*   **Cooldowns:** Prevent spamming by adding cooldown timers to abilities.
*   **Targeting:** How does the character select who or what to affect with their abilities? (e.g., nearest enemy, player-aimed, specific target)

## Putting It All Together: The Character Loop

The key to implementing character functionality is to ensure all mechanics work in concert to support the character's primary role and gameplay loop.

*   **Scenario:** Imagine a "Stealth Assassin" character.
    *   **Movement:** Needs to be quiet (no footstep sounds unless moving very slowly), perhaps have a crouch mechanic to reduce visibility, and a double-jump for reaching vantage points.
    *   **Abilities:** A "backstab" ability that deals critical damage when behind an enemy, a "smoke bomb" for escape, or a "distraction" ability.
    *   **Interaction:** Needs to be able to pick locks or disarm traps.

Every mechanic implemented should reinforce this core identity. If a "Stealth Assassin" has a loud, slow attack, it undermines their purpose.

### Common Pitfalls

*   **Overlapping Mechanics:** Giving every character the same set of abilities.
*   **Mechanics Don't Fit Role:** A tank character who can't take damage, or a healer who has no way to reach allies.
*   **Poor Responsiveness:** If controls feel sluggish or inputs are ignored, the character's functionality feels broken.
*   **Lack of Feedback:** The player needs clear visual and audio cues when abilities are used, when they hit, or when cooldowns are ready.

By focusing on how each implemented mechanic serves your character's defined role, you can create engaging and intuitive gameplay experiences.

## Supports

- [[skills/creative-media/game-development/game-design/microskills/character-functionality-execution|Character Functionality Execution]]
