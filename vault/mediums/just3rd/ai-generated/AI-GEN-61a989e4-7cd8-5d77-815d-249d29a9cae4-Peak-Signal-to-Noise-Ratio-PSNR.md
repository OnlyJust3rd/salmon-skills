---
type: "medium"
title: "Understanding Peak Signal-to-Noise Ratio (PSNR) for Watermarking"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/copyright-protection/microskills/peak-signal-to-noise-ratio-psnr|Peak Signal-to-Noise Ratio (PSNR)]]"
  - "[[skills/security/cybersecurity/watermarking-performance-and-attacks/microskills/peak-signal-to-noise-ratio-psnr|Peak Signal-to-Noise Ratio (PSNR)]]"
---
# Understanding Peak Signal-to-Noise Ratio (PSNR) for Watermarking

When we embed a watermark into an image or video, we're essentially adding some information to it. This process can slightly alter the original content. To understand how much the original content has been affected, we need objective metrics. Peak Signal-to-Noise Ratio (PSNR) is one of the most common objective measures used to evaluate the quality of reconstructed images or videos, and by extension, the performance of watermarking techniques.

In the context of watermarking, PSNR helps us quantify the difference between the original, unwatermarked image and the watermarked image (or the image after the watermark has been removed). A higher PSNR value indicates that the difference between the original and the processed image is smaller, meaning the watermarking process has introduced less distortion.

## How PSNR Works

PSNR is calculated using the Mean Squared Error (MSE) between the original and the watermarked image. MSE measures the average of the squared differences between the pixel values of the two images.

The formulas are:

**Mean Squared Error (MSE):**
\[
MSE = \frac{1}{MN} \sum_{i=0}^{M-1} \sum_{j=0}^{N-1} (I(i,j) - K(i,j))^2
\]
Where:
*   $M$ and $N$ are the dimensions of the image (height and width).
*   $I(i,j)$ is the pixel value of the original image at location $(i, j)$.
*   $K(i,j)$ is the pixel value of the watermarked image at location $(i, j)$.

**Peak Signal-to-Noise Ratio (PSNR):**
\[
PSNR = 10 \log_{10} \left( \frac{MAX_I^2}{MSE} \right)
\]
Where:
*   $MAX_I$ is the maximum possible pixel value of the image. For an 8-bit grayscale image, this is typically 255.

A higher PSNR value is better. It suggests that the watermark has been embedded with minimal impact on the visual quality of the original media.

## Practical Scenario: Evaluating a Robust Watermarking Algorithm

Imagine you've developed a watermarking algorithm designed to embed a copyright notice into digital photos. You want to test its performance. After embedding the watermark, you obtain a watermarked image.

Let's say you have an original image and its watermarked version. You can use a Python script with libraries like OpenCV or scikit-image to calculate the PSNR.

Consider these two small 3x3 grayscale images for simplicity:

**Original Image (I):**
```
100  120  140
160  180  200
220  240  250
```

**Watermarked Image (K) with slight changes:**
```
102  121  138
158  182  198
218  242  248
```

Calculating the MSE:
*   Squared differences: (100-102)^2=4, (120-121)^2=1, (140-138)^2=4, (160-158)^2=4, (180-182)^2=4, (200-198)^2=4, (220-218)^2=4, (240-242)^2=4, (250-248)^2=4.
*   Sum of squared differences = 4 + 1 + 4 + 4 + 4 + 4 + 4 + 4 + 4 = 37
*   MSE = 37 / (3 * 3) = 37 / 9 = 4.11

Assuming a maximum pixel value ($MAX_I$) of 255:
*   PSNR = $10 \log_{10} (255^2 / 4.11)$
*   PSNR = $10 \log_{10} (65025 / 4.11)$
*   PSNR = $10 \log_{10} (15821.17)$
*   PSNR $\approx 10 * 4.20 = 42.0$ dB

A PSNR of around 42 dB suggests that the watermark has been embedded with very little perceptible distortion. Generally, values above 30-35 dB are considered good for imperceptibility.

## Practice Task

Using a readily available image and a simple watermarking tool (or a script you've written), embed a watermark. Then, calculate the PSNR between the original image and the watermarked image using a programming language like Python and a library like `scikit-image` or `cv2`.

Here's a Python snippet using `scikit-image`:

```python
from skimage.metrics import peak_signal_noise_ratio
from skimage import io

# Load the original and watermarked images
original_image = io.imread('original.png')
watermarked_image = io.imread('watermarked.png')

# Calculate PSNR
# Assuming images are in the range [0, 255]
psnr_value = peak_signal_noise_ratio(original_image, watermarked_image, data_range=255)

print(f"PSNR: {psnr_value:.2f} dB")
```

## Self-Check Questions

1.  What does a higher PSNR value indicate about the quality of the watermarked image compared to the original?
2.  If the MSE between two images is very low, what can you say about their PSNR?
3.  Why is PSNR considered an *objective* metric?
4.  What is the role of $MAX_I$ in the PSNR formula?

## Supports

- [[skills/security/cybersecurity/copyright-protection/microskills/peak-signal-to-noise-ratio-psnr|Peak Signal-to-Noise Ratio (PSNR)]]
- [[skills/security/cybersecurity/watermarking-performance-and-attacks/microskills/peak-signal-to-noise-ratio-psnr|Peak Signal-to-Noise Ratio (PSNR)]]
