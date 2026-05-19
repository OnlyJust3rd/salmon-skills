---
type: "medium"
title: "Understanding `[SerializeField]` in Unity"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/game-development/unity/microskills/serialized-field|Serialized Field]]"
---
# Understanding `[SerializeField]` in Unity

In Unity, when you're building your game worlds and scripting behaviors, you often need to expose certain variables from your C# scripts to the Unity Editor. This allows you to tweak values directly in the Inspector window without having to constantly re-open your scripts and recompile. The `[SerializeField]` attribute is a key tool for achieving this.

## What is `[SerializeField]`?

`[SerializeField]` is an attribute in Unity that tells the Unity serialization system to include a private or protected field in the serialization process. Normally, by default, Unity only serializes public fields. By using `[SerializeField]`, you can keep your fields private for better encapsulation (meaning you control how other scripts access or modify them) while still making them editable in the Inspector.

### Core Idea: Editor Exposure for Private Data

The fundamental purpose of `[SerializeField]` is to bridge the gap between your C# code's encapsulation principles and the Unity Editor's need for accessible configuration.

*   **Encapsulation:** In programming, encapsulation means bundling data (variables) and methods (functions) that operate on the data within a single unit, and restricting access to some of the object's components. Keeping variables private helps prevent accidental modification from other parts of your code.
*   **Editor Workflow:** Game development often involves iterative tweaking of values. For example, movement speed, enemy health, or the color of an object. Making these values accessible in the Inspector dramatically speeds up this process.

## How it Works

When Unity encounters a field marked with `[SerializeField]`, it treats it as if it were public for the purpose of saving and loading data. This means:

1.  **Serialization:** The value of the field is saved when you save your Unity project or scene.
2.  **Inspector Display:** The field will appear in the Inspector window for any GameObject that has a script containing this serialized field.
3.  **Editing:** You can directly change the value of this field within the Inspector.
4.  **Deserialization:** When you load a scene or project, Unity restores the saved value to the field.

### Code Example

Let's say you have a script for a player character that controls its movement speed. You want to be able to adjust this speed easily in the Inspector.

```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    // This field is private but will be visible in the Inspector
    [SerializeField]
    private float moveSpeed = 5.0f;

    // This field is public and will also be visible in the Inspector
    // However, using [SerializeField] for private fields is generally preferred for encapsulation.
    public float jumpForce = 10.0f;

    // This field is private and not serialized, so it won't appear in the Inspector
    private int score = 0;

    void Update()
    {
        // Example of using the serialized field
        float horizontalInput = Input.GetAxis("Horizontal");
        transform.Translate(Vector3.right * horizontalInput * moveSpeed * Time.deltaTime);

        if (Input.GetButtonDown("Jump"))
        {
            GetComponent<Rigidbody>().AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
    }
}
```

In this example:

*   `moveSpeed` is marked with `[SerializeField]`. Even though it's `private`, it will show up in the Inspector.
*   `jumpForce` is `public`, so it also shows up in the Inspector. However, the convention is often to use `[SerializeField]` for private fields to maintain better code organization.
*   `score` is `private` and *not* serialized. It will not appear in the Inspector, and its value will reset to `0` every time Unity loads the scene or the game starts.

### The Inspector View

When you attach the `PlayerController` script to a GameObject in your scene and select that GameObject, the Inspector window will look something like this:

![Inspector with Serialized Field](https://raw.githubusercontent.com/justlearn-io/static-assets/main/unity/serialized_field_inspector.png)

You can see `Move Speed` (which corresponds to our `moveSpeed` private field) and `Jump Force` (our public field). You can click into the boxes and type new values directly.

## When to Use `[SerializeField]`

*   **Configuration Values:** Any variable that you want to configure per-instance of a component. Think movement speeds, damage values, health points, detection ranges, colors, sound volumes, animation timings, etc.
*   **References to Other GameObjects or Components:** You can use `[SerializeField]` to expose private fields that will hold references to other objects in your scene or project. This is a very common and clean way to set up relationships between game objects.

    ```csharp
    using UnityEngine;

    public class GameManager : MonoBehaviour
    {
        [SerializeField]
        private PlayerController player; // Drag your Player GameObject here in the Inspector

        [SerializeField]
        private AudioClip gameMusic; // Drag an Audio Clip asset here

        void Start()
        {
            if (player != null)
            {
                Debug.Log("Player found! Starting music...");
                // Accessing player's public methods or properties
                // player.SetStartingPosition();
            }
        }
    }
    ```
*   **Keeping Variables Private:** When you want to enforce encapsulation and prevent other scripts from directly modifying a variable, but still need editor access.

## Common Mistakes and Best Practices

*   **Forgetting `[SerializeField]`:** If you mark a field as `private` and forget `[SerializeField]`, you won't be able to edit it in the Inspector, and its value might be lost on reload if it's not initialized.
*   **Over-Serializing:** Don't expose every single private variable. Only serialize what is intended for configuration or reference in the Inspector. Over-serialization can lead to a cluttered Inspector and make it harder to find what you need.
*   **Using Public Fields When Not Necessary:** While public fields are serialized by default, it's generally better practice to use private fields with `[SerializeField]` for better encapsulation. This clearly indicates your intention that the variable is primarily for internal use or editor configuration, not for direct access by other scripts.
*   **Initialization Order:** Be mindful of when your serialized fields are assigned. For instance, if a script relies on a serialized reference to another component, ensure that the other component is initialized or available before the dependent script tries to use the reference.

By understanding and utilizing `[SerializeField]`, you gain a powerful tool for making your Unity development workflow more efficient and your code more robust. It allows you to strike a good balance between code organization and the flexibility needed for game design and tweaking.

## Supports

- [[skills/creative-media/game-development/unity/microskills/serialized-field|Serialized Field]]
