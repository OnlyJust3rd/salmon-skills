---
type: "medium"
title: "Common Error Control Techniques"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/network-foundations/data-link-layer/microskills/common-error-control-techniques|common-error-control-techniques]]"
learning-time-in-minutes: 4
---
# Common Error Control Techniques

At the Data Link Layer, ensuring the reliable transmission of data frames is crucial. Errors can occur due to noise, interference, or other physical medium imperfections. Error control techniques are implemented to detect and sometimes correct these errors. This lesson focuses on understanding two fundamental methods: Parity Checks and Cyclic Redundancy Checks (CRC).

### Understanding Parity Checks

A parity check is a simple error detection method. It works by adding an extra bit, called a parity bit, to each block of data. This parity bit is set to either 0 or 1 to make the total number of '1' bits in the block either even or odd, depending on the chosen parity scheme.

*   **Even Parity:** The parity bit is set so that the total number of '1's in the data plus the parity bit is even.
*   **Odd Parity:** The parity bit is set so that the total number of '1's in the data plus the parity bit is odd.

When the receiver gets the data, it recalculates the parity. If the calculated parity matches the received parity bit, the data is assumed to be error-free. If they don't match, an error is detected.

**Example:**
Let's say we have the 7-bit ASCII code for 'A', which is `1000001`. We'll use even parity.
The number of '1's in `1000001` is two. This is already an even number. So, the parity bit will be `0`.
The transmitted data with parity will be `10000010`.

If an error occurs and the transmitted frame becomes `10001010` (the third bit is flipped), the receiver will count the '1's and find three '1's. With even parity, three '1's is an odd number, so an error is detected.

**Limitation:** A simple parity check can only detect an odd number of bit errors. If an even number of bits flip, the parity will remain the same, and the error will go undetected.

### Understanding Cyclic Redundancy Checks (CRC)

CRC is a more robust error detection method than parity checking. It uses polynomial division in a finite field (typically binary).

Here's the basic idea:
1.  The sender treats the data frame as a binary number.
2.  A generator polynomial, chosen beforehand, is used for division.
3.  The sender appends a number of zero bits to the data (equal to the degree of the generator polynomial minus 1).
4.  The sender divides this augmented data by the generator polynomial. The remainder of this division is the CRC checksum.
5.  This CRC checksum is appended to the original data and sent.
6.  The receiver performs the same division using the received data and the same generator polynomial. If the remainder is zero, the data is considered correct.

**Example (Simplified):**
Let's say our data is `1101` (binary) and our generator polynomial is `101` (binary).
1.  Data: `1101`
2.  Generator: `101`
3.  Append zeros: The degree of `101` is 2 (since it represents \(x^2\)). So, we append \(2-1=1\) zero bit. Augmented data: `11010`.
4.  Divide `11010` by `101` using binary (XOR-based) division:
    ```
      1110  <-- Quotient (not used for checking)
     ____
    101|11010
       101
       ---
        110
        101
        ---
         110
         101
         ---
          10  <-- Remainder
    ```
5.  The CRC checksum is `10`.
6.  The sender appends this checksum to the data: `110110`. This is what is transmitted.

If the receiver gets `110110` and divides it by `101`, the remainder will be `0`. If an error occurred, the remainder would likely be non-zero.

CRC can detect single-bit errors, double-bit errors, odd numbers of bit errors, and most burst errors (consecutive bit errors).

### Practice Task

Consider the 8-bit binary data: `10110010`.

1.  **Parity Check:** Calculate the parity bit for this data using **odd parity**. What is the transmitted data including the parity bit?
2.  **CRC Check:** If the generator polynomial is `1011`, what is the 3-bit CRC checksum for the data `10110010`? (You will need to append 3 zeros to the data before performing the division).

### Self-Check Questions

1.  What is the primary limitation of a simple parity check?
2.  How does a CRC differ from a parity check in its approach to error detection?
3.  Why is CRC generally preferred over parity for error detection in networking?
4.  If data is transmitted with even parity and the receiver counts an odd number of '1's in the received data (including the parity bit), what can it conclude?

## Supports

- [[skills/computing/systems-infrastructure/networking/network-foundations/data-link-layer/microskills/common-error-control-techniques|Common Error Control Techniques]]
