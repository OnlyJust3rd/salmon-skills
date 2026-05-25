---
type: "medium"
title: "Selecting Unit Test Approaches and Inputs in C"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/testing-quality/program-testing/microskills/test-automation-selection|test-automation-selection]]"
related-skills:
  - "[[skills/computing/software-engineering/testing-quality/program-testing/program-testing|program-testing]]"
learning-time-in-minutes: 4
---
# Selecting Unit Test Approaches and Inputs in C

When you're writing unit tests for your C programs, one of the first decisions you'll face is *how* to test a specific function or module. This isn't just about picking a testing framework; it's about selecting the right strategy for the test itself and then determining what data to feed into your code to effectively check its behavior. This skill is about making smart choices so your tests are both efficient and comprehensive.

## Understanding the Goal: Verifying Individual Units

Remember, unit testing focuses on the smallest testable parts of your program, typically functions or methods. The goal is to isolate these units and ensure they work correctly on their own, regardless of other parts of the system. This helps pinpoint bugs early and makes refactoring much safer.

## Choosing the Right Test Approach

For a given unit, you might consider a few common testing approaches. The best choice often depends on the complexity of the unit and what you're trying to verify.

### 1. Direct Input/Output Testing

This is the most straightforward approach. You provide specific inputs to a function and assert that the output matches the expected result.

**When to use:**
*   Functions with clear, deterministic inputs and outputs.
*   Mathematical calculations, data transformations, or simple logic.

**Example:**

Let's say you have a function `int add(int a, int b)` that adds two integers.

```c
// your_code.c
int add(int a, int b) {
    return a + b;
}
```

Your unit test would look something like this:

```c
// test_your_code.c
#include "your_code.h" // Assuming your_code.c is compiled with this header
#include <assert.h>

void test_add_positive_numbers() {
    int result = add(5, 3);
    assert(result == 8); // Assert that the result is indeed 8
}

void test_add_negative_numbers() {
    int result = add(-5, -3);
    assert(result == -8);
}

void test_add_mixed_numbers() {
    int result = add(5, -3);
    assert(result == 2);
}

int main() {
    test_add_positive_numbers();
    test_add_negative_numbers();
    test_add_mixed_numbers();
    return 0; // Indicate success
}
```

### 2. Mocking and Stubbing

When a function you're testing relies on other functions, external services, or complex dependencies, you might use mocking or stubbing.

*   **Stubbing:** Provides pre-programmed responses to function calls. It’s like giving the function a script to follow when it "calls" another part.
*   **Mocking:** Goes a step further. It not only provides programmed responses but also verifies that certain functions were called with expected arguments and in the expected order.

**When to use:**
*   When a function depends on external resources (databases, network calls).
*   When dependencies are complex or difficult to set up for testing.
*   To isolate the unit under test from its collaborators.

**Example (Conceptual, as C mocking can be verbose without a framework):**

Imagine a function `int process_user_data(int user_id)` that internally calls a `get_user_email(int id)` function. To test `process_user_data` in isolation, you'd want to "stub" `get_user_email` to return a fixed email address, rather than making a real database lookup.

```c
// Assume get_user_email is defined elsewhere and can be replaced/intercepted
// For simplicity, let's imagine we can globally set its behavior for the test.

// --- In your test setup ---
char* stubbed_email = "test@example.com";
// A mechanism to tell get_user_email to return stubbed_email when called in tests.

// --- Your function under test ---
// int process_user_data(int user_id) {
//     char* email = get_user_email(user_id);
//     // ... use email ...
//     return 1; // success
// }

// --- Your test case ---
void test_process_user_data_with_stubbed_email() {
    // Setup: Ensure get_user_email is stubbed to return "test@example.com"
    // ... (This part depends heavily on your mocking framework or custom setup)

    int result = process_user_data(123); // Call the function

    // Assertions on the behavior of process_user_data, NOT on get_user_email itself
    // For example, if process_user_data was supposed to check if email contains "@"
    assert(result == 1); // Assuming successful processing
    // You might also assert that a specific internal check passed based on the stubbed email
}
```

### 3. Boundary Value Analysis (BVA)

This is a technique for selecting input data that focuses on the "edges" or boundaries of input ranges. Bugs often occur at these boundaries.

**When to use:**
*   Functions that operate on numerical ranges, arrays, or strings with defined limits.

**Example:**

Consider a function `int is_valid_age(int age)` that checks if an age is between 0 and 120.

```c
// your_code.c
int is_valid_age(int age) {
    if (age >= 0 && age <= 120) {
        return 1; // Valid
    }
    return 0; // Invalid
}
```

Using BVA, you'd test:

*   **Just below a boundary:** `age = -1` (expected: invalid)
*   **At a boundary:** `age = 0` (expected: valid)
*   **At a boundary:** `age = 120` (expected: valid)
*   **Just above a boundary:** `age = 121` (expected: invalid)
*   **Typical valid values:** `age = 30` (expected: valid)
*   **Typical invalid values:** `age = -10`, `age = 200` (expected: invalid)

```c
// test_your_code.c
#include "your_code.h"
#include <assert.h>

void test_is_valid_age_boundaries() {
    assert(is_valid_age(-1) == 0);    // Below lower boundary
    assert(is_valid_age(0) == 1);     // At lower boundary
    assert(is_valid_age(120) == 1);   // At upper boundary
    assert(is_valid_age(121) == 0);   // Above upper boundary
    assert(is_valid_age(30) == 1);    // Typical valid
    assert(is_valid_age(-10) == 0);   // Typical invalid (too low)
    assert(is_valid_age(200) == 0);   // Typical invalid (too high)
}

int main() {
    test_is_valid_age_boundaries();
    return 0;
}
```

## Selecting Test Inputs

Once you've chosen an approach, the next crucial step is picking the *right* inputs.

### Equivalence Partitioning

This technique involves dividing input data into partitions from which test cases can be derived. You assume that all values within a partition will behave similarly.

**When to use:**
*   When dealing with input ranges or sets of possible values.

**Example:**

For the `is_valid_age` function again:

*   **Partition 1 (Invalid, too low):** Ages less than 0. Example input: `-5`.
*   **Partition 2 (Valid):** Ages from 0 to 120. Example input: `50`.
*   **Partition 3 (Invalid, too high):** Ages greater than 120. Example input: `150`.

You'd pick *one* representative from each partition to test. Combined with BVA, this gives you a strong set of tests.

### Error Guessing

This is more of an art than a science. Based on your experience and knowledge of common programming pitfalls, you can "guess" where errors might occur and create tests for those scenarios.

**Common error-prone areas:**
*   Empty inputs (e.g., empty strings, null pointers)
*   Maximum/minimum values
*   Zero values
*   Divisions by zero
*   Large inputs that might cause overflow
*   Special characters or malformed data

**Example:**

If you have a function that parses a date string, you might guess that inputs like `"31/02/2023"` (invalid day for February) or `"13/40/2023"` (invalid month and day) are good candidates for error-guessing tests.

## Putting It Together

Choosing the right test approach and inputs isn't a one-size-fits-all process. It requires understanding the unit you're testing, its dependencies, and potential failure points. By consciously selecting strategies like Direct I/O, Mocking, BVA, and Equivalence Partitioning, you can craft unit tests that are effective, efficient, and lead to more robust C programs.

## Supports

- [[skills/computing/software-engineering/testing-quality/program-testing/microskills/test-automation-selection|Test automation selection]]
