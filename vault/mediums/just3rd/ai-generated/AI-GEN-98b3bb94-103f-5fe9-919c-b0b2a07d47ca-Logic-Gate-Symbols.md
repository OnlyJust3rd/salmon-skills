---
type: "medium"
title: "Understanding Logic Gate Symbols"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/logic-fundamentals/microskills/logic-gate-symbols|logic-gate-symbols]]"
---
# Understanding Logic Gate Symbols

In the world of digital electronics and computer science, we often need to represent complex operations in a simple, standardized way. This is where logic gates come in. They are the building blocks of digital circuits, and understanding their symbols is the first step in mastering Boolean algebra and logic gate fundamentals.

## What are Logic Gates?

Logic gates are fundamental electronic circuits that perform a basic logical operation on one or more binary inputs and produce a single binary output. Binary means they work with only two states, typically represented as 0 (false or low voltage) and 1 (true or high voltage).

Think of them like tiny decision-makers. Based on the inputs they receive, they decide whether to output a 0 or a 1.

## The Basic Logic Gates and Their Symbols

We'll explore the most common logic gates and their universally recognized symbols. Each symbol represents a specific logical function.

### 1. AND Gate

An AND gate outputs a 1 only if **all** of its inputs are 1. If any input is 0, the output will be 0.

**Symbol:**

The AND gate symbol has a flat input side and a curved output side.

```
    _____
--- |     \
    | AND  >----
--- |_____/
```

**Boolean Expression:**

If we have two inputs, A and B, the output X is represented as:
$$ X = A \cdot B $$
or
$$ X = AB $$

### 2. OR Gate

An OR gate outputs a 1 if **at least one** of its inputs is 1. The output is 0 only if all inputs are 0.

**Symbol:**

The OR gate symbol has a pointed input side and a curved output side.

```
      ____
--- /     \
   |      >----
--- \_____/
```

**Boolean Expression:**

For inputs A and B, the output X is:
$$ X = A + B $$

### 3. NOT Gate (Inverter)

A NOT gate has only one input and one output. It inverts the input signal. If the input is 0, the output is 1, and if the input is 1, the output is 0.

**Symbol:**

The NOT gate symbol is a triangle with a small circle (bubble) at the output. The bubble signifies inversion.

```
    ____
--- |>---|o----
    ----
```

**Boolean Expression:**

For input A, the output X is:
$$ X = \bar{A} $$
or
$$ X = A' $$

### 4. NAND Gate

A NAND gate is a combination of an AND gate followed by a NOT gate. Its name comes from "NOT AND." It outputs 0 only if all inputs are 1. In all other cases, it outputs 1.

**Symbol:**

The NAND gate symbol is the same as the AND gate symbol, but with a bubble at the output.

```
    _____
--- |     \
    | NAND >----o
--- |_____/
```

**Boolean Expression:**

For inputs A and B, the output X is:
$$ X = \overline{A \cdot B} $$

### 5. NOR Gate

A NOR gate is a combination of an OR gate followed by a NOT gate. Its name comes from "NOT OR." It outputs 1 only if all inputs are 0. In all other cases, it outputs 0.

**Symbol:**

The NOR gate symbol is the same as the OR gate symbol, but with a bubble at the output.

```
      ____
--- /     \
   |      >----o
--- \_____/
```

**Boolean Expression:**

For inputs A and B, the output X is:
$$ X = \overline{A + B} $$

### 6. XOR Gate (Exclusive OR)

An XOR gate outputs 1 if its inputs are different, and 0 if its inputs are the same. It's like a "this or that, but not both" operation.

**Symbol:**

The XOR gate symbol is similar to the OR gate, but with an additional curved line on the input side.

```
      ____
--- /     \
---/|     >----
   |_____/
```

**Boolean Expression:**

For inputs A and B, the output X is:
$$ X = A \oplus B $$

### 7. XNOR Gate (Exclusive NOR)

An XNOR gate outputs 1 if its inputs are the same, and 0 if its inputs are different. It's the inverse of the XOR gate.

**Symbol:**

The XNOR gate symbol is the same as the XOR gate symbol, but with a bubble at the output.

```
      ____
--- /     \
---/|     >----o
   |_____/
```

**Boolean Expression:**

For inputs A and B, the output X is:
$$ X = \overline{A \oplus B} $$
or
$$ X = A \odot B $$

## Why Symbols Matter

These symbols are crucial because they provide a standardized visual language for designing, analyzing, and communicating digital circuits. When you see these symbols in a circuit diagram, you can immediately understand the function of that part of the circuit without needing lengthy explanations. Mastering these symbols is fundamental to understanding how digital systems, from simple calculators to complex computers, operate.

## Supports

- [[skills/hardware-embedded/electronics-embedded/logic-fundamentals/microskills/logic-gate-symbols|Logic Gate Symbols]]
