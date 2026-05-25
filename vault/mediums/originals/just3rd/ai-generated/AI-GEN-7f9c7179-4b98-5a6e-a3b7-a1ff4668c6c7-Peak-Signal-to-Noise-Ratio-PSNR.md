---
type: "medium"
title: "Peak Signal-to-Noise Ratio (PSNR) for Watermarking Evaluation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/copyright-protection/microskills/peak-signal-to-noise-ratio-psnr|peak-signal-to-noise-ratio-psnr]]"
learning-time-in-minutes: 4
---
# Peak Signal-to-Noise Ratio (PSNR) for Watermarking Evaluation

In the realm of watermarking, we strive to embed information (the watermark) into a host signal (like an image or audio) without significantly degrading its quality. To understand how well our watermark has been preserved after potential attacks or manipulations, we need objective metrics. The Peak Signal-to-Noise Ratio (PSNR) is one such metric, providing a quantitative measure of the distortion introduced by the watermarking process.

## What is PSNR?

PSNR quantifies the difference between two images: the original, unwatermarked image and the watermarked image after it might have undergone some processing or attacks. It's essentially a ratio of the maximum possible power of a signal to the power of corrupting noise that affects the fidelity of its representation. In the context of watermarking, the "signal" is the original image, and the "noise" is the difference between the original and the watermarked image.

The higher the PSNR value, the closer the watermarked image is to the original, implying less distortion and better imperceptibility. Conversely, a lower PSNR suggests more distortion.

## The Formula

PSNR is typically calculated using the Mean Squared Error (MSE) between the original and the watermarked image.

First, let's define the Mean Squared Error (MSE):

$$
MSE = \frac{1}{MN} \sum_{i=0}^{M-1} \sum_{j=0}^{N-1} [I(i,j) - K(i,j)]^2
$$

Where:
*   $M$ is the number of rows in the image.
*   $N$ is the number of columns in the image.
*   $I(i,j)$ is the pixel value of the original image at position $(i,j)$.
*   $K(i,j)$ is the pixel value of the watermarked image at position $(i,j)$.

Now, the PSNR is calculated as:

$$
PSNR = 10 \log_{10} \left( \frac{MAX^2}{MSE} \right)
$$

Where:
*   $MAX$ is the maximum possible pixel value of the image. For an 8-bit grayscale image, $MAX = 255$. For an RGB image, it's also typically 255 per channel.

### Interpretation of PSNR Values

*   **High PSNR (e.g., > 35-40 dB):** Indicates very little distortion. The watermarked image is visually almost identical to the original. This is generally desirable for imperceptibility.
*   **Moderate PSNR (e.g., 30-35 dB):** Still good, with minor visible differences that might be acceptable depending on the application.
*   **Low PSNR (e.g., < 30 dB):** Suggests significant distortion, which may be visually noticeable and compromise the quality of the host signal.

However, it's crucial to remember that PSNR primarily measures pixel-wise differences and doesn't always correlate perfectly with human perception of image quality. This is where subjective metrics like Mean Opinion Score (MOS) come into play.

## How to Calculate PSNR (Conceptual Example)

Let's consider a very simple 2x2 grayscale image for illustration.

**Original Image (I):**
```
100  120
150  130
```

**Watermarked Image (K):**
```
105  118
148  135
```

Assume $MAX = 255$.

1.  **Calculate the squared differences for each pixel:**
    *   $(100 - 105)^2 = (-5)^2 = 25$
    *   $(120 - 118)^2 = (2)^2 = 4$
    *   $(150 - 148)^2 = (2)^2 = 4$
    *   $(130 - 135)^2 = (-5)^2 = 25$

2.  **Calculate the Mean Squared Error (MSE):**
    *   Sum of squared differences = $25 + 4 + 4 + 25 = 58$
    *   Number of pixels (M x N) = $2 \times 2 = 4$
    *   $MSE = \frac{58}{4} = 14.5$

3.  **Calculate PSNR:**
    *   $PSNR = 10 \log_{10} \left( \frac{255^2}{14.5} \right)$
    *   $PSNR = 10 \log_{10} \left( \frac{65025}{14.5} \right)$
    *   $PSNR = 10 \log_{10} (4484.48...)$
    *   $PSNR \approx 10 \times 3.6517$
    *   $PSNR \approx 36.52 \, dB$

This value of 36.52 dB suggests that the distortion between the original and watermarked image is relatively low.

## Practical Considerations and Limitations

*   **Imperceptibility vs. Robustness Trade-off:** While a high PSNR indicates good imperceptibility, it doesn't directly tell you how robust your watermark is. A very weak watermark might yield a high PSNR but could be easily removed by an attack. Conversely, a very robust watermark might survive strong attacks but could significantly lower the PSNR.
*   **Not a Direct Measure of Perceptual Quality:** PSNR doesn't account for the limitations of the human visual system (HVS). For example, an image with a slightly lower PSNR might look better to a human observer than an image with a higher PSNR if the distortion is masked in perceptually less sensitive areas.
*   **Sensitivity to Small Differences:** PSNR is highly sensitive to even small pixel differences. This can be a good thing for measuring distortion but means that even minor, imperceptible changes can lead to a noticeable drop in PSNR.

## Conclusion

PSNR is a fundamental objective metric for evaluating watermarking performance, specifically focusing on the imperceptibility aspect by quantifying the difference between the original and watermarked signal. While it provides a valuable quantitative measure, it should always be considered alongside other metrics, including subjective assessments, to fully understand the performance and trade-offs of a watermarking system.

## Supports

- [[skills/computing/security-privacy/cybersecurity/copyright-protection/microskills/peak-signal-to-noise-ratio-psnr|Peak Signal-to-Noise Ratio (PSNR)]]
- [[skills/computing/security-privacy/cybersecurity/watermarking-performance-and-attacks/microskills/peak-signal-to-noise-ratio-psnr|Peak Signal-to-Noise Ratio (PSNR)]]
