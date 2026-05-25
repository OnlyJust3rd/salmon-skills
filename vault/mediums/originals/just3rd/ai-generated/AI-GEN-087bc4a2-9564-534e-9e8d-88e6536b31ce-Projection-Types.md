---
type: "medium"
title: "Understanding Projection Types: Parallel vs. Perspective"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/perspective-projection/microskills/projection-types|projection-types]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/perspective-projection/perspective-projection|perspective-projection]]"
learning-time-in-minutes: 4
---
# Understanding Projection Types: Parallel vs. Perspective

When we want to represent a 3D world on a 2D surface, like a screen or a piece of paper, we need a way to *project* those 3D points into 2D. This process is called **projection**. In computer graphics and technical drawing, there are two primary ways to do this: **parallel projection** and **perspective projection**. Understanding the difference is fundamental to how we create realistic or stylized 3D scenes.

## What is Projection?

At its core, projection is like shining a light from a viewpoint through an object and casting its shadow onto a flat surface. The type of projection depends on the nature of that "light" or the "projectors."

## Parallel Projection

In a parallel projection, the projectors (the lines from the 3D point to its 2D projection) are all parallel to each other. Imagine a light source infinitely far away, so its rays are parallel. This means that the direction and distance between points in 3D space are preserved in their projected 2D representation, regardless of their distance from the viewer.

There are two main subtypes of parallel projection:

*   **Orthographic Projection:** In orthographic projection, the projectors are perpendicular to the projection plane. This is the most common type of parallel projection used in technical drawings, architectural plans, and some types of 3D modeling.
    *   **Key Characteristic:** Distances and angles are preserved. Parallel lines in 3D remain parallel in 2D. Objects do not appear smaller as they get further away.
    *   **Use Cases:** Engineering blueprints, floor plans, isometric views in games where scale is important.

*   **Oblique Projection:** In oblique projection, the projectors are *not* perpendicular to the projection plane. This allows for one face of an object to be shown directly in true scale, while depth is conveyed by angling the projection.
    *   **Key Characteristic:** One view of the object is often shown in its true shape and size, while depth is represented by lines that are not parallel to the projection plane. Parallel lines remain parallel.
    *   **Use Cases:** Simple 3D visualizations where conveying shape is more important than precise depth relationships. Cabinet projection and cavalier projection are types of oblique projection.

### Defining Parallel Projection

> **Definition:** Parallel projection is a method of projecting 3D objects onto a 2D plane where the projection lines are parallel to each other. This means that objects maintain their size and shape regardless of their distance from the projection plane.

## Perspective Projection

Perspective projection mimics how the human eye or a camera sees the world. In this type of projection, the projectors converge at a single point, known as the **center of projection** or the **viewpoint**.

*   **Key Characteristic:** Objects appear smaller as they get further away from the viewer. Parallel lines in 3D space converge at vanishing points on the horizon in the 2D projection. This creates a sense of depth and realism.
*   **Types of Perspective Projection:** These are categorized by the number of vanishing points:
    *   **One-Point Perspective:** Has one vanishing point. Used when viewing an object or scene directly, such as looking down a straight road or railway track.
    *   **Two-Point Perspective:** Has two vanishing points. Used when viewing an object at an angle, such as looking at the corner of a building.
    *   **Three-Point Perspective:** Has three vanishing points. Used for dramatic effects, such as looking up at a tall skyscraper from ground level or down from a great height.

### Defining Perspective Projection

> **Definition:** Perspective projection is a method of projecting 3D objects onto a 2D plane where the projection lines converge at a single viewpoint. This creates a realistic depiction of depth, where objects appear smaller and closer together as they recede into the distance.

## Comparing the Two

The fundamental difference lies in how they handle depth and scale.

| Feature           | Parallel Projection                                     | Perspective Projection                                          |
| :---------------- | :------------------------------------------------------ | :-------------------------------------------------------------- |
| **Projectors**    | Parallel to each other.                                 | Converge at a single viewpoint.                                 |
| **Size vs. Distance** | Size of objects is constant regardless of distance.     | Objects appear smaller as they get further away.                |
| **Parallel Lines** | Remain parallel in the projection.                      | May converge to vanishing points.                               |
| **Realism**       | Less realistic, more technical.                         | More realistic, mimics human vision.                            |
| **Primary Use**   | Technical drawings, precise measurements, schematics.   | Realistic 3D rendering, art, game environments, architectural visualization. |

## Identifying Projection Types

When you look at an image or a 3D model, ask yourself:

1.  **Do objects farther away look smaller than similar objects closer up?**
    *   If **yes**, it's likely a **perspective projection**.
    *   If **no**, it's likely a **parallel projection**.

2.  **Do parallel lines in the 3D scene seem to meet at a point on the horizon (or in the distance)?**
    *   If **yes**, it's **perspective projection**.
    *   If **no**, it's **parallel projection**.

By observing these characteristics, you can successfully identify whether an image or scene is using a parallel or perspective projection method. This understanding is crucial for creating and interpreting 3D graphics.

## Supports

- [[skills/digital-media/computer-graphics/perspective-projection/microskills/projection-types|Projection Types]]
