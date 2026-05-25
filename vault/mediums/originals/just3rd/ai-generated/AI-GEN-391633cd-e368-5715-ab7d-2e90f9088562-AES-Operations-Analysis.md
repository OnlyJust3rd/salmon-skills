---
type: "medium"
title: "AES Operations Analysis: Deconstructing the Rounds"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/symmetric-cipher-operations/microskills/aes-operations-analysis|aes-operations-analysis]]"
learning-time-in-minutes: 4
---
# AES Operations Analysis: Deconstructing the Rounds

This lesson dives into the intricate, step-by-step operations that define the Advanced Encryption Standard (AES), a cornerstone of modern symmetric cipher operations. By analyzing these fundamental processes, you'll gain a deep understanding of how AES achieves its robust security.

## The AES Encryption Process: A High-Level View

AES operates on blocks of data, typically 128 bits. The encryption process involves multiple rounds, with the number of rounds depending on the key size (10 rounds for AES-128, 12 for AES-192, and 14 for AES-256). Each round consists of a series of transformations applied to the data block, with the final round being slightly modified.

The four main transformations within each round are:

1.  **SubBytes:** A non-linear byte substitution.
2.  **ShiftRows:** A byte transposition.
3.  **MixColumns:** A mixing operation across columns.
4.  **AddRoundKey:** A bitwise XOR with a round-dependent key.

Let's break down each of these operations.

## 1. SubBytes: The S-Box Substitution

The SubBytes step is the only non-linear operation in AES. It substitutes each byte in the state matrix with another byte according to a lookup table called the S-box. This non-linearity is crucial for resisting linear and differential cryptanalysis.

Imagine our 128-bit block is represented as a 4x4 matrix of bytes. The SubBytes step operates independently on each byte.

For a given byte, its substitution is determined by:

*   The first four bits of the byte select the row in the S-box.
*   The last four bits of the byte select the column in the S-box.

The value at the intersection of that row and column is the substituted byte.

**Example:**

Let's say we have a byte with hexadecimal value `95`.
*   The first four bits are `1001` (decimal 9).
*   The last four bits are `0101` (decimal 5).

We would look up the entry at row 9, column 5 in the AES S-box. The resulting byte is the output of the SubBytes operation for `95`.

## 2. ShiftRows: Shuffling the Rows

The ShiftRows step is a permutation that shifts the bytes in the last three rows of the state matrix to the left. The first row remains unchanged.

*   **Row 0:** No shift.
*   **Row 1:** Shifted cyclically to the left by 1 byte.
*   **Row 2:** Shifted cyclically to the left by 2 bytes.
*   **Row 3:** Shifted cyclically to the left by 3 bytes.

This operation helps to diffuse the influence of individual bytes across the entire block.

**Visualizing the Shift:**

Consider a 4x4 state matrix:

```
A0 A1 A2 A3
B0 B1 B2 B3
C0 C1 C2 C3
D0 D1 D2 D3
```

After ShiftRows:

```
A0 A1 A2 A3
B1 B2 B3 B0
C2 C3 C0 C1
D3 D0 D1 D2
```

Notice how `B0` moved to the last position in its row, `C0` moved two positions, and `D0` moved three positions.

## 3. MixColumns: Inter-Column Mixing

The MixColumns step operates on each column of the state matrix independently. It performs a linear mixing operation, ensuring that changes in one byte affect multiple bytes in the same column. This diffusion across columns is essential.

Each column is treated as a polynomial over the finite field GF(2^8) and multiplied by a fixed polynomial `c(x) = {03}x^3 + {01}x^2 + {01}x + {02}` modulo `x^4 + 1`.

In simpler terms, each byte in a column is transformed based on a weighted sum of all bytes in that column. The "weights" are fixed constants (bytes `01`, `02`, `03`).

For a column `[a0, a1, a2, a3]^T`, the output column `[b0, b1, b2, b3]^T` is calculated as:

$$
\begin{bmatrix}
b_0 \\
b_1 \\
b_2 \\
b_3
\end{bmatrix}
=
\begin{bmatrix}
02 & 03 & 01 & 01 \\
01 & 02 & 03 & 01 \\
01 & 01 & 02 & 03 \\
03 & 01 & 01 & 02
\end{bmatrix}
\begin{bmatrix}
a_0 \\
a_1 \\
a_2 \\
a_3
\end{bmatrix}
$$

All arithmetic is performed in GF(2^8). Multiplication by `{02}` is a left bit shift, and multiplication by `{03}` is a left bit shift followed by an XOR with the original byte if the most significant bit was 1.

## 4. AddRoundKey: The Key Injection

The AddRoundKey step is the simplest but most critical step for security. In this step, each byte of the state matrix is XORed with a corresponding byte from the round key. The round key is derived from the main cipher key through a key expansion process.

For each round, a unique round key is generated. This ensures that different rounds use different keys, increasing the complexity for attackers.

$$
\text{State} \leftarrow \text{State} \oplus \text{RoundKey}
$$

This XOR operation is performed byte-wise.

## The Final Round and Decryption

The final round of AES encryption omits the MixColumns step. This is done to allow for efficient decryption.

Decryption in AES is essentially the inverse of the encryption process. Each step has an inverse:

*   **InvShiftRows:** Shifts rows to the right.
*   **InvSubBytes:** Uses the inverse S-box.
*   **InvMixColumns:** Uses a different fixed matrix for mixing.
*   **AddRoundKey:** The inverse of XOR is XOR itself, so this step is its own inverse if the same round key is used.

By understanding these individual transformations, you can now analyze the complete, round-by-round operation of AES, appreciating how each step contributes to the overall security of the cipher.

## Supports

- [[skills/computing/security-privacy/cybersecurity/symmetric-cipher-operations/microskills/aes-operations-analysis|AES Operations Analysis]]
