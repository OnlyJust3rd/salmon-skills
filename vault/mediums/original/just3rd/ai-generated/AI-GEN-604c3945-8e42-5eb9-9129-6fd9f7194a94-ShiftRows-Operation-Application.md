---
type: "medium"
title: "Applying the ShiftRows Operation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/symmetric-cipher-operations/microskills/shiftrows-operation-application|shiftrows-operation-application]]"
learning-time-in-minutes: 3
---
# Applying the ShiftRows Operation

Welcome to this lesson on applying the ShiftRows operation, a crucial step in symmetric cipher algorithms like AES. We've previously explored the SubBytes operation, and now we'll build upon that understanding by focusing on how ShiftRows rearranges data to further obscure patterns.

## What is ShiftRows?

The ShiftRows operation is a **permutation** step within a block cipher. Unlike SubBytes, which substitutes byte values, ShiftRows simply **rearranges** the bytes within the state matrix. This rearrangement is performed on each row of the state matrix by cyclically shifting the bytes to the left. The amount of shift increases for each subsequent row.

Why do we do this? By shifting bytes across different columns, ShiftRows ensures that data dependencies are spread out. This helps to break up byte-wise correlations and diffusion patterns, making cryptanalysis more challenging.

## The State Matrix

Before we dive into the application, let's revisit the state matrix. In AES, the input block is represented as a 4x4 matrix of bytes. We'll use this structure for our examples.

Consider a 16-byte input block, which is arranged into a 4x4 state matrix like this:

```
Byte 0   Byte 4   Byte 8  Byte 12
Byte 1   Byte 5   Byte 9  Byte 13
Byte 2   Byte 6  Byte 10  Byte 14
Byte 3   Byte 7  Byte 11  Byte 15
```

For the purpose of ShiftRows, we treat this as:

```
[ b0  b4  b8 b12 ]
[ b1  b5  b9 b13 ]
[ b2  b6 b10 b14 ]
[ b3  b7 b11 b15 ]
```

## Applying the ShiftRows Operation

The ShiftRows operation is applied row by row, with a specific number of left cyclic shifts for each row:

*   **Row 0:** No shift is applied.
*   **Row 1:** The bytes in this row are cyclically shifted one position to the left.
*   **Row 2:** The bytes in this row are cyclically shifted two positions to the left.
*   **Row 3:** The bytes in this row are cyclically shifted three positions to the left.

### Worked Example

Let's take a sample state matrix after the SubBytes operation has been applied. We'll represent the bytes using hexadecimal notation for clarity.

**Initial State Matrix (after SubBytes):**

```
[ 63  7c  77  7b ]
[ 9f  c5  30  01 ]
[ 6a  00  72  88 ]
[ 32  b8  d7  9e ]
```

Now, let's apply ShiftRows to each row:

**Row 0:**
No shift. The row remains:
`[ 63  7c  77  7b ]`

**Row 1:**
Cyclically shift left by 1 position.
The byte `9f` moves to the first position.
The byte `c5` moves to the second position.
The byte `30` moves to the third position.
The byte `01` moves to the fourth position.
Resulting row: `[ c5  30  01  9f ]`

**Row 2:**
Cyclically shift left by 2 positions.
The byte `6a` moves to the third position.
The byte `00` moves to the fourth position.
The byte `72` moves to the first position.
The byte `88` moves to the second position.
Resulting row: `[ 72  88  6a  00 ]`

**Row 3:**
Cyclically shift left by 3 positions. This is equivalent to shifting right by 1 position.
The byte `32` moves to the second position.
The byte `b8` moves to the third position.
The byte `d7` moves to the fourth position.
The byte `9e` moves to the first position.
Resulting row: `[ 9e  32  b8  d7 ]`

**Final State Matrix (after ShiftRows):**

Combining these rows, the state matrix after applying ShiftRows is:

```
[ 63  7c  77  7b ]
[ c5  30  01  9f ]
[ 72  88  6a  00 ]
[ 9e  32  b8  d7 ]
```

### Pseudocode for ShiftRows

Here's a pseudocode representation of the ShiftRows operation on a 4x4 state matrix:

```pseudocode
function ShiftRows(state):
  // state is a 4x4 matrix of bytes

  // Row 0: No shift
  // No operation needed

  // Row 1: Shift left by 1
  temp = state[1][0]
  state[1][0] = state[1][1]
  state[1][1] = state[1][2]
  state[1][2] = state[1][3]
  state[1][3] = temp

  // Row 2: Shift left by 2
  temp1 = state[2][0]
  temp2 = state[2][1]
  state[2][0] = state[2][2]
  state[2][1] = state[2][3]
  state[2][2] = temp1
  state[2][3] = temp2

  // Row 3: Shift left by 3 (equivalent to shift right by 1)
  temp = state[3][3]
  state[3][3] = state[3][2]
  state[3][2] = state[3][1]
  state[3][1] = state[3][0]
  state[3][0] = temp

  return state
```

## Key Takeaways

*   ShiftRows is a **permutation** that rearranges bytes within the state matrix.
*   It cyclically shifts rows to the left by increasing amounts (0, 1, 2, 3).
*   Its purpose is to ensure **diffusion** by spreading data dependencies across columns.
*   It is applied **after** the SubBytes operation in algorithms like AES.

Understanding and applying ShiftRows is a fundamental step in mastering symmetric cipher operations. Practice with different input matrices to solidify your understanding.

## Supports

- [[skills/computing/security-privacy/cybersecurity/symmetric-cipher-operations/microskills/shiftrows-operation-application|ShiftRows Operation Application]]
