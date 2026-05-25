---
type: "medium"
title: "Applying Mesh and Nodal Analysis to DC Circuits"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/dc-circuit-analysis|dc-circuit-analysis]]"
learning-time-in-minutes: 6
---
# Applying Mesh and Nodal Analysis to DC Circuits

This lesson focuses on applying mesh and nodal analysis techniques to solve for unknown voltages and currents specifically within direct current (DC) circuits. These methods are powerful tools for simplifying complex circuit analysis.

## What are Mesh and Nodal Analysis?

*   **Nodal Analysis (Node Voltage Analysis):** This method focuses on finding the unknown voltage at each principal node in a circuit. It utilizes Kirchhoff's Current Law (KCL) at each node.
*   **Mesh Analysis (Loop Current Analysis):** This method focuses on finding unknown loop currents in a circuit. It utilizes Kirchhoff's Voltage Law (KVL) around each independent loop.

## Practical Scenario: Analyzing a Simple DC Circuit

Imagine you are troubleshooting a battery-powered device with multiple resistors and a few voltage sources. You need to determine the current flowing through a specific resistor and the voltage across another component. Both mesh and nodal analysis can help you systematically solve for these values.

Let's consider a circuit with two voltage sources and three resistors.

**Circuit Description:**

*   A 12V voltage source connected in series with a 2Ω resistor (let's call this branch 1).
*   This branch is connected to a common node.
*   From this common node, a second branch goes to ground and contains a 4Ω resistor.
*   Also from the common node, a third branch goes to another node, which is connected to a 5V voltage source (positive terminal towards this node) and a 6Ω resistor, both in series. This third branch also connects back to the negative terminal of the 12V source (which we can consider as the reference or ground node).

### Example using Nodal Analysis:

1.  **Identify Nodes:** We have a reference node (ground, 0V) and two principal nodes (let's call them Node A, the common node, and Node B, the node between the 5V source and the 6Ω resistor).
2.  **Assign Node Voltages:** Let \(V_A\) be the voltage at Node A and \(V_B\) be the voltage at Node B, with respect to the reference node.
3.  **Apply KCL at Node A:** The sum of currents leaving Node A is zero.
    \[
    \frac{V_A - 12}{2} + \frac{V_A - 0}{4} + \frac{V_A - V_B}{6} = 0
    \]
4.  **Apply KCL at Node B:** The sum of currents leaving Node B is zero. Note that the voltage at Node B is directly related to the 5V source and the voltage at the reference node. \(V_B = 5V\).
    \[
    \frac{V_B - V_A}{6} + \frac{V_B - 0}{6} = 0  \quad \text{(Wait, this is incorrect, the 5V source is in series with the 6 ohm resistor)}
    \]
    Let's correct this. Node B's voltage is defined by the path from ground. The voltage at Node B is \(5V\) above the reference node, and the 6Ω resistor is connected between Node B and Node A.
    So, applying KCL at Node B again, considering the current *entering* Node B from Node A through the 6Ω resistor:
    \[
    \frac{V_A - V_B}{6} = 0 \quad \text{(This also seems simplified, let's redraw our understanding of the circuit)}
    \]
    Let's re-examine the circuit description. If Node A is the common node, and Node B is where the 5V source and 6Ω resistor connect, and this branch returns to the negative terminal of the 12V source (ground), then Node B's voltage is indeed related to the 5V source.

    Let's define Node B as the point *between* the 5V source and the 6Ω resistor.
    *   Node 0 (Reference/Ground): Negative terminal of 12V source.
    *   Node A: Common node between 12V/2Ω branch and 4Ω branch.
    *   Node B: Node between 5V source and 6Ω resistor.

    Correct KCL application:

    **At Node A:**
    \[
    \frac{V_A - 12}{2} + \frac{V_A - 0}{4} + \frac{V_A - V_B}{6} = 0
    \]
    **At Node B:** The voltage at Node B is \(5V\) above the reference node. So, \(V_B = 5V\).
    However, the 6Ω resistor is connected *between* Node A and Node B.
    So the current from Node A to Node B through the 6Ω resistor is \(\frac{V_A - V_B}{6}\).
    The current from Node B to Node A through the 6Ω resistor is \(\frac{V_B - V_A}{6}\).

    Let's consider the current flow. From Node B, current flows through the 6Ω resistor to Node A, and also through the 5V source to ground. This implies the 5V source is in series with the 6Ω resistor and the entire combination is connected between Node B and ground. This is not typical.

    Let's re-interpret the description for clarity:
    *   Branch 1: 12V source in series with 2Ω resistor, connected between Node A and Ground.
    *   Branch 2: 4Ω resistor, connected between Node A and Ground.
    *   Branch 3: 5V source in series with 6Ω resistor, connected between Node A and Ground.

    This interpretation is also problematic as it places multiple voltage sources and resistors directly between the same two nodes.

    **Revised Practical Scenario for Clarity:**

    Let's use a standard setup:
    *   Node 0 (Ground): Reference point.
    *   Node A: A principal node.
    *   Node B: Another principal node.

    Circuit:
    *   A 12V source connected between Node A and Ground.
    *   A 2Ω resistor connected between Node A and Node B.
    *   A 4Ω resistor connected between Node B and Ground.
    *   A 6Ω resistor connected between Node B and Ground.

    **Applying Nodal Analysis to the Revised Scenario:**

    1.  **Identify Nodes:** Ground (0V), Node A (\(V_A\)), Node B (\(V_B\)).
    2.  **Apply KCL at Node A:**
        \[
        \frac{V_A - 12}{0} + \frac{V_A - V_B}{2} = 0 \quad \text{(Division by zero indicates a problem with a voltage source directly connected to a node. The voltage at Node A is fixed at 12V by the source.)}
        \]
        Therefore, \(V_A = 12V\).

    3.  **Apply KCL at Node B:**
        \[
        \frac{V_B - V_A}{2} + \frac{V_B - 0}{4} + \frac{V_B - 0}{6} = 0
        \]
        Substitute \(V_A = 12V\):
        \[
        \frac{V_B - 12}{2} + \frac{V_B}{4} + \frac{V_B}{6} = 0
        \]
        Multiply by the least common multiple of 2, 4, and 6 (which is 12):
        \[
        6(V_B - 12) + 3V_B + 2V_B = 0
        \]
        \[
        6V_B - 72 + 3V_B + 2V_B = 0
        \]
        \[
        11V_B = 72
        \]
        \[
        V_B = \frac{72}{11} \approx 6.55V
        \]

    Now you can find currents. For example, the current through the 2Ω resistor:
    \[
    I_{2\Omega} = \frac{V_A - V_B}{2} = \frac{12 - \frac{72}{11}}{2} = \frac{\frac{132 - 72}{11}}{2} = \frac{50/11}{2} = \frac{25}{11} \approx 2.27A
    \]

### Practice Task:

Consider a DC circuit with a 9V voltage source, a 3Ω resistor, and a 5Ω resistor connected in series.
*   Use nodal analysis (even though it's trivial for a series circuit) to find the voltage at the node between the two resistors.
*   Use mesh analysis to confirm the current flowing through the resistors.

### Self-Check Questions:

1.  What is the primary law used in nodal analysis?
2.  What is the primary law used in mesh analysis?
3.  In nodal analysis, how do you handle a voltage source directly connected between a principal node and the reference node?
4.  If you solve for all unknown node voltages, how can you then find the current through any branch?

## Supports

- [[skills/computing/hardware-embedded/electronics/circuit-analysis/microskills/dc-circuit-analysis|DC Circuit Analysis]]
