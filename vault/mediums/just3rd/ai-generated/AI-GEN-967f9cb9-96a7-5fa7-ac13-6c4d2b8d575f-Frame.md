---
type: "medium"
title: "Understanding Frames in Figma"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/figma/microskills/frame|frame]]"
---
# Understanding Frames in Figma

In Figma, the foundation of your design lives within containers. These containers are called **Frames**. Think of a Frame as a digital canvas or a viewport for your user interface. It's where you'll place all the elements that make up a screen, a section of a page, or even an individual component. Understanding how to use Frames effectively is crucial for organizing your work and setting up your design workflow for success.

## What is a Frame?

A Frame in Figma is essentially a bounding box with a defined size and background. It acts as a parent element for all other design elements placed within it, such as text, shapes, images, and groups.

*   **Analogy:** Imagine you're designing a poster. The poster paper itself is your Frame. Everything you draw or paste onto that paper exists *within* the boundaries of the poster.
*   **Purpose:** Frames are essential for:
    *   Defining the dimensions of your screens (e.g., mobile, tablet, desktop).
    *   Organizing your design into logical sections.
    *   Enabling prototyping by defining interactive areas.
    *   Applying constraints for responsive design.

## Creating and Managing Frames

Figma offers several ways to create Frames, and managing them is straightforward.

### Creating a New Frame

You can create a new Frame in a few ways:

1.  **Using the Frame Tool:**
    *   Select the **Frame tool** from the toolbar (shortcut: `F`).
    *   Click and drag on your canvas to draw a Frame of any size.
    *   Alternatively, with the Frame tool selected, you can click on the canvas, and Figma will create a default-sized Frame.

2.  **Using Presets:**
    *   When the Frame tool is active, you'll see a "Frame" section in the right-hand sidebar (the Inspector panel).
    *   This section provides a list of common device presets (e.g., iPhone 14, MacBook Pro, Desktop). Clicking one of these will create a Frame with the standard dimensions for that device. This is highly recommended for ensuring your designs fit their intended screens.

### Resizing and Positioning Frames

*   **Resizing:** Select a Frame and use the handles that appear around its border to resize it. You can also adjust its width and height directly in the Inspector panel.
*   **Positioning:** Drag and drop a Frame to move it around your canvas. Its X and Y coordinates can also be adjusted in the Inspector panel.

### Naming Frames

Giving your Frames meaningful names is a fundamental practice for good organization. This is especially important when you have many Frames representing different screens or states.

*   Double-click the default name of the Frame (e.g., "Frame 1") in the Layers panel (on the left side of Figma).
*   Type a descriptive name (e.g., "Homepage", "Login Screen", "User Profile").
*   This will help you quickly identify and navigate between different parts of your design.

## Frames vs. Groups vs. Artboards

It's important to distinguish Frames from other organizational elements in Figma.

*   **Frames:** Are the primary containers for screens or major sections. They have their own explicit dimensions and are fundamental for prototyping.
*   **Groups:** Are used to logically group related elements *within* a Frame. They don't have a fixed size or background in the same way Frames do and are primarily for organization and applying bulk transformations.
*   **Artboards:** (A term from other design tools like Adobe XD) are conceptually very similar to Frames. In Figma, Frames serve the role of artboards.

### When to Use a Frame

You should use a Frame whenever you are defining a distinct screen, a major section of a page, or a component that needs to have specific dimensions and potentially act as a standalone unit.

*   **Designing an App:** Each distinct screen (e.g., splash screen, main dashboard, settings page) should be its own Frame.
*   **Designing a Website:** Each major page (e.g., Home, About Us, Contact) should be a Frame. Even distinct sections within a long landing page might warrant their own Frame if they are self-contained.
*   **Designing Components:** When creating reusable UI elements like buttons, cards, or input fields, you'll often place them within a Frame to define their boundaries and export them as individual assets.

## Practical Example: Setting Up a Mobile App Screen

Let's say you're designing a login screen for a mobile app.

1.  **Select the Frame Tool:** Press `F` or click the Frame tool icon.
2.  **Choose a Preset:** In the Inspector panel, under "Frame," click on "iPhone 14" (or your preferred mobile device preset). A new Frame with the correct dimensions will appear on your canvas.
3.  **Name Your Frame:** In the Layers panel, double-click "Frame 1" and rename it to "Login Screen."
4.  **Start Designing:** Now, you can drag and drop or create elements like text fields, buttons, and logos *inside* this "Login Screen" Frame. These elements are now contained within your defined screen.

By consistently using Frames for each screen and naming them appropriately, you build a well-structured and navigable design file. This makes collaboration, handoff, and prototyping significantly easier.

## Supports

- [[skills/web-and-design/frontend-ux/figma/microskills/frame|Frame]]
