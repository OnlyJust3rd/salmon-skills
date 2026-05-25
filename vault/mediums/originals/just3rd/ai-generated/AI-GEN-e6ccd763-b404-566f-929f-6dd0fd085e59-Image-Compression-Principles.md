---
type: "medium"
title: "Understanding Image Compression: The Basics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/digital-media/computer-graphics/image-compression/microskills/image-compression-principles|image-compression-principles]]"
related-skills:
  - "[[skills/digital-media/computer-graphics/image-compression/image-compression|image-compression]]"
learning-time-in-minutes: 4
---
# Understanding Image Compression: The Basics

This lesson introduces the fundamental principles of **Image Compression**, a key aspect of **Image and MPEG Compression**. Our goal is to understand how we can reduce the size of digital image files without significantly impacting their visual quality.

## Why Do We Need Image Compression?

Digital images, especially high-resolution ones, can take up a lot of storage space. Transmitting large image files over the internet or networks can be slow and costly. Image compression techniques aim to solve these problems by making image files smaller.

## Core Concepts in Image Compression

At its heart, image compression works by removing or reducing redundant information in an image. Think of it like summarizing a long story – you keep the important parts and leave out less critical details to make it shorter.

Here are some fundamental concepts:

### Redundancy

Redundancy is the presence of duplicate or predictable information within an image. There are several types of redundancy:

*   **Spatial Redundancy:** This refers to the fact that neighboring pixels in an image often have similar colors or intensity values. For example, in a clear blue sky, many adjacent pixels will have very similar blue values.
    *   **Example:** Imagine a picture of a white wall. Many pixels next to each other will all be white. Instead of storing "white" for each of those pixels individually, compression can represent a large block of white pixels more efficiently.

*   **Spectral Redundancy:** This applies to images with multiple color channels (like Red, Green, Blue). Often, the information in one channel is highly correlated with the information in another channel.
    *   **Example:** In many natural scenes, the brightness of a pixel is often similar across its red, green, and blue components.

*   **Psychovisual Redundancy:** Our eyes and brains are not equally sensitive to all types of visual information. Compression can exploit this by reducing or discarding information that is less noticeable to the human visual system.
    *   **Example:** We are generally less sensitive to subtle changes in color than we are to changes in brightness. We are also less sensitive to fine details in very bright or very dark areas of an image.

### Lossless vs. Lossy Compression

This is a crucial distinction:

*   **Lossless Compression:** This type of compression reduces file size without losing any original data. When you decompress a losslessly compressed image, you get an exact replica of the original. This is important for applications where perfect accuracy is critical, like medical imaging or archival purposes.
    *   **Analogy:** Zipping a text document. When you unzip it, you get the exact same document back.
    *   **Common Algorithms:** Run-Length Encoding (RLE), Lempel-Ziv (LZ) variants (used in PNG).

*   **Lossy Compression:** This method achieves much higher compression ratios by discarding some of the original image data. The data that is removed is typically information that is less perceptible to the human eye. While the decompressed image is not identical to the original, the differences are often imperceptible or acceptable for many applications, like web images or digital photography.
    *   **Analogy:** Summarizing a book. You get the main story, but some details might be omitted.
    *   **Common Algorithms:** JPEG, WebP.

### Key Terms to Remember

Here are some terms you'll encounter as you explore image compression further:

*   **Pixel:** The smallest controllable element of a picture represented on the screen.
*   **Color Depth:** The number of bits used to represent the color of a single pixel. Higher color depth means more colors but also larger file sizes.
*   **Quantization:** A process in lossy compression where the range of color or brightness values is reduced. This is where information is actually discarded.
*   **Entropy Coding:** A technique used in both lossless and lossy compression to represent frequently occurring data symbols with shorter codes and less frequent symbols with longer codes. This is a way to efficiently encode the data after redundancy has been reduced.

## Common Image File Formats and Compression

Different image file formats use different compression techniques:

*   **JPEG (Joint Photographic Experts Group):** The most common format for photographic images. It uses **lossy compression**. It's excellent for complex images with smooth color gradients.
*   **PNG (Portable Network Graphics):** Uses **lossless compression**. It's great for graphics with sharp lines, text, and areas of solid color, and it supports transparency.
*   **GIF (Graphics Interchange Format):** Also uses **lossless compression**, but it's limited to 256 colors. It's often used for simple animations and logos.
*   **BMP (Bitmap):** Typically uncompressed or uses very simple lossless compression, resulting in large file sizes.

Understanding these core principles lays the groundwork for grasping how more complex compression systems, like those used in video (MPEG), function.

## Supports

- [[skills/digital-media/computer-graphics/image-compression/microskills/image-compression-principles|Image Compression Principles]]
