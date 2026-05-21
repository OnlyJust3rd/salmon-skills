---
type: "medium"
title: "Understanding Verilog Operators"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/verilog-hdl-modeling/microskills/verilog-operators|verilog-operators]]"
---
# Understanding Verilog Operators

Verilog HDL uses operators to perform operations on data. These are fundamental building blocks for creating digital logic designs and testbenches. Understanding Verilog operators is key to effectively modeling hardware behavior.

## What are Verilog Operators?

Operators are symbols that tell the compiler to perform a specific logical or arithmetic operation. They work on operands (the data or variables the operator acts upon) to produce a result.

## Types of Verilog Operators

Verilog operators can be broadly categorized based on the type of operation they perform.

### 1. Arithmetic Operators

These operators perform mathematical calculations.

| Operator | Description     | Example        | Result |
| :------- | :-------------- | :------------- | :----- |
| `+`      | Addition        | `a + b`        | Sum of `a` and `b` |
| `-`      | Subtraction     | `a - b`        | Difference between `a` and `b` |
| `*`      | Multiplication  | `a * b`        | Product of `a` and `b` |
| `/`      | Division        | `a / b`        | Quotient of `a` divided by `b` |
| `%`      | Modulo (Remainder) | `a % b`        | Remainder of `a` divided by `b` |

**Example:**

```verilog
module arithmetic_ops;
  reg [7:0] a = 10;
  reg [7:0] b = 3;
  reg [7:0] sum, diff, prod, quot, rem;

  initial begin
    sum = a + b;       // sum will be 13
    diff = a - b;      // diff will be 7
    prod = a * b;      // prod will be 30
    quot = a / b;      // quot will be 3 (integer division)
    rem = a % b;       // rem will be 1

    $display("Sum: %d", sum);
    $display("Difference: %d", diff);
    $display("Product: %d", prod);
    $display("Quotient: %d", quot);
    $display("Remainder: %d", rem);
  end
endmodule
```

### 2. Relational Operators

These operators compare two operands and return a 1 (true) or 0 (false) value.

| Operator | Description             | Example | Result |
| :------- | :---------------------- | :------ | :----- |
| `==`     | Equal to                | `a == b` | 1 if `a` equals `b`, 0 otherwise |
| `!=`     | Not equal to            | `a != b` | 1 if `a` not equals `b`, 0 otherwise |
| `>`      | Greater than            | `a > b`  | 1 if `a` is greater than `b`, 0 otherwise |
| `<`      | Less than               | `a < b`  | 1 if `a` is less than `b`, 0 otherwise |
| `>=`     | Greater than or equal to | `a >= b` | 1 if `a` is greater than or equal to `b`, 0 otherwise |
| `<=`     | Less than or equal to   | `a <= b` | 1 if `a` is less than or equal to `b`, 0 otherwise |

**Example:**

```verilog
module relational_ops;
  reg [3:0] x = 5;
  reg [3:0] y = 8;
  reg equal, not_equal, greater, less;

  initial begin
    equal = (x == y);       // equal will be 0
    not_equal = (x != y);   // not_equal will be 1
    greater = (x > y);      // greater will be 0
    less = (x < y);         // less will be 1

    $display("x == y: %b", equal);
    $display("x != y: %b", not_equal);
    $display("x > y: %b", greater);
    $display("x < y: %b", less);
  end
endmodule
```

### 3. Logical Operators

These operators perform logical operations on operands, typically single bits or bit vectors. They return a 1 (true), 0 (false), or X (unknown).

| Operator | Description    | Example | Result |
| :------- | :------------- | :------ | :----- |
| `&&`     | Logical AND    | `a && b` | 1 if both `a` and `b` are true (non-zero), 0 otherwise |
| `||`     | Logical OR     | `a || b` | 1 if either `a` or `b` is true (non-zero), 0 otherwise |
| `!`      | Logical NOT    | `!a`    | 0 if `a` is true (non-zero), 1 if `a` is false (zero) |

**Important Note:** Logical operators treat any non-zero value as true and zero as false.

**Example:**

```verilog
module logical_ops;
  reg p = 1; // True
  reg q = 0; // False
  reg r = 5; // True (non-zero)
  reg and_result, or_result, not_result;

  initial begin
    and_result = p && q;   // and_result will be 0
    or_result = p || q;    // or_result will be 1
    not_result = !q;       // not_result will be 1

    $display("p && q: %b", and_result);
    $display("p || q: %b", or_result);
    $display("!q: %b", not_result);

    // Using a non-zero value
    $display("p && r: %b", p && r); // 1 && 1 -> 1
    $display("p || r: %b", p || r); // 1 || 1 -> 1
  end
endmodule
```

### 4. Bitwise Operators

These operators perform operations on individual bits of their operands. The operation is applied to each corresponding bit position.

| Operator | Description        | Example | Result |
| :------- | :----------------- | :------ | :----- |
| `~`      | Bitwise NOT        | `~a`    | Inverts each bit of `a` |
| `&`      | Bitwise AND        | `a & b` | Performs AND on each corresponding bit of `a` and `b` |
| `|`      | Bitwise OR         | `a | b` | Performs OR on each corresponding bit of `a` and `b` |
| `^`      | Bitwise XOR        | `a ^ b` | Performs XOR on each corresponding bit of `a` and `b` |
| `~^` or `^~` | Bitwise XNOR | `a ~^ b` | Performs XNOR on each corresponding bit of `a` and `b` |

**Example:**

```verilog
module bitwise_ops;
  reg [3:0] A = 4'b1011;
  reg [3:0] B = 4'b0110;
  reg [3:0] C;

  initial begin
    C = ~A; // C will be 4'b0100
    $display("~A: %b", C);

    C = A & B; // C will be 4'b0010
    $display("A & B: %b", C);

    C = A | B; // C will be 4'b1111
    $display("A | B: %b", C);

    C = A ^ B; // C will be 4'b1101
    $display("A ^ B: %b", C);

    C = A ~^ B; // C will be 4'b0010 (XNOR of A and B)
    $display("A ~^ B: %b", C);
  end
endmodule
```

### 5. Reduction Operators

These operators reduce a vector operand to a single bit by applying a bitwise operator recursively.

| Operator | Description         | Example |
| :------- | :------------------ | :------ |
| `&`      | Reduction AND       | `&A`    |
| `|`      | Reduction OR        | `|A`    |
| `^`      | Reduction XOR       | `^A`    |
| `~&`     | Reduction NAND      | `~&A`   |
| `~|`     | Reduction NOR       | `~|A`   |
| `~^`     | Reduction XNOR      | `~^A`   |

**Example:**

```verilog
module reduction_ops;
  reg [3:0] data = 4'b1010;
  reg and_res, or_res, xor_res;

  initial begin
    and_res = &data; // (1 & 0 & 1 & 0) -> 0
    $display("Reduction AND of data: %b", and_res);

    or_res = |data;  // (1 | 0 | 1 | 0) -> 1
    $display("Reduction OR of data: %b", or_res);

    xor_res = ^data; // (1 ^ 0 ^ 1 ^ 0) -> 0
    $display("Reduction XOR of data: %b", xor_res);
  end
endmodule
```

### 6. Concatenation Operators

These operators combine multiple operands into a single, wider vector.

| Operator | Description   | Example  |
| :------- | :------------ | :------- |
| `{}`     | Concatenate   | `{A, B}` |

**Example:**

```verilog
module concatenation_ops;
  reg [1:0] val1 = 2'b10;
  reg [3:0] val2 = 4'b0111;
  reg [5:0] combined;

  initial begin
    combined = {val1, val2}; // combined will be 6'b100111
    $display("Combined value: %b", combined);

    // Repeating a value
    combined = {3{val1}}; // {2'b10, 2'b10, 2'b10} -> 6'b101010
    $display("Repeated concatenation: %b", combined);
  end
endmodule
```

### 7. Assignment Operators

These are used to assign values to variables.

| Operator | Description             |
| :------- | :---------------------- |
| `=`      | Blocking assignment     |
| `<=`     | Non-blocking assignment |

These are crucial for modeling sequential and combinational logic and will be explored in more detail when discussing Verilog constructs like `always` blocks.

### 8. Conditional Operator (Ternary Operator)

This operator provides a concise way to assign a value based on a condition.

| Operator | Description       | Example   |
| :------- | :---------------- | :-------- |
| `?:`     | Conditional value | `condition ? value_if_true : value_if_false` |

**Example:**

```verilog
module conditional_op;
  reg enable = 1;
  reg [3:0] data_in = 4'b1100;
  reg [3:0] data_out;

  initial begin
    data_out = enable ? data_in : 4'b0000; // If enable is 1, data_out becomes data_in, else 0
    $display("Data out: %b", data_out);
  end
endmodule
```

### 9. Other Operators

*   **Shift Operators:** `<<` (left shift), `>>` (right shift), `<<<` (arithmetic left shift), `>>>` (arithmetic right shift).
*   **Replication Operator:** `{n{expression}}` repeats an expression `n` times for concatenation.

## Operator Precedence

When an expression contains multiple operators, Verilog follows a specific order of operations (precedence). For example, multiplication is performed before addition. It's good practice to use parentheses `()` to explicitly define the order of operations and improve code readability.

```verilog
// Without parentheses, * has higher precedence than +
result = a + b * c;

// With parentheses, addition is performed first
result = (a + b) * c;
```

Understanding these operators is fundamental to writing Verilog code that accurately describes hardware behavior and for creating effective testbenches to verify your designs.

## Supports

- [[skills/hardware-embedded/electronics-embedded/verilog-hdl-modeling/microskills/verilog-operators|Verilog Operators]]
