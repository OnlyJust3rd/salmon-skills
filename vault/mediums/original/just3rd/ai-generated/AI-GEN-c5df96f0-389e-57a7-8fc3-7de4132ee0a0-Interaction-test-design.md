---
type: "medium"
title: "Designing Interaction Tests for C Functions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/software-practices/program-testing/microskills/interaction-test-design|interaction-test-design]]"
learning-time-in-minutes: 5
---
# Designing Interaction Tests for C Functions

This lesson focuses on designing effective tests for how different parts of your C program communicate and work together, a crucial aspect of integration testing. We'll explore how to design tests that specifically examine data and control flow between functions.

## Understanding Interaction Testing

When you build a C program, you typically break it down into smaller, manageable functions. Each function has its own purpose, but they often need to exchange data and control execution flow among themselves. Integration tests aim to verify that these interactions happen correctly.

Interaction testing design means planning how you will create test cases to ensure that:

*   **Data flows correctly:** Data passed between functions is in the expected format and value.
*   **Control flow is managed properly:** Functions are called in the correct order, and decisions made by one function correctly influence the execution path of others.

## Key Concepts for Interaction Test Design

### 1. Data Flow Testing

This involves designing tests to trace data as it moves through your functions. You'll want to test:

*   **Input validation:** Does a function correctly handle valid and invalid data passed to it?
*   **Data transformation:** If a function modifies data, does it do so accurately?
*   **Data passing between functions:** When function A calls function B and passes data, does function B receive the correct data? Conversely, if function B returns data to function A, is it received correctly?

### 2. Control Flow Testing

This focuses on the sequence of execution and the decisions made by your functions. You'll want to test:

*   **Function call sequences:** Are functions called in the intended order?
*   **Conditional logic:** Do `if`, `else`, `switch` statements correctly direct program flow based on inputs?
*   **Looping constructs:** Do `for`, `while` loops execute the correct number of times and terminate properly?
*   **Return values and their impact:** How does the return value of one function affect the subsequent actions of the calling function or other parts of the program?

## Designing Your Interaction Tests: A Practical Approach

Let's consider a simple C program scenario: a program that calculates the area of a rectangle.

**Scenario:**

We have two functions:
1.  `getInput()`: Prompts the user for width and height, and returns these values.
2.  `calculateArea(width, height)`: Takes width and height as input, calculates the area, and returns it.
3.  `main()`: Calls `getInput()`, then calls `calculateArea()` with the obtained values, and finally prints the result.

**Functions (Conceptual):**

```c
// Function to get user input
// Returns width and height (though typically via pointers or structs in C for multiple returns)
// For simplicity, let's assume it returns a struct or uses pointers for now.
// Let's use a hypothetical struct for clarity in this example.
typedef struct {
    int width;
    int height;
} Dimensions;

Dimensions getInput();

// Function to calculate area
int calculateArea(int width, int height) {
    if (width <= 0 || height <= 0) {
        return -1; // Indicate an error
    }
    return width * height;
}

// main function would tie it all together
// int main() { ... }
```

### Step-by-Step Interaction Test Design

#### Step 1: Identify Interaction Points

Where do these functions "talk" to each other?

*   `main` calls `getInput()`.
*   `getInput()` provides width and height data to `main`.
*   `main` calls `calculateArea()` and passes width and height.
*   `calculateArea()` returns the calculated area to `main`.
*   `main` uses the returned area.

#### Step 2: Design Tests for Data Flow

**Test Case 1: Valid Input**

*   **Scenario:** User enters positive integers for width and height.
*   **Test Design:**
    *   **Mock `getInput()`:** We need a way to simulate `getInput()` returning specific values. For testing `calculateArea`, we can create a *stub* for `getInput()` that always returns `Dimensions{width = 10, height = 5}`.
    *   **Test `calculateArea()`:** Call `calculateArea(10, 5)`.
    *   **Expected Outcome:** The function should return `50`.
    *   **Verification:** Assert that the return value is `50`.

**Test Case 2: Invalid Input (Zero/Negative)**

*   **Scenario:** User enters a zero or negative value for width or height.
*   **Test Design:**
    *   **Mock `getInput()`:** Create a stub for `getInput()` that returns `Dimensions{width = -2, height = 10}`.
    *   **Test `calculateArea()`:** Call `calculateArea(-2, 10)`.
    *   **Expected Outcome:** The function should return `-1` (our error indicator).
    *   **Verification:** Assert that the return value is `-1`.

**Test Case 3: Data Flow Back to `main`**

*   **Scenario:** Verifying that `main` correctly receives and uses the result from `calculateArea`.
*   **Test Design:**
    *   **Mock `getInput()`:** Stub `getInput()` to return `Dimensions{width = 7, height = 3}`.
    *   **Mock `calculateArea()`:** Create a *stub* for `calculateArea()` that *always returns `21`*, regardless of input. This helps isolate and test the interaction logic in `main`.
    *   **Test `main()` (or a testable part of it):** Execute the part of `main` that calls `getInput()`, then `calculateArea()`, and then prepares to print.
    *   **Expected Outcome:** The value `21` should be available for printing.
    *   **Verification:** If `main` has a way to expose the final calculated value to a test framework, verify it's `21`.

#### Step 3: Design Tests for Control Flow

**Test Case 4: Correct Function Call Order (`main`)**

*   **Scenario:** Ensure `main` calls `getInput()` *before* `calculateArea()`.
*   **Test Design:** This is harder to test directly with simple unit tests in C without more advanced mocking frameworks or instrumenting the code. However, conceptually:
    *   **Test `main()`:** Execute `main`.
    *   **Expected Outcome:** The program should first attempt to get input, then perform calculations.
    *   **Verification:** Observe program behavior (e.g., prompts appear first). For automated testing, you'd rely on more sophisticated techniques to check call order.

**Test Case 5: Conditional Logic in `calculateArea`**

*   **Scenario:** Verifying the `if` condition correctly handles invalid dimensions.
*   **Test Design:** (This is already covered in Data Flow Test Case 2, but we emphasize the control flow aspect here).
    *   **Mock `getInput()`:** Stub `getInput()` to return `Dimensions{width = 0, height = 10}`.
    *   **Test `calculateArea()`:** Call `calculateArea(0, 10)`.
    *   **Expected Outcome:** The `if` condition (`width <= 0`) should evaluate to true. The function should *skip* the `return width * height;` statement and instead execute `return -1;`.
    *   **Verification:** Assert the return value is `-1`.

### Tools and Techniques

*   **Stubs:** Dummy functions that simulate the behavior of called functions. They are useful for isolating the function you are testing and controlling its inputs and outputs.
*   **Mocks:** Objects that not only simulate behavior but also record how they are called. They can be used to verify that specific functions were called with the correct arguments and in the correct order.
*   **Test Frameworks:** Libraries like Unity, CppUTest, or Google Test can significantly simplify the process of writing and running these tests. They provide assertion macros and test runners.

By systematically designing tests that focus on how data moves and how control is passed between your C functions, you build confidence that the integrated parts of your program work as a cohesive unit.

## Supports

- [[skills/computing/software-engineering/software-practices/program-testing/microskills/interaction-test-design|Interaction test design]]
