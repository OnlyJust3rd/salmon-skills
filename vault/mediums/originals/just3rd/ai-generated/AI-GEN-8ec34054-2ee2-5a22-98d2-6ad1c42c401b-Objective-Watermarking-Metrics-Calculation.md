---
type: "medium"
title: "Objective Watermarking Metrics Calculation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/watermarking-performance-and-attacks/microskills/objective-watermarking-metrics-calculation|objective-watermarking-metrics-calculation]]"
learning-time-in-minutes: 5
---
# Objective Watermarking Metrics Calculation

This lesson focuses on the practical calculation of key objective metrics used to evaluate the performance of watermarking techniques. These metrics help us quantify how well a watermark is embedded and how robust it is against various manipulations. We will cover Mean Squared Error (MSE), Peak Signal-to-Noise Ratio (PSNR), and Structural Similarity Index Measure (SSIM).

## Why These Metrics?

When we embed a watermark into an image, we want it to be imperceptible to the human eye and robust against attacks. Objective metrics provide a quantitative way to measure these qualities.

*   **Imperceptibility:** How much does the watermark degrade the original image quality?
*   **Robustness:** How well can the watermark survive common image manipulations (e.g., compression, resizing, filtering)?

While this lesson focuses on imperceptibility metrics, understanding them is crucial before simulating attacks, as the metrics will be used to evaluate the impact of those attacks on the watermarked image.

## Mean Squared Error (MSE)

MSE measures the average of the squares of the errors, which is the difference between the original image and the watermarked image. A lower MSE indicates that the watermarked image is closer to the original.

### Formula

For two images, $I$ (original) and $K$ (watermarked), of size $M \times N$:

$$
\text{MSE} = \frac{1}{MN} \sum_{i=0}^{M-1} \sum_{j=0}^{N-1} [I(i, j) - K(i, j)]^2
$$

Where:
*   $I(i, j)$ is the intensity of the pixel at row $i$ and column $j$ in the original image.
*   $K(i, j)$ is the intensity of the pixel at row $i$ and column $j$ in the watermarked image.

### Worked Calculation

Let's consider a tiny 2x2 grayscale image for simplicity.

**Original Image (I):**
```
100  120
150  200
```

**Watermarked Image (K):**
```
102  121
148  205
```

Here, $M=2$ and $N=2$.

1.  **Calculate the squared differences for each pixel:**
    *   $(100 - 102)^2 = (-2)^2 = 4$
    *   $(120 - 121)^2 = (-1)^2 = 1$
    *   $(150 - 148)^2 = (2)^2 = 4$
    *   $(200 - 205)^2 = (-5)^2 = 25$

2.  **Sum the squared differences:**
    $4 + 1 + 4 + 25 = 34$

3.  **Divide by the total number of pixels (M * N = 4):**
    $\text{MSE} = \frac{34}{4} = 8.5$

A lower MSE (closer to 0) means better imperceptibility.

## Peak Signal-to-Noise Ratio (PSNR)

PSNR is derived from MSE and is often used because it provides a more intuitive measure by relating the maximum possible power of a signal to the power of corrupting noise. It's expressed in decibels (dB). A higher PSNR indicates that the watermarked image is of higher quality (less noise/distortion).

### Formula

$$
\text{PSNR} = 10 \log_{10} \left( \frac{\text{MAX}_I^2}{\text{MSE}} \right)
$$

Where:
*   $\text{MAX}_I$ is the maximum possible pixel intensity value of the image (e.g., 255 for 8-bit grayscale images).

### Worked Calculation

Using the MSE of 8.5 calculated above, and assuming an 8-bit grayscale image where $\text{MAX}_I = 255$:

$$
\text{PSNR} = 10 \log_{10} \left( \frac{255^2}{8.5} \right)
$$
$$
\text{PSNR} = 10 \log_{10} \left( \frac{65025}{8.5} \right)
$$
$$
\text{PSNR} = 10 \log_{10} (7650)
$$
$$
\text{PSNR} \approx 10 \times 3.8837
$$
$$
\text{PSNR} \approx 38.84 \text{ dB}
$$

A common rule of thumb is that a PSNR above 30 dB is generally considered good for image quality, implying imperceptible differences.

## Structural Similarity Index Measure (SSIM)

SSIM is a more advanced metric that considers luminance, contrast, and structure. It aims to mimic how the human visual system perceives structural information. SSIM ranges from -1 to 1, where 1 indicates perfect similarity.

### Formula (Simplified Concept)

SSIM compares three components:
1.  **Luminance:** How similar are the average brightness levels?
2.  **Contrast:** How similar are the ranges of pixel values?
3.  **Structure:** How similar are the patterns of pixel arrangements, ignoring luminance and contrast?

The overall SSIM is a combination of these three measures. For two images $x$ and $y$:

$$
\text{SSIM}(x, y) = [l(x, y)]^\alpha [c(x, y)]^\beta [s(x, y)]^\gamma
$$

Where $l$, $c$, and $s$ are functions measuring luminance, contrast, and structure respectively, and $\alpha$, $\beta$, $\gamma$ are positive constants. A common setting is $\alpha = \beta = \gamma = 1$.

### Worked Calculation (Conceptual Example)

Let's consider comparing small patches.

**Patch 1 (Original):**
```
10 12
14 16
```

**Patch 2 (Watermarked):**
```
11 13
15 17
```

*   **Luminance:** The average intensity is slightly higher in Patch 2.
*   **Contrast:** The range of values is similar.
*   **Structure:** The overall pattern of increasing intensity from top-left to bottom-right is preserved.

In this case, SSIM would likely be very close to 1, indicating high similarity.

Now consider another comparison:

**Patch 1 (Original):**
```
10 12
14 16
```

**Patch 3 (Watermarked with noise):**
```
10 15
 8 16
```

*   **Luminance:** Averages might be close, but the local pixel values differ significantly.
*   **Contrast:** The spread of values might be altered.
*   **Structure:** The smooth progression is disrupted.

Here, SSIM would be significantly lower than 1, indicating poor structural similarity.

## Practical Application

In practice, you would use programming libraries (like OpenCV, scikit-image in Python) to compute these metrics.

### Python Example (Conceptual)

```python
import cv2
import numpy as np
from skimage.metrics import structural_similarity as ssim

# Load original and watermarked images
original_image = cv2.imread('original.png', cv2.IMREAD_GRAYSCALE)
watermarked_image = cv2.imread('watermarked.png', cv2.IMREAD_GRAYSCALE)

# Calculate MSE
mse = np.mean((original_image - watermarked_image) ** 2)
print(f"MSE: {mse}")

# Calculate PSNR
max_pixel = 255.0
psnr = cv2.PSNR(original_image, watermarked_image, maxPeakValue=max_pixel)
print(f"PSNR: {psnr} dB")

# Calculate SSIM
# For SSIM, it's often calculated on windows and averaged.
# scikit-image's function handles this.
# win_size must be odd and less than or equal to the image dimensions.
# Ensure images are of the same size.
if original_image.shape == watermarked_image.shape:
    ssim_score, _ = ssim(original_image, watermarked_image, full=True)
    print(f"SSIM: {ssim_score}")
else:
    print("Images must be of the same dimensions to calculate SSIM.")

```

## Conclusion

Understanding and calculating MSE, PSNR, and SSIM are fundamental steps in assessing the imperceptibility of your watermarking schemes. They provide objective benchmarks against which you can compare different watermarking algorithms and evaluate the impact of various attacks. As you move towards simulating attacks, these metrics will become your primary tools for quantifying the success or failure of an attack in degrading the watermark.

## Supports

- [[skills/computing/security-privacy/cybersecurity/watermarking-performance-and-attacks/microskills/objective-watermarking-metrics-calculation|Objective Watermarking Metrics Calculation]]
