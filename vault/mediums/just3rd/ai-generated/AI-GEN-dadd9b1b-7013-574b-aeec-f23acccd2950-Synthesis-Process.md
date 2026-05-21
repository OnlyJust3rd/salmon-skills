---
type: "medium"
title: "The Synthesis Process: Turning Code into Gates"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/fpga-implementation/microskills/synthesis-process|synthesis-process]]"
---
# The Synthesis Process: Turning Code into Gates

When we design for FPGAs, we start by describing our desired digital logic using a Hardware Description Language (HDL) like Verilog or VHDL. This code is a high-level representation of what we want our circuit to do. However, an FPGA doesn't directly understand HDL code. It needs to be translated into a form that can be implemented using its physical resources: logic gates and their interconnections. This crucial translation step is called **synthesis**.

## What is Synthesis?

Synthesis is the process of converting your HDL design into a **gate-level netlist**. Think of it like this:

*   **HDL Code:** A blueprint or a recipe for your circuit.
*   **Gate-Level Netlist:** A detailed schematic showing exactly which logic gates (AND, OR, NOT, flip-flops, etc.) are used and how they are connected to form the final circuit.

The synthesis tool reads your HDL, understands the intended logic, and then maps that logic onto a library of standard logic gates that the FPGA vendor provides.

## How Synthesis Works

The synthesis process involves several key steps, though you typically interact with a single tool that orchestrates them:

1.  **Parsing and Elaboration:**
    *   The synthesis tool first reads and checks your HDL code for syntax errors.
    *   It then *elaborates* the design, which means it instantiates all the modules, connections, and parameters defined in your code. This creates an internal representation of your entire design hierarchy.

2.  **Logic Optimization:**
    *   This is where the magic happens. The tool analyzes your design and tries to simplify the logic. For example, if you write `assign out = (a & b) | (~a & b);`, the tool will recognize this as equivalent to `assign out = b;` and replace it with the simpler form.
    *   Optimization aims to:
        *   Reduce the number of logic gates.
        *   Minimize the depth of logic paths (which affects speed).
        *   Improve power consumption.

3.  **Technology Mapping:**
    *   Once the logic is optimized, the synthesis tool maps the generic logic functions to the specific logic elements available in the target FPGA. FPGAs don't have infinitely configurable gates in the purest sense; they have predefined structures like **Look-Up Tables (LUTs)** and **flip-flops**.
    *   **LUTs:** These are small, programmable combinational logic blocks. A common LUT can implement any function of a few inputs (e.g., 4 or 6). Synthesis figures out how to configure these LUTs to perform the required logic functions.
    *   **Flip-flops (DFFs):** These are used to store state and implement sequential logic (like counters or registers). Synthesis identifies where state needs to be stored and maps it to these flip-flops.

The output of this process is a **netlist**, which is a text file describing the instantiated logic gates and their interconnections. This netlist is still technology-independent to some extent, meaning it describes abstract gates, but it's now specific to the types of resources found on an FPGA.

## Example: A Simple Combinational Circuit

Let's look at a simple example in Verilog.

```verilog
module simple_adder (
    input [1:0] a,
    input [1:0] b,
    output [2:0] sum
);

    assign sum = a + b;

endmodule
```

When this `simple_adder` module is synthesized:

1.  The tool understands that `a` and `b` are 2-bit inputs and `sum` is a 3-bit output.
2.  It recognizes the `+` operator as an addition operation.
3.  For a 2-bit adder, this typically requires two full adders. Each full adder can be implemented using combinational logic.
4.  The synthesis tool will map these combinational logic functions onto LUTs. For instance, a full adder's sum and carry-out outputs are functions of its three inputs. These functions will be configured within the FPGA's LUTs.
5.  The output netlist will describe the connections between these LUTs (and potentially some buffer gates) to perform the 2-bit addition.

## What Synthesis is NOT

It's important to distinguish synthesis from later stages in the FPGA design flow:

*   **Place-and-Route:** This stage takes the gate-level netlist and physically maps each gate and connection to specific, actual CLBs (Configurable Logic Blocks) and routing channels on the FPGA chip. Synthesis is *before* this physical placement.
*   **Programming:** This is the final step of loading the configured bitstream onto the FPGA to make it operational.

Synthesis is the bridge between your abstract HDL design and the physical fabric of the FPGA. A well-written HDL code that is easily optimizable will lead to a more efficient and faster synthesized netlist, which in turn makes the subsequent place-and-route process easier and potentially results in a higher-performing final design.

## Supports

- [[skills/hardware-embedded/electronics-embedded/fpga-implementation/microskills/synthesis-process|Synthesis Process]]
