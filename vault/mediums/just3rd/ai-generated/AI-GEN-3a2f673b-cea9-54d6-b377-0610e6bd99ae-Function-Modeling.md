---
type: "medium"
title: "Modeling Mappings with Functions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/discrete-structure-modeling/microskills/function-modeling|Function Modeling]]"
---
# Modeling Mappings with Functions

In the world of discrete structures and combinatorial problems, we often encounter situations where we need to represent relationships or transformations between different collections of items. Functions are a fundamental tool for modeling these mappings. This lesson focuses on applying functions to represent these relationships in a clear and structured way.

## What is a Function in this Context?

When we talk about functions in discrete structures, we're referring to a specific type of relationship between two sets. Let's call these sets $A$ (the domain) and $B$ (the codomain).

A function, denoted as \(f: A \to B\), is a rule that assigns to **each element** in set $A$ **exactly one element** in set $B$.

*   **Domain (A):** The set of all possible input values.
*   **Codomain (B):** The set of all possible output values.
*   **Rule:** The mechanism that defines how an input from $A$ is mapped to an output in $B$.

Think of it like a machine: you put something in (an element from $A$), and the machine gives you exactly one thing out (an element from $B$).

### Key Properties:

1.  **Every element in the domain must be mapped.** No element in $A$ can be left out.
2.  **Each element in the domain maps to only one element in the codomain.** An element in $A$ cannot be mapped to multiple elements in $B$.

## Applying Functions to Model Combinatorial Elements

Functions are incredibly useful for representing various aspects of combinatorial problems. Let's explore some common scenarios.

### Scenario 1: Representing a Transformation

Imagine you have a set of items, and you want to transform them in some way.

**Problem:** You have a set of numbers $S = \{1, 2, 3, 4\}$. You want to square each number and see what you get.

**Modeling with a Function:**
We can define a function \(f: S \to S\) where the rule is to square the input.

*   Domain: $S = \{1, 2, 3, 4\}$
*   Codomain: $S = \{1, 2, 3, 4\}$ (or a larger set like integers $\mathbb{Z}$, but here the outputs happen to fall within $S$)
*   Rule: \(f(x) = x^2\)

Applying the function:
*   \(f(1) = 1^2 = 1\)
*   \(f(2) = 2^2 = 4\)
*   \(f(3) = 3^2 = 9\)
*   \(f(4) = 4^2 = 16\)

If we consider the codomain to be just $\{1, 2, 3, 4\}$, then elements like 9 and 16 are not in the codomain. A more appropriate codomain for this function would be the set of positive integers $\mathbb{Z}^+$. So, \(f: \{1, 2, 3, 4\} \to \mathbb{Z}^+\), with \(f(x) = x^2\).

The set of actual outputs is called the **image** or **range** of the function. In the case of \(f(x) = x^2\) with domain $\{1, 2, 3, 4\}$, the image is $\{1, 4, 9, 16\}$.

### Scenario 2: Representing Assignment or Categorization

Functions can model assigning items to categories or assigning properties.

**Problem:** You have a set of fruits $F = \{\text{apple, banana, cherry}\}$. You want to classify them by color. Let the set of colors be $C = \{\text{red, yellow, brown}\}$.

**Modeling with a Function:**
We can define a function \(color: F \to C\) where the rule assigns each fruit to its typical color.

*   Domain: $F = \{\text{apple, banana, cherry}\}$
*   Codomain: $C = \{\text{red, yellow, brown}\}$
*   Rule: Assign the primary color.

Applying the function:
*   \(color(\text{apple}) = \text{red}\)
*   \(color(\text{banana}) = \text{yellow}\)
*   \(color(\text{cherry}) = \text{red}\)

Notice that multiple elements in the domain (apple and cherry) can map to the same element in the codomain (red). This is perfectly fine for a function.

### Scenario 3: Representing Sequential Data

Sequences can be viewed as functions from the natural numbers (or a subset thereof) to a set of values.

**Problem:** Consider the sequence of even numbers starting from 2: 2, 4, 6, 8, ...

**Modeling with a Function:**
We can define a function \(E: \mathbb{Z}^+ \to \mathbb{Z}^+\) where \(\mathbb{Z}^+\) is the set of positive integers.

*   Domain: $\mathbb{Z}^+ = \{1, 2, 3, 4, \dots\}$ (representing the position in the sequence)
*   Codomain: $\mathbb{Z}^+ = \{1, 2, 3, 4, \dots\}$ (the actual even numbers)
*   Rule: \(E(n) = 2n\)

Applying the function:
*   \(E(1) = 2 \times 1 = 2\) (The 1st even number)
*   \(E(2) = 2 \times 2 = 4\) (The 2nd even number)
*   \(E(3) = 2 \times 3 = 6\) (The 3rd even number)
*   And so on...

This function precisely models the generation of the sequence of even numbers.

## Common Pitfalls and How to Avoid Them

*   **Mapping one input to multiple outputs:** This violates the definition of a function. For example, if you tried to map a person to all their possible hobbies, that wouldn't be a function because one person can have multiple hobbies. You might need to redefine your sets or the mapping rule. Perhaps map a person to their *primary* hobby, or map a person to a *set* of their hobbies (which would then be a function mapping to a set of elements).
*   **Leaving an input element unmapped:** Every element in the domain *must* have an assigned output. If your rule doesn't cover all inputs, you need to extend the rule or adjust the domain.

## Practice and Application

Consider a combinatorial problem involving scheduling. You have a set of tasks $T = \{\text{Task A, Task B, Task C}\}$ and a set of available time slots $S = \{\text{9 AM, 10 AM, 11 AM}\}$.

1.  Can you define a function that assigns each task to a unique time slot? What would be the domain, codomain, and rule?
2.  What if you want to assign each time slot to a task it will be used for? Is this a function? Why or why not?
3.  If multiple tasks could potentially happen in the same time slot (e.g., if it's about *when* a task *starts*), how would you model that?

By carefully defining your sets and the mapping rule, you can effectively use functions to model various relationships and structures in discrete mathematics and combinatorial problems. This skill is foundational for understanding more complex discrete structures.

## Supports

- [[skills/programming/data-structures/discrete-structure-modeling/microskills/function-modeling|Function Modeling]]
