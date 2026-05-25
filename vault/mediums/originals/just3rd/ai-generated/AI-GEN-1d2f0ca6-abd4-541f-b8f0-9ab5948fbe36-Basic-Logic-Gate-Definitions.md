---
type: "medium"
title: "Basic Logic Gate Definitions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/basic-logic-gate-definitions|basic-logic-gate-definitions]]"
learning-time-in-minutes: 4
---
# Basic Logic Gate Definitions

Logic gates are the building blocks of digital circuits. They are electronic switches that take one or more binary inputs and produce a single binary output. Understanding these basic gates is fundamental to grasping how digital systems, from simple calculators to complex computers, process information.

## What are Logic Gates?

At their core, logic gates implement Boolean algebra operations. Boolean algebra deals with variables that can have only two values: **TRUE** (often represented as 1) and **FALSE** (often represented as 0). Logic gates allow us to perform these logical operations on electrical signals.

This lesson focuses on identifying and understanding the common types of logic gates.

### The Basic Logic Gates

We will cover the following seven fundamental logic gates:

*   AND
*   OR
*   NOT
*   NAND (NOT AND)
*   NOR (NOT OR)
*   XOR (Exclusive OR)
*   XNOR (Exclusive NOR)

For each gate, we will look at its symbol, its Boolean expression, and its truth function (how its output behaves based on its inputs).

---

## 1. AND Gate

The AND gate outputs **TRUE** only if *all* of its inputs are **TRUE**. Think of it like two switches in series; the light turns on only if both switches are closed.

*   **Symbol:**
    *   \(\text{A} \cdot \text{B}\) or \(\text{AB}\)
*   **Boolean Expression:**
    *   \(Y = A \cdot B\) (or \(Y = AB\))
    *   Where A and B are inputs, and Y is the output.
*   **Truth Table:**

| A | B | Y (A AND B) |
|---|---|-------------|
| 0 | 0 | 0           |
| 0 | 1 | 0           |
| 1 | 0 | 0           |
| 1 | 1 | 1           |

---

## 2. OR Gate

The OR gate outputs **TRUE** if *at least one* of its inputs is **TRUE**. Imagine two light switches in parallel; if either switch is closed, the light turns on.

*   **Symbol:**
    *   \(A + B\)
*   **Boolean Expression:**
    *   \(Y = A + B\)
    *   Where A and B are inputs, and Y is the output.
*   **Truth Table:**

| A | B | Y (A OR B) |
|---|---|------------|
| 0 | 0 | 0          |
| 0 | 1 | 1          |
| 1 | 0 | 1          |
| 1 | 1 | 1          |

---

## 3. NOT Gate (Inverter)

The NOT gate has only one input and one output. It inverts the input. If the input is **TRUE**, the output is **FALSE**, and vice-versa.

*   **Symbol:**
    *   \(\overline{A}\) or \(A'\)
*   **Boolean Expression:**
    *   \(Y = \overline{A}\) (or \(Y = A'\))
    *   Where A is the input, and Y is the output.
*   **Truth Table:**

| A | Y (NOT A) |
|---|-----------|
| 0 | 1         |
| 1 | 0         |

---

## 4. NAND Gate (NOT AND)

The NAND gate is a combination of an AND gate followed by a NOT gate. It outputs **FALSE** only if *all* of its inputs are **TRUE**. Otherwise, it outputs **TRUE**.

*   **Symbol:**
    *   \(\overline{A \cdot B}\) or \((\overline{AB})\)
*   **Boolean Expression:**
    *   \(Y = \overline{A \cdot B}\)
    *   Where A and B are inputs, and Y is the output.
*   **Truth Table:**

| A | B | Y (A NAND B) |
|---|---|--------------|
| 0 | 0 | 1            |
| 0 | 1 | 1            |
| 1 | 0 | 1            |
| 1 | 1 | 0            |

---

## 5. NOR Gate (NOT OR)

The NOR gate is a combination of an OR gate followed by a NOT gate. It outputs **TRUE** only if *all* of its inputs are **FALSE**. Otherwise, it outputs **FALSE**.

*   **Symbol:**
    *   \(\overline{A + B}\)
*   **Boolean Expression:**
    *   \(Y = \overline{A + B}\)
    *   Where A and B are inputs, and Y is the output.
*   **Truth Table:**

| A | B | Y (A NOR B) |
|---|---|-------------|
| 0 | 0 | 1           |
| 0 | 1 | 0           |
| 1 | 0 | 0           |
| 1 | 1 | 0           |

---

## 6. XOR Gate (Exclusive OR)

The XOR gate outputs **TRUE** if its inputs are *different*. It outputs **FALSE** if its inputs are the *same*.

*   **Symbol:**
    *   \(A \oplus B\)
*   **Boolean Expression:**
    *   \(Y = A \oplus B\)
    *   Where A and B are inputs, and Y is the output.
    *   This can also be expressed as \(Y = (A \cdot \overline{B}) + (\overline{A} \cdot B)\).
*   **Truth Table:**

| A | B | Y (A XOR B) |
|---|---|-------------|
| 0 | 0 | 0           |
| 0 | 1 | 1           |
| 1 | 0 | 1           |
| 1 | 1 | 0           |

---

## 7. XNOR Gate (Exclusive NOR)

The XNOR gate is the inverse of the XOR gate. It outputs **TRUE** if its inputs are the *same*, and **FALSE** if its inputs are *different*.

*   **Symbol:**
    *   \(\overline{A \oplus B}\)
*   **Boolean Expression:**
    *   \(Y = \overline{A \oplus B}\)
    *   Where A and B are inputs, and Y is the output.
    *   This can also be expressed as \(Y = (A \cdot B) + (\overline{A} \cdot \overline{B})\).
*   **Truth Table:**

| A | B | Y (A XNOR B) |
|---|---|--------------|
| 0 | 0 | 1            |
| 0 | 1 | 0            |
| 1 | 0 | 0            |
| 1 | 1 | 1            |

---

## Summary

Understanding the behavior of these seven basic logic gates is the first step in comprehending digital logic. Each gate performs a specific logical function, and by combining them, we can build complex digital circuits that perform calculations, store data, and control devices. You've now learned to identify them by their symbols and understand their output based on their inputs.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/basic-logic-gate-definitions|Basic Logic Gate Definitions]]
