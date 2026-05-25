---
type: "medium"
title: "De Morgan's Theorem Statement"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/de-morgan-s-theorem-statement|de-morgan-s-theorem-statement]]"
learning-time-in-minutes: 4
---
# De Morgan's Theorem Statement

Understanding De Morgan's theorems is a fundamental step in simplifying and manipulating logic expressions. These theorems provide a powerful way to rewrite complex logical statements, making them easier to analyze and implement.

## What are De Morgan's Theorems?

De Morgan's theorems are a pair of rules in Boolean algebra that relate the negation of a conjunction (AND) or a disjunction (OR) to the negations of their individual components. They are named after the mathematician Augustus De Morgan.

### Theorem 1: Negation of a Conjunction

The first theorem states that the negation of a conjunction (AND operation) is equivalent to the disjunction (OR operation) of the negations of the individual components.

In logical notation, this is expressed as:

$$ \neg (P \land Q) \equiv \neg P \lor \neg Q $$

This means "It is not true that both P and Q are true" is the same as saying "Either P is not true, or Q is not true (or both)."

### Theorem 2: Negation of a Disjunction

The second theorem states that the negation of a disjunction (OR operation) is equivalent to the conjunction (AND operation) of the negations of the individual components.

In logical notation, this is expressed as:

$$ \neg (P \lor Q) \equiv \neg P \land \neg Q $$

This means "It is not true that either P or Q (or both) are true" is the same as saying "P is not true, AND Q is not true."

## Understanding Through Examples

Let's use everyday language to grasp these theorems.

### Example for Theorem 1: $\neg (P \land Q) \equiv \neg P \lor \neg Q$

Imagine you are planning an outdoor event. Let:

*   **P:** The weather is sunny.
*   **Q:** The temperature is warm.

The statement "It is not true that both the weather is sunny AND the temperature is warm" ($\neg (P \land Q)$) means the event is at risk of being called off because at least one of the desired conditions is not met.

According to De Morgan's theorem, this is equivalent to:

"Either the weather is NOT sunny ($\neg P$), OR the temperature is NOT warm ($\neg Q$)."

If it's raining ($\neg P$), the event might be off. If it's cold ($\neg Q$), the event might be off. If it's both raining and cold, it's definitely off. The theorem correctly captures that the event is jeopardized if *either* condition fails.

### Example for Theorem 2: $\neg (P \lor Q) \equiv \neg P \land \neg Q$

Continuing with the event planning example:

*   **P:** We have enough chairs.
*   **Q:** We have enough tables.

The statement "It is not true that we have enough chairs OR we have enough tables (or both)" ($\neg (P \lor Q)$) means we are deficient in our resources.

According to De Morgan's theorem, this is equivalent to:

"We do NOT have enough chairs ($\neg P$), AND we do NOT have enough tables ($\neg Q$)."

This makes logical sense. If we are short on *either* chairs *or* tables, it means we are definitively lacking in *both* if we want to meet the requirement of having enough of at least one. The negation of having enough of at least one is having insufficient of both.

## Why are these theorems important?

De Morgan's theorems are crucial for:

*   **Simplifying Logic Circuits:** In digital electronics, these theorems allow designers to rewrite complex logic gates into simpler configurations, potentially reducing the number of components and improving efficiency.
*   **Proof in Logic and Mathematics:** They are fundamental tools for proving logical equivalences and manipulating complex logical statements in proofs.
*   **Computer Programming:** Understanding how to negate compound conditions is essential for writing clear and correct conditional statements (if-then-else) in programming. For instance, negating `if (x > 5 && y < 10)` can be done using De Morgan's theorem to `if (x <= 5 || y >= 10)`.

By mastering the statement of De Morgan's theorems, you gain a powerful ability to rephrase and simplify logical expressions, which is a cornerstone of logical reasoning.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/logic-fundamentals/microskills/de-morgan-s-theorem-statement|De Morgan's Theorem Statement]]
