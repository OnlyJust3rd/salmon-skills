---
type: "medium"
title: "Overlap Test: Detecting Collisions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/digital-media/game-development/game-physics/microskills/overlap-test|overlap-test]]"
learning-time-in-minutes: 4
---
# Overlap Test: Detecting Collisions

In game development, a crucial part of making objects interact is knowing when they touch or overlap. This is where the **Overlap Test** comes in. It's a fundamental technique for **Collision Detection**, allowing your game to react when two or more objects occupy the same space. Understanding how to perform an overlap test is a key step in applying collision response concepts.

## What is an Overlap Test?

An overlap test is a mathematical or geometric check to determine if two or more shapes (representing your game objects) are intersecting. This is the very first step before you can decide what happens next, like bouncing an object or triggering an event.

Think of it like this: Imagine you have two players in a game, represented by circles. An overlap test would be checking if those circles are currently occupying the same area on the screen.

## Common Shapes for Overlap Tests

In games, objects are often simplified into basic geometric shapes for collision detection. The most common ones include:

*   **Points:** The simplest form, just a single coordinate.
*   **Circles (or Spheres in 3D):** Defined by a center point and a radius.
*   **Rectangles (or AABBs - Axis-Aligned Bounding Boxes):** Defined by their top-left and bottom-right corners, or by their center and width/height. AABBs are particularly common because they are fast to check.
*   **Polygons:** More complex shapes defined by a series of connected points.

## How Overlap Tests Work (Examples)

The specific method for an overlap test depends on the shapes involved. Here are a couple of common examples:

### 1. Circle-Circle Overlap Test

This is a very common and relatively simple overlap test.

**Concept:** Two circles overlap if the distance between their centers is less than or equal to the sum of their radii.

Let:
*   Circle A have center $(x_A, y_A)$ and radius $r_A$.
*   Circle B have center $(x_B, y_B)$ and radius $r_B$.

The distance between the centers can be calculated using the distance formula:
$$
d = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}
$$

The condition for overlap is:
$$
d \le r_A + r_B
$$

For efficiency, especially in real-time games, we often avoid the square root calculation by comparing the squared distance:
$$
(x_B - x_A)^2 + (y_B - y_A)^2 \le (r_A + r_B)^2
$$

**Example:**

*   Circle A: Center (2, 3), Radius 4
*   Circle B: Center (7, 6), Radius 3

Distance squared: $(7 - 2)^2 + (6 - 3)^2 = 5^2 + 3^2 = 25 + 9 = 34$
Sum of radii squared: $(4 + 3)^2 = 7^2 = 49$

Since $34 \le 49$, the circles overlap.

### 2. Axis-Aligned Bounding Box (AABB) Overlap Test

AABBs are rectangles whose sides are parallel to the coordinate axes. They are very efficient for overlap testing.

**Concept:** Two AABBs overlap if they overlap on both the X-axis and the Y-axis.

Let:
*   AABB A be defined by `minX_A`, `minY_A` (bottom-left) and `maxX_A`, `maxY_A` (top-right).
*   AABB B be defined by `minX_B`, `minY_B` (bottom-left) and `maxX_B`, `maxY_B` (top-right).

Two AABBs do **not** overlap if any of these conditions are true:
*   A is entirely to the left of B: `maxX_A < minX_B`
*   A is entirely to the right of B: `minX_A > maxX_B`
*   A is entirely below B: `maxY_A < minY_B`
*   A is entirely above B: `minY_A > maxY_B`

Therefore, for overlap to occur, **none** of these conditions must be true. We can express this positively:

Two AABBs overlap if and only if:
*   `maxX_A >= minX_B` AND `minX_A <= maxX_B` (Overlap on X-axis)
*   `maxY_A >= minY_B` AND `minY_A <= maxY_B` (Overlap on Y-axis)

**Example:**

*   AABB A: minX=1, minY=1, maxX=5, maxY=5
*   AABB B: minX=4, minY=3, maxX=7, maxY=7

Check X-axis:
*   `maxX_A >= minX_B` is $5 \ge 4$ (True)
*   `minX_A <= maxX_B` is $1 \le 7$ (True)
   => Overlap on X-axis.

Check Y-axis:
*   `maxY_A >= minY_B` is $5 \ge 3$ (True)
*   `minY_A <= maxY_B` is $1 \le 7$ (True)
   => Overlap on Y-axis.

Since both axes show overlap, the AABBs overlap.

## Pseudocode Example (AABB Overlap)

Here’s a simplified pseudocode function to check for AABB overlap:

```pseudocode
function checkAABBOverlap(aabbA, aabbB):
  // aabbA and aabbB are objects with properties: minX, minY, maxX, maxY

  // Check for non-overlap first (often simpler)
  if aabbA.maxX < aabbB.minX or \
     aabbA.minX > aabbB.maxX or \
     aabbA.maxY < aabbB.minY or \
     aabbA.minY > aabbB.maxY:
    return false // No overlap

  // If none of the non-overlap conditions are met, they must overlap
  return true
```

## Common Pitfalls and Considerations

*   **Floating-Point Precision:** When dealing with calculations involving decimals, be mindful of tiny inaccuracies. Sometimes, objects might appear to not overlap by a minuscule amount due to precision issues. This might require using a small epsilon value for comparisons.
*   **Performance:** For games with many objects, checking every pair of objects for collision can become very slow ($O(N^2)$ complexity). Techniques like spatial partitioning (e.g., quadtrees, octrees) are used to optimize this by only checking objects that are spatially close to each other.
*   **Shape Complexity:** More complex shapes like polygons require more intricate algorithms (e.g., Separating Axis Theorem for convex polygons). Stick to simpler shapes like AABBs or circles when possible for better performance.
*   **3D:** In 3D, you'll deal with spheres, boxes (OBBs - Oriented Bounding Boxes), and other 3D shapes. The principles are similar, but the math extends to three dimensions.

## Conclusion

The Overlap Test is your first line of defense in collision detection. By accurately determining if two game objects are intersecting, you lay the groundwork for creating dynamic and responsive game worlds. Mastering these basic tests for common shapes like circles and AABBs is fundamental to applying more advanced collision response techniques.

## Supports

- [[skills/digital-media/game-development/game-physics/microskills/overlap-test|Overlap Test]]
