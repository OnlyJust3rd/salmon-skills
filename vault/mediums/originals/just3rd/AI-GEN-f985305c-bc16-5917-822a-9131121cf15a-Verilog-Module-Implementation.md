---
type: "medium"
title: "Verilog Module Implementation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/digital-logic/verilog-hdl-modeling/microskills/verilog-module-implementation|verilog-module-implementation]]"
related-skills:
  - "[[skills/computing/hardware-embedded/digital-logic/verilog-hdl-modeling/verilog-hdl-modeling|verilog-hdl-modeling]]"
learning-time-in-minutes: 4
---
# Verilog Module Implementation

This lesson focuses on the practical design and construction of combinational and sequential modules in Verilog, a core aspect of Verilog HDL modeling for digital circuit design and verification. We will explore how to translate digital logic concepts into Verilog code, allowing you to implement these designs.

## Core Idea: Building Blocks of Digital Systems

In Verilog, a `module` is the fundamental building block for describing hardware. Think of it as a black box that takes inputs, performs some logic or state changes, and produces outputs. Implementing modules is about defining the internal behavior and connections of these blocks. We'll cover two main types:

*   **Combinational Modules:** The output of these modules depends solely on the current inputs. There is no memory or state involved. Examples include logic gates, multiplexers, and decoders.
*   **Sequential Modules:** The output of these modules depends on both the current inputs and the past state of the module, often driven by a clock signal. Examples include flip-flops, registers, and counters.

## Implementing Combinational Modules

Combinational logic can be described in Verilog using several styles, including gate-level, dataflow, and behavioral. For practical module implementation, the dataflow (`assign` statements) and behavioral (`always` blocks with combinational logic) styles are often preferred for their clarity and conciseness.

### Example: A 2-to-1 Multiplexer

A multiplexer (MUX) is a common combinational circuit that selects one of several input signals and forwards it to a single output.

```verilog
// Module: mux2_to_1
// Description: A 2-to-1 multiplexer
module mux2_to_1 (
    input wire a,     // Input signal 0
    input wire b,     // Input signal 1
    input wire sel,   // Select signal
    output wire out  // Output signal
);

    // Dataflow modeling using assign statement
    assign out = sel ? b : a;

endmodule
```

#### How it Works:

*   `module mux2_to_1 (...)`: Declares a module named `mux2_to_1` and lists its ports (inputs and outputs).
*   `input wire a, b, sel;`: Defines three input signals `a`, `b`, and `sel` as wires. `wire` is the default and most common type for connecting signals.
*   `output wire out;`: Defines one output signal `out` as a wire.
*   `assign out = sel ? b : a;`: This is a continuous assignment. It uses the ternary operator (`? :`) to implement the MUX logic. If `sel` is 1, `out` takes the value of `b`; otherwise, `out` takes the value of `a`. This assignment is continuously evaluated, ensuring `out` always reflects the current input values.

### Alternative: Behavioral Modeling for Combinational Logic

You can also implement combinational logic using an `always` block. For it to behave combinatorially, the sensitivity list must include all signals read within the block.

```verilog
// Module: mux2_to_1_behavioral
// Description: A 2-to-1 multiplexer using behavioral style
module mux2_to_1_behavioral (
    input wire a,
    input wire b,
    input wire sel,
    output reg out // Output declared as 'reg' for assignments within 'always'
);

    // Behavioral modeling
    always @(a or b or sel) begin
        if (sel == 1'b1) begin
            out = b;
        end else begin
            out = a;
        end
    end

endmodule
```

#### How it Works:

*   `output reg out;`: The output `out` is declared as `reg`. Inside `always` blocks, variables that are assigned values must be of type `reg`.
*   `always @(a or b or sel) begin ... end`: This `always` block is sensitive to changes in `a`, `b`, or `sel`. When any of these signals change, the code inside the `begin...end` block is executed.
*   `if (sel == 1'b1) ... else ...`: This is a procedural conditional statement that implements the MUX logic. `1'b1` represents a 1-bit binary value of 1.

**Key Point for Combinational `always` blocks:** Ensure the sensitivity list includes *all* input signals used within the block. Missing a signal can lead to inferred latches, turning your combinational logic into sequential logic, which is usually unintended.

## Implementing Sequential Modules

Sequential modules are driven by a clock. Their behavior is defined within `always` blocks that are sensitive to clock edges.

### Example: A D-Type Flip-Flop

A D-type flip-flop (DFF) is a fundamental sequential element that stores a bit of data. It captures the value of its input `D` on the rising edge of the clock and holds it until the next rising edge.

```verilog
// Module: dff
// Description: A positive edge-triggered D-type flip-flop
module dff (
    input wire clk, // Clock input
    input wire d,   // Data input
    output reg q    // Data output
);

    // Sequential modeling using always block
    always @(posedge clk) begin
        q <= d; // Non-blocking assignment for sequential logic
    end

endmodule
```

#### How it Works:

*   `input wire clk;`: The clock signal.
*   `input wire d;`: The data to be captured.
*   `output reg q;`: The output, which stores the captured data. Declared as `reg` because it's assigned within an `always` block.
*   `always @(posedge clk) begin ... end`: This `always` block is sensitive to the positive (rising) edge of the `clk` signal. The code inside will execute only when `clk` transitions from 0 to 1.
*   `q <= d;`: This is a **non-blocking assignment**. In sequential `always` blocks, non-blocking assignments are crucial. They schedule the update of `q` to happen *after* all other non-blocking assignments in the same `always` block have been evaluated, effectively modeling synchronous behavior where all flip-flops update simultaneously on the clock edge.

### Example: A Simple Counter (4-bit)

Let's implement a 4-bit synchronous counter that increments on each positive clock edge.

```verilog
// Module: counter_4bit
// Description: A 4-bit synchronous up-counter
module counter_4bit (
    input wire clk,
    input wire reset, // Asynchronous reset
    output reg [3:0] count // 4-bit output
);

    // Sequential modeling with asynchronous reset
    always @(posedge clk or posedge reset) begin
        if (reset == 1'b1) begin
            count <= 4'b0000; // Reset to 0
        end else begin
            count <= count + 1; // Increment count
        end
    end

endmodule
```

#### How it Works:

*   `output reg [3:0] count;`: Declares a 4-bit wide `reg` named `count`. `[3:0]` specifies the bit range, with bit 3 being the most significant bit (MSB) and bit 0 the least significant bit (LSB).
*   `always @(posedge clk or posedge reset) ...`: This `always` block is sensitive to the rising edge of `clk` *or* the rising edge of `reset`. This makes the `reset` signal an asynchronous reset.
*   `if (reset == 1'b1) begin count <= 4'b0000; end`: If the `reset` signal is high (1), the counter is immediately reset to `0000`, regardless of the clock.
*   `else begin count <= count + 1; end`: If `reset` is not active, the `count` is updated to its current value plus one on the next positive clock edge. The `+ 1` operation is inferred as an adder.

**Key Point for Sequential `always` blocks:** Use **non-blocking assignments** (`<=`) for sequential logic to ensure correct behavior. Blocking assignments (`=`) in sequential `always` blocks can lead to race conditions and incorrect state updates.

## Conclusion

Implementing Verilog modules is a fundamental skill for any digital designer. By understanding how to model combinational logic with `assign` or sensitive `always` blocks and sequential logic with edge-sensitive `always` blocks using non-blocking assignments, you gain the ability to construct complex digital systems. Practice creating various combinational (adders, subtractors, comparators) and sequential (shift registers, timers) modules to solidify your understanding.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/verilog-hdl-modeling/microskills/verilog-module-implementation|Verilog Module Implementation]]
