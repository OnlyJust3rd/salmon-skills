---
type: "medium"
title: "Applying Watermarking Performance Metrics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/watermarking-performance-and-attacks/microskills/watermarking-performance-metric-application|watermarking-performance-metric-application]]"
learning-time-in-minutes: 4
---
# Applying Watermarking Performance Metrics

This lesson focuses on the practical application of metrics to evaluate the performance of digital watermarking systems and how these metrics are used when simulating attacks. Understanding these metrics is crucial for assessing the robustness and imperceptibility of a watermark.

## Why Metrics Matter

When we embed a watermark into a piece of media (like an image, audio, or video), we need to know how well it's hidden and how resilient it is to various manipulations. Performance metrics provide objective, quantitative measures for this evaluation. They help us answer questions like:

*   How much does the watermark degrade the original media's quality?
*   How likely is it that the watermark can be removed or damaged by an attack?
*   How much capacity does the watermark have for embedding information?

## Key Watermarking Metrics

We'll explore two primary categories of metrics: those related to **imperceptibility** (how well the watermark is hidden) and **robustness** (how well the watermark survives attacks).

### 1. Imperceptibility Metrics

These metrics measure the distortion introduced into the original media by the watermarking process.

#### Peak Signal-to-Noise Ratio (PSNR)

PSNR is a common metric for measuring the quality of reconstruction of a lossy compressed image or video. In the context of watermarking, it quantifies the difference between the original image and the watermarked image. A higher PSNR value indicates better quality (less distortion).

The formula for PSNR between an original image $I$ and a watermarked image $I'$ (both grayscale images of size $M \times N$) is:

$$
PSNR(I, I') = 10 \log_{10}\left(\frac{MAX_I^2}{MSE(I, I')}\right)
$$

where $MAX_I$ is the maximum possible pixel value of the image (e.g., 255 for an 8-bit grayscale image), and $MSE$ is the Mean Squared Error.

$$
MSE(I, I') = \frac{1}{MN} \sum_{i=0}^{M-1} \sum_{j=0}^{N-1} (I(i,j) - I'(i,j))^2
$$

**Application:**
You would typically use a library in Python (like `scikit-image` or `cv2`) to calculate PSNR.

```python
from skimage.metrics import peak_signal_noise_ratio

# Assuming 'original_image' and 'watermarked_image' are NumPy arrays
psnr_value = peak_signal_noise_ratio(original_image, watermarked_image)
print(f"PSNR: {psnr_value:.2f} dB")
```

#### Structural Similarity Index Measure (SSIM)

SSIM is a more perceptually relevant metric than PSNR because it measures the *structural* similarity between two images. It considers luminance, contrast, and structure. A SSIM value close to 1 indicates high similarity, meaning the watermark has caused little perceptual change.

The SSIM formula is complex, involving local statistics of pixel intensities.

**Application:**
Similar to PSNR, SSIM is readily available in image processing libraries.

```python
from skimage.metrics import structural_similarity

# Assuming 'original_image' and 'watermarked_image' are NumPy arrays
ssim_value, _ = structural_similarity(original_image, watermarked_image, full=True)
print(f"SSIM: {ssim_value:.3f}")
```

### 2. Robustness Metrics

These metrics evaluate how effectively the watermark can be detected after the watermarked media has been subjected to various attacks.

#### Bit Error Rate (BER) / Bit Accuracy

This metric is used when the watermark itself is treated as a binary sequence of bits. BER measures the number of incorrect bits detected compared to the total number of bits transmitted or embedded. A lower BER indicates higher robustness.

$$
BER = \frac{\text{Number of incorrect bits}}{\text{Total number of bits}}
$$

**Application:**
After an attack, you attempt to extract the watermark. You compare the extracted watermark bits with the original watermark bits. If the original watermark was '10110' and the extracted watermark is '11100', there are 3 incorrect bits out of 5.

```python
def calculate_ber(original_bits, extracted_bits):
    if len(original_bits) != len(extracted_bits):
        return 1.0 # Or handle error appropriately
    errors = 0
    for i in range(len(original_bits)):
        if original_bits[i] != extracted_bits[i]:
            errors += 1
    return errors / len(original_bits)

original = [1, 0, 1, 1, 0]
extracted = [1, 1, 1, 0, 0]
ber = calculate_ber(original, extracted)
print(f"Bit Error Rate: {ber:.2f}")
```

#### Detection Rate / True Positive Rate (TPR)

This metric measures how often the watermark is correctly detected when it is present. It's crucial for watermarking schemes that aim to detect the presence or absence of a watermark.

$$
\text{Detection Rate} = \frac{\text{Number of correctly detected watermarks}}{\text{Total number of watermarked samples}}
$$

**Application:**
You would run your watermark detection algorithm on a set of media, some of which contain your watermark. The detection rate tells you how good your detector is.

## Simulating Attacks and Applying Metrics

To apply these metrics effectively, you need to simulate common attacks. Benchmark tools often provide functionalities to apply these attacks and then report the performance metrics.

Common Attacks Include:

*   **Geometric Attacks:** Rotation, scaling, cropping, translation.
*   **Filtering Attacks:** Gaussian blur, median filter.
*   **Compression Attacks:** JPEG, MP3 compression.
*   **Noise Addition:** Gaussian noise, salt-and-pepper noise.
*   **Collusion Attacks:** Combining multiple watermarked copies.

**Workflow:**

1.  **Embed:** Apply your watermarking algorithm to the original media.
2.  **Attack:** Use a benchmark tool or custom scripts to apply a specific attack to the watermarked media.
3.  **Extract:** Attempt to extract the watermark from the attacked media.
4.  **Measure Imperceptibility:** Calculate PSNR and SSIM between the original and watermarked media (before attack).
5.  **Measure Robustness:** Compare the extracted watermark with the original watermark using BER or Detection Rate.

By systematically applying these metrics across various attacks, you can build a comprehensive understanding of your watermarking system's strengths and weaknesses. This allows for informed decisions when selecting or designing watermarking schemes for specific applications.

## Supports

- [[skills/computing/security-privacy/cybersecurity/watermarking-performance-and-attacks/microskills/watermarking-performance-metric-application|Watermarking Performance Metric Application]]
