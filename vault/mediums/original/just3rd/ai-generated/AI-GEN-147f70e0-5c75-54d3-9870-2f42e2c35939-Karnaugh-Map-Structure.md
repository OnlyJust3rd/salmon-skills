---
type: "medium"
title: "Karnaugh Map Structure"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/karnaugh-map-structure|karnaugh-map-structure]]"
learning-time-in-minutes: 4
---
# Karnaugh Map Structure

Karnaugh Maps (K-maps) are a visual tool used in digital logic design to simplify Boolean expressions. They provide a structured way to represent the relationships between input variables and output of a combinational logic circuit. Understanding the layout and how variables are ordered is key to using K-maps effectively.

## What is a Karnaugh Map?

A Karnaugh Map is a grid where each cell corresponds to a unique minterm (or maxterm) of a Boolean function. The arrangement of these cells is not arbitrary; it's designed so that adjacent cells (horizontally or vertically, but not diagonally) differ by only a single variable. This property is crucial for grouping and simplification.

### Layout and Variable Ordering

The number of cells in a K-map depends on the number of input variables. For \(n\) variables, there are \(2^n\) cells.

*   **2-Variable K-map:** A 2x2 grid. The rows and columns are typically labeled to represent the values of the two variables.

    |       | 0 | 1 |
    | :---- | :-: | :-: |
    | **0** | m0 | m1 |
    | **1** | m2 | m3 |

    Here, the row represents variable A (0 or 1) and the column represents variable B (0 or 1). The cells represent minterms \(m0, m1, m2, m3\).

*   **3-Variable K-map:** An 8-cell grid, often arranged as 2 rows and 4 columns (or vice versa). The labeling is critical here. Gray code is used for the column (or row) labels to ensure adjacent cells differ by only one variable.

    |       | 00 | 01 | 11 | 10 |
    | :---- | :-: | :-: | :-: | :-: |
    | **0** | m0 | m1 | m3 | m2 |
    | **1** | m4 | m5 | m7 | m6 |

    In this example, the row represents variable A, and the columns represent variables B and C. Notice the column order: 00, 01, 11, 10. This is Gray code. If we were to move from the '00' column to the '01' column, only C changes. From '01' to '11', only B changes. From '11' to '10', only C changes. Crucially, the '10' column is adjacent to the '00' column (wrapping around), so only B changes between them.

*   **4-Variable K-map:** A 16-cell grid, usually arranged as 4 rows and 4 columns. Both rows and columns use Gray code for labeling.

    |       | 00 | 01 | 11 | 10 |
    | :---- | :-: | :-: | :-: | :-: |
    | **00**| m0 | m1 | m3 | m2 |
    | **01**| m4 | m5 | m7 | m6 |
    | **11**| m12| m13| m15| m14|
    | **10**| m8 | m9 | m11| m10|

    Here, rows represent variables A and B, and columns represent variables C and D. Again, observe the Gray code ordering in both row and column labels, and the wrap-around adjacency.

The key takeaway for the structure is the Gray code ordering, which ensures that any two cells that are directly next to each other (including wrap-around) differ by only one variable. This property is what allows us to group adjacent '1's (or '0's) to simplify the logic.

## Practical Scenario

Imagine you are designing a simple traffic light controller for a single intersection. You have three inputs: a sensor indicating if there's a car on the north-south road (NS), a sensor for the east-west road (EW), and a system clock. The output is a signal to turn the green light on for the respective road.

You've already derived a truth table for the NS green light. To simplify the logic needed to implement this, you would draw a 3-variable K-map and fill it in according to your truth table. The structure of the K-map (how the 8 cells are arranged and labeled) is the first step before you can even start placing your '1's and '0's from the truth table.

## Practice Task

Draw an empty 3-variable Karnaugh Map. Label the rows and columns correctly using Gray code. Fill in the minterm numbers (m0 through m7) in each cell according to the standard convention.

## Self-Check Questions

1.  How many cells are in a Karnaugh Map for 4 input variables?
2.  What type of code is used to label the rows and columns of a Karnaugh Map, and why is it important?
3.  In a 3-variable K-map, which minterms are adjacent to m5 (both horizontally and vertically, including wrap-around)?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/karnaugh-map-structure|Karnaugh Map Structure]]
