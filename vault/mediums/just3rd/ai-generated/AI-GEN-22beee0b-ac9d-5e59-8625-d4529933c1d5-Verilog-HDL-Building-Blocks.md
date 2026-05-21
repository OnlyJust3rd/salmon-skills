---
type: "medium"
title: "Verilog HDL Building Blocks"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/verilog-hdl-modeling/microskills/verilog-hdl-building-blocks|verilog-hdl-building-blocks]]"
---
# Verilog HDL Building Blocks

This lesson focuses on identifying the fundamental building blocks used in Verilog HDL. Understanding these core components is crucial for effectively modeling hardware designs.

## What are Verilog HDL Building Blocks?

Verilog HDL, a hardware description language, uses specific constructs to describe digital circuits. These constructs are the "building blocks" that allow us to define the behavior and structure of hardware at a descriptive level. Think of them as the basic Lego bricks you use to construct a complex model.

## Key Building Blocks in Verilog HDL

We'll explore some of the most fundamental building blocks you'll encounter when learning Verilog HDL.

### 1. Modules

Modules are the primary organizational units in Verilog. They represent a distinct piece of hardware, such as a register, an adder, or an entire processor core. A module encapsulates logic, inputs, outputs, and internal signals.

**Syntax:**

```verilog
module module_name (port_list);
  // Declarations (inputs, outputs, wires, registers, parameters, etc.)
  // Continuous assignments or procedural blocks (always blocks)
endmodule
```

**Example:**

Let's define a simple module for a two-input AND gate.

```verilog
module and_gate (
  input a,
  input b,
  output out
);

  assign out = a & b; // Continuous assignment for the AND operation

endmodule
```

In this example:
*   `module and_gate (...)` declares a module named `and_gate`.
*   `input a, input b, output out` define the ports of the module: two inputs (`a`, `b`) and one output (`out`).
*   `assign out = a & b;` is a continuous assignment that continuously drives the `out` signal with the logical AND of `a` and `b`.
*   `endmodule` marks the end of the module definition.

### 2. Ports

Ports are the interfaces of a module. They allow modules to communicate with each other. There are three types of ports:

*   **`input`**: Data flows into the module.
*   **`output`**: Data flows out of the module.
*   **`inout`**: Bidirectional, allowing data to flow both into and out of the module (less common for basic building blocks).

**Declaration:**

Ports are declared within the `module` declaration, as seen in the `and_gate` example above.

### 3. Data Types

Verilog has several data types to represent different kinds of information. The most fundamental ones for building blocks are:

*   **`wire`**: Represents a physical connection. It's like a wire in a circuit, carrying a signal. `wire` is the default if no type is specified for a signal.
*   **`reg`**: Represents a storage element, like a flip-flop or a latch. `reg` variables hold their value until explicitly changed by a procedural statement (e.g., within an `always` block).

**Declaration:**

```verilog
wire signal_name;
reg register_name;
```

**Example Usage:**

```verilog
module simple_circuit (
  input clk,
  input reset,
  input data_in,
  output reg data_out
);

  wire intermediate_signal;

  // ... logic using intermediate_signal ...

  always @(posedge clk or posedge reset) begin
    if (reset) begin
      data_out <= 1'b0; // Resetting the output
    end else begin
      data_out <= data_in; // Storing input data on clock edge
    end
  end

  // Example of using a wire:
  assign intermediate_signal = data_in ^ 1'b1; // XOR with 1

endmodule
```

In this example:
*   `data_out` is declared as `reg` because its value is updated within a procedural block (`always` block).
*   `intermediate_signal` is declared as `wire` and assigned a value using a continuous assignment.

### 4. Assignments

Assignments are used to specify how signals get their values. There are two main types:

*   **Continuous Assignments (`assign`)**: These describe combinational logic. The right-hand side is continuously evaluated, and the left-hand side is updated whenever any signal on the right-hand side changes.
*   **Procedural Assignments (`=`, `<=`)**: These occur within procedural blocks (like `always` blocks) and describe how registers or other variables change their values based on events (like clock edges or signal changes).

    *   **Blocking Assignment (`=`)**: The assignment takes effect immediately. The execution of the procedural block pauses until the assignment is complete.
    *   **Non-blocking Assignment (`<=`)**: The assignment is scheduled to take effect at the end of the current time step. This is crucial for modeling sequential logic correctly, ensuring that all signals are updated based on the values at the *beginning* of the time step.

**Example:**

```verilog
module assignment_example (
  input a, b, c, clk,
  output reg y1,
  output wire y2
);

  // Continuous assignment for combinational logic
  assign y2 = a & b;

  // Procedural assignment for sequential logic (flip-flop)
  always @(posedge clk) begin
    y1 <= a ^ b; // Non-blocking assignment for sequential logic
  end

  // Example of blocking assignment (rarely used for modeling hardware)
  // This demonstrates behavior, not typical hardware modeling.
  integer temp;
  always @(*) begin
    temp = a + b; // Blocking assignment
    y1 = temp | c; // value of y1 depends on temp, which updated immediately
  end
  // Note: The above 'always @(*)' block with blocking assignment would
  // likely lead to unexpected behavior if not carefully managed,
  // especially when mixed with sequential logic. Generally prefer
  // non-blocking for sequential and continuous for combinational.

endmodule
```

### 5. Operators

Operators perform operations on operands. Common operators include:

*   **Arithmetic**: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulo)
*   **Logical**: `&&` (logical AND), `||` (logical OR), `!` (logical NOT)
*   **Bitwise**: `&` (bitwise AND), `|` (bitwise OR), `~` (bitwise NOT), `^` (bitwise XOR), `~^` or `^~` (bitwise XNOR)
*   **Relational**: `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to)
*   **Reduction**: `&` (reduction AND), `|` (reduction OR), `^` (reduction XOR) - operates on all bits of a vector to produce a single bit.

**Example:**

```verilog
wire [3:0] data_a = 4'b1010;
wire [3:0] data_b = 4'b0110;
wire [3:0] result;
wire carry;
wire is_equal;

// Bitwise AND
assign result = data_a & data_b; // result will be 4'b0010

// Arithmetic addition (assuming result is large enough)
wire [4:0] sum;
assign sum = data_a + data_b; // sum will be 5'b000110 (15+6=21)

// Reduction AND
assign carry = &data_a; // carry will be 0 (because there's a '0' bit in data_a)

// Relational comparison
assign is_equal = (data_a == data_b); // is_equal will be 0 (false)
```

## Summary

These fundamental building blocks – **modules, ports, data types (`wire`, `reg`), assignments (continuous and procedural), and operators** – are the basic elements you will use to construct any Verilog HDL design. Mastering their syntax and usage is the first step in effective hardware modeling.

## Supports

- [[skills/hardware-embedded/electronics-embedded/verilog-hdl-modeling/microskills/verilog-hdl-building-blocks|Verilog HDL Building Blocks]]
