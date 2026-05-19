---
type: "medium"
title: "CAD Software Application: Basic Sketching"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/design-fabrication/cad-design/microskills/cad-software-application|CAD Software Application]]"
---
# CAD Software Application: Basic Sketching

This lesson focuses on the practical application of Computer-Aided Design (CAD) software to create fundamental engineering designs for prototyping. We'll explore the core concept of 2D sketching, which forms the foundation for most 3D modeling.

## Understanding 2D Sketching

Before you can build a 3D object in CAD, you need to define its 2D profile or cross-section. This is done through **sketching**. A sketch is a 2D drawing consisting of geometric entities like lines, circles, arcs, and rectangles. These entities can be precisely defined using dimensions (like length and diameter) and constraints (like perpendicularity, tangency, and parallelism).

Think of it like drawing on a piece of paper, but with the ability to make your lines perfectly straight, circles perfectly round, and to precisely define their sizes and relationships.

## Practical Scenario: Designing a Simple Bracket

Imagine you need to design a basic L-shaped bracket to mount a sensor onto a chassis. This bracket will be 3D printed.

**Steps using a typical CAD tool:**

1.  **Start a New Part:** Open your CAD software and begin a new part file.
2.  **Select a Plane:** Choose a base plane (e.g., Front, Top, or Right) to start your sketch on.
3.  **Create the Base Shape:**
    *   Use the **Line** tool to draw an 'L' shape. Start at the origin point (0,0) and draw horizontally, then vertically.
    *   Alternatively, use the **Rectangle** tool to draw a rectangle, and then use the **Trim** tool to remove the inner portion, leaving an L-shape.
4.  **Add Dimensions:**
    *   Select the **Smart Dimension** (or equivalent) tool.
    *   Dimension the horizontal leg of the 'L' to be 30 mm long.
    *   Dimension the vertical leg of the 'L' to be 20 mm long.
    *   Dimension the thickness of the bracket (the width of the lines) to be 3 mm.
5.  **Apply Constraints:**
    *   Ensure the corner where the two legs meet is at the origin (0,0). This is often done by selecting the vertex and the origin, then applying a **Coincident** constraint.
    *   Ensure the lines are perfectly horizontal and vertical. Most CAD tools automatically create these constraints as you draw, but you can manually add **Horizontal** or **Vertical** constraints if needed.
    *   Ensure all corners are sharp (no unintentional curves) by making sure lines are **Perpendicular** to each other.

Once your sketch is fully dimensioned and constrained, it's considered "fully defined" or "fully constrained." This means its shape and position are fixed and unambiguous.

## Practice Task

1.  Open your chosen CAD software.
2.  Create a new part.
3.  Sketch a rectangle with a length of 50 mm and a width of 40 mm.
4.  Add a circular hole in the center of the rectangle. The diameter of the hole should be 10 mm.
5.  Ensure the sketch is fully dimensioned and constrained.

## Self-Check Questions

*   What is the purpose of sketching in CAD design?
*   What are two common geometric entities used in sketching?
*   What is the difference between a dimension and a constraint?
*   Why is it important for a sketch to be fully defined or constrained before moving to 3D modeling?

## Supports

- [[skills/creative-media/design-fabrication/cad-design/microskills/cad-software-application|CAD Software Application]]
