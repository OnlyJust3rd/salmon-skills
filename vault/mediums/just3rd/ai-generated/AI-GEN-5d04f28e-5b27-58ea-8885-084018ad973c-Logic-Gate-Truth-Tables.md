---
type: "medium"
title: "Logic Gate Truth Tables"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/logic-fundamentals/microskills/logic-gate-truth-tables|Logic Gate Truth Tables]]"
---
# Logic Gate Truth Tables

In the world of digital electronics and computer science, logic gates are the fundamental building blocks. They perform basic logical operations on one or more binary inputs (0s and 1s) to produce a single binary output. Understanding their behavior is key to comprehending how digital systems work. This lesson focuses on recalling the truth tables for the basic logic gates.

A truth table is a systematic way to show the output of a logic gate for every possible combination of its inputs. This is crucial for remembering and predicting the behavior of these gates.

## The Basic Logic Gates and Their Truth Tables

We'll cover the six fundamental logic gates: AND, OR, NOT, NAND, NOR, and XOR. For each, we'll present its truth table. The inputs are typically labeled 'A' and 'B' for gates with two inputs, and the output is labeled 'Q' or 'Output'.

### 1. AND Gate

The AND gate outputs a 1 only if all of its inputs are 1. Otherwise, it outputs 0. Think of it as requiring both conditions to be true for the outcome to be true.

| Input A | Input B | Output Q |
| :------ | :------ | :------- |
| 0       | 0       | 0        |
| 0       | 1       | 0        |
| 1       | 0       | 0        |
| 1       | 1       | 1        |

### 2. OR Gate

The OR gate outputs a 1 if at least one of its inputs is 1. It only outputs 0 if all of its inputs are 0. This gate represents the "either/or" scenario.

| Input A | Input B | Output Q |
| :------ | :------ | :------- |
| 0       | 0       | 0        |
| 0       | 1       | 1        |
| 1       | 0       | 1        |
| 1       | 1       | 1        |

### 3. NOT Gate (Inverter)

The NOT gate is unique as it only has one input. It simply inverts the input. If the input is 0, the output is 1, and vice versa.

| Input A | Output Q |
| :------ | :------- |
| 0       | 1        |
| 1       | 0        |

### 4. NAND Gate (NOT AND)

The NAND gate is the inverse of the AND gate. It outputs 0 only when all of its inputs are 1. For all other input combinations, it outputs 1.

| Input A | Input B | Output Q |
| :------ | :------ | :------- |
| 0       | 0       | 1        |
| 0       | 1       | 1        |
| 1       | 0       | 1        |
| 1       | 1       | 0        |

### 5. NOR Gate (NOT OR)

The NOR gate is the inverse of the OR gate. It outputs 1 only when all of its inputs are 0. For any other input combination, it outputs 0.

| Input A | Input B | Output Q |
| :------ | :------ | :------- |
| 0       | 0       | 1        |
| 0       | 1       | 0        |
| 1       | 0       | 0        |
| 1       | 1       | 0        |

### 6. XOR Gate (Exclusive OR)

The XOR gate outputs 1 if its inputs are different. If the inputs are the same (both 0 or both 1), it outputs 0.

| Input A | Input B | Output Q |
| :------ | :------ | :------- |
| 0       | 0       | 0        |
| 0       | 1       | 1        |
| 1       | 0       | 1        |
| 1       | 1       | 0        |

### 7. XNOR Gate (Exclusive NOR)

The XNOR gate is the inverse of the XOR gate. It outputs 1 if its inputs are the same. If the inputs are different, it outputs 0.

| Input A | Input B | Output Q |
| :------ | :------ | :------- |
| 0       | 0       | 1        |
| 0       | 1       | 0        |
| 1       | 0       | 0        |
| 1       | 1       | 1        |

## Remembering the Truth Tables

The best way to recall these truth tables is through practice and understanding the logic behind each gate.

*   **AND:** "Both must be true."
*   **OR:** "At least one must be true."
*   **NOT:** "Flip it."
*   **NAND:** "Opposite of AND."
*   **NOR:** "Opposite of OR."
*   **XOR:** "Different inputs give true."
*   **XNOR:** "Same inputs give true."

By consistently reviewing these tables and associating them with these simple mnemonics, you'll build a strong foundation for understanding more complex digital circuits and Boolean logic.

## Supports

- [[skills/hardware-embedded/electronics-embedded/logic-fundamentals/microskills/logic-gate-truth-tables|Logic Gate Truth Tables]]
