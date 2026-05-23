---
type: "medium"
title: "Planning Your C Unit Tests: From Function to Verification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/program-testing/microskills/unit-test-planning|unit-test-planning]]"
learning-time-in-minutes: 5
---
# Planning Your C Unit Tests: From Function to Verification

As part of **Program Testing**, we're focusing on **Unit Tests** to ensure individual pieces of our C code work correctly. This lesson is all about **Unit Test Planning**: learning how to strategically think about and design tests for specific functions and their behaviors *before* you write a single line of test code. This is a crucial step in the **Apply unit testing to verify individual units (functions/modules) of a C program** outcome.

## Why Plan Your Unit Tests?

Think of it like building something complex. You wouldn't just start hammering nails without a blueprint. Planning your unit tests helps you:

*   **Cover all scenarios:** Identify all possible inputs, edge cases, and error conditions a function might encounter.
*   **Define expected outcomes:** Clearly state what the function *should* do for each scenario.
*   **Write efficient tests:** Focus your testing efforts on what truly matters.
*   **Catch bugs early:** A good plan helps uncover potential issues during the design phase, saving you time later.

## The Core Idea: Test Cases

A unit test plan is essentially a collection of **test cases**. Each test case is a specific scenario designed to verify a particular aspect of a function's behavior. A well-defined test case typically includes:

1.  **Test Case Name/ID:** A unique identifier for easy reference.
2.  **Description:** What behavior or scenario this test case is verifying.
3.  **Preconditions:** Any state or setup required before the test can run.
4.  **Input:** The specific data or parameters passed to the function being tested.
5.  **Expected Output:** The known, correct result when the function is executed with the given input.
6.  **Postconditions:** Any state changes expected *after* the function executes (if applicable).

## Planning for a C Function: A Step-by-Step Approach

Let's walk through planning tests for a simple C function.

### Step 1: Understand the Function's Purpose and Requirements

Before you can test a function, you need to know exactly what it's supposed to do.

**Example Function:**

Consider a function that calculates the factorial of a non-negative integer.

```c
int calculate_factorial(int n) {
    if (n < 0) {
        return -1; // Indicate error for negative input
    }
    if (n == 0) {
        return 1;
    }
    int result = 1;
    for (int i = 1; i <= n; ++i) {
        result *= i;
    }
    return result;
}
```

**Understanding:**

*   Takes an integer `n`.
*   Returns its factorial if `n` is non-negative.
*   Returns `-1` if `n` is negative (error handling).
*   Factorial of 0 is 1.

### Step 2: Identify Inputs and Behaviors to Test

Brainstorm all the different kinds of inputs and scenarios the function might face. Think about:

*   **Typical/Normal Inputs:** Values that represent everyday use.
*   **Edge Cases:** Boundary values, minimum/maximum possible inputs, or values just at the transition points of different behaviors.
*   **Invalid/Error Inputs:** Values that should trigger error handling or exceptional conditions.
*   **Special Values:** Zero, negative numbers, very large numbers (consider integer overflow if applicable).

For `calculate_factorial(int n)`:

*   **Normal:** Positive integers like 1, 2, 5, 10.
*   **Edge Cases:**
    *   `n = 0` (base case for factorial).
    *   Very large `n` that might cause integer overflow (though we'll assume `int` is sufficient for this example's planning).
*   **Invalid/Error:** Negative integers like -1, -5.

### Step 3: Define Test Cases (The Plan)

Now, translate your identified inputs and behaviors into structured test cases.

| Test Case ID | Description                      | Preconditions | Input (`n`) | Expected Output | Postconditions |
| :----------- | :------------------------------- | :------------ | :---------- | :-------------- | :------------- |
| TC_FACT_001  | Test factorial of 0              | None          | 0           | 1               | None           |
| TC_FACT_002  | Test factorial of 1              | None          | 1           | 1               | None           |
| TC_FACT_003  | Test factorial of a small positive number (e.g., 5) | None          | 5           | 120             | None           |
| TC_FACT_004  | Test factorial of a larger positive number (e.g., 10) | None          | 10          | 3628800         | None           |
| TC_FACT_005  | Test handling of negative input (-1) | None          | -1          | -1              | None           |
| TC_FACT_006  | Test handling of another negative input (-10) | None          | -10         | -1              | None           |

**Explanation of Choices:**

*   We included `n=0` and `n=1` as they are common base cases or trivial calculations.
*   We picked a small positive number (5) and a moderately larger one (10) to see the calculation in action.
*   We explicitly tested negative inputs to ensure the error-handling path (`return -1;`) is covered.

### Step 4: Consider Dependencies and Mocking (If Applicable)

For more complex functions that call other functions, you might need to plan how to isolate the unit you're testing. This often involves "mocking" or "stubbing" the dependencies – creating simplified versions that return predictable results. For `calculate_factorial`, there are no external dependencies, so this step is skipped.

### Step 5: Document Your Plan

Your documented plan (like the table above) is your guide for writing the actual unit tests. It ensures you have a systematic approach.

## Planning for a Function with Side Effects

What if your function modifies global state, prints to the console, or interacts with files? Planning for these requires thinking about the *observable* outcomes.

**Example Function (Conceptual):**

```c
// Assume a global variable 'counter' exists
int increment_and_report(int value) {
    counter += value;
    printf("Counter is now: %d\n", counter);
    return counter;
}
```

**Planning for `increment_and_report`:**

| Test Case ID | Description                                       | Preconditions                                 | Input (`value`) | Expected `counter` (after call) | Expected `printf` output | Expected Return Value |
| :----------- | :------------------------------------------------ | :-------------------------------------------- | :-------------- | :------------------------------ | :----------------------- | :-------------------- |
| TC_INC_001   | Increment by a positive value from initial 0      | `counter = 0`                                 | 5               | 5                               | "Counter is now: 5\n"    | 5                     |
| TC_INC_002   | Increment by a negative value                     | `counter = 5`                                 | -3              | 2                               | "Counter is now: 2\n"    | 2                     |
| TC_INC_003   | Increment by zero                                 | `counter = 2`                                 | 0               | 2                               | "Counter is now: 2\n"    | 2                     |
| TC_INC_004   | Increment from a non-zero initial state           | `counter = 100`                               | 20              | 120                             | "Counter is now: 120\n"  | 120                   |

**Key Considerations for Side Effects:**

*   **State:** Carefully define the initial state of any global variables or external resources.
*   **Output:** Plan what output (console, file, etc.) you expect. In actual testing, you'd capture this output.
*   **Return Value:** Don't forget to check the function's return value as well.

## Key Takeaways for Planning

*   **Be exhaustive:** Think of as many scenarios as possible.
*   **Be precise:** Clearly define inputs and expected outputs.
*   **Document everything:** Your plan is your contract for testing.
*   **Focus on behavior:** What should the function *do*?

By meticulously planning your unit tests, you lay the groundwork for effective and robust verification of your C code, ensuring each function performs as intended.

## Supports

- [[skills/computing/software-engineering/software-practices/program-testing/microskills/unit-test-planning|Unit test planning]]
