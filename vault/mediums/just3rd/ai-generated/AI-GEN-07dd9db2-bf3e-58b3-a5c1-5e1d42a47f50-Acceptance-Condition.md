---
type: "medium"
title: "Understanding the Acceptance Condition of a Finite Automaton"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/computational-model-understanding/microskills/acceptance-condition|Acceptance Condition]]"
---
# Understanding the Acceptance Condition of a Finite Automaton

This lesson focuses on a key aspect of computational models: understanding how a finite automaton (FA) decides whether to accept or reject an input string. This is crucial for grasping the fundamental behavior of these machines.

## What is the Acceptance Condition?

A finite automaton is a mathematical model of computation that can be in one of a finite number of states. It reads an input string character by character and transitions between states based on the current state and the input character.

The **acceptance condition** is the rule that determines if the FA "accepts" the input string after processing it. For a string to be accepted:

1.  The FA must start in its designated **start state**.
2.  It must process the *entire* input string, character by character.
3.  After processing the last character, the FA must end in a state that is designated as an **accepting state** (also called a final state or trap state).

If any of these conditions are not met, the FA **rejects** the input string.

## Let's Visualize: A Simple Example

Imagine a simple FA designed to recognize binary strings that end with a '1'.

*   **States:** \(q_0\) (start state), \(q_1\) (accepting state)
*   **Alphabet:** {0, 1}
*   **Start State:** \(q_0\)
*   **Accepting States:** {\(q_1\)}
*   **Transitions:**
    *   From \(q_0\), on '0', go to \(q_0\).
    *   From \(q_0\), on '1', go to \(q_1\).
    *   From \(q_1\), on '0', go to \(q_1\).
    *   From \(q_1\), on '1', go to \(q_1\).

Now let's trace the behavior for a few input strings:

**Input: "101"**

1.  Start at \(q_0\).
2.  Read '1': Transition to \(q_1\).
3.  Read '0': From \(q_1\), on '0', stay in \(q_1\).
4.  Read '1': From \(q_1\), on '1', stay in \(q_1\).
5.  End of string. The FA is in state \(q_1\), which is an accepting state.
    *   **Result: Accepted!**

**Input: "00"**

1.  Start at \(q_0\).
2.  Read '0': Transition to \(q_0\).
3.  Read '0': From \(q_0\), on '0', stay in \(q_0\).
4.  End of string. The FA is in state \(q_0\), which is *not* an accepting state.
    *   **Result: Rejected!**

**Input: "1"**

1.  Start at \(q_0\).
2.  Read '1': Transition to \(q_1\).
3.  End of string. The FA is in state \(q_1\), which is an accepting state.
    *   **Result: Accepted!**

## Practice Task

Consider an FA with the following definition:

*   **States:** \(s_0\) (start), \(s_1\), \(s_2\) (accepting)
*   **Alphabet:** {a, b}
*   **Start State:** \(s_0\)
*   **Accepting States:** {\(s_2\)}
*   **Transitions:**
    *   \(s_0\) on 'a' -> \(s_1\)
    *   \(s_0\) on 'b' -> \(s_0\)
    *   \(s_1\) on 'a' -> \(s_2\)
    *   \(s_1\) on 'b' -> \(s_1\)
    *   \(s_2\) on 'a' -> \(s_2\)
    *   \(s_2\) on 'b' -> \(s_0\)

Trace the execution of this FA for the following input strings and determine if they are accepted or rejected:

1.  "aba"
2.  "bba"
3.  "abb"
4.  "aa"

## Self-Check Questions

1.  What are the three essential conditions for a finite automaton to accept an input string?
2.  If an FA finishes processing an input string but is in a non-accepting state, is the string accepted or rejected?
3.  In the practice task FA, what happens if the input string is empty?

## Supports

- [[skills/programming/algorithms/computational-model-understanding/microskills/acceptance-condition|Acceptance Condition]]
