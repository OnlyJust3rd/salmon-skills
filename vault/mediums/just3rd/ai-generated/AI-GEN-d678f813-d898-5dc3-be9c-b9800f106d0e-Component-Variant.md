---
type: "medium"
title: "Figma: Mastering Component Variants for Interactive Prototypes"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/figma/microskills/component-variant|component-variant]]"
---
# Figma: Mastering Component Variants for Interactive Prototypes

This lesson focuses on using **Component Variants** in Figma to create dynamic and interactive prototypes. Understanding and applying variants is crucial for building realistic user interfaces that respond to different states and interactions.

## What are Component Variants?

In Figma, a component is a reusable element that can be used across your designs. **Component Variants** are a powerful extension of this concept. They allow you to group multiple variations of a single component into a single "master" component. This means you can have different states, sizes, or styles of a button, for example, all managed under one component set.

Think of it like a single button that can change its appearance. It can be:

*   **Default state:** A standard, clickable button.
*   **Hover state:** Changes color or adds an underline when the mouse hovers over it.
*   **Pressed state:** Visually indicates it's being clicked (e.g., a slight depression).
*   **Disabled state:** Appears grayed out and is not clickable.

Instead of creating separate components for each of these states, you create them all as variants within a single component set.

## Why Use Component Variants?

The primary benefit of using component variants is **efficiency and consistency**.

*   **Streamlined Design:** Manage all variations of a component in one place.
*   **Faster Prototyping:** Quickly switch between states or variations within your prototype.
*   **Easier Updates:** Change a property in the master component, and all instances will update accordingly.
*   **Reduced File Size:** Less duplication of elements means a lighter Figma file.
*   **Enhanced Interactivity:** Create more realistic prototypes by simulating user interactions and state changes.

## Creating Component Variants

Let's walk through the process of creating a simple button with different states using variants.

### Step 1: Design Your Base Component

1.  Create a basic button shape (e.g., a rectangle with text).
2.  Style it as you want your default button to look (color, font, padding).
3.  Turn this button into a **Main Component** by right-clicking and selecting "Create component" or by clicking the four-diamond icon in the top toolbar.

### Step 2: Add Variants

1.  With the main component selected, go to the **Design panel** on the right.
2.  In the "Properties" section, click the **"+" icon** and select "Variant."
3.  Figma will automatically create a duplicate of your component. You can now modify this duplicate to represent a different state. For our button, let's create a "Hover" state.
4.  **Name Your Variants:**
    *   Select the first button instance. In the "Properties" section of the Design panel, you'll see a default property like "Property 1." Rename this to something descriptive, like "State."
    *   For the default button, set its "State" property to "Default."
    *   Select the second button instance. Change its "State" property to "Hover."
    *   Modify the appearance of the "Hover" button (e.g., change the background color to a slightly darker shade).

### Step 3: Add More States

1.  Repeat Step 2 to add more variants for other states like "Pressed" and "Disabled."
2.  For "Pressed," make it look like it's being pushed in.
3.  For "Disabled," change the color to a muted tone and perhaps adjust the text color to be lighter.

You'll notice that all your variants are grouped together visually in the canvas, connected by a light blue border. This is your **Component Set**.

### Step 4: Using Variants in Your Designs

1.  Go to your **Assets panel** (usually on the left sidebar).
2.  Drag an instance of your component set onto your canvas.
3.  With the instance selected, look at the **Design panel** on the right. You'll see the "State" property you defined.
4.  Use the dropdown menu for "State" to switch between "Default," "Hover," "Pressed," and "Disabled."

## Prototyping with Variants

This is where the magic happens for interactive prototypes.

### Step 1: Connect States with Interactions

1.  Switch to the **Prototype tab** in Figma.
2.  Select the instance of your button component set that is currently in the "Default" state on your canvas.
3.  Click and drag the **interaction handle** (the small circle that appears) from the default button instance to the button instance that is in the "Hover" state.
4.  In the "Interaction details" panel that appears:
    *   **Trigger:** Set this to "While hovering."
    *   **Action:** Set this to "Change to."
    *   **Destination:** This will automatically be set to the "Hover" variant.
    *   **Animation:** Choose a suitable animation like "Dissolve" or "Smart animate" for a smooth transition.

### Step 2: Simulate Presses and Other Actions

1.  Now, select the button instance that is in the "Hover" state.
2.  Drag its interaction handle to the "Pressed" state variant.
3.  In the "Interaction details":
    *   **Trigger:** Set this to "While pressing."
    *   **Action:** "Change to."
    *   **Destination:** "Pressed" variant.
    *   **Animation:** "Smart animate."

You can continue to connect states this way. For example, you might want the "Pressed" state to revert to the "Default" state after the press is released, or navigate to another screen.

### Step 3: Testing Your Prototype

1.  Click the **"Present" button** (the play icon in the top right corner).
2.  Hover over your button. It should change to its hover state.
3.  Click and hold your mouse button on the button. It should change to its pressed state.

## Common Mistakes and Tips

*   **Overlapping Variants:** Ensure your variants are clearly distinct in their appearance. If they look too similar, it will be hard to tell which state you're in.
*   **Confusing Property Names:** Use clear and descriptive names for your variant properties (e.g., "State," "Size," "Color," "Icon").
*   **Forgetting to Link Interactions:** The prototype won't work if you don't manually link the state changes with the correct triggers in the Prototype tab.
*   **Not Using "Smart Animate":** For smooth transitions between states, "Smart animate" is often the best choice. It intelligently animates layers with the same name between frames.
*   **Forgetting Disabled States:** Always consider how disabled elements should look and behave in your prototypes.

By mastering component variants, you significantly enhance your ability to create sophisticated, interactive prototypes that accurately represent user experiences. This directly contributes to building more effective and user-friendly interfaces.

## Supports

- [[skills/web-and-design/frontend-ux/figma/microskills/component-variant|Component Variant]]
