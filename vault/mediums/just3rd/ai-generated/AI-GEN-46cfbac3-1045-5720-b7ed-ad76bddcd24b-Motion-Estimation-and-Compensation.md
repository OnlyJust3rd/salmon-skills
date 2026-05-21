---
type: "medium"
title: "Motion Estimation and Compensation: Understanding Video Compression"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/creative-media/graphics-media/image-compression/microskills/motion-estimation-and-compensation|motion-estimation-and-compensation]]"
---
# Motion Estimation and Compensation: Understanding Video Compression

In the realm of image compression, especially within video formats like MPEG, understanding how motion is handled is crucial. This lesson focuses on **Motion Estimation and Compensation**, key techniques that enable efficient video compression by exploiting the redundancy present when objects move between frames.

## The Core Idea: Predicting and Reusing

When we watch a video, it's essentially a sequence of still images (frames) displayed rapidly. If an object moves from one frame to the next, there's a lot of similarity between the two frames. Instead of storing every pixel of the new frame from scratch, we can leverage this similarity.

Motion estimation and compensation work together to achieve this:

1.  **Motion Estimation:** This is the process of figuring out *how* and *where* things have moved from one frame to another. Think of it like tracking an object.
2.  **Motion Compensation:** Once we know the movement, we can use this information to reconstruct the current frame using parts of a previous (or future) frame, rather than coding the entire new frame.

### Why is this important for compression?

By predicting areas that are likely to be the same as in a previous frame, we only need to store the *differences* or the *motion vector* itself, which is much smaller than storing the entire block of pixels. This dramatically reduces the amount of data needed to represent the video.

## Motion Estimation: Finding the Movement

Imagine a small block of pixels in the current frame. Motion estimation tries to find the best matching block in a reference frame (usually a previous frame).

### How it Works (Conceptually)

1.  **Divide and Conquer:** The current frame is divided into small blocks (e.g., 16x16 pixels).
2.  **Search:** For each block in the current frame, the algorithm searches within a defined area (the "search window") in the reference frame for the block that is most similar.
3.  **Motion Vector:** The difference in position between the block in the current frame and its best match in the reference frame is recorded. This difference is called the **motion vector**. It tells us how many pixels horizontally and vertically the block has moved.

#### Example

Let's say a block in the current frame at position (100, 150) has a best match at position (90, 145) in the previous frame. The motion vector would be (-10, -5), indicating the block moved 10 pixels to the left and 5 pixels up.

### Common Search Patterns

To make motion estimation faster, various search patterns are used instead of checking every single possible position. Common ones include:

*   **Full Search:** Checks every possible location within the search window. Most accurate but slowest.
*   **Three-Step Search (TSS):** Starts with a large step size and progressively reduces it, checking a limited number of points. Faster than full search.
*   **Diamond Search (DS):** Uses a diamond-shaped pattern to search.

## Motion Compensation: Using the Prediction

Once motion vectors are determined, motion compensation uses this information to reconstruct frames more efficiently.

### Types of Prediction

*   **Intra-frame Compression (I-frames):** These are independently coded frames. They don't rely on other frames and act as reference points. They are like full snapshots.
*   **Inter-frame Compression (P-frames and B-frames):** These frames rely on other frames for coding.
    *   **P-frames (Predicted frames):** These frames are predicted from *previous* I or P frames using motion estimation. If a block hasn't moved or moved predictably, only the motion vector and a small difference (residual) are stored.
    *   **B-frames (Bi-predictive frames):** These are the most advanced. They can be predicted from *both previous and future* I or P frames. This allows for even higher compression ratios, especially for objects moving towards or away from the camera.

### How Compensation Works with Motion Vectors

For a P-frame, when reconstructing a block:

1.  The encoder looks up the motion vector for that block.
2.  It goes to the reference frame and retrieves the block at the position indicated by the motion vector.
3.  This retrieved block is the predicted block.
4.  The encoder then calculates the *difference* between the actual block in the current frame and this predicted block. This difference is called the **residual**.
5.  Instead of sending the whole block, the encoder sends the motion vector and the residual (if it's not zero).

#### Example

If a block of 100 pixels is nearly identical in the previous frame, motion estimation finds a motion vector of (0,0) (no movement). If there are only 5 pixels that are different, the encoder sends the motion vector (0,0) and the 5 different pixels (the residual). This is much less data than sending all 100 pixels.

## Efficiency in MPEG

MPEG standards (like MPEG-1, MPEG-2, MPEG-4, H.264/AVC, H.265/HEVC) extensively use motion estimation and compensation to achieve high compression ratios.

*   **Intra-frame (I-frames):** Provide anchor points and are heavily compressed using spatial prediction (within the frame).
*   **Inter-frame (P-frames and B-frames):** Exploit temporal redundancy (between frames).
    *   **Motion Estimation:** Finds efficient ways to describe movement.
    *   **Motion Compensation:** Uses these descriptions to reconstruct frames by reusing data from reference frames, encoding only the differences and motion information.
    *   **B-frames:** Offer the highest compression because they can look both forward and backward in time for the best prediction.

By intelligently predicting and reusing information, motion estimation and compensation are fundamental to making video files manageable for storage and transmission.

## Supports

- [[skills/creative-media/graphics-media/image-compression/microskills/motion-estimation-and-compensation|Motion Estimation and Compensation]]
