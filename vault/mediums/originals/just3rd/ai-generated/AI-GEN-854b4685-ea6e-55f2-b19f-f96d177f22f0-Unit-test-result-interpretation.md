---
type: "medium"
title: "Interpreting Unit Test Results"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/testing-quality/program-testing/microskills/unit-test-result-interpretation|unit-test-result-interpretation]]"
learning-time-in-minutes: 4
---
# Interpreting Unit Test Results

When you write unit tests for your C programs, the goal is to ensure that each small piece of code (a "unit") works as expected. But what happens when a test fails? This lesson focuses on how to **interpret unit test outcomes and diagnose failing units**. This is a critical step in applying unit testing effectively, allowing you to pinpoint and fix bugs early.

## Understanding Test Outcomes

Most unit testing frameworks in C will report the results of your tests in a clear, concise way. You'll typically see an indicator for whether a test passed or failed.

*   **Passed Tests:** These indicate that the actual output of your unit matched the expected output for the given input. Success!
*   **Failed Tests:** These mean there's a discrepancy. The actual output did not match the expected output. This is where the real diagnostic work begins.

### Common Outcome Indicators

You'll likely encounter symbols or messages like:

*   `.` (dot): Often signifies a passed test.
*   `F` or `X`: Commonly used for failed tests.
*   `E`: Can indicate an error during test execution (e.g., a crash, not just a failed assertion).
*   `OK`, `PASSED`, `FAILED`, `ERROR`: Textual descriptions that are even clearer.

## Diagnosing Failing Units

A failed unit test is a signal that something is wrong. Your job is to figure out *what* is wrong and *where*.

### The Anatomy of a Test Failure Report

When a test fails, the testing framework usually provides valuable information to help you debug. Look for:

1.  **Test Name/Identifier:** Which specific test case failed? This tells you which unit or functionality is under scrutiny.
2.  **File and Line Number:** Where in your test code did the failure occur? This points to the assertion that was not met.
3.  **Assertion Details:** What was the expected value, and what was the actual value returned by your code? This is the core of the problem.
4.  **Backtrace/Stack Trace (if available):** This shows the sequence of function calls that led to the failure, which can be helpful in complex scenarios.

### Practical Steps for Diagnosis

Let's say you're testing a function `calculate_sum(int a, int b)` which should return the sum of `a` and `b`.

**Example Test Code (Conceptual):**

```c
// In your test file (e.g., test_math_functions.c)
#include "unity.h" // Example testing framework header

void test_calculate_sum_positive_numbers() {
    TEST_ASSERT_EQUAL(5, calculate_sum(2, 3)); // Expecting 5 for 2 + 3
}

void test_calculate_sum_negative_numbers() {
    TEST_ASSERT_EQUAL(-5, calculate_sum(-2, -3)); // Expecting -5 for -2 + -3
}

void test_calculate_sum_mixed_numbers() {
    TEST_ASSERT_EQUAL(0, calculate_sum(-2, 2)); // Expecting 0 for -2 + 2
}
```

**Scenario: A Failing Test**

Suppose your `calculate_sum` function was accidentally implemented as:

```c
// In your source file (e.g., math_functions.c)
int calculate_sum(int a, int b) {
    return a - b; // Oops! Subtraction instead of addition!
}
```

When you run your tests, you might get output similar to this:

```
....................F.......
===============================================================================
FAIL: test_calculate_sum_positive_numbers Unit: test_math_functions.c Line: 10
-------------------------------------------------------------------------------
Expected: <5>
Actual: <-1>
```

**Interpreting This Failure:**

1.  **Indicator:** An `F` signifies a failure.
2.  **Test Name:** `test_calculate_sum_positive_numbers` tells you the specific scenario that failed.
3.  **Location:** `Unit: test_math_functions.c Line: 10` points to the exact line in your test file with the `TEST_ASSERT_EQUAL(5, calculate_sum(2, 3));` assertion.
4.  **Discrepancy:**
    *   **Expected: `<5>`**: The test was set up to expect the value `5`.
    *   **Actual: `<-1>`**: Your `calculate_sum(2, 3)` function returned `-1`.

**Diagnosis:**

You passed `2` and `3` to `calculate_sum`. The test expected `5`, but your function returned `-1`. This immediately tells you that your `calculate_sum` function is not performing addition correctly for these inputs. You would then go to your `math_functions.c` file and examine the `calculate_sum` implementation, easily spotting the `return a - b;` error and changing it to `return a + b;`.

### What If the Test Code Itself is Wrong?

Sometimes, the failure isn't in your *production code* but in your *test code*. This can happen if:

*   You've written the wrong expected value.
*   You've made a typo in the assertion.
*   The test logic itself is flawed.

If you've verified your production code and it seems correct, but the test still fails, scrutinize your test case. Could the expected value be wrong? Are you sure the logic of the test accurately reflects what the unit *should* do?

### Handling Different Types of Failures

*   **Assertion Failures:** The most common type. Your code returned a value different from what the assertion expected. As shown above, compare the `Expected` and `Actual` values.
*   **Runtime Errors/Crashes:** If a test causes your program to crash (segmentation fault, etc.), the framework might report an `ERROR` or `E`. This indicates a more serious issue, like a null pointer dereference or buffer overflow, in the unit being tested. You'll need to use debugging tools (like GDB) to examine the program's state when it crashes.
*   **Timeout Errors:** Some frameworks have a timeout for tests. If a test runs for too long, it might be flagged. This suggests an infinite loop or a very inefficient algorithm in the unit under test.

## Conclusion

Interpreting unit test results is an essential skill. By carefully reading the failure reports and comparing expected versus actual outcomes, you can efficiently identify and fix bugs. Don't be discouraged by failures; view them as valuable feedback that guides you toward more robust code.

## Supports

- [[skills/computing/software-engineering/testing-quality/program-testing/microskills/unit-test-result-interpretation|Unit test result interpretation]]
