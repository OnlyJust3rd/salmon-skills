---
type: "medium"
title: "Implementing Basic Image Watermarking"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/digital-watermarking/microskills/image-watermarking-implementation|image-watermarking-implementation]]"
---
# Implementing Basic Image Watermarking

This lesson focuses on the practical implementation of image watermarking techniques. We'll explore how to embed and extract a simple watermark into a digital image using programming. This skill is foundational for understanding more complex digital watermarking algorithms.

## Core Idea: Pixel Manipulation for Watermarking

The simplest form of image watermarking involves directly modifying the pixel values of a host image to embed a watermark. For this practical demonstration, we'll consider embedding a binary watermark (e.g., a black and white image or a pattern of 0s and 1s) into a grayscale host image.

The core idea is to slightly alter pixel intensities in the host image based on the watermark data. When the watermark is to be extracted, we'll detect these alterations.

## A Simple Embedding Technique: Least Significant Bit (LSB) Modification

One straightforward approach is to modify the Least Significant Bit (LSB) of the pixel values in the host image. The LSB contributes the least to the overall intensity of a pixel. By changing it, we introduce a very subtle change that is often imperceptible to the human eye.

### How LSB Modification Works:

1.  **Host Image:** Imagine a pixel in a grayscale image has an intensity value between 0 and 255. In binary, this value can be represented by 8 bits. For example, a pixel with intensity 150 might be `10010110` in binary.
2.  **Watermark:** Our watermark can also be represented in binary. For simplicity, let's say we have a single bit to embed. If the watermark bit is '1', we want to ensure the LSB of the host pixel is also '1'. If the watermark bit is '0', we want the LSB to be '0'.
3.  **Embedding:**
    *   If the host pixel's LSB is already the same as the watermark bit, we do nothing.
    *   If the host pixel's LSB is different from the watermark bit, we flip the LSB of the host pixel. This is achieved by adding or subtracting 1 from the pixel's intensity value.

### Pseudocode for Embedding:

```
function embed_watermark(host_image, watermark_data):
    watermarked_image = copy(host_image)
    watermark_index = 0
    for each pixel in watermarked_image:
        if watermark_index < length(watermark_data):
            watermark_bit = watermark_data[watermark_index]
            pixel_value = get_pixel_intensity(pixel)
            pixel_binary = to_binary(pixel_value)

            # Get the LSB of the pixel
            lsb = pixel_binary[last_bit_position]

            # If LSB needs to be changed to match watermark_bit
            if lsb != watermark_bit:
                if watermark_bit == '1':
                    # Ensure LSB is 1
                    pixel_value = pixel_value | 1 # Bitwise OR with 1
                else:
                    # Ensure LSB is 0
                    pixel_value = pixel_value & ~1 # Bitwise AND with NOT 1 (clears the last bit)
                set_pixel_intensity(pixel, pixel_value)
            watermark_index += 1
        else:
            break # All watermark bits embedded
    return watermarked_image
```

## A Simple Extraction Technique: LSB Reading

Extracting the watermark involves reversing the embedding process. We read the LSBs from the modified pixels in the same order they were embedded.

### How LSB Reading Works:

1.  **Iterate:** Go through the pixels of the watermarked image in the same order as during embedding.
2.  **Extract LSB:** For each pixel, extract its LSB. This can be done using a bitwise AND operation with 1 (`pixel_value & 1`).
3.  **Reconstruct:** The extracted LSBs, when collected in order, form the original watermark data.

### Pseudocode for Extraction:

```
function extract_watermark(watermarked_image, watermark_length):
    extracted_watermark_bits = []
    current_bit_count = 0
    for each pixel in watermarked_image:
        if current_bit_count < watermark_length:
            pixel_value = get_pixel_intensity(pixel)
            lsb = pixel_value & 1 # Extract the LSB
            append lsb to extracted_watermark_bits
            current_bit_count += 1
        else:
            break # Extracted enough bits for the watermark
    return extracted_watermark_bits
```

## Practical Implementation Notes

When implementing this in a programming language like Python with libraries like OpenCV or Pillow:

*   **Image Loading:** You'll need to load your host image and potentially create a simple binary image for your watermark.
*   **Pixel Access:** Libraries provide methods to access and modify individual pixel values.
*   **Color Images:** For color images (RGB), you can choose to embed the watermark into one of the color channels (e.g., the blue channel) or distribute it across all channels. Embedding into the blue channel often leads to less visual distortion.
*   **Watermark Data Representation:** You can represent your watermark as a 2D array of 0s and 1s or directly as a string of bits.
*   **Robustness vs. Imperceptibility:** LSB embedding is highly imperceptible but not very robust. Operations like compression, resizing, or filtering can easily destroy the embedded watermark. More advanced techniques are needed for robustness.

## Example Scenario

Imagine you have a company logo (your host image) and you want to embed a serial number (your watermark) to track its usage.

1.  **Load Logo:** Load the logo image.
2.  **Prepare Serial Number:** Convert the serial number into a binary sequence.
3.  **Embed:** Iterate through the pixels of the logo, replacing the LSB of each pixel with the corresponding bit from the serial number binary sequence.
4.  **Save Watermarked Logo:** Save the modified logo.
5.  **Verification:** Later, if you suspect unauthorized use, you can load the logo, extract the LSBs from its pixels, and reconstruct the serial number to verify its origin.

This practical application of LSB modification provides a hands-on understanding of how data can be embedded into an image at a very granular level. It serves as a stepping stone to exploring more sophisticated and robust watermarking techniques.

## Supports

- [[skills/security/cybersecurity/digital-watermarking/microskills/image-watermarking-implementation|Image Watermarking Implementation]]
