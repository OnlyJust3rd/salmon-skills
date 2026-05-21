---
type: "medium"
title: "Processing Input Strings with Finite Automata"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/computational-model-understanding/microskills/input-string-processing|input-string-processing]]"
---
# Processing Input Strings with Finite Automata

This lesson focuses on understanding how a finite automaton (FA) processes an input string by transitioning through its states. This is a core part of understanding computational models.

## What is Input String Processing in FAs?

A finite automaton is a mathematical model of computation. It has a finite number of states and moves from one state to another based on the input it receives. When processing an input string, the FA reads the string character by character. For each character, it uses its **transition function** to decide which state to move to next from its current state. The processing starts from a designated **start state** and continues until the entire input string is consumed.

The behavior of an FA on an input string is determined by these transitions. If, after reading the entire string, the FA ends up in an **accept state**, the string is considered "accepted" by the automaton. Otherwise, if it ends in a non-accept state, the string is "rejected."

## Key Components and Their Role in Processing:

*   **States (Q):** A finite set of possible configurations the automaton can be in.
*   **Alphabet (\(\Sigma\)):** The set of all possible input symbols the automaton can read.
*   **Transition Function (\(\delta\)):** This function dictates the movement between states. It takes the current state and the current input symbol and returns the next state. \( \delta: Q \times \Sigma \rightarrow Q \)
*   **Start State (\(q_0\)):** The state the automaton begins in before processing any input.
*   **Accept States (F):** A subset of states. If the automaton is in one of these states after processing the entire input string, the string is accepted.

## Practical Example: Detecting Strings with an Even Number of '1's

Let's consider a simple finite automaton designed to accept any binary string (composed of '0's and '1's) that contains an even number of '1's.

*   **States (Q):** \( \{q_{even}, q_{odd}\} \)
    *   \(q_{even}\): Represents the state where we have seen an even number of '1's so far.
    *   \(q_{odd}\): Represents the state where we have seen an odd number of '1's so far.
*   **Alphabet (\(\Sigma\)):** \( \{'0', '1'\} \)
*   **Start State (\(q_0\)):** \( q_{even} \) (Initially, we have seen zero '1's, which is even).
*   **Accept States (F):** \( \{q_{even}\} \) (We want to accept strings ending in an even count of '1's).
*   **Transition Function (\(\delta\)):**
    *   If in \(q_{even}\) and read '0': Stay in \(q_{even}\). (Even count of '1's remains even).
    *   If in \(q_{even}\) and read '1': Move to \(q_{odd}\). (Even count of '1's becomes odd).
    *   If in \(q_{odd}\) and read '0': Stay in \(q_{odd}\). (Odd count of '1's remains odd).
    *   If in \(q_{odd}\) and read '1': Move to \(q_{even}\). (Odd count of '1's becomes even).

We can represent this transition function in a table:

| Current State | Input Symbol | Next State |
| :------------ | :----------- | :--------- |
| \(q_{even}\)  | '0'          | \(q_{even}\) |
| \(q_{even}\)  | '1'          | \(q_{odd}\)  |
| \(q_{odd}\)   | '0'          | \(q_{odd}\)  |
| \(q_{odd}\)   | '1'          | \(q_{even}\) |

### Tracing an Input String: "10110"

1.  **Start:** The FA is in the start state \( q_{even} \). Input string: "10110".
2.  **Read '1':** Current state is \( q_{even} \). Input is '1'. Transition function says move to \( q_{odd} \). Remaining string: "0110".
3.  **Read '0':** Current state is \( q_{odd} \). Input is '0'. Transition function says move to \( q_{odd} \). Remaining string: "110".
4.  **Read '1':** Current state is \( q_{odd} \). Input is '1'. Transition function says move to \( q_{even} \). Remaining string: "10".
5.  **Read '1':** Current state is \( q_{even} \). Input is '1'. Transition function says move to \( q_{odd} \). Remaining string: "0".
6.  **Read '0':** Current state is \( q_{odd} \). Input is '0'. Transition function says move to \( q_{odd} \). Remaining string: "".

The input string is now empty. The FA ended in state \( q_{odd} \). Since \( q_{odd} \) is not an accept state (only \( q_{even} \) is), the string "10110" is **rejected**. (It has three '1's, which is an odd number).

Let's try "1100":

1.  **Start:** \( q_{even} \). String: "1100".
2.  **Read '1':** \( q_{odd} \). String: "100".
3.  **Read '1':** \( q_{even} \). String: "00".
4.  **Read '0':** \( q_{even} \). String: "0".
5.  **Read '0':** \( q_{even} \). String: "".

The FA ends in \( q_{even} \), which is an accept state. So, "1100" is **accepted**.

## Practice Task

Consider the following finite automaton:

*   States: \( \{s_0, s_1, s_2\} \)
*   Alphabet: \( \{'a', 'b'\} \)
*   Start State: \( s_0 \)
*   Accept States: \( \{s_2\} \)
*   Transitions:
    *   \( \delta(s_0, 'a') = s_1 \)
    *   \( \delta(s_0, 'b') = s_0 \)
    *   \( \delta(s_1, 'a') = s_1 \)
    *   \( \delta(s_1, 'b') = s_2 \)
    *   \( \delta(s_2, 'a') = s_2 \)
    *   \( \delta(s_2, 'b') = s_0 \)

Trace the input string "ababa" through this automaton. Will the string be accepted or rejected? Explain your steps.

## Self-Check Questions

1.  What is the role of the transition function when processing an input string?
2.  If an automaton ends in a state that is *not* an accept state after processing an input string, is the string accepted or rejected?
3.  In the "even number of '1's" example, why is \( q_{even} \) the start state?

## Supports

- [[skills/programming/algorithms/computational-model-understanding/microskills/input-string-processing|Input String Processing]]
