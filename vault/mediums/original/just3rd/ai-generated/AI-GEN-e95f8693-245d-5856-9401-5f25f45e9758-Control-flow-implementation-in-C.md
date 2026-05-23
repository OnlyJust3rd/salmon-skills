---
type: medium
title: Control Flow Implementation in C
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[control-flow-implementation-in-c|control-flow-implementation-in-c]]"
learning-time-in-minutes: 2
---
# Control Flow Implementation in C

Control flow statements allow you to dictate the order in which your C program executes its instructions. This is crucial for making decisions, repeating actions, and building programs that can respond to different situations.

### Why Control Flow Matters

Without control flow, your C program would simply execute every line of code from top to bottom. This is rarely what you want. Control flow statements enable:

*   **Decision Making:** Executing different code blocks based on whether a condition is true or false.
*   **Repetition:** Running a block of code multiple times.
*   **Program Logic:** Creating complex behaviors and algorithms.

### Core Control Flow Statements in C

We'll focus on the fundamental control flow structures: `if-else`, `switch`, `for`, and `while`.

#### 1. `if-else` Statements

These are used for conditional execution.

```c
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

You can also have `else if` for multiple conditions.

```c
if (score >= 90) {
    printf("Grade: A\n");
} else if (score >= 80) {
    printf("Grade: B\n");
} else {
    printf("Grade: C or lower\n");
}
```

#### 2. `switch` Statements

`switch` is useful when you have a single variable and want to compare it against many possible constant values.

```c
switch (expression) {
    case constant_value_1:
        // Code to execute if expression == constant_value_1
        break; // Exits the switch statement
    case constant_value_2:
        // Code to execute if expression == constant_value_2
        break;
    default:
        // Code to execute if none of the cases match
}
```

#### 3. `for` Loops

`for` loops are ideal when you know exactly how many times you want to repeat a block of code.

```c
for (initialization; condition; increment/decrement) {
    // Code to execute repeatedly
}
```

**Example:** Printing numbers 1 to 5.

```c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i); // Output: 1 2 3 4 5
}
```

#### 4. `while` Loops

`while` loops are used when you want to repeat a block of code as long as a certain condition remains true. The number of repetitions might not be known beforehand.

```c
while (condition) {
    // Code to execute as long as the condition is true
}
```

**Example:** Counting down from 5.

```c
int count = 5;
while (count > 0) {
    printf("%d... ", count); // Output: 5... 4... 3... 2... 1...
    count--;
}
printf("Blastoff!\n");
```

### Practical Scenario

Imagine you're writing a program to calculate the cost of a purchase, applying different discounts based on the total amount.

**Task:** Implement a C program that:
1.  Takes an `itemPrice` (e.g., 120.50) and `quantity` (e.g., 3) as input.
2.  Calculates the `totalCost` (`itemPrice * quantity`).
3.  Applies a discount based on the `totalCost`:
    *   10% discount if `totalCost` is 200 or more.
    *   5% discount if `totalCost` is between 100 and 199.99.
    *   No discount otherwise.
4.  Prints the original `totalCost` and the final discounted price.

**Practice Task:**

Write the C code for the scenario described above. Use `if-else if-else` to handle the discount logic.

### Self-Check Questions

1.  When would you choose a `for` loop over a `while` loop?
2.  What is the purpose of the `break` statement in a `switch` statement?
3.  Write a simple `if` statement that checks if a variable `age` is greater than or equal to 18.
4.  How would you modify the `while` loop example to count *up* from 1 to 5 instead of down?

## Supports

- [[control-flow-implementation-in-c|Control flow implementation in C]]
