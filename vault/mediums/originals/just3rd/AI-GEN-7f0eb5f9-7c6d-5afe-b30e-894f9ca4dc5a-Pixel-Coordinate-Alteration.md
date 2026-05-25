---
type: "medium"
title: "Pixel Coordinate Alteration in Image Transformations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/digital-image-processing/microskills/pixel-coordinate-alteration|pixel-coordinate-alteration]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/digital-image-processing/digital-image-processing|digital-image-processing]]"
learning-time-in-minutes: 5
---
# Pixel Coordinate Alteration in Image Transformations

Understanding how pixel coordinates change is fundamental to applying spatial transformations like scaling, translation, and rotation to digital images. This lesson focuses on the core concept of pixel coordinate alteration, which directly impacts how an image appears after transformation.

## The Grid of Pixels

Imagine a digital image as a grid of tiny squares, each called a pixel. Every pixel has a unique position within this grid, defined by its coordinates. Conventionally, the top-left corner of the image is considered the origin (0,0). The x-axis typically runs horizontally to the right, and the y-axis runs vertically downwards.

*   An x-coordinate represents the horizontal position.
*   A y-coordinate represents the vertical position.

For example, in a 100x100 pixel image:
*   The top-left pixel is at (0, 0).
*   The bottom-right pixel is at (99, 99).
*   A pixel in the middle row, left column might be at (0, 50).
*   A pixel in the top row, middle column might be at (50, 0).

## How Transformations Shift Coordinates

Spatial transformations manipulate the positions of these pixels. When you perform a transformation, you're essentially calculating a *new* coordinate for each *original* pixel. This new coordinate determines where that pixel will be placed in the transformed image.

### Translation (Shifting)

Translation moves an image by a specified amount horizontally and vertically.

*   **Original Coordinate:** \( (x, y) \)
*   **Translation Vector:** \( (tx, ty) \)
*   **New Coordinate:** \( (x', y') = (x + tx, y + ty) \)

If you want to shift an image 10 pixels to the right and 5 pixels down:
*   \( tx = 10 \)
*   \( ty = 5 \)

A pixel originally at (20, 30) would move to:
\( (20 + 10, 30 + 5) = (30, 35) \)

### Scaling (Resizing)

Scaling changes the size of an image. It involves multiplying the original coordinates by a scaling factor. To keep the transformation centered, we often consider the image's center point.

*   **Original Coordinate:** \( (x, y) \)
*   **Scaling Factors:** \( (sx, sy) \) (e.g., \( sx = 2 \) to double width, \( sy = 0.5 \) to halve height)
*   **Center of Scaling:** \( (cx, cy) \) (often the image center)
*   **New Coordinate:** \( (x', y') \)

A common approach is:
1.  Translate the pixel so the center of scaling is at the origin: \( (x - cx, y - cy) \)
2.  Scale the translated coordinates: \( (sx * (x - cx), sy * (y - cy)) \)
3.  Translate back to the original reference frame: \( (sx * (x - cx) + cx, sy * (y - cy) + cy) \)

Let's say an image is 100x100, its center is (50, 50). We want to scale it by 2x ( \( sx = 2, sy = 2 \) ).
A pixel at (10, 20) would transform as follows:
1.  Translate to origin: \( (10 - 50, 20 - 50) = (-40, -30) \)
2.  Scale: \( (2 * -40, 2 * -30) = (-80, -60) \)
3.  Translate back: \( (-80 + 50, -60 + 50) = (-30, -10) \)

This implies the original pixel at (10, 20) will end up at (-30, -10) in the *scaled* coordinate system. However, in image processing, we often think about mapping *output* pixels back to *input* pixels. For a pixel in the *new*, larger image (say at (40, 40)), we'd calculate its corresponding original coordinate.

### Rotation

Rotation spins an image around a specific point (the center of rotation). This is mathematically more complex and involves trigonometry.

*   **Original Coordinate:** \( (x, y) \)
*   **Center of Rotation:** \( (cx, cy) \)
*   **Angle of Rotation:** \( \theta \) (usually in radians or degrees)
*   **New Coordinate:** \( (x', y') \)

The transformation involves translating to the origin, rotating, and translating back:
1.  Translate to origin: \( (x - cx, y - cy) \)
2.  Rotate:
    \( x_{rotated} = (x - cx) \cos(\theta) - (y - cy) \sin(\theta) \)
    \( y_{rotated} = (x - cx) \sin(\theta) + (y - cy) \cos(\theta) \)
3.  Translate back: \( x' = x_{rotated} + cx \)
    \( y' = y_{rotated} + cy \)

Let's consider rotating a pixel at (10, 0) around the origin (0,0) by 90 degrees clockwise. Here, \( \theta = -90^\circ \) or \( -\pi/2 \) radians.
*   \( \cos(-\pi/2) = 0 \)
*   \( \sin(-\pi/2) = -1 \)

Original pixel \( (x, y) = (10, 0) \)
Center \( (cx, cy) = (0, 0) \)

1.  Translate: \( (10 - 0, 0 - 0) = (10, 0) \)
2.  Rotate:
    \( x_{rotated} = 10 \cos(-\pi/2) - 0 \sin(-\pi/2) = 10(0) - 0(-1) = 0 \)
    \( y_{rotated} = 10 \sin(-\pi/2) + 0 \cos(-\pi/2) = 10(-1) + 0(0) = -10 \)
3.  Translate back: \( x' = 0 + 0 = 0 \)
    \( y' = -10 + 0 = -10 \)

So, a point at (10, 0) rotates to (0, -10). This demonstrates how angles and trigonometric functions change coordinates in a rotational manner.

## The "Inverse Mapping" Concept

In practice, when applying transformations to an image, it's often more efficient to work backward. Instead of figuring out where each *original* pixel goes, we consider each pixel in the *output* (transformed) image and calculate where it *came from* in the original image. This is called inverse mapping.

For an output pixel at \( (x', y') \), we calculate its corresponding original coordinate \( (x, y) \) using the inverse of the transformation equations. This is crucial because the calculated \( (x, y) \) might not be an exact integer. Image interpolation techniques (like nearest neighbor, bilinear, or bicubic interpolation) are then used to determine the pixel value at \( (x', y') \) based on the values of its neighboring pixels in the original image.

## Key Takeaways

*   Every pixel in a digital image has a coordinate \( (x, y) \).
*   Spatial transformations alter these coordinates.
*   Translation adds or subtracts values to x and y.
*   Scaling multiplies x and y by factors, often relative to a center point.
*   Rotation uses trigonometry to spin coordinates around a center point.
*   Understanding how coordinates shift is the first step to implementing image transformations.
*   Inverse mapping is often used to determine the source of pixels in the transformed image.

## Supports

- [[skills/digital-media/computer-graphics/digital-image-processing/microskills/pixel-coordinate-alteration|Pixel Coordinate Alteration]]
