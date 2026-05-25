---
type: "medium"
title: "Logic Gate Names and Symbols"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/logic-gate-names-and-symbols|logic-gate-names-and-symbols]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/logic-fundamentals|logic-fundamentals]]"
learning-time-in-minutes: 3
---
# Logic Gate Names and Symbols

Welcome to this foundational lesson on logic gates, a key component in understanding Logic Fundamentals. In this section, we'll focus on recognizing the names and standard symbols for the most common logic gates. This is a crucial first step in mastering Boolean algebra and digital circuit design.

## What are Logic Gates?

At their core, logic gates are the building blocks of digital circuits. They are electronic devices that perform a basic logical function on one or more binary inputs and produce a single binary output. Think of them as tiny decision-makers that operate based on simple rules of logic. The inputs and outputs are typically represented as either a high voltage (logic 1) or a low voltage (logic 0).

## The Basic Logic Gates and Their Symbols

There are several fundamental logic gates, each with a unique symbol and a specific function. Understanding these symbols is like learning the alphabet of digital electronics.

### AND Gate

The AND gate outputs a `1` only if all of its inputs are `1`. Otherwise, it outputs `0`.

**Symbol:**
```
    ___
---|   >-----
   |___|
```
*Note: The symbol is often depicted with a straight edge on the input side and a curved edge on the output side.*

### OR Gate

The OR gate outputs a `1` if at least one of its inputs is `1`. It only outputs `0` if all of its inputs are `0`.

**Symbol:**
```
    ____
---/    \----
  /______\
```
*Note: The symbol has a curved input side.*

### NOT Gate (Inverter)

The NOT gate, also known as an inverter, has only one input and one output. It inverts the input signal. If the input is `1`, the output is `0`, and vice versa.

**Symbol:**
```
    ___
---|>o-----
   |___|
```
*Note: The small circle (bubble) at the output signifies inversion.*

### NAND Gate

The NAND gate is a combination of an AND gate followed by a NOT gate. Its name is a contraction of "NOT AND". It outputs `0` only if all of its inputs are `1`. In all other cases, it outputs `1`.

**Symbol:**
```
    ___
---|>o>-----
   |___|
```
*Note: This symbol is essentially an AND gate symbol with an inversion bubble at the output.*

### NOR Gate

The NOR gate is a combination of an OR gate followed by a NOT gate. Its name is a contraction of "NOT OR". It outputs `1` only if all of its inputs are `0`. In all other cases, it outputs `0`.

**Symbol:**
```
    ____
---/    \o----
  /______\
```
*Note: This symbol is an OR gate symbol with an inversion bubble at the output.*

### XOR Gate (Exclusive OR)

The XOR gate outputs `1` if the inputs are different. If the inputs are the same (both `0` or both `1`), it outputs `0`.

**Symbol:**
```
    ____
---/    \----
--/______\
```
*Note: The curved input side has an additional curved line.*

### XNOR Gate (Exclusive NOR)

The XNOR gate outputs `1` if the inputs are the same. If the inputs are different, it outputs `0`. It is the inverse of the XOR gate.

**Symbol:**
```
    ____
---/    \o----
--/______\
```
*Note: This is an XOR gate symbol with an inversion bubble at the output.*

## Summary of Gate Symbols

To help you remember, here's a quick reference table. Notice how the symbols are distinct and often share common elements (like the inversion bubble).

| Gate Name | Symbol |
|---|---|
| AND | ``` \___ /--\ ``` |
| OR | ``` /    \ --\ ``` |
| NOT | ``` --|>o-- ``` |
| NAND | ``` --|>o>-- ``` |
| NOR | ``` --/    \o-- ``` |
| XOR | ``` --/    \ -- -- ``` |
| XNOR | ``` --/    \o-- -- ``` |

*(Note: The ASCII art symbols above are approximations. Familiarize yourself with the standard graphical representations.)*

## Why This Matters

Recognizing these symbols and knowing their names is fundamental. When you encounter diagrams of digital circuits, these symbols will be used to represent the logic being performed. Mastering this recognition is the first step towards understanding how complex digital systems are built and how they operate.

In the next section, we will explore the truth tables associated with each of these gates, which will further solidify your understanding of their behavior.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/logic-gate-names-and-symbols|Logic Gate Names and Symbols]]
