---
type: "medium"
title: "D/A Converter Types: Weighted Resistor and R-2R Ladder"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/mathematics/signals-systems/signal-conversion-a-d-and-d-a/microskills/d-a-converter-types|d-a-converter-types]]"
learning-time-in-minutes: 6
---
# D/A Converter Types: Weighted Resistor and R-2R Ladder

This lesson focuses on recalling common Digital-to-Analog (D/A) converter architectures. Understanding these types is crucial for comprehending how digital signals are converted back into analog signals within the broader context of Signal Conversion.

## What is a D/A Converter?

A D/A converter (DAC) takes a digital input (a sequence of binary bits) and produces a corresponding analog output voltage or current. This analog output is a representation of the digital input value.

## Common D/A Converter Architectures

There are several ways to design a DAC, but two of the most fundamental and commonly encountered architectures are:

1.  **Weighted Resistor DAC**
2.  **R-2R Ladder DAC**

Let's explore each of these in detail.

## 1. Weighted Resistor DAC

### Concept

The weighted resistor DAC uses a series of resistors, each with a weight corresponding to the bit position it represents. The digital input bits control switches that connect these weighted resistors to a reference voltage or ground. The output voltage is a sum of the voltages from the connected resistors, determined by the digital input.

### How it Works

Imagine a simple 3-bit weighted resistor DAC. Each bit ($b_0$, $b_1$, $b_2$) controls a switch connected to a resistor. The resistors are weighted such that the most significant bit (MSB) has the smallest resistor value (and thus the largest impact), while the least significant bit (LSB) has the largest resistor value (and thus the smallest impact).

*   **MSB (e.g., $b_2$):** Connected to a resistor $R$.
*   **Next Bit (e.g., $b_1$):** Connected to a resistor $2R$.
*   **LSB (e.g., $b_0$):** Connected to a resistor $4R$.

These resistors are typically connected to an operational amplifier (op-amp) summing amplifier. The output voltage is proportional to the binary input number.

The output voltage ($V_{out}$) can be approximated by:

$$ V_{out} = -V_{ref} \left( b_2 \frac{R_{ref}}{R} + b_1 \frac{R_{ref}}{2R} + b_0 \frac{R_{ref}}{4R} \right) $$

Where:
*   $V_{ref}$ is the reference voltage.
*   $R_{ref}$ is a reference resistance, often chosen to be equal to $R$.
*   $b_n$ is 1 if the bit is high, and 0 if the bit is low.

### Key Parameters and Considerations

*   **Resolution:** Determined by the number of bits.
*   **Accuracy:** Highly dependent on the precision of the resistor values. If the resistors are not perfectly weighted (e.g., $R$, $2R$, $4R$), the output will be inaccurate.
*   **Resistor Range:** For a DAC with many bits, the range of resistor values becomes very wide ($R$, $2R$, $4R$, $8R$, ..., $2^{n-1}R$). This wide range can be challenging to manufacture precisely and can lead to issues with matching and parasitic effects.
*   **Switching Speed:** Can be limited by the time it takes for the output to settle, influenced by the resistor values and capacitance.

### Example (Conceptual)

Consider a 3-bit weighted resistor DAC with $V_{ref} = 5V$ and $R_{ref} = R = 1k\Omega$.

*   $b_2$ connected to $1k\Omega$
*   $b_1$ connected to $2k\Omega$
*   $b_0$ connected to $4k\Omega$

If the input is binary `101` (decimal 5):
*   $b_2=1$, $b_1=0$, $b_0=1$.
*   The $1k\Omega$ resistor is connected.
*   The $4k\Omega$ resistor is connected.

$$ V_{out} = -5V \left( 1 \times \frac{1k\Omega}{1k\Omega} + 0 \times \frac{1k\Omega}{2k\Omega} + 1 \times \frac{1k\Omega}{4k\Omega} \right) $$
$$ V_{out} = -5V \left( 1 + 0 + 0.25 \right) $$
$$ V_{out} = -5V \times 1.25 = -6.25V $$

## 2. R-2R Ladder DAC

### Concept

The R-2R ladder DAC is an alternative architecture that uses only two precision resistor values: $R$ and $2R$. This significantly simplifies manufacturing and improves matching compared to the weighted resistor DAC, especially for higher resolutions.

### How it Works

The R-2R ladder consists of a series of repeating stages, each containing two resistors of value $R$ and two resistors of value $2R$. Digital input bits control switches that either connect a point in the ladder to ground or to a reference voltage, effectively "turning on" or "turning off" that stage's contribution to the output.

The ladder structure is designed so that each bit contributes an equal amount to the output, but with different significance based on its position. The MSB is processed at the "top" of the ladder, and each subsequent bit is processed at lower rungs.

The output voltage is proportional to the digital input. For an $n$-bit DAC:

$$ V_{out} = V_{ref} \left( b_{n-1} \frac{1}{2} + b_{n-2} \frac{1}{4} + \dots + b_1 \frac{1}{2^{n-1}} + b_0 \frac{1}{2^n} \right) $$

Where:
*   $V_{ref}$ is the reference voltage.
*   $b_{n-1}$ is the MSB, $b_0$ is the LSB.
*   $b_i$ is 1 if the bit is high, and 0 if the bit is low.

This formula can be seen as a weighted sum, but the "weights" are inherently created by the R-2R ladder's current division properties.

### Key Parameters and Considerations

*   **Resolution:** Determined by the number of bits (stages in the ladder).
*   **Accuracy:** Highly dependent on the precision of the $R$ and $2R$ resistor values. Matching between $R$ and $2R$ resistors is critical.
*   **Resistor Range:** Only two precision resistor values are needed ($R$ and $2R$), making it easier to achieve good matching and accuracy compared to the wide range of resistors in a weighted resistor DAC.
*   **Simplicity:** The repetitive structure makes it easier to design and manufacture for higher resolutions.
*   **Switching Speed:** Generally good, but can be affected by the capacitive loading at each stage.

### Example (Conceptual)

Consider a simplified R-2R ladder where the output is taken from a specific point and switched inputs are at each rung. If the input is binary `101` (decimal 5) for a 3-bit DAC:

*   The MSB (1) is connected to a point in the ladder.
*   The next bit (0) is connected to ground.
*   The LSB (1) is connected to a point further down the ladder.

The ladder's inherent current division will ensure that the MSB has the largest impact (equivalent to 1/2), the middle bit has half that impact (equivalent to 1/4), and the LSB has half of that impact (equivalent to 1/8).

$$ V_{out} = V_{ref} \left( 1 \times \frac{1}{2} + 0 \times \frac{1}{4} + 1 \times \frac{1}{8} \right) $$
$$ V_{out} = V_{ref} \left( 0.5 + 0 + 0.125 \right) $$
$$ V_{out} = V_{ref} \times 0.625 $$

If $V_{ref} = 5V$, then $V_{out} = 5V \times 0.625 = 3.125V$.

## Summary

You have now reviewed two fundamental D/A converter architectures: the **weighted resistor DAC** and the **R-2R ladder DAC**.

*   **Weighted Resistor DAC:** Uses resistors with values $R, 2R, 4R, \dots$. Prone to manufacturing difficulties with many bits due to wide resistor range.
*   **R-2R Ladder DAC:** Uses only two resistor values ($R$ and $2R$). Easier to manufacture for higher resolutions and better resistor matching.

Remembering these common types is the first step in understanding how digital information is transformed back into the analog world.

## Supports

- [[skills/mathematics/signals-systems/signal-conversion-a-d-and-d-a/microskills/d-a-converter-types|D/A Converter Types]]
