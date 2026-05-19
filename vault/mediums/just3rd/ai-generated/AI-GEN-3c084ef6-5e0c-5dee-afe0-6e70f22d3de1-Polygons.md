---
type: "medium"
title: "Understanding Polygons in Geometric Representation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/geometric-representation/microskills/polygons|Polygons]]"
---
# Understanding Polygons in Geometric Representation

In computer graphics and geometry, we build complex shapes from simpler building blocks. These basic shapes are called geometric primitives. One of the most fundamental and widely used primitives is the **polygon**.

## What is a Polygon?

A polygon is a **closed two-dimensional shape** made up of straight line segments. Think of it as a "many-sided" shape. The word "polygon" comes from Greek words: "poly" meaning "many" and "gon" meaning "angle."

Here are the key characteristics of a polygon:

*   **Closed Shape:** The line segments connect end-to-end, forming a complete loop with no gaps.
*   **Straight Sides:** Polygons are formed exclusively by straight line segments, called **edges**.
*   **Vertices:** The points where the line segments meet are called **vertices**. A polygon with 'n' sides will have 'n' vertices.
*   **Planar:** Polygons exist on a flat surface (a plane).

### Key Terms to Remember

*   **Edge:** A straight line segment forming a side of the polygon.
*   **Vertex (plural: Vertices):** A point where two edges meet.
*   **Interior Angle:** The angle formed inside the polygon at a vertex.
*   **Exterior Angle:** The angle formed outside the polygon at a vertex, between one edge and the extension of the adjacent edge.

## Examples of Polygons

You encounter polygons every day!

*   **Triangle:** A polygon with 3 sides and 3 vertices.
*   **Square:** A polygon with 4 equal sides and 4 right angles.
*   **Rectangle:** A polygon with 4 sides where opposite sides are equal and parallel, and all angles are right angles.
*   **Pentagon:** A polygon with 5 sides and 5 vertices.
*   **Hexagon:** A polygon with 6 sides and 6 vertices.
*   **Octagon:** A polygon with 8 sides and 8 vertices.

These are just a few common examples. Any closed shape with straight sides is a polygon.

## Types of Polygons

Polygons can be classified in a couple of ways:

### By Number of Sides

As seen in the examples above, we name polygons based on the number of their sides and vertices:

| Name      | Number of Sides | Number of Vertices |
| :-------- | :-------------- | :----------------- |
| Triangle  | 3               | 3                  |
| Quadrilateral | 4               | 4                  |
| Pentagon  | 5               | 5                  |
| Hexagon   | 6               | 6                  |
| Heptagon  | 7               | 7                  |
| Octagon   | 8               | 8                  |
| Nonagon   | 9               | 9                  |
| Decagon   | 10              | 10                 |

### By Shape Characteristics

We can also categorize polygons based on their angles and side lengths:

*   **Convex Polygon:** A polygon where all interior angles are less than 180 degrees. If you draw a line segment between any two points inside a convex polygon, the entire segment will remain inside the polygon. All the examples above (triangle, square, rectangle, pentagon, etc.) are typically convex.

    > **Example:** A regular hexagon is a convex polygon.
*   **Concave Polygon (or Non-convex Polygon):** A polygon that has at least one interior angle greater than 180 degrees. A concave polygon has an "indentation." If you draw a line segment between two points inside a concave polygon, part of that segment might fall outside the polygon.

    > **Example:** Imagine a star shape. The points of the star are vertices with angles less than 180 degrees, but the "dents" between the points have interior angles greater than 180 degrees, making the overall shape concave.

*   **Regular Polygon:** A polygon that is both **equilateral** (all sides are equal in length) and **equiangular** (all interior angles are equal in measure). Squares and equilateral triangles are examples of regular polygons.

*   **Irregular Polygon:** A polygon that is not regular. Its sides and angles can be of different measures.

## Why are Polygons Important in Computer Graphics?

Polygons are the fundamental building blocks for representing almost any 3D object in computer graphics. Complex shapes are broken down into a mesh of many small polygons, most commonly triangles. By defining the vertices of these polygons, we can define the shape, surface, and orientation of objects that appear on our screens.

Understanding polygons is the first step in grasping how digital images and 3D models are constructed.

## Supports

- [[skills/creative-media/graphics-media/geometric-representation/microskills/polygons|Polygons]]
