---
type: "medium"
title: "Boolean Expressions and Logic Gates"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/boolean-expressions|boolean-expressions]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/logic-fundamentals|logic-fundamentals]]"
learning-time-in-minutes: 5
---
# Boolean Expressions and Logic Gates

In the world of digital circuits and computer science, we use a special kind of algebra called **Boolean algebra**. It's the foundation for how computers make decisions and process information. This lesson focuses on understanding how **Boolean expressions** are directly linked to **logic gates**.

Think of Boolean algebra as a system that deals with only two values: **TRUE** (often represented as 1) and **FALSE** (often represented as 0). Boolean expressions are combinations of these values using logical operations.

## What is a Boolean Expression?

A Boolean expression is a statement that evaluates to either TRUE or FALSE. It's built using:

*   **Variables:** These represent inputs or states that can be TRUE or FALSE (e.g., A, B, X, Y).
*   **Constants:** The values TRUE (1) and FALSE (0).
*   **Operators:** These are the logical operations that combine variables and constants.

The most common Boolean operators are:

*   **AND:** Represented by a dot ($\cdot$) or simply by placing variables next to each other (e.g., A $\cdot$ B or AB). The result is TRUE only if *both* inputs are TRUE.
*   **OR:** Represented by a plus sign (+). The result is TRUE if *at least one* of the inputs is TRUE.
*   **NOT:** Represented by an apostrophe (') or a bar over the variable (e.g., A' or $\overline{A}$). This operator inverts the input: if the input is TRUE, the output is FALSE, and vice versa.

## Logic Gates: The Building Blocks

Logic gates are the physical circuits that perform these Boolean operations. Each logic gate corresponds to a specific Boolean operation and has a unique symbol and a truth table that shows its output for all possible input combinations.

The fundamental logic gates we'll associate with Boolean expressions are:

### 1. AND Gate

*   **Description:** The output is HIGH (TRUE or 1) if and only if all inputs are HIGH.
*   **Boolean Expression:** $A \cdot B$
*   **Symbol:**
    ![AND Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/AND_ANSI_Labelled.svg/120px-AND_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | B | A $\cdot$ B |
    |---|---|-------|
    | 0 | 0 | 0     |
    | 0 | 1 | 0     |
    | 1 | 0 | 0     |
    | 1 | 1 | 1     |

**Example:** Imagine a security system where a light turns on only if both the motion sensor (A) and the door sensor (B) are activated. This is an AND operation.

### 2. OR Gate

*   **Description:** The output is HIGH (TRUE or 1) if at least one of the inputs is HIGH.
*   **Boolean Expression:** $A + B$
*   **Symbol:**
    ![OR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/OR_ANSI_Labelled.svg/120px-OR_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | B | A + B |
    |---|---|-------|
    | 0 | 0 | 0     |
    | 0 | 1 | 1     |
    | 1 | 0 | 1     |
    | 1 | 1 | 1     |

**Example:** A notification system that triggers if either your phone battery is low (A) OR if you have a new message (B).

### 3. NOT Gate (Inverter)

*   **Description:** The output is the opposite of the input. If the input is HIGH, the output is LOW, and vice versa.
*   **Boolean Expression:** $A'$ (or $\overline{A}$)
*   **Symbol:**
    ![NOT Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/NOT_ANSI_Labelled.svg/120px-NOT_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | A' |
    |---|----|
    | 0 | 1  |
    | 1 | 0  |

**Example:** A system that keeps a fan OFF when the temperature is NORMAL (A) and turns it ON when the temperature is NOT NORMAL (A').

## Combining Gates: More Complex Expressions

You can combine these basic gates to create more complex logic circuits. Each combination forms a more elaborate Boolean expression.

### 4. NAND Gate

*   **Description:** This is a NOT AND gate. Its output is FALSE only when both inputs are TRUE.
*   **Boolean Expression:** $(A \cdot B)'$
*   **Symbol:**
    ![NAND Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/NAND_ANSI_Labelled.svg/120px-NAND_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | B | (A $\cdot$ B)' |
    |---|---|---------|
    | 0 | 0 | 1       |
    | 0 | 1 | 1       |
    | 1 | 0 | 1       |
    | 1 | 1 | 0       |

### 5. NOR Gate

*   **Description:** This is a NOT OR gate. Its output is TRUE only when both inputs are FALSE.
*   **Boolean Expression:** $(A + B)'$
*   **Symbol:**
    ![NOR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/NOR_ANSI_Labelled.svg/120px-NOR_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | B | (A + B)' |
    |---|---|-------|
    | 0 | 0 | 1     |
    | 0 | 1 | 0     |
    | 1 | 0 | 0     |
    | 1 | 1 | 0     |

### 6. XOR Gate (Exclusive OR)

*   **Description:** The output is TRUE if the inputs are *different*.
*   **Boolean Expression:** $A \oplus B$ (often read as "A XOR B") which is equivalent to $(A \cdot B') + (A' \cdot B)$
*   **Symbol:**
    ![XOR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/XOR_ANSI_Labelled.svg/120px-XOR_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | B | A $\oplus$ B |
    |---|---|----------|
    | 0 | 0 | 0        |
    | 0 | 1 | 1        |
    | 1 | 0 | 1        |
    | 1 | 1 | 0        |

**Example:** Used in arithmetic circuits for addition, where the sum bit is determined by whether the input bits are different.

### 7. XNOR Gate (Exclusive NOR)

*   **Description:** The output is TRUE if the inputs are the *same*. It's the inverse of the XOR gate.
*   **Boolean Expression:** $(A \oplus B)'$ which is equivalent to $(A \cdot B) + (A' \cdot B')$
*   **Symbol:**
    ![XNOR Gate Symbol](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/XNOR_ANSI_Labelled.svg/120px-XNOR_ANSI_Labelled.svg.png)
*   **Truth Table:**
    | A | B | $(A \oplus B)'$ |
    |---|---|-------------|
    | 0 | 0 | 1           |
    | 0 | 1 | 0           |
    | 1 | 0 | 0           |
    | 1 | 1 | 1           |

**Example:** A simple equality checker. If two inputs are the same (both 0 or both 1), the output is 1 (TRUE), indicating they are equal.

## Connecting Expressions to Gates

The core idea is that for any given Boolean expression, you can design a corresponding logic circuit using these gates. Conversely, any logic circuit built from these gates can be represented by a Boolean expression.

For example, the expression $A' + B \cdot C$ would be implemented by:

1.  A NOT gate for $A'$.
2.  An AND gate for $B \cdot C$.
3.  An OR gate combining the outputs of the NOT gate and the AND gate.

Understanding this direct association is crucial for designing, analyzing, and troubleshooting digital systems.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/boolean-expressions|Boolean Expressions]]
