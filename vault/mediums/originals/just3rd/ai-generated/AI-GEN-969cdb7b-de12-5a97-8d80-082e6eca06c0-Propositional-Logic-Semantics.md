---
type: "medium"
title: "Understanding Propositional Logic Semantics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/logical-reasoning/microskills/propositional-logic-semantics|propositional-logic-semantics]]"
learning-time-in-minutes: 5
---
# Understanding Propositional Logic Semantics

In logical reasoning, we often deal with statements that can be true or false. Propositional logic provides a formal way to represent and analyze these statements and the relationships between them. This lesson focuses on the **semantics** of propositional logic, which is all about understanding the **meaning** and **truth value** of logical expressions.

## What is Semantics?

In the context of logic, semantics deals with the interpretation of symbols and their meanings. For propositional logic, this means:

*   **Assigning truth values:** Determining whether a basic statement (a proposition) is true or false.
*   **Evaluating compound statements:** Figuring out the truth value of more complex statements built from simpler ones using logical connectives.

## Basic Components: Propositions and Truth Values

The building blocks of propositional logic are **propositions**.

> **Definition:** A proposition is a declarative sentence that is either true or false, but not both.

For example:
*   "The sky is blue." (This is a proposition, and currently, it's true.)
*   "2 + 2 = 5." (This is a proposition, and it's false.)
*   "What time is it?" (This is NOT a proposition because it's a question and doesn't have a definite truth value.)

We assign **truth values** to propositions. The two standard truth values are:

*   **True (T)**
*   **False (F)**

In formal logic, these are often represented by `1` for True and `0` for False.

## Logical Connectives: Operators of Meaning

Logical connectives are symbols that allow us to combine simple propositions into more complex ones. The semantics of these connectives tell us how the truth value of the compound proposition depends on the truth values of its components.

Here are the fundamental connectives:

### 1. Negation (NOT)

The negation of a proposition reverses its truth value.

*   **Symbol:** `¬` (or `~`)
*   **Meaning:** "It is not the case that..."

**Truth Table for Negation:**

| P   | ¬P  |
| :-- | :-- |
| T   | F   |
| F   | T   |

*   **Example:** If `P` is "The sun is shining" (True), then `¬P` is "The sun is not shining" (False).

### 2. Conjunction (AND)

A conjunction is true only if both propositions are true.

*   **Symbol:** `∧` (or `&`)
*   **Meaning:** "...and..."

**Truth Table for Conjunction:**

| P   | Q   | P ∧ Q |
| :-- | :-- | :---- |
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | F     |
| F   | F   | F     |

*   **Example:** If `P` is "It is raining" and `Q` is "The ground is wet", then `P ∧ Q` ("It is raining and the ground is wet") is true only if both "It is raining" is true AND "The ground is wet" is true.

### 3. Disjunction (OR)

A disjunction is true if at least one of the propositions is true. This is the *inclusive* OR, meaning it's true even if both are true.

*   **Symbol:** `∨` (or `|`)
*   **Meaning:** "...or..."

**Truth Table for Disjunction:**

| P   | Q   | P ∨ Q |
| :-- | :-- | :---- |
| T   | T   | T     |
| T   | F   | T     |
| F   | T   | T     |
| F   | F   | F     |

*   **Example:** If `P` is "I will eat pizza" and `Q` is "I will eat pasta", then `P ∨ Q` ("I will eat pizza or I will eat pasta") is true if I eat pizza, or I eat pasta, or I eat both.

### 4. Implication (If... Then...)

An implication is false only when the first part (antecedent) is true and the second part (consequent) is false.

*   **Symbol:** `→` (or `⇒`)
*   **Meaning:** "If... then..."

**Truth Table for Implication:**

| P   | Q   | P → Q |
| :-- | :-- | :---- |
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | T     |
| F   | F   | T     |

*   **Example:** If `P` is "It is raining" and `Q` is "The streets are wet", then `P → Q` ("If it is raining, then the streets are wet") is only false if it *is* raining (`P` is True) but the streets are *not* wet (`Q` is False). If it's not raining, the statement "If it is raining, then the streets are wet" is considered true, regardless of whether the streets are wet or not. This can be counter-intuitive but is a standard convention in logic.

### 5. Biconditional (If and Only If)

A biconditional is true only when both propositions have the same truth value.

*   **Symbol:** `↔` (or `⇔`)
*   **Meaning:** "...if and only if..."

**Truth Table for Biconditional:**

| P   | Q   | P ↔ Q |
| :-- | :-- | :---- |
| T   | T   | T     |
| T   | F   | F     |
| F   | T   | F     |
| F   | F   | T     |

*   **Example:** If `P` is "You will pass the exam" and `Q` is "You study hard", then `P ↔ Q` ("You will pass the exam if and only if you study hard") is true if you pass the exam and you studied hard, or if you don't pass the exam and you didn't study hard.

## Evaluating Compound Propositions: Truth Assignments

To understand the semantics of a more complex formula, we need to consider all possible truth assignments for its basic propositions. A truth assignment is a mapping of truth values (T or F) to each propositional variable in the formula.

Let's consider the formula `(P ∧ Q) → R`.

1.  **Identify propositions:** P, Q, R.
2.  **Determine number of truth assignments:** With 3 propositions, there are $$2^3 = 8$$ possible truth assignments.
3.  **Construct a truth table:** We evaluate the formula step-by-step.

**Truth Table for (P ∧ Q) → R:**

| P   | Q   | R   | P ∧ Q | (P ∧ Q) → R |
| :-- | :-- | :-- | :---- | :---------- |
| T   | T   | T   | T     | T           |
| T   | T   | F   | T     | F           |
| T   | F   | T   | F     | T           |
| T   | F   | F   | F     | T           |
| F   | T   | T   | F     | T           |
| F   | T   | F   | F     | T           |
| F   | F   | T   | F     | T           |
| F   | F   | F   | F     | T           |

The last column, `(P ∧ Q) → R`, shows the truth value of the entire compound proposition for each possible combination of truth values for P, Q, and R. This table completely captures the meaning (semantics) of this specific logical formula.

By understanding how to assign truth values and how connectives operate, you can determine the truth or falsity of any complex statement within propositional logic. This is a foundational skill for all further logical reasoning.

## Supports

- [[skills/mathematics/discrete-math/logical-reasoning/microskills/propositional-logic-semantics|Propositional Logic Semantics]]
