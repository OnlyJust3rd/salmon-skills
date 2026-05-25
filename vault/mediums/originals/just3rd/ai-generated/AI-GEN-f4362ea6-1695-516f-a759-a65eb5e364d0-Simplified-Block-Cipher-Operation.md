---
type: "medium"
title: "Simplified Block Cipher Operations: SubBytes and ShiftRows"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/symmetric-cipher-operations/microskills/simplified-block-cipher-operation|simplified-block-cipher-operation]]"
learning-time-in-minutes: 3
---
# Simplified Block Cipher Operations: SubBytes and ShiftRows

This lesson focuses on applying two fundamental operations within a simplified block cipher: SubBytes and ShiftRows. These steps are crucial for diffusion and confusion, making the cipher harder to break. We will use a simplified AES-like structure to demonstrate their application.

## Understanding the Goal

Our objective is to take a small block of data, represented as a matrix of bytes, and transform it using the SubBytes and ShiftRows operations. This is a core step in many symmetric ciphers.

## The State Matrix

Block ciphers operate on fixed-size blocks of data. For simplicity, we'll represent our input data as a 4x4 matrix of bytes. Each byte is typically an 8-bit value.

Let's consider our initial state matrix:

```
+----+----+----+----+
| 00 | 11 | 22 | 33 |
+----+----+----+----+
| 44 | 55 | 66 | 77 |
+----+----+----+----+
| 88 | 99 | AA | BB |
+----+----+----+----+
| CC | DD | EE | FF |
+----+----+----+----+
```

This matrix represents our input block. The operations we apply will modify this matrix.

## SubBytes: The Substitution Step

The SubBytes operation is a non-linear substitution step. Each byte in the state matrix is replaced by another byte using a predefined substitution box (S-box). This S-box is a lookup table designed to provide confusion. For a simplified cipher, we'll use a small, illustrative S-box.

**Our Simplified S-box (Hexadecimal Values):**

| Input | 0   | 1   | 2   | 3   |
| :---- | :-- | :-- | :-- | :-- |
| **0** | 63  | 7c  | 77  | 7b  |
| **1** | f2  | 6b  | 6f  | c5  |
| **2** | 30  | 01  | 67  | 2b  |
| **3** | fe  | d7  | ab  | 76  |

*(Note: In real ciphers like AES, the S-box is much larger and derived mathematically.)*

**How to Apply SubBytes:**

1.  **Identify the input byte:** Look at the current byte in the state matrix.
2.  **Determine the S-box row and column:** The most significant nibble (4 bits) of the input byte typically determines the row, and the least significant nibble determines the column. For example, if the input byte is `0x11`, the first nibble is `0x1` and the second nibble is `0x1`.
3.  **Lookup the output byte:** Find the corresponding byte in the S-box.

**Applying SubBytes to our State Matrix:**

Let's go through a few examples:

*   **Byte `00`:** First nibble `0`, second nibble `0`. Look up `S-box[0][0]`, which is `63`.
*   **Byte `11`:** First nibble `1`, second nibble `1`. Look up `S-box[1][1]`, which is `6b`.
*   **Byte `22`:** First nibble `2`, second nibble `2`. Look up `S-box[2][2]`, which is `67`.
*   **Byte `33`:** First nibble `3`, second nibble `3`. Look up `S-box[3][3]`, which is `76`.

Applying SubBytes to the entire matrix would replace each byte with its S-box substitution. After SubBytes, our state matrix might look like this (using the full S-box lookup for each byte):

```
+----+----+----+----+
| 63 | 6b | 67 | 76 |
+----+----+----+----+
| f2 | 6b | 6f | c5 |
+----+----+----+----+
| 30 | 01 | 67 | 2b |
+----+----+----+----+
| fe | d7 | ab | 76 |
+----+----+----+----+
```

## ShiftRows: The Permutation Step

The ShiftRows operation is a transposition or permutation step. It cyclically shifts the rows of the state matrix to the left. This operation provides diffusion, spreading the influence of each byte across multiple bytes in the next round.

**How to Apply ShiftRows:**

*   **Row 0:** Remains unchanged.
*   **Row 1:** Is shifted cyclically to the left by 1 byte.
*   **Row 2:** Is shifted cyclically to the left by 2 bytes.
*   **Row 3:** Is shifted cyclically to the left by 3 bytes.

**Applying ShiftRows to our (Post-SubBytes) State Matrix:**

Let's take the matrix after the SubBytes operation and apply ShiftRows:

Original (after SubBytes):

```
+----+----+----+----+  <- Row 0
| 63 | 6b | 67 | 76 |
+----+----+----+----+
| f2 | 6b | 6f | c5 |  <- Row 1
+----+----+----+----+
| 30 | 01 | 67 | 2b |  <- Row 2
+----+----+----+----+
| fe | d7 | ab | 76 |  <- Row 3
+----+----+----+----+
```

1.  **Row 0:** `[63, 6b, 67, 76]` -> remains `[63, 6b, 67, 76]`
2.  **Row 1:** `[f2, 6b, 6f, c5]` -> shifted left by 1 -> `[6b, 6f, c5, f2]`
3.  **Row 2:** `[30, 01, 67, 2b]` -> shifted left by 2 -> `[67, 2b, 30, 01]`
4.  **Row 3:** `[fe, d7, ab, 76]` -> shifted left by 3 -> `[d7, ab, 76, fe]`

The state matrix after applying ShiftRows:

```
+----+----+----+----+  <- Row 0
| 63 | 6b | 67 | 76 |
+----+----+----+----+
| 6b | 6f | c5 | f2 |  <- Row 1
+----+----+----+----+
| 67 | 2b | 30 | 01 |  <- Row 2
+----+----+----+----+
| d7 | ab | 76 | fe |  <- Row 3
+----+----+----+----+
```

## Combining Operations

In a real block cipher round, SubBytes is typically followed by ShiftRows, then by other operations like MixColumns and AddRoundKey. For this lesson, we've successfully applied the SubBytes and ShiftRows operations to a sample input block.

By following these steps, you've performed the core substitutions and permutations that are fundamental to the security of many symmetric block ciphers.

## Supports

- [[skills/computing/security-privacy/cybersecurity/symmetric-cipher-operations/microskills/simplified-block-cipher-operation|Simplified Block Cipher Operation]]
