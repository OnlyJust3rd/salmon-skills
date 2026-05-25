---
type: "medium"
title: "Understanding Clipping Concepts"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/viewing-and-clipping/microskills/clipping-concepts|clipping-concepts]]"
learning-time-in-minutes: 5
---
# Understanding Clipping Concepts

In computer graphics, we often work with objects defined in a large "world" space. However, what we see on our screen is limited to a specific rectangular area. This is where **clipping** comes in. Clipping is the process of removing parts of an object or scene that fall outside a defined viewing area.

## Why Clip?

Imagine you're drawing a large picture on a very small piece of paper. You can only see and draw on the part of the picture that fits within the paper's boundaries. Anything outside that boundary needs to be ignored or cut off. In computer graphics:

*   **Efficiency:** Rendering objects that are entirely outside the visible screen area is a waste of processing power. Clipping helps us discard these unnecessary elements early in the rendering pipeline.
*   **Correct Display:** It ensures that only the visible portions of objects are displayed, preventing parts of objects from appearing where they shouldn't.
*   **Defining Viewport:** Clipping works hand-in-hand with defining what part of the world is visible and how it's mapped to the screen.

## The Viewing Window

Before we can clip, we need to define what we *want* to see. This is done by specifying a **viewing window**. Think of this as a rectangular frame in the 3D world that we are interested in. It defines the boundaries of our view.

*   **World Coordinates:** Objects in a scene are defined using world coordinates (x, y, z).
*   **Viewing Window Coordinates:** The viewing window is also defined in world coordinates. It represents a rectangular region in 3D space.

Any part of an object that lies *outside* this viewing window is a candidate for clipping.

## Basic Clipping Idea

The fundamental idea of clipping is to determine whether a geometric primitive (like a line segment or a polygon) intersects with the viewing window.

*   **Completely Inside:** If the entire primitive is within the window, we keep it.
*   **Completely Outside:** If the entire primitive is outside the window, we discard it.
*   **Partially Inside/Outside:** This is where clipping gets interesting. If the primitive crosses the boundary of the window, we need to calculate the new endpoints of the primitive that lie *inside* the window.

## Clipping Lines

Line clipping is a common problem. Consider a line segment defined by two endpoints, P1 and P2. To clip this line against a rectangular window, we check if these endpoints are inside or outside.

*   **Endpoints Inside:** If both P1 and P2 are inside the window, the entire line is visible.
*   **One Endpoint Inside:** If one endpoint is inside and the other is outside, the line segment intersects the window boundary. We need to calculate the intersection point and keep only the part of the line from the inside endpoint to the intersection point.
*   **Both Endpoints Outside:** This can be more complex. The line might still pass *through* the window. We need algorithms to determine if there's an intersection and, if so, where.

### Cohen-Sutherland Line Clipping (Conceptual)

A classic algorithm for line clipping is the Cohen-Sutherland algorithm. It uses **outcodes** to quickly determine if a line is entirely inside or outside the clipping window.

Imagine dividing the 2D space around the clipping window into nine regions. Each endpoint of a line is assigned a 4-bit outcode based on its position relative to the window's boundaries (Top, Bottom, Right, Left).

*   **`0000` (0):** The point is inside the window.
*   **`0001` (1):** The point is to the right of the window.
*   **`0010` (2):** The point is to the left of the window.
*   **`0100` (4):** The point is above the window.
*   **`1000` (8):** The point is below the window.

**How it works:**

1.  **Trivial Accept:** If both endpoints have an outcode of `0000`, the line is entirely inside and accepted.
2.  **Trivial Reject:** If the bitwise AND of the two outcodes is *not* `0000`, it means both points are on the same "outside" side of at least one boundary (e.g., both are above the top edge). The line is entirely outside and rejected.
3.  **Clipping Required:** If neither of the above conditions is met, the line might intersect the window. The algorithm then iteratively clips the line against each boundary it crosses until the remaining portion is either trivially accepted or rejected.

## Clipping Polygons

Clipping polygons (like triangles or squares) is similar but involves clipping against each edge of the clipping window individually. Algorithms like the Sutherland-Hodgman polygon clipping algorithm are used here.

The Sutherland-Hodgman algorithm clips a subject polygon against a clip polygon (which is typically rectangular). It processes the subject polygon against each edge of the clip polygon one by one. For each edge, it takes the output of the previous clipping stage and clips it against the current edge, producing a new output polygon.

When clipping a polygon edge against a window edge, we consider the vertices of the polygon:

*   **Inside to Inside:** The segment connecting the two inside vertices is kept.
*   **Inside to Outside:** The segment from the inside vertex to the intersection point with the window edge is kept.
*   **Outside to Outside:** This segment is discarded.
*   **Outside to Inside:** The segment from the intersection point with the window edge to the inside vertex is kept.

## Necessity of Clipping

Without clipping, your graphics system would have to perform calculations and rendering for objects that will never be seen. This is inefficient. Clipping acts as a crucial gatekeeper, ensuring that only relevant geometry proceeds through the rendering pipeline, leading to faster and more accurate visual output. It's a fundamental step in transforming the vast world our scene exists in into the limited view we see on our screens.

## Supports

- [[skills/digital-media/computer-graphics/viewing-and-clipping/microskills/clipping-concepts|Clipping Concepts]]
