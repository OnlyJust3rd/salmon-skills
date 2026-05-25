---
type: "medium"
title: "Formalizing Statements with Predicate Logic"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/logical-reasoning/microskills/statement-formalization|statement-formalization]]"
learning-time-in-minutes: 5
---
# Formalizing Statements with Predicate Logic

This lesson focuses on translating everyday language statements into the precise language of predicate logic. This skill is crucial for rigorously analyzing arguments and ensuring logical consistency. We'll build upon our understanding of propositional logic and introduce predicates, variables, and quantifiers.

## Why Formalize?

Natural language is often ambiguous. The same sentence can have multiple interpretations. Formalizing statements in predicate logic removes this ambiguity, allowing for clear and verifiable reasoning. This is foundational for tasks in artificial intelligence, database querying, and formal verification.

## Key Components of Predicate Logic

To represent statements, we need a few new tools:

*   **Predicates:** These are properties or relationships that can be true or false for objects. They are like verbs or adjectives in natural language. We represent them with capital letters followed by variables in parentheses.
    *   Example: `Likes(x, y)` could mean "x likes y".
    *   Example: `IsEven(n)` could mean "n is even".

*   **Variables:** These are placeholders for objects in our domain of discourse. We typically use lowercase letters like `x`, `y`, `z`, `n`.

*   **Constants:** These represent specific, named objects. We typically use uppercase letters like `A`, `B`, `C` or specific names.
    *   Example: `Likes(Alice, Bob)` means "Alice likes Bob".

*   **Quantifiers:** These specify the extent to which a predicate applies.
    *   **Universal Quantifier ($\forall$):** "For all" or "every".
        *   $\forall x P(x)$ means "For all x, P(x) is true."
    *   **Existential Quantifier ($\exists$):** "There exists" or "at least one".
        *   $\exists x P(x)$ means "There exists an x such that P(x) is true."

## Statement Formalization: Step-by-Step

Let's break down the process of translating statements.

### Step 1: Identify the Domain of Discourse

What are we talking about? Are we discussing people, numbers, animals, or a mix? This helps define what our variables can represent.

### Step 2: Identify Predicates and Constants

What properties or relationships are being described? What are the specific objects involved?

### Step 3: Determine the Quantifiers

Does the statement apply to *all* objects, or only *some* objects? This will tell us whether to use $\forall$ or $\exists$.

### Step 4: Construct the Logical Formula

Combine the predicates, variables, constants, and quantifiers to accurately represent the statement.

## Worked Examples

Let's apply these steps to some examples. Assume our domain of discourse is all people.

**Statement 1:** "Everyone likes pizza."

1.  **Domain:** All people.
2.  **Predicates/Constants:**
    *   `Likes(x, y)`: x likes y.
    *   `Pizza`: A constant representing pizza.
3.  **Quantifier:** "Everyone" implies *for all* people. So, $\forall$.
4.  **Formula:** $\forall x \text{Likes}(x, \text{Pizza})$
    *   *Explanation:* For every person `x`, `x` likes pizza.

**Statement 2:** "Some people are doctors."

1.  **Domain:** All people.
2.  **Predicates/Constants:**
    *   `IsDoctor(x)`: x is a doctor.
3.  **Quantifier:** "Some people" implies *there exists at least one* person. So, $\exists$.
4.  **Formula:** $\exists x \text{IsDoctor}(x)$
    *   *Explanation:* There exists at least one person `x` such that `x` is a doctor.

**Statement 3:** "Alice knows Bob."

1.  **Domain:** All people.
2.  **Predicates/Constants:**
    *   `Knows(x, y)`: x knows y.
    *   `Alice`: A constant representing Alice.
    *   `Bob`: A constant representing Bob.
3.  **Quantifier:** No explicit quantifier, so it applies to specific individuals.
4.  **Formula:** $\text{Knows}(\text{Alice}, \text{Bob})$
    *   *Explanation:* The relationship "Knows" holds between the constants Alice and Bob.

**Statement 4:** "All students in this class study logic."

1.  **Domain:** People.
2.  **Predicates/Constants:**
    *   `IsStudentInThisClass(x)`: x is a student in this class.
    *   `StudiesLogic(x)`: x studies logic.
3.  **Quantifier:** "All students" implies $\forall$.
4.  **Formula:** $\forall x (\text{IsStudentInThisClass}(x) \rightarrow \text{StudiesLogic}(x))$
    *   *Explanation:* For every person `x`, IF `x` is a student in this class, THEN `x` studies logic. We use an implication ($\rightarrow$) here because the statement is about a property that applies *if* someone is in the class. It doesn't say that *everyone* studies logic, only that those who are students in this class do.

**Statement 5:** "There is a person who is taller than everyone else."

1.  **Domain:** People.
2.  **Predicates/Constants:**
    *   `TallerThan(x, y)`: x is taller than y.
3.  **Quantifier:** "There is a person" ($\exists$) and "taller than everyone else" ($\forall$).
4.  **Formula:** $\exists x \forall y (\text{TallerThan}(x, y))$
    *   *Explanation:* There exists a person `x` such that for all people `y`, `x` is taller than `y`.

## Common Pitfalls

*   **Confusing Quantifiers:** Make sure to distinguish between "all" and "some."
*   **Incorrect Order of Quantifiers:** $\forall x \exists y P(x, y)$ is generally not the same as $\exists y \forall x P(x, y)$. For example, "Everyone has a mother" ($\exists y \forall x \text{MotherOf}(y, x)$ is false, but "Everyone has a mother" ($\forall x \exists y \text{MotherOf}(y, x)$) is true if interpreted as "For every person `x`, there exists a person `y` who is the mother of `x`."
*   **Missing Implications:** When using $\forall$ with a condition, an implication ($\rightarrow$) is often needed. For example, `$\forall x \text{Dog}(x) \wedge \text{Barks}(x)$` means "Everything is a dog and barks," which is likely not what you want. Instead, `$\forall x (\text{Dog}(x) \rightarrow \text{Barks}(x))$` means "All dogs bark."

## Practice

Try formalizing the following statements:

1.  "All even numbers are divisible by 2." (Domain: Integers)
2.  "There is a number that is greater than all other numbers." (Domain: Real Numbers)
3.  "John likes only his friends." (Domain: People. Assume `Likes(x, y)` and `IsFriendOf(x, y)`).
4.  "Every cat has fur." (Domain: Animals. Assume `IsCat(x)` and `HasFur(x)`).

By mastering statement formalization, you gain a powerful tool for clear and precise logical reasoning.

## Supports

- [[skills/mathematics/discrete-math/logical-reasoning/microskills/statement-formalization|Statement Formalization]]
