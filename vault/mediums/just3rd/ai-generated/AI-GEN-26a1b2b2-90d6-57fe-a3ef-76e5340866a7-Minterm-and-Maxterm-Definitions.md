---
type: "medium"
title: "Minterms and Maxterms: Building Blocks of Combinational Logic"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/combinational-logic-design/microskills/minterm-and-maxterm-definitions|minterm-and-maxterm-definitions]]"
---
# Minterms and Maxterms: Building Blocks of Combinational Logic

In combinational logic design, we often need to represent the behavior of a circuit using mathematical expressions. Minterms and maxterms are fundamental concepts that help us do this, especially when we're working with truth tables.

### What are Minterms and Maxterms?

Think of them as specific ways to describe a single row in a truth table.

*   **Minterm:** A minterm represents a **single output combination** where the output is TRUE (1). It's a product (AND) of all input variables, where each variable appears either in its true form (e.g., A) or its complemented form (e.g., A'). A minterm is TRUE only for one specific combination of input values.

    For an n-variable system, there are \(2^n\) minterms, and each minterm corresponds to one row of the truth table where the output is 1.

*   **Maxterm:** A maxterm represents a **single output combination** where the output is FALSE (0). It's a sum (OR) of all input variables, where each variable appears either in its true form or its complemented form. A maxterm is FALSE only for one specific combination of input values.

    For an n-variable system, there are also \(2^n\) maxterms, and each maxterm corresponds to one row of the truth table where the output is 0.

### Let's Look at an Example

Consider a simple combinational logic circuit with two inputs, A and B.

| A | B | Output |
|---|---|--------|
| 0 | 0 | 0      |
| 0 | 1 | 1      |
| 1 | 0 | 1      |
| 1 | 1 | 0      |

Here, we use '0' to represent the logic LOW (FALSE) and '1' to represent the logic HIGH (TRUE). The complemented form of a variable is denoted by a bar over it (e.g., \(\bar{A}\)).

**Minterms:**

*   For the output to be 1 when A=0 and B=1, we need a minterm that is TRUE only for this input combination. This is represented as \(\bar{A}B\).
*   For the output to be 1 when A=1 and B=0, the minterm is \(A\bar{B}\).

So, the minterms corresponding to the TRUE outputs are \(\bar{A}B\) and \(A\bar{B}\).

**Maxterms:**

*   For the output to be 0 when A=0 and B=0, we need a maxterm that is FALSE only for this input combination. This is represented as \(A+B\). (If A=0 and B=0, then A+B = 0+0 = 0).
*   For the output to be 0 when A=1 and B=1, the maxterm is \(\bar{A}+\bar{B}\). (If A=1 and B=1, then \(\bar{A}=0\) and \(\bar{B}=0\), so \(\bar{A}+\bar{B}\) = 0+0 = 0).

So, the maxterms corresponding to the FALSE outputs are \(A+B\) and \(\bar{A}+\bar{B}\).

**General Notation:**

Minterms are often denoted by \(m\) followed by the decimal equivalent of the binary input combination. For example, for two variables A and B:

*   A=0, B=0 (\(00_2\)): \(\bar{A}\bar{B}\) is \(m_0\)
*   A=0, B=1 (\(01_2\)): \(\bar{A}B\) is \(m_1\)
*   A=1, B=0 (\(10_2\)): \(A\bar{B}\) is \(m_2\)
*   A=1, B=1 (\(11_2\)): \(AB\) is \(m_3\)

Maxterms are often denoted by \(M\) followed by the decimal equivalent of the binary input combination.

*   A=0, B=0 (\(00_2\)): \(A+B\) is \(M_0\)
*   A=0, B=1 (\(01_2\)): \(A+\bar{B}\) is \(M_1\)
*   A=1, B=0 (\(10_2\)): \(\bar{A}+B\) is \(M_2\)
*   A=1, B=1 (\(11_2\)): \(\bar{A}+\bar{B}\) is \(M_3\)

### Why are they Important?

Minterms and maxterms are crucial because they allow us to directly derive Boolean expressions from a truth table. This is the foundation for simplifying logic circuits using methods like Karnaugh maps.

### Practice Task

For a system with three inputs: X, Y, and Z.

1.  Write the minterm for the output being TRUE when X=1, Y=0, and Z=1.
2.  Write the maxterm for the output being FALSE when X=0, Y=1, and Z=0.
3.  List all the minterms for a truth table where the output is TRUE for the input combinations (0,0,0), (0,1,0), and (1,1,1).
4.  List all the maxterms for a truth table where the output is FALSE for the input combinations (0,0,1), (0,1,1), and (1,0,1).

### Self-Check Questions

1.  What is a minterm designed to represent in a truth table?
2.  What logical operation (AND or OR) is used to form a minterm?
3.  What is a maxterm designed to represent in a truth table?
4.  What logical operation (AND or OR) is used to form a maxterm?
5.  For 3 input variables, how many minterms are there in total? And how many maxterms?

## Supports

- [[skills/hardware-embedded/electronics-embedded/combinational-logic-design/microskills/minterm-and-maxterm-definitions|Minterm and Maxterm Definitions]]
