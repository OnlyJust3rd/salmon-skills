---
type: "medium"
title: "Understanding the Building Blocks of Logic: Propositions and Connectives"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/logical-reasoning/microskills/basic-propositional-components|basic-propositional-components]]"
learning-time-in-minutes: 5
---
# Understanding the Building Blocks of Logic: Propositions and Connectives

In logical reasoning, we deal with statements and how they relate to each other. Propositional logic is a fundamental system for analyzing these relationships. To understand it, we first need to grasp its basic components: propositions and logical connectives.

## What is a Proposition?

At its core, a proposition is a declarative statement that is either **true** or **false**, but not both. Think of it as a statement that has a definite truth value.

Here are some examples of propositions:
*   "The sky is blue." (This is true.)
*   "2 + 2 = 5." (This is false.)
*   "Paris is the capital of France." (This is true.)

And here are some statements that are *not* propositions:
*   "What time is it?" (This is a question, not a statement.)
*   "Close the door." (This is a command.)
*   "This statement is false." (This leads to a paradox, as it cannot be definitively true or false.)
*   "x + 5 = 10" (This is an open sentence. Its truth value depends on the value of 'x'. We'll see how to handle these later, but in their current form, they aren't propositions.)

We typically represent propositions with lowercase letters, such as $p$, $q$, or $r$.

**Key Takeaway:** A proposition is a sentence with a single, unambiguous truth value (True or False).

## What are Logical Connectives?

Logical connectives are words or symbols that we use to combine simple propositions into more complex ones. They act like operators, similar to how the `+` operator combines numbers in arithmetic.

The most common logical connectives are:

1.  **Negation (NOT)**
    *   **Symbol:** $\neg$ or `~`
    *   **Meaning:** Reverses the truth value of a proposition. If $p$ is true, then $\neg p$ is false. If $p$ is false, then $\neg p$ is true.
    *   **Example:** If $p$ is "The sun is shining" (true), then $\neg p$ is "The sun is not shining" (false).

2.  **Conjunction (AND)**
    *   **Symbol:** $\wedge$ or `&`
    *   **Meaning:** Connects two propositions. The conjunction $p \wedge q$ is true only if *both* $p$ and $q$ are true. Otherwise, it's false.
    *   **Example:** If $p$ is "It is raining" and $q$ is "The wind is blowing," then $p \wedge q$ is "It is raining and the wind is blowing." This statement is only true if it is *both* raining *and* the wind is blowing.

3.  **Disjunction (OR)**
    *   **Symbol:** $\vee$ or `|`
    *   **Meaning:** Connects two propositions. The disjunction $p \vee q$ is true if *at least one* of $p$ or $q$ is true. It is false only if both $p$ and $q$ are false. This is usually an "inclusive or."
    *   **Example:** If $p$ is "I will study" and $q$ is "I will watch TV," then $p \vee q$ is "I will study or I will watch TV." This statement is true if I study, if I watch TV, or if I do both. It's only false if I do neither.

4.  **Implication (IF... THEN...)**
    *   **Symbol:** $\rightarrow$ or `=>`
    *   **Meaning:** Connects two propositions. The implication $p \rightarrow q$ (read as "if $p$, then $q$") is false only when $p$ is true and $q$ is false. In all other cases, it is true.
    *   **Example:** If $p$ is "You study hard" and $q$ is "You will pass the exam," then $p \rightarrow q$ is "If you study hard, then you will pass the exam."
        *   If you study hard (true) and pass the exam (true), the statement is true.
        *   If you study hard (true) and do not pass the exam (false), the statement is false.
        *   If you do not study hard (false) and pass the exam (true), the statement is true (the implication doesn't say what happens if you *don't* study).
        *   If you do not study hard (false) and do not pass the exam (false), the statement is true.

5.  **Biconditional (IF AND ONLY IF)**
    *   **Symbol:** $\leftrightarrow$ or `<=>`
    *   **Meaning:** Connects two propositions. The biconditional $p \leftrightarrow q$ is true if and only if $p$ and $q$ have the same truth value (both true or both false).
    *   **Example:** If $p$ is "The triangle has three equal sides" and $q$ is "The triangle has three equal angles," then $p \leftrightarrow q$ is "A triangle has three equal sides if and only if it has three equal angles." This statement is true because both conditions are met or neither is met.

## Truth Values and Truth Tables

The truth value of a compound proposition depends on the truth values of its component propositions and the connectives used. We can systematically represent all possible truth combinations and their resulting truth values using **truth tables**.

Let's look at a truth table for the **Conjunction ($\wedge$)**:

| $p$   | $q$   | $p \wedge q$ |
| :---- | :---- | :----------- |
| True  | True  | True         |
| True  | False | False        |
| False | True  | False        |
| False | False | False        |

As you can see, $p \wedge q$ is only True when both $p$ and $q$ are True.

Here's a truth table for **Implication ($\rightarrow$)**:

| $p$   | $q$   | $p \rightarrow q$ |
| :---- | :---- | :---------------- |
| True  | True  | True              |
| True  | False | False             |
| False | True  | True              |
| False | False | True              |

Notice that the implication $p \rightarrow q$ is only false when the premise ($p$) is true and the conclusion ($q$) is false.

**Practice:** Try to construct truth tables for Negation ($\neg$), Disjunction ($\vee$), and Biconditional ($\leftrightarrow$) yourself!

**Why is this important?** Understanding these basic components allows us to break down complex logical arguments into manageable parts, evaluate their validity, and build more sophisticated logical expressions. This is the foundation for understanding how we can reason about truth and falsity in a structured way.

## Supports

- [[skills/mathematics/discrete-math/logical-reasoning/microskills/basic-propositional-components|Basic Propositional Components]]
