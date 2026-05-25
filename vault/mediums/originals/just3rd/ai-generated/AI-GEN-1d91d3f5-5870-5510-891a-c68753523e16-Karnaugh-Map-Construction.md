---
type: "medium"
title: "Karnaugh Map Construction"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/karnaugh-map-construction|karnaugh-map-construction]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/combinational-logic-design|combinational-logic-design]]"
learning-time-in-minutes: 3
---
# Karnaugh Map Construction

This lesson focuses on the initial step of applying Karnaugh Maps for combinational logic minimization: constructing the map itself. A Karnaugh Map, or K-map, is a graphical tool used to simplify Boolean algebra expressions. It's a visual representation of a truth table that makes it easier to spot adjacent groups of '1's, which correspond to simplified product terms.

### Understanding the K-map Structure

A K-map is essentially a grid where each cell represents a unique minterm (a product of all variables, with each variable appearing once, either complemented or uncomplemented). For a function with \(n\) variables, the K-map will have \(2^n\) cells. The key to K-maps lies in the arrangement of these cells, which follows Gray code. This means that any two adjacent cells (horizontally or vertically, including wrap-around) differ by only one variable.

### Constructing a 2-Variable K-map

Let's consider a function \(F(A, B)\). The K-map will have \(2^2 = 4\) cells. The rows typically represent one variable (e.g., A) and the columns represent the other (e.g., B).

|   | 0 | 1 |
|---|---|---|
| 0 | m0 | m1 |
| 1 | m2 | m3 |

Where:
*   Row 0 represents \(A=0\) (\(\bar{A}\))
*   Row 1 represents \(A=1\) (\(A\))
*   Column 0 represents \(B=0\) (\(\bar{B}\))
*   Column 1 represents \(B=1\) (\(B\))

The minterms correspond to:
*   \(m0 = \bar{A}\bar{B}\)
*   \(m1 = \bar{A}B\)
*   \(m2 = A\bar{B}\)
*   \(m3 = AB\)

### Constructing a 3-Variable K-map

For a function \(F(A, B, C)\), the K-map has \(2^3 = 8\) cells. We typically arrange it as a 2x4 or 4x2 grid. Let's use a 2x4 grid where rows represent \(A\) and columns represent \(B\) and \(C\). Notice the order of columns: 00, 01, 11, 10. This is the Gray code sequence.

|   | 00 | 01 | 11 | 10 |
|---|----|----|----|----|
| 0 | m0 | m1 | m3 | m2 |
| 1 | m4 | m5 | m7 | m6 |

Where:
*   Row 0: \(A=0\) (\(\bar{A}\))
*   Row 1: \(A=1\) (\(A\))
*   Columns represent \(BC\) in Gray code: \(\bar{B}\bar{C}\), \(\bar{B}C\), \(BC\), \(B\bar{C}\).

The minterms are:
*   \(m0 = \bar{A}\bar{B}\bar{C}\)
*   \(m1 = \bar{A}\bar{B}C\)
*   \(m2 = \bar{A}B\bar{C}\)
*   \(m3 = \bar{A}BC\)
*   \(m4 = A\bar{B}\bar{C}\)
*   \(m5 = A\bar{B}C\)
*   \(m6 = ABC\)
*   \(m7 = AB\bar{C}\)

### Constructing a 4-Variable K-map

For a function \(F(A, B, C, D)\), the K-map has \(2^4 = 16\) cells, typically arranged as a 4x4 grid.

|   | 00 | 01 | 11 | 10 |
|---|----|----|----|----|
| 00 | m0 | m1 | m3 | m2 |
| 01 | m4 | m5 | m7 | m6 |
| 11 | m12| m13| m15| m14|
| 10 | m8 | m9 | m11| m10|

Here:
*   Rows represent \(AB\) in Gray code: \(\bar{A}\bar{B}\), \(\bar{A}B\), \(AB\), \(A\bar{B}\).
*   Columns represent \(CD\) in Gray code: \(\bar{C}\bar{D}\), \(\bar{C}D\), \(CD\), \(C\bar{D}\).

The minterms fill in systematically based on the row and column combinations.

### Practical Example: Constructing a K-map

Let's construct a K-map for a function \(F(X, Y, Z)\) with the following truth table:

| X | Y | Z | F | Minterm |
|---|---|---|---|---------|
| 0 | 0 | 0 | 1 | m0      |
| 0 | 0 | 1 | 0 | m1      |
| 0 | 1 | 0 | 1 | m2      |
| 0 | 1 | 1 | 1 | m3      |
| 1 | 0 | 0 | 0 | m4      |
| 1 | 0 | 1 | 1 | m5      |
| 1 | 1 | 0 | 0 | m6      |
| 1 | 1 | 1 | 1 | m7      |

We will construct a 3-variable K-map with X for rows and YZ for columns.

|   | 00 (\(\bar{Y}\bar{Z}\)) | 01 (\(\bar{Y}Z\)) | 11 (\(YZ\)) | 10 (\(Y\bar{Z}\)) |
|---|-------------------|---------------|-----------|---------------|
| 0 (\(\bar{X}\)) | 1 (m0)            | 0 (m1)        | 1 (m3)    | 1 (m2)        |
| 1 (\(X\))     | 0 (m4)            | 1 (m5)        | 1 (m7)    | 0 (m6)        |

### Practice Task

Construct a K-map for a function \(G(A, B, C, D)\) that has the following minterms: \(m_1, m_3, m_5, m_7, m_9, m_{11}, m_{13}, m_{15}\).

### Self-Check Questions

1.  What is the primary purpose of the Gray code ordering in K-map construction?
2.  How many cells are in a K-map for a function with 5 variables?
3.  For a 4-variable K-map, if the rows represent \(AB\) and columns represent \(CD\), what minterm corresponds to the cell at the intersection of the second row (\(A=0, B=1\)) and the fourth column (\(C=0, D=1\))?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/karnaugh-map-construction|Karnaugh Map Construction]]
