---
type: "medium"
title: "Understanding Multiplexers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/multiplexer-function-explanation|multiplexer-function-explanation]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/combinational-logic-design|combinational-logic-design]]"
learning-time-in-minutes: 3
---
# Understanding Multiplexers

This lesson focuses on how multiplexers, a fundamental combinational logic building block, select and route data.

### What is a Multiplexer?

A multiplexer, often called a "MUX," is a digital circuit that selects one of several input signals and forwards it to a single output line. Think of it as a digital switch. It has multiple data inputs, a single output, and a set of select lines. The number of select lines determines how many input lines the MUX can handle: \(2^n\) inputs can be controlled by \(n\) select lines. The binary combination of the select lines determines which input is connected to the output.

### How it Works: The Analogy

Imagine you have several different TV channels (input signals) and you want to watch only one at a time on a single TV screen (output). You use your TV remote's channel selector buttons (select lines). When you press '5', the remote tells the TV to display channel 5. Similarly, the select lines on a MUX control which data input is passed to the output.

### Practical Scenario: Data Routing in a Processor

In a processor, a MUX is used to select data from different sources to be sent to a common destination. For instance, consider a CPU that needs to fetch its next instruction. The instruction could come from different places: the program counter, a cache, or main memory. A MUX can be used to select the appropriate source based on control signals, ensuring the CPU receives the correct instruction for execution.

Let's consider a simple 2-to-1 MUX. It has two data inputs ( \(I_0\) and \(I_1\) ), one select line ( \(S\) ), and one output ( \(Y\) ).

*   If \(S=0\), the output \(Y\) is connected to \(I_0\).
*   If \(S=1\), the output \(Y\) is connected to \(I_1\).

The truth table for a 2-to-1 MUX is:

| S | \(I_0\) | \(I_1\) | Y |
| : | :------ | :------ | : |
| 0 | 0       | 0       | 0 |
| 0 | 0       | 1       | 0 |
| 0 | 1       | 0       | 1 |
| 0 | 1       | 1       | 1 |
| 1 | 0       | 0       | 0 |
| 1 | 0       | 1       | 1 |
| 1 | 1       | 0       | 0 |
| 1 | 1       | 1       | 1 |

The Boolean expression for the output \(Y\) is: \(Y = (\bar{S} \cdot I_0) + (S \cdot I_1)\)

### Practice Task

Consider an 8-to-1 MUX. It has 8 data inputs (\(I_0\) to \(I_7\)), 3 select lines (\(S_2\), \(S_1\), \(S_0\)), and one output (\(Y\)).

1.  How many possible combinations of select lines are there?
2.  If the select lines are set to \(S_2=1\), \(S_1=0\), and \(S_0=1\), which data input will be connected to the output?
3.  Write the Boolean expression for the output \(Y\) of an 8-to-1 MUX.

### Self-Check Questions

1.  What is the primary function of a multiplexer?
2.  How do the select lines of a multiplexer determine its behavior?
3.  If a MUX has 4 select lines, how many data inputs can it have?
4.  In what kind of digital systems are multiplexers commonly used?

## Supports

- [[skills/computing/hardware-embedded/digital-logic/combinational-logic-design/microskills/multiplexer-function-explanation|Multiplexer Function Explanation]]
