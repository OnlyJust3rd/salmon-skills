---
type: "medium"
title: "Minimal Product-of-Sums (POS) Form Derivation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/minimal-product-of-sums|minimal-product-of-sums]]"
learning-time-in-minutes: 5
---
# Minimal Product-of-Sums (POS) Form Derivation

This lesson focuses on deriving the minimal Product-of-Sums (POS) form for combinational logic circuits using Karnaugh Maps (K-maps). This is a crucial step in optimizing digital circuits, building upon our understanding of K-maps for Sum-of-Products (SOP) forms.

## Understanding Product-of-Sums (POS)

While Sum-of-Products (SOP) forms represent logic as OR gates with ANDed inputs, Product-of-Sums (POS) forms represent logic as AND gates with ORed inputs. A POS expression is minimized by grouping **zeros** on a K-map.

The fundamental principle is that we are looking for an expression that is true when the output is **false** (0). We group adjacent zeros, treating each group as an OR term. The overall expression then becomes an AND of these OR terms.

## Deriving Minimal POS using K-maps

The process is similar to finding the minimal SOP form, but with a key difference in what we are grouping:

1.  **Create a K-map:** Set up a K-map for your logic function, marking the cells corresponding to the input combinations where the output is **0**.
2.  **Group the Zeros:** Identify and group all the adjacent zeros. These groups should be as large as possible and powers of two (1, 2, 4, 8, etc.). You can wrap around edges and corners. Every zero must be included in at least one group.
3.  **Derive the POS Terms:** For each group of zeros:
    *   Identify the variables that **remain constant** within that group.
    *   If a variable is constant as 0, it appears uncomplemented (e.g., `A`).
    *   If a variable is constant as 1, it appears complemented (e.g., `A'`).
    *   These variables form an OR term.
4.  **Form the Final Expression:** The minimal POS expression is the AND of all the OR terms derived from the groups of zeros.

**Example Scenario:**

Consider a circuit with inputs A, B, and C. We want to design a circuit that is **off** (output 0) for the following input combinations:
*   A=0, B=0, C=0 (000)
*   A=0, B=0, C=1 (001)
*   A=1, B=1, C=0 (110)

Let's create a 3-variable K-map and mark the zeros:

|     | BC=00 | BC=01 | BC=11 | BC=10 |
| :-- | :---- | :---- | :---- | :---- |
| A=0 | 0     | 0     | 1     | 1     |
| A=1 | 1     | 1     | 0     | 1     |

Now, let's group the zeros:

*   **Group 1:** The two zeros in the `A=0` row, `BC=00` and `BC=01`.
    *   A is constant at 0, so it's `A`.
    *   B is constant at 0, so it's `B`.
    *   C changes from 0 to 1, so it's eliminated.
    *   This group forms the OR term: `A + B`.

*   **Group 2:** The zero at `A=1, BC=11` and the zero at `A=0, BC=00` (wrapping around the map).
    *   A changes from 1 to 0, so it's eliminated.
    *   B is constant at 1, so it's `B'`.
    *   C is constant at 1, so it's `C'`.
    *   This group forms the OR term: `B' + C'`.

*   **Group 3:** The zero at `A=1, BC=11` and the zero at `A=0, BC=01` (wrapping around the map).
    *   A changes from 1 to 0, so it's eliminated.
    *   B changes from 0 to 1, so it's eliminated.
    *   C is constant at 1, so it's `C'`.
    *   This group forms the OR term: `C'`.

We need to select the minimal number of groups that cover all zeros.
*   Group 1 (`A+B`) covers `(000)` and `(001)`.
*   We still need to cover `(110)`.
*   We can use Group 2 (`B'+C'`) which covers `(110)` (among others).
*   Alternatively, we can use a new group that specifically covers `(110)` and is minimal. The zero at `(110)` is adjacent to the zero at `(000)`. This would be a group of two.
    *   A changes, B changes, C is 0 --> `C`. This is not correct for POS.

Let's reconsider the grouping strategy for minimal covering.
The zeros are at minterms m0, m1, m6.
The K-map:
```
      BC
   00 01 11 10
A 0 | 0  0  1  1
  1 | 1  1  0  1
```
We want to group the **zeros**.
*   Group 1: Cells 0 and 1 (`A=0`, `BC=00` and `BC=01`). This covers `A`, `B`. Term: `A + B`.
*   Group 2: Cell 6 (`A=1`, `BC=10`) and Cell 1 (`A=0`, `BC=01`). This is incorrect grouping. Cell 6 is `110`.

Let's re-draw the K-map and highlight the zeros to be grouped.
Zeros are at minterms m0, m1, m6.
```
      BC
   00 01 11 10
A 0 | Z  Z  1  1
  1 | 1  1  Z  1
```
*   **Group A (covering m0, m1):** These are in the A=0 row. `A=0` is constant. `B=0` is constant. `C` varies. Term: `A + B`.
*   **Group B (covering m6):** This zero is at `A=1, BC=10`. To cover this with the largest possible group, we look for adjacent zeros. It's adjacent to no other zeros by itself. However, we can form a group of two if we include the zero at m0.
    Let's look for prime implicants of zeros:
    *   `A'B'` covers m0, m1. (A=0, B=0, C=0/1) -> `A + B`
    *   `A B'C'` covers m6. (A=1, B=0, C=0) - This is not m6.
    *   The zero at m6 (110) is `A B C'`.
    *   The zero at m0 (000) is `A'B'C'`.
    *   The zero at m1 (001) is `A'B'C`.

Let's re-evaluate the K-map and its zeros:
Cells with '0': 000, 001, 110.
K-map representation:
```
      BC
   00 01 11 10
A 0 | 0  0  1  1
  1 | 1  1  0  1
```
*   **Grouping the zeros:**
    *   A large group of two zeros exists in the `A=0` row at `BC=00` and `BC=01`.
        *   A is constant at 0 -> `A`
        *   B is constant at 0 -> `B`
        *   C varies.
        *   This group gives the POS term: `A + B`.
    *   The remaining zero is at `A=1, BC=10`. This cell is not adjacent to any other zeros in a way that forms a larger group of two or four with other zeros.
        *   A is constant at 1 -> `A'`
        *   B is constant at 1 -> `B'`
        *   C is constant at 0 -> `C`
        *   This group gives the POS term: `A' + B' + C`.

Therefore, the minimal POS form is the AND of these terms:
`F = (A + B) * (A' + B' + C)`

To verify:
If A=0, B=0: `(0+0) * (1+1+C) = 0 * 1 = 0`. Correct.
If A=1, B=1, C=0: `(1+1) * (0+0+0) = 1 * 0 = 0`. Correct.
If A=0, B=1, C=1: `(0+1) * (1+0+1) = 1 * 1 = 1`. Correct (this minterm was not specified as 0, so it should be 1).

## Practice Task

Derive the minimal Product-of-Sums (POS) form for the following function, given the minterms where the output is 0:
*   `m0` (0000)
*   `m1` (0001)
*   `m4` (0100)
*   `m12` (1100)
*   `m13` (1101)
*   `m14` (1110)

Use a 4-variable K-map and group the zeros.

## Self-Check Questions

1.  When deriving a minimal POS form, what do you group on the K-map?
2.  How do you determine the literals (complemented or uncomplemented) for a POS term from a group of zeros?
3.  Explain the difference in grouping strategy between finding a minimal SOP and a minimal POS expression.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/minimal-product-of-sums|Minimal Product-of-Sums]]
