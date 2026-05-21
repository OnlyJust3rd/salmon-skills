---
type: "medium"
title: "Motion Vectors: Tracking Movement in Videos"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/multimedia-compression/microskills/motion-vectors-in-temporal-redundancy|motion-vectors-in-temporal-redundancy]]"
---
# Motion Vectors: Tracking Movement in Videos

When we watch videos, things move! People walk, cars drive, and the camera might pan. Video compression techniques are designed to efficiently store these moving images. One key concept that helps us do this is **motion vectors**, which are central to understanding how temporal redundancy is exploited.

This lesson focuses on how motion vectors work and their role in reducing the amount of data needed to represent video.

## The Problem: Redundancy in Video

Videos are essentially a sequence of still images called frames, displayed rapidly. If the content of consecutive frames is very similar, we're repeating a lot of information. This similarity is called **redundancy**.

*   **Spatial Redundancy:** Within a single frame, large areas might have the same color or texture. (e.g., a clear blue sky, a brick wall). This is tackled by spatial compression techniques within each frame.
*   **Temporal Redundancy:** Between consecutive frames, large portions of the image might remain unchanged or only change slightly due to motion. (e.g., a person standing still in front of a static background, a car moving slightly). This is where motion vectors come in.

## Inter-Frame Prediction: The Core Idea

Instead of encoding every pixel of every frame from scratch, video compression often uses **inter-frame prediction**. This means that a frame (or parts of it) is predicted based on information from other frames.

There are two main types of frames used in prediction:

*   **I-frames (Intra-coded frames):** These are encoded independently, like a JPEG image. They don't rely on any other frames. They serve as reference points.
*   **P-frames (Predicted frames):** These frames are encoded by referencing a *previous* frame (usually an I-frame or another P-frame). The encoder finds blocks of pixels in the previous frame that are similar to blocks in the current frame and only encodes the *differences* and *motion information*.

## What are Motion Vectors?

Imagine a scene where a person walks across a static background.

In frame `n`, we have the person.
In frame `n+1`, the person has moved slightly to the right.

Instead of re-encoding the entire person in frame `n+1`, a more efficient approach is to:

1.  **Identify a block of pixels** in frame `n` that represents the person (or a part of them).
2.  **Determine how far this block has moved** to appear in frame `n+1`.

This "how far it has moved" information is captured by a **motion vector**. A motion vector is essentially a pair of numbers $(dx, dy)$ that indicates the horizontal ($dx$) and vertical ($dy$) displacement from a block's position in a reference frame to its corresponding position in the current frame.

### Example: Tracking a Ball

Consider a simple video of a red ball moving from left to right across a white background.

*   **Frame `n`:** The ball is at position (100, 50).
*   **Frame `n+1`:** The ball has moved to position (110, 50).

To encode frame `n+1` efficiently using inter-frame prediction:

1.  The encoder divides frame `n+1` into blocks.
2.  It finds a block in frame `n+1` that contains the ball.
3.  It looks for a similar block in frame `n`.
4.  It discovers that the block at (110, 50) in frame `n+1` is very similar to the block at (100, 50) in frame `n`.
5.  The **motion vector** is calculated:
    *   $dx = \text{current\_x} - \text{reference\_x} = 110 - 100 = 10$
    *   $dy = \text{current\_y} - \text{reference\_y} = 50 - 50 = 0$
    *   So, the motion vector is $(10, 0)$.

Instead of sending all the pixel data for the ball in frame `n+1`, the encoder sends:

*   A reference to frame `n`.
*   The motion vector $(10, 0)$.
*   The *difference* in pixels (if any) – in this case, perhaps the ball's color changed slightly, or it rotated. If the block from the previous frame is a perfect match, this difference could be zero.

## How Motion Vectors Enable Compression

By using motion vectors, we can achieve significant data reduction because:

1.  **Less Pixel Data:** We transmit pixel data only for the areas that have changed significantly or for blocks that couldn't be predicted well.
2.  **Motion Information is Small:** The motion vectors themselves are relatively small pieces of data. Transmitting $(10, 0)$ is much more efficient than transmitting all the pixel values for the ball.

## Beyond Simple Motion: The Reality

In real videos, motion is more complex:

*   **Objects are not rigid:** A person's arm moves independently of their body.
*   **Occlusion:** Objects can move behind other objects, meaning a block from the previous frame is no longer entirely visible.
*   **Deformation:** Objects stretch or shrink.
*   **Zoom and Rotation:** The camera or objects might zoom in/out or rotate.

Modern video codecs (like H.264, H.265, VP9) use sophisticated algorithms to:

*   **Divide frames into variable-sized blocks:** From large macroblocks (e.g., 16x16 pixels) down to small 4x4 blocks.
*   **Search for the best matching block:** This search can happen in a limited area around the expected position.
*   **Support multiple reference frames:** P-frames can reference any preceding I-frame or P-frame, not just the immediately preceding one.
*   **Introduce B-frames (Bi-predictive frames):** These can be predicted from *both* previous and future frames, offering even greater compression.

## Key Takeaways

*   Motion vectors are crucial for removing temporal redundancy in video compression.
*   They describe the displacement of blocks of pixels between frames.
*   By predicting frames from previous ones using motion vectors, we avoid re-encoding entire scenes, saving significant data.
*   The efficiency comes from sending motion information and small differences, rather than full pixel data for every frame.

## Supports

- [[skills/mathematics/multimedia-compression/microskills/motion-vectors-in-temporal-redundancy|Motion Vectors in Temporal Redundancy]]
