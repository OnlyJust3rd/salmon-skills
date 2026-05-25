---
type: "medium"
title: "Actor Components in Unreal Engine"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/game-development/unreal-engine/microskills/actor-component|actor-component]]"
learning-time-in-minutes: 5
---
# Actor Components in Unreal Engine

In Unreal Engine, an **Actor** is the fundamental object in your game world that can be placed in a level. Think of it as a container for functionality. While Actors themselves can have basic properties, their true power comes from **Actor Components**.

Actor Components are modular pieces of functionality that you can attach to Actors. They allow you to add specific behaviors, data, or visual representations to an Actor without having to rewrite core Actor code. This promotes reusability and organization, which are key to building complex game systems.

## What are Actor Components?

At their core, Actor Components are designed to extend the capabilities of an Actor. They can:

*   **Add Behavior:** Implement logic like movement, health systems, interaction capabilities, or AI.
*   **Store Data:** Hold variables and properties that define an Actor's state or characteristics.
*   **Provide Visuals:** Render meshes, particle effects, or lights.
*   **Handle Input:** Process player input and translate it into actions for the Actor.

You can think of an Actor as a blueprint for a game object, and Actor Components as specialized tools or add-ons that you attach to that blueprint to define exactly what that object can do and how it behaves.

## Why Use Actor Components?

The primary benefit of using Actor Components is **modularity and reusability**. Instead of duplicating code across multiple Actors that share similar functionalities, you can create a single Actor Component and attach it to as many Actors as needed.

Consider a "HealthComponent." Instead of adding health variables and logic to every enemy, player, and destructible object, you can create one HealthComponent. Then, you can simply add this component to any Actor that needs to have health. If you need to change how health works (e.g., add armor, regeneration), you only need to modify the HealthComponent, and all Actors using it will inherit the changes.

This approach also leads to cleaner and more organized Blueprints. Instead of a single, massive Blueprint graph filled with all sorts of logic, you can distribute that logic into separate, focused Actor Components.

## Common Actor Components

Unreal Engine provides a rich set of built-in Actor Components. Here are a few examples:

*   **StaticMeshComponent:** Renders a static 3D mesh. This is how most visible objects are displayed.
*   **SkeletalMeshComponent:** Renders a 3D mesh that can be animated, typically used for characters.
*   **MovementComponent (e.g., CharacterMovementComponent, PawnMovementComponent):** Handles the physics and logic for moving an Actor.
*   **AudioComponent:** Plays sound effects.
*   **LightComponent:** Adds lighting to a scene.
*   **CameraComponent:** Defines a viewpoint for rendering.
*   **PrimitiveComponent (base class):** The base for many visual components like StaticMeshComponent and BoxComponent.

## Adding an Actor Component in Blueprints

Let's walk through adding a simple component to an Actor in the Unreal Editor using Blueprints.

**Scenario:** We want to add a component to a basic Actor that will simply store a numerical value, representing, for example, a pickup's score value.

### Steps:

1.  **Create a New Blueprint Actor:**
    *   In the Content Browser, right-click and select "Blueprint Class."
    *   Choose "Actor" as the parent class and name it `BP_PickupActor`.

2.  **Open the Blueprint Editor:**
    *   Double-click `BP_PickupActor` to open the Blueprint Editor.

3.  **Add a Component:**
    *   In the "Components" panel (usually on the left), click the "+ Add" button.
    *   A search window will appear. Type "Integer" to find the `Integer` variable type. *Correction: This is not a component directly, but rather a variable type to be added to a component or the actor. Let's rephrase to add a common behavioral component.*

    Let's try adding a component that can play a sound.

    *   Click the "+ Add" button again.
    *   In the search window, type "Audio" and select `Audio`. This adds an `AudioComponent` to your Actor.

4.  **Configure the Component:**
    *   With the `AudioComponent` selected in the Components panel, look at the "Details" panel (usually on the right).
    *   Under the "Audio" category, you'll see a "Sound" slot. You can drag and drop a Sound Wave asset from your Content Browser into this slot. For now, let's leave it empty.

5.  **Add a Custom Variable (for data):**
    *   Switch to the "Event Graph" or "Graph" tab.
    *   Right-click in the graph and search for "Add Custom Event." Name it `InitializePickup`.
    *   Right-click again and search for "Make Literal Int" and drag off its output pin to create an `Integer` variable.
    *   Right-click on the `Make Literal Int` node and select "Promote to Variable." Name this new variable `ScoreValue`.
    *   Connect the output of `Make Literal Int` to the input of `Set ScoreValue`.
    *   Connect the `InitializePickup` event to the `Set ScoreValue` node.
    *   In the "My Blueprint" panel, locate the `ScoreValue` variable. Click the "eye" icon next to it to make it "Instance Editable." This allows you to set a unique score value for each instance of this pickup in your level.

6.  **Place in Level and Test:**
    *   Compile and Save the Blueprint.
    *   Drag `BP_PickupActor` from your Content Browser into your level.
    *   Select the placed Actor in the level. In the "Details" panel, you should now see your `ScoreValue` variable under "Class Defaults" or "Instance Settings." Change its value.
    *   To hear the sound when the actor spawns, you could add a `Play Sound at Location` node in the `Event BeginPlay` graph, using the Actor's location and referencing the `AudioComponent`'s sound.

## Key Concepts to Remember

*   **Composition over Inheritance:** Actor Components encourage a "composition" approach, where you build complex Actors by combining simpler, reusable components, rather than relying heavily on deep inheritance hierarchies.
*   **Component Lifecycle:** Components have their own lifecycle events (like `BeginPlay`, `Tick`, `EndPlay`) that you can override in Blueprint or C++ to manage their behavior over time.
*   **Communication:** Components can communicate with their owning Actor and other components. This is often done by getting a reference to the owning Actor and then accessing other components on it.

By mastering Actor Components, you unlock a powerful way to structure your Unreal Engine projects, making them more manageable, scalable, and efficient.

## Supports

- [[skills/digital-media/game-development/unreal-engine/microskills/actor-component|Actor Component]]
