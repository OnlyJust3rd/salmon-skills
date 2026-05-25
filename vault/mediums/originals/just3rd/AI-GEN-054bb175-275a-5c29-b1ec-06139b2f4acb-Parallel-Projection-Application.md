---
type: "medium"
title: "Applying Parallel Projection: Representing 3D Objects in 2D"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/perspective-projection/microskills/parallel-projection-application|parallel-projection-application]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/perspective-projection/perspective-projection|perspective-projection]]"
learning-time-in-minutes: 7
---
# Applying Parallel Projection: Representing 3D Objects in 2D

This lesson will guide you through the practical application of parallel projection to create a 2D representation of a 3D object. We'll focus on how to accurately convey the form and dimensions of a simple object using this fundamental technique.

## What is Parallel Projection?

Parallel projection is a method of creating a 2D image from a 3D object where the projection lines (lines connecting points on the object to their corresponding points on the projection plane) are all parallel to each other. Unlike perspective projection, parallel projection does not simulate how the human eye sees; objects do not appear smaller as they get further away. This characteristic makes it ideal for technical drawings where accurate measurements and proportions are crucial.

There are two main types of parallel projection commonly used:

*   **Orthographic Projection:** In this type, the projection lines are perpendicular to the projection plane. This results in true-size and shape representation of the object's faces that are parallel to the projection plane.
*   **Oblique Projection:** Here, the projection lines are not perpendicular to the projection plane. This allows for the visualization of one face of the object in true shape while projecting the other faces at an angle.

For this lesson, we will focus on applying the principles of orthographic projection to create multi-view drawings, a common application of parallel projection.

## Key Concepts for Application

When applying parallel projection to represent a 3D object, keep these in mind:

*   **Projection Plane:** This is the 2D surface onto which the 3D object is projected. Think of it as the "paper" you are drawing on.
*   **Projection Lines:** These are imaginary lines extending from each point on the 3D object to the projection plane. They are parallel to each other.
*   **View:** A specific 2D representation of the 3D object from a particular direction. Common views in orthographic projection are the front view, top view, and side view.

## Step-by-Step Application: Creating a Multi-View Drawing

Let's apply parallel projection to create a common multi-view drawing of a simple 3D object, such as a rectangular block with a cylindrical hole.

**Object:** A rectangular prism with dimensions 4 units wide, 6 units deep, and 3 units high. It has a cylindrical hole drilled through its center, from the front face to the back face, with a diameter of 2 units.

**Goal:** To create a 2D representation using the front, top, and right side views.

### Step 1: Define Your Views

We will create three primary views:

1.  **Front View:** Looking directly at the object from the front.
2.  **Top View:** Looking directly down on the object from above.
3.  **Right Side View:** Looking directly at the object from the right.

These views are arranged in a specific way to maintain spatial relationships.

### Step 2: Establish Projection Lines and Relationships

Imagine projecting lines from the 3D object onto each of the projection planes. The key is that these projection lines are parallel.

*   **Height** will be consistent between the front view and the side view.
*   **Width** will be consistent between the front view and the top view.
*   **Depth** will be consistent between the top view and the side view.

### Step 3: Sketch the Front View

*   Draw a rectangle representing the front face of the prism. Its width will be 4 units and its height will be 3 units.
*   Since the cylindrical hole goes from front to back, it will appear as a rectangle within the front view. The width of this hole's representation will be its diameter, 2 units.
*   To position the hole centrally, measure half the width (2 units) from each side of the 4-unit width and draw vertical lines for the hole's edges.
*   The height of the hole's representation will be the full height of the prism, 3 units, as it passes all the way through.

### Step 4: Sketch the Top View

*   Project the width of the object from the front view upwards. This will be 4 units.
*   Project the depth of the object. This will be 6 units.
*   Draw a rectangle representing the top face of the prism. Its dimensions are 4 units wide by 6 units deep.
*   The cylindrical hole passes through from front to back. In the top view, it will appear as a rectangle with a width equal to its diameter (2 units) and a length equal to the depth of the prism (6 units).
*   To position the hole centrally, consider the width. The total width is 4 units, and the hole is 2 units wide. This leaves 1 unit of material on either side of the hole. So, measure 1 unit in from each side edge of the 4-unit width and draw the edges of the hole.
*   The hole extends for the full depth of the object (6 units).

### Step 5: Sketch the Right Side View

*   Project the height of the object from the front view across to the side view. This will be 3 units.
*   Project the depth of the object from the top view across to the side view. This will be 6 units.
*   Draw a rectangle representing the right side face of the prism. Its dimensions are 6 units deep by 3 units high.
*   The cylindrical hole passes through from front to back. In the right side view, it will appear as a rectangle. The height of this representation will be the height of the prism (3 units). The width of this representation will be the diameter of the hole (2 units).
*   To position the hole centrally, consider the depth. The total depth is 6 units, and the hole is effectively a slot of 2 units wide running through it. Looking from the side, the hole will be visible as a 3-unit high by 2-unit wide rectangle centered within the 6-unit depth. Measure (6-2)/2 = 2 units from the front edge and draw the 2-unit width of the hole's representation. Its height is 3 units.

### Step 6: Add Dimensions and Hidden Lines (Optional but Recommended)

*   Add dimension lines to your views to indicate the measurements of the object.
*   Where features are hidden from view (like the edges of the cylindrical hole in the top and side views if it were only partially visible), you would typically use dashed lines. In this case, since the hole goes all the way through, it's visible in all relevant projections.

### Visualization

By arranging these views correctly (e.g., front view centered above the top view, and right side view to the right of the front view), you create a standard orthographic projection that allows anyone to reconstruct the 3D object's form and dimensions accurately.

## Common Mistakes to Avoid

*   **Inconsistent Proportions:** Ensure that dimensions are correctly transferred between views. The height in the front view must match the height in the side view. The width in the front view must match the width in the top view. The depth in the top view must match the depth in the side view.
*   **Incorrect Hole Representation:** The shape of the hole in each view depends on how it intersects with that view's projection plane. A cylindrical hole passing straight through will appear as a rectangle in orthographic views.
*   **Misaligned Views:** The relative positioning of the views is critical for understanding the object's spatial relationships.

By practicing this step-by-step process with different simple 3D objects, you will build proficiency in applying parallel projection techniques for clear and accurate 2D representations.

## Supports

- [[skills/digital-media/computer-graphics/perspective-projection/microskills/parallel-projection-application|Parallel Projection Application]]
