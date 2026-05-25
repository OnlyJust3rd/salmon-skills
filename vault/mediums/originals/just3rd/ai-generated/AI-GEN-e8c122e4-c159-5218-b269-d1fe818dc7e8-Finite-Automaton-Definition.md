---
type: "medium"
title: "Understanding Finite Automaton Components"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/computational-model-understanding/microskills/finite-automaton-definition|finite-automaton-definition]]"
related-skills:
  - "[[skills/computing/computer-science/algorithms/computational-model-understanding/computational-model-understanding|computational-model-understanding]]"
learning-time-in-minutes: 4
---
# Understanding Finite Automaton Components

This lesson focuses on the fundamental building blocks of a finite automaton (FA). Understanding these components is crucial for grasping how FAs process input and make decisions.

A finite automaton is a mathematical model of computation. It's like a simple machine that reads an input string, symbol by symbol, and changes its internal "state" based on predefined rules. At the end of the input, if the automaton is in a special "accept" state, it means the input string is accepted by the automaton. Otherwise, it's rejected.

### Key Components of a Finite Automaton

Let's break down the essential parts:

1.  **States (Q):** These represent the different internal conditions the automaton can be in. Think of them as discrete memory locations.
    *   *Example:* If we're building an FA to recognize simple greetings, states could represent "waiting for 'h'", "seen 'h'", "seen 'he'", etc.

2.  **Alphabet (Σ):** This is the set of all possible input symbols that the automaton can read.
    *   *Example:* For text-based FAs, the alphabet could be all lowercase English letters (`{'a', 'b', ..., 'z'}`), or it could be a smaller set like `{'0', '1'}` for binary strings.

3.  **Transition Function (δ):** This is the heart of the automaton's behavior. It tells us, given the current state and the next input symbol, what the next state will be. It's a mapping: `(current_state, input_symbol) -> next_state`.
    *   *Example:* If the automaton is in state "seen 'h'" and reads an 'e', the transition function might specify that it moves to state "seen 'he'".

4.  **Start State (q₀):** This is the initial state the automaton is in before it begins processing any input. There is always exactly one start state.
    *   *Example:* In our greeting FA, the start state would likely be "waiting for input".

5.  **Accept States (F):** This is a subset of all states. If the automaton finishes reading an input string and is in one of these accept states, the string is accepted.
    *   *Example:* In our greeting FA, a state like "finished 'hello'" would be an accept state.

### Practical Scenario: A Simple Coin Slot FA

Imagine a basic coin slot machine that only accepts dimes (D) and quarters (Q). It starts at $0.00 and accepts valid coins until it reaches $0.25 or more.

*   **States (Q):**
    *   `S0`: Current value is $0.00
    *   `S1`: Current value is $0.10 (after one dime)
    *   `S2`: Current value is $0.25 (after one quarter, or one dime + one dime + one nickel - wait, no nickels! Let's simplify. One quarter, or two dimes.)
    *   `S3`: Current value is $0.20 (after two dimes)
    *   `S4`: Current value is $0.35 (after one quarter + one dime)
    *   `S5`: Current value is $0.45 (after one quarter + two dimes)

*   **Alphabet (Σ):** `{D, Q}` (D for Dime, Q for Quarter)

*   **Start State (q₀):** `S0`

*   **Accept States (F):** `{S2, S4, S5}` (Any state where the value is $0.25 or more)

*   **Transition Function (δ):**
    *   `(S0, D) -> S1`
    *   `(S0, Q) -> S2`
    *   `(S1, D) -> S3`
    *   `(S1, Q) -> S4`
    *   `(S3, D) -> S5` (Value becomes $0.30, which is >= $0.25)
    *   `(S3, Q) -> S5` (Value becomes $0.45, which is >= $0.25)
    *   If in `S2`, `S4`, or `S5`, any coin keeps it in an accept state. For simplicity, let's say it stays in the highest value state it reached that is >= $0.25.
        *   `(S2, D) -> S4` ($0.25 + $0.10 = $0.35)
        *   `(S2, Q) -> S5` ($0.25 + $0.25 = $0.50)
        *   `(S4, D) -> S5` ($0.35 + $0.10 = $0.45)
        *   `(S4, Q) -> S5` ($0.35 + $0.25 = $0.60)
        *   `(S5, D) -> S5` ($0.45 + $0.10 = $0.55)
        *   `(S5, Q) -> S5` ($0.45 + $0.25 = $0.70)

### Practice Task

Consider the following FA:

*   States (Q): `{A, B, C}`
*   Alphabet (Σ): `{0, 1}`
*   Start State (q₀): `A`
*   Accept States (F): `{C}`
*   Transitions (δ):
    *   `(A, 0) -> A`
    *   `(A, 1) -> B`
    *   `(B, 0) -> A`
    *   `(B, 1) -> C`
    *   `(C, 0) -> C`
    *   `(C, 1) -> C`

Trace the behavior of this FA with the input string "10110". What is the final state? Is the string accepted?

### Self-Check Questions

1.  What is the purpose of the alphabet in a finite automaton?
2.  If an FA has 5 states, how many states could potentially be accept states?
3.  What does the transition function define?
4.  If an FA finishes processing an input string and is in a state that is *not* an accept state, what does that mean for the input string?

## Supports

- [[skills/computing/computer-science/algorithms/computational-model-understanding/microskills/finite-automaton-definition|Finite Automaton Definition]]
