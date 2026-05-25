---
type: "medium"
title: "Multiplexer Operational Principles"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/multiplexer-operational-principles|multiplexer-operational-principles]]"
learning-time-in-minutes: 3
---
# Multiplexer Operational Principles

A multiplexer (MUX) is a fundamental combinational logic circuit used to select one of several input signals and route it to a single output line. Think of it as a digital switchboard.

### How it Works

A multiplexer has:
*   **Data Inputs:** Multiple lines carrying the signals to be selected.
*   **Select Inputs:** A set of control lines that determine which data input is connected to the output. The number of select lines determines the number of data inputs the MUX can handle. Specifically, if there are \(n\) select lines, the MUX can have up to \(2^n\) data inputs.
*   **Output:** A single line that carries the selected data input.

The select inputs act as an address. Based on the binary combination applied to the select lines, one of the data inputs is passed through to the output. If the select inputs are all '0', the first input is selected. If they are '01', the second input is selected, and so on.

### Truth Table Example (2-to-1 MUX)

Consider a 2-to-1 MUX with data inputs \(D_0\), \(D_1\), a select input \(S\), and output \(Y\).

| \(S\) | \(D_0\) | \(D_1\) | \(Y\) |
| :---: | :-----: | :-----: | :---: |
|   0   |    0    |    0    |   0   |
|   0   |    0    |    1    |   0   |
|   0   |    1    |    0    |   1   |
|   0   |    1    |    1    |   1   |
|   1   |    0    |    0    |   0   |
|   1   |    0    |    1    |   1   |
|   1   |    1    |    0    |   0   |
|   1   |    1    |    1    |   1   |

This truth table shows that when \(S=0\), the output \(Y\) is equal to \(D_0\). When \(S=1\), the output \(Y\) is equal to \(D_1\). The logical expression for this 2-to-1 MUX is \(Y = (\bar{S} \cdot D_0) + (S \cdot D_1)\).

### Practical Scenario: Data Routing

Imagine you have two sensors, Sensor A and Sensor B, providing data. You have a single processing unit that can only receive data from one sensor at a time. A multiplexer can be used to dynamically switch which sensor's data is sent to the processing unit based on a control signal. If the control signal (acting as the select input) is '0', Sensor A's data is sent. If it's '1', Sensor B's data is sent. This allows efficient use of the processing unit's resources.

### Practice Task

Design a 4-to-1 multiplexer.
1.  Determine the number of data inputs.
2.  Determine the number of select inputs needed.
3.  Draw the logic diagram for a 4-to-1 MUX.
4.  Write the Boolean expression for the output of the 4-to-1 MUX.

### Self-Check Questions

1.  What is the primary function of a multiplexer?
2.  If a MUX has 3 select lines, how many data inputs can it have?
3.  How does the select input control which data input is routed to the output?
4.  When might you use a multiplexer in a digital system design?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/multiplexer-operational-principles|Multiplexer Operational Principles]]
